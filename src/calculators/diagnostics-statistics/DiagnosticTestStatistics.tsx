import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { statsFromCounts, predictiveValuesAtPrevalence } from './diagnosticTest.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'diagnostic-test-statistics',
  name: 'Sensitivity, Specificity, PPV/NPV & Likelihood Ratios',
  category: 'Diagnostics & Statistics',
  description: 'All standard diagnostic-test statistics from a 2×2 table of test results vs. disease status.',
  formula: 'Sens = TP/(TP+FN)   Spec = TN/(TN+FP)   PPV = TP/(TP+FP)   NPV = TN/(TN+FN)   LR+ = Sens/(1−Spec)   LR− = (1−Sens)/Spec',
  keywords: ['sensitivity', 'specificity', 'PPV', 'NPV', 'predictive value', 'likelihood ratio', 'LR+', 'LR-', 'screening test'],
  boardRelevance: 'High',
  clinicalRelevance: 'Interpreting the performance of a screening or diagnostic test (e.g. a glaucoma or diabetic retinopathy screening tool).',
  supportsPractice: false,
  convention: 'Rows = test result (positive/negative). Columns = true disease status (present/absent). PPV/NPV computed directly from the table reflect the prevalence implicit in that table.',
}

function CountsTab() {
  const [tp, setTp] = useState('')
  const [fp, setFp] = useState('')
  const [fn, setFn] = useState('')
  const [tn, setTn] = useState('')

  const tpN = parseNumeric(tp)
  const fpN = parseNumeric(fp)
  const fnN = parseNumeric(fn)
  const tnN = parseNumeric(tn)

  let result: ReturnType<typeof statsFromCounts> | null = null
  let error: string | null = null
  if (tpN !== null && fpN !== null && fnN !== null && tnN !== null) {
    try {
      result = statsFromCounts({ tp: tpN, fp: fpN, fn: fnN, tn: tnN })
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="True positives" value={tp} onChange={setTp} />
        <NumberField label="False positives" value={fp} onChange={setFp} />
        <NumberField label="False negatives" value={fn} onChange={setFn} />
        <NumberField label="True negatives" value={tn} onChange={setTn} />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <ResultStat label="Sensitivity" value={`${roundTo(result.sensitivity * 100, 1)}%`} />
          <ResultStat label="Specificity" value={`${roundTo(result.specificity * 100, 1)}%`} />
          <ResultStat label="Prevalence" value={`${roundTo(result.prevalence * 100, 1)}%`} />
          <ResultStat tone="slate" label="PPV" value={`${roundTo(result.ppv * 100, 1)}%`} />
          <ResultStat tone="slate" label="NPV" value={`${roundTo(result.npv * 100, 1)}%`} />
          <ResultStat tone="slate" label="False Positive Rate" value={`${roundTo(result.falsePositiveRate * 100, 1)}%`} />
          <ResultStat tone="slate" label="False Negative Rate" value={`${roundTo(result.falseNegativeRate * 100, 1)}%`} />
          <ResultStat tone="slate" label="LR+" value={Number.isFinite(result.positiveLikelihoodRatio) ? roundTo(result.positiveLikelihoodRatio, 2).toString() : '∞'} />
          <ResultStat tone="slate" label="LR−" value={roundTo(result.negativeLikelihoodRatio, 2).toString()} />
        </div>
      )}
    </div>
  )
}

function PrevalenceTab() {
  const [sens, setSens] = useState('')
  const [spec, setSpec] = useState('')
  const [prevalence, setPrevalence] = useState('')

  const sN = parseNumeric(sens)
  const spN = parseNumeric(spec)
  const prevN = parseNumeric(prevalence)
  const result = sN !== null && spN !== null && prevN !== null ? predictiveValuesAtPrevalence(sN / 100, spN / 100, prevN / 100) : null

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Sensitivity" unit="%" value={sens} onChange={setSens} />
        <NumberField label="Specificity" unit="%" value={spec} onChange={setSpec} />
        <NumberField label="Assumed prevalence" unit="%" value={prevalence} onChange={setPrevalence} />
      </div>
      {result && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="PPV at this prevalence" value={`${roundTo(result.ppv * 100, 1)}%`} />
          <ResultStat label="NPV at this prevalence" value={`${roundTo(result.npv * 100, 1)}%`} />
        </div>
      )}
      <p className="text-xs text-slate-400">PPV and NPV depend heavily on prevalence — the same test performs very differently in a screening population vs. a referral population.</p>
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'counts' | 'prevalence'>('counts')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('counts')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'counts' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          From 2×2 Counts
        </button>
        <button onClick={() => setTab('prevalence')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'prevalence' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          From Sens/Spec + Prevalence
        </button>
      </div>
      {tab === 'counts' ? <CountsTab /> : <PrevalenceTab />}
      <ResultActions onReset={() => setTab('counts')} />
    </Card>
  )
}

export function DiagnosticTestStatistics() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
