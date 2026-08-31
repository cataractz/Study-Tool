import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { retinalImageSizeMm, percentAniseikonia, DEFAULT_NODAL_DISTANCE_MM } from './magnification.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'retinal-image-aniseikonia',
  name: 'Retinal Image Size & Aniseikonia',
  category: 'Visual Optics',
  description: 'Estimated retinal image size from object size/distance, and percent aniseikonia between two image sizes.',
  formula: 'Image size = Object size × (nodal distance / object distance)   ·   % aniseikonia = |ΔI| / mean(I) × 100',
  variables: [
    { symbol: 'Image size', meaning: 'Estimated retinal image size (mm)' },
    { symbol: 'Object size', meaning: 'Physical size of the viewed object (mm)' },
    { symbol: 'nodal distance', meaning: "Posterior nodal distance of the reduced schematic eye (mm), default 17 mm" },
    { symbol: 'object distance', meaning: 'Distance from the eye to the object (m)' },
    { symbol: '% aniseikonia', meaning: 'Percent difference in retinal image size between the two eyes' },
    { symbol: 'ΔI', meaning: "Absolute difference between the two eyes' image sizes (|I(OD) − I(OS)|)" },
    { symbol: 'I', meaning: "Retinal image size (or comparable size measure) for one eye; mean(I) is the average of both eyes' values" },
  ],
  keywords: ['retinal image size', 'aniseikonia', 'nodal point', 'image size difference'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating retinal image size for a given object, and quantifying interocular image size difference (aniseikonia).',
  supportsPractice: false,
  convention: `Uses the reduced schematic eye's posterior nodal distance (default ${DEFAULT_NODAL_DISTANCE_MM} mm, adjustable) and the small-angle approximation.`,
  limitations: ['Percent aniseikonia here is defined relative to the MEAN of the two image sizes (a symmetric definition). Some clinical sources instead reference one specific eye — confirm which convention your clinic/device uses when comparing values.'],
}

function ImageSizeTab() {
  const [objectSize, setObjectSize] = useState('')
  const [distance, setDistance] = useState('')
  const [nodal, setNodal] = useState(String(DEFAULT_NODAL_DISTANCE_MM))
  const oN = parseNumeric(objectSize)
  const dN = parseNumeric(distance)
  const nN = parseNumeric(nodal) ?? DEFAULT_NODAL_DISTANCE_MM
  const result = oN !== null && dN !== null && dN !== 0 ? retinalImageSizeMm(oN, dN, nN) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Object size" unit="mm" value={objectSize} onChange={setObjectSize} />
        <NumberField label="Object distance" unit="m" value={distance} onChange={setDistance} />
        <NumberField label="Nodal point distance" unit="mm" value={nodal} onChange={setNodal} />
      </div>
      {result !== null && <ResultStat label="Retinal image size" value={`${roundTo(result, 4)} mm`} />}
    </div>
  )
}

function AniseikoniaTab() {
  const [od, setOd] = useState('')
  const [os, setOs] = useState('')
  const odN = parseNumeric(od)
  const osN = parseNumeric(os)
  let result: number | null = null
  try {
    result = odN !== null && osN !== null ? percentAniseikonia(odN, osN) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Image size OD" value={od} onChange={setOd} />
        <NumberField label="Image size OS" value={os} onChange={setOs} />
      </div>
      {result !== null && <ResultStat label="Aniseikonia" value={`${roundTo(result, 2)}%`} />}
      <p className="text-xs text-slate-400">Values can be retinal image size, magnification percentage, or any consistent size measure for the two eyes.</p>
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'image' | 'aniseikonia'>('image')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('image')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'image' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Retinal Image Size
        </button>
        <button onClick={() => setTab('aniseikonia')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'aniseikonia' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Aniseikonia %
        </button>
      </div>
      {tab === 'image' ? <ImageSizeTab /> : <AniseikoniaTab />}
      <ResultActions onReset={() => setTab('image')} />
    </Card>
  )
}

export function RetinalImageAniseikonia() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
