import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { sagitta, radiusFromSagitta } from './sagitta.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'sagittal-depth',
  name: 'Sagittal Depth',
  category: 'Contact Lenses',
  description: 'Sagittal depth (sag) of a spherical lens/cornea from its radius and chord diameter, or radius from a known sag.',
  formula: 'sag = r − √(r² − (d/2)²)',
  variables: [
    { symbol: 'sag', meaning: 'Sagittal depth (mm)' },
    { symbol: 'r', meaning: 'Radius of curvature (mm)' },
    { symbol: 'd', meaning: 'Chord diameter (mm)' },
  ],
  keywords: ['sagitta', 'sagittal depth', 'sag', 'base curve', 'chord', 'lens fitting'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Relating base curve and diameter to how deeply a lens vaults the cornea — relevant to both GP and scleral lens fitting.',
  supportsPractice: true,
  limitations: ['Treats the surface as a simple sphere; real corneas and lens back surfaces are often aspheric, so this is an approximation.'],
}

function SagFromRadius() {
  const [radius, setRadius] = useState('')
  const [diameter, setDiameter] = useState('')
  const r = parseNumeric(radius)
  const d = parseNumeric(diameter)
  let result: number | null = null
  let error: string | null = null
  try {
    result = r !== null && d !== null ? sagitta(r, d) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Radius of curvature" unit="mm" value={radius} onChange={setRadius} />
        <NumberField label="Chord diameter" unit="mm" value={diameter} onChange={setDiameter} />
      </div>
      {result !== null && <ResultStat label="Sagittal depth" value={`${roundTo(result, 3)} mm`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function RadiusFromSag() {
  const [sag, setSag] = useState('')
  const [diameter, setDiameter] = useState('')
  const s = parseNumeric(sag)
  const d = parseNumeric(diameter)
  let result: number | null = null
  let error: string | null = null
  try {
    result = s !== null && d !== null ? radiusFromSagitta(s, d) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Sagittal depth" unit="mm" value={sag} onChange={setSag} />
        <NumberField label="Chord diameter" unit="mm" value={diameter} onChange={setDiameter} />
      </div>
      {result !== null && <ResultStat label="Radius of curvature" value={`${roundTo(result, 3)} mm`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function Calculate() {
  const [mode, setMode] = useState<'sag' | 'radius'>('sag')
  return (
    <Card className="space-y-4">
      <SelectField
        label="Solve for"
        value={mode}
        onChange={(v) => setMode(v as 'sag' | 'radius')}
        options={[
          { value: 'sag', label: 'Sagittal depth (from radius & diameter)' },
          { value: 'radius', label: 'Radius of curvature (from sag & diameter)' },
        ]}
      />
      {mode === 'sag' ? <SagFromRadius /> : <RadiusFromSag />}
      <ResultActions onReset={() => setMode('sag')} />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const radius = difficulty === 'Basic' ? 8.0 : difficulty === 'Intermediate' ? 8.6 : 7.8
  const diameter = difficulty === 'Basic' ? 10 : difficulty === 'Intermediate' ? 14 : 15
  const result = sagitta(radius, diameter)
  return {
    prompt: `What is the sagittal depth of a ${radius} mm radius surface across a ${diameter} mm chord?`,
    difficulty,
    answers: [{ key: 'sag', label: 'Sagittal depth', unit: 'mm', value: result, tolerance: 0.05 }],
    formula: 'sag = r − √(r² − (d/2)²)',
    substitution: `sag = ${radius} − √(${radius}² − ${diameter / 2}²)`,
    steps: [`sag = ${radius} − √(${(radius ** 2).toFixed(2)} − ${((diameter / 2) ** 2).toFixed(2)})`, `sag = ${radius} − √${(radius ** 2 - (diameter / 2) ** 2).toFixed(2)}`, `sag = ${result.toFixed(3)} mm`],
    finalAnswerText: `${result.toFixed(2)} mm`,
    why: 'Sagittal depth is the height of a spherical cap, derived directly from the geometry of a circle: the radius minus the distance from the center of curvature to the chord.',
  }
}

export function SagittalDepth() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
