import type { Disease } from '../../types/disease'

export const corneaAdditional5: Disease[] = [
  {
    id: 'corneal-arcus',
    name: 'Corneal Arcus and Hyperlipidemia',
    aliases: ['Arcus Senilis', 'Arcus Lipoides'],
    category: 'Cornea',
    definition:
      'A peripheral corneal stromal lipid deposition that forms a gray-white ring or partial ring near the limbus, separated from the limbus itself by a distinct clear zone of normal cornea; an extremely common and generally benign incidental finding of aging ("arcus senilis"), but a significant clinical red flag for underlying hyperlipidemia/dyslipidemia when found in a patient younger than approximately 40-45 years old ("arcus juvenilis").',
    affectedStructure: 'Peripheral corneal stroma (anterior and posterior stromal lamellae near Bowman layer and Descemet membrane), sparing the corneal epithelium and endothelium',
    pathologicalProcess:
      'Circulating lipoproteins diffuse from the perilimbal vascular arcades into the adjacent peripheral corneal stroma and deposit within the stromal lamellae, beginning superiorly and inferiorly and gradually extending circumferentially to form a complete ring, while a narrow zone of normal cornea adjacent to the limbus itself remains relatively spared.',
    epidemiology: {
      typicalAge: 'Prevalence increases substantially with age; present in the large majority of patients by advanced age (arcus senilis). Onset before approximately age 40-45 is termed arcus juvenilis and is clinically significant.',
      sexDistribution: 'Roughly similar between sexes, though some population studies suggest earlier or more prominent onset patterns vary by sex',
      prevalence: 'Extremely common as an age-related finding in older adults; uncommon in patients under 40 without an underlying lipid abnormality',
      importantPopulations: 'Patients under approximately 40-45 years old (arcus juvenilis) warrant lipid screening; also reported to occur earlier and more prominently in Black patients in some population studies, and in patients with familial hypercholesterolemia regardless of age',
    },
    riskFactors: [
      { label: 'Advancing age (for typical "arcus senilis")', tier: 'major' },
      { label: 'Familial hypercholesterolemia or other dyslipidemia, especially when arcus occurs before age 40-45 ("arcus juvenilis")', tier: 'major' },
      { label: 'Elevated circulating lipoproteins (elevated LDL/total cholesterol)', tier: 'moderate' },
      { label: 'Smoking', tier: 'associated' },
      { label: 'Male sex (mild association reported in some studies)', tier: 'associated' },
    ],
    pathophysiology: [
      'Circulating lipoproteins diffuse from the perilimbal capillary and vascular arcades into the adjacent peripheral corneal stroma',
      'Lipid (cholesterol, cholesterol esters, and phospholipids) deposits preferentially within the anterior and posterior stromal lamellae, sparing a narrow clear zone immediately adjacent to the limbus itself',
      'Deposition classically begins superiorly and inferiorly and gradually extends circumferentially to form a complete ring over time',
      'In older patients, this reflects cumulative age-related lipid deposition and does not necessarily indicate any underlying lipid abnormality (arcus senilis)',
      'In younger patients, early or accelerated arcus formation reflects elevated circulating lipoprotein levels (e.g., familial hypercholesterolemia) driving greater lipid diffusion into the peripheral cornea',
      'The lipid deposit itself is inert, does not incite inflammation, and does not affect corneal transparency over the visual axis because it remains confined to the periphery',
    ],
    symptoms: {
      common: ['Typically entirely asymptomatic — usually noted incidentally on routine slit lamp examination'],
      lessCommon: [],
      importantNegatives: ['No effect on visual acuity', 'No pain, redness, or irritation', 'Does not involve or approach the visual axis'],
      typicalProgression: 'Gradual, slowly progressive circumferential extension and increasing density over years to decades. In older patients this represents a benign aging change, while in younger patients its presence — even as a partial arc — should prompt lipid workup regardless of whether further progression is observed.',
    },
    signs: [
      { area: 'Cornea', finding: 'Gray-white to yellow-white arc or complete ring of stromal opacity in the peripheral cornea, typically denser superiorly and inferiorly initially and extending circumferentially over time; a distinct clear (lucid) interval of normal-appearing cornea separates the arcus from the limbus itself' },
      { area: 'External', finding: 'No associated conjunctival injection or limbal vascular abnormality' },
      { area: 'Slit Lamp', finding: 'Lipid deposition confined to the stroma, sparing the overlying epithelium and the endothelium; no corneal staining with fluorescein' },
    ],
    differentialDiagnosis: [
      { disease: 'Limbal girdle of Vogt', whySimilar: 'Also a peripheral, perilimbal band of degenerative-appearing corneal change seen in older patients', keyDistinguisher: 'Limbal girdle of Vogt is a chalk-white band located directly at the nasal and/or temporal limbus with no clear zone separating it from the limbus, representing elastotic degeneration, and is typically restricted to the horizontal (3 and 9 o\'clock) meridians, in contrast to arcus, which forms a lipid ring with a characteristic clear interval separating it from the limbus and is not restricted to those meridians' },
      { disease: 'Limbal/perilimbal inflammatory infiltrate or phlyctenule', whySimilar: 'A grayish-white perilimbal lesion', keyDistinguisher: 'Inflammatory infiltrates are typically associated with conjunctival injection, are focal and nodular rather than forming a smooth ring, and are often symptomatic (irritation, photophobia), unlike the asymptomatic, non-inflamed, uniform appearance of arcus' },
      { disease: 'Terrien marginal degeneration', whySimilar: 'Peripheral corneal changes located near the limbus', keyDistinguisher: 'Terrien marginal degeneration causes true peripheral corneal thinning and ectasia with vascularization and irregular astigmatism, typically superiorly, whereas arcus is a flat lipid deposit without thinning, vascularization, or refractive effect' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp examination', whyOrdered: 'Characterize the lesion\'s morphology, depth, and relationship to the limbus', expectedFinding: 'Peripheral stromal lipid ring or arc with a clear intervening zone separating it from the limbus', contribution: 'Establishes the clinical diagnosis and distinguishes arcus from other perilimbal findings such as limbal girdle of Vogt' },
      { name: 'Fasting lipid panel (total cholesterol, LDL, HDL, triglycerides)', whyOrdered: 'Screen for underlying dyslipidemia; mandatory when arcus is identified in a patient under approximately 40-45 years old', expectedFinding: 'Elevated total cholesterol and/or LDL, possibly consistent with familial hypercholesterolemia', contribution: 'Identifies a treatable systemic cardiovascular risk factor that may otherwise go undiagnosed' },
      { name: 'Referral to primary care/cardiology for cardiovascular risk assessment', whyOrdered: 'Further evaluate a young patient with confirmed dyslipidemia for additional cardiovascular risk factors and the need for lipid-lowering therapy', expectedFinding: 'Variable, based on the patient\'s overall cardiovascular risk profile', contribution: 'Guides systemic management and reduces long-term cardiovascular morbidity and mortality risk' },
    ],
    diagnosis: {
      criteria: 'A clinical slit lamp diagnosis based on the characteristic peripheral lipid ring appearance and its relationship to the limbus',
      confirmation: 'No ocular confirmatory testing beyond slit lamp examination is needed; the essential diagnostic action is age-based triage for systemic lipid screening rather than confirmation of the ocular finding itself.',
      classification: '"Arcus senilis" (typically age 40-45 or older, a benign incidental finding) versus "arcus juvenilis" (age under 40-45, warrants systemic lipid workup)',
    },
    management: [
      { category: 'Observation', detail: 'No direct ocular treatment is required or available for the corneal finding itself in any age group — it does not threaten vision or ocular health' },
      { category: 'Referral', detail: 'Refer any patient with arcus juvenilis (onset before approximately age 40-45) to primary care for a fasting lipid panel and cardiovascular risk assessment, and educate the patient on the significance of the finding' },
      { category: 'First-line treatment', detail: 'No treatment is directed at the eye; systemic management (dietary modification, lipid-lowering therapy) is directed by primary care or cardiology if dyslipidemia is confirmed on workup' },
    ],
    followUp: {
      typical: 'No dedicated ocular follow-up is required for the arcus itself; simply document its presence and extent at routine comprehensive eye examinations',
      monitor: 'Presence and extent of the arcus at routine visits, and confirmation that the systemic referral for a fasting lipid panel was completed for any patient under approximately 40-45 years old',
      progression: 'Gradual circumferential extension and increasing density over years is expected with age and is not itself a concerning finding',
      shortenWhen: 'Not applicable — this finding does not require accelerated ocular follow-up',
    },
    prognosis: {
      typicalCourse: 'Stable to slowly progressive over years to decades; benign and does not affect the cornea\'s optical or structural integrity',
      progressionRisk: 'Continued circumferential extension and increasing density is expected with age but carries no visual consequence',
      complications: 'None directly ocular; the clinical significance lies entirely in its role as a marker of systemic lipid status, particularly in younger patients',
      visualPrognosis: 'Excellent — arcus never affects visual acuity, since it remains confined to the peripheral cornea outside the visual axis',
    },
    clinicalPearls: [
      'Age is the key: the identical clinical appearance is a benign incidental finding after approximately age 40-45 but a significant red flag warranting lipid workup before that age.',
      'The clear (lucid) interval separating the arcus from the limbus is the key feature distinguishing it from limbal girdle of Vogt, which touches the limbus directly with no intervening clear zone.',
      'Always document laterality and completeness of the ring, and confirm that a fasting lipid panel has been ordered for any patient presenting with arcus juvenilis.',
      'Optometrists play a valuable role in the first detection of undiagnosed familial hyperlipidemia through this incidental slit lamp finding.',
    ],
    highYield: [
      'Corneal arcus = peripheral corneal stromal lipid deposition with a clear zone separating it from the limbus',
      'Arcus senilis (onset roughly age 40-45 or older) = benign, extremely common age-related finding requiring no systemic workup',
      'Arcus juvenilis (onset before roughly age 40-45) = red flag mandating a fasting lipid panel to screen for hyperlipidemia/familial hypercholesterolemia',
      'Limbal girdle of Vogt touches the limbus directly with no clear zone — the key distinguishing point from arcus',
      'Arcus never affects vision and requires no direct ocular treatment',
      'Optometrists are often the first to detect an undiagnosed systemic lipid abnormality via this routine slit lamp finding',
    ],
  },
]
