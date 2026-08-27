import { useMemo, useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric } from '../shared/format'
import {
  convertLength,
  convertMass,
  convertVolume,
  convertTime,
  degreesToRadians,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  decimalToPercentage,
  decimalToFraction,
  roundToSignificantFigures,
  toScientificNotation,
} from './unitConversions.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'general-conversions',
  name: 'General Conversions',
  category: 'General Conversions',
  description: 'Length, mass, volume, time, temperature, angle, decimal/percent/fraction, and significant figures.',
  formula: 'Linear unit conversion via a common base unit (e.g. meters, grams, seconds)',
  keywords: ['unit', 'convert', 'mm', 'cm', 'metric', 'imperial', 'temperature', 'sig figs', 'scientific notation', 'radians', 'degrees'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Everyday unit conversions used throughout clinical measurement and record-keeping.',
  supportsPractice: false,
}

const lengthUnits = [
  { value: 'nm', label: 'nm' },
  { value: 'um', label: 'µm' },
  { value: 'mm', label: 'mm' },
  { value: 'cm', label: 'cm' },
  { value: 'm', label: 'm' },
  { value: 'in', label: 'in' },
]
const massUnits = [
  { value: 'mg', label: 'mg' },
  { value: 'g', label: 'g' },
  { value: 'kg', label: 'kg' },
]
const volumeUnits = [
  { value: 'mL', label: 'mL' },
  { value: 'L', label: 'L' },
]
const timeUnits = [
  { value: 's', label: 'seconds' },
  { value: 'min', label: 'minutes' },
  { value: 'hr', label: 'hours' },
]

function LinearConverter({
  units,
  convert,
}: {
  units: { value: string; label: string }[]
  convert: (v: number, from: string, to: string) => number
}) {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState(units[0].value)
  const [to, setTo] = useState(units[1].value)
  const n = parseNumeric(value)
  const result = n !== null ? convert(n, from, to) : null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
      <NumberField label="Value" value={value} onChange={setValue} />
      <SelectField label="From" value={from} onChange={setFrom} options={units} />
      <SelectField label="To" value={to} onChange={setTo} options={units} />
      {result !== null && (
        <div className="sm:col-span-3">
          <ResultStat label="Result" value={`${result.toPrecision(8).replace(/\.?0+$/, '')} ${units.find((u) => u.value === to)?.label}`} />
        </div>
      )}
    </div>
  )
}

function TemperatureConverter() {
  const [c, setC] = useState('')
  const [f, setF] = useState('')
  const cVal = parseNumeric(c)
  const fVal = parseNumeric(f)

  return (
    <div className="grid grid-cols-2 gap-3">
      <NumberField
        label="°C"
        value={c}
        onChange={(v) => {
          setC(v)
          const n = parseNumeric(v)
          setF(n !== null ? celsiusToFahrenheit(n).toFixed(1) : '')
        }}
      />
      <NumberField
        label="°F"
        value={f}
        onChange={(v) => {
          setF(v)
          const n = parseNumeric(v)
          setC(n !== null ? fahrenheitToCelsius(n).toFixed(1) : '')
        }}
      />
      {cVal === null && fVal === null && <p className="text-xs text-slate-400 col-span-2">Enter a value in either field.</p>}
    </div>
  )
}

function AngleConverter() {
  const [deg, setDeg] = useState('')
  const n = parseNumeric(deg)
  return (
    <div className="space-y-3">
      <NumberField label="Degrees" value={deg} onChange={setDeg} />
      {n !== null && <ResultStat label="Radians" value={degreesToRadians(n).toFixed(5)} />}
    </div>
  )
}

function DecimalPercentFraction() {
  const [decimal, setDecimal] = useState('')
  const n = parseNumeric(decimal)
  const frac = n !== null ? decimalToFraction(n) : null
  return (
    <div className="space-y-3">
      <NumberField label="Decimal" value={decimal} onChange={setDecimal} />
      {n !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Percentage" value={`${decimalToPercentage(n).toFixed(2)}%`} />
          <ResultStat label="Fraction (approx.)" value={frac ? `${frac.numerator}/${frac.denominator}` : '—'} />
        </div>
      )}
    </div>
  )
}

function SigFigs() {
  const [value, setValue] = useState('')
  const [sig, setSig] = useState('3')
  const n = parseNumeric(value)
  const sigN = parseNumeric(sig)
  const rounded = n !== null && sigN !== null && sigN > 0 ? roundToSignificantFigures(n, sigN) : null
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Value" value={value} onChange={setValue} />
        <NumberField label="Significant figures" value={sig} onChange={setSig} />
      </div>
      {rounded !== null && (
        <div className="grid grid-cols-2 gap-3">
          <ResultStat label="Rounded" value={String(rounded)} />
          <ResultStat label="Scientific notation" value={toScientificNotation(rounded, Number(sig))} />
        </div>
      )}
    </div>
  )
}

const converterTabs = ['Length', 'Mass', 'Volume', 'Time', 'Temperature', 'Angle', 'Decimal / % / Fraction', 'Significant Figures'] as const
type ConverterTab = (typeof converterTabs)[number]

export function UnitConversions() {
  const [tab, setTab] = useState<ConverterTab>('Length')

  const content = useMemo(() => {
    switch (tab) {
      case 'Length':
        return <LinearConverter units={lengthUnits} convert={(v, f, t) => convertLength(v, f as never, t as never)} />
      case 'Mass':
        return <LinearConverter units={massUnits} convert={(v, f, t) => convertMass(v, f as never, t as never)} />
      case 'Volume':
        return <LinearConverter units={volumeUnits} convert={(v, f, t) => convertVolume(v, f as never, t as never)} />
      case 'Time':
        return <LinearConverter units={timeUnits} convert={(v, f, t) => convertTime(v, f as never, t as never)} />
      case 'Temperature':
        return <TemperatureConverter />
      case 'Angle':
        return <AngleConverter />
      case 'Decimal / % / Fraction':
        return <DecimalPercentFraction />
      case 'Significant Figures':
        return <SigFigs />
    }
  }, [tab])

  return (
    <CalculatorShell
      meta={meta}
      calculateContent={
        <Card className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {converterTabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={
                  'px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer border ' +
                  (tab === t ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50')
                }
              >
                {t}
              </button>
            ))}
          </div>
          {content}
          <ResultActions onReset={() => setTab('Length')} />
        </Card>
      }
      aboutExtra={
        <p>
          Fraction approximation searches denominators up to 1000 for the closest match; radians ↔ degrees uses
          θ(rad) = θ(deg) × π/180.
        </p>
      }
    />
  )
}
