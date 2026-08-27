import { FileText, Image, X } from 'lucide-react'
import { formatFileSize } from '../../services/ai/fileService'
import type { PendingAttachment } from '../../types/ai'

export function FileAttachmentChip({
  attachment,
  onRemove,
}: {
  attachment: PendingAttachment
  onRemove: () => void
}) {
  const Icon = attachment.mimeType.startsWith('image/') ? Image : FileText
  return (
    <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-lg pl-2.5 pr-1.5 py-1.5">
      <Icon size={14} className="text-slate-500 shrink-0" />
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-700 truncate max-w-[160px]">{attachment.name}</p>
        <p className="text-[10px] text-slate-400">{formatFileSize(attachment.size)}</p>
      </div>
      <button
        onClick={onRemove}
        className="p-0.5 text-slate-400 hover:text-red-600 cursor-pointer shrink-0"
        aria-label={`Remove ${attachment.name}`}
      >
        <X size={13} />
      </button>
    </div>
  )
}
