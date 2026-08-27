import { useState } from 'react'
import clsx from 'clsx'
import { Plus, Trash2, Pencil, Check, X } from 'lucide-react'
import type { Conversation } from '../../types/ai'

function formatDate(ts: number): string {
  const date = new Date(ts)
  const now = new Date()
  const sameDay = date.toDateString() === now.toDateString()
  if (sameDay) return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  onNew,
  onDelete,
  onRename,
}: {
  conversations: Conversation[]
  activeId: string | null
  onSelect: (id: string) => void
  onNew: () => void
  onDelete: (id: string) => void
  onRename: (id: string, title: string) => void
}) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  function startRename(c: Conversation) {
    setEditingId(c.id)
    setEditValue(c.title)
  }

  function commitRename() {
    if (editingId) onRename(editingId, editValue)
    setEditingId(null)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-slate-200">
        <button
          onClick={onNew}
          className="w-full flex items-center justify-center gap-1.5 bg-brand-600 text-white text-sm font-medium rounded-lg px-3 py-2 hover:bg-brand-700 transition-colors cursor-pointer"
        >
          <Plus size={15} /> New Conversation
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {conversations.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 px-3">
            Your conversations will appear here.
          </p>
        )}
        {conversations.map((c) => (
          <div
            key={c.id}
            className={clsx(
              'group rounded-lg px-2.5 py-2 cursor-pointer',
              c.id === activeId ? 'bg-brand-50' : 'hover:bg-slate-100',
            )}
            onClick={() => editingId !== c.id && onSelect(c.id)}
          >
            {editingId === c.id ? (
              <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                <input
                  autoFocus
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitRename()
                    if (e.key === 'Escape') setEditingId(null)
                  }}
                  className="flex-1 min-w-0 text-sm border border-slate-300 rounded px-1.5 py-0.5"
                />
                <button onClick={commitRename} className="text-emerald-600 shrink-0 cursor-pointer">
                  <Check size={14} />
                </button>
                <button onClick={() => setEditingId(null)} className="text-slate-400 shrink-0 cursor-pointer">
                  <X size={14} />
                </button>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-1.5">
                <div className="min-w-0">
                  <p
                    className={clsx(
                      'text-sm truncate',
                      c.id === activeId ? 'text-brand-700 font-medium' : 'text-slate-700',
                    )}
                  >
                    {c.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{formatDate(c.updatedAt)}</p>
                </div>
                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 shrink-0 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      startRename(c)
                    }}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                    aria-label="Rename conversation"
                  >
                    <Pencil size={12} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onDelete(c.id)
                    }}
                    className="p-1 text-slate-400 hover:text-red-600 cursor-pointer"
                    aria-label="Delete conversation"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
