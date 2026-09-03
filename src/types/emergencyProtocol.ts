export type EmergencyCategory =
  | 'Chemical & Trauma'
  | 'Vascular & Retinal'
  | 'Angle-Closure & Pressure'
  | 'Infectious'
  | 'Orbital'
  | 'Neuro-Ophthalmic'
  | 'Systemic'

/** How fast action is genuinely required — distinct from ClinicalWorkup's WorkupUrgency, which
 * grades how quickly a symptom needs to be SEEN. This grades how quickly a CONFIRMED diagnosis
 * needs to be ACTED on. */
export type EmergencyUrgencyTier =
  | 'Immediate (minutes)'
  | 'Emergent (same-visit / hours)'
  | 'Urgent (24-48h)'

export interface EmergencyProtocol {
  id: string
  name: string
  aliases?: string[]
  category: EmergencyCategory
  urgencyTier: EmergencyUrgencyTier
  overview: string
  /** Presenting features that should trigger this protocol. */
  redFlags: string[]
  /** Only populated when a genuinely time-bound viability/efficacy window exists (e.g. CRAO,
   * chemical burn irrigation) — omitted otherwise rather than inventing a false deadline. */
  timeWindow?: string
  /** Ordered first steps, in the order they should actually happen. */
  immediateActions: string[]
  /** Common, genuinely harmful mistakes — not just "don't skip a step". */
  doNotDo: string[]
  /** What happens once the patient is stabilized/triaged, before referral or definitive care. */
  fullEvaluationSteps: string[]
  referralCriteria: string
  /** -> Disease.id */
  associatedConditionIds?: string[]
  /** -> Drug.id */
  relatedDrugIds?: string[]
  /** -> ClinicalWorkup.id */
  relatedWorkupIds?: string[]
  /** -> ExamTechnique.id */
  relatedTechniqueIds?: string[]
  clinicalPearls: string[]
  commonPitfalls: string[]
  references: string[]
}
