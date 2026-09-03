import type { Drug } from '../../types/drug'

export const antiVegfAndGlaucomaAdditional: Drug[] = [
  // ===== ANTI-VEGF / RETINA AGENTS =====
  {
    id: 'bevacizumab',
    genericName: 'Bevacizumab',
    brandNames: ['Avastin'],
    drugClass: 'Anti-VEGF / Retina',
    mechanismOfAction:
      'Full-length humanized recombinant monoclonal antibody (IgG1, ~149 kDa) that binds and neutralizes all biologically active isoforms of vascular endothelial growth factor-A (VEGF-A), preventing VEGF-A from binding its receptors (VEGFR-1/VEGFR-2) on vascular endothelial cells. This blocks angiogenesis and reduces vascular permeability, the two processes that drive choroidal neovascularization and macular edema. Originally developed and FDA-approved as a systemic IV oncology agent (metastatic colorectal cancer and others); intravitreal ophthalmic use is entirely off-label, with the drug compounded/repackaged into single-use aliquots by compounding pharmacies for intravitreal injection.',
    indications: [
      'Neovascular (wet) age-related macular degeneration (off-label)',
      'Diabetic macular edema (off-label)',
      'Macular edema secondary to retinal vein occlusion (branch or central, off-label)',
      'Proliferative diabetic retinopathy / diabetic vitreous hemorrhage (off-label)',
      'Neovascular glaucoma (off-label, adjunctive)',
      'Metastatic colorectal cancer and other malignancies (on-label systemic oncology indication)',
    ],
    ocularUses: [
      'Off-label intravitreal injection for neovascular AMD, DME, and RVO-associated macular edema',
      'Adjunctive treatment of neovascular glaucoma and proliferative diabetic retinopathy (panretinal photocoagulation adjunct)',
    ],
    typicalDosing: 'Intravitreal injection of 1.25 mg/0.05 mL every 4-6 weeks, individualized based on treat-and-extend, PRN, or fixed regimens; office-based sterile procedure',
    concentrations: ['1.25 mg/0.05 mL (intravitreal, compounded/repackaged from oncology vial)'],
    formulations: ['Injection'],
    route: 'Intravitreal injection',
    sideEffects: {
      ocular: [
        'Endophthalmitis (injection-related infection, incidence approximately 1 in 2000-3000 injections)',
        'Traumatic cataract from needle injury',
        'Retinal detachment/retinal tear',
        'Vitreous hemorrhage',
        'Transient IOP elevation immediately post-injection (from injected volume)',
        'Sustained/chronic IOP elevation with long-term repeated dosing (a recognized, board-tested phenomenon distinct from the transient spike)',
        'Retinal pigment epithelial (RPE) tear, particularly in eyes with a pigment epithelial detachment (PED)',
        'Subconjunctival hemorrhage at injection site',
        'Uveitis/intraocular inflammation (including sterile inflammation from compounding-related contamination in rare cluster events)',
      ],
      systemic: [
        'Arterial thromboembolic events (stroke, myocardial infarction) - class warning for anti-angiogenic agents, theoretically higher risk with bevacizumab given greater systemic VEGF suppression',
        'Hypertension',
        'Proteinuria (systemic VEGF suppression affecting renal glomerular endothelium)',
        'Impaired/delayed wound healing (systemic VEGF suppression)',
        'Gastrointestinal perforation (rare, primarily reported with systemic oncologic dosing, not typical of intravitreal doses)',
      ],
    },
    contraindications: [
      'Active or suspected ocular or periocular infection',
      'Active severe intraocular inflammation',
      'Known hypersensitivity to bevacizumab or its components',
    ],
    precautions: [
      'Compounded/repackaged product carries risk of contamination or dosing error not present with commercially manufactured single-use prefilled syringes (source of rare cluster endophthalmitis/sterile inflammation outbreaks)',
      'Use strict aseptic technique for intravitreal injection (povidone-iodine, sterile drape, lid speculum)',
      'Monitor IOP immediately post-injection, particularly in patients with pre-existing glaucoma',
      'Caution in patients with recent history of stroke or myocardial infarction given class-wide arterial thromboembolic risk',
      'Discontinue and evaluate for RPE tear in eyes with large/vascularized PED before initiating therapy',
    ],
    drugInteractions: [
      'No clinically significant topical/systemic ocular drug interactions identified; theoretical additive systemic anti-angiogenic effect if patient is concurrently receiving systemic anti-VEGF/antiangiogenic chemotherapy',
    ],
    patientCounseling: [
      'Report immediately any eye pain, increasing redness, light sensitivity, or decreased vision after injection - possible signs of endophthalmitis',
      'Some floaters, mild redness, and irritation are expected and typically resolve within days',
      'This is an off-label use of a cancer medication repackaged for eye injection - discuss the off-label nature, cost advantage, and non-inferiority evidence (CATT trial) with your provider',
      'Report new flashes, floaters, or a curtain/shadow in vision (retinal detachment warning signs)',
    ],
    pregnancyLactation:
      'Contraindicated/avoid in pregnancy - bevacizumab causes fetal harm (embryo-fetal toxicity, including malformations) in animal studies given its anti-angiogenic mechanism; effective contraception recommended during and for months after treatment. Unknown excretion in breast milk; not recommended during breastfeeding.',
    monitoring: ['IOP pre- and post-injection, especially with chronic repeated dosing', 'Signs/symptoms of endophthalmitis at each visit', 'OCT and clinical exam for treatment response and RPE tear', 'Blood pressure', 'Cardiovascular/thromboembolic history at baseline and during treatment'],
    clinicalPearls: [
      'The CATT trial (Comparison of AMD Treatments Trials) demonstrated non-inferiority of bevacizumab to ranibizumab for neovascular AMD, supporting its widespread off-label use given substantially lower cost',
      'Because it is a full-length antibody (~149 kDa) rather than an antibody fragment, bevacizumab has a longer systemic half-life and theoretically greater systemic VEGF suppression than ranibizumab, though large clinical trials have not shown a clinically significant difference in systemic adverse event rates',
      'Must be compounded/repackaged by a compounding pharmacy into single-dose ophthalmic syringes since it is not commercially manufactured for intravitreal use - a source of rare but serious contamination outbreaks (cluster endophthalmitis/sterile inflammation events reported in the literature)',
      'Despite being off-label for ophthalmic use, it remains the most commonly injected anti-VEGF agent worldwide due to cost',
    ],
    highYield: [
      'Off-label use - originally an oncology drug (colorectal cancer), NOT FDA-approved for intravitreal ophthalmic use, unlike ranibizumab/aflibercept/faricimab which ARE FDA-approved for eye disease',
      'Full-length antibody (largest of the anti-VEGF molecules, ~149 kDa) - theoretically higher systemic VEGF suppression/longer half-life than the Fab fragment ranibizumab',
      'CATT trial showed non-inferiority to ranibizumab for wet AMD - the key evidence-based justification for its widespread off-label use',
      'Compounding/repackaging risk is a distinguishing safety issue versus commercially prefilled competitor products - source of rare contamination-related endophthalmitis clusters',
      'Shares the anti-VEGF class-wide risks: endophthalmitis (~1/2000-1/3000), arterial thromboembolic events, transient and sustained IOP elevation, RPE tear in PED eyes',
    ],
    references: [
      { label: 'CATT Research Group: Ranibizumab and Bevacizumab for Neovascular Age-Related Macular Degeneration', source: 'New England Journal of Medicine' },
      { label: 'Anti-VEGF pharmacology and intravitreal injection safety', source: 'Retina, The Essentials (Regillo)' },
    ],
  },
  {
    id: 'ranibizumab',
    genericName: 'Ranibizumab',
    brandNames: ['Lucentis'],
    drugClass: 'Anti-VEGF / Retina',
    mechanismOfAction:
      'Recombinant humanized monoclonal antibody FRAGMENT (Fab fragment only, ~48 kDa, lacking the Fc region) engineered specifically for intraocular use, derived from the same parent antibody as bevacizumab. Binds and neutralizes all active isoforms of VEGF-A, preventing VEGF-A from binding VEGFR-1/VEGFR-2 on vascular endothelium, thereby inhibiting angiogenesis and reducing vascular permeability. Its small molecular size (about one-third that of bevacizumab) allows better retinal penetration and theoretically faster systemic clearance with lower systemic VEGF suppression, since it lacks the Fc region responsible for neonatal Fc receptor-mediated recycling that prolongs the half-life of full antibodies.',
    indications: [
      'Neovascular (wet) age-related macular degeneration',
      'Diabetic macular edema',
      'Diabetic retinopathy (in patients with DME)',
      'Macular edema following retinal vein occlusion (branch or central)',
      'Myopic choroidal neovascularization',
      'Retinopathy of prematurity (ROP)',
    ],
    ocularUses: [
      'On-label first-line anti-VEGF therapy for wet AMD, DME, RVO-associated macular edema, myopic CNV, and ROP',
    ],
    typicalDosing: 'Intravitreal injection of 0.5 mg (0.05 mL) monthly, may extend to treat-and-extend or quarterly dosing after initial loading phase in AMD/DME/RVO; 0.25 mg (0.025 mL) for ROP',
    concentrations: ['0.5 mg/0.05 mL', '0.3 mg/0.05 mL', '0.25 mg/0.025 mL (ROP dosing)'],
    route: 'Intravitreal injection',
    sideEffects: {
      ocular: [
        'Endophthalmitis (injection-related, approximately 1 in 2000-3000 injections)',
        'Traumatic cataract',
        'Retinal detachment/retinal tear',
        'Vitreous hemorrhage',
        'Transient IOP elevation immediately post-injection',
        'Sustained IOP elevation/need for glaucoma therapy with chronic repeated dosing',
        'RPE tear, particularly in eyes with pigment epithelial detachment',
        'Intraocular inflammation/uveitis',
      ],
      systemic: [
        'Arterial thromboembolic events (stroke, MI) - class warning, theoretically lower risk than bevacizumab given smaller molecule and faster systemic clearance',
        'Hypertension',
        'Rare systemic VEGF suppression effects (proteinuria, impaired wound healing)',
        'Non-ocular hemorrhage (rare)',
      ],
    },
    contraindications: [
      'Active or suspected ocular/periocular infection',
      'Active severe intraocular inflammation',
      'Known hypersensitivity to ranibizumab or its components',
    ],
    precautions: [
      'Use strict aseptic technique for intravitreal injection',
      'Monitor IOP immediately after injection and with chronic dosing',
      'Caution in patients with recent stroke or MI history given class-wide thromboembolic risk',
      'Evaluate PED eyes carefully before treatment given RPE tear risk',
    ],
    drugInteractions: [
      'No clinically significant drug interactions identified with topical or systemic ocular medications',
    ],
    patientCounseling: [
      'Report eye pain, worsening redness, light sensitivity, or vision loss immediately after injection (possible endophthalmitis)',
      'Mild floaters, redness, and irritation are expected after injection and typically resolve within days',
      'Report new flashes, floaters, or a curtain/shadow in vision (retinal detachment warning signs)',
    ],
    pregnancyLactation:
      'Avoid in pregnancy - anti-angiogenic mechanism poses theoretical risk of embryo-fetal harm; effective contraception recommended during treatment. Unknown excretion in breast milk; use caution/avoid during breastfeeding.',
    monitoring: ['IOP pre- and post-injection', 'Signs/symptoms of endophthalmitis at follow-up visits', 'OCT and visual acuity for treatment response', 'Blood pressure and cardiovascular status'],
    clinicalPearls: [
      'FDA-approved specifically for ophthalmic intravitreal use (unlike bevacizumab), derived from the same parent murine antibody as bevacizumab but engineered as a smaller Fab fragment for improved retinal tissue penetration',
      'The MARINA and ANCHOR trials established ranibizumab efficacy for wet AMD; the CATT trial later showed non-inferiority of bevacizumab to ranibizumab',
      'Historically significantly more expensive than bevacizumab despite comparable efficacy - a major driver of continued off-label bevacizumab use',
      'Also FDA-approved for retinopathy of prematurity (ROP), a distinguishing pediatric indication among the anti-VEGF agents',
    ],
    highYield: [
      'Antibody FRAGMENT (Fab only, ~48 kDa) - smaller than full-length bevacizumab (~149 kDa), the single most tested molecular distinguishing fact between these two drugs',
      'FDA-approved (on-label) for ophthalmic use, unlike bevacizumab which is off-label - key regulatory distinction',
      'Smaller size theoretically allows faster systemic clearance and lower systemic VEGF suppression compared to bevacizumab, though clinical trials show similar overall systemic safety',
      'One of the few anti-VEGF agents with an FDA-approved indication for retinopathy of prematurity (ROP)',
      'Shares class-wide risks: endophthalmitis, IOP elevation (transient and sustained with chronic use), arterial thromboembolic events, RPE tear in PED eyes',
    ],
    references: [
      { label: 'Rosenfeld et al., Ranibizumab for Neovascular Age-Related Macular Degeneration (MARINA trial)', source: 'New England Journal of Medicine' },
      { label: 'Anti-VEGF agent comparative pharmacology', source: 'Retina, The Essentials (Regillo)' },
    ],
  },
  {
    id: 'aflibercept',
    genericName: 'Aflibercept',
    brandNames: ['Eylea', 'Eylea HD'],
    drugClass: 'Anti-VEGF / Retina',
    mechanismOfAction:
      'Recombinant fusion protein ("VEGF-Trap") combining VEGF-binding domains from human VEGF receptors 1 and 2 fused to the Fc portion of human IgG1. Acts as a soluble decoy receptor that binds and neutralizes VEGF-A, VEGF-B, and placental growth factor (PlGF) - a broader spectrum of angiogenic ligands than the antibody-based agents (bevacizumab/ranibizumab), which target VEGF-A only. Has a substantially higher binding affinity for VEGF-A than the endogenous receptors themselves, producing a more prolonged intraocular pharmacodynamic effect and permitting longer dosing intervals.',
    indications: [
      'Neovascular (wet) age-related macular degeneration',
      'Diabetic macular edema',
      'Diabetic retinopathy (in patients with or without DME)',
      'Macular edema following retinal vein occlusion (branch or central)',
      'Retinopathy of prematurity (ROP)',
    ],
    ocularUses: [
      'On-label anti-VEGF therapy for wet AMD, DME, diabetic retinopathy, RVO-associated macular edema, and ROP; frequently chosen for extended dosing intervals',
    ],
    typicalDosing:
      'Eylea: intravitreal injection of 2 mg (0.05 mL) every 4 weeks for the first 3-5 doses, then every 8-16 weeks depending on indication/response; Eylea HD: 8 mg (0.07 mL) allowing extended dosing up to every 16 weeks after loading doses',
    concentrations: ['2 mg/0.05 mL (Eylea)', '8 mg/0.07 mL (Eylea HD)'],
    route: 'Intravitreal injection',
    sideEffects: {
      ocular: [
        'Endophthalmitis (injection-related, approximately 1 in 2000-3000 injections)',
        'Traumatic cataract',
        'Retinal detachment/retinal tear',
        'Vitreous hemorrhage',
        'Transient IOP elevation immediately post-injection',
        'Sustained IOP elevation with chronic repeated dosing',
        'RPE tear, particularly in eyes with pigment epithelial detachment',
        'Intraocular inflammation, including rare occlusive retinal vasculitis reported with the class',
      ],
      systemic: [
        'Arterial thromboembolic events (stroke, MI) - class warning',
        'Hypertension',
        'Rare systemic VEGF suppression effects (proteinuria, impaired wound healing)',
      ],
    },
    contraindications: [
      'Active or suspected ocular/periocular infection',
      'Active severe intraocular inflammation',
      'Known hypersensitivity to aflibercept or its components',
    ],
    precautions: [
      'Strict aseptic injection technique required',
      'Monitor IOP post-injection, particularly with chronic dosing and in glaucoma patients',
      'Caution in patients with recent stroke/MI history',
      'Evaluate PED eyes for RPE tear risk before initiating treatment',
    ],
    drugInteractions: [
      'No clinically significant drug interactions identified with topical or systemic ocular medications',
    ],
    patientCounseling: [
      'Report eye pain, worsening redness, light sensitivity, or vision loss immediately after injection',
      'Extended dosing intervals (up to every 12-16 weeks with some regimens) may reduce injection burden compared to other agents - discuss the treat-and-extend schedule with your provider',
      'Report new flashes, floaters, or a curtain/shadow in vision',
    ],
    pregnancyLactation:
      'Avoid in pregnancy - anti-angiogenic mechanism poses theoretical embryo-fetal risk; effective contraception recommended during and for a period after treatment. Unknown excretion in breast milk; use caution during breastfeeding.',
    monitoring: ['IOP pre- and post-injection', 'Signs/symptoms of endophthalmitis', 'OCT and visual acuity for treatment response', 'Blood pressure and cardiovascular status'],
    clinicalPearls: [
      'Binds VEGF-A with higher affinity than the native VEGF receptors themselves, which along with its dual-domain "trap" design contributes to its longer duration of action and ability to support extended treatment intervals',
      'The VIEW 1/VIEW 2 trials established non-inferiority of aflibercept (dosed every 8 weeks after loading) to monthly ranibizumab for wet AMD',
      'Eylea HD (8 mg) was developed specifically to extend dosing intervals further (up to every 16 weeks) by increasing the intravitreal drug depot/duration of action',
      'Broader ligand-binding profile (VEGF-A, VEGF-B, PlGF) distinguishes it mechanistically from the antibody-based agents that target VEGF-A exclusively',
    ],
    highYield: [
      'Mechanism is a FUSION/"TRAP" PROTEIN (VEGFR1/VEGFR2 extracellular domains + IgG Fc), not an antibody - key structural distinction from bevacizumab/ranibizumab',
      'Binds VEGF-A, VEGF-B, AND placental growth factor (PlGF) - broader VEGF-family blockade than antibody-based agents, which bind VEGF-A only',
      'Higher binding affinity for VEGF-A than the endogenous receptors, translating to longer duration of action and support for extended (up to every 8-16 week) dosing intervals',
      'FDA-approved for ROP alongside ranibizumab, expanding pediatric anti-VEGF indications',
      'Eylea HD (8 mg) is a newer, higher-dose formulation designed for even longer (up to 16-week) treatment intervals - a high-yield emerging fact',
    ],
    references: [
      { label: 'Heier et al., Intravitreal Aflibercept for Neovascular Age-Related Macular Degeneration (VIEW 1 and VIEW 2)', source: 'Ophthalmology' },
      { label: 'Anti-VEGF agent comparative pharmacology', source: 'Retina, The Essentials (Regillo)' },
    ],
  },
  {
    id: 'faricimab',
    genericName: 'Faricimab',
    brandNames: ['Vabysmo'],
    drugClass: 'Anti-VEGF / Retina',
    mechanismOfAction:
      'First-in-class bispecific monoclonal antibody engineered to simultaneously bind and neutralize two distinct angiogenic pathways: VEGF-A and Angiopoietin-2 (Ang-2). VEGF-A blockade inhibits neovascularization and reduces vascular permeability as with other anti-VEGF agents. Ang-2 blockade independently stabilizes blood vessels by promoting Tie2 receptor signaling (Ang-2 normally destabilizes vasculature by antagonizing Tie2), reducing vascular leakage, inflammation, and neovascularization through a complementary mechanism. This dual VEGF-A/Ang-2 blockade targets both the angiogenic and vascular-destabilization arms of neovascular retinal disease within a single molecule.',
    indications: [
      'Neovascular (wet) age-related macular degeneration',
      'Diabetic macular edema',
      'Macular edema following retinal vein occlusion (branch or central)',
    ],
    ocularUses: [
      'On-label anti-VEGF/anti-Ang-2 therapy for wet AMD, DME, and RVO-associated macular edema, particularly valued for extended treatment intervals',
    ],
    typicalDosing:
      'Intravitreal injection of 6 mg (0.05 mL) every 4 weeks for the first 4 doses (AMD/DME), then individualized treat-and-extend regimen extending up to every 16 weeks based on anatomic and visual response',
    concentrations: ['6 mg/0.05 mL'],
    route: 'Intravitreal injection',
    sideEffects: {
      ocular: [
        'Endophthalmitis (injection-related, approximately 1 in 2000-3000 injections)',
        'Traumatic cataract',
        'Retinal detachment/retinal tear',
        'Vitreous hemorrhage',
        'Transient IOP elevation immediately post-injection',
        'Sustained IOP elevation with chronic repeated dosing',
        'RPE tear, particularly in eyes with pigment epithelial detachment',
        'Intraocular inflammation, including rare reports of retinal vasculitis/occlusive retinitis',
      ],
      systemic: [
        'Arterial thromboembolic events (stroke, MI) - class warning',
        'Hypertension',
        'Rare systemic VEGF suppression effects (proteinuria, impaired wound healing)',
      ],
    },
    contraindications: [
      'Active or suspected ocular/periocular infection',
      'Active severe intraocular inflammation',
      'Known hypersensitivity to faricimab or its components',
    ],
    precautions: [
      'Strict aseptic injection technique required',
      'Monitor IOP post-injection and with chronic dosing',
      'Caution in patients with recent stroke/MI history',
      'Evaluate PED eyes for RPE tear risk before treatment',
      'As the newest agent in the class, longer-term real-world safety data continue to accumulate relative to older agents',
    ],
    drugInteractions: [
      'No clinically significant drug interactions identified with topical or systemic ocular medications',
    ],
    patientCounseling: [
      'Report eye pain, worsening redness, light sensitivity, or vision loss immediately after injection',
      'This medication targets two different pathways involved in abnormal blood vessel growth and leakage, which may allow longer intervals between injections (up to every 4 months) compared to older medications',
      'Report new flashes, floaters, or a curtain/shadow in vision',
    ],
    pregnancyLactation:
      'Avoid in pregnancy - anti-angiogenic mechanism poses theoretical embryo-fetal risk; effective contraception recommended during and for a period after treatment. Unknown excretion in breast milk; use caution during breastfeeding.',
    monitoring: ['IOP pre- and post-injection', 'Signs/symptoms of endophthalmitis and intraocular inflammation', 'OCT and visual acuity for treatment response', 'Blood pressure and cardiovascular status'],
    clinicalPearls: [
      'First FDA-approved bispecific antibody in ophthalmology, approved in 2022, representing the newest mechanistic generation of anti-VEGF therapy',
      'The TENAYA/LUCERNE trials (wet AMD) and YOSEMITE/RHINE trials (DME) demonstrated that faricimab dosed at extended intervals (up to every 16 weeks) achieved vision outcomes comparable to monthly aflibercept',
      'Angiopoietin-Tie2 pathway blockade is a genuinely novel target in retinal pharmacology distinct from all prior anti-VEGF agents, which act on VEGF-A alone (or, for aflibercept, VEGF-A/B and PlGF)',
      'Longer durability may reduce treatment burden and improve real-world adherence, a major clinical advantage given that under-treatment is a leading cause of suboptimal outcomes with anti-VEGF therapy',
    ],
    highYield: [
      'FIRST bispecific antibody targeting BOTH VEGF-A and Angiopoietin-2 (Ang-2) - the single most tested distinguishing fact for faricimab',
      'Ang-2 blockade promotes Tie2-mediated vascular stabilization, a mechanism independent of and complementary to VEGF-A blockade',
      'Supports extended dosing intervals up to every 16 weeks (4 months), among the longest of any anti-VEGF agent - high-yield emerging/newest-generation topic',
      'Approved for wet AMD, DME, and RVO - same broad indication set as aflibercept/ranibizumab',
      'Shares class-wide injection risks: endophthalmitis, IOP elevation (transient and sustained), arterial thromboembolic events, RPE tear in PED eyes',
    ],
    references: [
      { label: 'Heier et al., Efficacy, durability, and safety of intravitreal faricimab for neovascular AMD (TENAYA and LUCERNE)', source: 'The Lancet' },
      { label: 'Wykoff et al., Faricimab in diabetic macular edema (YOSEMITE and RHINE)', source: 'The Lancet' },
    ],
  },

  // ===== ADDITIONAL GLAUCOMA MEDICATIONS =====
  {
    id: 'levobunolol',
    genericName: 'Levobunolol hydrochloride',
    brandNames: ['Betagan'],
    drugClass: 'Glaucoma medications',
    mechanismOfAction:
      'Non-selective beta-adrenergic receptor antagonist (blocks both beta-1 and beta-2 receptors) in the ciliary epithelium, mechanistically identical to timolol. Decreases aqueous humor production by blocking beta-2 receptor-mediated stimulation of adenylate cyclase in the nonpigmented ciliary epithelium, with no significant effect on outflow facility or pupil size.',
    indications: ['Open-angle glaucoma', 'Ocular hypertension'],
    ocularUses: ['First-line/adjunctive IOP-lowering therapy in open-angle glaucoma and ocular hypertension'],
    typicalDosing: 'One drop once or twice daily depending on concentration/formulation',
    concentrations: ['0.25%', '0.5%'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Ocular stinging/burning on instillation',
        'Punctate keratopathy',
        'Decreased corneal sensitivity',
        'Dry eye',
        'Blepharoconjunctivitis (rare)',
      ],
      systemic: [
        'Bradycardia and heart block (systemic beta-blockade)',
        'Bronchospasm/exacerbation of asthma and COPD (beta-2 blockade) - potentially life-threatening',
        'Hypotension',
        'CNS effects: fatigue, depression, confusion, decreased libido',
        'Masking of hypoglycemia symptoms in diabetic patients',
        'Exacerbation of myasthenia gravis symptoms',
      ],
    },
    contraindications: [
      'Bronchial asthma or history of bronchial asthma',
      'Severe chronic obstructive pulmonary disease (COPD)',
      'Sinus bradycardia',
      'Second- or third-degree atrioventricular (AV) block',
      'Overt cardiac failure/decompensated heart failure',
      'Cardiogenic shock',
    ],
    precautions: [
      'Use with caution in patients with diabetes mellitus (may mask signs of hypoglycemia)',
      'Use with caution in patients with myasthenia gravis',
      'Caution in patients with compromised cardiac function or on other systemic beta-blockers',
      'Nasolacrimal occlusion or eyelid closure for 1-2 minutes after instillation reduces systemic absorption',
    ],
    drugInteractions: [
      'Oral beta-blockers, calcium channel blockers (verapamil/diltiazem) - additive bradycardia, hypotension, AV conduction disturbances',
      'Oral clonidine - risk of rebound hypertension if clonidine is withdrawn while on beta-blocker',
      'Digoxin - additive effect on AV conduction time',
      'Insulin/oral hypoglycemics - can mask tachycardia as a sign of hypoglycemia',
    ],
    patientCounseling: [
      'Apply punctal occlusion or gentle eyelid closure for 1-2 minutes after instillation to minimize systemic absorption',
      'Report any shortness of breath, wheezing, dizziness, or unusually slow heart rate to prescriber',
      'Inform all healthcare providers, including anesthesiologists, that you use a topical beta-blocker',
      'Diabetic patients should be aware this medication may mask signs of low blood sugar',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy; systemic beta-blockade may affect fetus/neonate (e.g., bradycardia). Excreted in breast milk - caution advised, monitor nursing infant.',
    monitoring: ['IOP', 'Heart rate and blood pressure, especially at initiation', 'Pulmonary status (asthma/COPD symptoms)', 'Signs of systemic beta-blockade'],
    clinicalPearls: [
      'Clinically and pharmacologically essentially interchangeable with timolol - same non-selective beta-blockade mechanism, same efficacy range, same systemic risk profile',
      'The single most important safety teaching point shared with all topical beta blockers is systemic absorption via the nasolacrimal duct into highly vascular nasal mucosa, bypassing first-pass hepatic metabolism',
      'Now used less frequently than timolol in practice, but remains a classic board option among the non-selective beta blockers alongside timolol and carteolol',
    ],
    highYield: [
      'Levobunolol is a NON-SELECTIVE beta blocker (blocks beta-1 and beta-2), mechanistically and clinically equivalent to timolol - a common "match the drug to the mechanism" or "identify the non-beta-blocker" board distractor alongside timolol, betaxolol, and carteolol',
      'Same absolute contraindications as timolol: asthma, COPD, sinus bradycardia, AV heart block, decompensated heart failure',
      'Decreases aqueous humor PRODUCTION (does not affect outflow) via beta-2 receptor blockade in the ciliary epithelium',
      'Systemic absorption occurs via the nasolacrimal duct/nasal mucosa, bypassing first-pass hepatic metabolism, explaining systemic cardiopulmonary side effects from a topical drop',
      'Punctal occlusion/eyelid closure for 1-2 minutes after instillation reduces systemic absorption - a commonly tested counseling point shared across the beta-blocker class',
    ],
    references: [
      { label: 'Levobunolol and non-selective beta-blocker pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Beta-blocker safety in glaucoma management', source: 'AAO Preferred Practice Pattern for POAG' },
    ],
  },
  {
    id: 'carteolol',
    genericName: 'Carteolol hydrochloride',
    brandNames: ['Ocupress'],
    drugClass: 'Glaucoma medications',
    mechanismOfAction:
      'Non-selective beta-adrenergic receptor antagonist that decreases aqueous humor production via beta-2 receptor blockade in the ciliary epithelium, similar to timolol and levobunolol. Distinguished by possessing intrinsic sympathomimetic activity (ISA) - carteolol acts as a partial beta-agonist as well as an antagonist, providing a low level of baseline beta-receptor stimulation even while blocking full agonist (catecholamine) activity.',
    indications: ['Open-angle glaucoma', 'Ocular hypertension'],
    ocularUses: ['IOP-lowering therapy, particularly favored in patients with borderline cardiac or pulmonary status among the beta-blocker options'],
    typicalDosing: 'One drop twice daily',
    concentrations: ['1%'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Ocular stinging/burning on instillation',
        'Punctate keratopathy',
        'Dry eye',
        'Blurred vision transiently after instillation',
      ],
      systemic: [
        'Bradycardia (theoretically less pronounced than pure/non-ISA beta blockers due to intrinsic sympathomimetic activity)',
        'Bronchospasm/exacerbation of asthma and COPD - still occurs, caution remains warranted despite ISA',
        'Less reduction in HDL cholesterol compared to non-ISA beta blockers (theoretical lipid-neutral advantage)',
        'Less effect on resting heart rate and exercise tolerance compared to pure beta blockers',
        'Masking of hypoglycemia symptoms in diabetics',
        'CNS effects: fatigue, depression (less common than with non-ISA agents)',
      ],
    },
    contraindications: [
      'Bronchial asthma or history of bronchial asthma',
      'Severe chronic obstructive pulmonary disease (COPD)',
      'Sinus bradycardia',
      'Second- or third-degree AV block',
      'Overt cardiac failure/decompensated heart failure',
      'Cardiogenic shock',
    ],
    precautions: [
      'Despite intrinsic sympathomimetic activity, carteolol is NOT free of pulmonary/cardiac risk and the same class-wide asthma/COPD/bradycardia cautions still apply',
      'Caution in diabetic patients (may still mask hypoglycemia symptoms)',
      'Nasolacrimal occlusion after instillation reduces systemic absorption',
    ],
    drugInteractions: [
      'Oral beta-blockers, calcium channel blockers - additive bradycardia/hypotension/AV conduction disturbances',
      'Oral clonidine - rebound hypertension risk if clonidine withdrawn during beta-blocker therapy',
      'Insulin/oral hypoglycemics - can mask tachycardia sign of hypoglycemia',
    ],
    patientCounseling: [
      'Apply punctal occlusion or eyelid closure for 1-2 minutes after instillation to reduce systemic absorption',
      'Report shortness of breath, wheezing, dizziness, or unusually slow heart rate',
      'This medication may have less effect on heart rate and cholesterol than some other beta-blocker eye drops, but pulmonary precautions still apply',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy; systemic beta-blockade may affect fetus/neonate. Excreted in breast milk - caution advised while nursing.',
    monitoring: ['IOP', 'Heart rate and blood pressure, especially at initiation', 'Pulmonary status', 'Lipid profile in patients where beta-blocker lipid effects are a clinical concern'],
    clinicalPearls: [
      'The defining feature of carteolol among the beta-blocker glaucoma agents is its intrinsic sympathomimetic activity (ISA), a partial agonist property not shared by timolol, levobunolol, or betaxolol',
      'ISA theoretically makes carteolol a preferred beta-blocker choice in patients with borderline cardiac or pulmonary reserve, or those concerned about beta-blocker effects on serum lipids, though it is still cautioned/avoided in frank asthma/COPD/significant bradycardia',
      'Less commonly prescribed today than timolol but remains a classic differentiating example in ocular pharmacology coursework and board review',
    ],
    highYield: [
      'Carteolol is the topical beta-blocker with INTRINSIC SYMPATHOMIMETIC ACTIVITY (ISA) - the single highest-yield distinguishing fact versus timolol/levobunolol/betaxolol, none of which have ISA',
      'ISA (partial agonist activity) theoretically causes LESS resting bradycardia, LESS reduction in HDL cholesterol, and LESS effect on exercise heart rate compared to pure (non-ISA) beta blockers',
      'Despite ISA, carteolol is still NON-SELECTIVE (blocks beta-1 and beta-2) and retains the same absolute contraindications: asthma, COPD, bradycardia, AV block',
      'Same core mechanism as the rest of the class: decreases aqueous humor production via beta-2 blockade in the ciliary epithelium',
      'A classic "which beta-blocker has partial agonist activity" board question - carteolol is the answer',
    ],
    references: [
      { label: 'Carteolol intrinsic sympathomimetic activity and comparative beta-blocker pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Beta-blocker classification in glaucoma management', source: 'AAO Preferred Practice Pattern for POAG' },
    ],
  },
  {
    id: 'carbachol',
    genericName: 'Carbachol',
    brandNames: ['Isopto Carbachol', 'Miostat (intraocular)'],
    drugClass: 'Glaucoma medications',
    mechanismOfAction:
      'Direct-acting cholinergic agonist with both muscarinic and nicotinic receptor activity (unlike pilocarpine, which is muscarinic-selective). Contracts the ciliary muscle (longitudinal fibers), which increases conventional (trabecular) outflow facility by mechanically opening the trabecular meshwork via traction on the scleral spur, and also causes iris sphincter contraction producing miosis. Its dual muscarinic/nicotinic activity and resistance to acetylcholinesterase breakdown give it a longer duration of action than pilocarpine.',
    indications: [
      'Open-angle glaucoma (topical, less commonly used now given prostaglandin-era first-line therapy)',
      'Intraoperative miosis during cataract and other anterior segment surgery (intracameral formulation, Miostat)',
    ],
    ocularUses: [
      'Adjunctive/legacy topical IOP-lowering therapy in open-angle glaucoma',
      'Production of intraoperative miosis during cataract surgery and other intraocular procedures (intracameral injection)',
    ],
    typicalDosing:
      'Topical: one drop up to 3 times daily; Intracameral (Miostat): 0.5 mL of 0.01% solution instilled into the anterior chamber before or after securing sutures during surgery',
    concentrations: ['0.75%', '1.5%', '2.25%', '3% (topical)', '0.01% (intracameral, Miostat)'],
    route: 'Topical ophthalmic (glaucoma); intracameral injection (surgical miosis)',
    sideEffects: {
      ocular: [
        'Miosis (small, fixed pupil) - intended effect and side effect',
        'Brow ache/periorbital pain from ciliary muscle spasm',
        'Induced myopia/accommodative spasm (blurred distance vision)',
        'Decreased vision in dim illumination due to small pupil',
        'Retinal detachment risk in predisposed eyes (myopic patients, peripheral retinal degeneration) due to anterior/peripheral traction from ciliary muscle contraction',
        'Cataract formation with long-term chronic topical use',
        'Corneal edema/endothelial toxicity concerns with intracameral use if not properly formulated (preservative-free intracameral formulation required)',
      ],
      systemic: [
        'Cholinergic (SLUDGE-type) effects with significant systemic absorption: bradycardia, bronchospasm, salivation, sweating, GI cramping/diarrhea, urinary urgency',
        'Headache',
        'Flushing',
      ],
    },
    contraindications: [
      'Acute iritis/uveitis (miosis can worsen posterior synechiae formation and pain)',
      'Situations where miosis is undesirable (e.g., some cases of secondary/inflammatory angle-closure)',
      'Known hypersensitivity to carbachol',
    ],
    precautions: [
      'Use with caution in patients with retinal disease/lattice degeneration/high myopia due to increased retinal detachment risk',
      'Caution in asthma/COPD given cholinergic bronchospasm risk with systemic absorption',
      'Caution in patients with peptic ulcer disease, GI spasm, or urinary tract obstruction',
      'Only preservative-free, specifically formulated intracameral preparations (Miostat) should be injected intraocularly - topical formulations are not intended for intraocular injection',
    ],
    drugInteractions: [
      'Other cholinergic/anticholinesterase agents - additive cholinergic toxicity',
      'Anticholinergic medications - antagonistic/reduced miotic effect',
    ],
    patientCounseling: [
      'Expect brow ache/headache, especially when starting topical therapy',
      'Vision may be dimmer, especially at night, due to the small pupil',
      'Report any new flashes, floaters, or curtain/shadow in vision immediately',
      'For intracameral surgical use, patients are counseled preoperatively that pupil constriction is an expected, intended part of the procedure',
    ],
    pregnancyLactation: 'Use with caution in pregnancy and lactation; limited human data, use only if clearly needed.',
    monitoring: ['IOP', 'Peripheral retinal examination given retinal detachment risk, especially in myopes', 'Symptoms of cholinergic toxicity with high topical doses', 'Anterior chamber reaction/corneal clarity postoperatively with intracameral use'],
    clinicalPearls: [
      'Carbachol has both muscarinic AND nicotinic cholinergic activity, distinguishing it from pilocarpine (muscarinic-selective), and is also resistant to acetylcholinesterase breakdown, giving it a longer duration of action',
      'The intracameral formulation (Miostat) is a routine tool in modern cataract surgery to produce rapid, reliable intraoperative miosis, distinct from its now largely historical topical glaucoma role',
      'Topical use for chronic open-angle glaucoma has been largely supplanted by prostaglandin analogs and other newer classes due to poor tolerability (brow ache, blurred vision, multiple daily dosing) - same tolerability issues as pilocarpine',
      'Poor corneal penetration in its topical form historically required a wetting agent/benzalkonium chloride to enhance absorption',
    ],
    highYield: [
      'Carbachol is a DIRECT-ACTING cholinergic agonist with BOTH muscarinic AND nicotinic activity - the key distinguishing mechanism fact versus pilocarpine (muscarinic-only)',
      'Same trabecular/conventional outflow-increasing mechanism as pilocarpine: ciliary muscle contraction opens the trabecular meshwork via scleral spur traction',
      'Miostat (intracameral carbachol) is the classic drug used for intraoperative pupil constriction during cataract surgery - a high-yield surgical pharmacology fact',
      'Shares the miotic-class side effect profile with pilocarpine: brow ache, induced myopia, dim vision, retinal detachment risk in predisposed/myopic eyes',
      'Longer duration of action than pilocarpine because it resists acetylcholinesterase breakdown',
    ],
    references: [
      { label: 'Carbachol mechanism and intracameral surgical use', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Miostat package insert and intraoperative miotic use', source: 'drug package insert' },
    ],
  },
  {
    id: 'latanoprostene-bunod',
    genericName: 'Latanoprostene bunod',
    brandNames: ['Vyzulta'],
    drugClass: 'Glaucoma medications',
    mechanismOfAction:
      'Nitric oxide (NO)-donating prostaglandin F2-alpha analog, metabolized after topical application into two active moieties: (1) latanoprost acid, the same active metabolite produced by latanoprost, which acts as an FP receptor agonist to increase uveoscleral (unconventional) outflow via ciliary muscle extracellular matrix remodeling, and (2) butanediol mononitrate, which releases nitric oxide. The released nitric oxide relaxes the trabecular meshwork and Schlemm canal endothelium (via cGMP-mediated smooth muscle relaxation), increasing conventional (trabecular) outflow. This gives latanoprostene bunod a unique dual mechanism that increases both outflow pathways from a single molecule, unlike any other glaucoma medication.',
    indications: ['Open-angle glaucoma', 'Ocular hypertension'],
    ocularUses: ['IOP-lowering therapy in open-angle glaucoma and ocular hypertension, particularly when maximizing outflow through both pathways is desired'],
    typicalDosing: 'One drop in affected eye(s) once daily in the evening',
    concentrations: ['0.024%'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Conjunctival hyperemia',
        'Increased iris pigmentation (irreversible), same as other prostaglandin analogs',
        'Eyelash growth (hypertrichosis)',
        'Periorbital fat atrophy/deepening of lid sulcus (prostaglandin-associated periorbitopathy)',
        'Ocular stinging/burning/irritation on instillation',
        'Punctate keratitis',
        'Cystoid macular edema (rare, at-risk patients such as aphakia/pseudophakia with torn posterior capsule or uveitis)',
      ],
      systemic: ['Minimal systemic absorption; systemic effects rare'],
    },
    contraindications: [
      'Known hypersensitivity to latanoprostene bunod or components',
      'Active or history of herpetic keratitis (relative contraindication)',
    ],
    precautions: [
      'Caution in patients with active intraocular inflammation (uveitis) - can exacerbate inflammation/macular edema',
      'Caution in aphakic/pseudophakic patients with torn posterior lens capsule (macular edema risk)',
      'Counsel patients regarding permanent iris color changes before initiating therapy',
      'Remove contact lenses before instillation, reinsert after 15 minutes',
    ],
    drugInteractions: [
      'No clinically significant systemic drug interactions identified given minimal systemic absorption',
    ],
    patientCounseling: [
      'Instill in the evening for optimal effect',
      'Expect the same iris pigmentation, eyelash growth, and periorbital changes seen with other prostaglandin analogs, since one active metabolite (latanoprost acid) is identical',
      'Wait at least 5 minutes between this and other topical ophthalmic medications',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy - not recommended unless clearly needed; prostaglandin analogs carry theoretical uterotonic/fetal risk. Caution during lactation; unknown excretion in breast milk.',
    monitoring: ['IOP', 'Iris and periocular pigmentation changes', 'Macular status in at-risk patients (aphakia/pseudophakia, uveitis)'],
    clinicalPearls: [
      'The only glaucoma medication that increases BOTH uveoscleral outflow (via its latanoprost acid component) AND trabecular/conventional outflow (via its nitric oxide component) through a single molecule - a genuinely novel dual-pathway mechanism in glaucoma pharmacology',
      'The VOYAGER and APOLLO/LUNAR trials showed modestly greater IOP-lowering efficacy compared to timolol and to latanoprost alone, attributed to the added trabecular outflow effect from the nitric oxide moiety',
      'Aside from its unique added nitric oxide effect, its ocular side effect profile mirrors standard latanoprost (iris pigmentation, lash growth, periorbitopathy) since latanoprost acid is a shared active metabolite',
      'Represents a rational combination strategy: pairing a proven uveoscleral-outflow agent with a novel trabecular-outflow-enhancing moiety in one bottle rather than requiring two separate drugs',
    ],
    highYield: [
      'DUAL MECHANISM is the single highest-yield fact: latanoprost acid component increases UVEOSCLERAL outflow while the nitric oxide (NO) component increases TRABECULAR/conventional outflow - the only glaucoma drug acting on both pathways via one molecule',
      'Metabolized to latanoprost acid, the SAME active metabolite as latanoprost - explains the shared classic prostaglandin side-effect profile (iris pigmentation, lash growth, periorbital fat atrophy)',
      'Nitric oxide relaxes the trabecular meshwork/Schlemm canal via cGMP-mediated smooth muscle relaxation - the mechanistic basis for its added conventional outflow effect',
      'Once-daily evening dosing, consistent with the prostaglandin analog class',
      'A classic "novel mechanism" board question: identify the glaucoma drug that increases both outflow pathways - latanoprostene bunod is the answer',
    ],
    references: [
      { label: 'Weinreb et al., Latanoprostene bunod 0.024% versus timolol maleate 0.5% (APOLLO/LUNAR trials)', source: 'American Journal of Ophthalmology' },
      { label: 'Nitric oxide-donating prostaglandin mechanism', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
]
