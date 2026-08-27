import { describe, it, expect } from 'vitest'
import { statsFromCounts, predictiveValuesAtPrevalence } from '../diagnostics-statistics/diagnosticTest.engine'
import { calculateRiskStats } from '../diagnostics-statistics/riskStatistics.engine'
import { meanArterialPressure, meanOcularPerfusionPressure } from '../ocular-hemodynamics/perfusionPressure.engine'

describe('Diagnostic test statistics', () => {
  // TP=80, FN=20 (100 diseased), FP=10, TN=90 (100 healthy)
  const stats = statsFromCounts({ tp: 80, fp: 10, fn: 20, tn: 90 })

  it('sensitivity = TP/(TP+FN)', () => {
    expect(stats.sensitivity).toBeCloseTo(0.8, 6)
  })

  it('specificity = TN/(TN+FP)', () => {
    expect(stats.specificity).toBeCloseTo(0.9, 6)
  })

  it('PPV = TP/(TP+FP)', () => {
    expect(stats.ppv).toBeCloseTo(80 / 90, 6)
  })

  it('NPV = TN/(TN+FN)', () => {
    expect(stats.npv).toBeCloseTo(90 / 110, 6)
  })

  it('LR+ = sensitivity / (1 - specificity)', () => {
    expect(stats.positiveLikelihoodRatio).toBeCloseTo(0.8 / 0.1, 6)
  })

  it('LR- = (1 - sensitivity) / specificity', () => {
    expect(stats.negativeLikelihoodRatio).toBeCloseTo(0.2 / 0.9, 6)
  })

  it('prevalence = diseased / total', () => {
    expect(stats.prevalence).toBeCloseTo(0.5, 6)
  })

  it('throws when there are no diseased subjects', () => {
    expect(() => statsFromCounts({ tp: 0, fp: 5, fn: 0, tn: 10 })).toThrow()
  })
})

describe('Predictive values at a given prevalence (Bayes)', () => {
  it('matches the 2x2-derived PPV/NPV when using that table\'s own prevalence', () => {
    const result = predictiveValuesAtPrevalence(0.8, 0.9, 0.5)
    expect(result.ppv).toBeCloseTo(80 / 90, 4)
    expect(result.npv).toBeCloseTo(90 / 110, 4)
  })

  it('PPV drops sharply at low prevalence for the same test', () => {
    const lowPrev = predictiveValuesAtPrevalence(0.8, 0.9, 0.01)
    expect(lowPrev.ppv).toBeLessThan(0.5)
  })
})

describe('Risk & epidemiology statistics', () => {
  // Group A (treatment): 10/100 outcome, Group B (control): 20/100 outcome
  const result = calculateRiskStats({ a: 10, b: 90, c: 20, d: 80 })

  it('relative risk', () => {
    expect(result.relativeRisk).toBeCloseTo(0.5, 6)
  })

  it('odds ratio', () => {
    expect(result.oddsRatio).toBeCloseTo((10 * 80) / (90 * 20), 6)
  })

  it('absolute risk change and NNT', () => {
    expect(result.absoluteRiskChange).toBeCloseTo(0.1, 6)
    expect(result.numberNeededToTreat).toBeCloseTo(10, 6)
    expect(result.numberNeededToHarm).toBeNull()
  })

  it('reports NNH instead of NNT when Group A has higher risk', () => {
    const harmResult = calculateRiskStats({ a: 20, b: 80, c: 10, d: 90 })
    expect(harmResult.numberNeededToHarm).toBeCloseTo(10, 6)
    expect(harmResult.numberNeededToTreat).toBeNull()
  })
})

describe('MAP and Mean Ocular Perfusion Pressure', () => {
  it('MAP = DBP + 1/3(SBP-DBP): 120/80 -> ~93.3', () => {
    expect(meanArterialPressure(120, 80)).toBeCloseTo(93.33, 1)
  })

  it('MOPP = 2/3 * MAP - IOP', () => {
    const map = meanArterialPressure(120, 80)
    expect(meanOcularPerfusionPressure(map, 15)).toBeCloseTo((2 / 3) * map - 15, 6)
  })
})
