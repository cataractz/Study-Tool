import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import {
  prismFromDecentration,
  decentrationFromPrism,
  powerFromPrismAndDecentration,
  inducedBaseDirection,
  type DecentrationDirection,
} from './prenticesRule.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'prentices-rule',
  name: "Prentice's Rule (Prism & Decentration)",
  category: 'Prism',
  description: 'Solve for induced prism, required decentration, or lens power. P = cF.',
  formula: 'P (Δ) = c (cm) × F (D)',
  keywords: ['prentice', "prentice's rule", 'prism', 'decentration', 'induced prism'],
  boardRelevance: 'High',
  clinicalRelevance: 'Predicting unwanted prism from optical-center misalignment, or intentionally prescribing prism via decentration.',
  supportsPractice: true,
  convention: 'Plus lens: induced base is in the SAME direction the optical center is decentered. Minus lens: base is OPPOSITE the decentration direction.',
}

const solveOptions = [
  { value: 'prism', label: 'Solve for Prism (P)' },
  { value: 'decentration', label: 'Solve for Decentration (c)' },
  { value: 'power', label: 'Solve for Lens Power (F)' },
]

const directionOptions: { value: DecentrationDirection; label: string }[] = [
  { value: 'nasal', label: 'Nasal (toward the nose)' },
  { value: 'temporal', label: 'Temporal (away from the nose)' },
  { value: 'up', label: 'Up' },
  { value: 'down', label: 'Down' },
]

function Calculate() {
  const [solveFor, setSolveFor] = useState<'prism' | 'decentration' | 'power'>('prism')
  const [decentrationMm, setDecentrationMm] = useState('')
  const [power, setPower] = useState('')
  const [prism, setPrism] = useState('')
  const [direction, setDirection] = useState<DecentrationDirection>('temporal')

  const dMm = parseNumeric(decentrationMm)
  const f = parseNumeric(power)
  const p = parseNumeric(prism)

  let result: number | null = null
  let unit = ''
  let error: string | null = null
  try {
    if (solveFor === 'prism' && dMm !== null && f !== null) {
      result = prismFromDecentration(dMm / 10, f)
      unit = 'Δ'
    } else if (solveFor === 'decentration' && p !== null && f !== null) {
      result = decentrationFromPrism(p, f) * 10
      unit = 'mm'
    } else if (solveFor === 'power' && p !== null && dMm !== null) {
      result = powerFromPrismAndDecentration(p, dMm / 10)
      unit = 'D'
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  const base = f !== null ? inducedBaseDirection(direction, f) : null

  return (
    <Card className="space-y-4">
      <SelectField label="Solve for" value={solveFor} onChange={(v) => setSolveFor(v as typeof solveFor)} options={solveOptions} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {solveFor !== 'decentration' && <NumberField label="Decentration" unit="mm" value={decentrationMm} onChange={setDecentrationMm} />}
        {solveFor !== 'power' && <NumberField label="Lens power" unit="D" value={power} onChange={setPower} />}
        {solveFor !== 'prism' && <NumberField label="Prism" unit="Δ" value={prism} onChange={setPrism} />}
        <SelectField label="Decentration direction" value={direction} onChange={(v) => setDirection(v as DecentrationDirection)} options={directionOptions} />
      </div>
      {result !== null && (
        <ResultStat label="Result" value={`${roundTo(result, 2)} ${unit}${base ? ` — ${base}` : ''}`} />
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `${roundTo(result, 2)} ${unit}${base ? ` — ${base}` : ''}` : undefined}
        onReset={() => {
          setDecentrationMm('')
          setPower('')
          setPrism('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const power = difficulty === 'Basic' ? [2, 3, 4, -2, -3][Math.floor(Math.random() * 5)] : difficulty === 'Intermediate' ? [5, 6, -5, -6, 7][Math.floor(Math.random() * 5)] : [8, -8, 9, -9, 10][Math.floor(Math.random() * 5)]
  const decentrationMm = difficulty === 'Basic' ? [2, 3, 4][Math.floor(Math.random() * 3)] : [3, 5, 6][Math.floor(Math.random() * 3)]
  const direction: DecentrationDirection = Math.random() > 0.5 ? 'temporal' : 'nasal'
  const prism = prismFromDecentration(decentrationMm / 10, power)
  const base = inducedBaseDirection(direction, power)
  return {
    prompt: `A ${power > 0 ? '+' : ''}${power.toFixed(2)} D lens is decentered ${decentrationMm} mm ${direction}. How much prism is induced?`,
    difficulty,
    answers: [{ key: 'p', label: 'Induced prism', unit: 'Δ', value: Math.abs(prism), tolerance: 0.1 }],
    formula: 'P = c × F',
    substitution: `P = ${decentrationMm / 10} cm × ${power} D`,
    steps: [`P = ${decentrationMm / 10} × ${power} = ${prism.toFixed(2)} Δ`, `Base direction: ${base} (${power >= 0 ? 'plus lens — base follows decentration' : 'minus lens — base is opposite decentration'})`],
    finalAnswerText: `${Math.abs(prism).toFixed(2)} Δ, ${base}`,
    why: 'Prentice\'s Rule gives the magnitude; the base direction depends on lens sign because plus and minus lenses have opposite local-prism orientation away from their optical center.',
  }
}

export function PrenticesRule() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
