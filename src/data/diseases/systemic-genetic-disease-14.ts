import type { Disease } from '../../types/disease'

export const systemicGeneticDisease14: Disease[] = [
  {
    id: 'liver-disease-ocular',
    name: 'Liver Disease: Ocular Manifestations',
    category: 'Systemic Health - Gastrointestinal & Hepatic',
    definition:
      'A spectrum of ocular findings that can accompany hepatic dysfunction, most classically scleral icterus (yellow discoloration of the sclera and conjunctiva from hyperbilirubinemia), along with an increased bleeding tendency from impaired hepatic synthesis of clotting factors in cirrhosis/chronic liver disease and an association between cholestatic liver disease and xanthelasma from secondary hyperlipidemia; certain specific hepatic/metabolic diseases (e.g., Wilson disease) produce their own distinct, named ocular signs.',
    affectedStructure:
      'Sclera and bulbar conjunctiva (bilirubin deposition), conjunctiva and retina (hemorrhage risk from coagulopathy), periorbital skin/eyelids (xanthelasma in cholestatic disease with hyperlipidemia)',
    pathologicalProcess:
      'Impaired hepatic conjugation and/or biliary excretion of bilirubin causes hyperbilirubinemia, and bilirubin preferentially binds elastin-rich tissue such as sclera, producing visible yellow discoloration (icterus); separately, cirrhotic/chronic liver failure reduces hepatic synthesis of clotting factors and can cause thrombocytopenia via portal hypertension and splenic sequestration, increasing bleeding risk in vascular tissues including the conjunctiva and retina; cholestatic liver diseases also frequently produce secondary hyperlipidemia, which can deposit as periocular xanthelasma.',
    epidemiology: {
      typicalAge: 'Any age; reflects the age distribution of the underlying liver disease (viral hepatitis, alcohol-related liver disease, cholestatic disease, cirrhosis of any etiology)',
      prevalence: 'Scleral icterus becomes clinically visible once serum bilirubin exceeds approximately 2-3 mg/dL; a very common finding across many causes of liver dysfunction',
      importantPopulations: 'Patients with acute hepatitis, biliary obstruction, decompensated cirrhosis, or hemolytic conditions causing indirect hyperbilirubinemia',
    },
    riskFactors: [
      { label: 'Acute or chronic hepatitis (viral, alcoholic, autoimmune)', tier: 'major' },
      { label: 'Biliary obstruction (gallstones, stricture, malignancy)', tier: 'major' },
      { label: 'Cirrhosis of any etiology', tier: 'major' },
      { label: 'Hemolytic disorders causing indirect hyperbilirubinemia', tier: 'moderate' },
      { label: 'Alcohol use disorder', tier: 'moderate' },
      { label: 'Coexisting coagulopathy or thrombocytopenia in advanced liver disease', tier: 'associated' },
    ],
    pathophysiology: [
      'Hepatocellular dysfunction or biliary obstruction impairs bilirubin conjugation and/or excretion, raising serum bilirubin',
      'Unconjugated and conjugated bilirubin bind avidly to elastin, which is concentrated in the sclera, producing the yellow hue of scleral icterus before it becomes visible in the skin',
      'Icterus is typically first noticeable in the sclera because the high elastin content and light background make even mild hyperbilirubinemia visible on exam',
      'In cirrhosis, reduced hepatic synthesis of vitamin K-dependent clotting factors and portal hypertension-driven thrombocytopenia (from splenic sequestration) impair hemostasis, increasing risk of spontaneous conjunctival or retinal hemorrhage',
      'Cholestatic liver diseases (e.g., primary biliary cholangitis) impair biliary lipid excretion, raising serum lipids and predisposing to xanthelasma formation at the eyelids',
      'Certain specific hepatic/metabolic diseases produce distinct additional ocular copper or lipid deposition signs (e.g., the Kayser-Fleischer ring of Wilson disease) rather than generic icterus alone',
    ],
    symptoms: {
      common: ['Yellow discoloration of the "whites of the eyes" noticed by patient or others', 'Often asymptomatic ocularly; found on routine or systemic exam', 'Associated systemic symptoms of liver disease: fatigue, pruritus, abdominal swelling, dark urine, pale stools'],
      lessCommon: ['Spontaneous subconjunctival hemorrhage in patients with advanced coagulopathy', 'Visible yellowish eyelid plaques (xanthelasma) if cholestatic hyperlipidemia is present'],
      importantNegatives: ['True scleral icterus is typically painless and does not cause redness, discharge, or visual symptoms by itself'],
      typicalProgression: 'Scleral icterus develops in proportion to rising serum bilirubin and resolves as bilirubin normalizes with treatment of the underlying hepatic condition; bleeding risk and xanthelasma track with the severity/chronicity of the underlying liver disease.',
    },
    signs: [
      { area: 'External', finding: 'Scleral icterus: diffuse yellow discoloration of the sclera, typically most apparent in natural light and often first visible near the limbus; may be subtle in mild hyperbilirubinemia' },
      { area: 'External', finding: 'Xanthelasma: soft, yellowish, well-demarcated plaques on the medial upper and/or lower eyelids, may be seen with cholestatic liver disease and elevated lipids' },
      { area: 'Slit Lamp', finding: 'No corneal or anterior chamber inflammation from icterus itself; conjunctival vessels may show subconjunctival hemorrhage if coagulopathy is present' },
      { area: 'Retina', finding: 'Retinal hemorrhages (flame-shaped or dot-blot) can occur in patients with advanced cirrhosis and severe coagulopathy or thrombocytopenia' },
      { area: 'Other', finding: 'A true Kayser-Fleischer ring (peripheral corneal copper deposition in Descemet membrane) should be specifically looked for in suspected Wilson disease rather than assumed from icterus alone' },
    ],
    differentialDiagnosis: [
      { disease: 'Pinguecula', whySimilar: 'Common yellowish-appearing lesion on the bulbar conjunctiva near the limbus that can be mistaken for icterus, especially in older patients', keyDistinguisher: 'Pinguecula is a discrete, raised, localized yellow-white nodule (typically nasal or temporal interpalpebral conjunctiva) from elastotic degeneration, not a diffuse uniform yellow discoloration of the entire sclera, and serum bilirubin is normal' },
      { disease: 'Pseudopterygium/pterygium with associated conjunctival elastosis', whySimilar: 'Chronic sun-exposed conjunctival tissue can appear yellowed and thickened, mimicking diffuse icterus at a glance', keyDistinguisher: 'Pterygium/pseudopterygium is a discrete, vascularized, wing-shaped fibrovascular lesion typically encroaching onto the cornea from the limbus, distinct in morphology and distribution from the uniform scleral yellowing of true icterus' },
      { disease: 'Carotenemia (excess dietary carotene)', whySimilar: 'Can cause yellow-orange skin discoloration that may raise concern for jaundice', keyDistinguisher: 'Carotenemia spares the sclera (pigment deposits in skin, especially palms/soles, due to high beta-carotene content) whereas true hyperbilirubinemia characteristically discolors the sclera; normal serum bilirubin distinguishes the two' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp/external examination in natural light', whyOrdered: 'Detect and characterize scleral icterus versus mimicking conjunctival lesions', expectedFinding: 'Diffuse yellow scleral discoloration in true icterus versus a discrete localized lesion in pinguecula/pterygium', contribution: 'Distinguishes true hyperbilirubinemia-related icterus from benign conjunctival degenerative lesions' },
      { name: 'Serum total and direct/indirect bilirubin', whyOrdered: 'Confirm and characterize hyperbilirubinemia and help localize the etiology (hepatocellular, cholestatic, or hemolytic)', expectedFinding: 'Elevated total bilirubin, with the conjugated/unconjugated fraction pointing toward the underlying cause', contribution: 'Confirms the systemic cause of visible scleral icterus' },
      { name: 'Liver function panel (AST, ALT, alkaline phosphatase, albumin, INR/PT)', whyOrdered: 'Assess hepatocellular injury, cholestasis, and synthetic function including coagulation status', expectedFinding: 'Pattern varies by etiology; prolonged INR/PT and low albumin suggest impaired synthetic function and bleeding risk', contribution: 'Identifies coagulopathy that explains any associated conjunctival or retinal hemorrhage and guides referral urgency' },
      { name: 'Lipid panel', whyOrdered: 'Evaluate for hyperlipidemia in a patient with xanthelasma and known or suspected cholestatic liver disease', expectedFinding: 'Elevated total cholesterol/LDL, particularly in cholestatic conditions such as primary biliary cholangitis', contribution: 'Supports the lipid-driven mechanism of xanthelasma in this context' },
    ],
    diagnosis: {
      confirmation: 'Scleral icterus is a clinical sign identified on external/slit lamp examination; it is confirmed and its cause established by serum bilirubin and liver function testing performed by the primary care physician or hepatology/gastroenterology, to whom the optometrist should refer any patient with newly noted, unexplained scleral icterus.',
    },
    management: [
      { category: 'Observation', detail: 'Scleral icterus itself requires no ocular treatment; it resolves as the underlying hyperbilirubinemia is treated systemically' },
      { category: 'Referral', detail: 'Refer any patient with new, unexplained scleral icterus to primary care/hepatology/gastroenterology for bilirubin and liver function workup; refer for hematology/hepatology co-management if recurrent conjunctival or retinal hemorrhage suggests significant coagulopathy' },
      { category: 'First-line treatment', detail: 'No topical ocular therapy is indicated for icterus; xanthelasma may be observed or referred to oculoplastics/dermatology for elective removal if cosmetically bothersome, alongside systemic lipid management' },
    ],
    managementProtocol: {
      workup: [
        'External/slit lamp exam in natural daylight to confirm true diffuse scleral icterus and exclude localized mimics (pinguecula, pseudopterygium, carotenemia)',
        'Targeted exam for subconjunctival or retinal hemorrhage if the patient is known to have advanced coagulopathy or thrombocytopenia',
        'Specific slit lamp search for a Kayser-Fleischer ring when Wilson disease is a clinical consideration, rather than attributing all yellow-brown discoloration to icterus alone',
        'Review of the most recent bilirubin, liver function, and coagulation panel results with the referring physician when available',
      ],
      initialTreatment:
        'No topical ocular therapy is indicated for scleral icterus itself — it resolves as the underlying hyperbilirubinemia is treated systemically. Xanthelasma is observed or referred for elective removal if cosmetically bothersome, alongside systemic lipid management; any hemorrhagic ocular finding is managed by addressing the underlying coagulopathy through hepatology.',
      followUpSchedule:
        'No dedicated ocular follow-up interval is required for icterus alone; ophthalmic monitoring is coordinated with the patient\'s hepatology/gastroenterology follow-up, with exams as clinically indicated if conjunctival or retinal hemorrhage has occurred.',
      escalationCriteria: [
        'New or worsening conjunctival or retinal hemorrhage in a patient with known coagulopathy',
        'New visual symptoms accompanying known liver disease',
        'Icterus that persists or worsens despite reported systemic treatment',
        'A slit lamp finding suggesting a specific alternative diagnosis (e.g., a Kayser-Fleischer ring) rather than generic icterus',
      ],
      referralCriteria: [
        'New, unexplained scleral icterus -> primary care/hepatology/gastroenterology for bilirubin and liver function workup',
        'Recurrent conjunctival or retinal hemorrhage suggesting significant coagulopathy -> hematology/hepatology co-management',
        'Cosmetically bothersome xanthelasma -> oculoplastics/dermatology for elective removal, with systemic lipid management',
      ],
      complications: [
        'Recurrent subconjunctival or retinal hemorrhage in advanced hepatic synthetic dysfunction',
        'Xanthelasma recurrence after removal if the underlying lipid abnormality persists',
      ],
      monitoringParameters: [
        'Degree of scleral yellow discoloration relative to known bilirubin trend',
        'Any new conjunctival or retinal hemorrhage in patients with known coagulopathy',
        'Xanthelasma appearance if present',
      ],
      relatedExamTechniqueIds: ['slit-lamp-illumination-techniques', 'dilated-fundus-examination-systematic-approach'],
    },
    followUp: {
      typical: 'No dedicated ocular follow-up interval is required for icterus alone; monitoring is coordinated with the patient\'s systemic/hepatology care team',
      monitor: 'Resolution of scleral yellow discoloration as bilirubin normalizes; any new conjunctival or retinal hemorrhage in patients with known coagulopathy',
      progression: 'Persistent or worsening icterus despite treatment should be communicated back to the managing physician',
      shortenWhen: 'New retinal hemorrhage, vision changes, or signs suggesting an unrelated specific hepatic/metabolic diagnosis (e.g., a Kayser-Fleischer ring) are noted',
    },
    prognosis: {
      typicalCourse: 'Scleral icterus resolves fully once the underlying hyperbilirubinemia is treated; it leaves no permanent ocular sequelae',
      progressionRisk: 'No independent ocular progression risk from icterus itself; risk of hemorrhagic complications tracks with the severity of underlying hepatic synthetic dysfunction',
      complications: 'Recurrent subconjunctival or retinal hemorrhage in advanced coagulopathy; xanthelasma is cosmetic and non-vision-threatening but can recur after removal if underlying lipid abnormalities persist',
      visualPrognosis: 'Excellent; scleral icterus itself does not affect vision, and any hemorrhagic ocular findings typically resolve once the underlying coagulopathy is corrected',
    },
    clinicalPearls: [
      'Examine the sclera in natural daylight when hyperbilirubinemia is suspected — fluorescent exam lighting can mask subtle icterus.',
      'Do not confuse a discrete, raised, localized yellow conjunctival lesion (pinguecula or pseudopterygium) with true diffuse scleral icterus — morphology and distribution are the key distinguishers.',
      'New, unexplained scleral icterus in a patient without a known liver diagnosis warrants prompt referral for bilirubin and liver function testing.',
      'Wilson disease has its own specific, named corneal sign (the Kayser-Fleischer ring) that is distinct from and should not be conflated with generic icteric scleral yellowing.',
      'Xanthelasma is associated with hyperlipidemia broadly, including the hyperlipidemia seen in cholestatic liver disease, but is not itself diagnostic of liver disease.',
    ],
    highYield: [
      'Scleral icterus = yellow scleral discoloration from hyperbilirubinemia; becomes visible around serum bilirubin >2-3 mg/dL',
      'Distinguish scleral icterus (diffuse, uniform) from pinguecula/pseudopterygium (discrete, localized, raised lesions) — a classic exam distinction',
      'Cirrhosis/chronic liver disease impairs clotting factor synthesis and causes thrombocytopenia via portal hypertension, increasing conjunctival/retinal hemorrhage risk',
      'Xanthelasma can be associated with cholestatic liver disease and elevated lipids, though it is not liver-disease-specific',
      'Wilson disease produces its own distinct ocular sign, the Kayser-Fleischer ring (copper in Descemet membrane) — a separate, specific finding, not generic icterus',
      'New unexplained scleral icterus should prompt referral for systemic bilirubin/liver function workup',
    ],
  },
  {
    id: 'nutritional-deficiency-ocular',
    name: 'Nutritional Deficiency Syndromes: Thiamine, Vitamin E, and Zinc',
    aliases: ['Thiamine Deficiency', 'Vitamin E Deficiency', 'Zinc Deficiency', 'Wernicke Encephalopathy'],
    category: 'Systemic Health - Nutritional',
    definition:
      'Three distinct micronutrient deficiencies with characteristic ocular findings: thiamine (vitamin B1) deficiency causing Wernicke encephalopathy, a neuro-ophthalmic emergency presenting with the classic triad of confusion, ataxia, and ophthalmoplegia/nystagmus; vitamin E deficiency, typically from chronic fat malabsorption, causing a pigmentary retinopathy resembling retinitis pigmentosa along with ataxia and peripheral neuropathy; and zinc deficiency, which impairs vitamin A metabolism and causes night blindness that persists despite vitamin A supplementation alone unless zinc is also corrected. This entry is distinct from vitamin A deficiency and from B12/folate-related toxic and nutritional optic neuropathy, covered separately in this library.',
    affectedStructure:
      'Thiamine: cranial nerve VI (lateral rectus) and vestibulo-ocular pathways (ophthalmoplegia, nystagmus); Vitamin E: retinal photoreceptors and RPE (pigmentary retinopathy); Zinc: retinal rod photoreceptor function via impaired hepatic retinol-binding protein synthesis (functional vitamin A deficiency)',
    pathologicalProcess:
      'Thiamine is a cofactor for several enzymes in glucose metabolism; deficiency causes energy failure and cytotoxic edema in metabolically vulnerable brainstem/diencephalic structures (mammillary bodies, periaqueductal gray, cranial nerve nuclei), producing the ophthalmoplegia, nystagmus, ataxia, and confusion of Wernicke encephalopathy. Vitamin E is a lipid-soluble antioxidant that protects photoreceptor outer segment membranes from oxidative damage; chronic deficiency (nearly always from fat malabsorption rather than dietary insufficiency alone) allows oxidative photoreceptor injury, producing a diffuse pigmentary retinopathy alongside spinocerebellar degeneration. Zinc is an essential cofactor for hepatic synthesis of retinol-binding protein, which is required to mobilize and transport vitamin A (retinol) from liver stores to peripheral tissues including the retina; zinc deficiency therefore produces a functional vitamin A deficiency and night blindness even when total body vitamin A stores are adequate.',
    epidemiology: {
      typicalAge: 'Any age; risk determined by the causative condition (alcoholism, malabsorption, bariatric surgery, malnutrition) rather than age itself',
      prevalence: 'Wernicke encephalopathy is classically underdiagnosed; historically estimated in a meaningful minority of chronic alcoholics at autopsy series, though clinically recognized far less often',
      importantPopulations: 'Thiamine: chronic alcohol use disorder, hyperemesis gravidarum, bariatric surgery, prolonged parenteral nutrition without supplementation; Vitamin E: cystic fibrosis, abetalipoproteinemia, chronic cholestatic liver disease, other fat malabsorption syndromes; Zinc: malnutrition, malabsorption (Crohn disease, short bowel syndrome), alcoholism, sickle cell disease, acrodermatitis enteropathica',
    },
    riskFactors: [
      { label: 'Chronic alcohol use disorder (thiamine)', tier: 'major' },
      { label: 'Bariatric surgery or prolonged unsupplemented parenteral nutrition (thiamine)', tier: 'major' },
      { label: 'Chronic fat malabsorption: cystic fibrosis, abetalipoproteinemia, cholestatic liver disease (vitamin E)', tier: 'major' },
      { label: 'Malnutrition, malabsorptive GI disease, or alcoholism (zinc)', tier: 'major' },
      { label: 'Hyperemesis gravidarum (thiamine)', tier: 'moderate' },
      { label: 'Restrictive diets or eating disorders (all three)', tier: 'moderate' },
      { label: 'Sickle cell disease (zinc)', tier: 'associated' },
    ],
    pathophysiology: [
      'Thiamine deficiency impairs pyruvate dehydrogenase and other thiamine-dependent enzymes central to cerebral glucose metabolism, causing preferential injury to metabolically active, glucose-dependent brainstem/diencephalic structures',
      'Acute thiamine deficiency, especially if precipitated by glucose administration without thiamine repletion, produces the Wernicke encephalopathy triad: confusion, gait ataxia, and ophthalmoplegia with nystagmus; the abducens (CN VI)/lateral rectus is classically affected first, producing horizontal diplopia, and gaze-evoked nystagmus is common',
      'Untreated Wernicke encephalopathy can progress to irreversible Korsakoff amnestic syndrome, underscoring the urgency of immediate thiamine repletion',
      'Vitamin E deficiency, almost always from a chronic fat malabsorption state rather than diet alone, removes a key antioxidant protecting photoreceptor outer segment lipid membranes, leading to progressive rod-predominant photoreceptor degeneration that mimics retinitis pigmentosa on exam',
      'Concurrent spinocerebellar tract degeneration from vitamin E deficiency produces ataxia and peripheral neuropathy alongside the retinopathy',
      'Zinc is required for hepatic synthesis of retinol-binding protein; without adequate zinc, vitamin A cannot be effectively mobilized from hepatic stores and delivered to the retina, producing night blindness that mimics true vitamin A deficiency',
      'Because the defect is in vitamin A transport rather than total body vitamin A stores, night blindness from zinc deficiency will not fully resolve with vitamin A supplementation alone unless zinc deficiency is also corrected',
    ],
    symptoms: {
      common: ['Thiamine: acute confusion, unsteady gait, double vision', 'Vitamin E: progressive night blindness and peripheral visual field loss, unsteady gait/clumsiness', 'Zinc: night blindness that fails to improve with vitamin A supplementation alone', 'History of alcoholism, malabsorption, bariatric surgery, or malnutrition in the corresponding deficiency'],
      lessCommon: ['Thiamine: hearing changes, hypothermia, or cardiovascular instability (wet beriberi) in severe cases', 'Vitamin E: decreased visual acuity or color vision changes as retinopathy advances', 'Zinc: dermatitis, poor wound healing, and altered taste (hypogeusia) as associated systemic clues'],
      importantNegatives: ['Wernicke encephalopathy can present without the full classic triad, so a high index of suspicion is required in at-risk patients even with only one or two features present', 'Night blindness that does not respond to vitamin A alone should prompt consideration of coexisting zinc deficiency rather than assuming vitamin A resistance'],
      typicalProgression: 'Wernicke encephalopathy develops acutely over days and is a medical emergency; vitamin E retinopathy develops insidiously over years of chronic malabsorption; zinc-related night blindness develops gradually and improves once zinc (with vitamin A) is repleted.',
    },
    signs: [
      { area: 'Other', finding: 'Thiamine: ophthalmoplegia (classically lateral rectus/CN VI palsy causing horizontal diplopia and esotropia in primary gaze) with gaze-evoked or spontaneous horizontal nystagmus; can progress to complete external ophthalmoplegia if untreated' },
      { area: 'Retina', finding: 'Vitamin E: diffuse pigmentary retinopathy with bone-spicule-like or granular pigment clumping, retinal vessel attenuation, and waxy optic disc pallor resembling retinitis pigmentosa' },
      { area: 'Other', finding: 'Vitamin E: reduced dark adaptation and peripheral visual field constriction correlating with photoreceptor degeneration' },
      { area: 'Other', finding: 'Zinc: reduced dark adaptation/night blindness without a distinct structural retinal lesion; fundus may appear normal or show mild pigmentary mottling' },
      { area: 'Other', finding: 'All three: findings should be interpreted alongside systemic exam for gait ataxia, peripheral neuropathy, or mental status changes as appropriate to the specific deficiency' },
    ],
    differentialDiagnosis: [
      { disease: 'Retinitis pigmentosa (primary inherited)', whySimilar: 'Vitamin E deficiency retinopathy closely mimics the pigmentary retinopathy, night blindness, and field loss of primary RP', keyDistinguisher: 'History of chronic fat malabsorption (cystic fibrosis, abetalipoproteinemia, cholestatic disease) and low serum vitamin E level, versus a family history and genetic pattern in primary RP; vitamin E deficiency retinopathy can improve or stabilize with repletion, unlike inherited RP' },
      { disease: 'Vitamin A deficiency (isolated)', whySimilar: 'Both zinc deficiency and vitamin A deficiency cause night blindness via the same retinoid visual cycle pathway', keyDistinguisher: 'Zinc deficiency causes a functional vitamin A deficiency by impairing retinol-binding protein synthesis; night blindness from zinc deficiency fails to fully correct with vitamin A supplementation alone, whereas isolated vitamin A deficiency responds directly to vitamin A repletion' },
      { disease: 'Other causes of acute ophthalmoplegia and confusion (e.g., brainstem stroke, myasthenic crisis)', whySimilar: 'Both can present with acute diplopia/ophthalmoplegia and altered mental status', keyDistinguisher: 'A history of alcoholism, malnutrition, or recent bariatric surgery with rapid improvement following thiamine administration supports Wernicke encephalopathy; stroke typically shows focal neuroimaging findings and myasthenic crisis shows fatigable weakness without the confusion/ataxia triad' },
    ],
    diagnosticTesting: [
      { name: 'Clinical diagnosis and empiric thiamine trial (Wernicke encephalopathy)', whyOrdered: 'Wernicke encephalopathy is a clinical diagnosis; treatment should never be delayed for laboratory confirmation', expectedFinding: 'Rapid improvement in ophthalmoplegia/nystagmus and mental status within hours to days of thiamine administration', contribution: 'Confirms the diagnosis retrospectively and prevents progression to irreversible Korsakoff syndrome' },
      { name: 'Serum thiamine (or erythrocyte transketolase activity) level', whyOrdered: 'Supportive laboratory confirmation, obtained without delaying treatment', expectedFinding: 'Low thiamine level or reduced transketolase activity', contribution: 'Supports the diagnosis but should not delay emergency repletion' },
      { name: 'Serum vitamin E level', whyOrdered: 'Confirm vitamin E deficiency in a patient with pigmentary retinopathy and a malabsorptive risk factor', expectedFinding: 'Low serum vitamin E (alpha-tocopherol)', contribution: 'Confirms the etiology of the retinopathy and distinguishes it from inherited RP' },
      { name: 'Serum zinc level', whyOrdered: 'Evaluate for zinc deficiency in a patient with night blindness unresponsive to vitamin A alone', expectedFinding: 'Low serum zinc', contribution: 'Identifies the correctable cause of persistent night blindness' },
      { name: 'Electroretinogram (ERG)', whyOrdered: 'Objectively quantify rod (and cone) photoreceptor dysfunction in vitamin E or zinc-related night blindness', expectedFinding: 'Reduced or delayed rod-mediated (scotopic) responses, which can improve with repletion', contribution: 'Documents severity and can help track treatment response over time' },
    ],
    diagnosis: {
      confirmation: 'Wernicke encephalopathy is a clinical emergency diagnosis based on the triad (or a subset) of confusion, ataxia, and ophthalmoplegia/nystagmus in an at-risk patient, treated immediately without waiting for labs; vitamin E and zinc deficiency are confirmed by serum micronutrient levels correlated with the corresponding retinal/visual findings and an identified predisposing condition (malabsorption, malnutrition).',
      classification: 'Distinguish from vitamin A deficiency (separate entry in this library, primary retinoid deficiency) and from toxic/nutritional optic neuropathy (separate entry, typically related to B12/folate and toxin exposure with optic nerve rather than photoreceptor pathology)',
    },
    management: [
      { category: 'Emergency management', detail: 'Suspected Wernicke encephalopathy requires immediate parenteral thiamine repletion before or with any glucose administration (glucose given first can precipitate or worsen Wernicke encephalopathy by consuming remaining thiamine stores); this is a medical emergency requiring urgent hospital-based treatment, not an outpatient ocular management issue' },
      { category: 'Referral', detail: 'Immediate emergency department/hospital referral for any patient with suspected Wernicke encephalopathy (acute confusion, ataxia, ophthalmoplegia/nystagmus in an at-risk patient); refer to gastroenterology/primary care for identification and management of the underlying malabsorptive or nutritional cause of vitamin E or zinc deficiency' },
      { category: 'First-line treatment', detail: 'Oral or parenteral vitamin E repletion (dosed and monitored by the treating physician) for vitamin E deficiency retinopathy; oral zinc supplementation, generally combined with vitamin A, for zinc-deficiency-related night blindness so both the vitamin A transport defect and any coexisting vitamin A deficiency are addressed' },
      { category: 'Observation', detail: 'Serial ocular exams (fundus appearance, dark adaptation, visual fields) to document stabilization or improvement of vitamin E or zinc-related retinal findings once systemic repletion is underway' },
    ],
    managementProtocol: {
      workup: [
        'Wernicke encephalopathy: no ocular workup should delay treatment — document ocular motility, nystagmus type, and pupil findings only as part of the emergency evaluation',
        'Vitamin E/zinc deficiency: baseline ERG and, where available, Goldmann or automated visual field testing to document the severity of rod-mediated dysfunction before repletion',
        'Fundus photography for serial comparison of pigmentary changes in vitamin E deficiency',
        'Confirm the malabsorptive or nutritional risk factor (alcohol use, bariatric surgery, cystic fibrosis, other malabsorption) with the patient\'s history to target the correct deficiency workup',
      ],
      initialTreatment:
        'Wernicke encephalopathy is an emergency managed by the treating hospital team with immediate parenteral thiamine, given before or with any glucose administration — this is not an outpatient ocular management issue. Vitamin E deficiency retinopathy is treated with physician-dosed oral or parenteral vitamin E repletion; zinc-deficiency night blindness is treated with oral zinc supplementation generally combined with vitamin A, since correcting zinc alone addresses the retinol-binding protein defect while vitamin A repletes any coexisting deficiency.',
      followUpSchedule:
        'After Wernicke encephalopathy: outpatient ophthalmic follow-up for any residual ophthalmoplegia/nystagmus following hospital discharge. Vitamin E/zinc deficiency: every 6-12 months to monitor retinal status, visual fields, and night vision while systemic repletion continues.',
      escalationCriteria: [
        'Any new confusion, ataxia, or ophthalmoplegia/nystagmus in an at-risk patient -> same-day emergency evaluation, not routine follow-up',
        'Persistent ophthalmoplegia beyond the expected days-to-weeks recovery window after thiamine repletion',
        'Progressive visual field constriction or worsening ERG amplitude despite vitamin E repletion',
        'Night blindness that fails to improve despite adequate vitamin A supplementation, suggesting undiagnosed or undertreated zinc deficiency',
      ],
      referralCriteria: [
        'Suspected Wernicke encephalopathy -> immediate emergency department/hospital referral',
        'Confirmed vitamin E or zinc deficiency -> gastroenterology/primary care to identify and manage the underlying malabsorptive or nutritional cause',
        'Pigmentary retinopathy of uncertain etiology -> retina specialist for ERG and consideration of inherited retinal dystrophy in the differential',
      ],
      complications: [
        'Korsakoff amnestic syndrome from delayed or inadequate thiamine repletion',
        'Progressive, potentially only partially reversible photoreceptor damage from prolonged vitamin E deficiency',
        'Persistent functional night blindness if zinc deficiency is not corrected alongside vitamin A',
      ],
      monitoringParameters: [
        'Resolution of ophthalmoplegia/nystagmus after thiamine repletion',
        'ERG amplitude and visual field extent (vitamin E)',
        'Dark adaptation/night vision symptoms (vitamin E, zinc)',
        'Fundus pigmentary appearance on serial photography',
      ],
      relatedExamTechniqueIds: ['extraocular-motility-testing', 'nystagmus-characterization-assessment', 'electroretinogram'],
    },
    followUp: {
      typical: 'Wernicke encephalopathy: managed acutely in the hospital setting, with outpatient ophthalmic follow-up for any residual ophthalmoplegia/nystagmus after discharge; Vitamin E/zinc deficiency: periodic exams (every 6-12 months) to monitor retinal status and night vision as systemic repletion continues',
      monitor: 'Resolution of ophthalmoplegia/nystagmus (thiamine); fundus appearance, visual fields, and dark adaptation (vitamin E, zinc)',
      progression: 'Persistent ophthalmoplegia despite treatment may reflect delayed diagnosis or Korsakoff progression; lack of improvement in night blindness despite vitamin A alone should prompt zinc level testing if not already done',
      shortenWhen: 'Any new or worsening neuro-ophthalmic finding in an at-risk patient should prompt urgent same-day evaluation rather than routine follow-up',
    },
    prognosis: {
      typicalCourse: 'Wernicke encephalopathy ophthalmoplegia/nystagmus typically improves rapidly (hours to days) with prompt thiamine repletion, though confusion and ataxia may take longer to resolve; vitamin E and zinc deficiency findings often stabilize or partially improve with sustained repletion but chronic photoreceptor damage from long-standing vitamin E deficiency may be only partially reversible',
      progressionRisk: 'Untreated or delayed-treatment Wernicke encephalopathy carries a significant risk of progression to irreversible Korsakoff amnestic syndrome; untreated vitamin E deficiency retinopathy can progress to severe, potentially irreversible vision loss',
      complications: 'Korsakoff syndrome (thiamine), progressive vision loss from photoreceptor degeneration (vitamin E), persistent functional night blindness despite vitamin A therapy alone (zinc)',
      visualPrognosis: 'Good for ophthalmoplegia/nystagmus with prompt thiamine treatment; variable for vitamin E retinopathy depending on duration/severity of deficiency before treatment; good for zinc-related night blindness once zinc is corrected',
    },
    clinicalPearls: [
      'Wernicke encephalopathy is a true ocular/neurologic emergency — any at-risk patient (alcoholism, bariatric surgery, malnutrition, hyperemesis) with new confusion, ataxia, or ophthalmoplegia/nystagmus needs immediate thiamine, not a wait-and-see approach.',
      'Give thiamine before or with glucose in a patient at risk for Wernicke encephalopathy — glucose-first can precipitate or worsen the syndrome.',
      'The classic triad of Wernicke encephalopathy is often incomplete; do not require all three components before treating.',
      'Vitamin E deficiency retinopathy is a treatable mimic of retinitis pigmentosa — always ask about malabsorptive conditions (cystic fibrosis, cholestatic liver disease, abetalipoproteinemia) in an atypical or late-onset pigmentary retinopathy.',
      'If night blindness persists despite adequate vitamin A supplementation, check zinc — vitamin A cannot be mobilized from the liver without zinc-dependent retinol-binding protein synthesis.',
      'This entry is distinct from isolated vitamin A deficiency and from B12/folate-related toxic and nutritional optic neuropathy, both covered separately in this library.',
    ],
    highYield: [
      'Wernicke encephalopathy triad: confusion, ataxia, ophthalmoplegia/nystagmus — from thiamine (B1) deficiency, classically in alcoholism or after bariatric surgery',
      'Lateral rectus/CN VI is classically affected first in Wernicke ophthalmoplegia, with gaze-evoked nystagmus also common',
      'Wernicke encephalopathy requires immediate thiamine repletion (before/with glucose) — this is a medical emergency',
      'Vitamin E deficiency (from fat malabsorption) causes a pigmentary retinopathy resembling retinitis pigmentosa plus ataxia and peripheral neuropathy',
      'Zinc is a cofactor for retinol-binding protein synthesis; zinc deficiency impairs vitamin A transport, causing night blindness that will not fully correct with vitamin A alone',
      'Untreated Wernicke encephalopathy can progress to irreversible Korsakoff amnestic syndrome',
    ],
  },
  {
    id: 'ocular-rosacea',
    name: 'Ocular Rosacea',
    category: 'Systemic Health - Dermatologic',
    definition:
      'A chronic inflammatory ocular surface and eyelid condition occurring as a manifestation of rosacea, a common chronic inflammatory skin disorder, characterized by blepharitis, marked meibomian gland dysfunction, recurrent chalazia, and conjunctival hyperemia, with severe cases progressing to rosacea keratitis involving peripheral corneal infiltrates, vascularization, and thinning that can threaten vision; ocular involvement can occur with or without prominent facial cutaneous findings.',
    affectedStructure: 'Eyelid margin and meibomian glands (chronic posterior blepharitis, MGD), conjunctiva (hyperemia), cornea (peripheral infiltrates, vascularization, thinning in rosacea keratitis)',
    pathologicalProcess:
      'Rosacea produces chronic inflammatory dysregulation of the pilosebaceous units and cutaneous/meibomian glandular tissue, with abnormal meibomian gland secretions, bacterial lipase activity, and elevated inflammatory mediators (including matrix metalloproteinases) on the ocular surface and eyelid margin, leading to chronic posterior blepharitis, tear film instability, and, in more severe or longstanding disease, immune-mediated peripheral corneal infiltration and stromal thinning.',
    epidemiology: {
      typicalAge: 'Typically 30-60 years, though can occur at any age',
      sexDistribution: 'Rosacea overall is more common in women, though ocular involvement and severe complications can occur in either sex and may be more severe in men',
      prevalence: 'Ocular involvement is common among patients with rosacea; a substantial proportion of rosacea patients have some degree of ocular findings, and ocular symptoms may precede cutaneous findings in a meaningful minority',
      importantPopulations: 'Fair-skinned individuals, patients with a known rosacea diagnosis or facial flushing history, adults with chronic treatment-resistant blepharitis/dry eye',
    },
    riskFactors: [
      { label: 'Diagnosed cutaneous rosacea', tier: 'major' },
      { label: 'Fair skin/Fitzpatrick I-II skin type', tier: 'moderate' },
      { label: 'Family history of rosacea', tier: 'moderate' },
      { label: 'Triggers that exacerbate rosacea flares: sun exposure, alcohol, spicy foods, heat, stress', tier: 'associated' },
      { label: 'Coexisting Demodex mite overpopulation of the lash follicles/meibomian glands', tier: 'associated' },
    ],
    pathophysiology: [
      'Rosacea causes chronic dysregulation of innate immune and vascular responses in facial skin and periocular tissue, with abnormal cathelicidin peptide processing and neurovascular hyperreactivity contributing to erythema and telangiectasias',
      'The same inflammatory process affects the meibomian glands and eyelid margin, producing gland dropout, abnormal (thickened, turbid) meibum, and chronic posterior blepharitis',
      'Poor-quality meibum destabilizes the tear film lipid layer, causing evaporative dry eye and chronic ocular surface inflammation',
      'Recurrent meibomian gland obstruction and inflammation predispose to recurrent chalazia',
      'In more severe or chronic disease, inflammatory mediators (including matrix metalloproteinase-9) and possibly Demodex-associated bacterial antigens drive peripheral corneal infiltration, neovascularization, and stromal thinning (rosacea keratitis), which can threaten vision if untreated',
      'Ocular findings can precede, follow, or occur independently of the severity of cutaneous facial findings, making the diagnosis easy to miss when skin findings are subtle',
    ],
    symptoms: {
      common: ['Chronic ocular irritation, burning, foreign body sensation', 'Recurrent redness of the lids and conjunctiva', 'Fluctuating blurred vision from tear film instability', 'Recurrent eyelid bumps/styes (chalazia)', 'Facial flushing, visible facial redness or "broken blood vessels" in many but not all patients'],
      lessCommon: ['Photophobia and pain if rosacea keratitis with corneal involvement is present', 'Rhinophyma (thickened, bulbous nasal skin) in severe long-standing cutaneous rosacea'],
      importantNegatives: ['Ocular rosacea can occur without significant facial skin findings, so a normal-appearing face does not exclude the diagnosis', 'True corneal thinning/melting is uncommon but represents the vision-threatening end of the spectrum and should not be missed'],
      typicalProgression: 'Chronic, relapsing-remitting course of blepharitis/MGD and conjunctival findings over years; a subset of patients develop progressive peripheral corneal disease if inflammation is not adequately controlled.',
    },
    signs: [
      { area: 'External', finding: 'Facial erythema, telangiectasias, papules/pustules over the cheeks/nose/forehead (may be absent or subtle); rhinophyma in severe cutaneous disease' },
      { area: 'External', finding: 'Lid margin telangiectasias, chronic blepharitis, recurrent or multiple chalazia' },
      { area: 'Slit Lamp', finding: 'Meibomian gland dysfunction with thickened/turbid meibum expression, capped or plugged gland orifices, reduced tear breakup time, conjunctival hyperemia' },
      { area: 'Cornea', finding: 'In rosacea keratitis: peripheral (inferior predominant) corneal infiltrates, superficial or deep neovascularization, and in severe cases stromal thinning that can progress toward perforation if untreated' },
    ],
    differentialDiagnosis: [
      { disease: 'Staphylococcal (non-rosacea) blepharitis', whySimilar: 'Overlapping lid margin inflammation, crusting, and recurrent chalazia', keyDistinguisher: 'Ocular rosacea is associated with facial cutaneous findings (erythema, telangiectasias, flushing) and tends to show more prominent meibomian gland dysfunction and lid margin telangiectasias; staphylococcal blepharitis more typically shows collarettes at the lash base without facial skin involvement' },
      { disease: 'Seborrheic dermatitis/blepharitis', whySimilar: 'Chronic lid margin inflammation and greasy scaling', keyDistinguisher: 'Seborrheic dermatitis is associated with scalp/eyebrow flaking and greasy scale rather than facial flushing/telangiectasia, and typically lacks the papulopustular facial lesions of rosacea' },
      { disease: 'Peripheral ulcerative keratitis from a systemic autoimmune disease (e.g., rheumatoid arthritis)', whySimilar: 'Both cause peripheral corneal thinning/infiltration', keyDistinguisher: 'Autoimmune PUK is typically associated with an established systemic connective tissue/vasculitic disease and systemic serologic markers, whereas rosacea keratitis occurs in the context of known or newly recognized facial/ocular rosacea and responds to tetracycline-class therapy' },
    ],
    diagnosticTesting: [
      { name: 'External/facial examination', whyOrdered: 'Look for characteristic cutaneous rosacea findings supporting the diagnosis', expectedFinding: 'Facial erythema, telangiectasias, papules/pustules, or rhinophyma, though may be absent', contribution: 'Supports the diagnosis when present; absence does not rule out ocular rosacea' },
      { name: 'Slit lamp examination of the lid margin and meibomian glands', whyOrdered: 'Assess severity of blepharitis/MGD and look for lid telangiectasias', expectedFinding: 'Gland plugging, abnormal meibum quality, lid margin telangiectasias', contribution: 'Establishes the ocular surface disease severity and guides treatment intensity' },
      { name: 'Corneal examination for peripheral infiltrates/thinning', whyOrdered: 'Detect rosacea keratitis, the vision-threatening manifestation', expectedFinding: 'Peripheral (often inferior) infiltrates, neovascularization, or thinning if present', contribution: 'Identifies patients needing more aggressive systemic anti-inflammatory therapy and closer monitoring' },
      { name: 'Tear breakup time and ocular surface staining', whyOrdered: 'Quantify tear film instability and surface damage from MGD-related evaporative dry eye', expectedFinding: 'Rapid tear breakup time, punctate staining', contribution: 'Documents severity and treatment response over time' },
    ],
    diagnosis: {
      confirmation: 'Diagnosis is clinical, based on the combination of chronic blepharitis/MGD with recurrent chalazia and conjunctival hyperemia, often but not always accompanied by characteristic facial cutaneous findings; dermatology co-management can help confirm cutaneous rosacea when facial findings are present or diagnostically uncertain.',
      classification: 'Mild-moderate (blepharitis/MGD, conjunctival findings) versus severe (rosacea keratitis with corneal infiltrates, vascularization, or thinning)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Lid hygiene with warm compresses and lid margin cleansing, similar to standard blepharitis management, plus preservative-free artificial tears for associated evaporative dry eye' },
      { category: 'Second-line treatment', detail: 'Systemic tetracycline-class antibiotics (e.g., doxycycline) used at low, sub-antimicrobial anti-inflammatory dosing for moderate-to-severe blepharitis/MGD or any corneal involvement; topical azithromycin or topical cyclosporine may be used as adjuncts for meibomian gland inflammation' },
      { category: 'Advanced treatment', detail: 'More intensive systemic anti-inflammatory therapy and closer monitoring for rosacea keratitis with progressive corneal thinning or vision-threatening involvement' },
      { category: 'Referral', detail: 'Refer to dermatology for confirmation and management of cutaneous rosacea and for systemic tetracycline-class therapy coordination; refer to cornea specialist for rosacea keratitis with significant corneal infiltration, vascularization, or thinning' },
      { category: 'Emergency management', detail: 'Rapidly progressive corneal thinning or impending perforation from severe rosacea keratitis requires urgent cornea specialist evaluation' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp grading of lid margin telangiectasias, meibomian gland dropout, and meibum quality to establish a baseline before starting therapy',
        'Tear breakup time and ocular surface staining to quantify evaporative dry eye severity',
        'Careful peripheral corneal exam specifically for infiltrates, vascularization, or thinning, since this determines whether systemic anti-inflammatory therapy is needed',
        'External/facial exam for supporting cutaneous findings, understanding that their absence does not exclude the diagnosis',
      ],
      initialTreatment:
        'Warm compresses and lid margin hygiene plus preservative-free artificial tears are first-line for blepharitis/MGD and associated evaporative dry eye. Moderate-to-severe MGD/blepharitis, or any corneal involvement, adds low-dose doxycycline for its anti-inflammatory (not antimicrobial) effect, with topical azithromycin or topical cyclosporine as adjuncts for meibomian gland inflammation.',
      followUpSchedule:
        'Every 3-6 months to reassess lid margin/meibomian gland status and ocular surface disease severity; shorten to weeks rather than months whenever corneal involvement is present or systemic therapy is being escalated.',
      escalationCriteria: [
        'New peripheral corneal infiltrate, vascularization, or thinning on exam',
        'Symptoms or signs that do not improve after an adequate trial (roughly 6-8 weeks) of lid hygiene plus low-dose doxycycline',
        'Recurrent chalazia unresponsive to conservative management',
        'New pain or photophobia suggesting evolving rosacea keratitis',
      ],
      referralCriteria: [
        'Facial findings present or diagnostic uncertainty -> dermatology for confirmation and coordination of systemic tetracycline-class therapy',
        'Corneal infiltration, vascularization, or thinning -> cornea specialist',
        'Rapidly progressive corneal thinning or impending perforation -> urgent cornea specialist evaluation',
      ],
      complications: [
        'Recurrent chalazia',
        'Chronic evaporative dry eye/ocular surface disease',
        'Corneal vascularization and scarring from rosacea keratitis',
        'Rarely, corneal thinning progressing toward perforation in undertreated severe disease',
      ],
      monitoringParameters: [
        'Lid margin and meibomian gland appearance',
        'Tear breakup time and ocular surface staining',
        'Corneal status for infiltrates, vascularization, or thinning',
        'Frequency/recurrence of chalazia',
      ],
      relatedDrugIds: ['doxycycline', 'azithromycin-ophthalmic', 'cyclosporine-ophthalmic-emulsion'],
      relatedExamTechniqueIds: ['meibomian-gland-evaluation', 'tear-break-up-time', 'lid-margin-blepharitis-assessment'],
    },
    followUp: {
      typical: 'Every 3-6 months to monitor lid margin/meibomian gland status and ocular surface disease severity; more frequent if corneal involvement is present or treatment is being escalated',
      monitor: 'Lid margin and meibomian gland appearance, tear film stability, conjunctival hyperemia, and corneal status (infiltrates, vascularization, thinning)',
      progression: 'New or worsening peripheral corneal infiltrates, vascularization, or thinning indicate progression to rosacea keratitis and require treatment escalation',
      shortenWhen: 'New corneal infiltrates, vascularization, pain, or photophobia suggesting rosacea keratitis',
    },
    prognosis: {
      typicalCourse: 'Chronic, relapsing-remitting condition generally well controlled with consistent lid hygiene and, when needed, systemic tetracycline-class therapy',
      progressionRisk: 'Risk of progression to rosacea keratitis in undertreated or severe chronic disease',
      complications: 'Recurrent chalazia, chronic dry eye/ocular surface disease, and in severe cases corneal vascularization, scarring, thinning, or (rarely) perforation from rosacea keratitis',
      visualPrognosis: 'Excellent for blepharitis/MGD-predominant disease with treatment; guarded if rosacea keratitis with significant corneal scarring or thinning develops before treatment is initiated',
    },
    clinicalPearls: [
      'Consider ocular rosacea in any patient with chronic, relapsing, treatment-resistant blepharitis and recurrent chalazia, even without obvious facial redness.',
      'Ocular symptoms can precede cutaneous rosacea findings in a meaningful subset of patients, so absence of facial flushing does not rule out the diagnosis.',
      'Low-dose systemic tetracyclines (e.g., doxycycline) are used in rosacea for their anti-inflammatory, not antimicrobial, effect.',
      'Peripheral corneal infiltrates or thinning in a patient with chronic blepharitis should raise suspicion for rosacea keratitis and prompt systemic therapy escalation.',
      'Ocular rosacea is a common underlying driver of chronic posterior blepharitis/MGD, so any patient with recalcitrant standard blepharitis management should be re-evaluated for underlying rosacea.',
    ],
    highYield: [
      'Ocular rosacea = ocular manifestation of rosacea; can occur with or without prominent facial skin findings',
      'Classic ocular findings: chronic blepharitis/MGD, recurrent chalazia, conjunctival hyperemia',
      'Rosacea keratitis (severe form) = peripheral corneal infiltrates, vascularization, and thinning that can threaten vision',
      'Management: lid hygiene/warm compresses plus low-dose systemic tetracycline-class antibiotics for their anti-inflammatory (not antimicrobial) effect, especially with corneal involvement',
      'Ocular rosacea is a common underlying driver of chronic posterior blepharitis/MGD — consider it in treatment-resistant blepharitis',
      'Facial findings (erythema, telangiectasias, papules/pustules, rhinophyma) support but are not required for the diagnosis',
    ],
  },
  {
    id: 'osteogenesis-imperfecta',
    name: 'Osteogenesis Imperfecta',
    aliases: ['Brittle Bone Disease'],
    category: 'Systemic Health - Musculoskeletal',
    definition:
      'An inherited disorder, most commonly autosomal dominant, of type I collagen synthesis or structure causing bone fragility and fractures with minimal or no trauma, with the classic and distinctive ocular finding of blue sclera from scleral thinning that allows the underlying uveal pigment/choroid to show through; also associated with an increased risk of keratoconus and, systemically, with conductive or mixed hearing loss.',
    affectedStructure: 'Sclera (thinning, abnormal collagen composition producing blue-gray discoloration), cornea (increased keratoconus risk from shared connective tissue defect)',
    pathologicalProcess:
      'Mutations most commonly in the COL1A1 or COL1A2 genes (encoding type I procollagen chains) impair normal type I collagen synthesis, structure, or crosslinking; because type I collagen is a major structural component of bone, sclera, and other connective tissues, the resulting defect produces bone fragility/fractures alongside scleral thinning that allows the underlying pigmented uveal tissue to show through as a blue-gray hue, and predisposes the cornea to biomechanical weakening and ectasia in some patients.',
    epidemiology: {
      typicalAge: 'Congenital/genetic; blue sclera is often one of the earliest recognized signs, visible from infancy or early childhood',
      prevalence: 'Approximately 1 in 15,000-20,000 live births across all types combined',
      importantPopulations: 'Children with recurrent or unexplained fractures out of proportion to trauma, family history of osteogenesis imperfecta',
    },
    riskFactors: [
      { label: 'Autosomal dominant COL1A1 or COL1A2 mutation (family history)', tier: 'major' },
      { label: 'De novo spontaneous type I collagen gene mutation', tier: 'major' },
      { label: 'Rarer autosomal recessive forms (mutations in genes affecting collagen processing) associated with more severe phenotypes', tier: 'moderate' },
    ],
    pathophysiology: [
      'Mutations in COL1A1/COL1A2 (or, in rarer recessive forms, genes involved in collagen post-translational processing) impair type I collagen quantity or structural integrity',
      'Defective type I collagen throughout the skeleton reduces bone mineral density and structural integrity, producing fractures with minimal or no trauma',
      'The sclera, which is normally opaque due to its dense, organized type I collagen fibrils, becomes abnormally thin and less densely packed, allowing the underlying pigmented uveal tract/choroid to show through and produce the characteristic blue-gray scleral appearance',
      'Shared connective tissue/collagen abnormality can also weaken corneal biomechanical stability in some patients, contributing to an increased risk of keratoconus',
      'Type I collagen abnormalities in the middle ear ossicles and otic capsule contribute to progressive conductive or mixed hearing loss, a common associated systemic finding',
    ],
    symptoms: {
      common: ['Recurrent fractures with minimal or no trauma, often noted first in childhood', 'Blue-gray discoloration of the "whites of the eyes" noted by family/caregivers, often from infancy', 'Short stature and skeletal deformity in more severe forms'],
      lessCommon: ['Progressive hearing loss, typically emerging in adolescence/adulthood', 'Blurred vision or increasing astigmatism if keratoconus develops', 'Dentinogenesis imperfecta (discolored, fragile teeth) in some patients'],
      importantNegatives: ['Blue sclera in osteogenesis imperfecta is typically painless and does not by itself cause visual symptoms'],
      typicalProgression: 'Blue sclera is usually present from early life and may become less pronounced with age in some milder forms as the sclera thickens somewhat with growth; fracture frequency and skeletal deformity vary by OI type and often improve after puberty; hearing loss and keratoconus risk, when present, tend to manifest later in childhood through adulthood.',
    },
    signs: [
      { area: 'External', finding: 'Blue or blue-gray sclera, often bilateral and symmetric, visible even to the naked eye without magnification' },
      { area: 'Cornea', finding: 'In affected individuals, signs of keratoconus may be present (irregular astigmatism, corneal thinning/steepening on topography, Vogt striae/Fleischer ring in more advanced cases)' },
      { area: 'Other', finding: 'Skeletal exam (not ocular) reveals bowing/deformity of long bones, short stature, or evidence of prior fractures; hearing assessment may reveal conductive or mixed hearing loss' },
    ],
    differentialDiagnosis: [
      { disease: 'Ehlers-Danlos syndrome', whySimilar: 'Another inherited connective tissue/collagen disorder that can also produce blue or thin-appearing sclera along with tissue fragility', keyDistinguisher: 'Ehlers-Danlos is characterized more prominently by joint hypermobility and skin hyperextensibility/fragility, with a different pattern of ocular findings including keratoconus/keratoglobus and elevated globe rupture risk; the skeletal fracture pattern and bone fragility of OI is more specific to that diagnosis' },
      { disease: 'Physiologic/normal blue-tinged sclera of infancy', whySimilar: 'Healthy infants can have a mildly bluish scleral tint due to normal scleral thinness at that age', keyDistinguisher: 'Normal infantile blue sclera is typically mild, transient, and resolves with normal scleral thickening over the first year of life, without associated fractures or family history, versus the persistent, often more pronounced blue sclera and fracture history in OI' },
      { disease: 'Marfan syndrome', whySimilar: 'Another heritable connective tissue disorder with overlapping skeletal features (tall stature, joint laxity) that can prompt consideration alongside OI in a patient with connective tissue findings', keyDistinguisher: 'Marfan syndrome\'s classic ocular finding is ectopia lentis (superotemporal lens subluxation) rather than blue sclera, and is associated with aortic root dilation rather than bone fragility/fractures' },
    ],
    diagnosticTesting: [
      { name: 'External/slit lamp examination', whyOrdered: 'Directly assess scleral color and rule out corneal ectasia', expectedFinding: 'Blue or blue-gray scleral discoloration; possible keratoconus signs on slit lamp if present', contribution: 'Documents the classic ocular sign supporting the diagnosis and screens for associated keratoconus' },
      { name: 'Corneal topography', whyOrdered: 'Screen for subclinical or early keratoconus given the shared connective tissue basis with OI', expectedFinding: 'Inferior steepening/irregular astigmatism pattern if keratoconus is present', contribution: 'Allows early detection of a treatable corneal complication' },
      { name: 'Skeletal survey/radiographs', whyOrdered: 'Systemic workup for fracture history, bone density, and deformity', expectedFinding: 'Evidence of low bone density, old/new fractures, bowing deformity', contribution: 'Supports the systemic diagnosis, performed by the managing physician rather than the eye care provider' },
      { name: 'Genetic testing for COL1A1/COL1A2 (or other OI-associated genes)', whyOrdered: 'Confirm diagnosis and guide genetic counseling', expectedFinding: 'Pathogenic type I collagen gene variant', contribution: 'Definitive molecular confirmation of osteogenesis imperfecta' },
      { name: 'Audiometry', whyOrdered: 'Screen for associated conductive/mixed hearing loss', expectedFinding: 'Conductive or mixed hearing loss pattern', contribution: 'Identifies a common associated systemic finding requiring its own management' },
    ],
    diagnosis: {
      confirmation: 'Diagnosis is typically made clinically by pediatrics/genetics based on characteristic fracture history, family history, and blue sclera, with confirmatory genetic testing for type I collagen gene mutations; the optometrist\'s role is chiefly to document blue sclera, screen for associated keratoconus, and refer for systemic workup if OI is not yet diagnosed.',
      classification: 'Multiple clinical types exist (classically graded by severity, from mild non-deforming disease to severe/lethal perinatal forms), determined by the specific underlying collagen gene mutation and inheritance pattern',
    },
    management: [
      { category: 'Observation', detail: 'Blue sclera itself requires no direct ocular treatment; it is a diagnostic/associated sign rather than a vision-threatening finding' },
      { category: 'First-line treatment', detail: 'Routine refractive correction; monitor for keratoconus and manage with spectacles/soft toric or, if progressive, rigid gas permeable/scleral lenses as needed' },
      { category: 'Second-line treatment', detail: 'Corneal crosslinking if progressive keratoconus is documented, following standard indications' },
      { category: 'Referral', detail: 'Refer to genetics/pediatrics or the patient\'s established OI care team for systemic diagnosis and management (bone health, fracture prevention, orthopedic care); refer to cornea specialist if keratoconus is identified or progressing; refer for audiology evaluation given associated hearing loss risk' },
    ],
    managementProtocol: {
      workup: [
        'Baseline corneal topography to screen for subclinical keratoconus given the shared type I collagen defect, even when astigmatism is currently mild',
        'Manifest and, in children, cycloplegic refraction to establish a baseline and screen for amblyogenic anisometropia',
        'Slit lamp photography of scleral color for a stable baseline reference, since blue sclera itself is not expected to progress',
        'Confirm the patient has an established OI diagnosis/care team; if not, gather fracture and family history to support a genetics referral',
      ],
      initialTreatment:
        'Routine refractive correction with spectacles or, if needed, soft toric or rigid gas permeable/scleral contact lenses; blue sclera itself requires no treatment. Corneal crosslinking is added if progressive keratoconus is documented, following the same indications used in the general keratoconus population.',
      followUpSchedule:
        'Routine comprehensive eye exams with attention to corneal topography, shortened toward every 6-12 months if the patient reports new or increasing astigmatism, since this is the main progressive ocular finding to catch early.',
      escalationCriteria: [
        'New or worsening irregular astigmatism',
        'Topographic steepening on serial exams',
        'Reduced best-corrected visual acuity not explained by refractive error alone',
      ],
      referralCriteria: [
        'No established systemic OI diagnosis/care team -> genetics/pediatrics for systemic evaluation, especially in a child with recurrent fractures and blue sclera',
        'Documented keratoconus or its progression -> cornea specialist for contact lens fitting or crosslinking',
        'No audiology evaluation on record -> audiology given the associated hearing loss risk',
      ],
      complications: [
        'Progressive keratoconus with irregular astigmatism',
        'Corneal scarring in advanced, untreated keratoconus',
        'Amblyopia risk if significant anisometropic astigmatism is uncorrected in a young child',
      ],
      monitoringParameters: [
        'Corneal topography/keratometry trend',
        'Refractive error',
        'Best-corrected visual acuity',
        'Scleral appearance (expected to remain stable)',
      ],
      relatedExamTechniqueIds: ['corneal-topography'],
    },
    followUp: {
      typical: 'Routine comprehensive eye exams with attention to corneal topography, particularly if the patient reports increasing or asymmetric astigmatism',
      monitor: 'Scleral appearance (largely stable), corneal topography/keratometry for early keratoconus signs, refractive error',
      progression: 'New or worsening irregular astigmatism, topographic steepening, or reduced best-corrected vision warrant closer keratoconus monitoring',
      shortenWhen: 'Documented keratoconus progression',
    },
    prognosis: {
      typicalCourse: 'Blue sclera is a stable, non-progressive, non-vision-threatening finding present from early life; overall prognosis for OI is dominated by skeletal/systemic morbidity rather than ocular findings',
      progressionRisk: 'Keratoconus, when present, can progress over time as in the general keratoconus population',
      complications: 'Progressive keratoconus with irregular astigmatism and, in advanced untreated cases, corneal scarring; hearing loss is a common non-ocular associated complication requiring separate management',
      visualPrognosis: 'Excellent for blue sclera itself, which does not affect vision; good for keratoconus with appropriate monitoring and, if needed, crosslinking or contact lens management',
    },
    clinicalPearls: [
      'Blue sclera in osteogenesis imperfecta results from scleral thinning that allows the underlying uveal pigment/choroid to show through — it is often one of the earliest recognized signs, sometimes noted in infancy.',
      'Blue sclera is not perfectly specific to osteogenesis imperfecta — it can also occur in other connective tissue disorders such as Ehlers-Danlos syndrome, and mildly in normal infants, so correlate with fracture history and family history.',
      'Ask about hearing changes and screen/refer for audiometry, since conductive or mixed hearing loss is a common associated systemic finding in OI.',
      'Given the shared type I collagen basis, monitor OI patients with corneal topography for keratoconus, especially if they report progressive or asymmetric astigmatism.',
      'A child with recurrent fractures out of proportion to reported trauma and blue sclera should raise concern for osteogenesis imperfecta and prompt genetics/pediatric referral, distinct from a concern for non-accidental trauma.',
    ],
    highYield: [
      'Osteogenesis imperfecta = inherited type I collagen disorder causing bone fragility/fractures with minimal trauma, most commonly autosomal dominant (COL1A1/COL1A2)',
      'Classic ocular finding: blue sclera, from scleral thinning that allows underlying uveal pigment/choroid to show through',
      'Blue sclera is often one of the earliest recognized signs, visible from infancy',
      'Associated with increased keratoconus risk given the shared connective tissue/collagen basis',
      'Hearing loss (conductive or mixed) is a common associated systemic finding in OI',
      'Blue sclera is not fully specific to OI — also seen in other connective tissue disorders such as Ehlers-Danlos syndrome',
    ],
  },
]
