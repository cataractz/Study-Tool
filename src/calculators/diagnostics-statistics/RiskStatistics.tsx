import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { calculateRiskStats } from './riskStatistics.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'risk-statistics',
  name: 'Risk & Epidemiology Statistics',
  category: 'Diagnostics & Statistics',
  description: 'Relative risk, odds ratio, absolute/relative risk change, NNT, and NNH from a 2×2 outcome table.',
  formula: 'RR = RiskA / RiskB   OR = (a×d)/(b×c)   NNT = 1 / ARR',
  keywords: ['relative risk', 'odds ratio', 'NNT', 'NNH', 'number needed to treat', 'absolute risk reduction', 'risk reduction'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Interpreting outcomes reported in clinical trials (e.g. a glaucoma or AMD treatment trial).',
  supportsPractice: false,
  convention: 'Group A vs Group B (e.g. treatment vs control, or exposed vs unexposed) — each with an outcome-present and outcome-absent count. Risk reduction/NNT is reported relative to Group B as the reference.',
  limitations: ['Odds ratio is undefined when either off-diagonal cell is zero; a continuity correction (adding a small constant to each cell) is a common workaround not implemented here.'],
}

function Calculate() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [d, setD] = useState('')

  const aN = parseNumeric(a)
  const bN = parseNumeric(b)
  const cN = parseNumeric(c)
  const dN = parseNumeric(d)

  let result: ReturnType<typeof calculateRiskStats> | null = null
  let error: string | null = null
  if (aN !== null && bN !== null && cN !== null && dN !== null) {
    try {
      result = calculateRiskStats({ a: aN, b: bN, c: cN, d: dN })
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Group A — outcome present" value={a} onChange={setA} />
        <NumberField label="Group A — outcome absent" value={b} onChange={setB} />
        <NumberField label="Group B — outcome present" value={c} onChange={setC} />
        <NumberField label="Group B — outcome absent" value={d} onChange={setD} />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <ResultStat label="Risk (Group A)" value={`${roundTo(result.riskA * 100, 1)}%`} />
          <ResultStat label="Risk (Group B)" value={`${roundTo(result.riskB * 100, 1)}%`} />
          <ResultStat label="Relative Risk" value={roundTo(result.relativeRisk, 3).toString()} />
          <ResultStat tone="slate" label="Odds Ratio" value={roundTo(result.oddsRatio, 3).toString()} />
          <ResultStat tone="slate" label="Absolute Risk Change" value={`${roundTo(result.absoluteRiskChange * 100, 1)}%`} />
          <ResultStat tone="slate" label="Relative Risk Change" value={`${roundTo(result.relativeRiskChange * 100, 1)}%`} />
          {result.numberNeededToTreat !== null && <ResultStat label="NNT" value={roundTo(result.numberNeededToTreat, 1).toString()} />}
          {result.numberNeededToHarm !== null && <ResultStat label="NNH" value={roundTo(result.numberNeededToHarm, 1).toString()} />}
        </div>
      )}
      <ResultActions
        onReset={() => {
          setA('')
          setB('')
          setC('')
          setD('')
        }}
      />
    </Card>
  )
}

export function RiskStatistics() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
