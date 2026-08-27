import { useEffect, useRef, useState } from 'react'
import { Sparkles, Info } from 'lucide-react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { ModeSelector } from './ModeSelector'
import { SuggestedActions } from './SuggestedActions'
import { LoadingState } from './LoadingState'
import { ResourceLibrary } from './ResourceLibrary'
import { getAIMode } from '../../config/aiModes'
import { streamChatResponse, AIAssistantError } from '../../services/ai/geminiService'
import {
  createConversation,
  deriveTitle,
  getConversation,
  saveConversation,
} from '../../services/ai/conversationStore'
import { canSendMessage, getRemainingMessages, recordMessageSent } from '../../services/ai/usageTracker'
import type { AIContext, AIMode, ChatApiRequestMessage, ChatMessage as ChatMessageType, Conversation, PendingAttachment } from '../../types/ai'

export function AIChat({
  conversationId,
  initialMode,
  initialContext,
  onConversationChange,
}: {
  conversationId: string | null
  initialMode?: AIMode
  initialContext?: AIContext | null
  onConversationChange: (conversation: Conversation) => void
}) {
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [mode, setMode] = useState<AIMode>(initialMode ?? 'general')
  const [sending, setSending] = useState(false)
  const [pendingContext, setPendingContext] = useState<AIContext | null>(initialContext ?? null)
  const [pendingAttachments, setPendingAttachments] = useState<PendingAttachment[]>([])
  const [libraryOpen, setLibraryOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (conversationId) {
      const existing = getConversation(conversationId)
      if (existing) {
        setConversation(existing)
        setMode(existing.mode)
        return
      }
    }
    setConversation(null)
    if (initialMode) setMode(initialMode)
  }, [conversationId, initialMode])

  useEffect(() => {
    setPendingContext(initialContext ?? null)
  }, [initialContext])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [conversation?.messages.length, sending])

  function ensureConversation(): Conversation {
    if (conversation) return conversation
    const created = createConversation(mode)
    setConversation(created)
    onConversationChange(created)
    return created
  }

  // Streams an assistant response for the given conversation's current message history
  // (the conversation must already include the user message this is responding to).
  async function runAssistantTurn(
    base: Conversation,
    context: AIContext | null,
    attachmentsForLastMessage: PendingAttachment[],
  ) {
    setSending(true)
    const assistantId = crypto.randomUUID()
    const apiMessages: ChatApiRequestMessage[] = base.messages.map((m, i) => ({
      role: m.role,
      content: m.content,
      attachments: i === base.messages.length - 1 ? attachmentsForLastMessage : undefined,
    }))

    try {
      let streamed = ''
      await streamChatResponse({
        mode: base.mode,
        messages: apiMessages,
        context,
        onChunk: (textSoFar) => {
          streamed = textSoFar
          setConversation((prev) => {
            if (!prev || prev.id !== base.id) return prev
            const withoutStreaming = prev.messages.filter((m) => m.id !== assistantId)
            const streamingMessage: ChatMessageType = {
              id: assistantId,
              role: 'assistant',
              content: streamed,
              createdAt: Date.now(),
            }
            return { ...prev, messages: [...withoutStreaming, streamingMessage] }
          })
        },
      })

      const finalMessage: ChatMessageType = {
        id: assistantId,
        role: 'assistant',
        content: streamed,
        createdAt: Date.now(),
      }
      const finalConversation: Conversation = {
        ...base,
        messages: [...base.messages, finalMessage],
        updatedAt: Date.now(),
      }
      setConversation(finalConversation)
      saveConversation(finalConversation)
      onConversationChange(finalConversation)
      setPendingContext(null)
    } catch (err) {
      const message =
        err instanceof AIAssistantError
          ? err.message
          : 'The AI Assistant ran into a problem processing that request. Please try again.'
      const errorMessage: ChatMessageType = {
        id: assistantId,
        role: 'assistant',
        content: message,
        isError: true,
        createdAt: Date.now(),
      }
      const finalConversation: Conversation = {
        ...base,
        messages: [...base.messages, errorMessage],
        updatedAt: Date.now(),
      }
      setConversation(finalConversation)
      saveConversation(finalConversation)
      onConversationChange(finalConversation)
    } finally {
      setSending(false)
    }
  }

  async function handleSend(text: string, attachments: PendingAttachment[]) {
    if (!canSendMessage()) {
      const current = ensureConversation()
      const errMsg: ChatMessageType = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: 'The AI Assistant has reached its current daily usage limit. Please try again tomorrow.',
        isError: true,
        createdAt: Date.now(),
      }
      const updated = { ...current, messages: [...current.messages, errMsg], updatedAt: Date.now() }
      setConversation(updated)
      saveConversation(updated)
      onConversationChange(updated)
      return
    }

    const current = ensureConversation()
    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      attachments: attachments.map((a) => ({ name: a.name, mimeType: a.mimeType, size: a.size })),
      createdAt: Date.now(),
    }

    const withUser: Conversation = {
      ...current,
      mode,
      messages: [...current.messages, userMessage],
      updatedAt: Date.now(),
    }
    withUser.title = withUser.messages.length === 1 ? deriveTitle(withUser.messages) : withUser.title
    setConversation(withUser)
    saveConversation(withUser)
    onConversationChange(withUser)
    recordMessageSent()

    await runAssistantTurn(withUser, pendingContext, attachments)
  }

  function handleRetry() {
    if (!conversation || sending) return
    const withoutError = {
      ...conversation,
      messages: conversation.messages.filter((m) => !m.isError),
    }
    if (withoutError.messages.length === conversation.messages.length) return
    setConversation(withoutError)
    runAssistantTurn(withoutError, null, [])
  }

  const activeMode = getAIMode(mode)
  const messages = conversation?.messages ?? []
  const remaining = getRemainingMessages()

  return (
    <div className="relative flex flex-col h-full bg-slate-50">
      <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-slate-200 bg-white shrink-0">
        <ModeSelector value={mode} onChange={setMode} />
        {remaining <= 20 && (
          <span className="text-[11px] text-amber-600 flex items-center gap-1">
            <Info size={11} /> {remaining} messages left today
          </span>
        )}
      </div>

      {pendingContext && (
        <div className="mx-4 mt-3 flex items-start gap-2 bg-brand-50 border border-brand-200 rounded-lg px-3 py-2 text-xs text-brand-800 shrink-0">
          <Info size={13} className="shrink-0 mt-0.5" />
          <span>
            Context attached: <span className="font-medium">{pendingContext.sourceLabel}</span>. Your next
            message will include this as reference.
          </span>
        </div>
      )}

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        {messages.length === 0 ? (
          <div className="max-w-2xl mx-auto py-6 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center mx-auto">
                <Sparkles size={20} />
              </div>
              <h2 className="text-base font-semibold text-slate-900">{activeMode.label}</h2>
              <p className="text-sm text-slate-500">{activeMode.description}</p>
            </div>
            <SuggestedActions onSelect={setMode} />
          </div>
        ) : (
          messages.map((m) => (
            <ChatMessage key={m.id} message={m} onRetry={m.isError ? handleRetry : undefined} />
          ))
        )}
        {sending && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
              <Sparkles size={14} />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3">
              <LoadingState />
            </div>
          </div>
        )}
      </div>

      <ChatInput
        attachments={pendingAttachments}
        onAttachmentsChange={setPendingAttachments}
        onSend={handleSend}
        onNewConversation={() => {
          const created = createConversation(mode)
          setConversation(created)
          setPendingAttachments([])
          onConversationChange(created)
        }}
        onOpenLibrary={() => setLibraryOpen(true)}
        disabled={sending}
        placeholder={activeMode.placeholder}
      />

      <ResourceLibrary
        open={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        onAttach={(attachment) => setPendingAttachments((prev) => [...prev, attachment])}
      />
    </div>
  )
}
