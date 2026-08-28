import { describe, it, expect } from 'vitest'
import { referenceRegistry, searchReferences, getReferenceById } from '../../reference/registry'

describe('Reference registry', () => {
  it('every entry has a unique id', () => {
    const ids = referenceRegistry.map((r) => r.meta.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('reference ids never collide with calculator ids', async () => {
    const { calculatorRegistry } = await import('../registry')
    const calcIds = new Set(calculatorRegistry.map((c) => c.meta.id))
    for (const r of referenceRegistry) {
      expect(calcIds.has(r.meta.id)).toBe(false)
    }
  })

  it('searchReferences finds Donders by keyword', () => {
    const results = searchReferences('donders')
    expect(results.some((r) => r.meta.id === 'donders-table')).toBe(true)
  })

  it('searchReferences finds rules of thumb by keyword', () => {
    const results = searchReferences('rule of thumb')
    expect(results.some((r) => r.meta.id === 'clinical-rules-of-thumb')).toBe(true)
  })

  it('getReferenceById resolves a known id and returns undefined for unknown', () => {
    expect(getReferenceById('donders-table')).toBeDefined()
    expect(getReferenceById('not-a-real-id')).toBeUndefined()
  })

  it('empty query returns the full registry', () => {
    expect(searchReferences('')).toHaveLength(referenceRegistry.length)
  })
})
