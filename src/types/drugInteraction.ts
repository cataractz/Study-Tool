/**
 * Severity follows the common Lexicomp/Micromedex-style tiering used in most clinical interaction
 * checkers: Contraindicated (never co-prescribe), Major (avoid/use only with close monitoring),
 * Moderate (usually manageable with monitoring or spacing/dose adjustment), Minor (be aware of,
 * rarely changes management on its own).
 */
export type InteractionSeverity = 'Contraindicated' | 'Major' | 'Moderate' | 'Minor'

export interface DrugInteraction {
  id: string
  /** Both reference Drug.id values from the Drug Database — order doesn't matter for lookup. */
  drugAId: string
  drugBId: string
  severity: InteractionSeverity
  mechanism: string
  clinicalEffect: string
  management: string
}
