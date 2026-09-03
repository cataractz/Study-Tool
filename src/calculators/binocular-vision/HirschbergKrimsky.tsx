import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions, CalculationStepsCard } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { parseNumeric, roundTo } from '../shared/format'
import { evaluateHirschberg, type DecentrationDirection } from './hirschbergKrimsky.engine'
import type { CalculatorMeta, CalculationTrace } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'hirschberg-krimsky-estimation',
  name: 'Hirschberg / Krimsky Estimation',
  category: 'Binocular Vision',
  description: 'Estimates strabismic deviation magnitude from corneal light reflex decentration (Hirschberg test), using a user-selected mm-to-prism-diopter conversion ratio.',
  formula: 'Estimated deviation (Δ) = decentration (mm) × ratio (Δ/mm)   ·   angle (°) = atan(Δ/100) × 180/π',
  variables: [
    { symbol: 'decentration', meaning: 'Distance the corneal light reflex is displaced from the pupil center (mm)' },
    { symbol: 'ratio', meaning: 'Selected mm-to-prism-diopter conversion (Δ/mm) — see convention note' },
    { symbol: 'Δ', meaning: 'Estimated deviation magnitude, in prism diopters' },
  ],
  keywords: ['hirschberg test', 'krimsky test', 'corneal light reflex', 'strabismus estimation', 'angle kappa', 'prism reflex ratio'],
  boardRelevance: 'High',
  clinicalRelevance: 'Rapid bedside/chairside estimation of strabismic deviation magnitude in patients who cannot cooperate with subjective cover testing (e.g. preverbal children, poor fixation).',
  supportsPractice: false,
  convention:
    'Nasal reflex decentration = the visual axis is deviated outward = exodeviation. Temporal decentration = esodeviation. Krimsky testing (adding prism until the reflex is centered) is a directly MEASURED finding, not a calculation — this tool only estimates from Hirschberg-style decentration; a Krimsky-measured prism value should be recorded as-is, not run back through this formula.',
  limitations: [
    'The mm-to-prism-diopter conversion ratio for the Hirschberg test is genuinely disputed in the literature. US optometric teaching commonly cites 15 Δ/mm. Photographic/biometric studies instead report values closer to 20 Δ/mm (Hasebe et al. found a mean of 19.9 ± 1.9 Δ/mm) up to a commonly cited 22 Δ/mm rule of thumb. This calculator does not silently pick one — select the ratio your source/institution uses.',
    'Hirschberg estimation is inherently imprecise (typically graded in ~5-10Δ steps by observation) and is not a substitute for prism-neutralized cover testing (Krimsky or alternate cover test with prism) when the patient can cooperate.',
    'Assumes a normal, symmetric angle kappa; a large or asymmetric angle kappa will make the reflex position a poor proxy for true visual axis alignment.',
  ],
  references: [
    'Hasebe S, Ohtsuki H, Kono R, Nakahira Y. Biometric confirmation of the Hirschberg ratio in strabismic children. Invest Ophthalmol Vis Sci. 1998;39:2782-2785.',
    'Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.',
  ],
  relatedCalculatorIds: ['prism-combination'],
  relatedDiseaseIds: ['infantile-esotropia', 'accommodative-esotropia', 'intermittent-exotropia'],
  relatedExamTechniqueIds: ['hirschberg-krimsky-test'],
}

const RATIO_OPTIONS = [
  { value: '15', label: '15 Δ/mm (common US optometric teaching)' },
  { value: '20', label: '20 Δ/mm (biometric studies, ~19.9 Δ/mm)' },
  { value: '22', label: '22 Δ/mm (commonly cited rule of thumb)' },
]

function Calculate() {
  const [decentration, setDecentration] = useState('')
  const [ratio, setRatio] = useState('15')
  const [direction, setDirection] = useState<DecentrationDirection>('nasal')

  const decN = parseNumeric(decentration)
  const ratioN = parseNumeric(ratio) ?? 15

  let result: ReturnType<typeof evaluateHirschberg> | null = null
  let error: string | null = null
  if (decN !== null) {
    try {
      result = evaluateHirschberg(decN, ratioN, direction)
    } catch (e) {
      error = e instanceof Error ? e.message : 'Calculation error'
    }
  }

  const outputLabel = result?.deviationType === 'exodeviation' ? 'Estimated exodeviation' : 'Estimated esodeviation'

  const trace: CalculationTrace | null =
    result && decN !== null
      ? {
          formula: 'Estimated deviation (Δ) = decentration (mm) × ratio (Δ/mm)',
          substitution: `Estimated deviation = ${decN} × ${ratioN}`,
          steps: [
            `Estimated deviation = ${roundTo(result.estimatedPrismDiopters, 2)} Δ`,
            `Angle = atan(${roundTo(result.estimatedPrismDiopters, 2)}/100) × 180/π = ${roundTo(result.estimatedDegrees, 2)}°`,
          ],
          finalAnswerText: `${outputLabel} ≈ ${roundTo(result.estimatedPrismDiopters, 2)} Δ (≈ ${roundTo(result.estimatedDegrees, 2)}°)`,
        }
      : null

  return (
    <Card className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <NumberField label="Reflex decentration" unit="mm" value={decentration} onChange={setDecentration} placeholder="e.g. 1.0" error={error ?? undefined} />
        <SelectField label="Conversion ratio" value={ratio} onChange={setRatio} options={RATIO_OPTIONS} />
        <SelectField
          label="Decentration direction"
          value={direction}
          onChange={(v) => setDirection(v as DecentrationDirection)}
          options={[
            { value: 'nasal', label: 'Nasal (reflex displaced toward nose)' },
            { value: 'temporal', label: 'Temporal (reflex displaced toward temple)' },
          ]}
        />
      </div>
      {result && <ResultStat label={outputLabel} value={`${roundTo(result.estimatedPrismDiopters, 2)} Δ (≈ ${roundTo(result.estimatedDegrees, 2)}°)`} />}
      {trace && <CalculationStepsCard trace={trace} />}
      <ResultActions
        copyText={result ? `${outputLabel}: ${roundTo(result.estimatedPrismDiopters, 2)} Δ (≈ ${roundTo(result.estimatedDegrees, 2)}°) at ${ratioN} Δ/mm` : undefined}
        onReset={() => {
          setDecentration('')
          setRatio('15')
          setDirection('nasal')
        }}
      />
    </Card>
  )
}

export function HirschbergKrimsky() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} />
}
