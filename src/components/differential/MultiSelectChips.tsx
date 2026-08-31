import { useState } from 'react'
import clsx from 'clsx'
import type { VocabTerm } from '../../config/differentialVocab'

export function MultiSelectChips({
  options,
  selected,
  onChange,
  otherValue,
  onOtherChange,
  otherPlaceholder = 'Describe the finding...',
  details,
  onDetailChange,
  detailPlaceholder = 'Value or description...',
}: {
  options: VocabTerm[]
  selected: string[]
  onChange: (next: string[]) => void
  otherValue?: string
  onOtherChange?: (next: string) => void
  otherPlaceholder?: string
  /** When provided, each selected chip gets its own inline text box (keyed by label) so the user
   * can record the actual value/description for that finding, e.g. "Tear breakup time" -> "8 sec". */
  details?: Record<string, string>
  onDetailChange?: (label: string, value: string) => void
  detailPlaceholder?: string
}) {
  const [otherOpen, setOtherOpen] = useState(Boolean(otherValue?.trim()))

  function toggle(label: string) {
    if (selected.includes(label)) {
      onChange(selected.filter((s) => s !== label))
      onDetailChange?.(label, '')
    } else {
      onChange([...selected, label])
    }
  }

  const showOther = onOtherChange !== undefined

  function toggleOther() {
    if (!onOtherChange) return
    if (otherOpen) {
      onOtherChange('')
      setOtherOpen(false)
    } else {
      setOtherOpen(true)
    }
  }

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = selected.includes(opt.label)
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => toggle(opt.label)}
              className={clsx(
                'px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer',
                active
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-brand-300 hover:bg-brand-50/50',
              )}
            >
              {opt.label}
            </button>
          )
        })}
        {showOther && (
          <button
            type="button"
            onClick={toggleOther}
            className={clsx(
              'px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer border-dashed',
              otherOpen
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-slate-600 border-slate-300 hover:border-brand-300 hover:bg-brand-50/50',
            )}
          >
            Other
          </button>
        )}
      </div>
      {showOther && otherOpen && (
        <input
          type="text"
          className="input"
          value={otherValue ?? ''}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder={otherPlaceholder}
          autoFocus
        />
      )}
      {onDetailChange && selected.length > 0 && (
        <div className="space-y-1.5 pt-0.5">
          {selected.map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-xs text-slate-500 shrink-0 w-40 truncate" title={label}>
                {label}
              </span>
              <input
                type="text"
                className="input"
                value={details?.[label] ?? ''}
                onChange={(e) => onDetailChange(label, e.target.value)}
                placeholder={detailPlaceholder}
                autoFocus
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
