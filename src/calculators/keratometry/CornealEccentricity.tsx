import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { analyzeCornealShape } from './cornealEccentricity.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'corneal-eccentricity',
  name: 'Corneal Eccentricity & Shape Factor',
  category: 'Keratometry & Cornea',
  description: 'Converts between corneal asphericity descriptors (Q value, shape factor p, eccentricity e) and classifies corneal shape as prolate, spherical, or oblate — distinct from the Keratometry calculator, which computes power/astigmatism from K-readings rather than corneal shape.',
  formula: 'p = Q + 1;  e = √(1 − p) = √(−Q)  (defined only when Q ≤ 0)',
  variables: [
    { symbol: 'Q', meaning: 'Asphericity / conic constant (unitless); Q < 0 prolate, Q = 0 spherical, Q > 0 oblate' },
    { symbol: 'p', meaning: 'Shape factor (unitless), p = Q + 1' },
    { symbol: 'e', meaning: 'Eccentricity (unitless, e ≥ 0); undefined for oblate corneas (Q > 0)' },
  ],
  keywords: ['corneal eccentricity', 'Q value', 'asphericity', 'shape factor', 'prolate', 'oblate', 'conic constant', 'corneal topography'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'RGP and scleral contact lens fitting (peripheral curve selection) and refractive surgery screening, where corneal asphericity/shape — not just central power — determines fit and risk.',
  supportsPractice: false,
  convention: 'This calculator uses Q negative = prolate (cornea flattens toward the periphery — the normal/typical shape, e.g. average cornea ≈ Q −0.25, p 0.75, e ≈ 0.5) and Q positive = oblate (cornea steepens toward the periphery, e.g. many post-myopic-LASIK corneas), following the p = Q + 1 relationship.',
  limitations: [
    'Eccentricity is not defined for oblate corneas (Q > 0) under this classical relationship, since it requires the square root of a negative number — shape factor (p) and Q remain valid and are shown regardless of shape.',
    'Q-value sign conventions are NOT universal across instruments and sources — some report Q or eccentricity with the opposite sign, or report only an unsigned magnitude without a prolate/oblate sign at all. Always confirm the convention your specific topographer or reference uses before comparing values across devices.',
  ],
  references: [
    'Read SA, Collins MJ, Carney LG, Franklin RJ. A review of mathematical descriptors of corneal asphericity. Ophthalmic Physiol Opt. 2002 (relates p = Q+1 and e = √(−Q)/√(1−p)).',
  ],
  relatedCalculatorIds: ['keratometry', 'sagittal-depth'],
  relatedExamTechniqueIds: ['manual-keratometry', 'corneal-topography'],
  relatedDiseaseIds: ['keratoconus'],
}

function Calculate() {
  const [inputType, setInputType] = useState<'Q' | 'p' | 'e'>('Q')
  const [value, setValue] = useState('')

  const valueN = parseNumeric(value)
  let result: ReturnType<typeof analyzeCornealShape> | null = null
  let error: string | null = null
  if (valueN !== null) {
    try {
      result = analyzeCornealShape(valueN, inputType)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result && valueN !== null
      ? {
          formula: 'p = Q + 1;  e = √(1 − p) = √(−Q)',
          substitution: `Input: ${inputType} = ${valueN}`,
          steps: [
            `Q = ${roundTo(result.Q, 4)}`,
            `p = Q + 1 = ${roundTo(result.p, 4)}`,
            result.e !== null ? `e = √(1 − ${roundTo(result.p, 4)}) = ${roundTo(result.e, 4)}` : `e is undefined (p > 1, oblate cornea)`,
          ],
          finalAnswerText: `Shape: ${result.shape}  ·  Q = ${roundTo(result.Q, 3)}  ·  p = ${roundTo(result.p, 3)}  ·  e = ${result.e !== null ? roundTo(result.e, 3) : 'undefined'}`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <SelectField
          label="Input as"
          value={inputType}
          onChange={(v) => setInputType(v as 'Q' | 'p' | 'e')}
          options={[
            { value: 'Q', label: 'Q value (asphericity)' },
            { value: 'p', label: 'p (shape factor)' },
            { value: 'e', label: 'e (eccentricity)' },
          ]}
        />
        <NumberField label={`Value (${inputType})`} value={value} onChange={setValue} placeholder="e.g. -0.25" error={error ?? undefined} />
      </div>
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ResultStat label="Q value" value={roundTo(result.Q, 3).toString()} />
            <ResultStat tone="slate" label="Shape factor (p)" value={roundTo(result.p, 3).toString()} />
            <ResultStat tone="slate" label="Eccentricity (e)" value={result.e !== null ? roundTo(result.e, 3).toString() : 'Undefined'} />
          </div>
          <ResultStat label="Shape classification" value={result.shape.charAt(0).toUpperCase() + result.shape.slice(1)} />
          {result.e === null && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <p className="text-sm text-amber-700">Eccentricity is not defined for oblate corneas (Q &gt; 0); shape factor (p) remains valid.</p>
            </div>
          )}
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={
          result
            ? `Q = ${roundTo(result.Q, 3)}, p = ${roundTo(result.p, 3)}, e = ${result.e !== null ? roundTo(result.e, 3) : 'undefined'} (${result.shape})`
            : undefined
        }
        onReset={() => setValue('')}
      />
    </Card>
  )
}

export function CornealEccentricity() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
