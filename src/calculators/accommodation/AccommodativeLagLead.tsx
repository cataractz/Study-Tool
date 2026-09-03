import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { evaluateAccommodativeLagLead, LAG_NORM_LOW, LAG_NORM_HIGH } from './accommodativeLagLead.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'accommodative-lag-lead',
  name: 'Accommodative Lag / Lead',
  category: 'Accommodation & Near Vision',
  description: 'Compares the measured accommodative response (MEM/Nott dynamic retinoscopy) to the accommodative demand of a near task, and classifies lag vs. lead against normal limits.',
  formula: 'Lag = Demand − Response',
  variables: [
    { symbol: 'Demand', meaning: 'Accommodative demand of the near task (D)' },
    { symbol: 'Response', meaning: 'Measured accommodative response, e.g. via MEM or Nott dynamic retinoscopy (D)' },
    { symbol: 'Lag', meaning: 'Positive = lag (under-accommodation); negative = lead (over-accommodation)' },
  ],
  keywords: ['accommodative lag', 'accommodative lead', 'mem retinoscopy', 'nott retinoscopy', 'dynamic retinoscopy', 'accommodative response'],
  boardRelevance: 'High',
  clinicalRelevance: 'Interpreting MEM or Nott dynamic retinoscopy findings to assess whether accommodative response matches near demand, and flagging accommodative excess or insufficiency.',
  supportsPractice: false,
  convention: `Lag = Demand − Response. A positive value is termed "lag" (the common, expected finding); a negative value is termed "lead". Normal MEM lag range: +${LAG_NORM_LOW.toFixed(2)} D to +${LAG_NORM_HIGH.toFixed(2)} D.`,
  limitations: [
    'This calculator interprets an already-measured response; it does not perform MEM or Nott dynamic retinoscopy.',
    'MEM lag norms are population averages; individual clinical context (symptoms, age, refractive status) should always take precedence over a norm-range flag alone.',
  ],
  references: [
    'Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.',
    'Rouse MW, London R, Allen DC. An evaluation of the monocular estimate method of dynamic retinoscopy. Am J Optom Physiol Opt. 1982.',
  ],
  relatedCalculatorIds: ['accommodation', 'nra-pra'],
  relatedExamTechniqueIds: ['mem-retinoscopy', 'nott-dynamic-retinoscopy'],
  relatedDiseaseIds: ['accommodative-dysfunction'],
}

function Calculate() {
  const [demand, setDemand] = useState('')
  const [response, setResponse] = useState('')
  const demandN = parseNumeric(demand)
  const responseN = parseNumeric(response)
  const result = demandN !== null && responseN !== null ? evaluateAccommodativeLagLead(demandN, responseN) : null

  const trace: CalculationTrace | null =
    result && demandN !== null && responseN !== null
      ? {
          formula: 'Lag = Demand − Response',
          substitution: `Lag = ${formatDiopter(demandN)} − (${formatDiopter(responseN)})`,
          steps: [`Lag = ${roundTo(demandN - responseN, 2)} D`],
          finalAnswerText: `Lag = ${formatDiopter(result.lag)} D (${result.classification === 'none' ? 'no lag/lead' : result.classification})`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Accommodative demand" unit="D" value={demand} onChange={setDemand} placeholder="e.g. 2.50" />
        <NumberField label="Measured response" unit="D" value={response} onChange={setResponse} placeholder="e.g. 2.00" />
      </div>
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultStat label="Lag / Lead" value={`${formatDiopter(result.lag)} D`} />
            <ResultStat
              label="Classification"
              value={result.classification === 'none' ? 'No lag or lead' : result.classification === 'lag' ? 'Lag' : 'Lead'}
              tone={result.withinNorm ? 'brand' : 'slate'}
            />
          </div>
          <ResultStat label="vs. norm" value={result.withinNorm ? 'Within normal limits' : 'Outside normal limits'} tone={result.withinNorm ? 'brand' : 'slate'} />
          <p className="text-sm text-slate-600">{result.interpretation}</p>
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `Lag = ${formatDiopter(result.lag)} D (${result.classification})` : undefined}
        onReset={() => {
          setDemand('')
          setResponse('')
        }}
      />
    </Card>
  )
}

export function AccommodativeLagLead() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
