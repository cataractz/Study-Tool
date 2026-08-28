import { useEffect, useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { Star, Info } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Badge, type BadgeTone } from '../../components/ui/Badge'
import { isFavorite, toggleFavorite } from './storage'
import type { CalculatorMeta } from '../../types/calculator'

function boardTone(relevance: CalculatorMeta['boardRelevance']): BadgeTone {
  switch (relevance) {
    case 'High':
      return 'brand'
    case 'Moderate':
      return 'info'
    case 'Clinical only':
      return 'purple'
    default:
      return 'default'
  }
}

export function CalculatorShell({
  meta,
  calculateContent,
  practiceContent,
  aboutExtra,
}: {
  meta: CalculatorMeta
  calculateContent: ReactNode
  practiceContent?: ReactNode
  /** Extra "About" content beyond formula/keywords, e.g. variable definitions. */
  aboutExtra?: ReactNode
}) {
  const [mode, setMode] = useState<'calculate' | 'practice'>('calculate')
  const [fav, setFav] = useState(false)

  useEffect(() => {
    setFav(isFavorite(meta.id))
  }, [meta.id])

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-xl font-semibold text-slate-900">{meta.name}</h1>
            <Badge tone="default">{meta.category}</Badge>
            <Badge tone={boardTone(meta.boardRelevance)}>{meta.boardRelevance} board relevance</Badge>
          </div>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">{meta.description}</p>
        </div>
        <button
          onClick={() => setFav(toggleFavorite(meta.id).includes(meta.id))}
          aria-label={fav ? `Remove ${meta.name} from favorites` : `Add ${meta.name} to favorites`}
          aria-pressed={fav}
          className="shrink-0 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <Star size={18} className={fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
        </button>
      </div>

      <Card className="bg-slate-50 border-slate-200">
        <p className="text-xs font-medium text-slate-500 mb-1">Formula</p>
        <p className="font-mono text-sm text-slate-800">{meta.formula}</p>
        {meta.convention && <p className="text-xs text-slate-500 mt-2">Sign convention: {meta.convention}</p>}
      </Card>

      {practiceContent && (
        <div role="tablist" aria-label="Calculator mode" className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-white">
          <button
            role="tab"
            aria-selected={mode === 'calculate'}
            onClick={() => setMode('calculate')}
            className={clsx(
              'px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500',
              mode === 'calculate' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100',
            )}
          >
            Calculate
          </button>
          <button
            role="tab"
            aria-selected={mode === 'practice'}
            onClick={() => setMode('practice')}
            className={clsx(
              'px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500',
              mode === 'practice' ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100',
            )}
          >
            Practice
          </button>
        </div>
      )}

      {mode === 'calculate' || !practiceContent ? calculateContent : practiceContent}

      <details className="group rounded-lg border border-slate-200 bg-white open:pb-4">
        <summary className="cursor-pointer select-none list-none text-sm font-medium text-slate-600 flex items-center gap-1.5 px-4 py-3">
          <Info size={14} className="text-slate-400" /> About this calculation
        </summary>
        <div className="px-4 text-sm text-slate-600 space-y-2">
          <p>
            <span className="font-medium text-slate-700">Used for: </span>
            {meta.clinicalRelevance}
          </p>
          <p>
            <span className="font-medium text-slate-700">Formula: </span>
            <span className="font-mono">{meta.formula}</span>
          </p>
          {aboutExtra}
          {meta.limitations && meta.limitations.length > 0 && (
            <div>
              <p className="font-medium text-slate-700">Assumptions &amp; limitations:</p>
              <ul className="list-disc pl-5 space-y-0.5 mt-1">
                {meta.limitations.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </details>
    </div>
  )
}
