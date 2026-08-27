import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { evaluateSheards, type PhoriaType } from './sheardsCriterion.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'sheards-criterion',
  name: "Sheard's Criterion",
  category: 'Binocular Vision',
  description: 'Checks whether compensating fusional reserve is at least twice the phoria, and calculates prism to prescribe if not.',
  formula: 'Rx = (2 × Phoria − Reserve) / 3',
  keywords: ['sheard', "sheard's criterion", 'fusional reserve', 'phoria', 'prism prescribing'],
  boardRelevance: 'High',
  clinicalRelevance: 'Deciding whether a symptomatic heterophoria warrants prism prescription.',
  supportsPractice: true,
  convention: 'Exophoria is compensated by base-in prism; esophoria by base-out prism.',
  limitations: [
    'Reserve should be the compensating fusional vergence (break or blur, per clinician preference, break more common) in the direction that relieves the entered phoria.',
  ],
}

function Calculate() {
  const [phoriaType, setPhoriaType] = useState<PhoriaType>('exophoria')
  const [phoria, setPhoria] = useState('')
  const [reserve, setReserve] = useState('')
  const phoriaN = parseNumeric(phoria)
  const reserveN = parseNumeric(reserve)
  const result = phoriaN !== null && reserveN !== null ? evaluateSheards(Math.abs(phoriaN), Math.abs(reserveN), phoriaType) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <SelectField label="Phoria type" value={phoriaType} onChange={(v) => setPhoriaType(v as PhoriaType)} options={[{ value: 'exophoria', label: 'Exophoria' }, { value: 'esophoria', label: 'Esophoria' }]} />
        <NumberField label="Phoria magnitude" unit="Δ" value={phoria} onChange={setPhoria} />
        <NumberField label="Compensating reserve" unit="Δ" value={reserve} onChange={setReserve} />
      </div>
      {result !== null && (
        <>
          <ResultStat
            label="Criterion"
            value={result.criterionMet ? 'Met — reserve is adequate' : 'Not met'}
            tone={result.criterionMet ? 'brand' : 'slate'}
          />
          <p className="text-sm text-slate-600 font-mono">Required reserve (2 × phoria) = {roundTo(result.requiredReserve, 2)} Δ</p>
          {!result.criterionMet && result.rxPrism !== null && (
            <ResultStat label="Prism to prescribe" value={`${roundTo(result.rxPrism, 2)} Δ ${result.baseDirection}`} />
          )}
        </>
      )}
      <ResultActions
        copyText={result !== null ? (result.criterionMet ? 'Sheard\'s criterion met' : `Rx: ${roundTo(result.rxPrism ?? 0, 2)} Δ ${result.baseDirection}`) : undefined}
        onReset={() => {
          setPhoria('')
          setReserve('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const phoriaType: PhoriaType = Math.random() > 0.5 ? 'exophoria' : 'esophoria'
  const phoria = difficulty === 'Basic' ? 6 : difficulty === 'Intermediate' ? 8 : 10
  const reserve = difficulty === 'Basic' ? 8 : difficulty === 'Intermediate' ? 10 : 12
  const result = evaluateSheards(phoria, reserve, phoriaType)
  const rx = result.rxPrism ?? 0
  return {
    prompt: `A patient has ${phoria}Δ of ${phoriaType} and a compensating fusional reserve of ${reserve}Δ. Per Sheard's criterion, how much prism (if any) should be prescribed?`,
    difficulty,
    answers: [{ key: 'rx', label: 'Prism to prescribe', unit: 'Δ', value: rx, tolerance: 0.2 }],
    formula: 'Rx = (2 × Phoria − Reserve) / 3',
    substitution: `Rx = (2 × ${phoria} − ${reserve}) / 3`,
    steps: [`Required reserve = 2 × ${phoria} = ${2 * phoria}Δ`, `Reserve (${reserve}Δ) is ${result.criterionMet ? 'adequate' : 'insufficient'}`, `Rx = (${2 * phoria} − ${reserve}) / 3 = ${rx.toFixed(2)} Δ`],
    finalAnswerText: result.criterionMet ? '0 Δ — criterion met, no prism indicated' : `${rx.toFixed(2)} Δ ${result.baseDirection}`,
    why: "Sheard's criterion holds that comfortable fusion requires a reserve at least double the phoria demand; the shortfall (if any) is distributed by dividing by 3, an empirically derived clinical guideline.",
  }
}

export function SheardsCriterion() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
