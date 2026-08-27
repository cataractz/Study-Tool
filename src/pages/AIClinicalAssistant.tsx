import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { History, X } from 'lucide-react'
import { AIChat } from '../components/ai/AIChat'
import { ConversationList } from '../components/ai/ConversationList'
import { proseAiStyles } from '../components/ai/AIResponse'
import {
  deleteConversation,
  listConversations,
  renameConversation,
} from '../services/ai/conversationStore'
import type { AIContext, AIMode, Conversation } from '../types/ai'

interface AINavigationState {
  context?: AIContext
  mode?: AIMode
}

export function AIClinicalAssistant() {
  const location = useLocation()
  const navState = (location.state ?? null) as AINavigationState | null

  const [conversations, setConversations] = useState<Conversation[]>(listConversations())
  const [activeId, setActiveId] = useState<string | null>(null)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [initialContext, setInitialContext] = useState<AIContext | null>(navState?.context ?? null)
  const [initialMode, setInitialMode] = useState<AIMode | undefined>(navState?.mode)

  useEffect(() => {
    if (navState?.context || navState?.mode) {
      setInitialContext(navState.context ?? null)
      setInitialMode(navState.mode)
      setActiveId(null)
      window.history.replaceState({}, '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function refreshConversations() {
    setConversations(listConversations())
  }

  function handleConversationChange(conversation: Conversation) {
    setActiveId(conversation.id)
    refreshConversations()
  }

  function handleSelect(id: string) {
    setActiveId(id)
    setInitialContext(null)
    setInitialMode(undefined)
    setHistoryOpen(false)
  }

  function handleNew() {
    setActiveId(null)
    setInitialContext(null)
    setInitialMode(undefined)
    setHistoryOpen(false)
  }

  function handleDelete(id: string) {
    deleteConversation(id)
    refreshConversations()
    if (activeId === id) setActiveId(null)
  }

  function handleRename(id: string, title: string) {
    renameConversation(id, title)
    refreshConversations()
  }

  return (
    <div
      className="flex flex-col h-full -mx-4 -my-6 lg:-mx-8 lg:-my-8 min-h-0"
      style={{ height: 'calc(100svh - 4rem)' }}
    >
      <style>{proseAiStyles}</style>
      <div className="flex items-center justify-between gap-3 px-4 lg:px-6 py-3 border-b border-slate-200 bg-white shrink-0">
        <div>
          <h1 className="text-base font-semibold text-slate-900 tracking-tight">AI Clinical Assistant</h1>
          <p className="text-xs text-slate-500 hidden sm:block">
            Intelligent assistance for optometry education, clinical reasoning, and reference.
          </p>
        </div>
        <button
          onClick={() => setHistoryOpen((o) => !o)}
          className="lg:hidden flex items-center gap-1.5 text-xs font-medium text-slate-600 border border-slate-300 rounded-lg px-2.5 py-1.5 cursor-pointer"
        >
          <History size={14} /> History
        </button>
      </div>

      <div className="flex-1 flex min-h-0 relative">
        <div className="hidden lg:block w-64 shrink-0 border-r border-slate-200 bg-white">
          <ConversationList
            conversations={conversations}
            activeId={activeId}
            onSelect={handleSelect}
            onNew={handleNew}
            onDelete={handleDelete}
            onRename={handleRename}
          />
        </div>

        {historyOpen && (
          <div className="lg:hidden absolute inset-0 z-20 flex">
            <div className="w-72 bg-white border-r border-slate-200 flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200">
                <span className="text-sm font-medium text-slate-700">Conversations</span>
                <button onClick={() => setHistoryOpen(false)} className="p-1 text-slate-400 cursor-pointer">
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 min-h-0">
                <ConversationList
                  conversations={conversations}
                  activeId={activeId}
                  onSelect={handleSelect}
                  onNew={handleNew}
                  onDelete={handleDelete}
                  onRename={handleRename}
                />
              </div>
            </div>
            <div className="flex-1 bg-black/30" onClick={() => setHistoryOpen(false)} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <AIChat
            conversationId={activeId}
            initialMode={initialMode}
            initialContext={initialContext}
            onConversationChange={handleConversationChange}
          />
        </div>
      </div>
    </div>
  )
}
