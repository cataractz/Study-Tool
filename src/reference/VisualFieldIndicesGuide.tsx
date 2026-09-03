import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'visual-field-indices',
  name: 'Visual Field Global Indices — Interpretation Guide',
  category: 'Diagnostic Testing & Imaging',
  description: 'What MD, PSD, VFI, and GHT each measure on a Humphrey/SITA printout, Hodapp-Parrish-Anderson glaucoma staging by MD, and the reliability-index thresholds (fixation losses, false positives/negatives).',
  keywords: [
    'visual field',
    'perimetry',
    'Humphrey',
    'HFA',
    'SITA',
    'mean deviation',
    'MD',
    'pattern standard deviation',
    'PSD',
    'visual field index',
    'VFI',
    'glaucoma hemifield test',
    'GHT',
    'Hodapp-Parrish-Anderson',
    'HPA criteria',
    'glaucoma staging',
    'reliability indices',
    'fixation losses',
    'false positive',
    'false negative',
    'perimetry interpretation',
  ],
}

export function VisualFieldIndicesGuide() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        Every Humphrey/SITA printout carries four global summary numbers plus three reliability indices. This page
        covers what each one measures and how it's typically used — it does not replace reading the full grayscale,
        total deviation, and pattern deviation plots, which carry information the single-number summaries can miss.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Global Indices</h2>
        <ReferenceTable
          headers={['Index', 'What it measures', 'How to read it']}
          rows={[
            [
              'MD (Mean Deviation)',
              "The overall average difference between this field and an age-matched normal field, in dB.",
              'MD near 0 = normal overall sensitivity. A more NEGATIVE MD = more overall vision loss — it reflects both diffuse loss (e.g. cataract, small pupil, uncorrected refractive error) and focal glaucomatous loss added together, so a negative MD alone does not distinguish the two.',
            ],
            [
              'PSD (Pattern Standard Deviation)',
              'How much the shape of the field deviates from a smooth hill of vision — the field\'s irregularity, after the overall (diffuse) level is factored out.',
              'A field depressed UNIFORMLY at every point (e.g. from a dense cataract) can have a very negative MD but a normal/low PSD, since there is no irregularity to detect. A field with one or more deep, LOCALIZED defects against a relatively intact background has a HIGH PSD — this is the classic early glaucomatous pattern. In advanced, near-total field loss there is little variability left to measure, so PSD can paradoxically fall again even as damage worsens — reported to occur once MD drops to roughly -14 dB or beyond in some analyses, so PSD is most informative in mild-to-moderate disease.',
            ],
            [
              'VFI (Visual Field Index)',
              "Overall field status expressed as a percentage of a normal, age-corrected field (100% = statistically normal for age, 0% = no measurable field/perimetrically blind), weighting central points more heavily than peripheral ones.",
              'Used mainly for glaucoma progression analysis (e.g. Guided Progression Analysis) because — unlike MD — it is intentionally less influenced by diffuse, non-glaucomatous loss such as cataract, making a percentage trend over time easier to follow than raw dB change.',
            ],
            [
              'GHT (Glaucoma Hemifield Test)',
              'Compares 5 mirror-image zones in the superior hemifield against their corresponding zones in the inferior hemifield, since glaucoma typically damages the two hemifields asymmetrically (respecting the horizontal midline) while normal eyes and diffuse disease tend to affect both symmetrically.',
              'Reported as one of: Within Normal Limits, Borderline, Outside Normal Limits, General Reduction of Sensitivity, or Abnormally High Sensitivity. A repeatable "Outside Normal Limits" result is treated as strong, stand-alone evidence of glaucomatous damage under the Hodapp-Parrish-Anderson criteria — it does not require a specific MD/PSD value alongside it.',
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Glaucoma Staging by MD (Hodapp-Parrish-Anderson criteria)</h2>
        <ReferenceTable
          headers={['Stage', 'MD (24-2/30-2)', 'Additional pattern-deviation criteria (commonly cited)']}
          rows={[
            ['Mild / early', 'Better than −6 dB', '< 25% of points depressed below the 5% level; < 10 points below the 1% level; no point within the central 5° depressed below 15 dB'],
            ['Moderate', '−6 to −12 dB', '< 50% of points depressed below the 5% level; < 20 points below the 1% level; no point within the central 5° at 0 dB; only ONE hemifield may have a point < 15 dB within 5° of fixation'],
            ['Severe / advanced', 'Worse than −12 dB', '> 50% of points depressed below the 5% level; > 20 points below the 1% level; at least one point within the central 5° at 0 dB; BOTH hemifields may have points < 15 dB within 5° of fixation'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        Hodapp-Parrish-Anderson is the most widely taught/cited MD-based staging scheme, but it is one of several in
        use (others weight different point-deviation criteria or use different dB breakpoints), and different
        secondary sources reproduce its exact point-count criteria with minor variation — treat the MD cutoffs above
        as the load-bearing part and the point-count details as illustrative of the general logic (increasing
        proportion and depth of depressed points, encroaching further into the central field) rather than a fixed,
        universally reproduced rule.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Reliability Indices</h2>
        <ReferenceTable
          headers={['Index', 'What it flags', 'Commonly cited acceptable threshold']}
          rows={[
            ['Fixation losses (FL)', 'Patient responds to a stimulus presented at the (previously mapped) physiologic blind spot — suggests unstable fixation or a mislocated blind spot', '< 20% (some clinicians apply a stricter < 15% rule of thumb)'],
            ['False positives (FP)', 'Patient responds when no stimulus was presented ("trigger-happy" responding) — can mask real defects by making the field look better than it is', '< 33% per the manufacturer\'s default reliability criterion; some sources flag concern at rates as low as 10–15%'],
            ['False negatives (FN)', 'Patient fails to respond to a stimulus brighter than one they previously responded to at the same location — classically attributed to fatigue or inattention', '< 33% per the manufacturer\'s default reliability criterion'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        A caveat worth knowing: on SITA algorithms, false-negative catch trials are sampled more sparingly than on
        older full-threshold testing, and an elevated FN rate in a field with substantial real glaucomatous loss can
        partly reflect genuine field damage (a patient legitimately failing to see a dim stimulus at an already
        -damaged location) rather than poor patient reliability — so a high FN rate in an advanced field should be
        interpreted with more caution than the same rate in an otherwise healthy-looking field.
      </p>

      <p className="text-xs text-slate-500">
        These indices summarize a single test; a field is only truly reliable when the pattern is repeatable across
        more than one visit, and none of MD, PSD, VFI, or GHT is diagnostic in isolation — all are interpreted
        alongside the grayscale/deviation plots, the optic nerve/OCT exam, and IOP/CCT history.
      </p>
    </ReferenceShell>
  )
}
