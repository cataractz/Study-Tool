import { drugInteractions } from '../data/drugInteractions'
import type { DrugInteraction, InteractionSeverity } from '../types/drugInteraction'

const severityRank: Record<InteractionSeverity, number> = {
  Contraindicated: 0,
  Major: 1,
  Moderate: 2,
  Minor: 3,
}

/**
 * Returns every documented interaction where BOTH drugs are present in the given list — i.e. all
 * pairwise conflicts among a patient's selected medications — sorted most severe first.
 */
export function getInteractionsForDrugs(drugIds: string[]): DrugInteraction[] {
  const idSet = new Set(drugIds)
  return drugInteractions
    .filter((i) => idSet.has(i.drugAId) && idSet.has(i.drugBId))
    .sort((a, b) => severityRank[a.severity] - severityRank[b.severity])
}

export function getInteractionCountForDrug(drugId: string): number {
  return drugInteractions.filter((i) => i.drugAId === drugId || i.drugBId === drugId).length
}
