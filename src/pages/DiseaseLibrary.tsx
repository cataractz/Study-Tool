import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, BookOpen } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getAllDiseases, getDiseaseCategories } from '../services/diseaseService'
import { getDiseaseRegion, REGION_SUB_REGIONS, type DiseaseRegion } from '../data/diseases/regionMap'
import type { Disease } from '../types/disease'

const REGIONS: DiseaseRegion[] = ['Anterior Segment', 'Posterior Segment', 'Other']

const regionColors: Record<DiseaseRegion, string> = {
  'Anterior Segment': 'info',
  'Posterior Segment': 'success',
  Other: 'purple',
}

const categoryColors: Record<Disease['category'], string> = {
  Cornea: 'brand',
  Glaucoma: 'purple',
  Retina: 'success',
  'Neuro-Ophthalmology': 'warning',
  'Anterior Segment': 'info',
  'Eyelid & Adnexa': 'default',
  'Orbit & Lacrimal': 'danger',
  'Pediatric & Binocular Vision': 'success',
  'Ocular Trauma': 'danger',
  'Systemic Health - Endocrine': 'warning',
  'Systemic Health - Cardiovascular': 'danger',
  'Systemic Health - Pulmonary': 'info',
  'Systemic Health - Rheumatologic & Autoimmune': 'purple',
  'Systemic Health - Musculoskeletal': 'default',
  'Systemic Health - Gastrointestinal & Hepatic': 'success',
  'Systemic Health - Renal': 'brand',
  'Systemic Health - Hematologic & Oncologic': 'danger',
  'Systemic Health - Neurologic': 'purple',
  'Systemic Health - Infectious Disease': 'warning',
  'Systemic Health - Dermatologic': 'info',
  'Systemic Health - Genetic & Chromosomal': 'success',
  'Systemic Health - Nutritional': 'default',
}

type FilterMode = 'category' | 'region'

export function DiseaseLibrary() {
  const [query, setQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const [filterMode, setFilterMode] = useState<FilterMode>('category')
  const [activeRegion, setActiveRegion] = useState<DiseaseRegion | null>(null)
  const [activeSubRegions, setActiveSubRegions] = useState<string[]>([])

  const diseases = getAllDiseases()
  const categories = getDiseaseCategories()

  function toggleCategory(cat: string) {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    )
  }

  function selectRegion(region: DiseaseRegion | null) {
    setActiveRegion(region)
    setActiveSubRegions([])
  }

  function toggleSubRegion(sub: string) {
    setActiveSubRegions((prev) => (prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]))
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return diseases.filter((d) => {
      const matchesQuery = !q || [d.name, ...(d.aliases ?? [])].join(' ').toLowerCase().includes(q)
      if (!matchesQuery) return false

      if (filterMode === 'category') {
        return activeCategories.length === 0 || activeCategories.includes(d.category)
      }

      const { region, subRegion } = getDiseaseRegion(d)
      if (activeRegion && region !== activeRegion) return false
      if (activeSubRegions.length > 0 && !activeSubRegions.includes(subRegion)) return false
      return true
    })
  }, [diseases, query, activeCategories, filterMode, activeRegion, activeSubRegions])

  const grouped = useMemo(() => {
    const map = new Map<string, Disease[]>()
    for (const d of filtered) {
      const key = filterMode === 'category' ? d.category : getDiseaseRegion(d).subRegion
      const arr = map.get(key) ?? []
      arr.push(d)
      map.set(key, arr)
    }
    return map
  }, [filtered, filterMode])

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

      <div className="space-y-3">
        <SearchInput
          placeholder="Search diseases (e.g. keratoconus, uveitis)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xl"
        />

        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-medium">Filter by:</span>
          {(['category', 'region'] as FilterMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode)}
              className={`px-2.5 py-1 rounded-md font-medium border transition-colors cursor-pointer ${
                filterMode === mode
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {mode === 'category' ? 'Category' : 'Body Region'}
            </button>
          ))}
        </div>

        {filterMode === 'category' ? (
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveCategories([])}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeCategories.length === 0
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                  activeCategories.includes(cat)
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-1.5 flex-wrap">
              <button
                onClick={() => selectRegion(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                  activeRegion === null
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                }`}
              >
                All Regions
              </button>
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => selectRegion(region)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                    activeRegion === region
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
            {activeRegion && (
              <div className="flex gap-1.5 flex-wrap pl-2 border-l-2 border-slate-200">
                {REGION_SUB_REGIONS[activeRegion].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => toggleSubRegion(sub)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                      activeSubRegions.includes(sub)
                        ? 'bg-slate-700 text-white border-slate-700'
                        : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No diseases found"
          description="Try a different search term or filter."
        />
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([groupKey, items]) => (
            <div key={groupKey}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {groupKey}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((disease) => {
                  const { region } = getDiseaseRegion(disease)
                  return (
                    <Link key={disease.id} to={`/diseases/${disease.id}`}>
                      <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <Badge tone={(filterMode === 'category' ? categoryColors[disease.category] : regionColors[region]) as never}>
                            {filterMode === 'category' ? disease.category : region}
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
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
