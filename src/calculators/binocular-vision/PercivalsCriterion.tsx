import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { evaluatePercivals } from './percivalsCriterion.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'percivals-criterion',
  name: "Percival's Criterion",
  category: 'Binocular Vision',
  description: 'Checks whether the phoria/demand falls within the middle third of the total fusional vergence range.',
  formula: 'Met when max(BI, BO) ≤ 2 × min(BI, BO);  Rx = (larger − 2 × smaller) / 3 otherwise',
  variables: [
    { symbol: 'BI', meaning: 'Base-in fusional vergence reserve (Δ)' },
    { symbol: 'BO', meaning: 'Base-out fusional vergence reserve (Δ)' },
    { symbol: 'Rx', meaning: 'Indicated prism magnitude (Δ)' },
    { symbol: 'larger', meaning: 'The larger of the BI/BO reserves (Δ)' },
    { symbol: 'smaller', meaning: 'The smaller of the BI/BO reserves (Δ)' },
  ],
  keywords: ['percival', "percival's criterion", 'fusional vergence', 'middle third rule'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'A second check (alongside Sheard\'s) for whether vergence reserves are comfortably balanced.',
  supportsPractice: false,
  limitations: [
    'This calculator reports whether the criterion is met and the magnitude of prism it indicates, both of which are well-established.',
    'The BASE DIRECTION of any indicated prism is not asserted here — clinical references are not fully consistent on this point for Percival\'s specifically (as opposed to Sheard\'s, which is unambiguous). Confirm the base-direction convention against a primary reference (e.g. Scheiman & Wick, Clinical Management of Binocular Vision) before applying.',
  ],
}

function Calculate() {
  const [bi, setBi] = useState('')
  const [bo, setBo] = useState('')
  const biN = parseNumeric(bi)
  const boN = parseNumeric(bo)
  const result = biN !== null && boN !== null ? evaluatePercivals(biN, boN) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="BI reserve" unit="Δ" value={bi} onChange={setBi} />
        <NumberField label="BO reserve" unit="Δ" value={bo} onChange={setBo} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Criterion" value={result.criterionMet ? 'Met' : 'Not met'} tone={result.criterionMet ? 'brand' : 'slate'} />
          {!result.criterionMet && result.rxPrism !== null && (
            <ResultStat label="Indicated prism magnitude" value={`${roundTo(result.rxPrism, 2)} Δ (limiting reserve: ${result.limitingReserve})`} />
          )}
        </>
      )}
      <ResultActions
        copyText={result !== null ? (result.criterionMet ? "Percival's criterion met" : `Indicated: ${roundTo(result.rxPrism ?? 0, 2)} Δ`) : undefined}
        onReset={() => {
          setBi('')
          setBo('')
        }}
      />
    </Card>
  )
}

export function PercivalsCriterion() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
