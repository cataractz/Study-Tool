import { Link, useParams } from 'react-router-dom'
import { Siren, ArrowRight, AlertTriangle, XCircle, Clock, BookMarked } from 'lucide-react'
import { Badge, urgencyTierTone } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { Linkify } from '../components/shared/Linkify'
import { BackLink } from '../components/shared/BackLink'
import { getEmergencyProtocolById } from '../services/emergencyProtocolService'
import { getExamTechniqueById } from '../services/examTechniqueService'
import { getClinicalWorkupById } from '../services/clinicalWorkupService'
import { getDiseaseById } from '../services/diseaseService'
import { getDrugById } from '../services/drugService'

export function EmergencyProtocolDetail() {
  const { protocolId } = useParams<{ protocolId: string }>()
  const protocol = protocolId ? getEmergencyProtocolById(protocolId) : undefined

  if (!protocol) {
    return (
      <div className="space-y-4">
        <BackLink to="/emergency-care" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          Back to Emergency &amp; Urgent Eye Care
        </BackLink>
        <EmptyState icon={Siren} title="Protocol not found" description="This protocol isn't in the reference yet." />
      </div>
    )
  }

  const associatedConditions = (protocol.associatedConditionIds ?? [])
    .map((id) => getDiseaseById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const relatedDrugs = (protocol.relatedDrugIds ?? [])
    .map((id) => getDrugById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const relatedWorkups = (protocol.relatedWorkupIds ?? [])
    .map((id) => getClinicalWorkupById(id))
    .filter((w): w is NonNullable<typeof w> => Boolean(w))

  const relatedTechniques = (protocol.relatedTechniqueIds ?? [])
    .map((id) => getExamTechniqueById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <BackLink to="/emergency-care" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          Back to Emergency &amp; Urgent Eye Care
        </BackLink>
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <Badge tone={urgencyTierTone(protocol.urgencyTier)}>{protocol.urgencyTier}</Badge>
          <Badge tone="default">{protocol.category}</Badge>
          {protocol.aliases && protocol.aliases.length > 0 && (
            <span className="text-xs text-slate-400">aka {protocol.aliases.join(', ')}</span>
          )}
        </div>
        <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">{protocol.name}</h1>
      </div>

      <Section title="Overview">
        <p className="text-sm text-slate-700 leading-relaxed">
          <Linkify text={protocol.overview} excludeId={protocol.id} />
        </p>
      </Section>

      <Section title="Red Flags">
        <Card className="bg-red-50 border-red-200 flex gap-2.5">
          <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />
          <ul className="text-sm text-red-900 space-y-1 list-disc pl-4">
            {protocol.redFlags.map((item, i) => (
              <li key={i}><Linkify text={item} excludeId={protocol.id} /></li>
            ))}
          </ul>
        </Card>
      </Section>

      {protocol.timeWindow && (
        <Section title="Time Window">
          <Card className="bg-amber-50 border-amber-200 flex gap-2.5">
            <Clock size={15} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              <Linkify text={protocol.timeWindow} excludeId={protocol.id} />
            </p>
          </Card>
        </Section>
      )}

      <Section title="Immediate Actions">
        <Card>
          <ol className="space-y-2">
            {protocol.immediateActions.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed"><Linkify text={step} excludeId={protocol.id} /></span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section title="Do Not Do">
        <Card className="bg-red-50 border-red-200">
          <ul className="space-y-2">
            {protocol.doNotDo.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-red-900">
                <XCircle size={15} className="shrink-0 mt-0.5 text-red-500" />
                <span><Linkify text={item} excludeId={protocol.id} /></span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Full Evaluation (Once Stabilized)">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {protocol.fullEvaluationSteps.map((item, i) => (
              <li key={i}><Linkify text={item} excludeId={protocol.id} /></li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Referral Criteria">
        <Card className="bg-brand-50 border-brand-200">
          <p className="text-sm text-brand-900 leading-relaxed">
            <Linkify text={protocol.referralCriteria} excludeId={protocol.id} />
          </p>
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
            {protocol.clinicalPearls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-900">
                <AlertTriangle size={15} className="shrink-0 mt-0.5 text-amber-500" />
                <span><Linkify text={p} excludeId={protocol.id} /></span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Common Pitfalls">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {protocol.commonPitfalls.map((item, i) => (
              <li key={i}><Linkify text={item} excludeId={protocol.id} /></li>
            ))}
          </ul>
        </Card>
      </Section>

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

      {relatedTechniques.length > 0 && (
        <Section title="Related Tests">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedTechniques.map((t) => (
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

      <Section title="References">
        <Card>
          <ul className="text-xs text-slate-500 space-y-1.5 list-disc pl-4">
            {protocol.references.map((ref, i) => (
              <li key={i} className="flex gap-2">
                <BookMarked size={13} className="shrink-0 mt-0.5" />
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  )
}
