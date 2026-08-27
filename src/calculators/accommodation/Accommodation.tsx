import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { distanceCmToDiopters, diopterToDistanceCm, amplitudeFromNearPoint, nearPointFromAmplitude } from './accommodation.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'accommodation',
  name: 'Working Distance, Accommodative Demand & Amplitude',
  category: 'Accommodation & Near Vision',
  description: 'Convert between working distance and diopters, and between near point and amplitude of accommodation.',
  formula: 'D = 1/d(m)   ·   AA = 1/NPA(m) − 1/FPA(m)',
  keywords: ['working distance', 'accommodative demand', 'amplitude of accommodation', 'near point'],
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

function Calculate() {
  const [tab, setTab] = useState<'demand' | 'amplitude'>('demand')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        {(['demand', 'amplitude'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
              (tab === t ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
            }
          >
            {t === 'demand' ? 'Working Distance ↔ Demand' : 'Amplitude of Accommodation'}
          </button>
        ))}
      </div>
      {tab === 'demand' ? <WorkingDistanceTab /> : <AmplitudeTab />}
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
