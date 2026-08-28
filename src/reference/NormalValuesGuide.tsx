import { Link } from 'react-router-dom'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'normal-values-guide',
  name: 'Normal Exam Values — Quick Interpretation Guide',
  category: 'Clinical Utilities',
  description: 'Every exam-test normal/expected value documented across this toolkit, in one place, with what a low or high result typically suggests.',
  keywords: [
    'normal values',
    'expected findings',
    'interpretation',
    'vergence ranges',
    'stereopsis',
    'stereoacuity',
    'IOP',
    'intraocular pressure',
    'keratometry normal',
    'corneal thickness normal',
    'quick reference',
    'cheat sheet',
  ],
}

interface Row {
  test: string
  normal: string
  low: string
  high: string
  link?: { to: string; label: string }
}

const BINOCULAR_VISION: Row[] = [
  {
    test: 'Distance lateral phoria',
    normal: '1Δ exophoria (±2Δ)',
    low: 'More exophoric than expected — possible exophoria/convergence insufficiency pattern',
    high: 'Esophoric — possible esophoria pattern',
  },
  {
    test: 'Near lateral phoria',
    normal: '3Δ exophoria (±3Δ)',
    low: 'More exophoric than expected — consider convergence insufficiency',
    high: 'Esophoric — consider convergence excess / accommodative esotropia pattern',
  },
  {
    test: 'NPC — break',
    normal: '5 cm',
    low: '—',
    high: 'Receded (commonly cited concern threshold >7–10 cm) — classic finding in convergence insufficiency',
  },
  {
    test: 'Distance base-out (PFV) — break',
    normal: '19Δ',
    low: 'Reduced positive fusional vergence — may not comfortably compensate an esophoria',
    high: '—',
  },
  {
    test: 'Distance base-in (NFV) — break',
    normal: '11Δ',
    low: 'Reduced negative fusional vergence — may not comfortably compensate an exophoria',
    high: '—',
  },
  {
    test: 'Near base-out (PFV) — break',
    normal: '21Δ',
    low: 'Reduced — the hallmark finding in convergence insufficiency',
    high: '—',
  },
  {
    test: 'Near base-in (NFV) — break',
    normal: '21Δ',
    low: 'Reduced — may suggest a convergence excess pattern is less compensated',
    high: '—',
  },
  {
    test: 'NRA (Negative Relative Accommodation)',
    normal: '+2.00 D (±0.50 D)',
    low: 'Difficulty relaxing accommodation — accommodative excess pattern',
    high: '—',
  },
  {
    test: 'PRA (Positive Relative Accommodation)',
    normal: '−2.37 D (±1.00 D)',
    low: 'Difficulty stimulating accommodation — accommodative insufficiency pattern',
    high: '—',
  },
  {
    test: 'Monocular accommodative facility',
    normal: '~11 cpm (±5 cpm)',
    low: 'Accommodative infacility — difficulty changing focus quickly',
    high: '—',
  },
  {
    test: 'AC/A ratio',
    normal: '4:1 (commonly cited range 3–5:1)',
    low: 'Low AC/A — associated with convergence insufficiency patterns',
    high: 'High AC/A — associated with convergence excess / accommodative esotropia patterns',
    link: { to: '/calculators/aca-ratio', label: 'AC/A Ratio calculator' },
  },
  {
    test: 'Stereoacuity (Titmus/Randot circles)',
    normal: '< 40 arcsec',
    low: '—',
    high: '40–120 arcsec is borderline/reduced; ≥ ~100–120 arcsec is reduced and warrants investigation (associated with strabismus, amblyopia, other binocular dysfunction)',
  },
]

const ACCOMMODATION: Row[] = [
  {
    test: 'Amplitude of accommodation',
    normal: 'Age-dependent — see Hofstetter\'s formulas / Donders\' table',
    low: 'Lower than age-expected — accommodative insufficiency (if not age-appropriate presbyopia)',
    high: '—',
    link: { to: '/calculators/reference/donders-table', label: "Donders' Table & Hofstetter's Formulas" },
  },
]

