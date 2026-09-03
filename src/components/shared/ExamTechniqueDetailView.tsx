import { Link } from 'react-router-dom'
import { ChevronLeft, Stethoscope, Star, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { EmptyState } from '../ui/EmptyState'
import { Linkify } from './Linkify'
import { getExamTechniqueById } from '../../services/examTechniqueService'
import { getWorkupsReferencingTechnique } from '../../services/clinicalWorkupService'
import { getDiseaseById } from '../../services/diseaseService'
import { getDrugById } from '../../services/drugService'
import { calculatorRegistry } from '../../calculators/registry'
import type { ExamTechnique } from '../../types/examTechnique'

interface ExamTechniqueDetailViewProps {
  technique: ExamTechnique | undefined
  /** Route to go back to, e.g. "/exam-workup" or "/diagnostic-testing". */
  backTo: string
  /** Label shown next to the back chevron, e.g. "Clinical Examination & Workup". */
  backLabel: string
  /** Route prefix used to link to another technique's detail page from "Related Tests",
   * e.g. "/exam-workup/technique" or "/diagnostic-testing". */
  techniqueLinkPrefix: string
  fav: boolean
  onToggleFavorite: () => void
}

export function ExamTechniqueDetailView({
  technique,
  backTo,
  backLabel,
  techniqueLinkPrefix,
  fav,
  onToggleFavorite,
}: ExamTechniqueDetailViewProps) {
  if (!technique) {
    return (
      <div className="space-y-4">
        <Link to={backTo} className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to {backLabel}
        </Link>
        <EmptyState icon={Stethoscope} title="Technique not found" description="This technique isn't in the reference yet." />
      </div>
    )
  }

  const associatedConditions = (technique.associatedConditionIds ?? [])
    .map((id) => getDiseaseById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const relatedTechniques = (technique.relatedTechniqueIds ?? [])
    .map((id) => getExamTechniqueById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  const relatedCalculators = (technique.relatedCalculatorIds ?? [])
    .map((id) => calculatorRegistry.find((c) => c.meta.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  const relatedDrugs = (technique.relatedDrugIds ?? [])
    .map((id) => getDrugById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const relatedWorkups = getWorkupsReferencingTechnique(technique.id)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link to={backTo} className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          <ChevronLeft size={15} /> Back to {backLabel}
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge tone="brand">{technique.category}</Badge>
              <span className="text-xs text-slate-400">{technique.section}</span>
              {technique.aliases && technique.aliases.length > 0 && (
                <span className="text-xs text-slate-400">aka {technique.aliases.join(', ')}</span>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">{technique.name}</h1>
          </div>
          <button
            onClick={onToggleFavorite}
            aria-label={fav ? `Remove ${technique.name} from favorites` : `Add ${technique.name} to favorites`}
            aria-pressed={fav}
            className="shrink-0 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Star size={18} className={fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
          </button>
        </div>
      </div>

      <Section title="Purpose">
        <p className="text-sm text-slate-700 leading-relaxed">
          <Linkify text={technique.purpose} excludeId={technique.id} />
        </p>
      </Section>

      <Section title="Clinical Indications">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {technique.clinicalIndications.map((item, i) => (
              <li key={i}><Linkify text={item} excludeId={technique.id} /></li>
            ))}
          </ul>
        </Card>
      </Section>

      {technique.contraindications && technique.contraindications.length > 0 && (
        <Section title="Contraindications / Precautions">
          <Card className="bg-red-50 border-red-200 flex gap-2.5">
            <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
            <ul className="text-sm text-red-900 space-y-1 list-disc pl-4">
              {technique.contraindications.map((item, i) => (
                <li key={i}><Linkify text={item} excludeId={technique.id} /></li>
              ))}
            </ul>
          </Card>
        </Section>
      )}

      <Section title="Equipment">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {technique.equipment.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </Card>
      </Section>

      {technique.patientPreparation && technique.patientPreparation.length > 0 && (
        <Section title="Patient Preparation">
          <Card>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {technique.patientPreparation.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </Card>
        </Section>
      )}

      <Section title="Technique">
        <Card>
          <ol className="space-y-2">
            {technique.technique.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed"><Linkify text={step} excludeId={technique.id} /></span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Section title="Normal Findings">
          <Card>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {technique.normalFindings.map((item, i) => <li key={i}><Linkify text={item} excludeId={technique.id} /></li>)}
            </ul>
          </Card>
        </Section>
        <Section title="Abnormal Findings">
          <Card>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {technique.abnormalFindings.map((item, i) => <li key={i}><Linkify text={item} excludeId={technique.id} /></li>)}
            </ul>
          </Card>
        </Section>
      </div>

      <Section title="Interpretation">
        <Card className="bg-brand-50 border-brand-200">
          <p className="text-sm text-brand-900 leading-relaxed"><Linkify text={technique.interpretation} excludeId={technique.id} /></p>
        </Card>
      </Section>

      {associatedConditions.length > 0 && (
        <Section title="Associated Conditions">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {associatedConditions.map((d) => (
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

      <Section title="Clinical Pearls">
        <Card className="bg-amber-50 border-amber-200">
          <ul className="space-y-2">
            {technique.clinicalPearls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-900">
                <Sparkles size={15} className="shrink-0 mt-0.5 text-amber-500" />
                <span><Linkify text={p} excludeId={technique.id} /></span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Common Errors">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {technique.commonErrors.map((item, i) => <li key={i}><Linkify text={item} excludeId={technique.id} /></li>)}
          </ul>
        </Card>
      </Section>

      {technique.limitations && technique.limitations.length > 0 && (
        <Section title="Limitations">
          <Card>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {technique.limitations.map((item, i) => <li key={i}><Linkify text={item} excludeId={technique.id} /></li>)}
            </ul>
          </Card>
        </Section>
      )}

      {relatedTechniques.length > 0 && (
        <Section title="Related Tests">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedTechniques.map((t) => (
              <Link key={t.id} to={`${techniqueLinkPrefix}/${t.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{t.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedCalculators.length > 0 && (
        <Section title="Related Calculators">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedCalculators.map((c) => (
              <Link key={c.meta.id} to={`/calculators/${c.meta.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{c.meta.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedDrugs.length > 0 && (
        <Section title="Related Drugs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedDrugs.map((d) => (
              <Link key={d.id} to={`/drugs/${d.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{d.genericName}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedWorkups.length > 0 && (
        <Section title="Related Clinical Workups">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedWorkups.map((w) => (
              <Link key={w.id} to={`/exam-workup/workup/${w.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-slate-900">{w.name}</span>
                  <ArrowRight size={14} className="text-slate-300 shrink-0" />
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section title="References">
        <Card>
          <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
            {technique.references.map((ref, i) => <li key={i}>{ref}</li>)}
          </ul>
        </Card>
      </Section>
    </div>
  )
}
