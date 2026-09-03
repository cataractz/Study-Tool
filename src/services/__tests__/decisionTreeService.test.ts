import { describe, it, expect } from 'vitest'
import {
  getAllDecisionTrees,
  getDecisionTreeById,
  getDecisionTreeCategories,
  searchDecisionTrees,
} from '../decisionTreeService'
import { getAllDiseases } from '../diseaseService'
import { getAllDrugs } from '../drugService'
import { getAllExamTechniques } from '../examTechniqueService'
import { getAllClinicalWorkups } from '../clinicalWorkupService'
import { getAllEmergencyProtocols } from '../emergencyProtocolService'
import { calculatorRegistry } from '../../calculators/registry'

describe('decision tree data integrity', () => {
  it('has no duplicate tree ids', () => {
    const ids = getAllDecisionTrees().map((t) => t.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('has a representative-sized data set', () => {
    expect(getAllDecisionTrees().length).toBeGreaterThanOrEqual(2)
  })

  it('every tree has at least one category', () => {
    for (const tree of getAllDecisionTrees()) {
      expect(tree.categories.length).toBeGreaterThan(0)
    }
  })

  it('every tree has non-empty name, summary, and references', () => {
    for (const tree of getAllDecisionTrees()) {
      expect(tree.name.trim().length).toBeGreaterThan(0)
      expect(tree.summary.trim().length).toBeGreaterThan(0)
      expect(tree.references.length).toBeGreaterThan(0)
    }
  })

  it('every startNodeId resolves to a real node in that tree', () => {
    for (const tree of getAllDecisionTrees()) {
      expect(tree.nodes[tree.startNodeId], `${tree.id}: startNodeId "${tree.startNodeId}" not found`).toBeDefined()
    }
  })

  it('every question option.nextNodeId resolves to a real node in the same tree', () => {
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'question') continue
        for (const option of node.options) {
          expect(
            tree.nodes[option.nextNodeId],
            `${tree.id}/${node.id}: option "${option.id}" -> nextNodeId "${option.nextNodeId}" does not resolve`,
          ).toBeDefined()
        }
      }
    }
  })

  it('every node is reachable from startNodeId (no orphaned nodes)', () => {
    for (const tree of getAllDecisionTrees()) {
      const visited = new Set<string>()
      const queue = [tree.startNodeId]
      while (queue.length > 0) {
        const currentId = queue.shift()!
        if (visited.has(currentId)) continue
        visited.add(currentId)
        const node = tree.nodes[currentId]
        if (node?.type === 'question') {
          for (const option of node.options) queue.push(option.nextNodeId)
        }
      }
      const allNodeIds = Object.keys(tree.nodes)
      const unreachable = allNodeIds.filter((id) => !visited.has(id))
      expect(unreachable, `${tree.id}: unreachable nodes`).toEqual([])
    }
  })

  it('every question node has at least 2 options', () => {
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'question') continue
        expect(node.options.length, `${tree.id}/${node.id}`).toBeGreaterThanOrEqual(2)
      }
    }
  })

  it('every outcome node has non-empty recommendedNextSteps', () => {
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        expect(node.recommendedNextSteps.length, `${tree.id}/${node.id}`).toBeGreaterThan(0)
      }
    }
  })

  it('every relatedDiseaseIds / mostLikely / mustNotMiss diseaseId resolves to a real Disease', () => {
    const validIds = new Set(getAllDiseases().map((d) => d.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedDiseaseIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedDiseaseIds "${id}"`).toBe(true)
        }
        for (const item of [...node.mostLikely, ...node.mustNotMiss]) {
          expect(validIds.has(item.diseaseId), `${tree.id}/${node.id}: diseaseId "${item.diseaseId}"`).toBe(true)
        }
      }
    }
  })

  it('every relatedDrugIds resolves to a real Drug', () => {
    const validIds = new Set(getAllDrugs().map((d) => d.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedDrugIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedDrugIds "${id}"`).toBe(true)
        }
      }
    }
  })

  it('every relatedExamTechniqueIds resolves to a real ExamTechnique', () => {
    const validIds = new Set(getAllExamTechniques().map((t) => t.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedExamTechniqueIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedExamTechniqueIds "${id}"`).toBe(true)
        }
      }
    }
  })

  it('every relatedCalculatorIds resolves to a real calculator', () => {
    const validIds = new Set(calculatorRegistry.map((c) => c.meta.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedCalculatorIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedCalculatorIds "${id}"`).toBe(true)
        }
      }
    }
  })

  it('every relatedWorkupIds resolves to a real ClinicalWorkup', () => {
    const validIds = new Set(getAllClinicalWorkups().map((w) => w.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedWorkupIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedWorkupIds "${id}"`).toBe(true)
        }
      }
    }
  })

  it('every relatedEmergencyProtocolIds resolves to a real EmergencyProtocol', () => {
    const validIds = new Set(getAllEmergencyProtocols().map((p) => p.id))
    for (const tree of getAllDecisionTrees()) {
      for (const node of Object.values(tree.nodes)) {
        if (node.type !== 'outcome') continue
        for (const id of node.relatedEmergencyProtocolIds ?? []) {
          expect(validIds.has(id), `${tree.id}/${node.id}: relatedEmergencyProtocolIds "${id}"`).toBe(true)
        }
      }
    }
  })
})

describe('getDecisionTreeById', () => {
  it('finds a known tree by id', () => {
    expect(getDecisionTreeById('red-eye')?.name).toBe('Red Eye')
  })

  it('returns undefined for an unknown id', () => {
    expect(getDecisionTreeById('not-a-real-tree')).toBeUndefined()
  })
})

describe('getDecisionTreeCategories', () => {
  it('returns at least the 3 landing categories once trees are populated', () => {
    const categories = getDecisionTreeCategories()
    expect(categories.length).toBeGreaterThan(0)
    for (const cat of categories) {
      expect(['presenting-complaint', 'clinical-finding', 'disease-management']).toContain(cat)
    }
  })
})

describe('searchDecisionTrees', () => {
  it('finds a tree by partial name match', () => {
    const results = searchDecisionTrees('red eye')
    expect(results.some((t) => t.id === 'red-eye')).toBe(true)
  })

  it('returns all trees for an empty query', () => {
    expect(searchDecisionTrees('').length).toBe(getAllDecisionTrees().length)
  })

  it('returns an empty array for a query matching nothing', () => {
    expect(searchDecisionTrees('zzzznonexistentzzzz')).toEqual([])
  })
})
