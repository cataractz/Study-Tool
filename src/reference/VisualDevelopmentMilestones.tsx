import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'visual-development-milestones',
  name: 'Visual Development Milestones by Age',
  category: 'Pediatrics',
  description:
    'Typical fixation/tracking behavior, age-appropriate acuity testing method, stereopsis onset, accommodation maturation, and binocular alignment milestones across infancy and early childhood.',
  keywords: [
    'pediatrics',
    'infant vision',
    'visual development',
    'fix and follow',
    'Teller acuity cards',
    'preferential looking',
    'LEA symbols',
    'Allen figures',
    'Cardiff acuity cards',
    'HOTV',
    'Kay pictures',
    'stereopsis onset',
    'accommodation development',
    'transient neonatal strabismus',
    'infantile esotropia',
    'amblyopia risk',
    'pediatric vision screening',
    'AAPOS',
  ],
}

interface Row {
  age: string
  fixation: string
  vaMethod: string
  stereopsis: string
  accommodation: string
  alignment: string
}

const ROWS: Row[] = [
  {
    age: 'Birth',
    fixation: 'Blinks to bright light; brief, inconsistent fixation on a high-contrast face/target; tracking is jerky with poor smooth pursuit',
    vaMethod: 'Fix and Follow Assessment (behavioral CSM rating) — formal grating/preferential-looking acuity not yet practical',
    stereopsis: 'Absent',
    accommodation: 'Immature and largely fixed near a set focal distance (~19–30 cm); not yet responsive to target distance',
    alignment: 'Intermittent exo- or esodeviation is common and physiologic; no consistent alignment pattern expected yet',
  },
  {
    age: '6–8 weeks',
    fixation: 'Sustained central fixation emerging; smooth pursuit beginning; social smile and reciprocal eye contact typically present',
    vaMethod: 'Fix and Follow Assessment; Teller Acuity Cards (preferential looking) become feasible',
    stereopsis: 'Not yet present — earliest reported onset in the literature is not before ~8 weeks',
    accommodation: 'Still inconsistent/immature, gradually refining',
    alignment: 'Intermittent horizontal deviations still common but should be trending toward straighter alignment',
  },
  {
    age: '2–3 months',
    fixation: 'Central, steady, maintained fixation with improving smooth pursuit and head/eye coordination',
    vaMethod: 'Teller Acuity Cards (preferential looking) — reported grating acuity roughly 6/60–20/200 equivalent around 3 months',
    stereopsis: 'Emerging in a subset of infants; not yet reliably demonstrable in all',
    accommodation: 'Increasing accuracy and range, still below adult performance',
    alignment: 'Intermittent deviation should be decreasing in frequency; most infants show straight or near-straight alignment most of the time',
  },
  {
    age: '3–4 months',
    fixation: 'Smooth pursuit approaches adult-level horizontal tracking performance by 4 months; visually guided reaching emerging',
    vaMethod: 'Teller Acuity Cards remain the standard preferential-looking method through this age',
    stereopsis: 'Typical onset window (commonly cited 3–4 months, with a broader reported range of ~2–6 months) — often the first age gross stereopsis is demonstrable on research testing',
    accommodation: 'Reaches adult-like accuracy and range by approximately 4 months',
    alignment: 'KEY REFERRAL CUTOFF — transient neonatal misalignment should have fully resolved by 4 months of age; any deviation (constant OR intermittent) still present beyond 4 months warrants pediatric ophthalmology referral, and any CONSTANT deviation at any age warrants prompt evaluation regardless of this cutoff',
  },
  {
    age: '6 months',
    fixation: 'Mature fixation and pursuit; visually directed reach and grasp; emerging object permanence',
    vaMethod: 'Teller Acuity Cards (gold standard through roughly 3 years of age)',
    stereopsis: 'Well established in the majority of infants; documented in research settings with random-dot stereograms',
    accommodation: 'Mature, adult-like accommodative response',
    alignment: 'Should be consistently straight (orthophoric or a well-controlled small phoria); manifest strabismus at this age is abnormal',
  },
  {
    age: '1 year',
    fixation: 'Fully mature fixation and smooth pursuit',
    vaMethod: 'Teller Acuity Cards or Cardiff Acuity Cards (vanishing-optotype cards, usable from roughly this age)',
    stereopsis: 'Present but coarse relative to adult levels; stereoacuity continues to refine over the next 1–2 years',
    accommodation: 'Mature',
    alignment: 'Straight alignment expected; persistent strabismus of any type is abnormal and should prompt referral',
  },
  {
    age: '2–3 years',
    fixation: 'Adult-like fixation and pursuit; attention span begins to allow more formal optotype testing',
    vaMethod: 'Cardiff Acuity Cards, Kay Pictures, and LEA Symbols/Allen Figures (picture matching/naming, typically feasible from roughly this age)',
    stereopsis: 'Continues to refine; stereoacuity thresholds trend toward the adult range by around 2 years but are not yet fully mature',
    accommodation: 'Mature',
    alignment: 'Should be straight; new-onset accommodative esotropia commonly presents in this window and warrants cycloplegic refraction',
  },
  {
    age: '3–5 years',
    fixation: 'Adult-like',
    vaMethod: 'LEA Symbols/Allen Figures, HOTV letter matching (from roughly 3 years), and Kay Pictures — recognition acuity testing becomes reliable',
    stereopsis: 'Approaching adult-level stereoacuity by school age; testable clinically with Titmus/Randot-type stereo tests',
    accommodation: 'Mature, with high amplitude of accommodation typical of this age range',
    alignment: 'Should be straight; this is the target window for amblyopia-risk vision screening (anisometropia, strabismus, significant refractive error) per AAP/AAPOS guidance',
  },
  {
    age: '5+ years',
    fixation: 'Fully adult',
    vaMethod: 'HOTV, Kay Pictures, or Snellen letters/numbers once literate; testable VA is typically 20/20 by school age',
    stereopsis: 'Adult-level stereoacuity typically present on Titmus/Randot testing',
    accommodation: 'Mature; amplitude begins its lifelong gradual physiologic decline (see Donders/Hofstetter norms)',
    alignment: 'Should be straight; new strabismus at this age (e.g., a decompensating phoria or a cranial nerve palsy) is less common and warrants prompt evaluation for an underlying cause',
  },
]

export function VisualDevelopmentMilestones() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Age', 'Fixation / tracking behavior', 'Testable VA method', 'Stereopsis', 'Accommodation', 'Binocular alignment']}
        rows={ROWS.map((r) => [r.age, r.fixation, r.vaMethod, r.stereopsis, r.accommodation, r.alignment])}
      />
      <p className="text-xs text-slate-500">
        SCREENING REFERENCE ONLY — these are typical population milestones drawn from AAPOS clinical guidance on ocular
        alignment in infants, the AOA/InfantSEE infant vision (birth–24 months) summaries, Teller Acuity Card normative
        data (including the TAC II meta-analysis), and published studies of infant stereopsis (e.g., Held, Birch, and
        Gwiazda's random-dot stereogram work) and infant accommodation (e.g., Braddick and Aslin's studies of
        accommodative maturation). Individual infants vary, and premature infants should be assessed against
        corrected (gestational) rather than chronological age. Any RED FLAG at a given stage — no fixation/following
        by 2–3 months, constant strabismus at any age, any ocular deviation (constant or intermittent) persisting
        beyond 4 months, absent red reflex, or failure to progress through these milestones — should prompt referral
        to pediatric ophthalmology rather than reassurance. This page is not a diagnostic tool.
      </p>
    </ReferenceShell>
  )
}
