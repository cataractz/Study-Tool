import type { Disease } from '../../types/disease'

export const corneaAdditional4: Disease[] = [
  {
    id: 'salzmann-nodular-degeneration',
    name: 'Salzmann Nodular Degeneration',
    aliases: ['Salzmann Nodules', 'SND'],
    category: 'Cornea',
    definition:
      'A slowly progressive, non-inflammatory corneal degeneration characterized by discrete, bluish-white to gray-white elevated nodules composed of degenerated subepithelial/Bowman layer tissue, classically arising in the mid-periphery of the cornea at sites of prior chronic ocular surface inflammation.',
    affectedStructure: 'Corneal epithelium and Bowman layer, with subepithelial deposition of hyalinized, degenerated stromal tissue disrupting the normal epithelial basement membrane',
    pathologicalProcess:
      'Chronic ocular surface inflammation damages Bowman layer and the epithelial basement membrane, stimulating abnormal fibroblast-like keratocyte activity that deposits disorganized, hyalinized extracellular matrix material as discrete subepithelial nodules, often in a ring pattern marking the border of the prior inflammatory insult.',
    epidemiology: {
      typicalAge: 'Middle-aged to older adults, most commonly diagnosed in the 5th-7th decades',
      sexDistribution: 'Marked female predominance',
      prevalence: 'Uncommon; frequently underdiagnosed or misattributed to dry eye or other ocular surface disease given its insidious, chronic course',
      importantPopulations: 'Patients with a long history of chronic blepharitis/meibomian gland dysfunction, contact lens wear, or prior corneal surgery',
    },
    riskFactors: [
      { label: 'Chronic blepharitis / meibomian gland dysfunction', tier: 'major' },
      { label: 'Chronic ocular surface inflammation of any cause (dry eye disease)', tier: 'major' },
      { label: 'Female sex', tier: 'moderate' },
      { label: 'History of phlyctenulosis', tier: 'moderate' },
      { label: 'History of trachoma or interstitial keratitis', tier: 'moderate' },
      { label: 'Prior corneal surgery (including keratoplasty or refractive surgery)', tier: 'associated' },
      { label: 'Long-term contact lens wear', tier: 'associated' },
      { label: 'Vernal or atopic keratoconjunctivitis', tier: 'associated' },
    ],
    pathophysiology: [
      'A chronic inflammatory insult to the corneal surface (blepharitis-associated tear film instability, phlyctenulosis, trachoma, interstitial keratitis, or prior surgery) damages the epithelial basement membrane and Bowman layer',
      'Subepithelial keratocytes are stimulated to produce disorganized, hyalinized extracellular matrix and abnormal basement membrane material rather than normal, organized Bowman layer collagen',
      'This aberrant material accumulates focally as elevated, well-circumscribed subepithelial/anterior stromal nodules',
      'Nodules classically develop at the border of the prior area of inflammation, producing a characteristic ring or arcuate configuration in the corneal mid-periphery, though central nodules can occur',
      'The overlying epithelium is typically intact but thinned over the nodule apex and can develop irregularity, contributing to induced irregular astigmatism and, in more advanced nodules, recurrent breakdown/erosion-like symptoms',
    ],
    symptoms: {
      common: [
        'Many patients are entirely asymptomatic, with nodules found incidentally on slit lamp exam',
        'Foreign body sensation when nodules are elevated or the overlying epithelium becomes irregular',
        'Gradually decreased or fluctuating vision from induced irregular astigmatism',
        'Mild photophobia and tearing',
      ],
      lessCommon: ['Recurrent erosion-like episodes of sudden pain, tearing, and photophobia if the epithelium over a nodule breaks down', 'Glare or halos from surface irregularity'],
      importantNegatives: ['Typically not painful in the absence of epithelial breakdown', 'No significant conjunctival injection unless coexisting blepharitis/dry eye is active'],
      typicalProgression: 'Slowly progressive over years, with nodules gradually enlarging in number and size; many remain stable for long periods and never require intervention.',
    },
    signs: [
      { area: 'Cornea', finding: 'Discrete, elevated, bluish-white to gray-white nodules in the superficial stroma/Bowman layer, typically 1-2mm or larger, often arranged in a partial or complete ring in the mid-peripheral cornea; can be unilateral or bilateral and asymmetric' },
      { area: 'Slit Lamp', finding: 'Nodules appear whorled or feathery on close examination, with intervening clear cornea between lesions; overlying tear film irregularity and epithelial thinning or irregularity over the nodule apex; associated findings of chronic blepharitis/meibomian gland dysfunction (lid margin telangiectasia, meibomian gland dropout) are frequently present' },
      { area: 'Other', finding: 'Irregular astigmatism and distorted mires on keratometry/topography when nodules encroach on the visual axis or induce surface irregularity' },
    ],
    differentialDiagnosis: [
      { disease: 'Band keratopathy', whySimilar: 'Also a chronic, non-inflammatory corneal surface degeneration seen in older patients that can alter the corneal surface and reduce vision', keyDistinguisher: 'Band keratopathy is a horizontal, interpalpebral band of calcium deposition at the level of Bowman layer with characteristic Swiss-cheese lucent holes, sparing the limbus, rather than discrete elevated nodules; associated with chronic uveitis, hypercalcemia, or chronic ocular surface disease' },
      { disease: 'Granular or lattice corneal stromal dystrophy', whySimilar: 'Discrete opacities within the corneal stroma that can affect vision', keyDistinguisher: 'Stromal dystrophies are bilateral, symmetric, inherited conditions with deposits confined to the stroma (not elevated subepithelial nodules), typically present earlier in life, and lack an association with prior surface inflammation' },
      { disease: 'Climatic droplet keratopathy (spheroidal degeneration)', whySimilar: 'Age-related, bilateral degenerative corneal deposits that can be nodular in appearance', keyDistinguisher: 'Golden-brown, translucent spherule-like deposits concentrated in the interpalpebral zone associated with chronic UV/environmental exposure, rather than bluish-white nodules following a prior focal inflammatory border' },
      { disease: 'Corneal papilloma or other surface neoplasm', whySimilar: 'A discrete, elevated corneal or limbal lesion', keyDistinguisher: 'Neoplastic lesions are typically solitary, vascularized, and unrelated to a history of chronic inflammation or a ring distribution; Salzmann nodules are typically multiple, avascular, and classically ring-patterned' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp biomicroscopy', whyOrdered: 'Primary diagnostic tool for identifying and characterizing the nodules', expectedFinding: 'Discrete, elevated, bluish-white to gray-white subepithelial nodules, often in a mid-peripheral ring pattern with clear cornea between lesions', contribution: 'Establishes the clinical diagnosis based on characteristic appearance and distribution' },
      { name: 'Corneal topography', whyOrdered: 'Quantify the degree of irregular astigmatism induced by the nodules', expectedFinding: 'Localized irregular astigmatism corresponding to nodule location, distorted or irregular mires', contribution: 'Documents visual impact and helps determine candidacy for and planning of surgical removal' },
      { name: 'Anterior segment OCT', whyOrdered: 'Assess the depth and extent of the nodules relative to Bowman layer and stroma', expectedFinding: 'Hyperreflective subepithelial elevation with thinning of the overlying epithelium and disruption of the normal Bowman layer contour', contribution: 'Helps surgical planning by defining nodule depth before superficial keratectomy or PTK' },
      { name: 'Evaluation for ocular surface disease (tear break-up time, lid margin exam, meibomian gland assessment)', whyOrdered: 'Identify and treat an underlying/contributing chronic inflammatory process', expectedFinding: 'Signs of blepharitis, meibomian gland dysfunction, or dry eye disease are commonly present', contribution: 'Guides adjunctive medical management of the ocular surface, which can reduce recurrence risk after nodule removal' },
    ],
    diagnosis: {
      criteria: 'Characteristic bluish-white to gray, elevated, subepithelial corneal nodules, typically in a mid-peripheral ring distribution, in a patient with a history of chronic ocular surface inflammation',
      confirmation: 'Diagnosis is clinical, based on the classic slit lamp appearance and distribution of the nodules; histopathology (if tissue is obtained during keratectomy) confirms hyalinized, disorganized subepithelial collagenous material with an absent or disrupted Bowman layer, but is not required for diagnosis',
      classification: 'Not formally staged; described by number, size, location (central versus peripheral), and degree of visual/symptomatic impact, which guides the decision between observation and surgical removal',
    },
    management: [
      { category: 'Observation', detail: 'The majority of patients with asymptomatic or mildly symptomatic nodules that do not threaten vision are managed with observation and periodic monitoring alone' },
      { category: 'First-line treatment', detail: 'Aggressive management of any underlying ocular surface disease (lid hygiene and treatment of blepharitis/meibomian gland dysfunction, artificial tears, treatment of dry eye) to reduce the chronic inflammatory stimulus, even when nodules themselves are not yet treated surgically' },
      { category: 'Second-line treatment', detail: 'Superficial keratectomy (manual lamellar dissection) to mechanically remove visually significant or symptomatic nodules, often combined with a bandage contact lens during epithelial healing' },
      { category: 'Advanced treatment', detail: 'Phototherapeutic keratectomy (PTK) with the excimer laser as an alternative or adjunct to manual superficial keratectomy for smoothing the corneal surface and removing nodular tissue, particularly for more diffuse or recurrent nodules' },
      { category: 'Referral', detail: 'Refer to a corneal specialist for surgical removal (superficial keratectomy or PTK) when nodules are visually significant, cause recurrent erosion-like symptoms, or interfere with contact lens fitting or cataract surgery biometry' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp documentation of nodule number, size, and location relative to the visual axis',
        'Corneal topography to quantify induced irregular astigmatism and establish a baseline for surgical planning',
        'Anterior segment OCT to assess nodule depth and epithelial thinning before keratectomy/PTK',
        'Evaluation of ocular surface disease severity (tear break-up time, lid margin exam, meibomian gland assessment) to identify the driving chronic inflammatory process',
      ],
      initialTreatment:
        'Asymptomatic or mildly symptomatic nodules that do not threaten the visual axis are observed while any underlying chronic blepharitis/meibomian gland dysfunction or dry eye disease is treated aggressively with lid hygiene, warm compresses, and preservative-free artificial tears to reduce the ongoing inflammatory stimulus that drives nodule formation and recurrence.',
      followUpSchedule:
        'Stable, asymptomatic nodules are reassessed every 6-12 months; nodules that are enlarging, becoming symptomatic, or approaching the visual axis are seen every few months with repeat topography to track irregular astigmatism.',
      escalationCriteria: [
        'Nodule encroaching on or distorting the visual axis with a measurable decrease in best-corrected visual acuity',
        'Recurrent erosion-like episodes of epithelial breakdown over a nodule',
        'Progressive irregular astigmatism precluding accurate keratometry/biometry before planned cataract or refractive surgery',
      ],
      referralCriteria: [
        'Refer to a corneal specialist for superficial keratectomy or PTK when nodules are visually significant, symptomatic, or interfere with contact lens fitting',
        'Refer before cataract surgery in an affected eye so nodules can be addressed (or accounted for) before IOL power calculation',
      ],
      complications: [
        'Recurrence after superficial keratectomy or PTK, particularly with unaddressed ocular surface inflammation',
        'Induced irregular astigmatism affecting biometry accuracy for cataract surgery',
        'Rare erosion-like epithelial breakdown over a nodule',
        'Corneal haze after phototherapeutic keratectomy',
      ],
      monitoringParameters: [
        'Nodule number, size, and location',
        'Best-corrected visual acuity and manifest refraction',
        'Corneal topography for irregular astigmatism',
        'Ocular surface disease control (lid margin exam, tear break-up time)',
      ],
      relatedDrugIds: ['carboxymethylcellulose-sodium'],
      relatedExamTechniqueIds: ['corneal-topography', 'anterior-segment-oct', 'tear-break-up-time', 'meibomian-gland-evaluation'],
    },
    followUp: {
      typical: 'Annual to biannual monitoring for stable, asymptomatic nodules; closer follow-up (every few months) if nodules are enlarging or symptomatic',
      monitor: 'Nodule size, number, and location; visual acuity and refraction; corneal topography if progressive irregular astigmatism is a concern; ocular surface disease control',
      progression: 'Progression is defined by enlarging or new nodules, worsening irregular astigmatism, decreased visual acuity, or increasing frequency of erosion-like symptoms',
      shortenWhen: 'Nodules encroaching on the visual axis, recurrent epithelial breakdown, or planned cataract/refractive surgery requiring an optimized corneal surface for accurate biometry',
    },
    prognosis: {
      typicalCourse: 'Generally a benign, slowly progressive condition; many patients never require intervention and maintain good vision long-term',
      progressionRisk: 'Recurrence after surgical removal is well recognized, particularly if underlying chronic ocular surface inflammation is not adequately controlled',
      complications: 'Recurrent nodules after keratectomy, induced irregular astigmatism affecting biometry accuracy for cataract surgery, and rarely, recurrent erosion-like symptoms',
      visualPrognosis: 'Excellent for asymptomatic or peripheral nodules; good visual outcomes after superficial keratectomy or PTK for visually significant central nodules, though recurrence can necessitate repeat treatment',
    },
    clinicalPearls: [
      'The classic distribution is a mid-peripheral ring or arc marking the border of a prior area of chronic inflammation — think of it as a "scar" of old surface inflammation rather than a primary corneal disease process.',
      'Always evaluate and treat underlying blepharitis/meibomian gland dysfunction, since untreated chronic surface inflammation is both a cause and a risk factor for recurrence after nodule removal.',
      'Salzmann nodules can significantly distort keratometry and biometry, so they should be addressed (or at least accounted for) before cataract surgery IOL calculations in an affected eye.',
      'Most nodules are managed conservatively — surgery is reserved for visually significant, symptomatic, or progressively enlarging nodules, not simply because nodules are present.',
      'Unlike corneal dystrophies, Salzmann nodular degeneration is typically asymmetric/unilateral or markedly asymmetric between eyes and acquired rather than inherited.',
    ],
    highYield: [
      'Salzmann nodular degeneration = elevated, bluish-white to gray subepithelial corneal nodules, classically in a mid-peripheral ring pattern at the border of prior chronic ocular surface inflammation',
      'Strong female predominance; associated with chronic blepharitis/meibomian gland dysfunction, phlyctenulosis, trachoma, interstitial keratitis, and prior corneal surgery',
      'Most cases are observed; superficial keratectomy (manual or PTK) is reserved for visually significant or symptomatic nodules, with recognized risk of recurrence',
      'Key differential is band keratopathy (horizontal interpalpebral calcium band with Swiss-cheese holes, sparing the limbus) rather than discrete elevated nodules',
      'Treating underlying ocular surface disease (lid hygiene, dry eye management) reduces the inflammatory stimulus and recurrence risk after surgical removal',
      'Nodules can distort keratometry/topography and should be considered before cataract or refractive surgery planning',
    ],
  },
]
