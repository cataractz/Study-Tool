import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { convergenceDemand } from './vergenceDemand.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'vergence-demand',
  name: 'Vergence (Convergence) Demand',
  category: 'Binocular Vision',
  description: 'Calculates the horizontal convergence demand, in prism diopters, required to fixate a near target given interpupillary distance and working distance.',
  formula: 'Convergence demand (Δ) = 100 × PD (cm) / d (cm)',
  variables: [
    { symbol: 'PD', meaning: 'Total interpupillary distance (cm)' },
    { symbol: 'd', meaning: 'Working (fixation) distance from the spectacle plane (cm)' },
  ],
  keywords: ['convergence demand', 'vergence demand', 'near point convergence demand', 'interpupillary distance', 'binocular vision', 'near phoria expected'],
  boardRelevance: 'High',
  clinicalRelevance: 'Establishing the expected horizontal convergence demand at a given near working distance — the baseline against which measured near phoria, fusional vergence reserves, and AC/A findings are interpreted.',
  supportsPractice: false,
  convention: 'PD is entered in centimeters (a typical adult total PD of 60–64 mm is 6.0–6.4 cm) and working distance in centimeters (40 cm is the conventional near-testing distance).',
  limitations: [
    'Assumes symmetric convergence, from primary position, onto a target on the midline at the stated working distance — it does not account for eccentric target position, anisometropia-induced differential prismatic effects, or extraocular muscle restriction.',
  ],
  relatedCalculatorIds: ['accommodation', 'nra-pra', 'aca-ratio'],
}

function Calculate() {
  const [pd, setPd] = useState('')
  const [distance, setDistance] = useState('')
  const pdN = parseNumeric(pd)
  const distN = parseNumeric(distance)

  let result: number | null = null
  let error: string | null = null
  if (pdN !== null && distN !== null) {
    try {
      result = convergenceDemand(pdN, distN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Calculation error'
    }
  }

  const trace: CalculationTrace | null =
    result !== null && pdN !== null && distN !== null
      ? {
          formula: 'Convergence demand (Δ) = 100 × PD (cm) / d (cm)',
          substitution: `Convergence demand = 100 × ${pdN} / ${distN}`,
          steps: [`Convergence demand = ${100 * pdN} / ${distN} = ${roundTo(result, 2)} Δ`],
          finalAnswerText: `Convergence demand = ${roundTo(result, 2)} Δ (base out demand)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Interpupillary distance" unit="cm" value={pd} onChange={setPd} placeholder="e.g. 6.0" error={error ?? undefined} />
        <NumberField label="Working distance" unit="cm" value={distance} onChange={setDistance} placeholder="e.g. 40" />
      </div>
      {result !== null && (
        <ResultStat label="Convergence demand" value={`${roundTo(result, 2)} Δ`} />
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result !== null ? `Convergence demand: ${roundTo(result, 2)} Δ` : undefined}
        onReset={() => {
          setPd('')
          setDistance('')
        }}
      />
    </Card>
  )
}

export function VergenceDemand() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
