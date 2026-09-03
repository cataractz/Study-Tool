import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatAxis } from '../shared/format'
import { adjustedAxisLARS, type RotationDirection } from './lars.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'lars',
  name: 'LARS — Toric Soft Lens Rotation',
  category: 'Contact Lenses',
  description: "Adjust a toric soft contact lens axis for observed rotation using the LARS rule.",
  formula: 'LARS: Left, Add. Right, Subtract.',
  variables: [
    { symbol: 'LARS', meaning: 'Mnemonic for adjusting a toric lens axis after observed rotation: Left, Add; Right, Subtract' },
    { symbol: 'Left', meaning: "Reference mark rotates to the examiner's left as viewed on the eye" },
    { symbol: 'Add', meaning: 'Add the rotation amount to the ordered axis' },
    { symbol: 'Right', meaning: "Reference mark rotates to the examiner's right as viewed on the eye" },
    { symbol: 'Subtract', meaning: 'Subtract the rotation amount from the ordered axis' },
  ],
  keywords: ['LARS', 'toric', 'soft lens rotation', 'axis adjustment', 'left add right subtract'],
  boardRelevance: 'High',
  clinicalRelevance: 'Reordering a toric soft contact lens after observing on-eye rotation of the reference mark.',
  supportsPractice: true,
  convention: 'Direction of rotation is as observed by the EXAMINER looking at the patient\'s eye (not the patient\'s own left/right) — this is the standard clarification used to avoid the most common source of confusion with this rule.',
  limitations: ['Applies to a lens with a single rotation reference mark (e.g. at the 6 o\'clock position); confirm your lens\'s specific marking scheme.'],
  references: [
    'Bennett ES, Henry VA. Clinical Manual of Contact Lenses, 4th ed. Lippincott Williams & Wilkins.',
    'Elliott DB. Clinical Procedures in Primary Eye Care, 5th ed. Elsevier.',
  ],
}

function Calculate() {
  const [orderedAxis, setOrderedAxis] = useState('')
  const [rotation, setRotation] = useState('')
  const [direction, setDirection] = useState<RotationDirection>('left')

  const axisN = parseNumeric(orderedAxis)
  const rotN = parseNumeric(rotation)
  const result = axisN !== null && rotN !== null ? adjustedAxisLARS(axisN, rotN, direction) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Ordered axis" unit="°" value={orderedAxis} onChange={setOrderedAxis} />
        <NumberField label="Observed rotation" unit="°" value={rotation} onChange={setRotation} />
        <SelectField
          label="Rotation direction (examiner's view)"
          value={direction}
          onChange={(v) => setDirection(v as RotationDirection)}
          options={[
            { value: 'left', label: "Examiner's Left → Add" },
            { value: 'right', label: "Examiner's Right → Subtract" },
          ]}
        />
      </div>
      {result !== null && <ResultStat label="New axis to order" value={formatAxis(result)} />}
      <ResultActions
        copyText={result !== null ? `New axis: ${formatAxis(result)}` : undefined}
        onReset={() => {
          setOrderedAxis('')
          setRotation('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const orderedAxis = [10, 90, 170, 45][Math.floor(Math.random() * 4)]
  const rotation = difficulty === 'Basic' ? 10 : difficulty === 'Intermediate' ? 15 : 20
  const direction: RotationDirection = Math.random() > 0.5 ? 'left' : 'right'
  const result = adjustedAxisLARS(orderedAxis, rotation, direction)
  return {
    prompt: `A toric soft lens ordered at axis ${orderedAxis}° is dispensed. On follow-up, the reference mark has rotated ${rotation}° to the examiner's ${direction}. What axis should be ordered for the replacement lens?`,
    difficulty,
    answers: [{ key: 'axis', label: 'New axis', unit: '°', value: result, tolerance: 1 }],
    formula: 'LARS: Left, Add; Right, Subtract',
    substitution: `New axis = ${orderedAxis} ${direction === 'left' ? '+' : '−'} ${rotation}`,
    steps: [`New axis = ${orderedAxis} ${direction === 'left' ? '+' : '−'} ${rotation} = ${orderedAxis + (direction === 'left' ? rotation : -rotation)}`, `Normalized to 1–180°: ${result}°`],
    finalAnswerText: `${formatAxis(result)}`,
    why: 'The LARS mnemonic tells you which direction to shift the ordered axis so the new lens\'s cylinder axis lands where the eye actually needs it, compensating for the lens\'s natural resting rotation.',
  }
}

export function LARS() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
