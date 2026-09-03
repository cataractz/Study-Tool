import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { gratingToCPD, acuityToApproxMaxCPD, APPROX_CPD_CONSTANT } from './spatialFrequencyCPD.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'spatial-frequency-cpd',
  name: 'Spatial Frequency (cycles/degree)',
  category: 'Visual Acuity',
  description: 'Converts a grating stimulus (cycle width + viewing distance) to spatial frequency in cycles per degree using exact geometry, and estimates the approximate maximum resolvable spatial frequency from a measured MAR (a disclosed rule of thumb).',
  formula: 'cpd = 1 / [2 × atan(w / 2d) × (180/π)]   ·   cpd_max ≈ 30 / MAR(arcmin)',
  variables: [
    { symbol: 'cpd', meaning: 'Spatial frequency (cycles per degree of visual angle)' },
    { symbol: 'w', meaning: 'Grating cycle width — one full light+dark stripe pair, same unit as d' },
    { symbol: 'd', meaning: 'Viewing distance, same unit as w' },
    { symbol: 'cpd_max', meaning: 'Approximate maximum resolvable spatial frequency (rule of thumb, not exact)' },
    { symbol: 'MAR', meaning: 'Minimum angle of resolution (arcmin)' },
  ],
  keywords: ['spatial frequency', 'cycles per degree', 'cpd', 'grating acuity', 'contrast sensitivity', 'Nyquist', 'MAR'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Relating grating-based stimuli (e.g. contrast sensitivity gratings) to spatial frequency, and roughly estimating the resolution limit implied by a measured letter acuity.',
  supportsPractice: false,
  convention: 'Grating-to-cpd (part a) uses exact arctan geometry and is not an approximation. Acuity-to-cpd (part b) is an empirical rule of thumb relating letter (recognition) acuity to grating (detection) acuity — the two are measured differently and do not convert exactly.',
  limitations: [
    `The acuity-to-cpd estimate uses cpd_max ≈ ${APPROX_CPD_CONSTANT} / MAR(arcmin), anchored to the common reference point that 20/20 acuity (MAR = 1 arcmin) corresponds to a grating resolution limit of roughly 30 cycles/degree.`,
    'This constant is not universal — published sources report a range of values (commonly cited constants run from roughly 30 to 60 depending on the study and stimulus type) because letter recognition and grating detection are different visual tasks with different underlying limits. Treat this result as an order-of-magnitude estimate, not a measured value.',
  ],
  references: [
    'Approximate relationship between minimum angle of resolution and grating spatial-frequency cutoff, commonly cited in vision-science teaching materials as cpd ≈ 30/MAR(arcmin), anchored to the 20/20 = 1 arcmin MAR reference point.',
  ],
  relatedCalculatorIds: ['visual-angle-mar', 'visual-acuity-converter'],
}

function GratingTab() {
  const [cycleWidth, setCycleWidth] = useState('')
  const [distance, setDistance] = useState('')

  const wN = parseNumeric(cycleWidth)
  const dN = parseNumeric(distance)

  let result: number | null = null
  let error: string | null = null
  if (wN !== null && dN !== null) {
    try {
      result = gratingToCPD(wN, dN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result !== null && wN !== null && dN !== null
      ? {
          formula: 'cpd = 1 / [2 × atan(w / 2d) × (180/π)]',
          substitution: `cpd = 1 / [2 × atan(${wN} / (2 × ${dN})) × (180/π)]`,
          steps: [`cpd = ${roundTo(result, 3)}`],
          finalAnswerText: `Spatial frequency ≈ ${roundTo(result, 3)} cycles/degree`,
        }
      : null

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Grating cycle width" value={cycleWidth} onChange={setCycleWidth} placeholder="e.g. 5 (mm)" />
        <NumberField label="Viewing distance" value={distance} onChange={setDistance} placeholder="e.g. 3000 (mm) — same unit" error={error ?? undefined} />
      </div>
      <p className="text-xs text-slate-400">Enter cycle width and distance in the same unit (e.g. both mm).</p>
      {result !== null && <ResultStat label="Spatial frequency" value={`${roundTo(result, 3)} cpd`} />}
      {trace && <CalculationStepsCard trace={trace} />}
    </div>
  )
}

function AcuityTab() {
  const [mar, setMar] = useState('')
  const marN = parseNumeric(mar)

  let result: number | null = null
  let error: string | null = null
  if (marN !== null) {
    try {
      result = acuityToApproxMaxCPD(marN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result !== null && marN !== null
      ? {
          formula: `cpd_max ≈ ${APPROX_CPD_CONSTANT} / MAR(arcmin)`,
          substitution: `cpd_max ≈ ${APPROX_CPD_CONSTANT} / ${marN}`,
          steps: [`cpd_max ≈ ${roundTo(result, 2)}`],
          finalAnswerText: `Approximate max resolvable spatial frequency ≈ ${roundTo(result, 2)} cpd`,
        }
      : null

  return (
    <div className="space-y-3">
      <NumberField label="Minimum angle of resolution (MAR)" unit="arcmin" value={mar} onChange={setMar} placeholder="e.g. 1 (20/20)" error={error ?? undefined} />
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
        <p className="text-xs font-medium text-amber-700">Rule of thumb — approximation only, not a measured value</p>
      </div>
      {result !== null && <ResultStat label="Approximate max resolvable spatial frequency" value={`${roundTo(result, 2)} cpd`} />}
      {trace && <CalculationStepsCard trace={trace} />}
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'grating' | 'acuity'>('grating')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('grating')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'grating' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Grating → cpd (exact)
        </button>
        <button onClick={() => setTab('acuity')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'acuity' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Acuity → approx. max cpd
        </button>
      </div>
      {tab === 'grating' ? <GratingTab /> : <AcuityTab />}
      <ResultActions onReset={() => setTab('grating')} />
    </Card>
  )
}

export function SpatialFrequencyCPD() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
