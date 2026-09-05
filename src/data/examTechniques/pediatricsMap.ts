import type { ExamTechnique } from '../../types/examTechnique'
import type { Disease } from '../../types/disease'
import { getDiseasesByCategory } from '../../services/diseaseService'

/**
 * Non-destructive classification layer for the `/pediatrics` hub page.
 *
 * This does NOT move, duplicate, or re-categorize any existing data — every technique listed here
 * already exists as a normal entry in `pediatrics.ts` or `patientHistoryPreliminary.ts` (all
 * `category: 'Pediatrics'` except `mohindra-near-retinoscopy`, which stays under its own category).
 * The hub page pulls full objects via `getExamTechniqueById`/`getClinicalWorkupById`/
 * `getEmergencyProtocolById`/`getReferenceById` and groups them for a pediatrics-focused view
 * distinct from each content type's own hub. Same pattern as `contactLensFittingMap.ts` /
 * `diagnosticTestingMap.ts`.
 */

export type PediatricTechniqueCategory =
  | 'Infant & Preverbal Assessment'
  | 'Pediatric Visual Acuity Testing'
  | 'Strabismus & Alignment Screening'
  | 'Refraction & Media Screening'
  | 'Binocular Vision & Special Populations'

export const PEDIATRIC_TECHNIQUE_CATEGORIES: PediatricTechniqueCategory[] = [
  'Infant & Preverbal Assessment',
  'Pediatric Visual Acuity Testing',
  'Strabismus & Alignment Screening',
  'Refraction & Media Screening',
  'Binocular Vision & Special Populations',
]

/** ExamTechnique.id -> PediatricTechniqueCategory. Every id here must resolve via getExamTechniqueById. */
export const PEDIATRIC_TECHNIQUE_IDS: Record<PediatricTechniqueCategory, string[]> = {
  'Infant & Preverbal Assessment': ['fix-and-follow-assessment', 'instrument-based-pediatric-vision-screening'],
  'Pediatric Visual Acuity Testing': [
    'teller-acuity-cards',
    'lea-symbols-allen-figures-acuity',
    'cardiff-hotv-kay-pictures-acuity-testing',
  ],
  'Strabismus & Alignment Screening': ['bruckner-test', 'hirschberg-krimsky-test'],
  'Refraction & Media Screening': ['cycloplegic-retinoscopy', 'mohindra-near-retinoscopy'],
  'Binocular Vision & Special Populations': [
    'age-appropriate-binocular-vision-testing-adaptations',
    'special-needs-pediatric-exam-adaptations',
  ],
}

/** -> ClinicalWorkup.id, surfaced as their own cards on the hub. */
export const PEDIATRIC_WORKUP_IDS = [
  'pediatric-vision-loss-workup',
  'leukocoria-workup',
  'amblyopia-workup',
] as const

/** -> ClinicalWorkup.id, surfaced with its own Myopia Control callout (also linked from Contact Lenses). */
export const PEDIATRIC_MYOPIA_CONTROL_WORKUP_ID = 'myopia-control-candidate-evaluation'

/** -> EmergencyProtocol.id, surfaced in the hub's Emergencies section. */
export const PEDIATRIC_EMERGENCY_PROTOCOL_ID = 'non-accidental-trauma-protocol'

/** -> ReferenceMeta.id, surfaced in the hub's References section. */
export const PEDIATRIC_REFERENCE_IDS = ['visual-development-milestones', 'pediatric-cycloplegic-comparison'] as const

/** Reverse lookup used by the hub to group a flat technique list. */
export function getPediatricTechniqueCategory(techniqueId: string): PediatricTechniqueCategory | undefined {
  for (const category of PEDIATRIC_TECHNIQUE_CATEGORIES) {
    if (PEDIATRIC_TECHNIQUE_IDS[category].includes(techniqueId)) return category
  }
  return undefined
}

/** All technique ids that belong on the Pediatrics hub, in category order. */
export function getPediatricTechniqueIds(): string[] {
  return PEDIATRIC_TECHNIQUE_CATEGORIES.flatMap((c) => PEDIATRIC_TECHNIQUE_IDS[c])
}

export function groupByPediatricCategory(
  techniques: ExamTechnique[],
): Map<PediatricTechniqueCategory, ExamTechnique[]> {
  const map = new Map<PediatricTechniqueCategory, ExamTechnique[]>()
  for (const category of PEDIATRIC_TECHNIQUE_CATEGORIES) map.set(category, [])
  for (const t of techniques) {
    const category = getPediatricTechniqueCategory(t.id)
    if (category) map.get(category)!.push(t)
  }
  return map
}

/** Pediatric & Binocular Vision diseases, pulled live rather than hardcoded to avoid duplication risk. */
export function getPediatricDiseases(): Disease[] {
  return getDiseasesByCategory('Pediatric & Binocular Vision')
}
