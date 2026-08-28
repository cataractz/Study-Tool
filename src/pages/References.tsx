import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Star, Clock, Library } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { referenceRegistry, searchReferences, getReferenceById } from '../reference/registry'
import { getFavorites, getRecents } from '../calculators/shared/storage'
import type { ReferenceMeta } from '../types/reference'

function ReferenceCard({ meta }: { meta: ReferenceMeta }) {
  return (
    <Link to={`/references/${meta.id}`}>
      <Card className="h-full hover:border-brand-300 hover:shadow-md transition-all space-y-2">
        <h3 className="text-sm font-semibold text-slate-900">{meta.name}</h3>
        <p className="text-xs text-slate-500 line-clamp-2">{meta.description}</p>
        <Badge tone="default">{meta.category}</Badge>
      </Card>
    </Link>
  )
}

export function References() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [recents, setRecents] = useState<string[]>([])

  useEffect(() => {
    setFavorites(getFavorites())
    setRecents(getRecents())
  }, [])

  const categories = useMemo(() => Array.from(new Set(referenceRegistry.map((r) => r.meta.category))), [])

  const results = useMemo(() => {
    let list = searchReferences(query)
    if (activeCategory) list = list.filter((r) => r.meta.category === activeCategory)
    return list
  }, [query, activeCategory])

  const favoriteEntries = favorites.map((id) => getReferenceById(id)).filter((r): r is NonNullable<typeof r> => Boolean(r))
  const recentEntries = recents.map((id) => getReferenceById(id)).filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white shrink-0">
            <Library size={18} />
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">References</h1>
        </div>
        <p className="text-slate-500 mt-2 max-w-3xl">
          Normative values, expected ranges, and clinical findings for exam tests — vergence ranges, stereoacuity,
          keratometry, corneal thickness, accommodation, IOP, and more — plus commonly used clinical rules of thumb,
          all in one place.
        </p>
      </div>

      <div className="relative max-w-xl">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search references — e.g. Donders, Morgan's norms, stereoacuity, IOP..."
          className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          aria-label="Search reference tables"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setActiveCategory(null)}
          className={
            'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
            (activeCategory === null ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
          }
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
              (activeCategory === cat ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {!query && !activeCategory && favoriteEntries.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mb-3">
            <Star size={14} className="text-amber-400 fill-amber-400" /> Favorites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {favoriteEntries.map((r) => (
              <ReferenceCard key={r.meta.id} meta={r.meta} />
            ))}
          </div>
        </section>
      )}

      {!query && !activeCategory && recentEntries.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mb-3">
            <Clock size={14} className="text-slate-400" /> Recently Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentEntries.map((r) => (
              <ReferenceCard key={r.meta.id} meta={r.meta} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold text-slate-700 mb-3">
          {query || activeCategory ? `${results.length} result${results.length === 1 ? '' : 's'}` : `All References (${referenceRegistry.length})`}
        </h2>
        {results.length === 0 ? (
          <Card className="text-center py-10">
            <p className="text-sm text-slate-500">No reference tables match "{query}". Try a different term or category.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {results.map((r) => (
              <ReferenceCard key={r.meta.id} meta={r.meta} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
