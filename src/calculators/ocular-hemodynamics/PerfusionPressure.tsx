import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { meanArterialPressure, meanOcularPerfusionPressure } from './perfusionPressure.engine'
import type { CalculatorMeta } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'ocular-perfusion-pressure',
  name: 'Mean Arterial Pressure & Ocular Perfusion Pressure',
  category: 'Ocular Hemodynamics',
  description: 'Estimate MAP from blood pressure, and mean ocular perfusion pressure (MOPP) from MAP and IOP.',
  formula: 'MAP = DBP + ⅓(SBP − DBP)   ·   MOPP = ⅔ × MAP − IOP',
  keywords: ['MAP', 'mean arterial pressure', 'ocular perfusion pressure', 'OPP', 'MOPP', 'glaucoma risk'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Estimating ocular perfusion pressure, a factor studied in glaucoma epidemiology (e.g. Baltimore Eye Survey).',
  supportsPractice: false,
  convention: 'Uses MOPP = (2/3)×MAP − IOP, the convention most commonly cited in glaucoma epidemiology literature. Other OPP definitions exist (e.g. simple MAP − IOP, or separate systolic/diastolic OPP) and are not interchangeable with this one.',
  limitations: [
    'This is an educational estimate, not a validated clinical risk score.',
    'Low ocular perfusion pressure is only ONE of many studied glaucoma risk factors — this value alone does not determine glaucoma risk or diagnosis.',
  ],
}

function Calculate() {
  const [sbp, setSbp] = useState('')
  const [dbp, setDbp] = useState('')
  const [iop, setIop] = useState('')

  const sbpN = parseNumeric(sbp)
  const dbpN = parseNumeric(dbp)
  const iopN = parseNumeric(iop)
  const map = sbpN !== null && dbpN !== null ? meanArterialPressure(sbpN, dbpN) : null
  const mopp = map !== null && iopN !== null ? meanOcularPerfusionPressure(map, iopN) : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Systolic BP" unit="mmHg" value={sbp} onChange={setSbp} />
        <NumberField label="Diastolic BP" unit="mmHg" value={dbp} onChange={setDbp} />
        <NumberField label="IOP" unit="mmHg" value={iop} onChange={setIop} />
      </div>
      {(map !== null || mopp !== null) && (
        <div className="grid grid-cols-2 gap-3">
          {map !== null && <ResultStat tone="slate" label="MAP" value={`${roundTo(map, 1)} mmHg`} />}
          {mopp !== null && <ResultStat label="MOPP" value={`${roundTo(mopp, 1)} mmHg`} />}
        </div>
      )}
      <ResultActions
        copyText={mopp !== null ? `MAP = ${roundTo(map!, 1)} mmHg, MOPP = ${roundTo(mopp, 1)} mmHg` : undefined}
        onReset={() => {
          setSbp('')
          setDbp('')
          setIop('')
        }}
      />
    </Card>
  )
}

export function PerfusionPressure() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
