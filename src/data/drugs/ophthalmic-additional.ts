import type { Drug } from '../../types/drug'

export const ophthalmicAdditional: Drug[] = [
  // ============================================================
  // ANTIBIOTICS
  // ============================================================
  {
    id: 'besifloxacin',
    genericName: 'Besifloxacin',
    brandNames: ['Besivance'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Fourth-generation fluoroquinolone; inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, blocking bacterial DNA replication, transcription, and repair. Balanced dual-target inhibition provides broad-spectrum bactericidal activity against gram-positive (including some methicillin-resistant Staphylococcus aureus, MRSA) and gram-negative organisms, and reduces the likelihood of resistance development compared with agents that rely predominantly on a single target.',
    indications: [
      'Bacterial conjunctivitis caused by susceptible organisms',
    ],
    ocularUses: [
      'Treatment of bacterial conjunctivitis, including strains with reduced susceptibility to other antibiotic classes',
      'Off-label use for corneal ulcer/keratitis prophylaxis or adjunct therapy given broad-spectrum coverage and MRSA activity',
    ],
    typicalDosing:
      '1 drop in the affected eye(s) 3 times daily (4-12 hours apart) for 7 days.',
    concentrations: ['0.6%'],
    formulations: ['Suspension'],
    route: 'Topical ophthalmic suspension (DuraSite vehicle)',
    sideEffects: {
      ocular: [
        'Transient eye irritation/stinging on instillation (most common adverse effect)',
        'Conjunctival hyperemia',
        'Blurred vision (transient, from the viscous DuraSite vehicle)',
        'Punctate keratitis',
        'Ocular discomfort or a foreign-body sensation',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare hypersensitivity reaction',
        'Unpleasant taste (uncommon)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to besifloxacin or other fluoroquinolones',
    ],
    precautions: [
      'Not for injection into the eye, subconjunctival space, or anterior chamber',
      'Contact lens wear should be avoided during treatment of active bacterial conjunctivitis',
      'Prolonged use may result in overgrowth of non-susceptible organisms, including fungi',
      'Shake the bottle well before each use given the suspension vehicle',
    ],
    drugInteractions: [
      'Minimal systemic drug interactions given negligible systemic absorption from topical dosing',
      'Space instillation from other concurrently administered topical ophthalmic agents',
    ],
    patientCounseling: [
      'Shake the bottle well before each use',
      'Wash hands before instilling; avoid touching the dropper tip to the eye or any surface',
      'Do not wear contact lenses while symptomatic or during active treatment',
      'Complete the full 7-day course even if symptoms improve early',
      'Vision may blur briefly after instillation due to the viscous vehicle',
    ],
    pregnancyLactation:
      'Topical ophthalmic fluoroquinolones have minimal systemic absorption; generally considered low risk in pregnancy and lactation, but use only when clearly needed and per prescriber judgment.',
    pediatricConsiderations: [
      'Approved for bacterial conjunctivitis in patients 1 year of age and older; safety and effectiveness in infants below 1 year have not been established',
    ],
    relatedConditionIds: ['conjunctivitis'],
    monitoring: [
      'Clinical resolution of conjunctival injection and discharge within the treatment course',
      'Reassess if no improvement, which may suggest a resistant organism or non-bacterial etiology',
    ],
    clinicalPearls: [
      'Uniquely formulated exclusively for ophthalmic use — besifloxacin is NOT available as an oral or any other systemic formulation, unlike moxifloxacin, ciprofloxacin, ofloxacin, levofloxacin, and gatifloxacin, all of which have systemic counterparts',
      'Because it is never used systemically, besifloxacin theoretically carries a lower risk of selecting for fluoroquinolone-resistant organisms at other body sites (e.g., respiratory, GI flora) compared with fluoroquinolones that are also prescribed orally/IV',
      'DuraSite mucoadhesive vehicle prolongs ocular surface contact time, allowing effective dosing at only 3 times daily',
      'Demonstrates reliable activity against many MRSA and MRSE (methicillin-resistant Staphylococcus epidermidis) isolates, an advantage over earlier-generation fluoroquinolones',
    ],
    highYield: [
      'The ONLY fluoroquinolone formulated exclusively for topical ophthalmic use — no oral/systemic besifloxacin exists (classic distinguishing board fact vs. moxifloxacin/ciprofloxacin/ofloxacin/levofloxacin/gatifloxacin)',
      'This ophthalmic-only status is thought to reduce selection pressure for fluoroquinolone resistance in non-ocular flora',
      'Fourth-generation fluoroquinolone with dual DNA gyrase/topoisomerase IV inhibition and useful MRSA activity',
      'DuraSite suspension vehicle enables TID (not QID) dosing and causes transient blurring immediately after instillation',
      'Approved only for bacterial conjunctivitis, not corneal ulcer, despite broad-spectrum activity',
    ],
    references: [
      {
        label: 'Ophthalmic-only fluoroquinolone spectrum and formulation',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
      {
        label: 'Besifloxacin dosing and indications',
        source: "Physicians' Desk Reference / drug package insert",
      },
    ],
  },
  {
    id: 'vancomycin-ophthalmic-fortified',
    genericName: 'Vancomycin (fortified ophthalmic)',
    brandNames: ['Compounded — no commercial brand'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Glycopeptide antibiotic; binds the D-alanyl-D-alanine terminus of peptidoglycan precursor units, inhibiting bacterial cell wall synthesis (transglycosylation and transpeptidation), resulting in a bactericidal effect against gram-positive organisms. No activity against gram-negative organisms because the drug is too large to cross the outer membrane.',
    indications: [
      'Severe bacterial keratitis (corneal ulcer) with strong suspicion of gram-positive organisms, including methicillin-resistant Staphylococcus aureus (MRSA)',
      'Empiric coverage of central/vision-threatening corneal ulcers pending culture and sensitivity results, as part of "dual fortified" therapy',
    ],
    ocularUses: [
      'Fortified topical drops for gram-positive (including MRSA) bacterial keratitis, typically paired with a fortified aminoglycoside (e.g., tobramycin) for empiric broad-spectrum coverage',
      'Intravitreal or intracameral injection (specialist use) for severe endophthalmitis with gram-positive organisms',
    ],
    typicalDosing:
      'Fortified topical: 1 drop every 30-60 minutes initially (including overnight for severe cases), tapering frequency as clinical improvement is seen, guided by culture results. Intravitreal (endophthalmitis, specialist administration): a single injected dose per institutional protocol.',
    concentrations: ['Fortified 25-50 mg/mL (compounded topical drop)', 'Intravitreal: typically 1 mg/0.1 mL (specialist-administered)'],
    formulations: ['Solution', 'Injection'],
    route: 'Topical ophthalmic (compounded fortified drop) or intravitreal/intracameral injection for severe cases',
    sideEffects: {
      ocular: [
        'Significant local irritation, burning, and stinging with fortified topical use',
        'Conjunctival hyperemia',
        'Punctate keratopathy and delayed epithelial healing with frequent/prolonged dosing',
        'Corneal toxicity with high-frequency dosing regimens',
      ],
      systemic: [
        'Minimal systemic absorption with topical ophthalmic use',
        'Systemic effects (nephrotoxicity, ototoxicity, "red man syndrome" with rapid IV infusion) are associated with IV vancomycin, not topical ocular dosing',
      ],
    },
    contraindications: [
      'Known hypersensitivity to vancomycin',
    ],
    precautions: [
      'Must be compounded by a pharmacy from the IV formulation — not commercially available as a pre-made ophthalmic product',
      'Fortified preparation has a short shelf life (approximately 1 week) and requires refrigeration to maintain potency and sterility',
      'Significant corneal epithelial toxicity potential with frequent dosing — balance against infection control needs',
      'No gram-negative coverage — must be paired with a second agent (e.g., fortified tobramycin) for broad empiric coverage',
    ],
    drugInteractions: [
      'Additive corneal epithelial toxicity when combined with other fortified/epitheliotoxic topical antibiotics (e.g., fortified aminoglycosides)',
      'Minimal systemic drug interactions given negligible systemic absorption from topical dosing',
    ],
    patientCounseling: [
      'This is a compounded, non-commercial preparation that must be kept refrigerated and discarded after its expiration (typically about 1 week)',
      'Frequent initial dosing (as often as every 30-60 minutes, including overnight) is required — maintain the schedule closely',
      'Expect significant stinging on instillation',
      'Attend all follow-up visits, as therapy may be adjusted once culture and sensitivity results return',
    ],
    pregnancyLactation:
      'Limited specific data on topical/compounded ophthalmic use; given minimal systemic absorption, generally considered lower risk than systemic IV vancomycin, but should be used only when clearly indicated for vision-threatening infection.',
    pediatricConsiderations: [
      'No dedicated pediatric labeling exists since this is a compounded (non-commercial) preparation; fortified vancomycin, often paired with fortified tobramycin, is a standard empiric choice for severe pediatric bacterial keratitis given the relatively high frequency of ocular surface bacterial infection in children',
    ],
    offLabelUses: [
      'Compounded topical ophthalmic use of a systemic IV antibiotic — entirely off-label, as no FDA-approved ophthalmic vancomycin product exists',
    ],
    relatedConditionIds: ['bacterial-keratitis', 'endophthalmitis'],
    monitoring: [
      'Serial slit lamp exams to track infiltrate size, epithelial defect, and stromal depth',
      'Corneal culture and sensitivity results to confirm organism and guide de-escalation or agent switch',
      'Corneal epithelial integrity given toxicity potential with fortified formulations',
    ],
    clinicalPearls: [
      'Classic "dual fortified antibiotic" empiric regimen for severe/central bacterial corneal ulcers pairs fortified vancomycin (gram-positive, including MRSA) with a fortified aminoglycoside such as tobramycin (gram-negative, including Pseudomonas), providing broad coverage pending culture results',
      'Must be freshly compounded by a pharmacy — not available as a commercial ophthalmic product — and has a short refrigerated shelf life (~1 week), an important practical/logistical board point',
      'Reserved for severe, vision-threatening, or central ulcers, or when MRSA is suspected/confirmed; not first-line for routine bacterial keratitis given the need for compounding and higher epithelial toxicity',
    ],
    highYield: [
      'Glycopeptide — inhibits bacterial cell wall synthesis by binding D-Ala-D-Ala; gram-positive coverage only (including MRSA), no gram-negative activity',
      'Classic empiric "dual fortified" pairing: fortified vancomycin + fortified tobramycin for severe/central bacterial corneal ulcers pending cultures',
      'Must be compounded from the IV formulation — no commercial ophthalmic vancomycin product exists',
      'Short shelf life (~1 week) and requires refrigeration — a key practical/board fact about fortified antibiotics',
      'Covers MRSA, an important consideration in contact lens wearers and healthcare-associated keratitis',
    ],
    references: [
      {
        label: 'Fortified antibiotic compounding and dual-coverage empiric therapy for bacterial keratitis',
        source: 'AAO Preferred Practice Pattern: Bacterial Keratitis',
      },
      {
        label: 'Glycopeptide pharmacology and gram-positive spectrum',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
    ],
  },
  {
    id: 'cefazolin-ophthalmic-fortified',
    genericName: 'Cefazolin (fortified ophthalmic)',
    brandNames: ['Compounded — no commercial brand'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'First-generation cephalosporin (beta-lactam); binds penicillin-binding proteins (PBPs) to inhibit bacterial cell wall (peptidoglycan) synthesis, resulting in a bactericidal effect primarily against gram-positive organisms, with some activity against select gram-negative organisms.',
    indications: [
      'Severe bacterial keratitis (corneal ulcer) with gram-positive organisms suspected or confirmed',
      'Empiric coverage of central/vision-threatening corneal ulcers pending culture results, historically as part of "dual fortified" therapy',
    ],
    ocularUses: [
      'Fortified topical drops for gram-positive bacterial keratitis, classically paired with a fortified aminoglycoside (e.g., tobramycin or gentamicin) for broad empiric gram-positive plus gram-negative coverage',
    ],
    typicalDosing:
      '1 drop every 30-60 minutes initially (including overnight for severe cases), tapering frequency with clinical improvement and once culture/sensitivity results allow narrowing of therapy.',
    concentrations: ['Fortified 33-50 mg/mL (compounded topical drop)'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic (compounded fortified drop)',
    sideEffects: {
      ocular: [
        'Local irritation, burning, and stinging with fortified topical use',
        'Conjunctival hyperemia',
        'Punctate keratopathy and delayed epithelial healing with frequent dosing',
        'Precipitate formation with very frequent dosing (less common than with fortified aminoglycosides)',
      ],
      systemic: [
        'Minimal systemic absorption with topical ophthalmic use',
        'Systemic beta-lactam hypersensitivity reactions are theoretically possible but rare given negligible systemic absorption at ocular doses',
      ],
    },
    contraindications: [
      'Known hypersensitivity to cefazolin or other cephalosporins (use caution/consider cross-reactivity risk in patients with severe penicillin allergy, though cross-reactivity is low)',
    ],
    precautions: [
      'Must be compounded by a pharmacy from the IV formulation — not commercially available as a pre-made ophthalmic product',
      'Fortified preparation has a short shelf life (approximately 1 week) and requires refrigeration',
      'No reliable Pseudomonas coverage — must be paired with a second agent (e.g., fortified tobramycin) for broad empiric coverage of vision-threatening ulcers',
    ],
    drugInteractions: [
      'Additive corneal epithelial toxicity when combined with other fortified/epitheliotoxic topical antibiotics',
      'Minimal systemic drug interactions given negligible systemic absorption from topical dosing',
    ],
    patientCounseling: [
      'This is a compounded, non-commercial preparation that must be kept refrigerated and discarded after its expiration (typically about 1 week)',
      'Frequent initial dosing (as often as every 30-60 minutes, including overnight) is required — maintain the schedule closely',
      'Expect stinging on instillation',
      'Attend all follow-up visits, as therapy may be narrowed once culture and sensitivity results return',
    ],
    pregnancyLactation:
      'Limited specific data on topical/compounded ophthalmic use; given minimal systemic absorption, generally considered lower risk than systemic cefazolin, but should be used only when clearly indicated for vision-threatening infection.',
    pediatricConsiderations: [
      'No dedicated pediatric labeling exists since this is a compounded (non-commercial) preparation; historically a standard empiric fortified antibiotic choice (paired with fortified tobramycin) for severe pediatric bacterial keratitis',
    ],
    offLabelUses: [
      'Compounded topical ophthalmic use of a systemic IV antibiotic — entirely off-label, as no FDA-approved ophthalmic cefazolin product exists',
    ],
    relatedConditionIds: ['bacterial-keratitis'],
    monitoring: [
      'Serial slit lamp exams to track infiltrate size, epithelial defect, and stromal depth',
      'Corneal culture and sensitivity results to confirm organism and guide de-escalation or agent switch',
    ],
    clinicalPearls: [
      'Historically the classic "dual fortified" empiric regimen for severe bacterial keratitis paired fortified cefazolin (gram-positive) with fortified tobramycin (gram-negative, including Pseudomonas) — the traditional gold-standard combination before fluoroquinolone monotherapy became more common in many practices',
      'Selected over fortified vancomycin when MRSA is not specifically suspected, since first-generation cephalosporins are generally better tolerated and cheaper, though they lack MRSA activity',
      'Same compounding logistics apply as other fortified antibiotics: pharmacy-compounded from the IV formulation, refrigerated, short (~1 week) shelf life',
    ],
    highYield: [
      'First-generation cephalosporin — inhibits cell wall synthesis via penicillin-binding protein binding; primarily gram-positive coverage',
      'Classic traditional "dual fortified" pairing: fortified cefazolin + fortified tobramycin — the historic gold-standard empiric regimen for severe bacterial keratitis, predating widespread fluoroquinolone monotherapy',
      'No reliable Pseudomonas/gram-negative coverage on its own — always paired with an aminoglycoside for broad empiric therapy',
      'Must be compounded from the IV formulation with a short (~1 week) refrigerated shelf life, like other fortified antibiotics',
      'Does NOT cover MRSA — fortified vancomycin is substituted when MRSA is suspected or confirmed',
    ],
    references: [
      {
        label: 'Traditional dual fortified antibiotic regimen for bacterial keratitis',
        source: 'AAO Preferred Practice Pattern: Bacterial Keratitis',
      },
      {
        label: 'Cephalosporin pharmacology and compounding for ophthalmic use',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
    ],
  },

  // ============================================================
  // ALLERGY MEDICATIONS
  // ============================================================
  {
    id: 'cromolyn-sodium-ophthalmic',
    genericName: 'Cromolyn sodium (ophthalmic)',
    brandNames: ['Crolom', 'Opticrom'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'Mast cell stabilizer; inhibits antigen-induced degranulation of sensitized mast cells, preventing release of histamine and other inflammatory mediators (e.g., leukotrienes, prostaglandins). Does NOT possess direct antihistaminic, anti-inflammatory, or vasoconstrictor activity of its own — its effect is entirely prophylactic, acting upstream to prevent mediator release rather than blocking mediators already released.',
    indications: [
      'Vernal keratoconjunctivitis (VKC)',
      'Vernal conjunctivitis',
      'Allergic conjunctivitis (seasonal and perennial), including atopic keratoconjunctivitis',
    ],
    ocularUses: [
      'Prophylactic management of allergic/vernal conjunctivitis to reduce frequency and severity of allergic flares with regular, sustained use',
    ],
    typicalDosing:
      '1-2 drops in each eye 4-6 times daily, started before anticipated allergen exposure (e.g., in advance of allergy season) and continued regularly throughout the exposure period.',
    concentrations: ['4%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient burning or stinging on instillation (common)',
        'Conjunctival hyperemia',
        'Ocular discomfort/irritation',
        'Blurred vision (transient)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare headache or unpleasant taste',
      ],
    },
    contraindications: [
      'Known hypersensitivity to cromolyn sodium or any component of the formulation',
    ],
    precautions: [
      'Not effective for acute allergic symptoms — has no role as an as-needed rescue therapy for an active flare',
      'Requires several days to weeks of regular use before onset of maximal therapeutic benefit',
      'Contact lenses should be removed prior to instillation and may be reinserted after waiting per product labeling (if using a preserved formulation)',
    ],
    drugInteractions: [
      'No clinically significant systemic drug interactions expected given topical route and minimal systemic absorption',
    ],
    patientCounseling: [
      'This medication is prophylactic — it must be started before symptom onset (e.g., before allergy season begins) and used regularly, not as an as-needed rescue treatment',
      'It will not work quickly for an active allergic flare; full benefit may take days to weeks of consistent use',
      'Continue regular dosing throughout the entire period of allergen exposure for best effect',
      'Mild transient stinging on instillation is common and expected',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ophthalmic use; generally considered low risk in pregnancy and lactation given cromolyn\'s long history of use and favorable systemic safety profile (including in intranasal and inhaled formulations).',
    pediatricConsiderations: [
      'Not recommended for children below 4 years of age (safety/effectiveness not established); no different pediatric side-effect profile is expected in children 4 years of age and older',
    ],
    relatedConditionIds: ['atopic-keratoconjunctivitis'],
    monitoring: [
      'Symptom frequency/severity over the course of regular use (weeks), rather than immediate response',
      'Adherence to regular dosing schedule, as efficacy depends heavily on consistent prophylactic use',
    ],
    clinicalPearls: [
      'Classic board teaching point: cromolyn is purely PROPHYLACTIC and must be used regularly before allergen exposure/symptom onset — it does not treat an acute allergic reaction and has no direct antihistamine activity, unlike dual-acting agents such as olopatadine',
      'Slow onset of action (days to weeks for full effect) is a key contrast point versus dual-acting antihistamine/mast cell stabilizer combination agents (e.g., olopatadine, ketotifen), which provide both immediate antihistamine relief and mast cell stabilization',
      'Useful for chronic allergic conditions such as vernal and atopic keratoconjunctivitis where sustained prophylactic control is the goal, rather than acute symptom relief',
    ],
    highYield: [
      'Pure mast cell stabilizer — prevents mediator release but has NO direct antihistamine activity (key distinction from dual-acting agents like olopatadine)',
      'Strictly prophylactic: must be started before allergen exposure/symptom onset and used regularly — ineffective as acute/rescue therapy',
      'Slow onset (days to weeks) — classic contrast point vs. dual-acting agents with immediate antihistamine relief',
      'Used for chronic allergic conditions (seasonal/perennial/vernal/atopic keratoconjunctivitis) requiring sustained control',
      'Frequent dosing requirement (4-6 times daily) is a practical adherence limitation versus once/twice-daily newer agents',
    ],
    references: [
      {
        label: 'Mast cell stabilizer mechanism and prophylactic dosing strategy',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
      {
        label: 'Allergic conjunctivitis management',
        source: 'AAO Preferred Practice Pattern: Conjunctivitis',
      },
    ],
  },
  {
    id: 'lodoxamide',
    genericName: 'Lodoxamide tromethamine',
    brandNames: ['Alomide'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'Mast cell stabilizer; inhibits antigen-induced degranulation of sensitized mast cells, preventing release of histamine and other inflammatory mediators. Structurally related to cromolyn but substantially more potent in vitro (per board teaching, roughly 2500 times more potent than cromolyn at inhibiting mast cell degranulation), though it similarly lacks direct antihistaminic activity and acts prophylactically.',
    indications: [
      'Vernal keratoconjunctivitis (VKC)',
      'Vernal conjunctivitis',
      'Vernal keratitis',
    ],
    ocularUses: [
      'Specifically FDA-approved for the treatment of vernal keratoconjunctivitis, vernal conjunctivitis, and vernal keratitis — a more severe, chronic, and typically pediatric/young-adult allergic condition than seasonal allergic conjunctivitis',
    ],
    typicalDosing:
      '1-2 drops in each affected eye 4 times daily, for up to 3 months per standard labeling, started proactively and continued regularly through the period of disease activity.',
    concentrations: ['0.1%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient burning, stinging, or discomfort on instillation (common)',
        'Conjunctival hyperemia',
        'Blurred vision (transient)',
        'Dry eye sensation',
        'Rarely, corneal erosion/epitheliopathy',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare headache or somnolence',
      ],
    },
    contraindications: [
      'Known hypersensitivity to lodoxamide or any component of the formulation',
    ],
    precautions: [
      'Not effective for acute allergic symptoms — like other mast cell stabilizers, it is prophylactic rather than an acute rescue agent',
      'Requires regular, sustained use for full benefit; treatment courses are often limited to about 3 months per labeling',
      'Contact lens wear should generally be avoided during active vernal disease',
    ],
    drugInteractions: [
      'No clinically significant systemic drug interactions expected given topical route and minimal systemic absorption',
    ],
    patientCounseling: [
      'Use regularly as prescribed, typically 4 times daily, rather than only when symptoms flare',
      'This medication is prophylactic in nature — full benefit develops over time with consistent use, similar to other mast cell stabilizers',
      'Mild transient stinging or burning on instillation is common',
      'Report any new eye pain, significant vision change, or worsening symptoms despite treatment',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ophthalmic use; use when clearly indicated, weighing benefit versus theoretical risk, per prescriber judgment — limited human pregnancy data exist compared with cromolyn.',
    pediatricConsiderations: [
      'Not recommended below 2 years of age (safety/effectiveness not established); dosing for children over 2 years is identical to the adult regimen. Particularly relevant since vernal keratoconjunctivitis, its primary indication, is predominantly a pediatric/young-adult disease',
    ],
    monitoring: [
      'Symptom severity and corneal findings (e.g., shield ulcer, limbal Horner-Trantas dots, giant papillae) typical of vernal keratoconjunctivitis over the treatment course',
      'Corneal epithelial integrity given a small reported risk of erosion',
    ],
    clinicalPearls: [
      'Classic "match the drug to its specific approved indication" board fact: lodoxamide is FDA-approved specifically for vernal keratoconjunctivitis/vernal conjunctivitis/vernal keratitis, a more targeted indication than the general allergic conjunctivitis indications carried by cromolyn or antihistamine/mast-cell-stabilizer combination agents',
      'Substantially more potent mast cell stabilizer than cromolyn in vitro (often cited as roughly 2500-fold more potent), though clinical dosing frequency (4 times daily) is similar',
      'Useful in pediatric and young adult patients with severe seasonal (often warm-climate) vernal disease, where giant papillae, limbal Horner-Trantas dots, and shield ulcers may be seen on exam',
    ],
    highYield: [
      'FDA-approved specifically for vernal keratoconjunctivitis/vernal conjunctivitis/vernal keratitis — a classic "specific indication" board distinction',
      'Mast cell stabilizer roughly 2500x more potent than cromolyn in vitro, per classic board teaching',
      'Like cromolyn, purely prophylactic — no direct antihistamine activity, requires regular use before/during allergen exposure, not for acute rescue',
      'Associated condition (VKC) features giant papillae, Horner-Trantas dots, and shield ulcers — classic exam findings to pair with this drug',
      'Typical course limited to about 3 months per labeling',
    ],
    references: [
      {
        label: 'Lodoxamide potency and vernal keratoconjunctivitis indication',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
      {
        label: 'Vernal keratoconjunctivitis management',
        source: 'AAO Preferred Practice Pattern: Conjunctivitis',
      },
    ],
  },

  // ============================================================
  // STEROIDS
  // ============================================================
  {
    id: 'triamcinolone-intravitreal',
    genericName: 'Triamcinolone acetonide (intravitreal/periocular)',
    brandNames: ['Triesence', 'Kenalog (off-label intravitreal use)'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Synthetic corticosteroid; binds intracellular glucocorticoid receptors, which translocate to the nucleus and modulate gene transcription, suppressing production of inflammatory mediators (prostaglandins, leukotrienes, cytokines), reducing vascular permeability, and stabilizing cell membranes. Formulated as an insoluble crystalline suspension that acts as a depot, providing sustained anti-inflammatory and anti-permeability effect over weeks to months following intravitreal or periocular (sub-Tenon) injection.',
    indications: [
      'Macular edema associated with diabetic retinopathy, retinal vein occlusion (RVO), or uveitis',
      'Noninfectious posterior uveitis / intermediate uveitis',
      'Surgical adjunct: intraoperative staining of the vitreous to improve visualization during pars plana vitrectomy',
      'Sympathetic ophthalmia and other severe noninfectious intraocular inflammatory conditions (periocular route)',
    ],
    ocularUses: [
      'Intravitreal injection for diabetic macular edema, RVO-associated macular edema, and noninfectious uveitic macular edema/uveitis',
      'Periocular (sub-Tenon) injection for noninfectious uveitis and macular edema, particularly when a less invasive route than intravitreal injection is preferred',
      'Intraoperative use during vitrectomy: the suspension adheres to residual vitreous strands, staining and highlighting them to aid complete surgical removal',
    ],
    typicalDosing:
      'Intravitreal injection: typically 1-4 mg per injection, administered by a retina specialist, repeated as clinically indicated based on recurrence of edema/inflammation (effect often lasts approximately 3 months). Periocular (sub-Tenon) injection: typically 20-40 mg per injection, administered by the treating ophthalmologist. Intraoperative vitreous staining: a small amount of suspension is instilled into the vitreous cavity during vitrectomy and largely removed by the end of the case.',
    concentrations: ['40 mg/mL suspension (preservative-free formulation preferred for intraocular use)'],
    formulations: ['Injection'],
    route: 'Intravitreal or periocular (sub-Tenon) injection',
    sideEffects: {
      ocular: [
        'Steroid-response elevated intraocular pressure / glaucoma — significantly more common and more pronounced with intravitreal steroids than with topical steroid use',
        'Cataract progression (posterior subcapsular cataract), especially with repeated dosing',
        'Endophthalmitis (true infectious) — a rare but sight-threatening injection-related risk',
        '"Pseudo-endophthalmitis" — a sterile inflammatory reaction to the steroid crystals themselves, which can clinically mimic true infectious endophthalmitis (an important differential diagnosis after intravitreal triamcinolone injection)',
        'Vitreous floaters from visible drug particles',
        'Retinal detachment, vitreous hemorrhage (rare, injection-related)',
      ],
      systemic: [
        'Minimal systemic absorption expected with intravitreal/periocular administration, though transient systemic corticosteroid effects (e.g., mild hyperglycemia in diabetics) have been reported',
        'Facial flushing (uncommon)',
        'Systemic steroid effects are far less likely than with chronic oral corticosteroid use',
      ],
    },
    contraindications: [
      'Active ocular or periocular infection (bacterial, viral, fungal, or mycobacterial)',
      'Known hypersensitivity to triamcinolone or any component of the formulation',
    ],
    precautions: [
      'Steroid-responder patients (including those with a personal or family history of glaucoma) are at higher risk of significant IOP elevation and require close IOP monitoring after injection',
      'Cumulative cataractogenic risk increases with repeated dosing',
      'Must distinguish true infectious endophthalmitis from sterile pseudo-endophthalmitis after injection, as management differs substantially (the latter typically resolves without intravitreal antibiotics)',
      'Non-preservative-free (vehicle-containing) formulations should not be used intravitreally due to added inflammatory risk from the vehicle',
    ],
    drugInteractions: [
      'Additive IOP-elevating effect with other intraocular or topical corticosteroids used concurrently',
      'Caution in diabetic patients given the potential for transient systemic glucose elevation',
    ],
    patientCounseling: [
      'Report any new eye pain, worsening redness, increased floaters, flashes, or vision loss promptly after injection, as these may signal infection, retinal detachment, or significant IOP elevation',
      'Follow-up intraocular pressure checks are essential in the weeks after injection given the significant risk of steroid-induced IOP elevation',
      'Understand that a whitish, cloudy appearance in the vision immediately after injection (from visible drug particles) is expected and typically settles over time',
      'Report symptoms should not be assumed to be recurrent inflammation without evaluation, since injection-related infection is a medical emergency',
    ],
    pregnancyLactation:
      'Limited specific data on intravitreal/periocular use in pregnancy; systemic absorption is expected to be low, but corticosteroids should be used only when clearly indicated and the injection deferred if possible until after pregnancy, per prescriber and obstetric judgment.',
    pediatricConsiderations: [
      'Not formally studied in FDA pediatric trials, but published case series (e.g., intracameral use after pediatric cataract surgery, and treatment of pediatric uveitic macular edema) report short-term safety comparable to adults; IOP and cataract-progression monitoring are especially important given developing eyes',
    ],
    offLabelUses: [
      'Intravitreal use for diabetic macular edema and retinal-vein-occlusion-associated macular edema (Triesence is FDA-labeled for uveitis, sympathetic ophthalmia/temporal-arteritis-related inflammation, and intraoperative vitreous visualization — not primarily for macular edema from these other causes)',
    ],
    relatedConditionIds: ['diabetic-retinopathy', 'retinal-vein-occlusion', 'cystoid-macular-edema', 'intermediate-uveitis', 'sympathetic-ophthalmia'],
    monitoring: [
      'Intraocular pressure at regular intervals following injection (steroid-response glaucoma can develop over weeks)',
      'Lens exam for cataract progression with repeated injections',
      'Clinical exam and, if infection is suspected, prompt evaluation (and potentially vitreous tap/culture) to distinguish infectious endophthalmitis from sterile pseudo-endophthalmitis',
      'Optical coherence tomography (OCT) to track resolution of macular edema',
    ],
    clinicalPearls: [
      'Widely used off-label as a surgical adjunct to stain residual vitreous during pars plana vitrectomy — the white crystalline suspension adheres to vitreous strands, dramatically improving visualization and aiding complete removal, a classic unique use distinct from its anti-inflammatory indications',
      'Intravitreal corticosteroids carry a substantially higher risk of clinically significant IOP elevation than topical steroid drops — an important comparative board point',
      '"Pseudo-endophthalmitis" (a sterile inflammatory reaction to retained steroid crystals) is a key differential diagnosis for a hazy/inflamed-appearing eye after intravitreal triamcinolone injection and is an important distractor from true infectious endophthalmitis on exams',
      'Sustained-release steroid implants (e.g., dexamethasone or fluocinolone intravitreal implants) are increasingly used as alternatives providing more prolonged, controlled release compared with triamcinolone suspension',
    ],
    highYield: [
      'Depot corticosteroid suspension for intravitreal/periocular injection — treats diabetic macular edema, RVO macular edema, and noninfectious uveitis',
      'Classic unique off-label use: intraoperative vitreous staining during vitrectomy to improve visualization of vitreous strands',
      'Significant risk of steroid-response IOP elevation/glaucoma — notably higher risk than with topical steroids',
      'Cataract progression is a well-recognized risk with repeated dosing',
      '"Pseudo-endophthalmitis" (sterile inflammatory reaction to steroid crystals) can mimic true infectious endophthalmitis after injection — key differential board point',
    ],
    references: [
      {
        label: 'Intravitreal corticosteroid use for macular edema and uveitis',
        source: 'AAO Preferred Practice Pattern: Diabetic Retinopathy / Uveitis',
      },
      {
        label: 'Steroid pharmacology and intraocular pressure risk',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
    ],
  },

  // ============================================================
  // HYPEROSMOTICS
  // ============================================================
  {
    id: 'glycerin-oral',
    genericName: 'Glycerin (oral)',
    brandNames: ['Osmoglyn'],
    drugClass: 'Hyperosmotics',
    mechanismOfAction:
      'Oral hyperosmotic agent; rapidly absorbed and raises blood osmolality, creating an osmotic gradient that draws water out of the vitreous cavity and other ocular tissues into the vasculature, thereby reducing vitreous volume and acutely lowering intraocular pressure. Unlike mannitol, glycerin is metabolized systemically (largely in the liver) rather than being excreted unchanged.',
    indications: [
      'Acute angle-closure glaucoma (adjunct for rapid, short-term IOP reduction)',
      'Preoperative reduction of intraocular pressure and vitreous volume prior to intraocular surgery',
    ],
    ocularUses: [
      'Acute, short-term reduction of intraocular pressure in acute angle-closure glaucoma, typically as a bridge to definitive treatment (e.g., laser peripheral iridotomy)',
      'Preoperative IOP/vitreous volume reduction before ocular surgery when a soft eye is desired',
    ],
    typicalDosing:
      'Approximately 1-1.5 g/kg body weight given orally as a single dose, typically mixed with a flavored, chilled liquid to improve palatability and reduce nausea; onset of IOP-lowering effect within about 10-30 minutes, peak effect around 1 hour, duration approximately 4-5 hours.',
    concentrations: ['50% oral solution'],
    formulations: ['Solution'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Not directly ocular (systemic agent); effect is a rapid, transient reduction in intraocular pressure',
      ],
      systemic: [
        'Nausea and vomiting (common, especially if taken undiluted or not chilled)',
        'Headache',
        'Hyperglycemia — since glycerin is metabolized and can be converted to glucose, an important consideration in diabetic patients',
        'Diarrhea, abdominal discomfort',
        'Dehydration with excessive or repeated dosing',
      ],
    },
    contraindications: [
      'Anuria or severe dehydration',
      'Use with caution or avoid in diabetic patients given the risk of significant hyperglycemia, since glycerin is metabolized to glucose',
      'Severe cardiac decompensation (fluid shifts may not be well tolerated)',
    ],
    precautions: [
      'Because glycerin is metabolized (contributing calories and convertible to glucose), it should be used cautiously — or an alternative hyperosmotic (e.g., IV mannitol) chosen — in diabetic patients, unlike mannitol, which is not metabolized',
      'Administer chilled and over ice with a flavoring agent, and have the patient sip slowly, to reduce the high incidence of nausea/vomiting',
      'Use cautiously in elderly or cardiovascular/renal-compromised patients due to acute fluid shifts',
    ],
    drugInteractions: [
      'Additive hyperglycemic effect when combined with other agents or conditions that raise blood glucose',
      'Caution with diuretics or other agents affecting fluid/electrolyte balance given the osmotic fluid shift',
    ],
    patientCounseling: [
      'Drink the solution slowly, chilled and over ice if possible, to minimize nausea',
      'Report any severe nausea, vomiting, or lightheadedness',
      'Diabetic patients should be aware that this medication can raise blood glucose, and blood sugar should be monitored around the time of dosing',
      'This is typically a one-time or short-term treatment used to rapidly lower eye pressure, often followed by definitive treatment (e.g., laser iridotomy) for angle-closure glaucoma',
    ],
    pregnancyLactation:
      'Limited specific data; used only when clearly indicated for acute, vision-threatening elevated IOP (e.g., acute angle-closure glaucoma), weighing benefit versus risk given the systemic osmotic and glycemic effects, per prescriber judgment.',
    pediatricConsiderations: [
      'Pediatric dosing is weight-based (the same 1-1.5 g/kg as adults) and must be determined by a physician; children may be more susceptible to dehydration and the osmotic/glycemic effects of glycerin, so cautious use and monitoring are warranted, particularly in young or diabetic children',
    ],
    isEmergencyMedication: true,
    relatedConditionIds: ['primary-angle-closure-glaucoma'],
    monitoring: [
      'Intraocular pressure before and after dosing to confirm response',
      'Blood glucose in diabetic patients, given the risk of clinically significant hyperglycemia',
      'Hydration status and electrolytes, particularly with repeated dosing',
    ],
    clinicalPearls: [
      'Classic paired board contrast with IV mannitol: glycerin is administered ORALLY and is METABOLIZED systemically (contributing calories and convertible to glucose), making it relatively contraindicated or requiring caution in diabetics, whereas mannitol is given IV, is NOT metabolized, and is excreted unchanged by the kidneys — making mannitol generally safer in diabetics but requiring IV access and carrying greater nephrotoxic-risk concern in renal impairment',
      'Because it does not require IV access, glycerin can be a convenient option in an outpatient or urgent care setting for acute angle-closure glaucoma when IV mannitol is not readily available',
      'High rate of nausea/vomiting is a practical limitation, particularly relevant since patients with acute angle-closure glaucoma often already have nausea/vomiting as part of the presenting symptom complex',
    ],
    highYield: [
      'Oral hyperosmotic agent used for acute IOP reduction (e.g., acute angle-closure glaucoma) and preoperative vitreous volume reduction',
      'Classic mannitol-vs-glycerin distinction: glycerin is METABOLIZED (and can be converted to glucose, causing hyperglycemia — caution in diabetics) while mannitol is NOT metabolized and is excreted unchanged renally',
      'Given orally (no IV access needed), unlike mannitol which requires IV infusion',
      'High incidence of nausea/vomiting — administer chilled, over ice, with flavoring, and have the patient sip slowly',
      'Onset roughly 10-30 minutes, peak about 1 hour, duration about 4-5 hours',
    ],
    references: [
      {
        label: 'Oral vs. IV hyperosmotic agents for acute IOP reduction',
        source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology',
      },
      {
        label: 'Acute angle-closure glaucoma management',
        source: 'AAO Preferred Practice Pattern: Primary Angle Closure',
      },
    ],
  },
]
