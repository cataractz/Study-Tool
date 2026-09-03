import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { equivalentPowerTwoLenses } from './lensCombination.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'lens-combination',
  name: 'Lens Combination',
  category: 'Ophthalmic Optics',
  description: 'Equivalent power of two thin lenses, in contact or separated by a known distance.',
  formula: 'Feq = F1 + F2 − d·F1·F2',
  variables: [
    { symbol: 'Feq', meaning: 'Equivalent power of the combined lens system (D)' },
    { symbol: 'F1', meaning: 'Power of lens 1 (D)' },
    { symbol: 'F2', meaning: 'Power of lens 2 (D)' },
    { symbol: 'd', meaning: 'Separation between the two lenses (m)' },
  ],
  keywords: ['lens combination', 'equivalent power', 'thin lens', 'separated lenses'],
  boardRelevance: 'High',
  clinicalRelevance: 'Combining spectacle + add power, or any two-element optical system.',
  supportsPractice: true,
  convention: 'd = separation between the two lenses in meters. d = 0 for lenses in contact.',
  limitations: [
    'Scoped to two lenses. Extending this shortcut formula to three or more separated lenses is not a simple algebraic extension — it requires sequential vergence tracing through each element and is not implemented here to avoid an inaccurate result.',
  ],
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
    'American Academy of Ophthalmology. Optics, Refraction, and Contact Lenses (BCSC Section 3).',
  ],
}

function Calculate() {
  const [f1, setF1] = useState('')
  const [f2, setF2] = useState('')
  const [sepMm, setSepMm] = useState('0')

  const f1N = parseNumeric(f1)
  const f2N = parseNumeric(f2)
  const sepN = parseNumeric(sepMm)
  const result = f1N !== null && f2N !== null && sepN !== null ? equivalentPowerTwoLenses(f1N, f2N, sepN / 1000) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Lens 1 power" unit="D" value={f1} onChange={setF1} />
        <NumberField label="Lens 2 power" unit="D" value={f2} onChange={setF2} />
        <NumberField label="Separation" unit="mm" value={sepMm} onChange={setSepMm} placeholder="0 = in contact" />
      </div>
      {result !== null && (
        <>
          <ResultStat label="Equivalent power" value={`${formatDiopter(result)} D`} />
          <p className="text-sm text-slate-600 font-mono">
            Feq = {formatDiopter(f1N!)} + {formatDiopter(f2N!)} − ({roundTo(sepN! / 1000, 4)} × {formatDiopter(f1N!)} × {formatDiopter(f2N!)}) = {formatDiopter(result)} D
          </p>
        </>
      )}
      <ResultActions
        copyText={result !== null ? `Feq = ${formatDiopter(result)} D` : undefined}
        onReset={() => {
          setF1('')
          setF2('')
          setSepMm('0')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const f1 = roundTo((Math.random() - 0.5) * 12, 2)
  const f2 = roundTo((Math.random() - 0.5) * 12, 2)
  const sepMm = difficulty === 'Basic' ? 0 : difficulty === 'Intermediate' ? 10 : 15
  const sepM = sepMm / 1000
  const result = equivalentPowerTwoLenses(f1, f2, sepM)
  return {
    prompt:
      sepMm === 0
        ? `Two thin lenses of power ${formatDiopter(f1)} D and ${formatDiopter(f2)} D are placed in contact. What is the equivalent power?`
        : `Two thin lenses of power ${formatDiopter(f1)} D and ${formatDiopter(f2)} D are separated by ${sepMm} mm. What is the equivalent power?`,
    difficulty,
    answers: [{ key: 'feq', label: 'Equivalent power', unit: 'D', value: result, tolerance: 0.1 }],
    formula: 'Feq = F1 + F2 − d·F1·F2',
    substitution: `Feq = ${formatDiopter(f1)} + ${formatDiopter(f2)} − (${sepM} × ${formatDiopter(f1)} × ${formatDiopter(f2)})`,
    steps: [`Feq = ${f1} + ${f2} − (${sepM} × ${f1} × ${f2})`, `Feq = ${result.toFixed(2)} D`],
    finalAnswerText: `Feq = ${formatDiopter(result)} D`,
    why: 'For lenses in contact, powers simply add. Separated lenses require the −d·F1·F2 correction term because the vergence changes as it travels the separation distance.',
  }
}

export function LensCombination() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
