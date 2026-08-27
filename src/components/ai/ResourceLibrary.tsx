import { useEffect, useRef, useState } from 'react'
import { X, Upload, Trash2, Pencil, Check, FileText, Image, Paperclip } from 'lucide-react'
import { listResources, saveResource, deleteResource } from '../../services/ai/resourceStore'
import { fileToAttachment, isAcceptedFile, formatFileSize, MAX_ATTACHMENT_BYTES } from '../../services/ai/fileService'
import { RESOURCE_CATEGORIES } from '../../types/ai'
import type { ClinicalResource, ResourceCategory, PendingAttachment } from '../../types/ai'

export function ResourceLibrary({
  open,
  onClose,
  onAttach,
}: {
  open: boolean
  onClose: () => void
  onAttach: (attachment: PendingAttachment) => void
}) {
  const [resources, setResources] = useState<ClinicalResource[]>([])
  const [categoryFilter, setCategoryFilter] = useState<ResourceCategory | 'All'>('All')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) refresh()
  }, [open])

  function refresh() {
    listResources().then(setResources)
  }

  async function handleFiles(files: FileList | null) {
    if (!files) return
    setError(null)
    for (const file of Array.from(files)) {
      if (!isAcceptedFile(file)) {
        setError(`"${file.name}" is not a supported file type (PDF, TXT, or image).`)
        continue
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        setError(`"${file.name}" is too large (max 4MB).`)
        continue
      }
      const attachment = await fileToAttachment(file)
      const resource: ClinicalResource = {
        id: attachment.id,
        name: attachment.name,
        mimeType: attachment.mimeType,
        size: attachment.size,
        category: 'Other',
        base64: attachment.base64,
        createdAt: Date.now(),
      }
      await saveResource(resource)
    }
    refresh()
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleDelete(id: string) {
    await deleteResource(id)
    refresh()
  }

  async function handleCategoryChange(resource: ClinicalResource, category: ResourceCategory) {
    await saveResource({ ...resource, category })
    refresh()
  }

  function startRename(resource: ClinicalResource) {
    setEditingId(resource.id)
    setEditValue(resource.name)
  }

  async function commitRename(resource: ClinicalResource) {
    if (editValue.trim()) {
      await saveResource({ ...resource, name: editValue.trim() })
      refresh()
    }
    setEditingId(null)
  }

  function handleAttach(resource: ClinicalResource) {
    onAttach({
      id: crypto.randomUUID(),
      name: resource.name,
      mimeType: resource.mimeType,
      size: resource.size,
      base64: resource.base64,
    })
    onClose()
  }

  if (!open) return null

  const filtered = categoryFilter === 'All' ? resources : resources.filter((r) => r.category === categoryFilter)

  return (
    <div className="absolute inset-0 z-30 flex items-start justify-end bg-black/30" onClick={onClose}>
      <div
        className="w-full sm:w-96 h-full bg-white border-l border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 shrink-0">
          <span className="text-sm font-semibold text-slate-800">My Clinical Resources</span>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <div className="p-3 border-b border-slate-200 space-y-2 shrink-0">
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
            className="w-full flex items-center justify-center gap-1.5 bg-brand-600 text-white text-sm font-medium rounded-lg px-3 py-2 hover:bg-brand-700 cursor-pointer"
          >
            <Upload size={14} /> Upload Resource
          </button>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as ResourceCategory | 'All')}
            className="w-full text-xs border border-slate-300 rounded-lg px-2 py-1.5 text-slate-600"
          >
            <option value="All">All categories</option>
            {RESOURCE_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
          {filtered.length === 0 && (
            <p className="text-xs text-slate-400 text-center py-8 px-3">
              {resources.length === 0
                ? 'Upload a document once and reuse it across conversations without re-attaching it each time.'
                : 'No resources in this category.'}
            </p>
          )}
          {filtered.map((resource) => {
            const Icon = resource.mimeType.startsWith('image/') ? Image : FileText
            return (
              <div key={resource.id} className="border border-slate-200 rounded-lg p-2.5 space-y-1.5">
                <div className="flex items-start gap-2">
                  <Icon size={14} className="text-slate-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    {editingId === resource.id ? (
                      <div className="flex items-center gap-1">
                        <input
                          autoFocus
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') commitRename(resource)
                            if (e.key === 'Escape') setEditingId(null)
                          }}
                          className="flex-1 min-w-0 text-xs border border-slate-300 rounded px-1.5 py-0.5"
                        />
                        <button onClick={() => commitRename(resource)} className="text-emerald-600 cursor-pointer">
                          <Check size={13} />
                        </button>
                      </div>
                    ) : (
                      <p className="text-xs font-medium text-slate-800 truncate">{resource.name}</p>
                    )}
                    <p className="text-[10px] text-slate-400">{formatFileSize(resource.size)}</p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <button
                      onClick={() => startRename(resource)}
                      className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                      aria-label="Rename"
                    >
                      <Pencil size={12} />
                    </button>
                    <button
                      onClick={() => handleDelete(resource.id)}
                      className="p-1 text-slate-400 hover:text-red-600 cursor-pointer"
                      aria-label="Delete"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <select
                    value={resource.category}
                    onChange={(e) => handleCategoryChange(resource, e.target.value as ResourceCategory)}
                    className="flex-1 min-w-0 text-[11px] border border-slate-200 rounded px-1.5 py-1 text-slate-500"
                  >
                    {RESOURCE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleAttach(resource)}
                    className="flex items-center gap-1 text-[11px] font-medium text-brand-600 hover:text-brand-700 border border-brand-200 rounded px-2 py-1 cursor-pointer shrink-0"
                  >
                    <Paperclip size={11} /> Attach
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
