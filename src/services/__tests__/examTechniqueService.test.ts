import { describe, it, expect } from 'vitest'
import {
  getAllExamTechniques,
  getExamTechniqueById,
  getExamTechniquesByCategory,
  getExamCategories,
  getSpecialTests,
  searchExamTechniques,
} from '../examTechniqueService'
import { getAllDiseases } from '../diseaseService'
import { getAllDrugs } from '../drugService'
import { calculatorRegistry } from '../../calculators/registry'

describe('exam technique data integrity', () => {
  it('has no duplicate technique ids', () => {
    const ids = getAllExamTechniques().map((t) => t.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every technique has the required fields populated', () => {
    for (const t of getAllExamTechniques()) {
      expect(t.name.trim().length).toBeGreaterThan(0)
      expect(t.section.trim().length).toBeGreaterThan(0)
      expect(t.purpose.trim().length).toBeGreaterThan(0)
      expect(t.clinicalIndications.length).toBeGreaterThan(0)
      expect(t.equipment.length).toBeGreaterThan(0)
      expect(t.technique.length).toBeGreaterThan(0)
      expect(t.normalFindings.length).toBeGreaterThan(0)
      expect(t.abnormalFindings.length).toBeGreaterThan(0)
      expect(t.interpretation.trim().length).toBeGreaterThan(0)
      expect(t.clinicalPearls.length).toBeGreaterThan(0)
      expect(t.commonErrors.length).toBeGreaterThan(0)
      expect(t.references.length).toBeGreaterThan(0)
    }
  })

  it('covers every category in the taxonomy', () => {
    expect(getExamCategories().length).toBe(9)
  })

  it('has a representative-sized data set', () => {
    expect(getAllExamTechniques().length).toBeGreaterThanOrEqual(60)
  })
})

describe('exam technique cross-link integrity', () => {
  it('every relatedTechniqueIds value resolves to a real technique, and never to itself', () => {
    const validIds = new Set(getAllExamTechniques().map((t) => t.id))
    for (const t of getAllExamTechniques()) {
      for (const id of t.relatedTechniqueIds ?? []) {
        expect(validIds.has(id), `${t.id}: relatedTechniqueIds "${id}"`).toBe(true)
        expect(id, `${t.id}: relatedTechniqueIds should not self-reference`).not.toBe(t.id)
      }
    }
  })

  it('every relatedCalculatorIds value resolves to a real calculator', () => {
    const validIds = new Set(calculatorRegistry.map((c) => c.meta.id))
    for (const t of getAllExamTechniques()) {
      for (const id of t.relatedCalculatorIds ?? []) {
        expect(validIds.has(id), `${t.id}: relatedCalculatorIds "${id}"`).toBe(true)
      }
    }
  })

  it('every relatedDrugIds value resolves to a real Drug', () => {
    const validIds = new Set(getAllDrugs().map((d) => d.id))
    for (const t of getAllExamTechniques()) {
      for (const id of t.relatedDrugIds ?? []) {
        expect(validIds.has(id), `${t.id}: relatedDrugIds "${id}"`).toBe(true)
      }
    }
  })

  it('every associatedConditionIds value resolves to a real Disease', () => {
    const validIds = new Set(getAllDiseases().map((d) => d.id))
    for (const t of getAllExamTechniques()) {
      for (const id of t.associatedConditionIds ?? []) {
        expect(validIds.has(id), `${t.id}: associatedConditionIds "${id}"`).toBe(true)
      }
    }
  })
})

describe('getExamTechniqueById', () => {
  it('finds a known technique by id', () => {
    expect(getExamTechniqueById('van-herick-test')?.name).toContain('Van Herick')
  })

  it('returns undefined for an unknown id', () => {
    expect(getExamTechniqueById('not-a-real-technique')).toBeUndefined()
  })
})

describe('getExamTechniquesByCategory', () => {
  it('filters to only the requested category', () => {
    const results = getExamTechniquesByCategory('Anterior Segment')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((t) => t.category === 'Anterior Segment')).toBe(true)
  })
})

describe('getSpecialTests', () => {
  it('returns only techniques tagged as special tests', () => {
    const results = getSpecialTests()
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((t) => t.isSpecialTest)).toBe(true)
  })
})

describe('searchExamTechniques', () => {
  it('finds a technique by name substring', () => {
    const results = searchExamTechniques('seidel')
    expect(results.some((t) => t.id === 'seidel-test')).toBe(true)
  })

  it('finds a technique by alias', () => {
    const results = searchExamTechniques('GAT')
    expect(results.some((t) => t.id === 'goldmann-applanation-tonometry')).toBe(true)
  })

  it('returns everything for an empty query', () => {
    expect(searchExamTechniques('')).toHaveLength(getAllExamTechniques().length)
  })
})
