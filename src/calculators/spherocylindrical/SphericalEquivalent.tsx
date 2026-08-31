import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter } from '../shared/format'
import { sphericalEquivalent } from './sphericalEquivalent.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'spherical-equivalent',
  name: 'Spherical Equivalent',
  category: 'Spherocylindrical',
  description: 'The single-power sphere that best approximates a spherocylindrical Rx.',
  formula: 'SE = Sphere + Cylinder / 2',
  variables: [
    { symbol: 'SE', meaning: 'Spherical equivalent power (D)' },
    { symbol: 'Sphere', meaning: 'Sphere power (D)' },
    { symbol: 'Cylinder', meaning: 'Cylinder power (D)' },
  ],
  keywords: ['spherical equivalent', 'SE', 'sphere', 'cylinder'],
  boardRelevance: 'High',
  clinicalRelevance: 'Contact lens fitting, quick comparison of Rx magnitude, and refractive surgery planning.',
  supportsPractice: true,
  limitations: ['Gives the same value regardless of plus- or minus-cylinder notation, since transposition does not change SE.'],
}

function Calculate() {
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const s = parseNumeric(sphere)
  const c = parseNumeric(cylinder)
  const result = s !== null && c !== null ? sphericalEquivalent(s, c) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Sphere" unit="D" value={sphere} onChange={setSphere} />
        <NumberField label="Cylinder" unit="D" value={cylinder} onChange={setCylinder} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Spherical equivalent" value={`${formatDiopter(result)} D`} />
          <p className="text-sm text-slate-600 font-mono">
            SE = {formatDiopter(s!)} + ({formatDiopter(c!)} / 2) = {formatDiopter(result)} D
          </p>
        </>
      )}
      <ResultActions
        copyText={result !== null ? `SE = ${formatDiopter(result)} D` : undefined}
        onReset={() => {
          setSphere('')
          setCylinder('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const sphere = difficulty === 'Basic' ? [1, 2, -1, -2][Math.floor(Math.random() * 4)] : [0.25, 1.75, -3.25, 2.75][Math.floor(Math.random() * 4)]
  const cylinder = difficulty === 'Basic' ? [-1, -2, 1, 2][Math.floor(Math.random() * 4)] : [-0.75, -2.25, 1.5, -0.5][Math.floor(Math.random() * 4)]
  const se = sphericalEquivalent(sphere, cylinder)
  return {
    prompt: `Calculate the spherical equivalent of ${formatDiopter(sphere)} ${formatDiopter(cylinder)} × 090.`,
    difficulty,
    answers: [{ key: 'se', label: 'Spherical equivalent', unit: 'D', value: se, tolerance: 0.01 }],
    formula: 'SE = Sphere + Cylinder / 2',
    substitution: `SE = ${sphere} + (${cylinder} / 2)`,
    steps: [`SE = ${sphere} + ${(cylinder / 2).toFixed(2)} = ${se.toFixed(2)}`],
    finalAnswerText: `SE = ${formatDiopter(se)} D`,
    why: 'The spherical equivalent averages the two principal meridian powers, giving the "balance point" power of the astigmatic lens.',
  }
}

export function SphericalEquivalent() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
