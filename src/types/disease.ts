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
