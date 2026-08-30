import { useId, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { ReferenceShell } from './shared/ReferenceShell'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Linkify } from '../components/shared/Linkify'
import { getDiseaseById } from '../services/diseaseService'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'visual-field-defect-localization',
  name: 'Visual Field Defect Localization',
  category: 'Neuro-Ophthalmology',
  description:
    'The visual pathway from retina to occipital cortex, with the exact field defect produced by a lesion at each of the 11 classic teaching sites — both the left-sided and right-sided version of each — junctional scotoma, bitemporal hemianopia, incongruous vs. congruous homonymous defects, quadrantanopias, macular sparing, and more.',
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
    'left sided lesion',
    'right sided lesion',
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

// Right-sided defect shapes (defect on the right half/side of each eye's own circle)
const rightHalf = <rect x="50" y="0" width="50" height="100" fill={SHADE} />
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
/** A small, partial supero-temporal wedge — smaller than a full quadrant. */
const smallSuperoTemporalWedgeRight = <rect x="58" y="4" width="38" height="40" fill={SHADE} />
/** A narrow horizontal wedge/sector (not a simple half or quadrant) — the distinctive LGN
 * sectoranopia pattern from its dual (anterior + lateral posterior choroidal artery) blood
 * supply, split along a horizontal line rather than the vertical midline. */
const horizontalSectorWedgeRight = <polygon points="50,50 100,32 100,68" fill={SHADE} />

// Left-sided defect shapes — exact mirror images of the right-sided set above, reflected across
// the vertical midline (x=50), used for the right-sided-lesion example of every site.
const leftHalf = <rect x="0" y="0" width="50" height="100" fill={SHADE} />
const upperLeftQuad = <rect x="0" y="0" width="50" height="50" fill={SHADE} />
const lowerLeftQuad = <rect x="0" y="50" width="50" height="50" fill={SHADE} />
const leftHalfWithMacularSparing = (
  <>
    <rect x="0" y="0" width="50" height="100" fill={SHADE} />
    <circle cx="50" cy="50" r="9" fill="#fff" stroke={SHADE} strokeWidth="1.5" />
  </>
)
const smallLeftCentralScotoma = <rect x="32" y="35" width="18" height="30" rx="2" fill={SHADE} />
const incongruousLeftHalf = <rect x="6" y="10" width="36" height="80" fill={SHADE} />
const farTemporalCrescentLeft = <rect x="0" y="0" width="20" height="100" fill={SHADE} />
const smallSuperoTemporalWedgeLeft = <rect x="4" y="4" width="38" height="40" fill={SHADE} />
const horizontalSectorWedgeLeft = <polygon points="50,50 0,32 0,68" fill={SHADE} />
/** Both eyes totally out — used for a full prechiasmal optic nerve lesion, symmetric so no
 * left/right mirroring is needed. */
const fullField = <rect x="0" y="0" width="100" height="100" fill={SHADE} />

// --- Site data ------------------------------------------------------------------------------

/** A quadrant ('ul'/'ur'/'ll'/'lr') or the center of one eye's field, used by the interactive
 * field-defect checker below to score a clicked-on pattern against each site's known signature. */
type Zone = 'ul' | 'ur' | 'll' | 'lr' | 'center'

interface LesionExample {
  /** "Left", "Right", or "Central" for the one site (the chiasm) that has no lateralized version. */
  side: 'Left' | 'Right' | 'Central'
  structureLabel: string
  od?: ReactNode
  os?: ReactNode
  resultLabel: string
  /** Simplified quadrant/center pattern for this example, used only by the interactive checker —
   * intentionally coarser than the icons above (e.g. size/congruity isn't captured), which is why
   * some sites are deliberately designed to tie with another (tract vs. LGN, temporal lobe vs.
   * occipital lower bank, parietal vs. occipital upper bank) — that ambiguity mirrors real exam
   * teaching that field shape alone can't distinguish them. */
  signature: { od: Zone[]; os: Zone[] }
}

