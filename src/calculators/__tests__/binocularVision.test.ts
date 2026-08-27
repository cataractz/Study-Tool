import { describe, it, expect } from 'vitest'
import { calculatedACA, gradientACA } from '../binocular-vision/aca.engine'
import { evaluateSheards } from '../binocular-vision/sheardsCriterion.engine'
import { evaluatePercivals } from '../binocular-vision/percivalsCriterion.engine'

describe('AC/A ratio', () => {
  it('calculated AC/A: PD 6cm, distance ortho, near 6 exo, +2.50 add', () => {
    // AC/A = 6 + (-6 - 0)/2.5 = 6 - 2.4 = 3.6
    expect(calculatedACA(6, -6, 0, 2.5)).toBeCloseTo(3.6, 6)
  })

  it('gradient AC/A: baseline 2 exo, through -1.00 lens becomes 1 exo', () => {
    // ACA = (phoriaLens - baseline) / -lensPower = (-1 - -2) / -(-1) = 1/1 = 1
    expect(gradientACA(-2, -1, -1)).toBeCloseTo(1, 6)
  })

  it('throws when add power is zero', () => {
    expect(() => calculatedACA(6, -6, 0, 0)).toThrow()
  })
})

describe("Sheard's Criterion", () => {
  it('criterion met when reserve >= 2x phoria', () => {
    const result = evaluateSheards(5, 12, 'exophoria')
    expect(result.criterionMet).toBe(true)
    expect(result.rxPrism).toBeNull()
  })

  it('criterion not met: Rx = (2*phoria - reserve)/3', () => {
    // 6 exo, reserve 8: required 12, deficit -> (12-8)/3 = 1.33
    const result = evaluateSheards(6, 8, 'exophoria')
    expect(result.criterionMet).toBe(false)
    expect(result.rxPrism).toBeCloseTo(4 / 3, 6)
    expect(result.baseDirection).toBe('Base In')
  })

  it('esophoria compensated by base-out prism', () => {
    const result = evaluateSheards(6, 8, 'esophoria')
    expect(result.baseDirection).toBe('Base Out')
  })
})

describe("Percival's Criterion", () => {
  it('criterion met when neither reserve exceeds 2x the other', () => {
    const result = evaluatePercivals(10, 15)
    expect(result.criterionMet).toBe(true)
  })

  it('criterion not met: Rx = (larger - 2*smaller)/3', () => {
    // BI 6, BO 20: larger=20, smaller=6, met? 20 <= 12? no -> Rx = (20-12)/3 = 8/3
    const result = evaluatePercivals(6, 20)
    expect(result.criterionMet).toBe(false)
    expect(result.rxPrism).toBeCloseTo(8 / 3, 6)
    expect(result.limitingReserve).toBe('BI')
  })
})
