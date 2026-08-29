import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight, Info } from 'lucide-react'
import { ReferenceShell } from './shared/ReferenceShell'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Linkify } from '../components/shared/Linkify'
import { getDiseaseById } from '../services/diseaseService'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'visual-field-defect-localization',
  name: 'Visual Field Defect Localization',
  category: 'Neuro-Ophthalmology',
  description:
    'The visual pathway from retina to occipital cortex, with the exact field defect produced by a lesion at each of the 11 classic teaching sites — junctional scotoma, bitemporal hemianopia, incongruous vs. congruous homonymous defects, quadrantanopias, macular sparing, and more.',
  keywords: [
    'visual field defect',
    'visual pathway',
    'localization',
    'optic nerve',
    'junctional scotoma',
    "Wilbrand's knee",
    'optic chiasm',
    'bitemporal hemianopia',
    'binasal hemianopia',
    'optic tract',
    'incongruous',
    'congruous',
    'homonymous hemianopia',
    'quadrantanopia',
    'pie in the sky',
    'pie on the floor',
    'PITS mnemonic',
    "Meyer's loop",
    'temporal lobe',
    'parietal lobe',
    'lateral geniculate nucleus',
    'LGN',
    'sectoranopia',
    'occipital cortex',
    'calcarine',
    'cuneus',
    'lingual gyrus',
    'macular sparing',
    'temporal crescent syndrome',
    'pituitary adenoma',
    'craniopharyngioma',
    'relative afferent pupillary defect',
    'bowtie atrophy',
    'neuro-ophthalmology',
  ],
}

// --- Small reusable visual-field icon --------------------------------------------------------

const SHADE = '#475569'

function FieldCircle({ shaded, label }: { shaded: ReactNode; label: string }) {
  const clip = useId()
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 100 100" width="72" height="72" className="shrink-0">
        <defs>
          <clipPath id={clip}>
            <circle cx="50" cy="50" r="46" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="46" fill="#fff" />
        <g clipPath={`url(#${clip})`}>{shaded}</g>
        <circle cx="50" cy="50" r="46" fill="none" stroke="#94a3b8" strokeWidth="2.5" />
        <line x1="50" y1="4" x2="50" y2="96" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="50" cy="50" r="2.2" fill="#64748b" />
      </svg>
      <span className="text-[10px] font-semibold text-slate-400 tracking-wide">{label}</span>
    </div>
  )
}

/** Field icon pair in the standard printout convention: OS plotted on the left, OD on the
 * right — "as if the patient were looking at their own visual field" — so within each eye's own
 * circle, the OUTER (page-edge) side is that eye's TEMPORAL field and the INNER (center) side is
 * that eye's NASAL field. */
function EyePair({ od, os }: { od?: ReactNode; os?: ReactNode }) {
  return (
    <div className="flex items-end gap-3">
      <FieldCircle shaded={os} label="OS" />
      <FieldCircle shaded={od} label="OD" />
    </div>
  )
}

const rightHalf = <rect x="50" y="0" width="50" height="100" fill={SHADE} />
const leftHalf = <rect x="0" y="0" width="50" height="100" fill={SHADE} />
const fullField = <rect x="0" y="0" width="100" height="100" fill={SHADE} />
const upperRightQuad = <rect x="50" y="0" width="50" height="50" fill={SHADE} />
const lowerRightQuad = <rect x="50" y="50" width="50" height="50" fill={SHADE} />
const rightHalfWithMacularSparing = (
  <>
    <rect x="50" y="0" width="50" height="100" fill={SHADE} />
    <circle cx="50" cy="50" r="9" fill="#fff" stroke={SHADE} strokeWidth="1.5" />
  </>
)
const smallRightCentralScotoma = <rect x="50" y="35" width="18" height="30" rx="2" fill={SHADE} />
const incongruousRightHalf = <rect x="58" y="10" width="36" height="80" fill={SHADE} />
const farTemporalCrescent = <rect x="80" y="0" width="20" height="100" fill={SHADE} />
/** Dense but not total loss — a wide shaded field with a thin surviving peripheral rim, distinct
 * from fullField's edge-to-edge total loss. */
