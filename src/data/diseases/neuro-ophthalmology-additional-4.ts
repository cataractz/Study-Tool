import type { Disease } from '../../types/disease'

export const neuroOphthalmologyAdditional4: Disease[] = [
  {
    id: 'dorsal-midbrain-syndrome',
    name: 'Dorsal Midbrain Syndrome',
    aliases: ['Parinaud Syndrome'],
    category: 'Neuro-Ophthalmology',
    definition:
      'A constellation of supranuclear eye movement and pupillary abnormalities resulting from a lesion of the dorsal midbrain (pretectal region), classically comprising upgaze palsy, convergence-retraction nystagmus, light-near pupillary dissociation, and eyelid retraction.',
    affectedStructure:
      'Dorsal midbrain / pretectal nucleus, including the posterior commissure, the rostral interstitial nucleus of the medial longitudinal fasciculus (riMLF), and the nucleus of the posterior commissure — structures mediating vertical gaze, vergence, and the pupillary light reflex pathway',
    pathologicalProcess:
      'A compressive, infiltrative, ischemic, demyelinating, or hydrocephalic process disrupts the pretectal supranuclear centers governing conjugate upgaze and pupillary light response, while sparing the near/accommodative pathway, which synapses more ventrally and is relatively resistant to dorsal compression.',
    epidemiology: {
      typicalAge:
        'Bimodal — children and young adults (pineal region germinoma/pinealoma, obstructive hydrocephalus, aqueductal stenosis) and older adults (stroke, hemorrhage)',
      sexDistribution: 'Pineal germinomas show a marked male predominance; vascular causes show no strong sex predilection',
      prevalence: 'Uncommon overall; the classic presentation of a pineal region mass in a child or young adult is a defining board scenario',
      importantPopulations:
        'Children and young adults with a pineal region tumor (germinoma, pineal cell tumor); older adults with midbrain stroke or hemorrhage; patients with obstructive hydrocephalus of any cause; multiple sclerosis with a demyelinating plaque in the dorsal midbrain',
    },
    riskFactors: [
      { label: 'Pineal region tumor (germinoma, pineocytoma/pineoblastoma, pineal cyst)', tier: 'major' },
      { label: 'Obstructive hydrocephalus (any etiology, causing aqueductal/third ventricle dilation and dorsal midbrain compression)', tier: 'major' },
      { label: 'Midbrain stroke or hemorrhage (top-of-the-basilar territory)', tier: 'major' },
      { label: 'Multiple sclerosis with a dorsal midbrain demyelinating plaque', tier: 'moderate' },
      { label: 'Arteriovenous malformation of the pineal/quadrigeminal region', tier: 'moderate' },
      { label: 'Head trauma with midbrain contusion', tier: 'associated' },
      { label: 'Metabolic/toxic encephalopathies (rare cause of a partial syndrome)', tier: 'associated' },
    ],
    pathophysiology: [
      'The pretectal region and posterior commissure integrate supranuclear signals for conjugate vertical gaze; a dorsal lesion disrupts upward saccades preferentially, producing upgaze palsy while downgaze and horizontal movements are typically preserved',
      'Attempted upward saccades instead co-contract the antagonistic vertically-acting extraocular muscles, producing simultaneous convergence movements and globe retraction into the orbit — convergence-retraction nystagmus, best elicited with downward-moving optokinetic targets',
      'The pupillary light reflex pathway synapses dorsally in the pretectal nucleus before crossing to the Edinger-Westphal nuclei; a dorsal lesion interrupts this light pathway',
      'The near/accommodative pupillary pathway takes a more ventral course and is relatively spared by dorsal compression, producing light-near dissociation — pupils that react poorly (or not at all) to light but constrict normally with the near/accommodative effort (differs mechanistically from the small, irregular pupils of neurosyphilis/Argyll Robertson, which reflects a different lesion location)',
      'Compression or stretching of the posterior commissure and levator subnucleus inputs produces bilateral eyelid retraction (Collier sign), giving a characteristic "staring" appearance',
      'Skew deviation may occur from disruption of vestibular otolithic projections passing through the midbrain, producing a vertical misalignment not fitting a single cranial nerve pattern',
    ],
    symptoms: {
      common: [
        'Difficulty looking upward / sensation that the eyes will not go up',
        'Blurred or double vision (from associated convergence spasm or skew deviation)',
        'Headache and other signs of raised intracranial pressure if hydrocephalus is present (nausea, vomiting)',
        'A "staring" or startled appearance noted by others (from lid retraction)',
      ],
      lessCommon: ['Oscillopsia from convergence-retraction nystagmus on attempted upgaze', 'Lightheadedness or ataxia if the causative lesion extends beyond the pretectum'],
      importantNegatives: [
        'Downgaze and horizontal eye movements are typically preserved',
        'Ptosis is not a feature (lid retraction is seen instead, the opposite of CN III palsy)',
        'No orbital signs (proptosis, chemosis) — the process is intracranial, not orbital',
      ],
      typicalProgression:
        'Onset and course reflect the underlying etiology: subacute and progressive with an enlarging pineal mass or hydrocephalus, abrupt with stroke/hemorrhage, and variable/relapsing with a demyelinating plaque.',
    },
    signs: [
      { area: 'Optic Nerve', finding: 'Optic disc may show papilledema if the lesion causes obstructive hydrocephalus and raised intracranial pressure; otherwise normal' },
      {
        area: 'Other',
        finding:
          'Supranuclear upgaze palsy (bilateral, symmetric limitation of voluntary and reflex upward eye movement); convergence-retraction nystagmus on attempted upgaze or with a downward-moving optokinetic drum, best seen as globe retraction with simultaneous convergent saccades',
      },
      {
        area: 'Other',
        finding:
          'Light-near dissociation — pupils mid-dilated to large, poorly or non-reactive to light, but constrict briskly with near/accommodative effort; bilateral eyelid retraction (Collier sign) giving a "setting sun"-like staring appearance; skew deviation may be present',
      },
    ],
    differentialDiagnosis: [
      {
        disease: 'Progressive supranuclear palsy (PSP)',
        whySimilar: 'Supranuclear vertical gaze palsy, initially affecting downgaze more than upgaze but eventually both',
        keyDistinguisher:
          'PSP is a chronic neurodegenerative disease of older adults with parkinsonism, axial rigidity, and falls, developing gradually over years; it lacks convergence-retraction nystagmus and lid retraction is less prominent, and neuroimaging shows midbrain atrophy ("hummingbird sign") rather than a discrete mass',
      },
      {
        disease: 'Argyll Robertson pupils (neurosyphilis)',
        whySimilar: 'Light-near dissociation of the pupils',
        keyDistinguisher:
          'Argyll Robertson pupils are small/miotic and irregular, bilateral, with no associated upgaze palsy or convergence-retraction nystagmus, and occur from a different lesion (dorsal midbrain but classically attributed to a periaqueductal lesion in tertiary syphilis) confirmed by positive treponemal serology',
      },
      {
        disease: 'Bilateral CN III palsy / thalamic-midbrain infarct',
        whySimilar: 'Vertical gaze and pupillary abnormalities from a midbrain lesion',
        keyDistinguisher:
          'CN III palsy produces ptosis (not lid retraction) and impaired adduction/depression in addition to elevation, with the pupil either fully involved or fully spared rather than showing light-near dissociation; the eye position and full pattern of motility loss differ from the isolated upgaze deficit of dorsal midbrain syndrome',
      },
    ],
    diagnosticTesting: [
      {
        name: 'MRI brain with and without contrast, dedicated pineal region protocol',
        whyOrdered: 'Identify a pineal region mass, hydrocephalus, or midbrain stroke/demyelinating lesion as the causative lesion',
        expectedFinding: 'Pineal region mass with variable enhancement (germinoma is classically homogeneously enhancing), enlarged ventricles from aqueductal compression, or a focal midbrain infarct/demyelinating plaque',
        contribution: 'Establishes the underlying etiology and is the essential next step for any patient with this clinical picture',
      },
      {
        name: 'Serum and CSF tumor markers (AFP, beta-hCG)',
        whyOrdered: 'Differentiate germinoma from other germ cell tumors of the pineal region when a mass is found',
        expectedFinding: 'Elevated beta-hCG suggests choriocarcinoma or mixed germ cell tumor; elevated AFP suggests yolk sac tumor; both typically normal or minimally elevated in pure germinoma',
        contribution: 'Guides oncologic management and helps determine whether biopsy versus empiric radiotherapy is appropriate',
      },
      {
        name: 'Lumbar puncture with CSF cytology (after imaging excludes a mass with obstructive risk)',
        whyOrdered: 'Assess for leptomeningeal spread of a pineal region tumor and confirm opening pressure if hydrocephalus is a concern',
        expectedFinding: 'Malignant cells may be present with disseminated germinoma; elevated opening pressure with hydrocephalus',
        contribution: 'Stages tumor spread and helps guide the extent of radiation/chemotherapy planning',
      },
      {
        name: 'Formal ocular motility and pupillary examination with optokinetic testing',
        whyOrdered: 'Confirm the specific pattern of supranuclear upgaze palsy, convergence-retraction nystagmus, and light-near dissociation',
        expectedFinding: 'Downward-moving optokinetic stimulus elicits convergence-retraction nystagmus on the compensatory upward fast phase',
        contribution: 'Clinically confirms the syndrome and helps distinguish it from other supranuclear gaze palsies',
      },
      {
        name: 'Neurosurgical/oncology biopsy of the pineal mass (when indicated)',
        whyOrdered: 'Obtain definitive tissue diagnosis when tumor markers are inconclusive',
        expectedFinding: 'Histopathologic diagnosis (germinoma, pineocytoma, pineoblastoma, or other pineal parenchymal tumor)',
        contribution: 'Confirms tumor type, which dictates treatment (germinomas are highly radiosensitive) and prognosis',
      },
    ],
    diagnosis: {
      criteria:
        'Clinical recognition of the tetrad of supranuclear upgaze palsy, convergence-retraction nystagmus on attempted upgaze, light-near pupillary dissociation, and eyelid retraction (Collier sign), with or without skew deviation',
      confirmation: 'Confirmed by MRI brain demonstrating a dorsal midbrain/pretectal lesion (pineal mass, hydrocephalus, stroke, or demyelinating plaque); the full tetrad need not be present, and partial forms are common.',
      classification: 'Classified by underlying etiology — neoplastic (pineal region tumor), obstructive/hydrocephalic, vascular (stroke/hemorrhage), or demyelinating (MS)',
    },
    management: [
      { category: 'Referral', detail: 'Urgent referral to neurosurgery and neuro-oncology for any patient with a pineal region mass; neurology referral if a demyelinating or vascular etiology is suspected' },
      { category: 'Advanced treatment', detail: 'Ventriculoperitoneal shunt or endoscopic third ventriculostomy for obstructive hydrocephalus; surgical biopsy/resection, radiotherapy (germinomas are highly radiosensitive), and/or chemotherapy per tumor type' },
      { category: 'Observation', detail: 'Small, asymptomatic pineal cysts without hydrocephalus or mass effect may be monitored with serial imaging' },
      { category: 'Emergency management', detail: 'Urgent neurosurgical evaluation for acute obstructive hydrocephalus with signs of raised intracranial pressure, which can rapidly progress to herniation if untreated' },
    ],
    followUp: {
      typical: 'Determined by underlying etiology and treatment; oncology/neurosurgery follow the tumor with serial MRI, while the eye findings are followed by neuro-ophthalmology in parallel',
      monitor: 'Vertical eye movements, pupillary light and near responses, lid position, visual fields, and disc appearance for papilledema',
      progression: 'Worsening upgaze palsy, new downgaze involvement, or evolving papilledema suggests tumor growth or worsening hydrocephalus and warrants repeat imaging',
      shortenWhen: 'New or worsening symptoms of raised intracranial pressure, or any new neurologic deficit',
    },
    prognosis: {
      typicalCourse: 'Highly dependent on etiology; germinomas carry an excellent prognosis with radiotherapy (cure rates high), while other pineal tumors and vascular causes carry more variable outcomes',
      progressionRisk: 'Untreated obstructive hydrocephalus or an enlarging mass can progress to herniation and death; treated hydrocephalus and radiosensitive tumors have good control rates',
      complications: 'Persistent upgaze deficit and convergence-retraction nystagmus may remain even after successful treatment of the underlying lesion; hydrocephalus recurrence; treatment-related morbidity (radiation, surgery)',
      visualPrognosis: 'The ocular motility and pupillary findings often partially or substantially improve with treatment of the underlying cause, but complete resolution is not guaranteed, especially with long-standing compression',
    },
    clinicalPearls: [
      'A pineal region germinoma in a young male presenting with an upgaze palsy is a classic, high-yield board vignette — always think dorsal midbrain syndrome when upgaze is selectively impaired.',
      'Light-near dissociation in dorsal midbrain syndrome reflects a lesion of the pretectal light reflex pathway with sparing of the more ventral near pathway — mechanistically distinct from Argyll Robertson pupils, which are small and irregular rather than large.',
      'Convergence-retraction nystagmus is best elicited by asking the patient to follow a downward-rotating optokinetic drum/tape, which forces repeated attempted upward saccades.',
      'Collier sign (bilateral lid retraction) gives a "staring" appearance and is the opposite finding of the ptosis seen in CN III palsy — a useful distinguishing point.',
      'Any hydrocephalus of unclear cause in a child or young adult warrants dedicated pineal region imaging, since aqueductal compression from a pineal mass is a common precipitant.',
    ],
    highYield: [
      'Classic tetrad: upgaze palsy, convergence-retraction nystagmus, light-near dissociation, eyelid retraction (Collier sign) — from a dorsal midbrain/pretectal lesion',
      'Classic cause: pineal region tumor (germinoma) in a young patient, especially young males; also stroke, hydrocephalus, and MS',
      'Light-near dissociation here differs from Argyll Robertson pupils (neurosyphilis) — this syndrome has large pupils plus upgaze palsy, while Argyll Robertson pupils are small/irregular without upgaze palsy',
      'MRI brain is the essential next step to identify the causative dorsal midbrain lesion',
      'Downgaze and horizontal movements are typically spared, distinguishing this from progressive supranuclear palsy and other supranuclear gaze disorders',
    ],
  },
  {
    id: 'leber-hereditary-optic-neuropathy',
    name: 'Leber Hereditary Optic Neuropathy',
    aliases: ['LHON'],
    category: 'Neuro-Ophthalmology',
    definition:
      'A maternally inherited mitochondrial disorder causing acute or subacute, painless, sequential bilateral central vision loss in young adults due to selective degeneration of retinal ganglion cells, most commonly from one of three primary mitochondrial DNA point mutations.',
    affectedStructure: 'Retinal ganglion cells (particularly the small-caliber papillomacular bundle fibers) and their axons forming the optic nerve',
    pathologicalProcess:
      'A point mutation in mitochondrial DNA impairs oxidative phosphorylation Complex I function, leading to increased oxidative stress and preferential apoptotic death of small-caliber retinal ganglion cell axons of the papillomacular bundle, which have high metabolic demand and limited mitochondrial reserve.',
    epidemiology: {
      typicalAge: 'Classic onset in the second to fourth decades (teens to 30s); can occur outside this range',
      sexDistribution: 'Strong male predominance (roughly 80-90% of affected/symptomatic individuals are male) despite maternal (mitochondrial) inheritance, reflecting incomplete penetrance modulated by additional genetic and environmental factors',
      prevalence: 'One of the more common inherited optic neuropathies; prevalence estimated around 1 in 30,000-50,000, with three point mutations (m.11778G>A, m.3460G>A, m.14484T>C) accounting for the large majority of cases',
      importantPopulations: 'Young adult males with a maternal family history of unexplained vision loss; penetrance is incomplete, so many mutation carriers (especially females) never become symptomatic',
    },
    riskFactors: [
      { label: 'Maternal family history of LHON or unexplained bilateral vision loss', tier: 'major' },
      { label: 'Male sex (markedly higher penetrance than females)', tier: 'major' },
      { label: 'Carrying one of the primary mtDNA mutations (m.11778G>A most common, m.14484T>C, m.3460G>A)', tier: 'major' },
      { label: 'Tobacco smoking (associated with increased risk of phenoconversion in carriers)', tier: 'moderate' },
      { label: 'Heavy alcohol use', tier: 'moderate' },
      { label: 'Certain mitochondrial toxins/medications in carriers (theoretical increased risk)', tier: 'associated' },
      { label: 'High mitochondrial DNA heteroplasmy level (when heteroplasmic rather than homoplasmic)', tier: 'associated' },
    ],
    pathophysiology: [
      'A point mutation in mitochondrial DNA (most commonly m.11778G>A in the ND4 subunit gene) impairs Complex I of the electron transport chain, reducing ATP production and increasing reactive oxygen species generation',
      'Retinal ganglion cells of the papillomacular bundle are small-caliber, unmyelinated until the lamina cribrosa, and have unusually high mitochondrial density and metabolic demand, making them selectively vulnerable to this energy deficit',
      'Mitochondrial dysfunction triggers apoptotic retinal ganglion cell death, beginning with the papillomacular bundle and producing a cecocentral scotoma',
      'Because mitochondrial DNA is maternally inherited, all children of an affected or carrier mother inherit the mutation, but incomplete penetrance (particularly lower in females) implicates additional nuclear genetic modifiers, mitochondrial heteroplasmy, and environmental triggers (smoking, alcohol) in determining who becomes symptomatic',
      'Early disc findings (telangiectatic vessels, pseudoedema) reflect microangiopathic changes and axoplasmic stasis at the disc without true vascular leakage, followed by progressive optic atrophy as ganglion cell axons are lost',
    ],
    symptoms: {
      common: [
        'Painless, subacute severe central vision loss in one eye',
        'Second eye typically follows within weeks to months (sequential rather than simultaneous bilateral involvement)',
        'Marked dyschromatopsia (poor color vision), often more severe than expected for the level of acuity loss',
      ],
      lessCommon: ['Rare cases with simultaneous bilateral onset', 'Associated neurologic findings in "LHON plus" phenotypes (e.g., a multiple sclerosis-like illness, cardiac pre-excitation/Wolff-Parkinson-White syndrome)'],
      importantNegatives: ['No ocular pain or pain with eye movement (distinguishes from optic neuritis)', 'No history of trauma or exposure to a known toxin (distinguishes from toxic/traumatic optic neuropathy)'],
      typicalProgression:
        'Acute/subacute severe vision loss in one eye, with the fellow eye typically becoming involved within 2-3 months (occasionally up to a year); vision loss generally stabilizes at a poor level (often 20/200 or worse) with little spontaneous recovery, though the m.14484 mutation has a somewhat better prognosis for partial recovery.',
    },
    signs: [
      {
        area: 'Optic Nerve',
        finding:
          'Acute stage: circumpapillary telangiectatic microangiopathy (dilated, tortuous peripapillary vessels), disc hyperemia and pseudoedema (swollen appearance without true leakage on fluorescein angiography — a key distinguishing feature from true papilledema/disc edema), and swelling of the peripapillary retinal nerve fiber layer',
      },
      { area: 'Optic Nerve', finding: 'Chronic stage: progressive optic atrophy, most pronounced temporally (papillomacular bundle) with a pale, often diffusely atrophic disc' },
      { area: 'Other', finding: 'RAPD often absent or mild/subtle even with significant vision loss because the process is typically bilateral and roughly symmetric by the time both eyes are affected; central or cecocentral scotoma on visual field testing; color vision markedly reduced' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Dominant optic atrophy (Kjer type)',
        whySimilar: 'Inherited, bilateral, progressive optic neuropathy with central vision loss and temporal disc pallor in a young patient',
        keyDistinguisher:
          'Autosomal dominant (not maternal) inheritance via OPA1 mutation, insidious slowly progressive onset in childhood rather than acute/subacute onset in young adulthood, and typically milder vision loss (often 20/40-20/200) without the acute telangiectatic disc changes of LHON',
      },
      {
        disease: 'Toxic/nutritional optic neuropathy',
        whySimilar: 'Bilateral, painless, progressive central/cecocentral vision loss with dyschromatopsia',
        keyDistinguisher: 'History of an offending toxin (ethambutol, methanol, alcohol/tobacco) or nutritional deficiency (B12, folate); no maternal family history or genetic mutation, and vision may improve substantially if the cause is identified and corrected — unlike the typically poor recovery in LHON',
      },
      {
        disease: 'Bilateral optic neuritis',
        whySimilar: 'Subacute vision loss with dyschromatopsia in a young patient',
        keyDistinguisher: 'Optic neuritis is typically painful with eye movement, often unilateral or asymmetric, shows optic nerve enhancement on MRI, and has a much higher likelihood of significant spontaneous visual recovery than LHON',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Mitochondrial DNA genetic testing (blood)',
        whyOrdered: 'Confirm the diagnosis by identifying one of the primary LHON point mutations',
        expectedFinding: 'Positive for m.11778G>A (most common, ~50-70% of cases), m.14484T>C, or m.3460G>A; occasionally a rarer pathogenic mtDNA variant',
        contribution: 'Establishes a definitive molecular diagnosis, informs prognosis (mutation-specific likelihood of spontaneous recovery), and is essential for genetic counseling of maternal relatives',
      },
      {
        name: 'MRI brain and orbits with contrast',
        whyOrdered: 'Exclude a compressive, infiltrative, or demyelinating lesion mimicking LHON, especially with atypical or unilateral presentation',
        expectedFinding: 'Normal optic nerves without enhancement or mass; may show nonspecific changes in some "LHON plus" phenotypes',
        contribution: 'Rules out alternative structural or demyelinating causes before attributing vision loss to LHON',
      },
      {
        name: 'Formal automated visual field testing',
        whyOrdered: 'Characterize the pattern and severity of the scotoma',
        expectedFinding: 'Dense central or cecocentral scotoma, often large and involving fixation',
        contribution: 'Documents the field defect for baseline and monitoring, and its shape/location supports the papillomacular bundle-predominant pathology',
      },
      {
        name: 'OCT retinal nerve fiber layer',
        whyOrdered: 'Assess disc/RNFL status and stage of disease',
        expectedFinding: 'Acute stage shows thickening (pseudoedema, particularly temporal and inferior); chronic stage shows RNFL thinning, especially temporally',
        contribution: 'Helps stage disease and can identify presymptomatic thickening changes in at-risk mutation carriers',
      },
      {
        name: 'Fluorescein angiography',
        whyOrdered: 'Distinguish true disc edema/papilledema from LHON pseudoedema',
        expectedFinding: 'Absence of leakage from the disc despite its swollen clinical appearance',
        contribution: 'A key confirmatory finding supporting LHON over inflammatory or compressive causes of true disc swelling',
      },
      {
        name: 'Family/pedigree history and screening of maternal relatives',
        whyOrdered: 'Establish the maternal inheritance pattern and identify at-risk relatives',
        expectedFinding: 'Maternal relatives may carry the mutation with variable/absent expression (incomplete penetrance)',
        contribution: 'Supports the diagnosis and guides genetic counseling and surveillance recommendations for at-risk family members',
      },
    ],
    diagnosis: {
      criteria: 'Subacute, painless, sequential bilateral central vision loss in a young patient (classically male) with a maternal family history and characteristic acute disc findings (peripapillary telangiectasia, pseudoedema without leakage)',
      confirmation: 'Confirmed by identification of a primary pathogenic mitochondrial DNA point mutation on genetic testing, after neuroimaging has excluded a structural or compressive alternative diagnosis.',
      classification: 'Classified by causative mutation (m.11778G>A, m.14484T>C, m.3460G>A, or rarer variants), which correlates with differing likelihoods of spontaneous partial visual recovery',
    },
    management: [
      { category: 'Observation', detail: 'Regular monitoring of visual function and disc/OCT status is central to management, as most cases have no treatment that reliably reverses vision loss' },
      { category: 'First-line treatment', detail: 'Idebenone (a synthetic coenzyme Q10 analog/antioxidant) has clinical trial evidence supporting modest benefit in visual recovery/stabilization in some patients, particularly when started early in the disease course; availability and formal approval vary by region' },
      { category: 'Referral', detail: 'Genetic counseling referral for the patient and at-risk maternal relatives; neuro-ophthalmology referral for diagnosis confirmation and ongoing management; low vision rehabilitation referral for patients with significant bilateral central vision loss' },
      { category: 'Advanced treatment', detail: 'Gene therapy approaches targeting specific mtDNA mutations have been studied in clinical trials with variable results; not yet standard of care and access is limited' },
    ],
    followUp: {
      typical: 'Regular follow-up (every few months during the active phase of vision loss, then annually once stable) to monitor visual function, OCT, and for fellow-eye involvement if not yet bilateral',
      monitor: 'Visual acuity, color vision, visual fields, OCT RNFL, and development of any systemic ("LHON plus") features',
      progression: 'Fellow eye involvement should be anticipated within weeks to months of first-eye onset; continued decline beyond the expected window, or atypical unilateral-only involvement, should prompt reconsideration of the diagnosis',
      shortenWhen: 'Rapid progression, atypical unilateral-only presentation beyond the expected window for fellow-eye involvement, or emerging systemic neurologic symptoms',
    },
    prognosis: {
      typicalCourse:
        'Vision typically declines to a nadir over weeks to a few months in each eye, then stabilizes at a poor level; spontaneous partial recovery is uncommon overall but occurs more often with the m.14484T>C mutation than with m.11778G>A',
      progressionRisk: 'Fellow eye involvement occurs in the large majority of cases, usually within weeks to a year of first-eye onset; risk of symptomatic conversion in mutation carriers is influenced by sex, smoking, and alcohol use',
      complications: 'Severe, often legally-defining, bilateral central vision loss with resultant disability; peripheral vision is typically preserved, allowing continued mobility',
      visualPrognosis: 'Generally poor for return to normal acuity; most patients stabilize in the legally blind range (20/200 or worse), though a minority (more often with certain mutations) experience meaningful partial recovery',
    },
    clinicalPearls: [
      'Suspect LHON in a young man with painless, severe, sequential (not simultaneous) bilateral central vision loss and a maternal family history — the classic board vignette.',
      'The acute disc appearance (telangiectatic peripapillary vessels, pseudoedema) can mimic papilledema, but fluorescein angiography shows no leakage, a key distinguishing point from true disc edema.',
      'Despite maternal (mitochondrial) inheritance, LHON shows markedly incomplete penetrance and strong male predominance, so a family history may be subtle or denied.',
      'Advise carriers and affected patients to avoid smoking and heavy alcohol use, both of which are associated with a higher risk of phenoconversion to symptomatic disease.',
      'Genetic counseling is essential: all children of an affected or carrier mother inherit the mutation, but whether they become symptomatic is unpredictable.',
    ],
    highYield: [
      'Classic patient: young adult male, painless severe central vision loss in one eye, followed by the fellow eye weeks to months later',
      'Disc findings: circumpapillary telangiectatic microangiopathy and pseudoedema WITHOUT leakage on fluorescein angiography — distinguishes from true papilledema',
      'Maternal (mitochondrial) inheritance with incomplete penetrance and strong male predominance in symptomatic individuals',
      'Three primary mtDNA point mutations account for most cases: m.11778G>A (most common), m.14484T>C (best prognosis for recovery), m.3460G>A',
      'No proven curative treatment; idebenone has some evidence for benefit; genetic counseling of maternal relatives is a key management step',
    ],
  },
  {
    id: 'toxic-nutritional-optic-neuropathy',
    name: 'Toxic and Nutritional Optic Neuropathy',
    category: 'Neuro-Ophthalmology',
    definition:
      'A bilateral, symmetric, progressive, painless optic neuropathy resulting from direct toxic injury to or nutritional deficiency affecting the metabolically vulnerable papillomacular bundle fibers, producing central or cecocentral vision loss that is often reversible if the offending agent is removed or the deficiency corrected early.',
    affectedStructure: 'Papillomacular bundle fibers of the retinal ganglion cell/optic nerve, which are small-caliber and highly metabolically active, making them selectively vulnerable to mitochondrial toxicity or energy substrate deficiency',
    pathologicalProcess:
      'Direct mitochondrial toxicity (from a drug or toxin) or impaired mitochondrial/metabolic function (from deficiency of a cofactor vitamin) disrupts oxidative energy metabolism in retinal ganglion cell axons, causing selective dysfunction and eventual loss of the papillomacular bundle.',
    epidemiology: {
      typicalAge: 'Any age, depending on cause — ethambutol and amiodarone toxicity typically in adults treated for tuberculosis or arrhythmia; nutritional causes more common in the elderly, malnourished, post-bariatric surgery, or those with chronic alcohol use disorder',
      importantPopulations:
        'Patients on ethambutol or amiodarone therapy; chronic heavy alcohol users with poor nutrition ("tobacco-alcohol amblyopia," now recognized as primarily nutritional); patients with malabsorption, bariatric surgery, or restrictive diets (B12/folate/thiamine deficiency); methanol ingestion (accidental or intentional) is a distinct medical emergency',
    },
    riskFactors: [
      { label: 'Ethambutol therapy (dose- and duration-dependent, worse with renal impairment)', tier: 'major' },
      { label: 'Chronic heavy alcohol use with poor nutritional intake', tier: 'major' },
      { label: 'Methanol ingestion', tier: 'major' },
      { label: 'Amiodarone therapy', tier: 'moderate' },
      { label: 'Vitamin B12 deficiency (pernicious anemia, strict vegan diet, malabsorption)', tier: 'moderate' },
      { label: 'Folate deficiency', tier: 'moderate' },
      { label: 'Thiamine deficiency (malnutrition, bariatric surgery, hyperemesis)', tier: 'moderate' },
      { label: 'Heavy tobacco use (contributory in combination with alcohol/nutritional deficiency)', tier: 'associated' },
      { label: 'Other toxins: lead, methanol-contaminated alcohol, certain chemotherapeutic and antibiotic agents', tier: 'associated' },
    ],
    pathophysiology: [
      'Ethambutol chelates metal ions (zinc, copper) important for mitochondrial enzyme function and is directly toxic to retinal ganglion cell mitochondria, producing dose- and duration-dependent papillomacular bundle dysfunction',
      'Methanol is metabolized by alcohol dehydrogenase to formaldehyde and then formic acid, which is directly toxic to retinal ganglion cells and mitochondrial cytochrome oxidase, causing rapid, severe, often permanent bilateral optic nerve injury alongside systemic metabolic acidosis',
      'Chronic alcohol use is frequently accompanied by poor dietary intake of B-vitamins, so most "alcohol-related" optic neuropathy is now understood to be substantially nutritional (thiamine, B12, folate) rather than a direct toxic alcohol effect',
      'Vitamin B12 is a required cofactor for methylation reactions essential to myelin and mitochondrial function; deficiency impairs energy metabolism in the metabolically demanding papillomacular bundle, mirroring the pathophysiology of subacute combined degeneration of the spinal cord',
      'Folate deficiency impairs the same one-carbon metabolism pathways as B12 deficiency and can independently or synergistically cause optic neuropathy',
      'Thiamine deficiency impairs mitochondrial pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase activity, reducing ATP production in metabolically active neurons and contributing to optic neuropathy as well as the broader Wernicke-Korsakoff syndrome',
      'In all these mechanisms, the small, unmyelinated, metabolically demanding papillomacular bundle axons are preferentially affected first, producing the characteristic cecocentral scotoma before more peripheral fibers are involved',
    ],
    symptoms: {
      common: [
        'Bilateral, symmetric, painless, gradually progressive blurring of central vision',
        'Difficulty with fine detail work and reading',
        'Reduced color vision/color desaturation',
      ],
      lessCommon: [
        'Peripheral neuropathy or other systemic signs of the underlying nutritional deficiency (e.g., glossitis, paresthesias with B12 deficiency)',
        'Acute severe vision loss with systemic symptoms (nausea, abdominal pain, altered mental status) in methanol toxicity',
      ],
      importantNegatives: ['No pain with eye movement (distinguishes from optic neuritis)', 'No RAPD if truly symmetric bilateral involvement (asymmetry may produce a subtle RAPD)', 'Vision loss is not sudden/unilateral (distinguishes from typical ischemic or compressive causes)'],
      typicalProgression:
        'Insidious, symmetric, slowly progressive central vision loss over weeks to months for most toxic/nutritional causes; methanol toxicity is a distinct exception with acute, rapid, severe bilateral vision loss occurring within a day of ingestion.',
    },
    signs: [
      { area: 'Optic Nerve', finding: 'Optic discs often appear normal early in the course despite symptomatic vision loss; temporal disc pallor develops with chronicity, reflecting preferential papillomacular bundle loss; methanol toxicity classically produces acute disc hyperemia/edema evolving to severe pallor' },
      { area: 'Other', finding: 'Bilateral, symmetric cecocentral scotoma on visual field testing (a scotoma connecting the physiologic blind spot to fixation); reduced color vision (particularly red-green) out of proportion to acuity loss in early stages' },
      { area: 'Other', finding: 'Pupils typically show minimal or no RAPD given symmetric involvement; systemic findings of the underlying cause may be present (peripheral neuropathy, glossitis, ataxia/confusion in thiamine deficiency, metabolic acidosis in methanol toxicity)' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Leber hereditary optic neuropathy',
        whySimilar: 'Bilateral, painless, progressive central vision loss with cecocentral scotoma and eventual optic atrophy',
        keyDistinguisher: 'LHON has a maternal family history and positive mitochondrial DNA testing, classically presents with sequential (not simultaneous) involvement in a young male, and shows acute telangiectatic disc changes rather than a clear toxic/nutritional exposure history',
      },
      {
        disease: 'Dominant optic atrophy (Kjer type)',
        whySimilar: 'Bilateral, symmetric, slowly progressive central vision loss with temporal disc pallor',
        keyDistinguisher: 'Autosomal dominant inheritance (OPA1 mutation) with childhood onset and a positive family history, and no identifiable toxic exposure or nutritional deficiency on workup',
      },
      {
        disease: 'Bilateral compressive optic neuropathy (e.g., large chiasmal/parasellar mass)',
        whySimilar: 'Bilateral, progressive, painless central vision loss',
        keyDistinguisher: 'Compressive lesions often produce asymmetric involvement, bitemporal or other field patterns reflecting the specific site of compression, and a mass is identified on neuroimaging; no toxic exposure or deficiency state is found',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Detailed medication, dietary, alcohol, and toxin exposure history',
        whyOrdered: 'Identify a causative agent (ethambutol, amiodarone) or deficiency risk (poor diet, alcohol use disorder, bariatric surgery, methanol exposure)',
        expectedFinding: 'History of a known toxic medication, restrictive diet, malabsorption, or methanol/adulterated alcohol ingestion',
        contribution: 'Often the single most important diagnostic step, as removing the offending exposure or correcting the deficiency is central to both diagnosis and treatment',
      },
      {
        name: 'Serum vitamin B12, methylmalonic acid, homocysteine, and folate levels',
        whyOrdered: 'Evaluate for B12 and folate deficiency as a cause',
        expectedFinding: 'Low B12 with elevated methylmalonic acid and homocysteine confirms true B12 deficiency (levels can be falsely normal early); low folate with elevated homocysteine (normal MMA) supports folate deficiency',
        contribution: 'Confirms a treatable nutritional cause and guides replacement therapy',
      },
      {
        name: 'Thiamine level / clinical response to empiric thiamine',
        whyOrdered: 'Evaluate for thiamine deficiency, particularly in malnourished or alcohol-use-disorder patients',
        expectedFinding: 'Low serum/whole blood thiamine; may also have other features of Wernicke encephalopathy (ataxia, confusion, ophthalmoplegia)',
        contribution: 'Confirms deficiency; thiamine should often be given empirically before or with glucose administration in at-risk patients due to the risk of precipitating Wernicke encephalopathy',
      },
      {
        name: 'Serum methanol level and arterial blood gas with anion/osmolar gap',
        whyOrdered: 'Confirm methanol toxicity in a patient with acute severe bilateral vision loss and a compatible exposure history',
        expectedFinding: 'Elevated serum methanol, high anion-gap metabolic acidosis, elevated osmolar gap',
        contribution: 'Confirms a life- and vision-threatening diagnosis requiring emergent treatment (fomepizole or ethanol, hemodialysis) rather than routine outpatient workup',
      },
      {
        name: 'MRI brain and orbits',
        whyOrdered: 'Exclude a compressive or demyelinating cause when the presentation is atypical or exposure history is unclear',
        expectedFinding: 'Normal optic nerves without enhancement or mass in true toxic/nutritional optic neuropathy',
        contribution: 'Supports the diagnosis by excluding structural alternatives, particularly important when no clear toxin/deficiency is identified',
      },
      {
        name: 'Automated visual field testing',
        whyOrdered: 'Characterize the pattern and severity of visual loss',
        expectedFinding: 'Bilateral, symmetric cecocentral scotoma',
        contribution: 'Supports the diagnosis and provides a baseline to monitor response to treatment/removal of the offending agent',
      },
    ],
    diagnosis: {
      criteria: 'Bilateral, symmetric, painless, progressive central/cecocentral vision loss in a patient with an identifiable toxic exposure or nutritional deficiency risk factor, with a normal-appearing optic nerve early in the course',
      confirmation: 'Confirmed by the combination of characteristic clinical findings, relevant laboratory evidence of a deficiency state or documented toxic exposure, and exclusion of a structural/compressive or hereditary cause by neuroimaging and directed testing.',
      classification: 'Classified by etiology as toxic (medication- or substance-induced) versus nutritional (vitamin deficiency), which are frequently overlapping and co-occurring (e.g., alcohol use disorder contributing to both toxic and nutritional mechanisms)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Immediate discontinuation or dose reduction of the offending medication (ethambutol, amiodarone) in coordination with the prescribing physician; complete cessation of alcohol/tobacco use when implicated' },
      { category: 'First-line treatment', detail: 'Replacement of the deficient nutrient — vitamin B12 (often initially parenteral, especially with malabsorption/pernicious anemia), folate, and/or thiamine supplementation, with thiamine given before or with glucose in at-risk patients to avoid precipitating Wernicke encephalopathy' },
      { category: 'Referral', detail: 'Refer to internal medicine/primary care for nutritional and systemic workup, addiction medicine for alcohol use disorder, and the prescribing specialist for medication risk-benefit reassessment' },
      { category: 'Emergency management', detail: 'Suspected methanol toxicity requires emergent treatment: fomepizole (or ethanol if fomepizole unavailable) to block alcohol dehydrogenase, correction of acidosis, and hemodialysis to remove methanol and its toxic metabolites — delay significantly worsens visual and systemic outcomes' },
      { category: 'Observation', detail: 'Serial monitoring of visual function after removing the offending agent or correcting the deficiency, as recovery can be gradual over weeks to months' },
    ],
    followUp: {
      typical: 'Follow-up every 4-6 weeks initially after removing the offending agent or starting replacement therapy to document visual improvement, then less frequently once stable',
      monitor: 'Visual acuity, color vision, visual fields (cecocentral scotoma size/depth), and (for ethambutol) periodic screening in patients continuing the medication for other conditions',
      progression: 'Continued decline despite removal of the suspected agent or correction of the deficiency should prompt reconsideration of the diagnosis and further workup for an alternative or additional cause',
      shortenWhen: 'Rapid or severe vision loss, suspected methanol exposure, or continued progression despite intervention',
    },
    prognosis: {
      typicalCourse: 'Vision loss is typically bilateral and symmetric with a gradual course; the earlier the offending agent is removed or the deficiency corrected, the more complete the visual recovery',
      progressionRisk: 'Continued exposure to the toxin or ongoing untreated deficiency leads to progressive papillomacular bundle loss and eventual optic atrophy with permanent visual field loss',
      complications: 'Permanent central visual field loss and optic atrophy if diagnosis and intervention are delayed; methanol toxicity can cause irreversible blindness and death if untreated',
      visualPrognosis: 'Favorable with early recognition and removal/correction of the cause, with substantial or complete recovery possible in many nutritional cases and some toxic cases; prognosis worsens the longer the exposure/deficiency persists, and methanol-related vision loss is often severe and permanent',
    },
    clinicalPearls: [
      'Always ask about ethambutol use, alcohol/tobacco history, diet (vegan/restrictive, bariatric surgery), and any recent exposure to potentially adulterated alcohol in a patient with bilateral, painless, progressive central vision loss.',
      'The cecocentral scotoma (connecting the blind spot to fixation) is the classic visual field signature of toxic/nutritional optic neuropathy and reflects selective papillomacular bundle involvement.',
      'Methanol toxicity is a true ophthalmic and medical emergency — suspect it in any patient with acute severe bilateral vision loss plus metabolic acidosis, and treat emergently with fomepizole/ethanol and hemodialysis without waiting for confirmatory levels if suspicion is high.',
      'Give thiamine before or with glucose administration in malnourished or alcohol-use-disorder patients to avoid precipitating Wernicke encephalopathy.',
      'Vision loss from most toxic and nutritional causes can be substantially or fully reversible if the offending agent is stopped or the deficiency corrected early — this is a key distinguishing prognostic point from hereditary optic neuropathies like LHON.',
    ],
    highYield: [
      'Bilateral, symmetric, painless, progressive central vision loss with cecocentral scotoma is the classic presentation',
      'Ethambutol, amiodarone, and methanol are classic toxic causes; B12, folate, and thiamine deficiency are classic nutritional causes',
      'Methanol toxicity is a medical emergency requiring fomepizole/ethanol and hemodialysis — presents with acute severe bilateral vision loss and metabolic acidosis',
      'Chronic "alcohol-tobacco amblyopia" is now understood to be predominantly a nutritional deficiency state rather than a direct toxic alcohol effect',
      'Vision loss is often reversible if the offending agent is stopped or the deficiency is corrected early — unlike LHON or other hereditary optic neuropathies',
      'Optic discs are frequently normal-appearing early, with temporal pallor developing only with chronicity',
    ],
  },
  {
    id: 'traumatic-optic-neuropathy',
    name: 'Traumatic Optic Neuropathy',
    category: 'Neuro-Ophthalmology',
    definition:
      'Injury to the optic nerve resulting from blunt or penetrating trauma, most commonly indirect injury from shearing/contusive forces transmitted to the intracanalicular optic nerve without direct nerve transection, producing acute vision loss with a normal-appearing fundus in the acute phase.',
    affectedStructure: 'Optic nerve, most often the intracanalicular segment (within the bony optic canal) in indirect injury; any segment (orbital, canalicular, intracranial) may be directly injured by a penetrating or bony fragment in direct injury',
    pathologicalProcess:
      'Blunt force transmitted to the skull/orbit (indirect injury) causes shearing, contusion, and microvascular injury to optic nerve axons at the relatively fixed, tethered intracanalicular segment, or direct injury (penetrating trauma, bone fragment, hematoma) mechanically disrupts or compresses the nerve, followed by secondary injury from edema, ischemia, and free radical-mediated axonal damage within the noncompliant optic canal.',
    epidemiology: {
      typicalAge: 'Any age, but most common in young to middle-aged adults, reflecting the demographics of head trauma (motor vehicle collisions, assaults, falls, sports injuries)',
      sexDistribution: 'Male predominance, reflecting overall higher rates of trauma exposure in males',
      prevalence: 'Occurs in a small percentage of patients with closed head injury overall, but is a significant cause of severe vision loss after craniofacial trauma; indirect injury is substantially more common than direct injury',
      importantPopulations: 'Patients with closed head trauma, particularly frontal or frontotemporal impact, and those with orbital roof/facial (especially orbital apex or sphenoid) fractures; often a component of polytrauma with associated intracranial injury requiring multidisciplinary care',
    },
    riskFactors: [
      { label: 'Blunt head/facial trauma with frontal or frontotemporal impact (motor vehicle collision, assault, fall, bicycle/sports injury)', tier: 'major' },
      { label: 'Orbital roof, orbital apex, or sphenoid bone fracture', tier: 'major' },
      { label: 'Penetrating orbital or craniofacial injury', tier: 'major' },
      { label: 'Loss of consciousness at time of injury (marker of injury severity)', tier: 'moderate' },
      { label: 'Concurrent facial fractures (Le Fort, zygomaticomaxillary complex)', tier: 'moderate' },
      { label: 'Orbital hemorrhage or retrobulbar hematoma compressing the nerve', tier: 'associated' },
      { label: 'Iatrogenic injury (rare complication of orbital, sinus, or neurosurgical procedures)', tier: 'associated' },
    ],
    pathophysiology: [
      'Indirect traumatic optic neuropathy: blunt force to the frontal bone or orbital rim is transmitted through the skull to the optic canal; because the intracanalicular optic nerve is tightly tethered within the bony canal by the dural sheath, shearing and contusive forces concentrate at this segment even without a fracture being visible',
      'Primary mechanical injury (axonal shearing, direct contusion) causes immediate axonal damage at the moment of impact',
      'Secondary injury follows over the subsequent hours to days: vascular injury and edema within the noncompliant bony canal raise local pressure, compromising the pial vascular supply to the nerve and worsening ischemia in a vicious cycle analogous to compartment syndrome',
      'Free radical generation, excitotoxicity, and inflammatory cascades further contribute to secondary axonal loss beyond the zone of initial mechanical injury',
      'Direct traumatic optic neuropathy results from penetrating injury, a displaced bony fragment, or a foreign body directly lacerating, transecting, or compressing the nerve, typically producing more severe and immediate, often complete, vision loss',
      'Because the injury is retrobulbar (whether direct or indirect), the optic disc appears normal on initial fundus examination; disc pallor only becomes visible after axonal degeneration has had time to manifest at the nerve head, typically over 3-6 weeks',
    ],
    symptoms: {
      common: ['Decreased vision, ranging from mild to no light perception, noted immediately or shortly after head/facial trauma', 'History of blunt or penetrating head, orbital, or facial trauma', 'Periorbital pain, swelling, and ecchymosis from associated soft tissue/orbital injury'],
      lessCommon: ['Diplopia from associated orbital fracture with muscle entrapment or cranial nerve injury', 'Anosmia (if there is associated cribriform plate/frontal skull base injury)'],
      importantNegatives: ['Fundus typically appears normal at initial presentation despite significant vision loss, since the injury is retrobulbar', 'No prior history of eye disease explaining the vision loss'],
      typicalProgression:
        'Vision loss is present at or very shortly after the time of injury (may be difficult to assess acutely if the patient has altered consciousness); if any recovery occurs it typically begins within the first days to two weeks, while optic disc pallor develops gradually over the following 3-6 weeks as Wallerian degeneration progresses.',
    },
    signs: [
      { area: 'Optic Nerve', finding: 'Acutely: optic disc typically appears normal (retrobulbar injury) despite marked vision loss; over the subsequent 3-6 weeks, progressive disc pallor/atrophy develops as the degenerated axons reach the nerve head' },
      { area: 'Other', finding: 'Relative afferent pupillary defect (RAPD) in the affected eye — a critical and often the most reliable objective sign in the acute setting, especially when visual acuity cannot be reliably tested due to altered mental status or associated ocular injury' },
      { area: 'Other', finding: 'Decreased color vision and visual field defect (variable pattern, may be central, altitudinal, or generalized depression); associated periorbital ecchymosis, orbital emphysema, or motility restriction from concurrent orbital fracture may be present' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Traumatic globe injury (ruptured globe, retinal detachment, vitreous hemorrhage)',
        whySimilar: 'Vision loss following trauma',
        keyDistinguisher: 'Direct examination reveals an obvious anterior or posterior segment injury (globe rupture, hyphema, retinal detachment, vitreous hemorrhage) explaining the vision loss, rather than a normal-appearing eye with only an RAPD as in isolated traumatic optic neuropathy',
      },
      {
        disease: 'Orbital compartment syndrome (retrobulbar hemorrhage)',
        whySimilar: 'Vision loss and RAPD after orbital trauma',
        keyDistinguisher: 'Presents with tense proptosis, markedly elevated intraocular pressure, resistance to retropulsion, and a taut orbit — an ophthalmic emergency requiring immediate lateral canthotomy/cantholysis to prevent optic nerve infarction, distinct from the isolated nerve injury of traumatic optic neuropathy without significant orbital pressure elevation',
      },
      {
        disease: 'Cortical blindness / traumatic brain injury with visual pathway involvement posterior to the chiasm',
        whySimilar: 'Vision loss following head trauma',
        keyDistinguisher: 'No RAPD is present with bilateral cortical/postchiasmal injury (pupils are spared since the reflex arc is intact), and neuroimaging shows occipital or other posterior visual pathway injury rather than optic nerve/canal abnormality',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Thin-section CT of the orbits and optic canals (without contrast)',
        whyOrdered: 'Assess for optic canal fracture, bony impingement, or a compressive hematoma along the nerve, and evaluate associated orbital/facial fractures',
        expectedFinding: 'Optic canal fracture (present in a subset of cases), orbital or facial fractures, or retrobulbar/subperiosteal hematoma; the optic nerve itself may appear unremarkable even with significant functional injury since most damage is indirect/microscopic',
        contribution: 'Essential first-line imaging in acute trauma; identifies a surgically addressable compressive lesion (bone fragment, hematoma) and characterizes fracture pattern for surgical planning',
      },
      {
        name: 'Pupillary examination for RAPD (serial)',
        whyOrdered: 'Objectively assess optic nerve function, particularly important when visual acuity cannot be reliably assessed due to altered consciousness or ocular media opacity',
        expectedFinding: 'Present and often graded (using neutral density filters) in unilateral or asymmetric bilateral traumatic optic neuropathy',
        contribution: 'One of the most reliable and reproducible acute findings; serial grading helps track improvement or worsening over time',
      },
      {
        name: 'MRI orbits/brain with fat suppression (when stable and not contraindicated)',
        whyOrdered: 'Better characterize soft tissue nerve injury, hemorrhage within the nerve sheath, and associated intracranial injury when CT is inconclusive',
        expectedFinding: 'T2 hyperintensity or hemorrhage within the nerve; associated traumatic brain injury findings',
        contribution: 'Complements CT, particularly for soft tissue and nerve detail, though CT remains preferred acutely for bony canal assessment and is faster/more available in the trauma setting',
      },
      {
        name: 'Formal visual field testing (once patient is able to cooperate)',
        whyOrdered: 'Characterize the extent and pattern of the field defect and provide a baseline',
        expectedFinding: 'Variable defect pattern from mild generalized depression to severe/complete field loss',
        contribution: 'Documents baseline severity and is used to monitor for any improvement or progression',
      },
      {
        name: 'Comprehensive ocular examination (intraocular pressure, dilated fundus exam, assessment for globe rupture)',
        whyOrdered: 'Exclude concurrent globe injury, orbital compartment syndrome, or other ocular trauma that could independently explain vision loss or require its own emergent treatment',
        expectedFinding: 'Normal globe and fundus in isolated traumatic optic neuropathy; may reveal concurrent hyphema, vitreous hemorrhage, or elevated IOP with orbital hemorrhage',
        contribution: 'Ensures other vision- or globe-threatening injuries are not missed and appropriately triaged before attributing vision loss solely to the optic nerve',
      },
    ],
    diagnosis: {
      criteria: 'Decreased vision and RAPD following head, orbital, or facial trauma, with a normal-appearing fundus acutely and no other ocular explanation for the vision loss on comprehensive examination',
      confirmation: 'Confirmed clinically by the combination of trauma history, RAPD, and exclusion of alternative causes (globe injury, orbital compartment syndrome) on exam, supported by CT demonstrating orbital/optic canal fracture pattern or hematoma when present (imaging can be normal in many cases of indirect injury).',
      classification: 'Classified as indirect (more common, no direct nerve disruption, injury transmitted via shearing/contusion at the optic canal) versus direct (penetrating injury, bone fragment, or hematoma directly compressing/lacerating the nerve)',
    },
    management: [
      {
        category: 'Emergency management',
        detail:
          'Immediate comprehensive ocular and neurologic evaluation to exclude globe rupture, orbital compartment syndrome (which requires emergent lateral canthotomy/cantholysis), and other life- or vision-threatening polytrauma injuries, which take priority; assess and document RAPD and visual function as early as possible',
      },
      {
        category: 'Observation',
        detail: 'For many cases, especially with some preserved vision and no compressive lesion on imaging, careful observation is reasonable, as the benefit of medical or surgical intervention over observation alone has not been convincingly demonstrated',
      },
      {
        category: 'Referral',
        detail: 'Urgent multidisciplinary referral to neuro-ophthalmology, oculoplastics/orbital surgery, and neurosurgery, particularly when facial/orbital fractures, an optic canal fracture, or a compressive hematoma is identified, and to trauma/neurosurgery teams for management of associated closed head injury',
      },
      {
        category: 'Second-line treatment',
        detail:
          'High-dose corticosteroids were historically used based on presumed benefit from reducing secondary edema/inflammation, but this approach has largely fallen out of favor: extrapolation from the CRASH (Corticosteroid Randomisation After Significant Head injury) trial data in traumatic brain injury raised concern that high-dose steroids may increase mortality without a clear visual benefit, and the International Optic Nerve Trauma Study did not show benefit over observation; steroids are no longer considered standard of care',
      },
      {
        category: 'Advanced treatment',
        detail:
          'Optic canal decompression surgery is reserved for select cases, such as a clear compressive bony fragment or hematoma on imaging with correlating progressive vision loss, given its own surgical risks and unproven overall benefit in unselected patients',
      },
    ],
    followUp: {
      typical: 'Close early follow-up (days to 1-2 weeks) to monitor for any change in vision, then longer-interval follow-up over months to assess for stabilization and development of optic atrophy',
      monitor: 'Visual acuity, RAPD grade, color vision, visual fields, and optic disc appearance over time (watching for developing pallor)',
      progression: 'Progressive vision loss despite stable or improving overall trauma status should prompt repeat imaging to exclude a new or worsening compressive lesion (expanding hematoma, displaced bone fragment)',
      shortenWhen: 'Any new or worsening vision loss, new proptosis or elevated IOP suggesting orbital compartment syndrome, or other new neurologic findings',
    },
    prognosis: {
      typicalCourse:
        'Highly variable, ranging from mild transient visual dysfunction with good recovery to severe, permanent, no-light-perception vision loss depending on the severity and mechanism of injury; disc pallor becomes evident over 3-6 weeks in eyes with significant axonal loss',
      progressionRisk: 'Vision may worsen in the initial hours to days after injury from secondary edema/ischemia before stabilizing or, in some cases, gradually improving',
      complications: 'Permanent optic atrophy and visual field loss, in some cases progressing to no light perception; associated orbital and intracranial injuries carry their own morbidity',
      visualPrognosis:
        'A significant proportion of patients are left with permanent, often severe, visual impairment despite treatment; presenting visual acuity is one of the strongest predictors of final outcome, with initial no-light-perception vision carrying a poor prognosis for recovery, though some patients do recover meaningful vision',
    },
    clinicalPearls: [
      'Always check for an RAPD in any patient with head or facial trauma, even when visual acuity cannot be formally tested (e.g., due to altered consciousness) — it may be the only sign of traumatic optic neuropathy in the acute trauma bay.',
      'The fundus is classically normal at initial presentation because the injury occurs at the retrobulbar/intracanalicular optic nerve; do not be falsely reassured by a normal-appearing disc in the first days after injury — pallor develops later, over 3-6 weeks.',
      'High-dose corticosteroids are no longer routinely recommended for traumatic optic neuropathy, based on concerns extrapolated from traumatic brain injury trial data (CRASH) showing potential harm without proven visual benefit.',
      'Always rule out orbital compartment syndrome (tense proptosis, markedly elevated IOP) in the setting of orbital trauma, as it is a true ophthalmic emergency requiring immediate lateral canthotomy/cantholysis and is distinct from, though can coexist with, traumatic optic neuropathy.',
      'Indirect injury (shearing forces at the optic canal without nerve transection) is far more common than direct injury (laceration/transection) after blunt trauma.',
    ],
    highYield: [
      'Indirect injury (shearing at the intracanalicular optic nerve) is more common than direct nerve transection/laceration',
      'Classic presentation: decreased vision and RAPD after head/facial trauma with an initially NORMAL fundus (retrobulbar injury); disc pallor develops over 3-6 weeks',
      'High-dose corticosteroids have fallen out of favor based on CRASH trial-extrapolated harm concerns; not standard of care',
      'Optic canal decompression is reserved for select cases with a clear compressive lesion (bone fragment, hematoma) and correlating clinical findings',
      'A significant proportion of patients have permanent visual loss regardless of treatment approach; presenting visual acuity is a key prognostic factor',
      'Always exclude orbital compartment syndrome (tense proptosis, high IOP) as a separate emergent diagnosis requiring immediate canthotomy/cantholysis',
    ],
  },
]
