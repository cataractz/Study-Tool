import { useRef, useState, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { aiModes } from '../../config/aiModes'
import type { AIMode } from '../../types/ai'

export function ModeSelector({ value, onChange }: { value: AIMode; onChange: (mode: AIMode) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = aiModes.find((m) => m.id === value) ?? aiModes[0]

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 hover:bg-slate-50 cursor-pointer"
      >
        {current.shortLabel}
        <ChevronDown size={13} className="text-slate-400" />
      </button>
      {open && (
        <div className="absolute z-30 mt-1.5 w-72 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
          {aiModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => {
                onChange(mode.id)
                setOpen(false)
              }}
              className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 flex items-start gap-2 cursor-pointer border-b border-slate-100 last:border-0"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800">{mode.label}</p>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{mode.description}</p>
              </div>
              {mode.id === value && <Check size={15} className="text-brand-600 shrink-0 mt-0.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
