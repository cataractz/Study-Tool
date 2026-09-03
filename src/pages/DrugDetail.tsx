import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, Pill, GraduationCap, BookMarked, Sparkles, ArrowRight } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { getDrugById } from '../services/drugService'
import { getDiseaseById } from '../services/diseaseService'
import { buildDrugContext } from '../services/ai/contextService'
import { Linkify, LinkifyLine } from '../components/shared/Linkify'

export function DrugDetail() {
  const { drugId } = useParams<{ drugId: string }>()
  const drug = drugId ? getDrugById(drugId) : undefined
  const navigate = useNavigate()

  if (!drug) {
    return (
      <div className="space-y-4">
        <Link to="/drugs" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to Drug Database
        </Link>
        <EmptyState icon={Pill} title="Drug not found" description="This medication isn't in the database yet." />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link to="/drugs" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          <ChevronLeft size={15} /> Back to Drug Database
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <Badge tone="purple">{drug.drugClass}</Badge>
              {drug.isEmergencyMedication && <Badge tone="danger">Emergency Medication</Badge>}
              {drug.controlledSubstanceSchedule && <Badge tone="warning">{drug.controlledSubstanceSchedule}</Badge>}
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight mt-2">
              {drug.genericName}
            </h1>
            <p className="text-sm text-slate-500 mt-1">Brand names: {drug.brandNames.join(', ') || '—'}</p>
          </div>
          <Button
            size="sm"
            variant="outline"
            icon={<Sparkles size={15} />}
            onClick={() =>
              navigate('/ai-assistant', {
                state: { context: buildDrugContext(drug), mode: 'pharmacology' },
              })
            }
          >
            Ask AI About This Medication
          </Button>
        </div>
      </div>

      <Section title="Mechanism of Action">
        <Card><p className="text-sm text-slate-700 leading-relaxed"><Linkify text={drug.mechanismOfAction} excludeId={drug.id} /></p></Card>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Indications">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.indications.map((i, k) => <li key={k}><LinkifyLine text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
        <Section title="Ocular Uses">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.ocularUses.map((i, k) => <li key={k}><LinkifyLine text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
      </div>

      <Section title="Dosing">
        <Card className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div><p className="text-xs text-slate-400">Typical dosing</p><p className="text-slate-800 mt-0.5">{drug.typicalDosing}</p></div>
          <div><p className="text-xs text-slate-400">Concentrations</p><p className="text-slate-800 mt-0.5">{drug.concentrations.join(', ') || '—'}</p></div>
          <div><p className="text-xs text-slate-400">Formulations</p><p className="text-slate-800 mt-0.5">{drug.formulations?.join(', ') || '—'}</p></div>
          <div><p className="text-xs text-slate-400">Route</p><p className="text-slate-800 mt-0.5">{drug.route}</p></div>
        </Card>
      </Section>

      <Section title="Major Side Effects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Ocular</p>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.sideEffects.ocular.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Systemic</p>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.sideEffects.systemic.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul>
          </Card>
        </div>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Contraindications">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.contraindications.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
        <Section title="Precautions">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.precautions.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
      </div>

      <Section title="Drug Interactions">
        <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.drugInteractions.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
      </Section>

      <Section title="Important Patient Counseling">
        <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.patientCounseling.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="Pregnancy / Lactation">
          <Card><p className="text-sm text-slate-700"><Linkify text={drug.pregnancyLactation} excludeId={drug.id} /></p></Card>
        </Section>
        <Section title="Monitoring">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.monitoring.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
      </div>

      {drug.pediatricConsiderations && drug.pediatricConsiderations.length > 0 && (
        <Section title="Pediatric Considerations">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.pediatricConsiderations.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
      )}

      {drug.offLabelUses && drug.offLabelUses.length > 0 && (
        <Section title="Off-Label Uses">
          <Card><ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">{drug.offLabelUses.map((i, k) => <li key={k}><Linkify text={i} excludeId={drug.id} /></li>)}</ul></Card>
        </Section>
      )}

      {drug.relatedConditionIds && drug.relatedConditionIds.length > 0 && (() => {
        const relatedConditions = drug.relatedConditionIds
          .map((id) => getDiseaseById(id))
          .filter((d): d is NonNullable<typeof d> => Boolean(d))
        if (relatedConditions.length === 0) return null
        return (
          <Section title="Related Conditions">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedConditions.map((condition) => (
                <Link key={condition.id} to={`/diseases/${condition.id}`}>
                  <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-800">{condition.name}</span>
                    <ArrowRight size={15} className="shrink-0 text-slate-300" />
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        )
      })()}

      <Section title="Clinical Pearls">
        <Card className="bg-amber-50 border-amber-200">
          <ul className="space-y-2">
            {drug.clinicalPearls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-900">
                <Sparkles size={15} className="shrink-0 mt-0.5 text-amber-500" /><span><Linkify text={p} excludeId={drug.id} /></span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="NBEO High-Yield Facts">
        <Card className="bg-violet-50 border-violet-200">
          <ul className="space-y-2">
            {drug.highYield.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-violet-900">
                <GraduationCap size={15} className="shrink-0 mt-0.5 text-violet-500" /><span><Linkify text={p} excludeId={drug.id} /></span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {drug.references.length > 0 && (
        <Section title="Source / Reference">
          <Card>
            <ul className="space-y-1.5">
              {drug.references.map((r, i) => (
                <li key={i} className="flex gap-2 text-xs text-slate-500">
                  <BookMarked size={13} className="shrink-0 mt-0.5" />
                  <span><span className="font-medium text-slate-600">{r.label}:</span> {r.source}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      )}
    </div>
  )
}
