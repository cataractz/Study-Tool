import type { AIMode, ChatMessage, Conversation } from '../../types/ai'

const STORAGE_KEY = 'study-tool.ai.conversations.v1'
const MAX_TITLE_LENGTH = 48

function readAll(): Conversation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeAll(conversations: Conversation[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
  } catch {
    // localStorage unavailable or full — conversation history silently won't persist
  }
}

export function listConversations(): Conversation[] {
  return readAll().sort((a, b) => b.updatedAt - a.updatedAt)
}

export function getConversation(id: string): Conversation | undefined {
  return readAll().find((c) => c.id === id)
}

export function createConversation(mode: AIMode): Conversation {
  const now = Date.now()
  const conversation: Conversation = {
    id: crypto.randomUUID(),
    title: 'New Conversation',
    mode,
    messages: [],
    createdAt: now,
    updatedAt: now,
  }
  const all = readAll()
  all.push(conversation)
  writeAll(all)
  return conversation
}

export function saveConversation(conversation: Conversation): void {
  const all = readAll()
  const idx = all.findIndex((c) => c.id === conversation.id)
  if (idx >= 0) {
    all[idx] = conversation
  } else {
    all.push(conversation)
  }
  writeAll(all)
}

export function deleteConversation(id: string): void {
  writeAll(readAll().filter((c) => c.id !== id))
}

export function renameConversation(id: string, title: string): void {
  const all = readAll()
  const conversation = all.find((c) => c.id === id)
  if (!conversation) return
  conversation.title = title.trim() || conversation.title
  writeAll(all)
}

export function deriveTitle(messages: ChatMessage[]): string {
  const firstUserMessage = messages.find((m) => m.role === 'user')
  if (!firstUserMessage) return 'New Conversation'
  const text = firstUserMessage.content.trim().replace(/\s+/g, ' ')
  if (text.length <= MAX_TITLE_LENGTH) return text || 'New Conversation'
  return `${text.slice(0, MAX_TITLE_LENGTH)}...`
}
