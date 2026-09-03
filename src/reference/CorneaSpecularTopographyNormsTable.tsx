import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'cornea-specular-topography-norms',
  name: 'Corneal Specular Microscopy & Topography Norms',
  category: 'Diagnostic Testing & Imaging',
  description: 'Normal endothelial cell density by age, coefficient of variation and hexagonality cutoffs, plus normal keratometry and the keratoconus-screening indices (Kmax, BAD-D, ISV/IVA/KI) — with the device-specific caveats each carries.',
  keywords: [
    'specular microscopy',
    'endothelial cell density',
    'ECD',
    'corneal endothelium',
    'polymegethism',
    'coefficient of variation',
    'hexagonality',
    'pleomorphism',
    'corneal topography',
    'corneal tomography',
    'keratometry',
    'keratoconus screening',
    'Kmax',
    'Belin-Ambrosio',
    'BAD-D',
    'Pentacam',
    'Scheimpflug',
    'ISV',
    'IVA',
    'KI',
    'Orbscan',
  ],
}

export function CorneaSpecularTopographyNormsTable() {
  return (
    <ReferenceShell meta={meta}>
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Endothelial Cell Density (ECD) by Age</h2>
        <ReferenceTable
          headers={['Age group', 'Typical ECD']}
          rows={[
            ['Newborn / infant', 'Roughly 3,500–4,000+ cells/mm² commonly cited in teaching sources (one normative study extrapolated ~2,957 cells/mm² at birth, rising to a mean ~3,746 cells/mm² by age 0.1–5 years — published figures for this age range vary noticeably by study and methodology)'],
            ['Young adult', 'Commonly cited teaching range ~2,500–3,000 cells/mm² (individual published normative studies report quite different absolute means for this group — figures anywhere from roughly 2,400 to over 4,000 cells/mm² have been reported depending on population and counting method, so treat the number as approximate)'],
            ['Older adult / elderly', 'Lower than young adult — cell density declines gradually over life (roughly 0.5–0.6% per year is a commonly cited rate of loss), so elderly patients typically read lower than the young-adult range above'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        Endothelial cells do not regenerate — density only ever falls with age, injury, or intraocular surgery, with
        neighboring cells enlarging and migrating to cover the loss (which is exactly what drives the polymegethism/
        pleomorphism changes below). A cell density around <strong>2,000 cells/mm²</strong> is a commonly cited rough
        threshold for reduced "functional reserve" — raising caution before intraocular surgery — but published risk
        analyses disagree on exactly where the danger zone starts: some place the more serious risk of postoperative
        corneal decompensation (e.g. pseudophakic bullous keratopathy) at counts below roughly 1,000–1,500 cells/mm²
        rather than at 2,000. Treat 2,000 cells/mm² as a "start paying closer attention" threshold, not a hard cutoff
        for surgical safety.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Cell Shape: Coefficient of Variation &amp; Hexagonality</h2>
        <ReferenceTable
          headers={['Parameter', 'What it reflects', 'Typical/normal value']}
          rows={[
            ['Coefficient of variation (CV) — polymegethism', 'Variability in individual cell SIZE (CV = SD of cell area ÷ mean cell area)', 'Normal roughly 0.22–0.31; 0.32–0.40 is elevated; > 0.40 is abnormal'],
            ['Hexagonality — pleomorphism', 'Variability in cell SHAPE — the proportion of endothelial cells that remain six-sided', 'A healthy endothelium is commonly cited as roughly 60% hexagonal cells; below ~50% hexagonal cells is considered clinically significant pleomorphism'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Normal Keratometry</h2>
        <ReferenceTable
          headers={['Measure', 'Typical value']}
          rows={[
            ['Average corneal power, healthy adult', 'Roughly 43–44 D on average'],
            ['Commonly cited "normal" band', 'Roughly 42–46 D (some sources give a slightly wider 41–47 D band)'],
            ['Flat cornea', 'Below the normal band (roughly < 40–42 D, depending on the source\'s cutoff)'],
            ['Steep cornea', 'Above the normal band — see keratoconus screening cutoffs below for where "steep" starts raising specific ectasia concern'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Keratoconus Screening Indices</h2>
        <ReferenceTable
          headers={['Index', 'Device type', 'Commonly cited cutoff(s)']}
          rows={[
            ['Kmax (maximum anterior corneal curvature)', 'Any topographer/tomographer that reports Kmax', 'Below ~47.2 D commonly considered normal; ~47.2–48.7 D commonly flagged as probable/forme-fruste keratoconus; above ~48.7 D commonly considered clinical keratoconus — different sources report somewhat different Kmax breakpoints, so treat these as a commonly cited scheme rather than a universal cutoff'],
            ['BAD-D (Belin/Ambrosio Enhanced Ectasia Display, "final D" score)', 'Pentacam (Scheimpflug tomographer)', 'The Pentacam display itself flags any individual component ≥1.6 SD from its normative mean in yellow ("suspicious") and ≥2.6 SD in red; as an overall classifier, one validation study reported a final BAD-D value around 1.3 D as the cutoff separating normal from keratoconus eyes — published cutoff values vary by validation study'],
            ['ISV (Index of Surface Variance)', 'Placido/Scheimpflug combination topographers', 'Deviation of the corneal radius of curvature from the expected regular pattern — elevated in keratoconus; reported among the strongest single discriminators for clinical keratoconus, but its exact numeric cutoff is device/software-specific rather than a single universally reproduced number'],
            ['IVA (Index of Vertical Asymmetry)', 'Placido/Scheimpflug combination topographers', 'Asymmetry of curvature above vs. below the horizontal meridian — elevated with the inferior steepening typical of early keratoconus; like ISV, a strong discriminator in validation studies but without one universally reported cutoff'],
            ['KI (Keratoconus Index)', 'Placido/Scheimpflug combination topographers', 'Ratio comparing curvature of the upper vs. lower cornea; used alongside ISV/IVA rather than in isolation'],
          ]}
        />
      </div>

      <p className="text-xs text-slate-500">
        Placido-disc topographers (reflection-based, front-surface curvature only — e.g. classic EyeSys/TMS-style
        devices) and Scheimpflug/slit-scan TOMOGRAPHERS (which additionally capture posterior corneal elevation and
        full pachymetry — e.g. Pentacam, Galilei, Orbscan) are measuring genuinely different things and compute their
        screening indices with different, largely proprietary algorithms calibrated against that device's own
        normative population. ISV, IVA, KI, and BAD-D are not interchangeable across brands, and posterior corneal
        elevation cutoffs are a clear example of this disagreement in the literature — one commonly cited Orbscan
        study reported optimal posterior elevation cutoffs around 51 µm for clinical keratoconus and 35 µm for
        subclinical keratoconus, values specific to that device's elevation reference and not directly transferable
        to a different tomographer's posterior elevation map. No single index (including Kmax) is considered
        sufficient alone for keratoconus screening — current teaching favors combining several indices, especially
        when the anterior curvature pattern still looks unremarkable (subclinical/forme-fruste disease).
      </p>
    </ReferenceShell>
  )
}
