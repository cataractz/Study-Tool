import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { evaluateRelativeAccommodation, NRA_NORM, NRA_TOLERANCE, PRA_NORM, PRA_TOLERANCE } from './nraPra.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'nra-pra',
  name: 'NRA / PRA (Relative Accommodation)',
  category: 'Accommodation & Near Vision',
  description: 'Evaluates Negative and Positive Relative Accommodation findings against normal limits and flags likely near-add adjustments.',
  formula: 'Total range = NRA + |PRA|',
  variables: [
    { symbol: 'NRA', meaning: 'Negative relative accommodation — most plus accepted binocularly at near (D)' },
    { symbol: 'PRA', meaning: 'Positive relative accommodation — most minus accepted binocularly at near (D)' },
  ],
  keywords: ['nra', 'pra', 'negative relative accommodation', 'positive relative accommodation', 'relative accommodation', 'near add'],
  boardRelevance: 'High',
  clinicalRelevance: 'Assessing the balance of relative accommodation for a given near correction/add, and flagging when an add adjustment may be indicated.',
  supportsPractice: false,
  convention: `NRA is entered as a positive (plus-lens) value; PRA is entered as a negative (minus-lens) value. Norms (Morgan): NRA = +${NRA_NORM.toFixed(2)} ± ${NRA_TOLERANCE.toFixed(2)} D, PRA = ${PRA_NORM.toFixed(2)} ± ${PRA_TOLERANCE.toFixed(2)} D.`,
  limitations: [
    'Both NRA and PRA must be measured with the same fixed near working distance and correction/add in place — this calculator only interprets already-measured findings, it does not perform the test.',
    'Norm ranges are population averages (Morgan\'s norms); individual clinical context (symptoms, age, add power) should always take precedence over a norm-range flag alone.',
  ],
  references: [
    'Morgan MW. Analysis of clinical data. Am J Optom Arch Am Acad Optom. 1944.',
    'Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.',
  ],
  relatedCalculatorIds: ['accommodation', 'sheards-criterion', 'aca-ratio'],
}

function Calculate() {
  const [nra, setNra] = useState('')
  const [pra, setPra] = useState('')
  const nraN = parseNumeric(nra)
  const praN = parseNumeric(pra)

  let result: ReturnType<typeof evaluateRelativeAccommodation> | null = null
  let error: string | null = null
  if (nraN !== null && praN !== null) {
    try {
      result = evaluateRelativeAccommodation(nraN, praN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Calculation error'
    }
  }

  const trace: CalculationTrace | null =
    result && nraN !== null && praN !== null
      ? {
          formula: 'Total range = NRA + |PRA|',
          substitution: `Total range = ${formatDiopter(nraN)} + |${formatDiopter(praN)}|`,
          steps: [`Total range = ${formatDiopter(nraN)} + ${roundTo(Math.abs(praN), 2)} = ${roundTo(result.totalRange, 2)} D`],
          finalAnswerText: `Total range of relative accommodation = ${roundTo(result.totalRange, 2)} D`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="NRA" unit="D" value={nra} onChange={setNra} placeholder="e.g. 2.00" />
        <NumberField label="PRA" unit="D" value={pra} onChange={setPra} placeholder="e.g. -2.50" error={error ?? undefined} />
      </div>
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultStat label="NRA vs. norm" value={result.nraWithinNorm ? 'Within normal limits' : 'Outside normal limits'} tone={result.nraWithinNorm ? 'brand' : 'slate'} />
            <ResultStat label="PRA vs. norm" value={result.praWithinNorm ? 'Within normal limits' : 'Outside normal limits'} tone={result.praWithinNorm ? 'brand' : 'slate'} />
          </div>
          <ResultStat label="Total range of relative accommodation" value={`${roundTo(result.totalRange, 2)} D`} />
          <p className="text-sm text-slate-600">{result.interpretation}</p>
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `NRA ${formatDiopter(nraN!)} D / PRA ${formatDiopter(praN!)} D — total range ${roundTo(result.totalRange, 2)} D` : undefined}
        onReset={() => {
          setNra('')
          setPra('')
        }}
      />
    </Card>
  )
}

export function NraPra() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
