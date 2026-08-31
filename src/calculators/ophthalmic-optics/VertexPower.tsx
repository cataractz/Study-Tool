import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter } from '../shared/format'
import { effectivePowerAtNewVertex } from './vertexPower.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'vertex-effective-power',
  name: 'Vertex Distance & Effective Power',
  category: 'Ophthalmic Optics',
  description: 'Power change when a lens moves along the optical axis — vertex distance changes and effective power at a new reference plane are the same calculation.',
  formula: "F' = F / (1 − d·F)",
  variables: [
    { symbol: "F'", meaning: 'Effective power at the new reference plane (D)' },
    { symbol: 'F', meaning: 'Original power at the initial reference plane (D)' },
    { symbol: 'd', meaning: 'Distance the new plane moves toward the eye (m)' },
  ],
  keywords: ['vertex distance', 'effective power', 'reference plane', 'spectacle plane'],
  boardRelevance: 'High',
  clinicalRelevance: 'Power for high-Rx spectacles fit at a different vertex distance than refracted, or moving power to a new reference plane.',
  supportsPractice: true,
  convention: 'd = distance (m) the new plane moves TOWARD the eye, positive. Moving away from the eye uses a negative d.',
}

function Calculate() {
  const [power, setPower] = useState('')
  const [distMm, setDistMm] = useState('')
  const [direction, setDirection] = useState<'toward' | 'away'>('toward')

  const powerN = parseNumeric(power)
  const distN = parseNumeric(distMm)
  let result: number | null = null
  let error: string | null = null
  if (powerN !== null && distN !== null) {
    const dMeters = (direction === 'toward' ? distN : -distN) / 1000
    try {
      result = effectivePowerAtNewVertex(powerN, dMeters)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Original power" unit="D" value={power} onChange={setPower} />
        <NumberField label="Distance moved" unit="mm" value={distMm} onChange={setDistMm} />
        <SelectField
          label="Direction"
          value={direction}
          onChange={(v) => setDirection(v as 'toward' | 'away')}
          options={[
            { value: 'toward', label: 'Toward the eye (e.g. spectacle → CL)' },
            { value: 'away', label: 'Away from the eye (e.g. CL → spectacle)' },
          ]}
        />
      </div>
      {result !== null && <ResultStat label="New effective power" value={`${formatDiopter(result)} D`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `New effective power: ${formatDiopter(result)} D` : undefined}
        onReset={() => {
          setPower('')
          setDistMm('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const power = difficulty === 'Basic' ? [6, -6, 8, -8][Math.floor(Math.random() * 4)] : difficulty === 'Intermediate' ? [10, -10, 12, -12][Math.floor(Math.random() * 4)] : [14, -14, 16, -16][Math.floor(Math.random() * 4)]
  const distMm = 12
  const result = effectivePowerAtNewVertex(power, distMm / 1000)
  return {
    prompt: `A spectacle lens of ${formatDiopter(power)} D is worn at a 12 mm vertex distance. What is the equivalent power at the corneal plane (contact lens power)?`,
    difficulty,
    answers: [{ key: 'p', label: 'Contact lens power', unit: 'D', value: result, tolerance: 0.13 }],
    formula: "F' = F / (1 − d·F)",
    substitution: `F' = ${formatDiopter(power)} / (1 − 0.012 × ${formatDiopter(power)})`,
    steps: [`F' = ${power} / (1 − ${(0.012 * power).toFixed(4)})`, `F' = ${result.toFixed(2)} D`],
    finalAnswerText: `F' = ${formatDiopter(result)} D`,
    why: 'Moving a lens closer to the eye changes the vergence reaching the eye, so an equivalent power at the new plane must be calculated rather than simply reusing the original power.',
  }
}

export function VertexPower() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
