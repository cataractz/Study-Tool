import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { imageVergence, objectVergenceFromImage, powerFromVergences } from './vergence.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'vergence',
  name: 'Vergence',
  category: 'Ophthalmic Optics',
  description: 'Solve the vergence equation U + F = V for object vergence, image vergence, or lens power.',
  formula: 'U + F = V',
  variables: [
    { symbol: 'U', meaning: 'Object vergence (D)' },
    { symbol: 'F', meaning: 'Power of the refracting element (D)' },
    { symbol: 'V', meaning: 'Image vergence (D)' },
  ],
  keywords: ['vergence', 'object vergence', 'image vergence', 'U', 'V', 'F'],
  boardRelevance: 'High',
  clinicalRelevance: 'Core equation for ray tracing through any single refracting element.',
  supportsPractice: true,
  convention: 'Light travels left to right. Positive vergence = converging; negative = diverging. Distance (m) = 1 / vergence, same sign.',
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
  ],
}

const solveOptions = [
  { value: 'V', label: 'Solve for Image Vergence (V)' },
  { value: 'U', label: 'Solve for Object Vergence (U)' },
  { value: 'F', label: 'Solve for Power (F)' },
]

function Calculate() {
  const [solveFor, setSolveFor] = useState<'V' | 'U' | 'F'>('V')
  const [u, setU] = useState('')
  const [f, setF] = useState('')
  const [v, setV] = useState('')

  const uN = parseNumeric(u)
  const fN = parseNumeric(f)
  const vN = parseNumeric(v)

  let result: number | null = null
  let label = ''
  let substitution = ''
  if (solveFor === 'V' && uN !== null && fN !== null) {
    result = imageVergence(uN, fN)
    label = 'Image Vergence (V)'
    substitution = `V = ${formatDiopter(uN)} + ${formatDiopter(fN)}`
  } else if (solveFor === 'U' && vN !== null && fN !== null) {
    result = objectVergenceFromImage(vN, fN)
    label = 'Object Vergence (U)'
    substitution = `U = ${formatDiopter(vN)} − ${formatDiopter(fN)}`
  } else if (solveFor === 'F' && uN !== null && vN !== null) {
    result = powerFromVergences(uN, vN)
    label = 'Power (F)'
    substitution = `F = ${formatDiopter(vN)} − ${formatDiopter(uN)}`
  }

  return (
    <Card className="space-y-4">
      <SelectField label="Solve for" value={solveFor} onChange={(v) => setSolveFor(v as 'V' | 'U' | 'F')} options={solveOptions} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {solveFor !== 'U' && <NumberField label="Object vergence (U)" unit="D" value={u} onChange={setU} />}
        {solveFor !== 'F' && <NumberField label="Power (F)" unit="D" value={f} onChange={setF} />}
        {solveFor !== 'V' && <NumberField label="Image vergence (V)" unit="D" value={v} onChange={setV} />}
      </div>
      {result !== null && (
        <>
          <ResultStat label={label} value={`${formatDiopter(result)} D`} />
          <p className="text-sm text-slate-600 font-mono">{substitution} = {formatDiopter(result)} D</p>
        </>
      )}
      <ResultActions
        copyText={result !== null ? `${label}: ${formatDiopter(result)} D` : undefined}
        onReset={() => {
          setU('')
          setF('')
          setV('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const range = difficulty === 'Basic' ? 5 : difficulty === 'Intermediate' ? 10 : 15
  const u = roundTo((Math.random() - 0.5) * range * 2, 2)
  const f = roundTo((Math.random() - 0.5) * range * 2, 2)
  const v = roundTo(u + f, 2)
  return {
    prompt: `Light with an object vergence of ${formatDiopter(u)} D strikes a lens of power ${formatDiopter(f)} D. What is the image vergence?`,
    difficulty,
    answers: [{ key: 'v', label: 'Image vergence (V)', unit: 'D', value: v, tolerance: 0.1 }],
    formula: 'U + F = V',
    substitution: `V = ${formatDiopter(u)} + ${formatDiopter(f)}`,
    steps: [`V = ${u} + ${f} = ${v}`],
    finalAnswerText: `V = ${formatDiopter(v)} D`,
    why: 'The vergence equation states that image vergence equals object vergence plus the power of the refracting element.',
  }
}

export function Vergence() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
