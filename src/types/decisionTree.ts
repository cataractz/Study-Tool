export type DecisionTreeCategory = 'presenting-complaint' | 'clinical-finding' | 'disease-management'

/** How urgently the outcome recommends the next clinical action be taken. Distinct from both
 * `WorkupUrgency` (grades how fast a raw symptom needs to be SEEN, before any exam findings exist)
 * and `EmergencyUrgencyTier` (grades how fast a CONFIRMED diagnosis needs to be ACTED on) — this
 * grades urgency at the mid-triage point a decision tree ends at, where exam findings have narrowed
 * things but the diagnosis isn't yet confirmed. */
export type DecisionUrgency =
  | 'Emergency (immediate)'
  | 'Same-day'
  | 'Urgent (24-48h)'
  | 'Prompt'
  | 'Routine'

export interface DecisionOption {
  id: string
  label: string
  /** Optional short helper text under the button, e.g. clarifying what counts as a "yes". */
  description?: string
  /** -> DecisionNode.id within the same tree. */
  nextNodeId: string
  /** Marks this option as a red-flag/emergency path for visual treatment in the player UI. */
  isRedFlag?: boolean
}

export interface QuestionNode {
  id: string
  type: 'question'
  question: string
  /** "Why am I being asked this" — rendered as a collapsed-by-default disclosure. */
  rationale?: string
  /** Marks this node as part of the mandatory early emergency-screen step, for distinct styling. */
  isEmergencyScreen?: boolean
  options: DecisionOption[]
}

export interface DifferentialItem {
  /** -> Disease.id */
  diseaseId: string
  /** Always phrased as "increases suspicion for X, interpret in context" — never "this means X". */
  whyItFits: string
}

export interface OutcomeNode {
  id: string
  type: 'outcome'
  title: string
  urgency: DecisionUrgency
  /** Ranked, never a single winner. */
  mostLikely: DifferentialItem[]
  /** A distinct list — dangerous alternatives that must be actively excluded even if unlikely. */
  mustNotMiss: DifferentialItem[]
  recommendedNextSteps: string[]
  managementNotes?: string
  /** -> Disease.id */
  relatedDiseaseIds?: string[]
  /** -> Drug.id */
  relatedDrugIds?: string[]
  /** -> ExamTechnique.id */
  relatedExamTechniqueIds?: string[]
  /** -> CalculatorMeta.id */
  relatedCalculatorIds?: string[]
  /** -> ClinicalWorkup.id — the primary "read more" depth link for most outcomes. */
  relatedWorkupIds?: string[]
  /** -> EmergencyProtocol.id — populated whenever urgency is Emergency/Same-day and a matching
   * protocol exists. */
  relatedEmergencyProtocolIds?: string[]
  /** Outcome-specific references; the tree-level `references` apply generally if this is omitted. */
  references?: string[]
}

export type DecisionNode = QuestionNode | OutcomeNode

export interface DecisionTree {
  id: string
  name: string
  aliases?: string[]
  /** A tree can belong to more than one landing category — e.g. "Elevated IOP" is both a clinical
   * finding (found on routine IOP check) and feeds directly into glaucoma-suspect management. */
  categories: DecisionTreeCategory[]
  /** One-line description for the hub tile. */
  summary: string
  /** -> DecisionNode.id — where traversal begins. */
  startNodeId: string
  nodes: Record<string, DecisionNode>
  references: string[]
}
