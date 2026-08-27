import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { tearLensPower, classifySamFap } from './tearLens.engine'
import { DEFAULT_KERATOMETRIC_INDEX } from '../keratometry/keratometry.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'tear-lens',
  name: 'Tear Lens Power (SAM/FAP)',
  category: 'Contact Lenses',
  description: 'Power of the tear layer trapped under a rigid (GP) lens, and whether it follows SAM or FAP.',
  formula: 'Tear lens power = K power − Base curve power',
  keywords: ['tear lens', 'SAM', 'FAP', 'steeper add minus', 'flatter add plus', 'base curve', 'RGP fitting'],
  boardRelevance: 'High',
  clinicalRelevance: 'Understanding how a GP base curve fit relative to K affects the power delivered to the eye.',
  supportsPractice: true,
  convention: `Both K and base curve converted to power via the standard keratometric index (default ${DEFAULT_KERATOMETRIC_INDEX}). Steeper base curve than K → minus tear lens (SAM). Flatter than K → plus tear lens (FAP).`,
}

function Calculate() {
  const [bc, setBc] = useState('')
  const [k, setK] = useState('')
  const bcN = parseNumeric(bc)
  const kN = parseNumeric(k)
  const result = bcN !== null && kN !== null ? tearLensPower(bcN, kN) : null
  const classification = bcN !== null && kN !== null ? classifySamFap(bcN, kN) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Base curve" unit="mm" value={bc} onChange={setBc} />
        <NumberField label="K reading" unit="mm" value={k} onChange={setK} />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Tear lens power" value={`${roundTo(result, 2) >= 0 ? '+' : ''}${roundTo(result, 2)} D`} />
          <ResultStat tone="slate" label="Classification" value={classification!} />
        </>
      )}
      <ResultActions
        copyText={result !== null ? `Tear lens: ${roundTo(result, 2)} D (${classification})` : undefined}
        onReset={() => {
          setBc('')
          setK('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const k = 7.8
  const bc = difficulty === 'Basic' ? 7.8 : difficulty === 'Intermediate' ? 7.7 : 7.95
  const result = tearLensPower(bc, k)
  return {
    prompt: `A GP lens has a base curve of ${bc} mm, fit on a cornea with K = ${k} mm. What is the tear lens power?`,
    difficulty,
    answers: [{ key: 'p', label: 'Tear lens power', unit: 'D', value: result, tolerance: 0.15 }],
    formula: 'Tear lens power = K power − BC power',
    substitution: `Using F = 337.5/r: K power = 337.5/${k}, BC power = 337.5/${bc}`,
    steps: [`K power = ${(337.5 / k).toFixed(2)} D`, `BC power = ${(337.5 / bc).toFixed(2)} D`, `Tear lens = ${(337.5 / k).toFixed(2)} − ${(337.5 / bc).toFixed(2)} = ${result.toFixed(2)} D`],
    finalAnswerText: `${result >= 0 ? '+' : ''}${result.toFixed(2)} D (${classifySamFap(bc, k)})`,
    why: 'The tear film fills the gap between a rigid lens and the cornea; when the lens is steeper than the cornea the tear layer is thicker centrally and acts as a minus lens, and vice versa for a flatter fit.',
  }
}

export function TearLens() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
