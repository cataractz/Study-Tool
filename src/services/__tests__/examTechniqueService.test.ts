import { describe, it, expect } from 'vitest'
import {
  getAllExamTechniques,
  getExamTechniqueById,
  getExamTechniquesByCategory,
  getExamCategories,
  getSpecialTests,
  searchExamTechniques,
} from '../examTechniqueService'

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
