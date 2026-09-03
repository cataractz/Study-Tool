import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter, formatAxis, normalizeAxis } from '../shared/format'
import { transpose } from './transposition.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'spherocylindrical-transposition',
  name: 'Spherocylindrical Transposition',
  category: 'Spherocylindrical',
  description: 'Convert a spherocylindrical Rx between plus-cylinder and minus-cylinder form.',
  formula: "S' = S + C,  C' = −C,  Axis' = Axis ± 90°",
  variables: [
    { symbol: "S'", meaning: 'New (transposed) sphere power (D)' },
    { symbol: 'S', meaning: 'Original sphere power (D)' },
    { symbol: "C'", meaning: 'New (transposed) cylinder power (D)' },
    { symbol: 'C', meaning: 'Original cylinder power (D)' },
    { symbol: "Axis'", meaning: 'New cylinder axis after transposition (°)' },
    { symbol: 'Axis', meaning: 'Original cylinder axis (°)' },
  ],
  keywords: ['transposition', 'plus cylinder', 'minus cylinder', 'sphere', 'cylinder', 'axis'],
  boardRelevance: 'High',
  clinicalRelevance: 'Converting between refraction/prescribing conventions and manufacturer lens-order formats.',
  supportsPractice: true,
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
  ],
}

function Calculate() {
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [axis, setAxis] = useState('')

  const s = parseNumeric(sphere)
  const c = parseNumeric(cylinder)
  const a = parseNumeric(axis)
  const result = s !== null && c !== null && a !== null ? transpose({ sphere: s, cylinder: c, axis: a }) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Sphere" unit="D" value={sphere} onChange={setSphere} />
        <NumberField label="Cylinder" unit="D" value={cylinder} onChange={setCylinder} />
        <NumberField label="Axis" unit="°" value={axis} onChange={setAxis} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Transposed Rx" value={`${formatDiopter(result.sphere)} ${formatDiopter(result.cylinder)} × ${formatAxis(result.axis)}`} />
          <p className="text-sm text-slate-600 font-mono">
            S' = {formatDiopter(s!)} + ({formatDiopter(c!)}) = {formatDiopter(result.sphere)} · C' = −({formatDiopter(c!)}) = {formatDiopter(result.cylinder)} · Axis' = {normalizeAxis(a! + 90)}°
          </p>
        </>
      )}
      <ResultActions
        copyText={result !== null ? `${formatDiopter(result.sphere)} ${formatDiopter(result.cylinder)} × ${formatAxis(result.axis)}` : undefined}
        onReset={() => {
          setSphere('')
          setCylinder('')
          setAxis('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const sphere = difficulty === 'Basic' ? [1, 2, -1, -2][Math.floor(Math.random() * 4)] : [0.25, 1.75, -3.25, 2.75][Math.floor(Math.random() * 4)]
  const cylinder = difficulty === 'Basic' ? [-1, -2, 1, 2][Math.floor(Math.random() * 4)] : [-0.75, -2.25, 1.5, 0.5][Math.floor(Math.random() * 4)]
  const axis = [10, 45, 90, 120, 180, 75][Math.floor(Math.random() * 6)]
  const result = transpose({ sphere, cylinder, axis })
  return {
    prompt: `Transpose the following Rx to the opposite cylinder form: ${formatDiopter(sphere)} ${formatDiopter(cylinder)} × ${axis}`,
    difficulty,
    answers: [
      { key: 's', label: 'New sphere', unit: 'D', value: result.sphere, tolerance: 0.01 },
      { key: 'c', label: 'New cylinder', unit: 'D', value: result.cylinder, tolerance: 0.01 },
      { key: 'a', label: 'New axis', unit: '°', value: result.axis, tolerance: 1 },
    ],
    formula: "S' = S + C,  C' = −C,  Axis' = Axis ± 90°",
    substitution: `S' = ${sphere} + (${cylinder}),  C' = −(${cylinder}),  Axis' = ${axis} + 90`,
    steps: [
      `S' = ${sphere} + ${cylinder} = ${result.sphere}`,
      `C' = −(${cylinder}) = ${result.cylinder}`,
      `Axis' = ${axis} + 90 = ${axis + 90}, normalized to ${result.axis}°`,
    ],
    finalAnswerText: `${formatDiopter(result.sphere)} ${formatDiopter(result.cylinder)} × ${formatAxis(result.axis)}`,
    why: 'Transposition algebraically re-expresses the same lens: the new sphere absorbs the old cylinder, the cylinder sign flips, and the axis rotates 90° to the other principal meridian.',
  }
}

export function Transposition() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
