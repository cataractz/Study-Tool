export type ExamCategory =
  | 'Patient History & Preliminary Exam'
  | 'Anterior Segment'
  | 'Posterior Segment'
  | 'Binocular Vision & Accommodation'
  | 'Neuro-Ophthalmology'
  | 'Pediatrics'
  | 'Contact Lenses'
  | 'Diagnostic Imaging'
  | 'Orbit'

export interface ExamTechnique {
  id: string
  name: string
  /** Abbreviations/alternate names, e.g. "GAT" for Goldmann applanation tonometry — used for
   * search and cross-linking from prose that uses the short form. */
  aliases?: string[]
  category: ExamCategory
  /** Fine-grained grouping label within the category, e.g. "Gonioscopy", "Scleral Depression". */
  section: string
  /** Marks this technique for the cross-cutting "Special Tests" filter — a tag, not a separate
   * category, so a technique like Seidel test still lives under Cornea but is also surfaced there. */
  isSpecialTest?: boolean
  purpose: string
  clinicalIndications: string[]
  contraindications?: string[]
  equipment: string[]
  patientPreparation?: string[]
  /** Ordered step-by-step instructions. */
  technique: string[]
  normalFindings: string[]
  abnormalFindings: string[]
  interpretation: string
  /** -> Disease.id */
  associatedConditionIds?: string[]
  clinicalPearls: string[]
  commonErrors: string[]
  limitations?: string[]
  /** -> ExamTechnique.id */
  relatedTechniqueIds?: string[]
  /** -> CalculatorMeta.id — reuse the existing calculator rather than re-implementing its math. */
  relatedCalculatorIds?: string[]
  /** -> Drug.id, e.g. cycloplegic agents relevant to cycloplegic retinoscopy. */
  relatedDrugIds?: string[]
  /** Citation strings, e.g. "AAO PPP: Comprehensive Adult Medical Eye Evaluation, 2020". */
  references: string[]
}
