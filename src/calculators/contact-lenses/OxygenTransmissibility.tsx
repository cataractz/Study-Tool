import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { dkOverT } from './oxygenTransmissibility.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'oxygen-transmissibility',
  name: 'Oxygen Transmissibility (Dk/t)',
  category: 'Contact Lenses',
  description: 'Lens oxygen transmissibility from material Dk and center thickness.',
  formula: 'Dk/t = Dk / t',
  keywords: ['Dk/t', 'oxygen transmissibility', 'Dk', 'permeability', 'lens thickness', 'hypoxia'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Comparing how much oxygen a given lens material/thickness combination delivers to the cornea.',
  supportsPractice: false,
  convention: 'Dk entered in standard ×10⁻¹¹ (cm²/sec)(mLO2/mL·mmHg) units; thickness in mm. Result reported in the standard ×10⁻⁹ units used for Dk/t.',
  limitations: ['Dk/t as calculated here is for the center thickness only; actual oxygen delivery varies across the lens (thinner peripherally) and with tear exchange, lid coverage, etc.'],
}

function Calculate() {
  const [dk, setDk] = useState('')
  const [thickness, setThickness] = useState('')
  const dkN = parseNumeric(dk)
  const tN = parseNumeric(thickness)
  let result: number | null = null
  let error: string | null = null
  try {
    result = dkN !== null && tN !== null ? dkOverT(dkN, tN) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Dk" unit="×10⁻¹¹" value={dk} onChange={setDk} />
        <NumberField label="Center thickness" unit="mm" value={thickness} onChange={setThickness} />
      </div>
      {result !== null && <ResultStat label="Dk/t" value={`${roundTo(result, 1)} ×10⁻⁹`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `Dk/t = ${roundTo(result, 1)} ×10⁻⁹` : undefined}
        onReset={() => {
          setDk('')
          setThickness('')
        }}
      />
    </Card>
  )
}

export function OxygenTransmissibility() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
