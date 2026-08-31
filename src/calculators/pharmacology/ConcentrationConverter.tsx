import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { percentToMgPerMl, mgPerMlToMgPerL, ratioStrengthToPercent, percentToRatioStrengthX } from './concentration.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'concentration-converter',
  name: 'Concentration Converter',
  category: 'Pharmacology',
  description: 'Convert a drug concentration between %, mg/mL, mg/L, and ratio strength.',
  formula: '% w/v × 10 = mg/mL',
  variables: [
    { symbol: '% w/v', meaning: 'Concentration, percent weight/volume (g solute per 100 mL solution)' },
    { symbol: 'mg/mL', meaning: 'Concentration in milligrams of solute per milliliter of solution' },
  ],
  keywords: ['concentration', 'percent', 'mg/mL', 'mg/L', 'ratio strength', 'dilution'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Reading and converting ophthalmic drug concentrations across the notations used on labels, in compounding, and in the literature.',
  supportsPractice: false,
  convention: '% is w/v (grams per 100 mL). Ratio strength "1:X" means 1 g solute per X mL solution.',
}

function Calculate() {
  const [percent, setPercent] = useState('')
  const p = parseNumeric(percent)

  const mgPerMl = p !== null ? percentToMgPerMl(p) : null
  const mgPerL = mgPerMl !== null ? mgPerMlToMgPerL(mgPerMl) : null
  let ratioX: number | null = null
  try {
    ratioX = p !== null && p !== 0 ? percentToRatioStrengthX(p) : null
  } catch {
    ratioX = null
  }

  return (
    <Card className="space-y-4">
      <NumberField label="Concentration" unit="% w/v" value={percent} onChange={setPercent} placeholder="e.g. 0.5" />
      {p !== null && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ResultStat label="mg/mL" value={roundTo(mgPerMl!, 3).toString()} />
          <ResultStat label="mg/L" value={roundTo(mgPerL!, 1).toString()} />
          <ResultStat label="Ratio strength" value={ratioX !== null ? `1:${roundTo(ratioX, 0)}` : '—'} />
        </div>
      )}
      <ResultActions
        copyText={p !== null ? `${p}% = ${roundTo(mgPerMl!, 3)} mg/mL = ${roundTo(mgPerL!, 1)} mg/L` : undefined}
        onReset={() => setPercent('')}
      />
    </Card>
  )
}

function AlternateInputs() {
  const [mgPerMl, setMgPerMl] = useState('')
  const [ratioX, setRatioX] = useState('')
  const mN = parseNumeric(mgPerMl)
  const rN = parseNumeric(ratioX)

  return (
    <Card className="space-y-4">
      <p className="text-xs text-slate-500">Or start from mg/mL or ratio strength instead:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <NumberField label="mg/mL" value={mgPerMl} onChange={setMgPerMl} />
          {mN !== null && <ResultStat label="Percent" value={`${roundTo(mN / 10, 3)}%`} />}
        </div>
        <div>
          <NumberField label="Ratio strength (1 : X)" value={ratioX} onChange={setRatioX} />
          {rN !== null && rN !== 0 && <ResultStat label="Percent" value={`${roundTo(ratioStrengthToPercent(rN), 4)}%`} />}
        </div>
      </div>
    </Card>
  )
}

export function ConcentrationConverter() {
  return (
    <CalculatorShell
      meta={meta}
      calculateContent={
        <div className="space-y-4">
          <Calculate />
          <AlternateInputs />
        </div>
      }
    />
  )
}
