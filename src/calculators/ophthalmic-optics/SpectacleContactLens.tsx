import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { NumberField, SelectField, ResultStat, ResultActions } from '../shared/ui'
import { CalculatorShell } from '../shared/CalculatorShell'
import { PracticePanel } from '../shared/PracticePanel'
import { parseNumeric, formatDiopter, formatAxis } from '../shared/format'
import { specToCL, clToSpec } from './spectacleContactLens.engine'
import type { CalculatorMeta, Difficulty, PracticeProblem } from '../../types/calculator'

export const meta: CalculatorMeta = {
  id: 'spectacle-contact-lens',
  name: 'Spectacle ↔ Contact Lens Conversion',
  category: 'Ophthalmic Optics',
  description: 'Convert a spherocylindrical Rx between the spectacle plane and the corneal (contact lens) plane.',
  formula: "F' = F / (1 − d·F), applied to each principal meridian",
  variables: [
    { symbol: "F'", meaning: 'Power at the new vertex plane (D)' },
    { symbol: 'F', meaning: 'Power at the original vertex plane (D)' },
    { symbol: 'd', meaning: 'Vertex distance between the two planes (m)' },
  ],
  keywords: ['contact lens conversion', 'vertex distance', 'spectacle to contact lens', 'CL power'],
  boardRelevance: 'High',
  clinicalRelevance: 'Deriving a starting contact lens power from a refraction performed at spectacle plane, and vice versa.',
  supportsPractice: true,
  convention: 'Vertex distance in mm, positive. Each principal meridian (S and S+C) is converted independently, then sphere/cylinder are reconstituted — more accurate for astigmatic Rx than converting sphere alone.',
  limitations: ['Most clinically significant above about ±4.00 D; low-power differences are usually within measurement noise.'],
  references: [
    'Benjamin WJ. Borish\'s Clinical Refraction, 2nd ed. Butterworth-Heinemann, 2006.',
    'Bennett ES, Henry VA. Clinical Manual of Contact Lenses, 4th ed. Lippincott Williams & Wilkins.',
  ],
}

function Calculate() {
  const [direction, setDirection] = useState<'toCL' | 'toSpec'>('toCL')
  const [sphere, setSphere] = useState('')
  const [cylinder, setCylinder] = useState('')
  const [axis, setAxis] = useState('')
  const [vertexMm, setVertexMm] = useState('12')

  const s = parseNumeric(sphere)
  const c = parseNumeric(cylinder) ?? 0
  const a = parseNumeric(axis) ?? 0
  const v = parseNumeric(vertexMm)

  const result = s !== null && v !== null ? (direction === 'toCL' ? specToCL({ sphere: s, cylinder: c, axis: a }, v / 1000) : clToSpec({ sphere: s, cylinder: c, axis: a }, v / 1000)) : null

  return (
    <Card className="space-y-4">
      <SelectField
        label="Direction"
        value={direction}
        onChange={(v) => setDirection(v as 'toCL' | 'toSpec')}
        options={[
          { value: 'toCL', label: 'Spectacle → Contact Lens' },
          { value: 'toSpec', label: 'Contact Lens → Spectacle' },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <NumberField label="Sphere" unit="D" value={sphere} onChange={setSphere} />
        <NumberField label="Cylinder" unit="D" value={cylinder} onChange={setCylinder} placeholder="0" />
        <NumberField label="Axis" unit="°" value={axis} onChange={setAxis} placeholder="0" />
        <NumberField label="Vertex distance" unit="mm" value={vertexMm} onChange={setVertexMm} />
      </div>
      {result !== null && (
        <ResultStat label="Converted Rx" value={`${formatDiopter(result.sphere)} ${formatDiopter(result.cylinder)} × ${formatAxis(result.axis)}`} />
      )}
      <ResultActions
        copyText={result !== null ? `${formatDiopter(result.sphere)} ${formatDiopter(result.cylinder)} × ${formatAxis(result.axis)}` : undefined}
        onReset={() => {
          setSphere('')
          setCylinder('')
          setAxis('')
          setVertexMm('12')
        }}
      />
    </Card>
  )
}

function generateProblem(difficulty: Difficulty): PracticeProblem {
  const sphere = difficulty === 'Basic' ? [6, -6, 7, -7][Math.floor(Math.random() * 4)] : difficulty === 'Intermediate' ? [8, -8, 9, -9][Math.floor(Math.random() * 4)] : [10, -10, -2, -2][Math.floor(Math.random() * 4)]
  const cylinder = difficulty === 'Advanced' ? -1.5 : 0
  const vertexMm = 12
  const result = specToCL({ sphere, cylinder, axis: 180 }, vertexMm / 1000)
  return {
    prompt: `A spectacle Rx of ${formatDiopter(sphere)}${cylinder !== 0 ? ` ${formatDiopter(cylinder)} × 180` : ''} D is measured at a 12 mm vertex distance. What is the equivalent contact lens sphere power?`,
    difficulty,
    answers: [{ key: 's', label: 'CL sphere power', unit: 'D', value: result.sphere, tolerance: 0.13 }],
    formula: "F' = F / (1 − d·F)",
    substitution: `F' = ${formatDiopter(sphere)} / (1 − 0.012 × ${formatDiopter(sphere)})`,
    steps: [`F' = ${sphere} / (1 − ${(0.012 * sphere).toFixed(4)})`, `F' = ${result.sphere.toFixed(2)} D`],
    finalAnswerText: `CL sphere ≈ ${formatDiopter(result.sphere)} D`,
    why: 'Moving the correcting lens from the spectacle plane to the corneal plane changes the vergence reaching the eye, more so for higher powers.',
  }
}

export function SpectacleContactLens() {
  return <CalculatorShell meta={meta} calculateContent={<Calculate />} practiceContent={<PracticePanel generate={generateProblem} />} />
}
