import { describe, it, expect } from 'vitest'
import { getInteractionsForDrugs, getInteractionCountForDrug } from '../drugInteractionService'
import { drugInteractions } from '../../data/drugInteractions'
import { getAllDrugs } from '../drugService'

describe('drug interaction data integrity', () => {
  it('has no duplicate interaction ids', () => {
    const ids = drugInteractions.map((i) => i.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('has no duplicate pairs regardless of order', () => {
    const pairs = drugInteractions.map((i) => [i.drugAId, i.drugBId].sort().join('::'))
    const dupes = pairs.filter((p, i) => pairs.indexOf(p) !== i)
    expect(dupes).toEqual([])
  })

  it('never pairs a drug with itself', () => {
    for (const i of drugInteractions) {
      expect(i.drugAId).not.toBe(i.drugBId)
    }
  })

  it('every referenced drug id exists in the drug database', () => {
    const validIds = new Set(getAllDrugs().map((d) => d.id))
    for (const i of drugInteractions) {
      expect(validIds.has(i.drugAId)).toBe(true)
      expect(validIds.has(i.drugBId)).toBe(true)
    }
  })

  it('every entry has non-empty mechanism, clinicalEffect, and management text', () => {
    for (const i of drugInteractions) {
      expect(i.mechanism.trim().length).toBeGreaterThan(0)
      expect(i.clinicalEffect.trim().length).toBeGreaterThan(0)
      expect(i.management.trim().length).toBeGreaterThan(0)
    }
  })
})

describe('getInteractionsForDrugs', () => {
  it('finds a known interaction between two selected drugs', () => {
    const results = getInteractionsForDrugs(['timolol', 'verapamil'])
    expect(results.some((i) => i.id === 'timolol--verapamil')).toBe(true)
  })

  it('is order-independent', () => {
    const a = getInteractionsForDrugs(['timolol', 'verapamil'])
    const b = getInteractionsForDrugs(['verapamil', 'timolol'])
    expect(a.map((i) => i.id)).toEqual(b.map((i) => i.id))
  })

  it('returns nothing for a single drug', () => {
    expect(getInteractionsForDrugs(['timolol'])).toEqual([])
  })

  it('returns nothing for an empty list', () => {
    expect(getInteractionsForDrugs([])).toEqual([])
  })

  it('returns nothing for two drugs with no documented interaction', () => {
    expect(getInteractionsForDrugs(['fluorescein-sodium', 'lissamine-green'])).toEqual([])
  })

  it('finds every pairwise interaction among 3+ selected drugs, not just adjacent pairs', () => {
    // timolol-verapamil, timolol-digoxin, digoxin-verapamil are all documented
    const results = getInteractionsForDrugs(['timolol', 'verapamil', 'digoxin'])
    const ids = results.map((i) => i.id)
    expect(ids).toContain('timolol--verapamil')
    expect(ids).toContain('timolol--digoxin')
    expect(ids).toContain('digoxin--verapamil')
  })

  it('sorts results most severe first', () => {
    const results = getInteractionsForDrugs(['isotretinoin', 'doxycycline', 'timolol', 'digoxin'])
    const severityRank = { Contraindicated: 0, Major: 1, Moderate: 2, Minor: 3 }
    for (let i = 1; i < results.length; i++) {
      expect(severityRank[results[i - 1].severity]).toBeLessThanOrEqual(severityRank[results[i].severity])
    }
  })
})

describe('getInteractionCountForDrug', () => {
  it('counts interactions involving a drug regardless of position', () => {
    expect(getInteractionCountForDrug('warfarin')).toBeGreaterThan(5)
  })

  it('returns 0 for a drug with no documented interactions', () => {
    expect(getInteractionCountForDrug('fluorescein-sodium')).toBe(0)
  })
})
