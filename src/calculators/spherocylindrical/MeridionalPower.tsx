import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter, formatAxis } from '../shared/format'
import { meridionalPower, principalMeridians } from './meridionalPower.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'meridional-power',
  name: 'Meridional Power & Principal Meridians',
  category: 'Spherocylindrical',
  description: 'Power of a spherocylindrical lens in any meridian, plus the two principal meridian powers.',
  formula: 'Fθ = S + C·sin²(θ − axis)',
  variables: [
    { symbol: 'Fθ', meaning: 'Lens power in the meridian of interest, θ (D)' },
    { symbol: 'S', meaning: 'Sphere power (D)' },
    { symbol: 'C', meaning: 'Cylinder power (D)' },
    { symbol: 'θ', meaning: 'Meridian of interest (°)' },
    { symbol: 'axis', meaning: 'Cylinder axis of the lens (°)' },
  ],
  keywords: ['meridional power', 'principal meridians', 'sphere', 'cylinder', 'axis', 'toric'],
  boardRelevance: 'High',
  clinicalRelevance: "Understanding a toric lens's power in an arbitrary meridian, e.g. for keratometry or topography correlation.",
  supportsPractice: true,
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
  ],
}

function Calculate() {
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [axis, setAxis] = useState('')
  const [theta, setTheta] = useState('')

  const s = parseNumeric(sphere)
  const c = parseNumeric(cylinder)
  const a = parseNumeric(axis)
  const t = parseNumeric(theta)

  const meridianResult = s !== null && c !== null && a !== null && t !== null ? meridionalPower(s, c, a, t) : null
  const principals = s !== null && c !== null && a !== null ? principalMeridians(s, c, a) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <NumberField label="Sphere" unit="D" value={sphere} onChange={setSphere} />
        <NumberField label="Cylinder" unit="D" value={cylinder} onChange={setCylinder} />
        <NumberField label="Axis" unit="°" value={axis} onChange={setAxis} />
        <NumberField label="Meridian of interest (θ)" unit="°" value={theta} onChange={setTheta} />
      </div>
      {meridianResult !== null && (
        <>
          <ResultStat label={`Power at ${theta}°`} value={`${formatDiopter(meridianResult)} D`} />
          <p className="text-sm text-slate-600 font-mono">
            Fθ = {formatDiopter(s!)} + {formatDiopter(c!)}·sin²({t}° − {a}°) = {formatDiopter(meridianResult)} D
          </p>
        </>
      )}
      {principals && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat tone="slate" label={`Power at axis (${formatAxis(principals.axisMeridianAxis)})`} value={`${formatDiopter(principals.axisMeridianPower)} D`} />
          <ResultStat tone="slate" label={`Power at axis+90 (${formatAxis(principals.perpendicularMeridianAxis)})`} value={`${formatDiopter(principals.perpendicularMeridianPower)} D`} />
        </div>
      )}
      <ResultActions
        copyText={meridianResult !== null ? `Power at ${theta}° = ${formatDiopter(meridianResult)} D` : undefined}
        onReset={() => {
          setSphere('')
          setCylinder('')
          setAxis('')
          setTheta('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const sphere = -1
  const cylinder = difficulty === 'Basic' ? -2 : difficulty === 'Intermediate' ? -3 : -2.5
  const axis = difficulty === 'Basic' ? 90 : [30, 60, 120][Math.floor(Math.random() * 3)]
  const theta = difficulty === 'Basic' ? 180 : [0, 45, 90, 135][Math.floor(Math.random() * 4)]
  const result = meridionalPower(sphere, cylinder, axis, theta)
  return {
    prompt: `For a lens of ${formatDiopter(sphere)} ${formatDiopter(cylinder)} × ${axis}, what is the power in the ${theta}° meridian?`,
    difficulty,
    answers: [{ key: 'p', label: `Power at ${theta}°`, unit: 'D', value: result, tolerance: 0.05 }],
    formula: 'Fθ = S + C·sin²(θ − axis)',
    substitution: `Fθ = ${sphere} + ${cylinder}·sin²(${theta} − ${axis})`,
    steps: [
      `θ − axis = ${theta - axis}°`,
      `sin²(${theta - axis}°) = ${(Math.sin(((theta - axis) * Math.PI) / 180) ** 2).toFixed(4)}`,
      `Fθ = ${sphere} + ${cylinder} × ${(Math.sin(((theta - axis) * Math.PI) / 180) ** 2).toFixed(4)} = ${result.toFixed(2)}`,
    ],
    finalAnswerText: `Fθ = ${formatDiopter(result)} D`,
    why: 'The sin² term interpolates power smoothly between the two principal meridians (S at the axis, S+C ninety degrees away).',
  }
}

export function MeridionalPower() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
