import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { illuminanceFromIntensity, illuminanceFromFlux } from './photometry.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'photometry',
  name: 'Photometry — Illuminance',
  category: 'Physical Optics',
  description: 'Illuminance from a point source (inverse square law) or from luminous flux spread over an area.',
  formula: 'E = I / d²   ·   E = Φ / Area',
  variables: [
    { symbol: 'E', meaning: 'Illuminance (lux)' },
    { symbol: 'I', meaning: 'Luminous intensity of the point source (candela)' },
    { symbol: 'd', meaning: 'Distance from the source (m)' },
    { symbol: 'Φ', meaning: 'Luminous flux (lumens)' },
    { symbol: 'Area', meaning: 'Illuminated surface area (m²)' },
  ],
  keywords: ['photometry', 'lumens', 'lux', 'candela', 'illuminance', 'inverse square law'],
  boardRelevance: 'Low',
  clinicalRelevance: 'Relating light source intensity/output to the illuminance actually reaching a surface, e.g. exam room or task lighting.',
  supportsPractice: false,
  limitations: ['Photometric quantities (lumens, lux, candela) only — converting to/from radiometric quantities (watts) depends on the eye\'s wavelength-dependent photopic luminosity function, not a fixed constant, so that conversion is not included here.'],
}

function InverseSquareTab() {
  const [intensity, setIntensity] = useState('')
  const [distance, setDistance] = useState('')
  const i = parseNumeric(intensity)
  const d = parseNumeric(distance)
  let result: number | null = null
  try {
    result = i !== null && d !== null ? illuminanceFromIntensity(i, d) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Luminous intensity" unit="cd" value={intensity} onChange={setIntensity} />
        <NumberField label="Distance" unit="m" value={distance} onChange={setDistance} />
      </div>
      {result !== null && <ResultStat label="Illuminance" value={`${roundTo(result, 2)} lux`} />}
    </div>
  )
}

function FluxAreaTab() {
  const [flux, setFlux] = useState('')
  const [area, setArea] = useState('')
  const f = parseNumeric(flux)
  const a = parseNumeric(area)
  let result: number | null = null
  try {
    result = f !== null && a !== null ? illuminanceFromFlux(f, a) : null
  } catch {
    result = null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Luminous flux" unit="lumens" value={flux} onChange={setFlux} />
        <NumberField label="Area" unit="m²" value={area} onChange={setArea} />
      </div>
      {result !== null && <ResultStat label="Illuminance" value={`${roundTo(result, 2)} lux`} />}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'inverse' | 'flux'>('inverse')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('inverse')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'inverse' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          From Point Source (Inverse Square)
        </button>
        <button onClick={() => setTab('flux')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'flux' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          From Flux &amp; Area
        </button>
      </div>
      {tab === 'inverse' ? <InverseSquareTab /> : <FluxAreaTab />}
      <ResultActions onReset={() => setTab('inverse')} />
    </Card>
  )
}

export function Photometry() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
