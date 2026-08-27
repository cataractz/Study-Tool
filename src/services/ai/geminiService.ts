import type { AIContext, AIMode, ChatApiErrorPayload, ChatApiRequestMessage } from '../../types/ai'

export class AIAssistantError extends Error {
  kind: ChatApiErrorPayload['error']
  constructor(kind: ChatApiErrorPayload['error'], message: string) {
    super(message)
    this.kind = kind
  }
}

const GENERIC_ERROR_MESSAGE =
  'The AI Assistant ran into a problem processing that request. Please try again.'

export async function streamChatResponse(params: {
  mode: AIMode
  messages: ChatApiRequestMessage[]
  context?: AIContext | null
  signal?: AbortSignal
  onChunk: (textSoFar: string) => void
}): Promise<string> {
  const { mode, messages, context, signal, onChunk } = params

  let response: Response
  try {
    response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode, messages, context: context ?? null }),
      signal,
    })
  } catch {
    throw new AIAssistantError(
      'server_error',
      'Could not reach the AI Assistant service. Check your connection and try again.',
    )
  }

  if (!response.ok || !response.body) {
    let payload: ChatApiErrorPayload | null = null
    try {
      payload = (await response.json()) as ChatApiErrorPayload
    } catch {
      // response body wasn't valid JSON — fall through to generic message
    }
    if (payload?.message) {
      throw new AIAssistantError(payload.error ?? 'server_error', payload.message)
    }
    if (response.status === 429) {
      throw new AIAssistantError(
        'quota',
        'The AI Assistant has reached its current usage limit. Please try again later.',
      )
    }
    throw new AIAssistantError('server_error', GENERIC_ERROR_MESSAGE)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let fullText = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    fullText += decoder.decode(value, { stream: true })
    onChunk(fullText)
  }

  return fullText
}
