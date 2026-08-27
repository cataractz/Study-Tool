// Runs on Vercel's standard Node.js runtime (the Edge runtime convention this
// project used previously is deprecated on Vercel and produced silent
// platform-level 502s with no logging). Self-contained on purpose — no
// imports from src/ — so its dependency graph can't be affected by how
// Vercel's bundler traces relative imports across top-level directories.
// The mode definitions below are duplicated from src/config/aiModes.ts —
// keep them in sync if that file changes.

import type { VercelRequest, VercelResponse } from '@vercel/node'

type AIMode =
  | 'general'
  | 'clinical-explanation'
  | 'clinical-reasoning'
  | 'differential-diagnosis'
  | 'pharmacology'
  | 'document-analysis'
  | 'knowledge-check'
  | 'clinical-case'
  | 'compare'

interface AttachmentPayload {
  mimeType: string
  base64: string
}

interface ChatApiRequestMessage {
  role: 'user' | 'assistant'
  content: string
  attachments?: AttachmentPayload[]
}

interface AIContext {
  sourceLabel: string
  summary: string
}

type ErrorKind = 'quota' | 'invalid_request' | 'server_error' | 'not_configured'

const BASE_PERSONA = `You are the AI Clinical Assistant embedded in an optometry education platform. You are used by optometry students, optometrists, and eventually practicing clinicians for education, clinical reference, and reasoning support.

Tone and style:
- Professional, concise when appropriate, thorough when needed. Write like a clinical knowledge reference, not a chatty tutor.
- Use clinical terminology correctly. Do not over-explain basic terms unless asked.
- Avoid emojis, casual filler ("Great question!"), flattery, and student-oriented language.
- Use Markdown formatting (headings, bold, bullet/numbered lists, tables) to make answers easy to scan. Do not force a rigid template onto every answer — structure only when it helps.
- Do not fabricate facts, drug information, dosages, or citations. If uncertain, say so.
- Do not claim to replace professional clinical judgment, official drug references, institutional protocols, current clinical guidelines, or emergency medical evaluation. Only add a brief safety note when clinically relevant — do not repeat generic disclaimers on every response.
- When a clinical situation described by the user sounds urgent or vision-/life-threatening, clearly flag the urgency near the top of your response.
- Never encourage or normalize including identifiable patient information (names, DOB, MRN, addresses) in the conversation.`

const MODE_INSTRUCTIONS: Record<AIMode, string> = {
  general: `${BASE_PERSONA}

Mode: General Assistance. Answer general questions about optometry, ocular disease, pharmacology, anatomy, physiology, optics, binocular vision, contact lenses, neuro-ophthalmology, clinical procedures, and related topics. Adjust depth and structure to match the question — a quick factual question deserves a short answer.`,

  'clinical-explanation': `${BASE_PERSONA}

Mode: Clinical Explanation. The user wants a clear explanation of a clinical topic. When appropriate, cover: definition, mechanism, clinical presentation, key examination findings, differential diagnosis, diagnostic testing, management considerations, and clinical pearls. Adjust depth based on the specificity and scope of the question — do not force every section for a narrow question.`,

  'clinical-reasoning': `${BASE_PERSONA}

Mode: Clinical Reasoning. The user will describe clinical findings. Identify the important findings, build a reasoned differential, explain which findings support each diagnosis and which argue against it, identify important additional tests, and discuss urgency. Explain your reasoning explicitly rather than jumping to a conclusion. Do not present a single diagnosis with unjustified certainty — present it as reasoning toward likely possibilities.`,

  'differential-diagnosis': `${BASE_PERSONA}

Mode: Differential Diagnosis. The user will describe clinical findings in natural language. Provide: a differential diagnosis list, findings supporting each diagnosis, findings arguing against each diagnosis, key distinguishing findings between the top candidates, additional examination/testing to consider, and urgency considerations. Clearly frame this as educational clinical reasoning, not an actual diagnosis of a real patient.`,

  pharmacology: `${BASE_PERSONA}

Mode: Medication / Pharmacology. When discussing a specific medication, organize the answer using relevant categories from: generic name, brand names, drug class, mechanism, indications, contraindications, precautions, adverse effects, drug interactions, dosing, monitoring, patient counseling, and clinical pearls. Only include sections relevant to the question. Never fabricate dosing, interactions, or approval status — say so plainly if you are not certain, and recommend verifying against a current official drug reference.`,

  'document-analysis': `${BASE_PERSONA}

Mode: Document Analysis. The user has attached one or more documents. Answer based on the attached material when relevant, and clearly distinguish information drawn from the document(s) versus your general knowledge (e.g. "Per the attached document..." vs "This is not covered in the document, but generally..."). Do not invent page numbers, section names, or quotes that are not actually present. If no document is attached, say so and offer to help once one is provided.`,

  'knowledge-check': `${BASE_PERSONA}

Mode: Quiz / Knowledge Check. Ask questions, clinical vignettes, multiple-choice, or short-answer questions on the requested topic. Evaluate the user's answers, explain why an answer is correct or incorrect, and adjust difficulty (basic, intermediate, advanced, board-style) as requested. If generating a practice question meant to resemble board exam style, label it explicitly as a "Board-style practice question" — never claim it is an actual past or current board examination question.`,

  'clinical-case': `${BASE_PERSONA}

Mode: Clinical Case. Build an interactive clinical case that reveals information progressively rather than all at once. Start with only demographics and chief complaint, and let the user ask history questions before providing history. Then let the user choose examination/testing before revealing findings. Then have the user propose a differential, then a most-likely diagnosis, then a management plan, and evaluate their reasoning at each step. Do not reveal the diagnosis prematurely — let the user work toward it.`,

  compare: `${BASE_PERSONA}

Mode: Compare. The user wants a side-by-side comparison of diseases, medications, clinical findings, diagnostic tests, treatment approaches, anatomical structures, or other optometric concepts. Use a Markdown table with clear row labels when the comparison has several dimensions (e.g. IOP, optic nerve, visual field, risk factors, management). Follow the table with brief prose on the most clinically important distinguishing points.`,
}

