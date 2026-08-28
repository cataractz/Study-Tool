import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { reflectanceNormalIncidence } from './fresnelReflection.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'fresnel-reflection',
  name: 'Reflection at Normal Incidence (Fresnel)',
  category: 'Physical Optics',
  description: 'Fraction of light reflected at an interface between two media, for light striking straight on.',
  formula: 'R = [(n₂ − n₁) / (n₂ + n₁)]²',
  keywords: ['fresnel', 'reflectance', 'reflection', 'refractive index', 'anti-reflective coating'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Explains surface reflections such as corneal light reflex/Purkinje images, and why AR coatings reduce lens reflections.',
  supportsPractice: false,
  limitations: ['Normal (straight-on) incidence only. The full Fresnel equations for oblique incidence require separate s- and p-polarization formulas and are not implemented here.'],
}

function Calculate() {
  const [n1, setN1] = useState('1.0')
  const [n2, setN2] = useState('')
  const n1N = parseNumeric(n1)
  const n2N = parseNumeric(n2)
  const result = n1N !== null && n2N !== null ? reflectanceNormalIncidence(n1N, n2N) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="n₁ (incident medium)" value={n1} onChange={setN1} />
        <NumberField label="n₂ (second medium)" value={n2} onChange={setN2} placeholder="e.g. 1.376 (cornea)" />
      </div>
      {result !== null && <ResultStat label="Reflectance" value={`${roundTo(result * 100, 2)}%`} />}
      <ResultActions
        copyText={result !== null ? `R = ${roundTo(result * 100, 2)}%` : undefined}
        onReset={() => {
          setN1('1.0')
          setN2('')
        }}
      />
    </Card>
  )
}

export function FresnelReflection() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
