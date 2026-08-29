import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight } from 'lucide-react'
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
    'The visual pathway from retina to occipital cortex, with the exact field defect produced by a lesion at each level — bitemporal hemianopia, incongruous vs. congruous homonymous defects, quadrantanopias, macular sparing, and more.',
  keywords: [
    'visual field defect',
    'visual pathway',
    'localization',
    'optic nerve',
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

// --- Pathway overview diagram ------------------------------------------------------------------

function PathBox({ x, y, w, h, lines }: { x: number; y: number; w: number; h: number; lines: string[] }) {
  const cy = y + h / 2
  const lineHeight = 14
  const startY = cy - ((lines.length - 1) * lineHeight) / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
      {lines.map((line, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={startY + i * lineHeight}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="12.5"
          fontWeight="600"
          fill="#334155"
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function PathBadge({ cx, cy, n }: { cx: number; cy: number; n: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="12" fill="#6d28d9" stroke="#fff" strokeWidth="2" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize="12.5" fontWeight="700" fill="#fff">
        {n}
      </text>
    </g>
  )
}

function PathwayDiagram() {
  return (
    <svg viewBox="0 0 1150 320" className="w-full h-auto" role="img" aria-label="Schematic of the visual pathway from the eyes to the occipital cortex, with 9 numbered lesion sites">
      <defs>
        <marker id="vf-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* connecting lines, drawn first so boxes sit on top */}
      <line x1="110" y1="160" x2="150" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <line x1="260" y1="160" x2="300" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <line x1="410" y1="160" x2="450" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <line x1="560" y1="160" x2="600" y2="160" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <path d="M730,145 Q775,60 798,50" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <path d="M730,175 Q775,260 798,270" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <path d="M980,52 Q1010,90 1028,135" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />
      <path d="M980,268 Q1010,230 1028,185" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#vf-arrow)" />

      <PathBox x={10} y={130} w={100} h={60} lines={['Eyes', '(OD / OS)']} />
      <PathBox x={150} y={130} w={110} h={60} lines={['Optic Nerve']} />
      <PathBadge cx={255} cy={122} n={1} />
      <PathBox x={300} y={130} w={110} h={60} lines={['Optic Chiasm']} />
      <PathBadge cx={405} cy={122} n={2} />
      <PathBox x={450} y={130} w={110} h={60} lines={['Optic Tract']} />
      <PathBadge cx={555} cy={122} n={3} />
      <PathBox x={600} y={130} w={130} h={60} lines={['LGN']} />
      <PathBadge cx={725} cy={122} n={4} />
      <PathBox x={800} y={20} w={180} h={60} lines={['Temporal Lobe', "(Meyer's Loop)"]} />
      <PathBadge cx={975} cy={20} n={5} />
      <PathBox x={800} y={240} w={180} h={60} lines={['Parietal Lobe']} />
      <PathBadge cx={975} cy={240} n={6} />
      <PathBox x={1030} y={115} w={110} h={90} lines={['Occipital', 'Cortex']} />
      <PathBadge cx={1085} cy={95} n={7} />
      <PathBadge cx={1085} cy={210} n={8} />
      <PathBadge cx={1085} cy={253} n={9} />
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
    title: 'Optic Nerve',
    defectName: 'Monocular vision loss (total or a central scotoma)',
    od: fullField,
    os: undefined,
    description:
      'A lesion anywhere along one optic nerve — from the globe to the chiasm — affects only that eye, since the nerve carries all of that eye\'s fibers before any crossing occurs. Depending on severity this ranges from a dense central scotoma to complete monocular blindness, and produces a relative afferent pupillary defect (RAPD) in the affected eye.',
    causes: 'Optic neuritis, ischemic optic neuropathy, compressive optic nerve tumor, traumatic optic neuropathy',
    pearl: 'A RAPD localizes to the optic nerve/retina of that eye (or a severe, asymmetric chiasmal/tract lesion) — it never occurs from a lesion purely behind the chiasm affecting both eyes equally.',
    diseaseId: 'optic-neuritis',
  },
  {
    number: 2,
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
    number: 3,
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
    number: 4,
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
    number: 5,
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
    number: 6,
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
    number: 7,
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
    number: 8,
    title: 'Occipital Pole (isolated)',
    defectName: 'Small homonymous central/paracentral scotoma',
    od: smallRightCentralScotoma,
    os: smallRightCentralScotoma,
    description:
      'The occipital pole itself is the posterior-most tip of the calcarine cortex and represents the macula. A small, isolated lesion confined to just the pole produces the mirror image of #7: a small central, homonymous (vertical-midline-respecting) scotoma with the peripheral field otherwise intact.',
    causes: 'Small PCA-territory watershed infarct limited to the occipital pole, embolic occipital pole infarct',
    pearl: 'Pole lesion = only the center is out. Everything-but-the-pole lesion (#7) = macular sparing. They are inverses of each other.',
    diseaseId: 'homonymous-hemianopia',
  },
  {
    number: 9,
    title: 'Anterior Calcarine Cortex',
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
        (toward the other circle) is its own nasal field. A shaded region is field loss.
      </p>

      <Card className="overflow-x-auto">
        <div className="min-w-[720px]">
          <PathwayDiagram />
        </div>
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
