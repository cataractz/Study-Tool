import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ClipboardList, Star, ArrowRight, AlertTriangle } from 'lucide-react'
import { Badge, urgencyTone } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { Linkify } from '../components/shared/Linkify'
import { getClinicalWorkupById } from '../services/clinicalWorkupService'
import { getDiseaseById } from '../services/diseaseService'
import { getExamTechniqueById } from '../services/examTechniqueService'
import { isExamWorkupFavorite, toggleExamWorkupFavorite } from '../services/examTechniqueFavorites'

export function ClinicalWorkupDetail() {
  const { workupId } = useParams<{ workupId: string }>()
  const workup = workupId ? getClinicalWorkupById(workupId) : undefined
  const [fav, setFav] = useState(false)

  useEffect(() => {
    if (workup) setFav(isExamWorkupFavorite(workup.id))
    window.scrollTo(0, 0)
  }, [workup])

  if (!workup) {
    return (
      <div className="space-y-4">
        <Link to="/exam-workup" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to Clinical Examination &amp; Workup
        </Link>
        <EmptyState icon={ClipboardList} title="Workup not found" description="This clinical workup isn't in the reference yet." />
      </div>
    )
  }

  const differentials = (workup.differentialDiagnosisIds ?? [])
    .map((id) => getDiseaseById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const ancillaryTests = (workup.ancillaryTestingIds ?? [])
    .map((id) => getExamTechniqueById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link to="/exam-workup" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          <ChevronLeft size={15} /> Back to Clinical Examination &amp; Workup
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge tone="purple">Clinical Workup</Badge>
              <Badge tone={urgencyTone(workup.urgency)}>{workup.urgency}</Badge>
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">{workup.name}</h1>
          </div>
          <button
            onClick={() => setFav(toggleExamWorkupFavorite(workup.id).includes(workup.id))}
            aria-label={fav ? `Remove ${workup.name} from favorites` : `Add ${workup.name} to favorites`}
            aria-pressed={fav}
            className="shrink-0 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Star size={18} className={fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
          </button>
        </div>
      </div>

      <Section title="Chief Complaint">
        <p className="text-sm text-slate-700 leading-relaxed">
          <Linkify text={workup.chiefComplaint} />
        </p>
      </Section>

      <Section title="Key History">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {workup.keyHistory.map((item, i) => <li key={i}><Linkify text={item} /></li>)}
          </ul>
        </Card>
      </Section>

      <Section title="Red Flags">
        <Card className="bg-red-50 border-red-200 flex gap-2.5">
          <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
          <ul className="text-sm text-red-900 space-y-1 list-disc pl-4">
            {workup.redFlags.map((item, i) => <li key={i}><Linkify text={item} /></li>)}
          </ul>
        </Card>
      </Section>

      <Section title="Initial Examination">
        <Card>
          <ol className="space-y-2">
            {workup.initialExamSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed"><Linkify text={step} /></span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      {differentials.length > 0 && (
        <Section title="Differential Diagnosis">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {differentials.map((d) => (
              <Link key={d.id} to={`/diseases/${d.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{d.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {ancillaryTests.length > 0 && (
        <Section title="Ancillary Testing">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ancillaryTests.map((t) => (
              <Link key={t.id} to={`/exam-workup/technique/${t.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{t.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section title="Most Likely Diagnoses">
        <Card className="bg-brand-50 border-brand-200">
          <p className="text-sm text-brand-900 leading-relaxed">
            <Linkify text={workup.mostLikelyDiagnoses} />
          </p>
        </Card>
      </Section>

      <Section title="Management / Referral Considerations">
        <Card>
          <p className="text-sm text-slate-700 leading-relaxed">
            <Linkify text={workup.managementConsiderations} />
          </p>
        </Card>
      </Section>

      <Section title="References">
        <Card>
          <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
            {workup.references.map((ref, i) => <li key={i}>{ref}</li>)}
          </ul>
        </Card>
      </Section>
    </div>
  )
}
