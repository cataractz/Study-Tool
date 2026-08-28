import { Link } from 'react-router-dom'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import { Linkify } from '../components/shared/Linkify'
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
    'slit lamp findings',
    'anterior segment normal',
    'posterior segment normal',
    'interpupillary distance',
    'myopia hyperopia classification',
    'exam form',
    'quick reference',
    'cheat sheet',
  ],
}

/** For tests with a real, meaningful two-directional numeric/ordinal scale (e.g. phoria can
 * shift exo OR eso; IOP can be too low OR too high). */
interface QuantRow {
  test: string
  normal: string
  low: string
  high: string
  link?: { to: string; label: string }
}

/** For pass/fail or presence-absence findings that don't have a meaningful "too much of a good
 * thing" direction (e.g. color vision is either normal or deficient — there's no such thing as
 * "too much" color vision). Using a Low/High table for these produced nonsensical rows (e.g.
 * restricted EOMs is not a "high" finding), so these get their own simpler format instead. */
interface QualRow {
  test: string
  normal: string
  abnormal: string
  link?: { to: string; label: string }
}

const VISUAL_ACUITY: QuantRow[] = [
  {
    test: 'Visual acuity (best corrected)',
    normal: '20/20 (decimal 1.0, logMAR 0.0) or better',
    low: 'Reduced VA — refractive error, media opacity, retinal/optic nerve pathology, amblyopia, etc.; see the classification table for low-vision/legal-blindness thresholds',
    high: '—',
    link: { to: '/references/low-vision-classification', label: 'Legal Blindness & Low Vision Classification' },
  },
]

const VISUAL_ACUITY_ADDITIONAL: QualRow[] = [
  {
    test: 'Pinhole (PH) response',
    normal: 'Improves (or maintains) VA when the reduction was refractive in origin',
    abnormal: 'No improvement with pinhole — suggests a non-refractive cause (media opacity, retinal/optic nerve pathology, amblyopia) rather than uncorrected refractive error',
  },
  {
    test: 'Color vision (e.g. Ishihara plates)',
    normal: 'Correctly identifies the test plates',
    abnormal: 'Plates missed in a red-green pattern suggest congenital red-green color vision deficiency (~8% of males, ~0.5% of females) — the most common cause; a non-red-green pattern raises suspicion for acquired optic nerve or macular disease instead',
  },
]

const REFRACTIVE_ERROR: QuantRow[] = [
  {
    test: 'Interpupillary distance (PD), adult',
    normal: 'Roughly 54–68 mm is a commonly cited typical adult range',
    low: 'Uncommon but not itself pathological — just a smaller-than-typical measurement; ensure accurate measurement for lens/segment centration',
    high: 'Uncommon but not itself pathological — same as above',
  },
  {
    test: 'Myopia severity (spherical equivalent)',
    normal: 'Emmetropia (plano) is the optical "ideal," but any refractive error is common and not itself abnormal',
    low: '—',
    high: 'Classification cutoffs are NOT standardized across sources — commonly cited tiers: low myopia to about −3.00 D, moderate −3.00 to −6.00 D, high myopia beyond −6.00 D (the WHO threshold); some texts instead use −8.00 D as the high-myopia cutoff. High myopia carries increased lifetime risk of retinal detachment, myopic maculopathy, and glaucoma.',
  },
  {
    test: 'Hyperopia severity (spherical equivalent)',
    normal: 'See myopia note above — any amount is common, not itself abnormal',
    low: '—',
    high: 'Commonly cited tiers: low to about +2.00 D, moderate +2.00 to +5.00 D, high beyond +5.00 D — again, exact cutoffs vary by source. +2.00 D or more is common in children and may not need correction if asymptomatic.',
  },
]

const PUPILS: QuantRow[] = [
  {
    test: 'Pupil size — photopic (bright light)',
    normal: '~3–4 mm average (commonly cited range ~2–5 mm)',
    low: 'Miotic — consider pharmacologic (e.g. pilocarpine), Horner syndrome, iritis/synechiae, age-related miosis',
    high: 'Mydriatic — consider pharmacologic dilation, third nerve palsy, Adie tonic pupil, trauma',
  },
  {
    test: 'Pupil size — scotopic (dim light)',
    normal: '~6 mm average (commonly cited range ~4–8 mm)',
    low: 'Unusually small dark pupil — same differential as photopic miosis above',
    high: 'Unusually large dark pupil — same differential as photopic mydriasis above; also clinically relevant to refractive surgery candidacy (larger scotopic pupils carry more risk of night-vision symptoms such as glare/halos post-op)',
  },
  {
    test: 'Anisocoria (difference between pupil sizes)',
    normal: 'Equal, or a small difference (commonly cited up to ~1 mm, roughly consistent between light and dark) — "physiologic" anisocoria is common',
    low: '—',
    high: 'Larger difference, or one that changes between light and dark — the pupil that fails to react appropriately (won\'t constrict = parasympathetic/efferent problem; won\'t dilate = sympathetic problem) points to the abnormal side',
  },
]

