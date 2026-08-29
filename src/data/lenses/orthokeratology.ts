import type { ContactLens } from '../../types/lens'

/**
 * Orthokeratology (ortho-k) lenses are rigid gas-permeable lenses of reverse-geometry design
 * (the posterior secondary/return curve is STEEPER than the base curve, opposite of a
 * conventional RGP) worn overnight to temporarily reshape the central cornea, correcting myopia
 * (and, for some designs, low astigmatism) without daytime lens wear or surgery. Like the
 * scleral/hybrid entries in rgpAndSpecialty.ts, the two FDA-approved named designs below are
 * still lab-custom-manufactured to the individual eye's topography — the base curve is not a
 * fixed catalog number but is calculated per patient (flat-K minus desired correction, plus an
 * overcorrection allowance).
 */
export const orthokeratologyLenses: ContactLens[] = [
  {
    id: 'paragon-crt',
    brand: 'Paragon CRT (Corneal Refractive Therapy)',
    manufacturer: 'Paragon Vision Sciences',
    design: 'Orthokeratology',
    materialClass: 'RGP (rigid gas permeable)',
    materialName: 'paflufocon D (Paragon HDS 100)',
    dk: '100–101 (sources vary slightly)',
    baseCurves: [
      'Not a fixed catalog curve — the central (treatment zone) curve is calculated per eye as flat-K minus the desired myopic correction, plus an overcorrection allowance ("Jessen factor," commonly +0.50 to +1.50 D) to compensate for expected regression',
    ],
    diameter: 'Custom lab order, 9.50–12.00 mm (10.5 mm is the typical/default overall diameter for most patients)',
    sphereRange: 'FDA-cleared for temporary reduction of myopia up to −6.00 D',
    cylinderRange: 'FDA-cleared for astigmatism up to 1.75 D',
    replacementSchedule: 'Quarterly to annual (custom RGP/scleral)',
    wearSchedule: 'Overnight wear only (removed each morning)',
    handlingTint: false,
    edgeDesign:
      'Reverse-geometry design with a central spherical treatment zone, a mathematically modeled sigmoidal "Return Zone," and a non-curving "Landing Zone," with a convex elliptical edge terminus',
    bestFor: [
      'Overnight myopia correction without daytime lens wear or refractive surgery',
      'Pediatric/adolescent myopia control — one of the modalities with published evidence for slowing axial elongation',
      'Patients who want correction during sports/occupations incompatible with daytime glasses or contacts',
    ],
    clinicalNotes: [
      'One of only three FDA-approved (PMA-cleared) ortho-k lens designs in the U.S., alongside Euclid Emerald and Bausch + Lomb VST — PMA number P870024.',
      'The correction is temporary and regresses over roughly 1–2 weeks of discontinued wear, unlike refractive surgery — patients must understand ongoing nightly (or maintenance-schedule) wear is required to sustain the effect.',
      'Because the lens is worn during eye closure, material Dk matters even more than in daytime RGP wear — corneal edema risk during sleep is the main reason ortho-k materials sit at the high end of RGP Dk values.',
      'Fitting requires corneal topography and specific ortho-k certification/training — this is not a standard spherical RGP fit.',
    ],
    relatedCalculatorIds: ['sagittal-depth', 'oxygen-transmissibility'],
  },
  {
    id: 'euclid-emerald',
    brand: 'Euclid Emerald',
    manufacturer: 'Euclid Systems Corporation',
    design: 'Orthokeratology',
    materialClass: 'RGP (rigid gas permeable)',
    materialName: 'oprifocon A (Boston Equalens II)',
    dk: '85 (ISO/Fatt)',
    baseCurves: [
      'Not a fixed catalog curve — the four-curve reverse-geometry design is calculated per eye from flat-K and desired correction; the related Jade design instead uses a conic corneal model incorporating measured corneal eccentricity',
    ],
    diameter: 'Custom lab order, standard 10.6 mm overall diameter (lens curves cannot be manufactured below 9.8 mm); selected relative to the patient\'s horizontal visible iris diameter (HVID)',
    sphereRange: 'FDA-cleared for temporary reduction of myopia up to −5.00 D',
    cylinderRange: 'FDA-cleared for astigmatism up to 1.50 D; a separate 5-curve, rotationally asymmetric Emerald Toric design is available for higher/irregular astigmatism',
    replacementSchedule: 'Quarterly to annual (custom RGP/scleral)',
    wearSchedule: 'Overnight wear only (removed each morning)',
    handlingTint: false,
    edgeDesign: 'Four-curve reverse-geometry design (base curve, reverse curve, alignment curve, peripheral curve)',
    bestFor: [
      'Overnight myopia correction without daytime lens wear or refractive surgery',
      'Pediatric/adolescent myopia control',
    ],
    clinicalNotes: [
      'The first Euclid ortho-k design FDA-approved (2004, PMA P010062) — the original PMA covers the underlying oprifocon A material/lens, with the Emerald design as its commercialized fitting system.',
      'Uses the same Boston Equalens II (oprifocon A) material as the standard corneal RGP product of the same name — see the Boston Equalens II entry in the RGP materials section for its daytime-RGP use.',
      'The correction is temporary and regresses over roughly 1–2 weeks of discontinued wear — nightly (or maintenance-schedule) wear is required to sustain the effect.',
      'Requires Euclid fitting certification and corneal topography for the initial diagnostic lens selection.',
    ],
    relatedCalculatorIds: ['sagittal-depth', 'oxygen-transmissibility'],
  },
  {
    id: 'orthokeratology-general',
    brand: 'Overnight Ortho-K Lens (general/other custom designs)',
    manufacturer: 'Multiple labs (e.g. WAVE/Art Optical, GOV, Precision Technology Services, Contamac-material custom labs)',
    design: 'Orthokeratology',
    materialClass: 'RGP (rigid gas permeable)',
    materialName: 'Typically a high-Dk fluorosilicone acrylate RGP material (e.g. Boston XO2, Optimum Extreme) manufactured to a reverse-geometry design',
    dk: '100–141 depending on chosen material',
    baseCurves: [
      'Fit by reverse-geometry topography-based design, not a fixed base curve — see clinical notes for the parameters that actually get ordered',
    ],
    diameter: 'Custom lab order, typically 10.0–11.0 mm depending on design and corneal/pupil size',
    sphereRange: 'Custom lab order — most designs target low-to-moderate myopia (commonly cited as most predictable up to about −4.00 to −6.00 D); higher myopia is sometimes attempted off-label with reduced predictability',
    cylinderRange: 'Toric reverse-geometry variants are available from several labs for astigmatism beyond what a spherical design can correct',
    replacementSchedule: 'Quarterly to annual (custom RGP/scleral)',
    wearSchedule: 'Overnight wear only (removed each morning)',
    handlingTint: false,
    edgeDesign: 'Reverse-geometry: a central base curve flatter than the natural cornea, a return/reverse curve steeper than the base curve, an alignment curve approximating flat-K, and a peripheral landing/edge-lift curve',
    bestFor: [
      'Overnight myopia correction and myopia control outside the two FDA-named designs above',
      'Fitters using a specific lab\'s proprietary topography-based design software',
    ],
    clinicalNotes: [
      'The order sheet for a reverse-geometry ortho-k lens specifies parameters that don\'t exist on a standard RGP order: Return Zone Depth (RZD, controls sagittal depth/centration), Landing Zone Angle (LZA, controls edge clearance and tear exchange), and often a target Jessen factor overcorrection.',
      'Regardless of brand, all overnight ortho-k designs work by the same central mechanism — central epithelial thinning/mid-peripheral epithelial thickening that flattens the central cornea and reduces its effective refractive power — which is why the correction regresses once nightly wear stops.',
      'Overnight wear against a closed lid makes microbial keratitis risk a central safety consideration — patient selection, meticulous lens hygiene, and same-day access for any new pain/redness/photophobia are essential parts of an ortho-k fitting program, not optional add-ons.',
    ],
    relatedCalculatorIds: ['sagittal-depth', 'oxygen-transmissibility'],
  },
]
