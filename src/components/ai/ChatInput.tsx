import { useRef, useState, type KeyboardEvent } from 'react'
import { Send, Paperclip, RotateCcw, FolderOpen } from 'lucide-react'
import { FileAttachmentChip } from './FileAttachment'
import { fileToAttachment, isAcceptedFile, MAX_ATTACHMENT_BYTES } from '../../services/ai/fileService'
import type { PendingAttachment } from '../../types/ai'

export function ChatInput({
  attachments,
  onAttachmentsChange,
  onSend,
  onNewConversation,
  onOpenLibrary,
  disabled,
  placeholder,
}: {
  attachments: PendingAttachment[]
  onAttachmentsChange: (attachments: PendingAttachment[]) => void
  onSend: (text: string, attachments: PendingAttachment[]) => void
  onNewConversation: () => void
  onOpenLibrary: () => void
  disabled: boolean
  placeholder: string
}) {
  const [text, setText] = useState('')
  const [fileError, setFileError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleSend() {
    const trimmed = text.trim()
    if (!trimmed && attachments.length === 0) return
    if (disabled) return
    onSend(trimmed, attachments)
    setText('')
    onAttachmentsChange([])
    setFileError(null)
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    setFileError(null)
    const next = [...attachments]
    for (const file of Array.from(files)) {
      if (!isAcceptedFile(file)) {
        setFileError(`"${file.name}" is not a supported file type (PDF, TXT, or image).`)
        continue
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        setFileError(`"${file.name}" is too large (max 4MB).`)
        continue
      }
      next.push(await fileToAttachment(file))
    }
    onAttachmentsChange(next)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="border-t border-slate-200 bg-white p-3 sm:p-4 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-slate-400">
          Do not upload identifiable patient information — remove names, DOB, MRNs, and other PHI before attaching clinical material.
        </p>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenLibrary}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <FolderOpen size={12} /> My Resources
          </button>
          <button
            onClick={onNewConversation}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <RotateCcw size={12} /> Clear
          </button>
        </div>
      </div>

      {(attachments.length > 0 || fileError) && (
        <div className="space-y-1.5">
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {attachments.map((a) => (
                <FileAttachmentChip
                  key={a.id}
                  attachment={a}
                  onRemove={() => onAttachmentsChange(attachments.filter((x) => x.id !== a.id))}
                />
              ))}
            </div>
          )}
          {fileError && <p className="text-xs text-red-600">{fileError}</p>}
        </div>
      )}

      <div className="flex items-end gap-2">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.txt,image/png,image/jpeg,image/webp,image/heic,image/heif"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="shrink-0 p-2.5 rounded-lg border border-slate-300 text-slate-500 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          aria-label="Attach file"
        >
          <Paperclip size={17} />
        </button>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            e.target.style.height = 'auto'
            e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          disabled={disabled}
          className="flex-1 resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:bg-slate-50 max-h-40"
        />
        <button
          onClick={handleSend}
          disabled={disabled || (!text.trim() && attachments.length === 0)}
          className="shrink-0 p-2.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Send message"
        >
          <Send size={17} />
        </button>
      </div>
    </div>
  )
}
