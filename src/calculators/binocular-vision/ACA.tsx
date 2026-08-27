import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { calculatedACA, gradientACA } from './aca.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'aca-ratio',
  name: 'AC/A Ratio',
  category: 'Binocular Vision',
  description: 'Calculated AC/A (from distance/near phoria and add) or gradient AC/A (from phoria change through a lens).',
  formula: 'Calculated: PD + (Hn − Hd)/ADD   ·   Gradient: Δphoria / −ΔLens',
  keywords: ['AC/A', 'accommodative convergence', 'calculated AC/A', 'gradient AC/A'],
  boardRelevance: 'High',
  clinicalRelevance: 'Diagnosing and classifying accommodative esotropia/convergence excess or insufficiency.',
  supportsPractice: true,
  convention: 'Esophoria = positive, exophoria = negative, throughout.',
}

function Calculate() {
  const [method, setMethod] = useState<'calculated' | 'gradient'>('calculated')
  const [pd, setPd] = useState('')
  const [nearPhoria, setNearPhoria] = useState('')
  const [distPhoria, setDistPhoria] = useState('')
  const [add, setAdd] = useState('')
  const [baselinePhoria, setBaselinePhoria] = useState('')
  const [lensPhoria, setLensPhoria] = useState('')
  const [lensPower, setLensPower] = useState('')

  let result: number | null = null
  let error: string | null = null
  try {
    if (method === 'calculated') {
      const pdN = parseNumeric(pd)
      const nN = parseNumeric(nearPhoria)
      const dN = parseNumeric(distPhoria)
      const addN = parseNumeric(add)
      if (pdN !== null && nN !== null && dN !== null && addN !== null) result = calculatedACA(pdN, nN, dN, addN)
    } else {
      const bN = parseNumeric(baselinePhoria)
      const lN = parseNumeric(lensPhoria)
      const pN = parseNumeric(lensPower)
      if (bN !== null && lN !== null && pN !== null) result = gradientACA(bN, lN, pN)
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <SelectField
        label="Method"
        value={method}
        onChange={(v) => setMethod(v as 'calculated' | 'gradient')}
        options={[
          { value: 'calculated', label: 'Calculated AC/A' },
          { value: 'gradient', label: 'Gradient AC/A' },
        ]}
      />
      {method === 'calculated' ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <NumberField label="Interpupillary distance" unit="cm" value={pd} onChange={setPd} />
          <NumberField label="Near phoria" unit="Δ, eso+" value={nearPhoria} onChange={setNearPhoria} />
          <NumberField label="Distance phoria" unit="Δ, eso+" value={distPhoria} onChange={setDistPhoria} />
          <NumberField label="Add power" unit="D" value={add} onChange={setAdd} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <NumberField label="Baseline phoria" unit="Δ, eso+" value={baselinePhoria} onChange={setBaselinePhoria} />
          <NumberField label="Phoria through lens" unit="Δ, eso+" value={lensPhoria} onChange={setLensPhoria} />
          <NumberField label="Lens power used" unit="D" value={lensPower} onChange={setLensPower} />
        </div>
      )}
      {result !== null && <ResultStat label="AC/A ratio" value={`${roundTo(result, 1)} Δ/D`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `AC/A = ${roundTo(result, 1)} Δ/D` : undefined}
        onReset={() => {
          setPd('')
          setNearPhoria('')
          setDistPhoria('')
          setAdd('')
          setBaselinePhoria('')
          setLensPhoria('')
          setLensPower('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const pd = 6
  const distPhoria = difficulty === 'Basic' ? 0 : -1
  const nearPhoria = difficulty === 'Basic' ? -6 : difficulty === 'Intermediate' ? -8 : -10
  const add = 2.5
  const result = calculatedACA(pd, nearPhoria, distPhoria, add)
  return {
    prompt: `PD = ${pd} cm, distance phoria = ${distPhoria}Δ (eso+), near phoria = ${nearPhoria}Δ (eso+), through a +${add.toFixed(2)} D add. What is the calculated AC/A ratio?`,
    difficulty,
    answers: [{ key: 'aca', label: 'AC/A', unit: 'Δ/D', value: result, tolerance: 0.3 }],
    formula: 'AC/A = PD + (Hn − Hd) / ADD',
    substitution: `AC/A = ${pd} + (${nearPhoria} − ${distPhoria}) / ${add}`,
    steps: [`AC/A = ${pd} + ${(nearPhoria - distPhoria).toFixed(2)} / ${add}`, `AC/A = ${pd} + ${((nearPhoria - distPhoria) / add).toFixed(2)} = ${result.toFixed(2)}`],
    finalAnswerText: `AC/A ≈ ${result.toFixed(1)} Δ/D`,
    why: 'The calculated method estimates AC/A from the exophoric/esophoric shift between distance and near, referenced to the accommodative stimulus provided by the add.',
  }
}

export function ACA() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
