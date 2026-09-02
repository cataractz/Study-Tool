import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Stethoscope, ClipboardList } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge, urgencyTone, type BadgeTone } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getAllExamTechniques, getExamCategories } from '../services/examTechniqueService'
import { getAllClinicalWorkups } from '../services/clinicalWorkupService'
import type { ExamCategory, ExamTechnique } from '../types/examTechnique'

const SPECIAL_TESTS_FILTER = 'Special Tests'
const CLINICAL_WORKUPS_FILTER = 'Clinical Workups'

const categoryColors: Record<ExamCategory, BadgeTone> = {
  'Patient History & Preliminary Exam': 'default',
  'Anterior Segment': 'brand',
  'Posterior Segment': 'success',
  'Binocular Vision & Accommodation': 'info',
  'Neuro-Ophthalmology': 'warning',
  Pediatrics: 'purple',
  'Contact Lenses': 'info',
  'Diagnostic Imaging': 'purple',
  Orbit: 'danger',
}

export function ExamWorkupHub() {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const techniques = getAllExamTechniques()
  const workups = getAllClinicalWorkups()
  const categories = getExamCategories()
  const filterChips = [...categories, SPECIAL_TESTS_FILTER, CLINICAL_WORKUPS_FILTER]

  function toggleFilter(filter: string) {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const filteredTechniques = useMemo(() => {
    const q = query.trim().toLowerCase()
    return techniques.filter((t) => {
      const matchesFilter =
        activeFilters.length === 0 ||
        activeFilters.some((f) => f === t.category || (f === SPECIAL_TESTS_FILTER && t.isSpecialTest))
      const matchesQuery = !q || [t.name, ...(t.aliases ?? [])].join(' ').toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [techniques, query, activeFilters])

  const filteredWorkups = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matchesFilter = activeFilters.length === 0 || activeFilters.includes(CLINICAL_WORKUPS_FILTER)
    if (!matchesFilter) return []
    return workups.filter((w) => !q || [w.name, w.chiefComplaint].join(' ').toLowerCase().includes(q))
  }, [workups, query, activeFilters])

  const groupedTechniques = useMemo(() => {
    const map = new Map<string, ExamTechnique[]>()
    for (const t of filteredTechniques) {
      const arr = map.get(t.category) ?? []
      arr.push(t)
      map.set(t.category, arr)
    }
    return map
  }, [filteredTechniques])

  const hasResults = filteredTechniques.length > 0 || filteredWorkups.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Clinical Examination &amp; Workup
        </h1>
        <p className="text-slate-500 mt-1 max-w-2xl">
          Examination techniques, diagnostic tests, and condition-based clinical workups — search
          by name (e.g. "scleral depression", "Van Herick", "MEM") or browse by category.
        </p>
      </div>

      <div className="space-y-3">
        <SearchInput
          placeholder="Search techniques, tests, and workups..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xl"
        />
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveFilters([])}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              activeFilters.length === 0
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
          >
            All
          </button>
          {filterChips.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeFilters.includes(filter)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {!hasResults ? (
        <EmptyState
          icon={Stethoscope}
          title="No techniques or workups found"
          description="Try a different search term or category filter."
        />
      ) : (
        <div className="space-y-8">
          {filteredWorkups.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Clinical Workups
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredWorkups.map((workup) => (
                  <Link key={workup.id} to={`/exam-workup/workup/${workup.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <Badge tone={urgencyTone(workup.urgency)}>{workup.urgency}</Badge>
                        <ChevronRight size={16} className="text-slate-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                        <ClipboardList size={13} className="text-slate-400 shrink-0" />
                        {workup.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {workup.chiefComplaint}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {Array.from(groupedTechniques.entries()).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((technique) => (
                  <Link key={technique.id} to={`/exam-workup/technique/${technique.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <Badge tone={categoryColors[technique.category]}>{technique.section}</Badge>
                        <ChevronRight size={16} className="text-slate-300" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{technique.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {technique.purpose}
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
