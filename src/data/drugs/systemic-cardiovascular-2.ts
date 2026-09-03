import type { Drug } from '../../types/drug'

// Systemic cardiovascular medications prescribed by other physicians (not by optometrists).
// These are NOT ophthalmic drugs - they are included because of their ocular side effects/
// toxicities that are relevant to eye exam findings and are classically tested on NBEO boards.
export const systemicCardiovascular2: Drug[] = [
  // ===== DIURETICS =====
  {
    id: 'furosemide',
    genericName: 'Furosemide',
    brandNames: ['Lasix'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Loop diuretic that inhibits the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle, producing potent natriuresis and diuresis. Chemically a sulfonamide derivative (sulfamoyl-anthranilic acid), which underlies its rare idiosyncratic ocular and dermatologic hypersensitivity reactions shared with other sulfonamide-derived drugs (thiazides, acetazolamide, topiramate, sulfa antibiotics).',
    indications: ['Edema associated with congestive heart failure', 'Hepatic cirrhosis and ascites', 'Renal disease/nephrotic syndrome', 'Hypertension (less commonly, when thiazides are ineffective, e.g., renal impairment)', 'Acute pulmonary edema'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 20-80 mg once or twice daily, titrated to effect (up to several hundred mg/day in refractory edema); IV: 20-40 mg for acute pulmonary edema/emergent diuresis',
    concentrations: ['N/A — oral/systemic (20 mg, 40 mg, 80 mg tablets; 10 mg/mL oral solution; 10 mg/mL injection)'],
    formulations: ['Tablet', 'Oral solution', 'Injection'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Idiosyncratic acute angle-closure glaucoma (rare) — sulfonamide-hypersensitivity-type reaction causing ciliary body edema/effusion with anterior rotation of the lens-iris diaphragm; typically bilateral, non-pupillary-block mechanism, usually within hours to days of starting the drug',
        'Transient myopic shift (rare, idiosyncratic, part of the same ciliochoroidal effusion reaction described above)',
        'Xanthopsia (yellow-tinted vision) and other rare visual disturbances/blurred vision reported, more classically associated with digoxin but occasionally described with furosemide',
        'Ototoxicity (tinnitus, hearing loss/deafness, usually reversible) with rapid high-dose IV administration — not a direct ocular effect but relevant when counseling on sensory monitoring',
        'Dry eye/reduced tear film reported rarely, likely secondary to volume depletion/dehydration from diuresis',
      ],
      systemic: [
        'Electrolyte disturbances: hypokalemia, hyponatremia, hypochloremic metabolic alkalosis, hypomagnesemia, hypocalcemia',
        'Dehydration/hypovolemia, orthostatic hypotension',
        'Ototoxicity (dose- and rate-related, especially with rapid IV push or concurrent aminoglycosides)',
        'Hyperuricemia/gout exacerbation',
        'Hyperglycemia',
        'Rare blood dyscrasias, Stevens-Johnson syndrome/toxic epidermal necrolysis (sulfonamide-related)',
      ],
    },
    contraindications: [
      'Anuria',
      'Known hypersensitivity to furosemide',
      'Severe electrolyte depletion (uncorrected hypokalemia/hyponatremia) until corrected',
      'Relative caution with sulfonamide hypersensitivity (cross-reactivity risk debated but reported)',
    ],
    precautions: [
      'Monitor electrolytes and renal function regularly, especially with high doses or concurrent use of other nephrotoxic/electrolyte-altering drugs',
      'Sudden eye pain, redness, halos, or acute vision change shortly after starting therapy should raise suspicion for the rare idiosyncratic angle-closure reaction and warrants urgent ophthalmic/optometric evaluation and drug discontinuation',
      'Caution in patients with hearing impairment or those on other ototoxic drugs',
      'Caution in diabetic patients (can worsen glycemic control)',
    ],
    drugInteractions: [
      'Aminoglycoside antibiotics — additive ototoxicity/nephrotoxicity',
      'Digoxin — hypokalemia induced by furosemide increases risk of digoxin toxicity',
      'Lithium — reduced renal clearance, increased lithium toxicity risk',
      'NSAIDs — can blunt diuretic/antihypertensive effect and increase nephrotoxicity risk',
      'Other antihypertensives — additive hypotensive effect',
    ],
    patientCounseling: [
      'Seek immediate medical/eye care attention for sudden eye pain, redness, or blurred vision after starting this medication, as this can rarely signal an acute angle-closure event',
      'Report tinnitus or hearing changes promptly',
      'Rise slowly from sitting/lying to reduce orthostatic dizziness',
      'Maintain adequate hydration and follow up on electrolyte monitoring as directed',
    ],
    pregnancyLactation:
      'Use only if clinically necessary; crosses the placenta and can cause fetal/neonatal electrolyte disturbance. Excreted in breast milk and may suppress lactation; use with caution while nursing.',
    pediatricConsiderations: [
      'Well-established pediatric and neonatal use for edema/fluid overload (e.g., congestive heart failure, bronchopulmonary dysplasia in premature infants) with weight-based dosing (approximately 1 mg/kg/dose IV, titrated upward)',
      'Premature infants are at increased risk of ototoxicity and nephrocalcinosis with prolonged high-dose use, and dosing above 1 mg/kg/day is generally avoided in infants with a post-conceptual age under 31 weeks',
      'The rare idiosyncratic sulfonamide-related angle-closure/myopic-shift reaction described in adults can theoretically occur in pediatric patients as well',
    ],
    isEmergencyMedication: true,
    monitoring: [
      'Ask about sudden eye pain, redness, halos, or blurred vision when initiating therapy, given the rare acute angle-closure/myopic-shift reaction',
      'Baseline and periodic IOP check in any patient reporting acute visual symptoms after starting a new diuretic',
      'No routine dilated exam schedule is specifically required for furosemide itself, but any new visual complaint temporally linked to a diuretic sulfonamide should prompt gonioscopy/anterior chamber depth assessment to rule out angle closure',
    ],
    clinicalPearls: [
      'Furosemide, hydrochlorothiazide, acetazolamide, and topiramate all share a sulfonamide moiety and are the classic drug group implicated in idiosyncratic, non-pupillary-block acute angle-closure glaucoma from ciliary body edema/anterior chamber shallowing — a distinct mechanism from primary angle-closure due to pupillary block',
      'This reaction is idiosyncratic (not dose-related) and typically occurs within hours to a few weeks of starting the drug, is usually bilateral, and resolves with drug discontinuation plus cycloplegia/aqueous suppressants — NOT with miotics or laser iridotomy (since there is no pupillary block)',
      'Ototoxicity of loop diuretics is a useful comparison point: unlike the ocular reaction, ototoxicity is dose/rate-related and more predictable',
    ],
    highYield: [
      'Furosemide is a SULFONAMIDE-DERIVED loop diuretic — shares the class-effect risk (with HCTZ, acetazolamide, topiramate) of idiosyncratic acute angle-closure glaucoma from ciliary body edema/effusion, NOT pupillary block',
      'This angle-closure reaction is typically bilateral and occurs shortly after drug initiation — a key distinguishing history from classic pupillary-block angle closure',
      'Treatment is drug discontinuation + cycloplegics/aqueous suppressants, NOT laser peripheral iridotomy, since the mechanism does not involve pupillary block',
      'Electrolyte-related monitoring (potassium) is relevant because hypokalemia can potentiate digoxin toxicity, which itself has classic ocular effects (xanthopsia) — a testable cross-drug link',
    ],
    references: [
      { label: 'Sulfonamide-associated idiosyncratic angle-closure glaucoma', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Systemic medications and ocular side effects review', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },
  {
    id: 'hydrochlorothiazide',
    genericName: 'Hydrochlorothiazide',
    brandNames: ['Microzide'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Thiazide diuretic that inhibits the Na-Cl cotransporter in the distal convoluted tubule, promoting natriuresis, diuresis, and mild antihypertensive effect through reduced plasma volume and, with chronic use, decreased peripheral vascular resistance. A sulfonamide derivative, structurally related to carbonic anhydrase inhibitors, which accounts for its classic idiosyncratic ocular hypersensitivity reaction.',
    indications: ['Essential hypertension (first-line or add-on agent)', 'Edema from heart failure, hepatic cirrhosis, corticosteroid/estrogen therapy, or renal disease'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 12.5-25 mg once daily (up to 50 mg/day), often combined with other antihypertensives in a single pill',
    concentrations: ['N/A — oral/systemic (12.5 mg, 25 mg, 50 mg capsules/tablets)'],
    formulations: ['Tablet', 'Capsule'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Idiosyncratic acute bilateral angle-closure glaucoma with transient myopic shift — the classic, most heavily tested ocular reaction to thiazides; caused by ciliary body edema/choroidal effusion producing anterior rotation of the ciliary body and forward displacement of the lens-iris diaphragm (a secondary, non-pupillary-block angle-closure mechanism), typically within hours to 3 weeks of starting the drug',
        'Acute myopic shift (can be several diopters) accompanying the angle-closure event',
        'Transient blurred vision',
        'Xanthopsia (rare, less classically associated than with digoxin)',
        'Choroidal effusion on exam during the acute idiosyncratic reaction',
      ],
      systemic: [
        'Hypokalemia, hyponatremia, hypomagnesemia, hypercalcemia',
        'Hyperuricemia/gout exacerbation',
        'Hyperglycemia (can unmask or worsen diabetes)',
        'Hyperlipidemia',
        'Photosensitivity (cutaneous phototoxic/photoallergic reactions)',
        'Erectile dysfunction',
        'Rare blood dyscrasias, Stevens-Johnson syndrome/toxic epidermal necrolysis (sulfonamide-related)',
      ],
    },
    contraindications: [
      'Anuria',
      'Known sulfonamide/thiazide hypersensitivity',
      'Severe renal impairment (loop diuretics generally preferred)',
    ],
    precautions: [
      'Patients should seek urgent care for sudden eye pain, redness, halos around lights, or blurred vision, especially soon after starting the drug, given the risk of acute angle closure',
      'Use sun protection given photosensitivity risk',
      'Monitor electrolytes and glucose, especially in diabetic and elderly patients',
      'Caution in patients with gout',
    ],
    drugInteractions: [
      'Lithium — reduced renal clearance, increased lithium toxicity',
      'Digoxin — thiazide-induced hypokalemia increases digoxin toxicity risk',
      'NSAIDs — can blunt antihypertensive/diuretic effect',
      'Other antihypertensives — additive hypotensive effect',
      'Corticosteroids — additive hypokalemia risk',
    ],
    patientCounseling: [
      'Seek immediate ophthalmic/emergency evaluation for sudden eye pain, redness, halos, or vision change, particularly within the first few weeks of starting this medication — this can indicate a rare but sight-threatening acute angle-closure reaction',
      'Use sunscreen and protective clothing due to increased sun sensitivity',
      'Report muscle cramps or weakness (possible electrolyte disturbance)',
    ],
    pregnancyLactation:
      'Generally avoided in pregnancy except when clearly needed, as thiazides can cause fetal/neonatal thrombocytopenia and electrolyte disturbance and do not prevent (and may worsen) preeclampsia. Excreted in breast milk; may suppress lactation — use with caution while nursing.',
    pediatricConsiderations: [
      'Used in pediatric hypertension and edema with weight-based dosing (approximately 1-2 mg/kg/day), not exceeding 37.5 mg/day in infants under 2 years or 100 mg/day in children 2-12 years',
      'The idiosyncratic sulfonamide-related acute angle-closure/myopic-shift reaction described in adults can theoretically occur in pediatric patients as well, though it is rarely reported in this age group',
    ],
    offLabelUses: [
      'Nephrogenic diabetes insipidus (paradoxical antidiuretic effect used to reduce urine output)',
    ],
    relatedConditionIds: ['hypertensive-retinopathy'],
    monitoring: [
      'Ask specifically about sudden ocular pain, redness, halos, or vision change when a patient reports recently starting hydrochlorothiazide (or being switched to it) — hallmark of the idiosyncratic angle-closure/myopic-shift reaction',
      'Anterior chamber depth/gonioscopy and IOP check if any such symptoms are reported',
      'No specific routine ocular screening interval is required in asymptomatic patients, since the reaction is idiosyncratic and not dose- or duration-dependent in the way chronic toxicities are',
    ],
    clinicalPearls: [
      'This is the single most classic board example of a sulfonamide-related, non-pupillary-block acute angle-closure reaction, often paired conceptually with topiramate on exams',
      'The presentation mimics primary angle closure (red, painful eye, high IOP, shallow anterior chamber) but the mechanism (ciliary body edema pushing the lens-iris diaphragm forward) means the pupil is often mid-position or even miotic rather than fixed and mid-dilated, and it is frequently bilateral — both distinguishing features from pupillary-block angle closure',
      'Management is drug discontinuation plus cycloplegics and aqueous suppressants (topical beta blockers, oral/topical CAIs), NOT miotics and NOT laser peripheral iridotomy',
      'Occurs idiosyncratically, independent of dose, and can happen after a single dose in a susceptible individual',
    ],
    highYield: [
      'HCTZ is the PROTOTYPE drug for idiosyncratic, sulfonamide-related, non-pupillary-block acute angle-closure glaucoma with transient myopic shift — the highest-yield fact for this drug on boards',
      'Onset is typically within hours to a few weeks of starting the drug, often BILATERAL — key distinguishing history from typical pupillary-block angle closure, which is usually unilateral/asymmetric',
      'Correct management is drug discontinuation + cycloplegia/aqueous suppressants, NOT miotics or laser iridotomy, since there is no pupillary block',
      'Also causes photosensitivity and electrolyte disturbances (hypokalemia) relevant to overall patient risk assessment',
    ],
    references: [
      { label: 'Thiazide-induced acute angle-closure glaucoma and myopic shift', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Sulfonamide drug class and ocular hypersensitivity reactions', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },
  {
    id: 'spironolactone',
    genericName: 'Spironolactone',
    brandNames: ['Aldactone'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Potassium-sparing diuretic and competitive aldosterone (mineralocorticoid receptor) antagonist acting in the distal convoluted tubule and collecting duct. Reduces sodium reabsorption and potassium/hydrogen excretion. Also has antiandrogenic and weak progestational activity due to structural similarity to steroid hormones, which underlies most of its notable systemic (non-ocular) side effects.',
    indications: ['Heart failure with reduced ejection fraction (as part of guideline-directed medical therapy)', 'Primary hyperaldosteronism (Conn syndrome)', 'Resistant/refractory hypertension (add-on agent)', 'Edema from hepatic cirrhosis/ascites, nephrotic syndrome', 'Hirsutism/acne (off-label, antiandrogenic effect)'],
    ocularUses: ['None — systemic medication; relevant to optometry primarily as a contrast case with minimal direct ocular toxicity'],
    typicalDosing: 'Oral: 25-100 mg once daily or in divided doses (up to 400 mg/day for hyperaldosteronism workup); low-dose 12.5-25 mg daily is typical in heart failure regimens',
    concentrations: ['N/A — oral/systemic (25 mg, 50 mg, 100 mg tablets)'],
    formulations: ['Tablet'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'No well-established, clinically significant direct ocular toxicity — spironolactone is notable among diuretics for its lack of a characteristic ocular side-effect profile (unlike the sulfonamide-derived thiazides/loop diuretics)',
        'Rare, poorly substantiated case reports of blurred vision or visual disturbance, generally not considered clinically significant or drug class-defining',
      ],
      systemic: [
        'Hyperkalemia (dose-limiting; can be serious/life-threatening, especially with renal impairment or concurrent ACE inhibitors/ARBs/potassium supplements)',
        'Gynecomastia and breast tenderness in men (antiandrogenic/antiestrogenic activity) — classic, dose-related side effect',
        'Menstrual irregularities in women',
        'Decreased libido, erectile dysfunction',
        'Gastrointestinal upset',
        'Hyponatremia',
      ],
    },
    contraindications: [
      'Hyperkalemia',
      'Severe renal impairment/anuria',
      'Addison disease',
      'Concurrent use with other potassium-sparing diuretics without close monitoring',
    ],
    precautions: [
      'Monitor serum potassium and renal function regularly, especially with concurrent ACE inhibitors, ARBs, or NSAIDs',
      'Counsel patients about the possibility of gynecomastia, which may prompt a switch to eplerenone (a more selective aldosterone antagonist with less antiandrogenic activity)',
    ],
    drugInteractions: [
      'ACE inhibitors, ARBs, potassium supplements/salt substitutes — additive hyperkalemia risk',
      'NSAIDs — reduced diuretic/antihypertensive effect, increased hyperkalemia risk',
      'Digoxin — spironolactone can increase digoxin levels and cause false elevation in some digoxin assays',
      'Lithium — reduced renal clearance, increased lithium toxicity risk',
    ],
    patientCounseling: [
      'Avoid potassium supplements and salt substitutes containing potassium unless directed by your physician',
      'Report symptoms of high potassium (muscle weakness, irregular heartbeat) promptly',
      'Men should report breast tenderness or enlargement, which is a known, reversible side effect',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy; antiandrogenic activity raises theoretical concern for feminization of a male fetus, generally avoided unless benefit outweighs risk. Excreted in breast milk in small amounts; use with caution while nursing.',
    pediatricConsiderations: [
      'Used off-label in pediatric heart failure and edema, and as an antiandrogen in congenital adrenal hyperplasia and pediatric/adolescent hirsutism or acne, with weight-based dosing',
      'No characteristic pediatric ocular concern beyond the adult profile, which itself lacks an established ocular toxicity',
    ],
    offLabelUses: [
      'Hirsutism and acne (antiandrogenic effect)',
      'Feminizing hormone therapy in transgender women (antiandrogen)',
    ],
    monitoring: [
      'No specific ophthalmic monitoring protocol is required for spironolactone, as it lacks a characteristic ocular toxicity profile',
      'Useful to ask about as part of a general medication history, but does not by itself warrant additional dilated exam frequency or targeted ocular testing',
    ],
    clinicalPearls: [
      'Spironolactone is a useful board "contrast" drug: while most diuretics (thiazides, loop diuretics, oral carbonic anhydrase inhibitors) carry sulfonamide-related idiosyncratic ocular risks, spironolactone is NOT a sulfonamide and has no established analogous ocular toxicity',
      'Its most testable side effects are systemic/endocrine (gynecomastia, hyperkalemia) rather than ocular — recognizing what a drug does NOT do is itself a common board strategy',
      'Eplerenone is a newer, more selective aldosterone antagonist developed specifically to reduce the antiandrogenic (gynecomastia) side effects seen with spironolactone',
    ],
    highYield: [
      'Spironolactone is NOT a sulfonamide derivative and has NO established characteristic ocular toxicity — a useful negative/contrast fact when distinguishing it from thiazide and loop diuretics on boards',
      'Its classic, most tested side effect is gynecomastia (antiandrogenic activity), not any ocular finding',
      'Hyperkalemia is the major dose-limiting systemic toxicity to know, especially in combination with ACE inhibitors/ARBs',
      'When a board question describes a diuretic causing acute angle closure/myopic shift, spironolactone is a classic WRONG answer choice precisely because it lacks the sulfonamide moiety'],
    references: [
      { label: 'Aldosterone antagonists: systemic side effects and lack of characteristic ocular toxicity', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Diuretic drug classes compared for ocular relevance', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },

  // ===== BETA BLOCKER =====
  {
    id: 'metoprolol',
    genericName: 'Metoprolol',
    brandNames: ['Lopressor', 'Toprol XL'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Cardioselective (beta-1 selective) adrenergic receptor antagonist. Reduces heart rate, myocardial contractility, and cardiac output, and decreases renin release from the juxtaglomerular apparatus, producing antihypertensive and antianginal effects and reducing mortality in heart failure and post-myocardial infarction. Selectivity for beta-1 (cardiac) over beta-2 (bronchial/vascular smooth muscle, and also present in the ciliary epithelium) receptors is relative and dose-dependent, not absolute.',
    indications: ['Hypertension', 'Angina pectoris', 'Heart failure with reduced ejection fraction (succinate/extended-release form)', 'Post-myocardial infarction secondary prevention', 'Atrial fibrillation/flutter rate control', 'Supraventricular tachyarrhythmias'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Tartrate (immediate-release): 25-100 mg twice daily; Succinate (extended-release): 25-200 mg once daily',
    concentrations: ['N/A — oral/systemic (tartrate 25/50/100 mg tablets; succinate ER 25/50/100/200 mg tablets; IV formulation available)'],
    formulations: ['Tablet', 'Extended-release tablet', 'Injection'],
    route: 'Oral (or intravenous in acute cardiac settings)',
    sideEffects: {
      ocular: [
        'Dry eye syndrome — reduced tear film/aqueous tear production and reduced tear lysozyme/lactoferrin content, similar in principle to the mechanism by which topical beta blockers (e.g., timolol) reduce aqueous humor production, though via systemic beta-1/beta-2 blockade rather than direct ciliary body action',
        'Ocular irritation, decreased tear break-up time reported with chronic systemic beta-blocker use',
        'Rare reports of blurred vision',
        'Because metoprolol is relatively beta-1 selective, it is LESS likely than non-selective systemic beta blockers (e.g., propranolol, nadolol) to lower intraocular pressure — an important distinguishing physiologic point',
      ],
      systemic: [
        'Bradycardia, AV conduction delay/heart block',
        'Fatigue, dizziness',
        'Hypotension',
        'Masking of tachycardia and other adrenergic warning signs of hypoglycemia in diabetic patients (though less pronounced than with non-selective agents, since the tachycardic response is largely beta-1 mediated)',
        'Bronchospasm risk (reduced but not eliminated compared with non-selective beta blockers — selectivity is dose-dependent)',
        'Depression, sexual dysfunction, cold extremities (peripheral vasoconstriction)',
        'Exacerbation of decompensated heart failure if initiated/uptitrated too quickly',
      ],
    },
    contraindications: [
      'Severe bradycardia',
      'Second- or third-degree AV block (without a pacemaker)',
      'Decompensated/overt cardiac failure (acute)',
      'Cardiogenic shock',
      'Severe/unstable reactive airway disease (relative — cardioselectivity reduces but does not eliminate risk)',
    ],
    precautions: [
      'Do not discontinue abruptly — risk of rebound hypertension, tachycardia, and angina/myocardial infarction; taper over 1-2 weeks',
      'Caution in diabetics (attenuated hypoglycemia warning signs)',
      'Caution in patients with peripheral vascular disease',
      'Cardioselectivity is dose-dependent and diminishes at higher doses',
    ],
    drugInteractions: [
      'Verapamil/diltiazem (non-dihydropyridine calcium channel blockers) — additive bradycardia, AV block, and negative inotropy; use with caution/avoid combining, especially IV forms',
      'Topical ophthalmic beta blockers (e.g., timolol) — additive systemic beta-blockade (bradycardia, hypotension) when a patient is on both an oral and a topical beta blocker; relevant medication-reconciliation point for optometrists prescribing/monitoring glaucoma therapy',
      'Clonidine — risk of rebound hypertension if clonidine is withdrawn while patient remains on a beta blocker',
      'Insulin/sulfonylureas — can blunt tachycardic warning sign of hypoglycemia',
      'CYP2D6 inhibitors (e.g., fluoxetine, paroxetine, quinidine) — increased metoprolol levels',
    ],
    patientCounseling: [
      'Do not stop this medication suddenly without medical guidance',
      'Report new or worsening dry eye symptoms to your eye doctor, who can offer artificial tears or other dry eye therapy',
      'Diabetic patients should monitor blood glucose carefully, as this medication can mask some symptoms of low blood sugar',
      'Tell your eye doctor about this medication, especially if glaucoma eye drops (particularly another beta blocker like timolol) are being considered',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy; associated with fetal growth restriction and neonatal bradycardia/hypoglycemia with third-trimester exposure. Excreted in breast milk in small amounts; generally considered compatible with breastfeeding with infant monitoring.',
    pediatricConsiderations: [
      'Used off-label for pediatric hypertension and arrhythmias with weight-based dosing; not FDA-approved specifically for pediatric use, and pediatric-specific outcome data are more limited than for propranolol',
      'Young/fasting infants and children are at increased risk of hypoglycemia and its masked adrenergic warning signs on beta-blocker therapy',
    ],
    offLabelUses: [
      'Migraine prophylaxis',
    ],
    relatedConditionIds: ['ocular-migraine', 'hypertensive-retinopathy'],
    monitoring: [
      'Ask about dry eye symptoms and consider tear film assessment/tear break-up time in patients on chronic beta-blocker therapy',
      'Check whether a patient on oral metoprolol is also using a topical beta blocker (e.g., timolol) for glaucoma — additive systemic beta-blockade is a reconciliation point relevant to primary care communication',
      'No dilated fundus exam or visual field monitoring is specifically indicated for metoprolol itself',
    ],
    clinicalPearls: [
      'Metoprolol is the classic example used to teach beta-1 selectivity by contrast with non-selective agents (propranolol, nadolol) and with the topical ophthalmic beta blockers (timolol = non-selective; betaxolol = beta-1 selective, directly analogous to metoprolol)',
      'Systemic beta blockers as a class reduce tear secretion and can contribute to or worsen dry eye disease, an underrecognized but testable ocular surface effect distinct from the IOP-lowering effect of topical agents',
      'Because beta-1 receptors dominate the tachycardic hypoglycemia warning response, cardioselective agents like metoprolol mask hypoglycemia less than non-selective agents, though sweating (a cholinergic, not beta-adrenergic, response) is preserved with both',
    ],
    highYield: [
      'Metoprolol is a CARDIOSELECTIVE (beta-1) systemic beta blocker — direct systemic analog of topical betaxolol, contrasted with non-selective timolol',
      'Systemic beta blockers as a class reduce tear production and are a common, testable cause of dry eye disease — relevant differential when a patient on antihypertensive therapy presents with dry eye symptoms',
      'Combining oral metoprolol with topical timolol (or other topical beta blockers) risks additive systemic bradycardia/hypotension — a key medication-safety cross-check for optometrists',
      'Cardioselectivity reduces (but does not eliminate) masking of hypoglycemia and bronchospasm risk compared with non-selective beta blockers',
    ],
    references: [
      { label: 'Systemic beta-blockers and ocular surface/tear film effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Beta-1 selective vs non-selective beta-blockade comparison', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },

  // ===== CALCIUM CHANNEL BLOCKERS =====
  {
    id: 'verapamil',
    genericName: 'Verapamil',
    brandNames: ['Calan', 'Verelan'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Non-dihydropyridine calcium channel blocker (phenylalkylamine class) that inhibits L-type calcium channels, with relatively greater effect on the myocardium and cardiac conduction system (SA and AV nodes) than on vascular smooth muscle compared with dihydropyridine agents (e.g., amlodipine). Reduces heart rate, AV nodal conduction velocity, and myocardial contractility, and produces vasodilation.',
    indications: ['Hypertension', 'Angina pectoris (including vasospastic/Prinzmetal angina)', 'Supraventricular tachyarrhythmias (rate control in atrial fibrillation/flutter, PSVT)', 'Migraine prophylaxis (off-label, including cluster headache prophylaxis)'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring and as a comparison/interaction point, not a primary ocular toxin'],
    typicalDosing: 'Immediate-release: 80-120 mg three times daily; extended-release: 120-480 mg once daily, titrated to effect',
    concentrations: ['N/A — oral/systemic (immediate-release and extended-release tablets/capsules, 40-480 mg depending on formulation; IV formulation for acute arrhythmia management)'],
    formulations: ['Tablet', 'Extended-release capsule', 'Injection'],
    route: 'Oral (or intravenous in acute arrhythmia settings)',
    sideEffects: {
      ocular: [
        'Direct ocular toxicity is limited and not a primary clinical concern with verapamil, in contrast to many other systemic cardiovascular drugs',
        'Rare reports of blurred vision, nystagmus, or transient visual disturbance, generally attributed to systemic hypotension rather than direct ocular drug effect',
        'Periorbital/eyelid edema can occur as part of the peripheral edema associated with calcium channel blockers as a class, though this is less common/pronounced with verapamil than with dihydropyridine agents (e.g., amlodipine)',
        'Its clinical relevance to optometry is mainly indirect: verapamil is a first-line agent for migraine prophylaxis, and patients with ocular/retinal migraine or migraine with visual aura are commonly encountered in optometric practice',
      ],
      systemic: [
        'Constipation (classic, dose-related side effect, more common than with other calcium channel blockers)',
        'Bradycardia, AV block/heart block',
        'Hypotension',
        'Peripheral edema (less pronounced than with dihydropyridines)',
        'Gingival hyperplasia (less common than with dihydropyridines but reported)',
        'Negative inotropy — caution/avoid in reduced ejection fraction heart failure',
      ],
    },
    contraindications: [
      'Severe left ventricular dysfunction/decompensated heart failure',
      'Sick sinus syndrome or second-/third-degree AV block (without a pacemaker)',
      'Severe hypotension or cardiogenic shock',
      'Concomitant IV beta blocker administration (risk of severe bradycardia/asystole)',
      'Wolff-Parkinson-White syndrome with atrial fibrillation (risk of accelerated conduction via accessory pathway)',
    ],
    precautions: [
      'Caution when combined with oral beta blockers (additive bradycardia/AV block/negative inotropy) — relevant when a patient is also using a topical ophthalmic beta blocker such as timolol',
      'Monitor for constipation, especially in elderly patients',
      'Dose adjustment needed in hepatic impairment',
    ],
    drugInteractions: [
      'Beta blockers (oral or topical ophthalmic, e.g., timolol) — additive bradycardia, AV nodal block, and negative inotropy; clinically important combination to flag when reviewing a glaucoma patient\'s systemic medication list',
      'Digoxin — verapamil increases digoxin levels and can potentiate AV block',
      'Statins metabolized by CYP3A4 (e.g., simvastatin) — verapamil increases statin levels/myopathy risk',
      'Grapefruit juice — inhibits CYP3A4 metabolism, increasing verapamil levels',
    ],
    patientCounseling: [
      'Increase fluid and fiber intake to help offset constipation, a common side effect',
      'Do not stop abruptly without medical guidance',
      'Tell your eye doctor about all cardiovascular medications, since combining this drug with certain glaucoma eye drops (beta blockers) can affect heart rate',
      'Report new visual symptoms if using verapamil for migraine prevention, so they can be distinguished from typical migraine aura',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy — crosses the placenta; use only if benefits outweigh risks. Excreted in breast milk in low concentrations; generally considered compatible with breastfeeding with monitoring.',
    pediatricConsiderations: [
      'IV verapamil is contraindicated in infants younger than 1 year of age because of reports of severe hypotension, bradycardia, and cardiac arrest with rapid IV administration, particularly in cardiovascularly compromised infants or those recently given other long-acting antiarrhythmics',
      'Oral verapamil has been used with caution in older children for arrhythmias and migraine prophylaxis, but pediatric cardiologists generally favor other agents in infancy given the IV contraindication',
    ],
    offLabelUses: [
      'Migraine and cluster headache prophylaxis',
    ],
    relatedConditionIds: ['ocular-migraine'],
    monitoring: [
      'No specific ophthalmic monitoring protocol or dilated exam schedule is driven by verapamil itself',
      'Relevant to ask about when a glaucoma patient is being considered for or is already using a topical beta blocker, given the additive bradycardia/AV block risk',
      'Useful to note in patients presenting with visual aura/photopsia being evaluated for migraine, since verapamil is a common prophylactic agent in that population',
    ],
    clinicalPearls: [
      'Verapamil is a useful board "contrast" drug for direct ocular toxicity — unlike hydroxychloroquine, amiodarone, or the sulfonamide diuretics, it does not have a well-defined characteristic retinal, corneal, or angle-closure toxicity profile',
      'Its main testable interaction relevant to eye care is the additive bradycardia/AV block risk when combined with beta blockers, including topical timolol — a classic "systemic medication reconciliation" board scenario',
      'As a first-line migraine prophylactic agent, verapamil is frequently seen in patients who also report visual aura/photopsia, making the history relevant even though the drug itself is not causing the visual symptoms',
    ],
    highYield: [
      'Verapamil (non-dihydropyridine CCB) has NO well-established characteristic direct ocular toxicity — important negative fact distinguishing it from classic "toxic" systemic drugs (hydroxychloroquine, amiodarone, ethambutol, etc.)',
      'Key testable interaction: combining verapamil (or diltiazem) with a beta blocker — including topical ophthalmic timolol — risks additive bradycardia/AV block/hypotension',
      'Verapamil is a first-line agent for migraine prophylaxis, relevant to optometric patients presenting with ocular migraine/visual aura',
      'Constipation is verapamil\'s most classic and distinguishing systemic side effect among calcium channel blockers',
    ],
    references: [
      { label: 'Calcium channel blockers: systemic effects and beta-blocker interactions', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Migraine prophylaxis and ocular migraine overlap', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },
  {
    id: 'diltiazem',
    genericName: 'Diltiazem',
    brandNames: ['Cardizem'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Non-dihydropyridine calcium channel blocker (benzothiazepine class) that inhibits L-type calcium channels in cardiac and vascular smooth muscle, with an intermediate profile between verapamil (more cardiac-selective) and dihydropyridines (more vascular-selective). Reduces heart rate, slows AV nodal conduction, decreases myocardial contractility, and produces coronary and peripheral vasodilation.',
    indications: ['Hypertension', 'Angina pectoris (including vasospastic angina)', 'Supraventricular tachyarrhythmias (rate control in atrial fibrillation/flutter, PSVT)'],
    ocularUses: ['None — systemic medication; relevant to optometry primarily as a class-comparison/interaction point rather than a primary ocular toxin'],
    typicalDosing: 'Immediate-release: 30-90 mg three to four times daily; extended-release: 120-480 mg once daily, titrated to effect',
    concentrations: ['N/A — oral/systemic (immediate-release and extended-release tablets/capsules, 30-480 mg depending on formulation; IV formulation for acute arrhythmia management)'],
    formulations: ['Tablet', 'Extended-release capsule', 'Injection'],
    route: 'Oral (or intravenous in acute arrhythmia settings)',
    sideEffects: {
      ocular: [
        'Direct ocular toxicity is limited, similar to verapamil — diltiazem is not associated with a characteristic corneal, lenticular, or retinal toxicity syndrome',
        'Rare reports of blurred vision, generally attributable to systemic hypotension',
        'Periorbital edema can occur as part of the peripheral edema associated with calcium channel blockers as a class, though again less pronounced than with dihydropyridine agents',
        'Gingival hyperplasia is a recognized calcium-channel-blocker class effect (most classically associated with dihydropyridines like nifedipine, but reported with diltiazem) — an oral, not ocular, finding but occasionally referenced alongside ocular class-effect questions on boards',
      ],
      systemic: [
        'Bradycardia, AV block/heart block',
        'Hypotension',
        'Peripheral/pedal edema',
        'Headache, dizziness',
        'Constipation (less pronounced than with verapamil)',
        'Negative inotropy — caution/avoid in reduced ejection fraction heart failure',
      ],
    },
    contraindications: [
      'Severe left ventricular dysfunction/decompensated heart failure',
      'Sick sinus syndrome or second-/third-degree AV block (without a pacemaker)',
      'Severe hypotension or cardiogenic shock',
      'Concomitant IV beta blocker administration (risk of severe bradycardia/asystole)',
    ],
    precautions: [
      'Caution when combined with oral beta blockers (additive bradycardia/AV block/negative inotropy) — relevant when a patient is also using a topical ophthalmic beta blocker such as timolol',
      'Dose adjustment/caution needed in hepatic impairment',
      'Monitor heart rate and blood pressure, especially at initiation and dose changes',
    ],
    drugInteractions: [
      'Beta blockers (oral or topical ophthalmic, e.g., timolol) — additive bradycardia, AV nodal block, and negative inotropy; the same clinically important reconciliation point as with verapamil',
      'Statins metabolized by CYP3A4 (e.g., simvastatin, atorvastatin) — diltiazem increases statin levels, raising myopathy/rhabdomyolysis risk',
      'Digoxin — diltiazem can increase digoxin levels and potentiate AV block',
      'Cyclosporine — diltiazem increases cyclosporine levels',
    ],
    patientCounseling: [
      'Report swelling of the ankles/legs, which is a known side effect of this drug class',
      'Do not stop abruptly without medical guidance',
      'Tell your eye doctor about all cardiovascular medications, since combining this drug with beta-blocker glaucoma eye drops can affect heart rate',
      'Maintain regular dental care, as calcium channel blockers can occasionally cause gum overgrowth',
    ],
    pregnancyLactation:
      'Use with caution in pregnancy — limited human data; use only if benefits outweigh risks. Excreted in breast milk; use caution while nursing.',
    pediatricConsiderations: [
      'Pediatric safety and efficacy data are limited; used off-label in older children for arrhythmias/hypertension with weight-based dosing',
      'As with verapamil, non-dihydropyridine calcium channel blockers are used cautiously in young infants given similar (though less extensively documented) hemodynamic collapse concerns with IV administration',
    ],
    monitoring: [
      'No specific ophthalmic monitoring protocol or dilated exam schedule is driven by diltiazem itself',
      'Relevant to review when a glaucoma patient is being considered for or is already using a topical beta blocker, given the additive bradycardia/AV block risk shared with verapamil',
    ],
    clinicalPearls: [
      'Diltiazem and verapamil are grouped together on boards as the two non-dihydropyridine calcium channel blockers with the most significant cardiac conduction effects and the most important beta-blocker interaction, in contrast to dihydropyridines (e.g., amlodipine, nifedipine), which are more vasoselective and cause more peripheral edema/gingival hyperplasia but less bradycardia',
      'Like verapamil, diltiazem lacks a well-defined characteristic ocular toxicity syndrome, making it a useful "distractor" contrast drug on exams that test for ocular side effects',
      'Statin interaction (increased statin levels via CYP3A4 inhibition) is a clinically relevant, testable interaction given how often statins and calcium channel blockers are co-prescribed in cardiovascular patients',
    ],
    highYield: [
      'Diltiazem, like verapamil, is a non-dihydropyridine calcium channel blocker with NO well-established characteristic direct ocular toxicity',
      'Same key testable interaction as verapamil: additive bradycardia/AV block/hypotension when combined with beta blockers, including topical timolol',
      'Diltiazem meaningfully increases levels of CYP3A4-metabolized statins (e.g., simvastatin, atorvastatin), raising myopathy risk — a clinically relevant polypharmacy point',
      'Gingival hyperplasia is a calcium-channel-blocker class effect (most associated with dihydropyridines) occasionally referenced as an oral (not ocular) exam finding'],
    references: [
      { label: 'Non-dihydropyridine calcium channel blockers: cardiac effects and beta-blocker interaction', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Calcium channel blocker drug class comparison', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },

  // ===== STATIN =====
  {
    id: 'atorvastatin',
    genericName: 'Atorvastatin',
    brandNames: ['Lipitor'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'HMG-CoA reductase inhibitor ("statin") that competitively inhibits the rate-limiting enzyme in hepatic cholesterol synthesis, upregulating LDL-receptor expression and increasing hepatic clearance of LDL cholesterol from the circulation. Also has pleiotropic anti-inflammatory and endothelial-stabilizing effects believed to contribute to cardiovascular risk reduction independent of lipid lowering.',
    indications: ['Hyperlipidemia/hypercholesterolemia', 'Primary and secondary prevention of atherosclerotic cardiovascular disease (myocardial infarction, stroke)', 'Adjunct to diet in patients with elevated LDL cholesterol, including familial hypercholesterolemia'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring and for its role in reducing systemic vascular risk factors relevant to retinal vascular disease'],
    typicalDosing: 'Oral: 10-80 mg once daily (any time of day, with or without food)',
    concentrations: ['N/A — oral/systemic (10 mg, 20 mg, 40 mg, 80 mg tablets)'],
    formulations: ['Tablet'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Cataract: an association between statin use and cataract has been debated in the literature — early observational data raised concern, but larger studies (including the Heart Protection Study) did not show a clear increased risk, and some data even suggest a possible protective/neutral effect; net consensus is that any cataractogenic effect, if real, is minor and not considered a major clinical concern, but it remains a testable historical/controversial point',
        'Rare reports of ocular myasthenia-like symptoms, ptosis, and diplopia associated with statin-induced myopathy affecting the extraocular muscles — an uncommon but recognized presentation of statin myopathy outside the more typical proximal limb muscle involvement',
        'Rare reports of blurred vision',
        'No established retinal toxicity from atorvastatin itself; rather, statins are used to help reduce systemic vascular risk factors (atherosclerosis, dyslipidemia) that contribute to retinal vascular disease such as retinal artery/vein occlusion',
      ],
      systemic: [
        'Myalgia/myopathy (dose-related, common) — can progress to rhabdomyolysis (rare but serious, with myoglobinuria and acute kidney injury)',
        'Elevated liver transaminases (hepatotoxicity, generally mild and reversible)',
        'Headache, gastrointestinal upset',
        'New-onset or worsening hyperglycemia/increased risk of type 2 diabetes with long-term use',
        'Rare peripheral neuropathy',
      ],
    },
    contraindications: [
      'Active liver disease or unexplained persistent transaminase elevation',
      'Pregnancy',
      'Known hypersensitivity to atorvastatin',
      'Concurrent use with strong CYP3A4 inhibitors at high statin doses (increased myopathy/rhabdomyolysis risk)',
    ],
    precautions: [
      'Report unexplained muscle pain, tenderness, or weakness promptly, especially with fever or malaise, given rhabdomyolysis risk',
      'Baseline and periodic liver function monitoring as clinically indicated',
      'Caution with concurrent use of drugs that increase statin levels/myopathy risk (e.g., diltiazem, verapamil, certain antibiotics/antifungals)',
      'Monitor blood glucose given modest diabetogenic effect',
    ],
    drugInteractions: [
      'Diltiazem/verapamil (CYP3A4 inhibitors) — increased atorvastatin levels and myopathy/rhabdomyolysis risk',
      'Grapefruit juice — inhibits CYP3A4 metabolism, increasing atorvastatin levels',
      'Fibrates (especially gemfibrozil) — additive myopathy/rhabdomyolysis risk when combined with statins',
      'Cyclosporine, certain macrolide antibiotics, azole antifungals — increased statin levels via CYP3A4 inhibition',
      'Warfarin — statins can potentiate anticoagulant effect, requiring INR monitoring',
    ],
    patientCounseling: [
      'Report any unexplained muscle pain, tenderness, or weakness right away, particularly if accompanied by dark urine, fever, or fatigue',
      'Avoid large quantities of grapefruit juice, which can increase drug levels',
      'Routine blood tests (liver function, and muscle enzymes if symptomatic) may be ordered periodically',
      'Continue taking this medication as directed even without symptoms, since it works by lowering cholesterol over time to reduce cardiovascular risk',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy — cholesterol and cholesterol-derived products are essential for fetal development, and statins may cause fetal harm; discontinue if pregnancy occurs or is planned. Not recommended during breastfeeding due to potential for serious adverse effects in the nursing infant.',
    pediatricConsiderations: [
      'FDA-approved for pediatric heterozygous and homozygous familial hypercholesterolemia beginning at age 10 (starting dose 10 mg/day, usual range 10-80 mg/day depending on indication); safety and efficacy not established below age 10',
      'Adolescent females of reproductive potential require the same pregnancy avoidance counseling as adults given fetal cholesterol-synthesis dependence',
    ],
    relatedConditionIds: ['retinal-artery-occlusion', 'retinal-vein-occlusion'],
    monitoring: [
      'No specific dilated fundus exam or visual field monitoring schedule is required for atorvastatin, since it lacks an established characteristic retinal or corneal toxicity',
      'Reasonable to note cataract status at routine exams given the historically debated (though largely unsubstantiated) association, without requiring accelerated exam frequency',
      'Ask about new diplopia, ptosis, or eyelid/extraocular muscle weakness in a patient reporting statin-associated myopathy symptoms, as this can rarely reflect ocular involvement',
    ],
    clinicalPearls: [
      'The statin-cataract association is a classic example of an initially concerning epidemiologic signal that did not hold up under more rigorous study — useful for boards to recognize as a "debated/low-risk" association rather than a definitive, actionable toxicity like hydroxychloroquine retinopathy',
      'Statins are more clinically important to optometry for their role in REDUCING systemic vascular risk factors relevant to retinal vascular occlusive disease, hypertensive retinopathy, and diabetic retinopathy progression, than for causing direct ocular toxicity',
      'Statin-associated myopathy affecting extraocular muscles (causing diplopia/ptosis) is a rare but distinctive presentation worth recognizing, distinct from the far more common proximal limb myopathy',
    ],
    highYield: [
      'The statin-cataract link is DEBATED/largely unsubstantiated in larger studies — a classic "myth vs. evidence" board point, not a confirmed toxicity like hydroxychloroquine or corticosteroids',
      'Rare but recognized statin myopathy can involve extraocular muscles, presenting as diplopia or ptosis — an atypical but testable ocular presentation of a systemic drug reaction',
      'Atorvastatin has no established direct retinal toxicity; its optometric relevance is chiefly its role in reducing atherosclerotic/vascular risk factors for retinal vascular disease (e.g., retinal vein/artery occlusion)',
      'Key drug interaction to recognize: diltiazem/verapamil and grapefruit juice increase atorvastatin levels via CYP3A4 inhibition, raising myopathy/rhabdomyolysis risk',
    ],
    references: [
      { label: 'Statins and cataract risk: epidemiologic evidence review', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Statin-associated myopathy and rare ocular presentations', source: 'AAO/NBEO ocular pharmacology board review' },
    ],
  },
]
