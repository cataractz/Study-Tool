import type { Drug } from '../../types/drug'

export const antiInfectiveDrugs: Drug[] = [
  // ============================================================
  // ANTIBIOTICS
  // ============================================================
  {
    id: 'moxifloxacin',
    genericName: 'Moxifloxacin',
    brandNames: ['Vigamox', 'Moxeza'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Fourth-generation fluoroquinolone; inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, blocking bacterial DNA replication, transcription, and repair. Balanced dual-target inhibition reduces the likelihood of resistance development compared with earlier-generation fluoroquinolones.',
    indications: [
      'Bacterial conjunctivitis',
      'Prophylaxis before/after intraocular surgery',
      'Corneal ulcer (bacterial keratitis) - often used empirically pending culture',
    ],
    ocularUses: [
      'Treatment of bacterial conjunctivitis caused by susceptible organisms',
      'Perioperative prophylaxis for cataract and refractive surgery',
      'Empiric/adjunctive therapy for bacterial corneal ulcers',
    ],
    typicalDosing:
      'Conjunctivitis: 1 drop in affected eye(s) 3 times daily for 7 days. Corneal ulcer (off-label, more aggressive): loading dose every 15-30 minutes for the first hour, then hourly, tapering as clinical improvement occurs.',
    concentrations: ['0.5%'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation',
        'Conjunctival hyperemia',
        'Punctate keratitis',
        'Dry eye sensation',
        'Blurred vision (transient)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare: taste disturbance',
        'Very rare: hypersensitivity reaction',
      ],
    },
    contraindications: [
      'Known hypersensitivity to moxifloxacin or other fluoroquinolones',
    ],
    precautions: [
      'Not for injection into the eye or anterior chamber',
      'Contact lens wear should be avoided during active infection',
      'Overgrowth of non-susceptible organisms (including fungi) with prolonged use',
    ],
    drugInteractions: [
      'Minimal systemic drug interactions given negligible systemic absorption from topical dosing',
      'Caution with other topical medications administered concurrently - space instillations',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid touching the dropper tip to the eye or any surface',
      'Do not wear contact lenses while symptomatic or during active treatment',
      'Complete the full course even if symptoms improve early',
      'Contact the prescriber if redness, pain, or discharge worsens or fails to improve within a few days',
    ],
    pregnancyLactation:
      'Topical ophthalmic fluoroquinolones have minimal systemic absorption; generally considered low risk in pregnancy and lactation, but use only when clearly needed and per prescriber judgment.',
    monitoring: [
      'Clinical resolution of conjunctival injection and discharge',
      'For corneal ulcers: serial slit lamp exams, epithelial defect size, infiltrate size/depth',
      'Culture and sensitivity results to confirm/adjust empiric therapy',
    ],
    clinicalPearls: [
      'Excellent penetration into the aqueous humor and cornea, making it a preferred fluoroquinolone for perioperative prophylaxis and corneal infections',
      'Broad spectrum covering both gram-positive and gram-negative organisms, including improved gram-positive (e.g., Streptococcus) coverage compared with earlier fluoroquinolones',
      'Does not require refrigeration and is preservative-free in some formulations',
    ],
    highYield: [
      'Fourth-generation fluoroquinolone with dual mechanism (DNA gyrase + topoisomerase IV) lowers resistance risk',
      'Preferred agent for many corneal ulcer/keratitis cases due to excellent corneal and aqueous penetration',
      'Broad-spectrum gram-positive AND gram-negative coverage, including atypical organisms',
      'Commonly used for cataract surgery prophylaxis',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Fluoroquinolone spectrum and corneal ulcer management',
        source: 'AAO Preferred Practice Pattern',
      },
    ],
  },
  {
    id: 'ciprofloxacin',
    genericName: 'Ciprofloxacin',
    brandNames: ['Ciloxan'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Second-generation fluoroquinolone; inhibits bacterial DNA gyrase (topoisomerase II), preventing supercoiling and replication of bacterial DNA, leading to bacterial cell death (bactericidal).',
    indications: [
      'Bacterial conjunctivitis',
      'Bacterial corneal ulcer, especially with strong Pseudomonas suspicion (e.g., contact lens wearers)',
    ],
    ocularUses: [
      'Treatment of bacterial conjunctivitis',
      'Treatment of bacterial corneal ulcers, particularly Pseudomonas aeruginosa keratitis',
    ],
    typicalDosing:
      'Conjunctivitis: 1-2 drops every 2 hours while awake for 2 days, then every 4 hours for 5 more days. Corneal ulcer: intensive loading dose (drops every 15-30 minutes initially) tapering per clinical response; ointment applied 3 times daily is an alternative regimen.',
    concentrations: ['0.3% solution', '0.3% ointment'],
    route: 'Topical ophthalmic solution or ointment',
    sideEffects: {
      ocular: [
        'Local burning/stinging (common)',
        'White crystalline corneal precipitates (classic adverse effect with frequent dosing)',
        'Conjunctival hyperemia',
        'Superficial punctate keratitis',
        'Lid margin crusting (with ointment)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare hypersensitivity reactions',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ciprofloxacin or other fluoroquinolones',
    ],
    precautions: [
      'Risk of corneal precipitate formation with high-frequency dosing in ulcer treatment - monitor and consider tapering if precipitates impair healing assessment',
      'Avoid contact lens wear during active infection',
      'Superinfection with prolonged use',
    ],
    drugInteractions: [
      'Minimal systemic interactions due to low systemic absorption from topical route',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid touching the dropper tip to the eye',
      'Discontinue contact lens wear until the infection has fully resolved',
      'May cause transient stinging or a white crystalline precipitate on the corneal surface with frequent dosing',
      'Complete the full prescribed course',
    ],
    pregnancyLactation:
      'Topical ophthalmic use results in minimal systemic absorption; generally considered acceptable when clearly needed, though systemic fluoroquinolones carry caution in pregnancy due to arthropathy risk in animal studies - use clinical judgment.',
    monitoring: [
      'Slit lamp evaluation for corneal precipitates, especially with intensive dosing',
      'Resolution of infiltrate, epithelial defect healing',
      'Culture and sensitivity to guide therapy',
    ],
    clinicalPearls: [
      'Classic teaching point: ciprofloxacin can cause visible white corneal precipitates, especially with frequent dosing for corneal ulcers - important board fact',
      'Strong historical reputation for Pseudomonas aeruginosa coverage, relevant in contact lens-related keratitis',
      'Second-generation fluoroquinolone with narrower gram-positive coverage than later-generation agents (moxifloxacin, gatifloxacin)',
    ],
    highYield: [
      'Classic association with corneal precipitates/crystalline deposits with frequent topical dosing',
      'Strong Pseudomonas aeruginosa coverage - relevant for contact-lens-related keratitis',
      'Second-generation fluoroquinolone - relatively weaker gram-positive coverage vs. 4th generation agents',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Corneal precipitate adverse effect profile',
        source: "Physicians' Desk Reference / drug package insert",
      },
    ],
  },
  {
    id: 'ofloxacin',
    genericName: 'Ofloxacin',
    brandNames: ['Ocuflox'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Second-generation fluoroquinolone; inhibits bacterial DNA gyrase and topoisomerase IV, blocking DNA replication and leading to bactericidal effect against susceptible gram-positive and gram-negative organisms.',
    indications: [
      'Bacterial conjunctivitis',
      'Bacterial corneal ulcer',
    ],
    ocularUses: [
      'Treatment of bacterial conjunctivitis',
      'Treatment of bacterial keratitis/corneal ulcers',
    ],
    typicalDosing:
      'Conjunctivitis: 1-2 drops every 2-4 hours for the first 2 days, then 4 times daily for up to 5 more days. Corneal ulcer: more frequent loading dose initially (e.g., hourly), tapering with clinical improvement.',
    concentrations: ['0.3%'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient burning/stinging',
        'Conjunctival hyperemia',
        'Punctate keratitis',
        'Photophobia',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare hypersensitivity reactions',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ofloxacin or other fluoroquinolones',
    ],
    precautions: [
      'Avoid contact lens wear during treatment of active infection',
      'Watch for lack of improvement suggesting resistant organism or non-bacterial etiology',
    ],
    drugInteractions: [
      'Minimal systemic interactions due to negligible systemic absorption from topical route',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid touching the dropper tip to the eye',
      'Discontinue contact lens wear during treatment',
      'Complete the full course even if symptoms improve',
      'Report worsening redness, pain, or discharge promptly',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ophthalmic use; generally considered low risk when clearly indicated, per prescriber judgment.',
    monitoring: [
      'Symptom resolution and slit lamp exam for corneal clarity/infiltrate size',
      'Culture and sensitivity when applicable',
    ],
    clinicalPearls: [
      'Considered to have better corneal penetration than ciprofloxacin, historically favored for stromal keratitis',
      'Second-generation fluoroquinolone with reliable gram-negative (including some Pseudomonas) coverage',
      'Less prone to visible corneal precipitates compared with ciprofloxacin',
    ],
    highYield: [
      'Second-generation fluoroquinolone, good gram-negative coverage including Pseudomonas',
      'Better stromal/corneal penetration compared to ciprofloxacin, less precipitate formation',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Fluoroquinolone comparative pharmacology',
        source: 'AAO Preferred Practice Pattern',
      },
    ],
  },
  {
    id: 'tobramycin',
    genericName: 'Tobramycin',
    brandNames: ['Tobrex'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Aminoglycoside antibiotic; irreversibly binds the bacterial 30S ribosomal subunit, causing misreading of mRNA and inhibition of protein synthesis, resulting in a bactericidal effect. Particularly active against gram-negative organisms including Pseudomonas aeruginosa.',
    indications: [
      'Bacterial conjunctivitis',
      'Bacterial blepharitis/blepharoconjunctivitis',
      'Corneal ulcer, particularly gram-negative (Pseudomonas) keratitis, often as fortified compounded formulation',
    ],
    ocularUses: [
      'Treatment of external ocular infections caused by susceptible gram-negative and some gram-positive organisms',
      'Fortified (compounded, high-concentration) tobramycin used in severe bacterial keratitis, especially Pseudomonas',
    ],
    typicalDosing:
      'Conjunctivitis: 1-2 drops every 4 hours (mild-moderate) or ointment applied 2-3 times daily. Severe corneal ulcer: fortified 14% (compounded) drops dosed as frequently as every 30-60 minutes initially, tapering with improvement.',
    concentrations: ['0.3% solution', '0.3% ointment', 'Fortified 14% (compounded, hospital/ulcer use)'],
    route: 'Topical ophthalmic solution or ointment',
    sideEffects: {
      ocular: [
        'Local irritation, burning, stinging',
        'Conjunctival hyperemia',
        'Punctate keratitis with prolonged use',
        'Delayed corneal epithelial healing (especially fortified formulations)',
        'Lid margin swelling/erythema (hypersensitivity)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Theoretical risk of ototoxicity/nephrotoxicity essentially negligible with topical ophthalmic dosing (relevant primarily with systemic/IV aminoglycosides, not topical)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to tobramycin or other aminoglycosides',
    ],
    precautions: [
      'Fortified formulations are more toxic to corneal epithelium and can delay healing - use lowest effective frequency/duration',
      'Not typically first-line for routine conjunctivitis given epithelial toxicity potential vs. fluoroquinolones',
    ],
    drugInteractions: [
      'Minimal systemic interactions with topical ophthalmic dosing',
      'Additive epithelial toxicity possible with concurrent use of other topical epitheliotoxic agents (e.g., fortified vancomycin)',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid contaminating the dropper tip',
      'Discontinue contact lens wear during active infection',
      'Complete the full course of therapy',
      'Report any new itching, redness, or lid swelling, which may indicate an allergic reaction',
    ],
    pregnancyLactation:
      'Topical ophthalmic aminoglycosides have minimal systemic absorption and are generally considered low risk; systemic aminoglycosides carry known fetal ototoxicity risk, which is not directly applicable to topical ocular dosing but reinforces cautious use.',
    monitoring: [
      'Corneal epithelial integrity, especially with fortified formulations',
      'Clinical response of infiltrate/ulcer',
      'Culture and sensitivity to confirm organism and guide de-escalation',
    ],
    clinicalPearls: [
      'Classic aminoglycoside choice, along with gentamicin, for compounded "fortified" antibiotic therapy in severe bacterial keratitis',
      'Strong gram-negative coverage, particularly reliable against Pseudomonas aeruginosa',
      'Weaker gram-positive coverage compared with fluoroquinolones; often paired with fortified vancomycin (double coverage) for severe ulcers pending culture',
    ],
    highYield: [
      'Aminoglycoside - inhibits bacterial protein synthesis via 30S ribosomal subunit binding',
      'Fortified tobramycin classically paired with fortified vancomycin for empiric severe bacterial keratitis coverage',
      'Strong Pseudomonas coverage but relatively weak gram-positive coverage',
      'Topical use carries negligible systemic ototoxic/nephrotoxic risk (unlike IV aminoglycosides)',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Fortified antibiotic compounding for bacterial keratitis',
        source: 'AAO Preferred Practice Pattern',
      },
    ],
  },
  {
    id: 'erythromycin-ophthalmic',
    genericName: 'Erythromycin (ophthalmic)',
    brandNames: ['Ilotycin'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Macrolide antibiotic; reversibly binds the 50S ribosomal subunit, inhibiting bacterial protein synthesis (bacteriostatic at typical concentrations). Active against many gram-positive organisms and some gram-negative organisms.',
    indications: [
      'Bacterial conjunctivitis (mild)',
      'Blepharitis (lid margin application)',
      'Ophthalmia neonatorum prophylaxis (newborn eye prophylaxis)',
    ],
    ocularUses: [
      'Treatment of superficial ocular infections due to susceptible organisms',
      'Universal prophylaxis against gonococcal and chlamydial ophthalmia neonatorum in newborns',
      'Adjunct lid hygiene treatment for blepharitis/meibomian gland dysfunction',
    ],
    typicalDosing:
      'Conjunctivitis/blepharitis: small ribbon applied to affected eye(s) or lid margins 2-4 times daily, or once nightly for blepharitis maintenance. Neonatal prophylaxis: single application to each eye shortly after birth (standard newborn protocol).',
    concentrations: ['0.5% ointment'],
    route: 'Topical ophthalmic ointment',
    sideEffects: {
      ocular: [
        'Transient blurred vision due to ointment vehicle',
        'Mild local irritation or stinging',
        'Rare allergic/hypersensitivity reaction',
      ],
      systemic: [
        'Minimal systemic absorption with topical ophthalmic use',
        'Essentially no systemic macrolide effects (e.g., GI upset, QT prolongation) at ocular doses',
      ],
    },
    contraindications: [
      'Known hypersensitivity to erythromycin or other macrolides',
    ],
    precautions: [
      'Ointment vehicle causes temporary blurring - counsel patients, especially if applying before driving',
      'Increasing bacterial resistance limits reliability against some gram-negative and Staphylococcal strains',
    ],
    drugInteractions: [
      'No clinically significant systemic drug interactions expected with topical ophthalmic use (contrasts with oral erythromycin, which has major CYP3A4 interactions)',
    ],
    patientCounseling: [
      'Blurred vision is expected for several minutes after applying the ointment',
      'Apply a thin ribbon to the lower lid, avoiding tip contact with the eye',
      'Complete the full course even if symptoms resolve early',
      'For neonatal prophylaxis, a single application at birth is standard and no further counseling is needed for the infant',
    ],
    pregnancyLactation:
      'Considered safe in pregnancy and lactation; erythromycin ophthalmic ointment is the standard-of-care agent for newborn ocular prophylaxis, reflecting a strong safety profile.',
    monitoring: [
      'Clinical resolution of conjunctival injection/discharge',
      'Lid margin appearance in blepharitis treatment',
    ],
    clinicalPearls: [
      'Mainstay of mandatory ophthalmia neonatorum prophylaxis in most U.S. states, protecting against gonococcal and (to a lesser extent) chlamydial conjunctivitis in newborns',
      'Popular for pediatric bacterial conjunctivitis given ointment ease of application and safety in infants',
      'Bacteriostatic macrolide with narrower spectrum than fluoroquinolones; not first-line for aggressive/severe infections',
    ],
    highYield: [
      'Standard agent for universal newborn ocular prophylaxis (ophthalmia neonatorum) - classic board fact',
      'Macrolide - binds 50S ribosomal subunit, bacteriostatic',
      'Frequently used off-label at bedtime as adjunct for blepharitis/MGD lid hygiene',
      'Minimal systemic absorption/interactions despite oral erythromycin being famous for CYP3A4 drug interactions',
    ],
    references: [
      {
        label: 'Neonatal ocular prophylaxis guidelines',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Ophthalmic macrolide pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'polymyxin-b-trimethoprim',
    genericName: 'Polymyxin B / Trimethoprim',
    brandNames: ['Polytrim'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Combination agent: Polymyxin B is a cationic detergent-like polypeptide that disrupts the bacterial outer cell membrane phospholipids of gram-negative organisms (bactericidal). Trimethoprim inhibits bacterial dihydrofolate reductase, blocking folic acid synthesis and DNA production (primarily gram-positive coverage). Combination provides broad-spectrum synergistic coverage.',
    indications: [
      'Bacterial conjunctivitis',
    ],
    ocularUses: [
      'Treatment of acute bacterial conjunctivitis due to susceptible gram-positive and gram-negative organisms',
    ],
    typicalDosing:
      '1 drop in affected eye(s) every 3 hours (maximum 6 doses/day) for 7-10 days, per standard labeling.',
    concentrations: ['Polymyxin B 10,000 units/mL + Trimethoprim 1 mg/mL'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Local burning, stinging, or itching on instillation',
        'Conjunctival hyperemia',
        'Ocular hypersensitivity reaction (increased with prolonged use)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Rare systemic hypersensitivity reaction',
      ],
    },
    contraindications: [
      'Known hypersensitivity to polymyxin B, trimethoprim, or any component',
    ],
    precautions: [
      'No efficacy against Pseudomonas trimethoprim component, though polymyxin B does provide gram-negative activity including some Pseudomonas coverage',
      'Prolonged use may cause sensitization',
    ],
    drugInteractions: [
      'Minimal clinically significant systemic interactions with topical ophthalmic use',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid touching the dropper tip to the eye',
      'Discontinue contact lens wear during treatment',
      'Complete the full course even if symptoms improve early',
      'Report any rash, itching, or worsening redness suggestive of an allergic reaction',
    ],
    pregnancyLactation:
      'Considered acceptable in pregnancy and lactation given minimal systemic absorption from topical ocular dosing; widely used in pediatric populations, reflecting a favorable safety profile.',
    monitoring: [
      'Resolution of conjunctival injection and discharge within several days',
      'Reassess if no improvement (consider viral etiology or resistant organism)',
    ],
    clinicalPearls: [
      'Popular first-line choice for pediatric bacterial conjunctivitis due to favorable safety profile and broad coverage',
      'No cross-sensitivity with sulfonamides despite historical confusion; does not contain a sulfa moiety',
      'Cost-effective, widely available generic option for uncomplicated bacterial conjunctivitis',
    ],
    highYield: [
      'Combination targets both gram-positive (trimethoprim) and gram-negative (polymyxin B) organisms',
      'Common first-line choice in pediatric bacterial conjunctivitis',
      'Polymyxin B disrupts bacterial outer membrane; trimethoprim inhibits dihydrofolate reductase',
      'Not a sulfonamide - no cross-reactivity with sulfa allergy',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Pediatric bacterial conjunctivitis management',
        source: "Physicians' Desk Reference / drug package insert",
      },
    ],
  },
  {
    id: 'azithromycin-ophthalmic',
    genericName: 'Azithromycin (ophthalmic)',
    brandNames: ['AzaSite'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Macrolide antibiotic; binds the 50S ribosomal subunit to inhibit bacterial protein synthesis (bacteriostatic, with bactericidal activity at higher concentrations against some organisms). Formulated in a DuraSite vehicle that prolongs ocular surface contact time, and possesses anti-inflammatory properties useful in blepharitis.',
    indications: [
      'Bacterial conjunctivitis',
      'Blepharitis / meibomian gland dysfunction (off-label but common use)',
    ],
    ocularUses: [
      'Treatment of bacterial conjunctivitis caused by susceptible organisms',
      'Off-label management of chronic blepharitis and meibomian gland dysfunction due to anti-inflammatory and lipid-modulating effects',
    ],
    typicalDosing:
      'Conjunctivitis: 1 drop twice daily for 2 days, then once daily for 5 more days. Blepharitis (off-label): once daily to twice daily dosing for extended courses, often pulsed (e.g., several days per month).',
    concentrations: ['1%'],
    route: 'Topical ophthalmic solution (DuraSite gel-forming vehicle)',
    sideEffects: {
      ocular: [
        'Eye irritation, stinging',
        'Ocular discharge or mattering (from viscous vehicle)',
        'Conjunctival hyperemia',
        'Transient blurred vision immediately after instillation (viscous vehicle)',
      ],
      systemic: [
        'Minimal systemic absorption with topical ophthalmic use',
        'Systemic macrolide effects (GI upset, QT prolongation) essentially not expected at ocular doses',
      ],
    },
    contraindications: [
      'Known hypersensitivity to azithromycin or other macrolides',
    ],
    precautions: [
      'Viscous DuraSite vehicle may cause temporary blurring - counsel patient to wait before driving',
      'Shake well before use given suspension vehicle',
    ],
    drugInteractions: [
      'No clinically significant systemic drug interactions expected with topical ophthalmic use',
    ],
    patientCounseling: [
      'Shake the single-use container before instilling',
      'Complete the full course even though dosing frequency decreases after the first 2 days',
      'Discontinue contact lens wear during treatment',
      'Discard each single-use vial after one use',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical use; generally considered low risk when clinically indicated, per prescriber judgment.',
    monitoring: [
      'Resolution of conjunctival signs/symptoms',
      'Lid margin and meibomian gland appearance when used for blepharitis',
    ],
    clinicalPearls: [
      'DuraSite vehicle allows for less frequent dosing (twice daily then once daily) compared with most other topical antibiotics due to prolonged tear film residence time',
      'Popular off-label choice for anterior blepharitis/MGD given dual antibacterial and anti-inflammatory (down-regulates inflammatory cytokines) properties',
      'Broad-spectrum macrolide with good activity against many gram-positive organisms and some atypicals',
    ],
    highYield: [
      'DuraSite vehicle enables reduced dosing frequency (BID then daily) via prolonged ocular surface contact',
      'Commonly used off-label for blepharitis/MGD due to anti-inflammatory properties beyond antibacterial effect',
      'Macrolide mechanism - 50S ribosomal subunit inhibition',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Blepharitis and MGD management',
        source: 'AAO Preferred Practice Pattern',
      },
    ],
  },
  {
    id: 'gentamicin',
    genericName: 'Gentamicin',
    brandNames: ['Genoptic', 'Gentak'],
    drugClass: 'Antibiotics',
    mechanismOfAction:
      'Aminoglycoside antibiotic; irreversibly binds the bacterial 30S ribosomal subunit, causing misreading of mRNA codons and inhibition of protein synthesis (bactericidal). Strong activity against gram-negative organisms, including Pseudomonas aeruginosa.',
    indications: [
      'Bacterial conjunctivitis',
      'Bacterial corneal ulcer, particularly gram-negative organisms, often as fortified compounded formulation',
    ],
    ocularUses: [
      'Treatment of external bacterial infections caused by susceptible organisms',
      'Fortified (compounded) gentamicin used historically in severe bacterial keratitis, particularly Pseudomonas',
    ],
    typicalDosing:
      'Conjunctivitis: 1-2 drops every 4 hours (mild-moderate) or ointment 2-3 times daily. Severe corneal ulcer: fortified formulation (compounded, typically 1.3-1.5%) dosed as frequently as every 30-60 minutes initially, tapering with clinical response.',
    concentrations: ['0.3% solution', '0.3% ointment', 'Fortified (compounded, hospital/ulcer use)'],
    route: 'Topical ophthalmic solution or ointment',
    sideEffects: {
      ocular: [
        'Local burning, stinging, irritation',
        'Conjunctival hyperemia',
        'Punctate keratopathy with prolonged use',
        'Delayed epithelial healing (especially fortified formulations)',
        'Contact hypersensitivity (lid erythema, edema) with prolonged use',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Theoretical ototoxicity/nephrotoxicity essentially negligible at topical ophthalmic doses (a concern with systemic/IV administration, not topical)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to gentamicin or other aminoglycosides',
    ],
    precautions: [
      'Epithelial toxicity with prolonged or fortified use can delay corneal healing',
      'Not preferred first-line for routine conjunctivitis given relative epithelial toxicity compared with fluoroquinolones',
    ],
    drugInteractions: [
      'Minimal systemic interactions from topical use',
      'Additive epithelial toxicity possible with concurrent fortified antibiotics (e.g., fortified vancomycin)',
    ],
    patientCounseling: [
      'Wash hands before instilling; avoid touching the dropper tip to the eye',
      'Discontinue contact lens wear during active infection',
      'Report any increased redness, itching, or lid swelling, which may indicate toxicity or allergy',
      'Complete the full prescribed course',
    ],
    pregnancyLactation:
      'Topical ophthalmic use results in minimal systemic absorption and is generally considered low risk; systemic aminoglycosides carry known fetal ototoxicity risk, which reinforces cautious use though not directly applicable to topical ocular dosing.',
    monitoring: [
      'Corneal epithelial status, especially with fortified formulations',
      'Clinical response of infection/infiltrate',
      'Culture and sensitivity to guide therapy',
    ],
    clinicalPearls: [
      'Along with tobramycin, a classic aminoglycoside used as fortified compounded therapy for severe bacterial keratitis, historically paired with fortified cefazolin or vancomycin for broad empiric coverage',
      'Reliable gram-negative/Pseudomonas coverage but relatively weak against many gram-positive organisms',
      'Older, well-established, inexpensive option; largely supplanted by fluoroquinolones for routine use due to relatively higher epithelial toxicity',
    ],
    highYield: [
      'Aminoglycoside - 30S ribosomal subunit inhibition, bactericidal',
      'Classic fortified antibiotic paired with fortified cefazolin/vancomycin for severe bacterial keratitis empiric coverage',
      'Strong gram-negative/Pseudomonas coverage, weak gram-positive coverage',
      'Topical use has negligible systemic oto/nephrotoxic risk unlike systemic aminoglycosides',
    ],
    references: [
      {
        label: 'Ophthalmic dosing and indications',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
      {
        label: 'Fortified antibiotic therapy for bacterial keratitis',
        source: 'AAO Preferred Practice Pattern',
      },
    ],
  },

  // ============================================================
  // ANTIVIRALS
  // ============================================================
  {
    id: 'trifluridine',
    genericName: 'Trifluridine',
    brandNames: ['Viroptic'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Fluorinated pyrimidine nucleoside analog; incorporated into viral (and to a lesser extent host) DNA, inhibiting viral DNA polymerase and thymidylate synthetase, thereby blocking viral DNA replication. Active against herpes simplex virus (HSV) types 1 and 2.',
    indications: [
      'Herpes simplex keratitis (epithelial dendritic or geographic ulcers)',
      'Primary keratoconjunctivitis due to HSV',
    ],
    ocularUses: [
      'Treatment of epithelial keratitis (dendritic ulcers) caused by herpes simplex virus',
    ],
    typicalDosing:
      '1 drop onto the cornea every 2 hours while awake (maximum 9 drops/day) until the epithelial defect re-epithelializes, then reduced to 1 drop every 4 hours for an additional 7 days; total duration generally not exceeding about 21 days due to toxicity.',
    concentrations: ['1%'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Significant ocular surface toxicity with prolonged use (superficial punctate keratopathy, delayed epithelial healing)',
        'Burning/stinging on instillation (common)',
        'Conjunctival hyperemia',
        'Punctal stenosis with prolonged use',
        'Increased intraocular pressure (rare)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Systemic toxicity essentially not expected at ocular doses',
      ],
    },
    contraindications: [
      'Known hypersensitivity to trifluridine',
    ],
    precautions: [
      'Corneal epithelial toxicity is dose- and duration-dependent - avoid use beyond about 21 days and reassess if no improvement by 7-14 days',
      'Should not be used as sole therapy for stromal or endothelial disease (herpetic stromal keratitis/uveitis) without additional management',
    ],
    drugInteractions: [
      'Minimal systemic drug interactions expected given topical route and negligible systemic absorption',
    ],
    patientCounseling: [
      'Frequent dosing (up to 9 times daily) is required initially; set reminders to maintain the schedule',
      'Expect mild transient stinging on instillation',
      'Do not use for longer than 21 days due to corneal epithelial toxicity risk with prolonged use',
      'Return for follow-up to confirm re-epithelialization and to taper the dose appropriately',
    ],
    pregnancyLactation:
      'Limited systemic absorption with topical ophthalmic use; use only if clearly needed, weighing benefits versus theoretical risks, per prescriber judgment.',
    monitoring: [
      'Serial slit lamp exams to track epithelial healing and monitor for drug toxicity',
      'Corneal sensation testing (herpetic disease can cause hypoesthesia)',
      'Watch for signs of progression to stromal disease',
    ],
    clinicalPearls: [
      'One of the original topical antivirals for HSV epithelial keratitis; largely being supplanted in practice by oral antivirals (acyclovir/valacyclovir) due to better tolerability and equal efficacy without topical toxicity',
      'Classic teaching point: prolonged trifluridine use itself can cause a toxic keratopathy that mimics non-healing herpetic disease - a key diagnostic pitfall',
      'Requires refrigeration for storage in some formulations',
    ],
    highYield: [
      'First-line topical antiviral historically used for HSV dendritic epithelial keratitis',
      'Classic pitfall: prolonged use (>~21 days) causes toxic keratopathy that can mimic non-healing herpetic ulcer',
      'Nucleoside analog inhibiting viral DNA polymerase',
      'Oral acyclovir/valacyclovir increasingly preferred over topical trifluridine due to comparable efficacy and less surface toxicity',
    ],
    references: [
      {
        label: 'Herpetic keratitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Ophthalmic antiviral pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'ganciclovir-gel',
    genericName: 'Ganciclovir (ophthalmic gel)',
    brandNames: ['Zirgan'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Synthetic guanine nucleoside analog; phosphorylated by viral thymidine kinase to its active triphosphate form, which competitively inhibits viral DNA polymerase and is incorporated into viral DNA, terminating chain elongation. Active against herpes simplex virus.',
    indications: [
      'Herpes simplex dendritic/geographic epithelial keratitis',
    ],
    ocularUses: [
      'Treatment of acute herpetic epithelial keratitis (dendritic ulcers)',
    ],
    typicalDosing:
      '1 drop (gel) 5 times daily until the corneal ulcer heals, then 3 times daily for an additional 7 days.',
    concentrations: ['0.15% gel'],
    route: 'Topical ophthalmic gel',
    sideEffects: {
      ocular: [
        'Transient blurred vision immediately after instillation (gel vehicle)',
        'Mild eye irritation or stinging',
        'Conjunctival hyperemia',
        'Punctate keratopathy (less than with trifluridine)',
      ],
      systemic: [
        'Minimal systemic absorption with topical use',
        'Systemic toxicity (e.g., myelosuppression seen with IV ganciclovir) essentially not expected at ocular topical doses',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ganciclovir or related compounds (e.g., valganciclovir)',
    ],
    precautions: [
      'Reassess if no clinical improvement within about 7 days',
      'Not intended for stromal or endothelial herpetic disease as monotherapy',
    ],
    drugInteractions: [
      'Minimal systemic drug interactions expected given topical route and negligible systemic absorption',
    ],
    patientCounseling: [
      'Instill the gel as directed; vision may blur briefly after application',
      'Continue dosing as prescribed even as symptoms improve, then taper per follow-up instructions',
      'Avoid contact lens wear during treatment',
      'Discuss resuming long-term oral antiviral prophylaxis if there is a history of recurrent episodes',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ophthalmic use; use when clearly indicated, weighing benefit versus theoretical risk, per prescriber judgment.',
    monitoring: [
      'Serial slit lamp exams to confirm re-epithelialization',
      'Corneal sensation and signs of progression to stromal involvement',
    ],
    clinicalPearls: [
      'Generally better tolerated than trifluridine, with less corneal epithelial toxicity, making it a preferred topical antiviral when topical therapy is chosen',
      'Gel formulation improves comfort and reduces dosing frequency compared with trifluridine drops',
      'Often used in conjunction with, or in place of, oral antivirals depending on clinician preference and disease severity',
    ],
    highYield: [
      'Better corneal epithelial tolerability profile than trifluridine - preferred topical antiviral in many practices',
      'Gel vehicle allows less frequent dosing (5x/day vs. every 2 hours for trifluridine)',
      'Guanine nucleoside analog inhibiting viral DNA polymerase after intracellular phosphorylation',
    ],
    references: [
      {
        label: 'Herpetic keratitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Ophthalmic antiviral comparative pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'acyclovir-oral',
    genericName: 'Acyclovir (oral, ophthalmic use)',
    brandNames: ['Zovirax'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Synthetic purine nucleoside analog; selectively phosphorylated by viral thymidine kinase in HSV/VZV-infected cells to its active triphosphate form, which inhibits viral DNA polymerase and causes chain termination upon incorporation into viral DNA. Selectivity for infected cells limits toxicity to uninfected host cells.',
    indications: [
      'Herpes simplex keratitis (epithelial and stromal disease, and prophylaxis against recurrence)',
      'Herpes zoster ophthalmicus (HZO)',
    ],
    ocularUses: [
      'Systemic (oral) treatment of ocular HSV disease, including as an alternative or adjunct to topical antivirals',
      'Treatment of herpes zoster ophthalmicus to reduce ocular complications',
      'Long-term suppressive/prophylactic therapy to reduce recurrence of herpetic eye disease',
    ],
    typicalDosing:
      'HSV epithelial keratitis (treatment): typically dosed multiple times daily (5 times/day) for about 7-10 days. Herpes zoster ophthalmicus: higher dose regimen, typically 5 times daily for 7-10 days, ideally started within 72 hours of rash onset. Prophylaxis/suppression: lower dose, twice daily, often for extended periods (e.g., a year or longer) in patients with recurrent herpetic eye disease.',
    concentrations: ['Oral tablets/capsules - various strengths per manufacturer labeling'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Not directly ocular (systemic drug); indirectly reduces ocular herpetic recurrence and complications',
      ],
      systemic: [
        'Nausea, vomiting, diarrhea, headache',
        'Rare nephrotoxicity (crystalline nephropathy), especially with inadequate hydration or high doses',
        'Rare CNS effects (dizziness, confusion) especially in renal impairment or elderly patients',
      ],
    },
    contraindications: [
      'Known hypersensitivity to acyclovir or valacyclovir',
    ],
    precautions: [
      'Dose adjustment required in renal impairment',
      'Adequate hydration recommended to reduce nephrotoxicity risk, especially at higher doses',
    ],
    drugInteractions: [
      'Probenecid can increase acyclovir levels by reducing renal clearance',
      'Additive nephrotoxicity risk with other nephrotoxic drugs',
      'Caution with other CNS-active drugs given rare CNS side effects',
    ],
    patientCounseling: [
      'Take with plenty of water and maintain adequate hydration to reduce renal risk',
      'Complete the full course even if symptoms improve',
      'Report any signs of an allergic reaction (rash, swelling)',
      'Discuss the appropriateness of long-term suppressive therapy if recurrences are frequent',
    ],
    pregnancyLactation:
      'Acyclovir has an extensive safety record in pregnancy and is generally considered compatible; used when clearly indicated for significant herpetic disease. Excreted in breast milk in small amounts - generally considered compatible with breastfeeding per standard references.',
    monitoring: [
      'Renal function periodically with prolonged or high-dose therapy',
      'Clinical resolution of herpetic ocular findings',
      'Recurrence frequency if on long-term suppressive therapy',
    ],
    clinicalPearls: [
      'Landmark Herpetic Eye Disease Study (HEDS) demonstrated that long-term oral acyclovir prophylaxis reduces the rate of recurrent herpetic eye disease, a key evidence-based practice point',
      'Oral antivirals are increasingly favored over topical antivirals for HSV epithelial keratitis because they avoid corneal epithelial toxicity while achieving comparable efficacy',
      'Requires more frequent daily dosing than valacyclovir due to lower oral bioavailability',
    ],
    highYield: [
      'HEDS trial - long-term oral acyclovir prophylaxis reduces herpetic eye disease recurrence (classic board fact)',
      'First-line systemic treatment for herpes zoster ophthalmicus when started within 72 hours of rash onset',
      'Selectively activated by viral thymidine kinase - explains favorable safety profile',
      'Lower bioavailability than valacyclovir requires more frequent dosing',
    ],
    references: [
      {
        label: 'Herpes Eye Disease Study (HEDS) and antiviral prophylaxis',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Systemic antiviral pharmacology for ocular herpetic disease',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'valacyclovir-oral',
    genericName: 'Valacyclovir (oral, ophthalmic use)',
    brandNames: ['Valtrex'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Prodrug of acyclovir; rapidly and almost completely converted to acyclovir after oral absorption via first-pass intestinal/hepatic metabolism, providing significantly higher bioavailability than oral acyclovir. Once converted, mechanism is identical to acyclovir: viral thymidine kinase-dependent phosphorylation, inhibition of viral DNA polymerase, and chain termination.',
    indications: [
      'Herpes simplex keratitis (epithelial and stromal disease, and recurrence prophylaxis)',
      'Herpes zoster ophthalmicus (HZO)',
    ],
    ocularUses: [
      'Systemic treatment of ocular HSV disease as an alternative to acyclovir with improved dosing convenience',
      'Treatment of herpes zoster ophthalmicus',
      'Long-term suppressive therapy to reduce recurrence of herpetic eye disease',
    ],
    typicalDosing:
      'HSV epithelial keratitis (treatment): typically dosed 3 times daily for about 7-10 days. Herpes zoster ophthalmicus: higher dose, typically 3 times daily for 7-10 days, ideally initiated within 72 hours of rash onset. Prophylaxis/suppression: lower once- or twice-daily dosing for extended periods in patients with recurrent herpetic eye disease.',
    concentrations: ['Oral tablets - various strengths per manufacturer labeling'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Not directly ocular (systemic drug); indirectly reduces ocular herpetic recurrence and complications',
      ],
      systemic: [
        'Nausea, headache, abdominal pain',
        'Rare nephrotoxicity, especially with inadequate hydration, high doses, or renal impairment',
        'Rare thrombotic microangiopathy (TTP/HUS) reported at very high doses in immunocompromised patients (historically with high-dose HIV/AIDS regimens)',
        'Rare CNS effects (confusion, hallucinations), particularly in renal impairment or elderly patients',
      ],
    },
    contraindications: [
      'Known hypersensitivity to valacyclovir or acyclovir',
    ],
    precautions: [
      'Dose adjustment required in renal impairment',
      'Ensure adequate hydration to minimize nephrotoxicity risk',
    ],
    drugInteractions: [
      'Probenecid can increase acyclovir (active metabolite) levels by reducing renal clearance',
      'Additive nephrotoxicity risk with other nephrotoxic agents',
    ],
    patientCounseling: [
      'Take with plenty of water and maintain adequate hydration to reduce renal risk',
      'Complete the full course even if symptoms improve',
      'Higher bioavailability than oral acyclovir allows less frequent dosing — take as prescribed',
      'Discuss the appropriateness of long-term suppressive therapy if recurrences are frequent',
    ],
    pregnancyLactation:
      'Valacyclovir (via its active metabolite acyclovir) has an extensive safety record in pregnancy and is generally considered compatible when clearly indicated; considered compatible with breastfeeding per standard references given acyclovir excretion data.',
    monitoring: [
      'Renal function periodically with prolonged or high-dose therapy',
      'Clinical resolution of herpetic ocular findings and recurrence frequency on suppressive therapy',
    ],
    clinicalPearls: [
      'Preferred over oral acyclovir by many clinicians due to improved oral bioavailability allowing less frequent dosing (better patient adherence)',
      'Used for herpes zoster ophthalmicus similarly to acyclovir/famciclovir, with treatment ideally started within 72 hours of rash onset to reduce risk of ocular complications (keratitis, uveitis, scleritis)',
      'Like acyclovir, has strong evidence (extrapolated from HEDS-style data and clinical practice) supporting long-term suppression for recurrent herpetic eye disease',
    ],
    highYield: [
      'Prodrug of acyclovir with much higher oral bioavailability - allows less frequent (TID vs. 5x/day) dosing',
      'First-line/preferred systemic option for herpes zoster ophthalmicus, started within 72 hours of rash onset',
      'Same viral thymidine-kinase-dependent mechanism as acyclovir once converted',
      'Rare but notable adverse effect: thrombotic microangiopathy at very high doses in immunocompromised patients',
    ],
    references: [
      {
        label: 'Herpes zoster ophthalmicus and HSV keratitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Systemic antiviral prodrug pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },

  // ============================================================
  // ANTIFUNGALS
  // ============================================================
  {
    id: 'natamycin',
    genericName: 'Natamycin',
    brandNames: ['Natacyn'],
    drugClass: 'Antifungals',
    mechanismOfAction:
      'Polyene antifungal; binds ergosterol in the fungal cell membrane, altering membrane permeability and causing leakage of essential intracellular components, leading to fungal cell death (fungicidal). Poor solubility limits it largely to topical use, but this is advantageous for superficial keratomycosis.',
    indications: [
      'Fungal keratitis (corneal ulcer), particularly filamentous fungi (e.g., Fusarium, Aspergillus)',
      'Fungal blepharitis/conjunctivitis (less common indication)',
    ],
    ocularUses: [
      'First-line treatment for fungal keratitis, especially caused by filamentous fungi',
    ],
    typicalDosing:
      '1 drop every 1-2 hours initially for the first 3-4 days, then tapering the frequency gradually (e.g., every 3-4 hours) as the infection improves; total treatment duration is often prolonged (many weeks) given slow fungal clearance.',
    concentrations: ['5% suspension'],
    route: 'Topical ophthalmic suspension',
    sideEffects: {
      ocular: [
        'Local irritation, burning, stinging on instillation',
        'Conjunctival hyperemia',
        'Punctate keratopathy with prolonged use',
        'Corneal opacity/haze (from suspension deposits) possible if not shaken/administered properly',
      ],
      systemic: [
        'Minimal systemic absorption with topical use given poor systemic solubility/absorption of natamycin',
      ],
    },
    contraindications: [
      'Known hypersensitivity to natamycin',
    ],
    precautions: [
      'Shake suspension well before each use',
      'Poor corneal stromal penetration relative to epithelial concentration - may limit efficacy in deep stromal fungal keratitis, sometimes requiring adjunct therapy (e.g., intrastromal or oral antifungal, or surgical intervention)',
      'Response to therapy in fungal keratitis is typically slow - avoid premature discontinuation',
    ],
    drugInteractions: [
      'Minimal systemic drug interactions given topical route and negligible systemic absorption',
    ],
    patientCounseling: [
      'Shake the suspension well before each use',
      'Frequent initial dosing is required (often hourly); maintain the schedule closely',
      'Treatment courses are often prolonged (several weeks) — continue as directed even if symptoms improve',
      'Attend all follow-up visits to monitor treatment response, as fungal keratitis can worsen despite therapy',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ophthalmic use; use when clearly indicated for vision- or eye-threatening fungal infection, per prescriber judgment.',
    monitoring: [
      'Serial slit lamp exams to track infiltrate size, epithelial defect, and depth of involvement',
      'Corneal scraping/culture results to confirm fungal organism and guide duration of therapy',
      'Watch for signs of worsening (may require escalation to oral antifungal or surgical intervention)',
    ],
    clinicalPearls: [
      'Considered the drug of choice (first-line) for filamentous fungal keratitis (e.g., Fusarium species), which is especially relevant in agricultural/plant-related corneal trauma cases',
      'One of the few antifungals FDA-approved specifically for ophthalmic use',
      'Fungal keratitis is a vision-threatening emergency; treatment courses are often much longer (weeks) than bacterial keratitis',
    ],
    highYield: [
      'Drug of choice (first-line) for filamentous fungal keratitis, e.g., Fusarium (classic association with plant/vegetative corneal trauma)',
      'Polyene antifungal binding ergosterol in fungal cell membrane',
      'One of very few FDA-approved topical ophthalmic antifungal agents',
      'Poor stromal penetration - may require adjunctive intrastromal, oral antifungal, or surgical therapy for deep infection',
    ],
    references: [
      {
        label: 'Fungal keratitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Ophthalmic antifungal pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'voriconazole-topical',
    genericName: 'Voriconazole (topical/intrastromal, ophthalmic use)',
    brandNames: ['Vfend (systemic brand; compounded for ophthalmic use)'],
    drugClass: 'Antifungals',
    mechanismOfAction:
      'Triazole antifungal; inhibits fungal cytochrome P450-dependent 14-alpha-demethylase, blocking conversion of lanosterol to ergosterol, disrupting fungal cell membrane synthesis (fungistatic, with some fungicidal activity depending on organism). Broad-spectrum activity against both yeasts and filamentous fungi, with good corneal penetration when compounded topically or delivered intrastromally.',
    indications: [
      'Fungal keratitis, particularly yeast forms (e.g., Candida) and select filamentous organisms, or as adjunct/alternative when natamycin response is inadequate',
      'Deep stromal fungal keratitis (via intrastromal injection) when topical penetration is insufficient',
    ],
    ocularUses: [
      'Compounded topical solution used as adjunct or alternative therapy for fungal keratitis',
      'Intrastromal or intracameral injection (specialist/cornea subspecialist use) for deep or refractory fungal keratitis',
    ],
    typicalDosing:
      'Topical (compounded): 1 drop applied frequently (e.g., every 1-2 hours initially), tapering as clinically indicated, similar intensive regimen to other topical antifungals. Intrastromal/intracameral injection: administered by a cornea specialist as a targeted procedure, dosing and frequency individualized.',
    concentrations: ['1% compounded topical solution (typical compounding concentration)'],
    route: 'Topical ophthalmic solution (compounded) or intrastromal/intracameral injection',
    sideEffects: {
      ocular: [
        'Local irritation, burning, stinging with topical use',
        'Conjunctival hyperemia',
        'Punctate keratopathy',
        'Rare corneal toxicity/epithelial defect with prolonged or high-frequency use',
      ],
      systemic: [
        'Minimal systemic absorption with topical/compounded ophthalmic use',
        'Systemic azole effects (hepatotoxicity, visual disturbances, photosensitivity, QT prolongation) are associated with oral/IV voriconazole, not typically with topical ocular use',
      ],
    },
    contraindications: [
      'Known hypersensitivity to voriconazole or other azole antifungals',
    ],
    precautions: [
      'As a compounded (non-FDA-approved-for-ophthalmic-use) preparation, stability and concentration can vary by compounding pharmacy',
      'Relatively weaker efficacy against some filamentous fungi (e.g., Fusarium) compared with natamycin - not universally first-line',
      'Response should be monitored closely; consider combination or alternative therapy if inadequate',
    ],
    drugInteractions: [
      'Minimal systemic interactions expected with topical/compounded ophthalmic use given low systemic absorption',
      'Systemic oral/IV voriconazole (not typically used primarily for isolated keratitis) has major CYP450 interactions, but this is generally not relevant to topical ocular dosing',
    ],
    patientCounseling: [
      'This is a compounded, non-commercial preparation — use exactly as directed by the prescriber',
      'Frequent initial dosing is typical; maintain the schedule closely',
      'Attend all follow-up visits, as fungal keratitis can be slow to respond and may require therapy adjustment',
      'Report any worsening pain, redness, or vision loss promptly',
    ],
    pregnancyLactation:
      'Limited data on topical/compounded ophthalmic use; given minimal systemic absorption, generally considered lower risk than systemic use, but should be used only when clearly indicated per prescriber judgment.',
    monitoring: [
      'Serial slit lamp exams to assess infiltrate/ulcer response',
      'Corneal culture and susceptibility results to guide antifungal selection',
      'Consider need for surgical intervention (e.g., corneal transplant) if medical therapy fails',
    ],
    clinicalPearls: [
      'Broader spectrum against yeast (e.g., Candida) than natamycin, making it a useful alternative or adjunct, particularly for yeast keratitis or natamycin treatment failures',
      'The Mycotic Ulcer Treatment Trial (MUTT) found natamycin superior to voriconazole for filamentous fungal keratitis overall, especially Fusarium - an important evidence-based distinction',
      'Requires compounding pharmacy preparation as it is not commercially available as an FDA-approved ophthalmic formulation',
    ],
    highYield: [
      'MUTT trial: natamycin outperformed topical voriconazole for filamentous fungal keratitis (especially Fusarium) - key evidence-based fact',
      'Broader yeast (Candida) coverage than natamycin; useful alternative/adjunct agent',
      'Triazole - inhibits fungal 14-alpha-demethylase, disrupting ergosterol synthesis',
      'Available as compounded topical drops or intrastromal/intracameral injection for deep infection',
    ],
    references: [
      {
        label: 'Mycotic Ulcer Treatment Trial (MUTT) and fungal keratitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Compounded ophthalmic antifungal pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
  {
    id: 'amphotericin-b-topical',
    genericName: 'Amphotericin B (topical, ophthalmic use)',
    brandNames: ['Fungizone (systemic brand; compounded for ophthalmic use)'],
    drugClass: 'Antifungals',
    mechanismOfAction:
      'Polyene antifungal; binds ergosterol in the fungal cell membrane, forming pores that increase membrane permeability and cause leakage of intracellular contents, leading to fungal cell death (fungicidal). Particularly effective against yeasts, including Candida species.',
    indications: [
      'Fungal keratitis, particularly yeast forms (e.g., Candida species)',
      'Fungal endophthalmitis (via intravitreal route, specialist use)',
    ],
    ocularUses: [
      'Compounded topical solution used for yeast (Candida) keratitis, especially when natamycin penetration/spectrum is inadequate',
      'Intracameral or intravitreal injection (subspecialist use) for deep fungal keratitis or fungal endophthalmitis',
    ],
    typicalDosing:
      'Topical (compounded): 1 drop applied frequently (e.g., every 1-2 hours initially), tapering with clinical improvement, similar to other intensive topical antimicrobial regimens for corneal infection.',
    concentrations: ['0.15%-0.3% compounded topical solution (typical compounding range)'],
    route: 'Topical ophthalmic solution (compounded); intracameral/intravitreal injection for deep disease',
    sideEffects: {
      ocular: [
        'Significant local irritation, burning, and stinging (notably more irritating than natamycin)',
        'Conjunctival hyperemia',
        'Punctate keratopathy and delayed epithelial healing with prolonged use',
        'Corneal toxicity with higher concentrations or prolonged frequent dosing',
      ],
      systemic: [
        'Minimal systemic absorption with topical/compounded ophthalmic use',
        'Systemic infusion-related toxicity (nephrotoxicity, fever/chills - the classic "shake and bake" reaction) is associated with IV amphotericin B use, not topical ocular dosing',
      ],
    },
    contraindications: [
      'Known hypersensitivity to amphotericin B',
    ],
    precautions: [
      'Compounded preparation - concentration and stability vary by compounding pharmacy; not FDA-approved specifically for ophthalmic use',
      'Significant epithelial toxicity potential - monitor closely and balance antifungal benefit against corneal healing delay',
      'Reserve for cases where organism (yeast) and clinical picture favor amphotericin B over natamycin',
    ],
    drugInteractions: [
      'Minimal systemic interactions expected with topical ophthalmic/compounded use given low systemic absorption',
      'Systemic IV amphotericin B interactions (e.g., additive nephrotoxicity with other nephrotoxic drugs) are not typically relevant to topical ocular use',
    ],
    patientCounseling: [
      'This is a compounded, non-commercial preparation — use exactly as directed by the prescriber',
      'Expect significant stinging/burning on instillation',
      'Frequent initial dosing is typical; maintain the schedule closely',
      'Attend all follow-up visits, as fungal keratitis can be slow to respond and may require therapy adjustment',
    ],
    pregnancyLactation:
      'Limited specific data on topical/compounded ophthalmic use; given minimal systemic absorption, generally considered lower risk than systemic administration, but should be used only when clearly indicated per prescriber judgment.',
    monitoring: [
      'Serial slit lamp exams for infiltrate/ulcer response and corneal epithelial integrity',
      'Corneal culture and susceptibility results to confirm yeast organism',
      'Consider escalation to intracameral/intravitreal therapy or surgery if inadequate response, especially with deep or endophthalmitis involvement',
    ],
    clinicalPearls: [
      'Preferred choice among polyenes for yeast (Candida) keratitis, complementing natamycin, which is comparatively better for filamentous fungal keratitis',
      'More locally irritating/toxic to the corneal epithelium than natamycin, limiting duration and frequency of topical use',
      'Requires compounding for ophthalmic use since there is no commercially available FDA-approved ophthalmic amphotericin B product',
    ],
    highYield: [
      'Preferred polyene for yeast (Candida) keratitis, complementing natamycin (better for filamentous fungi like Fusarium)',
      'Polyene mechanism - binds ergosterol, forms membrane pores, fungicidal',
      'More corneal epithelial toxicity/irritation than natamycin - limits frequency/duration of use',
      'Not FDA-approved for ophthalmic use - requires compounding pharmacy preparation',
    ],
    references: [
      {
        label: 'Fungal keratitis and endophthalmitis management',
        source: 'AAO Preferred Practice Pattern',
      },
      {
        label: 'Compounded ophthalmic antifungal pharmacology',
        source: "Bartlett & Jaanus: Clinical Ocular Pharmacology",
      },
    ],
  },
]