const PUPILS_QUALITATIVE: QualRow[] = [
  {
    test: 'Pupil shape',
    normal: 'Round, regular',
    abnormal: 'Irregular — consider prior trauma/surgery, posterior synechiae (iritis), coloboma, or iris atrophy',
  },
  {
    test: 'Pupil reactivity (direct / consensual / near)',
    normal: 'Brisk and equal in both eyes',
    abnormal: 'Sluggish or poor reaction — consider an afferent (sensory) or efferent (motor) pupillary pathway lesion depending on the pattern',
  },
  {
    test: 'APD (afferent pupillary defect / Marcus Gunn)',
    normal: 'Negative/absent',
    abnormal: 'Present (graded roughly 1+ to 4+ by density of neutral-density filter needed to neutralize it on reverse swinging-flashlight testing) — suggests asymmetric optic nerve or severe/extensive retinal pathology on the affected side',
  },
]

const MOTILITY: QuantRow[] = [
  {
    test: 'Extraocular motility (EOMs)',
    normal: 'Full and smooth through all positions of gaze OU, no restriction, pain, or diplopia',
    low: 'Underaction/restriction of movement in one or more directions — consider cranial nerve palsy (III/IV/VI), restrictive strabismus, or orbital pathology (e.g. thyroid eye disease, orbital fracture with entrapment)',
    high: 'Overaction of a muscle relative to its normal excursion — e.g. inferior oblique overaction, a real and commonly tested finding in some strabismus patterns (often paired with contralateral superior oblique underaction)',
  },
]

const VISUAL_FIELDS_QUALITATIVE: QualRow[] = [
  {
    test: 'Confrontation visual fields (CVF)',
    normal: 'Full to finger counting in all 4 quadrants OU, matching the examiner\'s field',
    abnormal: 'Any quadrant or area of loss — correlate with formal perimetry; the pattern of loss helps localize the lesion (e.g. respecting the vertical midline suggests a chiasmal/retrochiasmal cause)',
  },
]

const BINOCULAR_VISION: QuantRow[] = [
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
    normal: '0Δ (or clinically negligible)',
    low: '—',
    high: 'Any consistently measurable amount present (a hyperphoria of one eye is equivalent to a hypophoria of the other) — unlike a small horizontal phoria, this is often clinically noted regardless of size; consider superior oblique palsy, skew deviation, or a decompensating vertical phoria, especially if symptomatic',
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

const ACCOMMODATION: QuantRow[] = [
  {
    test: 'Amplitude of accommodation',
    normal: 'Age-dependent — see Hofstetter\'s formulas / Donders\' table',
    low: 'Lower than age-expected — accommodative insufficiency (if not age-appropriate presbyopia)',
    high: '—',
    link: { to: '/references/donders-table', label: "Donders' Table & Hofstetter's Formulas" },
  },
]

const CORNEA_ANTERIOR: QuantRow[] = [
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

const ANTERIOR_SEGMENT_STRUCTURES: QualRow[] = [
  { test: 'Lids/lashes', normal: 'Normal position and closure, lashes directed away from the globe, no lesions', abnormal: 'Ptosis/lid retraction, entropion/ectropion, trichiasis, blepharitis, chalazion/hordeolum, or other lesions' },
  { test: 'Conjunctiva', normal: 'White/clear, no significant injection, no discharge', abnormal: 'Injection (redness), follicles/papillae, discharge, chemosis, or subconjunctival hemorrhage' },
  { test: 'Sclera', normal: 'White', abnormal: 'Redness/injection (episcleritis, scleritis), jaundice (yellow), or focal thinning/staphyloma' },
  { test: 'Cornea', normal: 'Clear, smooth, no staining', abnormal: 'Staining/epithelial defect, edema, infiltrate, scarring, neovascularization, or irregular surface' },
  { test: 'Anterior chamber', normal: 'Deep and quiet — no cells or flare', abnormal: 'Cells and/or flare (uveitis), hyphema, hypopyon, or shallow depth (angle-closure risk)' },
  { test: 'Iris', normal: 'Round, normal color and pattern, no neovascularization', abnormal: 'Neovascularization (rubeosis), nodules, atrophy, or posterior synechiae' },
  { test: 'Lens', normal: 'Clear', abnormal: 'Cataract (any type/density), subluxation/dislocation' },
]

const IOP: QuantRow[] = [
  {
    test: 'Intraocular pressure (IOP)',
    normal: '10–21 mmHg (average ~15–16 mmHg)',
    low: 'Hypotony (< 10 mmHg, especially < 6 mmHg) — consider wound leak, uveitis, other causes',
    high: 'Ocular hypertension (> 21 mmHg) — a glaucoma risk factor, not a diagnosis by itself; correlate with CCT, optic nerve, and visual field',
    link: { to: '/calculators/ocular-perfusion-pressure', label: 'MAP & Ocular Perfusion Pressure calculator' },
  },
]

const OPTIC_NERVE: QuantRow[] = [
  {
    test: 'Cup-to-disc ratio (C/D)',
    normal: '~0.3–0.4 average (up to ~0.5–0.6 can be normal if symmetric and proportionate to disc size)',
    low: '—',
    high: '> 0.6, or asymmetry ≥ 0.2 between the two eyes — a glaucoma risk factor/suspicious finding (inter-eye asymmetry this large occurs in only ~2% of people without glaucoma) that warrants further workup, not a diagnosis by itself',
  },
]

const POSTERIOR_SEGMENT_STRUCTURES: QualRow[] = [
  { test: 'Vitreous', normal: 'Clear, formed, no cells', abnormal: 'Cells/haze (vitritis), hemorrhage, or symptomatic posterior vitreous detachment (flashes/floaters)' },
  { test: 'Disc', normal: 'Well-defined margins, normal (pink/orange) color, no edema or hemorrhage', abnormal: 'Pallor (optic atrophy), edema/blurred margins (papilledema, disc edema), or peripapillary hemorrhage' },
  { test: 'Macula', normal: 'Normal foveal reflex, flat, no pigment/fluid changes', abnormal: 'Edema, drusen, pigmentary changes, hemorrhage, hole, or epiretinal membrane' },
  { test: 'Vessels', normal: 'Normal caliber and course, normal arteriovenous ratio, no crossing changes', abnormal: 'AV nicking, attenuation, hemorrhages, cotton-wool spots, or neovascularization' },
  { test: 'Periphery', normal: 'Flat, attached, no holes/tears/degeneration', abnormal: 'Retinal holes/tears/detachment, lattice degeneration, or other peripheral pathology' },
]

function QuantitativeSection({ title, rows }: { title: string; rows: QuantRow[] }) {
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
            <Linkify text={r.low} />
          </span>,
          <span key="high" className="text-slate-600 whitespace-normal">
            <Linkify text={r.high} />
          </span>,
        ])}
      />
    </div>
  )
}

