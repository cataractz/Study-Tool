import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { stockConcentration, finalConcentration, stockVolume, finalVolume } from './dilution.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'dilution-calculator',
  name: 'Dilution Calculator',
  category: 'Pharmacology',
  description: 'Solve the dilution equation C1V1 = C2V2 for whichever quantity is unknown.',
  formula: 'C1 × V1 = C2 × V2',
  variables: [
    { symbol: 'C1', meaning: 'Stock (starting) concentration' },
    { symbol: 'V1', meaning: 'Stock (starting) volume' },
    { symbol: 'C2', meaning: 'Final (desired) concentration' },
    { symbol: 'V2', meaning: 'Final (desired) volume' },
  ],
  keywords: ['dilution', 'C1V1', 'C2V2', 'stock concentration', 'compounding'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Compounding a target concentration from a stock solution.',
  supportsPractice: true,
  convention: 'C1/V1 = stock (starting) concentration/volume. C2/V2 = final (desired) concentration/volume. Keep concentration units consistent between C1 and C2, and volume units consistent between V1 and V2.',
}

const solveOptions = [
  { value: 'c1', label: 'Solve for Stock Concentration (C1)' },
  { value: 'v1', label: 'Solve for Stock Volume (V1)' },
  { value: 'c2', label: 'Solve for Final Concentration (C2)' },
  { value: 'v2', label: 'Solve for Final Volume (V2)' },
]

function Calculate() {
  const [solveFor, setSolveFor] = useState<'c1' | 'v1' | 'c2' | 'v2'>('v1')
  const [c1, setC1] = useState('')
  const [v1, setV1] = useState('')
  const [c2, setC2] = useState('')
  const [v2, setV2] = useState('')

  const c1N = parseNumeric(c1)
  const v1N = parseNumeric(v1)
  const c2N = parseNumeric(c2)
  const v2N = parseNumeric(v2)

  let result: number | null = null
  let error: string | null = null
  try {
    if (solveFor === 'c1' && v2N !== null && c2N !== null && v1N !== null) result = stockConcentration(c2N, v2N, v1N)
    else if (solveFor === 'v1' && c1N !== null && c2N !== null && v2N !== null) result = stockVolume(c1N, c2N, v2N)
    else if (solveFor === 'c2' && c1N !== null && v1N !== null && v2N !== null) result = finalConcentration(c1N, v1N, v2N)
    else if (solveFor === 'v2' && c1N !== null && v1N !== null && c2N !== null) result = finalVolume(c1N, v1N, c2N)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <SelectField label="Solve for" value={solveFor} onChange={(v) => setSolveFor(v as typeof solveFor)} options={solveOptions} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {solveFor !== 'c1' && <NumberField label="Stock concentration (C1)" value={c1} onChange={setC1} />}
        {solveFor !== 'v1' && <NumberField label="Stock volume (V1)" value={v1} onChange={setV1} />}
        {solveFor !== 'c2' && <NumberField label="Final concentration (C2)" value={c2} onChange={setC2} />}
        {solveFor !== 'v2' && <NumberField label="Final volume (V2)" value={v2} onChange={setV2} />}
      </div>
      {result !== null && <ResultStat label="Result" value={roundTo(result, 3).toString()} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? String(roundTo(result, 3)) : undefined}
        onReset={() => {
          setC1('')
          setV1('')
          setC2('')
          setV2('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const c1 = difficulty === 'Basic' ? 10 : difficulty === 'Intermediate' ? 5 : 2.5
  const v2 = difficulty === 'Basic' ? 100 : difficulty === 'Intermediate' ? 250 : 500
  const c2 = difficulty === 'Basic' ? 1 : difficulty === 'Intermediate' ? 0.5 : 0.1
  const v1 = stockVolume(c1, c2, v2)
  return {
    prompt: `You need to prepare ${v2} mL of a ${c2}% solution from a ${c1}% stock solution. How much stock solution (mL) is needed?`,
    difficulty,
    answers: [{ key: 'v1', label: 'Stock volume needed', unit: 'mL', value: v1, tolerance: 0.5 }],
    formula: 'V1 = (C2 × V2) / C1',
    substitution: `V1 = (${c2} × ${v2}) / ${c1}`,
    steps: [`V1 = ${c2 * v2} / ${c1}`, `V1 = ${v1.toFixed(2)} mL`],
    finalAnswerText: `V1 ≈ ${v1.toFixed(2)} mL (make up to ${v2} mL total with diluent)`,
    why: 'The dilution equation conserves total solute mass: the amount of drug taken from the stock (C1×V1) must equal the amount present in the final diluted volume (C2×V2).',
  }
}

export function DilutionCalculator() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
