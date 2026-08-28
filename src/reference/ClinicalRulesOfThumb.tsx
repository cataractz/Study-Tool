import { Link } from 'react-router-dom'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'clinical-rules-of-thumb',
  name: 'Clinical Rules of Thumb',
  category: 'Clinical Utilities',
  description: 'A quick-reference roundup of commonly used optometric rules of thumb, gathered from across this toolkit.',
  keywords: ['rule of thumb', 'quick reference', 'cheat sheet', 'clinical pearls', 'mnemonics'],
}

interface Rule {
  rule: string
  detail: string
  calculatorPath?: string
  calculatorLabel?: string
}

const RULES: Rule[] = [
  {
    rule: 'Contact lens diameter ≈ HVID + 2 mm',
    detail: 'A starting estimate for soft lens total diameter — confirm on-eye.',
    calculatorPath: '/calculators/cl-diameter-rule-of-thumb',
    calculatorLabel: 'CL Diameter',
  },
  {
    rule: 'Vertex distance matters clinically above ~±4.00 D',
    detail: 'Below this, the spectacle-to-corneal-plane power difference is usually small enough to ignore.',
    calculatorPath: '/calculators/vertex-effective-power',
    calculatorLabel: 'Vertex Distance & Effective Power',
  },
  {
    rule: 'Near add ≈ Accommodative demand − ½ × Amplitude of accommodation',
    detail: "Keeps roughly half the amplitude in reserve for comfortable sustained near work — one common estimation method, not universal.",
    calculatorPath: '/calculators/accommodation',
    calculatorLabel: 'Accommodation',
  },
  {
    rule: "SAM / FAP: Steeper — Add Minus, Flatter — Add Plus",
    detail: 'GP base curve steeper than K needs minus power added; flatter needs plus added.',
    calculatorPath: '/calculators/tear-lens',
    calculatorLabel: 'Tear Lens Power',
  },
  {
    rule: 'LARS: Left — Add, Right — Subtract',
    detail: "For toric soft lens axis reordering, based on the examiner's view of rotation.",
    calculatorPath: '/calculators/lars',
    calculatorLabel: 'LARS',
  },
  {
    rule: "Sheard's Criterion: reserve should be ≥ 2× the phoria",
    detail: 'If the compensating fusional reserve is less than twice the phoria, symptoms are more likely.',
    calculatorPath: '/calculators/sheards-criterion',
    calculatorLabel: "Sheard's Criterion",
  },
  {
    rule: "Percival's Criterion: phoria should sit in the middle third of the total vergence range",
    detail: 'Neither reserve (BI or BO) should be more than twice the other.',
    calculatorPath: '/calculators/percivals-criterion',
    calculatorLabel: "Percival's Criterion",
  },
  {
    rule: 'Corneal surface reflects ~2% of incident light',
    detail: 'Basis for the first Purkinje image and keratometry; from the Fresnel equation at the air-cornea interface.',
    calculatorPath: '/calculators/fresnel-reflection',
    calculatorLabel: 'Fresnel Reflection',
  },
  {
    rule: 'Diffraction begins to noticeably limit acuity below about a 2 mm pupil',
    detail: 'Below this, further pinhole-style aberration reduction is outweighed by diffraction blur.',
    calculatorPath: '/calculators/diffraction',
    calculatorLabel: 'Diffraction',
  },
  {
    rule: "Exophoria → prescribe Base In; Esophoria → prescribe Base Out",
    detail: "The standard direction for prism prescribed under Sheard's criterion.",
    calculatorPath: '/calculators/sheards-criterion',
    calculatorLabel: "Sheard's Criterion",
  },
  {
    rule: 'Prentice\'s Rule shortcut: 1 mm decentration ≈ 0.1 × lens power (D) in prism diopters',
    detail: 'P = cF with c in cm — so 1mm = 0.1cm of decentration.',
    calculatorPath: '/calculators/prentices-rule',
    calculatorLabel: "Prentice's Rule",
  },
  {
    rule: "Knapp's Law: axial ametropia corrected by spectacles ≈ no image-size change",
    detail: 'Only holds when the correcting lens sits near the eye\'s anterior focal point (~15mm) — part of why contact lenses change image size differently than spectacles for axial ametropia.',
    calculatorPath: '/calculators/relative-spectacle-magnification',
    calculatorLabel: 'Relative Spectacle Magnification',
  },
]

export function ClinicalRulesOfThumb() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Rule', 'Detail', 'Calculator']}
        rows={RULES.map((r) => [
          <span key="rule" className="font-medium text-slate-800">
            {r.rule}
          </span>,
          <span key="detail" className="text-slate-600 whitespace-normal">
            {r.detail}
          </span>,
          r.calculatorPath ? (
            <Link key="link" to={r.calculatorPath} className="text-brand-600 hover:underline whitespace-nowrap">
              {r.calculatorLabel} →
            </Link>
          ) : (
            ''
          ),
        ])}
      />
      <p className="text-xs text-slate-500">
        These are widely-taught approximations and starting points, not universal formulas or substitutes for
        clinical judgment — several are covered in more depth (with their own limitations and conventions stated) by
        the linked calculators.
      </p>
    </ReferenceShell>
  )
}
