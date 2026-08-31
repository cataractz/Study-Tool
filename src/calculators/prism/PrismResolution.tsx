import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { resolvePrism, describeComponents } from './prismVector.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'prism-resolution',
  name: 'Prism Resolution',
  category: 'Prism',
  description: 'Break a resultant (oblique) prism into its horizontal and vertical components.',
  formula: 'H = R·cos(θ),  V = R·sin(θ)',
  variables: [
    { symbol: 'H', meaning: 'Horizontal prism component (Δ; + = Base Out, − = Base In)' },
    { symbol: 'R', meaning: 'Resultant (oblique) prism magnitude (Δ)' },
    { symbol: 'V', meaning: 'Vertical prism component (Δ; + = Base Up, − = Base Down)' },
    { symbol: 'θ', meaning: 'Angle of the resultant prism from the horizontal (Base Out) axis (°)' },
  ],
  keywords: ['prism resolution', 'oblique prism', 'horizontal component', 'vertical component'],
  boardRelevance: 'High',
  clinicalRelevance: 'Prescribing an oblique prism as separate horizontal and vertical prism, or interpreting a measured oblique prism.',
  supportsPractice: true,
  convention: 'θ measured from the horizontal (Base Out) axis, counterclockwise positive. Horizontal: + = Base Out. Vertical: + = Base Up.',
}

function Calculate() {
  const [magnitude, setMagnitude] = useState('')
  const [angle, setAngle] = useState('')
  const m = parseNumeric(magnitude)
  const a = parseNumeric(angle)
  const result = m !== null && a !== null ? resolvePrism(m, a) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Resultant magnitude" unit="Δ" value={magnitude} onChange={setMagnitude} />
        <NumberField label="Angle (θ)" unit="° from horizontal" value={angle} onChange={setAngle} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Components" value={describeComponents(result)} />
          <div className="grid grid-cols-2 gap-3">
            <ResultStat tone="slate" label="Horizontal" value={`${roundTo(Math.abs(result.horizontal), 2)} Δ ${result.horizontal >= 0 ? 'Base Out' : 'Base In'}`} />
            <ResultStat tone="slate" label="Vertical" value={`${roundTo(Math.abs(result.vertical), 2)} Δ ${result.vertical >= 0 ? 'Base Up' : 'Base Down'}`} />
          </div>
        </>
      )}
      <ResultActions
        copyText={result !== null ? describeComponents(result) : undefined}
        onReset={() => {
          setMagnitude('')
          setAngle('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const magnitude = difficulty === 'Basic' ? [5, 6, 8][Math.floor(Math.random() * 3)] : [5.5, 7.2, 9][Math.floor(Math.random() * 3)]
  const angle = [30, 45, 53, 60][Math.floor(Math.random() * 4)]
  const result = resolvePrism(magnitude, angle)
  return {
    prompt: `A resultant prism of ${magnitude}Δ acts at ${angle}° from the horizontal (Base Out) axis. What are its horizontal and vertical components?`,
    difficulty,
    answers: [
      { key: 'h', label: 'Horizontal component', unit: 'Δ', value: Math.abs(result.horizontal), tolerance: 0.15 },
      { key: 'v', label: 'Vertical component', unit: 'Δ', value: Math.abs(result.vertical), tolerance: 0.15 },
    ],
    formula: 'H = R·cos(θ),  V = R·sin(θ)',
    substitution: `H = ${magnitude}·cos(${angle}°),  V = ${magnitude}·sin(${angle}°)`,
    steps: [`H = ${magnitude} × ${Math.cos((angle * Math.PI) / 180).toFixed(3)} = ${result.horizontal.toFixed(2)}`, `V = ${magnitude} × ${Math.sin((angle * Math.PI) / 180).toFixed(3)} = ${result.vertical.toFixed(2)}`],
    finalAnswerText: describeComponents(result),
    why: 'Resolving a resultant vector into perpendicular components uses the same cosine/sine projection as any 2D vector decomposition.',
  }
}

export function PrismResolution() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