interface Site {
  number: number
  title: string
  description: string
  causes: string
  pearl: string
  diseaseId?: string
  examples: LesionExample[]
}

const SITES: Site[] = [
  {
    number: 1,
    title: 'Optic Nerve (prechiasmal)',
    description:
      'A lesion anywhere along one optic nerve — from the globe to just short of the chiasm — affects only that eye, since the nerve carries all of that eye\'s fibers before any crossing occurs. Depending on severity this ranges from a dense central scotoma to complete monocular blindness, and produces a relative afferent pupillary defect (RAPD) in the affected eye. Which side is affected is simply whichever nerve the lesion sits on — a left optic nerve lesion affects only the left eye, a right optic nerve lesion affects only the right eye.',
    causes: 'Optic neuritis, ischemic optic neuropathy, compressive optic nerve tumor, traumatic optic neuropathy',
    pearl: 'A RAPD localizes to the optic nerve/retina of that eye (or a severe, asymmetric chiasmal/tract lesion) — it never occurs from a lesion purely behind the chiasm affecting both eyes equally.',
    diseaseId: 'optic-neuritis',
    examples: [
      { side: 'Left', structureLabel: 'Left optic nerve', os: fullField, od: undefined, resultLabel: 'Decreased vision, left eye (OS)', signature: { os: ['ul', 'ur', 'll', 'lr', 'center'], od: [] } },
      { side: 'Right', structureLabel: 'Right optic nerve', od: fullField, os: undefined, resultLabel: 'Decreased vision, right eye (OD)', signature: { od: ['ul', 'ur', 'll', 'lr', 'center'], os: [] } },
    ],
  },
  {
    number: 2,
    title: 'Posterior Optic Nerve (junctional)',
    description:
      'A lesion right where the optic nerve joins the chiasm damages that nerve\'s own fibers (ipsilateral vision loss) plus a small bundle of already-crossing fibers from the OPPOSITE eye\'s inferonasal retina, producing a small contralateral superior temporal field defect. The classic anatomic explanation is an anterior loop of crossing fibers into the posterior contralateral nerve ("Wilbrand\'s knee") — modern anatomic studies suggest this loop may actually be an artifact of the enucleated specimens it was first described in, but the clinical localizing value of the finding itself is unchanged either way.',
    causes: 'Pituitary adenoma or other sellar/parasellar mass extending anteriorly to the junction of nerve and chiasm, anterior communicating artery aneurysm',
    pearl: 'Terminology varies by source: some restrict "junctional scotoma of Traquair" to a contralateral peripheral TEMPORAL CRESCENT defect only, and use plain "junctional scotoma" for the more commonly described contralateral SUPERO-TEMPORAL QUADRANT defect shown here — know the pattern more than the exact label.',
    diseaseId: 'chiasmal-syndrome',
    examples: [
      { side: 'Left', structureLabel: 'Left posterior optic nerve', os: fullField, od: smallSuperoTemporalWedgeRight, resultLabel: 'Vision loss OS + supero-temporal defect OD', signature: { os: ['ul', 'ur', 'll', 'lr', 'center'], od: ['ur'] } },
      { side: 'Right', structureLabel: 'Right posterior optic nerve', od: fullField, os: smallSuperoTemporalWedgeLeft, resultLabel: 'Vision loss OD + supero-temporal defect OS', signature: { od: ['ul', 'ur', 'll', 'lr', 'center'], os: ['ul'] } },
    ],
  },
  {
    number: 3,
    title: 'Optic Chiasm — Central Compression',
    description:
      'Crossing (decussating) nasal-retina fibers from both eyes are compressed at the chiasm, taking out the temporal field of each eye — the two "outer" halves — while the nasal fields (which stay uncrossed) are spared. The defect classically respects the vertical midline. This is the one site on this list with no separate "left" and "right" version: the chiasm sits on the midline, so a central compressive lesion hits the crossing fibers from both eyes symmetrically regardless of which side the mass first grew from. (A rare LATERAL chiasmal compression — e.g. from a calcified carotid artery pressing on one side of the chiasm — is lateralized instead, and produces an ipsilateral nasal hemianopia rather than a temporal one; that variant is a distinct, uncommon exception to the pattern below.)',
    causes: 'Pituitary adenoma (compresses from below → bitemporal SUPERIOR quadrant loss first), craniopharyngioma (compresses from above, at the pituitary stalk → bitemporal INFERIOR quadrant loss first)',
    pearl: 'Direction of first quadrant loss tells you which way the mass is pushing: adenoma pushes UP into the chiasm from below → superior defect first; craniopharyngioma pushes DOWN from above → inferior defect first.',
    diseaseId: 'chiasmal-syndrome',
    examples: [
      { side: 'Central', structureLabel: 'Chiasm (central compression)', od: rightHalf, os: leftHalf, resultLabel: 'Bitemporal hemianopia', signature: { od: ['ur', 'lr'], os: ['ul', 'll'] } },
    ],
  },
  {
    number: 4,
    title: 'Optic Tract',
    description:
      'Just past the chiasm, each tract carries a mix of crossed and uncrossed fibers representing the opposite (contralateral) visual field of both eyes — a left tract lesion causes a right-sided defect in both eyes, and a right tract lesion causes a left-sided defect in both eyes. Because the crossed and uncrossed fibers haven\'t yet been reorganized (that happens at the LGN), the two eyes\' defects are usually unequal in size/shape — "incongruous," shown below as a smaller defect in the eye with the lesser involvement.',
    causes: 'Pituitary tumor extending posteriorly, craniopharyngioma, meningioma, trauma, stroke',
    pearl: 'A contralateral RAPD (in the eye with the temporal field loss) plus a "bowtie" pattern of optic disc pallor is the classic combination that localizes to the tract rather than farther back in the pathway.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left optic tract', od: rightHalf, os: incongruousRightHalf, resultLabel: 'Right homonymous hemianopia (incongruous)', signature: { od: ['ur', 'lr', 'center'], os: ['ur', 'lr', 'center'] } },
      { side: 'Right', structureLabel: 'Right optic tract', os: leftHalf, od: incongruousLeftHalf, resultLabel: 'Left homonymous hemianopia (incongruous)', signature: { od: ['ul', 'll', 'center'], os: ['ul', 'll', 'center'] } },
    ],
  },
  {
    number: 5,
    title: 'Lateral Geniculate Nucleus (LGN)',
    description:
      'An isolated LGN lesion is uncommon. Because the LGN has a dual blood supply — the anterior choroidal artery supplies one wedge-shaped sector and the lateral posterior choroidal artery supplies another — a vascular LGN lesion can produce a distinctive horizontal, wedge-shaped sector defect (shown here) rather than a simple hemianopia, depending on which vessel is affected. A non-vascular LGN lesion can still just produce a plain contralateral homonymous hemianopia like a tract or radiation lesion.',
    causes: 'Anterior or lateral posterior choroidal artery infarct (rare as an isolated finding)',
    pearl: 'The LGN is the rarest isolated localization on this list — most exam "homonymous hemianopia" questions are really testing the tract, radiations, or cortex. A wedge-shaped (not simple half) defect is the one clue that specifically points to the LGN.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left LGN', od: horizontalSectorWedgeRight, os: horizontalSectorWedgeRight, resultLabel: 'Right homonymous sectoranopia', signature: { od: ['ur', 'lr', 'center'], os: ['ur', 'lr', 'center'] } },
      { side: 'Right', structureLabel: 'Right LGN', od: horizontalSectorWedgeLeft, os: horizontalSectorWedgeLeft, resultLabel: 'Left homonymous sectoranopia', signature: { od: ['ul', 'll', 'center'], os: ['ul', 'll', 'center'] } },
    ],
  },
  {
    number: 6,
    title: "Temporal Lobe (Meyer's Loop)",
    description:
      "Inferior optic radiation fibers carrying the SUPERIOR visual field loop forward through the temporal lobe (Meyer's loop) before heading back to the occipital cortex, making them vulnerable to temporal lobe lesions. The defect is usually incongruous and denser/larger than its parietal counterpart.",
    causes: 'Temporal lobe tumor, temporal lobe epilepsy surgery/resection, middle cerebral artery branch stroke',
    pearl: 'Mnemonic — PITS: Parietal = Inferior field, Temporal = Superior field. "Pie in the sky" (temporal) vs. "pie on the floor" (parietal).',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: "Left temporal lobe (Meyer's loop)", od: upperRightQuad, os: upperRightQuad, resultLabel: 'Right homonymous superior quadrantanopia — "pie in the sky"', signature: { od: ['ur'], os: ['ur'] } },
      { side: 'Right', structureLabel: "Right temporal lobe (Meyer's loop)", od: upperLeftQuad, os: upperLeftQuad, resultLabel: 'Left homonymous superior quadrantanopia — "pie in the sky"', signature: { od: ['ul'], os: ['ul'] } },
    ],
  },
  {
    number: 7,
    title: 'Parietal Lobe',
    description:
      'Superior optic radiation fibers carrying the INFERIOR visual field take a more direct route through the parietal lobe. Parietal quadrantanopias tend to be more congruous than temporal ones and may come with other parietal signs (e.g. asymmetric optokinetic nystagmus, neglect with a non-dominant hemisphere lesion).',
    causes: 'Parietal lobe tumor, middle cerebral artery branch stroke',
    pearl: 'Same mnemonic as Meyer\'s loop — PITS: Parietal = Inferior, Temporal = Superior.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left parietal lobe', od: lowerRightQuad, os: lowerRightQuad, resultLabel: 'Right homonymous inferior quadrantanopia — "pie on the floor"', signature: { od: ['lr'], os: ['lr'] } },
      { side: 'Right', structureLabel: 'Right parietal lobe', od: lowerLeftQuad, os: lowerLeftQuad, resultLabel: 'Left homonymous inferior quadrantanopia — "pie on the floor"', signature: { od: ['ll'], os: ['ll'] } },
    ],
  },
  {
    number: 8,
    title: 'Occipital Lobe — Upper Bank (cuneus)',
    description:
      'The calcarine cortex is retinotopically inverted: the UPPER (dorsal) bank of the calcarine fissure — the cuneus — represents the LOWER visual field. A lesion confined to just this bank produces an inferior quadrantanopia. The field defect looks identical to a parietal radiation lesion (#7); what usually distinguishes them is congruity and associated signs, not the visual field shape alone.',
    causes: 'Posterior cerebral artery branch infarct limited to the upper calcarine bank, tumor',
    pearl: 'Same visual field result as parietal lobe (#7), different anatomic level — cortical quadrantanopias from a bank lesion tend to be even more congruous/complete than the radiation-level version.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left occipital lobe, upper bank', od: lowerRightQuad, os: lowerRightQuad, resultLabel: 'Right homonymous inferior quadrantanopia', signature: { od: ['lr'], os: ['lr'] } },
      { side: 'Right', structureLabel: 'Right occipital lobe, upper bank', od: lowerLeftQuad, os: lowerLeftQuad, resultLabel: 'Left homonymous inferior quadrantanopia', signature: { od: ['ll'], os: ['ll'] } },
    ],
  },
  {
    number: 9,
    title: 'Occipital Lobe — Lower Bank (lingual gyrus)',
    description:
      "The LOWER (ventral) bank of the calcarine fissure — the lingual gyrus — represents the UPPER visual field (again, the inverted retinotopic map). A lesion confined to just this bank produces a superior quadrantanopia, looking identical to a Meyer's loop/temporal lobe lesion (#6) but arising at the cortex instead of the radiations.",
    causes: 'Posterior cerebral artery branch infarct limited to the lower calcarine bank, tumor',
    pearl: 'Upper bank (cuneus) = inferior field out. Lower bank (lingual gyrus) = superior field out. It\'s the mirror-image logic of Meyer\'s loop (temporal, superior) vs. parietal (inferior) — but one anatomic level further back.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left occipital lobe, lower bank', od: upperRightQuad, os: upperRightQuad, resultLabel: 'Right homonymous superior quadrantanopia', signature: { od: ['ur'], os: ['ur'] } },
      { side: 'Right', structureLabel: 'Right occipital lobe, lower bank', od: upperLeftQuad, os: upperLeftQuad, resultLabel: 'Left homonymous superior quadrantanopia', signature: { od: ['ul'], os: ['ul'] } },
    ],
  },
  {
    number: 10,
    title: 'Occipital Cortex — Complete Lesion',
    description:
      'A complete lesion of the primary visual cortex (calcarine fissure) produces a dense, highly congruous homonymous hemianopia — but classically WITH macular sparing. The macular representation at the occipital pole has a dual blood supply (middle cerebral artery collaterals plus posterior cerebral artery), so a PCA-territory infarct that takes out the rest of the hemifield often spares the pole.',
    causes: 'Posterior cerebral artery (PCA) territory stroke (the classic cause), occipital lobe trauma, tumor',
    pearl: 'Macular sparing + high congruity between the two eyes = the cortex. Incongruous = further forward (tract or radiations).',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left occipital cortex, complete', od: rightHalfWithMacularSparing, os: rightHalfWithMacularSparing, resultLabel: 'Right homonymous hemianopia with macular sparing', signature: { od: ['ur', 'lr'], os: ['ur', 'lr'] } },
      { side: 'Right', structureLabel: 'Right occipital cortex, complete', od: leftHalfWithMacularSparing, os: leftHalfWithMacularSparing, resultLabel: 'Left homonymous hemianopia with macular sparing', signature: { od: ['ul', 'll'], os: ['ul', 'll'] } },
    ],
  },
  {
    number: 11,
    title: 'Occipital Pole (isolated)',
    description:
      'The occipital pole itself is the posterior-most tip of the calcarine cortex and represents the macula. A small, isolated lesion confined to just the pole produces the mirror image of #10: a small central, homonymous (vertical-midline-respecting) scotoma with the peripheral field otherwise intact.',
    causes: 'Small PCA-territory watershed infarct limited to the occipital pole, embolic occipital pole infarct',
    pearl: 'Pole lesion = only the center is out. Everything-but-the-pole lesion (#10) = macular sparing. They are inverses of each other.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left occipital pole', od: smallRightCentralScotoma, os: smallRightCentralScotoma, resultLabel: 'Right homonymous central scotoma', signature: { od: ['center'], os: ['center'] } },
      { side: 'Right', structureLabel: 'Right occipital pole', od: smallLeftCentralScotoma, os: smallLeftCentralScotoma, resultLabel: 'Left homonymous central scotoma', signature: { od: ['center'], os: ['center'] } },
    ],
  },
  {
    number: 12,
    title: 'Anterior Calcarine Cortex (bonus — beyond the classic 11)',
    description:
      "The most anterior tip of the calcarine cortex, near the parieto-occipital sulcus, represents only the extreme peripheral temporal crescent (roughly 30°-60°) of the CONTRALATERAL eye — the one sliver of visual field with no corresponding input from the other eye. A lesion confined to this small region (supplied by the parieto-occipital artery) is the one retrochiasmal defect that is genuinely monocular, not binocular/homonymous.",
    causes: 'Parieto-occipital artery territory infarct, anterior occipital lobe tumor',
    pearl: 'The classic "trick question": every other retrochiasmal lesion on this list produces a BINOCULAR (homonymous) defect. Temporal crescent syndrome is the sole exception — a cortical lesion that looks monocular.',
    diseaseId: 'homonymous-hemianopia',
    examples: [
      { side: 'Left', structureLabel: 'Left anterior calcarine cortex', od: farTemporalCrescent, os: undefined, resultLabel: 'Right monocular temporal crescent loss (OD only)', signature: { od: ['ur', 'lr'], os: [] } },
      { side: 'Right', structureLabel: 'Right anterior calcarine cortex', os: farTemporalCrescentLeft, od: undefined, resultLabel: 'Left monocular temporal crescent loss (OS only)', signature: { od: [], os: ['ul', 'll'] } },
    ],
  },
]

