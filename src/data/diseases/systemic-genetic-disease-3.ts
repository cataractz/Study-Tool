import type { Disease } from '../../types/disease'

export const systemicGeneticDisease3: Disease[] = [
  {
    id: 'albinism-ocular',
    name: 'Albinism',
    aliases: ['Oculocutaneous Albinism', 'Ocular Albinism'],
    category: 'Systemic Health - Genetic & Chromosomal',
    definition:
      'A genetic disorder of melanin biosynthesis or melanocyte function resulting in hypopigmentation of the skin, hair, and eyes (oculocutaneous albinism) or of the eyes alone with normal or near-normal skin and hair pigmentation (ocular albinism); the resulting deficiency of melanin in the retinal pigment epithelium and iris pigment epithelium disrupts normal visual system development, producing foveal hypoplasia, nystagmus, high refractive error, and abnormal decussation of retinal ganglion cell axons at the chiasm.',
    affectedStructure:
      'Iris pigment epithelium (transillumination defects), retinal pigment epithelium and fovea (foveal hypoplasia), extraocular muscles/visual pathways (nystagmus), and optic chiasm (excess crossing of nerve fibers)',
    pathologicalProcess:
      'Mutations in genes governing melanin synthesis (e.g., tyrosinase and related pathways in oculocutaneous albinism) or melanosome trafficking (e.g., GPR143 in X-linked ocular albinism) impair melanin production within melanocytes and pigment epithelial cells; melanin deficiency during ocular development disrupts normal foveal pit formation and alters the guidance of retinal ganglion cell axons at the chiasm, producing the characteristic triad of foveal hypoplasia, nystagmus, and excess chiasmal crossing.',
    epidemiology: {
      typicalAge: 'Congenital; nystagmus and photophobia typically noted in infancy',
      sexDistribution:
        'Oculocutaneous albinism affects males and females equally (autosomal recessive); ocular albinism is X-linked recessive and predominantly affects males, with carrier females showing subtle iris transillumination or patchy fundus pigmentary mosaicism',
      prevalence: 'Oculocutaneous albinism affects roughly 1 in 20,000 individuals worldwide; ocular albinism is less common',
      importantPopulations: 'Present from birth; increased prevalence of certain oculocutaneous albinism subtypes in specific populations and geographic regions',
    },
    riskFactors: [
      { label: 'Family history of albinism or consanguinity (oculocutaneous forms, autosomal recessive)', tier: 'major' },
      { label: 'Male sex with X-linked inheritance pattern (ocular albinism, GPR143 mutation)', tier: 'major' },
      { label: 'Known carrier status in a parent', tier: 'moderate' },
    ],
    pathophysiology: [
      'Genetic mutation impairs melanin synthesis (tyrosinase pathway) or melanosome formation/trafficking within melanocytes and pigment epithelium',
      'Reduced melanin in the iris pigment epithelium thins the posterior pigment layer, allowing light to transmit through the iris stroma, producing transillumination defects and reduced ability to attenuate incoming light',
      'Melanin deficiency in the retinal pigment epithelium during development disrupts the normal formation of the foveal pit and the concentration of cone photoreceptors, resulting in foveal hypoplasia and consequently reduced best-corrected visual acuity',
      'Absence of the normal melanin-dependent signaling cue during embryonic development alters retinal ganglion cell axon guidance at the optic chiasm, causing a greater-than-normal proportion of fibers from each eye to decussate (cross) to the contralateral hemisphere rather than remaining uncrossed',
      'This misrouting can be objectively demonstrated on visual evoked potential testing and may contribute to strabismus and reduced stereopsis given abnormal cortical binocular input',
      'Sensory nystagmus develops secondary to poor macular/foveal function present from early infancy',
      'Reduced ocular pigmentation diminishes normal intraocular light absorption, producing photophobia and glare sensitivity',
    ],
    symptoms: {
      common: [
        'Reduced visual acuity present from infancy',
        'Photophobia and glare sensitivity',
        'Nystagmus (typically noted by caregivers in early infancy)',
        'High refractive error requiring correction',
        'Visible light hair, skin, and iris coloration (oculocutaneous form) or notably light irides with normal skin/hair (ocular form)',
      ],
      lessCommon: ['Strabismus', 'Head turn or head nodding to dampen nystagmus and improve acuity (null point)'],
      importantNegatives: ['Skin and hair pigmentation are normal or near-normal in ocular albinism, distinguishing it from oculocutaneous forms despite similar ocular findings'],
      typicalProgression:
        'Nystagmus and photophobia are typically present from early infancy; visual acuity, while reduced compared to normal, is generally stable through life rather than progressively worsening, and nystagmus amplitude often lessens somewhat with age.',
    },
    signs: [
      { area: 'Other', finding: 'Iris transillumination defects (diffuse, due to a hypopigmented iris pigment epithelium allowing light to pass through the iris on retroillumination); congenital sensory nystagmus, typically horizontal; may have an anomalous head posture at the nystagmus null point' },
      { area: 'Retina', finding: 'Foveal hypoplasia (absent or diminished foveal pit/foveal light reflex, blunted foveal avascular zone on OCT); fundus hypopigmentation with prominent visualization of the choroidal vasculature, especially in lighter-pigmented individuals' },
      { area: 'External', finding: 'Light skin/hair pigmentation relative to family background (oculocutaneous albinism only); normal skin/hair in ocular albinism' },
      { area: 'Other', finding: 'Strabismus (may occur secondary to abnormal chiasmal decussation and reduced binocular cortical input); high refractive error (astigmatism common)' },
    ],
    differentialDiagnosis: [
      { disease: 'Idiopathic infantile nystagmus syndrome', whySimilar: 'Congenital nystagmus with reduced visual acuity presenting in infancy', keyDistinguisher: 'Absence of iris transillumination defects, normal foveal architecture on OCT, and normal (non-crossed) chiasmal routing on VEP distinguish idiopathic infantile nystagmus from albinism' },
      { disease: 'Achromatopsia', whySimilar: 'Congenital nystagmus, photophobia, and reduced visual acuity from infancy', keyDistinguisher: 'Achromatopsia features absent or severely reduced color vision and an extinguished photopic ERG response with a preserved scotopic response, without iris transillumination defects or chiasmal misrouting' },
      { disease: 'Aniridia', whySimilar: 'Iris abnormality with nystagmus and reduced vision', keyDistinguisher: 'Aniridia involves partial or complete absence of iris tissue (not merely hypopigmentation), is often associated with PAX6 mutations, and carries risk of glaucoma and WAGR syndrome association rather than the chiasmal misrouting seen in albinism' },
    ],
    diagnosticTesting: [
      { name: 'Visual evoked potential (VEP) with monocular stimulation', whyOrdered: 'Assess for abnormal decussation of optic nerve fibers at the chiasm, a hallmark physiologic finding in albinism', expectedFinding: 'Asymmetric, crossed pattern of cortical response (monocular stimulation elicits a larger response over the contralateral occipital cortex than expected from normal partial decussation)', contribution: 'Confirms excess chiasmal crossing characteristic of albinism, useful when skin/hair findings are subtle or absent (e.g., ocular albinism)' },
      { name: 'Optical coherence tomography (OCT) of the macula', whyOrdered: 'Directly visualize foveal architecture', expectedFinding: 'Absent or shallow foveal pit (foveal hypoplasia), persistence of inner retinal layers centrally that are normally displaced away from the mature fovea', contribution: 'Confirms foveal hypoplasia as the structural correlate of reduced visual acuity' },
      { name: 'Iris transillumination (slit lamp retroillumination)', whyOrdered: 'Assess integrity of the iris pigment epithelium', expectedFinding: 'Diffuse transillumination defect throughout the iris', contribution: 'Supports clinical diagnosis of albinism' },
      { name: 'Genetic testing', whyOrdered: 'Confirm specific gene/subtype (e.g., tyrosinase-related genes, GPR143) and inheritance pattern', expectedFinding: 'Pathogenic variant in an albinism-associated gene', contribution: 'Confirms diagnosis, clarifies inheritance for genetic counseling, and distinguishes oculocutaneous from ocular albinism' },
      { name: 'Cycloplegic refraction', whyOrdered: 'Quantify refractive error, which is typically high in albinism', expectedFinding: 'High hyperopia, myopia, and/or astigmatism', contribution: 'Guides optical correction to maximize best-corrected acuity' },
    ],
    diagnosis: {
      confirmation:
        'Diagnosis is made clinically from the characteristic combination of nystagmus, iris transillumination defects, foveal hypoplasia on exam/OCT, and hypopigmentation, supported by VEP demonstrating abnormal chiasmal crossing and confirmed with genetic testing when subtype classification or genetic counseling is needed.',
      classification: 'Oculocutaneous albinism (autosomal recessive, affects skin, hair, and eyes; multiple genetic subtypes) versus ocular albinism (X-linked recessive, GPR143 gene, affects primarily the eyes with normal or near-normal skin/hair pigmentation)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Full cycloplegic refractive correction with spectacles or contact lenses to maximize best-corrected visual acuity; tinted lenses, photochromic lenses, or sunglasses to manage photophobia and glare; broad-brimmed hats and UV protection given reduced ocular and cutaneous pigment' },
      { category: 'Second-line treatment', detail: 'Low vision rehabilitation services (magnification, large print, preferential seating) tailored to the degree of reduced acuity from foveal hypoplasia; prism or base-out correction has been used in select cases to dampen nystagmus, though efficacy is variable' },
      { category: 'Referral', detail: 'Refer to pediatric ophthalmology/strabismus specialist for evaluation and management of strabismus or significant nystagmus; genetics referral for confirmatory testing and family counseling given inheritance implications; dermatology referral for skin cancer surveillance in oculocutaneous albinism' },
    ],
    managementProtocol: {
      workup: [
        'Cycloplegic refraction to quantify the typically high refractive error and guide optical correction',
        'OCT of the macula to confirm and grade foveal hypoplasia as the structural correlate of reduced acuity',
        'Iris transillumination on slit lamp retroillumination to document pigment epithelial loss',
        'VEP with monocular stimulation when the diagnosis is uncertain (e.g., isolated ocular albinism without cutaneous findings) to demonstrate abnormal chiasmal decussation',
        'Cover testing and assessment of nystagmus characteristics/null point',
      ],
      initialTreatment:
        'There is no treatment that restores melanin or corrects foveal hypoplasia, so management is entirely supportive: full cycloplegic refractive correction with spectacles or contact lenses to maximize best-corrected acuity, tinted/photochromic lenses or sunglasses for photophobia and glare, and UV protection given reduced ocular and cutaneous pigment.',
      followUpSchedule:
        'Regular pediatric eye examinations, at least annually, to monitor refractive error, visual development, and ocular alignment; shorten when new or worsening strabismus is suspected or when optical/low vision needs change with increasing visual demands (e.g., school entry).',
      escalationCriteria: [
        'New or worsening ocular misalignment on serial cover testing',
        'Refractive error or acuity not stabilizing with optimal optical correction',
        'Functional limitation from photophobia/glare not adequately addressed by tints',
      ],
      referralCriteria: [
        'Significant nystagmus or strabismus -> pediatric ophthalmology/strabismus specialist',
        'Need for confirmatory genetic testing, subtype classification, or family counseling -> genetics',
        'Oculocutaneous albinism -> dermatology for lifelong skin cancer surveillance given loss of protective cutaneous melanin',
        'Reduced acuity limiting function despite optimal correction -> low vision rehabilitation services',
      ],
      complications: [
        'Amblyopia/strabismus if not appropriately managed',
        'Photophobia-related functional limitations',
        'Markedly increased lifetime cutaneous skin cancer risk in oculocutaneous albinism',
      ],
      monitoringParameters: [
        'Best-corrected visual acuity',
        'Refractive error stability',
        'Ocular alignment/strabismus',
        'Nystagmus characteristics (amplitude, null point)',
      ],
      relatedExamTechniqueIds: ['oct-macula', 'iris-transillumination-testing', 'visual-evoked-potential', 'cycloplegic-retinoscopy', 'cover-test'],
    },
    followUp: {
      typical: 'Regular pediatric eye examinations, at least annually, to monitor refractive error, visual development, and ocular alignment',
      monitor: 'Best-corrected visual acuity, refractive error stability, ocular alignment/strabismus, and nystagmus characteristics',
      progression: 'Visual acuity and nystagmus are generally stable rather than progressive; a new or worsening ocular misalignment warrants strabismus evaluation',
      shortenWhen: 'New-onset or worsening strabismus, or when optical/low vision management needs adjustment as visual demands change (e.g., school entry)',
    },
    prognosis: {
      typicalCourse: 'Visual acuity is reduced from birth (commonly in the range of legal blindness to moderate low vision, though highly variable by subtype) and remains relatively stable throughout life rather than progressively declining',
      progressionRisk: 'Low risk of progressive vision loss from the albinism itself; nystagmus amplitude often decreases somewhat with age, which may modestly improve functional acuity',
      complications: 'Amblyopia/strabismus if not appropriately managed, photophobia-related functional limitations, and in oculocutaneous albinism, markedly increased lifetime risk of cutaneous skin cancer due to loss of protective skin melanin',
      visualPrognosis: 'Visual acuity is typically permanently reduced due to foveal hypoplasia but is usable and stable; appropriate refractive correction, tinted lenses, and low vision aids substantially improve functional performance',
    },
    clinicalPearls: [
      'Foveal hypoplasia, not the nystagmus or iris findings themselves, is the primary structural driver of reduced visual acuity in albinism — always evaluate the fovea with OCT.',
      'Ocular albinism can present with normal or near-normal skin and hair pigmentation, so absence of cutaneous findings does not rule out albinism — check iris transillumination and consider VEP.',
      'VEP demonstrating excess crossing of nerve fibers at the chiasm is a distinctive electrophysiologic signature of albinism, useful in equivocal or isolated ocular presentations.',
      'There is no treatment that restores melanin or corrects foveal hypoplasia; management is entirely supportive (refraction, tints, low vision aids, and monitoring for strabismus/amblyopia).',
      'Counsel patients with oculocutaneous albinism on strict UV/sun protection given significantly elevated skin cancer risk from loss of cutaneous melanin.',
    ],
    highYield: [
      'Albinism = genetic defect in melanin production (oculocutaneous, autosomal recessive) or melanocyte function/trafficking (ocular albinism, X-linked, GPR143)',
      'Classic ocular triad: iris transillumination defects, foveal hypoplasia, and nystagmus',
      'Abnormal chiasmal decussation (excess crossing) can be demonstrated objectively on VEP and may contribute to strabismus',
      'Foveal hypoplasia is the main driver of reduced visual acuity, not the nystagmus itself',
      'Ocular albinism (X-linked) can have normal/near-normal skin and hair pigmentation, unlike oculocutaneous albinism',
      'No curative treatment exists; management is supportive — refractive correction, tinted lenses/sunglasses for photophobia, low vision aids, and strabismus/amblyopia monitoring',
    ],
  },
  {
    id: 'vitamin-a-deficiency',
    name: 'Vitamin A Deficiency',
    aliases: ['Xerophthalmia'],
    category: 'Systemic Health - Nutritional',
    definition:
      'A nutritional deficiency of vitamin A (retinol) producing a well-defined spectrum of ocular surface and retinal findings termed xerophthalmia, ranging from early night blindness through progressive conjunctival and corneal xerosis to potentially blinding corneal melting (keratomalacia) in severe, untreated cases; it remains a leading cause of preventable childhood blindness worldwide.',
    affectedStructure:
      'Rod photoreceptors (rhodopsin regeneration), conjunctival and corneal epithelium (keratinizing squamous metaplasia), and cornea (stroma, in severe keratomalacia)',
    pathologicalProcess:
      'Insufficient dietary intake, malabsorption, or impaired hepatic storage/mobilization of vitamin A reduces circulating retinol available to peripheral tissues; retinol deficiency first impairs regeneration of rhodopsin in rod photoreceptors (causing night blindness) and, with more prolonged or severe deficiency, causes keratinizing squamous metaplasia of the conjunctival and corneal epithelium, loss of mucin-producing goblet cells, and severe destabilization of the tear film and ocular surface, progressing in advanced untreated cases to stromal keratolysis (keratomalacia) and corneal perforation.',
    epidemiology: {
      typicalAge: 'Most severe ocular manifestations occur in young children in resource-limited settings; in developed countries seen in the setting of malabsorption or malnutrition at any age',
      prevalence: 'Leading cause of preventable childhood blindness worldwide; a significant public health problem in many developing regions, particularly where diets are low in vitamin A and pro-vitamin A carotenoids',
      importantPopulations: 'Malnourished children in resource-limited settings, pregnant/lactating women with inadequate intake, and patients in developed countries with malabsorptive conditions or chronic alcoholism',
    },
    riskFactors: [
      { label: 'Chronic malnutrition or inadequate dietary intake of vitamin A/carotenoids', tier: 'major' },
      { label: 'Malabsorption syndromes (cystic fibrosis, celiac disease, chronic pancreatic insufficiency, inflammatory bowel disease)', tier: 'major' },
      { label: 'Bariatric surgery (particularly malabsorptive procedures) with inadequate supplementation', tier: 'major' },
      { label: 'Chronic alcoholism (impaired hepatic storage/metabolism of vitamin A)', tier: 'moderate' },
      { label: 'Young age in resource-limited settings, pregnancy/lactation with inadequate intake', tier: 'moderate' },
      { label: 'Severe chronic liver disease', tier: 'associated' },
    ],
    pathophysiology: [
      'Vitamin A (retinol) is required to regenerate rhodopsin in rod photoreceptor outer segments after photobleaching; deficiency impairs dark adaptation first, producing night blindness (nyctalopia), classically the earliest clinical symptom',
      'With more sustained deficiency, vitamin A-dependent maintenance of normal epithelial differentiation fails, and the conjunctival epithelium undergoes keratinizing squamous metaplasia with loss of mucin-secreting goblet cells',
      'Loss of the mucin layer and epithelial keratinization destabilize the tear film, producing conjunctival xerosis (dryness) and the characteristic foamy, triangular Bitot spots composed of keratin debris and gas-forming bacteria on the bulbar conjunctiva',
      'Continued deficiency extends xerosis to the cornea (corneal xerosis), with epithelial haze, punctate keratopathy, and increased susceptibility to infection and ulceration',
      'In severe, prolonged, untreated deficiency (often compounded by concurrent infection or protein-energy malnutrition), stromal keratolysis develops (keratomalacia), a liquefactive necrosis of the corneal stroma that can progress rapidly to perforation and permanent blindness',
    ],
    symptoms: {
      common: ['Night blindness (nyctalopia) — classically the earliest symptom', 'Dry, gritty, irritated eyes', 'Photophobia'],
      lessCommon: ['Decreased vision if corneal involvement is present', 'Systemic signs of malnutrition (poor growth, skin changes) in children'],
      importantNegatives: ['Early night blindness may occur without any visible external ocular surface signs, so a history of poor dark adaptation should prompt evaluation even with a normal-appearing anterior segment'],
      typicalProgression:
        'Night blindness is typically the earliest manifestation, followed with worsening/prolonged deficiency by conjunctival xerosis and Bitot spots, then corneal xerosis, and in severe untreated cases progression to corneal ulceration and keratomalacia (corneal melting) with risk of perforation and permanent blindness.',
    },
    signs: [
      { area: 'Cornea', finding: 'Corneal xerosis (dryness, haze, punctate epithelial keratopathy) progressing in severe deficiency to corneal ulceration and keratomalacia (stromal liquefactive necrosis/melting), which can extend to perforation if untreated' },
      { area: 'External', finding: 'Conjunctival xerosis (dry, thickened, non-wettable bulbar conjunctiva) and Bitot spots — foamy, gray-white, triangular patches of keratin debris on the bulbar conjunctiva, classically in the interpalpebral zone, from keratinizing squamous metaplasia' },
      { area: 'Other', finding: 'Impaired dark adaptation/night blindness on history; abnormal (reduced) dark-adapted electroretinogram response in more advanced deficiency' },
    ],
    differentialDiagnosis: [
      { disease: 'Sjögren syndrome / other aqueous-deficient dry eye', whySimilar: 'Conjunctival and corneal xerosis with dry eye symptoms', keyDistinguisher: 'Vitamin A deficiency features Bitot spots and a history of night blindness/malnutrition or malabsorption, with normal Schirmer testing relative to the severity of surface disease, and responds rapidly to vitamin A supplementation rather than immunomodulatory dry eye therapy' },
      { disease: 'Retinitis pigmentosa and other inherited rod-cone dystrophies', whySimilar: 'Night blindness as a presenting symptom', keyDistinguisher: 'Inherited retinal dystrophies show progressive bone-spicule pigmentary retinopathy, attenuated vessels, and an abnormal ERG that does not improve with vitamin A repletion; vitamin A deficiency night blindness reverses rapidly with supplementation and has a nutritional/malabsorptive history' },
      { disease: 'Infectious or exposure keratitis (e.g., bacterial or herpetic keratitis)', whySimilar: 'Corneal ulceration and epithelial defect', keyDistinguisher: 'Vitamin A deficiency keratomalacia occurs in the setting of documented nutritional deficiency/malabsorption with bilateral conjunctival xerosis and Bitot spots, whereas infectious keratitis is typically unilateral with an identifiable infectious source or exposure history and responds to antimicrobial rather than nutritional therapy' },
    ],
    diagnosticTesting: [
      { name: 'Serum retinol level', whyOrdered: 'Directly quantify vitamin A status', expectedFinding: 'Low serum retinol (typically less than 20 mcg/dL in deficiency)', contribution: 'Confirms the biochemical diagnosis of vitamin A deficiency' },
      { name: 'Dark-adapted electroretinogram (ERG)', whyOrdered: 'Objectively assess rod photoreceptor function when night blindness is reported', expectedFinding: 'Reduced scotopic (rod-mediated) ERG amplitude that improves following vitamin A repletion', contribution: 'Confirms a functional rod photoreceptor deficit consistent with vitamin A deficiency and helps distinguish it from a fixed inherited retinal dystrophy, which does not normalize with supplementation' },
      { name: 'Slit lamp examination of the conjunctiva and cornea', whyOrdered: 'Assess for and stage ocular surface xerophthalmia findings', expectedFinding: 'Conjunctival xerosis, Bitot spots, corneal xerosis, or in severe cases corneal ulceration/keratomalacia', contribution: 'Establishes clinical staging of ocular involvement and urgency of treatment' },
      { name: 'Conjunctival impression cytology', whyOrdered: 'Detect subclinical/early goblet cell loss and squamous metaplasia', expectedFinding: 'Reduced goblet cell density with keratinized squamous cells', contribution: 'Can identify early or subclinical deficiency before overt Bitot spots are visible' },
    ],
    diagnosis: {
      criteria: 'World Health Organization xerophthalmia classification stages disease severity from night blindness (XN) through conjunctival xerosis (X1A), Bitot spots (X1B), corneal xerosis (X2), corneal ulceration/keratomalacia (X3A/X3B), to corneal scarring (XS) and xerophthalmia fundus (XF)',
      confirmation: 'Diagnosis is established by the clinical constellation of night blindness and/or characteristic ocular surface findings (conjunctival xerosis, Bitot spots, corneal xerosis or ulceration) in a patient with a nutritional risk factor, confirmed by a low serum retinol level.',
    },
    management: [
      { category: 'First-line treatment', detail: 'High-dose oral vitamin A supplementation per WHO/standard dosing protocols to correct systemic deficiency, along with correction of the underlying cause (dietary counseling, treatment of malabsorptive disease, cessation of alcohol use where relevant)' },
      { category: 'First-line treatment', detail: 'Lubrication with preservative-free artificial tears and ointment for conjunctival/corneal xerosis while systemic repletion takes effect' },
      { category: 'Emergency management', detail: 'Corneal ulceration or keratomalacia represents a sight-threatening emergency requiring urgent systemic vitamin A repletion, aggressive ocular lubrication, prophylactic topical antimicrobial coverage to prevent secondary infection, and same-day ophthalmology evaluation to reduce the risk of perforation' },
      { category: 'Referral', detail: 'Urgent referral to ophthalmology (cornea specialist) for any corneal xerosis, ulceration, or suspected keratomalacia; referral to primary care/nutrition or gastroenterology to identify and treat the underlying nutritional or malabsorptive cause' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp examination of the conjunctiva and cornea to stage ocular surface involvement per the WHO xerophthalmia classification (night blindness, conjunctival xerosis, Bitot spots, corneal xerosis, ulceration/keratomalacia, scarring)',
        'Serum retinol level to confirm the biochemical diagnosis',
        'History-based assessment of dark adaptation/night blindness, since this can precede any visible ocular surface signs',
        'Coordinate with primary care/nutrition or gastroenterology to identify the underlying dietary or malabsorptive cause',
      ],
      initialTreatment:
        'High-dose oral vitamin A supplementation is first-line and follows a standard age-based WHO protocol — 50,000 IU for infants under 6 months, 100,000 IU for 6-11 months, and 200,000 IU for children 12 months and older — given as a dose on day 1, repeated on day 2, and again at 2 weeks; this is paired with preservative-free lubrication for ocular surface xerosis while systemic repletion takes effect, and treatment of the underlying nutritional or malabsorptive cause.',
      followUpSchedule:
        'Close interval follow-up (days) during acute treatment of any corneal involvement to confirm response to supplementation and lubrication; once stable, longer-interval follow-up to confirm resolution of conjunctival/corneal xerosis and to monitor for recurrence if the underlying cause is not fully corrected.',
      escalationCriteria: [
        'Worsening corneal haze, new epithelial defect, or stromal thinning during treatment, indicating progression toward keratomalacia',
        'Any corneal involvement present at initial presentation',
        'Failure of night blindness or conjunctival xerosis to improve within days of starting supplementation',
      ],
      referralCriteria: [
        'Any corneal xerosis, ulceration, or suspected keratomalacia -> urgent same-day ophthalmology (cornea specialist) referral given the risk of rapid progression to perforation',
        'Underlying malabsorptive disease (cystic fibrosis, celiac disease, bariatric surgery) or chronic alcoholism suspected -> primary care/nutrition or gastroenterology',
      ],
      complications: [
        'Corneal scarring or perforation from keratomalacia if treatment is delayed',
        'Permanent visual loss from advanced, unmonitored keratomalacia',
        'Secondary microbial infection of the compromised ocular surface',
      ],
      monitoringParameters: [
        'Corneal clarity/integrity',
        'Conjunctival xerosis and Bitot spot resolution',
        'Night vision/dark adaptation history',
        'Serum retinol trend',
      ],
      relatedExamTechniqueIds: ['fluorescein-corneal-staining', 'slit-lamp-illumination-techniques'],
    },
    followUp: {
      typical: 'Close interval follow-up (days) during acute treatment of corneal involvement to confirm response to supplementation and lubrication; longer-interval follow-up once stable to confirm resolution of conjunctival/corneal xerosis and monitor for recurrence if the underlying cause is not fully corrected',
      monitor: 'Corneal clarity/integrity, conjunctival xerosis and Bitot spot resolution, night vision/dark adaptation history, and serum retinol trend',
      progression: 'Worsening corneal haze, new epithelial defect, or thinning during treatment indicates progression toward keratomalacia and requires urgent escalation',
      shortenWhen: 'Any corneal involvement (xerosis, ulceration, or suspected keratomalacia) at presentation',
    },
    prognosis: {
      typicalCourse: 'Night blindness and early conjunctival findings (xerosis, Bitot spots) typically improve rapidly, often within days, with vitamin A repletion',
      progressionRisk: 'Without treatment, deficiency can progress along the xerophthalmia spectrum from night blindness to corneal ulceration and keratomalacia, particularly in the setting of concurrent infection or severe malnutrition',
      complications: 'Corneal scarring, corneal perforation, and permanent visual loss or blindness if keratomalacia occurs and is not treated promptly; systemically, vitamin A deficiency also increases susceptibility to infection and childhood mortality',
      visualPrognosis: 'Excellent for early-stage disease (night blindness, conjunctival xerosis/Bitot spots), which is fully reversible with prompt supplementation; guarded for advanced keratomalacia, where corneal scarring and vision loss are often permanent even after systemic correction',
    },
    clinicalPearls: [
      'Night blindness is classically the earliest symptom of vitamin A deficiency and can precede any visible ocular surface findings — ask about dark adaptation difficulty in at-risk patients.',
      'Bitot spots (foamy, triangular, gray-white conjunctival patches) are a hallmark, relatively specific sign of vitamin A deficiency and typically resolve with supplementation.',
      'Keratomalacia is a true ophthalmic emergency — corneal melting can progress to perforation rapidly, and any corneal involvement warrants same-day ophthalmology referral alongside systemic vitamin A repletion.',
      'Always consider malabsorptive disease (cystic fibrosis, celiac disease, bariatric surgery) and alcoholism as causes of vitamin A deficiency in patients from resource-rich settings, not only global malnutrition.',
      'Early findings (night blindness, conjunctival xerosis, Bitot spots) are fully reversible with treatment, but corneal scarring from advanced keratomalacia is frequently permanent — early recognition and treatment are critical.',
    ],
    highYield: [
      'Vitamin A deficiency is a leading cause of preventable childhood blindness worldwide',
      'Night blindness (nyctalopia) is classically the earliest symptom, from impaired rhodopsin regeneration in rod photoreceptors',
      'Bitot spots = foamy, gray-white, triangular patches on the bulbar conjunctiva from keratinizing squamous metaplasia',
      'Disease progresses along a spectrum: night blindness to conjunctival xerosis/Bitot spots to corneal xerosis to keratomalacia (corneal melting)',
      'Risk factors include malnutrition, malabsorptive disease (cystic fibrosis, celiac disease, bariatric surgery), and alcoholism',
      'Treatment is systemic vitamin A supplementation; early findings reverse quickly, but corneal scarring from advanced keratomalacia is often permanent',
    ],
  },
]
