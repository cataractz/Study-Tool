export type RiskFactorTier = 'major' | 'moderate' | 'associated'

export interface RiskFactor {
  label: string
  tier: RiskFactorTier
}

export interface SignFinding {
  area:
    | 'External'
    | 'Slit Lamp'
    | 'Cornea'
    | 'Anterior Chamber'
    | 'Lens'
    | 'Vitreous'
    | 'Optic Nerve'
    | 'Retina'
    | 'Other'
  finding: string
}

export interface DifferentialItem {
  disease: string
  whySimilar: string
  keyDistinguisher: string
}

export interface DiagnosticTest {
  name: string
  whyOrdered: string
  expectedFinding: string
  contribution: string
}

export type ManagementCategory =
  | 'Observation'
  | 'First-line treatment'
  | 'Second-line treatment'
  | 'Advanced treatment'
  | 'Referral'
  | 'Emergency management'

export interface ManagementItem {
  category: ManagementCategory
  detail: string
}

/**
 * The deep clinical playbook for a disease — workup through monitoring — distinct from the
 * existing flat `management: ManagementItem[]` quick-scan summary, which stays as-is. This is a
 * process/workflow object embedded in Disease (a content type), so it's the one place a Disease
 * carries curated outbound links, mirroring how ExamTechnique/ClinicalWorkup/EmergencyProtocol
 * link out to content types elsewhere in the app.
 */
export interface ManagementProtocol {
  /** Management-relevant workup steps once the diagnosis is made/suspected — distinct from
   * diagnosticTesting's differential-focused table. */
  workup: string[]
  initialTreatment: string
  followUpSchedule: string
  escalationCriteria: string[]
  referralCriteria: string[]
  /** Only present when a corticosteroid is genuinely part of this disease's real management. */
  steroidConsiderations?: string
  /** Only present when a cycloplegic/mydriatic agent is genuinely part of this disease's real management. */
  cycloplegicConsiderations?: string
  complications: string[]
  monitoringParameters: string[]
  /** -> Drug.id, curated */
  relatedDrugIds?: string[]
  /** -> CalculatorMeta.id, curated */
  relatedCalculatorIds?: string[]
  /** -> ExamTechnique.id, curated */
  relatedExamTechniqueIds?: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface ClinicalCase {
  id: string
  vignette: string
  askingFor: string
  answer: string
  explanation: string
}

export interface Disease {
  id: string
  name: string
  aliases?: string[]
  category:
    | 'Cornea'
    | 'Glaucoma'
    | 'Retina'
    | 'Neuro-Ophthalmology'
    | 'Anterior Segment'
    | 'Eyelid & Adnexa'
    | 'Orbit & Lacrimal'
    | 'Pediatric & Binocular Vision'
    | 'Ocular Trauma'
    | 'Systemic Health - Endocrine'
    | 'Systemic Health - Cardiovascular'
    | 'Systemic Health - Pulmonary'
    | 'Systemic Health - Rheumatologic & Autoimmune'
    | 'Systemic Health - Musculoskeletal'
    | 'Systemic Health - Gastrointestinal & Hepatic'
    | 'Systemic Health - Renal'
    | 'Systemic Health - Hematologic & Oncologic'
    | 'Systemic Health - Neurologic'
    | 'Systemic Health - Infectious Disease'
    | 'Systemic Health - Dermatologic'
    | 'Systemic Health - Genetic & Chromosomal'
    | 'Systemic Health - Nutritional'
  definition: string
  affectedStructure: string
  pathologicalProcess: string
  epidemiology: {
    typicalAge?: string
    sexDistribution?: string
    prevalence?: string
    importantPopulations?: string
  }
  riskFactors: RiskFactor[]
  pathophysiology: string[]
  symptoms: {
    common: string[]
    lessCommon?: string[]
    importantNegatives?: string[]
    typicalProgression?: string
  }
  signs: SignFinding[]
  differentialDiagnosis: DifferentialItem[]
  diagnosticTesting: DiagnosticTest[]
  diagnosis: {
    criteria?: string
    confirmation: string
    classification?: string
  }
  management: ManagementItem[]
  managementProtocol?: ManagementProtocol
  followUp: {
    typical: string
    monitor: string
    progression: string
    shortenWhen?: string
  }
  prognosis: {
    typicalCourse: string
    progressionRisk: string
    complications: string
    visualPrognosis: string
  }
  clinicalPearls: string[]
  highYield: string[]
  quiz?: QuizQuestion[]
  cases?: ClinicalCase[]
}