const denseLossWithRim = <circle cx="50" cy="50" r="40" fill={SHADE} />
/** A small, partial supero-temporal wedge — smaller than a full quadrant. */
const smallSuperoTemporalWedge = <rect x="58" y="4" width="38" height="40" fill={SHADE} />

// --- Pathway overview diagram ------------------------------------------------------------------

function Waypoint({
  cx,
  cy,
  n,
  label,
  labelDx = 16,
  labelDy = 0,
  color = '#6d28d9',
  anchor = 'start',
}: {
  cx: number
  cy: number
  n: number | string
  label?: string
  labelDx?: number
  labelDy?: number
  color?: string
  anchor?: 'start' | 'middle' | 'end'
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="12" fill={color} stroke="#fff" strokeWidth="2" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="700" fill="#fff">
        {n}
      </text>
      {label && (
        <text
          x={cx + labelDx}
          y={cy + labelDy}
          textAnchor={anchor}
          dominantBaseline="central"
          fontSize="11.5"
          fontWeight="600"
          fill="#334155"
        >
          {label}
        </text>
      )}
    </g>
  )
}

/**
 * An original schematic of the visual pathway — eyes at top, crossing at the chiasm, continuing
 * down through the tract/LGN/radiations of ONE hemisphere (labeled, not copied from any published
 * figure) to the occipital cortex at bottom. It mirrors the layout used in classic teaching
 * diagrams (eyes-to-occipital-cortex with numbered lesion sites) without reproducing any specific
 * published illustration.
 */
function PathwayDiagram() {
  return (
    <svg viewBox="0 0 620 720" className="w-full h-auto" role="img" aria-label="Schematic of the visual pathway from the eyes to the occipital cortex, with 11 numbered classic lesion sites plus one bonus site">
      {/* eyes */}
      <circle cx="210" cy="36" r="22" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <text x="210" y="36" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="700" fill="#0369a1">OS</text>
      <text x="210" y="68" textAnchor="middle" fontSize="10.5" fill="#64748b">Left eye</text>

      <circle cx="410" cy="36" r="22" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
      <text x="410" y="36" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="700" fill="#0369a1">OD</text>
      <text x="410" y="68" textAnchor="middle" fontSize="10.5" fill="#64748b">Right eye</text>

      {/* nerve fibers converging on the chiasm */}
      <line x1="210" y1="58" x2="300" y2="150" stroke="#94a3b8" strokeWidth="3" />
      <line x1="410" y1="58" x2="300" y2="150" stroke="#94a3b8" strokeWidth="3" />

      {/* the highlighted single-hemisphere pathway from chiasm onward */}
      <line x1="300" y1="150" x2="300" y2="300" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
      <path d="M300,300 Q225,350 210,420 Q225,485 280,540" fill="none" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
      <path d="M300,300 Q375,350 390,420 Q375,485 320,540" fill="none" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />

      <ellipse cx="300" cy="270" rx="28" ry="19" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />

      {/* occipital cortex box */}
      <rect x="150" y="540" width="320" height="150" rx="14" fill="#faf5ff" stroke="#7c3aed" strokeWidth="2" />
      <text x="310" y="670" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#5b21b6">Occipital (Calcarine) Cortex</text>

      {/* waypoints 1 & 2: on the pre-chiasmal left optic nerve */}
      <Waypoint cx={252} cy={100} n={1} label="Optic nerve" labelDx={12} labelDy={-10} />
      <Waypoint cx={282} cy={132} n={2} label="Junctional" labelDx={-14} labelDy={-12} anchor="end" />

      <Waypoint cx={300} cy={150} n={3} label="Chiasm" labelDx={16} labelDy={14} />
      <Waypoint cx={300} cy={210} n={4} label="Optic tract" labelDx={16} labelDy={0} />
      <Waypoint cx={300} cy={270} n={5} label="LGN" labelDx={34} labelDy={0} />
      <Waypoint cx={210} cy={392} n={6} label="Temporal lobe" labelDx={-14} labelDy={-14} anchor="end" />
      <Waypoint cx={390} cy={392} n={7} label="Parietal lobe" labelDx={14} labelDy={-14} />

      <Waypoint cx={200} cy={575} n={8} label="Upper bank" labelDx={0} labelDy={22} anchor="middle" />
      <Waypoint cx={280} cy={575} n={9} label="Lower bank" labelDx={0} labelDy={22} anchor="middle" />
      <Waypoint cx={360} cy={575} n={10} label="Complete" labelDx={0} labelDy={22} anchor="middle" />
      <Waypoint cx={440} cy={575} n={11} label="Pole" labelDx={0} labelDy={22} anchor="middle" />

      <Waypoint cx={300} cy={512} n={12} label="Ant. calcarine (bonus)" labelDx={16} labelDy={-2} color="#059669" />
    </svg>
  )
}

