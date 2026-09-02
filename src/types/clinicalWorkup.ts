export type WorkupUrgency = 'Emergency' | 'Urgent' | 'Prompt' | 'Routine'

export interface ClinicalWorkup {
  id: string
  /** e.g. "Sudden Painless Vision Loss" */
  name: string
  chiefComplaint: string
  keyHistory: string[]
  redFlags: string[]
  initialExamSteps: string[]
  /** -> Disease.id, ranked most to least likely. */
  differentialDiagnosisIds?: string[]
  /** -> ExamTechnique.id */
  ancillaryTestingIds?: string[]
  /** Prose synthesis of the most likely diagnoses given typical findings — Linkified. */
  mostLikelyDiagnoses: string
  urgency: WorkupUrgency
  managementConsiderations: string
  references: string[]
}
