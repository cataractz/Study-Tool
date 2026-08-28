import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { relativeSpectacleMagnification, type AmetropiaType } from './relativeSpectacleMagnification.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'relative-spectacle-magnification',
  name: 'Relative Spectacle Magnification (Knapp\'s Law)',
  category: 'Visual Optics',
  description: 'Compares an ametropic eye\'s corrected retinal image size to the schematic emmetropic eye, distinguishing axial from refractive ametropia.',
  formula: "Axial (Knapp's Law): RSM ≈ 1.00   ·   Refractive: RSM = 1/(1 − d·Fv)",
  keywords: ['relative spectacle magnification', 'RSM', "knapp's law", 'axial ametropia', 'refractive ametropia'],
  boardRelevance: 'Moderate',
  clinicalRelevance: "Explains why axial myopes/hyperopes see comparatively little image-size change in spectacles (but do with contact lenses), while refractive ametropia behaves differently.",
  supportsPractice: false,
  convention: "Knapp's Law strictly applies only when the correcting lens sits at the eye's anterior focal point (~15mm in front of the cornea for a schematic eye) and assumes otherwise-normal corneal/lens power — real eyes and fits deviate from this idealized model.",
  limitations: ['This is an idealized-model teaching estimate, not a measured magnification for a specific patient — actual results vary with fit, corneal shape, and how closely the eye matches the schematic model.'],
}

function Calculate() {
  const [type, setType] = useState<AmetropiaType>('axial')
  const [power, setPower] = useState('')
  const [vertexMm, setVertexMm] = useState('12')

  const p = parseNumeric(power)
  const v = parseNumeric(vertexMm)
  let result: number | null = null
  let error: string | null = null
  try {
    result = type === 'axial' ? 1 : p !== null && v !== null ? relativeSpectacleMagnification('refractive', p, v / 1000) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <SelectField
        label="Ametropia type"
        value={type}
        onChange={(v) => setType(v as AmetropiaType)}
        options={[
          { value: 'axial', label: 'Axial (abnormal axial length, normal corneal/lens power)' },
          { value: 'refractive', label: 'Refractive (abnormal corneal/lens power, normal axial length)' },
        ]}
      />
      {type === 'refractive' && (
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Back vertex power" unit="D" value={power} onChange={setPower} />
          <NumberField label="Vertex distance" unit="mm" value={vertexMm} onChange={setVertexMm} />
        </div>
      )}
      {result !== null && <ResultStat label="Relative spectacle magnification" value={`${roundTo(result * 100, 1)}%`} />}
      {type === 'axial' && (
        <p className="text-xs text-slate-500">
          By Knapp's Law, correcting axial ametropia at the eye's anterior focal point gives essentially no image-size
          change vs. the schematic emmetropic eye — regardless of how much axial ametropia is present.
        </p>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `RSM ≈ ${roundTo(result * 100, 1)}%` : undefined}
        onReset={() => {
          setPower('')
          setVertexMm('12')
        }}
      />
    </Card>
  )
}

export function RelativeSpectacleMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
