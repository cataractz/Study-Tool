import { describe, it, expect } from 'vitest'
import { getAllLenses, getLensById, getLensDesigns, getLensManufacturers, searchLenses, formatBaseCurveDiopters } from '../lensService'

describe('lens data integrity', () => {
  it('has no duplicate lens ids', () => {
    const ids = getAllLenses().map((l) => l.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every lens has a non-empty brand, manufacturer, and at least one bestFor entry', () => {
    for (const lens of getAllLenses()) {
      expect(lens.brand.trim().length).toBeGreaterThan(0)
      expect(lens.manufacturer.trim().length).toBeGreaterThan(0)
      expect(lens.bestFor.length).toBeGreaterThan(0)
      expect(lens.clinicalNotes.length).toBeGreaterThan(0)
    }
  })

  it('covers multiple lens designs, not just one category', () => {
    expect(getLensDesigns().length).toBeGreaterThanOrEqual(5)
  })
})

describe('getLensById', () => {
  it('finds a known lens by id', () => {
    expect(getLensById('biofinity')?.brand).toBe('Biofinity')
  })

  it('returns undefined for an unknown id', () => {
    expect(getLensById('not-a-real-lens')).toBeUndefined()
  })
})

describe('searchLenses', () => {
  it('finds lenses by brand name substring', () => {
    const results = searchLenses('oasys')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.brand.toLowerCase().includes('oasys'))).toBe(true)
  })

  it('filters by design', () => {
    const results = searchLenses('', ['Scleral'])
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.design === 'Scleral')).toBe(true)
  })

  it('filters by manufacturer', () => {
    const manufacturers = getLensManufacturers()
    const target = manufacturers.find((m) => m.includes('CooperVision'))
    expect(target).toBeDefined()
    const results = searchLenses('', [], [], [target!])
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.manufacturer === target)).toBe(true)
  })

  it('returns everything for an empty query with no filters', () => {
    expect(searchLenses('')).toHaveLength(getAllLenses().length)
  })
})

describe('formatBaseCurveDiopters', () => {
  it('converts a plain mm value to "D (mm)", diopters first, rounded to the nearest quarter diopter', () => {
    // F = 337.5 / 8.6 = 39.244... which the standard NCLE/keratometry convention rounds to
    // the nearest 0.25 D (39.25), not the raw unrounded value — real conversion charts and
    // packaging don't show arbitrary-precision decimals.
    expect(formatBaseCurveDiopters('8.6')).toBe('39.25 D (8.6 mm)')
  })

  it('matches a published real-world conversion-chart value (7.80 mm = 43.25 D)', () => {
    // Raw calculation is 337.5 / 7.80 = 43.269..., but every published keratometry/base-curve
    // conversion table lists 43.25 D for 7.80 mm — confirmed against lens lab and NCLE
    // board-prep sources. This is the concrete case that caught the original bug (this
    // function used to return the raw 43.27 unrounded).
    expect(formatBaseCurveDiopters('7.80')).toBe('43.25 D (7.80 mm)')
  })

  it('matches the Keratometry calculator\'s conversion for a round number', () => {
    // 337.5 / 7.5 = 45 exactly, already a whole number so quarter-diopter rounding is a no-op.
    expect(formatBaseCurveDiopters('7.5')).toBe('45.00 D (7.5 mm)')
  })

  it('leaves a non-numeric / descriptive base curve string unchanged', () => {
    const custom = 'Custom lab order, typically 39.75–48.25 D (7.00–8.50 mm)'
    expect(formatBaseCurveDiopters(custom)).toBe(custom)
  })

  it('every lens in the database renders a base curve without throwing', () => {
    for (const lens of getAllLenses()) {
      for (const bc of lens.baseCurves) {
        expect(() => formatBaseCurveDiopters(bc)).not.toThrow()
      }
    }
  })
})
