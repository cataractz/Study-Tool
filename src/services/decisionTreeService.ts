import { allDecisionTrees } from '../data/decisionTrees'
import type { DecisionTree, DecisionTreeCategory, DecisionNode } from '../types/decisionTree'

export function getAllDecisionTrees(): DecisionTree[] {
  return allDecisionTrees
}

export function getDecisionTreeById(id: string): DecisionTree | undefined {
  return allDecisionTrees.find((t) => t.id === id)
}

export function getDecisionTreeCategories(): DecisionTreeCategory[] {
  const set = new Set<DecisionTreeCategory>()
  for (const tree of allDecisionTrees) {
    for (const cat of tree.categories) set.add(cat)
  }
  return Array.from(set)
}

export function searchDecisionTrees(query: string): DecisionTree[] {
  const q = query.trim().toLowerCase()
  if (!q) return allDecisionTrees
  return allDecisionTrees.filter((t) => {
    const haystack = [t.name, ...(t.aliases ?? []), t.summary].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

export function getNode(tree: DecisionTree, nodeId: string): DecisionNode | undefined {
  return tree.nodes[nodeId]
}

export function getStartNode(tree: DecisionTree): DecisionNode | undefined {
  return tree.nodes[tree.startNodeId]
}

export const decisionTreeCategoryLabels: Record<DecisionTreeCategory, string> = {
  'presenting-complaint': 'Presenting Complaint',
  'clinical-finding': 'Clinical Finding',
  'disease-management': 'Disease/Condition Management',
}
