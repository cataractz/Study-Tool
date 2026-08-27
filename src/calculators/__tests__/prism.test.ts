import { describe, it, expect } from 'vitest'
import {
  prismFromDecentration,
  decentrationFromPrism,
  powerFromPrismAndDecentration,
  inducedBaseDirection,
} from '../prism/prenticesRule.engine'
import { combinePrism, resolvePrism } from '../prism/prismVector.engine'

describe("Prentice's Rule", () => {
  it('matches the spec worked example: +4.00 D decentered 3mm -> 1.2 prism diopters', () => {
    expect(prismFromDecentration(0.3, 4.0)).toBeCloseTo(1.2, 6)
  })

  it('solves for decentration given prism and power', () => {
    expect(decentrationFromPrism(1.2, 4.0)).toBeCloseTo(0.3, 6)
  })

  it('solves for power given prism and decentration', () => {
    expect(powerFromPrismAndDecentration(1.2, 0.3)).toBeCloseTo(4.0, 6)
  })

  it('throws on zero lens power (no decentration can induce prism)', () => {
    expect(() => decentrationFromPrism(1, 0)).toThrow()
  })

  it('plus lens: base direction matches decentration direction', () => {
    expect(inducedBaseDirection('temporal', 4)).toBe('Base Out')
    expect(inducedBaseDirection('nasal', 4)).toBe('Base In')
    expect(inducedBaseDirection('up', 4)).toBe('Base Up')
  })

  it('minus lens: base direction is opposite the decentration direction', () => {
    expect(inducedBaseDirection('temporal', -4)).toBe('Base In')
    expect(inducedBaseDirection('nasal', -4)).toBe('Base Out')
  })
})

describe('Prism combination', () => {
  it('combines a 3-4-5 right triangle exactly', () => {
    const result = combinePrism({ horizontal: 3, vertical: 4 })
    expect(result.magnitude).toBeCloseTo(5, 6)
    expect(result.angleDeg).toBeCloseTo(53.13, 1)
  })

  it('pure horizontal gives angle 0', () => {
    expect(combinePrism({ horizontal: 5, vertical: 0 }).angleDeg).toBe(0)
  })
})

describe('Prism resolution', () => {
  it('is the inverse of combination for a 3-4-5 triangle', () => {
    const resolved = resolvePrism(5, 53.13010235415598)
    expect(resolved.horizontal).toBeCloseTo(3, 4)
    expect(resolved.vertical).toBeCloseTo(4, 4)
  })

  it('round-trips through combine -> resolve', () => {
    const original = { horizontal: 2.5, vertical: -1.5 }
    const { magnitude, angleDeg } = combinePrism(original)
    const resolved = resolvePrism(magnitude, angleDeg)
    expect(resolved.horizontal).toBeCloseTo(original.horizontal, 6)
    expect(resolved.vertical).toBeCloseTo(original.vertical, 6)
  })
})
