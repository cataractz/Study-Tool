import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { dropsPerDay, totalDropsInBottle, daysOfSupply, DEFAULT_DROP_SIZE_UL } from './ophthalmicDrops.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'ophthalmic-drop-calculator',
  name: 'Ophthalmic Drop Calculator',
  category: 'Pharmacology',
  description: 'Estimate drops per day, total doses, and days of supply for a bottle of eye drops.',
  formula: 'Total drops = bottle volume (µL) / drop size (µL);  Days of supply = total drops / drops per day',
  keywords: ['eye drops', 'bottle duration', 'days of supply', 'drop size'],
  boardRelevance: 'Clinical only',
  clinicalRelevance: 'Estimating how long a prescribed bottle of drops will last, and counseling patients on refill timing.',
  supportsPractice: false,
  convention: `Drop size is an adjustable assumption, not a fixed constant — actual drop volume varies by bottle/tip design (commonly cited range ~25-56 µL). Defaults to ${DEFAULT_DROP_SIZE_UL} µL.`,
  limitations: ['A true estimate should use the specific product\'s labeled or measured drop size when known — this is an approximation.'],
}

function Calculate() {
  const [bottleMl, setBottleMl] = useState('')
  const [dropSize, setDropSize] = useState(String(DEFAULT_DROP_SIZE_UL))
  const [dropsPerDoseInput, setDropsPerDoseInput] = useState('1')
  const [dosesPerDayInput, setDosesPerDayInput] = useState('')

  const bottleN = parseNumeric(bottleMl)
  const dropSizeN = parseNumeric(dropSize)
  const dropsDoseN = parseNumeric(dropsPerDoseInput)
  const dosesDayN = parseNumeric(dosesPerDayInput)

  const perDay = dropsDoseN !== null && dosesDayN !== null ? dropsPerDay(dropsDoseN, dosesDayN) : null
  const totalDrops = bottleN !== null && dropSizeN !== null && dropSizeN !== 0 ? totalDropsInBottle(bottleN, dropSizeN) : null
  let days: number | null = null
  try {
    days = bottleN !== null && dropSizeN !== null && perDay !== null && perDay !== 0 ? daysOfSupply(bottleN, dropSizeN, perDay) : null
  } catch {
    days = null
  }

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Bottle size" unit="mL" value={bottleMl} onChange={setBottleMl} placeholder="e.g. 2.5, 5, 10, 15" />
        <NumberField label="Assumed drop size" unit="µL" value={dropSize} onChange={setDropSize} />
        <NumberField label="Drops per dose" value={dropsPerDoseInput} onChange={setDropsPerDoseInput} />
        <NumberField label="Doses per day" value={dosesPerDayInput} onChange={setDosesPerDayInput} />
      </div>
      {(totalDrops !== null || perDay !== null || days !== null) && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {totalDrops !== null && <ResultStat tone="slate" label="Total drops in bottle" value={roundTo(totalDrops, 0).toString()} />}
          {perDay !== null && <ResultStat tone="slate" label="Drops per day" value={roundTo(perDay, 1).toString()} />}
          {days !== null && <ResultStat label="Estimated days of supply" value={`${roundTo(days, 0)} days`} />}
        </div>
      )}
      <ResultActions
        copyText={days !== null ? `Estimated supply: ${roundTo(days, 0)} days` : undefined}
        onReset={() => {
          setBottleMl('')
          setDropSize(String(DEFAULT_DROP_SIZE_UL))
          setDropsPerDoseInput('1')
          setDosesPerDayInput('')
        }}
      />
    </Card>
  )
}

export function OphthalmicDrops() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
