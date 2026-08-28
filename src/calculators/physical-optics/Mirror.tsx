import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { focalLengthFromRadius, imageDistance, mirrorMagnification } from './mirror.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'mirror-equation',
  name: 'Mirror Equation (Concave/Convex)',
  category: 'Physical Optics',
  description: 'Image distance and magnification for a spherical mirror from its radius of curvature and object distance.',
  formula: '1/do + 1/di = 1/f = 2/r   ·   m = −di/do',
  keywords: ['mirror equation', 'concave mirror', 'convex mirror', 'radius of curvature', 'image distance'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Understanding image formation by curved mirrors (e.g. keratometry/Placido disc principles use corneal reflection as a convex mirror).',
  supportsPractice: false,
  convention: `Uses the "real is positive" convention standard for mirrors: object distance (do) is positive for a real object in front of the mirror; concave mirrors have positive radius/focal length, convex mirrors negative; image distance (di) is positive for a real image, negative for virtual. This is a DIFFERENT sign convention than the signed-vergence convention used in the Vergence/lens calculators — do not mix values between them.`,
}

function Calculate() {
  const [radius, setRadius] = useState('')
  const [objectDistance, setObjectDistance] = useState('')
  const r = parseNumeric(radius)
  const doN = parseNumeric(objectDistance)
  const f = r !== null ? focalLengthFromRadius(r) : null

  let di: number | null = null
  let error: string | null = null
  try {
    di = f !== null && doN !== null ? imageDistance(doN, f) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }
  const m = di !== null && doN !== null ? mirrorMagnification(di, doN) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Radius of curvature" unit="mm, + concave / − convex" value={radius} onChange={setRadius} />
        <NumberField label="Object distance" unit="mm" value={objectDistance} onChange={setObjectDistance} />
      </div>
      {f !== null && <ResultStat tone="slate" label="Focal length" value={`${roundTo(f, 1)} mm`} />}
      {di !== null && m !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Image distance" value={`${roundTo(di, 1)} mm ${di > 0 ? '(real)' : '(virtual)'}`} />
          <ResultStat label="Magnification" value={`${roundTo(m, 3)}× ${m < 0 ? '(inverted)' : '(upright)'}`} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={di !== null && m !== null ? `di = ${roundTo(di, 1)} mm, m = ${roundTo(m, 3)}×` : undefined}
        onReset={() => {
          setRadius('')
          setObjectDistance('')
        }}
      />
    </Card>
  )
}

export function Mirror() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
