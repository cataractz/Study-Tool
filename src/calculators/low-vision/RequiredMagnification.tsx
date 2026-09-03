import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { requiredMagnification } from './requiredMagnification.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'required-magnification-print-size',
  name: 'Required Magnification (M-Notation)',
  category: 'Low Vision',
  description: "Magnification needed to go from a patient's current best acuity to a desired print size, both expressed in M-notation — distinct from the Snellen-ratio-based Magnification Required tab on the Low Vision Magnification calculator.",
  formula: 'Required magnification = Current best acuity (M) / Desired print size (M)',
  variables: [
    { symbol: 'Current best acuity (M)', meaning: "Smallest M-size print the patient can currently read (their threshold), e.g. from a continuous-text or single-letter M-notation near card" },
    { symbol: 'Desired print size (M)', meaning: 'M-size of the material the patient wants to be able to read, e.g. 1M ~ newsprint, 0.5M ~ phone book' },
  ],
  keywords: ['required magnification', 'M notation', 'M-unit', 'print size', 'low vision', 'newsprint', 'reduced Snellen M'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating the magnification needed for a patient to read a specific target print size, starting from an M-notation near acuity measurement — the standard basis for prescribing low-vision near add / magnifier power.',
  supportsPractice: false,
  convention: 'M-notation gives the distance (in meters) at which a print size subtends the standard critical-detail angle — smaller M values are smaller print. Both inputs must be M-sizes measured/specified in the same notation system.',
  limitations: [
    'This is the M-notation form of "magnification required" — mathematically equivalent in spirit to, but computed differently from, the Snellen-ratio form on the Low Vision Magnification calculator (M required = decimal(target)/decimal(current)). Use whichever notation your acuity measurement was taken in.',
    'Assumes the current best acuity was measured at the same viewing distance the target print will be read at (or that M-notation distance-scaling has already been accounted for) — M-notation sizes are distance-independent only when compared directly as printed M-values.',
  ],
  relatedCalculatorIds: ['low-vision-magnification', 'telescope-magnification'],
}

function Calculate() {
  const [currentM, setCurrentM] = useState('')
  const [targetM, setTargetM] = useState('')

  const currentN = parseNumeric(currentM)
  const targetN = parseNumeric(targetM)

  let result: number | null = null
  let error: string | null = null
  if (currentN !== null && targetN !== null) {
    try {
      result = requiredMagnification(currentN, targetN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result !== null && currentN !== null && targetN !== null
      ? {
          formula: 'Required magnification = Current acuity (M) / Target print size (M)',
          substitution: `Required magnification = ${currentN}M / ${targetN}M`,
          steps: [`Required magnification = ${roundTo(result, 2)}×`],
          finalAnswerText: `Required magnification = ${roundTo(result, 2)}×`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Current best acuity (M)" value={currentM} onChange={setCurrentM} placeholder="e.g. 3 (patient reads 3M best)" />
        <NumberField
          label="Desired print size (M)"
          value={targetM}
          onChange={setTargetM}
          placeholder="1M = newsprint, 0.5M = phone book"
          error={error ?? undefined}
        />
      </div>
      {result !== null && <ResultStat label="Required magnification" value={`${roundTo(result, 2)}×`} />}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result !== null ? `Required magnification: ${roundTo(result, 2)}×` : undefined}
        onReset={() => {
          setCurrentM('')
          setTargetM('')
        }}
      />
    </Card>
  )
}

export function RequiredMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
