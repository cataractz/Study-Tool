import type { DecisionTree } from '../../types/decisionTree'
import { presentingComplaintTrees } from './presentingComplaint'
import { clinicalFindingTrees } from './clinicalFinding'
import { diseaseManagementTrees } from './diseaseManagement'

export const allDecisionTrees: DecisionTree[] = [
  ...presentingComplaintTrees,
  ...clinicalFindingTrees,
  ...diseaseManagementTrees,
]
