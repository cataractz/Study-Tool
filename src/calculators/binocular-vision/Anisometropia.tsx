import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo, formatDiopter } from '../shared/format'
import { evaluateAnisometropia } from './anisometropia.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'anisometropia',
  name: 'Anisometropia',
  category: 'Binocular Vision',
  description: "Quantifies the interocular refractive power difference (by spherical equivalent) and classifies its clinical significance.",
  formula: 'SE = Sphere + Cylinder/2 (each eye)   ·   Anisometropia (D) = |SE(OD) − SE(OS)|',
  variables: [
    { symbol: 'SE', meaning: 'Spherical equivalent for one eye (D)' },
    { symbol: 'Anisometropia', meaning: 'Absolute interocular difference in spherical equivalent (D)' },
  ],
  keywords: ['anisometropia', 'interocular refractive difference', 'spherical equivalent difference', 'amblyopia risk', 'refractive asymmetry'],
  boardRelevance: 'High',
  clinicalRelevance: 'Quantifying interocular refractive power difference and flagging when it is large enough to carry meaningful amblyopia risk (especially in children) or warrant contact lens correction over spectacles.',
  supportsPractice: false,
  convention: 'Uses spherical equivalent (SE = Sphere + Cylinder/2) for each eye, which is notation-independent (same result for plus- or minus-cylinder form).',
  limitations: [
    'This calculator quantifies the REFRACTIVE POWER difference itself (in diopters), not the resulting percent retinal image size difference — see the Retinal Image Size & Aniseikonia calculator for that distinct quantity.',
    'Classification bands (< 1.00 D mild, 1.00-2.00 D moderate, > 2.00 D significant) are standard optometric teaching guidelines, not a strict diagnostic cutoff — amblyopia risk also depends on the type of anisometropia (myopic vs. hyperopic), patient age, and other risk factors, and clinical judgment should take precedence over the band alone.',
  ],
  references: [
    'Anisometropia. In: StatPearls. NCBI Bookshelf, National Library of Medicine (NBK582146).',
    'Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.',
  ],
  relatedCalculatorIds: ['spherical-equivalent', 'retinal-image-aniseikonia'],
  relatedDiseaseIds: ['amblyopia'],
}

function Calculate() {
  const [sphereOD, setSphereOD] = useState('')
  const [cylOD, setCylOD] = useState('')
  const [sphereOS, setSphereOS] = useState('')
  const [cylOS, setCylOS] = useState('')

  const sODn = parseNumeric(sphereOD)
  const cODn = parseNumeric(cylOD)
  const sOSn = parseNumeric(sphereOS)
  const cOSn = parseNumeric(cylOS)

  const allEntered = sODn !== null && cODn !== null && sOSn !== null && cOSn !== null
  const result = allEntered ? evaluateAnisometropia(sODn, cODn, sOSn, cOSn) : null

  const trace: CalculationTrace | null =
    result && allEntered
      ? {
          formula: 'SE = Sphere + Cyl/2;  Anisometropia = |SE(OD) − SE(OS)|',
          substitution: `SE(OD) = ${formatDiopter(sODn)} + (${formatDiopter(cODn)})/2;  SE(OS) = ${formatDiopter(sOSn)} + (${formatDiopter(cOSn)})/2`,
          steps: [
            `SE(OD) = ${roundTo(result.seOD, 2)} D`,
            `SE(OS) = ${roundTo(result.seOS, 2)} D`,
            `Anisometropia = |${roundTo(result.seOD, 2)} − ${roundTo(result.seOS, 2)}| = ${roundTo(result.anisometropiaD, 2)} D`,
          ],
          finalAnswerText: `Anisometropia = ${roundTo(result.anisometropiaD, 2)} D — ${result.classification}`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div>
        <p className="text-xs font-medium text-slate-500 mb-1.5">OD (right eye)</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Sphere" unit="D" value={sphereOD} onChange={setSphereOD} placeholder="e.g. -1.00" />
          <NumberField label="Cylinder" unit="D" value={cylOD} onChange={setCylOD} placeholder="e.g. -0.50" />
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500 mb-1.5">OS (left eye)</p>
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Sphere" unit="D" value={sphereOS} onChange={setSphereOS} placeholder="e.g. -3.50" />
          <NumberField label="Cylinder" unit="D" value={cylOS} onChange={setCylOS} placeholder="e.g. -0.50" />
        </div>
      </div>
      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ResultStat label="SE (OD)" value={`${formatDiopter(result.seOD)} D`} tone="slate" />
            <ResultStat label="SE (OS)" value={`${formatDiopter(result.seOS)} D`} tone="slate" />
          </div>
          <ResultStat label="Anisometropia" value={`${roundTo(result.anisometropiaD, 2)} D`} />
          <p className="text-sm text-slate-600">{result.classification}</p>
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `Anisometropia: ${roundTo(result.anisometropiaD, 2)} D — ${result.classification}` : undefined}
        onReset={() => {
          setSphereOD('')
          setCylOD('')
          setSphereOS('')
          setCylOS('')
        }}
      />
    </Card>
  )
}

export function Anisometropia() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
