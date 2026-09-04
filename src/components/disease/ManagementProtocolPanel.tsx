import type { ManagementProtocol } from '../../types/disease'
import { Linkify } from '../shared/Linkify'
import { RelatedEntityGrid, type RelatedEntityItem } from '../shared/RelatedEntityGrid'
import { getDrugById } from '../../services/drugService'
import { getExamTechniqueById } from '../../services/examTechniqueService'
import { calculatorRegistry } from '../../calculators/registry'

function Bullets({ items, excludeId }: { items: string[]; excludeId?: string }) {
  return (
    <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
      {items.map((s, i) => (
        <li key={i}>
          <Linkify text={s} excludeId={excludeId} />
        </li>
      ))}
    </ul>
  )
}

export function ManagementProtocolPanel({
  protocol,
  excludeId,
}: {
  protocol: ManagementProtocol
  excludeId?: string
}) {
  const drugs: RelatedEntityItem[] = (protocol.relatedDrugIds ?? [])
    .map((id) => getDrugById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({ id: d.id, title: d.genericName, subtitle: d.drugClass, path: `/drugs/${d.id}` }))

  const calculators: RelatedEntityItem[] = (protocol.relatedCalculatorIds ?? [])
    .map((id) => calculatorRegistry.find((c) => c.meta.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ id: c.meta.id, title: c.meta.name, subtitle: 'Calculator', path: `/calculators/${c.meta.id}` }))

  const techniques: RelatedEntityItem[] = (protocol.relatedExamTechniqueIds ?? [])
    .map((id) => getExamTechniqueById(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .map((t) => ({ id: t.id, title: t.name, subtitle: 'Exam Technique', path: `/exam-workup/technique/${t.id}` }))

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Workup</p>
        <Bullets items={protocol.workup} excludeId={excludeId} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Initial Treatment</p>
        <p className="text-sm text-slate-700">
          <Linkify text={protocol.initialTreatment} excludeId={excludeId} />
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Follow-Up Schedule</p>
        <p className="text-sm text-slate-700">
          <Linkify text={protocol.followUpSchedule} excludeId={excludeId} />
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Escalation Criteria</p>
        <Bullets items={protocol.escalationCriteria} excludeId={excludeId} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Referral Criteria</p>
        <Bullets items={protocol.referralCriteria} excludeId={excludeId} />
      </div>
      {protocol.steroidConsiderations && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">Steroid Considerations</p>
          <p className="text-sm text-amber-900">
            <Linkify text={protocol.steroidConsiderations} excludeId={excludeId} />
          </p>
        </div>
      )}
      {protocol.cycloplegicConsiderations && (
        <div className="rounded-lg bg-sky-50 border border-sky-200 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 mb-1">Cycloplegic Considerations</p>
          <p className="text-sm text-sky-900">
            <Linkify text={protocol.cycloplegicConsiderations} excludeId={excludeId} />
          </p>
        </div>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Complications</p>
        <Bullets items={protocol.complications} excludeId={excludeId} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Monitoring Parameters</p>
        <Bullets items={protocol.monitoringParameters} excludeId={excludeId} />
      </div>
      {(drugs.length > 0 || calculators.length > 0 || techniques.length > 0) && (
        <div className="pt-1 border-t border-slate-100 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Related</p>
          <RelatedEntityGrid items={[...drugs, ...calculators, ...techniques]} />
        </div>
      )}
    </div>
  )
}
