import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { powerFromFocalLengthMeters, focalLengthMetersFromPower } from './focalLengthDiopter.engine'
import type { CalculatorMeta, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'focal-length-diopter',
  name: 'Diopters ↔ Focal Length',
  category: 'Ophthalmic Optics',
  description: 'Convert between dioptric power and focal length.',
  formula: 'F = 1 / f  (f in meters)',
  variables: [
    { symbol: 'F', meaning: 'Dioptric power (D)' },
    { symbol: 'f', meaning: 'Focal length (m)' },
  ],
  keywords: ['focal length', 'diopter', 'power', 'lens'],
  boardRelevance: 'High',
  clinicalRelevance: 'Foundational relationship underlying nearly every ophthalmic optics calculation.',
  supportsPractice: true,
  convention: 'Plus (converging) power has a positive, real focal length behind the lens; minus (diverging) power has a negative, virtual focal length in front of the lens.',
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
  ],
}

function Calculate() {
  const [mode, setMode] = useState<'power' | 'focal'>('power')
  const [power, setPower] = useState('')
  const [focalCm, setFocalCm] = useState('')

  let resultText: string | null = null
  let workSteps: string[] = []
  let error: string | null = null

  try {
    if (mode === 'power') {
      const p = parseNumeric(power)
      if (p !== null) {
        const f = focalLengthMetersFromPower(p)
        resultText = `f = ${roundTo(f * 100, 2)} cm (${roundTo(f, 4)} m)`
        workSteps = [`f = 1 / F = 1 / ${p} D`, `f = ${roundTo(f, 4)} m = ${roundTo(f * 100, 2)} cm`]
      }
    } else {
      const fcm = parseNumeric(focalCm)
      if (fcm !== null) {
        const p = powerFromFocalLengthMeters(fcm / 100)
        resultText = `F = ${roundTo(p, 2)} D`
        workSteps = [`F = 1 / f = 1 / (${fcm} cm ÷ 100)`, `F = ${roundTo(p, 2)} D`]
      }
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        {(['power', 'focal'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={
              'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
              (mode === m ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
            }
          >
            {m === 'power' ? 'Power → Focal Length' : 'Focal Length → Power'}
          </button>
        ))}
      </div>
      {mode === 'power' ? (
        <NumberField label="Dioptric power" unit="D" value={power} onChange={setPower} />
      ) : (
        <NumberField label="Focal length" unit="cm" value={focalCm} onChange={setFocalCm} />
      )}
      {resultText && <ResultStat label="Result" value={resultText} />}
      {resultText && workSteps.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-1">Work</p>
          <p className="text-sm text-slate-700 font-mono">{workSteps.join(' → ')}</p>
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={resultText ?? undefined}
        onReset={() => {
          setPower('')
          setFocalCm('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: 'Basic' | 'Intermediate' | 'Advanced'): PracticeProblem {
  const values = difficulty === 'Basic' ? [1, 2, 4, 5, 8, 10] : difficulty === 'Intermediate' ? [1.5, 2.5, 3.75, 6, 7.5] : [3.33, 6.67, 9.25, 12.5]
  const p = values[Math.floor(Math.random() * values.length)] * (Math.random() > 0.5 ? 1 : -1)
  const f = focalLengthMetersFromPower(p) * 100
  return {
    prompt: `A lens has a power of ${p > 0 ? '+' : ''}${p.toFixed(2)} D. What is its focal length, in centimeters?`,
    difficulty,
    answers: [{ key: 'f', label: 'Focal length', unit: 'cm', value: f, tolerance: 0.5 }],
    formula: 'f = 1 / F',
    substitution: `f = 1 / (${p.toFixed(2)} D)`,
    steps: [`f = 1 / ${p.toFixed(2)} = ${(1 / p).toFixed(4)} m`, `Convert to cm: ${(1 / p).toFixed(4)} × 100 = ${f.toFixed(2)} cm`],
    finalAnswerText: `f = ${f.toFixed(2)} cm`,
    why: `Focal length and dioptric power are reciprocals when expressed in meters: F = 1/f.`,
  }
}

export function FocalLengthDiopter() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
