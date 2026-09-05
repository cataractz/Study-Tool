import { describe, it, expect } from 'vitest'
import {
  getAllDiseases,
  getDiseaseById,
  getDiseasesByCategory,
  getDiseaseCategories,
  searchDiseases,
} from '../diseaseService'
import { getAllDrugs } from '../drugService'
import { getAllExamTechniques } from '../examTechniqueService'
import { calculatorRegistry } from '../../calculators/registry'

describe('disease data integrity', () => {
  it('has no duplicate disease ids', () => {
    const ids = getAllDiseases().map((d) => d.id)
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([])
  })

  it('every disease has the required base fields populated', () => {
    for (const d of getAllDiseases()) {
      expect(d.name.trim().length, d.id).toBeGreaterThan(0)
      expect(d.definition.trim().length, d.id).toBeGreaterThan(0)
      expect(d.riskFactors.length, d.id).toBeGreaterThan(0)
      expect(d.signs.length, d.id).toBeGreaterThan(0)
      expect(d.management.length, d.id).toBeGreaterThan(0)
      expect(d.clinicalPearls.length, d.id).toBeGreaterThan(0)
    }
  })

  it('has a representative-sized data set (248 diseases as of Section 17)', () => {
    expect(getAllDiseases().length).toBe(248)
  })
})

describe('managementProtocol coverage and integrity (Section 17)', () => {
  it('every disease has a managementProtocol with required fields populated', () => {
    for (const d of getAllDiseases()) {
      expect(d.managementProtocol, `${d.id} missing managementProtocol`).toBeDefined()
      const p = d.managementProtocol!
      expect(p.workup.length, d.id).toBeGreaterThan(0)
      expect(p.initialTreatment.trim().length, d.id).toBeGreaterThan(0)
      expect(p.followUpSchedule.trim().length, d.id).toBeGreaterThan(0)
      expect(p.escalationCriteria.length, d.id).toBeGreaterThan(0)
      expect(p.referralCriteria.length, d.id).toBeGreaterThan(0)
      expect(p.complications.length, d.id).toBeGreaterThan(0)
      expect(p.monitoringParameters.length, d.id).toBeGreaterThan(0)
    }
  })

  it('every managementProtocol.relatedDrugIds value resolves to a real Drug', () => {
    const validIds = new Set(getAllDrugs().map((d) => d.id))
    for (const d of getAllDiseases()) {
      for (const id of d.managementProtocol?.relatedDrugIds ?? []) {
        expect(validIds.has(id), `${d.id}: relatedDrugIds "${id}"`).toBe(true)
      }
    }
  })

  it('every managementProtocol.relatedCalculatorIds value resolves to a real calculator', () => {
    const validIds = new Set(calculatorRegistry.map((c) => c.meta.id))
    for (const d of getAllDiseases()) {
      for (const id of d.managementProtocol?.relatedCalculatorIds ?? []) {
        expect(validIds.has(id), `${d.id}: relatedCalculatorIds "${id}"`).toBe(true)
      }
    }
  })

  it('every managementProtocol.relatedExamTechniqueIds value resolves to a real ExamTechnique', () => {
    const validIds = new Set(getAllExamTechniques().map((t) => t.id))
    for (const d of getAllDiseases()) {
      for (const id of d.managementProtocol?.relatedExamTechniqueIds ?? []) {
        expect(validIds.has(id), `${d.id}: relatedExamTechniqueIds "${id}"`).toBe(true)
      }
    }
  })
})

describe('getDiseaseById / getDiseasesByCategory / getDiseaseCategories / searchDiseases', () => {
  it('finds a known disease by id', () => {
    expect(getDiseaseById('anterior-uveitis')?.name).toBe('Anterior Uveitis')
  })

  it('returns undefined for an unknown id', () => {
    expect(getDiseaseById('not-a-real-disease')).toBeUndefined()
  })

  it('filters to only the requested category', () => {
    const results = getDiseasesByCategory('Cornea')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((d) => d.category === 'Cornea')).toBe(true)
  })

  it('covers all 22 categories', () => {
    expect(getDiseaseCategories().length).toBe(22)
  })

  it('returns everything for an empty query', () => {
    expect(searchDiseases('')).toHaveLength(getAllDiseases().length)
  })
})
