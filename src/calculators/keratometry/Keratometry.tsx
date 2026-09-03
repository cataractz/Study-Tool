import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { powerFromRadiusMm, radiusFromPowerMm, cornealAstigmatism, DEFAULT_KERATOMETRIC_INDEX } from './keratometry.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'keratometry',
  name: 'Keratometry',
  category: 'Keratometry & Cornea',
  description: 'Convert corneal radius ↔ power, and calculate corneal astigmatism / mean K from two K readings.',
  formula: "F = (n' − 1) × 1000 / r(mm)",
  variables: [
    { symbol: 'F', meaning: 'Corneal power (D)' },
    { symbol: "n'", meaning: "Keratometric index (standard instrument index, unitless; default 1.3375)" },
    { symbol: 'r', meaning: 'Anterior corneal radius of curvature (mm)' },
  ],
  keywords: ['keratometry', 'K readings', 'corneal power', 'corneal astigmatism', 'mean K', 'radius'],
  boardRelevance: 'High',
  clinicalRelevance: 'Contact lens fitting and corneal astigmatism assessment.',
  supportsPractice: true,
  convention: `Uses the standard keratometric index (n' = ${DEFAULT_KERATOMETRIC_INDEX} by default) rather than the true corneal refractive index — this approximates total corneal power from the anterior radius alone. Some instruments use a different index (e.g. 1.3315); adjust if needed.`,
  limitations: [
    'With-the-Rule / Against-the-Rule / Oblique classification here uses a ±20° band around 90°/180° — some texts use ±30°; this is a labeling convention, not a hard clinical boundary.',
  ],
  references: [
    'Bennett ES, Henry VA. Clinical Manual of Contact Lenses, 4th ed. Lippincott Williams & Wilkins.',
    'Elliott DB. Clinical Procedures in Primary Eye Care, 5th ed. Elsevier.',
  ],
}

function RadiusPowerTab() {
  const [radiusMm, setRadiusMm] = useState('')
  const [powerD, setPowerD] = useState('')
  const [index, setIndex] = useState(String(DEFAULT_KERATOMETRIC_INDEX))
  const idxN = parseNumeric(index) ?? DEFAULT_KERATOMETRIC_INDEX

  return (
    <div className="space-y-3">
      <NumberField label="Keratometric index (n')" value={index} onChange={setIndex} />
      <div className="grid grid-cols-2 gap-3">
        <NumberField
          label="Radius of curvature"
          unit="mm"
          value={radiusMm}
          onChange={(v) => {
            setRadiusMm(v)
            const n = parseNumeric(v)
            setPowerD(n !== null && n !== 0 ? roundTo(powerFromRadiusMm(n, idxN), 2).toString() : '')
          }}
        />
        <NumberField
          label="Corneal power"
          unit="D"
          value={powerD}
          onChange={(v) => {
            setPowerD(v)
            const n = parseNumeric(v)
            setRadiusMm(n !== null && n !== 0 ? roundTo(radiusFromPowerMm(n, idxN), 2).toString() : '')
          }}
        />
      </div>
    </div>
  )
}

function AstigmatismTab() {
  const [k1p, setK1p] = useState('')
  const [k1a, setK1a] = useState('')
  const [k2p, setK2p] = useState('')
  const [k2a, setK2a] = useState('')

  const p1 = parseNumeric(k1p)
  const a1 = parseNumeric(k1a)
  const p2 = parseNumeric(k2p)
  const a2 = parseNumeric(k2a)
  const result = p1 !== null && a1 !== null && p2 !== null && a2 !== null ? cornealAstigmatism(p1, a1, p2, a2) : null

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="K1 power" unit="D" value={k1p} onChange={setK1p} />
        <NumberField label="K1 axis" unit="°" value={k1a} onChange={setK1a} />
        <NumberField label="K2 power" unit="D" value={k2p} onChange={setK2p} />
        <NumberField label="K2 axis" unit="°" value={k2a} onChange={setK2a} />
      </div>
      {result !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Corneal astigmatism" value={`${roundTo(result.amount, 2)} D @ ${roundTo(result.steepAxis, 0)}°`} />
          <ResultStat label="Classification" value={result.classification} />
          <ResultStat tone="slate" label="Mean K" value={`${roundTo(result.meanK, 2)} D`} />
          <ResultStat tone="slate" label="Steep / Flat" value={`${roundTo(result.steepMeridianPower, 2)} / ${roundTo(result.flatMeridianPower, 2)} D`} />
        </div>
      )}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'radius' | 'astigmatism'>('radius')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('radius')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'radius' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Radius ↔ Power
        </button>
        <button onClick={() => setTab('astigmatism')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'astigmatism' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          K Readings & Astigmatism
        </button>
      </div>
      {tab === 'radius' ? <RadiusPowerTab /> : <AstigmatismTab />}
      <ResultActions onReset={() => setTab('radius')} />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const radius = difficulty === 'Basic' ? [7.5, 7.8, 8.0][Math.floor(Math.random() * 3)] : difficulty === 'Intermediate' ? [7.2, 7.9, 8.4][Math.floor(Math.random() * 3)] : [6.9, 7.35, 8.65][Math.floor(Math.random() * 3)]
  const power = powerFromRadiusMm(radius)
  return {
    prompt: `Using a keratometric index of ${DEFAULT_KERATOMETRIC_INDEX}, what corneal power corresponds to a radius of curvature of ${radius} mm?`,
    difficulty,
    answers: [{ key: 'p', label: 'Corneal power', unit: 'D', value: power, tolerance: 0.15 }],
    formula: "F = (n' − 1) × 1000 / r(mm)",
    substitution: `F = (${DEFAULT_KERATOMETRIC_INDEX} − 1) × 1000 / ${radius}`,
    steps: [`F = ${(DEFAULT_KERATOMETRIC_INDEX - 1) * 1000} / ${radius}`, `F = ${power.toFixed(2)} D`],
    finalAnswerText: `F = ${power.toFixed(2)} D`,
    why: 'Keratometers estimate corneal power from the anterior radius using a keratometric index that accounts for the (unmeasured) posterior surface.',
  }
}

export function Keratometry() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