// --- Interactive field-defect checker ---------------------------------------------------------

const QUADRANT_PATHS: { zone: Zone; d: string }[] = [
  { zone: 'ur', d: 'M50,50 L50,4 A46,46 0 0 1 96,50 Z' },
  { zone: 'lr', d: 'M50,50 L96,50 A46,46 0 0 1 50,96 Z' },
  { zone: 'll', d: 'M50,50 L50,96 A46,46 0 0 1 4,50 Z' },
  { zone: 'ul', d: 'M50,50 L4,50 A46,46 0 0 1 50,4 Z' },
]

/** Clickable version of the field circle above — quadrants and center each toggle independently
 * so the user can build up a shaded pattern to test against the 12 sites' known signatures. */
function ClickableEye({
  zones,
  onToggle,
  label,
}: {
  zones: Set<Zone>
  onToggle: (zone: Zone) => void
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 100 100" width="96" height="96" className="shrink-0">
        <circle cx="50" cy="50" r="46" fill="#fff" />
        {QUADRANT_PATHS.map(({ zone, d }) => (
          <path
            key={zone}
            d={d}
            fill={zones.has(zone) ? SHADE : 'transparent'}
            stroke="#e2e8f0"
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => onToggle(zone)}
          />
        ))}
        <circle
          cx="50"
          cy="50"
          r="13"
          fill={zones.has('center') ? SHADE : '#fff'}
          stroke="#e2e8f0"
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => onToggle('center')}
        />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#94a3b8" strokeWidth="2.5" pointerEvents="none" />
      </svg>
      <span className="text-[10px] font-semibold text-slate-500 tracking-wide">{label}</span>
    </div>
  )
}

