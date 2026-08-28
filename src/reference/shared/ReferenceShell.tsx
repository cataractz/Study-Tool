import { useEffect, useState, type ReactNode } from 'react'
import { Star } from 'lucide-react'
import { Badge } from '../../components/ui/Badge'
import { isFavorite, toggleFavorite, recordRecentlyUsed } from '../../calculators/shared/storage'
import type { ReferenceMeta } from '../../types/reference'

export function ReferenceShell({ meta, children }: { meta: ReferenceMeta; children: ReactNode }) {
  const [fav, setFav] = useState(false)

  useEffect(() => {
    recordRecentlyUsed(meta.id)
    setFav(isFavorite(meta.id))
  }, [meta.id])

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-xl font-semibold text-slate-900">{meta.name}</h1>
            <Badge tone="purple">Reference</Badge>
            <Badge tone="default">{meta.category}</Badge>
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
      {children}
    </div>
  )
}
