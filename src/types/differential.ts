export type Urgency = 'Emergency' | 'Urgent' | 'Prompt' | 'Routine'

export interface DifferentialFindings {
  age?: string
  sex?: string
  history?: string
  chiefComplaint?: string
  duration?: string
  laterality?: string
  symptoms: string[]
  vaOD?: string
  vaOS?: string
  pupils: string[]
  iopOD?: string
  iopOS?: string
  anteriorSegment: string[]
  posteriorSegment: string[]
  visualField: string[]
  otherTesting: string[]
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
