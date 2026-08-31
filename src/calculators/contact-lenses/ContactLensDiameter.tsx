import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { estimatedSoftLensDiameter, CL_DIAMETER_RULE_OF_THUMB_ADD_MM } from './clDiameterRuleOfThumb.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'cl-diameter-rule-of-thumb',
  name: 'Contact Lens Diameter (HVID Rule of Thumb)',
  category: 'Contact Lenses',
  description: 'A quick starting-point estimate for soft lens total diameter from HVID.',
  formula: `Estimated diameter ≈ HVID + ${CL_DIAMETER_RULE_OF_THUMB_ADD_MM} mm`,
  variables: [
    { symbol: 'Estimated diameter', meaning: 'Suggested starting total soft lens diameter (mm)' },
    { symbol: 'HVID', meaning: 'Horizontal visible iris diameter (mm)' },
  ],
  keywords: ['contact lens diameter', 'HVID', 'horizontal visible iris diameter', 'rule of thumb', 'lens selection'],
  boardRelevance: 'Low',
  clinicalRelevance: 'A rough starting point when selecting a soft lens diameter before fine-tuning by fit assessment.',
  supportsPractice: false,
  convention: `This is a RULE OF THUMB, not a fitting formula — it gives a starting estimate only.`,
  limitations: [
    'Actual lens diameter selection depends on corneal shape, sagittal depth/fit, lid coverage, and the specific product\'s available parameters.',
    'Always confirm the fit on-eye (centration, movement, coverage) rather than relying on this estimate alone.',
  ],
}

function Calculate() {
  const [hvid, setHvid] = useState('')
  const h = parseNumeric(hvid)
  const result = h !== null ? estimatedSoftLensDiameter(h) : null

  return (
    <Card className="space-y-4">
      <NumberField label="HVID (horizontal visible iris diameter)" unit="mm" value={hvid} onChange={setHvid} placeholder="typically ~11-12mm" />
      {result !== null && <ResultStat label="Estimated starting diameter" value={`${roundTo(result, 1)} mm`} />}
      <ResultActions copyText={result !== null ? `Estimated diameter: ${roundTo(result, 1)} mm` : undefined} onReset={() => setHvid('')} />
    </Card>
  )
}

export function ContactLensDiameter() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
