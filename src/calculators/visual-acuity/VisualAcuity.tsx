import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import {
  snellenToDecimal,
  decimalToSnellenDenominator,
  decimalToLogMAR,
  logMARToDecimal,
  logMARFromETDRSLetters,
  etdrsLettersFromLogMAR,
} from './visualAcuity.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'visual-acuity-converter',
  name: 'Visual Acuity Converter',
  category: 'Visual Acuity',
  description: 'Convert visual acuity between Snellen, decimal, logMAR, and ETDRS letter score.',
  formula: 'decimal = num/denom;  logMAR = −log10(decimal)',
  variables: [
    { symbol: 'decimal', meaning: 'Decimal visual acuity (dimensionless, e.g. 20/20 = 1.0)' },
    { symbol: 'num', meaning: 'Snellen numerator — testing distance' },
    { symbol: 'denom', meaning: 'Snellen denominator — distance at which the letter subtends 5 arcmin' },
    { symbol: 'logMAR', meaning: 'Logarithm (base 10) of the minimum angle of resolution' },
  ],
  keywords: ['visual acuity', 'snellen', 'logmar', 'decimal acuity', 'ETDRS', 'letters'],
  boardRelevance: 'High',
  clinicalRelevance: 'Comparing acuity across different notations and charts, and quantifying visual acuity change over time.',
  supportsPractice: true,
  limitations: [
    'Decimal acuity is used as the bridge value between Snellen, logMAR, and M notation — these three interconvert exactly.',
    'ETDRS letter scoring depends on the specific chart\'s starting logMAR value (varies by chart/testing protocol) and must be entered separately — it is not a universal constant.',
    'Near-vision notations such as Jaeger or point size are chart/manufacturer-specific and are not standardized, so they are not included here.',
  ],
}

function SnellenLogMARTab() {
  const [num, setNum] = useState('20')
  const [denom, setDenom] = useState('')
  const [logMAR, setLogMAR] = useState('')

  const n = parseNumeric(num)
  const d = parseNumeric(denom)
  const decimalFromSnellen = n !== null && d !== null && d !== 0 ? snellenToDecimal(n, d) : null

  const lm = parseNumeric(logMAR)

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 mb-1.5">From Snellen</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Numerator" value={num} onChange={setNum} />
          <NumberField label="Denominator" value={denom} onChange={setDenom} />
        </div>
        {decimalFromSnellen !== null && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ResultStat tone="slate" label="Decimal" value={roundTo(decimalFromSnellen, 3).toString()} />
            <ResultStat tone="slate" label="logMAR" value={roundTo(decimalToLogMAR(decimalFromSnellen), 2).toString()} />
          </div>
        )}
      </div>
      <div className="pt-3 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-500 mb-1.5">From logMAR</p>
        <NumberField label="logMAR" value={logMAR} onChange={setLogMAR} />
        {lm !== null && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ResultStat tone="slate" label="Decimal" value={roundTo(logMARToDecimal(lm), 3).toString()} />
            <ResultStat tone="slate" label="Snellen (20/X)" value={`20/${roundTo(decimalToSnellenDenominator(logMARToDecimal(lm)), 1)}`} />
          </div>
        )}
      </div>
    </div>
  )
}

function ETDRSTab() {
  const [startLogMAR, setStartLogMAR] = useState('1.0')
  const [letters, setLetters] = useState('')
  const [logMAR, setLogMAR] = useState('')

  const start = parseNumeric(startLogMAR)
  const lettersN = parseNumeric(letters)
  const logMARFromLetters = start !== null && lettersN !== null ? logMARFromETDRSLetters(start, lettersN) : null

  const lmN = parseNumeric(logMAR)
  const lettersFromLogMAR = start !== null && lmN !== null ? etdrsLettersFromLogMAR(start, lmN) : null

  return (
    <div className="space-y-4">
      <NumberField label="Chart starting logMAR" value={startLogMAR} onChange={setStartLogMAR} placeholder="commonly 1.0 for standard 4m ETDRS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <NumberField label="Letters read correctly" value={letters} onChange={setLetters} />
          {logMARFromLetters !== null && <ResultStat label="logMAR" value={roundTo(logMARFromLetters, 2).toString()} />}
        </div>
        <div>
          <NumberField label="logMAR" value={logMAR} onChange={setLogMAR} />
          {lettersFromLogMAR !== null && <ResultStat label="Letters correct" value={roundTo(lettersFromLogMAR, 1).toString()} />}
        </div>
      </div>
    </div>
  )
}

function Calculate() {
  const [tab, setTab] = useState<'snellen' | 'etdrs'>('snellen')
  return (
    <Card className="space-y-4">
      <div className="flex gap-1.5">
        <button onClick={() => setTab('snellen')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'snellen' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          Snellen / Decimal / logMAR
        </button>
        <button onClick={() => setTab('etdrs')} className={'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' + (tab === 'etdrs' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')}>
          ETDRS Letters
        </button>
      </div>
      {tab === 'snellen' ? <SnellenLogMARTab /> : <ETDRSTab />}
      <ResultActions onReset={() => setTab('snellen')} />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const denom = difficulty === 'Basic' ? [20, 30, 40, 50][Math.floor(Math.random() * 4)] : difficulty === 'Intermediate' ? [25, 60, 70, 100][Math.floor(Math.random() * 4)] : [16, 12.5, 125, 15][Math.floor(Math.random() * 4)]
  const decimal = snellenToDecimal(20, denom)
  const logMAR = decimalToLogMAR(decimal)
  return {
    prompt: `Convert Snellen 20/${denom} to logMAR.`,
    difficulty,
    answers: [{ key: 'lm', label: 'logMAR', unit: '', value: logMAR, tolerance: 0.02 }],
    formula: 'logMAR = −log10(decimal),  decimal = 20/denominator',
    substitution: `logMAR = −log10(20/${denom})`,
    steps: [`decimal = 20/${denom} = ${decimal.toFixed(3)}`, `logMAR = −log10(${decimal.toFixed(3)}) = ${logMAR.toFixed(2)}`],
    finalAnswerText: `logMAR = ${logMAR.toFixed(2)}`,
    why: 'logMAR is the base-10 logarithm of the minimum angle of resolution; since decimal acuity is the reciprocal of that angle, logMAR = −log10(decimal).',
  }
}

export function VisualAcuity() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