// --- Site data ------------------------------------------------------------------------------

interface Site {
  number: number
  title: string
  defectName: string
  od?: ReactNode
  os?: ReactNode
  description: string
  causes: string
  pearl: string
  diseaseId?: string
}

const SITES: Site[] = [
  {
    number: 1,
    title: 'Optic Nerve (prechiasmal)',
    defectName: 'Monocular vision loss (total or a central scotoma)',
    os: fullField,
    od: undefined,
    description:
      'A lesion anywhere along one optic nerve — from the globe to just short of the chiasm — affects only that eye, since the nerve carries all of that eye\'s fibers before any crossing occurs. Depending on severity this ranges from a dense central scotoma to complete monocular blindness, and produces a relative afferent pupillary defect (RAPD) in the affected eye.',
    causes: 'Optic neuritis, ischemic optic neuropathy, compressive optic nerve tumor, traumatic optic neuropathy',
    pearl: 'A RAPD localizes to the optic nerve/retina of that eye (or a severe, asymmetric chiasmal/tract lesion) — it never occurs from a lesion purely behind the chiasm affecting both eyes equally.',
    diseaseId: 'optic-neuritis',
  },
  {
    number: 2,
    title: 'Posterior Optic Nerve (junctional)',
    defectName: 'Junctional scotoma — ipsilateral vision loss + contralateral supero-temporal defect',
    os: denseLossWithRim,
    od: smallSuperoTemporalWedge,
    description:
      'A lesion right where the optic nerve joins the chiasm damages that nerve\'s own fibers (ipsilateral vision loss) plus a small bundle of already-crossing fibers from the OPPOSITE eye\'s inferonasal retina, producing a small contralateral superior temporal field defect. The classic anatomic explanation is an anterior loop of crossing fibers into the posterior contralateral nerve ("Wilbrand\'s knee") — modern anatomic studies suggest this loop may actually be an artifact of the enucleated specimens it was first described in, but the clinical localizing value of the finding itself is unchanged either way.',
    causes: 'Pituitary adenoma or other sellar/parasellar mass extending anteriorly to the junction of nerve and chiasm, anterior communicating artery aneurysm',
    pearl: 'Terminology varies by source: some restrict "junctional scotoma of Traquair" to a contralateral peripheral TEMPORAL CRESCENT defect only, and use plain "junctional scotoma" for the more commonly described contralateral SUPERO-TEMPORAL QUADRANT defect shown here — know the pattern more than the exact label.',
    diseaseId: 'chiasmal-syndrome',
  },
  {
    number: 3,
    title: 'Optic Chiasm — Central Compression',
    defectName: 'Bitemporal hemianopia',
    od: rightHalf,
    os: leftHalf,
    description:
      'Crossing (decussating) nasal-retina fibers from both eyes are compressed at the chiasm, taking out the temporal field of each eye — the two "outer" halves — while the nasal fields (which stay uncrossed) are spared. The defect classically respects the vertical midline.',
    causes: 'Pituitary adenoma (compresses from below → bitemporal SUPERIOR quadrant loss first), craniopharyngioma (compresses from above, at the pituitary stalk → bitemporal INFERIOR quadrant loss first)',
    pearl: 'Direction of first quadrant loss tells you which way the mass is pushing: adenoma pushes UP into the chiasm from below → superior defect first; craniopharyngioma pushes DOWN from above → inferior defect first.',
    diseaseId: 'chiasmal-syndrome',
  },
  {
    number: 4,
    title: 'Optic Tract',
    defectName: 'Incongruous contralateral homonymous hemianopia',
    od: rightHalf,
    os: incongruousRightHalf,
    description:
      'Just past the chiasm, each tract carries a mix of crossed and uncrossed fibers representing the opposite (contralateral) visual field of both eyes — a left tract lesion causes a right-sided defect in both eyes. Because the crossed and uncrossed fibers haven\'t yet been reorganized (that happens at the LGN), the two eyes\' defects are usually unequal in size/shape — "incongruous."',
    causes: 'Pituitary tumor extending posteriorly, craniopharyngioma, meningioma, trauma, stroke',
    pearl: 'A contralateral RAPD (in the eye with the temporal field loss) plus a "bowtie" pattern of optic disc pallor is the classic combination that localizes to the tract rather than farther back in the pathway.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 5,
    title: 'Lateral Geniculate Nucleus (LGN)',
    defectName: 'Homonymous hemianopia (sometimes a horizontal sectoranopia)',
    od: rightHalf,
    os: rightHalf,
    description:
      'An isolated LGN lesion is uncommon and produces a contralateral homonymous defect like a tract or radiation lesion. Because the LGN has a dual blood supply (anterior and lateral posterior choroidal arteries) split along a horizontal line, a vascular LGN lesion can occasionally produce a distinctive horizontal sector defect instead of a simple hemianopia.',
    causes: 'Anterior or posterior choroidal artery infarct (rare as an isolated finding)',
    pearl: 'The LGN is the rarest isolated localization on this list — most exam "homonymous hemianopia" questions are really testing the tract, radiations, or cortex.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 6,
    title: "Temporal Lobe (Meyer's Loop)",
    defectName: 'Contralateral homonymous superior quadrantanopia — "pie in the sky"',
    od: upperRightQuad,
    os: upperRightQuad,
    description:
      "Inferior optic radiation fibers carrying the SUPERIOR visual field loop forward through the temporal lobe (Meyer's loop) before heading back to the occipital cortex, making them vulnerable to temporal lobe lesions. The defect is usually incongruous and denser/larger than its parietal counterpart.",
    causes: 'Temporal lobe tumor, temporal lobe epilepsy surgery/resection, middle cerebral artery branch stroke',
    pearl: 'Mnemonic — PITS: Parietal = Inferior field, Temporal = Superior field. "Pie in the sky" (temporal) vs. "pie on the floor" (parietal).',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 7,
    title: 'Parietal Lobe',
    defectName: 'Contralateral homonymous inferior quadrantanopia — "pie on the floor"',
    od: lowerRightQuad,
    os: lowerRightQuad,
    description:
      'Superior optic radiation fibers carrying the INFERIOR visual field take a more direct route through the parietal lobe. Parietal quadrantanopias tend to be more congruous than temporal ones and may come with other parietal signs (e.g. asymmetric optokinetic nystagmus, neglect with a non-dominant hemisphere lesion).',
    causes: 'Parietal lobe tumor, middle cerebral artery branch stroke',
    pearl: 'Same mnemonic as Meyer\'s loop — PITS: Parietal = Inferior, Temporal = Superior.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 8,
    title: 'Occipital Lobe — Upper Bank (cuneus)',
    defectName: 'Contralateral homonymous inferior quadrantanopia',
    od: lowerRightQuad,
    os: lowerRightQuad,
    description:
      'The calcarine cortex is retinotopically inverted: the UPPER (dorsal) bank of the calcarine fissure — the cuneus — represents the LOWER visual field. A lesion confined to just this bank produces an inferior quadrantanopia. The field defect looks identical to a parietal radiation lesion (#7); what usually distinguishes them is congruity and associated signs, not the visual field shape alone.',
    causes: 'Posterior cerebral artery branch infarct limited to the upper calcarine bank, tumor',
    pearl: 'Same visual field result as parietal lobe (#7), different anatomic level — cortical quadrantanopias from a bank lesion tend to be even more congruous/complete than the radiation-level version.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 9,
    title: 'Occipital Lobe — Lower Bank (lingual gyrus)',
    defectName: 'Contralateral homonymous superior quadrantanopia',
    od: upperRightQuad,
    os: upperRightQuad,
    description:
      'The LOWER (ventral) bank of the calcarine fissure — the lingual gyrus — represents the UPPER visual field (again, the inverted retinotopic map). A lesion confined to just this bank produces a superior quadrantanopia, looking identical to a Meyer\'s loop/temporal lobe lesion (#6) but arising at the cortex instead of the radiations.',
    causes: 'Posterior cerebral artery branch infarct limited to the lower calcarine bank, tumor',
    pearl: 'Upper bank (cuneus) = inferior field out. Lower bank (lingual gyrus) = superior field out. It\'s the mirror-image logic of Meyer\'s loop (temporal, superior) vs. parietal (inferior) — but one anatomic level further back.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 10,
    title: 'Occipital Cortex — Complete Lesion',
    defectName: 'Congruous complete homonymous hemianopia with macular sparing',
    od: rightHalfWithMacularSparing,
    os: rightHalfWithMacularSparing,
    description:
      'A complete lesion of the primary visual cortex (calcarine fissure) produces a dense, highly congruous homonymous hemianopia — but classically WITH macular sparing. The macular representation at the occipital pole has a dual blood supply (middle cerebral artery collaterals plus posterior cerebral artery), so a PCA-territory infarct that takes out the rest of the hemifield often spares the pole.',
    causes: 'Posterior cerebral artery (PCA) territory stroke (the classic cause), occipital lobe trauma, tumor',
    pearl: 'Macular sparing + high congruity between the two eyes = the cortex. Incongruous = further forward (tract or radiations).',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 11,
    title: 'Occipital Pole (isolated)',
    defectName: 'Small homonymous central/paracentral scotoma',
    od: smallRightCentralScotoma,
    os: smallRightCentralScotoma,
    description:
      'The occipital pole itself is the posterior-most tip of the calcarine cortex and represents the macula. A small, isolated lesion confined to just the pole produces the mirror image of #10: a small central, homonymous (vertical-midline-respecting) scotoma with the peripheral field otherwise intact.',
    causes: 'Small PCA-territory watershed infarct limited to the occipital pole, embolic occipital pole infarct',
    pearl: 'Pole lesion = only the center is out. Everything-but-the-pole lesion (#10) = macular sparing. They are inverses of each other.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 12,
    title: 'Anterior Calcarine Cortex (bonus — beyond the classic 11)',
    defectName: 'Temporal crescent syndrome — a MONOCULAR peripheral field defect',
    od: farTemporalCrescent,
    os: undefined,
    description:
      "The most anterior tip of the calcarine cortex, near the parieto-occipital sulcus, represents only the extreme peripheral temporal crescent (roughly 30°-60°) of the CONTRALATERAL eye — the one sliver of visual field with no corresponding input from the other eye. A lesion confined to this small region (supplied by the parieto-occipital artery) is the one retrochiasmal defect that is genuinely monocular, not binocular/homonymous.",
    causes: 'Parieto-occipital artery territory infarct, anterior occipital lobe tumor',
    pearl: 'The classic "trick question": every other retrochiasmal lesion on this list produces a BINOCULAR (homonymous) defect. Temporal crescent syndrome is the sole exception — a cortical lesion that looks monocular.',
    diseaseId: 'homonymous-hemianopia',
  },
]

