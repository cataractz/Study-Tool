import type { Disease } from '../../types/disease'

export const retinaAdditional6: Disease[] = [
  {
    id: 'acute-retinal-necrosis',
    name: 'Acute Retinal Necrosis',
    aliases: ['ARN'],
    category: 'Retina',
    definition:
      'A rare but severe, rapidly progressive necrotizing herpetic retinitis caused by herpes simplex virus (HSV-1, HSV-2) or varicella-zoster virus (VZV), characterized by the classic triad of peripheral necrotizing retinitis, occlusive retinal vasculitis, and prominent vitritis; a true ophthalmic emergency given its rapid progression and high rate of subsequent rhegmatogenous retinal detachment.',
    affectedStructure: 'Full-thickness peripheral retina, retinal arterioles (occlusive vasculitis), and vitreous',
    pathologicalProcess:
      'Direct lytic infection of retinal cells by HSV or VZV produces full-thickness coagulative retinal necrosis beginning in the peripheral retina, with associated occlusive arteritis and marked vitreous inflammatory reaction; necrosis spreads circumferentially and centrally if untreated, and the resulting thin, necrotic, atrophic retina is highly prone to full-thickness breaks and rhegmatogenous retinal detachment.',
    epidemiology: {
      typicalAge: 'Bimodal — younger patients more often associated with HSV, older patients more often associated with VZV, but can occur at any age',
      sexDistribution: 'No strong sex predilection',
      prevalence: 'Rare (estimated on the order of 1 in several hundred thousand per year), but disproportionately vision- and eye-threatening when it occurs',
      importantPopulations: 'Occurs in immunocompetent as well as immunocompromised patients, unlike CMV retinitis, which is essentially confined to severely immunocompromised hosts; can follow herpes zoster ophthalmicus or occur without any preceding cutaneous or systemic herpetic history',
    },
    riskFactors: [
      { label: 'Prior herpes simplex or varicella-zoster infection (including herpes zoster ophthalmicus)', tier: 'major' },
      { label: 'History of herpetic encephalitis or meningitis (VZV/HSV)', tier: 'moderate' },
      { label: 'Immunosuppression (increases risk and severity, but disease also occurs in fully immunocompetent patients)', tier: 'moderate' },
      { label: 'Older age (VZV-associated ARN)', tier: 'associated' },
      { label: 'Younger age, occasionally bilateral in this group (HSV-associated ARN)', tier: 'associated' },
    ],
    pathophysiology: [
      'Reactivation (or, less commonly, primary infection) of HSV or VZV within the eye leads to direct viral cytopathic infection of retinal cells',
      'Infection produces full-thickness coagulative retinal necrosis that classically begins in the peripheral retina as well-demarcated, confluent white lesions',
      'Necrotizing lesions progress circumferentially and centripetally (toward the posterior pole) over days if untreated, threatening the macula and optic nerve',
      'Occlusive retinal arteritis (more than phlebitis) is a defining feature, producing a "sheathed" or "boxcar" appearance of retinal arterioles and contributing further ischemic retinal damage — this arteriolar-predominant vasculitis helps distinguish ARN from many other retinitides',
      'Marked vitreous and anterior chamber inflammation (vitritis, often granulomatous keratic precipitates and elevated IOP) accompanies the retinitis, in contrast to the minimal inflammation typical of CMV retinitis',
      'Necrotic, atrophic, thinned retina — especially at the junction between necrotic and healthy tissue — is highly prone to full-thickness breaks; combined with vitreous traction from the associated inflammation, this produces a very high rate of rhegmatogenous retinal detachment, often multifocal, occurring in a substantial proportion of eyes even after antiviral treatment'
    ],
    symptoms: {
      common: ['Ocular pain (often more prominent than in other infectious retinitides)', 'Red eye', 'Blurred vision', 'Floaters', 'Photophobia'],
      lessCommon: ['Peripheral visual field loss', 'Preceding or concurrent dermatomal vesicular rash (V1 distribution) if related to herpes zoster ophthalmicus', 'History of prior herpetic disease (cold sores, encephalitis, prior contralateral ARN)'],
      importantNegatives: ['Unlike CMV retinitis, ARN is typically painful and inflamed rather than painless and quiet', 'Vision loss can progress rapidly over days, unlike the more gradual course of CMV retinitis'],
      typicalProgression: 'Rapid progression over days to a couple of weeks from peripheral necrotizing retinitis to circumferential and posterior extension if untreated; even with prompt antiviral therapy, retinal detachment often develops weeks to a few months after the acute retinitis has been controlled, once the necrotic retina and vitreous traction evolve.',
    },
    signs: [
      { area: 'Anterior Chamber', finding: 'Anterior uveitis, often granulomatous with mutton-fat keratic precipitates; elevated intraocular pressure is common' },
      { area: 'Vitreous', finding: 'Prominent, often dense vitritis — a hallmark feature distinguishing ARN from the minimally inflamed vitreous typical of CMV retinitis' },
      { area: 'Retina', finding: 'Well-demarcated, confluent, multifocal areas of peripheral retinal whitening/necrosis that progress circumferentially and centrally; occlusive retinal arteritis with vascular sheathing ("boxcar" segmentation of blood column in severe occlusion)' },
      { area: 'Retina', finding: 'Retinal hemorrhage may be present but is typically less prominent than the confluent necrotic whitening; late findings include retinal atrophy, multiple full-thickness breaks, and rhegmatogenous retinal detachment' },
      { area: 'Optic Nerve', finding: 'Optic disc edema or, in severe cases, optic neuropathy may be present' },
    ],
    differentialDiagnosis: [
      { disease: 'Cytomegalovirus retinitis', whySimilar: 'Both are necrotizing, potentially blinding herpesvirus-family retinitides that can present with retinal whitening and hemorrhage', keyDistinguisher: 'ARN is more rapidly progressive and truly necrotizing with well-demarcated confluent peripheral whitening, prominent pain, dense vitritis, and occlusive (predominantly arteriolar) vasculitis, and occurs across the full spectrum of immune status (including immunocompetent patients); CMV retinitis is classically indolent and slowly progressive, minimally inflamed with little to no vitritis, shows a granular hemorrhagic "pizza pie" pattern following the vascular arcades rather than confluent peripheral necrosis, is typically painless, and occurs almost exclusively in severely immunocompromised patients (e.g., CD4 count below ~50 cells/microliter)' },
      { disease: 'Toxoplasma retinochoroiditis', whySimilar: 'Focal necrotizing retinitis with overlying vitritis', keyDistinguisher: 'Toxoplasmosis classically presents as a single focal lesion adjacent to an old pigmented chorioretinal scar ("headlight in the fog") rather than confluent, circumferentially progressive peripheral necrosis, and lacks the prominent occlusive arteritis characteristic of ARN' },
      { disease: 'Progressive outer retinal necrosis (PORN)', whySimilar: 'Also a VZV-related necrotizing retinitis, can be considered a variant/relative of ARN', keyDistinguisher: 'PORN occurs almost exclusively in severely immunocompromised (especially AIDS) patients, characteristically spares the retinal vasculature (minimal vasculitis) and vitreous (minimal to no vitritis), starts in the posterior/perimacular retina rather than the periphery, and progresses even more rapidly with a worse prognosis than ARN' },
    ],
    diagnosticTesting: [
      { name: 'Clinical examination (dilated fundus exam)', whyOrdered: 'Primary basis for diagnosis using the American Uveitis Society (Standardized Uveitis Nomenclature/ARN) clinical criteria', expectedFinding: 'Discrete peripheral necrotizing retinal lesion(s) with circumferential progression, occlusive vasculitis, and prominent vitritis/anterior chamber inflammation', contribution: 'ARN remains a clinical diagnosis; characteristic findings in the correct evolution over time establish the diagnosis and drive urgent empiric treatment' },
      { name: 'Aqueous or vitreous fluid PCR', whyOrdered: 'Confirm and identify the specific causative virus (HSV-1, HSV-2, or VZV)', expectedFinding: 'Positive PCR for HSV or VZV DNA', contribution: 'Provides definitive microbiologic confirmation and can guide antiviral selection/duration, though treatment should not be delayed while awaiting results given the emergent nature of the disease' },
      { name: 'B-scan ultrasonography', whyOrdered: 'Assess retinal status when vitritis significantly obscures the fundus view', expectedFinding: 'May show vitreous debris/opacity; can help detect an evolving retinal detachment when the view is poor', contribution: 'Useful adjunct for monitoring when direct visualization is limited' },
      { name: 'HIV testing and other immune status workup', whyOrdered: 'ARN can occur in immunocompetent patients, but underlying immunosuppression should be assessed, particularly if the presentation is atypical or bilateral', expectedFinding: 'Variable; most ARN patients are immunocompetent', contribution: 'Helps rule out an immunocompromised state that would raise concern for PORN or CMV retinitis instead, and informs systemic management' },
    ],
    diagnosis: {
      criteria: 'Diagnosis is primarily clinical, based on the American Uveitis Society criteria: one or more foci of well-demarcated peripheral retinal necrosis, rapid circumferential progression without treatment, evidence of occlusive vasculopathy with arterial involvement, and a prominent inflammatory reaction in the vitreous and anterior chamber',
      confirmation: 'Confirmed by the characteristic clinical evolution on serial exam; aqueous or vitreous PCR for HSV/VZV DNA provides definitive virologic confirmation and helps exclude mimics (e.g., CMV, toxoplasmosis) when the presentation is atypical.',
      classification: 'Caused by HSV or VZV; can be unilateral (most common) or bilateral (bilateral acute retinal necrosis, BARN, more classically associated with HSV and with a worse prognosis)',
    },
    management: [
      { category: 'Emergency management', detail: 'True ophthalmic emergency requiring same-day/urgent retina and often infectious disease co-management; immediate initiation of high-dose intravenous acyclovir (or equivalent systemic antiviral) is standard, frequently combined with adjunctive intravitreal antiviral injection (e.g., foscarnet or ganciclovir) for rapid, high local drug concentration, especially with posterior or vision-threatening involvement' },
      { category: 'First-line treatment', detail: 'Systemic antiviral therapy is typically transitioned from an initial intravenous induction course to a prolonged oral antiviral maintenance course; concurrent topical and/or oral corticosteroid therapy for anterior segment and vitreous inflammation is often added after antiviral coverage is established' },
      { category: 'Advanced treatment', detail: 'Prophylactic laser demarcation/retinopexy along the border of necrotic and healthy retina is considered in select cases to reduce the risk of subsequent rhegmatogenous retinal detachment; pars plana vitrectomy is performed for established retinal detachment or non-clearing vitreous hemorrhage' },
      { category: 'Referral', detail: 'Urgent same-day referral to a retina specialist (and often uveitis specialist) for any suspected case; coordinate with infectious disease for systemic antiviral dosing, especially in atypical or immunocompromised presentations' },
    ],
    managementProtocol: {
      workup: [
        'Same-day dilated fundus exam applying American Uveitis Society clinical criteria to establish the diagnosis and stage the extent of necrosis',
        'Aqueous or vitreous fluid PCR for HSV/VZV DNA to confirm the causative virus, without delaying empiric treatment',
        'B-scan ultrasonography when vitritis obscures the view, to assess for early retinal detachment',
        'HIV testing and immune status workup, particularly for atypical, bilateral, or severe presentations',
      ],
      initialTreatment:
        'Emergent high-dose intravenous acyclovir (approximately 10-15 mg/kg every 8 hours) for 5-10 days is standard induction therapy, often combined with adjunctive intravitreal antiviral injection for rapid local drug concentration in posterior or vision-threatening involvement; IV therapy is then transitioned to a prolonged oral antiviral (high-dose acyclovir or valacyclovir) for an additional several weeks to months, with adjunctive oral or topical corticosteroid added once antiviral coverage is established to control anterior/vitreous inflammation.',
      followUpSchedule:
        'Very frequent follow-up during the acute phase (every few days to weekly) to monitor retinitis activity and detect early retinal breaks, continuing closely for weeks to months given the delayed detachment risk even after the retinitis is controlled.',
      escalationCriteria: [
        'Continued circumferential or posterior extension of necrosis despite antiviral therapy',
        'New retinal break or evidence of evolving retinal detachment on serial exam',
        'Worsening vitritis or new fellow-eye lesions (particularly with HSV-associated disease)',
      ],
      referralCriteria: [
        'Any suspected case -> urgent same-day retina specialist (and often uveitis specialist) referral',
        'Coordinate with infectious disease for systemic antiviral dosing, especially in atypical or immunocompromised presentations',
      ],
      steroidConsiderations:
        'Oral or topical corticosteroid is added after antiviral coverage is established (typically 24-48 hours into antiviral therapy) to control anterior chamber and vitreous inflammation; steroids should never be started before antiviral coverage given the risk of accelerating viral replication.',
      complications: [
        'Rhegmatogenous retinal detachment (often multifocal, occurring in a large proportion of eyes)',
        'Optic neuropathy',
        'Macular ischemia or involvement',
        'Vitreous hemorrhage',
        'Fellow-eye involvement, particularly HSV-associated and bilateral (BARN) disease',
      ],
      monitoringParameters: [
        'Extent/activity of retinal necrosis on serial exam',
        'New or progressive retinal breaks',
        'Vitreous inflammation grade',
        'Intraocular pressure',
        'Fellow-eye exam',
      ],
      relatedDrugIds: ['acyclovir-oral', 'valacyclovir-oral', 'prednisone'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'uveitis-laboratory-workup', 'dilated-fundus-examination-systematic-approach'],
    },
    followUp: {
      typical: 'Very frequent follow-up during the acute phase (often every few days to weekly) to monitor for progression of retinitis and early signs of retinal detachment, continuing closely for weeks to months given the delayed detachment risk even after retinitis is controlled',
      monitor: 'Extent and activity of retinal necrosis, evidence of new or progressive retinal breaks, vitreous inflammation, intraocular pressure, and fellow-eye involvement (can occur, particularly with HSV)',
      progression: 'Continued circumferential/posterior spread of necrosis despite treatment, new retinal breaks or detachment, worsening vitritis, or new fellow-eye lesions',
      shortenWhen: 'Posterior or macula-threatening involvement, evidence of the necrotic-healthy retinal junction thinning, immunocompromised status, or bilateral disease',
    },
    prognosis: {
      typicalCourse: 'Even with prompt, aggressive treatment, the retinitis itself can usually be controlled, but the affected retina remains structurally fragile',
      progressionRisk: 'Very high rate of subsequent rhegmatogenous retinal detachment (occurring in a large proportion of affected eyes, often within a few months of the acute episode) due to multiple breaks forming in necrotic, atrophic retina',
      complications: 'Rhegmatogenous retinal detachment (often complex/multifocal), optic neuropathy, macular ischemia or involvement, vitreous hemorrhage, and fellow-eye involvement (particularly in HSV-associated and bilateral ARN)',
      visualPrognosis: 'Guarded even with prompt treatment; the combination of direct retinal/optic nerve damage and the high subsequent retinal detachment rate results in a substantial proportion of eyes retaining poor final visual acuity, though early diagnosis and aggressive antiviral therapy improve outcomes',
    },
    clinicalPearls: [
      'ARN is a true ophthalmic emergency — do not delay antiviral treatment while awaiting PCR confirmation; treatment is started empirically on clinical suspicion.',
      'The triad of peripheral necrotizing retinitis, occlusive (arteriolar-predominant) vasculitis, and dense vitritis is the clinical signature of ARN and helps separate it from other necrotizing retinitides.',
      'Unlike CMV retinitis, which occurs almost exclusively in severely immunocompromised patients and is minimally inflamed, ARN occurs across the immune spectrum (including fully immunocompetent patients) and is markedly inflamed and painful.',
      'Even after the retinitis is controlled with antivirals, patients remain at high risk for rhegmatogenous retinal detachment for months — close, sustained follow-up is essential, and prophylactic laser demarcation is considered in select eyes.',
      'Bilateral ARN (BARN) carries a worse visual prognosis and should raise suspicion for HSV or an underlying immunocompromised state; monitor the fellow eye closely.',
    ],
    highYield: [
      'Classic triad of ARN: peripheral necrotizing retinitis + occlusive (arteritis-predominant) retinal vasculitis + prominent vitritis',
      'ARN occurs in immunocompetent AND immunocompromised patients, unlike CMV retinitis (severely immunocompromised only) — a key board distinguisher',
      'High-dose IV acyclovir (often with adjunctive intravitreal antiviral) is the emergent first-line treatment; treatment should not wait for PCR confirmation',
      'Very high rate of rhegmatogenous retinal detachment follows ARN due to necrotic, atrophic retina — prophylactic laser demarcation is used in select cases to reduce this risk',
      'Progressive outer retinal necrosis (PORN) is a related but distinct VZV entity seen almost exclusively in AIDS patients, with minimal vasculitis/vitritis and an even worse prognosis than ARN',
      'CMV retinitis: painless, minimal vitritis, hemorrhagic "pizza pie" pattern along arcades, CD4 <50. ARN: painful, dense vitritis, confluent peripheral necrosis with occlusive arteritis, any immune status.',
    ],
  },
  {
    id: 'retinal-vasculitis-eales-disease',
    name: 'Retinal Vasculitis and Eales Disease',
    aliases: ['Eales Disease', 'Idiopathic Peripheral Retinal Vasculitis'],
    category: 'Retina',
    definition:
      'Retinal vasculitis is inflammation of the retinal blood vessels (arteries, veins, or both) that can occur as an isolated ocular finding or as a manifestation of a broad range of infectious, autoimmune, and idiopathic systemic diseases; Eales disease is a specific idiopathic peripheral retinal vasculitis and vaso-occlusive disorder classically affecting young, otherwise healthy men, presenting with peripheral nonperfusion, vasculitis, and secondary neovascularization prone to recurrent vitreous hemorrhage.',
    affectedStructure: 'Retinal vasculature (venules and/or arterioles), with secondary effects on retinal perfusion, the vitreous (hemorrhage), and, in chronic cases, the macula',
    pathologicalProcess:
      'Inflammatory infiltration of the vessel wall (perivascular sheathing, vasculitis) causes vascular leakage, occlusion, and downstream capillary nonperfusion; ischemic, nonperfused retina upregulates VEGF, which can drive neovascularization at the disc, retina, or, in advanced cases, the iris, with fragile new vessels prone to hemorrhage. In Eales disease specifically, an idiopathic (historically postulated to relate to tuberculosis hypersensitivity) obliterative periphlebitis predominantly affects the peripheral retinal veins, producing peripheral capillary nonperfusion and secondary neovascularization.',
    epidemiology: {
      typicalAge: 'Retinal vasculitis broadly can occur at any age depending on the underlying cause; Eales disease classically affects young adults, typically in the second to fourth decades of life',
      sexDistribution: 'Eales disease shows a strong male predominance',
      prevalence: 'Retinal vasculitis is uncommon overall; Eales disease is more frequently reported in regions with higher tuberculosis prevalence (e.g., the Indian subcontinent), though it also occurs sporadically elsewhere',
      importantPopulations: 'Eales disease classically affects young, otherwise systemically healthy men; retinal vasculitis in general should prompt evaluation for an underlying autoimmune or infectious systemic disease, particularly when bilateral or associated with systemic symptoms',
    },
    riskFactors: [
      { label: 'Young adult male (Eales disease)', tier: 'major' },
      { label: 'Underlying autoimmune disease (e.g., Behçet disease, polyarteritis nodosa, sarcoidosis, VKH syndrome)', tier: 'major' },
      { label: 'Underlying infection (e.g., tuberculosis, syphilis)', tier: 'major' },
      { label: 'Tuberculosis exposure or latent infection / hypersensitivity reaction to mycobacterial antigen (proposed but debated mechanism in Eales disease)', tier: 'moderate' },
      { label: 'Residence in or travel to a region with higher tuberculosis prevalence', tier: 'associated' },
    ],
    pathophysiology: [
      'Immune-mediated or infectious injury to the retinal vessel wall produces perivascular inflammatory cell infiltration, seen clinically as vascular sheathing',
      'Inflamed vessels leak fluid and, when severe, occlude, producing areas of capillary nonperfusion that are best delineated on fluorescein angiography',
      'Chronic peripheral nonperfusion drives VEGF-mediated neovascularization, which is fragile and prone to bleeding into the vitreous cavity',
      'In Eales disease, an idiopathic obliterative periphlebitis (postulated in some patients to represent a delayed hypersensitivity response to mycobacterial protein, though a definitive causal link to tuberculosis remains unproven and many cases have no identifiable trigger) predominantly involves peripheral retinal veins',
      'Progressive peripheral vascular occlusion in Eales disease leads to extensive peripheral nonperfusion and secondary peripheral retinal neovascularization, which is the source of recurrent vitreous hemorrhage that often brings young patients to initial presentation',
    ],
    symptoms: {
      common: ['Floaters', 'Blurred vision', 'Sudden vision loss from vitreous hemorrhage (a classic presenting symptom of Eales disease in a young patient)', 'Asymptomatic peripheral disease may be found incidentally'],
      lessCommon: ['Metamorphopsia or central vision loss if macular edema or ischemia develops', 'Recurrent episodes of vitreous hemorrhage causing intermittent, recurring vision loss'],
      importantNegatives: ['Typically painless unless neovascular glaucoma or another secondary complication develops', 'Systemic symptoms are often absent in idiopathic Eales disease, in contrast to autoimmune causes of vasculitis which frequently have accompanying systemic features'],
      typicalProgression: 'Peripheral vasculitis and nonperfusion progress gradually, often asymptomatically, until secondary neovascularization develops and bleeds, producing episodic, recurrent vitreous hemorrhage; without treatment of the ischemic drive, hemorrhage episodes tend to recur.',
    },
    signs: [
      { area: 'Retina', finding: 'Perivascular sheathing (vasculitis) predominantly involving peripheral veins; areas of capillary nonperfusion, retinal hemorrhage, and, in later stages, peripheral neovascularization' },
      { area: 'Vitreous', finding: 'Vitreous hemorrhage, often recurrent, from bleeding peripheral neovascular fronds; vitritis may accompany active vasculitis' },
      { area: 'Retina', finding: 'Neovascularization elsewhere (NVE) or of the disc (NVD) in eyes with extensive peripheral nonperfusion; macular edema or epiretinal membrane may develop in chronic or recurrent cases' },
      { area: 'Anterior Chamber', finding: 'Anterior uveitis may be present, particularly when vasculitis is a manifestation of an underlying systemic autoimmune disease' },
      { area: 'Other', finding: 'Rubeosis iridis (iris neovascularization) can occur in eyes with extensive, longstanding peripheral nonperfusion' },
    ],
    differentialDiagnosis: [
      { disease: "Behçet disease", whySimilar: 'Retinal vasculitis with vascular occlusion, hemorrhage, and potential neovascularization', keyDistinguisher: 'Behçet is typically associated with recurrent oral/genital ulcers, skin lesions, and a more explosive, recurrent occlusive panuveitis/retinal vasculitis often affecting both arteries and veins, whereas Eales disease is idiopathic, occurs in otherwise healthy young men without systemic mucocutaneous findings, and predominantly involves peripheral veins' },
      { disease: 'Sarcoid uveitis (with retinal vasculitis)', whySimilar: 'Perivascular sheathing and vasculitis with vitritis', keyDistinguisher: 'Sarcoid vasculitis classically produces "candle wax drippings" (perivenous exudates) and is typically accompanied by granulomatous anterior uveitis and systemic findings (pulmonary hilar adenopathy, elevated ACE/lysozyme), distinct from the idiopathic, systemically silent picture of Eales disease' },
      { disease: 'Diabetic retinopathy with peripheral nonperfusion', whySimilar: 'Peripheral capillary nonperfusion and secondary neovascularization causing vitreous hemorrhage', keyDistinguisher: 'Diabetic retinopathy occurs in patients with established diabetes, shows bilateral symmetric microaneurysms/exudates/dot-blot hemorrhages correlating with disease duration, and lacks the primary perivascular sheathing/vasculitis seen in Eales disease' },
      { disease: 'Ocular tuberculosis / tubercular retinal vasculitis', whySimilar: 'Peripheral occlusive periphlebitis with neovascularization, overlapping strongly with the proposed pathogenesis of Eales disease', keyDistinguisher: 'Confirmed tubercular vasculitis is supported by a positive systemic TB workup (interferon-gamma release assay/tuberculin skin test, chest imaging, or direct evidence of infection) and generally warrants antitubercular therapy; Eales disease is by definition idiopathic once an infectious or autoimmune cause has been excluded, though the distinction can be genuinely difficult in practice' },
    ],
    diagnosticTesting: [
      { name: 'Fluorescein angiography (FA)', whyOrdered: 'Central test for characterizing retinal vasculitis of any cause', expectedFinding: 'Vascular wall staining/leakage, perivascular sheathing corresponding to hypofluorescent sheathed vessels, and well-demarcated areas of peripheral capillary nonperfusion; leakage from neovascular fronds when present', contribution: 'Defines the extent of active vasculitis and nonperfusion, guides laser treatment planning, and helps distinguish active from quiescent disease' },
      { name: 'B-scan ultrasonography', whyOrdered: 'Evaluate the retina when dense vitreous hemorrhage obscures the fundus view', expectedFinding: 'Vitreous opacities/hemorrhage without evidence of retinal detachment in uncomplicated cases', contribution: 'Rules out an associated tractional or rhegmatogenous retinal detachment when the fundus cannot be directly visualized' },
      { name: 'Directed systemic workup (based on clinical context)', whyOrdered: 'Identify an underlying infectious or autoimmune cause of the vasculitis before labeling it idiopathic (Eales disease)', expectedFinding: 'May reveal evidence of tuberculosis (interferon-gamma release assay, chest imaging), syphilis (treponemal/nontreponemal serology), or autoimmune disease (e.g., HLA typing, ANCA, ACE/lysozyme, imaging) depending on the clinical picture', contribution: 'Distinguishes a treatable underlying cause from idiopathic disease and determines whether systemic therapy is needed in addition to ocular treatment' },
      { name: 'Optical coherence tomography (OCT)', whyOrdered: 'Assess for macular edema or epiretinal membrane as a complication of chronic/recurrent vasculitis', expectedFinding: 'Retinal thickening/cystic changes with macular edema; epiretinal membrane in chronic cases', contribution: 'Guides need for adjunctive treatment of macular complications' },
    ],
    diagnosis: {
      criteria: 'Retinal vasculitis is diagnosed clinically by perivascular sheathing and/or angiographic vascular staining/leakage; Eales disease is a diagnosis of exclusion in a young, otherwise healthy patient (classically a young man) with peripheral retinal periphlebitis, nonperfusion, and neovascularization after infectious and autoimmune causes have been reasonably excluded',
      confirmation: 'Confirmed by fluorescein angiography demonstrating vascular sheathing, leakage, and peripheral capillary nonperfusion, combined with a directed systemic workup to identify (or exclude) an underlying infectious or autoimmune etiology.',
      classification: 'Classified by the affected vessel type (arteritis vs. periphlebitis vs. mixed), by underlying etiology (infectious, autoimmune, idiopathic/Eales), and by presence or absence of secondary ischemic complications (neovascularization, vitreous hemorrhage)',
    },
    management: [
      { category: 'Observation', detail: 'Mild, non-ischemic vasculitis without neovascularization may be observed with serial exam and angiography while systemic workup is completed' },
      { category: 'First-line treatment', detail: 'Treat any identified underlying systemic cause (e.g., antitubercular therapy for confirmed tubercular vasculitis, systemic immunosuppression for autoimmune vasculitis such as Behçet disease or sarcoidosis); control active intraocular inflammation with topical, periocular, or systemic corticosteroids as indicated by the underlying diagnosis' },
      { category: 'Second-line treatment', detail: 'Steroid-sparing systemic immunosuppressive therapy for recurrent or sight-threatening autoimmune-associated vasculitis, coordinated with rheumatology/uveitis specialists' },
      { category: 'Advanced treatment', detail: 'Scatter (sector) laser photocoagulation of ischemic/nonperfused peripheral retina to prevent or treat neovascularization and reduce risk of vitreous hemorrhage; pars plana vitrectomy for non-clearing vitreous hemorrhage or associated tractional complications' },
      { category: 'Referral', detail: 'Refer to a retina/uveitis specialist for angiography-guided laser planning and to internal medicine/infectious disease/rheumatology as indicated by systemic workup findings' },
    ],
    managementProtocol: {
      workup: [
        'Fluorescein angiography to define the extent of vascular sheathing, leakage, and peripheral capillary nonperfusion, and to guide laser planning',
        'B-scan ultrasonography when vitreous hemorrhage obscures the fundus view, to exclude an associated retinal detachment',
        'Directed systemic workup (interferon-gamma release assay/PPD and chest imaging for TB, treponemal serology for syphilis, autoimmune labs) to identify a treatable underlying cause before labeling the disease idiopathic (Eales)',
        'OCT to assess for macular edema or epiretinal membrane as a complication of chronic or recurrent vasculitis',
      ],
      initialTreatment:
        'Treatment targets the underlying cause when identified (antitubercular therapy for confirmed tubercular vasculitis, systemic immunosuppression for autoimmune vasculitis such as Behçet disease or sarcoidosis) alongside corticosteroid to control active intraocular inflammation. Scatter (sector) laser photocoagulation of ischemic, nonperfused peripheral retina is the mainstay for preventing or treating secondary neovascularization and reducing recurrent vitreous hemorrhage risk.',
      followUpSchedule:
        'Frequent follow-up (weeks to a few months) during active vasculitis or after laser treatment to confirm regression of neovascularization and resolution of active leakage on angiography; extend the interval once stable.',
      escalationCriteria: [
        'New areas of capillary nonperfusion or persistent/recurrent neovascularization despite laser treatment',
        'Recurrent vitreous hemorrhage',
        'Development of macular edema or epiretinal membrane',
        'An unresolved or inadequately treated underlying systemic cause',
      ],
      referralCriteria: [
        'Angiography-guided laser planning -> retina/uveitis specialist',
        'Positive systemic workup findings -> internal medicine/infectious disease (confirmed or suspected TB, syphilis) or rheumatology (Behçet, sarcoidosis, other autoimmune vasculitis)',
      ],
      steroidConsiderations:
        'Topical, periocular, or systemic corticosteroid controls active intraocular inflammation once (or while) an infectious cause is being excluded or treated; steroid-sparing systemic immunosuppression is used for recurrent or sight-threatening autoimmune-associated vasculitis, coordinated with rheumatology/uveitis specialists.',
      complications: [
        'Recurrent vitreous hemorrhage',
        'Tractional retinal detachment from fibrovascular proliferation',
        'Macular edema or epiretinal membrane',
        'Neovascular glaucoma in advanced ischemic cases',
        'Rubeosis iridis',
      ],
      monitoringParameters: [
        'Visual acuity',
        'Extent of vascular sheathing/leakage on serial exam or angiography',
        'Presence and regression of neovascularization',
        'Recurrence of vitreous hemorrhage',
        'Intraocular pressure (neovascular glaucoma risk)',
      ],
      relatedDrugIds: ['prednisolone-acetate', 'prednisone'],
      relatedExamTechniqueIds: ['fluorescein-angiography', 'b-scan-ultrasonography', 'uveitis-laboratory-workup', 'oct-macula'],
    },
    followUp: {
      typical: 'Frequent follow-up (weeks to a few months) during active vasculitis or after laser treatment to confirm regression of neovascularization and resolution of active leakage on angiography',
      monitor: 'Visual acuity, extent of vascular sheathing/leakage on serial exam or angiography, presence and regression of neovascularization, recurrence of vitreous hemorrhage',
      progression: 'New areas of nonperfusion, new or persistent neovascularization despite laser, recurrent vitreous hemorrhage, or development of macular edema/epiretinal membrane',
      shortenWhen: 'Active neovascularization, recent vitreous hemorrhage, or an unresolved/untreated underlying systemic cause',
    },
    prognosis: {
      typicalCourse: 'Variable and dependent on underlying cause and extent of ischemia; Eales disease often follows a course of recurrent vitreous hemorrhage episodes over years if the ischemic drive (peripheral nonperfusion) is not addressed with laser',
      progressionRisk: 'Untreated peripheral nonperfusion carries ongoing risk of recurrent neovascularization and vitreous hemorrhage; risk is substantially reduced by timely sector/panretinal laser photocoagulation of ischemic retina',
      complications: 'Recurrent vitreous hemorrhage, tractional retinal detachment from fibrovascular proliferation, macular edema or epiretinal membrane, neovascular glaucoma in advanced ischemic cases',
      visualPrognosis: 'Generally favorable when nonperfusion is treated promptly with laser and any underlying systemic disease is controlled; recurrent hemorrhage or delayed treatment of ischemia worsens long-term visual outcomes',
    },
    clinicalPearls: [
      'Recurrent vitreous hemorrhage in an otherwise healthy young man should prompt consideration of Eales disease after more common causes (e.g., PVD-related retinal tear) are excluded.',
      'Fluorescein angiography, not clinical exam alone, is the key test for defining the true extent of peripheral nonperfusion and guiding laser treatment in any retinal vasculitis.',
      'Retinal vasculitis is a sign, not a diagnosis — always pursue a directed systemic workup (infectious and autoimmune) before settling on an idiopathic/Eales diagnosis.',
      'Laser photocoagulation of ischemic, nonperfused peripheral retina treats the underlying VEGF drive for neovascularization, addressing the cause of recurrent hemorrhage rather than just the bleeding episode itself.',
      'The historical association between Eales disease and tuberculosis reflects hypersensitivity to mycobacterial antigen in some patients rather than direct intraocular infection in all cases; the exact etiology remains debated and many cases are truly idiopathic.',
    ],
    highYield: [
      'Eales disease = idiopathic peripheral retinal periphlebitis/vasculitis with nonperfusion and neovascularization, classically in young healthy men, historically linked to TB hypersensitivity',
      'Recurrent vitreous hemorrhage in a young patient is the classic presenting symptom of Eales disease',
      'Fluorescein angiography is the essential test for retinal vasculitis: shows vascular sheathing, leakage, and peripheral capillary nonperfusion',
      'Retinal vasculitis differential spans infectious (TB, syphilis) and autoimmune (Behçet, PAN, sarcoidosis, VKH) causes — a directed systemic workup is mandatory before calling a case idiopathic',
      'Laser photocoagulation of ischemic/nonperfused retina is the mainstay treatment to prevent/treat neovascular complications in retinal vasculitis, in addition to treating any underlying systemic cause',
    ],
  },
  {
    id: 'choroidal-hemangioma',
    name: 'Choroidal Hemangioma',
    category: 'Retina',
    definition:
      'A benign vascular tumor of the choroid occurring in two distinct clinical forms: circumscribed choroidal hemangioma, an isolated sporadic lesion typically found in adults, and diffuse choroidal hemangioma, a generalized choroidal vascular malformation associated with Sturge-Weber syndrome; both can cause exudative retinal detachment and vision loss, particularly when they involve or approach the fovea.',
    affectedStructure: 'Choroid (choroidal vasculature), with secondary effects on the overlying retinal pigment epithelium and neurosensory retina from chronic exudation',
    pathologicalProcess:
      'A congenital vascular hamartoma composed of abnormal, dilated choroidal vascular channels causes progressive vascular engorgement and chronic leakage of fluid into the subretinal space, producing overlying RPE decompensation, cystic retinal degeneration, and, in vision-threatening cases, exudative retinal detachment.',
    epidemiology: {
      typicalAge: 'Circumscribed choroidal hemangioma: typically diagnosed in adults, often in the 4th-5th decades, sometimes discovered incidentally; diffuse choroidal hemangioma: present from birth as part of Sturge-Weber syndrome, often diagnosed in infancy or childhood',
      sexDistribution: 'No strong sex predilection for either form',
      prevalence: 'Uncommon; circumscribed choroidal hemangioma is a rare benign tumor, and diffuse choroidal hemangioma is essentially always associated with Sturge-Weber syndrome',
      importantPopulations: 'Diffuse choroidal hemangioma occurs specifically in patients with Sturge-Weber syndrome (facial port-wine stain in the V1/V2 trigeminal distribution, leptomeningeal angiomatosis, and often ipsilateral glaucoma)',
    },
    riskFactors: [
      { label: 'Sturge-Weber syndrome (for diffuse choroidal hemangioma specifically)', tier: 'major' },
      { label: 'Sporadic occurrence with no identified systemic association (circumscribed form)', tier: 'associated' },
    ],
    pathophysiology: [
      'Circumscribed choroidal hemangioma arises as an isolated congenital hamartomatous proliferation of choroidal vessels, typically near the posterior pole, without an identified systemic syndrome',
      'Diffuse choroidal hemangioma reflects a generalized choroidal vascular malformation as part of the broader vascular malformation syndrome of Sturge-Weber (which also involves facial cutaneous and leptomeningeal vessels), producing thickening of the entire choroid rather than a discrete mass',
      'Chronically engorged, abnormally permeable choroidal vessels leak fluid through the overlying RPE, causing RPE decompensation and accumulation of subretinal fluid',
      'Long-standing overlying retina develops cystic degenerative changes; if leakage exceeds the RPE pump capacity, an exudative retinal detachment develops, which can involve or threaten the fovea',
    ],
    symptoms: {
      common: ['Often asymptomatic and found incidentally (circumscribed form) if extrafoveal', 'Blurred vision or metamorphopsia when the lesion involves or approaches the fovea', 'Progressive vision loss with exudative retinal detachment'],
      lessCommon: ['Photopsia', 'Visual field defect corresponding to the area of detachment'],
      importantNegatives: ['Typically painless in the absence of secondary glaucoma', 'No significant intraocular inflammation (unlike an inflammatory choroidal mass)'],
      typicalProgression: 'Circumscribed hemangiomas can remain stable and asymptomatic for years if extrafoveal, but slowly progressive exudation can develop, especially with lesions near the posterior pole; diffuse hemangiomas in Sturge-Weber can cause gradual, progressive exudative changes and are often accompanied by ipsilateral glaucoma that also threatens vision.',
    },
    signs: [
      { area: 'Retina', finding: 'Circumscribed form: orange-red, well-defined, dome-shaped choroidal mass, usually near the posterior pole/paramacular area, often with overlying subretinal fluid or cystic retinal changes when active' },
      { area: 'Retina', finding: 'Diffuse form: generalized reddish-orange discoloration and thickening of the choroid giving a diffuse "tomato ketchup" fundus appearance, rather than a discrete localized mass, typically in the eye ipsilateral to the facial port-wine stain' },
      { area: 'Retina', finding: 'Exudative retinal detachment with subretinal fluid, and in longstanding cases, RPE mottling/atrophy overlying the tumor, may be seen in either form' },
      { area: 'Other', finding: 'Elevated intraocular pressure/glaucoma is common in the ipsilateral eye with diffuse choroidal hemangioma (Sturge-Weber); ipsilateral facial port-wine stain in the V1/V2 distribution is present in Sturge-Weber' },
    ],
    differentialDiagnosis: [
      { disease: 'Amelanotic choroidal melanoma', whySimilar: 'Both present as an orange to reddish, elevated choroidal mass that can cause overlying subretinal fluid and vision loss', keyDistinguisher: 'Choroidal melanoma typically shows a more dome or collar-button/mushroom-shaped contour with low-to-medium internal reflectivity and choroidal excavation on B-scan ultrasound, progressive documented growth, and often orange lipofuscin pigment on the surface; circumscribed choroidal hemangioma classically shows high internal reflectivity on ultrasound, a more homogeneous orange-red color, early hyperfluorescence with a lacy vascular pattern on ICG angiography, and characteristically stable size over time' },
      { disease: 'Choroidal metastasis', whySimilar: 'Can present as an amelanotic to yellow-orange choroidal mass with overlying subretinal fluid', keyDistinguisher: 'Metastasis usually has a known or discoverable primary malignancy (commonly breast or lung), tends to be more placoid/plateau-shaped and often multifocal or bilateral, and grows more rapidly than the typically stable choroidal hemangioma' },
      { disease: 'Central serous chorioretinopathy', whySimilar: 'Subretinal fluid causing central vision distortion/blur', keyDistinguisher: 'CSR shows a serous neurosensory detachment without an underlying discrete choroidal mass; fluorescein angiography classically shows a focal leak ("smokestack" or expansile dot) rather than the vascular tumor pattern seen with choroidal hemangioma, and choroidal thickness/lesion findings on OCT/ultrasound differ accordingly' },
    ],
    diagnosticTesting: [
      { name: 'B-scan ultrasonography', whyOrdered: 'Characterize the internal reflectivity and structure of the choroidal lesion to help differentiate from melanoma', expectedFinding: 'High internal reflectivity, acoustically solid, dome-shaped lesion without choroidal excavation (circumscribed form); diffuse choroidal thickening (diffuse form)', contribution: 'A key distinguishing test — high internal reflectivity favors hemangioma, whereas low-to-medium reflectivity favors melanoma' },
      { name: 'Optical coherence tomography (OCT)', whyOrdered: 'Evaluate for subretinal fluid, cystic retinal changes, and lesion contour at the posterior pole', expectedFinding: 'Subretinal fluid, retinal thinning or cystic changes overlying the lesion, dome-shaped choroidal elevation', contribution: 'Detects and monitors foveal involvement and exudative changes, guiding the decision to treat' },
      { name: 'Fluorescein angiography (FA) and indocyanine green angiography (ICG)', whyOrdered: 'Characterize the vascular pattern of the lesion', expectedFinding: 'Early diffuse hyperfluorescence/hyperfluorescent lacy vascular pattern on ICG with progressive leakage on FA in the late phase ("wash-out" pattern classically described on ICG)', contribution: 'ICG angiography is particularly useful for delineating the vascular architecture and extent of choroidal hemangiomas, helping distinguish from melanoma and other choroidal masses' },
      { name: 'Fundus photography and serial documentation', whyOrdered: 'Monitor lesion size/stability over time', expectedFinding: 'Stable size and appearance over serial exams is typical of hemangioma, in contrast to the progressive growth expected with melanoma', contribution: 'Documented stability supports the benign diagnosis and helps avoid unnecessary intervention' },
    ],
    diagnosis: {
      criteria: 'Diagnosis is based on the characteristic orange-red fundus appearance combined with high internal reflectivity on B-scan ultrasound and the characteristic early hyperfluorescence/lacy vascular pattern on ICG angiography, with documented stability over time',
      confirmation: 'Confirmed by the combination of characteristic clinical appearance, B-scan ultrasound showing high internal reflectivity without choroidal excavation, and ICG/FA angiographic pattern; biopsy is rarely needed given the strong characteristic multimodal imaging profile.',
      classification: 'Circumscribed (isolated, sporadic, typically adult-onset, near the posterior pole) versus diffuse (associated with Sturge-Weber syndrome, generalized choroidal involvement without a discrete mass)',
    },
    management: [
      { category: 'Observation', detail: 'Asymptomatic, extrafoveal lesions without significant subretinal fluid can be observed with periodic monitoring for growth or new exudation' },
      { category: 'First-line treatment', detail: 'Photodynamic therapy is a commonly used first-line treatment for vision-threatening circumscribed choroidal hemangioma with subfoveal or juxtafoveal exudation, selectively targeting the abnormal choroidal vasculature' },
      { category: 'Second-line treatment', detail: 'Laser photocoagulation (thermal) can be used for extrafoveal lesions with exudation as an alternative or adjunct to photodynamic therapy' },
      { category: 'Advanced treatment', detail: 'External beam or plaque radiotherapy is reserved for larger or diffuse lesions, or those with recurrent/refractory exudative detachment; management of associated glaucoma is essential in diffuse choroidal hemangioma with Sturge-Weber syndrome' },
      { category: 'Referral', detail: 'Refer to ocular oncology/retina specialist for definitive diagnosis (to exclude melanoma) and treatment planning; refer to glaucoma specialist for ipsilateral glaucoma in Sturge-Weber-associated diffuse hemangioma' },
    ],
    managementProtocol: {
      workup: [
        'B-scan ultrasonography to characterize internal reflectivity (high reflectivity favors hemangioma over melanoma) and confirm the acoustically solid, non-excavated lesion structure',
        'OCT to evaluate for subretinal fluid, cystic retinal change, and foveal involvement guiding the treatment decision',
        'ICG angiography (with FA) to characterize the vascular architecture and support the diagnosis over other choroidal masses',
        'Serial fundus photography to document baseline size for comparison, since documented stability supports the benign diagnosis',
      ],
      initialTreatment:
        'Asymptomatic, extrafoveal lesions without significant subretinal fluid are observed. Photodynamic therapy is the commonly used first-line treatment for vision-threatening circumscribed choroidal hemangioma with subfoveal or juxtafoveal exudation, selectively targeting the abnormal choroidal vasculature; thermal laser photocoagulation is an alternative or adjunct for extrafoveal exudative lesions.',
      followUpSchedule:
        'Periodic monitoring every 3-12 months depending on lesion activity, with fundus exam, photography, and OCT to distinguish stability from new exudative change.',
      escalationCriteria: [
        'New or increasing subretinal fluid on OCT',
        'Any documented growth of the lesion, which should prompt reconsideration of the diagnosis (e.g., melanoma) rather than being attributed to hemangioma progression',
        'Worsening visual acuity from progressive exudation',
      ],
      referralCriteria: [
        'All suspected choroidal hemangiomas -> ocular oncology/retina specialist for definitive diagnosis (exclude melanoma) and treatment planning',
        'Ipsilateral glaucoma in diffuse (Sturge-Weber-associated) choroidal hemangioma -> glaucoma specialist',
      ],
      complications: [
        'Exudative retinal detachment',
        'Chronic cystoid macular changes/atrophy with permanent vision loss if longstanding',
        'Secondary glaucoma, particularly with diffuse/Sturge-Weber-associated disease',
      ],
      monitoringParameters: ['Lesion size/appearance on serial photography', 'Subretinal fluid on OCT', 'Visual acuity', 'Intraocular pressure, particularly in Sturge-Weber-associated diffuse hemangioma'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'oct-macula', 'fluorescein-angiography'],
    },
    followUp: {
      typical: 'Periodic monitoring (every 3-12 months depending on activity) with fundus exam, photography, and OCT to assess for stability versus new exudative change',
      monitor: 'Lesion size/appearance on serial photography, subretinal fluid on OCT, visual acuity, and intraocular pressure (particularly in Sturge-Weber-associated diffuse hemangioma)',
      progression: 'New or increasing subretinal fluid, growth of the lesion (which should prompt reconsideration of the diagnosis, e.g., melanoma), or worsening visual acuity',
      shortenWhen: 'New foveal involvement, increasing exudation, or any uncertainty about the diagnosis warranting closer surveillance to exclude a malignant process',
    },
    prognosis: {
      typicalCourse: 'Generally an indolent, slow-growing or stable benign lesion over time; the visual threat comes from chronic exudation rather than tumor growth or malignant transformation',
      progressionRisk: 'Low risk of significant growth; primary risk is progressive subretinal fluid accumulation affecting or threatening the fovea',
      complications: 'Exudative retinal detachment, chronic cystoid macular changes/atrophy with permanent vision loss if longstanding, secondary glaucoma (particularly with diffuse/Sturge-Weber-associated disease)',
      visualPrognosis: 'Good for extrafoveal, stable lesions; more guarded when subfoveal exudation or chronic detachment has occurred, though treatment (photodynamic therapy, laser, or radiotherapy) can stabilize or improve vision in many cases',
    },
    clinicalPearls: [
      'Choroidal hemangioma does not undergo malignant transformation — the clinical concern is exudative detachment and vision loss, not metastasis.',
      'High internal reflectivity on B-scan ultrasound is the key feature separating choroidal hemangioma from the low-to-medium reflectivity typical of choroidal melanoma.',
      'Any patient with a diffuse "tomato ketchup" fundus and a facial port-wine stain should be evaluated for Sturge-Weber syndrome, including screening for ipsilateral glaucoma.',
      'ICG angiography is particularly helpful for circumscribed choroidal hemangioma, showing early filling with a lacy vascular pattern followed by late washout — distinct from the pattern typically seen with melanoma.',
      'Photodynamic therapy has become a preferred treatment for vision-threatening circumscribed choroidal hemangioma because it selectively targets the abnormal choroidal vasculature with relatively less collateral retinal damage than thermal laser.',
    ],
    highYield: [
      'Circumscribed choroidal hemangioma = isolated, sporadic, adult-onset orange-red posterior pole mass; diffuse choroidal hemangioma = generalized "tomato ketchup" fundus in Sturge-Weber syndrome',
      'High internal reflectivity on B-scan ultrasound distinguishes choroidal hemangioma from amelanotic choroidal melanoma (low-to-medium reflectivity, choroidal excavation, documented growth)',
      'ICG angiography shows early hyperfluorescence with a lacy vascular pattern and late washout, characteristic of choroidal hemangioma',
      'Photodynamic therapy is first-line for vision-threatening subfoveal/juxtafoveal circumscribed choroidal hemangioma',
      'Diffuse choroidal hemangioma is essentially pathognomonic for Sturge-Weber syndrome when found — always evaluate for facial port-wine stain, leptomeningeal angiomatosis, and ipsilateral glaucoma',
    ],
  },
  {
    id: 'macular-telangiectasia',
    name: 'Macular Telangiectasia',
    aliases: ['MacTel', 'Idiopathic Juxtafoveal Telangiectasia'],
    category: 'Retina',
    definition:
      'A bilateral, slowly progressive neurodegenerative and vascular disease of the perifoveal retina — most commonly type 2 macular telangiectasia (MacTel type 2) — characterized by loss of macular pigment, perifoveal capillary telangiectasia, and progressive photoreceptor/Müller cell degeneration causing gradual central vision loss and metamorphopsia in middle-aged to older adults.',
    affectedStructure: 'Perifoveal retina — perifoveal capillary network (telangiectatic vessels), Müller cells, and outer retinal photoreceptor layer (ellipsoid zone) in the juxtafoveal/perifoveal region, classically temporal to the fovea',
    pathologicalProcess:
      'A primarily neurodegenerative process involving Müller cell dysfunction and loss in the perifoveal retina, with secondary vascular changes (capillary telangiectasia, right-angle venules) and progressive photoreceptor degeneration; a subset of eyes develop subretinal neovascularization in later stages.',
    epidemiology: {
      typicalAge: 'Typically presents in the 5th-7th decades (middle-aged to older adults)',
      sexDistribution: 'No strong sex predilection reported for type 2 MacTel',
      prevalence: 'Uncommon but likely underdiagnosed given its subtle early presentation; bilateral in the vast majority of cases, though often asymmetric',
      importantPopulations: 'An association with type 2 diabetes mellitus has been reported in some patients with MacTel type 2, though the exact relationship remains unclear; genetic and metabolic (serine/glycine metabolism) factors are under active investigation',
    },
    riskFactors: [
      { label: 'Middle-aged to older age', tier: 'major' },
      { label: 'Family history of macular telangiectasia (a genetic contribution is suspected)', tier: 'moderate' },
      { label: 'Type 2 diabetes mellitus (reported association in some patients)', tier: 'associated' },
      { label: 'Metabolic factors affecting serine/glycine metabolism (area of ongoing research)', tier: 'associated' },
    ],
    pathophysiology: [
      'Primary dysfunction and loss of Müller cells within the perifoveal retina disrupts normal retinal structure and metabolic support for photoreceptors',
      'Loss of macular pigment (lutein/zeaxanthin) in the affected perifoveal zone produces the characteristic grayish retinal discoloration seen clinically',
      'Perifoveal capillaries become telangiectatic (dilated, incompetent) and develop the distinctive finding of right-angle venules, where a normally obliquely coursing venule turns sharply to dive into the deeper retina',
      'Progressive Müller cell and photoreceptor degeneration leads to outer retinal atrophy, visible as ellipsoid zone disruption/loss on OCT in more advanced disease',
      'Intraretinal crystalline deposits (thought to reflect Müller cell degeneration products) may be seen clinically in the affected zone',
      'In a subset of eyes, disruption of the outer retina and RPE allows subretinal or intraretinal neovascularization to develop (proliferative/neovascular MacTel), which can cause more acute vision loss from exudation or hemorrhage',
    ],
    symptoms: {
      common: ['Gradual, bilateral central vision blur', 'Metamorphopsia (distortion of straight lines)', 'Difficulty with reading and fine visual tasks'],
      lessCommon: ['Mild paracentral scotoma', 'Asymmetric presentation between the two eyes', 'Acute worsening of vision if subretinal neovascularization develops'],
      importantNegatives: ['No significant subretinal fluid/serous detachment pattern as seen in central serous retinopathy', 'Typically painless with no significant anterior segment or vitreous inflammation'],
      typicalProgression: 'Slowly progressive over years, with gradual worsening of central vision and metamorphopsia as photoreceptor degeneration and ellipsoid zone loss advance; a minority of eyes develop subretinal neovascularization at some point in the disease course, producing a more acute component of vision loss.',
    },
    signs: [
      { area: 'Retina', finding: 'Grayish retinal discoloration/loss of transparency in the perifoveal zone, classically temporal to the fovea; loss of the normal foveal reflex' },
      { area: 'Retina', finding: 'Right-angle venules — a distinctive finding where a perifoveal retinal venule makes an abrupt right-angle turn to dive into the deeper retinal layers' },
      { area: 'Retina', finding: 'Intraretinal crystalline deposits within the affected perifoveal area in some patients; fine superficial retinal pigment plaques/clumping may develop in later stages' },
      { area: 'Retina', finding: 'In advanced or neovascular disease: subretinal neovascular membrane, subretinal fluid, or hemorrhage; ellipsoid zone loss and outer retinal atrophy visible on OCT' },
    ],
    differentialDiagnosis: [
      { disease: 'Diabetic retinopathy (parafoveal telangiectatic vessels/microaneurysms)', whySimilar: 'Both can show perifoveal telangiectatic-appearing vessels and mild central vision changes', keyDistinguisher: 'Diabetic telangiectatic changes occur in the context of established diabetic microvascular disease with other classic diabetic retinopathy findings (microaneurysms, dot-blot hemorrhages, exudates distributed more broadly) rather than the distinctive right-angle venules and grayish perifoveal discoloration confined to a discrete perifoveal zone seen in MacTel' },
      { disease: 'Central serous chorioretinopathy', whySimilar: 'Central blur and metamorphopsia in a middle-aged patient', keyDistinguisher: 'CSR shows a discrete serous neurosensory (subretinal fluid) detachment on OCT with a focal leak on fluorescein angiography, typically resolving over weeks to months; MacTel lacks this subretinal fluid/serous detachment pattern and instead shows the distinctive perifoveal atrophic and telangiectatic changes (right-angle venules, ellipsoid zone loss, grayish discoloration) without a true serous detachment' },
      { disease: 'Early/dry age-related macular degeneration', whySimilar: 'Gradual central vision loss in an older adult with subtle macular changes', keyDistinguisher: 'AMD shows drusen and RPE pigmentary change on exam/OCT rather than the perifoveal grayish discoloration and right-angle venules of MacTel, and lacks the characteristic hyperfluorescence pattern of MacTel on FA' },
    ],
    diagnosticTesting: [
      { name: 'Optical coherence tomography (OCT)', whyOrdered: 'Primary imaging test to characterize the perifoveal retinal structure', expectedFinding: 'Perifoveal hyporeflective cavitation/loss of retinal transparency, ellipsoid zone disruption or loss in the affected zone, absence of significant subretinal fluid in uncomplicated cases', contribution: 'Central to diagnosis, staging, and monitoring for progression or development of neovascular complications' },
      { name: 'Fluorescein angiography (FA)', whyOrdered: 'Characterize the perifoveal telangiectatic vascular changes', expectedFinding: 'Perifoveal capillary telangiectasia with late-phase staining/mild leakage, without a discrete focal leak pattern as seen in CSR', contribution: 'Supports the diagnosis and helps identify early subretinal neovascularization when present' },
      { name: 'Fundus autofluorescence', whyOrdered: 'Assess macular pigment loss in the perifoveal zone', expectedFinding: 'Increased autofluorescence corresponding to the area of macular pigment loss (in contrast to normal macular pigment which blocks autofluorescence)', contribution: 'A characteristic and relatively specific finding that supports the diagnosis of MacTel' },
      { name: 'OCT angiography (OCT-A)', whyOrdered: 'Noninvasively visualize the perifoveal capillary telangiectasia and screen for subretinal neovascularization', expectedFinding: 'Abnormal, telangiectatic perifoveal capillary network; abnormal vascular network if neovascularization has developed', contribution: 'Detects early neovascular complications without the need for dye injection' },
    ],
    diagnosis: {
      criteria: 'Largely a diagnosis of exclusion supported by the classic multimodal imaging findings (OCT, fluorescein angiography, fundus autofluorescence) in a patient with the characteristic clinical picture, after other causes of central vision loss/metamorphopsia have been reasonably excluded',
      confirmation: 'Confirmed by the combination of characteristic OCT findings (perifoveal cavitation, ellipsoid zone loss), fluorescein angiographic perifoveal telangiectasia, and increased fundus autofluorescence in the affected perifoveal zone, generally bilaterally.',
      classification: 'Type 2 macular telangiectasia (MacTel type 2) is the most common and clinically relevant type, described here; historically staged (e.g., Gass and Blodi classification) by clinical/angiographic features, and further categorized as non-proliferative versus proliferative (neovascular) disease',
    },
    management: [
      { category: 'Observation', detail: 'No proven curative or disease-modifying treatment exists for the underlying neurodegenerative process; most patients are managed with observation, low-vision strategies, and monitoring for the development of subretinal neovascularization' },
      { category: 'First-line treatment', detail: 'Intravitreal anti-VEGF therapy is used for the subset of patients who develop subretinal/proliferative neovascularization, to reduce associated exudation and stabilize vision' },
      { category: 'Referral', detail: 'Refer to a retina specialist for baseline multimodal imaging confirmation, monitoring, and prompt evaluation of any new subretinal fluid or hemorrhage suggesting neovascular conversion' },
    ],
    managementProtocol: {
      workup: [
        'OCT of the macula to characterize perifoveal cavitation and ellipsoid zone integrity, and to screen for early subretinal fluid suggesting neovascular conversion',
        'Fluorescein angiography to confirm perifoveal capillary telangiectasia and exclude a discrete focal leak pattern (e.g., central serous chorioretinopathy)',
        'Fundus autofluorescence to document macular pigment loss supporting the diagnosis',
        'OCT angiography as a noninvasive option to visualize the telangiectatic capillary network and screen for subretinal neovascularization',
      ],
      initialTreatment:
        'No proven treatment modifies the underlying neurodegenerative process; management for non-proliferative disease is observation with low-vision strategies as needed. Intravitreal anti-VEGF therapy is used specifically for the subset of patients who develop subretinal/proliferative neovascularization, to reduce exudation and stabilize vision.',
      followUpSchedule:
        'Periodic monitoring every 6-12 months in stable non-proliferative disease, with OCT to track ellipsoid zone status and screen for early neovascular change; any acute symptom change warrants prompt evaluation.',
      escalationCriteria: [
        'New subretinal fluid or hemorrhage suggesting neovascular conversion',
        'Acute new metamorphopsia or vision change',
        'Progressive ellipsoid zone loss/outer retinal atrophy affecting visual function',
      ],
      referralCriteria: [
        'Baseline multimodal imaging confirmation and ongoing monitoring -> retina specialist',
        'Any new subretinal fluid or hemorrhage suggesting neovascular conversion -> prompt retina specialist evaluation for anti-VEGF therapy',
      ],
      complications: ['Progressive ellipsoid zone loss and outer retinal atrophy', 'Subretinal neovascularization with exudation or hemorrhage', 'Rare full-thickness or lamellar macular hole'],
      monitoringParameters: ['Visual acuity', 'Metamorphopsia (Amsler grid, including home monitoring)', 'OCT ellipsoid zone integrity', 'Evidence of subretinal fluid or neovascularization'],
      relatedDrugIds: ['bevacizumab', 'ranibizumab', 'aflibercept'],
      relatedExamTechniqueIds: ['oct-macula', 'oct-angiography', 'fluorescein-angiography', 'fundus-autofluorescence', 'amsler-grid-testing'],
    },
    followUp: {
      typical: 'Periodic monitoring, typically every 6-12 months in stable non-proliferative disease, with imaging (OCT) to track ellipsoid zone status and screen for early neovascular change',
      monitor: 'Visual acuity, metamorphopsia (Amsler grid can be used for home monitoring), OCT ellipsoid zone integrity, and evidence of subretinal fluid or neovascularization',
      progression: 'Increasing ellipsoid zone loss/outer retinal atrophy, new subretinal fluid or hemorrhage suggesting neovascular conversion, or worsening visual acuity/metamorphopsia',
      shortenWhen: 'Any new metamorphopsia or acute vision change, which should prompt urgent evaluation for subretinal neovascularization',
    },
    prognosis: {
      typicalCourse: 'Slowly progressive over years; most patients retain useful reading vision for a prolonged period, though gradual central visual decline is expected',
      progressionRisk: 'A minority of patients progress to proliferative/neovascular disease, which carries a risk of more rapid additional vision loss if untreated',
      complications: 'Progressive ellipsoid zone loss and outer retinal atrophy, subretinal neovascularization with exudation or hemorrhage, and in rare advanced cases, full-thickness or lamellar macular hole formation',
      visualPrognosis: 'Generally slowly progressive with preserved functional vision for many years in non-proliferative disease; anti-VEGF therapy can stabilize vision in the subset who develop neovascular complications, but there is no treatment that halts the underlying neurodegenerative process',
    },
    clinicalPearls: [
      'Right-angle venules are a highly distinctive finding for MacTel type 2 — a perifoveal venule making a sharp right-angle turn into the deeper retina is not a typical feature of other macular diseases.',
      'MacTel is fundamentally a neurodegenerative disease of the perifoveal Müller cells and photoreceptors, not primarily a vascular leakage disease — this distinguishes its management approach from conditions like diabetic macular edema or wet AMD.',
      'Unlike central serous retinopathy, MacTel does not produce a true subretinal fluid/serous neurosensory detachment — the perifoveal changes reflect atrophy and telangiectasia rather than fluid accumulation under the retina.',
      'Anti-VEGF therapy has a role only in the proliferative/neovascular subset of MacTel, not for the underlying non-proliferative neurodegenerative disease, distinguishing it from AMD or DME management paradigms.',
      'Because early findings can be subtle, MacTel is frequently underdiagnosed or mistaken for early dry AMD or mild non-specific macular changes — a high index of suspicion with OCT and autofluorescence is important in patients with unexplained mild central vision loss and metamorphopsia.',
    ],
    highYield: [
      'MacTel type 2 is the most common and clinically relevant type; a bilateral, slowly progressive neurodegenerative/vascular perifoveal disease in middle-aged to older adults',
      'Right-angle venules are the classic distinctive vascular finding of MacTel',
      'Grayish perifoveal discoloration, crystalline deposits, and ellipsoid zone loss on OCT are hallmark findings',
      'MacTel lacks the subretinal fluid/serous detachment typical of central serous retinopathy — a key distinguishing point',
      'No proven curative treatment exists; anti-VEGF is reserved for the subset that develops subretinal neovascularization',
      'Diagnosis is largely one of exclusion supported by classic multimodal imaging: OCT (ellipsoid zone loss), FA (perifoveal telangiectasia), and fundus autofluorescence (increased signal from macular pigment loss)',
    ],
  },
]
