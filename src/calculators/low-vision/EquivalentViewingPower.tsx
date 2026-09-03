import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { equivalentViewingPower } from './equivalentViewingPower.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'equivalent-viewing-power',
  name: 'Equivalent Viewing Power (EVP)',
  category: 'Low Vision',
  description: "A low-vision magnifier's power expressed as an effective dioptric demand that accounts for the working distance between the lens and the eye, not lens power alone.",
  formula: 'EVP = F / (1 − d·F)   ·   EVD (cm) = 100 / EVP',
  variables: [
    { symbol: 'EVP', meaning: 'Equivalent viewing power (D)' },
    { symbol: 'F', meaning: 'Magnifier lens power (D)' },
    { symbol: 'd', meaning: 'Eye-to-lens working distance (m)' },
    { symbol: 'EVD', meaning: 'Equivalent viewing distance — the distance an unmagnified object would need to be to subtend the same angle (cm)' },
  ],
  keywords: ['equivalent viewing power', 'EVP', 'EVD', 'equivalent viewing distance', 'stand magnifier', 'CCTV magnifier', 'Bailey'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Prescribing and comparing stand magnifiers and CCTV/video magnifiers, where the eye is not held directly against the lens, so lens power alone understates or overstates the effective magnifying demand.',
  supportsPractice: false,
  convention: 'd is the working distance the eye sits BEHIND the lens (toward the eye), entered as a positive value in meters (e.g. 25 mm = 0.025 m). This uses the same vertex/effective-power form as the Vertex Distance & Effective Power calculator, applied here to a magnifier-to-eye working distance rather than a spectacle vertex distance.',
  limitations: [
    'Equivalent Viewing Power was introduced (Bailey) specifically to characterize stand magnifiers and CCTV/video magnifiers, whose effective power depends on eye-to-lens working distance — unlike a simple hand magnifier held close to the eye.',
    'Sources are not fully consistent in how EVP is presented: this calculator uses the general working-distance-dependent form F / (1 − d·F), the form used when a measured eye-to-lens distance is supplied (matching how Bailey originally tabulated EVD at several eye-to-lens distances for real stand magnifiers). For the special case of a simple hand magnifier used with the object at its focal point (image formed at optical infinity), EVD approaches the lens\'s focal length and EVP approaches the lens power F itself, essentially independent of exact eye position — that limiting case is not separately modeled here.',
    'As with vertex-power calculations generally, this becomes undefined (mathematically, infinite) at the specific power/distance combination where the denominator (1 − d·F) reaches zero.',
  ],
  references: [
    'Bailey IL. Equivalent viewing power or magnification — which is fundamental? The Optician. 1984;188(4970):32–35.',
    'Bailey IL. Low vision magnifiers — their optical parameters and methods for prescribing. Optom Vis Sci. 1994.',
  ],
  relatedCalculatorIds: ['vertex-effective-power', 'low-vision-magnification', 'telescope-magnification'],
}

function Calculate() {
  const [power, setPower] = useState('')
  const [distMm, setDistMm] = useState('')

  const powerN = parseNumeric(power)
  const distN = parseNumeric(distMm)

  let result: ReturnType<typeof equivalentViewingPower> | null = null
  let error: string | null = null
  if (powerN !== null && distN !== null) {
    try {
      result = equivalentViewingPower(powerN, distN / 1000)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result && powerN !== null && distN !== null
      ? {
          formula: 'EVP = F / (1 − d·F)',
          substitution: `EVP = ${formatDiopter(powerN)} / (1 − ${(distN / 1000).toFixed(4)} × ${formatDiopter(powerN)})`,
          steps: [
            `EVP = ${formatDiopter(powerN)} / (1 − ${roundTo((distN / 1000) * powerN, 4)})`,
            `EVP = ${formatDiopter(result.evp)} D`,
            `EVD = 100 / ${roundTo(result.evp, 2)} = ${roundTo(result.evdCm, 2)} cm`,
          ],
          finalAnswerText: `EVP = ${formatDiopter(result.evp)} D  (EVD = ${roundTo(result.evdCm, 2)} cm)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Magnifier lens power" unit="D" value={power} onChange={setPower} placeholder="e.g. 20" />
        <NumberField label="Eye-to-lens working distance" unit="mm" value={distMm} onChange={setDistMm} placeholder="e.g. 25" error={error ?? undefined} />
      </div>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ResultStat label="Equivalent viewing power" value={`${formatDiopter(result.evp)} D`} />
          <ResultStat tone="slate" label="Equivalent viewing distance" value={`${roundTo(result.evdCm, 2)} cm`} />
        </div>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `EVP ${formatDiopter(result.evp)} D — EVD ${roundTo(result.evdCm, 2)} cm` : undefined}
        onReset={() => {
          setPower('')
          setDistMm('')
        }}
      />
    </Card>
  )
}

export function EquivalentViewingPower() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
