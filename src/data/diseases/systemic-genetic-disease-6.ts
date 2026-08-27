import type { Disease } from '../../types/disease'

export const systemicGeneticDisease6: Disease[] = [
  {
    id: 'neurofibromatosis',
    name: 'Neurofibromatosis',
    aliases: ['NF1', 'NF2', 'Von Recklinghausen Disease'],
    category: 'Systemic Health - Neurologic',
    definition:
      'A group of autosomal dominant neurocutaneous disorders (phakomatoses) caused by mutations in tumor suppressor genes that predispose to the growth of benign and, less commonly, malignant tumors of neural crest-derived tissue; neurofibromatosis type 1 (NF1, von Recklinghausen disease) is caused by NF1 gene (neurofibromin) mutations and is characterized by café-au-lait macules, cutaneous/plexiform neurofibromas, and iris Lisch nodules, while neurofibromatosis type 2 (NF2) is caused by NF2 gene (merlin) mutations and is characterized primarily by bilateral vestibular schwannomas with distinct, less prominent ocular findings.',
    affectedStructure:
      'NF1: iris stroma (Lisch nodules), optic nerve (glioma), eyelid/orbit (plexiform neurofibroma), choroid (hamartomas); NF2: lens (posterior subcapsular/cortical cataract), retina/RPE (combined hamartoma), optic nerve (meningioma)',
    pathologicalProcess:
      'Loss-of-function mutation in one copy of a tumor suppressor gene (NF1/neurofibromin or NF2/merlin) followed by somatic loss of the second allele in susceptible cells (Knudson two-hit mechanism) removes normal growth regulation of neural crest-derived Schwann cells, melanocytes, and meningothelial cells, producing characteristic benign hamartomas and neoplasms throughout the body, including multiple distinct ocular structures.',
    epidemiology: {
      typicalAge: 'NF1 findings typically emerge in childhood, with Lisch nodules increasing in prevalence with age (present in the majority of affected adults); NF2 typically presents in the second to third decade with hearing loss',
      sexDistribution: 'Equal in males and females (autosomal dominant, not sex-linked)',
      prevalence: 'NF1 is common, approximately 1 in 3,000 individuals; NF2 is much rarer, approximately 1 in 25,000-33,000 individuals',
      importantPopulations: 'NF1: children and young adults for optic nerve glioma screening; NF2: young adults with bilateral hearing loss/tinnitus',
    },
    riskFactors: [
      { label: 'Autosomal dominant NF1 (neurofibromin) mutation — family history', tier: 'major' },
      { label: 'Autosomal dominant NF2 (merlin) mutation — family history', tier: 'major' },
      { label: 'De novo spontaneous mutation (roughly half of NF1 cases)', tier: 'major' },
      { label: 'Young age (optic nerve glioma risk window in NF1, typically before age 7-10)', tier: 'moderate' },
    ],
    pathophysiology: [
      'NF1: neurofibromin normally acts as a negative regulator of the RAS signaling pathway; its loss leads to unchecked RAS activity and proliferation of Schwann cells, melanocytes, and fibroblasts',
      'NF1: melanocyte proliferation produces café-au-lait macules and iris Lisch nodules (melanocytic iris hamartomas); Schwann cell proliferation along nerve sheaths produces cutaneous and plexiform neurofibromas',
      'NF1: plexiform neurofibroma involving the eyelid/orbit can infiltrate diffusely, producing a classic S-shaped upper lid ptosis and, in children, mechanical/anisometropic amblyopia from lid ptosis or induced astigmatism',
      'NF1: glial cell proliferation along the optic pathway produces optic nerve/pathway pilocytic astrocytoma (glioma), the most common CNS tumor in NF1, typically arising in early childhood',
      'NF2: merlin (schwannomin) normally regulates cell contact inhibition and membrane-cytoskeleton signaling; its loss predisposes to schwannoma formation, classically bilateral vestibular schwannomas, as well as meningiomas and ependymomas',
      'NF2: distinct ocular pathology relative to NF1 — early-onset posterior subcapsular or cortical cataract and combined hamartoma of the retina and retinal pigment epithelium, with minimal iris or skin involvement',
    ],
    symptoms: {
      common: [
        'NF1: often asymptomatic ocular findings noted on routine exam (Lisch nodules, café-au-lait spots)',
        'NF1: eyelid fullness/ptosis if plexiform neurofibroma present',
        'NF1: proptosis, decreased vision, or afferent pupillary defect if optic nerve glioma present',
        'NF2: progressive sensorineural hearing loss, tinnitus, and imbalance (dominant presenting systemic feature)',
        'NF2: blurred vision from early cataract',
      ],
      lessCommon: ['NF1: strabismus secondary to ptosis or amblyopia', 'NF2: decreased peripheral vision or metamorphopsia from a large combined hamartoma involving the macula'],
      importantNegatives: ['NF2 typically lacks the numerous cutaneous neurofibromas, café-au-lait macules, and Lisch nodules characteristic of NF1'],
      typicalProgression:
        'NF1: café-au-lait macules present in infancy, Lisch nodules increase in number with age and are a key diagnostic sign in older children/adults, optic nerve glioma risk is highest in early childhood; NF2: vestibular schwannomas and cataract often detected in the second-third decade, with progressive hearing loss over years.',
    },
    signs: [
      { area: 'External', finding: 'NF1: café-au-lait macules, cutaneous neurofibromas; classic S-shaped ptosis of the upper lid from plexiform neurofibroma infiltration' },
      { area: 'Other', finding: 'NF1: Lisch nodules — small, dome-shaped, tan-to-brown melanocytic iris hamartomas, often bilateral and multiple, virtually pathognomonic for NF1 and increasing in number with age (a key NIH diagnostic criterion); congenital glaucoma may occur if the ipsilateral eyelid/orbit is involved by plexiform neurofibroma' },
      { area: 'Optic Nerve', finding: 'NF1: optic nerve/pathway glioma — optic disc pallor or swelling, proptosis if orbital extension, relative afferent pupillary defect, decreased acuity or visual field loss; NF2: optic nerve sheath meningioma possible' },
      { area: 'Retina', finding: 'NF1: choroidal hamartomas (often only visible on near-infrared imaging); NF2: combined hamartoma of the retina and RPE — a gray-white, sometimes vascularized elevated lesion causing retinal traction/distortion' },
      { area: 'Lens', finding: 'NF2: posterior subcapsular and/or cortical cataract, often bilateral and early-onset — a highly characteristic and early ocular sign of NF2' },
    ],
    differentialDiagnosis: [
      {
        disease: 'NF2 versus NF1 (within neurofibromatosis)',
        whySimilar: 'Both are autosomal dominant neurofibromatosis syndromes historically grouped together and can each produce eye findings',
        keyDistinguisher:
          'NF1 (neurofibromin gene) is dominated by Lisch nodules, café-au-lait macules, cutaneous/plexiform neurofibromas, and optic nerve glioma; NF2 (merlin gene) is dominated by bilateral vestibular schwannomas with hearing loss as the primary systemic feature, and its ocular findings are early posterior subcapsular/cortical cataract and combined retina/RPE hamartoma with little to no iris or skin involvement',
      },
      { disease: 'Sturge-Weber syndrome', whySimilar: 'Both are phakomatoses with potential ocular and cutaneous involvement', keyDistinguisher: 'Sturge-Weber presents with a facial port-wine stain and choroidal hemangioma causing glaucoma, not Lisch nodules or neurofibromas' },
      { disease: 'Simple iris nevi', whySimilar: 'Both appear as pigmented iris lesions on slit lamp exam', keyDistinguisher: 'Isolated iris nevi are typically solitary and flat, whereas Lisch nodules are characteristically multiple, bilateral, and dome-shaped/elevated, increasing in number with age' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp examination of the iris', whyOrdered: 'Screen for Lisch nodules, a major NF1 diagnostic criterion', expectedFinding: 'Multiple bilateral dome-shaped melanocytic iris hamartomas', contribution: 'Highly specific supportive finding for NF1 diagnosis' },
      { name: 'Dilated fundus examination with near-infrared reflectance imaging', whyOrdered: 'Detect choroidal hamartomas in NF1 (often subclinical) or combined retina/RPE hamartoma in NF2', expectedFinding: 'NF1: patchy bright choroidal nodules on near-infrared imaging; NF2: gray-white elevated combined hamartoma', contribution: 'Supports diagnosis and characterizes ocular involvement' },
      { name: 'Serial ophthalmic examination +/- orbital/brain MRI', whyOrdered: 'Screen for optic pathway glioma in young children with NF1', expectedFinding: 'Fusiform enlargement/enhancement of the optic nerve or chiasm on MRI if glioma present', contribution: 'Detects sight- and life-threatening tumor, guides need for treatment' },
      { name: 'Genetic testing (NF1 or NF2 gene sequencing)', whyOrdered: 'Confirm diagnosis, especially in equivocal or de novo presentations, and for family counseling', expectedFinding: 'Pathogenic NF1 or NF2 variant', contribution: 'Definitive molecular confirmation and distinguishes NF1 from NF2' },
      { name: 'Audiometry and brain/internal auditory canal MRI', whyOrdered: 'Evaluate for bilateral vestibular schwannomas, the hallmark of NF2', expectedFinding: 'Bilateral cerebellopontine angle masses, sensorineural hearing loss', contribution: 'Confirms NF2 diagnosis; drives the majority of NF2 morbidity' },
    ],
    diagnosis: {
      criteria:
        'NF1: NIH diagnostic criteria require two or more of: six or more café-au-lait macules, two or more neurofibromas or one plexiform neurofibroma, axillary/inguinal freckling, optic glioma, two or more Lisch nodules, a distinctive osseous lesion, or a first-degree relative with NF1; NF2: diagnostic criteria center on bilateral vestibular schwannoma or a family history plus unilateral schwannoma/other characteristic tumors',
      confirmation: 'Clinical diagnosis using established criteria, supported by genetic testing (NF1 or NF2 gene) and imaging; the optometrist plays a key role in identifying Lisch nodules or optic nerve findings that support or first suggest the diagnosis.',
      classification: 'Neurofibromatosis type 1 (NF1) versus neurofibromatosis type 2 (NF2) — distinct genes, distinct predominant systemic and ocular phenotypes',
    },
    management: [
      { category: 'Observation', detail: 'Lisch nodules and choroidal hamartomas require no treatment and are monitored as diagnostic/surveillance markers only' },
      { category: 'First-line treatment', detail: 'Refractive correction and amblyopia therapy (patching) for ptosis-induced or anisometropic amblyopia from plexiform neurofibroma in children' },
      { category: 'Second-line treatment', detail: 'Ptosis repair or debulking surgery for plexiform neurofibroma causing visual axis obstruction or significant cosmetic/functional impact, performed with awareness of high intraoperative bleeding risk given tumor vascularity' },
      { category: 'Advanced treatment', detail: 'Chemotherapy for progressive, vision-threatening optic pathway glioma (surgery/radiation generally avoided as first-line given morbidity); cataract extraction for visually significant NF2-associated cataract' },
      { category: 'Referral', detail: 'Refer to pediatric ophthalmology/neuro-ophthalmology and oncology for suspected optic pathway glioma; refer to neurotology/neurosurgery for NF2 with vestibular schwannoma; refer to genetics for confirmatory testing and family counseling in both types' },
    ],
    followUp: {
      typical: 'NF1: annual comprehensive eye exams, with more frequent (every 3-6 month) surveillance exams in young children (typically under age 7-10) to screen for optic pathway glioma; NF2: regular ophthalmic exams alongside audiologic/neurologic monitoring',
      monitor: 'Visual acuity, color vision, pupils (afferent defect), optic disc appearance, visual fields, Lisch nodule number, lid position, and lens clarity',
      progression: 'New proptosis, decreased acuity, afferent pupillary defect, or optic disc changes in a child with NF1 warrant urgent imaging for optic pathway glioma',
      shortenWhen: 'Young child with NF1 diagnosis (increased optic glioma screening frequency), new visual symptoms, or documented tumor growth on imaging',
    },
    prognosis: {
      typicalCourse: 'NF1: most ocular findings (Lisch nodules, choroidal hamartomas) are benign and non-progressive visually; optic pathway glioma is often indolent but can threaten vision if progressive. NF2: cataract and hearing loss are typically progressive and drive most of the disease burden.',
      progressionRisk: 'NF1 optic glioma risk is highest in early childhood and generally decreases after that window; plexiform neurofibromas can grow over time. NF2 vestibular schwannomas and cataracts tend to progress gradually.',
      complications: 'NF1: amblyopia from ptosis, vision loss from optic pathway glioma, glaucoma with periocular plexiform involvement; NF2: progressive cataract-related vision loss, retinal traction/distortion from combined hamartoma, profound bilateral hearing loss',
      visualPrognosis: 'Generally good for isolated Lisch nodules/choroidal hamartomas; guarded and dependent on tumor location/growth for optic pathway glioma; good with timely cataract surgery in NF2',
    },
    clinicalPearls: [
      'Lisch nodules are considered virtually pathognomonic for NF1 and increase in number with age — look for them at the slit lamp even in adults with only a few café-au-lait macules.',
      'A young child with NF1 needs serial dilated eye exams (not a one-time exam) specifically to screen for optic pathway glioma during the highest-risk early childhood years.',
      'An S-shaped upper lid ptosis is a classic sign of plexiform neurofibroma infiltrating the eyelid in NF1 and carries amblyopia risk if it obstructs the visual axis.',
      'Do not confuse NF1 and NF2 clinically: NF2 is primarily a hearing-loss disease (bilateral vestibular schwannomas) with early cataract and combined retina/RPE hamartoma as its ocular signature, not Lisch nodules or neurofibromas.',
      'Choroidal hamartomas in NF1 are often invisible on standard fundus exam and are best detected with near-infrared reflectance imaging.',
    ],
    highYield: [
      'NF1 (neurofibromin gene) hallmark ocular sign: Lisch nodules (iris melanocytic hamartomas), virtually pathognomonic, increase with age',
      'Optic nerve glioma is the most common CNS tumor in NF1 and is screened for with serial childhood eye exams +/- MRI',
      'Plexiform neurofibroma of the eyelid classically causes an S-shaped ptosis with amblyopia risk in children',
      'NF2 (merlin gene) hallmark: bilateral vestibular schwannomas driving hearing loss, NOT Lisch nodules',
      'NF2 ocular signature: early posterior subcapsular/cortical cataract and combined retina/RPE hamartoma',
      'Both NF1 and NF2 are autosomal dominant but arise from distinct genes with largely distinct phenotypes',
    ],
  },
  {
    id: 'tuberous-sclerosis',
    name: 'Tuberous Sclerosis Complex',
    aliases: ['TSC'],
    category: 'Systemic Health - Neurologic',
    definition:
      'An autosomal dominant phakomatosis caused by mutations in the TSC1 (hamartin) or TSC2 (tuberin) tumor suppressor genes, resulting in dysregulated mTOR signaling and the growth of benign hamartomas in multiple organ systems, classically described by the historical Vogt triad of seizures, intellectual disability, and facial angiofibromas (adenoma sebaceum), with the hallmark ocular finding being the retinal astrocytic hamartoma.',
    affectedStructure: 'Retina and optic nerve head (astrocytic hamartoma); also skin, brain, heart, kidney, and lungs systemically',
    pathologicalProcess:
      'Loss-of-function mutation in TSC1 or TSC2 disrupts the hamartin-tuberin protein complex that normally inhibits the mTOR (mechanistic target of rapamycin) signaling pathway; unchecked mTOR activity drives abnormal cell growth and differentiation, producing benign hamartomas (disorganized but non-malignant tissue growths) in the retina, brain, skin, heart, kidney, and lungs.',
    epidemiology: {
      typicalAge: 'Congenital; seizures often begin in infancy, retinal hamartomas may be present from birth or detected on early screening exams',
      sexDistribution: 'Equal in males and females (autosomal dominant, not sex-linked)',
      prevalence: 'Approximately 1 in 6,000-10,000 live births',
      importantPopulations: 'Infants presenting with infantile spasms/seizures; two-thirds of cases arise from de novo mutations with no family history',
    },
    riskFactors: [
      { label: 'Autosomal dominant TSC1 or TSC2 mutation (family history)', tier: 'major' },
      { label: 'De novo spontaneous TSC1/TSC2 mutation (majority of cases)', tier: 'major' },
    ],
    pathophysiology: [
      'TSC1 (hamartin) and TSC2 (tuberin) normally form a complex that inhibits Rheb-GTPase and downstream mTOR complex 1 (mTORC1) signaling',
      'Biallelic loss of TSC1 or TSC2 function (germline mutation plus second-hit somatic loss) releases mTORC1 inhibition, driving uncontrolled cell growth and hamartoma formation',
      'In the retina, astrocytic proliferation produces the characteristic astrocytic hamartoma, which may calcify over time, producing a nodular, mulberry-like appearance, or remain flat and translucent (fish-egg/smooth type) when less calcified',
      'Analogous mTOR-driven hamartomatous growth produces facial angiofibromas (adenoma sebaceum), cardiac rhabdomyomas, renal angiomyolipomas, and cortical tubers/subependymal nodules that cause seizures and neurodevelopmental impairment',
      'Hypopigmented ash-leaf macules result from localized melanocyte dysfunction rather than a proliferative hamartoma',
    ],
    symptoms: {
      common: ['Often ocular findings are entirely asymptomatic and identified on routine or systemic-referral dilated fundus exam', 'Seizures (often infantile spasms in infancy)', 'Developmental delay/intellectual disability', 'Facial skin lesions (angiofibromas) noted by caregivers'],
      lessCommon: ['Decreased vision or visual field defect if a large hamartoma involves the macula or optic nerve (uncommon)', 'Vitreous seeding/exudation from an actively growing hamartoma (rare)'],
      importantNegatives: ['The large majority of retinal astrocytic hamartomas are visually asymptomatic and non-progressive'],
      typicalProgression: 'Retinal astrocytic hamartomas are typically present early and remain stable in size and appearance over a patient\'s lifetime; a minority may show slow growth, calcification, or (rarely) exudation.',
    },
    signs: [
      { area: 'Retina', finding: 'Astrocytic hamartoma: classically a yellow-white, nodular, calcified elevated lesion with a translucent/mulberry-like surface when calcified, or a smoother, flatter, semi-translucent "fish-egg" lesion when less calcified; may occur near the optic disc or elsewhere in the posterior pole, and can be multiple/bilateral' },
      { area: 'Optic Nerve', finding: 'Hamartoma may arise at or overlap the optic disc, occasionally mimicking disc drusen or papilledema' },
      { area: 'External', finding: 'Facial angiofibromas (adenoma sebaceum) in a butterfly distribution across the nose/cheeks, periungual fibromas, shagreen patches, ash-leaf hypopigmented macules (best seen with Wood lamp)' },
    ],
    differentialDiagnosis: [
      { disease: 'Optic disc drusen', whySimilar: 'Both can present as a yellowish, nodular, calcified-appearing lesion at or near the optic disc', keyDistinguisher: 'Disc drusen are typically bilateral, buried or surface calcified deposits within the nerve itself without the retinal component or systemic TSC stigmata; B-scan ultrasound or autofluorescence readily distinguishes drusen from an astrocytic hamartoma' },
      { disease: 'Retinoblastoma', whySimilar: 'Both can present as a whitish/calcified retinal mass, particularly in young children, raising concern on fundus exam', keyDistinguisher: 'Retinoblastoma is typically a solitary, enlarging, endophytic/exophytic mass with leukocoria and no other systemic TSC stigmata (seizures, angiofibromas); B-scan and MRI characteristics and clinical context differentiate the two' },
      { disease: 'Retinal capillary hemangioblastoma (von Hippel-Lindau disease)', whySimilar: 'Both are phakomatosis-associated retinal hamartomatous/vascular lesions', keyDistinguisher: 'VHL hemangioblastoma is an orange-red vascular tumor with a classic dilated, tortuous feeding artery and draining vein, whereas the TSC astrocytic hamartoma is a whitish-yellow, non-vascular-appearing, often calcified glial lesion' },
    ],
    diagnosticTesting: [
      { name: 'Dilated fundus examination', whyOrdered: 'Screen for retinal astrocytic hamartoma, a supportive diagnostic criterion for TSC', expectedFinding: 'Mulberry-like calcified or smooth translucent fish-egg lesion in the retina or at the optic disc', contribution: 'Confirms ocular involvement and supports overall TSC diagnosis' },
      { name: 'Optical coherence tomography and fundus autofluorescence', whyOrdered: 'Characterize hamartoma structure and calcification, and distinguish from mimics such as disc drusen', expectedFinding: 'Elevated, hyperreflective retinal lesion; hyperautofluorescence in calcified lesions', contribution: 'Aids differentiation and monitoring for growth/exudation over time' },
      { name: 'Genetic testing for TSC1/TSC2 mutations', whyOrdered: 'Confirm diagnosis, particularly in equivocal presentations, and for family counseling', expectedFinding: 'Pathogenic TSC1 or TSC2 variant', contribution: 'Definitive molecular confirmation, though a subset of clinically diagnosed patients have no identifiable mutation' },
      { name: 'Brain MRI', whyOrdered: 'Evaluate for cortical tubers, subependymal nodules, and subependymal giant cell astrocytoma', expectedFinding: 'Cortical/subcortical tubers, subependymal nodules along the ventricles', contribution: 'Major diagnostic criterion and guides seizure/neurologic management' },
      { name: 'Renal ultrasound/MRI and cardiac echocardiogram', whyOrdered: 'Screen for renal angiomyolipoma and cardiac rhabdomyoma as part of multisystem surveillance', expectedFinding: 'Renal angiomyolipoma(s), cardiac rhabdomyoma(s) (often regress after infancy)', contribution: 'Guides systemic surveillance and management given multi-organ risk' },
    ],
    diagnosis: {
      criteria:
        'Consensus diagnostic criteria use major features (including retinal astrocytic hamartoma, cortical tuber, subependymal nodule, facial angiofibroma, cardiac rhabdomyoma, renal angiomyolipoma, and others) and minor features; definite diagnosis requires two major features or one major plus two minor features, or identification of a pathogenic TSC1/TSC2 mutation alone',
      confirmation: 'Diagnosis is established by a multidisciplinary team (neurology, genetics, dermatology) using consensus clinical criteria and/or genetic testing; a retinal astrocytic hamartoma found on a routine or referral eye exam is a major diagnostic criterion and can be a key finding prompting systemic workup.',
    },
    management: [
      { category: 'Observation', detail: 'The large majority of retinal astrocytic hamartomas are benign, stable, and require no treatment — periodic monitoring only' },
      { category: 'Second-line treatment', detail: 'Laser photocoagulation or cryotherapy may rarely be considered for an actively growing or exudative hamartoma threatening the macula, though this is uncommon' },
      { category: 'Referral', detail: 'Refer to genetics/neurology/pediatrics for multidisciplinary systemic diagnosis and surveillance (seizure management, neurodevelopmental care, renal and cardiac imaging) upon identification of a retinal hamartoma suggestive of TSC; refer to retina specialist for any lesion showing growth, exudation, or macular threat' },
    ],
    followUp: {
      typical: 'Periodic dilated eye exams (roughly annual, or per multidisciplinary team recommendation) to monitor hamartoma stability, coordinated with the patient\'s systemic TSC surveillance schedule',
      monitor: 'Size, elevation, and calcification of known hamartomas; development of new lesions; any exudation or macular involvement',
      progression: 'Documented growth, new exudation, or vision change should prompt closer monitoring or retina referral, though this is an uncommon course',
      shortenWhen: 'Lesion growth, new exudation, or visual symptoms are noted',
    },
    prognosis: {
      typicalCourse: 'Retinal astrocytic hamartomas are typically stable and benign throughout life with an excellent visual prognosis; overall TSC prognosis is dominated by neurologic (seizure control, cognitive outcome) and other systemic organ involvement rather than ocular disease',
      progressionRisk: 'Low risk of hamartoma growth or exudative complications; most lesions remain unchanged over decades',
      complications: 'Rarely, macular or optic nerve involvement, exudation, or vitreous seeding can threaten vision; systemic complications (subependymal giant cell astrocytoma causing hydrocephalus, renal angiomyolipoma hemorrhage) drive most morbidity',
      visualPrognosis: 'Excellent in the vast majority of patients; hamartomas are typically incidental, non-progressive findings',
    },
    clinicalPearls: [
      'Retinal astrocytic hamartomas are classically described in two forms: a calcified, elevated "mulberry" lesion and a smoother, flat, translucent "fish-egg" lesion — both are benign.',
      'Identifying a retinal astrocytic hamartoma on a routine exam, especially in a child with seizures or developmental delay, should prompt referral for systemic TSC evaluation.',
      'Unlike the vascular tumor of von Hippel-Lindau disease, the TSC astrocytic hamartoma is a glial (non-vascular) lesion and essentially never causes the exudative retinal detachment seen with untreated VHL hemangioblastomas.',
      'Ash-leaf hypopigmented macules may be subtle on exam and are best identified using a Wood lamp.',
      'Genetic counseling is important given the autosomal dominant inheritance and substantial proportion of de novo cases.',
    ],
    highYield: [
      'TSC = autosomal dominant TSC1 (hamartin) or TSC2 (tuberin) mutation causing dysregulated mTOR signaling',
      'Historic Vogt triad: seizures, intellectual disability, facial angiofibromas (adenoma sebaceum)',
      'Hallmark ocular finding: retinal astrocytic hamartoma — calcified "mulberry" lesion or flat translucent "fish-egg" lesion',
      'Most retinal hamartomas are benign and require no treatment; treatment reserved for rare exudative/macula-threatening lesions',
      'Other systemic findings: cardiac rhabdomyoma, renal angiomyolipoma, ash-leaf hypopigmented macules, shagreen patch',
      'A retinal astrocytic hamartoma is a major diagnostic criterion for TSC and warrants multidisciplinary systemic workup',
    ],
  },
  {
    id: 'von-hippel-lindau-disease',
    name: 'Von Hippel-Lindau Disease',
    aliases: ['VHL'],
    category: 'Systemic Health - Neurologic',
    definition:
      'An autosomal dominant phakomatosis caused by mutations in the VHL tumor suppressor gene, resulting in the growth of highly vascular tumors in multiple organs; the hallmark ocular finding is the retinal capillary hemangioblastoma, and systemic manifestations including CNS hemangioblastomas, renal cell carcinoma, and pheochromocytoma drive most of the disease morbidity and mortality, making the eye exam an important early systemic screening tool.',
    affectedStructure: 'Retina and retinal vasculature (capillary hemangioblastoma); also cerebellum/spinal cord, kidney, adrenal medulla, and pancreas systemically',
    pathologicalProcess:
      'Loss-of-function mutation in one VHL allele combined with somatic loss of the second allele (Knudson two-hit mechanism) in susceptible cells abolishes the normal VHL protein function of targeting hypoxia-inducible factor (HIF) for degradation; constitutively stabilized HIF drives overexpression of vascular endothelial growth factor (VEGF) and other angiogenic/growth factors, producing highly vascular hemangioblastomas in the retina and CNS, and clear cell tumors in the kidney, adrenal gland, and pancreas.',
    epidemiology: {
      typicalAge: 'Retinal hemangioblastomas often present in the second to third decade, sometimes earlier; may be the first presenting sign of VHL disease',
      sexDistribution: 'Equal in males and females (autosomal dominant, not sex-linked)',
      prevalence: 'Approximately 1 in 36,000-40,000 individuals',
      importantPopulations: 'Young adults presenting with an isolated peripheral retinal vascular lesion; family members of a known VHL patient require lifelong screening',
    },
    riskFactors: [
      { label: 'Autosomal dominant VHL gene mutation (family history)', tier: 'major' },
      { label: 'De novo spontaneous VHL mutation', tier: 'major' },
    ],
    pathophysiology: [
      'The VHL protein normally binds hypoxia-inducible factor (HIF-1alpha/HIF-2alpha) under normoxic conditions and targets it for ubiquitination and proteasomal degradation',
      'Biallelic loss of VHL function prevents HIF degradation even in normoxia, causing pseudohypoxic upregulation of VEGF, PDGF, and erythropoietin',
      'Excess VEGF/angiogenic signaling drives formation of highly vascular capillary hemangioblastomas in the retina, cerebellum, brainstem, and spinal cord',
      'In the retina, the hemangioblastoma recruits a markedly dilated and tortuous ("corkscrew") feeding arteriole and draining venule to support its high metabolic/vascular demand',
      'Chronic leakage from the abnormal tumor vasculature causes lipid exudation, subretinal fluid, and, if untreated, exudative retinal detachment',
      'The same HIF-driven pathway underlies clear cell renal cell carcinoma, pheochromocytoma, and pancreatic cysts/neuroendocrine tumors systemically',
    ],
    symptoms: {
      common: ['Often asymptomatic in early/small peripheral lesions, detected on dilated fundus exam', 'Blurred vision or metamorphopsia if exudation/subretinal fluid involves the macula', 'Floaters if vitreous hemorrhage occurs'],
      lessCommon: ['Vision loss from exudative retinal detachment in advanced/untreated cases', 'Systemic: headache, ataxia (cerebellar hemangioblastoma), episodic hypertension/palpitations (pheochromocytoma), flank pain/hematuria (renal cell carcinoma)'],
      importantNegatives: ['Small peripheral hemangioblastomas are frequently asymptomatic, which is why dilated screening exams (not symptom-driven visits) are essential in at-risk patients'],
      typicalProgression: 'Lesions often begin small and peripheral, asymptomatic; without treatment, growth and chronic exudation can progress over months to years to macular involvement, exudative retinal detachment, and vision loss.',
    },
    signs: [
      { area: 'Retina', finding: 'Retinal capillary hemangioblastoma: an orange-red, round, vascular tumor typically located in the peripheral retina, classically fed and drained by a markedly dilated and tortuous ("corkscrew") retinal artery and vein; associated lipid exudation, subretinal fluid, or exudative retinal detachment may surround the lesion, especially as it enlarges' },
      { area: 'Vitreous', finding: 'Vitreous hemorrhage possible from an actively leaking/friable hemangioblastoma' },
      { area: 'Optic Nerve', finding: 'Juxtapapillary hemangioblastoma may occur directly on or adjacent to the optic disc, occasionally causing disc edema or exudation' },
    ],
    differentialDiagnosis: [
      { disease: 'Coats disease', whySimilar: 'Both present with retinal telangiectasia/vascular abnormality and exudation, sometimes with exudative detachment', keyDistinguisher: 'Coats disease is typically unilateral, presents in young children, and shows diffuse telangiectatic vessels with lipid exudation rather than a discrete tumor with a single dilated corkscrew feeding artery/vein; VHL hemangioblastoma is a discrete vascular tumor and often bilateral/multifocal' },
      { disease: 'Retinal cavernous hemangioma', whySimilar: 'Both are retinal vascular hamartomas that can be identified on fundus exam', keyDistinguisher: 'Cavernous hemangioma has a classic grape-cluster cluster of dark, saccular aneurysmal vascular sacs with minimal exudation and no feeding/draining vessel dilation, distinct from the well-defined orange-red tumor with corkscrew vessels in VHL' },
      { disease: 'Tuberous sclerosis retinal astrocytic hamartoma', whySimilar: 'Both are phakomatosis-associated retinal lesions', keyDistinguisher: 'TSC hamartoma is a whitish-yellow, calcified/glial lesion without the vascular corkscrew feeder vessels or exudative detachment risk seen with VHL hemangioblastoma' },
    ],
    diagnosticTesting: [
      { name: 'Dilated fundus examination with scleral depression', whyOrdered: 'Detect peripheral retinal capillary hemangioblastoma, particularly in known or at-risk VHL patients', expectedFinding: 'Orange-red vascular tumor with dilated, tortuous feeding artery and draining vein', contribution: 'Establishes ocular diagnosis; often the first manifestation of VHL disease' },
      { name: 'Fluorescein angiography', whyOrdered: 'Characterize the vascular tumor and identify subtle or early lesions not obvious on exam', expectedFinding: 'Early hyperfluorescence/filling of the tumor with the dilated feeder vessels, late leakage', contribution: 'Confirms diagnosis and helps plan treatment' },
      { name: 'Optical coherence tomography', whyOrdered: 'Assess for subretinal/intraretinal fluid and macular involvement', expectedFinding: 'Subretinal fluid, exudation, or macular edema if present', contribution: 'Guides urgency and monitors treatment response' },
      { name: 'Genetic testing for VHL mutation', whyOrdered: 'Confirm diagnosis and screen at-risk family members', expectedFinding: 'Pathogenic VHL variant', contribution: 'Definitive molecular confirmation; enables presymptomatic family screening' },
      { name: 'Brain/spinal MRI, abdominal MRI or ultrasound (renal/adrenal/pancreatic), and plasma/urine metanephrines', whyOrdered: 'Systemic screening for CNS hemangioblastoma, renal cell carcinoma, pheochromocytoma, and pancreatic lesions given these drive mortality', expectedFinding: 'Cerebellar/spinal hemangioblastoma, renal or pancreatic cysts/tumors, elevated metanephrines if pheochromocytoma present', contribution: 'Critical for lifelong multidisciplinary surveillance once VHL is diagnosed' },
    ],
    diagnosis: {
      criteria: 'Diagnosis requires two or more CNS/retinal hemangioblastomas, or one hemangioblastoma plus a visceral manifestation (renal cell carcinoma, pheochromocytoma, pancreatic lesion), or one hemangioblastoma/visceral lesion plus a known family history of VHL disease',
      confirmation: 'Diagnosis is made using established clinical criteria and confirmed with VHL genetic testing; a retinal capillary hemangioblastoma identified on a routine eye exam is often the first presenting sign and should prompt systemic workup and genetic counseling.',
    },
    management: [
      { category: 'Observation', detail: 'Very small, asymptomatic peripheral hemangioblastomas without exudation may be monitored closely with serial dilated exams and imaging' },
      { category: 'First-line treatment', detail: 'Laser photocoagulation for small-to-moderate sized lesions, especially those away from the fovea, to ablate the tumor and reduce exudation risk' },
      { category: 'Second-line treatment', detail: 'Cryotherapy for peripheral lesions not amenable to or that fail laser, particularly larger or more anteriorly located tumors' },
      { category: 'Advanced treatment', detail: 'Photodynamic therapy, anti-VEGF injection, or vitreoretinal surgery may be considered for large, juxtapapillary, or complicated lesions with significant exudation/detachment; early treatment before macular involvement is key to preserving vision' },
      { category: 'Referral', detail: 'Refer to retina specialist promptly upon identification of a suspected hemangioblastoma; refer to genetics/oncology for systemic VHL workup and lifelong multidisciplinary surveillance (neurosurgery, urology, endocrinology) given the disease drives mortality primarily through CNS and renal tumors' },
    ],
    followUp: {
      typical: 'Dilated fundus exam every 6-12 months (or per retina specialist guidance) for known/at-risk VHL patients, coordinated with systemic surveillance imaging on an established multidisciplinary schedule',
      monitor: 'Number, size, and location of retinal hemangioblastomas, degree of exudation/subretinal fluid, and macular status',
      progression: 'New lesion growth, increasing exudation, or vitreous hemorrhage warrants prompt retina referral and treatment consideration',
      shortenWhen: 'New floaters/vision change, documented lesion growth, or exudation approaching the macula',
    },
    prognosis: {
      typicalCourse: 'Small, treated peripheral hemangioblastomas generally have a good visual prognosis; untreated or juxtapapillary/macular lesions carry higher risk of vision loss; overall VHL prognosis and mortality are driven primarily by CNS hemangioblastomas and renal cell carcinoma rather than the eye findings',
      progressionRisk: 'Untreated hemangioblastomas tend to grow over time and increase exudation risk; new lesions can develop throughout life, requiring lifelong ocular surveillance',
      complications: 'Exudative retinal detachment, vitreous hemorrhage, neovascular glaucoma in advanced untreated cases; systemically, CNS hemangioblastoma causing neurologic deficits, metastatic renal cell carcinoma, and catecholamine crisis from pheochromocytoma',
      visualPrognosis: 'Good with early detection and timely laser/cryotherapy treatment; poor if diagnosis is delayed until exudative detachment or macular involvement occurs',
    },
    clinicalPearls: [
      'A discrete orange-red peripheral retinal tumor with a markedly dilated, tortuous corkscrew feeding artery and draining vein is a classic board image for VHL retinal capillary hemangioblastoma.',
      'The retinal lesion is frequently the first presenting sign of VHL disease, making the dilated fundus exam an important systemic screening opportunity — identification should trigger referral for full systemic VHL workup.',
      'Early laser or cryotherapy of small lesions prevents progression to exudative retinal detachment; treatment threshold favors early intervention over watchful waiting once a lesion is identified.',
      'Because VHL mortality is driven by CNS hemangioblastoma, renal cell carcinoma, and pheochromocytoma, any patient diagnosed via an ocular finding requires lifelong multidisciplinary systemic surveillance, not ophthalmic follow-up alone.',
      'First-degree relatives of a VHL patient should undergo genetic testing and, if positive or untested, periodic dilated eye exams starting in childhood.',
    ],
    highYield: [
      'VHL disease = autosomal dominant VHL tumor suppressor gene mutation causing HIF/VEGF-driven vascular tumors',
      'Hallmark ocular finding: retinal capillary hemangioblastoma — orange-red tumor with a classic dilated, tortuous "corkscrew" feeding artery and draining vein',
      'Untreated lesions can cause exudation and exudative retinal detachment; laser photocoagulation or cryotherapy are first-line treatments for smaller lesions',
      'The eye finding is often the first presenting sign of VHL disease, making it an important systemic screening trigger',
      'Systemic associations driving mortality: CNS (classically cerebellar) hemangioblastoma, renal cell carcinoma, pheochromocytoma, pancreatic cysts/tumors',
      'Diagnosis requires lifelong multidisciplinary surveillance once established, given the multi-organ tumor risk',
    ],
  },
  {
    id: 'eds-homocystinuria',
    name: 'Ehlers-Danlos Syndrome and Homocystinuria',
    category: 'Systemic Health - Musculoskeletal',
    definition:
      'Two distinct connective tissue/metabolic disorders classically compared alongside Marfan syndrome for their ocular manifestations: Ehlers-Danlos syndrome (EDS) is a group of autosomal dominant or recessive connective tissue disorders caused by defects in collagen synthesis or processing, producing tissue fragility with ocular findings such as blue sclera, keratoconus/keratoglobus, and high risk of globe rupture; homocystinuria is an autosomal recessive metabolic disorder of methionine metabolism (most commonly cystathionine beta-synthase deficiency) that causes ectopia lentis classically displaced inferonasally, in contrast to the superotemporal displacement of Marfan syndrome.',
    affectedStructure:
      'EDS: sclera (thinning), cornea (ectasia in keratoconus/keratoglobus), retina (detachment risk), and globe integrity generally; Homocystinuria: lens zonules (inferonasal ectopia lentis), retinal vasculature (thromboembolic occlusion risk)',
    pathologicalProcess:
      'EDS results from mutations in genes encoding collagen or collagen-processing enzymes (e.g., COL5A1/COL5A2 in classical type, COL3A1 in vascular type), producing structurally weak, fragile connective tissue throughout the body including the sclera, cornea, and vitreous base. Homocystinuria most commonly results from deficiency of cystathionine beta-synthase, impairing conversion of homocysteine to cystathionine; accumulated homocysteine is thought to impair cross-linking of zonular fibrillin/microfibrils (weakening zonular support of the lens) and to promote endothelial damage and a hypercoagulable state that predisposes to arterial and venous thromboembolism, including retinal vascular occlusion.',
    epidemiology: {
      typicalAge: 'EDS: findings often present from childhood/young adulthood; Homocystinuria: ectopia lentis and other features typically become apparent in early-to-mid childhood',
      sexDistribution: 'Both generally equal in males and females (EDS types vary by inheritance pattern; homocystinuria is autosomal recessive)',
      prevalence: 'EDS collectively affects roughly 1 in 5,000 individuals across subtypes (vascular type is rarer, ~1 in 50,000-200,000); classic homocystinuria (CBS deficiency) affects roughly 1 in 200,000-335,000 births, with higher prevalence in some populations (e.g., Ireland)',
      importantPopulations: 'EDS vascular type patients require special precaution given rupture risk; homocystinuria patients often present with a marfanoid body habitus and intellectual disability, prompting comparison to Marfan syndrome',
    },
    riskFactors: [
      { label: 'Autosomal dominant or recessive collagen gene mutation (EDS, subtype-dependent inheritance)', tier: 'major' },
      { label: 'Autosomal recessive cystathionine beta-synthase (CBS) deficiency (homocystinuria)', tier: 'major' },
      { label: 'Family history/consanguinity (homocystinuria, given recessive inheritance)', tier: 'major' },
      { label: 'Vascular (type IV) EDS subtype specifically — highest risk of spontaneous rupture', tier: 'moderate' },
      { label: 'Even minor blunt trauma in EDS given tissue fragility', tier: 'moderate' },
    ],
    pathophysiology: [
      'EDS: defective collagen synthesis, structure, or processing weakens the tensile strength of connective tissue in the sclera, cornea, skin, joints, and blood vessels',
      'EDS: scleral thinning allows the underlying uveal pigment to show through, producing a blue-gray scleral hue; corneal stromal weakness predisposes to progressive ectasia (keratoconus or, less commonly, the more diffuse keratoglobus)',
      'EDS: globally fragile connective tissue markedly increases the risk of retinal detachment and, critically, spontaneous or minor-trauma-induced globe rupture, with the vascular subtype (COL3A1 mutation) carrying the highest risk of catastrophic spontaneous arterial, bowel, or globe/vessel rupture',
      'Homocystinuria: CBS deficiency blocks the transsulfuration pathway, causing accumulation of homocysteine and methionine in blood and urine',
      'Homocystinuria: elevated homocysteine is thought to interfere with normal cross-linking of the fibrillin-containing zonular microfibrils, weakening zonular integrity; unlike the typically symmetric superotemporal zonular weakness pattern in Marfan syndrome, zonular dehiscence in homocystinuria is more diffuse/complete, classically resulting in inferonasal lens displacement',
      'Homocystinuria: homocysteine-mediated vascular endothelial injury and platelet activation create a hypercoagulable state, increasing risk of arterial and venous thromboembolism, including retinal artery or vein occlusion and, systemically, stroke and deep vein thrombosis',
    ],
    symptoms: {
      common: [
        'EDS: joint hypermobility, skin hyperextensibility/fragility bruising easily, blurred vision from keratoconus-related irregular astigmatism',
        'Homocystinuria: blurred vision or monocular diplopia from ectopia lentis, developmental/intellectual delay noted by caregivers',
      ],
      lessCommon: ['EDS: sudden vision loss from retinal detachment or (rarely) spontaneous globe rupture with minimal trauma', 'Homocystinuria: sudden vision loss from retinal vascular occlusion, or systemic thromboembolic event (stroke, DVT/PE)'],
      importantNegatives: ['Homocystinuria patients lack the aortic root dilation/dissection risk classic to true Marfan syndrome, though they can share a similar tall, thin, long-limbed marfanoid habitus'],
      typicalProgression:
        'EDS: corneal ectasia and scleral changes are typically slowly progressive over years; risk of catastrophic rupture is present at any time, even with trivial trauma, in fragile tissue. Homocystinuria: ectopia lentis often develops and progresses through childhood, with cumulative thromboembolic risk increasing with age if untreated.',
    },
    signs: [
      { area: 'External', finding: 'EDS: blue-gray scleral hue from scleral thinning revealing underlying uvea; skin hyperextensibility and easy bruising (systemic)' },
      { area: 'Cornea', finding: 'EDS: keratoconus (localized inferior ectasia/steepening) or keratoglobus (diffuse globular corneal thinning and protrusion), high myopia' },
      { area: 'Other', finding: 'Homocystinuria: ectopia lentis classically displaced INFERONASALLY (opposite the classic SUPEROTEMPORAL displacement of Marfan syndrome); iridodonesis and phacodonesis may be present; homocystinuria patients often have a marfanoid body habitus (tall stature, long limbs, arachnodactyly)' },
      { area: 'Retina', finding: 'EDS: increased risk of lattice degeneration and retinal detachment from vitreoretinal fragility and high myopia; Homocystinuria: risk of retinal arterial or venous occlusion from thromboembolic events' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Marfan syndrome',
        whySimilar: 'Homocystinuria shares a marfanoid body habitus, tall stature, and ectopia lentis with Marfan syndrome, and both are classic board comparisons for lens subluxation',
        keyDistinguisher:
          'Lens displacement direction is the key differentiator — SUPEROTEMPORAL in Marfan syndrome (FBN1/fibrillin-1 defect) versus INFERONASAL in homocystinuria (CBS deficiency); homocystinuria additionally features intellectual disability, thromboembolic risk, and elevated plasma homocysteine/urine homocystine, and lacks the aortic root dilation/dissection risk that defines true Marfan syndrome',
      },
      { disease: 'Weill-Marchesani syndrome', whySimilar: 'Also causes ectopia lentis with connective tissue abnormality', keyDistinguisher: 'Lens is small and spherical (microspherophakia) with short stature and brachydactyly (opposite habitus to the tall, thin homocystinuria/Marfan phenotype); carries high pupillary block glaucoma risk' },
      { disease: 'Osteogenesis imperfecta', whySimilar: 'Also a connective tissue disorder with blue sclera as a classic ocular sign', keyDistinguisher: 'Osteogenesis imperfecta is defined primarily by bone fragility/fractures rather than keratoconus, ectopia lentis, or the globe rupture risk profile of EDS' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp examination with dilation', whyOrdered: 'Assess lens position/zonular integrity in homocystinuria and corneal shape/scleral color in EDS', expectedFinding: 'Homocystinuria: inferonasal lens subluxation, phacodonesis; EDS: blue-tinged sclera, keratoconus/keratoglobus signs (Vogt striae, Fleischer ring, or diffuse thinning)', contribution: 'Establishes the ocular diagnosis and supports the underlying systemic condition' },
      { name: 'Corneal topography/tomography', whyOrdered: 'Detect and stage corneal ectasia in EDS', expectedFinding: 'Inferior steepening (keratoconus) or diffuse globular thinning (keratoglobus)', contribution: 'Guides monitoring and treatment (crosslinking, contact lens fitting)' },
      { name: 'Plasma and urine homocysteine and methionine levels', whyOrdered: 'Confirm biochemical diagnosis of homocystinuria', expectedFinding: 'Markedly elevated plasma homocysteine and urine homocystine, elevated methionine', contribution: 'Confirms diagnosis and helps monitor dietary/medical treatment response' },
      { name: 'Genetic testing (CBS gene for homocystinuria; COL5A1/COL5A2/COL3A1 or other relevant collagen genes for EDS subtype)', whyOrdered: 'Confirm molecular diagnosis and subtype/severity, particularly important for identifying high-risk vascular EDS', expectedFinding: 'Pathogenic CBS mutation (homocystinuria) or pathogenic collagen gene variant (EDS subtype-specific)', contribution: 'Confirms diagnosis, clarifies EDS subtype-specific rupture risk, and guides family counseling' },
      { name: 'Dilated fundus examination', whyOrdered: 'Screen for lattice degeneration/retinal detachment risk (EDS) or retinal vascular occlusion (homocystinuria)', expectedFinding: 'EDS: peripheral lattice degeneration or detachment; Homocystinuria: retinal artery/vein occlusion signs if a thromboembolic event has occurred', contribution: 'Guides prophylactic counseling/treatment and urgent management if occlusion is found' },
    ],
    diagnosis: {
      confirmation:
        'EDS is diagnosed clinically using the international EDS classification criteria (major/minor criteria per subtype), supported by genetic testing of relevant collagen genes when available. Homocystinuria is diagnosed via elevated plasma/urine homocysteine and methionine on metabolic screening (often identified on newborn screening), confirmed with CBS gene testing; the optometrist frequently makes the first identification of ectopia lentis and its direction, prompting urgent systemic/genetic workup to distinguish these conditions from Marfan syndrome.',
      classification: 'EDS: multiple recognized subtypes (classical, hypermobile, vascular, and others) with distinct inheritance patterns and rupture risk; Homocystinuria: classic (CBS deficiency) versus rarer remethylation-defect forms',
    },
    management: [
      { category: 'First-line treatment', detail: 'Homocystinuria: dietary methionine restriction and, in pyridoxine (B6)-responsive cases, high-dose vitamin B6 supplementation under metabolic specialist guidance; refractive correction for lenticular astigmatism/myopia in both conditions' },
      { category: 'Second-line treatment', detail: 'EDS: corneal crosslinking for progressive keratoconus, specialty (RGP/scleral) contact lenses for irregular astigmatism; monitor stable ectopia lentis in homocystinuria if vision is not significantly impaired' },
      { category: 'Advanced treatment', detail: 'Lens extraction with specialized IOL fixation for homocystinuria if subluxation significantly impairs vision or threatens pupillary block; penetrating keratoplasty for advanced keratoglobus/keratoconus in EDS not manageable with contact lenses' },
      { category: 'Referral', detail: 'Refer to genetics/metabolic specialist for homocystinuria confirmation and dietary/medical management; refer to genetics and appropriate specialists (vascular surgery, cardiology) for suspected vascular-type EDS given catastrophic rupture risk; refer to retina specialist for prophylactic evaluation of lattice degeneration (EDS) or urgent management of retinal vascular occlusion (homocystinuria)' },
      { category: 'Emergency management', detail: 'Any suspected globe rupture (even from minor/trivial trauma) in a patient with known or suspected EDS requires emergency ophthalmologic evaluation and shield placement without manipulation; acute retinal vascular occlusion in homocystinuria requires urgent evaluation and consideration of systemic thromboembolic workup' },
    ],
    followUp: {
      typical: 'Annual (or more frequent if unstable) comprehensive dilated eye exams to monitor lens position/corneal shape, refractive error, and peripheral retina in both conditions',
      monitor: 'EDS: corneal curvature/topography, scleral appearance, peripheral retina for lattice/detachment; Homocystinuria: degree of lens subluxation, IOP, and signs of retinal vascular occlusion',
      progression: 'EDS: progressive corneal steepening/thinning or new peripheral retinal findings warrant closer monitoring or referral; Homocystinuria: increasing subluxation or any acute visual change warrants urgent evaluation for vascular occlusion',
      shortenWhen: 'New trauma history (however minor) in EDS given rupture risk; any acute vision change in homocystinuria given thromboembolic risk',
    },
    prognosis: {
      typicalCourse: 'EDS: ocular findings are often slowly progressive (keratoconus) with lifelong elevated risk of globe rupture and retinal detachment from trivial trauma; overall prognosis in vascular EDS is dominated by risk of spontaneous arterial/organ rupture. Homocystinuria: with early diagnosis (often via newborn screening) and dietary/medical treatment, thromboembolic and lens complications can be substantially reduced; untreated disease carries significant morbidity from both ocular and systemic thromboembolic events.',
      progressionRisk: 'EDS: ongoing risk of catastrophic rupture with even minor trauma, particularly in the vascular subtype; risk of progressive corneal ectasia. Homocystinuria: risk of worsening lens subluxation and cumulative thromboembolic events increases without treatment.',
      complications: 'EDS: globe rupture, retinal detachment, corneal perforation in advanced keratoglobus; Homocystinuria: complete lens dislocation, pupillary block glaucoma, retinal vascular occlusion, and systemic thromboembolic events (stroke, myocardial infarction, DVT/PE)',
      visualPrognosis: 'EDS: variable, guarded in advanced keratoconus/keratoglobus or after rupture/detachment; generally good with contact lens management in milder cases. Homocystinuria: generally good with early treatment and monitoring; guarded if a thromboembolic retinal vascular event occurs.',
    },
    clinicalPearls: [
      'The single most tested board comparison in this content area: lens displacement is SUPEROTEMPORAL in Marfan syndrome versus INFERONASAL in homocystinuria — know the direction cold.',
      'A marfanoid body habitus with ectopia lentis does not automatically mean Marfan syndrome — check for intellectual disability and thromboembolic history, and confirm with plasma homocysteine, since homocystinuria lacks the aortic root involvement of true Marfan syndrome.',
      'Vascular (type IV) Ehlers-Danlos syndrome carries the highest risk of spontaneous globe and vessel rupture among EDS subtypes and should be recognized and handled with extreme caution around any ocular manipulation or trauma.',
      'Blue sclera in a patient with joint hypermobility and skin fragility should raise suspicion for Ehlers-Danlos syndrome (also consider osteogenesis imperfecta).',
      'Homocystinuria carries a significant risk of thromboembolic events, including retinal vascular occlusion — this systemic risk, not just the lens finding, should drive urgency of systemic referral.',
    ],
    highYield: [
      'Ehlers-Danlos syndrome: collagen defect causing blue sclera, keratoconus/keratoglobus, and high risk of globe rupture from minor trauma — vascular type carries the highest rupture risk',
      'Homocystinuria: autosomal recessive CBS deficiency causing ectopia lentis displaced INFERONASALLY, opposite the SUPEROTEMPORAL displacement of Marfan syndrome',
      'This directional lens dislocation contrast (Marfan vs. homocystinuria) is one of the most frequently tested NBEO comparisons in this content area',
      'Homocystinuria carries significant thromboembolic risk (including retinal vascular occlusion), unlike Marfan syndrome',
      'Homocystinuria features a marfanoid habitus and intellectual disability but WITHOUT the aortic root dilation/dissection of true Marfan syndrome',
      'EDS ocular findings (blue sclera, keratoconus, detachment/rupture risk) stem from defective collagen synthesis/structure throughout connective tissue',
    ],
  },
]