// --- Page -------------------------------------------------------------------------------------

export function VisualFieldDefectLocalization() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        Walk the visual pathway from the retina to the occipital cortex — each numbered stop below shows exactly
        what the visual field looks like when a lesion strikes there, using the standard field-printout convention:
        OS plotted on the left, OD on the right, each eye's OUTER edge is its own temporal field and its INNER edge
        (toward the other circle) is its own nasal field. A shaded region is field loss. Sites 1-11 are the classic
        teaching set; #12 is a bonus, less commonly taught but genuinely high-yield addition.
      </p>

      <Card className="overflow-x-auto">
        <div className="min-w-[600px] max-w-2xl mx-auto">
          <PathwayDiagram />
        </div>
      </Card>

      <Card className="bg-sky-50 border-sky-200 flex gap-2.5">
        <Info size={16} className="text-sky-500 shrink-0 mt-0.5" />
        <p className="text-xs text-sky-900 leading-relaxed">
          The diagram above is an original schematic built for this page — not a reproduction of any textbook
          figure — laid out in the same eyes-to-occipital-cortex, numbered-waypoint style used by classic
          neuro-ophthalmology teaching diagrams (e.g. the widely reproduced figure in <em>Color Atlas of
          Neurology</em>). It shows the left-hemisphere pathway only, labeled directly rather than relying on
          left/right position, since the right-hemisphere pathway is simply its mirror image.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SITES.map((site) => (
          <Card key={site.number} className="space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {site.number}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{site.title}</h3>
                <Badge tone="purple" className="mt-1">
                  {site.defectName}
                </Badge>
              </div>
            </div>

            <EyePair od={site.od} os={site.os} />

            <p className="text-xs text-slate-600 leading-relaxed">{site.description}</p>
            <p className="text-xs text-slate-600">
              <span className="font-medium text-slate-700">Classic causes: </span>
              <Linkify text={site.causes} />
            </p>
            <div className="flex gap-2 bg-violet-50 border border-violet-200 rounded-lg px-3 py-2">
              <GraduationCap size={14} className="text-violet-500 shrink-0 mt-0.5" />
              <p className="text-xs text-violet-900 leading-relaxed">{site.pearl}</p>
            </div>
            {site.diseaseId && getDiseaseById(site.diseaseId) && (
              <Link
                to={`/diseases/${site.diseaseId}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline"
              >
                Full disease page: {getDiseaseById(site.diseaseId)!.name} <ArrowRight size={12} />
              </Link>
            )}
          </Card>
        ))}
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <h2 className="text-sm font-semibold text-amber-900 mb-1.5">Congruity: the other localizing clue</h2>
        <p className="text-xs text-amber-900 leading-relaxed">
          "Congruous" means the defect is essentially the same size and shape in both eyes; "incongruous" means it
          differs between the two eyes. As a general rule, congruity INCREASES the farther back the lesion is: optic
          tract defects are typically markedly incongruous, optic radiation defects are intermediate, and occipital
          cortex defects are highly congruous. A perfectly congruous complete hemianopia with macular sparing points
          straight at the occipital lobe; a lopsided, unequal defect points toward the tract.
        </p>
      </Card>

      <p className="text-xs text-slate-500">
        Field icons are simplified, idealized schematics illustrating the classic/board pattern for each site — real
        patient fields are rarely this clean, vary in extent and density, and always warrant formal automated
        perimetry (Humphrey 24-2/30-2) and neuroimaging correlation rather than pattern-matching to a diagram alone.
      </p>
    </ReferenceShell>
  )
}
