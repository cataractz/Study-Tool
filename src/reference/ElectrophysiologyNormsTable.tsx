import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'electrophysiology-norms',
  name: 'Electrophysiology Normal Values — ERG, EOG & VEP',
  category: 'Diagnostic Testing & Imaging',
  description: 'ISCEV-protocol full-field ERG responses, the EOG Arden (light peak:dark trough) ratio cutoff, and normal VEP P100 latency/amplitude — typical ranges, not a substitute for a lab\'s own normative data.',
  keywords: [
    'electrophysiology',
    'ERG',
    'electroretinogram',
    'ISCEV',
    'scotopic',
    'photopic',
    'flicker ERG',
    'a-wave',
    'b-wave',
    'implicit time',
    'EOG',
    'electrooculogram',
    'Arden ratio',
    'light peak dark trough ratio',
    'Best disease',
    'VEP',
    'visual evoked potential',
    'P100',
    'pattern VEP',
    'optic neuritis',
    'demyelination',
  ],
}

export function ElectrophysiologyNormsTable() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        ISCEV (International Society for Clinical Electrophysiology of Vision) publishes standards for ERG, EOG, and
        VEP that fix the STIMULUS and RECORDING PROTOCOL (flash strength, adaptation state, electrode placement,
        timing) so results are comparable across centers — but ISCEV deliberately does not publish one fixed set of
        normal amplitude/latency numbers for every lab to use. Each clinical electrophysiology lab is expected to
        establish its own normative range on its own equipment. Published normative studies that nominally follow
        the same ISCEV protocol still report substantially different absolute amplitude values from each other
        (examples below), which is direct evidence of this — so treat every number on this page as illustrative of
        the typical order of magnitude and the expected pattern between conditions, not a diagnostic cutoff.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Full-Field ERG — ISCEV Standard Protocols</h2>
        <ReferenceTable
          headers={['Response', 'Adaptation / flash', 'What it isolates', 'Typical pattern']}
          rows={[
            ['DA 0.01 ("rod response")', 'Dark-adapted, dim flash', 'Rod-driven pathway only — cones do not respond to so dim a flash', 'A slow, relatively small b-wave with no distinct a-wave; markedly reduced or absent in rod-photoreceptor disease (e.g. congenital stationary night blindness, retinitis pigmentosa)'],
            ['DA 3.0 ("combined rod-cone / maximal response")', 'Dark-adapted, standard bright flash', 'Both rod and cone systems together (rod-driven b-wave dominates in the healthy eye)', 'A larger a-wave than DA 0.01, followed by a b-wave roughly 1.5–2× the a-wave in amplitude; a b-wave SMALLER than the a-wave ("electronegative" ERG) is an abnormal pattern seen in disorders of the inner retina/bipolar cells (e.g. X-linked retinoschisis, some CSNB, central retinal artery/vein occlusion)'],
            ['DA 3.0 oscillatory potentials', 'Dark-adapted, standard flash, high-pass filtered', 'Small wavelets riding on the ascending b-wave, thought to originate from inner-retinal (amacrine cell) activity', 'Reduced early in some vascular retinopathies (e.g. diabetic retinopathy) before other ERG changes appear'],
            ['DA 10.0 ("strong flash")', 'Dark-adapted, brighter flash than DA 3.0', 'Saturated rod-cone response; used to assess a-wave when DA 3.0 a-wave is hard to isolate', 'Larger a-wave than DA 3.0 from the stronger stimulus'],
            ['LA 3.0 ("light-adapted / cone response")', 'Light-adapted (rod system suppressed by a steady background light), standard flash', 'Cone-driven pathway only', 'Smaller a- and b-wave amplitudes than the dark-adapted responses; selectively reduced/absent in cone dystrophies while DA responses stay relatively preserved'],
            ['LA 30 Hz flicker', 'Light-adapted, 30 Hz flickering stimulus', 'Cone pathway only — rods cannot follow a 30 Hz flicker, so this isolates cone function even more specifically than LA 3.0', 'A smooth, sinusoidal-looking waveform; implicit time is prolonged and amplitude reduced early in some cone-pathway and ischemic retinal conditions (e.g. used clinically to help predict neovascularization risk after central retinal vein occlusion)'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        Illustrative amplitude figures reported in different published "normal" cohorts under broadly ISCEV-consistent
        protocols include, among others: a combined dark-adapted b-wave amplitude of roughly 300 µV in one adult
        normative study, versus roughly 230 µV as the mean in normal fellow eyes of a different clinical case series,
        versus a b-wave range as low as single-digit to ~30 µV reported in one pediatric skin-electrode ERG study
        (which used a different, lower-signal electrode type than the standard corneal electrode most labs use) —
        underscoring that electrode type, exact flash calibration, subject age, and population all move the absolute
        number substantially even when the underlying protocol is nominally the same. LA 30 Hz flicker implicit time
        has been reported around 31–33 ms in normal/control eyes in more than one study, making it one of the more
        consistently reproduced figures in the literature, but it is still not a substitute for a specific lab's own
        established cutoff.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">EOG (Electro-oculogram)</h2>
        <ReferenceTable
          headers={['Measure', 'Value']}
          rows={[
            ['Arden ratio (light peak : dark trough ratio)', '≥ 1.80 is commonly cited as normal; 1.65–1.80 subnormal; < 1.65 significantly subnormal'],
            ['Typical/reported normal range', 'Roughly 1.7–4.3 across published series, with average values around 2.0–2.5 — the ratio also declines gradually with age'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        The EOG's light-rise ("Arden ratio") measures a slow standing potential across the retinal pigment epithelium
        that increases with light adaptation — a distinct measurement from the ERG, generated by a different tissue
        (RPE rather than photoreceptors/bipolar cells). The ISCEV Standard for clinical electro-oculography (2017
        update) now formally terms this the "light peak:dark trough ratio" rather than Arden ratio, though "Arden
        ratio" remains the more commonly used clinical name. Its classic clinical use is Best vitelliform macular
        dystrophy, where the EOG is markedly abnormal even when the full-field ERG is entirely normal (since Best
        disease is an RPE/photoreceptor-interface disorder that spares generalized rod/cone function) — this ERG/EOG
        dissociation is itself the diagnostic clue.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">VEP (Visual Evoked Potential)</h2>
        <ReferenceTable
          headers={['Measure', 'Typical value']}
          rows={[
            ['P100 latency (pattern-reversal VEP)', 'Commonly cited normal mean roughly 100–105 ms, with an upper limit of normal (~2 SD above the mean in some published control series) around 115 ms'],
            ['P100 amplitude', 'Reported normal ranges vary widely across studies and stimulus parameters — commonly cited roughly 5–16 µV'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        The pattern VEP is standardized by the ISCEV Standard for clinical visual evoked potentials (2016 update).
        Latency and amplitude carry different diagnostic weight: a P100 that is markedly DELAYED but retains roughly
        normal amplitude/waveform shape is the classic finding of demyelinating optic nerve disease (e.g. one
        published optic neuritis cohort reported a mean affected-eye latency around 140 ms against a normal upper
        limit near 115 ms) — conduction is slowed but the axons are largely intact. A REDUCED amplitude with a less
        delayed latency instead points more toward axonal loss/compressive or ischemic optic neuropathy. As with
        ERG, exact normal latency/amplitude numbers vary by lab, stimulus check size, and contrast, so a specific
        patient's result should be compared against that lab's own reference range.
      </p>

      <p className="text-xs text-slate-500">
        None of ERG, EOG, or VEP is interpreted from a single number in isolation — waveform morphology, symmetry
        between eyes, and the clinical/imaging context all factor into a real electrodiagnostic report.
      </p>
    </ReferenceShell>
  )
}
