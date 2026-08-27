import type { Drug } from '../../types/drug'

export const systemicGiPulmonary: Drug[] = [
  // ===== GASTROINTESTINAL =====
  {
    id: 'omeprazole',
    genericName: 'Omeprazole',
    brandNames: ['Prilosec'],
    drugClass: 'Gastrointestinal',
    mechanismOfAction:
      'Proton pump inhibitor (PPI). Irreversibly binds and inhibits the H+/K+-ATPase ("proton pump") on the luminal surface of gastric parietal cells, blocking the final common step of gastric acid secretion. Effect persists until new pump molecules are synthesized (roughly 24-48 hours), producing durable acid suppression despite a short plasma half-life.',
    indications: [
      'Gastroesophageal reflux disease (GERD)',
      'Peptic ulcer disease (gastric and duodenal)',
      'Erosive esophagitis',
      'H. pylori eradication (as part of combination therapy)',
      'Zollinger-Ellison syndrome and other hypersecretory conditions',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: '20-40 mg orally once daily before a meal (typically before breakfast); some regimens use twice-daily dosing for refractory disease',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral (delayed-release capsule/tablet)',
    sideEffects: {
      ocular: [
        'Blurred vision (uncommon, generally mild and reversible)',
        'Dry eye symptoms reported with long-term use (proposed mechanism: alteration of tear film/meibomian gland function, though evidence is limited)',
        'Rare case reports of anterior optic neuropathy and visual disturbance with long-term high-dose use',
        'No well-established, board-classic ocular toxicity syndrome — ocular effects are rare, nonspecific, and low-yield compared to other systemic drug classes',
      ],
      systemic: [
        'Headache',
        'Diarrhea, abdominal pain, nausea',
        'Increased risk of Clostridioides difficile infection with long-term use',
        'Vitamin B12 deficiency and hypomagnesemia with chronic use (reduced gastric acid impairs absorption)',
        'Increased fracture risk (hip, wrist, spine) with long-term/high-dose use',
        'Acute interstitial nephritis (rare)',
        'Rebound acid hypersecretion after abrupt discontinuation',
      ],
    },
    contraindications: ['Known hypersensitivity to omeprazole or other proton pump inhibitors', 'Concurrent use with rilpivirine-containing antiretroviral regimens'],
    precautions: [
      'Long-term use associated with hypomagnesemia, vitamin B12 deficiency, and increased fracture risk — periodic monitoring recommended with chronic therapy',
      'Use lowest effective dose for shortest duration when possible',
      'Caution in patients with hepatic impairment (dose adjustment may be needed)',
    ],
    drugInteractions: [
      'Clopidogrel — omeprazole inhibits CYP2C19-mediated activation of clopidogrel, potentially reducing its antiplatelet efficacy (clinically significant interaction)',
      'Warfarin — may increase INR/bleeding risk with concurrent use',
      'Methotrexate — reduced methotrexate clearance, increased toxicity risk with high-dose methotrexate',
      'Drugs requiring gastric acidity for absorption (e.g., ketoconazole, atazanavir, iron salts) — reduced absorption due to elevated gastric pH',
    ],
    patientCounseling: [
      'Take before a meal, typically 30-60 minutes before breakfast, for optimal acid suppression',
      'Long-term use may require monitoring of magnesium and vitamin B12 levels',
      'Do not stop abruptly after prolonged use without discussing with prescriber, as rebound acid hypersecretion can occur',
      'Report any new or worsening visual symptoms, though ocular side effects are rare with this medication',
    ],
    pregnancyLactation:
      'Generally considered low risk in pregnancy; used when clearly indicated (Category B/pre-2015 labeling). Excreted in breast milk in small amounts; generally considered compatible with breastfeeding when needed.',
    monitoring: [
      'No routine ophthalmic monitoring protocol required — ocular toxicity is rare and not a primary NBEO concern for this drug',
      'Ask about new blurred vision or dry eye symptoms in patients on long-term therapy, and manage dry eye symptomatically if present',
      'Recognize this drug as a low-yield/distractor entry rather than a drug requiring dedicated ocular screening',
    ],
    clinicalPearls: [
      'One of the most widely prescribed medication classes in the US; optometrists will frequently see PPIs on patient medication lists but should not expect significant ocular findings attributable to them',
      'Useful primarily as a "contrast" drug on boards — a systemic medication that patients commonly take with essentially no clinically significant ocular toxicity profile, unlike hydroxychloroquine, amiodarone, or systemic corticosteroids',
      'Long-term PPI use is more clinically relevant for systemic complications (fracture risk, B12/magnesium deficiency, C. difficile) than for ocular disease',
    ],
    highYield: [
      'Omeprazole has NO established classic ocular toxicity syndrome — recognize it as a low-yield distractor among systemic drugs with true ocular relevance (contrast with hydroxychloroquine, amiodarone, isotretinoin, tamsulosin)',
      'Rare reports of blurred vision and dry eye exist but are not a major testable finding',
      'The PPI-clopidogrel interaction (reduced antiplatelet activation via CYP2C19 inhibition) is the more clinically significant, higher-yield systemic interaction to know',
      'Mechanism (irreversible H+/K+-ATPase inhibition in gastric parietal cells) is the most likely board-testable fact about this drug, not an ocular one',
    ],
    references: [
      { label: 'Proton pump inhibitor pharmacology and adverse effects', source: 'Katzung: Basic and Clinical Pharmacology' },
      { label: 'Systemic medications and ocular surface disease', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'ondansetron',
    genericName: 'Ondansetron',
    brandNames: ['Zofran'],
    drugClass: 'Gastrointestinal',
    mechanismOfAction:
      'Selective serotonin 5-HT3 receptor antagonist. Blocks 5-HT3 receptors both peripherally on vagal afferent nerve terminals in the gastrointestinal tract and centrally in the chemoreceptor trigger zone (area postrema) of the brainstem, preventing serotonin-mediated stimulation of the vomiting reflex.',
    indications: [
      'Prevention of chemotherapy-induced nausea and vomiting (CINV)',
      'Prevention of radiation-induced nausea and vomiting',
      'Postoperative nausea and vomiting (PONV)',
      'Off-label use for nausea/vomiting in pregnancy (hyperemesis gravidarum)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: '4-8 mg orally or intravenously, 1-2 times daily as needed; dosing varies by indication (e.g., higher single doses for chemotherapy prophylaxis)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, intravenous, or orally disintegrating tablet',
    sideEffects: {
      ocular: [
        'Rare reports of transient blurred vision',
        'Rare case reports of transient vision loss/loss of vision, typically self-limited and associated with rapid intravenous administration',
        'No established chronic ocular toxicity syndrome — ocular effects are rare, idiosyncratic, and low-yield',
      ],
      systemic: [
        'Headache (most common side effect)',
        'Constipation',
        'QT interval prolongation (dose-dependent, can predispose to torsades de pointes, particularly with IV administration)',
        'Fatigue, dizziness',
        'Serotonin syndrome risk when combined with other serotonergic drugs (rare)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ondansetron or other 5-HT3 antagonists',
      'Concurrent use with apomorphine (risk of profound hypotension and loss of consciousness)',
      'Congenital long QT syndrome',
    ],
    precautions: [
      'Use with caution in patients with existing QT prolongation, electrolyte abnormalities (hypokalemia, hypomagnesemia), or those on other QT-prolonging medications',
      'Caution in patients on other serotonergic medications (SSRIs, SNRIs, MAOIs) due to serotonin syndrome risk',
    ],
    drugInteractions: [
      'Other QT-prolonging drugs (e.g., certain antiarrhythmics, antipsychotics, some antibiotics) — additive risk of cardiac arrhythmia',
      'Serotonergic drugs (SSRIs, SNRIs, tramadol) — additive risk of serotonin syndrome',
      'Apomorphine — contraindicated combination (severe hypotension)',
      'Tramadol — may reduce analgesic efficacy of tramadol',
    ],
    patientCounseling: [
      'Report any visual changes, though these are rare with this medication',
      'Report palpitations, dizziness, or fainting, which could indicate a cardiac rhythm effect',
      'Inform prescriber of all other serotonergic medications being taken',
    ],
    pregnancyLactation:
      'Commonly used off-label for hyperemesis gravidarum; generally considered relatively safe though some studies have raised a small possible association with cardiac septal defects with first-trimester use — use per obstetric guidance. Limited data on breastfeeding; generally considered low risk.',
    monitoring: [
      'No routine ophthalmic monitoring protocol required for this drug',
      'Ask about transient visual disturbance in patients receiving high-dose or IV ondansetron, particularly in the chemotherapy setting, though this is rare',
    ],
    clinicalPearls: [
      'Extremely commonly used antiemetic, especially in oncology, surgery, and pregnancy settings — patients on this drug are common but ocular findings attributable to it are rare',
      'Reports of transient vision loss/blurred vision are described mostly with rapid IV bolus administration and are self-limited',
      'Serves as a lower-yield "contrast" entry on boards — a very commonly encountered systemic drug with minimal true ocular toxicity, useful for testing whether a student can distinguish real ocular risk from noise',
    ],
    highYield: [
      'Ondansetron has NO established significant ocular toxicity — recognize this as a distractor/low-yield entry when ocular side effects are tested',
      'Rare, mostly historical case reports describe transient vision loss/blurred vision with rapid IV administration, not chronic oral use',
      'The more clinically significant (and more testable) systemic risk is dose-dependent QT prolongation, not an ocular effect',
      'Mechanism: selective 5-HT3 receptor antagonist acting centrally (area postrema/chemoreceptor trigger zone) and peripherally (vagal afferents) — the most likely board-testable MOA fact',
    ],
    references: [
      { label: '5-HT3 antagonist pharmacology and adverse effects', source: 'Katzung: Basic and Clinical Pharmacology' },
      { label: 'Ondansetron package insert', source: 'drug package insert' },
    ],
  },
  {
    id: 'metoclopramide',
    genericName: 'Metoclopramide',
    brandNames: ['Reglan'],
    drugClass: 'Gastrointestinal',
    mechanismOfAction:
      'Dopamine D2 receptor antagonist with additional 5-HT4 receptor agonist and weak 5-HT3 receptor antagonist activity. Centrally, D2 antagonism at the chemoreceptor trigger zone produces antiemetic effects. Peripherally, it enhances gastric motility and accelerates gastric emptying by increasing lower esophageal sphincter tone and stimulating upper GI motility, without affecting gastric, biliary, or pancreatic secretions.',
    indications: [
      'Gastroparesis (diabetic and idiopathic)',
      'Gastroesophageal reflux disease (short-term adjunctive therapy)',
      'Nausea and vomiting (including chemotherapy-induced and postoperative)',
      'Facilitation of small bowel intubation and radiographic GI studies',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: '10 mg orally or intravenously up to four times daily, typically 30 minutes before meals and at bedtime; short-term use (generally under 12 weeks) recommended due to risk of tardive dyskinesia',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, intravenous, or intramuscular',
    sideEffects: {
      ocular: [
        'Oculogyric crisis — a form of acute dystonic/extrapyramidal reaction causing sustained, involuntary, forceful upward (and sometimes lateral) deviation of both eyes, often accompanied by neck extension, jaw opening, and tongue protrusion (classic, high-yield finding)',
        'Blurred vision (due to anticholinergic-like/central effects)',
        'Other acute dystonic reactions affecting periocular musculature (blepharospasm)',
        'Oculogyric crisis is a medical/ophthalmic emergency requiring prompt recognition and treatment (typically IV diphenhydramine or benztropine)',
      ],
      systemic: [
        'Extrapyramidal symptoms/acute dystonic reactions (torticollis, trismus, opisthotonos) — most common in children, young adults, and with high doses/IV administration',
        'Tardive dyskinesia with prolonged use (boxed warning) — can be irreversible',
        'Drowsiness, fatigue, restlessness (akathisia)',
        'Hyperprolactinemia (galactorrhea, gynecomastia, menstrual irregularities) due to dopamine blockade',
        'Neuroleptic malignant syndrome (rare but serious)',
        'Depression',
      ],
    },
    contraindications: [
      'GI hemorrhage, mechanical obstruction, or perforation',
      'Pheochromocytoma (can precipitate hypertensive crisis)',
      'History of tardive dyskinesia or dystonic reactions to metoclopramide',
      'Seizure disorder (relative contraindication — may increase seizure frequency)',
      'Concurrent use with other drugs likely to cause extrapyramidal reactions (e.g., antipsychotics)',
    ],
    precautions: [
      'Boxed warning: risk of tardive dyskinesia increases with duration of treatment and total cumulative dose — limit therapy to less than 12 weeks when possible',
      'Use lowest effective dose for shortest duration',
      'Caution in Parkinson disease (dopamine antagonism can worsen symptoms)',
      'Dose adjustment needed in renal impairment',
    ],
    drugInteractions: [
      'Antipsychotics and other dopamine antagonists — additive risk of extrapyramidal symptoms and oculogyric crisis',
      'Anticholinergic drugs and opioids — antagonize the GI prokinetic effect of metoclopramide',
      'CNS depressants (alcohol, sedatives) — additive sedation',
      'Serotonergic drugs — additive serotonin syndrome risk given 5-HT4 activity',
    ],
    patientCounseling: [
      'Seek immediate medical attention if the eyes roll upward uncontrollably or the neck/jaw muscles spasm — this is a treatable emergency reaction',
      'Use only for the prescribed short duration; long-term use raises risk of a movement disorder that can be permanent',
      'Report any unusual, repetitive, or involuntary movements of the face, tongue, or limbs',
    ],
    pregnancyLactation:
      'Generally considered relatively safe in pregnancy and commonly used for severe nausea/hyperemesis gravidarum. Excreted in breast milk and can increase prolactin/milk production; used with caution while nursing given infant CNS exposure risk.',
    monitoring: [
      'Optometrist should recognize sudden, sustained upward eye deviation in a patient recently started on metoclopramide (or other dopamine antagonist) as an oculogyric crisis, not a neuro-ophthalmic emergency of central origin, and refer for prompt anticholinergic/antihistamine treatment',
      'Ask about recent medication changes in any patient presenting with acute abnormal eye movements or dystonia',
      'Monitor for signs of chronic extrapyramidal effects (including blepharospasm) with prolonged use',
    ],
    clinicalPearls: [
      'Oculogyric crisis is a classic acute dystonic reaction seen with dopamine-blocking agents (metoclopramide, antipsychotics like haloperidol) and is a must-know NBEO association',
      'Distinguish oculogyric crisis (drug-induced, acute, reversible with anticholinergic/antihistamine treatment) from other causes of abnormal eye deviation (e.g., skew deviation, supranuclear gaze palsy)',
      'Treatment of acute dystonic reaction/oculogyric crisis is typically IV diphenhydramine or benztropine, which optometrists should recognize as the appropriate emergency referral pathway',
      'Higher risk of extrapyramidal reactions in children, young adults, and with IV administration or higher doses',
    ],
    highYield: [
      'Metoclopramide can cause OCULOGYRIC CRISIS — sustained involuntary upward deviation of both eyes as an acute dystonic/extrapyramidal reaction — this is a classic, high-yield NBEO fact',
      'Oculogyric crisis is part of the broader acute dystonic reaction spectrum (torticollis, trismus) seen with dopamine D2 antagonists',
      'Mechanism: central D2 receptor antagonism at the chemoreceptor trigger zone plus peripheral prokinetic (5-HT4 agonist) activity',
      'Boxed warning for tardive dyskinesia with prolonged use (>12 weeks) — limits duration of therapy',
      'Recognize oculogyric crisis as an emergency treated with IV anticholinergic/antihistamine (diphenhydramine, benztropine), not an intrinsic ocular disease process',
    ],
    references: [
      { label: 'Dopamine antagonists and extrapyramidal/oculogyric reactions', source: 'Katzung: Basic and Clinical Pharmacology' },
      { label: 'Drug-induced ocular side effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== PULMONARY =====
  {
    id: 'albuterol',
    genericName: 'Albuterol',
    brandNames: ['Ventolin', 'ProAir', 'Proventil'],
    drugClass: 'Pulmonary',
    mechanismOfAction:
      'Short-acting beta-2 adrenergic receptor agonist (SABA). Selectively stimulates beta-2 receptors on bronchial smooth muscle, activating adenylate cyclase and increasing intracellular cyclic AMP, which produces bronchial smooth muscle relaxation and bronchodilation. At higher doses, relative beta-2 selectivity is lost and some beta-1 (cardiac) stimulation can occur.',
    indications: [
      'Acute bronchospasm in asthma',
      'Chronic obstructive pulmonary disease (COPD) exacerbations',
      'Exercise-induced bronchospasm (prophylaxis)',
      'Reversal of bronchospasm during acute respiratory distress',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Metered-dose inhaler: 2 puffs (90 mcg/puff) every 4-6 hours as needed; nebulized solution: 2.5 mg in 3 mL saline every 4-8 hours as needed',
    concentrations: ['Inhaled formulation'],
    route: 'Inhalation (metered-dose inhaler or nebulizer); oral tablet/syrup formulations also exist but are less commonly used',
    sideEffects: {
      ocular: [
        'Mild pupillary dilation (mydriasis) possible, particularly with nebulized administration via a poorly-fitted face mask that allows mist to contact the eyes directly',
        'Ocular irritation from direct mist exposure during nebulizer use',
        'No significant direct ocular toxicity with proper inhaler technique (mouthpiece use minimizes ocular mist exposure)',
        'Transient blurred vision (uncommon, related to mild mydriasis if mist contacts the eye)',
      ],
      systemic: [
        'Tremor (fine skeletal muscle tremor, most common side effect)',
        'Tachycardia and palpitations (beta-1 cross-stimulation, especially at higher doses)',
        'Nervousness/anxiety, headache',
        'Hypokalemia (beta-2 mediated intracellular potassium shift, especially with nebulized/high-dose use)',
        'Hyperglycemia (mild)',
        'Muscle cramps',
      ],
    },
    contraindications: ['Known hypersensitivity to albuterol or other beta-2 agonists'],
    precautions: [
      'Use with caution in patients with cardiovascular disease (arrhythmias, coronary insufficiency, hypertension) due to beta-1 cross-reactivity at higher doses',
      'Caution in patients with diabetes mellitus (can raise blood glucose) or hyperthyroidism',
      'Caution in patients with seizure disorders',
      'Overuse/increasing frequency of use is a marker of poorly controlled asthma and warrants reassessment of the treatment plan',
    ],
    drugInteractions: [
      'Non-selective beta-blockers (e.g., propranolol) — can blunt bronchodilator effect and precipitate bronchospasm; use cardioselective beta-blockers cautiously if needed',
      'Other sympathomimetics — additive cardiovascular effects (tachycardia, hypertension)',
      'Diuretics (loop, thiazide) — additive hypokalemia risk',
      'MAO inhibitors and tricyclic antidepressants — may potentiate cardiovascular effects of albuterol',
    ],
    patientCounseling: [
      'Use a spacer device with metered-dose inhalers to improve drug delivery and reduce oral/ocular deposition',
      'When using a nebulizer with a face mask, ensure a good seal to minimize mist escaping and contacting the eyes',
      'Report increasing frequency of rescue inhaler use to prescriber, as this may indicate worsening asthma control',
      'Rinse mouth after use if using in combination with inhaled corticosteroids (not required for albuterol alone)',
    ],
    pregnancyLactation:
      'Generally considered compatible with use in pregnancy when clinically indicated for asthma control, as poorly controlled maternal asthma poses greater fetal risk than the medication. Compatible with breastfeeding; minimal systemic absorption with inhaled use.',
    monitoring: [
      'No routine dilated ocular examination needed specifically for albuterol; ocular relevance is largely limited to noting mild transient mydriasis if a patient reports blur temporally associated with nebulizer mask use',
      'Consider medication history (nebulizer/mask use) in a patient presenting with unexplained transient mild pupil changes, particularly a bilateral or symmetric presentation given systemic administration',
    ],
    clinicalPearls: [
      'Most commonly used rescue inhaler for asthma and COPD; extremely widely prescribed, so optometrists will frequently encounter it on medication histories',
      'The mydriasis/ocular effect from albuterol is minor and inconsistent compared to ipratropium, and is not the primary high-yield teaching point for this drug — tremor and tachycardia are the more prominent, more testable systemic effects',
      'Often co-administered with ipratropium (Combivent/DuoNeb) — when this combination is nebulized via a loose-fitting mask, the anticholinergic component (ipratropium) is the more likely and more classically tested cause of unilateral or bilateral mydriasis, not albuterol alone',
    ],
    highYield: [
      'Albuterol can cause mild pupillary dilation with nebulized/mask administration if mist contacts the eyes, but this is a MINOR and inconsistent finding compared to ipratropium',
      'Tremor and tachycardia (from beta-1 cross-stimulation at higher doses) are the classic, more prominent systemic (non-ocular) side effects tested for albuterol',
      'Mechanism: selective beta-2 agonist causing bronchial smooth muscle relaxation via increased cyclic AMP',
      'Frequently co-formulated/co-nebulized with ipratropium — when a board question describes mydriasis after nebulizer treatment, ipratropium (anticholinergic) is the more classic answer than albuterol',
    ],
    references: [
      { label: 'Beta-2 agonist pharmacology', source: 'Katzung: Basic and Clinical Pharmacology' },
      { label: 'Nebulizer-associated mydriasis and systemic bronchodilators', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'ipratropium',
    genericName: 'Ipratropium bromide',
    brandNames: ['Atrovent'],
    drugClass: 'Pulmonary',
    mechanismOfAction:
      'Quaternary ammonium anticholinergic (antimuscarinic) agent. Competitively blocks muscarinic (M1-M3) acetylcholine receptors in bronchial smooth muscle, inhibiting vagally-mediated bronchoconstriction and reducing mucus gland secretion, producing bronchodilation. Its quaternary ammonium structure limits systemic absorption and CNS penetration compared to atropine, but it retains full local anticholinergic activity wherever it directly contacts tissue, including ocular tissue if mist reaches the eye.',
    indications: [
      'Chronic obstructive pulmonary disease (COPD) — maintenance bronchodilator therapy',
      'Asthma (adjunctive bronchodilator, particularly in acute exacerbations in combination with a beta-2 agonist)',
      'Allergic and nonallergic rhinitis (intranasal formulation)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Metered-dose inhaler: 2 puffs (17 mcg/puff) up to four times daily; nebulized solution: 500 mcg every 6-8 hours, often combined with albuterol in acute exacerbations',
    concentrations: ['Inhaled formulation'],
    route: 'Inhalation (metered-dose inhaler or nebulizer); intranasal spray formulation also available',
    sideEffects: {
      ocular: [
        'Unilateral (or occasionally bilateral) mydriasis and blurred vision — the classic, well-documented finding when nebulized mist directly contacts one eye, most often from a poorly-fitted or leaky nebulizer face mask (extremely high-yield board scenario)',
        'Acute angle-closure glaucoma precipitation in susceptible/narrow-angle eyes exposed to direct anticholinergic mist',
        'Blurred near vision (cycloplegic-like effect) in the affected eye',
        'Dry eye/reduced tear production from local anticholinergic exposure',
        'Anisocoria as a presenting sign when only one eye is exposed to escaping mist (classic asymmetric presentation)',
      ],
      systemic: [
        'Dry mouth (most common systemic side effect)',
        'Cough, throat irritation',
        'Headache, dizziness',
        'Urinary retention (in patients with prostatic hyperplasia)',
        'Tachycardia (uncommon, minimal systemic absorption due to quaternary ammonium structure)',
        'Constipation',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ipratropium, atropine, or its derivatives',
      'Known hypersensitivity to soy lecithin or related food allergens (some inhaler formulations contain soy-derived propellant components)',
    ],
    precautions: [
      'Use a well-fitted nebulizer mask or, preferably, a mouthpiece rather than a face mask to prevent mist from contacting the eyes',
      'Caution in patients with narrow anterior chamber angles or known angle-closure glaucoma risk given the potential for direct anticholinergic exposure to precipitate an acute angle-closure attack',
      'Caution in patients with bladder outlet obstruction/benign prostatic hyperplasia (anticholinergic urinary retention risk)',
      'If ocular mist exposure occurs and the patient reports eye pain, redness, halos, or severe blur, evaluate urgently for angle closure',
    ],
    drugInteractions: [
      'Other anticholinergic medications — additive antimuscarinic effects (dry mouth, urinary retention, blurred vision)',
      'No clinically significant systemic drug interactions given minimal systemic absorption',
    ],
    patientCounseling: [
      'Use a mouthpiece rather than a face mask with nebulized treatments when possible to avoid mist contacting the eyes',
      'If using a face mask, ensure a snug fit and keep eyes closed during treatment',
      'Seek prompt eye care if one eye becomes suddenly blurry, red, or the pupil appears enlarged/unequal after a nebulizer treatment',
      'Report eye pain, halos around lights, nausea, or severe headache after nebulizer use, which could indicate acute angle closure',
    ],
    pregnancyLactation:
      'Generally considered low risk given minimal systemic absorption; used when clinically indicated for maternal respiratory disease. Minimal systemic absorption makes significant transfer into breast milk unlikely, though data are limited.',
    monitoring: [
      'Optometrist should specifically ask about recent nebulizer treatments in any patient presenting with acute unilateral (or bilateral) mydriasis, especially if unexplained and accompanied by blurred near vision',
      'Assess anterior chamber angle depth in any patient with a history of narrow angles who reports symptoms after nebulizer use, to rule out precipitated angle closure',
      'Distinguish drug-induced mydriasis (normal pupillary light reaction may be sluggish but light-near dissociation and other neuro signs are absent) from a neurologic cause such as a third nerve palsy or Adie tonic pupil',
    ],
    clinicalPearls: [
      'This is one of the single most classic NBEO "why is one pupil suddenly dilated" vignettes: a patient recently treated with a nebulized bronchodilator via a leaky or poorly-fitted mask presents with new unilateral mydriasis and blurred vision, with the light reflex diminished in the affected eye and no other neurologic findings',
      'Distinguishing from pharmacologic (anticholinergic) mydriasis versus a neurologic third-nerve palsy is key: pharmacologic mydriasis from ipratropium typically shows a fixed, poorly-reactive pupil with normal extraocular motility and no ptosis, whereas a third nerve palsy classically presents with ptosis and motility deficits',
      'A pilocarpine 1% test drop can help differentiate pharmacologic mydriasis (pupil fails to constrict due to competitive muscarinic blockade) from a neurologic cause (pupil constricts normally)',
      'Using a mouthpiece instead of a face mask for nebulizer treatments essentially eliminates this risk, an important patient/caregiver education point',
    ],
    highYield: [
      'CLASSIC BOARD FACT: nebulized ipratropium mist contacting one eye (via a poorly-fitted mask) causes unilateral mydriasis and blurred vision — a textbook "why is one pupil suddenly big" NBEO vignette',
      'Mechanism of the ocular effect: direct local anticholinergic (antimuscarinic) blockade of the iris sphincter when mist contacts the ocular surface, not a systemic/CNS effect (ipratropium is a quaternary ammonium compound with poor systemic/CNS penetration)',
      'Can precipitate acute angle-closure glaucoma in susceptible eyes with narrow angles',
      'A pilocarpine 1% test can distinguish pharmacologic (fails to constrict) from neurologic (constricts normally) mydriasis in this clinical scenario',
      'Prevention/counseling point: use a mouthpiece rather than a face mask for nebulizer administration to avoid direct ocular mist exposure',
    ],
    references: [
      { label: 'Anticholinergic bronchodilators and pharmacologic mydriasis', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Nebulizer-associated unilateral mydriasis case reports', source: 'Katzung: Basic and Clinical Pharmacology' },
    ],
  },
  {
    id: 'fluticasone',
    genericName: 'Fluticasone propionate',
    brandNames: ['Flonase', 'Flovent'],
    drugClass: 'Pulmonary',
    mechanismOfAction:
      'Synthetic corticosteroid with potent glucocorticoid receptor agonist activity and minimal mineralocorticoid activity. Binds intracellular glucocorticoid receptors, translocates to the nucleus, and modulates gene transcription to reduce inflammatory cell recruitment (eosinophils, mast cells, lymphocytes) and suppress production of inflammatory mediators (cytokines, prostaglandins, leukotrienes) in airway and nasal mucosa. Inhaled/intranasal delivery targets local tissue with lower systemic bioavailability than oral corticosteroids, though clinically relevant systemic absorption still occurs, particularly at higher doses and with chronic use.',
    indications: [
      'Asthma — maintenance/prophylactic anti-inflammatory therapy (inhaled formulation, Flovent)',
      'Allergic and nonallergic rhinitis, seasonal/perennial allergy symptoms (intranasal formulation, Flonase)',
      'Nasal polyps',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing:
      'Inhaled (Flovent): 88-880 mcg twice daily depending on disease severity and product strength; Intranasal (Flonase): 1-2 sprays (50 mcg/spray) per nostril once daily',
    concentrations: ['Inhaled formulation'],
    route: 'Oral inhalation (metered-dose inhaler/dry powder inhaler) or intranasal spray',
    sideEffects: {
      ocular: [
        'Posterior subcapsular cataract — a real, dose- and duration-dependent risk with chronic high-dose inhaled or intranasal corticosteroid use, though smaller in magnitude than with systemic oral corticosteroids',
        'Elevated intraocular pressure / steroid-response glaucoma, particularly in "steroid responders" and patients with a family history of primary open-angle glaucoma, with long-term high-dose use',
        'Increased risk of open-angle glaucoma reported with long-term, high-dose inhaled corticosteroid use in epidemiologic studies',
        'Rarely, exacerbation or reactivation of herpetic keratitis with any corticosteroid exposure',
      ],
      systemic: [
        'Oral candidiasis (thrush) and dysphonia with inhaled use if mouth not rinsed after dosing',
        'Adrenal suppression/HPA axis suppression with high-dose, long-term use',
        'Growth suppression in children with long-term high-dose inhaled use',
        'Nasal irritation, epistaxis, and rarely nasal septal perforation with intranasal use',
        'Increased risk of pneumonia reported with inhaled corticosteroids in COPD patients',
        'Osteoporosis/decreased bone mineral density with long-term high-dose use (less than oral steroids but still relevant)',
      ],
    },
    contraindications: ['Known hypersensitivity to fluticasone or other components of the formulation', 'Primary treatment of status asthmaticus or acute bronchospasm (not a rescue medication)'],
    precautions: [
      'Not a bronchodilator/rescue inhaler — does not relieve acute bronchospasm and should not be used for acute symptom relief',
      'Use lowest effective dose; assess ocular status (IOP, lens exam) periodically in patients on chronic high-dose therapy, especially those with a personal or family history of glaucoma or cataract',
      'Rinse mouth after inhaled use to reduce oral candidiasis risk',
      'Caution in patients with active or quiescent ocular herpetic infection',
    ],
    drugInteractions: [
      'Strong CYP3A4 inhibitors (e.g., ritonavir, ketoconazole) — can significantly increase systemic fluticasone exposure and risk of adrenal suppression/Cushingoid effects',
      'Other corticosteroids (systemic or topical ophthalmic) — additive risk of steroid-related ocular and systemic side effects',
    ],
    patientCounseling: [
      'Rinse mouth with water and spit after each inhaled dose to prevent oral thrush and hoarseness',
      'This medication is for daily maintenance/prevention, not for relief of a sudden asthma attack — use a rescue inhaler (e.g., albuterol) for acute symptoms',
      'With long-term use, mention any change in vision, halos around lights, or eye pain to your eye doctor, as chronic steroid use carries a small increased risk of cataract and elevated eye pressure',
      'Report any decrease in vision that develops gradually, particularly with years of high-dose use',
    ],
    pregnancyLactation:
      'Generally considered the preferred/relatively low-risk option for asthma/allergy control during pregnancy when treatment is needed, as inhaled/intranasal routes minimize systemic exposure compared to oral corticosteroids. Considered compatible with breastfeeding at typical doses given low systemic absorption.',
    monitoring: [
      'Baseline and periodic IOP measurement and lens examination (looking specifically for posterior subcapsular cataract) in patients on chronic, high-dose inhaled or intranasal corticosteroid therapy, especially those with glaucoma risk factors',
      'Identify "steroid responder" patients (IOP rise with steroid exposure) and monitor more closely, or discuss dose reduction with the prescribing physician if elevated IOP develops',
      'Ask about duration and dose of therapy, since risk is dose- and duration-dependent',
    ],
    clinicalPearls: [
      'Inhaled/intranasal corticosteroids are generally much safer than oral/systemic corticosteroids for ocular risk, but chronic high-dose exposure still carries a real, measurable risk of posterior subcapsular cataract and steroid-response IOP elevation — do not assume the inhaled route is risk-free',
      'Risk of ocular side effects scales with cumulative dose and duration of therapy, similar in principle (though smaller in magnitude) to oral corticosteroids',
      'Patients using fluticasone chronically for asthma or allergic rhinitis are common in general optometric practice, making periodic IOP and lens monitoring a practical, testable point',
      'This is a smaller-magnitude version of the classic "steroid ocular side effect" teaching point that applies more dramatically to oral/systemic and topical ophthalmic corticosteroids',
    ],
    highYield: [
      'Chronic, high-dose inhaled/intranasal corticosteroid use carries a real (though smaller than oral steroids) risk of POSTERIOR SUBCAPSULAR CATARACT and STEROID-RESPONSE IOP ELEVATION/glaucoma — a key testable fact distinguishing "route matters but does not eliminate risk"',
      'Not a rescue/quick-relief inhaler — mechanistically an anti-inflammatory maintenance medication, unlike albuterol',
      'Risk is dose- and duration-dependent, and patients with a personal/family history of glaucoma are at greater risk of a clinically significant steroid IOP response',
      'Rinsing the mouth after inhaled use prevents oral candidiasis, a classically tested local side effect distinct from the ocular risks',
    ],
    references: [
      { label: 'Inhaled corticosteroids and ocular side effects (cataract, IOP)', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Corticosteroid pharmacology', source: 'Katzung: Basic and Clinical Pharmacology' },
    ],
  },
  {
    id: 'montelukast',
    genericName: 'Montelukast',
    brandNames: ['Singulair'],
    drugClass: 'Pulmonary',
    mechanismOfAction:
      'Leukotriene receptor antagonist (LTRA). Selectively and competitively blocks the cysteinyl leukotriene receptor CysLT1, preventing the bronchoconstrictive, mucus-secretory, and pro-inflammatory effects of leukotriene D4 (and related cysteinyl leukotrienes) released from mast cells and eosinophils during allergic and asthmatic inflammatory responses.',
    indications: [
      'Asthma — maintenance therapy, including exercise-induced bronchoconstriction prophylaxis',
      'Allergic rhinitis (seasonal and perennial)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: '10 mg orally once daily in the evening (adults); lower weight-based doses (4-5 mg) for pediatric patients',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral (tablet, chewable tablet, or oral granules)',
    sideEffects: {
      ocular: [
        'Rare case reports of diplopia',
        'Rare reports of blurred vision',
        'No well-established, mechanistically clear ocular toxicity syndrome — ocular effects are rare, nonspecific case reports rather than a consistent class effect',
      ],
      systemic: [
        'Headache (most common)',
        'Neuropsychiatric events — boxed warning for agitation, aggression, anxiousness, abnormal dreams/nightmares, depression, and suicidal thinking/behavior, particularly noted in pediatric and adolescent patients',
        'Upper respiratory infection symptoms',
        'Abdominal pain',
        'Churg-Strauss syndrome (eosinophilic granulomatosis with polyangiitis) — rare, reported mainly in the context of oral corticosteroid dose reduction in asthmatic patients',
      ],
    },
    contraindications: ['Known hypersensitivity to montelukast or any component of the formulation'],
    precautions: [
      'Boxed warning: monitor for neuropsychiatric symptoms (mood/behavior changes), especially in children and adolescents; discuss risks/benefits with patients and caregivers before starting',
      'Not intended for acute asthma attacks/bronchospasm relief',
      'Use caution when reducing systemic corticosteroid doses in patients on montelukast (rare association with Churg-Strauss syndrome in this setting)',
    ],
    drugInteractions: [
      'Phenobarbital and rifampin (CYP3A4/2C9 inducers) — may reduce montelukast plasma concentration/efficacy',
      'No other clinically significant, well-established drug interactions',
    ],
    patientCounseling: [
      'Take once daily in the evening, as directed, for maintenance control — not for immediate relief of an asthma attack',
      'Report any new mood changes, unusual behavior, agitation, or thoughts of self-harm to a caregiver or prescriber promptly, particularly in children/teens',
      'Continue use even when asymptomatic, as this is a preventive/controller medication',
    ],
    pregnancyLactation:
      'Generally considered compatible with use during pregnancy when clinically needed for asthma control, as uncontrolled maternal asthma poses a greater risk than the medication. Limited data on breastfeeding; generally considered low risk given the medication profile.',
    monitoring: [
      'No specific routine ophthalmic monitoring protocol required for this medication',
      'Consider medication history in a patient with unexplained diplopia when more common causes have been ruled out, though this remains a rare and low-yield association',
    ],
    clinicalPearls: [
      'Serves primarily as a lower-yield "contrast" drug in the systemic pulmonary category — a very commonly prescribed asthma/allergy medication (especially in children) with minimal direct ocular toxicity, useful for distinguishing true high-yield ocular-toxic drugs from common but low-risk ones',
      'The more clinically significant and more heavily emphasized safety concern with this drug is its boxed warning for neuropsychiatric adverse effects, not any ocular effect',
      'Widely used in pediatric asthma and allergic rhinitis, so optometrists frequently see it on pediatric medication histories without expecting associated ocular findings',
    ],
    highYield: [
      'Montelukast has NO well-established, consistent ocular toxicity — recognize it as a low-yield/distractor entry among systemic respiratory medications',
      'Rare case reports of diplopia exist but are not a strong, board-classic teaching association',
      'The clinically important, higher-yield safety fact about montelukast is its BOXED WARNING for neuropsychiatric effects (agitation, depression, suicidal ideation), especially in children/adolescents — not an ocular finding',
      'Mechanism: selective CysLT1 leukotriene receptor antagonist, distinguishing its MOA from inhaled corticosteroids and beta-agonists',
    ],
    references: [
      { label: 'Leukotriene receptor antagonist pharmacology and safety warnings', source: 'Katzung: Basic and Clinical Pharmacology' },
      { label: 'Singulair package insert and boxed warning', source: 'drug package insert' },
    ],
  },
]
