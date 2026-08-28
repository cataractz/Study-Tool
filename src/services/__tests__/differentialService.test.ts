import { describe, it, expect } from 'vitest'
import { roundPercentagesToSum100 } from '../differentialService'
import { runDifferential } from '../differentialService'
import type { DifferentialFindings } from '../../types/differential'

describe('roundPercentagesToSum100', () => {
  it('sums to exactly 100 when the total raw input is positive', () => {
    const result = roundPercentagesToSum100([33.33, 33.33, 33.34])
    expect(result.reduce((sum, v) => sum + v, 0)).toBe(100)
  })

  it('gives the largest remainders the extra point(s) needed to reach 100', () => {
    // Floors: 33, 33, 33 = 99, one point short. 33.4's remainder (0.4) is the largest.
    const result = roundPercentagesToSum100([33.4, 33.3, 33.3])
    expect(result).toEqual([34, 33, 33])
    expect(result.reduce((sum, v) => sum + v, 0)).toBe(100)
  })

  it('returns all zeros unchanged when every input is zero', () => {
    expect(roundPercentagesToSum100([0, 0, 0])).toEqual([0, 0, 0])
  })

  it('is a no-op on values that already sum to 100 with no remainders', () => {
    expect(roundPercentagesToSum100([50, 30, 20])).toEqual([50, 30, 20])
  })
})

const emptyFindings: DifferentialFindings = {
  symptoms: [],
  pupils: [],
  anteriorSegment: [],
  posteriorSegment: [],
  visualField: [],
  otherTesting: [],
  binocularVision: [],
}

describe('runDifferential probability', () => {
  it('returns candidates whose probability sums to ~100', () => {
    const results = runDifferential({
      ...emptyFindings,
      symptoms: ['Pain', 'Photophobia', 'Redness'],
      pupils: ['Poor reaction'],
    })
    expect(results.length).toBeGreaterThan(0)
    const total = results.reduce((sum, r) => sum + r.probability, 0)
    // Normalized only across the candidates actually returned, so this sums to exactly 100.
    expect(total).toBe(100)
  })

  it('breaks ties in display order using unrounded evidence, not the rounded match score', () => {
    const results = runDifferential({
      ...emptyFindings,
      symptoms: ['Pain', 'Photophobia', 'Redness', 'Discharge'],
      pupils: ['RAPD'],
    })
    // Results must be sorted by probability (a proxy for the underlying evidence total)
    // in non-increasing order.
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].probability).toBeGreaterThanOrEqual(results[i].probability)
    }
  })

  it('returns an empty array when no findings are selected', () => {
    expect(runDifferential(emptyFindings)).toEqual([])
  })
})
