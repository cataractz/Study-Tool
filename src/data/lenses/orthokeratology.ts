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
    contraindications: [
      'Active or recent history of microbial/infectious keratitis, or any active corneal infection',
      'Significant dry eye disease or aqueous tear deficiency that compromises overnight lens tolerance and tear exchange',
      'Active blepharitis, meibomian gland dysfunction, or other lid margin disease that raises infection risk during eye closure',
      'Myopia beyond the FDA-cleared −6.00 D limit or astigmatism beyond 1.75 D — outside CRT\'s cleared correction range',
      'Corneal irregularity (e.g. keratoconus) that a spherical treatment-zone design cannot fit predictably',
      'Poor hygiene/compliance risk or inability to commit to the overnight wear schedule and required follow-up visits — critical given the microbial keratitis risk reported with overnight RGP wear, particularly in adolescents',
    ],
    pros: [
      'Corrects myopia up to −6.00 D and astigmatism up to 1.75 D without any daytime glasses or contact lens wear',
      'One of the modalities with published pediatric myopia control evidence for slowing axial elongation',
      'High-Dk paflufocon D material (Dk ~100–101) supports corneal oxygenation during overnight eye closure',
      'Fully reversible — effect regresses over 1–2 weeks if discontinued, unlike refractive surgery',
    ],
    cons: [
      'Overnight wear carries a real, well-documented risk of microbial keratitis, higher than daytime soft lens wear',
      'Requires meticulous nightly lens hygiene and consistent wear — the correction regresses within 1–2 weeks if wear lapses',
      'Custom lab-manufactured fitting process requiring corneal topography and specific ortho-k certification — more complex and costly than a standard RGP or soft lens fit',
      'Correction range limited to −6.00 D myopia / 1.75 D astigmatism — not suitable for higher refractive errors',
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
    contraindications: [
      'Active or recurrent microbial/infectious keratitis or any active corneal infection',
      'Significant dry eye disease or poor tear film quality that limits overnight lens tolerance',
      'Active blepharitis or meibomian gland dysfunction increasing infection risk during eye closure',
      'Myopia beyond the FDA-cleared −5.00 D limit, or astigmatism beyond 1.50 D with the standard spherical Emerald design (the 5-curve Emerald Toric extends coverage for select higher/irregular cases)',
      'Corneal irregularity that a reverse-geometry design (or the conic-model Jade design) cannot fit predictably',
      'Poor compliance risk or inability to attend the topography-based fitting and follow-up schedule required for safe overnight wear',
    ],
    pros: [
      'Corrects myopia up to −5.00 D and, with the Emerald Toric variant, higher or irregular astigmatism beyond the standard 1.50 D limit',
      'No daytime glasses or contact lens wear required',
      'Uses Boston Equalens II (oprifocon A, Dk 85) — a well-established, proven daytime-RGP material for overnight safety',
      'Fully reversible, unlike refractive surgery, and a candidate for pediatric/adolescent myopia control',
    ],
    cons: [
      'Overnight wear carries real microbial keratitis risk, requiring meticulous lens hygiene and same-day access for any new pain, redness, or photophobia',
      'Effect regresses over roughly 1–2 weeks if nightly wear is discontinued',
      'Requires Euclid-specific fitting certification and corneal topography — a more involved fitting process than standard RGP',
      'Standard spherical design correction range limited to −5.00 D myopia / 1.50 D astigmatism',
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
    contraindications: [
      'Active or recurrent microbial/infectious keratitis or any active corneal infection',
      'Significant dry eye disease or poor tear exchange under a reverse-geometry lens',
      'Active blepharitis, meibomian gland dysfunction, or other lid margin disease',
      'Myopia or astigmatism beyond the chosen design\'s predictable correction range (most designs are most predictable up to about −4.00 to −6.00 D; higher myopia off-label carries reduced predictability), or corneal irregularity beyond that lab\'s design capability',
      'Poor hygiene/compliance risk or inability to commit to overnight wear and the scheduled follow-up visits — the central safety consideration given microbial keratitis risk',
    ],
    pros: [
      'Overnight myopia correction and myopia control without daytime lens wear, using a lab\'s proprietary topography-based reverse-geometry design',
      'Toric reverse-geometry variants extend correction to astigmatism beyond what a spherical design can address',
      'High-Dk fluorosilicone acrylate materials (Dk 100–141 depending on chosen material) support corneal safety during overnight eye closure',
      'Flexibility to select from multiple labs, materials, and designs to match individual corneal topography',
    ],
    cons: [
      'Overnight wear against a closed lid carries real microbial keratitis risk, requiring meticulous hygiene and rapid access for any new pain, redness, or photophobia',
      'Predictability decreases for myopia beyond roughly −4.00 to −6.00 D even when attempted off-label',
      'Fitting requires corneal topography and lab-specific ordering parameters (Return Zone Depth, Landing Zone Angle) — a more complex, costly process than standard RGP fitting',
      'Effect regresses within about 1–2 weeks if nightly wear is discontinued',
    ],
    clinicalNotes: [
      'The order sheet for a reverse-geometry ortho-k lens specifies parameters that don\'t exist on a standard RGP order: Return Zone Depth (RZD, controls sagittal depth/centration), Landing Zone Angle (LZA, controls edge clearance and tear exchange), and often a target Jessen factor overcorrection.',
      'Regardless of brand, all overnight ortho-k designs work by the same central mechanism — central epithelial thinning/mid-peripheral epithelial thickening that flattens the central cornea and reduces its effective refractive power — which is why the correction regresses once nightly wear stops.',
      'Overnight wear against a closed lid makes microbial keratitis risk a central safety consideration — patient selection, meticulous lens hygiene, and same-day access for any new pain/redness/photophobia are essential parts of an ortho-k fitting program, not optional add-ons.',
    ],
    relatedCalculatorIds: ['sagittal-depth', 'oxygen-transmissibility'],
  },
]