function QualitativeSection({ title, rows }: { title: string; rows: QualRow[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-700 mb-2">{title}</h2>
      <ReferenceTable
        headers={['Test / structure', 'Normal / expected finding', 'If abnormal, suggests']}
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
          <span key="normal" className="text-slate-700 whitespace-normal">
            {r.normal}
          </span>,
          <span key="abnormal" className="text-slate-600 whitespace-normal">
            <Linkify text={r.abnormal} />
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
        interpretation guide — organized to follow a typical comprehensive exam, from preliminary testing through
        posterior segment. Tests with a genuine two-directional scale (e.g. a phoria can shift exo or eso, IOP can
        be too low or too high) use a Low/High table; pass-fail or presence/absence findings (e.g. color vision,
        APD) use a simpler Normal/Abnormal table instead, since forcing those into "high" and "low" produced
        nonsensical rows. Click a test name to open its full calculator or source reference table.
      </p>

      <QuantitativeSection title="Visual Acuity" rows={VISUAL_ACUITY} />
      <QualitativeSection title="Pinhole &amp; Color Vision" rows={VISUAL_ACUITY_ADDITIONAL} />
      <QuantitativeSection title="Refractive Error &amp; Interpupillary Distance" rows={REFRACTIVE_ERROR} />
      <QuantitativeSection title="Pupils — Size &amp; Anisocoria" rows={PUPILS} />
      <QualitativeSection title="Pupils — Shape, Reactivity &amp; Afferent Pathway" rows={PUPILS_QUALITATIVE} />
      <QuantitativeSection title="Extraocular Motility" rows={MOTILITY} />
      <QualitativeSection title="Confrontation Visual Fields" rows={VISUAL_FIELDS_QUALITATIVE} />
      <QuantitativeSection title="Binocular Vision &amp; Vergence" rows={BINOCULAR_VISION} />
      <QuantitativeSection title="Accommodation" rows={ACCOMMODATION} />
      <QuantitativeSection title="Cornea &amp; Anterior Chamber Angle" rows={CORNEA_ANTERIOR} />
      <QualitativeSection title="Anterior Segment Structures (Slit Lamp)" rows={ANTERIOR_SEGMENT_STRUCTURES} />
      <QuantitativeSection title="Intraocular Pressure" rows={IOP} />
      <QuantitativeSection title="Optic Nerve" rows={OPTIC_NERVE} />
      <QualitativeSection title="Posterior Segment Structures" rows={POSTERIOR_SEGMENT_STRUCTURES} />

      <p className="text-xs text-slate-500">
        These are population norms and commonly cited clinical thresholds, not fixed diagnostic cutoffs for a
        specific patient — normal individual variation is real, symptoms matter as much as the number, and several
        of these values (Morgan's norms especially, and refractive error severity tiers) vary across textbook and
        source reproductions — where that's the case it's stated explicitly in the row itself. Where a row links to
        a fuller reference or calculator, that page documents the source, convention, and limitations in more depth
        than fits here.
      </p>
    </ReferenceShell>
  )
}
