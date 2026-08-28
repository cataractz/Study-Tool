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
    'vertical vergence',
    'stereopsis',
    'stereoacuity',
    'IOP',
    'intraocular pressure',
    'keratometry normal',
    'corneal thickness normal',
    'pupils',
    'anisocoria',
    'APD',
    'color vision',
    'ishihara',
    'EOM',
    'extraocular motility',
    'confrontation visual fields',
    'van herick',
    'anterior chamber angle',
    'cup to disc ratio',
    'C/D ratio',
    'exam form',
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

const VISUAL_ACUITY: Row[] = [
  {
    test: 'Visual acuity (best corrected)',
    normal: '20/20 (decimal 1.0, logMAR 0.0) or better',
    low: 'Reduced VA — refractive error, media opacity, retinal/optic nerve pathology, amblyopia, etc.; see the classification table for low-vision/legal-blindness thresholds',
    high: '—',
    link: { to: '/references/low-vision-classification', label: 'Legal Blindness & Low Vision Classification' },
  },
  {
    test: 'Pinhole (PH) acuity',
    normal: 'Improves to (or maintains) normal VA if the reduction was refractive in origin',
    low: '—',
    high: 'No improvement with pinhole — suggests a non-refractive cause (media opacity, retinal/optic nerve pathology, amblyopia) rather than uncorrected refractive error',
  },
  {
    test: 'Color vision (e.g. Ishihara plates)',
    normal: 'Correctly identifies the test plates',
    low: '—',
    high: 'Plates missed in a red-green pattern suggest congenital red-green color vision deficiency (~8% of males, ~0.5% of females) — the most common cause; an acquired/non-red-green pattern raises suspicion for optic nerve or macular disease instead',
  },
]

const PUPILS: Row[] = [
  {
    test: 'Pupil size — photopic (bright light)',
    normal: '~3–4 mm average (commonly cited range ~2–5 mm)',
    low: 'Miotic — consider pharmacologic (e.g. pilocarpine), Horner syndrome, iritis/synechiae, age-related miosis',
    high: 'Mydriatic — consider pharmacologic dilation, third nerve palsy, Adie tonic pupil, trauma',
  },
  {
    test: 'Pupil size — scotopic (dim light)',
    normal: '~6 mm average (commonly cited range ~4–8 mm)',
    low: '—',
    high: '—',
  },
  {
    test: 'Pupil reactivity (direct / consensual / near)',
    normal: 'Brisk and equal in both eyes',
    low: 'Sluggish or poor reaction — consider an afferent (sensory) or efferent (motor) pupillary pathway lesion depending on the pattern',
    high: '—',
  },
  {
    test: 'Anisocoria (difference between pupil sizes)',
    normal: 'Equal, or a small difference (commonly cited up to ~1 mm, roughly consistent between light and dark) — "physiologic" anisocoria is common',
    low: '—',
    high: 'Larger difference, or one that changes between light and dark — the pupil that fails to react appropriately (won\'t constrict = parasympathetic/efferent problem; won\'t dilate = sympathetic problem) points to the abnormal side',
  },
  {
    test: 'APD (afferent pupillary defect / Marcus Gunn)',
    normal: 'Negative/absent',
    low: '—',
    high: 'Present — suggests asymmetric optic nerve or severe/extensive retinal pathology on the affected side',
  },
]

const MOTILITY_AND_FIELDS: Row[] = [
  {
    test: 'Extraocular motility (EOMs)',
    normal: 'Full and smooth through all positions of gaze OU, no restriction, pain, or diplopia',
    low: '—',
    high: 'Restriction or limitation of movement — consider cranial nerve palsy (III/IV/VI), restrictive strabismus, or orbital pathology (e.g. thyroid eye disease, orbital fracture)',
  },
  {
    test: 'Confrontation visual fields (CVF)',
    normal: 'Full to finger counting in all 4 quadrants OU, matching the examiner\'s field',
    low: '—',
    high: 'Any quadrant or area of loss — correlate with formal perimetry; the pattern of loss helps localize the lesion (e.g. respecting the vertical midline suggests a chiasmal/retrochiasmal cause)',
  },
]

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
    test: 'Vertical phoria (distance or near)',
    normal: 'Zero to negligible — unlike horizontal phoria, any consistently measurable vertical phoria is often clinically noted',
    low: '—',
    high: 'Hyperphoria/hypophoria present — consider superior oblique palsy, skew deviation, or other vertical-deviation causes, especially if symptomatic or long-standing',
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
    test: 'Vertical fusional vergence (BD/BU) — break',
    normal: '2–3Δ (recovery ≥ ~1.5Δ), and symmetric between the two eyes',
    low: 'Reduced or asymmetric between eyes — may indicate difficulty compensating a vertical phoria',
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
    link: { to: '/references/donders-table', label: "Donders' Table & Hofstetter's Formulas" },
  },
]

const CORNEA_ANTERIOR: Row[] = [
  {
    test: 'Central corneal thickness (CCT)',
    normal: '~540–550 µm average (501–570 µm typical range)',
    low: 'Thin (≤ 500 µm) — glaucoma risk factor; applanation tonometry tends to UNDER-read true IOP',
    high: 'Thick (> 570 µm) — applanation tonometry tends to OVER-read true IOP',
    link: { to: '/references/corneal-thickness-table', label: 'Central Corneal Thickness Reference' },
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
  {
    test: 'Van Herick angle grade (peripheral AC depth : corneal thickness)',
    normal: 'Grade 3–4 (AC depth ≥ 25–100%+ of corneal thickness) — angle open, low probability of closure',
    low: 'Grade 0–2 (AC depth < 25% of corneal thickness, down to no visible gap) — narrow to closed angle, increasing risk of angle closure; consider gonioscopy and caution with pharmacologic dilation',
    high: '—',
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

const OPTIC_NERVE: Row[] = [
  {
    test: 'Cup-to-disc ratio (C/D)',
    normal: '~0.3–0.4 average (up to ~0.5–0.6 can be normal if symmetric and proportionate to disc size)',
    low: '—',
    high: '> 0.6, or asymmetry ≥ 0.2 between the two eyes — a glaucoma risk factor/suspicious finding (inter-eye asymmetry this large occurs in only ~2% of people without glaucoma) that warrants further workup, not a diagnosis by itself',
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
        interpretation table — organized to follow a typical comprehensive exam, from preliminary testing through
        posterior segment. Click a test name to open its full calculator or source reference table — each of those
        pages carries the fuller citation, convention, and caveats for that specific value.
      </p>

      <Section title="Visual Acuity &amp; Color Vision" rows={VISUAL_ACUITY} />
      <Section title="Pupils" rows={PUPILS} />
      <Section title="Extraocular Motility &amp; Visual Fields" rows={MOTILITY_AND_FIELDS} />
      <Section title="Binocular Vision &amp; Vergence" rows={BINOCULAR_VISION} />
      <Section title="Accommodation" rows={ACCOMMODATION} />
      <Section title="Cornea &amp; Anterior Segment" rows={CORNEA_ANTERIOR} />
      <Section title="Intraocular Pressure" rows={IOP} />
      <Section title="Optic Nerve / Posterior Segment" rows={OPTIC_NERVE} />

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
