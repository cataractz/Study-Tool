import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseDateOnly, ageBetween, formatDateOnly } from './dateCalculations.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'age-calculator',
  name: 'Age Calculator',
  category: 'Clinical Utilities',
  description: 'Patient age in years/months/days as of today or a specific exam date.',
  formula: 'Calendar age = exam date − birth date',
  keywords: ['age', 'birth date', 'exam date', 'age calculator'],
  boardRelevance: 'Low',
  clinicalRelevance: 'Quickly computing patient age at the time of an exam, e.g. for chart documentation or age-based clinical decision points.',
  supportsPractice: false,
}

function Calculate() {
  const today = formatDateOnly(new Date())
  const [birthDate, setBirthDate] = useState('')
  const [refDate, setRefDate] = useState(today)

  let result: ReturnType<typeof ageBetween> | null = null
  let error: string | null = null
  if (birthDate && refDate) {
    try {
      result = ageBetween(parseDateOnly(birthDate), parseDateOnly(refDate))
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid dates.'
    }
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs font-medium text-slate-500 mb-1 block">Date of birth</span>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={today}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-500 mb-1 block">As of date</span>
          <input
            type="date"
            value={refDate}
            onChange={(e) => setRefDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </label>
      </div>
      {result && (
        <>
          <ResultStat label="Age" value={`${result.years}y ${result.months}m ${result.days}d`} />
          <p className="text-sm text-slate-500">{result.totalDays.toLocaleString()} total days</p>
        </>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result ? `${result.years}y ${result.months}m ${result.days}d` : undefined}
        onReset={() => {
          setBirthDate('')
          setRefDate(today)
        }}
      />
    </Card>
  )
}

export function AgeCalculator() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
