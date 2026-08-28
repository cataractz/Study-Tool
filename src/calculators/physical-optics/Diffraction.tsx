import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { rayleighCriterionRadians, radiansToArcminutes } from './diffraction.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'diffraction',
  name: 'Diffraction — Rayleigh Criterion',
  category: 'Physical Optics',
  description: "Diffraction-limited angular resolution of a circular aperture (e.g. the pupil).",
  formula: 'θ (rad) = 1.22 × λ / D',
  keywords: ['diffraction', 'rayleigh criterion', 'angular resolution', 'diffraction limit', 'pupil size'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Explains why very small pupils degrade acuity — resolution is diffraction-limited below a certain pupil size, even with perfect focus.',
  supportsPractice: false,
  convention: 'λ = wavelength, D = aperture diameter, same length units. Result is the minimum resolvable angle between two points.',
}

function Calculate() {
  const [wavelength, setWavelength] = useState('555')
  const [diameter, setDiameter] = useState('')
  const w = parseNumeric(wavelength)
  const d = parseNumeric(diameter)
  let theta: number | null = null
  let error: string | null = null
  try {
    theta = w !== null && d !== null ? rayleighCriterionRadians(w * 1e-9, d * 1e-3) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Wavelength" unit="nm" value={wavelength} onChange={setWavelength} />
        <NumberField label="Aperture diameter" unit="mm" value={diameter} onChange={setDiameter} placeholder="e.g. 3 (pupil)" />
      </div>
      {theta !== null && <ResultStat label="Minimum resolvable angle" value={`${roundTo(radiansToArcminutes(theta), 3)} arcmin`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={theta !== null ? `θ = ${roundTo(radiansToArcminutes(theta), 3)} arcmin` : undefined}
        onReset={() => {
          setWavelength('555')
          setDiameter('')
        }}
      />
    </Card>
  )
}

export function Diffraction() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
