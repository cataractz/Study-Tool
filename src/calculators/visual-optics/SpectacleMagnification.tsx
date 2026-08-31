import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { spectacleMagnificationPowerFactor } from './magnification.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'spectacle-magnification',
  name: 'Spectacle Magnification (Power Factor)',
  category: 'Visual Optics',
  description: 'Estimated spectacle magnification from lens power and vertex distance.',
  formula: 'SM ≈ 1 / (1 − d·Fv)',
  variables: [
    { symbol: 'SM', meaning: 'Spectacle magnification (power factor only)' },
    { symbol: 'd', meaning: 'Vertex distance (m)' },
    { symbol: 'Fv', meaning: 'Back vertex power of the lens (D)' },
  ],
  keywords: ['spectacle magnification', 'power factor', 'shape factor', 'anisometropia'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating how much a spectacle correction magnifies or minifies the retinal image, e.g. in anisometropia.',
  supportsPractice: false,
  convention: 'd = vertex distance (m), Fv = back vertex power (D).',
  limitations: [
    'This is the POWER FACTOR only. The complete spectacle magnification formula also includes a "shape factor" from the lens\'s front surface power, center thickness, and refractive index — that data is rarely available at point of care, so it is omitted here.',
    'The power factor is the dominant term for typical spectacle lenses, but the shape factor can matter for high-power or unusually shaped lenses.',
  ],
}

function Calculate() {
  const [power, setPower] = useState('')
  const [vertexMm, setVertexMm] = useState('12')
  const p = parseNumeric(power)
  const v = parseNumeric(vertexMm)
  let result: number | null = null
  let error: string | null = null
  try {
    result = p !== null && v !== null ? spectacleMagnificationPowerFactor(p, v / 1000) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Back vertex power" unit="D" value={power} onChange={setPower} />
        <NumberField label="Vertex distance" unit="mm" value={vertexMm} onChange={setVertexMm} />
      </div>
      {result !== null && <ResultStat label="Spectacle magnification (power factor)" value={`${roundTo(result * 100, 1)}%`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `SM ≈ ${roundTo(result * 100, 1)}%` : undefined}
        onReset={() => {
          setPower('')
          setVertexMm('12')
        }}
      />
    </Card>
  )
}

export function SpectacleMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
