import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo, safeCompute } from '../shared/format'
import { evaluateAccommodativeReserve } from './accommodativeReserve.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'accommodative-reserve',
  name: 'Accommodative Reserve',
  category: 'Accommodation & Near Vision',
  description: 'Reports how much amplitude of accommodation remains in reserve above a near task\'s demand, and flags inadequate reserve for sustained near work.',
  formula: 'Reserve = AA − Demand',
  variables: [
    { symbol: 'AA', meaning: 'Amplitude of accommodation (D)' },
    { symbol: 'Demand', meaning: 'Accommodative demand of the near task (D)' },
    { symbol: 'Reserve', meaning: 'Amplitude remaining above demand (D)' },
  ],
  keywords: ['accommodative reserve', 'amplitude of accommodation', 'half amplitude rule', 'near work', 'asthenopia', 'eye strain'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Assessing whether a patient has adequate accommodative reserve for comfortable, sustained near work — distinct from whether they can clear the demand at all.',
  supportsPractice: false,
  convention: 'Reserve of at least 50% of the amplitude of accommodation is considered adequate, per the same half-amplitude rule of thumb used to estimate a near add.',
  limitations: [
    'The 50%-of-amplitude threshold is a rule-of-thumb clinical principle (the same "half-amplitude" reasoning used to estimate a near add), not a universal cutoff — always weigh alongside symptoms and clinical context.',
    'This calculator assumes the amplitude of accommodation has already been measured (e.g. via push-up); it does not perform that measurement.',
  ],
  references: ['Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.'],
  relatedCalculatorIds: ['accommodation', 'nra-pra', 'sheards-criterion'],
  relatedDiseaseIds: ['accommodative-dysfunction'],
}

function Calculate() {
  const [amplitude, setAmplitude] = useState('')
  const [demand, setDemand] = useState('')
  const amplitudeN = parseNumeric(amplitude)
  const demandN = parseNumeric(demand)

  let result: ReturnType<typeof evaluateAccommodativeReserve> | null = null
  let error: string | null = null
  if (amplitudeN !== null && demandN !== null) {
    const computed = safeCompute(() => evaluateAccommodativeReserve(amplitudeN, demandN))
    result = computed.result
    error = computed.error
  }

  const trace: CalculationTrace | null =
    result && amplitudeN !== null && demandN !== null
      ? {
          formula: 'Reserve = AA − Demand',
          substitution: `Reserve = ${roundTo(amplitudeN, 2)} D − ${roundTo(demandN, 2)} D`,
          steps: [
            `Reserve = ${roundTo(result.reserve, 2)} D`,
            `Reserve % of amplitude = ${roundTo(result.reserve, 2)} / ${roundTo(amplitudeN, 2)} × 100 = ${roundTo(result.reservePercentOfAmplitude, 1)}%`,
          ],
          finalAnswerText: `Reserve = ${roundTo(result.reserve, 2)} D (${roundTo(result.reservePercentOfAmplitude, 1)}% of amplitude)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Amplitude of accommodation" unit="D" value={amplitude} onChange={setAmplitude} placeholder="e.g. 8.00" />
        <NumberField label="Accommodative demand" unit="D" value={demand} onChange={setDemand} placeholder="e.g. 2.50" error={error ?? undefined} />
      </div>
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultStat label="Reserve" value={`${roundTo(result.reserve, 2)} D`} />
            <ResultStat label="Reserve (% of amplitude)" value={`${roundTo(result.reservePercentOfAmplitude, 1)}%`} />
          </div>
          <ResultStat label="Reserve adequacy" value={result.adequateReserve ? 'Adequate (≥ 50%)' : 'Inadequate (< 50%)'} tone={result.adequateReserve ? 'brand' : 'slate'} />
          <p className="text-sm text-slate-600">{result.interpretation}</p>
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `Reserve = ${roundTo(result.reserve, 2)} D (${roundTo(result.reservePercentOfAmplitude, 1)}% of amplitude)` : undefined}
        onReset={() => {
          setAmplitude('')
          setDemand('')
        }}
      />
    </Card>
  )
}

export function AccommodativeReserve() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
