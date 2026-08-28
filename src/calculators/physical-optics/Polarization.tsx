import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { malusLaw, brewstersAngleDegrees } from './polarization.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'polarization',
  name: 'Polarization — Malus\'s Law & Brewster\'s Angle',
  category: 'Physical Optics',
  description: "Transmitted intensity through a polarizer/analyzer, and the angle at which reflected light is fully polarized.",
  formula: 'I = I₀cos²(θ)   ·   θ_Brewster = arctan(n₂/n₁)',
  keywords: ['polarization', "malus's law", 'brewster angle', 'polarizer', 'analyzer', 'polarized sunglasses'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Explains polarized lens glare reduction and why glare off water/glass is strongly polarized near Brewster\'s angle.',
  supportsPractice: false,
}

function MalusTab() {
  const [intensity, setIntensity] = useState('100')
  const [angle, setAngle] = useState('')
  const i = parseNumeric(intensity)
  const a = parseNumeric(angle)
  const result = i !== null && a !== null ? malusLaw(i, a) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Incident intensity" value={intensity} onChange={setIntensity} />
        <NumberField label="Angle between axes" unit="°" value={angle} onChange={setAngle} />
      </div>
      {result !== null && <ResultStat label="Transmitted intensity" value={roundTo(result, 2).toString()} />}
    </div>
  )
}

function BrewsterTab() {
  const [n1, setN1] = useState('1.0')
  const [n2, setN2] = useState('')
  const n1N = parseNumeric(n1)
  const n2N = parseNumeric(n2)
  const result = n1N !== null && n2N !== null ? brewstersAngleDegrees(n1N, n2N) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="n₁ (incident medium)" value={n1} onChange={setN1} />
        <NumberField label="n₂ (second medium)" value={n2} onChange={setN2} placeholder="e.g. 1.33 (water)" />
      </div>
      {result !== null && <ResultStat label="Brewster's angle" value={`${roundTo(result, 1)}°`} />}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'malus' | 'brewster'>('malus')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('malus')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'malus' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Malus's Law
        </button>
        <button onClick={() => setTab('brewster')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'brewster' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Brewster's Angle
        </button>
      </div>
      {tab === 'malus' ? <MalusTab /> : <BrewsterTab />}
      <ResultActions onReset={() => setTab('malus')} />
    </Card>
  )
}

export function Polarization() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
