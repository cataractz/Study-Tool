import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter } from '../shared/format'
import { samFapAdjustment, classifyBaseCurveChange, finalRgpPower } from './rgpFinalPower.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'rgp-final-power',
  name: 'RGP Final Lens Power (Over-Refraction)',
  category: 'Contact Lenses',
  description: 'Final power to order from a trial lens power, spherical over-refraction, and any base-curve change (SAM-FAP).',
  formula: 'Final power = Trial power + Over-refraction + SAM-FAP adjustment',
  variables: [
    { symbol: 'Final power', meaning: 'Lens power to order (D)' },
    { symbol: 'Trial power', meaning: 'Power of the diagnostic/trial GP lens used for the over-refraction (D)' },
    { symbol: 'Over-refraction', meaning: 'Spherical over-refraction measured over the trial lens (D)' },
    { symbol: 'SAM-FAP adjustment', meaning: 'Power correction for any base-curve change between the trial and final lens (D)' },
  ],
  keywords: ['RGP', 'GP lens power', 'over-refraction', 'final lens power', 'SAM', 'FAP', 'base curve change'],
  boardRelevance: 'High',
  clinicalRelevance: 'Determining what power to order after a diagnostic/trial GP lens fitting and over-refraction.',
  supportsPractice: true,
  convention: 'If ordering a base curve different from the trial lens used for the over-refraction, the SAM-FAP adjustment (steeper final BC → add minus; flatter → add plus) is added automatically.',
  limitations: ['Assumes the over-refraction power is low enough that vertex distance correction of the over-refraction itself is not needed — for a large over-refraction, vertex-correct it first.'],
}

function Calculate() {
  const [trialPower, setTrialPower] = useState('')
  const [overRefraction, setOverRefraction] = useState('')
  const [trialBC, setTrialBC] = useState('')
  const [finalBC, setFinalBC] = useState('')

  const trialN = parseNumeric(trialPower)
  const orN = parseNumeric(overRefraction)
  const trialBCN = parseNumeric(trialBC)
  const finalBCN = parseNumeric(finalBC)

  const adjustment = trialBCN !== null && finalBCN !== null ? samFapAdjustment(trialBCN, finalBCN) : 0
  const classification = trialBCN !== null && finalBCN !== null ? classifyBaseCurveChange(trialBCN, finalBCN) : null
  const result = trialN !== null && orN !== null ? finalRgpPower(trialN, orN, adjustment) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Trial lens power" unit="D" value={trialPower} onChange={setTrialPower} />
        <NumberField label="Over-refraction" unit="D" value={overRefraction} onChange={setOverRefraction} />
        <NumberField label="Trial base curve (optional)" unit="mm" value={trialBC} onChange={setTrialBC} placeholder="leave blank if ordering same BC" />
        <NumberField label="Final base curve (optional)" unit="mm" value={finalBC} onChange={setFinalBC} placeholder="leave blank if ordering same BC" />
      </div>
      {trialBCN !== null && finalBCN !== null && (
        <ResultStat tone="slate" label="SAM-FAP adjustment" value={`${formatDiopter(adjustment)} D (${classification})`} />
      )}
      {result !== null && <ResultStat label="Final power to order" value={`${formatDiopter(result)} D`} />}
      <ResultActions
        copyText={result !== null ? `Final power: ${formatDiopter(result)} D` : undefined}
        onReset={() => {
          setTrialPower('')
          setOverRefraction('')
          setTrialBC('')
          setFinalBC('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const trialPower = -3.0
  const overRefraction = difficulty === 'Basic' ? -0.5 : difficulty === 'Intermediate' ? 0.75 : -1.25
  const changesBC = difficulty === 'Advanced'
  const trialBC = 7.8
  const finalBC = changesBC ? 7.7 : 7.8
  const adjustment = samFapAdjustment(trialBC, finalBC)
  const result = finalRgpPower(trialPower, overRefraction, adjustment)
  return {
    prompt: changesBC
      ? `A trial GP lens of ${formatDiopter(trialPower)} D with BC ${trialBC} mm gives an over-refraction of ${formatDiopter(overRefraction)} D. You plan to order a final BC of ${finalBC} mm. What power should you order?`
      : `A trial GP lens of ${formatDiopter(trialPower)} D gives an over-refraction of ${formatDiopter(overRefraction)} D. Same base curve will be ordered. What power should you order?`,
    difficulty,
    answers: [{ key: 'p', label: 'Final power to order', unit: 'D', value: result, tolerance: 0.15 }],
    formula: 'Final power = Trial power + Over-refraction + SAM-FAP adjustment',
    substitution: changesBC
      ? `Final = ${trialPower} + (${overRefraction}) + (${adjustment.toFixed(2)})`
      : `Final = ${trialPower} + (${overRefraction})`,
    steps: changesBC
      ? [`SAM-FAP adjustment for BC ${trialBC}→${finalBC} mm = ${adjustment.toFixed(2)} D`, `Final = ${trialPower} + ${overRefraction} + ${adjustment.toFixed(2)} = ${result.toFixed(2)}`]
      : [`Final = ${trialPower} + ${overRefraction} = ${result.toFixed(2)}`],
    finalAnswerText: `${formatDiopter(result)} D`,
    why: 'The over-refraction directly tells you how much the trial lens power needs to change; a base-curve change additionally shifts the tear lens power, which must be compensated in the ordered power.',
  }
}

export function RgpFinalPower() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
