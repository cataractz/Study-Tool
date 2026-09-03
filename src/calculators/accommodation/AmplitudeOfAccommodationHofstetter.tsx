import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard, ErrorText } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { hofstetterAmplitudes } from './accommodation.engine'
import type { CalculatorMeta, CalculationTrace, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'amplitude-of-accommodation-hofstetter',
  name: "Amplitude of Accommodation (Hofstetter's Formulas)",
  category: 'Accommodation & Near Vision',
  description: "Computes the age-expected minimum, average, and maximum amplitude of accommodation using Hofstetter's formulas, and flags a measured amplitude below the age-expected minimum.",
  formula: 'Min = 15 − 0.25×age   ·   Avg = 18.5 − 0.30×age   ·   Max = 25 − 0.40×age',
  variables: [
    { symbol: 'age', meaning: 'Patient age (years)' },
    { symbol: 'Min', meaning: 'Age-expected minimum amplitude of accommodation (D)' },
    { symbol: 'Avg', meaning: 'Age-expected average amplitude of accommodation (D)' },
    { symbol: 'Max', meaning: 'Age-expected maximum amplitude of accommodation (D)' },
  ],
  keywords: ['amplitude of accommodation', 'hofstetter', 'hofstetter formula', 'presbyopia', 'age expected amplitude', 'push-up amplitude'],
  boardRelevance: 'High',
  clinicalRelevance: "Predicting age-expected amplitude of accommodation and comparing a patient's measured amplitude (e.g. via push-up) against the age-expected minimum to screen for accommodative insufficiency.",
  supportsPractice: true,
  convention: 'All three formulas are clamped at 0 D (amplitude cannot be negative). Enter a measured amplitude to compare it against the age-expected minimum.',
  limitations: [
    "Hofstetter's formulas are one standard reference among others (e.g. the older Donders' table) for expected amplitude by age — they are a population estimate, and individual variation is substantial.",
    'A measured amplitude below the age-expected minimum suggests possible accommodative insufficiency, but should always be interpreted alongside symptoms and other accommodative testing, not used as a standalone diagnostic threshold.',
  ],
  references: [
    'Hofstetter HW. A comparison of Duane\'s and Donders\' tables of the amplitude of accommodation. Am J Optom Arch Am Acad Optom. 1950.',
    'Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.',
  ],
  relatedCalculatorIds: ['accommodation', 'nra-pra'],
  relatedExamTechniqueIds: ['amplitude-of-accommodation-push-up'],
}

function Calculate() {
  const [age, setAge] = useState('')
  const [measured, setMeasured] = useState('')
  const ageN = parseNumeric(age)
  const measuredN = parseNumeric(measured)

  const result = ageN !== null && ageN >= 0 ? hofstetterAmplitudes(ageN) : null
  const ageError = ageN !== null && ageN < 0 ? 'Age cannot be negative.' : null

  const belowMinimum = result && measuredN !== null ? measuredN < result.minimum : null

  const trace: CalculationTrace | null =
    result && ageN !== null
      ? {
          formula: 'Min = 15 − 0.25×age   ·   Avg = 18.5 − 0.30×age   ·   Max = 25 − 0.40×age',
          substitution: `Min = 15 − 0.25×${ageN}   ·   Avg = 18.5 − 0.30×${ageN}   ·   Max = 25 − 0.40×${ageN}`,
          steps: [
            `Min = max(0, 15 − ${roundTo(0.25 * ageN, 2)}) = ${roundTo(result.minimum, 2)} D`,
            `Avg = max(0, 18.5 − ${roundTo(0.3 * ageN, 2)}) = ${roundTo(result.average, 2)} D`,
            `Max = max(0, 25 − ${roundTo(0.4 * ageN, 2)}) = ${roundTo(result.maximum, 2)} D`,
          ],
          finalAnswerText: `Age-expected amplitude at ${ageN}: ${roundTo(result.minimum, 2)}–${roundTo(result.maximum, 2)} D (average ${roundTo(result.average, 2)} D)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Age" unit="years" value={age} onChange={setAge} placeholder="e.g. 45" error={ageError ?? undefined} />
        <NumberField label="Measured amplitude of accommodation (optional)" unit="D" value={measured} onChange={setMeasured} placeholder="e.g. 4.00" />
      </div>
      {ageError && <ErrorText message={ageError} />}
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ResultStat tone="slate" label="Minimum" value={`${roundTo(result.minimum, 2)} D`} />
            <ResultStat label="Average" value={`${roundTo(result.average, 2)} D`} />
            <ResultStat tone="slate" label="Maximum" value={`${roundTo(result.maximum, 2)} D`} />
          </div>
          {belowMinimum !== null && (
            <>
              <ResultStat
                label="Measured amplitude vs. age-expected minimum"
                value={belowMinimum ? 'Below age-expected minimum' : 'At or above age-expected minimum'}
                tone={belowMinimum ? 'slate' : 'brand'}
              />
              {belowMinimum && (
                <p className="text-sm text-slate-600">
                  Measured amplitude falls below the age-expected minimum, suggesting possible accommodative insufficiency for this patient's age.
                </p>
              )}
            </>
          )}
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={
          result
            ? `Age ${ageN}: Hofstetter min ${roundTo(result.minimum, 2)} D, avg ${roundTo(result.average, 2)} D, max ${roundTo(result.maximum, 2)} D`
            : undefined
        }
        onReset={() => {
          setAge('')
          setMeasured('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const age = difficulty === 'Basic' ? [10, 20, 30][Math.floor(Math.random() * 3)] : difficulty === 'Intermediate' ? [15, 35, 45][Math.floor(Math.random() * 3)] : [8, 52, 63][Math.floor(Math.random() * 3)]
  const result = hofstetterAmplitudes(age)
  return {
    prompt: `Using Hofstetter's formula, what is the expected AVERAGE amplitude of accommodation for a ${age}-year-old patient?`,
    difficulty,
    answers: [{ key: 'avg', label: 'Average amplitude', unit: 'D', value: result.average, tolerance: 0.1 }],
    formula: 'Avg = 18.5 − 0.30×age',
    substitution: `Avg = 18.5 − 0.30×${age}`,
    steps: [`Avg = 18.5 − ${roundTo(0.3 * age, 2)} = ${roundTo(result.average, 2)} D`],
    finalAnswerText: `${roundTo(result.average, 2)} D`,
    why: "Hofstetter's average formula (18.5 − 0.30×age) is the standard modern estimate of expected amplitude of accommodation by age, clamped to a minimum of 0 D.",
  }
}

export function AmplitudeOfAccommodationHofstetter() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
