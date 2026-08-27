import type { PendingAttachment } from '../../types/ai'

// 4MB raw (~5.3MB once base64-encoded) — stays safely within typical serverless
// function request-body limits after the JSON/base64 overhead of the upload.
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024
export const ACCEPTED_MIME_TYPES = [
  'application/pdf',
  'text/plain',
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/heic',
  'image/heif',
]

export function isAcceptedFile(file: File): boolean {
  return ACCEPTED_MIME_TYPES.includes(file.type)
}

export async function fileToAttachment(file: File): Promise<PendingAttachment> {
  const base64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      // strip the "data:<mime>;base64," prefix — backend only needs raw base64
      const commaIndex = result.indexOf(',')
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result)
    }
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })

  return {
    id: crypto.randomUUID(),
    name: file.name,
    mimeType: file.type,
    size: file.size,
    base64,
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
