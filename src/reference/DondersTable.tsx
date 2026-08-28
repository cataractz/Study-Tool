import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { NumberField, ResultStat } from '../calculators/shared/ui'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import { parseNumeric, roundTo } from '../calculators/shared/format'
import { hofstetterAmplitudes } from '../calculators/accommodation/accommodation.engine'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'donders-table',
  name: "Amplitude of Accommodation by Age (Donders' Table & Hofstetter's Formulas)",
  category: 'Accommodation & Near Vision',
  description: "Classic age-based reference for expected amplitude of accommodation, alongside the modern Hofstetter formulas.",
  keywords: ['donders', "donders' table", 'amplitude of accommodation', 'hofstetter', 'presbyopia', 'age', 'accommodation chart'],
}

// Commonly-cited rounded transcription of Donders' classic (1864) table. Reproductions vary
// slightly across textbooks since it predates a single standardized source — treat this as a
// historical/teaching reference rather than a precise modern clinical tool. Hofstetter's
// formulas (computed live below) are the more standardized modern estimate.
const DONDERS_TABLE: { age: number; amplitude: number }[] = [
  { age: 10, amplitude: 14.0 },
  { age: 15, amplitude: 12.0 },
  { age: 20, amplitude: 10.0 },
  { age: 25, amplitude: 8.5 },
  { age: 30, amplitude: 7.0 },
  { age: 35, amplitude: 5.5 },
  { age: 40, amplitude: 4.5 },
  { age: 45, amplitude: 3.5 },
  { age: 50, amplitude: 2.5 },
  { age: 55, amplitude: 1.75 },
  { age: 60, amplitude: 1.0 },
  { age: 65, amplitude: 0.5 },
  { age: 70, amplitude: 0.25 },
  { age: 75, amplitude: 0.0 },
]

function nearestDondersIndex(age: number): number {
  let closest = 0
  let closestDiff = Infinity
  DONDERS_TABLE.forEach((row, i) => {
    const diff = Math.abs(row.age - age)
    if (diff < closestDiff) {
      closestDiff = diff
      closest = i
    }
  })
  return closest
}

export function DondersTable() {
  const [age, setAge] = useState('')
  const ageN = parseNumeric(age)
  const hofstetter = ageN !== null ? hofstetterAmplitudes(ageN) : null
  const highlightIndex = ageN !== null ? nearestDondersIndex(ageN) : undefined

  return (
    <ReferenceShell meta={meta}>
      <Card className="space-y-4">
        <NumberField label="Patient age" unit="years" value={age} onChange={setAge} placeholder="e.g. 45" />
        {hofstetter && (
          <div className="grid grid-cols-3 gap-3">
            <ResultStat tone="slate" label="Hofstetter minimum" value={`${roundTo(hofstetter.minimum, 2)} D`} />
            <ResultStat label="Hofstetter average" value={`${roundTo(hofstetter.average, 2)} D`} />
            <ResultStat tone="slate" label="Hofstetter maximum" value={`${roundTo(hofstetter.maximum, 2)} D`} />
          </div>
        )}
        <p className="text-xs text-slate-500">
          Hofstetter's formulas: Minimum = 15 − 0.25×age, Average = 18.5 − 0.30×age, Maximum = 25 − 0.40×age. Enter an
          age above to also highlight the nearest row in Donders' classic table below.
        </p>
      </Card>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Donders' Table (classic reference)</h2>
        <ReferenceTable
          headers={['Age (years)', 'Expected Amplitude (D)']}
          rows={DONDERS_TABLE.map((row) => [row.age.toString(), row.amplitude.toFixed(2)])}
          highlightRowIndex={highlightIndex}
        />
        <p className="text-xs text-slate-400 mt-2">
          Individual variation is substantial — this and Hofstetter's formulas are population averages/ranges, not a
          diagnostic threshold for a single patient. Exact numeric reproductions of Donders' original table vary
          slightly between textbooks; Hofstetter's formulas are generally preferred for a standardized modern
          estimate.
        </p>
      </div>
    </ReferenceShell>
  )
}
