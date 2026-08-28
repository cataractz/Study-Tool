import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { lensThickness, lensWeightGrams, COMMON_LENS_DENSITIES } from './lensThicknessWeight.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'lens-thickness-weight',
  name: 'Lens Thickness & Weight',
  category: 'Ophthalmic Optics',
  description: 'Estimated center/edge thickness difference for a lens power and diameter, and approximate lens weight by material.',
  formula: 'Δt ≈ d²|F| / (8000(n−1))   ·   Weight ≈ Volume × Density',
  keywords: ['lens thickness', 'edge thickness', 'center thickness', 'lens weight', 'lens wedge', 'material density'],
  boardRelevance: 'Low',
  clinicalRelevance: 'Estimating how thick/heavy a finished spectacle lens will be — useful for material selection counseling, especially for high-power Rx.',
  supportsPractice: false,
  convention: 'Treats the lens as a single surface of the given power and a uniform average thickness — a standard dispensing approximation, not an exact lab edging calculation. "Lens wedge" (a machined thickness taper) has no single standard formula and is not separately calculated here.',
  limitations: ['Real lenses split power between front and back curves and are not perfectly flat discs, so actual thickness/weight can differ from this estimate — use it as a planning estimate, not a lab specification.'],
}

function ThicknessTab() {
  const [diameter, setDiameter] = useState('65')
  const [power, setPower] = useState('')
  const [index, setIndex] = useState('1.498')
  const [specifiedThickness, setSpecifiedThickness] = useState('1.0')

  const d = parseNumeric(diameter)
  const p = parseNumeric(power)
  const n = parseNumeric(index)
  const t = parseNumeric(specifiedThickness)
  let result: ReturnType<typeof lensThickness> | null = null
  let error: string | null = null
  try {
    result = d !== null && p !== null && n !== null && t !== null ? lensThickness(d, p, n, t) : null
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Lens diameter" unit="mm" value={diameter} onChange={setDiameter} />
        <NumberField label="Lens power" unit="D" value={power} onChange={setPower} />
        <NumberField label="Refractive index" value={index} onChange={setIndex} />
        <NumberField
          label={p !== null && p < 0 ? 'Minimum center thickness' : 'Minimum edge thickness'}
          unit="mm"
          value={specifiedThickness}
          onChange={setSpecifiedThickness}
        />
      </div>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ResultStat tone="slate" label="Thickness difference" value={`${roundTo(result.thicknessDifferenceMm, 2)} mm`} />
          <ResultStat label="Center thickness" value={`${roundTo(result.centerThicknessMm, 2)} mm`} />
          <ResultStat label="Edge thickness" value={`${roundTo(result.edgeThicknessMm, 2)} mm`} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function WeightTab() {
  const [diameter, setDiameter] = useState('65')
  const [avgThickness, setAvgThickness] = useState('')
  const [materialIndex, setMaterialIndex] = useState('0')

  const d = parseNumeric(diameter)
  const t = parseNumeric(avgThickness)
  const material = COMMON_LENS_DENSITIES[Number(materialIndex)]
  const result = d !== null && t !== null ? lensWeightGrams(d, t, material.density) : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Lens diameter" unit="mm" value={diameter} onChange={setDiameter} />
        <NumberField label="Average thickness" unit="mm" value={avgThickness} onChange={setAvgThickness} />
      </div>
      <SelectField
        label="Material"
        value={materialIndex}
        onChange={setMaterialIndex}
        options={COMMON_LENS_DENSITIES.map((m, i) => ({ value: String(i), label: `${m.material} — ${m.density} g/cm³` }))}
      />
      {result !== null && <ResultStat label="Estimated weight" value={`${roundTo(result, 2)} g`} />}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'thickness' | 'weight'>('thickness')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('thickness')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'thickness' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Thickness
        </button>
        <button onClick={() => setTab('weight')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'weight' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Weight
        </button>
      </div>
      {tab === 'thickness' ? <ThicknessTab /> : <WeightTab />}
      <ResultActions onReset={() => setTab('thickness')} />
    </Card>
  )
}

export function LensThicknessWeight() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
