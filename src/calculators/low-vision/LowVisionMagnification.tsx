import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { magnificationRequired, relativeDistanceMagnification, relativeSizeMagnification } from './lowVision.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'low-vision-magnification',
  name: 'Low Vision Magnification (Required / RDM / RSM)',
  category: 'Low Vision',
  description: 'Magnification required to reach a target acuity, relative distance magnification, and relative size magnification.',
  formula: 'M required = decimal(target) / decimal(current)   ·   RDM = ref. distance / new distance   ·   RSM = new size / reference size',
  variables: [
    { symbol: 'M required', meaning: 'Magnification needed to go from the current acuity to the target acuity (×)' },
    { symbol: 'decimal(target)', meaning: 'Target Snellen acuity expressed as a decimal (e.g. 20/40 → 0.5)' },
    { symbol: 'decimal(current)', meaning: 'Current Snellen acuity expressed as a decimal' },
    { symbol: 'RDM', meaning: 'Relative distance magnification (×)' },
    { symbol: 'ref. distance', meaning: 'Reference (habitual) viewing distance (cm), default 40 cm' },
    { symbol: 'new distance', meaning: 'New, closer viewing distance (cm)' },
    { symbol: 'RSM', meaning: 'Relative size magnification (×)' },
    { symbol: 'new size', meaning: 'Enlarged print/object size' },
    { symbol: 'reference size', meaning: 'Original (standard) print/object size, same units as new size' },
  ],
  keywords: ['magnification required', 'relative distance magnification', 'RDM', 'relative size magnification', 'RSM', 'low vision'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating the magnification needed for a low-vision task, and how much moving closer or enlarging material contributes.',
  supportsPractice: false,
}

function MagRequiredTab() {
  const [currentNum, setCurrentNum] = useState('20')
  const [currentDenom, setCurrentDenom] = useState('')
  const [targetNum, setTargetNum] = useState('20')
  const [targetDenom, setTargetDenom] = useState('')
  const cn = parseNumeric(currentNum)
  const cd = parseNumeric(currentDenom)
  const tn = parseNumeric(targetNum)
  const td = parseNumeric(targetDenom)
  let result: number | null = null
  try {
    result = cn !== null && cd !== null && tn !== null && td !== null ? magnificationRequired(cn, cd, tn, td) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Current acuity — numerator" value={currentNum} onChange={setCurrentNum} />
        <NumberField label="Current acuity — denominator" value={currentDenom} onChange={setCurrentDenom} placeholder="e.g. 200" />
        <NumberField label="Target acuity — numerator" value={targetNum} onChange={setTargetNum} />
        <NumberField label="Target acuity — denominator" value={targetDenom} onChange={setTargetDenom} placeholder="e.g. 40" />
      </div>
      {result !== null && <ResultStat label="Magnification required" value={`${roundTo(result, 2)}×`} />}
    </div>
  )
}

function RDMTab() {
  const [refDist, setRefDist] = useState('40')
  const [newDist, setNewDist] = useState('')
  const r = parseNumeric(refDist)
  const n = parseNumeric(newDist)
  let result: number | null = null
  try {
    result = r !== null && n !== null ? relativeDistanceMagnification(r, n) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Reference distance" unit="cm" value={refDist} onChange={setRefDist} />
        <NumberField label="New viewing distance" unit="cm" value={newDist} onChange={setNewDist} />
      </div>
      {result !== null && <ResultStat label="Relative distance magnification" value={`${roundTo(result, 2)}×`} />}
      <p className="text-xs text-slate-400">Reference distance defaults to 40 cm, a common near-task reference — adjust to match your reference material.</p>
    </div>
  )
}

function RSMTab() {
  const [newSize, setNewSize] = useState('')
  const [refSize, setRefSize] = useState('')
  const n = parseNumeric(newSize)
  const r = parseNumeric(refSize)
  let result: number | null = null
  try {
    result = n !== null && r !== null ? relativeSizeMagnification(n, r) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Enlarged print/object size" value={newSize} onChange={setNewSize} />
        <NumberField label="Reference (standard) size" value={refSize} onChange={setRefSize} />
      </div>
      {result !== null && <ResultStat label="Relative size magnification" value={`${roundTo(result, 2)}×`} />}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'required' | 'rdm' | 'rsm'>('required')
  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ['required', 'Magnification Required'],
            ['rdm', 'RDM'],
            ['rsm', 'RSM'],
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
      {tab === 'required' && <MagRequiredTab />}
      {tab === 'rdm' && <RDMTab />}
      {tab === 'rsm' && <RSMTab />}
      <ResultActions onReset={() => setTab('required')} />
    </Card>
  )
}

export function LowVisionMagnification() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