interface MatchCandidate {
  site: Site
  example: LesionExample
  score: number
}

function signatureTags(signature: { od: Zone[]; os: Zone[] }): Set<string> {
  const tags = new Set<string>()
  signature.od.forEach((z) => tags.add(`od:${z}`))
  signature.os.forEach((z) => tags.add(`os:${z}`))
  return tags
}

function InteractiveFieldChecker() {
  const [odZones, setOdZones] = useState<Set<Zone>>(new Set())
  const [osZones, setOsZones] = useState<Set<Zone>>(new Set())
  const [results, setResults] = useState<MatchCandidate[] | null>(null)

  function toggle(eye: 'od' | 'os', zone: Zone) {
    const setter = eye === 'od' ? setOdZones : setOsZones
    setter((prev) => {
      const next = new Set(prev)
      if (next.has(zone)) next.delete(zone)
      else next.add(zone)
      return next
    })
    setResults(null)
  }

  function handleSubmit() {
    const userTags = new Set<string>()
    odZones.forEach((z) => userTags.add(`od:${z}`))
    osZones.forEach((z) => userTags.add(`os:${z}`))
    if (userTags.size === 0) return

    const candidates: MatchCandidate[] = SITES.flatMap((site) =>
      site.examples.map((example) => {
        const sigTags = signatureTags(example.signature)
        let matches = 0
        sigTags.forEach((t) => {
          if (userTags.has(t)) matches += 1
        })
        let extra = 0
        userTags.forEach((t) => {
          if (!sigTags.has(t)) extra += 1
        })
        const missing = sigTags.size - matches
        return { site, example, score: matches - extra - missing }
      }),
    )

    const maxScore = Math.max(...candidates.map((c) => c.score))
    setResults(maxScore > 0 ? candidates.filter((c) => c.score === maxScore) : [])
  }

  function handleReset() {
    setOdZones(new Set())
    setOsZones(new Set())
    setResults(null)
  }

  const hasSelection = odZones.size > 0 || osZones.size > 0

  return (
    <Card className="bg-violet-50/60 border-violet-200 space-y-3">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Interactive: where is the defect?</h2>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Click the quadrant(s) or center of each eye's field where vision is missing, then submit to see which
          lesion site(s) below produce that exact pattern.
        </p>
      </div>

      <div className="flex items-end gap-4 flex-wrap">
        <ClickableEye zones={osZones} onToggle={(z) => toggle('os', z)} label="OS" />
        <ClickableEye zones={odZones} onToggle={(z) => toggle('od', z)} label="OD" />
        <div className="flex gap-2">
          <Button onClick={handleSubmit} disabled={!hasSelection} size="sm">
            Submit
          </Button>
          <Button onClick={handleReset} variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </div>

      {results && results.length > 0 && (
        <div className="border-t border-violet-200 pt-3 space-y-2">
          {results.length > 1 && (
            <p className="text-xs text-amber-700 leading-relaxed">
              This exact field pattern is shared by {results.length} sites below — they can't be told apart by
              field shape alone. Other exam findings (RAPD, congruity between the two eyes, disc appearance) are
              needed to localize further.
            </p>
          )}
          {results.map((r, i) => (
            <a
              key={i}
              href={`#site-${r.site.number}`}
              className="block bg-white rounded-lg border border-violet-200 px-3 py-2 hover:border-violet-400 transition-colors"
            >
              <span className="text-xs font-semibold text-violet-700">
                #{r.site.number} {r.site.title}
              </span>
              <span className="block text-xs text-slate-600 mt-0.5">{r.example.resultLabel}</span>
            </a>
          ))}
        </div>
      )}

      {results && results.length === 0 && (
        <p className="text-xs text-slate-500 border-t border-violet-200 pt-3">
          No site on this page produces that exact pattern — try a simpler shape (a single quadrant, a full half,
          or the center only) that matches one of the 23 examples below.
        </p>
      )}
    </Card>
  )
}

