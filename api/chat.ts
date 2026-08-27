import { getAIMode } from '../src/config/aiModes'
import type { AIContext, AIMode, ChatApiErrorPayload, ChatApiRequestMessage } from '../src/types/ai'

export const config = { runtime: 'edge' }

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'
const DEFAULT_MODEL = 'gemini-2.5-flash'
const MAX_OUTPUT_TOKENS = 4096
const MAX_MESSAGES = 60
const MAX_MESSAGE_CHARS = 12000
const MAX_ATTACHMENTS_PER_REQUEST = 5
const MAX_ATTACHMENT_BASE64_CHARS = 6_000_000 // ~4.5MB decoded, matches the client-side 4MB cap with headroom

function errorResponse(status: number, error: ChatApiErrorPayload['error'], message: string): Response {
  const payload: ChatApiErrorPayload = { error, message }
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

interface ChatRequestBody {
  mode?: AIMode
  messages?: ChatApiRequestMessage[]
  context?: AIContext | null
}

function validateBody(body: ChatRequestBody): string | null {
  if (!Array.isArray(body.messages) || body.messages.length === 0) return 'No messages provided.'
  if (body.messages.length > MAX_MESSAGES) return 'Conversation is too long for a single request.'
  for (const m of body.messages) {
    if (m.role !== 'user' && m.role !== 'assistant') return 'Invalid message role.'
    if (typeof m.content !== 'string' || m.content.length > MAX_MESSAGE_CHARS) {
      return 'A message exceeds the maximum allowed length.'
    }
    if (m.attachments) {
      if (m.attachments.length > MAX_ATTACHMENTS_PER_REQUEST) return 'Too many attachments on a single message.'
      for (const a of m.attachments) {
        if (typeof a.base64 !== 'string' || a.base64.length > MAX_ATTACHMENT_BASE64_CHARS) {
          return 'An attachment exceeds the maximum allowed size.'
        }
      }
    }
  }
  return null
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return errorResponse(405, 'invalid_request', 'Method not allowed.')
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return errorResponse(
      500,
      'not_configured',
      'The AI Assistant is not yet configured. Set GEMINI_API_KEY in the deployment environment.',
    )
  }

  let body: ChatRequestBody
  try {
    body = (await req.json()) as ChatRequestBody
  } catch {
    return errorResponse(400, 'invalid_request', 'Malformed request body.')
  }

  const validationError = validateBody(body)
  if (validationError) {
    return errorResponse(400, 'invalid_request', validationError)
  }

  const mode = getAIMode(body.mode ?? 'general')
  const messages = body.messages as ChatApiRequestMessage[]
  const context = body.context ?? null

  const systemInstructionText = context
    ? `${mode.systemInstruction}\n\n---\n\nThe following reference material was provided by the application from its own structured data (a disease or medication record, or another tool's output). Treat it as authoritative context for this conversation and cite it as "the provided reference" when you use it, while still drawing on your general knowledge where useful:\n\nSource: ${context.sourceLabel}\n${context.summary}`
    : mode.systemInstruction

  const contents = messages.map((m, i) => {
    const parts: Record<string, unknown>[] = []
    if (m.content) parts.push({ text: m.content })
    if (i === messages.length - 1 && m.attachments) {
      for (const a of m.attachments) {
        parts.push({ inlineData: { mimeType: a.mimeType, data: a.base64 } })
      }
    }
    return { role: m.role === 'assistant' ? 'model' : 'user', parts }
  })

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL
  const geminiUrl = `${GEMINI_API_BASE}/${model}:streamGenerateContent?alt=sse`

  let geminiResponse: Response
  try {
    geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents,
        systemInstruction: { parts: [{ text: systemInstructionText }] },
        generationConfig: {
          maxOutputTokens: MAX_OUTPUT_TOKENS,
          temperature: 0.4,
        },
      }),
    })
  } catch (err) {
    console.error('[api/chat] fetch to Gemini failed', model, err)
    return errorResponse(502, 'server_error', 'Could not reach the AI service. Please try again.')
  }

  if (!geminiResponse.ok) {
    const errorBodyText = await geminiResponse.text().catch(() => '<unreadable>')
    console.error('[api/chat] Gemini returned an error', model, geminiResponse.status, errorBodyText)

    if (geminiResponse.status === 429) {
      return errorResponse(
        429,
        'quota',
        'The AI Assistant has reached its current usage limit. Please try again later.',
      )
    }
    if (geminiResponse.status === 400) {
      return errorResponse(400, 'invalid_request', 'That request could not be processed. Try rephrasing it.')
    }
    return errorResponse(502, 'server_error', 'The AI Assistant ran into a problem. Please try again.')
  }

  if (!geminiResponse.body) {
    return errorResponse(502, 'server_error', 'The AI Assistant returned an empty response.')
  }

  const reader = geminiResponse.body.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = ''
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })

          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed.startsWith('data:')) continue
            const jsonStr = trimmed.slice(5).trim()
            if (!jsonStr || jsonStr === '[DONE]') continue
            try {
              const parsed = JSON.parse(jsonStr)
              const text = parsed?.candidates?.[0]?.content?.parts
                ?.map((p: { text?: string }) => p.text ?? '')
                .join('')
              if (text) controller.enqueue(encoder.encode(text))
            } catch {
              // skip malformed SSE chunk
            }
          }
        }
      } catch {
        // stream broken mid-flight — end gracefully with whatever was already sent
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
