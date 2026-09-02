import { describe, it, expect } from 'vitest'
import { getAllClinicalWorkups, getClinicalWorkupById, searchClinicalWorkups, getWorkupsReferencingTechnique } from '../clinicalWorkupService'

describe('clinical workup data integrity', () => {
  it('has no duplicate workup ids', () => {
    const ids = getAllClinicalWorkups().map((w) => w.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every workup has the required fields populated', () => {
    for (const w of getAllClinicalWorkups()) {
      expect(w.name.trim().length).toBeGreaterThan(0)
      expect(w.chiefComplaint.trim().length).toBeGreaterThan(0)
      expect(w.keyHistory.length).toBeGreaterThan(0)
      expect(w.redFlags.length).toBeGreaterThan(0)
      expect(w.initialExamSteps.length).toBeGreaterThan(0)
      expect(w.mostLikelyDiagnoses.trim().length).toBeGreaterThan(0)
      expect(['Emergency', 'Urgent', 'Prompt', 'Routine']).toContain(w.urgency)
      expect(w.managementConsiderations.trim().length).toBeGreaterThan(0)
      expect(w.references.length).toBeGreaterThan(0)
    }
  })

  it('has a representative-sized data set', () => {
    expect(getAllClinicalWorkups().length).toBeGreaterThanOrEqual(8)
  })
})

describe('getClinicalWorkupById', () => {
  it('finds a known workup by id', () => {
    expect(getClinicalWorkupById('red-eye-workup')?.name).toBe('Red Eye')
  })

  it('returns undefined for an unknown id', () => {
    expect(getClinicalWorkupById('not-a-real-workup')).toBeUndefined()
  })
})

describe('searchClinicalWorkups', () => {
  it('finds a workup by name substring', () => {
    const results = searchClinicalWorkups('red eye')
    expect(results.some((w) => w.id === 'red-eye-workup')).toBe(true)
  })

  it('finds a workup by chief complaint text', () => {
    const results = searchClinicalWorkups('red eye')
    expect(results.length).toBeGreaterThan(0)
  })

  it('returns everything for an empty query', () => {
    expect(searchClinicalWorkups('')).toHaveLength(getAllClinicalWorkups().length)
  })
})

describe('getWorkupsReferencingTechnique', () => {
  it('finds workups whose ancillary testing includes the given technique', () => {
    const results = getWorkupsReferencingTechnique('van-herick-test')
    expect(results.some((w) => w.id === 'red-eye-workup')).toBe(true)
  })

  it('returns an empty array for a technique referenced by no workup', () => {
    expect(getWorkupsReferencingTechnique('not-a-real-technique')).toEqual([])
  })
})
