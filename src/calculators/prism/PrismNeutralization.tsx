import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions, CalculationStepsCard, ErrorText } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { combineHorizontalVertical } from './prismNeutralization.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'prism-neutralization',
  name: 'Prism Neutralization Resultant',
  category: 'Prism',
  description: 'Combines a horizontal and vertical alternate-cover-test/prism-neutralization finding into a single oblique resultant for documentation.',
  formula: 'Resultant R (Δ) = √(H² + V²)   ·   Angle from horizontal (°) = atan(V / H) × 180/π',
  variables: [
    { symbol: 'H', meaning: 'Horizontal deviation measured by prism neutralization (Δ)' },
    { symbol: 'V', meaning: 'Vertical deviation measured by prism neutralization (Δ)' },
    { symbol: 'R', meaning: 'Resultant oblique deviation magnitude (Δ)' },
  ],
  keywords: ['prism neutralization', 'alternate cover test', 'resultant deviation', 'oblique deviation', 'prism cover test combination'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Charting a single oblique deviation magnitude/direction from an alternate cover test finding that has both horizontal and vertical components, for comparison across visits or with imaging.',
  supportsPractice: false,
  convention: 'H and V are entered as unsigned magnitudes with a separate base-direction selector (Base In/Base Out; Base Up/Base Down), mirroring how alternate cover test findings are typically recorded.',
  limitations: [
    'This Pythagorean (vector) combination is a widely used clinical approximation for describing/comparing an oblique deviation from separately measured horizontal and vertical prism-neutralization findings.',
    "Prism diopters are not strictly additive as linear vectors, especially for larger deviations — unlike Prentice's Rule, which is exact for a single prism's decentration effect. Treat the resultant as an approximation for documentation, not an exact optical law.",
    'This is distinct from the Prism Combination calculator, which stacks multiple prisms acting on the same visual axis (same-axis/vertex prism math) rather than resolving two orthogonal cover-test measurements into one oblique vector.',
  ],
  relatedCalculatorIds: ['prism-combination', 'prentices-rule'],
  relatedExamTechniqueIds: ['cover-test', 'prism-cover-test'],
}

function Calculate() {
  const [hMag, setHMag] = useState('')
  const [hDir, setHDir] = useState<'BI' | 'BO'>('BO')
  const [vMag, setVMag] = useState('')
  const [vDir, setVDir] = useState<'BU' | 'BD'>('BU')

  const hN = parseNumeric(hMag) ?? 0
  const vN = parseNumeric(vMag) ?? 0
  const hasInput = parseNumeric(hMag) !== null || parseNumeric(vMag) !== null

  let result: ReturnType<typeof combineHorizontalVertical> | null = null
  let error: string | null = null
  if (hasInput) {
    try {
      result = combineHorizontalVertical(hN, vN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Calculation error'
    }
  }

  const trace: CalculationTrace | null =
    result !== null
      ? {
          formula: 'R = √(H² + V²)',
          substitution: `R = √(${Math.abs(hN)}² + ${Math.abs(vN)}²)`,
          steps: [
            `R = √(${roundTo(hN * hN, 2)} + ${roundTo(vN * vN, 2)}) = √${roundTo(hN * hN + vN * vN, 2)}`,
            `R = ${roundTo(result.resultant, 2)} Δ`,
          ],
          finalAnswerText: `Resultant = ${roundTo(result.resultant, 2)} Δ at ${roundTo(result.angleDegrees, 1)}° from horizontal (${hDir === 'BI' ? 'Base In' : 'Base Out'} / ${vDir === 'BD' ? 'Base Down' : 'Base Up'})`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Horizontal deviation" unit="Δ" value={hMag} onChange={setHMag} placeholder="e.g. 8" />
        <SelectField label="Horizontal base direction" value={hDir} onChange={(v) => setHDir(v as 'BI' | 'BO')} options={[{ value: 'BI', label: 'Base In' }, { value: 'BO', label: 'Base Out' }]} />
        <NumberField label="Vertical deviation" unit="Δ" value={vMag} onChange={setVMag} placeholder="e.g. 4" />
        <SelectField label="Vertical base direction" value={vDir} onChange={(v) => setVDir(v as 'BU' | 'BD')} options={[{ value: 'BU', label: 'Base Up' }, { value: 'BD', label: 'Base Down' }]} />
      </div>
      {error && <ErrorText message={error} />}
      {result && <ResultStat label="Resultant deviation" value={`${roundTo(result.resultant, 2)} Δ at ${roundTo(result.angleDegrees, 1)}°`} />}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `Resultant: ${roundTo(result.resultant, 2)} Δ at ${roundTo(result.angleDegrees, 1)}° from horizontal` : undefined}
        onReset={() => {
          setHMag('')
          setVMag('')
        }}
      />
    </Card>
  )
}

export function PrismNeutralization() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
