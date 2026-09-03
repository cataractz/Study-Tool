import { describe, it, expect } from 'vitest'
import { convergenceDemand } from '../binocular-vision/vergenceDemand.engine'
import { estimateDeviationFromDecentration, estimateDeviationDegrees, evaluateHirschberg } from '../binocular-vision/hirschbergKrimsky.engine'
import { combineHorizontalVertical } from '../prism/prismNeutralization.engine'
import { evaluateAnisometropia } from '../binocular-vision/anisometropia.engine'

describe('Vergence (convergence) demand', () => {
  it('matches the standard textbook example: PD 6cm, distance 40cm -> 15 Δ', () => {
    expect(convergenceDemand(6, 40)).toBeCloseTo(15, 6)
  })

  it('scales inversely with working distance', () => {
    expect(convergenceDemand(6, 20)).toBeCloseTo(30, 6)
    expect(convergenceDemand(6, 100)).toBeCloseTo(6, 6)
  })

  it('throws when PD is zero or negative', () => {
    expect(() => convergenceDemand(0, 40)).toThrow()
    expect(() => convergenceDemand(-6, 40)).toThrow()
  })

  it('throws when working distance is zero or negative', () => {
    expect(() => convergenceDemand(6, 0)).toThrow()
    expect(() => convergenceDemand(6, -40)).toThrow()
  })
})

describe('Hirschberg / Krimsky estimation', () => {
  it('estimates deviation as decentration x ratio', () => {
    expect(estimateDeviationFromDecentration(1, 15)).toBeCloseTo(15, 6)
    expect(estimateDeviationFromDecentration(2, 20)).toBeCloseTo(40, 6)
    expect(estimateDeviationFromDecentration(1.5, 22)).toBeCloseTo(33, 6)
  })

  it('handles zero decentration (no deviation)', () => {
    expect(estimateDeviationFromDecentration(0, 15)).toBe(0)
  })

  it('throws on negative decentration', () => {
    expect(() => estimateDeviationFromDecentration(-1, 15)).toThrow()
  })

  it('throws on a non-positive ratio', () => {
    expect(() => estimateDeviationFromDecentration(1, 0)).toThrow()
    expect(() => estimateDeviationFromDecentration(1, -15)).toThrow()
  })

  it('converts prism diopters to an approximate angle in degrees', () => {
    // atan(15/100) * 180/pi ~= 8.53 degrees
    expect(estimateDeviationDegrees(15)).toBeCloseTo(8.5308, 3)
    expect(estimateDeviationDegrees(0)).toBe(0)
  })

  it('classifies nasal decentration as an exodeviation', () => {
    const result = evaluateHirschberg(1, 15, 'nasal')
    expect(result.deviationType).toBe('exodeviation')
    expect(result.estimatedPrismDiopters).toBeCloseTo(15, 6)
  })

  it('classifies temporal decentration as an esodeviation', () => {
    const result = evaluateHirschberg(1, 15, 'temporal')
    expect(result.deviationType).toBe('esodeviation')
  })
})

describe('Prism neutralization resultant', () => {
  it('combines a 3-4-5 right triangle exactly', () => {
    const result = combineHorizontalVertical(3, 4)
    expect(result.resultant).toBeCloseTo(5, 6)
    expect(result.angleDegrees).toBeCloseTo(53.13, 1)
  })

  it('handles H = 0 as a pure-vertical 90 degree case', () => {
    const result = combineHorizontalVertical(0, 6)
    expect(result.resultant).toBeCloseTo(6, 6)
    expect(result.angleDegrees).toBe(90)
  })

  it('handles V = 0 as a pure-horizontal 0 degree case', () => {
    const result = combineHorizontalVertical(8, 0)
    expect(result.resultant).toBeCloseTo(8, 6)
    expect(result.angleDegrees).toBe(0)
  })

  it('treats negative inputs as magnitudes (absolute value)', () => {
    const result = combineHorizontalVertical(-3, -4)
    expect(result.resultant).toBeCloseTo(5, 6)
  })

  it('throws when both components are zero', () => {
    expect(() => combineHorizontalVertical(0, 0)).toThrow('No deviation to combine')
  })
})

describe('Anisometropia', () => {
  it('computes SE per eye and the absolute interocular difference', () => {
    // SE(OD) = -1.00 + -0.50/2 = -1.25; SE(OS) = -3.50 + -0.50/2 = -3.75; diff = 2.50
    const result = evaluateAnisometropia(-1.0, -0.5, -3.5, -0.5)
    expect(result.seOD).toBeCloseTo(-1.25, 6)
    expect(result.seOS).toBeCloseTo(-3.75, 6)
    expect(result.anisometropiaD).toBeCloseTo(2.5, 6)
  })

  it('classifies < 1.00 D as mild', () => {
    const result = evaluateAnisometropia(-1.0, 0, -1.5, 0)
    expect(result.anisometropiaD).toBeCloseTo(0.5, 6)
    expect(result.classification).toMatch(/Mild/)
  })

  it('classifies 1.00-2.00 D as moderate', () => {
    const result = evaluateAnisometropia(0, 0, -1.5, 0)
    expect(result.anisometropiaD).toBeCloseTo(1.5, 6)
    expect(result.classification).toMatch(/Moderate/)
  })

  it('classifies > 2.00 D as significant', () => {
    const result = evaluateAnisometropia(0, 0, -2.5, 0)
    expect(result.anisometropiaD).toBeCloseTo(2.5, 6)
    expect(result.classification).toMatch(/Significant/)
  })

  it('is order-independent (absolute value) between OD and OS', () => {
    const a = evaluateAnisometropia(-1.0, 0, -3.0, 0)
    const b = evaluateAnisometropia(-3.0, 0, -1.0, 0)
    expect(a.anisometropiaD).toBeCloseTo(b.anisometropiaD, 6)
  })

  it('is notation-independent (plus vs minus cylinder form) since SE is unaffected by transposition', () => {
    // -2.00 -1.00 x090 transposes to -3.00 +1.00 x180; SE unchanged either way
    const minusForm = evaluateAnisometropia(-2.0, -1.0, 0, 0)
    const plusForm = evaluateAnisometropia(-3.0, 1.0, 0, 0)
    expect(minusForm.seOD).toBeCloseTo(plusForm.seOD, 6)
  })
})
