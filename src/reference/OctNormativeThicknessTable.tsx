import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'oct-normative-thickness',
  name: 'OCT Normative Thickness Values',
  category: 'Diagnostic Testing & Imaging',
  description: 'Typical OCT central macular/foveal thickness, RNFL (global + by quadrant), and GCIPL/GCC thickness — with the device-specific caveats that matter for interpreting a printout.',
  keywords: [
    'OCT',
    'optical coherence tomography',
    'normative database',
    'central macular thickness',
    'central subfield thickness',
    'foveal thickness',
    'RNFL',
    'retinal nerve fiber layer',
    'peripapillary RNFL',
    'GCIPL',
    'ganglion cell inner plexiform layer',
    'GCC',
    'ganglion cell complex',
    'Cirrus',
    'Spectralis',
    'Optovue',
    'glaucoma OCT',
    'quadrant thickness',
  ],
}

export function OctNormativeThicknessTable() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        OCT devices flag a scan "red," "yellow," or "green" (within/outside normal limits) by comparing it to that
        specific instrument's own built-in normative database — a population of healthy eyes scanned on that exact
        device. Cirrus, Spectralis, and Optovue/RTVue normative databases are separately built and are{' '}
        <strong>not directly interchangeable</strong> — a value flagged abnormal on one platform's color-coded
        printout is not necessarily abnormal on another, because each device also uses its own retinal-layer
        segmentation algorithm. The figures below are illustrative typical/average values gathered from published
        normative studies, not a substitute for a specific device's own printout classification.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Central Macular / Foveal Thickness</h2>
        <ReferenceTable
          headers={['Parameter (device)', 'Typical value']}
          rows={[
            ['Central subfield thickness, Cirrus HD-OCT — normative range', '~217–308 µm'],
            ['Central foveal thickness, Cirrus HD-OCT — example study mean', '~261 µm (men slightly higher than women in this study)'],
            ['Central macular thickness, Cirrus HD-OCT — separate example study mean', '~266 µm'],
            ['Central subfield thickness, Spectralis SD-OCT — example study mean', '~270–277 µm'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        Spectralis central-subfield values in published comparisons run roughly 10–15 µm thicker than Cirrus on the
        same eyes — attributed mainly to where each device's software draws the outer retinal boundary, not a real
        anatomic difference. Do not compare a Cirrus number against a Spectralis cutoff (or vice versa) without
        adjusting for this.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Peripapillary RNFL Thickness</h2>
        <ReferenceTable
          headers={['Quadrant', 'Example study A (SD-OCT, young adults)', 'Example study B (Cirrus HD-OCT 5000)']}
          rows={[
            ['Global average', '~99 µm', '~102 µm'],
            ['Superior', '~125 µm', '~132 µm'],
            ['Inferior', '~129 µm', '~134 µm'],
            ['Nasal', '~74 µm', '~77 µm'],
            ['Temporal', '~70 µm', '~67 µm'],
          ]}
        />
      </div>
      <p className="text-xs text-slate-500 -mt-2">
        The two example studies above (different devices, different populations) disagree on the exact micron
        values, but agree on the pattern that matters clinically: <strong>superior and inferior quadrants are
        thickest, temporal is thinnest, nasal is second-thinnest</strong> — the same "double-hump" shape tested by
        the ISNT-style rim-thickness rule, here applied to nerve fiber layer thickness instead of neuroretinal rim.
        A quadrant or clock-hour value outside that expected pattern (e.g. a thin superior or inferior quadrant) is
        more concerning for glaucomatous loss than the global average alone.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">GCIPL / GCC Thickness</h2>
        <ReferenceTable
          headers={['Parameter', 'Typical value']}
          rows={[
            ['Average macular GCIPL (ganglion cell + inner plexiform layer), adults — example study', '~85 µm (superonasal sector thickest, inferior/minimum sector thinnest)'],
            ['Average macular GCIPL, older time-domain (Stratus) device — for historical comparison', '~68–75 µm'],
            ['Ganglion cell complex (GCC — RNFL + GCL + IPL combined, used on Optovue/RTVue-type platforms)', "Not directly comparable to GCIPL — GCC includes an extra layer (RNFL) that GCIPL does not, so its normal numbers run numerically higher; use the specific analysis's own printout, not a GCIPL cutoff"],
          ]}
        />
      </div>

      <p className="text-xs text-slate-500">
        All values above are typical/example figures gathered from published normative studies on healthy eyes, not
        a specific device's calibrated cutoff. Normal thickness for every parameter here (macular, RNFL, and
        GCIPL/GCC) varies further with age (thinning with older age), ethnicity, axial length/refractive error
        (longer/more myopic eyes tend to read thinner, partly a real effect and partly a magnification artifact),
        and signal strength/scan quality — which is why every clinical OCT report should be read against that
        specific patient's own device's age- and (where available) ethnicity-adjusted normative comparison, not a
        single number memorized from a table like this one.
      </p>
    </ReferenceShell>
  )
}
