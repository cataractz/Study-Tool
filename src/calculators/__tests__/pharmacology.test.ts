import { describe, it, expect } from 'vitest'
import { percentToMgPerMl, mgPerMlToPercent, mgPerMlToMgPerL, ratioStrengthToPercent, percentToRatioStrengthX } from '../pharmacology/concentration.engine'
import { stockConcentration, finalConcentration, stockVolume, finalVolume } from '../pharmacology/dilution.engine'
import { mgFromMl, mlFromMg, totalMgFromWeight, totalDailyDose } from '../pharmacology/dose.engine'
import { dropsPerDay, totalDropsInBottle, daysOfSupply } from '../pharmacology/ophthalmicDrops.engine'

describe('Concentration conversions', () => {
  it('1% = 10 mg/mL', () => {
    expect(percentToMgPerMl(1)).toBe(10)
  })

  it('0.5% (e.g. timolol) = 5 mg/mL', () => {
    expect(percentToMgPerMl(0.5)).toBe(5)
  })

  it('mg/mL -> percent is the inverse', () => {
    expect(mgPerMlToPercent(5)).toBe(0.5)
  })

  it('mg/mL -> mg/L multiplies by 1000', () => {
    expect(mgPerMlToMgPerL(10)).toBe(10000)
  })

  it('1:1000 ratio strength = 0.1%', () => {
    expect(ratioStrengthToPercent(1000)).toBeCloseTo(0.1, 6)
  })

  it('percent -> ratio strength round-trips', () => {
    expect(percentToRatioStrengthX(ratioStrengthToPercent(1000))).toBeCloseTo(1000, 6)
  })
})

describe('Dilution C1V1 = C2V2', () => {
  it('10% stock diluted to 100 mL of 1% needs 10 mL stock', () => {
    expect(stockVolume(10, 1, 100)).toBeCloseTo(10, 6)
  })

  it('final concentration from stock volume/concentration and final volume', () => {
    expect(finalConcentration(10, 10, 100)).toBeCloseTo(1, 6)
  })

  it('stock concentration and final volume solve consistently', () => {
    const v1 = stockVolume(10, 1, 100)
    expect(stockConcentration(1, 100, v1)).toBeCloseTo(10, 6)
    expect(finalVolume(10, v1, 1)).toBeCloseTo(100, 6)
  })
})

describe('Dose arithmetic', () => {
  it('mg from mL at a given concentration', () => {
    expect(mgFromMl(2, 5)).toBe(10)
  })

  it('mL from mg is the inverse', () => {
    expect(mlFromMg(10, 5)).toBe(2)
  })

  it('weight-based total dose', () => {
    expect(totalMgFromWeight(10, 70)).toBe(700)
  })

  it('total daily dose', () => {
    expect(totalDailyDose(250, 3)).toBe(750)
  })
})

describe('Ophthalmic drop supply', () => {
  it('drops per day = drops per dose x doses per day', () => {
    expect(dropsPerDay(1, 4)).toBe(4)
  })

  it('total drops in a 5mL bottle at 35uL/drop', () => {
    expect(totalDropsInBottle(5, 35)).toBeCloseTo(142.857, 2)
  })

  it('days of supply', () => {
    const total = totalDropsInBottle(5, 35)
    expect(daysOfSupply(5, 35, 4)).toBeCloseTo(total / 4, 6)
  })
})
