import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ScanEye, ArrowRight, Library } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge, type BadgeTone } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getExamTechniqueById } from '../services/examTechniqueService'
import {
  DIAGNOSTIC_MODALITIES,
  getDiagnosticTestingTechniqueIds,
  groupByModality,
  type DiagnosticModality,
} from '../data/examTechniques/diagnosticTestingMap'
import type { ExamTechnique } from '../types/examTechnique'

const modalityColors: Record<DiagnosticModality, BadgeTone> = {
  'Ophthalmic Imaging': 'brand',
  'Visual Field Testing': 'warning',
  Electrophysiology: 'purple',
  'Color Vision & Contrast Sensitivity': 'info',
  'Anterior Segment Diagnostics': 'success',
  'Laboratory & Genetic Testing': 'danger',
}

export function DiagnosticTestingHub() {
  const [query, setQuery] = useState('')
  const [activeModalities, setActiveModalities] = useState<DiagnosticModality[]>([])

  const techniques = useMemo(
    () =>
      getDiagnosticTestingTechniqueIds()
        .map((id) => getExamTechniqueById(id))
        .filter((t): t is ExamTechnique => Boolean(t)),
    [],
  )

  function toggleModality(modality: DiagnosticModality) {
    setActiveModalities((prev) =>
      prev.includes(modality) ? prev.filter((m) => m !== modality) : [...prev, modality],
    )
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return techniques.filter((t) => {
      const matchesQuery = !q || [t.name, ...(t.aliases ?? [])].join(' ').toLowerCase().includes(q)
      return matchesQuery
    })
  }, [techniques, query])

  const grouped = useMemo(() => {
    const map = groupByModality(filtered)
    if (activeModalities.length === 0) return map
    for (const modality of DIAGNOSTIC_MODALITIES) {
      if (!activeModalities.includes(modality)) map.set(modality, [])
    }
    return map
  }, [filtered, activeModalities])

  const totalShown = Array.from(grouped.values()).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Diagnostic Testing &amp; Imaging
        </h1>
        <p className="text-slate-500 mt-1 max-w-2xl">
          Ophthalmic imaging, visual field testing, electrophysiology, and laboratory/genetic
          workups — what each test measures, normal vs. abnormal findings, and how to interpret
          results. Search by name (e.g. "OCTA", "ERG", "Humphrey") or browse by modality.
        </p>
      </div>

      <div className="space-y-3">
        <SearchInput
          placeholder="Search diagnostic tests and imaging modalities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xl"
        />
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveModalities([])}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              activeModalities.length === 0
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
          >
            All
          </button>
          {DIAGNOSTIC_MODALITIES.map((modality) => (
            <button
              key={modality}
              onClick={() => toggleModality(modality)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeModalities.includes(modality)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {modality}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
          <Library size={13} /> Normal Values &amp; Reference Tables
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { id: 'oct-normative-thickness', label: 'OCT Normative Thickness' },
            { id: 'visual-field-indices', label: 'Visual Field Indices Guide' },
            { id: 'electrophysiology-norms', label: 'ERG / EOG / VEP Norms' },
            { id: 'cornea-specular-topography-norms', label: 'Specular & Topography Norms' },
          ].map((ref) => (
            <Link key={ref.id} to={`/references/${ref.id}`}>
              <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-800">{ref.label}</span>
                <ArrowRight size={14} className="text-slate-300 shrink-0" />
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {totalShown === 0 ? (
        <EmptyState
          icon={ScanEye}
          title="No diagnostic tests found"
          description="Try a different search term or modality filter."
        />
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries())
            .filter(([, items]) => items.length > 0)
            .map(([modality, items]) => (
              <div key={modality}>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  {modality}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((technique) => (
                    <Link key={technique.id} to={`/diagnostic-testing/${technique.id}`}>
                      <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <Badge tone={modalityColors[modality]}>{technique.section}</Badge>
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
