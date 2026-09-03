import type { ExamTechnique } from '../../types/examTechnique'

/**
 * Non-destructive classification layer for the "Diagnostic Testing & Imaging" hub page.
 *
 * This does NOT move, duplicate, or re-categorize any ExamTechnique data — every technique listed
 * here already exists (or is being added) as a normal entry in its own category file (Diagnostic
 * Imaging, Neuro-Ophthalmology, Patient History & Preliminary Exam, Anterior Segment, Contact
 * Lenses). The hub page pulls the full technique objects via `getExamTechniqueById` and groups them
 * by `DiagnosticModality` for a testing/imaging-focused view distinct from ExamWorkup's own
 * category-based grouping. Same pattern as `src/data/diseases/regionMap.ts`.
 */

export type DiagnosticModality =
  | 'Ophthalmic Imaging'
  | 'Visual Field Testing'
  | 'Electrophysiology'
  | 'Color Vision & Contrast Sensitivity'
  | 'Anterior Segment Diagnostics'
  | 'Laboratory & Genetic Testing'

export const DIAGNOSTIC_MODALITIES: DiagnosticModality[] = [
  'Ophthalmic Imaging',
  'Visual Field Testing',
  'Electrophysiology',
  'Color Vision & Contrast Sensitivity',
  'Anterior Segment Diagnostics',
  'Laboratory & Genetic Testing',
]

/** ExamTechnique.id -> DiagnosticModality. Every id here must resolve via getExamTechniqueById. */
export const DIAGNOSTIC_TESTING_TECHNIQUE_IDS: Record<DiagnosticModality, string[]> = {
  'Ophthalmic Imaging': [
    'oct-macula',
    'oct-optic-nerve-rnfl',
    'anterior-segment-oct',
    'oct-angiography',
    'fluorescein-angiography',
    'fundus-autofluorescence',
    'fundus-photography',
    'corneal-topography',
    'corneal-endothelial-specular-microscopy',
    'ultrasound-biomicroscopy',
    'b-scan-ultrasonography',
    'a-scan-ultrasonography',
    'optical-biometry',
    'manual-keratometry',
    'meibography',
    'potential-acuity-meter',
  ],
  'Visual Field Testing': [
    'humphrey-visual-field',
    'goldmann-kinetic-perimetry',
    'frequency-doubling-technology-perimetry',
    'confrontation-visual-fields',
  ],
  Electrophysiology: ['electroretinogram', 'electro-oculogram', 'visual-evoked-potential'],
  'Color Vision & Contrast Sensitivity': [
    'ishihara-color-vision-screening',
    'farnsworth-munsell-d15',
    'contrast-sensitivity-testing',
    'brightness-acuity-testing',
  ],
  'Anterior Segment Diagnostics': [
    'gonioscopy',
    'corneal-pachymetry',
    'tear-film-osmolarity-testing',
    'tear-break-up-time',
    'schirmer-test',
    'corneal-culture-and-scraping',
  ],
  'Laboratory & Genetic Testing': [
    'genetic-testing-inherited-retinal-disease',
    'giant-cell-arteritis-laboratory-workup',
    'uveitis-laboratory-workup',
    'thyroid-eye-disease-laboratory-testing',
  ],
}

/** Reverse lookup used by the hub page to group a flat technique list. */
export function getDiagnosticModality(techniqueId: string): DiagnosticModality | undefined {
  for (const modality of DIAGNOSTIC_MODALITIES) {
    if (DIAGNOSTIC_TESTING_TECHNIQUE_IDS[modality].includes(techniqueId)) return modality
  }
  return undefined
}

/** All technique ids that belong on the Diagnostic Testing & Imaging hub, in modality order. */
export function getDiagnosticTestingTechniqueIds(): string[] {
  return DIAGNOSTIC_MODALITIES.flatMap((m) => DIAGNOSTIC_TESTING_TECHNIQUE_IDS[m])
}

export function groupByModality(
  techniques: ExamTechnique[],
): Map<DiagnosticModality, ExamTechnique[]> {
  const map = new Map<DiagnosticModality, ExamTechnique[]>()
  for (const modality of DIAGNOSTIC_MODALITIES) map.set(modality, [])
  for (const t of techniques) {
    const modality = getDiagnosticModality(t.id)
    if (modality) map.get(modality)!.push(t)
  }
  return map
}
