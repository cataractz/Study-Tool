import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'morgans-norms',
  name: "Morgan's Norms — Binocular Vision & Accommodative Testing",
  category: 'Binocular Vision',
  description: 'Classic expected findings for phorias, vergence ranges, NRA/PRA, AC/A, and accommodative facility.',
  keywords: ['morgan', "morgan's norms", 'binocular vision norms', 'phoria', 'vergence ranges', 'NRA', 'PRA', 'NPC', 'AC/A', 'expected findings'],
}

export function MorgansNorms() {
  return (
    <ReferenceShell meta={meta}>
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Phorias &amp; Near Point of Convergence</h2>
        <ReferenceTable
          headers={['Measure', 'Expected finding']}
          rows={[
            ['Distance lateral phoria', '1Δ exophoria (±2Δ)'],
            ['Near lateral phoria', '3Δ exophoria (±3Δ)'],
            ['NPC — break', '5 cm'],
            ['NPC — recovery', '7 cm'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Fusional Vergence Ranges (prism diopters — blur / break / recovery)</h2>
        <ReferenceTable
          headers={['Test', 'Blur', 'Break', 'Recovery']}
          rows={[
            ['Distance Base-Out (PFV)', '9', '19', '10'],
            ['Distance Base-In (NFV)', '7', '11', '7'],
            ['Near Base-Out (PFV)', '17', '21', '11'],
            ['Near Base-In (NFV)', '13', '21', '13'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Accommodative Testing</h2>
        <ReferenceTable
          headers={['Measure', 'Expected finding']}
          rows={[
            ['NRA (Negative Relative Accommodation)', '+2.00 D (±0.50 D)'],
            ['PRA (Positive Relative Accommodation)', '−2.37 D (±1.00 D)'],
            ['Monocular accommodative facility', '~11 cpm (±5 cpm)'],
            ['Calculated AC/A ratio', '4:1 (commonly cited range 3–5:1)'],
            ['Amplitude of accommodation', 'See the Amplitude of Accommodation by Age reference (Hofstetter/Donders)'],
          ]}
        />
      </div>

      <p className="text-xs text-slate-500">
        "Morgan's norms" (from Morgan MW, 1944, and widely reproduced since) remain one of the most commonly
        referenced expected-findings sets in optometric education for classifying binocular vision and accommodative
        anomalies. Numeric reproductions vary somewhat across textbooks and secondary sources — the values above
        reflect the most consistently cross-referenced figures found during research for this table, but treat them
        as a widely-used teaching reference rather than a single authoritative clinical cutoff, and confirm against a
        primary text (e.g. Scheiman &amp; Wick, <em>Clinical Management of Binocular Vision</em>) before relying on
        them for a specific diagnostic decision. Vergence facility and MEM retinoscopy norms are intentionally
        omitted here — available secondary sources did not agree closely enough on exact figures to reproduce with
        confidence.
      </p>
    </ReferenceShell>
  )
}