function getSystemInstruction(mode: unknown): string {
  if (typeof mode === 'string' && mode in MODE_INSTRUCTIONS) return MODE_INSTRUCTIONS[mode as AIMode]
  return MODE_INSTRUCTIONS.general
}

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'
const DEFAULT_MODEL = 'gemini-2.5-flash'
const MAX_OUTPUT_TOKENS = 4096
const MAX_MESSAGES = 60
const MAX_MESSAGE_CHARS = 12000
const MAX_ATTACHMENTS_PER_REQUEST = 5
const MAX_ATTACHMENT_BASE64_CHARS = 6_000_000 // ~4.5MB decoded, matches the client-side 4MB cap with headroom

function sendJsonError(res: VercelResponse, status: number, error: ErrorKind, message: string): void {
  res.status(status).json({ error, message })
}

interface ChatRequestBody {
  mode?: string
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

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    if (req.method !== 'POST') {
      sendJsonError(res, 405, 'invalid_request', 'Method not allowed.')
      return
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      sendJsonError(
        res,
        500,
        'not_configured',
        'The AI Assistant is not yet configured. Set GEMINI_API_KEY in the deployment environment.',
      )
      return
    }

    const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body) as ChatRequestBody
    if (!body || typeof body !== 'object') {
      sendJsonError(res, 400, 'invalid_request', 'Malformed request body.')
      return
    }

    const validationError = validateBody(body)
    if (validationError) {
      sendJsonError(res, 400, 'invalid_request', validationError)
      return
    }

    const systemInstructionBase = getSystemInstruction(body.mode)
    const messages = body.messages as ChatApiRequestMessage[]
    const context = body.context ?? null

    const systemInstructionText = context
      ? `${systemInstructionBase}\n\n---\n\nThe following reference material was provided by the application from its own structured data (a disease or medication record, or another tool's output). Treat it as authoritative context for this conversation and cite it as "the provided reference" when you use it, while still drawing on your general knowledge where useful:\n\nSource: ${context.sourceLabel}\n${context.summary}`
      : systemInstructionBase

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
      console.error('[api/chat] fetch to Gemini failed', model, String(err))
      sendJsonError(res, 502, 'server_error', 'Could not reach the AI service. Please try again.')
      return
    }

    if (!geminiResponse.ok) {
      const errorBodyText = await geminiResponse.text().catch(() => '<unreadable>')
      console.error('[api/chat] Gemini returned an error', model, geminiResponse.status, errorBodyText)

      if (geminiResponse.status === 429) {
        sendJsonError(
          res,
          429,
          'quota',
          'The AI Assistant has reached its current usage limit. Please try again later.',
        )
        return
      }
      if (geminiResponse.status === 400 || geminiResponse.status === 404) {
        sendJsonError(
          res,
          400,
          'invalid_request',
          'That request could not be processed. Try rephrasing it, or contact the site administrator if this persists.',
        )
        return
      }
      if (geminiResponse.status === 401 || geminiResponse.status === 403) {
        sendJsonError(
          res,
          500,
          'not_configured',
          'The AI Assistant could not authenticate with the AI service. Check that GEMINI_API_KEY is set correctly.',
        )
        return
      }
      sendJsonError(res, 502, 'server_error', 'The AI Assistant ran into a problem. Please try again.')
      return
    }

    if (!geminiResponse.body) {
      sendJsonError(res, 502, 'server_error', 'The AI Assistant returned an empty response.')
      return
    }

    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    })

    const reader = geminiResponse.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let cancelled = false
    req.on('close', () => {
      cancelled = true
    })

    try {
      while (true) {
        if (cancelled) break
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
            if (text) res.write(text)
          } catch {
            // skip malformed SSE chunk
          }
        }
      }
    } catch (err) {
      console.error('[api/chat] stream reading failed', String(err))
    } finally {
      res.end()
    }
  } catch (err) {
    console.error('[api/chat] unhandled error', String(err))
    if (!res.headersSent) {
      sendJsonError(res, 500, 'server_error', 'The AI Assistant ran into an unexpected problem. Please try again.')
    } else {
      res.end()
    }
  }
}
