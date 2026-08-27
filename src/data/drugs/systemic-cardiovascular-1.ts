import type { Drug } from '../../types/drug'

export const systemicCardiovascular1: Drug[] = [
  // ===== ANTIARRHYTHMIC =====
  {
    id: 'amiodarone',
    genericName: 'Amiodarone',
    brandNames: ['Cordarone', 'Pacerone'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Class III antiarrhythmic that primarily blocks potassium channels (prolonging the cardiac action potential and refractory period), with additional sodium channel, calcium channel, and beta-adrenergic blocking properties (mixed Vaughan-Williams class I-IV activity). It is highly lipophilic and iodine-rich, accumulating extensively in tissues throughout the body, including the cornea, lens, optic nerve, skin, thyroid, liver, and lungs, which underlies its long half-life (weeks to months) and its distinctive multi-organ toxicity profile.',
    indications: [
      'Life-threatening recurrent ventricular fibrillation',
      'Hemodynamically unstable ventricular tachycardia',
      'Atrial fibrillation (rhythm control, off-label but widely used)',
      'Refractory supraventricular arrhythmias',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing:
      'Oral loading dose 800-1600 mg/day in divided doses for 1-3 weeks, then taper to a maintenance dose of 100-400 mg/day; IV loading/maintenance protocols used in acute settings',
    concentrations: ['N/A — oral/IV systemic medication (100 mg, 200 mg, 400 mg tablets; IV solution)'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Corneal verticillata (vortex keratopathy) - whorl-like golden-brown or gray deposits in the corneal epithelium, occurring in nearly 100% of patients on long-term therapy (a lipid/drug-complex deposit, not a true lipidosis); dose- and duration-dependent, usually visually insignificant',
        'Optic neuropathy (amiodarone-induced optic neuropathy, AION-like) - insidious, often bilateral, mild-to-moderate vision loss with optic disc edema; classically more gradual in onset and more often bilateral than typical nonarteritic AION, though clinical overlap makes distinction difficult',
        'Photosensitivity and blue-gray skin discoloration of periorbital and facial skin with chronic use',
        'Rare: lens opacities/anterior subcapsular cataract with prolonged use',
        'Rare: dry eye, blurred vision, halos around lights',
      ],
      systemic: [
        'Pulmonary toxicity/interstitial pneumonitis and pulmonary fibrosis (potentially fatal, most serious systemic toxicity)',
        'Thyroid dysfunction - both hypothyroidism and hyperthyroidism (due to high iodine content)',
        'Hepatotoxicity (elevated liver enzymes, rare hepatic failure)',
        'Bradycardia, AV block, QT prolongation, proarrhythmia (torsades de pointes)',
        'Peripheral neuropathy, tremor, ataxia',
        'Blue-gray skin discoloration ("amiodarone slate")',
      ],
    },
    contraindications: [
      'Severe sinus node dysfunction with severe sinus bradycardia or syncope (without a pacemaker)',
      'Second- or third-degree AV block (without a pacemaker)',
      'Cardiogenic shock',
      'Known iodine hypersensitivity',
    ],
    precautions: [
      'Baseline and periodic ophthalmologic, pulmonary, thyroid, hepatic, and dermatologic monitoring recommended given the extensive tissue accumulation and multi-organ toxicity profile',
      'Long tissue half-life (weeks to months) means toxicity can develop or persist well after dose changes or discontinuation',
      'Caution in patients with pre-existing optic nerve disease or other risk factors for ischemic optic neuropathy',
    ],
    drugInteractions: [
      'Warfarin - amiodarone potentiates anticoagulant effect (inhibits warfarin metabolism); INR must be monitored closely and warfarin dose often reduced',
      'Digoxin - amiodarone increases digoxin levels, raising risk of digoxin toxicity',
      'Other QT-prolonging drugs - additive risk of torsades de pointes',
      'Simvastatin and other CYP3A4 substrates - increased risk of myopathy/rhabdomyolysis',
      'Beta-blockers and calcium channel blockers - additive bradycardia/AV block',
    ],
    patientCounseling: [
      'Report any new visual blurring, dimming, halos, or visual field changes promptly, as these may signal optic nerve toxicity',
      'Corneal deposits (verticillata) are extremely common with long-term use and are usually not vision-threatening',
      'Use sun protection - photosensitivity and skin discoloration are common with chronic therapy',
      'Attend scheduled eye examinations for baseline and periodic monitoring while on this medication',
    ],
    pregnancyLactation:
      'Generally avoided in pregnancy unless no safer alternative exists - associated with fetal and neonatal thyroid dysfunction due to iodine content; crosses the placenta. Contraindicated during breastfeeding due to high concentration in breast milk.',
    monitoring: [
      'Baseline dilated fundus and slit lamp exam before or shortly after starting therapy, with periodic follow-up (e.g., annually or with any visual symptoms)',
      'Slit lamp exam for corneal verticillata (expected finding, not itself an indication to stop the drug)',
      'Dilated fundus exam and optic nerve assessment (disc appearance, color vision, visual fields) if optic neuropathy is suspected - warrants urgent evaluation and communication with the prescribing physician',
      'Visual acuity and color vision testing if optic neuropathy is suspected',
      'Coordinate care with prescribing physician regarding systemic monitoring (thyroid, liver, pulmonary function)',
    ],
    clinicalPearls: [
      'Corneal verticillata from amiodarone is essentially universal with long-term use and is NOT an indication to discontinue the drug - it is a benign, expected finding that rarely affects vision',
      'Amiodarone-induced optic neuropathy is far less common than verticillata but is the vision-threatening concern; distinguishing it from typical NAION (more insidious onset, more often bilateral, less associated with the classic NAION risk factor profile) is a classic board discussion point',
      'Other drugs causing corneal verticillata (for differential/board recall): chloroquine/hydroxychloroquine, indomethacin, tamoxifen, phenothiazines, Fabry disease (non-drug cause)',
      'Because of its very long tissue half-life, ocular and systemic toxicity can emerge or persist for weeks to months after the drug is stopped',
    ],
    highYield: [
      'Corneal verticillata (vortex keratopathy) occurs in NEARLY ALL patients on long-term amiodarone - the single most tested ocular fact for this drug',
      'Amiodarone-associated optic neuropathy is rare but board-tested; distinguish from classic NAION by typically more gradual onset, bilaterality, and less optic disc crowding requirement',
      'Verticillata alone is NOT a reason to discontinue amiodarone - only vision-threatening optic neuropathy warrants stopping the drug (in consultation with the prescribing physician)',
      'Amiodarone potentiates warfarin (increases INR) and digoxin levels - clinically important drug interactions to recognize',
      'Photosensitivity and blue-gray skin discoloration are classic dermatologic side effects from chronic iodine-rich drug accumulation',
    ],
    references: [
      { label: 'Amiodarone ocular toxicity and corneal verticillata', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Systemic medications with ocular side effects', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== CARDIAC GLYCOSIDE =====
  {
    id: 'digoxin',
    genericName: 'Digoxin',
    brandNames: ['Lanoxin'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Cardiac glycoside that inhibits the Na+/K+-ATPase pump in cardiac myocytes, increasing intracellular sodium and, via the sodium-calcium exchanger, increasing intracellular calcium. This produces a positive inotropic effect (increased contractility) and, through increased vagal tone, slows AV nodal conduction (negative chronotropic/dromotropic effect). The same Na+/K+-ATPase is present in retinal photoreceptors (particularly cones), and its inhibition is believed to underlie digoxin-associated visual disturbances, including color vision changes.',
    indications: ['Heart failure with reduced ejection fraction', 'Atrial fibrillation (rate control)', 'Atrial flutter'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral maintenance dose typically 0.125-0.25 mg once daily, adjusted based on renal function, age, and serum digoxin level (narrow therapeutic index, 0.5-2.0 ng/mL, with growing preference for lower target levels)',
    concentrations: ['N/A — oral/IV systemic medication (0.125 mg, 0.25 mg tablets; oral solution; IV formulation)'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Xanthopsia (yellow-tinted vision) - the classic and most specific visual sign of digoxin toxicity',
        'Chromatopsia (other color vision disturbances, including green or blue tinting) - less common than xanthopsia but also reported',
        'Blurred vision',
        'Halos around lights (often described as bright, glare-like halos)',
        'Flickering or "snowy" vision (photopsias)',
        'Decreased visual acuity and scotomata (with significant toxicity)',
      ],
      systemic: [
        'Nausea, vomiting, anorexia (classic early GI signs of toxicity)',
        'Cardiac arrhythmias, including bradycardia, AV block, and life-threatening ventricular arrhythmias (the most dangerous toxicity)',
        'Confusion, fatigue, headache',
        'Narrow therapeutic index - toxicity risk increased by hypokalemia, hypomagnesemia, hypercalcemia, and renal impairment',
      ],
    },
    contraindications: [
      'Ventricular fibrillation',
      'Hypertrophic obstructive cardiomyopathy (relative contraindication)',
      'Digitalis toxicity (do not redose)',
      'Known hypersensitivity to digoxin',
    ],
    precautions: [
      'Narrow therapeutic index - dose adjustment needed in renal impairment and in elderly patients',
      'Hypokalemia significantly increases risk of digoxin toxicity (competes with digoxin for the same Na+/K+-ATPase binding site) - a classic pharmacology teaching point, often relevant in patients also on diuretics',
      'Visual symptoms (especially xanthopsia) may be an early clinical clue of toxicity, sometimes preceding overt cardiac signs',
    ],
    drugInteractions: [
      'Diuretics (loop and thiazide) - can cause hypokalemia/hypomagnesemia, increasing digoxin toxicity risk',
      'Amiodarone - increases digoxin serum levels significantly, requiring digoxin dose reduction',
      'Verapamil, quinidine - increase digoxin levels via reduced clearance/protein-binding displacement',
      'Calcium channel blockers and beta-blockers - additive bradycardia/AV nodal blockade',
    ],
    patientCounseling: [
      'Report any new yellow-tinted vision, halos around lights, or other visual disturbances promptly - these can be an early sign of drug toxicity',
      'Report nausea, vomiting, loss of appetite, or irregular heartbeat to the prescribing physician',
      'Attend scheduled blood tests to monitor digoxin level and electrolytes',
    ],
    pregnancyLactation:
      'Considered relatively low risk in pregnancy when clinically indicated for maternal cardiac conditions; crosses the placenta but has a long history of use in pregnant patients with cardiac disease. Excreted in breast milk in low amounts; generally considered compatible with breastfeeding under physician supervision.',
    monitoring: [
      'Ask about color vision changes (yellow vision), halos, and blurred vision at exams in patients on digoxin, especially if dose has recently changed',
      'Color vision testing (e.g., Ishihara, Farnsworth) if toxicity is suspected',
      'Coordinate with the prescribing physician if visual symptoms suggest toxicity - serum digoxin level and electrolytes should be checked urgently',
      'No routine dilated exam schedule is specifically required for digoxin, but visual symptom history should be part of the review of systems',
    ],
    clinicalPearls: [
      'Xanthopsia (yellow vision) is one of the most classic, frequently tested drug-induced visual symptoms in all of pharmacology - historically famously discussed in relation to Vincent van Gogh possibly being treated with digitalis',
      'Visual symptoms often correlate with elevated serum digoxin levels and may appear before life-threatening cardiac arrhythmias develop, making them a valuable early warning sign',
      'Hypokalemia dramatically potentiates digoxin toxicity even at "therapeutic" serum digoxin levels - a classic cross-topic board link between diuretics and digoxin',
      'The visual effects are thought to result from digoxin inhibiting Na+/K+-ATPase in retinal cone photoreceptors, altering color processing',
    ],
    highYield: [
      'XANTHOPSIA (yellow-tinted vision) is the classic, highest-yield ocular sign of digoxin toxicity - the single most tested fact for this drug',
      'Other chromatopsias (green/blue tinting), halos around lights, and blurred vision can also occur with toxicity',
      'Visual symptoms can be an early warning sign of systemic digoxin toxicity, sometimes preceding dangerous cardiac arrhythmias',
      'Hypokalemia increases the risk of digoxin toxicity at any given serum level - relevant when patients are also on diuretics',
      'Mechanism: inhibition of Na+/K+-ATPase in retinal photoreceptors is the proposed basis for the visual/color disturbances',
    ],
    references: [
      { label: 'Digoxin-induced xanthopsia and chromatopsia', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Systemic medications with ocular side effects', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== BETA BLOCKER (NON-SELECTIVE, SYSTEMIC) =====
  {
    id: 'propranolol',
    genericName: 'Propranolol',
    brandNames: ['Inderal', 'Inderal LA'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Non-selective beta-adrenergic receptor antagonist, blocking both beta-1 (cardiac) and beta-2 (bronchial, vascular, and lacrimal/ciliary) receptors. Reduces heart rate, myocardial contractility, and cardiac output, and lowers blood pressure via decreased renin release. Also crosses the blood-brain barrier (highly lipophilic), producing CNS effects. Systemic beta-blockade reduces beta-2-receptor-mediated aqueous humor production and lacrimal gland secretion by the same basic mechanism exploited therapeutically by topical ophthalmic beta-blockers such as timolol.',
    indications: [
      'Hypertension',
      'Angina pectoris',
      'Cardiac arrhythmias (rate control, supraventricular tachycardia)',
      'Migraine prophylaxis',
      'Essential tremor',
      'Performance/situational anxiety (off-label)',
      'Hypertrophic cardiomyopathy',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral 40-160 mg twice daily (immediate release) or 80-160 mg once daily (long-acting/Inderal LA), titrated to response',
    concentrations: ['N/A — oral systemic medication (10 mg, 20 mg, 40 mg, 60 mg, 80 mg tablets; 60/80/120/160 mg extended-release capsules)'],
    route: 'Oral (also available IV for acute settings)',
    sideEffects: {
      ocular: [
        'Decreased tear production/aqueous tear deficiency (dry eye) - systemic beta-blockade reduces lacrimal gland secretion, same mechanism as topical beta blockers',
        'Decreased corneal sensitivity',
        'Can mask the adrenergic warning symptoms of hypoglycemia (tachycardia, tremor, palpitations) in diabetic patients - a key indirect ocular/systemic-health relevance for monitoring diabetic retinopathy patients',
        'Rarely reported: blurred vision, ocular irritation',
        'Reduced IOP is a known systemic effect (mirrors topical beta-blocker action) - can complicate interpretation of IOP in glaucoma patients also taking oral beta-blockers',
      ],
      systemic: [
        'Bradycardia, hypotension, AV block',
        'Bronchospasm (contraindicated/high risk in asthma/COPD due to non-selective beta-2 blockade)',
        'Fatigue, dizziness, depression, vivid dreams/nightmares, decreased libido (CNS penetration)',
        'Masking of hypoglycemia symptoms in diabetics',
        'Cold extremities (peripheral vasoconstriction)',
        'Rebound hypertension/tachycardia/angina if abruptly discontinued',
      ],
    },
    contraindications: [
      'Bronchial asthma or severe reactive airway disease',
      'Severe bradycardia, second- or third-degree AV block (without pacemaker)',
      'Cardiogenic shock',
      'Decompensated/overt heart failure',
      'Severe peripheral arterial disease',
    ],
    precautions: [
      'Use caution in diabetic patients - may blunt the adrenergic warning signs of hypoglycemia',
      'Do not discontinue abruptly - risk of rebound tachycardia, hypertension, or angina; taper gradually',
      'Caution in patients with dry eye disease or contact lens intolerance, as it can further reduce tear production',
      'Caution in patients also using topical beta-blockers for glaucoma - additive systemic beta-blockade risk (bradycardia, bronchospasm)',
    ],
    drugInteractions: [
      'Topical ophthalmic beta-blockers (e.g., timolol) - additive systemic beta-blockade, increased risk of bradycardia/bronchospasm',
      'Calcium channel blockers (verapamil, diltiazem) - additive negative chronotropic/inotropic effects, risk of severe bradycardia/AV block',
      'Insulin/oral hypoglycemics - masking of hypoglycemic warning symptoms',
      'Clonidine - risk of rebound hypertension if clonidine withdrawn while on beta-blocker',
      'NSAIDs - can blunt the antihypertensive effect',
    ],
    patientCounseling: [
      'Do not stop this medication abruptly without physician guidance',
      'Report new eye dryness, irritation, or contact lens discomfort - this medication can reduce tear production',
      'Diabetic patients should be aware this medication may mask the usual warning signs of low blood sugar (rapid heartbeat, shakiness)',
      'Inform your eye doctor and other prescribers that you take this medication, especially if you also use eye drops for glaucoma',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy - associated with intrauterine growth restriction, neonatal bradycardia, and hypoglycemia when used near term; use only if benefits outweigh risks. Excreted in breast milk in low amounts; generally considered compatible with breastfeeding with infant monitoring.',
    monitoring: [
      'Ask about dry eye symptoms and tear film status on slit lamp exam in patients on chronic oral beta-blocker therapy',
      'Be aware that oral beta-blockers can lower IOP, which may affect glaucoma diagnosis/monitoring interpretation',
      'Coordinate with prescribing physician regarding cardiovascular/pulmonary monitoring',
      'Extra caution and communication with the prescriber if the patient is also using a topical beta-blocker for glaucoma (additive systemic effect)',
    ],
    clinicalPearls: [
      'Propranolol and topical timolol share the identical non-selective beta-blockade mechanism - a classically tested cross-topic board link between systemic and ocular pharmacology',
      'Because oral beta-blockers can lower IOP, an undiagnosed glaucoma patient recently started on propranolol may show an artificially "controlled" IOP, complicating diagnosis',
      'Reduced tear secretion from systemic beta-blockade is an underappreciated but classic cause of secondary dry eye in patients on chronic antihypertensive/antiarrhythmic therapy',
      'Highly lipophilic and crosses the blood-brain barrier extensively, explaining its prominent CNS side effects (fatigue, depression, nightmares) compared to more hydrophilic beta-blockers like atenolol',
    ],
    highYield: [
      'Propranolol is a NON-SELECTIVE beta-blocker (beta-1 and beta-2) - same receptor profile as topical timolol, a key board cross-link',
      'Reduces tear production (dry eye) via beta-2 blockade of the lacrimal gland - the primary direct ocular side effect to know',
      'Can MASK the adrenergic symptoms of hypoglycemia (tachycardia, tremor) in diabetic patients - important for patients with diabetic retinopathy on this drug',
      'Oral beta-blockers can lower IOP systemically, which may confound glaucoma diagnosis/monitoring in patients not on topical therapy',
      'Contraindicated in asthma/COPD due to non-selective beta-2 blockade causing bronchospasm - same contraindication rationale as topical non-selective beta-blockers',
    ],
    references: [
      { label: 'Systemic beta-blockers and ocular/tear film effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Systemic medications with ocular side effects', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== ACE INHIBITOR =====
  {
    id: 'lisinopril',
    genericName: 'Lisinopril',
    brandNames: ['Prinivil', 'Zestril'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Angiotensin-converting enzyme (ACE) inhibitor. Blocks conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone-mediated sodium/water retention, thereby lowering blood pressure and reducing cardiac afterload/preload. Also reduces bradykinin degradation, which contributes both to its antihypertensive benefit and to characteristic side effects (cough, angioedema). Has no direct pharmacologic action on ocular tissue; its principal relevance to eye care is indirect, through effective blood pressure control reducing the risk and severity of hypertensive retinopathy, and through rare but serious angioedema that can involve the periorbital region.',
    indications: ['Hypertension', 'Heart failure with reduced ejection fraction', 'Post-myocardial infarction (cardioprotection)', 'Diabetic nephropathy (renal protection)'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral 10-40 mg once daily, titrated based on blood pressure response and renal function',
    concentrations: ['N/A — oral/systemic medication (2.5 mg, 5 mg, 10 mg, 20 mg, 30 mg, 40 mg tablets)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'No direct/well-established ocular toxicity - clinical relevance is largely indirect',
        'Angioedema (rare, class effect of ACE inhibitors) can involve the periorbital tissue and eyelids, causing acute lid/periorbital swelling that may need urgent medical attention (airway risk if it progresses to the tongue/larynx)',
        'Effective blood pressure control reduces the risk and progression of hypertensive retinopathy (arteriolar narrowing, AV nicking, cotton wool spots, flame hemorrhages, and in severe cases papilledema) - an indirect but clinically important benefit',
        'Rare case reports of blurred vision associated with hypotension after initiation',
      ],
      systemic: [
        'Dry, persistent cough (bradykinin-mediated, common reason for discontinuation)',
        'Angioedema (rare but potentially life-threatening, more common in Black patients and with concurrent use of other agents affecting bradykinin metabolism)',
        'Hyperkalemia',
        'Acute kidney injury, especially in bilateral renal artery stenosis or volume depletion',
        'Hypotension, especially with first dose or in volume-depleted patients',
      ],
    },
    contraindications: [
      'History of ACE-inhibitor-associated angioedema',
      'Pregnancy (all trimesters - fetotoxic)',
      'Bilateral renal artery stenosis',
      'Concurrent use with aliskiren in diabetic patients',
      'Known hypersensitivity to ACE inhibitors',
    ],
    precautions: [
      'Monitor renal function and potassium after initiation and with dose changes',
      'Educate patients to seek immediate medical attention for facial, lip, tongue, or periorbital/eyelid swelling (angioedema) or difficulty breathing/swallowing',
      'Caution in patients who are volume-depleted (risk of first-dose hypotension)',
    ],
    drugInteractions: [
      'Potassium-sparing diuretics, potassium supplements - additive hyperkalemia risk',
      'NSAIDs - can blunt antihypertensive effect and increase renal impairment risk',
      'Lithium - reduced lithium clearance, increased toxicity risk',
      'Other antihypertensives - additive blood pressure lowering',
    ],
    patientCounseling: [
      'Report any swelling of the face, lips, tongue, or around the eyes immediately - this can be a sign of a rare but serious allergic reaction (angioedema)',
      'Report persistent dry cough to your physician, as an alternative medication (e.g., an ARB) may be preferred',
      'Continue routine dilated eye exams for blood pressure-related retinal changes, especially if hypertension has been poorly controlled historically',
    ],
    pregnancyLactation:
      'Contraindicated in all trimesters of pregnancy - associated with fetal renal dysgenesis, oligohydramnios, growth restriction, and neonatal death (fetotoxicity). Not recommended during breastfeeding; alternative agents generally preferred, particularly in nursing infants who are premature or have renal impairment.',
    monitoring: [
      'Dilated fundus exam to assess for hypertensive retinopathy findings, particularly if blood pressure has been poorly controlled or the patient is newly diagnosed with hypertension',
      'Ask about any history of facial or eyelid swelling (angioedema) when taking a medication history',
      'No specific ophthalmic screening test is required directly for lisinopril itself; monitoring is oriented toward the underlying hypertension and its retinal/optic nerve manifestations',
    ],
    clinicalPearls: [
      'Lisinopril itself has essentially no direct ocular toxicity profile - its importance on boards is more about recognizing hypertensive retinopathy findings in patients being treated for high blood pressure, and about the rare angioedema risk',
      'ACE-inhibitor angioedema can involve the eyelids/periorbital area and is a medical emergency if airway involvement is suspected - optometrists should recognize acute lid swelling in a patient on an ACE inhibitor as a possible drug reaction requiring prompt referral',
      'The dry cough (bradykinin-mediated) is the most common reason patients are switched from an ACE inhibitor to an ARB (e.g., losartan), which does not share this side effect',
    ],
    highYield: [
      'Lisinopril (ACE inhibitors as a class) has NO significant direct ocular toxicity - a "trick" fact often tested by asking what does NOT cause ocular side effects among systemic cardiovascular drugs',
      'Rare but important: ACE-inhibitor angioedema can cause acute periorbital/eyelid swelling - recognize this as a drug-related emergency needing prompt medical referral',
      'Ocular relevance is chiefly INDIRECT - good blood pressure control from ACE inhibitors reduces hypertensive retinopathy risk/severity',
      'Dry cough is the classic ACE inhibitor systemic side effect (bradykinin-mediated) that often prompts a switch to an ARB',
    ],
    references: [
      { label: 'ACE inhibitors and ocular/systemic side effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Hypertensive retinopathy and systemic blood pressure management', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== ARB =====
  {
    id: 'losartan',
    genericName: 'Losartan',
    brandNames: ['Cozaar'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Angiotensin II receptor blocker (ARB) that selectively antagonizes the AT1 receptor, blocking the vasoconstrictive and aldosterone-secreting effects of angiotensin II regardless of its production pathway. Unlike ACE inhibitors, ARBs do not inhibit bradykinin breakdown, which largely accounts for their lower incidence of cough and angioedema. Has no direct pharmacologic effect on ocular tissue; its relevance to eye care is indirect, through blood pressure control and its effect on hypertensive ocular findings.',
    indications: ['Hypertension', 'Diabetic nephropathy', 'Heart failure (in ACE-inhibitor-intolerant patients)', 'Stroke risk reduction in patients with hypertension and left ventricular hypertrophy'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral 25-100 mg once or twice daily, titrated based on blood pressure response',
    concentrations: ['N/A — oral/systemic medication (25 mg, 50 mg, 100 mg tablets)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'No established direct ocular toxicity',
        'Effective blood pressure control reduces risk/progression of hypertensive retinopathy (arteriolar narrowing, AV nicking, flame hemorrhages, cotton wool spots) and hypertensive optic neuropathy in severe/malignant hypertension',
        'Rare case reports of blurred vision related to hypotension, particularly after initiation or dose increase',
        'Angioedema involving the periorbital area is possible but markedly less common than with ACE inhibitors',
      ],
      systemic: [
        'Dizziness, hypotension',
        'Hyperkalemia',
        'Renal impairment, especially in bilateral renal artery stenosis or volume-depleted patients',
        'Rare angioedema (much less frequent than with ACE inhibitors since bradykinin metabolism is not affected)',
      ],
    },
    contraindications: [
      'Pregnancy (all trimesters - fetotoxic, same class warning as ACE inhibitors)',
      'Bilateral renal artery stenosis',
      'Concurrent use with aliskiren in diabetic patients',
      'Known hypersensitivity to losartan',
    ],
    precautions: [
      'Monitor renal function and serum potassium periodically',
      'Caution in volume-depleted patients (risk of symptomatic hypotension)',
      'Generally preferred over ACE inhibitors in patients with a prior history of ACE-inhibitor-induced cough or angioedema',
    ],
    drugInteractions: [
      'Potassium-sparing diuretics/potassium supplements - additive hyperkalemia risk',
      'NSAIDs - may blunt antihypertensive effect and increase renal impairment risk',
      'Lithium - reduced clearance, increased toxicity risk',
      'Other antihypertensives - additive blood-pressure-lowering effect',
    ],
    patientCounseling: [
      'Continue routine dilated eye examinations to monitor for hypertensive retinal changes, especially if blood pressure has been difficult to control',
      'Report facial, lip, or eyelid swelling, though this is rare with this class of medication compared to ACE inhibitors',
      'Do not use during pregnancy - notify your prescriber immediately if you become pregnant',
    ],
    pregnancyLactation:
      'Contraindicated in all trimesters of pregnancy - associated with fetal renal dysgenesis, oligohydramnios, and neonatal complications, similar to ACE inhibitors. Use during breastfeeding is generally not recommended due to limited safety data; alternative agents typically preferred.',
    monitoring: [
      'Dilated fundus exam for hypertensive retinopathy findings, particularly in patients with a history of poorly controlled blood pressure',
      'Ask about eyelid/facial swelling history when taking a medication history, though angioedema is rare with ARBs',
      'No ARB-specific ophthalmic screening protocol is required; monitoring is oriented toward the underlying hypertension',
    ],
    clinicalPearls: [
      'Losartan and other ARBs are essentially devoid of direct ocular toxicity, similar to ACE inhibitors, but are commonly substituted for ACE inhibitors specifically because they do NOT cause the bradykinin-mediated cough or (as often) angioedema',
      'Board relevance is largely about recognizing that antihypertensive therapy in general - not the specific drug class - is what reduces hypertensive retinopathy risk',
      'Losartan has a unique additional property among ARBs of mild uricosuric activity (lowers uric acid), which is a non-ocular but occasionally tested pharmacology fact',
    ],
    highYield: [
      'Losartan (ARBs as a class) has NO established direct ocular toxicity - important to distinguish from drugs with true ocular toxicity profiles on boards',
      'ARBs cause LESS cough and LESS angioedema than ACE inhibitors because they do not affect bradykinin metabolism - a key comparative fact',
      'Ocular relevance is indirect: blood pressure control from losartan reduces hypertensive retinopathy risk (arteriolar narrowing, AV nicking, hemorrhages, cotton wool spots)',
      'Contraindicated in pregnancy (same fetotoxicity class warning as ACE inhibitors) - relevant when reviewing medication history in women of childbearing age',
    ],
    references: [
      { label: 'ARBs and ocular/systemic side effect comparison to ACE inhibitors', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Hypertensive retinopathy and systemic blood pressure management', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== ANTICOAGULANT =====
  {
    id: 'warfarin',
    genericName: 'Warfarin',
    brandNames: ['Coumadin', 'Jantoven'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Vitamin K antagonist that inhibits vitamin K epoxide reductase, blocking the hepatic synthesis of the biologically active (gamma-carboxylated) forms of clotting factors II, VII, IX, and X, as well as the anticoagulant proteins C and S. This produces a dose-dependent, delayed-onset anticoagulant effect monitored via the international normalized ratio (INR). Because it impairs clot formation systemically, it increases the risk and severity of bleeding in any ocular tissue with vasculature, most notably the conjunctiva and retina/vitreous.',
    indications: ['Atrial fibrillation (stroke prevention)', 'Venous thromboembolism (deep vein thrombosis, pulmonary embolism) - treatment and prevention', 'Mechanical heart valves (thromboprophylaxis)', 'Prevention of systemic embolism'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity/hemorrhage risk monitoring'],
    typicalDosing: 'Oral, individualized dosing (typically starting 2-5 mg once daily) titrated to a target INR (commonly 2.0-3.0, or 2.5-3.5 for mechanical mitral valves), with regular INR monitoring',
    concentrations: ['N/A — oral systemic medication (1 mg, 2 mg, 2.5 mg, 3 mg, 4 mg, 5 mg, 6 mg, 7.5 mg, 10 mg tablets)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Increased risk and severity of subconjunctival hemorrhage - may appear more extensive/spontaneous than in non-anticoagulated patients',
        'Increased risk of vitreous hemorrhage, particularly in patients with underlying proliferative diabetic retinopathy or retinal neovascularization',
        'Increased risk and severity of retinal hemorrhage',
        'Increased risk of hyphema (spontaneous or after minor trauma) and prolonged/more severe bleeding after any intraocular or periocular surgical procedure',
        'Increased risk of orbital/retrobulbar hemorrhage after periocular injections or trauma - vision-threatening if it causes elevated orbital pressure',
      ],
      systemic: [
        'Major and minor hemorrhage (GI bleeding, intracranial hemorrhage, hematuria, easy bruising) - the primary systemic risk',
        'Skin necrosis (rare, protein C/S deficiency-related, early in therapy)',
        'Purple toe syndrome (rare)',
        'Teratogenicity ("warfarin embryopathy") if used in pregnancy',
      ],
    },
    contraindications: [
      'Active clinically significant bleeding',
      'Pregnancy (crosses the placenta and is teratogenic - warfarin embryopathy)',
      'Severe uncontrolled hypertension',
      'Recent or planned major surgery/invasive procedure with high bleeding risk (requires perioperative bridging/hold protocol)',
      'Known hypersensitivity to warfarin',
    ],
    precautions: [
      'Narrow therapeutic index with wide individual dose variability - requires regular INR monitoring',
      'Numerous food (vitamin K-containing foods) and drug interactions can significantly alter INR',
      'Before any elective intraocular or periocular surgery (e.g., cataract surgery, oculoplastic procedures), coordinate with the prescribing physician regarding whether to continue, hold, or bridge anticoagulation - modern cataract surgery is often performed without interruption of warfarin, but higher-bleeding-risk procedures may require a hold',
      'Caution advising patients to stop warfarin on their own - abrupt discontinuation carries thromboembolic risk; any hold must be coordinated with the prescribing physician',
    ],
    drugInteractions: [
      'Amiodarone - significantly potentiates warfarin effect (increases INR), requiring dose reduction',
      'NSAIDs/aspirin - additive bleeding risk and GI mucosal injury, generally avoided or used cautiously in combination',
      'Antibiotics (e.g., fluoroquinolones, metronidazole, trimethoprim-sulfamethoxazole) - can significantly increase INR',
      'Vitamin K-rich foods (leafy greens) - can decrease INR/anticoagulant effect if intake is inconsistent',
      'Many other CYP2C9/CYP3A4-interacting drugs - warfarin has one of the highest drug-interaction burdens of any commonly used medication',
    ],
    patientCounseling: [
      'Report any new eye redness with blood pooling (subconjunctival hemorrhage), sudden vision loss, or eye pain, as these may reflect bleeding related to this medication',
      'Maintain consistent vitamin K intake (leafy green vegetables) rather than avoiding it entirely, since sudden changes affect INR control',
      'Inform your eye doctor and any surgeon that you take warfarin before any eye procedure or surgery is scheduled',
      'Attend regular INR blood testing appointments as directed',
      'Report easy bruising, unusual bleeding, or blood in urine/stool to your physician',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy - crosses the placenta and causes warfarin embryopathy (nasal hypoplasia, skeletal abnormalities) with first-trimester exposure, and risk of fetal/neonatal hemorrhage later in pregnancy; heparin-class agents are used instead when anticoagulation is needed. Considered compatible with breastfeeding - minimal transfer into breast milk.',
    monitoring: [
      'Ask about anticoagulant use as part of routine ocular history, particularly before any surgical or laser procedure or intraocular/periocular injection',
      'Slit lamp and fundus exam to identify subconjunctival, vitreous, or retinal hemorrhage, particularly in patients presenting with acute red eye or vision change while on warfarin',
      'Coordinate with the prescribing physician/anticoagulation clinic regarding current INR and whether to hold therapy before invasive ophthalmic procedures',
      'Increased vigilance for hemorrhagic complications in patients with coexisting retinal vascular disease (e.g., proliferative diabetic retinopathy, retinal vein occlusion) who are also anticoagulated',
    ],
    clinicalPearls: [
      'Modern cataract surgery is generally performed WITHOUT stopping warfarin in most patients, as the bleeding risk from continuing is usually lower than the thromboembolic risk of stopping - a frequently tested clinical management point that surprises many students',
      'Subconjunctival hemorrhage in a patient on warfarin may look alarming but is usually benign; however, its recurrence or extent should still prompt an INR check',
      'Any decision to hold or bridge anticoagulation before ocular surgery must be made in coordination with the prescribing physician, never unilaterally by the eye care provider',
      'Warfarin has one of the highest numbers of clinically significant drug-drug and drug-food interactions of any commonly prescribed medication',
    ],
    highYield: [
      'Warfarin increases the risk and severity of subconjunctival, retinal, and vitreous hemorrhage - the core ocular-relevance fact for boards',
      'INR must be known/considered before intraocular or periocular surgery; most routine cataract surgery is now done WITHOUT stopping warfarin - a classic testable management nuance',
      'Amiodarone and many antibiotics significantly increase warfarin\'s effect (raise INR) - important interaction recall',
      'Contraindicated in pregnancy due to teratogenicity (warfarin embryopathy) - distinguishes it from heparin, which does not cross the placenta',
      'Coexisting retinal vascular disease (e.g., proliferative diabetic retinopathy) plus warfarin anticoagulation raises the risk of more severe vitreous hemorrhage',
    ],
    references: [
      { label: 'Anticoagulants and perioperative ocular surgical risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Perioperative management of anticoagulation in ophthalmic surgery', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },

  // ===== ANTIPLATELET =====
  {
    id: 'clopidogrel',
    genericName: 'Clopidogrel',
    brandNames: ['Plavix'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Thienopyridine antiplatelet agent (prodrug, activated by hepatic CYP2C19) that irreversibly inhibits the platelet P2Y12 ADP receptor, blocking ADP-mediated platelet activation and aggregation for the lifespan of the affected platelet (approximately 7-10 days). Because it impairs platelet-mediated hemostasis, it increases the risk and severity of bleeding in vascularized ocular tissue, similar in principle to warfarin though via a distinct (platelet, not clotting-factor) mechanism.',
    indications: [
      'Secondary prevention after myocardial infarction, stroke, or established peripheral arterial disease',
      'Acute coronary syndrome (often in combination with aspirin, "dual antiplatelet therapy")',
      'Prevention of stent thrombosis after percutaneous coronary intervention with coronary stent placement',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular bleeding risk monitoring'],
    typicalDosing: 'Oral 75 mg once daily maintenance dose; loading dose of 300-600 mg may be used in acute coronary syndrome/post-stenting settings',
    concentrations: ['N/A — oral systemic medication (75 mg, 300 mg tablets)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Increased risk of subconjunctival hemorrhage - more frequent and sometimes more extensive than in patients not on antiplatelet therapy',
        'Increased risk of hyphema after even minor ocular trauma',
        'Increased intraoperative and postoperative bleeding risk with ophthalmic surgery (e.g., more oozing during oculoplastic or glaucoma filtering procedures)',
        'Theoretical increased risk of retinal/vitreous hemorrhage in patients with underlying retinal vascular disease, though the effect size is smaller than with warfarin',
      ],
      systemic: [
        'Increased bleeding risk (GI bleeding, bruising, epistaxis) - the primary systemic risk',
        'Thrombotic thrombocytopenic purpura (TTP) - rare but serious, can occur shortly after starting therapy',
        'Neutropenia (rare)',
        'Dyspepsia, diarrhea',
      ],
    },
    contraindications: [
      'Active pathological bleeding (e.g., peptic ulcer, intracranial hemorrhage)',
      'Known hypersensitivity to clopidogrel',
      'Severe hepatic impairment (relative contraindication)',
    ],
    precautions: [
      'Effect on platelets is irreversible and lasts the lifespan of the platelet (~7-10 days), so bleeding risk persists for about a week after discontinuation',
      'CYP2C19 poor metabolizers (a genetically variable population) may have reduced conversion to the active metabolite and diminished antiplatelet effect',
      'Before elective intraocular or periocular surgery with significant bleeding risk, coordinate with the prescribing cardiologist regarding whether/how long to hold therapy, balancing bleeding risk against the risk of stent thrombosis or thromboembolic events - never discontinue unilaterally',
      'Often used in combination with aspirin (dual antiplatelet therapy), which further increases bleeding risk',
    ],
    drugInteractions: [
      'Proton pump inhibitors (especially omeprazole) - may reduce clopidogrel\'s antiplatelet effect via CYP2C19 inhibition (clinical significance debated but commonly cited)',
      'Aspirin and other antiplatelet/anticoagulant agents - additive bleeding risk',
      'NSAIDs - additive GI bleeding risk',
      'Warfarin - additive bleeding risk if used concurrently',
    ],
    patientCounseling: [
      'Report any new eye redness with visible blood (subconjunctival hemorrhage), especially if recurrent or associated with trauma',
      'Inform your eye doctor and any eye surgeon that you take this medication before any scheduled ocular procedure',
      'Do not stop this medication on your own, especially if you have a coronary stent - stopping can increase the risk of a heart attack or stent clot; any change must be coordinated with your cardiologist',
      'Report unusual bruising or bleeding that does not stop promptly',
    ],
    pregnancyLactation:
      'Limited human data in pregnancy; use only if the potential benefit justifies the potential risk to the fetus. Unknown whether excreted in breast milk; caution advised, and a decision to discontinue nursing or the drug should weigh the importance of the drug to the mother.',
    monitoring: [
      'Ask about antiplatelet medication use as part of routine ocular history, particularly before any surgical, laser, or injection-based ophthalmic procedure',
      'Examine for subconjunctival hemorrhage, hyphema, or other bleeding signs, especially after trauma or in the perioperative period',
      'Coordinate with the prescribing cardiologist before holding therapy for elective ocular surgery, particularly in patients with coronary stents (risk of stent thrombosis if stopped too early after stent placement)',
      'Increased vigilance in patients also on aspirin or another antiplatelet/anticoagulant (dual/triple therapy) given compounded bleeding risk',
    ],
    clinicalPearls: [
      'Similar to warfarin, most routine cataract surgery is performed without stopping clopidogrel, since the thrombotic risk of stopping (especially with a recent coronary stent) generally outweighs the bleeding risk of continuing',
      'Clopidogrel is a prodrug requiring hepatic activation via CYP2C19 - genetic variability in this enzyme is a recognized cause of variable antiplatelet response, a detail sometimes tested in pharmacology review',
      'Patients on dual antiplatelet therapy (e.g., aspirin plus clopidogrel) after recent coronary stenting are at particularly high combined bleeding risk and require close coordination with cardiology before any elective ocular surgery',
      'Stopping clopidogrel prematurely after coronary stent placement carries a serious risk of acute stent thrombosis and myocardial infarction - never discontinued for routine/elective ophthalmic reasons without cardiology clearance',
    ],
    highYield: [
      'Clopidogrel increases risk of subconjunctival hemorrhage and perioperative bleeding, similar in principle to warfarin but via platelet (not clotting factor) inhibition',
      'Elective ophthalmic surgery (e.g., cataract surgery) is generally performed WITHOUT stopping clopidogrel; any hold requires medical/cardiology clearance, particularly with recent coronary stents',
      'Irreversibly inhibits the P2Y12 platelet receptor - effect lasts the lifespan of the platelet (~7-10 days) after the last dose',
      'Often combined with aspirin (dual antiplatelet therapy) after stenting/ACS, further increasing bleeding risk - important when assessing a surgical patient\'s medication list',
    ],
    references: [
      { label: 'Antiplatelet agents and perioperative ocular surgical bleeding risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Perioperative management of antiplatelet therapy in ophthalmic surgery', source: 'AAO/NBEO Ocular Pharmacology Review' },
    ],
  },
]