// --- Page -------------------------------------------------------------------------------------

export function VisualFieldDefectLocalization() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        Walk the visual pathway from the retina to the occipital cortex — each numbered stop below shows exactly
        what the visual field looks like when a lesion strikes there, for BOTH the left-sided and right-sided
        version of that lesion (the chiasm is the one exception — it's a midline structure with no lateralized
        version). Field icons use the standard printout convention: OS plotted on the left, OD on the right, each
        eye's OUTER edge is its own temporal field and its INNER edge (toward the other circle) is its own nasal
        field. A shaded region is field loss. Sites 1-11 are the classic teaching set; #12 is a bonus, less commonly
        taught but genuinely high-yield addition.
      </p>

      <InteractiveFieldChecker />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {SITES.map((site) => (
          <Card key={site.number} id={`site-${site.number}`} className="space-y-3 scroll-mt-4">
            <div className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {site.number}
              </span>
              <h3 className="text-sm font-semibold text-slate-900">{site.title}</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{site.description}</p>

            <div className="space-y-3">
              {site.examples.map((ex) => (
                <div key={ex.side} className="border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    {ex.side !== 'Central' && (
                      <Badge tone={ex.side === 'Left' ? 'info' : 'success'}>{ex.side}-sided lesion</Badge>
                    )}
                    <span className="text-xs font-semibold text-slate-700">{ex.structureLabel}</span>
                  </div>
                  <EyePair od={ex.od} os={ex.os} />
                  <Badge tone="purple" className="mt-2">
                    {ex.resultLabel}
                  </Badge>
                </div>
              ))}
            </div>

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
