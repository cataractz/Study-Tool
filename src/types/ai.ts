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

export type ResourceCategory =
  | 'Ocular Disease'
  | 'Pharmacology'
  | 'Optics'
  | 'Neuro-Ophthalmology'
  | 'Contact Lenses'
  | 'Clinical Procedures'
  | 'Class Lectures'
  | 'Board Preparation'
  | 'Other'

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  'Ocular Disease',
  'Pharmacology',
  'Optics',
  'Neuro-Ophthalmology',
  'Contact Lenses',
  'Clinical Procedures',
  'Class Lectures',
  'Board Preparation',
  'Other',
]

export interface ClinicalResource {
  id: string
  name: string
  mimeType: string
  size: number
  category: ResourceCategory
  base64: string
  createdAt: number
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
