import { useRef, useState } from 'react'
import { Sparkles, Paperclip, RotateCcw } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { FileAttachmentChip } from '../ai/FileAttachment'
import { AIResponse, proseAiStyles } from '../ai/AIResponse'
import { LoadingState } from '../ai/LoadingState'
import { ErrorState } from '../ai/ErrorState'
import { fileToAttachment, isAcceptedFile, MAX_ATTACHMENT_BYTES } from '../../services/ai/fileService'
import { streamChatResponse, AIAssistantError } from '../../services/ai/geminiService'
import { canSendMessage, recordMessageSent } from '../../services/ai/usageTracker'
import { buildDifferentialContext } from '../../services/ai/contextService'
import type { PendingAttachment } from '../../types/ai'
import type { DifferentialFindings, DifferentialResult } from '../../types/differential'

export function AIDifferentialPanel({
  findings,
  results,
}: {
  findings: DifferentialFindings
  results: DifferentialResult[] | null
}) {
  const [text, setText] = useState('')
  const [attachments, setAttachments] = useState<PendingAttachment[]>([])
  const [fileError, setFileError] = useState<string | null>(null)
  const [includeStructured, setIncludeStructured] = useState(true)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [response, setResponse] = useState('')
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const hasStructuredResults = results !== null && results.length > 0

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
    setAttachments(next)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleAnalyze() {
    const trimmed = text.trim()
    if (!trimmed && attachments.length === 0) return
    if (!canSendMessage()) {
      setError('The AI Assistant has reached its daily usage limit on this device. Please try again tomorrow.')
      return
    }

    setIsAnalyzing(true)
    setError(null)
    setResponse('')

    const context = includeStructured && hasStructuredResults ? buildDifferentialContext(findings, results!) : null
    const content =
      trimmed ||
      "Review the attached document(s) and generate a differential diagnosis, with findings that support and argue against each candidate."

    try {
      await streamChatResponse({
        mode: 'differential-diagnosis',
        messages: [{ role: 'user', content, attachments }],
        context,
        onChunk: setResponse,
      })
      recordMessageSent()
    } catch (err) {
      setError(
        err instanceof AIAssistantError
          ? err.message
          : 'Something went wrong analyzing this case. Please try again.',
      )
    } finally {
      setIsAnalyzing(false)
    }
  }

  function handleReset() {
    setText('')
    setAttachments([])
    setFileError(null)
    setResponse('')
    setError(null)
  }

  return (
    <Section
      title="AI-Assisted Differential (Gemini)"
      action={
        (response || error) && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <RotateCcw size={12} /> Clear
          </button>
        )
      }
    >
      <Card className="space-y-3">
        <p className="text-sm text-slate-500">
          Describe the case in your own words, or upload a document (exam form, referral letter, chart note) and
          let Gemini independently reason through a differential.
        </p>

        {hasStructuredResults && (
          <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
            <input
              type="checkbox"
              checked={includeStructured}
              onChange={(e) => setIncludeStructured(e.target.checked)}
              className="rounded border-slate-300"
            />
            Also give it the findings and results entered below
          </label>
        )}

        {(attachments.length > 0 || fileError) && (
          <div className="space-y-1.5">
            {attachments.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {attachments.map((a) => (
                  <FileAttachmentChip
                    key={a.id}
                    attachment={a}
                    onRemove={() => setAttachments(attachments.filter((x) => x.id !== a.id))}
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
            disabled={isAnalyzing}
            className="shrink-0 p-2.5 rounded-lg border border-slate-300 text-slate-500 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
            aria-label="Attach document"
          >
            <Paperclip size={17} />
          </button>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. 62-year-old with gradual painless vision loss OU, worse at night, family history of similar..."
            rows={2}
            disabled={isAnalyzing}
            className="flex-1 resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:bg-slate-50 max-h-40"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">
            Do not upload identifiable patient information — remove names, DOB, MRNs, and other PHI first.
          </p>
          <Button
            size="sm"
            icon={<Sparkles size={14} />}
            onClick={handleAnalyze}
            disabled={isAnalyzing || (!text.trim() && attachments.length === 0)}
          >
            {isAnalyzing ? 'Analyzing…' : 'Analyze with AI'}
          </Button>
        </div>

        {isAnalyzing && !response && <LoadingState />}
        {error && <ErrorState message={error} onRetry={handleAnalyze} />}
        {response && (
          <div className="pt-2 border-t border-slate-100">
            <AIResponse content={response} />
          </div>
        )}
      </Card>
      <style>{proseAiStyles}</style>
    </Section>
  )
}
