import type { PrescriptionCase } from '../../types/prescription'

export const prescriptionCases: PrescriptionCase[] = [
  // ---------------- EASY ----------------
  {
    id: 'rx-easy-bacterial-conjunctivitis',
    difficulty: 'Easy',
    scenario:
      'A 24-year-old patient presents with a 3-day history of unilateral red eye with mucopurulent discharge and mild foreign body sensation. No contact lens wear. No medication allergies and no significant medical history. Exam is consistent with bacterial conjunctivitis.',
    patientContext: { age: 24, sex: 'Female', allergies: [], medicalHistory: [] },
    correctDrugOptions: ['moxifloxacin', 'ciprofloxacin', 'ofloxacin', 'polymyxin-b-trimethoprim'],
    correctAnswer: {
      drugId: 'moxifloxacin',
      concentration: '0.5%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Three times daily',
      duration: '7 days',
      quantity: '1 bottle (3-5mL)',
      refills: '0',
      specialInstructions: 'Discontinue if no improvement in 2-3 days; discard any remaining lens wear until resolved.',
    },
    reasoning:
      'Uncomplicated bacterial conjunctivitis in a healthy adult is appropriately treated with a broad-spectrum topical antibiotic such as a fluoroquinolone (moxifloxacin) or polymyxin B/trimethoprim. A short course (5-7 days) with no refill is standard, as this is a self-limited condition once treated.',
    distractorDrugIds: ['prednisolone-acetate', 'olopatadine', 'trifluridine'],
  },
  {
    id: 'rx-easy-allergic-conjunctivitis',
    difficulty: 'Easy',
    scenario:
      'A 19-year-old presents in the spring with bilateral itchy, watery eyes and mild conjunctival injection. Symptoms recur every year during allergy season. No pain, photophobia, or discharge.',
    patientContext: { age: 19, sex: 'Male', allergies: [], medicalHistory: ['Seasonal allergic rhinitis'] },
    correctDrugOptions: ['olopatadine', 'ketotifen', 'azelastine-ophthalmic'],
    correctAnswer: {
      drugId: 'olopatadine',
      concentration: '0.2%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Once daily',
      duration: 'As needed through allergy season',
      quantity: '1 bottle (2.5mL)',
      refills: '2',
      specialInstructions: 'Use during allergy season; may combine with cool compresses.',
    },
    reasoning:
      'A dual-acting antihistamine/mast cell stabilizer such as olopatadine is first-line for allergic conjunctivitis, addressing both acute itching (antihistamine effect) and preventing further mast cell degranulation. Refills are appropriate given the seasonal, recurring nature of the complaint.',
    distractorDrugIds: ['moxifloxacin', 'prednisolone-acetate', 'tobramycin'],
  },
  {
    id: 'rx-easy-dry-eye',
    difficulty: 'Easy',
    scenario:
      'A 45-year-old presents with mild burning, foreign body sensation, and fluctuating vision, worse by the end of the day and with prolonged screen use. TBUT is reduced. No significant staining.',
    patientContext: { age: 45, sex: 'Female', allergies: [], medicalHistory: [] },
    correctDrugOptions: ['carboxymethylcellulose-sodium', 'hyaluronic-acid-ophthalmic'],
    correctAnswer: {
      drugId: 'carboxymethylcellulose-sodium',
      concentration: '0.5-1%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Four times daily as needed',
      duration: 'Ongoing / long-term use',
      quantity: '1 bottle or box of preservative-free vials',
      refills: '3',
      specialInstructions: 'Prefer preservative-free formulation if using more than 4 times daily.',
    },
    reasoning:
      'Mild dry eye disease without significant ocular surface staining is appropriately managed first-line with artificial tears and environmental modification, reserving anti-inflammatory prescription therapy for cases with objective inflammation or an inadequate response to tears alone.',
    distractorDrugIds: ['cyclosporine-ophthalmic-emulsion', 'olopatadine'],
  },

  // ---------------- MEDIUM ----------------
  {
    id: 'rx-medium-anterior-uveitis',
    difficulty: 'Medium',
    scenario:
      'A 29-year-old presents with unilateral eye pain, photophobia, and blurred vision for 2 days. Slit lamp exam reveals anterior chamber cells and flare, circumlimbal (ciliary) flush, and no hypopyon. No prior ocular history.',
    patientContext: { age: 29, sex: 'Male', allergies: [], medicalHistory: [] },
    correctDrugOptions: ['prednisolone-acetate', 'difluprednate'],
    correctAnswer: {
      drugId: 'prednisolone-acetate',
      concentration: '1%',
      dosageForm: 'Suspension',
      route: 'Topical ophthalmic',
      frequency: 'Every 1-2 hours initially, tapering as inflammation improves',
      duration: 'Taper over several weeks per response',
      quantity: '1 bottle (10-15mL)',
      refills: '1',
      specialInstructions: 'Add a cycloplegic agent (e.g., cyclopentolate) for comfort and to prevent posterior synechiae. Do not stop abruptly.',
    },
    reasoning:
      'Acute anterior uveitis without infectious etiology is treated with a potent topical corticosteroid (prednisolone acetate 1% is the classic first-line agent) dosed frequently at onset and tapered slowly to prevent rebound inflammation, combined with cycloplegia for comfort and synechiae prevention.',
    distractorDrugIds: ['moxifloxacin', 'loteprednol-etabonate', 'ketorolac'],
  },
  {
    id: 'rx-medium-poag-initiation',
    difficulty: 'Medium',
    scenario:
      'A 58-year-old is newly diagnosed with primary open-angle glaucoma, IOP 26 mmHg OU, early glaucomatous cupping, no significant past medical history and no known drug allergies.',
    patientContext: { age: 58, sex: 'Female', allergies: [], medicalHistory: [] },
    correctDrugOptions: ['latanoprost', 'travoprost', 'bimatoprost', 'tafluprost'],
    correctAnswer: {
      drugId: 'latanoprost',
      concentration: '0.005%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Once daily at bedtime',
      duration: 'Ongoing',
      quantity: '1 bottle (2.5mL)',
      refills: '3',
      specialInstructions: 'Counsel on potential iris/eyelash pigmentation changes and eyelash growth.',
    },
    reasoning:
      'Prostaglandin analogs are first-line therapy for POAG due to their strong IOP-lowering efficacy, once-daily dosing, favorable systemic side effect profile, and low cost, making them the preferred initial agent in a patient without contraindications.',
    distractorDrugIds: ['timolol', 'pilocarpine', 'brimonidine'],
  },
  {
    id: 'rx-medium-hsv-epithelial-keratitis',
    difficulty: 'Medium',
    scenario:
      'A 33-year-old presents with foreign body sensation, mild redness, and a branching epithelial lesion with terminal bulbs staining with fluorescein. Corneal sensation is reduced. No prior history of cold sores noted by the patient.',
    patientContext: { age: 33, sex: 'Male', allergies: [], medicalHistory: [] },
    correctDrugOptions: ['trifluridine', 'ganciclovir-gel', 'acyclovir-oral', 'valacyclovir-oral'],
    correctAnswer: {
      drugId: 'trifluridine',
      concentration: '1%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Nine times daily',
      duration: '10-14 days, tapering as epithelium heals',
      quantity: '1 bottle (7.5mL)',
      refills: '0',
      specialInstructions: 'Do not prescribe a topical corticosteroid for active epithelial disease.',
    },
    reasoning:
      'Dendritic epithelial lesions with terminal bulbs and reduced corneal sensation are classic for HSV epithelial keratitis. First-line treatment is a topical or oral antiviral; topical steroids are contraindicated in active epithelial disease as they can worsen viral replication.',
    distractorDrugIds: ['prednisolone-acetate', 'moxifloxacin', 'ketorolac'],
  },

  // ---------------- HARD ----------------
  {
    id: 'rx-hard-poag-with-asthma',
    difficulty: 'Hard',
    scenario:
      'A 64-year-old with primary open-angle glaucoma and a history of moderate persistent asthma requires IOP-lowering therapy. IOP is 28 mmHg OU. No known drug allergies.',
    patientContext: {
      age: 64,
      sex: 'Male',
      allergies: [],
      medicalHistory: ['Asthma'],
      complicatingFactors: ['Beta-blockers are contraindicated due to bronchospasm risk'],
    },
    correctDrugOptions: ['latanoprost', 'travoprost', 'bimatoprost', 'tafluprost', 'netarsudil', 'brimonidine'],
    correctAnswer: {
      drugId: 'latanoprost',
      concentration: '0.005%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Once daily at bedtime',
      duration: 'Ongoing',
      quantity: '1 bottle (2.5mL)',
      refills: '3',
      specialInstructions: 'Avoid non-selective beta blockers (e.g., timolol) given this patient\'s asthma history.',
    },
    reasoning:
      'Non-selective topical beta blockers (timolol) are contraindicated in patients with asthma or COPD due to the risk of systemic beta-2 blockade causing bronchospasm. A prostaglandin analog such as latanoprost avoids this risk while providing strong first-line IOP-lowering efficacy.',
    distractorDrugIds: ['timolol', 'betaxolol'],
  },
  {
    id: 'rx-hard-contact-lens-keratitis',
    difficulty: 'Hard',
    scenario:
      'A 22-year-old extended-wear contact lens user presents with a painful red eye, a 2mm central corneal infiltrate with an overlying epithelial defect, and mild anterior chamber reaction. Pseudomonas is a key concern given the contact lens history.',
    patientContext: { age: 22, sex: 'Female', allergies: [], medicalHistory: ['Contact lens wearer, extended wear'] },
    correctDrugOptions: ['moxifloxacin', 'ciprofloxacin', 'ofloxacin'],
    correctAnswer: {
      drugId: 'moxifloxacin',
      concentration: '0.5%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Every 1-2 hours while awake initially, tapering with improvement',
      duration: '1-2 weeks depending on response',
      quantity: '1 bottle (3-5mL)',
      refills: '0',
      specialInstructions: 'Discontinue contact lens wear immediately; do not patch the eye. Culture if central, large, or non-responsive.',
    },
    reasoning:
      'Contact lens-related corneal ulcers carry a significant risk of Pseudomonas aeruginosa, which requires an antibiotic with strong gram-negative coverage such as a fluoroquinolone. Patching is contraindicated as it can promote bacterial proliferation, and contact lens wear must stop immediately.',
    distractorDrugIds: ['erythromycin-ophthalmic', 'polymyxin-b-trimethoprim', 'prednisolone-acetate'],
  },
  {
    id: 'rx-hard-viral-conjunctivitis-antibiotic-request',
    difficulty: 'Hard',
    scenario:
      'A 27-year-old presents with bilateral watery discharge, redness, and preauricular lymphadenopathy that started in one eye and spread to the other over 3 days. There is a recent history of an upper respiratory infection. The patient requests antibiotic drops.',
    patientContext: { age: 27, sex: 'Female', allergies: [], medicalHistory: ['Recent upper respiratory infection'] },
    correctDrugOptions: ['carboxymethylcellulose-sodium', 'hyaluronic-acid-ophthalmic'],
    correctAnswer: {
      drugId: 'carboxymethylcellulose-sodium',
      concentration: '0.5-1%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Four times daily as needed for comfort',
      duration: '1-2 weeks while symptomatic',
      quantity: '1 bottle',
      refills: '1',
      specialInstructions: 'Counsel on contagion precautions (hand hygiene, avoid towel-sharing), cold compresses for comfort; no antibiotic indicated for presumed viral etiology.',
    },
    reasoning:
      'This presentation (watery discharge, preauricular adenopathy, recent URI, spread from one eye to the other) is classic for viral (adenoviral) conjunctivitis, which is self-limited and does not benefit from antibiotics. Appropriate management is supportive care and patient education, not antibiotic therapy despite the request.',
    distractorDrugIds: ['moxifloxacin', 'tobramycin', 'polymyxin-b-trimethoprim'],
  },

  // ---------------- EXPERT ----------------
  {
    id: 'rx-expert-uncontrolled-poag-multiple-factors',
    difficulty: 'Expert',
    scenario:
      'A 68-year-old with primary open-angle glaucoma on latanoprost monotherapy returns with IOP still elevated at 24 mmHg OU (target <18 mmHg). Medical history includes asthma and a documented sulfonamide allergy. An additional agent is needed.',
    patientContext: {
      age: 68,
      sex: 'Female',
      allergies: ['Sulfonamides'],
      medicalHistory: ['Asthma', 'Primary open-angle glaucoma, uncontrolled on prostaglandin monotherapy'],
      complicatingFactors: [
        'Beta blockers contraindicated (asthma)',
        'Carbonic anhydrase inhibitors relatively contraindicated (sulfa allergy cross-reactivity concern)',
      ],
    },
    correctDrugOptions: ['brimonidine', 'netarsudil'],
    correctAnswer: {
      drugId: 'brimonidine',
      concentration: '0.15% or 0.2%',
      dosageForm: 'Solution',
      route: 'Topical ophthalmic',
      frequency: 'Three times daily',
      duration: 'Ongoing, added to existing latanoprost',
      quantity: '1 bottle (5-10mL)',
      refills: '3',
      specialInstructions: 'Continue latanoprost; monitor for allergic follicular conjunctivitis with brimonidine over time.',
    },
    reasoning:
      'With beta blockers contraindicated by asthma and carbonic anhydrase inhibitors relatively avoided due to sulfonamide allergy, an alpha-2 agonist (brimonidine) or rho kinase inhibitor (netarsudil) is the most appropriate add-on to prostaglandin therapy, as neither carries these specific contraindications.',
    distractorDrugIds: ['timolol', 'dorzolamide', 'brinzolamide', 'acetazolamide'],
  },
  {
    id: 'rx-expert-recurrent-hsv-stromal',
    difficulty: 'Expert',
    scenario:
      'A 41-year-old with a history of three prior episodes of HSV stromal keratitis presents with a new dendritic epithelial lesion while off prophylaxis. Corneal sensation is reduced. There is mild stromal haze from prior episodes but no active stromal inflammation currently.',
    patientContext: {
      age: 41,
      sex: 'Male',
      allergies: [],
      medicalHistory: ['Recurrent HSV stromal keratitis, 3 prior episodes'],
      complicatingFactors: ['Active epithelial disease present — topical steroid contraindicated until epithelium heals'],
    },
    correctDrugOptions: ['trifluridine', 'ganciclovir-gel'],
    correctAnswer: {
      drugId: 'ganciclovir-gel',
      concentration: '0.15%',
      dosageForm: 'Gel',
      route: 'Topical ophthalmic',
      frequency: 'Five times daily until healed, then three times daily for 7 more days',
      duration: 'Until re-epithelialization, then taper',
      quantity: '1 tube (5g)',
      refills: '0',
      specialInstructions: 'Avoid topical steroid until epithelium fully heals. Plan to resume long-term oral antiviral prophylaxis given recurrence history, per HEDS trial data.',
    },
    reasoning:
      'Active epithelial HSV disease requires topical (or oral) antiviral therapy alone; ganciclovir gel is better tolerated with less epithelial toxicity than trifluridine for patients needing more prolonged use. Given this patient\'s recurrent stromal disease, long-term oral antiviral prophylaxis should be resumed once the acute episode resolves, per the Herpetic Eye Disease Study.',
    distractorDrugIds: ['prednisolone-acetate', 'loteprednol-etabonate', 'moxifloxacin'],
  },
]
