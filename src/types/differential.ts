export type Urgency = 'Emergency' | 'Urgent' | 'Prompt' | 'Routine'

export interface DifferentialFindings {
  age?: string
  sex?: string
  history?: string
  chiefComplaint?: string
  duration?: string
  laterality?: string
  symptoms: string[]
  symptomsOther?: string
  vaOD?: string
  vaOS?: string
  pupils: string[]
  pupilsOther?: string
  iopOD?: string
  iopOS?: string
  anteriorSegment: string[]
  anteriorSegmentOther?: string
  posteriorSegment: string[]
  posteriorSegmentOther?: string
  visualField: string[]
  visualFieldOther?: string
  otherTesting: string[]
  otherTestingOther?: string
}

export interface ConditionProfile {
  diseaseId: string
  name: string
  supportingFindings: string[]
  contradictingFindings: string[]
  distinguishingFindings: string[]
  urgency: Urgency
  nextSteps: string[]
}

export interface DifferentialResult {
  diseaseId: string
  name: string
  matchScore: number
  whyItMatches: string[]
  findingsAgainst: string[]
  distinguishingFactors: string[]
  urgency: Urgency
  nextSteps: string[]
}
