import { type ReactNode, useState } from 'react'
import { Copy, Check, RotateCcw, AlertCircle } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import type { CalculationTrace } from '../../types/calculator'

export function NumberField({
  label,
  unit,
  value,
  onChange,
  placeholder,
  error,
  step,
}: {
  label: string
  unit?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  error?: string
  step?: string
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500 mb-1 block">
        {label}
        {unit && <span className="text-slate-400"> ({unit})</span>}
      </span>
      <input
        type="number"
        inputMode="decimal"
        step={step ?? 'any'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${label}-error` : undefined}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      />
      {error && (
        <span id={`${label}-error`} className="text-xs text-red-600 mt-1 block">
          {error}
        </span>
      )}
    </label>
  )
}

export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500 mb-1 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export function ResultStat({ label, value, tone = 'brand' }: { label: string; value: string; tone?: 'brand' | 'slate' }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className={tone === 'brand' ? 'text-xl font-semibold text-brand-600 mt-0.5' : 'text-xl font-semibold text-slate-800 mt-0.5'}>
        {value}
      </p>
    </div>
  )
}

export function StepsList({ steps }: { steps: string[] }) {
  if (steps.length === 0) return null
  return (
    <ol className="space-y-1.5 text-sm text-slate-700 list-decimal pl-5">
      {steps.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  )
}

/** Live step-by-step breakdown shown on the Calculate tab, built from the user's actual inputs. */
export function CalculationStepsCard({ trace }: { trace: CalculationTrace }) {
  return (
    <Card className="bg-slate-50 border-slate-200">
      <p className="text-xs font-medium text-slate-500 mb-2">Step-by-step</p>
      <p className="font-mono text-xs text-slate-500 mb-1">{trace.formula}</p>
      <p className="font-mono text-xs text-slate-600 mb-3">{trace.substitution}</p>
      <StepsList steps={trace.steps} />
      <p className="text-sm font-medium text-slate-800 mt-3 pt-3 border-t border-slate-200">{trace.finalAnswerText}</p>
    </Card>
  )
}

/** Inline validation/error message, for calculators that want a consistent look beyond NumberField's per-field error. */
export function ErrorText({ message }: { message: string }) {
  return (
    <p className="flex items-center gap-1.5 text-sm text-red-600">
      <AlertCircle size={14} className="shrink-0" /> {message}
    </p>
  )
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
}

export function ResultActions({ copyText, onReset }: { copyText?: string; onReset: () => void }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!copyText) return
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard access denied — silently no-op, button simply won't show "Copied"
    }
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" icon={<RotateCcw size={14} />} onClick={onReset}>
        Reset
      </Button>
      {copyText && (
        <Button variant="outline" size="sm" icon={copied ? <Check size={14} /> : <Copy size={14} />} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy Result'}
        </Button>
      )}
    </div>
  )
}
