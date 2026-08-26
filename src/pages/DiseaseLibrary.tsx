import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, BookOpen } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getAllDiseases, getDiseaseCategories } from '../services/diseaseService'
import type { Disease } from '../types/disease'

const categoryColors: Record<Disease['category'], string> = {
  Cornea: 'brand',
  Glaucoma: 'purple',
  Retina: 'success',
  'Neuro-Ophthalmology': 'warning',
  'Anterior Segment': 'info',
  'Eyelid & Adnexa': 'default',
  'Orbit & Lacrimal': 'danger',
  'Pediatric & Binocular Vision': 'success',
}

export function DiseaseLibrary() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const diseases = getAllDiseases()
  const categories = ['All', ...getDiseaseCategories()]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return diseases.filter((d) => {
      const matchesCategory = activeCategory === 'All' || d.category === activeCategory
      const matchesQuery =
        !q ||
        [d.name, ...(d.aliases ?? [])].join(' ').toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [diseases, query, activeCategory])

  const grouped = useMemo(() => {
    const map = new Map<string, Disease[]>()
    for (const d of filtered) {
      const arr = map.get(d.category) ?? []
      arr.push(d)
      map.set(d.category, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Teach Me This Disease
        </h1>
        <p className="text-slate-500 mt-1">
          Search or browse the disease library to learn a condition from definition through
          management.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <SearchInput
          placeholder="Search diseases (e.g. keratoconus, uveitis)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="sm:max-w-sm"
        />
        <div className="flex gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No diseases found"
          description="Try a different search term or category filter."
        />
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((disease) => (
                  <Link key={disease.id} to={`/diseases/${disease.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <Badge tone={categoryColors[disease.category] as never}>
                          {disease.category}
                        </Badge>
                        <ChevronRight size={16} className="text-slate-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">
                        {disease.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {disease.definition}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
