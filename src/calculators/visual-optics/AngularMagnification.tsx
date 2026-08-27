import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { angularMagnificationRelaxed, angularMagnificationAtNearPoint } from './magnification.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'angular-magnification',
  name: 'Angular Magnification (Magnifiers & Equivalent Viewing Power)',
  category: 'Visual Optics',
  description: 'Angular magnification of a simple magnifier/loupe from its power, for a relaxed or accommodating eye.',
  formula: 'Relaxed: M = F/4   ·   At near point: M = 1 + F/4',
  keywords: ['angular magnification', 'magnifier', 'loupe', 'equivalent viewing power', 'EVP'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating the magnification a hand/stand magnifier or low-vision device provides; equivalent to "equivalent viewing power" as used in low-vision practice.',
  supportsPractice: false,
  convention: 'Referenced to the conventional 25 cm (4 D) near point — a standard convention, not a universal constant. "Relaxed" assumes the image is formed at optical infinity (object at the lens focal point); "at near point" assumes the image is formed at 25 cm with active accommodation.',
}

function Calculate() {
  const [power, setPower] = useState('')
  const p = parseNumeric(power)
  const relaxed = p !== null ? angularMagnificationRelaxed(p) : null
  const nearPoint = p !== null ? angularMagnificationAtNearPoint(p) : null

  return (
    <Card className="space-y-4">
      <NumberField label="Lens/device power" unit="D" value={power} onChange={setPower} />
      {p !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Relaxed eye (image at ∞)" value={`${roundTo(relaxed!, 2)}×`} />
          <ResultStat tone="slate" label="At near point (accommodating)" value={`${roundTo(nearPoint!, 2)}×`} />
        </div>
      )}
      <ResultActions
        copyText={p !== null ? `Relaxed: ${roundTo(relaxed!, 2)}×, near point: ${roundTo(nearPoint!, 2)}×` : undefined}
        onReset={() => setPower('')}
      />
    </Card>
  )
}

export function AngularMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
