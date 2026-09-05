import { Link } from 'react-router-dom'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'pediatric-cycloplegic-comparison',
  name: 'Pediatric Cycloplegic Agent Comparison',
  category: 'Pediatrics',
  description:
    'Onset, duration of cycloplegia, typical pediatric concentration, and key safety/use notes for the topical antimuscarinic agents used for cycloplegic refraction in children.',
  keywords: [
    'pediatrics',
    'cycloplegic refraction',
    'tropicamide',
    'cyclopentolate',
    'atropine',
    'homatropine',
    'accommodative esotropia',
    'amblyopia penalization',
    'rebound accommodation',
    'anticholinergic toxicity',
    'antimuscarinic',
  ],
}

interface Row {
  agent: string
  drugId: string
  onset: string
  duration: string
  concentration: string
  notes: string
}

const ROWS: Row[] = [
  {
    agent: 'Tropicamide',
    drugId: 'tropicamide',
    onset: '20–30 min to peak mydriasis',
    duration: '~4–6 hours (shortest of the group)',
    concentration: '0.5–1%',
    notes:
      'Weakest, fastest-recovering cycloplegic — mydriatic effect predominates over cycloplegia. Because cycloplegia is incomplete/less reliable, it is not preferred for cycloplegic refraction when accommodative esotropia or significant latent hyperopia is suspected (cyclopentolate/atropine preferred there). Workhorse agent for routine (non-refractive) dilated fundus exams, often paired with phenylephrine.',
  },
  {
    agent: 'Cyclopentolate',
    drugId: 'cyclopentolate',
    onset: '~30–60 min, peak cycloplegia ~30–45 min',
    duration: '~6–24 hours',
    concentration: '0.5% (infants/young children) or 1% (older children); 2% mainly for darkly pigmented irides/adults',
    notes:
      'The most common routine agent for pediatric cycloplegic refraction — more complete, reliable cycloplegia than tropicamide with a shorter duration than atropine/homatropine. Carries a higher risk of CNS anticholinergic effects (ataxia, disorientation, hallucinations, rare seizures) than tropicamide, so use the lowest effective concentration (0.5%) in infants and young children, with punctal occlusion.',
  },
  {
    agent: 'Homatropine',
    drugId: 'homatropine',
    onset: 'Onset slower than cyclopentolate',
    duration: '~1–3 days (intermediate)',
    concentration: '2–5%',
    notes:
      'Intermediate-duration agent structurally related to atropine — a middle ground between cyclopentolate and atropine. Used more often as a therapeutic cycloplegic in anterior uveitis (shorter course than atropine) than as a first-line routine pediatric refraction agent, where cyclopentolate is preferred.',
  },
  {
    agent: 'Atropine',
    drugId: 'atropine',
    onset: 'Slow — typically dosed 1–3 days before refraction',
    duration: '1–2 weeks (longest of the group)',
    concentration: '0.5–1% (standard cycloplegic/therapeutic dosing); 0.01–0.02% low-dose formulation used off-label for myopia control, a distinct use case',
    notes:
      'Deepest and longest cycloplegia of the group, with the narrowest systemic safety margin in infants — carries the highest risk of anticholinergic toxicity of the ophthalmic cycloplegics and is a historical cause of accidental pediatric poisoning, so caregiver counseling on secure storage and punctal occlusion are important. Reserved for cases needing maximal cycloplegia (e.g., significant accommodative spasm, complex esotropia workup), therapeutic cycloplegia in anterior uveitis, and amblyopia penalization of the sound eye — rather than routine refraction, where rebound accommodation and the long recovery time (up to 1–2 weeks of blur/photophobia) are impractical.',
  },
]

export function PediatricCycloplegicComparison() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Agent', 'Onset', 'Duration of cycloplegia', 'Typical pediatric concentration', 'Notes']}
        rows={ROWS.map((r) => [r.agent, r.onset, r.duration, r.concentration, r.notes])}
      />
      <p className="text-xs text-slate-500">
        All four are topical antimuscarinic (M3 receptor) agents that block ciliary muscle and iris sphincter
        response to acetylcholine, producing cycloplegia and mydriasis together — they differ mainly in depth and
        duration of effect. In general, deeper/longer cycloplegia (atropine {'>'} homatropine {'>'} cyclopentolate {'>'} tropicamide)
        trades off against a higher risk of systemic anticholinergic effects and a longer post-exam recovery period
        with blurred near vision and photophobia, sometimes accompanied by transient REBOUND ACCOMMODATION as the
        cycloplegic effect wanes. Cyclopentolate 1% (0.5% in infants/young children) is the standard first-line agent
        for routine pediatric cycloplegic refraction, balancing reliable cycloplegia against a manageable recovery
        time and side-effect profile; atropine is generally reserved for deep amblyopia penalization or when other
        agents provide inadequate cycloplegia. Narrow/occludable anterior chamber angle is a contraindication shared
        by all four agents given the angle-closure risk of mydriasis.
      </p>
      <p className="text-xs text-slate-500">
        Full drug monographs:{' '}
        <Link to="/drugs/tropicamide" className="text-brand-600 hover:underline">
          Tropicamide
        </Link>
        {' · '}
        <Link to="/drugs/cyclopentolate" className="text-brand-600 hover:underline">
          Cyclopentolate
        </Link>
        {' · '}
        <Link to="/drugs/atropine" className="text-brand-600 hover:underline">
          Atropine
        </Link>
        {' · '}
        <Link to="/drugs/homatropine" className="text-brand-600 hover:underline">
          Homatropine
        </Link>
      </p>
    </ReferenceShell>
  )
}
