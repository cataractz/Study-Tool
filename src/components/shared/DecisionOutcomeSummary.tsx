import { AlertTriangle, BookMarked, CheckCircle2 } from 'lucide-react'
import { Badge, decisionUrgencyTone } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Section } from '../ui/Section'
import { Linkify } from './Linkify'
import { RelatedEntityGrid, type RelatedEntityItem } from './RelatedEntityGrid'
import { getDiseaseById } from '../../services/diseaseService'
import { getDrugById } from '../../services/drugService'
import { getExamTechniqueById } from '../../services/examTechniqueService'
import { getClinicalWorkupById } from '../../services/clinicalWorkupService'
import { getEmergencyProtocolById } from '../../services/emergencyProtocolService'
import { calculatorRegistry } from '../../calculators/registry'
import type { OutcomeNode } from '../../types/decisionTree'

function DifferentialList({
  items,
  tone,
}: {
  items: { diseaseId: string; whyItFits: string }[]
  tone: 'default' | 'danger'
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => {
        const disease = getDiseaseById(item.diseaseId)
        return (
          <li key={i} className="text-sm">
            <span className={`font-medium ${tone === 'danger' ? 'text-red-900' : 'text-slate-900'}`}>
              {disease?.name ?? item.diseaseId}
            </span>
            <span className={tone === 'danger' ? 'text-red-800' : 'text-slate-600'}>
              {' — '}
              <Linkify text={item.whyItFits} />
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export function DecisionOutcomeSummary({ outcome, treeReferences }: { outcome: OutcomeNode; treeReferences: string[] }) {
  const workups: RelatedEntityItem[] = (outcome.relatedWorkupIds ?? [])
    .map((id) => getClinicalWorkupById(id))
    .filter((w): w is NonNullable<typeof w> => Boolean(w))
    .map((w) => ({ id: w.id, title: w.name, subtitle: 'Clinical Workup', path: `/exam-workup/workup/${w.id}` }))

  const protocols: RelatedEntityItem[] = (outcome.relatedEmergencyProtocolIds ?? [])
    .map((id) => getEmergencyProtocolById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ id: p.id, title: p.name, subtitle: 'Emergency Protocol', path: `/emergency-care/${p.id}` }))

  const diseases: RelatedEntityItem[] = (outcome.relatedDiseaseIds ?? [])
    .map((id) => getDiseaseById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ id: d.id, title: d.name, subtitle: 'Disease', path: `/diseases/${d.id}` }))

  const techniques: RelatedEntityItem[] = (outcome.relatedExamTechniqueIds ?? [])
    .map((id) => getExamTechniqueById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .map((t) => ({ id: t.id, title: t.name, subtitle: 'Exam Technique', path: `/exam-workup/technique/${t.id}` }))

  const drugs: RelatedEntityItem[] = (outcome.relatedDrugIds ?? [])
    .map((id) => getDrugById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ id: d.id, title: d.genericName, subtitle: 'Drug', path: `/drugs/${d.id}` }))

  const calculators: RelatedEntityItem[] = (outcome.relatedCalculatorIds ?? [])
    .map((id) => calculatorRegistry.find((c) => c.meta.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ id: c.meta.id, title: c.meta.name, subtitle: 'Calculator', path: `/calculators/${c.meta.id}` }))

  const references = outcome.references ?? treeReferences

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <Badge tone={decisionUrgencyTone(outcome.urgency)}>{outcome.urgency}</Badge>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 tracking-tight">{outcome.title}</h2>
      </div>

      <Section title="Most Likely">
        <Card>
          <DifferentialList items={outcome.mostLikely} tone="default" />
        </Card>
      </Section>

      {outcome.mustNotMiss.length > 0 && (
        <Section title="Must Not Miss">
          <Card className="bg-red-50 border-red-200 flex gap-2.5">
            <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
            <div className="min-w-0 flex-1">
              <DifferentialList items={outcome.mustNotMiss} tone="danger" />
            </div>
          </Card>
        </Section>
      )}

      <Section title="Recommended Next Steps">
        <Card>
          <ol className="space-y-2">
            {outcome.recommendedNextSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">
                  <Linkify text={step} />
                </span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      {outcome.managementNotes && (
        <Section title="Management Notes">
          <Card className="bg-brand-50 border-brand-200">
            <p className="text-sm text-brand-900 leading-relaxed">
              <Linkify text={outcome.managementNotes} />
            </p>
          </Card>
        </Section>
      )}

      {protocols.length > 0 && (
        <Section title="Emergency Protocols">
          <RelatedEntityGrid items={protocols} />
        </Section>
      )}

      {workups.length > 0 && (
        <Section title="Related Clinical Workups">
          <RelatedEntityGrid items={workups} />
        </Section>
      )}

      {diseases.length > 0 && (
        <Section title="Related Diseases">
          <RelatedEntityGrid items={diseases} />
        </Section>
      )}

      {techniques.length > 0 && (
        <Section title="Related Tests">
          <RelatedEntityGrid items={techniques} />
        </Section>
      )}

      {drugs.length > 0 && (
        <Section title="Related Drugs">
          <RelatedEntityGrid items={drugs} />
        </Section>
      )}

      {calculators.length > 0 && (
        <Section title="Related Calculators">
          <RelatedEntityGrid items={calculators} />
        </Section>
      )}

      {references.length > 0 && (
        <Section title="References">
          <Card>
            <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
              {references.map((ref, i) => (
                <li key={i} className="flex gap-2">
                  <BookMarked size={13} className="shrink-0 mt-0.5" />
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      )}

      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <CheckCircle2 size={13} />
        This pathway is a clinical study reference, not a diagnosis — interpret every finding in the
        context of the complete examination.
      </div>
    </div>
  )
}