const CORNEA_ANTERIOR: Row[] = [
  {
    test: 'Central corneal thickness (CCT)',
    normal: '~540–550 µm average (501–570 µm typical range)',
    low: 'Thin (≤ 500 µm) — glaucoma risk factor; applanation tonometry tends to UNDER-read true IOP',
    high: 'Thick (> 570 µm) — applanation tonometry tends to OVER-read true IOP',
    link: { to: '/calculators/reference/corneal-thickness-table', label: 'Central Corneal Thickness Reference' },
  },
  {
    test: 'Corneal power (K)',
    normal: '~43–44 D average (normal range ~42–46 D)',
    low: 'Flat cornea — uncommon in isolation; correlate with refraction/topography',
    high: 'Steep cornea — if progressive with irregular astigmatism, consider keratoconus/ectasia (classically flagged above ~48 D)',
    link: { to: '/calculators/keratometry', label: 'Keratometry calculator' },
  },
  {
    test: 'Corneal astigmatism amount',
    normal: 'Minimal (< ~0.75 D often not visually significant)',
    low: '—',
    high: 'Larger amounts (particularly > 1.00–1.50 D) become increasingly visually/optically significant',
    link: { to: '/calculators/keratometry', label: 'Keratometry calculator' },
  },
]

const IOP: Row[] = [
  {
    test: 'Intraocular pressure (IOP)',
    normal: '10–21 mmHg (average ~15–16 mmHg)',
    low: 'Hypotony (< 10 mmHg, especially < 6 mmHg) — consider wound leak, uveitis, other causes',
    high: 'Ocular hypertension (> 21 mmHg) — a glaucoma risk factor, not a diagnosis by itself; correlate with CCT, optic nerve, and visual field',
    link: { to: '/calculators/ocular-perfusion-pressure', label: 'MAP & Ocular Perfusion Pressure calculator' },
  },
]

const VISUAL_ACUITY: Row[] = [
  {
    test: 'Visual acuity (best corrected)',
    normal: '20/20 (decimal 1.0, logMAR 0.0) or better',
    low: 'Reduced VA — refractive error, media opacity, retinal/optic nerve pathology, amblyopia, etc.; see the classification table for low-vision/legal-blindness thresholds',
    high: '—',
    link: { to: '/calculators/reference/low-vision-classification', label: 'Legal Blindness & Low Vision Classification' },
  },
]

function Section({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-700 mb-2">{title}</h2>
      <ReferenceTable
        headers={['Test', 'Normal / expected', 'If LOWER than normal', 'If HIGHER than normal']}
        rows={rows.map((r) => [
          <span key="test" className="font-medium text-slate-800">
            {r.link ? (
              <Link to={r.link.to} className="text-brand-600 hover:underline">
                {r.test}
              </Link>
            ) : (
              r.test
            )}
          </span>,
          <span key="normal" className="font-mono text-slate-700 whitespace-normal">
            {r.normal}
          </span>,
          <span key="low" className="text-slate-600 whitespace-normal">
            {r.low}
          </span>,
          <span key="high" className="text-slate-600 whitespace-normal">
            {r.high}
          </span>,
        ])}
      />
    </div>
  )
}

export function NormalValuesGuide() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        Every exam finding with a documented normal/expected value elsewhere on this site, gathered into one
        interpretation table. Click a test name to open its full calculator or source reference table — each of
        those pages carries the fuller citation, convention, and caveats for that specific value.
      </p>

      <Section title="Binocular Vision &amp; Vergence" rows={BINOCULAR_VISION} />
      <Section title="Accommodation" rows={ACCOMMODATION} />
      <Section title="Cornea &amp; Anterior Segment" rows={CORNEA_ANTERIOR} />
      <Section title="Intraocular Pressure" rows={IOP} />
      <Section title="Visual Acuity" rows={VISUAL_ACUITY} />

      <p className="text-xs text-slate-500">
        These are population norms and commonly cited clinical thresholds, not fixed diagnostic cutoffs for a
        specific patient — normal individual variation is real, symptoms matter as much as the number, and several
        of these values (Morgan's norms especially) vary somewhat across textbook reproductions. Where a row links
        to a fuller reference or calculator, that page documents the source, convention, and limitations in more
        depth than fits here.
      </p>
    </ReferenceShell>
  )
}
