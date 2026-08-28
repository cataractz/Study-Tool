import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric } from '../shared/format'
import { parseDateOnly, daysBetween, addDays, addMonths, formatDateOnly } from './dateCalculations.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'date-followup-calculator',
  name: 'Date & Follow-Up Calculator',
  category: 'Clinical Utilities',
  description: 'Days between two dates, or a follow-up/recall date a given interval from a start date.',
  formula: 'Days between = end date − start date  ·  Follow-up date = start date + interval',
  keywords: ['follow-up', 'recall', 'days between dates', 'medication duration', 'recall interval'],
  boardRelevance: 'Low',
  clinicalRelevance: 'Scheduling follow-up/recall visits and estimating medication supply end dates.',
  supportsPractice: false,
}

function DaysBetweenTab() {
  const today = formatDateOnly(new Date())
  const [start, setStart] = useState(today)
  const [end, setEnd] = useState('')
  let result: number | null = null
  if (start && end) {
    try {
      result = daysBetween(parseDateOnly(start), parseDateOnly(end))
    } catch {
      result = null
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs font-medium text-slate-500 mb-1 block">Start date</span>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-500 mb-1 block">End date</span>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </label>
      </div>
      {result !== null && <ResultStat label="Days between" value={`${result} days`} />}
    </div>
  )
}

function AddIntervalTab() {
  const today = formatDateOnly(new Date())
  const [start, setStart] = useState(today)
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState<'days' | 'weeks' | 'months'>('weeks')
  const amountN = parseNumeric(amount)

  let resultDate: string | null = null
  if (start && amountN !== null) {
    const base = parseDateOnly(start)
    const result = unit === 'months' ? addMonths(base, amountN) : addDays(base, unit === 'weeks' ? amountN * 7 : amountN)
    resultDate = formatDateOnly(result)
  }

  return (
    <div className="space-y-3">
      <label className="block">
        <span className="text-xs font-medium text-slate-500 mb-1 block">Start date</span>
        <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
      </label>
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Interval" value={amount} onChange={setAmount} />
        <SelectField
          label="Unit"
          value={unit}
          onChange={(v) => setUnit(v as typeof unit)}
          options={[
            { value: 'days', label: 'Days' },
            { value: 'weeks', label: 'Weeks' },
            { value: 'months', label: 'Months' },
          ]}
        />
      </div>
      {resultDate && <ResultStat label="Resulting date" value={resultDate} />}
      <p className="text-xs text-slate-400">Use this for a follow-up/recall date, or an estimated medication-supply end date.</p>
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'between' | 'add'>('add')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('add')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'add' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Add Interval to Date
        </button>
        <button onClick={() => setTab('between')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'between' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Days Between Dates
        </button>
      </div>
      {tab === 'add' ? <AddIntervalTab /> : <DaysBetweenTab />}
      <ResultActions onReset={() => setTab('add')} />
    </Card>
  )
}

export function DateFollowUpCalculator() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
