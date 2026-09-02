import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import {
  prismFromAssociatedPhoria,
  classifyFixationDisparityMagnitude,
  FIXATION_DISPARITY_CURVE_TYPES,
  type PhoriaDirection,
} from './fixationDisparity.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'fixation-disparity',
  name: 'Fixation Disparity / Associated Phoria',
  category: 'Binocular Vision',
  description: 'Prism to prescribe from a measured associated phoria (direct method), plus reference bands for fixation disparity magnitude and Ogle curve types.',
  formula: 'Rx = Associated phoria (the prism that nulls the fixation disparity)',
  variables: [
    { symbol: 'Associated phoria', meaning: 'Prism (magnitude + base direction) that neutralizes the fixation disparity, e.g. on a Wesson or Saladin card (Δ)' },
    { symbol: 'Fixation disparity', meaning: 'Residual misalignment of the peripheral fusion lock with no neutralizing prism, in minutes of arc' },
  ],
  keywords: [
    'fixation disparity',
    'associated phoria',
    'ogle curve',
    'ogle curve type',
    'wesson card',
    'saladin card',
    'sheedy disparometer',
    'nonius',
    'prism prescribing',
  ],
  boardRelevance: 'Moderate',
  clinicalRelevance:
    'An alternative to Sheard\'s/Percival\'s criteria for deciding whether — and how much — prism to prescribe for a symptomatic heterophoria, using the patient\'s own associated phoria rather than a fusional-reserve calculation.',
  supportsPractice: false,
  convention: 'Base-in neutralizes an exo-direction fixation disparity; base-out neutralizes an eso-direction fixation disparity.',
  limitations: [
    'This is a reference/interpretation tool rather than a single formula: fixation disparity is fundamentally a curve (fixation disparity vs. induced prism) rather than one input-output value, so no practice-problem mode is offered — grading a single "correct answer" would misrepresent how the finding is actually used clinically.',
    'The associated-phoria prism value is itself the direct-method prescription (well-established, going back to Morgan 1949); the fixation-disparity-magnitude band below is a commonly cited working range (~6\' eso / ~8\' exo, allowing for typical measurement error), not a strict diagnostic cutoff — asymptomatic patients have been reported with fixation disparity up to 30\' of arc.',
    'Determining an Ogle curve Type (I-IV) requires measuring fixation disparity across several prism increments and plotting the curve — it cannot be derived from a single associated-phoria or fixation-disparity reading, so curve type is provided here as reference only, not as a computed result.',
  ],
}

function AssociatedPhoriaSection({
  magnitude,
  setMagnitude,
  direction,
  setDirection,
}: {
  magnitude: string
  setMagnitude: (v: string) => void
  direction: PhoriaDirection
  setDirection: (v: PhoriaDirection) => void
}) {
  const magnitudeN = parseNumeric(magnitude)

  let result: ReturnType<typeof prismFromAssociatedPhoria> | null = null
  let error: string | null = null
  try {
    if (magnitudeN !== null) result = prismFromAssociatedPhoria(magnitudeN, direction)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-500">Associated phoria → prism to prescribe</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Associated phoria magnitude" unit="Δ" value={magnitude} onChange={setMagnitude} />
        <SelectField
          label="Direction neutralized"
          value={direction}
          onChange={(v) => setDirection(v as PhoriaDirection)}
          options={[
            { value: 'exo', label: 'Exo (neutralized by base-in)' },
            { value: 'eso', label: 'Eso (neutralized by base-out)' },
          ]}
        />
      </div>
      {result !== null && <ResultStat label="Prism to prescribe" value={`${roundTo(result.rxMagnitude, 2)} Δ ${result.baseDirection}`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function MagnitudeSection({
  magnitude,
  setMagnitude,
  direction,
  setDirection,
}: {
  magnitude: string
  setMagnitude: (v: string) => void
  direction: PhoriaDirection
  setDirection: (v: PhoriaDirection) => void
}) {
  const magnitudeN = parseNumeric(magnitude)

  let result: ReturnType<typeof classifyFixationDisparityMagnitude> | null = null
  let error: string | null = null
  try {
    if (magnitudeN !== null) result = classifyFixationDisparityMagnitude(magnitudeN, direction)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <div className="space-y-3 pt-3 border-t border-slate-100">
      <p className="text-xs font-semibold text-slate-500">Fixation disparity magnitude (reference band)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Fixation disparity" unit="arcmin" value={magnitude} onChange={setMagnitude} />
        <SelectField
          label="Direction"
          value={direction}
          onChange={(v) => setDirection(v as PhoriaDirection)}
          options={[
            { value: 'exo', label: 'Exo' },
            { value: 'eso', label: 'Eso' },
          ]}
        />
      </div>
      {result !== null && (
        <ResultStat
          label={`Vs. typical range (≤ ${result.limitArcmin}′)`}
          value={result.withinTypicalRange ? 'Within typical range' : 'Elevated for this direction'}
          tone={result.withinTypicalRange ? 'brand' : 'slate'}
        />
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

function OgleReference() {
  return (
    <div className="space-y-2 pt-3 border-t border-slate-100">
      <p className="text-xs font-semibold text-slate-500">Ogle curve types (reference — not computed from the inputs above)</p>
      <dl className="space-y-1.5">
        {FIXATION_DISPARITY_CURVE_TYPES.map((t) => (
          <div key={t.type} className="text-sm">
            <dt className="font-semibold text-slate-700 inline">{t.type}: </dt>
            <dd className="text-slate-600 inline">{t.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Calculate() {
  const [apMagnitude, setApMagnitude] = useState('')
  const [apDirection, setApDirection] = useState<PhoriaDirection>('exo')
  const [fdMagnitude, setFdMagnitude] = useState('')
  const [fdDirection, setFdDirection] = useState<PhoriaDirection>('exo')

  const apMagnitudeN = parseNumeric(apMagnitude)
  let apResult: ReturnType<typeof prismFromAssociatedPhoria> | null = null
  try {
    if (apMagnitudeN !== null) apResult = prismFromAssociatedPhoria(apMagnitudeN, apDirection)
  } catch {
    apResult = null
  }

  return (
    <Card className="space-y-2">
      <AssociatedPhoriaSection magnitude={apMagnitude} setMagnitude={setApMagnitude} direction={apDirection} setDirection={setApDirection} />
      <MagnitudeSection magnitude={fdMagnitude} setMagnitude={setFdMagnitude} direction={fdDirection} setDirection={setFdDirection} />
      <OgleReference />
      <ResultActions
        copyText={apResult !== null ? `Rx: ${roundTo(apResult.rxMagnitude, 2)} Δ ${apResult.baseDirection}` : undefined}
        onReset={() => {
          setApMagnitude('')
          setApDirection('exo')
          setFdMagnitude('')
          setFdDirection('exo')
        }}
      />
    </Card>
  )
}

export function FixationDisparity() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
