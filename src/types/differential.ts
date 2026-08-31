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
  /** Free-text value/description entered for a selected Other Testing finding, keyed by its label
   * (e.g. { 'Tear breakup time': '8 sec', 'OCT findings': 'subretinal fluid, hyperreflective foci' }). */
  otherTestingDetails?: Record<string, string>
  binocularVision: string[]
  binocularVisionOther?: string
  npc?: string
  coverTestDistance?: string
  coverTestNear?: string
  vonGraefeDistance?: string
  vonGraefeNear?: string
  nra?: string
  pra?: string
  biRangeDistance?: string
  boRangeDistance?: string
  biRangeNear?: string
  boRangeNear?: string
  acaRatio?: string
  stereoacuity?: string
  amplitudeOfAccommodation?: string
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
  /** How well the entered findings match this disease's typical presentation (0-100). Judged
   * independently per disease, so it is normal for several candidates to score similarly or
   * even tie — this is a fit score, not a probability. */
  matchScore: number
  /** Relative likelihood among the candidates actually shown (they sum to ~100%), derived from
   * each candidate's underlying weighted evidence total. Ranks the differential; it is NOT an
   * absolute/population probability, since it doesn't account for real-world disease
   * prevalence — see the Differential Diagnosis page for the full caveat. */
  probability: number
  whyItMatches: string[]
  findingsAgainst: string[]
  distinguishingFactors: string[]
  urgency: Urgency
  nextSteps: string[]
}
