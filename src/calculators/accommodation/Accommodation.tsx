import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import {
  distanceCmToDiopters,
  diopterToDistanceCm,
  amplitudeFromNearPoint,
  nearPointFromAmplitude,
  estimatedAddHalfAmplitudeRule,
} from './accommodation.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'accommodation',
  name: 'Working Distance, Accommodative Demand & Amplitude',
  category: 'Accommodation & Near Vision',
  description: 'Convert between working distance and diopters, between near point and amplitude of accommodation, and estimate a near add (rule of thumb).',
  formula: 'D = 1/d(m)   ·   AA = 1/NPA(m) − 1/FPA(m)   ·   Add ≈ Demand − AA/2 (rule of thumb)',
  variables: [
    { symbol: 'D', meaning: 'Accommodative demand (D)' },
    { symbol: 'd', meaning: 'Working distance (m)' },
    { symbol: 'AA', meaning: 'Amplitude of accommodation (D)' },
    { symbol: 'NPA', meaning: 'Near point of accommodation, distance from eye (m)' },
    { symbol: 'FPA', meaning: 'Far point of accommodation, distance from eye (m); 0 D (infinity) if corrected for distance' },
    { symbol: 'Add', meaning: 'Estimated near addition power (D)' },
    { symbol: 'Demand', meaning: 'Accommodative demand of the near task (D) — same quantity as D' },
  ],
  keywords: ['working distance', 'accommodative demand', 'amplitude of accommodation', 'near point', 'near add', 'reading add'],
  boardRelevance: 'High',
  clinicalRelevance: 'Estimating accommodative demand for a task, and assessing accommodative amplitude relative to age-expected norms.',
  supportsPractice: true,
  convention: 'Distances in cm unless noted. When the far point is left blank, it is assumed to be at optical infinity (0 D) — i.e. the eye is corrected for distance.',
}

function WorkingDistanceTab() {
  const [distanceCm, setDistanceCm] = useState('')
  const [diopters, setDiopters] = useState('')

  return (
    <div className="grid grid-cols-2 gap-3">
      <NumberField
        label="Working distance"
        unit="cm"
        value={distanceCm}
        onChange={(v) => {
          setDistanceCm(v)
          const n = parseNumeric(v)
          setDiopters(n !== null && n !== 0 ? roundTo(distanceCmToDiopters(n), 2).toString() : '')
        }}
      />
      <NumberField
        label="Accommodative demand"
        unit="D"
        value={diopters}
        onChange={(v) => {
          setDiopters(v)
          const n = parseNumeric(v)
          setDistanceCm(n !== null && n !== 0 ? roundTo(diopterToDistanceCm(n), 2).toString() : '')
        }}
      />
    </div>
  )
}

function AmplitudeTab() {
  const [nearPointCm, setNearPointCm] = useState('')
  const [farPointCm, setFarPointCm] = useState('')
  const [amplitude, setAmplitude] = useState('')

  const npN = parseNumeric(nearPointCm)
  const fpN = parseNumeric(farPointCm)
  const ampFromNP = npN !== null && npN !== 0 ? amplitudeFromNearPoint(npN, fpN) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Near point" unit="cm" value={nearPointCm} onChange={setNearPointCm} />
        <NumberField label="Far point (blank = infinity)" unit="cm" value={farPointCm} onChange={setFarPointCm} />
      </div>
      {ampFromNP !== null && <ResultStat label="Amplitude of accommodation" value={`${roundTo(ampFromNP, 2)} D`} />}
      <div className="pt-2 border-t border-slate-100">
        <NumberField
          label="Or: enter amplitude directly to find near point"
          unit="D"
          value={amplitude}
          onChange={setAmplitude}
        />
        {(() => {
          const aN = parseNumeric(amplitude)
          if (aN === null) return null
          try {
            const np = nearPointFromAmplitude(aN, fpN)
            return <ResultStat label="Near point" value={`${roundTo(np, 2)} cm`} />
          } catch {
            return null
          }
        })()}
      </div>
    </div>
  )
}

function NearAddTab() {
  const [demand, setDemand] = useState('')
  const [amplitude, setAmplitude] = useState('')
  const d = parseNumeric(demand)
  const a = parseNumeric(amplitude)
  const result = d !== null && a !== null ? estimatedAddHalfAmplitudeRule(d, a) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Accommodative demand" unit="D" value={demand} onChange={setDemand} />
        <NumberField label="Amplitude of accommodation" unit="D" value={amplitude} onChange={setAmplitude} />
      </div>
      {result !== null && <ResultStat label="Estimated add (rule of thumb)" value={`+${roundTo(result, 2)} D`} />}
      <p className="text-xs text-slate-500">
        RULE OF THUMB — keeps roughly half the amplitude of accommodation in reserve for comfortable sustained near
        work. This is one common estimation approach, not a universal formula; always refine by patient response.
      </p>
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'demand' | 'amplitude' | 'add'>('demand')
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['demand', 'Working Distance ↔ Demand'],
            ['amplitude', 'Amplitude of Accommodation'],
            ['add', 'Estimated Near Add'],
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
      {tab === 'demand' && <WorkingDistanceTab />}
      {tab === 'amplitude' && <AmplitudeTab />}
      {tab === 'add' && <NearAddTab />}
      <ResultActions onReset={() => setTab('demand')} />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const distanceCm = difficulty === 'Basic' ? [25, 40, 50][Math.floor(Math.random() * 3)] : difficulty === 'Intermediate' ? [33, 20, 16.7][Math.floor(Math.random() * 3)] : [14.3, 28.6, 22.2][Math.floor(Math.random() * 3)]
  const demand = distanceCmToDiopters(distanceCm)
  return {
    prompt: `A patient reads at a working distance of ${distanceCm} cm. What is the accommodative demand?`,
    difficulty,
    answers: [{ key: 'd', label: 'Accommodative demand', unit: 'D', value: demand, tolerance: 0.1 }],
    formula: 'D = 1 / d(m)',
    substitution: `D = 100 / ${distanceCm} cm`,
    steps: [`D = 100 / ${distanceCm} = ${demand.toFixed(2)} D`],
    finalAnswerText: `${demand.toFixed(2)} D`,
    why: 'Accommodative demand equals the reciprocal of working distance in meters, i.e. the vergence of light diverging from the near object.',
  }
}

export function Accommodation() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
