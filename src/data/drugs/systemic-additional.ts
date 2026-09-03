import type { Drug } from '../../types/drug'

export const systemicAdditional: Drug[] = [
  // ===== ALPHA-1 ANTAGONISTS (GENITOURINARY / BPH) =====
  {
    id: 'doxazosin',
    genericName: 'Doxazosin',
    brandNames: ['Cardura'],
    drugClass: 'Genitourinary',
    mechanismOfAction:
      'Selective alpha-1 adrenergic receptor antagonist. Blocks alpha-1 receptors in vascular smooth muscle (lowering blood pressure) and in bladder neck/prostatic smooth muscle (relieving bladder outlet obstruction in BPH). Unlike tamsulosin, doxazosin is a non-subtype-selective alpha-1 antagonist (blocks alpha-1A, alpha-1B, and alpha-1D roughly equally) rather than being preferentially alpha-1A selective, which is why its effect on the iris dilator muscle (predominantly alpha-1A) and its associated Intraoperative Floppy Iris Syndrome (IFIS) risk is generally considered lower than tamsulosin, though still clinically real.',
    indications: [
      'Benign prostatic hyperplasia (BPH) - relief of urinary obstructive symptoms',
      'Hypertension (as an adjunct, less commonly first-line given availability of other agents)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 1 mg once daily initially, titrated up to 4-8 mg once daily (immediate-release) depending on indication and response',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Intraoperative Floppy Iris Syndrome (IFIS) during cataract surgery - poor pupillary dilation, iris stroma billowing, and progressive intraoperative miosis, via alpha-1 antagonism of the iris dilator muscle',
        'IFIS risk with doxazosin is generally considered LOWER than with tamsulosin because doxazosin is a non-selective alpha-1 antagonist rather than being alpha-1A predominant (the iris dilator muscle is rich in alpha-1A receptors)',
        'Blurred vision (uncommon)',
        'Mild pupil constriction/poor dilation response to standard mydriatic drops, even outside the surgical setting, in some patients',
      ],
      systemic: [
        'Orthostatic hypotension, dizziness, syncope, particularly with the first dose ("first-dose effect")',
        'Headache',
        'Fatigue/somnolence',
        'Peripheral edema',
        'Reflex tachycardia',
      ],
    },
    contraindications: [
      'Known hypersensitivity to doxazosin or other quinazoline-class alpha-1 antagonists',
      'Severe hepatic impairment (relative)',
    ],
    precautions: [
      'CRITICAL: Disclose current or past doxazosin use to the cataract surgeon before any intraocular surgery given IFIS risk',
      'First-dose hypotension/syncope risk - initial dose typically given at bedtime',
      'Use caution when combined with other antihypertensives or PDE5 inhibitors (additive hypotension)',
      'Caution in the elderly given fall risk from orthostatic hypotension',
    ],
    drugInteractions: [
      'Other alpha-1 antagonists (tamsulosin, terazosin, alfuzosin) - additive hypotension and additive IFIS risk, generally not combined',
      'PDE5 inhibitors (sildenafil, tadalafil) - additive hypotensive effect',
      'Other antihypertensives - additive blood pressure lowering',
    ],
    patientCounseling: [
      'Tell your eye surgeon that you take (or have ever taken) doxazosin before any cataract or eye surgery, even if you have since stopped it',
      'Rise slowly from sitting or lying to reduce dizziness, especially after the first dose or a dose increase',
      'Report any fainting, severe dizziness, or vision changes',
    ],
    pregnancyLactation:
      'Not typically indicated in the population for whom this drug is prescribed (BPH is a male-specific condition; use in hypertension during pregnancy would be individualized). Limited human data; use only if clearly needed and benefits outweigh risks.',
    pediatricConsiderations: [
      'Safety and efficacy have not been formally established in children/adolescents <18 years; when used off-label for pediatric hypertension, some experts recommend starting at 1 mg once daily, titrated to a maximum of 4 mg once daily.',
    ],
    relatedConditionIds: ['cataract'],
    monitoring: [
      'Preoperative surgical history intake should specifically ask about current AND past alpha-1 antagonist use (doxazosin, terazosin, tamsulosin, alfuzosin) before any planned cataract surgery',
      'Blood pressure/orthostatic symptoms',
      'Pupil dilation response at dilated fundus exams - poor mydriasis can be a clue to alpha-1 antagonist use',
    ],
    clinicalPearls: [
      'Board-relevant comparative point: doxazosin and terazosin are non-selective alpha-1 antagonists (alpha-1A/B/D), while tamsulosin is alpha-1A-selective - because the iris dilator muscle is predominantly alpha-1A, tamsulosin carries the HIGHEST IFIS risk among the alpha blockers, with doxazosin and terazosin considered lower but not zero risk',
      'IFIS risk can persist even after the medication is discontinued, so surgical history-taking should ask about ANY past use, not just current use',
      'Doxazosin is also used off-label/adjunctively for hypertension, unlike tamsulosin which is essentially BPH-specific, giving it a broader patient population to screen preoperatively',
    ],
    highYield: [
      'Doxazosin causes INTRAOPERATIVE FLOPPY IRIS SYNDROME (IFIS) via alpha-1 receptor antagonism, but risk is generally LOWER than tamsulosin because doxazosin is non-selective across alpha-1 subtypes rather than alpha-1A-predominant',
      'Classic board distinguishing point: tamsulosin (alpha-1A selective) = highest IFIS risk; doxazosin/terazosin (non-selective alpha-1 antagonists) = lower but real IFIS risk',
      'Preoperative cataract surgery history-taking must screen for ALL alpha-1 antagonists, not just tamsulosin, including doxazosin used for BPH or hypertension',
      'IFIS risk persists even after drug discontinuation - disclose any past use',
    ],
    references: [
      { label: 'Alpha-1 antagonist subtype selectivity and IFIS risk', source: 'Chang & Campbell, Journal of Cataract & Refractive Surgery' },
      { label: 'Doxazosin pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },
  {
    id: 'terazosin',
    genericName: 'Terazosin',
    brandNames: ['Hytrin'],
    drugClass: 'Genitourinary',
    mechanismOfAction:
      'Selective, non-subtype-specific alpha-1 adrenergic receptor antagonist, structurally and pharmacologically similar to doxazosin (both quinazoline-class alpha blockers). Relaxes vascular smooth muscle (antihypertensive effect) and bladder neck/prostatic smooth muscle (relief of BPH obstructive symptoms). Like doxazosin, it lacks the alpha-1A subtype selectivity of tamsulosin, so its blockade of the iris dilator muscle (and resultant IFIS risk) is present but generally considered less pronounced than tamsulosin.',
    indications: [
      'Benign prostatic hyperplasia (BPH) - relief of urinary obstructive symptoms',
      'Hypertension',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 1 mg once daily at bedtime initially, titrated up to 5-10 mg once daily depending on indication and response',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Capsule'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Intraoperative Floppy Iris Syndrome (IFIS) during cataract surgery - iris billowing, poor dilation, progressive intraoperative miosis, via alpha-1 antagonism of the iris dilator muscle',
        'IFIS risk considered lower than tamsulosin due to non-selective (rather than alpha-1A-predominant) receptor blockade, part of the same "know the alpha blockers" board family as doxazosin',
        'Blurred vision (uncommon)',
        'Poor pupillary dilation response to mydriatic drops in some patients, even outside the surgical setting',
      ],
      systemic: [
        'Orthostatic hypotension, dizziness, syncope - notable first-dose effect',
        'Headache',
        'Fatigue, somnolence',
        'Peripheral edema',
        'Nasal congestion',
      ],
    },
    contraindications: [
      'Known hypersensitivity to terazosin or other quinazoline-class alpha-1 antagonists',
    ],
    precautions: [
      'CRITICAL: Disclose current or past terazosin use to the cataract surgeon before any intraocular surgery given IFIS risk',
      'First-dose hypotension/syncope risk - initial dose given at bedtime',
      'Caution when combined with other antihypertensives or PDE5 inhibitors (additive hypotension)',
      'Caution in the elderly given fall risk from orthostatic hypotension',
    ],
    drugInteractions: [
      'Other alpha-1 antagonists (tamsulosin, doxazosin, alfuzosin) - additive hypotension and additive IFIS risk',
      'PDE5 inhibitors - additive hypotensive effect',
      'Other antihypertensives - additive blood pressure lowering',
    ],
    patientCounseling: [
      'Tell your eye surgeon that you take (or have ever taken) terazosin before any cataract or eye surgery, even if you have since stopped it',
      'Rise slowly from sitting or lying to reduce dizziness, especially after the first dose',
      'Report any fainting, severe dizziness, or vision changes',
    ],
    pregnancyLactation:
      'Not typically indicated in the population for whom this drug is prescribed (BPH is a male-specific condition); limited human data if used for hypertension in pregnancy - use only if clearly needed.',
    pediatricConsiderations: [
      'Safety and efficacy have not been established in patients younger than 21 years; when used off-label for pediatric hypertension refractory to preferred agents (ACE inhibitors, ARBs, long-acting calcium channel blockers, thiazides), some experts recommend starting at 1 mg once daily, titrated to a maximum of 20 mg once daily.',
    ],
    relatedConditionIds: ['cataract'],
    monitoring: [
      'Preoperative surgical history intake should specifically ask about current AND past alpha-1 antagonist use before any planned cataract surgery',
      'Blood pressure/orthostatic symptoms',
      'Pupil dilation response at dilated fundus exams',
    ],
    clinicalPearls: [
      'Terazosin and doxazosin are pharmacologically near-identical (both non-selective quinazoline alpha-1 antagonists) and are grouped together on boards as "lower-but-real IFIS risk" alpha blockers, in contrast to alpha-1A-selective tamsulosin',
      'Know the full alpha-blocker family for boards: tamsulosin (highest IFIS risk, alpha-1A selective) vs. doxazosin/terazosin/alfuzosin (non-selective, lower but real IFIS risk)',
      'IFIS risk can persist after discontinuation, so surgical history-taking should ask about ANY past use',
    ],
    highYield: [
      'Terazosin causes INTRAOPERATIVE FLOPPY IRIS SYNDROME (IFIS), same mechanism family as tamsulosin and doxazosin, via alpha-1 receptor blockade of the iris dilator muscle',
      'Non-selective alpha-1 antagonists (terazosin, doxazosin) carry LOWER IFIS risk than the alpha-1A-selective tamsulosin, but the risk is still clinically real and must be disclosed preoperatively',
      'Preoperative history-taking for cataract surgery must screen for ALL alpha-1 antagonists, not just tamsulosin',
      'Prominent first-dose orthostatic hypotension is a systemic hallmark of this drug class',
    ],
    references: [
      { label: 'Alpha-1 antagonists and IFIS: a comparative review', source: 'Chang & Campbell, Journal of Cataract & Refractive Surgery' },
      { label: 'Terazosin pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },

  // ===== ANTIMUSCARINICS FOR OVERACTIVE BLADDER =====
  {
    id: 'tolterodine',
    genericName: 'Tolterodine',
    brandNames: ['Detrol'],
    drugClass: 'Genitourinary',
    mechanismOfAction:
      'Competitive muscarinic (antimuscarinic/anticholinergic) receptor antagonist, relatively non-selective across M1-M3 subtypes, used to relax detrusor smooth muscle and reduce involuntary bladder contractions in overactive bladder. Shares the same anticholinergic mechanism family as atropine and tricyclic antidepressants: antagonism of muscarinic receptors in the iris sphincter and ciliary muscle produces mydriasis and cycloplegia, and antagonism of lacrimal gland muscarinic receptors reduces tear secretion.',
    indications: [
      'Overactive bladder with symptoms of urinary urgency, frequency, and urge incontinence',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 1-2 mg twice daily (immediate-release) or 2-4 mg once daily (extended-release)',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Extended-release capsule'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Mydriasis (pupil dilation) from antimuscarinic blockade of the iris sphincter',
        'Cycloplegia with blurred near vision from antimuscarinic blockade of the ciliary muscle',
        'Dry eye / decreased tear production (anticholinergic effect on lacrimal gland)',
        'Precipitation of ACUTE ANGLE-CLOSURE GLAUCOMA in patients with anatomically narrow angles - a real, board-relevant risk, though less classically emphasized than with tricyclic antidepressants',
        'Blurred vision (nonspecific, in addition to cycloplegic component)',
      ],
      systemic: [
        'Dry mouth (very common)',
        'Constipation',
        'Headache',
        'Dizziness',
        'Urinary retention (paradoxical, given indication)',
        'QT prolongation (dose-related, more relevant in patients with hepatic/renal impairment or on CYP3A4 inhibitors)',
      ],
    },
    contraindications: [
      'Untreated narrow-angle glaucoma - significant contraindication given antimuscarinic mydriatic effect',
      'Urinary retention',
      'Gastric retention',
      'Known hypersensitivity to tolterodine',
    ],
    precautions: [
      'Assess anterior chamber angle status before initiating in patients with risk factors for narrow angles (hyperopia, shallow anterior chamber, family history)',
      'Use with caution in patients with significant bladder outlet obstruction (risk of urinary retention)',
      'Dose reduction needed with potent CYP3A4 inhibitors or in hepatic/renal impairment (QT prolongation risk)',
      'Caution in the elderly given general anticholinergic burden (cognitive effects, dry eye, dry mouth)',
    ],
    drugInteractions: [
      'Other anticholinergic drugs (TCAs, first-generation antihistamines, other antimuscarinics) - additive anticholinergic burden and additive angle-closure risk',
      'CYP3A4 inhibitors (ketoconazole, macrolide antibiotics) - increased tolterodine levels, increased QT prolongation risk',
      'Other QT-prolonging drugs - additive arrhythmia risk',
    ],
    patientCounseling: [
      'Report any eye pain, halos around lights, or sudden vision changes immediately - can indicate acute angle-closure glaucoma',
      'Expect dry mouth and possible blurred near vision as common anticholinergic effects',
      'Use caution with night driving given possible mydriasis/glare sensitivity',
    ],
    pregnancyLactation:
      'Limited human data; use only if clearly needed. Unknown whether excreted in breast milk in significant amounts; caution advised during lactation.',
    monitoring: [
      'Anterior chamber angle assessment (van Herick or gonioscopy) in patients with known narrow angles or significant hyperopia before/during therapy',
      'Ask about new eye pain, redness, or halos suggestive of angle-closure',
      'Tear film status/dry eye symptoms',
      'Accommodative/near vision complaints',
    ],
    clinicalPearls: [
      'Tolterodine belongs to the same anticholinergic mechanism family as atropine and tricyclic antidepressants (amitriptyline) - the classic board teaching point is that ANY antimuscarinic drug can precipitate angle-closure in a predisposed narrow angle, not just eye drops',
      'Overactive bladder antimuscarinics are extremely commonly prescribed, especially in older adults, who also carry the highest baseline prevalence of anatomically narrow angles - a clinically important intersection',
      'Newer, more bladder-selective antimuscarinics (e.g., darifenacin, solifenacin) and the non-anticholinergic beta-3 agonist mirabegron were developed partly to reduce this anticholinergic ocular/CNS burden',
    ],
    highYield: [
      'Tolterodine is an ANTIMUSCARINIC (same mechanism class as atropine/TCAs) that can cause mydriasis, cycloplegia, dry eye, and precipitate ACUTE ANGLE-CLOSURE GLAUCOMA in anatomically narrow angles',
      'Contraindicated in untreated narrow-angle glaucoma',
      'Blurred near vision from cycloplegia and dry mouth are the most commonly reported patient complaints',
      'Part of a broad drug class (overactive bladder antimuscarinics) that optometrists should recognize as an angle-closure risk factor when taking a medication history',
    ],
    references: [
      { label: 'Anticholinergic drugs and angle-closure glaucoma risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Tolterodine pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },
  {
    id: 'oxybutynin',
    genericName: 'Oxybutynin',
    brandNames: ['Ditropan', 'Ditropan XL'],
    drugClass: 'Genitourinary',
    mechanismOfAction:
      'Antimuscarinic (anticholinergic) agent with direct antispasmodic action on detrusor smooth muscle, used to reduce involuntary bladder contractions in overactive bladder. Shares the same muscarinic receptor antagonist mechanism as tolterodine and atropine; blockade of iris sphincter and ciliary muscle muscarinic receptors produces mydriasis and cycloplegia, and blockade of lacrimal gland receptors reduces tear secretion. Oxybutynin has relatively more pronounced systemic and CNS anticholinergic effects than some newer bladder-selective agents.',
    indications: [
      'Overactive bladder with symptoms of urinary urgency, frequency, and urge incontinence',
      'Neurogenic detrusor overactivity (e.g., in spinal cord injury, multiple sclerosis)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 5 mg two to three times daily (immediate-release) or 5-30 mg once daily (extended-release); transdermal patch and topical gel formulations also available',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, transdermal patch, or topical gel',
    sideEffects: {
      ocular: [
        'Mydriasis (pupil dilation) from antimuscarinic blockade of the iris sphincter',
        'Cycloplegia with blurred near vision from antimuscarinic blockade of the ciliary muscle',
        'Dry eye / decreased tear production (anticholinergic effect on lacrimal gland)',
        'Precipitation of ACUTE ANGLE-CLOSURE GLAUCOMA in patients with anatomically narrow angles - clinically important given the older patient population commonly prescribed oxybutynin',
        'Blurred vision',
      ],
      systemic: [
        'Dry mouth (very common, often dose-limiting)',
        'Constipation',
        'Cognitive impairment / confusion, particularly in elderly patients (crosses blood-brain barrier more readily than some newer agents)',
        'Drowsiness',
        'Urinary retention',
        'Hyperthermia/decreased sweating (anhidrosis) - relevant in hot weather or with exertion, especially in elderly or pediatric patients',
      ],
    },
    contraindications: [
      'Untreated narrow-angle glaucoma',
      'Urinary retention',
      'Gastric retention or other severe GI motility disorders',
      'Known hypersensitivity to oxybutynin',
    ],
    precautions: [
      'Assess anterior chamber angle status before initiating, especially given the older patient demographic commonly prescribed this drug, who also carry higher baseline angle-closure risk from age-related lens thickening',
      'Use with caution in the elderly given significant anticholinergic CNS burden (confusion, falls) - considered a high-anticholinergic-burden drug on the Beers Criteria list for potentially inappropriate medications in older adults',
      'Caution in hot environments/with exertion given decreased sweating (anhidrosis) risk',
      'Caution in significant bladder outlet obstruction',
    ],
    drugInteractions: [
      'Other anticholinergic drugs (TCAs, first-generation antihistamines) - additive anticholinergic burden and additive angle-closure risk',
      'CNS depressants - additive sedation/cognitive effects',
      'CYP3A4 inhibitors - can increase oxybutynin levels',
    ],
    patientCounseling: [
      'Report any eye pain, halos around lights, or sudden vision changes immediately - can indicate acute angle-closure glaucoma',
      'Expect dry mouth and possible blurred near vision',
      'Use caution in hot weather or with strenuous exercise given reduced ability to sweat',
      'Report confusion, memory problems, or excessive drowsiness, particularly in older patients',
    ],
    pregnancyLactation:
      'Limited human data; use only if clearly needed. Excreted in breast milk in small amounts; caution advised during lactation.',
    monitoring: [
      'Anterior chamber angle assessment (van Herick or gonioscopy) in patients with known narrow angles, significant hyperopia, or age-related lens thickening before/during therapy',
      'Ask about new eye pain, redness, or halos suggestive of angle-closure',
      'Tear film status/dry eye symptoms, particularly important given the older population commonly on this medication who may already have age-related dry eye',
      'Cognitive status screening consideration given anticholinergic CNS burden in elderly patients',
    ],
    clinicalPearls: [
      'Oxybutynin is frequently used in an OLDER patient population, which is the same population with the highest baseline prevalence of narrow anterior chamber angles from age-related lens growth (phacomorphic angle narrowing) - a clinically important overlap for angle-closure risk',
      'Oxybutynin has one of the higher anticholinergic CNS burdens among bladder antimuscarinics, appearing on the Beers Criteria list of drugs to use cautiously in older adults',
      'Same fundamental angle-closure mechanism as tolterodine and other antimuscarinics: mydriasis narrows an already-crowded anterior chamber angle, precipitating pupillary block',
    ],
    highYield: [
      'Oxybutynin is an ANTIMUSCARINIC causing mydriasis, cycloplegia, dry eye, and risk of precipitating ACUTE ANGLE-CLOSURE GLAUCOMA in narrow angles - same mechanism class as tolterodine and atropine',
      'Contraindicated in untreated narrow-angle glaucoma',
      'Commonly used in OLDER adults, who also have the highest baseline anatomic risk for narrow angles - an important intersecting risk factor to screen for',
      'Notable for HIGHER anticholinergic CNS burden (confusion, sedation) than some newer bladder-selective agents, in addition to its ocular effects',
    ],
    references: [
      { label: 'Anticholinergic drugs and angle-closure glaucoma risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Oxybutynin pharmacology and Beers Criteria anticholinergic burden', source: 'AHFS Drug Information' },
    ],
  },

  // ===== ANTIEMETIC / PHENOTHIAZINE =====
  {
    id: 'prochlorperazine',
    genericName: 'Prochlorperazine',
    brandNames: ['Compazine'],
    drugClass: 'Gastrointestinal',
    mechanismOfAction:
      'Phenothiazine-class dopamine D2 receptor antagonist, primarily blocking D2 receptors in the chemoreceptor trigger zone of the medulla to produce its antiemetic effect; also used for vertigo and, at higher doses, as an antipsychotic. Like other dopamine antagonists (including the structurally related antipsychotics and the antiemetic metoclopramide), blockade of D2 receptors in the nigrostriatal pathway can produce extrapyramidal symptoms, including acute dystonic reactions of the ocular muscles (oculogyric crisis). As a phenothiazine, it also carries the class-wide potential for pigmentary deposition in ocular tissues with chronic high-dose use, though this is far more classically described with chlorpromazine and thioridazine given their more common use in chronic, long-term psychiatric dosing.',
    indications: [
      'Nausea and vomiting (postoperative, chemotherapy-related, or from other causes)',
      'Vertigo',
      'Severe psychotic disorders (higher-dose, less common use)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 5-10 mg three to four times daily for nausea/vomiting; also available IM, IV, and rectal suppository formulations for acute antiemetic use',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, intramuscular, intravenous, or rectal',
    sideEffects: {
      ocular: [
        'OCULOGYRIC CRISIS - an acute dystonic reaction producing sustained, involuntary upward (or lateral) deviation of both eyes, often accompanied by other extrapyramidal signs (torticollis, tongue protrusion, jaw spasm) - a classic, high-yield board vignette presentation',
        'Blurred vision (mild anticholinergic component)',
        'Pigmentary deposits in the cornea and lens with chronic, high-dose, long-term use - a phenothiazine class effect, though far less prominent with prochlorperazine\'s typical short-term antiemetic dosing than with chronic antipsychotic-dose phenothiazines like chlorpromazine',
        'Mild mydriasis (uncommon)',
        'Blepharospasm (rare, extrapyramidal-related)',
      ],
      systemic: [
        'Extrapyramidal symptoms: acute dystonia, akathisia, parkinsonism',
        'Sedation/drowsiness',
        'Orthostatic hypotension',
        'Neuroleptic malignant syndrome (rare but life-threatening)',
        'QT prolongation',
        'Anticholinergic effects (dry mouth, constipation) - mild relative to low-potency phenothiazines',
      ],
    },
    contraindications: [
      'Severe CNS depression or comatose states',
      'Known hypersensitivity to phenothiazines',
      'Concurrent use with other drugs that significantly prolong the QT interval (relative)',
      'Children under a certain age/weight for some indications (per labeling) - risk of extrapyramidal reactions',
    ],
    precautions: [
      'Extrapyramidal reactions, including oculogyric crisis, are more common in children and young adults, and typically occur early in treatment or after a dose increase',
      'Have anticholinergic reversal treatment (e.g., diphenhydramine or benztropine) available/known when using in settings prone to acute dystonic reactions',
      'Long-term, high-dose, chronic use (uncommon for this indication) warrants periodic ocular exam for pigmentary deposition',
      'Caution in elderly patients with dementia-related psychosis (increased mortality risk, class warning)',
    ],
    drugInteractions: [
      'Other dopamine antagonists (metoclopramide, antipsychotics) - additive extrapyramidal/dystonic reaction risk',
      'CNS depressants (alcohol, benzodiazepines, opioids) - additive sedation',
      'Anticholinergic drugs - additive anticholinergic burden',
      'QT-prolonging drugs - additive arrhythmia risk',
    ],
    patientCounseling: [
      'Report any sustained upward or sideways eye deviation, neck twisting, or jaw spasm immediately - this is a treatable acute dystonic reaction (oculogyric crisis), not a stroke or seizure, and responds rapidly to anticholinergic/antihistamine treatment',
      'Report blurred vision or gradual vision changes with prolonged use',
      'Avoid alcohol and other sedating substances while taking this medication',
    ],
    pregnancyLactation:
      'Use only if clearly needed; risk of extrapyramidal/withdrawal symptoms in neonates exposed near term. Limited data on breast milk excretion; caution advised during lactation.',
    monitoring: [
      'Screen for oculogyric crisis / abnormal sustained eye deviation, particularly early in treatment, in the emergency/urgent care setting where this drug is frequently given for nausea or headache',
      'Slit lamp exam for corneal/lens pigmentary deposits ONLY relevant with chronic, long-term, high-dose therapy (uncommon for typical antiemetic use)',
      'Visual acuity and ocular motility assessment if extrapyramidal symptoms are reported',
    ],
    clinicalPearls: [
      'Oculogyric crisis from prochlorperazine is a classic ED presentation - patients (often young, given IV prochlorperazine for migraine or nausea) can present with sudden bilateral upward eye deviation that is frequently mistaken for a seizure or psychiatric event, but is a drug-induced acute dystonic reaction that resolves rapidly with IV diphenhydramine or benztropine',
      'This is the SAME phenomenon as metoclopramide-induced oculogyric crisis - both are dopamine D2 antagonists used for GI symptoms, and both share this board-favorite side effect',
      'Chronic phenothiazine pigmentary keratopathy/cataract (classically taught with chlorpromazine) is a class-wide mechanism but is rarely clinically relevant with prochlorperazine\'s typical short-course antiemetic use',
    ],
    highYield: [
      'Prochlorperazine is a classic cause of OCULOGYRIC CRISIS - sustained bilateral upward eye deviation from acute dystonic reaction, a top board-testable ocular emergency presentation',
      'Same mechanism/phenomenon as METOCLOPRAMIDE - both are D2 antagonists that can precipitate oculogyric crisis; know this cross-drug connection',
      'Oculogyric crisis is TREATABLE with IV anticholinergic/antihistamine (diphenhydramine, benztropine) - recognize it to avoid unnecessary neurologic workup',
      'As a phenothiazine, chronic high-dose use (uncommon for this antiemetic indication) can cause corneal/lens pigmentary deposits, the same class mechanism as chlorpromazine',
    ],
    references: [
      { label: 'Drug-induced oculogyric crisis: recognition and management', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Prochlorperazine pharmacology and extrapyramidal adverse effects', source: 'AHFS Drug Information' },
    ],
  },

  // ===== NEUROLOGIC / MS DISEASE-MODIFYING THERAPY =====
  {
    id: 'interferon-beta-1b',
    genericName: 'Interferon beta-1b',
    brandNames: ['Betaseron', 'Extavia'],
    drugClass: 'Neurologic',
    mechanismOfAction:
      'Recombinant immunomodulatory cytokine, one of the original injectable disease-modifying therapies for relapsing forms of multiple sclerosis. Mechanism is not fully elucidated but involves downregulation of pro-inflammatory cytokine production, reduced T-lymphocyte activation and proliferation, and decreased permeability of the blood-brain barrier to inflammatory cells, thereby reducing the frequency and severity of MS relapses. Unlike newer oral sphingosine-1-phosphate (S1P) receptor modulators used for MS (e.g., fingolimod), interferon beta-1b does not act on S1P receptors on retinal pigment epithelium/vascular endothelium and is not classically associated with macular edema.',
    indications: [
      'Relapsing forms of multiple sclerosis (relapsing-remitting MS, active secondary progressive MS) - reduces frequency of clinical exacerbations',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Subcutaneous injection: 0.25 mg (8 million IU) every other day, after a gradual dose titration over the first several weeks',
    concentrations: ['N/A — oral/systemic'],
    route: 'Subcutaneous injection',
    sideEffects: {
      ocular: [
        'Interferon-associated retinopathy - rare with interferon beta specifically, but a recognized class-level effect of interferon therapy in general: cotton-wool spots and retinal hemorrhages (more classically and commonly described with interferon alfa used for hepatitis C or oncologic indications)',
        'Direct ocular toxicity is LOW relative to newer oral MS disease-modifying therapies - an important comparative board point',
        'No established association with macular edema, in contrast to the oral S1P modulator fingolimod',
        'Rare reports of optic neuritis or worsening of underlying MS-related visual symptoms (difficult to distinguish from the underlying disease course itself)',
      ],
      systemic: [
        'Flu-like symptoms (fever, myalgia, chills, fatigue) - very common, especially early in treatment',
        'Injection site reactions (erythema, pain, rarely necrosis)',
        'Hepatotoxicity/transaminase elevation',
        'Leukopenia/lymphopenia',
        'Depression, including rare reports of suicidal ideation - important psychiatric monitoring consideration',
        'Menstrual irregularities',
      ],
    },
    contraindications: [
      'Known hypersensitivity to natural or recombinant interferon beta or human albumin',
      'Current severe depression or suicidal ideation (relative, given drug association with mood effects)',
      'Decompensated hepatic disease',
    ],
    precautions: [
      'Monitor liver function tests and complete blood count periodically',
      'Monitor for depression/mood changes throughout treatment, particularly in patients with a prior psychiatric history',
      'Injection site rotation needed to reduce risk of necrosis/lipoatrophy',
      'Baseline and periodic thyroid function monitoring (interferons can trigger thyroid dysfunction)',
    ],
    drugInteractions: [
      'Other hepatotoxic drugs - additive hepatotoxicity risk',
      'Myelosuppressive drugs - additive risk of cytopenias',
      'No major direct pharmacokinetic ocular drug interactions of note',
    ],
    patientCounseling: [
      'Report any new visual disturbance, eye pain, or vision loss to both the prescribing neurologist and an eye care provider, as this can reflect an MS relapse (optic neuritis) rather than a direct drug effect',
      'Expect flu-like symptoms, especially with early doses; premedication with an antipyretic/analgesic is commonly used',
      'Report any new or worsening depression or thoughts of self-harm promptly',
      'Rotate injection sites as instructed to reduce skin reactions',
    ],
    pregnancyLactation:
      'Limited human data; use during pregnancy generally avoided unless clearly needed, per current guidelines individualized with the prescribing neurologist. Unknown extent of excretion in breast milk; caution advised.',
    monitoring: [
      'Baseline and periodic dilated fundus exam is not specifically mandated for interferon beta-1b itself (unlike fingolimod\'s required baseline/follow-up OCT for macular edema), but any new visual symptom warrants prompt eye exam to distinguish an MS relapse (optic neuritis) from a rare interferon-associated retinal finding',
      'Screen for cotton-wool spots/retinal hemorrhages if visual symptoms or fundus findings are unexplained',
      'Coordinate with the neurology team on overall disease activity and new neuro-ophthalmic symptoms',
    ],
    clinicalPearls: [
      'High-yield comparative board point: interferon beta-1b (an older, injectable MS disease-modifying therapy) has a LOW direct ocular toxicity profile, in clear contrast to newer ORAL S1P-modulator MS drugs like fingolimod, which requires mandatory baseline and follow-up ophthalmic exams specifically to screen for macular edema',
      'Interferon-associated retinopathy (cotton-wool spots, retinal hemorrhages) is a class-level interferon effect described classically with interferon ALFA (used for hepatitis C and some cancers) rather than interferon beta used for MS - useful to distinguish alfa vs. beta interferon ocular associations on boards',
      'Optic neuritis in an MS patient on interferon beta-1b is far more likely to represent a disease relapse than a drug adverse effect, since interferon beta-1b actually works to REDUCE relapse frequency',
    ],
    highYield: [
      'Interferon beta-1b has RELATIVELY LOW direct ocular toxicity compared to newer oral MS drugs like FINGOLIMOD, which is classically associated with macular edema requiring mandatory ophthalmic screening - a key comparative distinction',
      'Interferon-ASSOCIATED RETINOPATHY (cotton-wool spots, retinal hemorrhages) is a class-level interferon effect, classically described with interferon ALFA rather than interferon beta',
      'New visual symptoms in an MS patient on interferon beta-1b should prompt evaluation for optic neuritis (a disease relapse), not necessarily a direct drug toxicity',
      'Flu-like symptoms and injection site reactions, not ocular effects, are the most common adverse effects of this drug',
    ],
    references: [
      { label: 'Multiple sclerosis disease-modifying therapies and ocular monitoring requirements', source: 'Walsh & Hoyt\'s Clinical Neuro-Ophthalmology' },
      { label: 'Interferon beta-1b pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },

  // ===== SYSTEMIC CORTICOSTEROIDS =====
  {
    id: 'methylprednisolone',
    genericName: 'Methylprednisolone',
    brandNames: ['Medrol', 'Solu-Medrol', 'Depo-Medrol'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Synthetic glucocorticoid that binds intracellular glucocorticoid receptors, modulating gene transcription to produce broad anti-inflammatory and immunosuppressive effects (reduced cytokine production, decreased leukocyte migration and activation, stabilization of cell membranes). At high intravenous "pulse" doses, methylprednisolone rapidly and potently suppresses acute inflammatory demyelination and vasculitic/ischemic inflammatory processes, which underlies its use as emergency therapy for optic neuritis and giant cell arteritis-related vision loss. Chronic systemic glucocorticoid exposure, at any route, produces the same class-wide ocular effects as other corticosteroids (cataract, IOP elevation, CSCR) via effects on lens epithelial cell metabolism and trabecular meshwork extracellular matrix.',
    indications: [
      'Acute optic neuritis (high-dose IV pulse thertherapy per the Optic Neuritis Treatment Trial, ONTT protocol)',
      'Giant cell arteritis (temporal arteritis) with acute vision loss - emergency high-dose IV therapy pending or alongside temporal artery biopsy, to prevent fellow-eye involvement',
      'Acute exacerbations of multiple sclerosis',
      'Severe allergic reactions, asthma exacerbations',
      'Autoimmune/rheumatologic conditions (e.g., rheumatoid arthritis flares, systemic lupus erythematosus)',
      'Organ transplant rejection prophylaxis/treatment',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'IV pulse: 1 g intravenously daily for 3 days (classic ONTT/GCA protocol), often followed by an oral prednisone taper; oral: 4-48 mg/day in divided doses depending on indication and severity',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, intravenous, or intramuscular',
    sideEffects: {
      ocular: [
        'Posterior subcapsular cataract (PSC) - classic, dose- and duration-dependent corticosteroid effect, more associated with chronic use than a single pulse course',
        'Steroid-response ocular hypertension/glaucoma - elevated IOP from reduced trabecular meshwork outflow, more common with chronic systemic use but can occur even with short courses in "steroid responders"',
        'Central serous chorioretinopathy (CSCR) - associated with systemic corticosteroid use, including pulse-dose regimens, and classically linked to a Type A personality/stress profile',
        'Exophthalmos (rare, with chronic high-dose use)',
        'Increased risk of ocular/periocular infection with immunosuppression (reactivation of herpetic keratitis, fungal infection)',
      ],
      systemic: [
        'Hyperglycemia',
        'Hypertension',
        'Mood changes, insomnia, psychosis (particularly with high-dose pulse therapy)',
        'Immunosuppression / increased infection risk',
        'Osteoporosis, avascular necrosis (with chronic use)',
        'Adrenal suppression with abrupt discontinuation after prolonged use',
        'GI upset, peptic ulcer risk',
      ],
    },
    contraindications: [
      'Active, untreated systemic fungal infection',
      'Known hypersensitivity to methylprednisolone or its components',
      'Live vaccine administration during high-dose immunosuppressive therapy (relative)',
    ],
    precautions: [
      'Monitor IOP during and after high-dose pulse therapy, especially in patients with known glaucoma or a family history of steroid response',
      'Screen for and monitor blood glucose, blood pressure, and mood/psychiatric symptoms during high-dose pulse courses',
      'Do not abruptly discontinue after prolonged systemic use - requires a taper to avoid adrenal insufficiency',
      'CSCR risk should be discussed with patients receiving pulse-dose therapy who report new central visual distortion',
    ],
    drugInteractions: [
      'NSAIDs - additive GI ulceration/bleeding risk',
      'Live vaccines - reduced efficacy/risk of vaccine-strain infection during immunosuppressive dosing',
      'CYP3A4 inducers/inhibitors - can alter methylprednisolone metabolism',
      'Other immunosuppressants - additive infection risk',
    ],
    patientCounseling: [
      'Report any new eye pain, halos, blurred vision, or decreased vision during or after pulse steroid therapy',
      'Report new central visual distortion or a gray/dark spot in central vision, which could indicate central serous chorioretinopathy',
      'Do not stop oral steroid tapers abruptly without medical guidance',
      'Monitor blood sugar closely if diabetic during high-dose therapy',
    ],
    pregnancyLactation:
      'Generally used when clearly needed given the acuity of indications (e.g., vision-threatening optic neuritis, GCA); low-to-moderate doses considered relatively low risk, high doses used cautiously with monitoring for neonatal adrenal suppression. Excreted in breast milk in small amounts; monitor infant with maternal high-dose use.',
    monitoring: [
      'IOP measurement during and after high-dose pulse courses, particularly in known or suspected steroid responders',
      'Dilated fundus/OCT evaluation if new central visual distortion is reported (screen for CSCR)',
      'Baseline and periodic lens exam for posterior subcapsular cataract with any prolonged or repeated systemic steroid use',
      'Coordinate with the treating physician on the overall steroid taper plan and total cumulative exposure',
    ],
    clinicalPearls: [
      'HIGH-YIELD board fact: IV methylprednisolone pulse therapy is the standard EMERGENCY treatment for acute optic neuritis per the Optic Neuritis Treatment Trial (ONTT) - the ONTT also showed that ORAL prednisone alone (without preceding IV pulse) was associated with a HIGHER recurrence rate of optic neuritis, making the specific route/sequence a classic testable point',
      'IV methylprednisolone is also the emergency treatment for acute vision loss from giant cell arteritis, started empirically based on clinical suspicion WITHOUT waiting for temporal artery biopsy results, to protect the fellow eye',
      'Even a short pulse course can trigger CSCR or transient steroid-response IOP elevation in susceptible patients - "acute" dosing does not mean zero ocular risk',
      'Same class-wide chronic risks (PSC cataract, steroid glaucoma) as prednisone and other systemic corticosteroids apply with repeated or prolonged methylprednisolone courses',
    ],
    highYield: [
      'IV methylprednisolone PULSE THERAPY (1 g/day x 3 days) is the STANDARD EMERGENCY TREATMENT for acute OPTIC NEURITIS (per the ONTT) and for acute vision loss in GIANT CELL ARTERITIS pending temporal artery biopsy - name-the-drug board fact',
      'ONTT showed oral prednisone ALONE was associated with INCREASED optic neuritis recurrence - route and sequence matter and are testable',
      'Class-wide corticosteroid ocular risks apply: posterior subcapsular cataract, steroid-response glaucoma/IOP elevation, and central serous chorioretinopathy, even with high-dose pulse regimens',
      'GCA-related vision loss treatment should NOT be delayed for biopsy confirmation - empiric high-dose steroid is started immediately to protect the fellow eye',
    ],
    references: [
      { label: 'Optic Neuritis Treatment Trial (ONTT)', source: 'Beck RW et al., New England Journal of Medicine' },
      { label: 'Giant cell arteritis management guidelines', source: 'American Academy of Ophthalmology Preferred Practice Pattern' },
    ],
  },
  {
    id: 'triamcinolone-oral',
    genericName: 'Triamcinolone (oral/injectable systemic)',
    brandNames: ['Aristocort', 'Kenalog (systemic/intramuscular use)'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Synthetic glucocorticoid that binds intracellular glucocorticoid receptors to suppress inflammatory gene transcription, reduce cytokine production, and decrease immune cell activation and migration, producing broad systemic anti-inflammatory and immunosuppressive effects. This entry refers specifically to the SYSTEMIC (oral or intramuscular depot) formulation used for autoimmune, inflammatory, dermatologic, and allergic conditions - this is pharmacologically the SAME drug molecule used in intravitreal and periocular (sub-Tenon) triamcinolone injections for macular edema and uveitis, but administered at very different doses, routes, and for entirely different clinical purposes.',
    indications: [
      'Rheumatoid arthritis and other inflammatory arthropathies',
      'Severe allergic reactions/dermatologic conditions (contact dermatitis, atopic dermatitis flares)',
      'Asthma/COPD exacerbations',
      'Systemic lupus erythematosus and other autoimmune/connective tissue disease flares',
      'Adjunct in various inflammatory conditions requiring systemic corticosteroid coverage',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 4-48 mg/day depending on indication and severity, tapered as clinically appropriate; intramuscular depot injection: 40 mg (2 mL of 20 mg/mL suspension) or per formulation, repeated no more often than every 1-2 weeks',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral or intramuscular (systemic depot) injection - NOT the intravitreal/periocular formulation',
    sideEffects: {
      ocular: [
        'Posterior subcapsular cataract (PSC) - classic, dose- and duration-dependent corticosteroid effect with chronic systemic use',
        'Steroid-response ocular hypertension/glaucoma - elevated IOP from reduced trabecular outflow, particularly with chronic or repeated intramuscular depot dosing',
        'Central serous chorioretinopathy (CSCR) - associated with systemic corticosteroid use',
        'Increased risk of ocular/periocular infection with immunosuppression',
        'Note: these systemic effects are distinct from (but mechanistically related to) the LOCAL intraocular effects seen when triamcinolone is instead injected intravitreally or peri-ocularly for retinal/uveitic disease, where cataract and IOP elevation risk is more direct and pronounced due to sustained local drug depot effect',
      ],
      systemic: [
        'Hyperglycemia',
        'Hypertension',
        'Adrenal suppression, particularly with repeated intramuscular depot dosing (prolonged systemic absorption)',
        'Osteoporosis, avascular necrosis with chronic/repeated use',
        'Mood changes, insomnia',
        'Immunosuppression / increased infection risk',
        'Cushingoid features with prolonged or repeated dosing',
      ],
    },
    contraindications: [
      'Active, untreated systemic fungal infection',
      'Known hypersensitivity to triamcinolone or its components',
      'Live vaccine administration during immunosuppressive dosing (relative)',
    ],
    precautions: [
      'Repeated intramuscular depot dosing carries a higher risk of cumulative systemic steroid exposure and adrenal suppression than an equivalent single oral course, given the prolonged depot absorption',
      'Monitor IOP and perform periodic lens exam with chronic or repeated systemic dosing',
      'Distinguish clearly from intravitreal/periocular triamcinolone in the patient\'s ocular history - a patient may have received both systemic triamcinolone (for a rheumatologic flare) and, separately, intravitreal triamcinolone (for macular edema), and these should not be conflated when assessing ocular steroid burden',
      'Do not abruptly discontinue after prolonged use - taper needed to avoid adrenal insufficiency',
    ],
    drugInteractions: [
      'NSAIDs - additive GI ulceration/bleeding risk',
      'Live vaccines - reduced efficacy/vaccine-strain infection risk during immunosuppressive dosing',
      'Other immunosuppressants - additive infection risk',
      'CYP3A4 inducers/inhibitors - can alter triamcinolone metabolism',
    ],
    patientCounseling: [
      'Report any new eye pain, blurred vision, or decreased vision with chronic or repeated dosing',
      'Report new central visual distortion, which could indicate central serous chorioretinopathy',
      'Do not stop a prolonged oral taper abruptly',
      'Clarify with your eye doctor and prescriber whether any prior "triamcinolone injection" was a systemic (intramuscular) or an intraocular (intravitreal/periocular) injection, as this affects ocular monitoring needs',
    ],
    pregnancyLactation:
      'Use only if clearly needed and benefits outweigh risks; chronic high-dose use associated with growth restriction and neonatal adrenal suppression risk. Excreted in breast milk in small amounts; monitor infant with maternal high-dose or repeated use.',
    monitoring: [
      'IOP measurement with chronic or repeated systemic dosing, particularly in known or suspected steroid responders',
      'Periodic lens exam for posterior subcapsular cataract with prolonged or repeated systemic use',
      'Dilated fundus/OCT evaluation if new central visual distortion is reported (screen for CSCR)',
      'Clarify route/formulation history (systemic vs. intraocular triamcinolone) when reviewing a patient\'s corticosteroid exposure',
    ],
    clinicalPearls: [
      'IMPORTANT DISTINCTION for boards: this systemic (oral/intramuscular) triamcinolone entry is pharmacologically the SAME MOLECULE as the intravitreal/periocular triamcinolone acetonide used directly in the eye for macular edema (e.g., diabetic macular edema, retinal vein occlusion) or uveitis - but the route, dose, and clinical context are completely different, and boards may test whether you recognize both uses of the same drug',
      'Repeated intramuscular depot dosing (sometimes used for recurrent allergic or inflammatory flares) can produce more cumulative systemic steroid exposure than patients/prescribers may appreciate, since each injection acts as a sustained-release depot',
      'Same class-wide chronic ocular risks as prednisone and methylprednisolone apply: posterior subcapsular cataract, steroid-response glaucoma, and CSCR',
    ],
    highYield: [
      'Systemic triamcinolone (oral/IM) is the SAME DRUG MOLECULE as intravitreal/periocular triamcinolone acetonide used for macular edema and uveitis - but route/dose/purpose differ completely; know both contexts for boards',
      'Class-wide corticosteroid ocular risks apply with chronic/repeated systemic use: POSTERIOR SUBCAPSULAR CATARACT, STEROID-RESPONSE GLAUCOMA, and CENTRAL SEROUS CHORIORETINOPATHY',
      'Intramuscular depot dosing produces prolonged systemic absorption, increasing cumulative steroid exposure and adrenal suppression risk with repeated injections',
      'Always clarify with the patient/chart whether a documented "triamcinolone injection" was systemic or intraocular when assessing ocular steroid exposure history',
    ],
    references: [
      { label: 'Systemic corticosteroids and ocular adverse effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Triamcinolone acetonide: systemic vs. intraocular formulations and use', source: 'AHFS Drug Information' },
    ],
  },

  // ===== DMARD WITH UVEITIS RELEVANCE =====
  {
    id: 'sulfasalazine',
    genericName: 'Sulfasalazine',
    brandNames: ['Azulfidine'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'A prodrug conjugate of 5-aminosalicylic acid (5-ASA, the anti-inflammatory moiety) and sulfapyridine (a sulfonamide antibacterial moiety), cleaved by colonic bacteria into its active components. The 5-ASA component provides local anti-inflammatory action in the GI tract, while systemic absorption of both components contributes to its disease-modifying antirheumatic drug (DMARD) effect in inflammatory arthritis, thought to involve inhibition of prostaglandin/leukotriene synthesis and modulation of immune cell function. As a sulfa-containing compound, it carries the general hypersensitivity reaction potential of the sulfonamide drug class.',
    indications: [
      'Rheumatoid arthritis (as a conventional synthetic DMARD)',
      'Ankylosing spondylitis and other HLA-B27-associated spondyloarthropathies (including axial and peripheral disease)',
      'Inflammatory bowel disease (ulcerative colitis, and Crohn disease with colonic involvement)',
      'Used adjunctively to help control the underlying systemic inflammatory disease (ankylosing spondylitis, IBD) that drives RECURRENT HLA-B27-ASSOCIATED ACUTE ANTERIOR UVEITIS',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 500 mg once or twice daily initially, titrated up to 2-3 g/day in divided doses (enteric-coated formulation commonly used to reduce GI upset)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Periorbital edema - rare, reported as part of a sulfa hypersensitivity reaction',
        'Conjunctivitis - rare, reported as part of a sulfa hypersensitivity reaction',
        'Orange-yellow discoloration of soft contact lenses and body fluids (including tears) - a benign but clinically notable cosmetic effect from the drug\'s natural pigment',
        'Ocular effects are uncommon overall; the primary optometric relevance of sulfasalazine is its role in controlling the SYSTEMIC disease (ankylosing spondylitis, IBD) that drives recurrent HLA-B27-associated anterior uveitis, rather than direct drug ocular toxicity',
      ],
      systemic: [
        'GI upset (nausea, dyspepsia) - common, dose-related',
        'Headache',
        'Hepatotoxicity/transaminase elevation',
        'Bone marrow suppression (leukopenia, agranulocytosis, aplastic anemia - rare but serious, requires monitoring)',
        'Reversible oligospermia in men',
        'Sulfa-class hypersensitivity reactions, including Stevens-Johnson syndrome (rare)',
        'Photosensitivity',
      ],
    },
    contraindications: [
      'Known hypersensitivity to sulfonamides, salicylates, or sulfasalazine',
      'Intestinal or urinary tract obstruction',
      'Porphyria',
      'Infants under 2 months of age (risk of kernicterus, given sulfapyridine displacing bilirubin from albumin)',
    ],
    precautions: [
      'Baseline and periodic complete blood count and liver function tests given bone marrow suppression and hepatotoxicity risk',
      'Cross-reactivity with other sulfonamide drugs (including some antibiotics) - screen for sulfa allergy before initiating',
      'Adequate hydration recommended to reduce crystalluria risk',
      'Counsel that orange-yellow discoloration of skin, urine, and soft contact lenses can occur and is benign',
    ],
    drugInteractions: [
      'Folic acid absorption may be reduced - consider folate supplementation with long-term use',
      'Digoxin - reduced absorption/serum levels',
      'Warfarin - potentiated anticoagulant effect',
      'Methotrexate - additive bone marrow suppression risk when used concurrently',
    ],
    patientCounseling: [
      'Report any new eye redness, swelling around the eyes, or signs of allergic reaction, which could reflect a sulfa hypersensitivity response',
      'Soft contact lenses may become discolored (orange-yellow) with this medication - switching to daily disposables or glasses during treatment can help',
      'Attend all scheduled blood monitoring appointments given bone marrow suppression risk',
      'Report any unexplained fever, sore throat, or bruising/bleeding, which could indicate a blood count abnormality',
      'Continuing this medication as prescribed helps control the underlying systemic disease (e.g., ankylosing spondylitis) that can also cause recurrent eye inflammation (uveitis)',
    ],
    pregnancyLactation:
      'Generally considered relatively low risk among DMARDs and often continued in pregnancy when needed for disease control, with folic acid supplementation; caution near term given theoretical kernicterus risk in the newborn. Excreted in breast milk in low levels; generally considered compatible with breastfeeding in full-term, healthy infants per most guidelines, with pediatrician awareness.',
    monitoring: [
      'Ask about new or recurrent eye redness, pain, photophobia, consistent with anterior uveitis flare - relevant given the HLA-B27-associated systemic disease this drug is often used to treat',
      'Screen for soft contact lens discoloration and discuss lens modality/replacement schedule if relevant',
      'Coordinate with rheumatology/GI on overall systemic disease control, since better systemic control of ankylosing spondylitis or IBD can reduce uveitis recurrence frequency',
      'No specific direct ocular toxicity monitoring protocol is required (unlike hydroxychloroquine), but recurrent uveitis episodes should prompt review of overall systemic disease control',
    ],
    clinicalPearls: [
      'Sulfasalazine is a good example of a systemic drug whose OPTOMETRIC relevance is less about direct ocular toxicity and more about its role in controlling a systemic disease (ankylosing spondylitis, inflammatory bowel disease) that is itself a classic cause of RECURRENT HLA-B27-ASSOCIATED ACUTE ANTERIOR UVEITIS',
      'Any patient with recurrent, unilateral, alternating acute anterior uveitis should be worked up for HLA-B27-associated systemic disease - sulfasalazine may already be part of their treatment regimen, or may be a treatment option to discuss with their rheumatologist/gastroenterologist to help reduce uveitis recurrence',
      'The benign orange-yellow discoloration of soft contact lenses and body fluids is a distinctive, testable trivia point tied to the drug\'s natural pigmentation',
    ],
    highYield: [
      'Sulfasalazine treats ANKYLOSING SPONDYLITIS and INFLAMMATORY BOWEL DISEASE - both classic systemic associations of RECURRENT HLA-B27-associated ACUTE ANTERIOR UVEITIS, making it optometrically relevant even without direct ocular toxicity',
      'As a SULFA drug, it carries sulfonamide-class hypersensitivity risk, including rare periorbital edema/conjunctivitis',
      'Causes benign ORANGE-YELLOW discoloration of soft contact lenses and body fluids - classic trivia fact',
      'Better systemic control of the underlying disease with agents like sulfasalazine can help reduce the FREQUENCY of recurrent uveitis flares - an important patient counseling point for optometry patients with known HLA-B27 disease',
    ],
    references: [
      { label: 'HLA-B27-associated uveitis and systemic disease management', source: 'American Academy of Ophthalmology, Basic and Clinical Science Course: Uveitis and Ocular Inflammation' },
      { label: 'Sulfasalazine pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },

  // ===== MUSCARINIC AGONIST FOR SJOGREN SYNDROME =====
  {
    id: 'cevimeline',
    genericName: 'Cevimeline',
    brandNames: ['Evoxac'],
    drugClass: 'Other',
    mechanismOfAction:
      'Muscarinic (cholinergic) receptor agonist with relative selectivity for M1 and M3 muscarinic receptor subtypes, found on secretory glandular tissue including the salivary and lacrimal glands. Stimulation of these receptors increases secretomotor output, thereby increasing salivary flow and, to a lesser but clinically meaningful extent, tear production. It is pharmacologically in the same broad muscarinic agonist family as pilocarpine, but rather than being applied topically to the eye to constrict the pupil and lower intraocular pressure (pilocarpine\'s classic ophthalmic use), cevimeline is taken systemically/orally specifically to stimulate secretory gland output for dry mouth and dry eye symptoms.',
    indications: [
      'Dry mouth (xerostomia) associated with Sjögren syndrome',
      'Dry eye symptoms associated with Sjögren syndrome (adjunctive)',
      'Xerostomia following head and neck radiation therapy (off-label)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 30 mg three times daily',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Blurred vision - can occur paradoxically via systemic cholinergic effects, despite the drug\'s therapeutic secretory-stimulating goal being aimed at INCREASING tear production rather than impairing vision',
        'Excessive lacrimation/watery eyes (an extension of the desired therapeutic effect, occasionally excessive)',
        'Conjunctival injection (reported, mild)',
        'Amblyopia/visual disturbance reported in product labeling (uncommon), thought related to systemic muscarinic/accommodative effects rather than a direct toxic mechanism',
      ],
      systemic: [
        'Excessive sweating (hyperhidrosis) - common, direct cholinergic effect',
        'Nausea, GI upset, diarrhea',
        'Rhinitis',
        'Headache',
        'Increased urinary frequency',
        'Bradycardia (caution in cardiac disease, given vagal/cholinergic cardiac effects)',
      ],
    },
    contraindications: [
      'Uncontrolled asthma (cholinergic stimulation can trigger bronchospasm)',
      'Narrow-angle glaucoma (uncontrolled) - relative contraindication given cholinergic/miotic potential, though this is a less classically emphasized risk than the drug\'s systemic cholinergic effects',
      'Significant cardiovascular disease where bradycardia or altered hemodynamics would be poorly tolerated',
      'Known hypersensitivity to cevimeline',
    ],
    precautions: [
      'Use caution in patients with a history of biliary tract disease (cholinergic stimulation can increase biliary smooth muscle tone)',
      'Use caution in patients with nephrolithiasis (increased cholinergic-mediated ureteral smooth muscle tone)',
      'Monitor for excessive sweating/dehydration, particularly in hot weather or with exertion',
      'Caution in patients with significant pulmonary disease given bronchospasm risk',
    ],
    drugInteractions: [
      'Beta-blockers - potential additive effects on cardiac conduction (both can slow heart rate)',
      'Other cholinergic agonists (including pilocarpine, whether ophthalmic or systemic) - additive cholinergic side effects',
      'CYP2D6/CYP3A4 inhibitors - can increase cevimeline levels',
      'Anticholinergic drugs - opposing/antagonistic pharmacologic effect (reduces cevimeline efficacy)',
    ],
    patientCounseling: [
      'Report excessive sweating, especially with exertion or in hot weather, and maintain adequate hydration',
      'Some blurring of vision or increased tearing can occur; use caution with night driving if vision is affected',
      'Effects on dry mouth and dry eye symptoms are typically noticed within a few weeks of consistent use',
      'Report any chest pain, palpitations, or significant dizziness',
    ],
    pregnancyLactation:
      'Limited human data; use only if clearly needed. Unknown whether excreted in breast milk; caution advised during lactation.',
    monitoring: [
      'Tear film assessment (e.g., Schirmer testing, tear breakup time) can help gauge objective response in Sjögren-associated dry eye, alongside topical dry eye therapies',
      'Ask about blurred vision or visual disturbance at follow-up',
      'Coordinate with rheumatology on overall Sjögren syndrome management and symptom response',
      'Screen for excessive sweating/dehydration symptoms',
    ],
    clinicalPearls: [
      'Important contrast point for boards: cevimeline and pilocarpine are both MUSCARINIC AGONISTS, but pilocarpine is classically used topically/ophthalmically to constrict the pupil and lower IOP in glaucoma, while cevimeline is used SYSTEMICALLY/ORALLY specifically to stimulate salivary and lacrimal secretion in Sjögren syndrome - same receptor mechanism, very different clinical application',
      'Oral pilocarpine (Salagen) is also FDA-approved for Sjögren-associated xerostomia, making it a direct alternative to cevimeline for the same indication - worth knowing both drugs exist for this purpose',
      'Despite its therapeutic goal of increasing lacrimal secretion, cevimeline can paradoxically cause blurred vision via broader systemic muscarinic/accommodative effects - an important nuance rather than a contradiction, since the drug\'s systemic cholinergic activity is not limited to the lacrimal gland alone',
      'Sjögren syndrome patients on cevimeline should still typically continue adjunctive topical dry eye therapy (artificial tears, cyclosporine, punctal plugs) as cevimeline alone often provides only partial symptom relief',
    ],
    highYield: [
      'Cevimeline is a MUSCARINIC AGONIST (same receptor mechanism as pilocarpine) used SYSTEMICALLY for Sjögren syndrome-associated dry mouth AND dry eye - contrast with pilocarpine\'s classic topical ophthalmic use for glaucoma',
      'Oral pilocarpine (Salagen) is a direct alternative to cevimeline for the same Sjögren xerostomia/dry eye indication - know both exist',
      'Systemic cholinergic side effects (sweating, GI upset, bradycardia) are common; blurred vision can occur paradoxically despite the drug\'s secretory-stimulating therapeutic intent',
      'Relative contraindication in uncontrolled asthma and uncontrolled narrow-angle glaucoma given cholinergic/bronchospastic and miotic potential',
    ],
    references: [
      { label: 'Sjögren syndrome: dry eye and systemic secretagogue therapy', source: 'American Academy of Ophthalmology, Basic and Clinical Science Course: External Disease and Cornea' },
      { label: 'Cevimeline pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },
]
