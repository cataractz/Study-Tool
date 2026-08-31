import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { transverseMagnification, axialMagnification } from './magnification.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'linear-axial-magnification',
  name: 'Linear (Transverse) & Axial Magnification',
  category: 'Visual Optics',
  description: 'Image magnification from object and image vergence, and the corresponding axial magnification.',
  formula: 'm (transverse) = U / V   ·   m (axial) = m² (in air)',
  variables: [
    { symbol: 'm (transverse)', meaning: 'Transverse (lateral) magnification = object vergence / image vergence' },
    { symbol: 'U', meaning: 'Object vergence (D)' },
    { symbol: 'V', meaning: 'Image vergence (D)' },
    { symbol: 'm (axial)', meaning: 'Axial magnification = m(transverse)² (system in air, n = n′ = 1)' },
  ],
  keywords: ['linear magnification', 'transverse magnification', 'axial magnification', 'lateral magnification'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Predicting image size and depth distortion through a simple optical system.',
  supportsPractice: false,
  convention: 'Negative m = inverted image. Axial magnification = m² assumes the system is in air on both sides (n = n′ = 1).',
}

function Calculate() {
  const [u, setU] = useState('')
  const [v, setV] = useState('')
  const uN = parseNumeric(u)
  const vN = parseNumeric(v)
  let m: number | null = null
  let error: string | null = null
  try {
    m = uN !== null && vN !== null ? transverseMagnification(uN, vN) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }
  const axial = m !== null ? axialMagnification(m) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Object vergence (U)" unit="D" value={u} onChange={setU} />
        <NumberField label="Image vergence (V)" unit="D" value={v} onChange={setV} />
      </div>
      {m !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Transverse magnification" value={`${roundTo(m, 3)}×${m < 0 ? ' (inverted)' : ''}`} />
          <ResultStat tone="slate" label="Axial magnification" value={`${roundTo(axial!, 3)}×`} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={m !== null ? `m = ${roundTo(m, 3)}×, axial = ${roundTo(axial!, 3)}×` : undefined}
        onReset={() => {
          setU('')
          setV('')
        }}
      />
    </Card>
  )
}

export function LinearAxialMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
