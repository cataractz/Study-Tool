import { describe, it, expect } from 'vitest'
import { calculatorRegistry } from '../registry'
import { getAllDiseases } from '../../services/diseaseService'
import { getAllExamTechniques } from '../../services/examTechniqueService'

describe('calculator registry data integrity', () => {
  it('has no duplicate calculator ids', () => {
    const ids = calculatorRegistry.map((c) => c.meta.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every calculator has non-empty core fields', () => {
    for (const { meta } of calculatorRegistry) {
      expect(meta.name.trim().length, meta.id).toBeGreaterThan(0)
      expect(meta.description.trim().length, meta.id).toBeGreaterThan(0)
      expect(meta.formula.trim().length, meta.id).toBeGreaterThan(0)
      expect(meta.keywords.length, meta.id).toBeGreaterThan(0)
      expect(meta.clinicalRelevance.trim().length, meta.id).toBeGreaterThan(0)
    }
  })

  it('every relatedCalculatorIds value resolves to a real calculator, and never to itself', () => {
    const validIds = new Set(calculatorRegistry.map((c) => c.meta.id))
    for (const { meta } of calculatorRegistry) {
      for (const id of meta.relatedCalculatorIds ?? []) {
        expect(validIds.has(id), `${meta.id}: relatedCalculatorIds "${id}"`).toBe(true)
        expect(id, `${meta.id}: relatedCalculatorIds should not self-reference`).not.toBe(meta.id)
      }
    }
  })

  it('every relatedDiseaseIds value resolves to a real Disease', () => {
    const validIds = new Set(getAllDiseases().map((d) => d.id))
    for (const { meta } of calculatorRegistry) {
      for (const id of meta.relatedDiseaseIds ?? []) {
        expect(validIds.has(id), `${meta.id}: relatedDiseaseIds "${id}"`).toBe(true)
      }
    }
  })

  it('every relatedExamTechniqueIds value resolves to a real ExamTechnique', () => {
    const validIds = new Set(getAllExamTechniques().map((t) => t.id))
    for (const { meta } of calculatorRegistry) {
      for (const id of meta.relatedExamTechniqueIds ?? []) {
        expect(validIds.has(id), `${meta.id}: relatedExamTechniqueIds "${id}"`).toBe(true)
      }
    }
  })

  it('every references entry, where present, is a non-empty string', () => {
    for (const { meta } of calculatorRegistry) {
      for (const ref of meta.references ?? []) {
        expect(ref.trim().length, meta.id).toBeGreaterThan(0)
      }
    }
  })

  it('has a representative-sized registry (>= 60 calculators after Section 9 expansion)', () => {
    expect(calculatorRegistry.length).toBeGreaterThanOrEqual(60)
  })
})
