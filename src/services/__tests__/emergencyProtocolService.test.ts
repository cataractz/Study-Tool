import { describe, it, expect } from 'vitest'
import {
  getAllEmergencyProtocols,
  getEmergencyProtocolById,
  getEmergencyCategories,
  getEmergencyProtocolsByCategory,
  searchEmergencyProtocols,
} from '../emergencyProtocolService'
import { getAllDiseases } from '../diseaseService'
import { getAllDrugs } from '../drugService'
import { getAllClinicalWorkups } from '../clinicalWorkupService'
import { getAllExamTechniques } from '../examTechniqueService'

describe('emergency protocol data integrity', () => {
  it('has no duplicate protocol ids', () => {
    const ids = getAllEmergencyProtocols().map((p) => p.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every protocol has the required fields populated', () => {
    for (const p of getAllEmergencyProtocols()) {
      expect(p.name.trim().length, p.id).toBeGreaterThan(0)
      expect(p.category.trim().length, p.id).toBeGreaterThan(0)
      expect(p.overview.trim().length, p.id).toBeGreaterThan(0)
      expect(p.redFlags.length, p.id).toBeGreaterThan(0)
      expect(p.immediateActions.length, p.id).toBeGreaterThan(0)
      expect(p.doNotDo.length, p.id).toBeGreaterThan(0)
      expect(p.fullEvaluationSteps.length, p.id).toBeGreaterThan(0)
      expect(p.referralCriteria.trim().length, p.id).toBeGreaterThan(0)
      expect(p.clinicalPearls.length, p.id).toBeGreaterThan(0)
      expect(p.commonPitfalls.length, p.id).toBeGreaterThan(0)
      expect(p.references.length, p.id).toBeGreaterThan(0)
    }
  })

  it('has a representative-sized data set (17 protocols as of Section 12)', () => {
    expect(getAllEmergencyProtocols().length).toBe(17)
  })
})

describe('emergency protocol cross-link integrity', () => {
  it('every associatedConditionIds value resolves to a real Disease', () => {
    const validIds = new Set(getAllDiseases().map((d) => d.id))
    for (const p of getAllEmergencyProtocols()) {
      for (const id of p.associatedConditionIds ?? []) {
        expect(validIds.has(id), `${p.id}: associatedConditionIds "${id}"`).toBe(true)
      }
    }
  })

  it('every relatedDrugIds value resolves to a real Drug', () => {
    const validIds = new Set(getAllDrugs().map((d) => d.id))
    for (const p of getAllEmergencyProtocols()) {
      for (const id of p.relatedDrugIds ?? []) {
        expect(validIds.has(id), `${p.id}: relatedDrugIds "${id}"`).toBe(true)
      }
    }
  })

  it('every relatedWorkupIds value resolves to a real ClinicalWorkup', () => {
    const validIds = new Set(getAllClinicalWorkups().map((w) => w.id))
    for (const p of getAllEmergencyProtocols()) {
      for (const id of p.relatedWorkupIds ?? []) {
        expect(validIds.has(id), `${p.id}: relatedWorkupIds "${id}"`).toBe(true)
      }
    }
  })

  it('every relatedTechniqueIds value resolves to a real ExamTechnique', () => {
    const validIds = new Set(getAllExamTechniques().map((t) => t.id))
    for (const p of getAllEmergencyProtocols()) {
      for (const id of p.relatedTechniqueIds ?? []) {
        expect(validIds.has(id), `${p.id}: relatedTechniqueIds "${id}"`).toBe(true)
      }
    }
  })
})

describe('getEmergencyProtocolById', () => {
  it('finds a known protocol by id', () => {
    expect(getEmergencyProtocolById('non-accidental-trauma-protocol')?.name).toContain('Non-Accidental Trauma')
  })

  it('returns undefined for an unknown id', () => {
    expect(getEmergencyProtocolById('not-a-real-protocol')).toBeUndefined()
  })
})

describe('getEmergencyProtocolsByCategory / getEmergencyCategories', () => {
  it('filters to only the requested category', () => {
    const results = getEmergencyProtocolsByCategory('Chemical & Trauma')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((p) => p.category === 'Chemical & Trauma')).toBe(true)
  })

  it('returns at least one category', () => {
    expect(getEmergencyCategories().length).toBeGreaterThan(0)
  })
})

describe('searchEmergencyProtocols', () => {
  it('finds the NAT protocol by alias', () => {
    const results = searchEmergencyProtocols('shaken baby')
    expect(results.some((p) => p.id === 'non-accidental-trauma-protocol')).toBe(true)
  })

  it('returns everything for an empty query', () => {
    expect(searchEmergencyProtocols('')).toHaveLength(getAllEmergencyProtocols().length)
  })
})
