import type { Drug } from '../../types/drug'

export const systemicDiseaseSpecific: Drug[] = [
  // ===== MULTIPLE SCLEROSIS =====
  {
    id: 'fingolimod',
    genericName: 'Fingolimod',
    brandNames: ['Gilenya'],
    drugClass: 'Neurologic',
    mechanismOfAction:
      'Sphingosine-1-phosphate (S1P) receptor modulator. Fingolimod is phosphorylated in vivo to its active form, which binds S1P receptors (predominantly S1P1) on lymphocytes, causing internalization and downregulation of the receptor. This traps/sequesters lymphocytes within lymph nodes, preventing their egress and subsequent trafficking into the central nervous system, thereby reducing the autoimmune inflammatory attack on myelin that drives relapsing multiple sclerosis. It was the first oral disease-modifying therapy approved for MS. S1P receptors are also expressed on retinal pigment epithelial cells and vascular endothelium, which is thought to underlie the drug\'s characteristic macular edema toxicity via disruption of the outer blood-retinal barrier.',
    indications: [
      'Relapsing forms of multiple sclerosis (relapsing-remitting MS, active secondary progressive MS, clinically isolated syndrome) in adults and pediatric patients ≥10 years',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral, 0.5 mg once daily (adult dosing); first-dose cardiac monitoring (bradycardia risk) is required in a monitored setting for the initial dose',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Capsule'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'FINGOLIMOD-ASSOCIATED MACULAR EDEMA (FAME) — the single most board-tested ocular fact about this drug; occurs in roughly 0.4-0.5% of patients overall, but risk rises substantially (up to several percent) in patients with a history of DIABETES MELLITUS or UVEITIS',
        'Classic timing: macular edema classically develops within the first 3-4 MONTHS of starting therapy, though it can occur later or with dose changes/re-initiation',
        'Often asymptomatic early on (may present with only mild blurring, metamorphopsia, or a central/paracentral scotoma), which is why scheduled OCT surveillance — not symptom-triggered exam alone — is required',
        'Typically reversible with prompt drug discontinuation if caught early, but can cause permanent visual loss if unrecognized and untreated',
        'Rare reports of posterior uveitis',
      ],
      systemic: [
        'Bradycardia and atrioventricular conduction block, particularly with the first dose — requires first-dose cardiac monitoring (ECG, vital sign observation for at least 6 hours)',
        'Increased risk of infection due to lymphocyte sequestration/immunosuppression, including herpes viral infections and progressive multifocal leukoencephalopathy (PML, rare)',
        'Elevated liver enzymes/hepatotoxicity',
        'Hypertension',
        'Posterior reversible encephalopathy syndrome (PRES, rare)',
        'Basal cell carcinoma and other malignancy risk with long-term use',
        'Headache, fatigue, diarrhea',
      ],
    },
    contraindications: [
      'Recent (within last 6 months) myocardial infarction, unstable angina, stroke/TIA, decompensated heart failure',
      'History of Mobitz type II second-degree or third-degree AV block, sick sinus syndrome (unless a pacemaker is in place)',
      'Baseline QTc prolongation ≥500 ms',
      'Concurrent Class Ia or Class III antiarrhythmic drugs',
    ],
    precautions: [
      'Baseline diabetes mellitus or uveitis substantially raises macular edema risk and should prompt closer ophthalmic surveillance',
      'First-dose observation for bradyarrhythmia is mandatory; re-initiation after a treatment gap generally requires repeat first-dose monitoring',
      'Immunosuppressive effect persists for weeks after discontinuation given prolonged lymphopenia — relevant to timing of live vaccines and infection risk',
      'Discontinuing fingolimod can rarely be associated with severe rebound MS disease activity',
    ],
    drugInteractions: [
      'Class Ia/III antiarrhythmics and other QT-prolonging or heart-rate-lowering drugs (beta-blockers, calcium channel blockers, digoxin) — additive bradycardia/conduction risk',
      'Live attenuated vaccines — avoid during and for a period after therapy given immunosuppression',
      'Other immunosuppressants/immunomodulators — additive infection risk',
    ],
    patientCounseling: [
      'Obtain a baseline dilated eye exam with OCT BEFORE starting fingolimod, and return for a follow-up OCT at 3-4 months even if vision feels normal',
      'Report any new blurred vision, distorted vision (straight lines appearing wavy), or a gray/dark patch of central vision promptly',
      'Report to the prescribing neurologist and to eye care between doses if diabetic or if there is a history of uveitis, since these raise macular edema risk',
      'Understand the need for supervised first-dose cardiac monitoring',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy — associated with increased risk of congenital malformations; effective contraception required during therapy and for approximately 2 months after discontinuation given the drug\'s prolonged elimination half-life. Not recommended during breastfeeding.',
    pediatricConsiderations: [
      'FDA-approved for relapsing MS in children and adolescents ≥10 years, based on the PARADIGMS trial (fingolimod significantly outperformed interferon beta-1a on annualized relapse rate) — the first MS disease-modifying therapy specifically approved for pediatric patients.',
      'Pediatric dosing is weight-based rather than flat adult dosing: 0.25 mg once daily for patients ≤40 kg, 0.5 mg once daily for patients >40 kg.',
      'Seizures were reported more frequently in pediatric trial patients (5.6%) than with interferon beta-1a (0.9%) — an important pediatric-specific safety signal to counsel on.',
    ],
    relatedConditionIds: ['multiple-sclerosis-ocular'],
    monitoring: [
      'BASELINE comprehensive dilated ophthalmic examination WITH OCT before or shortly after starting therapy',
      'FOLLOW-UP OCT at 3-4 MONTHS after initiation — the classic, high-yield board-tested screening interval, directly analogous in importance to hydroxychloroquine screening',
      'Additional OCT/ophthalmic exam any time new visual symptoms occur, regardless of time since initiation',
      'More frequent/earlier ophthalmic surveillance in patients with diabetes or a history of uveitis',
      'Baseline and periodic ECG/cardiac monitoring, liver function tests, complete blood count (lymphopenia), blood pressure, and dermatologic skin checks',
    ],
    clinicalPearls: [
      'Fingolimod-associated macular edema is one of the most directly testable "drug X requires OCT screening at time Y" facts in ocular pharmacology outside of hydroxychloroquine — expect a comparison question',
      'Unlike hydroxychloroquine retinopathy (a slow, cumulative, dose/duration-dependent process), FAME is an early-onset phenomenon concentrated in the first few months of therapy, so the screening schedule front-loads at 3-4 months rather than waiting years',
      'Diabetes and uveitis history are the two classic risk-stratifying factors that should prompt heightened suspicion and earlier/more frequent screening',
      'Edema is usually reversible if the drug is stopped promptly upon detection, underscoring why scheduled surveillance (not just symptom-triggered exams) is built into the monitoring protocol',
    ],
    highYield: [
      'FINGOLIMOD (Gilenya) causes MACULAR EDEMA, classically within the first 3-4 MONTHS of therapy — a top board fact for MS-related pharmacology',
      'REQUIRED monitoring: baseline dilated exam + OCT before starting, then repeat OCT at 3-4 months, and any time visual symptoms occur',
      'Diabetes mellitus and history of uveitis are the major risk factors that increase incidence of fingolimod-associated macular edema',
      'Mechanism: S1P receptor modulation sequesters lymphocytes in lymph nodes (reduces CNS-directed autoimmune attack); S1P receptors on RPE/vascular endothelium are implicated in the macular edema mechanism',
      'First-dose bradycardia/AV block requires supervised cardiac monitoring — a non-ocular but classic companion fact',
      'Macular edema is often REVERSIBLE if caught early and the drug is discontinued, making scheduled screening (not just symptom-driven exams) essential',
    ],
    references: [
      { label: 'Fingolimod and macular edema: screening recommendations', source: 'American Academy of Ophthalmology, Ophthalmology' },
      { label: 'Gilenya (fingolimod) Prescribing Information', source: 'Novartis Pharmaceuticals' },
    ],
  },

  // ===== THYROID EYE DISEASE =====
  {
    id: 'teprotumumab',
    genericName: 'Teprotumumab',
    brandNames: ['Tepezza'],
    drugClass: 'Endocrine',
    mechanismOfAction:
      'Fully human monoclonal antibody that inhibits the insulin-like growth factor-1 receptor (IGF-1R). In thyroid eye disease, orbital fibroblasts co-express IGF-1R and the TSH receptor; autoantibody/cytokine-driven signaling through this IGF-1R/TSH-receptor complex drives orbital fibroblast proliferation, hyaluronan production, and adipogenesis, producing the orbital tissue expansion, inflammation, and fibrosis that cause proptosis, diplopia, and periorbital changes. By blocking IGF-1R signaling, teprotumumab interrupts this pathway and reduces orbital inflammation, proptosis, and diplopia.',
    indications: [
      'Active, moderate-to-severe thyroid eye disease (Graves ophthalmopathy/orbitopathy)',
    ],
    ocularUses: [
      'YES — direct ophthalmic indication: teprotumumab is the FIRST and only FDA-approved medical therapy SPECIFICALLY for active thyroid eye disease, used to reduce proptosis, diplopia, and orbital inflammation/clinical activity score in active moderate-to-severe disease',
    ],
    typicalDosing: 'Intravenous infusion series: initial dose 10 mg/kg, followed by 20 mg/kg every 3 weeks for a total of 8 infusions',
    concentrations: ['N/A — IV infusion (lyophilized powder reconstituted for intravenous administration)'],
    formulations: ['Injection'],
    route: 'Intravenous infusion',
    sideEffects: {
      ocular: [
        'Dry eye/ocular surface irritation',
        'Rare reports of hearing loss overlapping with, and sometimes reported alongside, ocular symptoms in the broader adverse event profile (see systemic — hearing impairment)',
        'Possible worsening of pre-existing inflammatory bowel disease has been reported, indirectly relevant given some patients are co-managed for other autoimmune conditions',
        'Periorbital edema (can occur early in the infusion course before proptosis improvement is evident)',
      ],
      systemic: [
        'Hearing impairment/hypoacusis and tinnitus — a notable, relatively unique adverse effect for this biologic; can be irreversible in some cases; audiologic history/monitoring is recommended',
        'Hyperglycemia — caution and closer glucose monitoring needed in diabetic patients and those with impaired glucose tolerance',
        'Infusion-related reactions (fever, chills, hypertension, muscle spasm) — most common with early infusions',
        'Muscle spasms, nausea, alopecia, fatigue, diarrhea',
        'Risk of fetal harm — pregnancy must be excluded before initiation',
      ],
    },
    contraindications: [
      'Pregnancy (based on animal data suggesting fetal harm; pregnancy test required before each infusion in patients of reproductive potential)',
      'Known hypersensitivity to teprotumumab',
    ],
    precautions: [
      'Pre-existing inflammatory bowel disease may be exacerbated',
      'Pre-existing diabetes or impaired glucose tolerance requires optimized glycemic control before and during treatment',
      'Baseline and periodic hearing assessment is recommended given the risk of hearing impairment',
      'Premedication (e.g., for infusion reactions) may be used, especially with early doses',
    ],
    drugInteractions: [
      'No major pharmacokinetic drug-drug interactions established; caution with other agents affecting glycemic control given the hyperglycemia risk',
    ],
    patientCounseling: [
      'Report any new or worsening hearing loss, ringing in the ears, or sense of fullness in the ears promptly',
      'Diabetic patients should closely monitor blood glucose during the infusion series and report symptoms of hyperglycemia',
      'Effective contraception is required during treatment and for a defined period afterward; report suspected pregnancy immediately',
      'Understand this is an infusion series (typically 8 infusions every 3 weeks) and that proptosis/diplopia improvement is assessed over the course of treatment',
    ],
    pregnancyLactation:
      'Contraindicated / not recommended in pregnancy based on animal reproductive data suggesting potential fetal harm; pregnancy testing required prior to each infusion in patients of reproductive potential, with effective contraception required during and for a period after the last dose. Use during breastfeeding has not been established; risk-benefit discussion with the prescriber is recommended.',
    pediatricConsiderations: [
      'Safety and efficacy have NOT been established in pediatric patients; not recommended for use in children.',
      'Juvenile-animal toxicity studies raised specific concern for IGF-1R inhibition impairing growth, bone development, and thymic/splenic development, with younger/growing animals more sensitive — mechanistically relevant given IGF-1R\'s normal role in pediatric growth.',
      'Hearing impairment, an established adult adverse effect, is an additional specific concern in school-age children given its potential impact on learning and development.',
    ],
    relatedConditionIds: ['thyroid-eye-disease'],
    monitoring: [
      'Baseline and periodic audiologic (hearing) assessment given risk of hearing impairment/tinnitus',
      'Blood glucose monitoring, particularly in diabetic or pre-diabetic patients',
      'Pregnancy testing before each infusion in patients of reproductive potential',
      'Serial assessment of proptosis (exophthalmometry), clinical activity score, and diplopia over the infusion course by the treating ophthalmologist',
      'Monitoring for infusion reactions during and immediately after each infusion',
    ],
    clinicalPearls: [
      'Teprotumumab represents a genuine paradigm shift in thyroid eye disease management — prior to its approval, treatment was largely limited to supportive care, corticosteroids, orbital radiotherapy, and surgical decompression for stable/inactive disease; teprotumumab is the first agent shown to meaningfully reduce proptosis and clinical activity in ACTIVE disease',
      'Hearing impairment is an unusual and distinctive adverse effect for an ophthalmic biologic — a classic distinguishing board fact and one of the few instances where an eye-disease drug requires audiology co-monitoring',
      'Best results are seen when treatment is initiated during the ACTIVE (inflammatory) phase of thyroid eye disease rather than the stable/fibrotic phase — timing relative to disease activity matters',
      'Given hyperglycemia risk, patients with underlying diabetes require closer glucose surveillance throughout the infusion series',
    ],
    highYield: [
      'Teprotumumab (Tepezza) is the FIRST FDA-approved medical treatment SPECIFICALLY for active thyroid eye disease (Graves orbitopathy) — reduces proptosis, diplopia, and clinical activity score',
      'Mechanism: IGF-1R (insulin-like growth factor-1 receptor) inhibitor monoclonal antibody, blocking orbital fibroblast activation driven by the IGF-1R/TSH-receptor signaling complex',
      'Classic distinctive side effect: HEARING IMPAIRMENT/TINNITUS — audiologic monitoring recommended, a notable and somewhat unique toxicity for an ophthalmic-indicated biologic',
      'HYPERGLYCEMIA is a known adverse effect — extra caution/glucose monitoring needed in diabetic patients',
      'Administered as an IV infusion SERIES (8 infusions total, every 3 weeks) rather than a single dose or chronic daily therapy',
      'Represents a major treatment paradigm shift: active thyroid eye disease can now be medically treated rather than managed only with supportive care until the disease burns out for surgical rehabilitation',
    ],
    references: [
      { label: 'Teprotumumab for the treatment of active thyroid eye disease', source: 'New England Journal of Medicine' },
      { label: 'Tepezza (teprotumumab-trbw) Prescribing Information', source: 'Horizon Therapeutics/Amgen' },
    ],
  },

  // ===== MYASTHENIA GRAVIS =====
  {
    id: 'pyridostigmine',
    genericName: 'Pyridostigmine',
    brandNames: ['Mestinon'],
    drugClass: 'Neurologic',
    mechanismOfAction:
      'Reversible acetylcholinesterase inhibitor. By inhibiting acetylcholinesterase at the neuromuscular junction, pyridostigmine increases the amount and duration of acetylcholine available to bind the reduced number of functional postsynaptic nicotinic receptors in myasthenia gravis, improving neuromuscular transmission and reducing fatigable muscle weakness, including of the extraocular muscles and levator palpebrae superioris.',
    indications: [
      'Myasthenia gravis (generalized and purely ocular forms) — first-line symptomatic (not disease-modifying) treatment',
      'Reversal of neuromuscular blockade (specific formulations, anesthesia setting)',
    ],
    ocularUses: [
      'None — systemic medication; DIRECTLY relevant to optometry because it is the first-line symptomatic treatment for OCULAR myasthenia gravis, which frequently presents initially to eye care with ptosis and variable/fatigable diplopia before a formal neurology diagnosis is made',
    ],
    typicalDosing: 'Oral, typically 60 mg every 3-6 hours, titrated to symptom control and tolerability; extended-release formulations available for nighttime/early-morning symptom coverage',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Extended-release tablet', 'Syrup'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Direct ocular toxicity from the drug itself is uncommon — most ocular findings in these patients (ptosis, variable diplopia, orbicularis weakness) are manifestations of the underlying myasthenia gravis rather than a drug side effect',
        'Miosis (mild, cholinergic effect) has been reported, though this is a minor and inconsistent finding',
        'Excessive lacrimation (cholinergic effect)',
      ],
      systemic: [
        'Cholinergic (muscarinic) side effects predominate: gastrointestinal cramping, diarrhea, nausea, increased salivation, and sweating (diaphoresis) — the classic, most common adverse effect profile',
        'Bradycardia',
        'Increased bronchial secretions/bronchospasm (caution in asthma/COPD)',
        'Muscle fasciculations/twitching',
        'Cholinergic crisis (excessive dosing) — can paradoxically worsen muscle weakness and mimic a myasthenic crisis, an important clinical distinction for the treating team',
      ],
    },
    contraindications: [
      'Mechanical intestinal or urinary tract obstruction',
      'Known hypersensitivity to cholinesterase inhibitors or bromide (for the bromide salt formulation)',
    ],
    precautions: [
      'Use with caution in asthma, bradycardia, or peptic ulcer disease given cholinergic effects',
      'Overdosing can precipitate a cholinergic crisis, which can be difficult to distinguish clinically from worsening myasthenic weakness — dose adjustments should be made carefully and typically under specialist guidance',
      'Pyridostigmine treats SYMPTOMS but does not modify the underlying autoimmune disease process; many patients with generalized or progressive disease will also require immunosuppressive therapy',
    ],
    drugInteractions: [
      'Other cholinesterase inhibitors or cholinergic agents — additive cholinergic toxicity',
      'Neuromuscular blocking agents (used in anesthesia) — pyridostigmine antagonizes nondepolarizing agents and can prolong depolarizing agents; important for surgical/anesthesia planning',
      'Beta-blockers — additive bradycardia risk',
      'Corticosteroids — can transiently worsen myasthenic weakness when started, an important timing consideration though not a direct pyridostigmine interaction',
    ],
    patientCounseling: [
      'Take doses on a consistent schedule to maintain steady symptom control, particularly around anticipated periods of exertion',
      'Report worsening weakness, difficulty breathing or swallowing, or excessive cholinergic symptoms (cramping, diarrhea, sweating) promptly — either may signal a need for medical reassessment',
      'Understand this medication controls symptoms (ptosis, diplopia, limb weakness) but does not cure or halt progression of the underlying autoimmune disease',
    ],
    pregnancyLactation:
      'Generally considered compatible with pregnancy when needed for symptom control, as myasthenia gravis itself and undertreatment carry real maternal risk; use should be coordinated with the treating neurologist/obstetrician. Present in breast milk in small amounts; generally considered compatible with breastfeeding under specialist guidance.',
    pediatricConsiderations: [
      'Used off-label in juvenile/pediatric myasthenia gravis with weight-based dosing individualized to symptom response, generally under pediatric neurology guidance, since no pediatric-specific labeling exists.',
      'Increasingly used off-label in pediatric postural orthostatic tachycardia syndrome (POTS); formal pediatric dosing guidelines remain limited, but case reports describe divided daily dosing tapering through the day given the drug\'s short half-life.',
    ],
    offLabelUses: ['Postural orthostatic tachycardia syndrome (POTS), in both adult and pediatric patients'],
    relatedConditionIds: ['ocular-myasthenia-gravis'],
    monitoring: [
      'Clinical symptom response (ptosis, diplopia, limb/bulbar/respiratory strength) rather than a laboratory or ocular-toxicity monitoring protocol',
      'Watch for signs of cholinergic excess (GI symptoms, excessive salivation/sweating, bradycardia) versus undertreatment (persistent or worsening weakness)',
      'Optometric follow-up of ptosis and ocular motility/diplopia to help gauge symptomatic control over time',
    ],
    clinicalPearls: [
      'Ocular myasthenia gravis is one of the classic conditions optometrists must recognize because patients often present first to eye care with PTOSIS and variable, FATIGABLE diplopia that worsens with sustained upgaze or as the day progresses, before any neurology referral',
      'Two classic bedside diagnostic maneuvers that support a myasthenia diagnosis by transiently IMPROVING ptosis: the ICE PACK TEST (cold improves neuromuscular transmission by reducing acetylcholinesterase activity) and the historical EDROPHONIUM (TENSILON) TEST (a short-acting cholinesterase inhibitor causes rapid, transient improvement in ptosis) — both are contextual diagnostic pearls distinct from pyridostigmine\'s own pharmacology',
      'Pyridostigmine\'s side effects are overwhelmingly CHOLINERGIC (GI cramping, diarrhea, salivation, sweating) rather than ocular-toxic — contrast this with the DISEASE itself (myasthenia gravis), which is what actually produces the ocular findings (ptosis, diplopia), not the drug',
      'Fatigability is the hallmark clinical clue: ptosis/diplopia that worsens with sustained effort (e.g., prolonged upgaze) and improves with rest is classic for myasthenia gravis',
    ],
    highYield: [
      'Pyridostigmine (Mestinon) is FIRST-LINE symptomatic treatment for myasthenia gravis, including OCULAR myasthenia gravis (ptosis, fatigable diplopia) — high-yield since these patients often present to eye care first',
      'Mechanism: reversible acetylcholinesterase inhibitor, increasing acetylcholine availability at the neuromuscular junction',
      'Side effects are predominantly CHOLINERGIC (GI cramping, diarrhea, salivation, sweating) — NOT direct ocular toxicity; the ocular findings in these patients come from the DISEASE, not the drug',
      'Classic bedside diagnostic tests for myasthenic ptosis (contextual, not pyridostigmine-specific): the ICE PACK TEST and the EDROPHONIUM/TENSILON TEST, both of which transiently improve ptosis',
      'Overdosing can cause a CHOLINERGIC CRISIS that can mimic worsening myasthenic weakness — an important clinical distinction',
      'Pyridostigmine treats symptoms only; it does not modify the underlying autoimmune disease process',
    ],
    references: [
      { label: 'Myasthenia gravis: diagnosis and management, including ocular myasthenia', source: 'Continuum (Neuro-Ophthalmology), American Academy of Neurology' },
      { label: 'Mestinon (pyridostigmine bromide) Prescribing Information', source: 'Bausch Health' },
    ],
  },

  // ===== ANCA VASCULITIS / SEVERE OCULAR INFLAMMATORY DISEASE =====
  {
    id: 'cyclophosphamide',
    genericName: 'Cyclophosphamide',
    brandNames: ['Cytoxan'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Nitrogen mustard alkylating agent that is metabolically activated (primarily hepatically, via cytochrome P450 enzymes) to reactive metabolites that cross-link DNA strands, preventing DNA replication and transcription. This produces broad cytotoxic suppression of rapidly dividing cells, including lymphocytes, making it one of the most potent immunosuppressive/cytotoxic agents available for severe, organ- or sight-threatening autoimmune and vasculitic disease.',
    indications: [
      'Severe ANCA-associated vasculitis (granulomatosis with polyangiitis/Wegener granulomatosis, microscopic polyangiitis) — induction therapy for organ- or life-threatening disease',
      'Severe systemic lupus erythematosus, particularly lupus nephritis',
      'Refractory, sight-threatening ocular inflammatory disease, including necrotizing scleritis and peripheral ulcerative keratitis (PUK) associated with systemic vasculitis',
      'Various malignancies (lymphoma, leukemia, and others — oncologic chemotherapy regimens)',
    ],
    ocularUses: [
      'None as a primary standalone ocular indication, but it is one of the most potent available agents for controlling severe, sight-threatening scleritis, PUK, and orbital inflammatory disease associated with ANCA vasculitis when first-line steroid-sparing agents have failed',
    ],
    typicalDosing:
      'Highly variable by indication: oral daily dosing (e.g., approximately 1-2 mg/kg/day) or intravenous pulse dosing (e.g., every 2-4 weeks) for severe vasculitis/lupus nephritis induction, generally under close specialist (rheumatology/nephrology) supervision with dose adjustment for renal function and blood counts',
    concentrations: ['N/A — oral/systemic (also available as IV infusion)'],
    formulations: ['Tablet', 'Injection'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'No characteristic direct retinal or corneal toxicity pattern of its own — its relevance to eye care is chiefly as a highly potent TREATMENT for severe scleritis/PUK/orbital inflammation associated with vasculitis, rather than as a cause of ocular toxicity',
        'Increased risk of ocular surface and adnexal infection due to profound immunosuppression',
        'Rare reports of blurred vision associated with systemic toxicity or electrolyte disturbance (e.g., syndrome of inappropriate antidiuretic hormone secretion with high-dose IV therapy) rather than a direct ocular drug effect',
      ],
      systemic: [
        'HEMORRHAGIC CYSTITIS — the classic, most heavily board-tested non-ocular toxicity of cyclophosphamide, caused by the urotoxic metabolite acrolein; mitigated with aggressive hydration and/or co-administration of mesna',
        'Myelosuppression/bone marrow suppression (leukopenia, thrombocytopenia, anemia) — major dose-limiting toxicity requiring frequent blood count monitoring',
        'Infertility/gonadal toxicity — significant risk in both men and women, dose- and duration-dependent; fertility preservation counseling is recommended before initiation when feasible',
        'Increased risk of secondary malignancy (particularly bladder cancer and hematologic malignancy) with cumulative lifetime dosing',
        'Increased infection risk, including opportunistic infections',
        'Nausea, vomiting, alopecia',
        'Syndrome of inappropriate antidiuretic hormone secretion (SIADH) with high-dose IV administration',
      ],
    },
    contraindications: [
      'Pregnancy (teratogenic and embryotoxic)',
      'Severe active infection',
      'Severe bone marrow suppression/pre-existing significant cytopenias',
      'Known hypersensitivity to cyclophosphamide',
    ],
    precautions: [
      'Aggressive hydration (and often co-administration of mesna, which binds and inactivates the urotoxic acrolein metabolite in the bladder) is used to reduce hemorrhagic cystitis risk, particularly with IV pulse regimens',
      'Fertility preservation counseling should be offered before treatment given significant, potentially irreversible gonadal toxicity',
      'Cumulative lifetime dose should be tracked given the dose-dependent risk of secondary malignancy',
      'Reserved generally for the most severe, organ- or sight-threatening disease given its toxicity profile — not a first-line agent',
    ],
    drugInteractions: [
      'Other myelosuppressive agents — additive bone marrow toxicity',
      'Allopurinol — may increase myelosuppression risk',
      'Live vaccines — avoid during therapy given profound immunosuppression',
    ],
    patientCounseling: [
      'Maintain adequate hydration and void frequently, particularly around infusion days, to reduce hemorrhagic cystitis risk',
      'Report any blood in the urine, unusual bruising/bleeding, fever, or signs of infection promptly',
      'Discuss fertility preservation options before starting therapy if future fertility is a concern',
      'Attend all scheduled blood count and urinalysis monitoring appointments',
      'Report any new eye pain, redness, or vision change so it can be distinguished as disease activity versus a new problem',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy — teratogenic and associated with fetal malformation and loss; effective contraception required during and for a period after therapy in patients of reproductive potential. Contraindicated during breastfeeding.',
    pediatricConsiderations: [
      'Used off-label in pediatric steroid-resistant/steroid-dependent nephrotic syndrome (minimal change disease), typically oral 2 mg/kg/day for 8-12 weeks (maximum cumulative dose approximately 168 mg/kg) or an IV pulse regimen.',
      'Treatment courses beyond approximately 90 days meaningfully increase the risk of male infertility/gonadal toxicity in pediatric patients — an important counseling point distinct from typical adult course lengths.',
      'Requires the same close hematologic (weekly CBC) and hemorrhagic cystitis precautions as in adults, with dosing individualized by weight/body surface area.',
    ],
    offLabelUses: ['Steroid-resistant/steroid-dependent nephrotic syndrome (minimal change disease), particularly in pediatric patients'],
    relatedConditionIds: ['anca-vasculitis-ocular', 'scleritis', 'peripheral-ulcerative-keratitis-overview', 'lupus-ocular'],
    monitoring: [
      'Complete blood count (frequent, given myelosuppression risk) — often checked before each dose/cycle',
      'Urinalysis (monitoring for hematuria as an early sign of bladder toxicity)',
      'Renal and hepatic function',
      'Cumulative lifetime dose tracking (secondary malignancy risk)',
      'Ophthalmic monitoring of scleritis/PUK/orbital inflammatory disease activity by the treating ophthalmologist to assess treatment response',
    ],
    clinicalPearls: [
      'Cyclophosphamide is one of the few immunosuppressants potent enough to be first-line INDUCTION therapy for organ- or sight-threatening ANCA-associated vasculitis (e.g., necrotizing scleritis or PUK in granulomatosis with polyangiitis), reflecting the severity of disease it is reserved for',
      'HEMORRHAGIC CYSTITIS is the single highest-yield non-ocular toxicity fact for this drug — caused by the acrolein metabolite, mitigated by hydration/mesna',
      'Necrotizing scleritis and PUK associated with systemic vasculitis are true ophthalmic emergencies that require systemic immunosuppression (not just topical/local therapy), and cyclophosphamide is a classic agent used for severe, refractory cases',
      'Unlike hydroxychloroquine, cyclophosphamide does not have a characteristic drug-induced retinopathy — its toxicity burden is systemic (bladder, marrow, gonadal, malignancy) rather than direct ocular',
    ],
    highYield: [
      'Cyclophosphamide is used for SEVERE ANCA-associated vasculitis (granulomatosis with polyangiitis) and refractory, sight-threatening ocular inflammatory disease — necrotizing scleritis and peripheral ulcerative keratitis (PUK)',
      'Classic board fact: HEMORRHAGIC CYSTITIS (from the acrolein metabolite) is the hallmark non-ocular toxicity, mitigated with hydration and mesna',
      'Significant INFERTILITY risk (dose/duration-dependent) — fertility counseling recommended before starting',
      'Increased risk of SECONDARY MALIGNANCY (bladder cancer, hematologic malignancy) with cumulative dosing',
      'MYELOSUPPRESSION is the major dose-limiting toxicity requiring frequent CBC monitoring',
      'No characteristic direct retinal/corneal toxicity — its ophthalmic relevance is as a treatment for severe scleritis/PUK, not as a cause of ocular toxicity',
    ],
    references: [
      { label: 'Cyclophosphamide in the treatment of ocular and systemic manifestations of ANCA-associated vasculitis', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Cytoxan (cyclophosphamide) Prescribing Information', source: 'Baxter Healthcare' },
    ],
  },

  // ===== GIANT CELL ARTERITIS =====
  {
    id: 'tocilizumab',
    genericName: 'Tocilizumab',
    brandNames: ['Actemra'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Recombinant humanized monoclonal antibody that binds both soluble and membrane-bound interleukin-6 (IL-6) receptors, blocking IL-6-mediated signaling. IL-6 is a key pro-inflammatory cytokine driving the systemic and vascular inflammation of giant cell arteritis (and rheumatoid arthritis); blocking its signaling suppresses disease activity and allows for reduction of the cumulative glucocorticoid dose needed to maintain control.',
    indications: [
      'Giant cell arteritis (GCA/temporal arteritis) — FDA-approved as a steroid-sparing agent for sustained glucocorticoid-free remission',
      'Rheumatoid arthritis',
      'Polyarticular juvenile idiopathic arthritis',
      'Cytokine release syndrome (CAR T-cell therapy-associated, separate indication)',
    ],
    ocularUses: [
      'None — systemic medication; relevant to optometry chiefly because GCA is a classic optometric emergency (risk of arteritic anterior ischemic optic neuropathy, AION, and permanent vision loss), and tocilizumab is now a key adjunctive steroid-sparing agent in its long-term management',
    ],
    typicalDosing: 'Subcutaneous injection, typically 162 mg once weekly for GCA (may also be given intravenously in some regimens), generally used in combination with a tapering course of glucocorticoids',
    concentrations: ['N/A — subcutaneous injection or IV infusion (not an ophthalmic formulation)'],
    formulations: ['Injection'],
    route: 'Subcutaneous injection or intravenous infusion',
    sideEffects: {
      ocular: [
        'No characteristic direct ocular toxicity of its own; ocular relevance is primarily about the DISEASE it treats (GCA-related arteritic AION, diplopia, amaurosis fugax) rather than a drug-induced ocular effect',
        'Increased risk of ocular surface/adnexal infection due to immunosuppression',
      ],
      systemic: [
        'Increased risk of serious infection, including reactivation of latent tuberculosis and other opportunistic infections — screening for latent TB recommended before initiation',
        'Neutropenia and thrombocytopenia',
        'Elevated liver enzymes/hepatotoxicity',
        'Hyperlipidemia (elevated LDL/total cholesterol)',
        'Gastrointestinal perforation (rare but serious, particularly in patients with diverticulitis)',
        'Injection site reactions or infusion reactions',
        'IL-6 blockade can blunt the normal acute-phase response (e.g., C-reactive protein, fever), which can MASK signs of an evolving infection or disease flare — an important safety/monitoring nuance',
      ],
    },
    contraindications: [
      'Active, serious infection',
      'Known hypersensitivity to tocilizumab',
    ],
    precautions: [
      'Screen for latent tuberculosis and viral hepatitis before starting therapy',
      'Because tocilizumab suppresses the acute-phase response, ESR/CRP become unreliable markers of disease activity or infection while on therapy — clinical assessment becomes more important',
      'Use with caution in patients with a history of diverticulitis or GI perforation risk factors',
      'Monitor lipid panel and liver enzymes periodically',
    ],
    drugInteractions: [
      'CYP450 substrate drugs — IL-6 suppression by tocilizumab can normalize previously suppressed CYP450 enzyme activity, altering metabolism/levels of drugs such as warfarin, statins, and certain calcium channel blockers (may require dose adjustment of those agents)',
      'Other biologic immunosuppressants — generally avoided in combination given additive infection risk',
      'Live vaccines — avoid during therapy',
    ],
    patientCounseling: [
      'Report any fever, signs of infection, or unusual symptoms promptly, since typical inflammatory markers may be blunted by this medication and infections can be harder to detect early',
      'Report any sudden vision loss, jaw pain with chewing, scalp tenderness, or new severe headache immediately, as GCA can still flare and cause vision-threatening arteritic AION even while on tocilizumab',
      'Attend scheduled blood monitoring (CBC, liver enzymes, lipid panel)',
      'This medication helps reduce the STEROID DOSE needed for long-term control, but does not replace emergency steroid treatment for an acute vision-threatening GCA flare',
    ],
    pregnancyLactation:
      'Limited data in human pregnancy; use only if the potential benefit justifies the potential risk to the fetus, generally under specialist guidance. Use during breastfeeding should be discussed with the prescriber given limited data.',
    pediatricConsiderations: [
      'FDA-approved for polyarticular and systemic juvenile idiopathic arthritis, with weight-based/weight-tiered dosing (approximately 8 mg/kg IV, or subcutaneous dosing tiered by body weight) distinct from the fixed adult GCA dose.',
      'Used off-label for juvenile idiopathic arthritis-associated uveitis refractory to methotrexate and anti-TNF agents (e.g., adalimumab) — supported by the phase 2 APTITUDE trial in children.',
    ],
    offLabelUses: [
      'Refractory juvenile idiopathic arthritis-associated uveitis (methotrexate/anti-TNF-refractory)',
      'Non-infectious uveitis in adults refractory to conventional immunosuppression',
    ],
    relatedConditionIds: ['giant-cell-arteritis', 'rheumatoid-arthritis-ocular'],
    monitoring: [
      'Baseline and periodic complete blood count (neutropenia, thrombocytopenia)',
      'Liver function tests periodically',
      'Lipid panel periodically (hyperlipidemia risk)',
      'Latent tuberculosis screening before initiation',
      'Clinical (not solely ESR/CRP-based) assessment of GCA disease activity given blunted acute-phase response on therapy',
      'Ongoing visual symptom surveillance (jaw claudication, headache, visual disturbance) since disease flares remain possible',
    ],
    clinicalPearls: [
      'Tocilizumab was the first agent FDA-approved specifically as a steroid-sparing treatment for GCA, based on evidence it allows a shorter glucocorticoid taper and reduces cumulative steroid exposure/toxicity over the long term',
      'CRITICAL board distinction: tocilizumab is ADJUNCTIVE/steroid-sparing for LONG-TERM disease control — it is NOT a substitute for immediate high-dose systemic corticosteroids in a patient with ACUTE, vision-threatening GCA (e.g., new amaurosis fugax, jaw claudication, or vision loss suspicious for arteritic AION), which remains a same-day ophthalmic/rheumatologic emergency requiring urgent high-dose steroids to prevent fellow-eye involvement',
      'Because tocilizumab suppresses IL-6-driven acute-phase reactants, ESR and CRP become unreliable for tracking disease activity in patients on this drug — a clinically important and testable nuance',
      'GCA remains one of the classic ophthalmic emergencies optometrists must recognize and refer immediately, regardless of what maintenance therapy a patient may eventually be placed on',
    ],
    highYield: [
      'Tocilizumab (Actemra) is FDA-approved as a STEROID-SPARING agent for giant cell arteritis (GCA), reducing the cumulative glucocorticoid dose needed for long-term control',
      'CRITICAL: acute, vision-threatening GCA still requires IMMEDIATE high-dose systemic CORTICOSTEROIDS — tocilizumab is adjunctive/maintenance therapy, NOT a substitute for emergent steroid treatment',
      'Mechanism: IL-6 receptor antagonist monoclonal antibody',
      'Blunts the acute-phase response (ESR/CRP), making these markers unreliable for monitoring disease activity or infection while on therapy',
      'GCA is a classic optometry-relevant emergency — risk of ARTERITIC ANTERIOR ISCHEMIC OPTIC NEUROPATHY (AION) and permanent, often bilateral, vision loss if untreated',
      'Increased infection risk requires latent TB screening before initiation and vigilance for masked infection symptoms',
    ],
    references: [
      { label: 'Tocilizumab for giant cell arteritis: pivotal trial and steroid-sparing evidence', source: 'New England Journal of Medicine' },
      { label: 'Giant cell arteritis: diagnosis and management, including emergent treatment of vision loss', source: 'American Academy of Ophthalmology, Focal Points' },
    ],
  },

  // ===== CMV RETINITIS / HIV-AIDS =====
  {
    id: 'valganciclovir',
    genericName: 'Valganciclovir',
    brandNames: ['Valcyte'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Oral prodrug that is rapidly and almost completely converted to GANCICLOVIR after intestinal/hepatic absorption, achieving systemic ganciclovir bioavailability comparable to intravenous ganciclovir but via an oral route. Ganciclovir is a synthetic guanosine analog that is phosphorylated (initially by a viral kinase in CMV-infected cells) to its active triphosphate form, which competitively inhibits viral DNA polymerase and is incorporated into viral DNA, terminating chain elongation and halting CMV replication.',
    indications: [
      'CMV retinitis in immunocompromised patients (classically HIV/AIDS with low CD4 counts, also solid organ/stem cell transplant recipients) — both induction and maintenance therapy',
      'Prevention of CMV disease in high-risk solid organ transplant recipients',
    ],
    ocularUses: [
      'None — systemic medication; relevant to optometry as the standard ORAL/SYSTEMIC treatment and maintenance therapy for CMV retinitis, particularly in immunocompromised/HIV-AIDS patients. IMPORTANT CONTRAST: this is distinct from topical/intravitreal OPHTHALMIC GANCICLOVIR GEL, which is used for a completely different indication (herpetic/HSV keratitis) — do not confuse the two despite the shared active moiety',
    ],
    typicalDosing:
      'Oral, induction dosing typically 900 mg twice daily for 21 days (active CMV retinitis), followed by maintenance dosing of 900 mg once daily; dose adjustment required based on renal function',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Oral solution'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'No direct ocular toxicity from the drug itself — its ocular relevance is as the treatment for CMV retinitis (a sight-threatening, necrotizing retinal infection), not as a cause of ocular side effects',
        'Adequately treated CMV retinitis should show regression of retinal whitening/hemorrhage on serial fundus examination, which is the clinical marker of treatment response',
      ],
      systemic: [
        'BONE MARROW SUPPRESSION/NEUTROPENIA — the major, dose-limiting systemic toxicity requiring regular CBC monitoring; also thrombocytopenia and anemia',
        'Nephrotoxicity — requires renal function monitoring and dose adjustment',
        'Gastrointestinal upset (nausea, diarrhea)',
        'Headache, fever',
        'Reduced fertility/potential teratogenicity and carcinogenicity based on animal data — significant long-term safety consideration',
      ],
    },
    contraindications: [
      'Absolute neutrophil count less than 500 cells/microL or platelet count less than 25,000/microL at baseline (relative — requires hematologic assessment before starting)',
      'Known hypersensitivity to ganciclovir or valganciclovir',
    ],
    precautions: [
      'Regular complete blood count monitoring is essential, particularly during induction dosing, given significant myelosuppression risk',
      'Renal function-based dose adjustment is required, as the drug is renally cleared',
      'Considered a potential carcinogen and teratogen based on animal studies; effective contraception advised during and after therapy',
      'In HIV/AIDS patients, concurrent antiretroviral therapy and CD4 count trends are important context, as immune reconstitution can also affect CMV retinitis management (including risk of immune recovery uveitis)',
    ],
    drugInteractions: [
      'Zidovudine (AZT) and other myelosuppressive antiretrovirals — additive bone marrow suppression',
      'Mycophenolate mofetil — may increase levels of both drugs; increased risk of hematologic toxicity',
      'Probenecid and other renally competing drugs — may increase valganciclovir/ganciclovir levels',
      'Imipenem-cilastatin — increased risk of seizures when co-administered with ganciclovir-class agents',
    ],
    patientCounseling: [
      'Attend all scheduled blood count monitoring, particularly during the induction phase',
      'Report any fever, unusual bruising/bleeding, or signs of infection promptly, as these may indicate bone marrow suppression',
      'Understand this oral medication is different from ganciclovir eye gel/ointment used for herpes eye infections — they treat completely different conditions',
      'Continue maintenance dosing as prescribed even after retinitis appears to be controlled, since CMV retinitis can relapse, particularly with poor immune status',
    ],
    pregnancyLactation:
      'Based on animal data, valganciclovir/ganciclovir is considered a potential teratogen and carcinogen; use in pregnancy only if the benefit clearly outweighs risk, under specialist guidance. Not recommended during breastfeeding.',
    pediatricConsiderations: [
      'FDA-approved for prevention of CMV disease in pediatric kidney/heart transplant recipients at high risk, with weight/body-surface-area-based dosing distinct from adult flat dosing.',
      'Widely used off-label (not yet a formal FDA indication) for symptomatic congenital CMV infection with CNS/hearing involvement in neonates, at a studied oral dose of 16 mg/kg twice daily; the American Academy of Pediatrics recommends 6 months of therapy for moderate-to-severe congenital CMV disease to improve hearing and neurodevelopmental outcomes.',
    ],
    offLabelUses: ['Symptomatic congenital CMV infection with CNS/hearing involvement in neonates'],
    relatedConditionIds: ['cmv-retinitis'],
    monitoring: [
      'Complete blood count — frequent (e.g., 2-3 times weekly during induction) given significant neutropenia/myelosuppression risk',
      'Renal function — for dose adjustment given renal clearance',
      'Serial dilated fundus examination to assess CMV retinitis regression/response and to monitor for relapse or immune recovery uveitis in appropriately immune-reconstituted patients',
      'CD4 count and HIV viral load trend (in HIV/AIDS patients, in coordination with the treating infectious disease physician)',
    ],
    clinicalPearls: [
      'Valganciclovir is the oral prodrug that achieves ganciclovir levels comparable to IV therapy, allowing outpatient treatment of CMV retinitis without a permanent IV line — a major practical advance over IV ganciclovir alone',
      'CMV retinitis classically occurs in severely immunocompromised patients (historically AIDS with CD4 count below ~50 cells/microL, also transplant recipients on heavy immunosuppression) and presents with characteristic granular, "pizza pie" retinal whitening/hemorrhage following the vasculature',
      'A classic board distractor pairs this drug with topical ophthalmic GANCICLOVIR GEL (used for herpetic/HSV keratitis) — same active moiety conceptually, but completely different formulation, route, and indication; do not confuse systemic CMV retinitis treatment with topical herpetic keratitis treatment',
      'Bone marrow suppression is the dominant toxicity to remember, in contrast to cidofovir (nephrotoxicity/ocular hypotony) — a useful comparison within the anti-CMV drug family',
    ],
    highYield: [
      'Valganciclovir (Valcyte) is the standard ORAL treatment/maintenance therapy for CMV RETINITIS, particularly in HIV/AIDS and other immunocompromised patients',
      'It is an oral PRODRUG converted to ganciclovir — achieves systemic exposure comparable to IV ganciclovir without requiring IV access',
      'Major toxicity: BONE MARROW SUPPRESSION/NEUTROPENIA — requires frequent CBC monitoring, especially during induction dosing',
      'Also causes NEPHROTOXICITY requiring renal-based dose adjustment',
      'CONTRAST explicitly with topical/ophthalmic GANCICLOVIR GEL, which treats HERPETIC (HSV) KERATITIS — a completely different indication despite the related drug name/moiety',
      'CMV retinitis is a sight-threatening opportunistic infection classically seen with severe immunosuppression (e.g., very low CD4 count in HIV/AIDS)',
    ],
    references: [
      { label: 'Cytomegalovirus retinitis: diagnosis and management in immunocompromised patients', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Valcyte (valganciclovir) Prescribing Information', source: 'Genentech' },
    ],
  },
  {
    id: 'cidofovir',
    genericName: 'Cidofovir',
    brandNames: ['Vistide'],
    drugClass: 'Antivirals',
    mechanismOfAction:
      'Nucleotide (nucleoside monophosphate) analog antiviral that, unlike ganciclovir, does NOT require initial phosphorylation by a viral kinase — it is converted directly to its active diphosphate form by host cellular enzymes. The active metabolite competitively inhibits viral DNA polymerase and is incorporated into viral DNA, causing chain termination. Because activation is host-cell-dependent rather than viral-kinase-dependent, cidofovir retains activity against some ganciclovir-resistant CMV strains (which typically develop resistance via mutation of the viral kinase gene).',
    indications: [
      'CMV retinitis in immunocompromised patients (particularly HIV/AIDS), especially ganciclovir-resistant or refractory cases — historically administered intravenously (with intravitreal use also historically described)',
    ],
    ocularUses: [
      'None as a standard first-line ophthalmic formulation — systemic (IV) or historically intravitreal treatment for CMV retinitis, particularly ganciclovir-resistant disease; relevant to optometry chiefly for its distinctive, dose-limiting OCULAR toxicity',
    ],
    typicalDosing:
      'Intravenous, historically dosed intermittently (e.g., induction then every-other-week maintenance) with MANDATORY co-administration of intravenous saline hydration and oral PROBENECID to reduce nephrotoxicity; intravitreal administration has also been described historically for CMV retinitis but carries a high rate of ocular toxicity',
    concentrations: ['N/A — IV infusion (historically also intravitreal injection); not a topical ophthalmic formulation'],
    formulations: ['Injection'],
    route: 'Intravenous infusion (historically also intravitreal injection)',
    sideEffects: {
      ocular: [
        'ANTERIOR UVEITIS/IRITIS — a classic, dose-limiting ocular toxicity, particularly with intravitreal use but also reported with systemic administration',
        'OCULAR HYPOTONY — from direct ciliary body toxicity reducing aqueous production; this is one of the single most specifically testable "which drug causes hypotony" facts in ocular pharmacology and is a hallmark, dose-limiting adverse effect of cidofovir',
        'Can lead to a hypotony-related maculopathy or globe/visual complications if severe and sustained',
        'These ocular toxicities have significantly limited cidofovir\'s use, particularly via the intravitreal route',
      ],
      systemic: [
        'NEPHROTOXICITY — the major, dose-limiting systemic toxicity (proximal renal tubular damage); mitigated by mandatory IV hydration and co-administration of PROBENECID, which reduces active renal tubular secretion of the drug',
        'Neutropenia',
        'Metabolic acidosis (Fanconi-like syndrome) with proximal tubular injury',
        'Nausea, vomiting',
        'Probenecid co-administration itself commonly causes fever, rash, and GI upset, and has its own drug interactions to consider',
      ],
    },
    contraindications: [
      'Significant pre-existing renal impairment (elevated serum creatinine or proteinuria) — requires renal function assessment before each dose',
      'Known hypersensitivity to cidofovir or to probenecid/other sulfonamide-related compounds (relevant given mandatory probenecid co-administration)',
      'Concurrent use of other nephrotoxic agents (relative contraindication)',
    ],
    precautions: [
      'Mandatory pre-treatment IV saline hydration and oral probenecid co-administration are required with EVERY dose to reduce nephrotoxicity risk',
      'Renal function must be checked before each infusion; dose is withheld or adjusted based on creatinine/proteinuria changes',
      'Ophthalmic monitoring for anterior uveitis and intraocular pressure/hypotony is important during therapy given the drug\'s characteristic ocular toxicity',
      'Largely reserved for ganciclovir-resistant or refractory CMV retinitis given its toxicity profile relative to valganciclovir/ganciclovir',
    ],
    drugInteractions: [
      'Other nephrotoxic drugs (aminoglycosides, amphotericin B, IV pentamidine, NSAIDs) — additive nephrotoxicity, generally avoided concurrently',
      'Probenecid interacts with numerous renally cleared drugs (e.g., can reduce clearance of certain antibiotics, NSAIDs, and other agents) — relevant given its mandatory co-administration',
      'Other myelosuppressive agents — additive bone marrow toxicity',
    ],
    patientCounseling: [
      'Understand that mandatory hydration and probenecid must accompany every infusion to protect the kidneys',
      'Report any eye pain, redness, light sensitivity, or blurred vision promptly, as these may indicate drug-induced uveitis or hypotony requiring ophthalmic evaluation',
      'Attend all scheduled renal function monitoring appointments; doses may be adjusted or held based on results',
      'Report decreased urine output or other signs of kidney problems',
    ],
    pregnancyLactation:
      'Considered a potential teratogen and carcinogen based on animal data; use in pregnancy only if benefit clearly outweighs risk, under close specialist supervision. Not recommended during breastfeeding.',
    pediatricConsiderations: [
      'Used off-label in pediatric immunocompromised patients (hematopoietic stem cell transplant, solid organ transplant) for life-threatening adenovirus and BK virus infections; modified low-dose regimens (e.g., 1 mg/kg three times weekly) are increasingly favored over conventional dosing (5 mg/kg weekly) to reduce nephrotoxicity risk, which appears lower with modified dosing (~4%) than conventional dosing (~15%).',
      'Nephrotoxicity rates in immunocompetent children treated for adenovirus appear lower than in severely immunocompromised pediatric populations, though renal monitoring remains essential regardless of dosing strategy.',
    ],
    offLabelUses: [
      'Severe/life-threatening adenovirus infection in immunocompromised patients (including pediatric HSCT recipients)',
      'BK virus-associated nephropathy in transplant recipients',
    ],
    relatedConditionIds: ['cmv-retinitis'],
    monitoring: [
      'Renal function (serum creatinine, urine protein) BEFORE EACH dose — a strict requirement given significant nephrotoxicity risk',
      'Complete blood count (neutropenia)',
      'Intraocular pressure and anterior chamber examination for uveitis/hypotony — important given the drug\'s characteristic ocular toxicity',
      'Serial dilated fundus examination to assess CMV retinitis treatment response',
    ],
    clinicalPearls: [
      'Cidofovir\'s activation does NOT depend on a viral kinase (unlike ganciclovir), which is why it retains activity against ganciclovir-resistant CMV strains that have developed resistance via viral kinase mutations — an important mechanistic distinction',
      'The combination of ANTERIOR UVEITIS and OCULAR HYPOTONY from ciliary body toxicity is one of the most classically board-tested, drug-specific ocular pharmacology facts — when a question describes hypotony as a dose-limiting toxicity of an anti-CMV agent, think cidofovir',
      'Nephrotoxicity is severe enough that probenecid and aggressive IV hydration are MANDATORY co-therapies with every dose, not optional adjuncts — a distinctive administration requirement worth remembering',
      'Its considerable ocular and renal toxicity has made cidofovir a second-line/reserve agent for ganciclovir-resistant CMV retinitis rather than a first-line therapy',
    ],
    highYield: [
      'Cidofovir causes ANTERIOR UVEITIS and OCULAR HYPOTONY (from ciliary body toxicity) as its classic, dose-limiting OCULAR side effect — one of the single most specifically testable "which drug causes hypotony" facts in ocular pharmacology',
      'Used for CMV retinitis, particularly GANCICLOVIR-RESISTANT cases, because its activation does not require the viral kinase that mediates ganciclovir resistance',
      'Major systemic toxicity: NEPHROTOXICITY — requires mandatory IV hydration AND co-administration of PROBENECID with every dose',
      'Renal function must be checked BEFORE EACH dose given the severity of nephrotoxicity risk',
      'Contrast with valganciclovir/ganciclovir: cidofovir\'s dose-limiting toxicities are renal AND ocular (uveitis/hypotony), whereas ganciclovir-class agents are primarily myelosuppressive',
    ],
    references: [
      { label: 'Cidofovir-associated ocular hypotony and uveitis in the treatment of CMV retinitis', source: 'American Journal of Ophthalmology' },
      { label: 'Vistide (cidofovir) Prescribing Information', source: 'Gilead Sciences' },
    ],
  },

  // ===== WILSON DISEASE =====
  {
    id: 'penicillamine',
    genericName: 'Penicillamine',
    brandNames: ['Cuprimine', 'Depen'],
    drugClass: 'Other',
    mechanismOfAction:
      'Copper-chelating agent that binds free copper ions, forming a soluble complex that is excreted renally, thereby promoting net removal of pathologically accumulated copper from the body. In Wilson disease (an autosomal recessive disorder of impaired hepatic copper excretion via ATP7B), penicillamine mobilizes copper deposited in the liver, basal ganglia, and other tissues, including the cornea, and reduces further deposition. It also has an independent immunomodulatory mechanism (interfering with disulfide bond formation/collagen cross-linking) that underlies its historical use in rheumatoid arthritis.',
    indications: [
      'Wilson disease (hepatolenticular degeneration) — first-line copper-chelating therapy',
      'Rheumatoid arthritis (historical/largely replaced indication, superseded by other DMARDs given its toxicity profile)',
      'Cystinuria (reduces cystine stone formation via a distinct disulfide-exchange mechanism)',
    ],
    ocularUses: [
      'None as a primary ocular indication, but DIRECTLY relevant to optometry because Wilson disease itself causes the classic KAYSER-FLEISCHER RING (copper deposition in the peripheral corneal Descemet membrane), and effective penicillamine therapy is monitored in part by tracking regression of this sign on slit lamp exam',
    ],
    typicalDosing: 'Oral, typically titrated up to approximately 1-1.5 g/day in divided doses for Wilson disease, taken on an empty stomach; pyridoxine (vitamin B6) supplementation is often co-prescribed',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Capsule', 'Tablet'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'With EFFECTIVE treatment, the Kayser-Fleischer ring (a manifestation of the underlying disease, not the drug) can gradually FADE/REGRESS on slit lamp examination — an important clinical monitoring correlation for optometrists tracking treatment response',
        'Rare but recognized DRUG-INDUCED optic neuritis',
        'Rare drug-induced myasthenia-like syndrome (penicillamine-induced myasthenia gravis) can produce ptosis and diplopia, distinct from the underlying Wilson disease itself and generally reversible upon drug discontinuation',
      ],
      systemic: [
        'Bone marrow suppression (leukopenia, thrombocytopenia, aplastic anemia in severe cases) — requires regular monitoring',
        'Proteinuria and nephrotoxicity, including rare membranous nephropathy',
        'Skin changes (rash, and with long-term use, elastosis perforans serpiginosa and other dermatologic changes)',
        'Drug-induced autoimmune syndromes, including penicillamine-induced myasthenia gravis and, rarely, a lupus-like syndrome',
        'Taste disturbance (dysgeusia) and loss of appetite',
        'Pyridoxine (B6) deficiency — routine supplementation is standard practice',
      ],
    },
    contraindications: [
      'Known hypersensitivity to penicillamine (including patients with penicillin allergy, given some cross-reactivity concern)',
      'Pre-existing significant bone marrow suppression or severe renal impairment (relative contraindication requiring careful risk-benefit assessment)',
    ],
    precautions: [
      'Regular blood count and urinalysis monitoring required throughout therapy given bone marrow and renal toxicity risk',
      'Pyridoxine supplementation is routinely co-administered to prevent vitamin B6 deficiency',
      'New-onset ptosis, diplopia, or muscle weakness in a patient on penicillamine should raise suspicion for drug-induced myasthenia, which is generally reversible with dose reduction or discontinuation',
      'Dosing must be individualized and slowly titrated with close laboratory follow-up, particularly at initiation',
    ],
    drugInteractions: [
      'Iron and other mineral supplements/antacids — reduce penicillamine absorption; administration should be separated in time',
      'Other myelosuppressive or nephrotoxic drugs — additive toxicity risk',
      'Gold compounds and other agents historically used for rheumatoid arthritis — additive toxicity if combined (largely of historical relevance)',
    ],
    patientCounseling: [
      'Take on an empty stomach, separated from food, iron supplements, and antacids to ensure adequate absorption',
      'Attend all scheduled blood count and urine protein monitoring appointments',
      'Report any new eyelid drooping, double vision, unusual bruising/bleeding, rash, or decreased urine output promptly',
      'Understand that visible improvement of any corneal copper ring (Kayser-Fleischer ring) noted by an eye care provider is a positive sign of treatment response and should be reported to the treating hepatologist/neurologist',
    ],
    pregnancyLactation:
      'Generally used with caution in pregnancy; some experts recommend continuing at a reduced dose in Wilson disease given the risk of severe maternal hepatic decompensation if therapy is stopped, though it does carry teratogenic potential (connective tissue effects) — management should be individualized with a specialist. Use caution during breastfeeding; coordinate with the prescribing physician.',
    pediatricConsiderations: [
      'Off-label pediatric Wilson disease dosing is weight-based, approximately 20 mg/kg/day in 2-3 divided doses (maximum 1000 mg/day), typically started low (2.5-5 mg/kg/day) and up-titrated over 3-6 months.',
      'Was historically used off-label for pediatric lead poisoning/chelation at doses of 25-30 mg/kg/day, though lower doses reduce adverse effects with similar efficacy; other chelators (e.g., succimer, sodium calcium edetate) are now generally preferred as more effective/better-tolerated first-line options in children.',
    ],
    offLabelUses: ['Chronic lead poisoning/chelation in children (largely superseded by other chelating agents)'],
    relatedConditionIds: ['wilson-disease-ocular'],
    monitoring: [
      'Complete blood count and urinalysis (proteinuria) — regularly, particularly during dose titration, given bone marrow and renal toxicity risk',
      'Slit lamp examination to monitor Kayser-Fleischer ring status as a supportive (though not sole) indicator of treatment response — the ring may fade/regress with effective long-term chelation',
      'Copper studies (serum ceruloplasmin, 24-hour urine copper) coordinated with the treating hepatologist/neurologist to assess disease control',
      'Clinical assessment for new ptosis, diplopia, or muscle weakness (drug-induced myasthenia-like syndrome)',
    ],
    clinicalPearls: [
      'Wilson disease is a classic disease-library topic tying directly to ocular findings: the KAYSER-FLEISCHER RING is copper deposition in the peripheral corneal Descemet membrane, best appreciated on slit lamp (sometimes with gonioscopy) as a golden-brown to green ring near the limbus',
      'A high-yield monitoring correlation: with EFFECTIVE penicillamine (or other chelation) therapy, the Kayser-Fleischer ring can gradually FADE, giving optometrists a visible, trackable sign of systemic treatment response over serial exams',
      'Distinguish disease-related findings from DRUG-related findings: the Kayser-Fleischer ring is from the DISEASE (Wilson disease copper deposition); rare optic neuritis and a reversible myasthenia-like syndrome (ptosis/diplopia) are from the DRUG (penicillamine) itself — a classic board distinction',
      'Penicillamine has been largely replaced by other DMARDs for rheumatoid arthritis given its toxicity profile, but remains a mainstay (along with trientine and zinc) for Wilson disease',
    ],
    highYield: [
      'Penicillamine is FIRST-LINE copper-chelating therapy for WILSON DISEASE, which causes the classic KAYSER-FLEISCHER RING (copper deposition in Descemet membrane)',
      'With effective treatment, the Kayser-Fleischer ring can gradually FADE/REGRESS — an important slit-lamp monitoring correlation for tracking systemic treatment response',
      'Rare but classic DRUG-induced (not disease-induced) ocular effects: optic neuritis, and a reversible MYASTHENIA-LIKE SYNDROME causing ptosis/diplopia — distinguish these from the disease-caused Kayser-Fleischer ring',
      'Major systemic toxicities: bone marrow suppression and proteinuria/nephrotoxicity, requiring regular CBC and urinalysis monitoring',
      'Pyridoxine (vitamin B6) supplementation is routinely co-prescribed to prevent deficiency',
      'Historically used for rheumatoid arthritis but largely replaced by other DMARDs given its toxicity profile',
    ],
    references: [
      { label: 'Wilson disease: ocular manifestations and the Kayser-Fleischer ring', source: 'Survey of Ophthalmology' },
      { label: 'Cuprimine (penicillamine) Prescribing Information', source: 'Bausch Health' },
    ],
  },

  // ===== DIABETES / GLP-1 (EMERGING) =====
  {
    id: 'semaglutide',
    genericName: 'Semaglutide',
    brandNames: ['Ozempic', 'Wegovy', 'Rybelsus'],
    drugClass: 'Endocrine',
    mechanismOfAction:
      'Glucagon-like peptide-1 (GLP-1) receptor agonist. Semaglutide mimics endogenous GLP-1, an incretin hormone, binding GLP-1 receptors to stimulate glucose-dependent insulin secretion, suppress inappropriate glucagon secretion, slow gastric emptying, and promote satiety/reduce food intake via central appetite pathways. These combined effects produce substantial improvement in glycemic control and, particularly at higher doses, significant weight loss.',
    indications: [
      'Type 2 diabetes mellitus (glycemic control) — injectable (Ozempic) and oral (Rybelsus) formulations',
      'Chronic weight management/obesity (Wegovy formulation, higher dosing)',
      'Reduction of major adverse cardiovascular events in patients with type 2 diabetes and established cardiovascular disease',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular monitoring given emerging associations with optic nerve and diabetic retinal findings'],
    typicalDosing: 'Subcutaneous injection, typically titrated weekly from a low starting dose (e.g., 0.25 mg/week) up to a maintenance dose (commonly 1-2.4 mg/week depending on indication/formulation); oral formulation (Rybelsus) dosed daily on an empty stomach',
    concentrations: ['N/A — subcutaneous injection (also available as an oral tablet, Rybelsus) — not an ophthalmic formulation'],
    formulations: ['Injection', 'Tablet'],
    route: 'Subcutaneous injection (also oral tablet formulation)',
    sideEffects: {
      ocular: [
        'EMERGING/HIGH-YIELD CURRENT TOPIC: recent studies (2024) have identified an ASSOCIATION between semaglutide/GLP-1 receptor agonist use and increased risk of NON-ARTERITIC ANTERIOR ISCHEMIC OPTIC NEUROPATHY (NAION) — this is an evolving area of research and causality is still being studied, but it is highly relevant current literature optometrists should be aware of and should factor into differential diagnosis discussions for new NAION presentations',
        'Paradoxical early WORSENING of diabetic retinopathy has been observed with rapid glycemic improvement on semaglutide, most notably reported in the SUSTAIN-6 cardiovascular outcomes trial — the same general phenomenon described with rapid-acting insulin and other agents that produce fast glycemic control (early worsening theory relates to rapid normalization of blood glucose transiently increasing retinal ischemia/VEGF-driven progression before longer-term benefit accrues)',
        'No direct ocular toxicity syndrome (e.g., no characteristic retinopathy or corneal deposition) attributable to the drug\'s core pharmacology outside of the above associations',
      ],
      systemic: [
        'Gastrointestinal effects (nausea, vomiting, diarrhea, constipation) — most common, often dose-limiting, particularly during dose titration',
        'Risk of pancreatitis',
        'Gallbladder disease (cholelithiasis/cholecystitis), particularly with rapid weight loss',
        'Boxed warning: risk of thyroid C-cell tumors observed in rodent studies — contraindicated in patients with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2',
        'Hypoglycemia risk when combined with insulin or sulfonylureas',
        'Acute kidney injury (typically secondary to dehydration from GI side effects)',
      ],
    },
    contraindications: [
      'Personal or family history of medullary thyroid carcinoma',
      'Multiple Endocrine Neoplasia syndrome type 2 (MEN2)',
      'Known hypersensitivity to semaglutide',
    ],
    precautions: [
      'Patients with pre-existing diabetic retinopathy should be counseled about the possibility of early, transient worsening with rapid glycemic improvement and should have close retinal follow-up when starting therapy, particularly if baseline retinopathy is more than mild',
      'New, sudden, painless vision loss in a patient on semaglutide should prompt urgent evaluation for NAION given the emerging reported association, in addition to standard NAION risk factor assessment',
      'Dose should be titrated slowly to minimize GI side effects',
      'Use with caution in patients with a history of pancreatitis or gallbladder disease',
    ],
    drugInteractions: [
      'Insulin and sulfonylureas — additive hypoglycemia risk, often requiring dose reduction of these other agents when semaglutide is added',
      'Oral medications requiring rapid gastric absorption — delayed gastric emptying from semaglutide can alter the absorption timing of concurrently administered oral drugs',
      'Warfarin — some reports of altered INR with delayed gastric emptying; monitor as clinically indicated',
    ],
    patientCounseling: [
      'Report any sudden, painless vision loss immediately for urgent evaluation, given the emerging association with NAION',
      'If you have known diabetic retinopathy, attend closer retinal follow-up when starting this medication, as rapid blood sugar improvement can, paradoxically, cause temporary worsening before long-term benefit',
      'Report persistent abdominal pain (possible pancreatitis or gallbladder disease) promptly',
      'Understand this medication is taken by injection (or, for Rybelsus, as a daily oral tablet on an empty stomach) and requires gradual dose titration to minimize GI side effects',
    ],
    pregnancyLactation:
      'Not recommended in pregnancy — should generally be discontinued at least 2 months before a planned pregnancy given the long half-life; animal data suggest potential fetal risk. Not recommended during breastfeeding due to limited data.',
    pediatricConsiderations: [
      'Semaglutide (Wegovy formulation) is FDA-approved for chronic weight management in adolescents ≥12 years with obesity (BMI ≥95th percentile), using the same dose-escalation schedule as adults up to a 2.4 mg weekly maintenance dose.',
      'Safety and efficacy for weight loss have not been established in children under 12 years of age.',
      'Pediatric use for type 2 diabetes (Ozempic) is less well established than the approved adolescent weight-management indication; use should be individualized with pediatric endocrinology.',
    ],
    relatedConditionIds: ['diabetes-mellitus-ocular-overview', 'diabetic-retinopathy', 'naion'],
    monitoring: [
      'HbA1c and glycemic control trends',
      'Baseline and follow-up dilated fundus/retinal examination in patients with pre-existing diabetic retinopathy, particularly around initiation given the risk of early paradoxical worsening with rapid glycemic control',
      'Prompt neuro-ophthalmic evaluation for any acute, painless vision loss to assess for NAION, given the emerging reported association',
      'Renal function, particularly if significant GI side effects/dehydration occur',
      'Thyroid symptom surveillance (though routine calcitonin/thyroid ultrasound screening is not generally recommended in average-risk patients)',
    ],
    clinicalPearls: [
      'This is one of the most current, actively evolving topics in ocular pharmacology: a 2024 cohort study first drew attention to a statistical association between semaglutide/GLP-1 receptor agonist exposure and NAION; the literature and causal mechanism are still being actively studied and refined, but optometrists should know this association exists and factor it into NAION differential/history-taking',
      'The paradoxical early worsening of diabetic retinopathy with rapid glycemic control is a recurring theme across diabetes therapies (classically described with insulin, and also observed with semaglutide in the SUSTAIN-6 trial) — rapid HbA1c improvement is not risk-free for the retina in patients with pre-existing retinopathy and warrants closer early follow-up',
      'Semaglutide/GLP-1 agonists are now extremely widely prescribed (both for diabetes and for weight loss under brand names like Wegovy), meaning optometrists will very likely be seeing large numbers of patients on this class of drug, raising the practical importance of these two ocular associations',
    ],
    highYield: [
      'EMERGING high-yield fact: semaglutide/GLP-1 receptor agonists have been associated (2024 studies) with increased risk of NON-ARTERITIC ANTERIOR ISCHEMIC OPTIC NEUROPATHY (NAION) — an evolving research area but important current literature to know',
      'Paradoxical EARLY WORSENING of diabetic retinopathy can occur with rapid glycemic improvement on semaglutide (reported in the SUSTAIN-6 trial) — same phenomenon described with rapid insulin-driven glycemic control',
      'Mechanism: GLP-1 receptor agonist — stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, promotes satiety',
      'Boxed warning for thyroid C-cell tumor risk — contraindicated with personal/family history of medullary thyroid carcinoma or MEN2',
      'Patients with pre-existing diabetic retinopathy starting semaglutide should have closer retinal follow-up around initiation given the early-worsening phenomenon',
      'Extremely widely prescribed for both diabetes and weight loss (Ozempic/Wegovy/Rybelsus), making these ocular associations highly practically relevant for optometry',
    ],
    references: [
      { label: 'Glucagon-like peptide-1 receptor agonists and risk of nonarteritic anterior ischemic optic neuropathy', source: 'JAMA Ophthalmology' },
      { label: 'Effects of semaglutide on diabetic retinopathy (SUSTAIN-6 trial)', source: 'New England Journal of Medicine' },
    ],
  },
]
