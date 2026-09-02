import { describe, it, expect } from 'vitest'
import { globalSearch } from '../searchService'

describe('globalSearch', () => {
  it('returns nothing for an empty or whitespace-only query', () => {
    expect(globalSearch('')).toEqual([])
    expect(globalSearch('   ')).toEqual([])
  })

  it('finds a disease by name', () => {
    const results = globalSearch('primary open-angle glaucoma')
    expect(results.some((r) => r.type === 'disease' && r.id === 'primary-open-angle-glaucoma')).toBe(true)
  })

  it('finds a drug by generic name', () => {
    const results = globalSearch('moxifloxacin')
    expect(results.some((r) => r.type === 'drug' && r.id === 'moxifloxacin')).toBe(true)
  })

  it('finds a calculator by keyword', () => {
    const results = globalSearch('vergence')
    expect(results.some((r) => r.type === 'calculator')).toBe(true)
  })

  it('finds a reference table by keyword', () => {
    const results = globalSearch('morgan')
    expect(results.some((r) => r.type === 'reference')).toBe(true)
  })

  it('finds an exam technique by name', () => {
    const results = globalSearch('Van Herick')
    expect(results.some((r) => r.type === 'exam-technique' && r.id === 'van-herick-test')).toBe(true)
  })

  it('finds an exam technique by alias', () => {
    const results = globalSearch('GAT')
    expect(results.some((r) => r.type === 'exam-technique' && r.id === 'goldmann-applanation-tonometry')).toBe(true)
  })

  it('finds a clinical workup by name', () => {
    const results = globalSearch('red eye')
    expect(results.some((r) => r.type === 'clinical-workup' && r.id === 'red-eye-workup')).toBe(true)
  })

  it('interleaves results across content types rather than one type crowding out the rest', () => {
    // "glaucoma" matches diseases and at least one calculator (ocular perfusion pressure mentions
    // glaucoma risk in its clinical relevance / keywords).
    const results = globalSearch('a', 20)
    const types = new Set(results.map((r) => r.type))
    // A single common letter should match something in every content type given 240+ diseases,
    // 150+ drugs, 40+ calculators and reference tables.
    expect(types.size).toBeGreaterThan(1)
  })

  it('respects the limit parameter', () => {
    const results = globalSearch('a', 5)
    expect(results.length).toBeLessThanOrEqual(5)
  })
})
