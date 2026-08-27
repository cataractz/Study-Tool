import { describe, it, expect } from 'vitest'
import { snellenToDecimal, decimalToLogMAR, logMARToDecimal, decimalToSnellenDenominator, logMARFromETDRSLetters, etdrsLettersFromLogMAR } from '../visual-acuity/visualAcuity.engine'
import { powerFromRadiusMm, radiusFromPowerMm, cornealAstigmatism } from '../keratometry/keratometry.engine'
import { distanceCmToDiopters, diopterToDistanceCm, amplitudeFromNearPoint } from '../accommodation/accommodation.engine'

describe('Visual acuity: Snellen <-> decimal <-> logMAR', () => {
  it('20/20 is decimal 1.0 and logMAR 0.0', () => {
    expect(snellenToDecimal(20, 20)).toBe(1)
    expect(decimalToLogMAR(1)).toBeCloseTo(0, 10)
  })

  it('20/40 is decimal 0.5 and logMAR 0.301', () => {
    const decimal = snellenToDecimal(20, 40)
    expect(decimal).toBe(0.5)
    expect(decimalToLogMAR(decimal)).toBeCloseTo(0.301, 3)
  })

  it('20/200 is logMAR 1.0', () => {
    expect(decimalToLogMAR(snellenToDecimal(20, 200))).toBeCloseTo(1.0, 6)
  })

  it('logMAR -> decimal -> Snellen denominator round-trips', () => {
    const decimal = logMARToDecimal(0.301)
    expect(decimalToSnellenDenominator(decimal)).toBeCloseTo(40, 0)
  })

  it('ETDRS: 1.0 starting logMAR, 50 letters correct -> logMAR 0.0', () => {
    expect(logMARFromETDRSLetters(1.0, 50)).toBeCloseTo(0, 6)
  })

  it('ETDRS letters is the inverse of logMAR', () => {
    expect(etdrsLettersFromLogMAR(1.0, logMARFromETDRSLetters(1.0, 35))).toBeCloseTo(35, 6)
  })
})

describe('Keratometry', () => {
  it('standard index: 7.5mm radius gives 45.00 D (337.5/7.5)', () => {
    expect(powerFromRadiusMm(7.5)).toBeCloseTo(45, 6)
  })

  it('radius <-> power round-trips', () => {
    expect(radiusFromPowerMm(powerFromRadiusMm(7.8))).toBeCloseTo(7.8, 6)
  })

  it('corneal astigmatism amount and mean K', () => {
    const result = cornealAstigmatism(44, 180, 45.5, 90)
    expect(result.amount).toBeCloseTo(1.5, 6)
    expect(result.meanK).toBeCloseTo(44.75, 6)
    expect(result.classification).toBe('With-the-Rule')
  })

  it('classifies against-the-rule when steep meridian is near 180', () => {
    const result = cornealAstigmatism(45.5, 180, 44, 90)
    expect(result.classification).toBe('Against-the-Rule')
  })
})

describe('Working distance / accommodative demand', () => {
  it('40cm working distance = 2.50 D demand', () => {
    expect(distanceCmToDiopters(40)).toBeCloseTo(2.5, 6)
  })

  it('round-trips', () => {
    expect(diopterToDistanceCm(distanceCmToDiopters(33))).toBeCloseTo(33, 6)
  })

  it('amplitude of accommodation from near point, far point at infinity', () => {
    // near point 10cm -> 10D amplitude
    expect(amplitudeFromNearPoint(10)).toBeCloseTo(10, 6)
  })
})
