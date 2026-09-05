import { describe, it, expect } from 'vitest'
import {
  PEDIATRIC_TECHNIQUE_CATEGORIES,
  PEDIATRIC_TECHNIQUE_IDS,
  PEDIATRIC_WORKUP_IDS,
  PEDIATRIC_MYOPIA_CONTROL_WORKUP_ID,
  PEDIATRIC_EMERGENCY_PROTOCOL_ID,
  PEDIATRIC_REFERENCE_IDS,
  getPediatricTechniqueCategory,
  getPediatricTechniqueIds,
  groupByPediatricCategory,
  getPediatricDiseases,
} from '../pediatricsMap'
import { getAllExamTechniques, getExamTechniqueById } from '../../../services/examTechniqueService'
import { getClinicalWorkupById } from '../../../services/clinicalWorkupService'
import { getEmergencyProtocolById } from '../../../services/emergencyProtocolService'
import { getReferenceById } from '../../../reference/registry'

describe('pediatrics classification map', () => {
  it('every mapped technique id resolves to a real ExamTechnique', () => {
    for (const category of PEDIATRIC_TECHNIQUE_CATEGORIES) {
      for (const id of PEDIATRIC_TECHNIQUE_IDS[category]) {
        expect(getExamTechniqueById(id), `${category}: "${id}"`).toBeDefined()
      }
    }
  })

  it('has no duplicate ids across categories', () => {
    const ids = getPediatricTechniqueIds()
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('getPediatricTechniqueCategory resolves every mapped id back to its category', () => {
    for (const category of PEDIATRIC_TECHNIQUE_CATEGORIES) {
      for (const id of PEDIATRIC_TECHNIQUE_IDS[category]) {
        expect(getPediatricTechniqueCategory(id)).toBe(category)
      }
    }
  })

  it('returns undefined for a technique not in the map', () => {
    expect(getPediatricTechniqueCategory('not-a-real-technique')).toBeUndefined()
  })

  it('groupByPediatricCategory buckets every mapped technique and no others', () => {
    const techniques = getAllExamTechniques()
    const grouped = groupByPediatricCategory(techniques)
    const totalGrouped = Array.from(grouped.values()).reduce((sum, arr) => sum + arr.length, 0)
    expect(totalGrouped).toBe(getPediatricTechniqueIds().length)
  })

  it('every pediatric workup id resolves to a real ClinicalWorkup', () => {
    for (const id of PEDIATRIC_WORKUP_IDS) {
      expect(getClinicalWorkupById(id), id).toBeDefined()
    }
  })

  it('the myopia control workup pointer resolves to a real ClinicalWorkup', () => {
    expect(getClinicalWorkupById(PEDIATRIC_MYOPIA_CONTROL_WORKUP_ID)).toBeDefined()
  })

  it('the emergency protocol pointer resolves to a real EmergencyProtocol', () => {
    expect(getEmergencyProtocolById(PEDIATRIC_EMERGENCY_PROTOCOL_ID)).toBeDefined()
  })

  it('every pediatric reference id resolves to a real reference entry', () => {
    for (const id of PEDIATRIC_REFERENCE_IDS) {
      expect(getReferenceById(id), id).toBeDefined()
    }
  })

  it('getPediatricDiseases returns only Pediatric & Binocular Vision diseases, including PFV/PHPV', () => {
    const diseases = getPediatricDiseases()
    expect(diseases.length).toBeGreaterThan(0)
    expect(diseases.every((d) => d.category === 'Pediatric & Binocular Vision')).toBe(true)
    expect(diseases.some((d) => d.id === 'persistent-fetal-vasculature')).toBe(true)
  })
})
