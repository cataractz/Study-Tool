export type AIMode =
  | 'general'
  | 'clinical-explanation'
  | 'clinical-reasoning'
  | 'differential-diagnosis'
  | 'pharmacology'
  | 'document-analysis'
  | 'knowledge-check'
  | 'clinical-case'
  | 'compare'

export interface PendingAttachment {
  id: string
  name: string
  mimeType: string
  size: number
  base64: string
}

export interface MessageAttachmentMeta {
  name: string
  mimeType: string
  size: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  attachments?: MessageAttachmentMeta[]
  createdAt: number
  isError?: boolean
}

export interface Conversation {
  id: string
  title: string
  mode: AIMode
  messages: ChatMessage[]
  createdAt: number
  updatedAt: number
}

export interface AIContext {
  sourceLabel: string
  summary: string
}

export interface ChatApiRequestMessage {
  role: 'user' | 'assistant'
  content: string
  attachments?: PendingAttachment[]
}

export interface ChatApiErrorPayload {
  error: 'quota' | 'invalid_request' | 'server_error' | 'not_configured'
  message: string
}
