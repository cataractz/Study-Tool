import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Baby, Siren, Library, ClipboardList } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge, type BadgeTone } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getExamTechniqueById } from '../services/examTechniqueService'
import { getClinicalWorkupById } from '../services/clinicalWorkupService'
import { getEmergencyProtocolById } from '../services/emergencyProtocolService'
import { getReferenceById } from '../reference/registry'
import {
  PEDIATRIC_TECHNIQUE_CATEGORIES,
  PEDIATRIC_WORKUP_IDS,
  PEDIATRIC_MYOPIA_CONTROL_WORKUP_ID,
  PEDIATRIC_EMERGENCY_PROTOCOL_ID,
  PEDIATRIC_REFERENCE_IDS,
  getPediatricTechniqueIds,
  groupByPediatricCategory,
  getPediatricDiseases,
  type PediatricTechniqueCategory,
} from '../data/examTechniques/pediatricsMap'
import type { ExamTechnique } from '../types/examTechnique'

const categoryColors: Record<PediatricTechniqueCategory, BadgeTone> = {
  'Infant & Preverbal Assessment': 'brand',
  'Pediatric Visual Acuity Testing': 'info',
  'Strabismus & Alignment Screening': 'warning',
  'Refraction & Media Screening': 'success',
  'Binocular Vision & Special Populations': 'purple',
}

export function PediatricsHub() {
  const [query, setQuery] = useState('')

  const diseases = useMemo(() => getPediatricDiseases(), [])

  const techniques = useMemo(
    () =>
      getPediatricTechniqueIds()
        .map((id) => getExamTechniqueById(id))
        .filter((t): t is ExamTechnique => Boolean(t)),
    [],
  )

  const workups = useMemo(
    () => PEDIATRIC_WORKUP_IDS.map((id) => getClinicalWorkupById(id)).filter((w) => Boolean(w)),
    [],
  )

  const myopiaControlWorkup = useMemo(
    () => getClinicalWorkupById(PEDIATRIC_MYOPIA_CONTROL_WORKUP_ID),
    [],
  )

  const emergencyProtocol = useMemo(
    () => getEmergencyProtocolById(PEDIATRIC_EMERGENCY_PROTOCOL_ID),
    [],
  )

  const references = useMemo(
    () => PEDIATRIC_REFERENCE_IDS.map((id) => getReferenceById(id)).filter((r) => Boolean(r)),
    [],
  )

  const q = query.trim().toLowerCase()

  const filteredDiseases = useMemo(
    () => diseases.filter((d) => !q || [d.name, ...(d.aliases ?? [])].join(' ').toLowerCase().includes(q)),
    [diseases, q],
  )

  const filteredTechniques = useMemo(
    () => techniques.filter((t) => !q || [t.name, ...(t.aliases ?? [])].join(' ').toLowerCase().includes(q)),
    [techniques, q],
  )

  const groupedTechniques = useMemo(() => groupByPediatricCategory(filteredTechniques), [filteredTechniques])

  const filteredWorkups = useMemo(
    () => workups.filter((w) => !q || w!.name.toLowerCase().includes(q)),
    [workups, q],
  )

  const filteredReferences = useMemo(
    () => references.filter((r) => !q || r!.meta.name.toLowerCase().includes(q)),
    [references, q],
  )

  const totalShown =
    filteredDiseases.length +
    filteredTechniques.length +
    filteredWorkups.length +
    filteredReferences.length +
    (!q || emergencyProtocol?.name.toLowerCase().includes(q) ? 1 : 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Pediatrics</h1>
        <p className="text-slate-500 mt-1 max-w-2xl">
          A one-stop index of every pediatric diagnosis, exam technique, clinical workup, emergency
          protocol, and reference table already in the app — pediatric history through infant
          fixation and following, cycloplegic refraction, amblyopia/strabismus, binocular vision,
          myopia control, and leukocoria are all covered elsewhere in Disease Library and Clinical
          Exam &amp; Workups; this page gathers them in one place alongside content unique to
          Pediatrics.
        </p>
      </div>

      <SearchInput
        placeholder="Search pediatric diseases, techniques, workups, and references..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xl"
      />

      {totalShown === 0 ? (
        <EmptyState icon={Baby} title="No pediatric content found" description="Try a different search term." />
      ) : (
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Baby size={13} /> Diseases
            </h2>
            {filteredDiseases.length === 0 ? (
              <p className="text-sm text-slate-400">No matching diseases.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredDiseases.map((d) => (
                  <Link key={d.id} to={`/diseases/${d.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-800 truncate">{d.name}</span>
                      <ChevronRight size={16} className="text-slate-300 shrink-0" />
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <ClipboardList size={13} /> Exam Techniques
            </h2>
            <div className="space-y-6">
              {PEDIATRIC_TECHNIQUE_CATEGORIES.map((category) => {
                const items = groupedTechniques.get(category) ?? []
                if (items.length === 0) return null
                return (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {items.map((t) => (
                        <Link key={t.id} to={`/exam-workup/technique/${t.id}`}>
                          <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                              <Badge tone={categoryColors[category]}>{t.section}</Badge>
                              <ChevronRight size={16} className="text-slate-300" />
                            </div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-1">{t.name}</h4>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{t.purpose}</p>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {filteredWorkups.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <ClipboardList size={13} /> Clinical Workups
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredWorkups.map((w) => (
                  <Link key={w!.id} to={`/exam-workup/workup/${w!.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-800">{w!.name}</span>
                      <ArrowRight size={14} className="text-slate-300 shrink-0" />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {myopiaControlWorkup && (!q || myopiaControlWorkup.name.toLowerCase().includes(q)) && (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Myopia Control</h2>
              <Link to={`/exam-workup/workup/${myopiaControlWorkup.id}`}>
                <Card className="hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate-900">{myopiaControlWorkup.name}</span>
                    <span className="block text-xs text-slate-400">
                      Ortho-K, soft multifocal, and low-dose atropine candidacy — also linked from Contact Lenses
                    </span>
                  </span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            </div>
          )}

          {emergencyProtocol && (!q || emergencyProtocol.name.toLowerCase().includes(q)) && (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Siren size={13} /> Emergencies
              </h2>
              <Link to={`/emergency-care/${emergencyProtocol.id}`}>
                <Card className="hover:shadow-md hover:border-red-300 transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-800">{emergencyProtocol.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            </div>
          )}

          {filteredReferences.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Library size={13} /> Reference Tables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredReferences.map((r) => (
                  <Link key={r!.meta.id} to={`/references/${r!.meta.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-800">{r!.meta.name}</span>
                      <ArrowRight size={14} className="text-slate-300 shrink-0" />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
