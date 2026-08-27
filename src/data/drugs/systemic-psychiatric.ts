import type { Drug } from '../../types/drug'

export const systemicPsychiatric: Drug[] = [
  // ===== SSRIs =====
  {
    id: 'fluoxetine',
    genericName: 'Fluoxetine',
    brandNames: ['Prozac'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Selective serotonin reuptake inhibitor (SSRI). Blocks presynaptic reuptake of serotonin (5-HT) at the synaptic cleft, increasing serotonergic neurotransmission. Has minimal direct anticholinergic, antihistaminic, or alpha-adrenergic blocking activity compared to older tricyclic antidepressants, but mild pupillary and accommodative effects can still occur via serotonergic modulation of autonomic tone.',
    indications: [
      'Major depressive disorder',
      'Obsessive-compulsive disorder (OCD)',
      'Panic disorder',
      'Bulimia nervosa',
      'Premenstrual dysphoric disorder',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 20 mg once daily initially, titrated up to 20-80 mg/day depending on indication',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Mild pupillary dilation (mydriasis) via serotonergic/sympathomimetic effects',
        'Rare precipitation of acute angle-closure glaucoma in patients with anatomically narrow angles (mydriatic effect can push the peripheral iris into the trabecular meshwork)',
        'Blurred vision',
        'Nonspecific visual disturbances',
        'Dry eye / decreased tear production (mild anticholinergic-like component)',
        'Rare reports of abnormal accommodation',
      ],
      systemic: [
        'Nausea, GI upset',
        'Insomnia, agitation, anxiety',
        'Sexual dysfunction',
        'Headache',
        'Weight changes',
        'Serotonin syndrome (with other serotonergic agents)',
        'Hyponatremia (SIADH), particularly in elderly patients',
      ],
    },
    contraindications: [
      'Concurrent use or use within 14 days of a monoamine oxidase inhibitor (MAOI) - risk of serotonin syndrome',
      'Concurrent use with pimozide or thioridazine (QT prolongation risk)',
      'Known hypersensitivity to fluoxetine',
    ],
    precautions: [
      'Use caution in patients with anatomically narrow anterior chamber angles - obtain gonioscopy or angle assessment if pupillary dilation from SSRI therapy is a concern',
      'Black box warning for increased suicidality risk in children, adolescents, and young adults, especially early in treatment',
      'Caution in patients with bleeding disorders or on anticoagulants (SSRIs can impair platelet aggregation)',
      'Long half-life (and active metabolite norfluoxetine) means effects/interactions can persist for weeks after discontinuation',
    ],
    drugInteractions: [
      'MAOIs - contraindicated, risk of serotonin syndrome',
      'Other serotonergic drugs (triptans, tramadol, other SSRIs/SNRIs, St. John\'s Wort) - additive serotonin syndrome risk',
      'Warfarin and other anticoagulants - increased bleeding risk',
      'CYP2D6 substrates (fluoxetine is a potent CYP2D6 inhibitor) - can raise levels of many co-administered drugs',
      'NSAIDs/aspirin - additive GI bleeding risk',
    ],
    patientCounseling: [
      'Report any eye pain, halos around lights, or sudden vision changes immediately - rare but can signal angle-closure glaucoma',
      'Full antidepressant effect may take 4-6 weeks',
      'Do not stop abruptly without consulting prescriber',
      'Report any unusual bleeding or bruising',
    ],
    pregnancyLactation:
      'Use only if benefit outweighs risk; associated with neonatal adaptation syndrome and a possible small increased risk of persistent pulmonary hypertension of the newborn when used in late pregnancy. Excreted in breast milk; monitor nursing infants for irritability/poor feeding.',
    monitoring: [
      'Anterior chamber angle assessment (van Herick or gonioscopy) in patients with known narrow angles or hyperopia before/during therapy',
      'Ask about new eye pain, redness, or halos suggestive of angle-closure',
      'Baseline and periodic assessment of visual complaints',
      'Tear film status/dry eye symptoms',
    ],
    clinicalPearls: [
      'SSRIs as a class carry a small but real risk of precipitating acute angle-closure glaucoma through mild pupillary dilation in eyes with anatomically narrow angles - far less potent mydriatic effect than anticholinergics like tricyclics, but still tested',
      'Fluoxetine has an unusually long half-life (1-4 days; active metabolite norfluoxetine 7-15 days), so interaction risk and washout period before starting an MAOI is prolonged (5 weeks) compared to other SSRIs',
      'Optometrists should specifically ask about SSRI use when working up a patient presenting with unexplained mydriasis or an angle-closure event with no other obvious anticholinergic exposure',
    ],
    highYield: [
      'SSRIs (including fluoxetine) can cause mild mydriasis and rarely precipitate ACUTE ANGLE-CLOSURE GLAUCOMA in patients with anatomically narrow angles - classic NBEO systemic-drug ocular side effect',
      'Mechanism of angle-closure risk is pupillary dilation narrowing an already-crowded angle, NOT direct anticholinergic blockade (unlike TCAs)',
      'Fluoxetine has the longest half-life of the SSRI class - relevant for drug interaction washout periods',
      'Blurred vision and dry eye are common but generally mild, nonspecific complaints with SSRI therapy',
    ],
    references: [
      { label: 'SSRI-associated angle-closure glaucoma risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Fluoxetine pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },
  {
    id: 'sertraline',
    genericName: 'Sertraline',
    brandNames: ['Zoloft'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Selective serotonin reuptake inhibitor (SSRI). Blocks presynaptic serotonin reuptake, increasing serotonergic tone. Minimal anticholinergic, antihistaminic, or alpha-1 blocking activity relative to tricyclic antidepressants, but shares the class-wide mild pupillary/autonomic effects of increased serotonergic transmission.',
    indications: [
      'Major depressive disorder',
      'Obsessive-compulsive disorder (OCD)',
      'Panic disorder',
      'Post-traumatic stress disorder (PTSD)',
      'Social anxiety disorder',
      'Premenstrual dysphoric disorder',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 50 mg once daily initially, titrated up to 50-200 mg/day depending on indication',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Mild pupillary dilation (mydriasis)',
        'Rare precipitation of acute angle-closure glaucoma in anatomically narrow angles',
        'Blurred vision',
        'Visual disturbances (nonspecific)',
        'Dry eye',
        'Rare abnormal accommodation complaints',
      ],
      systemic: [
        'Nausea, diarrhea, GI upset (more prominent than other SSRIs)',
        'Insomnia or somnolence',
        'Sexual dysfunction',
        'Tremor',
        'Headache',
        'Serotonin syndrome (with other serotonergic agents)',
        'Hyponatremia, especially in elderly patients',
      ],
    },
    contraindications: [
      'Concurrent use or use within 14 days of an MAOI - risk of serotonin syndrome',
      'Concurrent use with pimozide',
      'Known hypersensitivity to sertraline',
    ],
    precautions: [
      'Use caution in patients with known anatomically narrow anterior chamber angles',
      'Black box warning for increased suicidality risk in children, adolescents, and young adults',
      'Caution with bleeding disorders/anticoagulant use',
      'Caution in hepatic impairment (dose adjustment needed)',
    ],
    drugInteractions: [
      'MAOIs - contraindicated, serotonin syndrome risk',
      'Other serotonergic agents (triptans, tramadol, other antidepressants) - additive serotonin syndrome risk',
      'Warfarin - increased bleeding risk/INR changes',
      'NSAIDs/aspirin - additive GI bleeding risk',
    ],
    patientCounseling: [
      'Report sudden eye pain, halos, or vision changes promptly - rare sign of angle-closure glaucoma',
      'Antidepressant effect may take several weeks to become apparent',
      'Do not discontinue abruptly',
      'Report unusual bleeding or bruising',
    ],
    pregnancyLactation:
      'Use only if benefits outweigh risks; associated with neonatal adaptation syndrome when used in late pregnancy. Excreted in breast milk in low levels; generally considered one of the preferred SSRIs during lactation, but monitor infant.',
    monitoring: [
      'Anterior chamber angle assessment in patients with known narrow angles or significant hyperopia',
      'Screen for new-onset eye pain, redness, or halos',
      'Visual acuity and refractive complaints at routine exams',
      'Dry eye symptoms',
    ],
    clinicalPearls: [
      'Sertraline is one of the most commonly prescribed SSRIs, so optometrists will frequently encounter it in patient medication histories',
      'Class-wide SSRI risk of angle-closure precipitation is low in absolute terms but clinically important because optometrists are often the first to identify anatomically narrow angles that make a patient vulnerable',
      'Generally considered favorable in pregnancy/lactation relative to other antidepressants, which is why it appears often in reproductive-age patients',
    ],
    highYield: [
      'SSRIs as a class (including sertraline) can precipitate ACUTE ANGLE-CLOSURE GLAUCOMA via mild pupillary dilation in narrow-angle eyes',
      'Mechanism is mild serotonergic-mediated mydriasis, not significant anticholinergic blockade',
      'Blurred vision and dry eye are common, generally benign complaints',
      'Optometrists should screen anterior chamber angle depth in any patient on SSRI therapy with risk factors (hyperopia, shallow anterior chamber, family history of angle-closure)',
    ],
    references: [
      { label: 'SSRI-associated angle-closure risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Sertraline pharmacology and adverse effects', source: 'AHFS Drug Information' },
    ],
  },

  // ===== TRICYCLIC ANTIDEPRESSANT =====
  {
    id: 'amitriptyline',
    genericName: 'Amitriptyline',
    brandNames: ['Elavil'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Tricyclic antidepressant (TCA) that inhibits presynaptic reuptake of both norepinephrine and serotonin. In addition to its monoaminergic action, amitriptyline has strong antimuscarinic (anticholinergic) activity, along with antihistaminic and alpha-1 adrenergic blocking properties. The anticholinergic activity is responsible for its most clinically significant ocular effects.',
    indications: [
      'Major depressive disorder',
      'Chronic neuropathic pain (off-label, e.g., diabetic neuropathy, postherpetic neuralgia)',
      'Migraine prophylaxis (off-label)',
      'Fibromyalgia (off-label)',
      'Insomnia (off-label, low dose)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 25-50 mg at bedtime initially, titrated up to 100-300 mg/day for depression (lower doses for neuropathic pain)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Mydriasis (pupil dilation) from potent antimuscarinic activity - classic and prominent effect',
        'Cycloplegia with blurred near vision/decreased accommodation - directly from ciliary muscle antimuscarinic blockade',
        'PRECIPITATION OF ACUTE ANGLE-CLOSURE GLAUCOMA in patients with anatomically narrow angles - one of the most classically tested anticholinergic drug-class facts in ocular pharmacology boards',
        'Dry eye / decreased tear production (anticholinergic effect on lacrimal gland)',
        'Photophobia (secondary to mydriasis)',
        'Rare exacerbation of pre-existing narrow-angle glaucoma',
      ],
      systemic: [
        'Anticholinergic effects: dry mouth, constipation, urinary retention, tachycardia',
        'Orthostatic hypotension',
        'Sedation/drowsiness (strong antihistaminic effect)',
        'Weight gain',
        'Cardiac conduction abnormalities/QT prolongation - risk of arrhythmia, especially in overdose',
        'Cognitive impairment/confusion, particularly in elderly patients (anticholinergic burden)',
      ],
    },
    contraindications: [
      'Narrow-angle glaucoma (undiagnosed or untreated) - significant contraindication given strong mydriatic/anticholinergic effect',
      'Recent myocardial infarction',
      'Concurrent use with MAOIs',
      'Known hypersensitivity to tricyclic antidepressants',
    ],
    precautions: [
      'Assess anterior chamber angle status before initiating in patients with risk factors for narrow angles (hyperopia, shallow anterior chamber, family history)',
      'Use with caution in the elderly - increased sensitivity to anticholinergic and cardiac side effects',
      'Caution in patients with cardiac conduction disease',
      'Caution in urinary retention/benign prostatic hyperplasia (anticholinergic effect can worsen retention)',
    ],
    drugInteractions: [
      'MAOIs - contraindicated, risk of serotonin syndrome/hypertensive crisis',
      'Other anticholinergic drugs (antihistamines, other TCAs, antipsychotics) - additive anticholinergic burden, increased angle-closure risk',
      'CNS depressants (alcohol, benzodiazepines) - additive sedation',
      'Drugs that prolong QT interval - additive arrhythmia risk',
      'Sympathomimetics (e.g., epinephrine) - potentiated pressor response',
    ],
    patientCounseling: [
      'Report any eye pain, blurred vision, halos around lights, or sudden vision loss immediately - can indicate acute angle-closure glaucoma',
      'Expect dry mouth, dry eyes, and blurred near vision, which are common anticholinergic effects',
      'Avoid abrupt discontinuation',
      'Use caution with driving due to sedation and blurred vision, especially early in treatment',
    ],
    pregnancyLactation:
      'Use only if clearly needed; limited data suggest possible risk with third-trimester use (neonatal withdrawal/anticholinergic symptoms). Excreted in breast milk; caution advised, monitor infant for sedation.',
    monitoring: [
      'Anterior chamber angle depth/gonioscopy before initiating in at-risk patients (hyperopes, shallow chambers, older patients)',
      'IOP measurement if angle-closure symptoms develop',
      'Ask specifically about new eye pain, halos, or headache with nausea (classic angle-closure symptom triad)',
      'Accommodative complaints/near vision function',
      'Dry eye signs and symptoms',
    ],
    clinicalPearls: [
      'Amitriptyline is the prototypical example used on boards to test the anticholinergic drug-class mechanism for precipitating acute angle-closure glaucoma - along with other anticholinergics like antihistamines and atropine-like agents',
      'Any patient presenting with acute angle-closure glaucoma symptoms should have their medication list reviewed for anticholinergic agents, with TCAs being a classic culprit',
      'Because of its broad receptor activity (anticholinergic, antihistaminic, alpha-blocking), amitriptyline has one of the most extensive side-effect profiles among antidepressants, which is why newer SSRIs/SNRIs are generally preferred first-line',
      'Low anticholinergic-burden alternatives (e.g., nortriptyline, a TCA metabolite) exist but amitriptyline remains a classic high-yield exam example',
    ],
    highYield: [
      'STRONG ANTICHOLINERGIC ACTIVITY causes mydriasis and cycloplegia - amitriptyline is a classic board example of a systemic anticholinergic that can precipitate ACUTE ANGLE-CLOSURE GLAUCOMA in anatomically narrow angles',
      'This is one of the single most tested anticholinergic-drug-class facts on NBEO - know that TCAs (like antihistamines and atropine) can trigger angle-closure via pupillary block',
      'Contraindicated in patients with untreated narrow-angle/angle-closure glaucoma',
      'Causes dry eye via anticholinergic suppression of lacrimal secretion, and blurred near vision via cycloplegia (ciliary muscle antimuscarinic blockade)',
    ],
    references: [
      { label: 'Anticholinergic drugs and angle-closure glaucoma', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Amitriptyline pharmacology and adverse effects', source: 'AHFS Drug Information' },
    ],
  },

  // ===== ATYPICAL ANTIDEPRESSANT =====
  {
    id: 'bupropion',
    genericName: 'Bupropion',
    brandNames: ['Wellbutrin', 'Zyban'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Atypical antidepressant that inhibits neuronal reuptake of norepinephrine and dopamine (a norepinephrine-dopamine reuptake inhibitor, NDRI). Has minimal direct effect on serotonin reuptake and negligible anticholinergic, antihistaminic, or alpha-adrenergic blocking activity compared to tricyclic antidepressants, giving it a distinct side-effect profile including a lower rate of sexual dysfunction and sedation but a notable seizure-threshold risk.',
    indications: [
      'Major depressive disorder',
      'Seasonal affective disorder',
      'Smoking cessation aid (Zyban formulation)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 150 mg once daily initially (sustained/extended-release formulations), titrated up to 300-450 mg/day for depression; 150 mg twice daily for smoking cessation',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Blurred vision (reported, mechanism not fully anticholinergic given bupropion\'s minimal antimuscarinic activity - thought related to dopaminergic/noradrenergic effects)',
        'Mild pupillary dilation (mydriasis)',
        'Rare visual disturbances/visual hallucinations at high doses',
        'Rare reports of acute angle-closure glaucoma, though far less common than with anticholinergic antidepressants (TCAs)',
      ],
      systemic: [
        'Dose-dependent LOWERING OF SEIZURE THRESHOLD - important non-ocular precaution, especially at higher doses or in predisposed patients (eating disorder history, alcohol/sedative withdrawal)',
        'Insomnia, agitation, anxiety',
        'Dry mouth',
        'Headache',
        'Tremor',
        'Tachycardia, increased blood pressure',
        'Weight loss (contrast with weight gain seen with many other antidepressants)',
      ],
    },
    contraindications: [
      'Seizure disorder (current or history of)',
      'Current or prior diagnosis of bulimia or anorexia nervosa (increased seizure risk)',
      'Abrupt discontinuation of alcohol, benzodiazepines, barbiturates, or antiepileptic drugs',
      'Concurrent use of an MAOI or use within 14 days of MAOI discontinuation',
      'Known hypersensitivity to bupropion',
    ],
    precautions: [
      'Use caution in patients with any condition that lowers seizure threshold (head trauma, CNS tumor, severe hepatic cirrhosis)',
      'Caution in patients with hypertension - can raise blood pressure',
      'Dose-dependent seizure risk increases significantly above recommended maximum doses',
      'Caution in narrow-angle glaucoma given mild mydriatic potential, though risk is lower than with TCAs',
    ],
    drugInteractions: [
      'MAOIs - contraindicated',
      'Other drugs that lower seizure threshold (antipsychotics, other antidepressants, systemic corticosteroids, theophylline) - additive seizure risk',
      'CYP2D6 substrates (bupropion is a potent CYP2D6 inhibitor) - can raise levels of many co-administered drugs including some beta-blockers and antiarrhythmics',
      'Nicotine replacement therapy - used concurrently for smoking cessation but monitor blood pressure',
    ],
    patientCounseling: [
      'Report any new visual disturbances, eye pain, or halos promptly',
      'Take exactly as prescribed - do not exceed recommended dose due to dose-dependent seizure risk',
      'Avoid alcohol, which can further lower seizure threshold',
      'Do not stop other sedative/anxiolytic medications abruptly while on bupropion',
    ],
    pregnancyLactation:
      'Use only if benefits outweigh risks; data are limited but no strong evidence of major teratogenicity. Excreted in breast milk; caution advised during lactation, monitor infant for irritability.',
    monitoring: [
      'Ask about new visual symptoms (blurred vision, eye pain) at routine exams',
      'Assess anterior chamber angle in patients with known narrow angles, particularly if other mydriatic-risk medications are also used',
      'Blood pressure (systemic monitoring, coordinated with prescriber)',
      'Screen for seizure history/risk factors when relevant to overall patient risk profile',
    ],
    clinicalPearls: [
      'Bupropion is notable among antidepressants for its LOW anticholinergic burden and low sedation/sexual dysfunction rates, making it a popular choice, but its defining safety issue is dose-dependent seizure risk rather than significant ocular anticholinergic toxicity',
      'Same active ingredient marketed as Wellbutrin (depression/SAD) and Zyban (smoking cessation) at different dosing regimens - a classic pharmacology trivia point analogous to bimatoprost/Latisse',
      'Ocular side effects are less prominent and less well-characterized than with SSRIs or TCAs, reflecting its distinct receptor profile',
    ],
    highYield: [
      'Bupropion has MINIMAL anticholinergic activity compared to TCAs - lower angle-closure glaucoma risk than amitriptyline, though rare cases are reported with mild mydriasis',
      'The single most tested precaution for bupropion is DOSE-DEPENDENT SEIZURE THRESHOLD LOWERING - contraindicated in seizure disorders and eating disorders',
      'Same drug marketed under two brand names for two different indications: Wellbutrin (depression) and Zyban (smoking cessation)',
      'Blurred vision and mild mydriasis can occur but the mechanism is not primarily anticholinergic, distinguishing it from tricyclic antidepressants',
    ],
    references: [
      { label: 'Bupropion pharmacology, seizure risk, and adverse effects', source: 'AHFS Drug Information' },
      { label: 'Antidepressant classes and ocular side effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== MOOD STABILIZER =====
  {
    id: 'lithium',
    genericName: 'Lithium',
    brandNames: ['Lithobid', 'Eskalith'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Monovalent cation whose precise mechanism in bipolar disorder is not fully understood but is thought to involve modulation of second-messenger systems (inositol phosphate pathway, GSK-3beta inhibition) and stabilization of neuronal excitability. Has a very narrow therapeutic index, and neurotoxicity (including ocular motor effects such as nystagmus) is a direct manifestation of lithium accumulation in the CNS, particularly the cerebellum and brainstem ocular motor pathways.',
    indications: [
      'Bipolar disorder (acute mania and maintenance/prophylaxis)',
      'Adjunctive treatment-resistant depression (off-label)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 300 mg two to three times daily initially, titrated based on serum lithium levels (target therapeutic range typically 0.6-1.2 mEq/L)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Nystagmus - classic sign of lithium neurotoxicity, may occur even at therapeutic serum levels with chronic use',
        'DOWNBEAT NYSTAGMUS - a specific, classically described finding associated with lithium toxicity (localizes to cerebellar/brainstem/cervicomedullary junction dysfunction)',
        'Blurred vision',
        'Benign intracranial hypertension (idiopathic intracranial hypertension/pseudotumor cerebri) with resultant papilledema - a serious, sight-threatening association requiring prompt recognition',
        'Exophthalmos (rare, reported association)',
        'Diplopia (from ocular motor/cranial nerve effects, particularly in toxicity)',
        'Blepharoclonus (rare)',
      ],
      systemic: [
        'Fine hand tremor',
        'Polyuria/polydipsia (nephrogenic diabetes insipidus effect on kidney)',
        'Hypothyroidism',
        'GI upset (nausea, diarrhea)',
        'Weight gain',
        'Cardiac conduction changes (T-wave flattening)',
        'Lithium toxicity at higher levels: coarse tremor, ataxia, confusion, seizures, coma - narrow therapeutic index makes toxicity a real clinical risk',
      ],
    },
    contraindications: [
      'Severe renal impairment (lithium is renally cleared and toxicity risk rises sharply with reduced clearance)',
      'Severe cardiovascular disease',
      'Severe dehydration or sodium depletion (increases lithium reabsorption and toxicity risk)',
      'Known hypersensitivity to lithium',
    ],
    precautions: [
      'Narrow therapeutic index requires regular serum lithium level monitoring - toxicity and therapeutic effect are closely dose-related',
      'Dehydration, low-sodium diets, NSAIDs, ACE inhibitors, and diuretics can all raise lithium levels and precipitate toxicity',
      'Monitor renal and thyroid function periodically with chronic use',
      'New headache, visual disturbance, or papilledema on exam warrants urgent referral to rule out lithium-associated intracranial hypertension',
    ],
    drugInteractions: [
      'NSAIDs - decrease renal lithium clearance, raising lithium levels and toxicity risk',
      'ACE inhibitors and ARBs - decrease lithium clearance, increased toxicity risk',
      'Thiazide diuretics - decrease lithium clearance, increased toxicity risk',
      'Other serotonergic/neurotoxic CNS drugs - additive neurotoxicity',
    ],
    patientCounseling: [
      'Report any new visual disturbance, double vision, or persistent headache promptly - can indicate intracranial hypertension or toxicity',
      'Maintain consistent fluid and salt intake; dehydration can precipitate toxicity',
      'Attend all scheduled blood level monitoring appointments',
      'Report any tremor, confusion, or unsteady gait, which may indicate rising lithium levels',
    ],
    pregnancyLactation:
      'Associated with increased risk of cardiac malformations (notably Ebstein anomaly) with first-trimester exposure; use only if clearly necessary with close monitoring. Contraindicated during breastfeeding due to significant excretion in breast milk and infant toxicity risk.',
    monitoring: [
      'Ocular motility exam for nystagmus, particularly downbeat nystagmus, as a sign of neurotoxicity',
      'Fundus exam/optic nerve assessment for papilledema if patient reports headache or visual disturbance (screen for lithium-associated intracranial hypertension)',
      'Visual acuity and diplopia symptoms',
      'Coordinate with prescriber on serum lithium level trends when toxicity is suspected based on ocular findings',
    ],
    clinicalPearls: [
      'Nystagmus in a patient on lithium should always raise concern for lithium neurotoxicity, and downbeat nystagmus in particular is a classically cited localizing sign in lithium toxicity literature',
      'Lithium is one of several systemic drugs associated with idiopathic intracranial hypertension (others include tetracyclines and vitamin A derivatives) - papilledema found on a dilated fundus exam in a patient on lithium with headache should prompt urgent workup',
      'Because of its narrow therapeutic index, even mild renal impairment, dehydration, or interacting medications (NSAIDs, diuretics, ACE inhibitors) can push a stable patient into toxicity, which may first present with ocular motor findings',
    ],
    highYield: [
      'Lithium neurotoxicity classically presents with NYSTAGMUS, particularly DOWNBEAT NYSTAGMUS - a highly testable localizing ocular sign',
      'Lithium is associated with BENIGN INTRACRANIAL HYPERTENSION (pseudotumor cerebri) causing PAPILLEDEMA - a sight-threatening association optometrists must recognize on fundus exam',
      'Narrow therapeutic index (0.6-1.2 mEq/L target) means toxicity is a real, testable risk - NSAIDs, thiazides, ACE inhibitors, and dehydration all raise lithium levels',
      'Blurred vision and diplopia can occur, especially as levels approach or exceed the toxic range',
    ],
    references: [
      { label: 'Lithium-induced nystagmus and neuro-ophthalmic toxicity', source: 'Walsh & Hoyt\'s Clinical Neuro-Ophthalmology' },
      { label: 'Lithium pharmacology and narrow therapeutic index', source: 'AHFS Drug Information' },
    ],
  },

  // ===== TYPICAL ANTIPSYCHOTIC =====
  {
    id: 'haloperidol',
    genericName: 'Haloperidol',
    brandNames: ['Haldol'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'First-generation (typical) antipsychotic that acts primarily as a potent dopamine D2 receptor antagonist, particularly in the mesolimbic pathway (antipsychotic effect) and nigrostriatal pathway (extrapyramidal side effects). Has weaker anticholinergic, antihistaminic, and alpha-adrenergic blocking activity than low-potency typical antipsychotics like chlorpromazine. Chronic deposition of drug/metabolite in ocular tissues, particularly with long-term high-dose use, underlies its pigmentary ocular deposition effects, though this is a much less prominent and less common finding than with chlorpromazine or thioridazine.',
    indications: [
      'Schizophrenia and other psychotic disorders',
      'Acute agitation (including in delirium)',
      'Tourette syndrome (tic suppression)',
      'Severe behavioral disturbances',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 0.5-5 mg two to three times daily depending on indication and severity; also available IM/IV for acute agitation',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, intramuscular, or intravenous',
    sideEffects: {
      ocular: [
        'Pigmentary deposits in the cornea and lens (pigmentary keratopathy and anterior subcapsular cataract) with chronic, high-dose, long-term use - a well-recognized though less common phenomenon compared to phenothiazines like chlorpromazine',
        'Blurred vision from mild anticholinergic activity',
        'Oculogyric crisis - an acute dystonic reaction causing sustained, involuntary upward deviation of the eyes, a classic extrapyramidal side effect requiring urgent recognition and treatment',
        'Mild mydriasis (less prominent than with lower-potency antipsychotics or TCAs)',
        'Blepharospasm (rare, extrapyramidal-related)',
      ],
      systemic: [
        'Extrapyramidal symptoms: dystonia, akathisia, parkinsonism, tardive dyskinesia (with chronic use)',
        'Neuroleptic malignant syndrome (rare but life-threatening)',
        'QT prolongation/risk of torsades de pointes',
        'Sedation',
        'Orthostatic hypotension (less than low-potency agents)',
        'Hyperprolactinemia',
      ],
    },
    contraindications: [
      'Parkinson disease (relative contraindication - can worsen symptoms via D2 blockade)',
      'Severe CNS depression or comatose states',
      'Known hypersensitivity to haloperidol',
      'QT prolongation or use with other QT-prolonging drugs (caution/relative contraindication)',
    ],
    precautions: [
      'Monitor for extrapyramidal symptoms, especially early in treatment and with dose increases',
      'Baseline and periodic ECG monitoring given QT prolongation risk',
      'Caution in elderly patients with dementia-related psychosis (increased mortality risk - black box warning)',
      'Long-term high-dose use warrants periodic ocular exam for pigmentary deposition',
    ],
    drugInteractions: [
      'Other QT-prolonging drugs (certain antiarrhythmics, some antibiotics) - additive arrhythmia risk',
      'CNS depressants (alcohol, benzodiazepines, opioids) - additive sedation/respiratory depression',
      'Anticholinergic drugs - additive anticholinergic burden',
      'CYP3A4/CYP2D6 inhibitors - can raise haloperidol levels',
    ],
    patientCounseling: [
      'Report any sustained abnormal eye movements or eyes rolling upward, which may indicate an acute dystonic reaction (oculogyric crisis) requiring urgent treatment',
      'Report new blurred vision or gradual vision changes with long-term therapy',
      'Do not stop abruptly without consulting prescriber',
      'Attend scheduled monitoring appointments including ECG as directed',
    ],
    pregnancyLactation:
      'Use only if clearly needed; risk of extrapyramidal/withdrawal symptoms in neonates exposed in the third trimester. Excreted in breast milk; caution advised, monitor infant for sedation/extrapyramidal signs.',
    monitoring: [
      'Slit lamp exam for corneal and lens pigmentary deposits with chronic, long-term, high-dose therapy',
      'Visual acuity assessment given cataract risk with prolonged use',
      'Screen for oculogyric crisis / abnormal sustained eye deviation, particularly early in treatment or after dose changes',
      'General ocular motility and extrapyramidal sign screening',
    ],
    clinicalPearls: [
      'Pigmentary keratopathy and cataract from antipsychotics is a class effect most classically associated with chlorpromazine (and thioridazine\'s associated pigmentary retinopathy) - haloperidol can cause similar corneal/lens pigmentary deposits with chronic high-dose use, but this is less common and less severe than with low-potency phenothiazines',
      'Oculogyric crisis is a dramatic, frightening, but treatable acute dystonic reaction (sustained upward eye deviation) that can occur early in treatment - recognizing it as a drug reaction rather than a primary neuro-ophthalmic event is important',
      'Haloperidol is a high-potency typical antipsychotic, meaning stronger D2 blockade/extrapyramidal effects but comparatively less anticholinergic and antihistaminic activity than low-potency agents like chlorpromazine',
    ],
    highYield: [
      'Chronic, high-dose haloperidol use is associated with PIGMENTARY DEPOSITS in the cornea and lens (pigmentary keratopathy, anterior subcapsular cataract) - class effect shared with other antipsychotics, most classically chlorpromazine',
      'OCULOGYRIC CRISIS (sustained involuntary upward eye deviation) is a classic acute extrapyramidal/dystonic reaction to haloperidol and other typical antipsychotics - high-yield emergency recognition fact',
      'As a HIGH-POTENCY typical antipsychotic, haloperidol has more extrapyramidal side effects but LESS anticholinergic/antihistaminic activity than low-potency agents like chlorpromazine',
      'Blurred vision can occur from mild anticholinergic activity, though far less prominent than with low-potency phenothiazines',
    ],
    references: [
      { label: 'Antipsychotic-induced ocular pigmentary deposition', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Haloperidol pharmacology and extrapyramidal effects', source: 'AHFS Drug Information' },
    ],
  },

  // ===== ATYPICAL ANTIPSYCHOTIC =====
  {
    id: 'risperidone',
    genericName: 'Risperidone',
    brandNames: ['Risperdal'],
    drugClass: 'Psychiatric',
    mechanismOfAction:
      'Second-generation (atypical) antipsychotic that antagonizes both dopamine D2 receptors and serotonin 5-HT2A receptors, giving a lower rate of extrapyramidal symptoms than typical antipsychotics at moderate doses. Also has notable alpha-1 adrenergic receptor antagonism, which is the mechanism underlying its association with Intraoperative Floppy Iris Syndrome (IFIS), analogous to the well-known IFIS association with the alpha-1 antagonist tamsulosin.',
    indications: [
      'Schizophrenia',
      'Bipolar disorder (acute mania, mixed episodes)',
      'Irritability associated with autistic disorder',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral: 0.25-2 mg once or twice daily initially, titrated up to 2-8 mg/day depending on indication (long-acting injectable formulation also available)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral or long-acting intramuscular injection',
    sideEffects: {
      ocular: [
        'Intraoperative Floppy Iris Syndrome (IFIS) risk - alpha-1 receptor antagonism causes iris dilator muscle flaccidity, poor pupillary dilation, iris billowing/prolapse, and progressive intraoperative miosis during cataract surgery, similar in mechanism concern to tamsulosin',
        'Blurred vision',
        'Mild mydriasis or, less commonly, effects on pupil reactivity',
        'Rare reports of oculogyric crisis/acute dystonic ocular deviation (lower incidence than typical antipsychotics)',
        'Dry eye (mild anticholinergic-like component, though risperidone has relatively low anticholinergic activity)',
      ],
      systemic: [
        'Extrapyramidal symptoms (dose-dependent, more common at higher doses than most atypicals)',
        'Hyperprolactinemia (more pronounced than most other atypical antipsychotics)',
        'Weight gain, metabolic syndrome (dyslipidemia, hyperglycemia)',
        'Orthostatic hypotension (alpha-1 blockade)',
        'Sedation',
        'QT prolongation (mild)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to risperidone',
      'Increased mortality risk in elderly patients with dementia-related psychosis (black box warning - not an absolute contraindication but a major precaution)',
    ],
    precautions: [
      'CRITICAL: Inform the cataract/anterior segment surgeon of current or past risperidone use before any intraocular surgery, given IFIS risk',
      'Monitor for orthostatic hypotension, especially early in treatment or with dose increases (alpha-1 blockade)',
      'Monitor metabolic parameters (weight, lipids, glucose) with chronic use',
      'Caution in patients with pre-existing cardiovascular disease given orthostatic and QT effects',
    ],
    drugInteractions: [
      'Other alpha-1 blocking drugs (e.g., tamsulosin, prazosin) - additive hypotension and additive IFIS risk during ocular surgery',
      'CYP2D6 inhibitors (e.g., fluoxetine, paroxetine) - can raise risperidone levels',
      'CNS depressants - additive sedation',
      'QT-prolonging drugs - additive arrhythmia risk',
    ],
    patientCounseling: [
      'Tell your eye surgeon that you take (or have ever taken) risperidone before any cataract or eye surgery, even if you stopped the medication - the IFIS effect can persist',
      'Report any blurred vision or visual changes',
      'Rise slowly from sitting/lying to reduce dizziness from blood pressure drops',
      'Report signs of high blood sugar or unexplained weight gain to your prescriber',
    ],
    pregnancyLactation:
      'Use only if clearly needed; risk of extrapyramidal/withdrawal symptoms in neonates exposed in the third trimester. Excreted in breast milk; caution advised, monitor infant for sedation.',
    monitoring: [
      'Preoperative surgical history intake should specifically ask about current AND past risperidone (and other alpha-1 antagonist) use before any planned cataract surgery, so the surgeon can anticipate and prepare for IFIS (e.g., iris hooks, pupil expansion devices, modified technique)',
      'Blood pressure/orthostatic symptoms',
      'Visual acuity and refractive complaints',
      'Pupil size and reactivity at routine exams',
    ],
    clinicalPearls: [
      'IFIS was first and most classically described with tamsulosin (an alpha-1A selective antagonist used for BPH), but any systemic alpha-1 antagonist, including risperidone and other atypical antipsychotics with alpha-1 blocking activity, carries this risk - this cross-class association is a favorite board-exam twist',
      'The IFIS effect can persist even after the medication has been discontinued, so a thorough medication HISTORY (not just current use) is essential preoperatively',
      'Compared to typical antipsychotics like haloperidol, risperidone has a lower rate of extrapyramidal symptoms at moderate doses but a distinct alpha-1-mediated ocular surgical risk profile',
    ],
    highYield: [
      'Risperidone (and other alpha-1 antagonist-active antipsychotics) carries a risk of INTRAOPERATIVE FLOPPY IRIS SYNDROME (IFIS) during cataract surgery via ALPHA-1 receptor antagonism - same mechanism concern as tamsulosin, a classic cross-drug-class NBEO connection',
      'IFIS risk can persist even after risperidone is discontinued - patients must disclose ANY history of use before cataract surgery',
      'Preoperative history-taking for cataract surgery patients must screen for alpha-1 antagonist exposure, including psychiatric medications like risperidone, not just BPH medications like tamsulosin',
      'Blurred vision and mild mydriasis can occur; extrapyramidal ocular effects (e.g., oculogyric crisis) are less common than with typical antipsychotics but still reported',
    ],
    references: [
      { label: 'Intraoperative Floppy Iris Syndrome and alpha-1 antagonists', source: 'Chang & Campbell, Journal of Cataract & Refractive Surgery' },
      { label: 'Risperidone pharmacology and adverse effect profile', source: 'AHFS Drug Information' },
    ],
  },
]
