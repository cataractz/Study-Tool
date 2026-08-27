import clsx from 'clsx'
import { Sparkles, User, Paperclip } from 'lucide-react'
import { AIResponse } from './AIResponse'
import { ErrorState } from './ErrorState'
import type { ChatMessage as ChatMessageType } from '../../types/ai'

export function ChatMessage({
  message,
  onRetry,
}: {
  message: ChatMessageType
  onRetry?: () => void
}) {
  const isUser = message.role === 'user'

  return (
    <div className={clsx('flex gap-3', isUser && 'flex-row-reverse')}>
      <div
        className={clsx(
          'w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5',
          isUser ? 'bg-slate-200 text-slate-600' : 'bg-brand-600 text-white',
        )}
      >
        {isUser ? <User size={14} /> : <Sparkles size={14} />}
      </div>
      <div className={clsx('max-w-[85%] sm:max-w-[75%] space-y-1.5', isUser && 'flex flex-col items-end')}>
        {message.attachments && message.attachments.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-end">
            {message.attachments.map((a, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-md px-2 py-1"
              >
                <Paperclip size={11} /> {a.name}
              </span>
            ))}
          </div>
        )}
        {message.isError ? (
          <ErrorState message={message.content} onRetry={onRetry} />
        ) : isUser ? (
          <div className="bg-brand-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3">
            <AIResponse content={message.content || '​'} />
          </div>
        )}
      </div>
    </div>
  )
}
