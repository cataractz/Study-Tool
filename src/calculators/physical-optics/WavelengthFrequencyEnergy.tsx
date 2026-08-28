import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { roundTo, parseNumeric } from '../shared/format'
import { frequencyFromWavelength, photonEnergyFromWavelengthJoules, joulesToEv } from './wavelengthFrequency.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'wavelength-frequency-energy',
  name: 'Wavelength, Frequency & Photon Energy',
  category: 'Physical Optics',
  description: 'Convert light wavelength to frequency and photon energy.',
  formula: 'c = λf   ·   E = hf = hc/λ',
  keywords: ['wavelength', 'frequency', 'photon energy', 'electromagnetic spectrum', 'nm', 'eV'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Relating visible-light wavelength to frequency and photon energy, e.g. for laser or UV exposure discussions.',
  supportsPractice: false,
}

function Calculate() {
  const [nm, setNm] = useState('')
  const n = parseNumeric(nm)
  let freq: number | null = null
  let energyJ: number | null = null
  let error: string | null = null
  try {
    if (n !== null) {
      freq = frequencyFromWavelength(n * 1e-9)
      energyJ = photonEnergyFromWavelengthJoules(n * 1e-9)
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Invalid input.'
  }

  return (
    <Card className="space-y-4">
      <NumberField label="Wavelength" unit="nm" value={nm} onChange={setNm} placeholder="e.g. 555 (green)" />
      {freq !== null && energyJ !== null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ResultStat label="Frequency" value={`${roundTo(freq / 1e12, 2)} THz`} />
          <ResultStat tone="slate" label="Photon energy" value={`${roundTo(joulesToEv(energyJ), 3)} eV`} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ResultActions
        copyText={freq !== null && energyJ !== null ? `f = ${roundTo(freq / 1e12, 2)} THz, E = ${roundTo(joulesToEv(energyJ), 3)} eV` : undefined}
        onReset={() => setNm('')}
      />
    </Card>
  )
}

export function WavelengthFrequencyEnergy() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
