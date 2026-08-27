import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { mgFromMl, totalMgFromWeight, totalDailyDose } from './dose.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'dose-calculator',
  name: 'Dose Calculator',
  category: 'Pharmacology',
  description: 'Convert between mg and mL at a given concentration, weight-based (mg/kg) dosing, and total daily dose.',
  formula: 'mg = mL × concentration (mg/mL);  Total mg = mg/kg × weight;  Daily dose = per-dose mg × frequency',
  keywords: ['dose', 'dosing', 'mg/kg', 'frequency', 'total daily dose'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Basic dose arithmetic for a dose already decided clinically — this does not recommend a dose.',
  supportsPractice: false,
  limitations: ['This performs arithmetic on values you provide; it does not suggest or validate a clinically appropriate dose.'],
}

function VolumeMgTab() {
  const [mL, setML] = useState('')
  const [concentration, setConcentration] = useState('')
  const mLN = parseNumeric(mL)
  const cN = parseNumeric(concentration)
  const mg = mLN !== null && cN !== null ? mgFromMl(mLN, cN) : null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <NumberField label="Volume" unit="mL" value={mL} onChange={setML} />
      <NumberField label="Concentration" unit="mg/mL" value={concentration} onChange={setConcentration} />
      {mg !== null && (
        <div className="sm:col-span-2">
          <ResultStat label="Dose" value={`${roundTo(mg, 2)} mg`} />
        </div>
      )}
    </div>
  )
}

function WeightBasedTab() {
  const [mgPerKg, setMgPerKg] = useState('')
  const [weight, setWeight] = useState('')
  const mgKgN = parseNumeric(mgPerKg)
  const wN = parseNumeric(weight)
  const totalMg = mgKgN !== null && wN !== null ? totalMgFromWeight(mgKgN, wN) : null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <NumberField label="Dose" unit="mg/kg" value={mgPerKg} onChange={setMgPerKg} />
      <NumberField label="Patient weight" unit="kg" value={weight} onChange={setWeight} />
      {totalMg !== null && (
        <div className="sm:col-span-2">
          <ResultStat label="Total dose" value={`${roundTo(totalMg, 2)} mg`} />
        </div>
      )}
    </div>
  )
}

function DailyDoseTab() {
  const [perDose, setPerDose] = useState('')
  const [frequency, setFrequency] = useState('')
  const pN = parseNumeric(perDose)
  const fN = parseNumeric(frequency)
  const total = pN !== null && fN !== null ? totalDailyDose(pN, fN) : null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <NumberField label="Dose per administration" unit="mg" value={perDose} onChange={setPerDose} />
      <NumberField label="Administrations per day" value={frequency} onChange={setFrequency} />
      {total !== null && (
        <div className="sm:col-span-2">
          <ResultStat label="Total daily dose" value={`${roundTo(total, 2)} mg/day`} />
        </div>
      )}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'volume' | 'weight' | 'daily'>('volume')
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['volume', 'mL ↔ mg'],
            ['weight', 'Weight-based (mg/kg)'],
            ['daily', 'Total Daily Dose'],
          ] as const
        ).map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
              (tab === t ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
            }
          >
            {label}
          </button>
        ))}
      </div>
      {tab === 'volume' && <VolumeMgTab />}
      {tab === 'weight' && <WeightBasedTab />}
      {tab === 'daily' && <DailyDoseTab />}
      <ResultActions onReset={() => setTab('volume')} />
    </Card>
  )
}

export function DoseCalculator() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
