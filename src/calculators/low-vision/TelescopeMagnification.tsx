import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { calculateTelescope } from './telescope.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'telescope-magnification',
  name: 'Telescope Magnification',
  category: 'Low Vision',
  description: 'Magnification, image orientation, and tube length of a Galilean or Keplerian telescope from objective and eyepiece power.',
  formula: 'M = −F(eyepiece) / F(objective)',
  variables: [
    { symbol: 'M', meaning: 'Telescope angular magnification (×); sign gives image orientation' },
    { symbol: 'F(eyepiece)', meaning: 'Eyepiece lens power (D), signed — plus lens positive, minus lens negative' },
    { symbol: 'F(objective)', meaning: 'Objective lens power (D), signed — plus lens positive, minus lens negative' },
  ],
  keywords: ['telescope', 'galilean', 'keplerian', 'objective power', 'eyepiece power', 'bioptic telescope'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Understanding low-vision telescopic devices (handheld or bioptic).',
  supportsPractice: false,
  convention: 'Enter signed powers: plus lens positive, minus lens negative. Objective+eyepiece both plus → Keplerian (inverted image). Objective plus, eyepiece minus → Galilean (upright image).',
}

function Calculate() {
  const [objective, setObjective] = useState('')
  const [eyepiece, setEyepiece] = useState('')
  const oN = parseNumeric(objective)
  const eN = parseNumeric(eyepiece)
  let result: ReturnType<typeof calculateTelescope> | null = null
  let error: string | null = null
  try {
    result = oN !== null && eN !== null ? calculateTelescope(oN, eN) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Objective power" unit="D" value={objective} onChange={setObjective} />
        <NumberField label="Eyepiece power" unit="D" value={eyepiece} onChange={setEyepiece} />
      </div>
      {result !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Magnification" value={`${roundTo(result.magnification, 2)}×`} />
          <ResultStat tone="slate" label="Type / Orientation" value={`${result.type} — ${result.orientation}`} />
          <ResultStat tone="slate" label="Tube length" value={`${roundTo(result.lengthMeters * 100, 1)} cm`} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `${roundTo(result.magnification, 2)}× ${result.type}, ${result.orientation}` : undefined}
        onReset={() => {
          setObjective('')
          setEyepiece('')
        }}
      />
    </Card>
  )
}

export function TelescopeMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
