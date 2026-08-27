import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { combinePrism, describeComponents } from './prismVector.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'prism-combination',
  name: 'Prism Combination',
  category: 'Prism',
  description: 'Combine horizontal and vertical prism components into a single resultant prism.',
  formula: 'Resultant = √(H² + V²)',
  keywords: ['prism combination', 'resultant prism', 'oblique prism', 'horizontal', 'vertical'],
  boardRelevance: 'High',
  clinicalRelevance: 'Determining the total prismatic effect when horizontal and vertical prism both act on the same eye.',
  supportsPractice: true,
  convention: 'Horizontal: positive = Base Out, negative = Base In. Vertical: positive = Base Up, negative = Base Down.',
}

function Calculate() {
  const [hMag, setHMag] = useState('')
  const [hDir, setHDir] = useState<'BI' | 'BO'>('BO')
  const [vMag, setVMag] = useState('')
  const [vDir, setVDir] = useState<'BU' | 'BD'>('BU')

  const hN = parseNumeric(hMag)
  const vN = parseNumeric(vMag)
  const horizontal = hN !== null ? hN * (hDir === 'BI' ? -1 : 1) : 0
  const vertical = vN !== null ? vN * (vDir === 'BD' ? -1 : 1) : 0
  const hasInput = hN !== null || vN !== null
  const result = hasInput ? combinePrism({ horizontal, vertical }) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Horizontal prism" unit="Δ" value={hMag} onChange={setHMag} />
        <SelectField label="Horizontal direction" value={hDir} onChange={(v) => setHDir(v as 'BI' | 'BO')} options={[{ value: 'BI', label: 'Base In' }, { value: 'BO', label: 'Base Out' }]} />
        <NumberField label="Vertical prism" unit="Δ" value={vMag} onChange={setVMag} />
        <SelectField label="Vertical direction" value={vDir} onChange={(v) => setVDir(v as 'BU' | 'BD')} options={[{ value: 'BU', label: 'Base Up' }, { value: 'BD', label: 'Base Down' }]} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Resultant prism" value={`${roundTo(result.magnitude, 2)} Δ`} />
          <p className="text-sm text-slate-600">Components: {describeComponents({ horizontal, vertical })}</p>
          <p className="text-sm text-slate-600 font-mono">Angle from horizontal: {roundTo(result.angleDeg, 1)}°</p>
        </>
      )}
      <ResultActions
        copyText={result !== null ? `Resultant: ${roundTo(result.magnitude, 2)} Δ at ${roundTo(result.angleDeg, 1)}°` : undefined}
        onReset={() => {
          setHMag('')
          setVMag('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const h = difficulty === 'Basic' ? [3, 4, 6][Math.floor(Math.random() * 3)] : [3.5, 5.5, 7][Math.floor(Math.random() * 3)]
  const v = difficulty === 'Basic' ? [3, 4][Math.floor(Math.random() * 2)] : [2.5, 4.5][Math.floor(Math.random() * 2)]
  const result = combinePrism({ horizontal: h, vertical: v })
  return {
    prompt: `A patient has ${h}Δ Base Out and ${v}Δ Base Up prism simultaneously. What is the resultant prism magnitude?`,
    difficulty,
    answers: [{ key: 'r', label: 'Resultant magnitude', unit: 'Δ', value: result.magnitude, tolerance: 0.1 }],
    formula: 'Resultant = √(H² + V²)',
    substitution: `Resultant = √(${h}² + ${v}²)`,
    steps: [`Resultant = √(${h * h} + ${v * v}) = √${h * h + v * v}`, `Resultant = ${result.magnitude.toFixed(2)} Δ`],
    finalAnswerText: `${result.magnitude.toFixed(2)} Δ at ${result.angleDeg.toFixed(1)}° from horizontal`,
    why: 'Horizontal and vertical prism act along perpendicular axes and combine as a vector sum, like any two perpendicular displacement components.',
  }
}

export function PrismCombination() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
