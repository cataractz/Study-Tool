import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, roundTo } from '../shared/format'
import { caCRatio, caCRatioPerMeterAngle } from './caCRatio.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'ca-c-ratio',
  name: 'CA/C Ratio',
  category: 'Binocular Vision',
  description: 'Convergence-accommodation-to-convergence (CA/C) ratio from the accommodative response measured with and without a known base-out prism.',
  formula: 'CA/C = (ARprism − ARbaseline) / Prism',
  variables: [
    { symbol: 'ARbaseline', meaning: 'Accommodative response with no prism, target fixed (D)' },
    { symbol: 'ARprism', meaning: 'Accommodative response through the base-out prism, same target (D)' },
    { symbol: 'Prism', meaning: 'Base-out prism power used to induce convergence (Δ)' },
    { symbol: 'PD', meaning: 'Interpupillary distance, used only to also express the ratio per meter angle (cm)' },
  ],
  keywords: [
    'ca/c',
    'ca-c ratio',
    'cac ratio',
    'convergence accommodation',
    'convergence accommodation to convergence ratio',
    'convergence-accommodation',
    'accommodative convergence cross-link',
    'base-out prism accommodation',
    'meter angle',
  ],
  boardRelevance: 'Low',
  clinicalRelevance:
    'The reciprocal cross-link to AC/A: quantifies how much accommodation is driven by a given amount of convergence. Far less standardized in clinical practice than AC/A — it is primarily a research/specialty measure (requires objective accommodative response monitoring), is not part of a routine binocular vision work-up, and is rarely tested on boards.',
  supportsPractice: true,
  convention: 'A base-out prism stimulates additional convergence without changing the accommodative stimulus; the resulting change in accommodative response is attributed to that convergence.',
  limitations: [
    'The literature does not agree on a single "normal" CA/C range — reported figures vary substantially by study and measurement technique. Two commonly cited datasets report a mean of ~0.13 ± 0.04 D/Δ (range 0.04–0.20 D/Δ) and, separately, a median of ~0.03 D/Δ (IQR 0.025–0.041) with individual values up to 0.58 D/Δ. Treat any normal range as approximate — not a diagnostic cutoff — and do not rely on this calculator alone to flag an "abnormal" CA/C.',
    'Requires an objective measure of accommodative response (dynamic retinoscopy, autorefraction, or binocular crossed-cylinder), not a subjective add-power endpoint — this is a research/specialty technique.',
    'D/Δ is the unit most commonly reported; the D/MA (per meter angle) conversion assumes symmetric convergence and uses PD as an approximation, mirroring the same assumption used for AC/A.',
  ],
}

function Calculate() {
  const [baseline, setBaseline] = useState('')
  const [withPrism, setWithPrism] = useState('')
  const [prism, setPrism] = useState('')
  const [pd, setPd] = useState('')

  const baselineN = parseNumeric(baseline)
  const withPrismN = parseNumeric(withPrism)
  const prismN = parseNumeric(prism)
  const pdN = parseNumeric(pd)

  let result: number | null = null
  let error: string | null = null
  try {
    if (baselineN !== null && withPrismN !== null && prismN !== null) result = caCRatio(baselineN, withPrismN, prismN)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  const perMA = result !== null && pdN !== null && pdN !== 0 ? caCRatioPerMeterAngle(result, pdN) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Accommodative response, no prism" unit="D" value={baseline} onChange={setBaseline} />
        <NumberField label="Accommodative response, through prism" unit="D" value={withPrism} onChange={setWithPrism} />
        <NumberField label="Base-out prism used" unit="Δ" value={prism} onChange={setPrism} />
      </div>
      <NumberField label="Interpupillary distance (optional, for D/MA)" unit="cm" value={pd} onChange={setPd} />
      {result !== null && <ResultStat label="CA/C ratio" value={`${roundTo(result, 3)} D/Δ`} />}
      {perMA !== null && <ResultStat tone="slate" label="CA/C ratio (per meter angle)" value={`${roundTo(perMA, 2)} D/MA`} />}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={result !== null ? `CA/C = ${roundTo(result, 3)} D/Δ` : undefined}
        onReset={() => {
          setBaseline('')
          setWithPrism('')
          setPrism('')
          setPd('')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const baseline = 2.0
  const prism = difficulty === 'Basic' ? 10 : difficulty === 'Intermediate' ? 15 : 20
  const ratio = difficulty === 'Basic' ? 0.1 : difficulty === 'Intermediate' ? 0.08 : 0.15
  const withPrism = roundTo(baseline + ratio * prism, 2)
  const result = caCRatio(baseline, withPrism, prism)
  return {
    prompt: `With the patient fixating a fixed near target, dynamic retinoscopy shows an accommodative response of +${baseline.toFixed(2)} D with no prism, and +${withPrism.toFixed(2)} D through a ${prism}Δ base-out prism. What is the CA/C ratio?`,
    difficulty,
    answers: [{ key: 'cac', label: 'CA/C', unit: 'D/Δ', value: result, tolerance: 0.01 }],
    formula: 'CA/C = (ARprism − ARbaseline) / Prism',
    substitution: `CA/C = (${withPrism.toFixed(2)} − ${baseline.toFixed(2)}) / ${prism}`,
    steps: [`ΔAR = ${withPrism.toFixed(2)} − ${baseline.toFixed(2)} = ${(withPrism - baseline).toFixed(2)} D`, `CA/C = ${(withPrism - baseline).toFixed(2)} / ${prism} = ${result.toFixed(3)} D/Δ`],
    finalAnswerText: `CA/C ≈ ${result.toFixed(3)} D/Δ`,
    why: 'Base-out prism stimulates convergence without changing the accommodative stimulus (target distance unchanged); the resulting change in objectively measured accommodative response, divided by the induced convergence, is the CA/C ratio.',
  }
}

export function CACRatio() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
