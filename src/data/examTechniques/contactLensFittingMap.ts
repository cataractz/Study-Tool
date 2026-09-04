import type { ExamTechnique } from '../../types/examTechnique'

/**
 * Non-destructive classification layer for the "Fitting & Evaluation" tab on the Contact Lens
 * Database page.
 *
 * This does NOT move, duplicate, or re-categorize any ExamTechnique data — every technique listed
 * here already exists as a normal entry in `contactLenses.ts` or `contactLensFitting.ts` (both
 * `category: 'Contact Lenses'`). The tab pulls the full technique objects via `getExamTechniqueById`
 * and groups them by `ContactLensFittingCategory` for a lens-type-focused view distinct from
 * ExamWorkup's own category-based grouping. Same pattern as `diagnosticTestingMap.ts`.
 */

export type ContactLensFittingCategory =
  | 'Soft Lens Fitting'
  | 'RGP Fitting'
  | 'Scleral Lens Fitting'
  | 'Specialty Lenses'
  | 'Lens Complications'

export const CONTACT_LENS_FITTING_CATEGORIES: ContactLensFittingCategory[] = [
  'Soft Lens Fitting',
  'RGP Fitting',
  'Scleral Lens Fitting',
  'Specialty Lenses',
  'Lens Complications',
]

/** ExamTechnique.id -> ContactLensFittingCategory. Every id here must resolve via getExamTechniqueById. */
export const CONTACT_LENS_FITTING_TECHNIQUE_IDS: Record<ContactLensFittingCategory, string[]> = {
  'Soft Lens Fitting': ['soft-lens-fit-evaluation', 'soft-toric-lens-rotation-assessment', 'contact-lens-over-refraction'],
  'RGP Fitting': ['manual-keratometry', 'rgp-fluorescein-fit-pattern', 'push-up-test'],
  'Scleral Lens Fitting': ['scleral-lens-fitting-assessment'],
  'Specialty Lenses': ['orthokeratology-fitting-assessment', 'hybrid-lens-fitting-evaluation', 'prosthetic-cosmetic-lens-fitting-evaluation'],
  'Lens Complications': ['contact-lens-staining-grading'],
}

/** -> ClinicalWorkup.id, surfaced as its own card alongside the technique groups. */
export const CONTACT_LENS_MYOPIA_CONTROL_WORKUP_ID = 'myopia-control-candidate-evaluation'

/** -> ReferenceMeta.id, surfaced as its own card alongside the technique groups. */
export const CONTACT_LENS_CARE_SOLUTIONS_REFERENCE_ID = 'contact-lens-care-solutions'

/** Reverse lookup used by the tab to group a flat technique list. */
export function getContactLensFittingCategory(techniqueId: string): ContactLensFittingCategory | undefined {
  for (const category of CONTACT_LENS_FITTING_CATEGORIES) {
    if (CONTACT_LENS_FITTING_TECHNIQUE_IDS[category].includes(techniqueId)) return category
  }
  return undefined
}

/** All technique ids that belong on the Fitting & Evaluation tab, in category order. */
export function getContactLensFittingTechniqueIds(): string[] {
  return CONTACT_LENS_FITTING_CATEGORIES.flatMap((c) => CONTACT_LENS_FITTING_TECHNIQUE_IDS[c])
}

export function groupByFittingCategory(
  techniques: ExamTechnique[],
): Map<ContactLensFittingCategory, ExamTechnique[]> {
  const map = new Map<ContactLensFittingCategory, ExamTechnique[]>()
  for (const category of CONTACT_LENS_FITTING_CATEGORIES) map.set(category, [])
  for (const t of techniques) {
    const category = getContactLensFittingCategory(t.id)
    if (category) map.get(category)!.push(t)
  }
  return map
}
