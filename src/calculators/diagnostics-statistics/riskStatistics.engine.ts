// Risk/epidemiology statistics from a 2x2 table comparing Group A (e.g. treatment/exposed) to
// Group B (e.g. control/unexposed):
//                 Outcome present   Outcome absent
// Group A               a                 b
// Group B               c                 d

export interface RiskCounts {
  a: number
  b: number
  c: number
  d: number
}

export interface RiskStats {
  riskA: number
  riskB: number
  relativeRisk: number
  oddsRatio: number
  /** Positive when Group A has lower risk than Group B (A reduces risk); negative when A increases risk. */
  absoluteRiskChange: number
  relativeRiskChange: number
  numberNeededToTreat: number | null
  numberNeededToHarm: number | null
}

export function calculateRiskStats({ a, b, c, d }: RiskCounts): RiskStats {
  const totalA = a + b
  const totalB = c + d
  if (totalA === 0) throw new Error('Group A has no subjects.')
  if (totalB === 0) throw new Error('Group B has no subjects.')
  if (b === 0 || c === 0) throw new Error('Odds ratio is undefined when a cell is zero — apply a continuity correction if needed.')

  const riskA = a / totalA
  const riskB = c / totalB
  const relativeRisk = riskB === 0 ? Infinity : riskA / riskB
  const oddsRatio = (a * d) / (b * c)
  const absoluteRiskChange = riskB - riskA
  const relativeRiskChange = riskB === 0 ? NaN : absoluteRiskChange / riskB

  return {
    riskA,
    riskB,
    relativeRisk,
    oddsRatio,
    absoluteRiskChange,
    relativeRiskChange,
    numberNeededToTreat: absoluteRiskChange > 0 ? 1 / absoluteRiskChange : null,
    numberNeededToHarm: absoluteRiskChange < 0 ? 1 / -absoluteRiskChange : null,
  }
}
