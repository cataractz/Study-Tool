export type PrescriptionDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Expert'

export interface PrescriptionAnswer {
  drugId: string
  concentration: string
  dosageForm: string
  route: string
  frequency: string
  duration: string
  quantity: string
  refills: string
  specialInstructions?: string
}

export interface PrescriptionCase {
  id: string
  difficulty: PrescriptionDifficulty
  scenario: string
  patientContext: {
    age: number
    sex: 'Male' | 'Female'
    allergies: string[]
    medicalHistory: string[]
    complicatingFactors?: string[]
  }
  correctDrugOptions: string[]
  correctAnswer: PrescriptionAnswer
  reasoning: string
  distractorDrugIds: string[]
}

export interface PrescriptionSubmission {
  drugId: string
  concentration: string
  dosageForm: string
  route: string
  frequency: string
  duration: string
  quantity: string
  refills: string
  specialInstructions?: string
}

export interface GradedField {
  field: string
  correct: boolean
  submitted: string
  expected: string
}

export interface GradingResult {
  fields: GradedField[]
  score: number
  totalFields: number
  whatYouGotRight: string[]
  whatYouMissed: string[]
  whyCorrectIsAppropriate: string
}
