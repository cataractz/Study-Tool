import clsx from 'clsx'
import type { VocabTerm } from '../../config/differentialVocab'

export function MultiSelectChips({
  options,
  selected,
  onChange,
}: {
  options: VocabTerm[]
  selected: string[]
  onChange: (next: string[]) => void
}) {
  function toggle(label: string) {
    if (selected.includes(label)) {
      onChange(selected.filter((s) => s !== label))
    } else {
      onChange([...selected, label])
    }
  }

  return (
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
    </div>
  )
}
