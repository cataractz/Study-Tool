import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { visualAngle } from './visualAngleMar.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'visual-angle-mar',
  name: 'Visual Angle & MAR (from Object Size)',
  category: 'Visual Acuity',
  description: 'Computes the visual angle a real object of known size subtends at a known viewing distance (exact trigonometry) — distinct from the Visual Acuity Converter, which converts between acuity NOTATIONS rather than computing angle from physical size and distance.',
  formula: 'θ (deg) = 2 × atan(size / (2 × distance)) × (180/π);  arcmin = θ × 60',
  variables: [
    { symbol: 'θ', meaning: 'Visual angle subtended by the object (degrees)' },
    { symbol: 'size', meaning: 'Object (critical detail) size — same unit as distance' },
    { symbol: 'distance', meaning: 'Viewing distance — same unit as size' },
    { symbol: 'arcmin', meaning: 'Visual angle in minutes of arc (θ × 60)' },
  ],
  keywords: ['visual angle', 'minimum angle of resolution', 'MAR', 'object subtense', 'angular subtense', 'arcmin', 'arctan'],
  boardRelevance: 'Moderate',
  clinicalRelevance: 'Computing the exact angular size of a real target (a test object, an optotype detail, a fixation target) from its physical size and viewing distance — the geometric basis for minimum angle of resolution.',
  supportsPractice: false,
  convention: "The decimal-acuity/logMAR conversion below assumes the entered size IS the critical resolvable detail (e.g. a Landolt-C gap or a letter's stroke width) — NOT the overall optotype height. A 20/20 letter's overall height subtends 5 arcmin, while its critical stroke/gap detail subtends only 1 arcmin (MAR = 1 arcmin = decimal acuity 1.0). Do not conflate the two: only enter the critical detail size if you want a meaningful acuity-equivalent result.",
  limitations: [
    'This uses exact trigonometry (arctan), not the small-angle approximation — accurate at any distance, though the two converge closely for the small angles typical of acuity testing.',
    'The "equivalent decimal acuity / logMAR" result is only meaningful when the entered size represents the patient\'s actual resolution threshold for that detail — otherwise it is simply reporting object subtense, not a measured acuity.',
  ],
  relatedCalculatorIds: ['visual-acuity-converter'],
}

function Calculate() {
  const [size, setSize] = useState('')
  const [distance, setDistance] = useState('')

  const sizeN = parseNumeric(size)
  const distN = parseNumeric(distance)

  let result: ReturnType<typeof visualAngle> | null = null
  let error: string | null = null
  if (sizeN !== null && distN !== null) {
    try {
      result = visualAngle(sizeN, distN)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Invalid input.'
    }
  }

  const trace: CalculationTrace | null =
    result && sizeN !== null && distN !== null
      ? {
          formula: 'θ = 2 × atan(size / (2 × distance)) × (180/π)',
          substitution: `θ = 2 × atan(${sizeN} / (2 × ${distN})) × (180/π)`,
          steps: [
            `θ = ${roundTo(result.degrees, 4)}°`,
            `arcmin = ${roundTo(result.degrees, 4)} × 60 = ${roundTo(result.arcmin, 2)}′`,
          ],
          finalAnswerText: `Visual angle = ${roundTo(result.arcmin, 2)}′ (${roundTo(result.degrees, 4)}°)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NumberField label="Object / detail size" value={size} onChange={setSize} placeholder="e.g. 8.7 (mm)" />
        <NumberField label="Viewing distance" value={distance} onChange={setDistance} placeholder="e.g. 6000 (mm) — same unit as size" error={error ?? undefined} />
      </div>
      <p className="text-xs text-slate-400">Enter size and distance in the same unit (e.g. both mm, or both m).</p>
      {result && (
        <>
          <ResultStat label="Visual angle subtended" value={`${roundTo(result.arcmin, 2)}′ (${roundTo(result.degrees, 4)}°)`} />
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-xs font-medium text-amber-700">Equivalent decimal acuity / logMAR — only valid if this angle IS your resolution threshold</p>
            <p className="text-sm text-slate-700 mt-1">
              Decimal ≈ {roundTo(result.decimalAcuityEquivalent, 3)} · logMAR ≈ {roundTo(result.logMAR, 3)}
            </p>
          </div>
        </>
      )}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `Visual angle: ${roundTo(result.arcmin, 2)}′ (${roundTo(result.degrees, 4)}°)` : undefined}
        onReset={() => {
          setSize('')
          setDistance('')
        }}
      />
    </Card>
  )
}

export function VisualAngleMAR() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
