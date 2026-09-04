import type { Disease } from '../../types/disease'

export const anteriorSegmentAdditional3: Disease[] = [
  {
    id: 'sarcoid-uveitis',
    name: 'Sarcoid Uveitis',
    aliases: ['Ocular Sarcoidosis'],
    category: 'Anterior Segment',
    definition:
      'Intraocular inflammation occurring as a manifestation of sarcoidosis, a multisystem granulomatous disease of unknown etiology characterized by noncaseating granulomas in affected tissues. Ocular involvement can produce anterior, intermediate, posterior, or panuveitis, and is one of the most common extrapulmonary manifestations of the disease.',
    affectedStructure: 'Iris, ciliary body, trabecular meshwork, vitreous, retinal vasculature (periphlebitis), choroid, optic nerve, lacrimal gland, and conjunctiva depending on the pattern of involvement',
    pathologicalProcess:
      'A CD4+ T-cell-mediated immune response to an unidentified antigen drives formation of noncaseating epithelioid granulomas within ocular and periocular tissue, producing granulomatous keratic precipitates, iris nodules, and perivascular retinal sheathing wherever granulomas form adjacent to vasculature.',
    epidemiology: {
      typicalAge: 'Bimodal distribution with peaks in the 20s-40s and again after age 50; ocular involvement can occur at any age including childhood',
      sexDistribution: 'More common in women',
      prevalence: 'Ocular involvement occurs in roughly 25-50% of patients with systemic sarcoidosis; uveitis is the most common ocular manifestation',
      importantPopulations: 'Markedly more common and often more severe in African American patients, who also tend to have higher rates of chronic, multisystem disease; also more prevalent in Scandinavian populations',
    },
    riskFactors: [
      { label: 'African American ethnicity', tier: 'major' },
      { label: 'Female sex', tier: 'moderate' },
      { label: 'Age 20-40 or over 50 (bimodal peaks)', tier: 'moderate' },
      { label: 'Scandinavian/Northern European ancestry', tier: 'moderate' },
      { label: 'Family history of sarcoidosis', tier: 'associated' },
      { label: 'Known systemic sarcoidosis diagnosis', tier: 'major' },
    ],
    pathophysiology: [
      'Unknown inciting antigen (possibly infectious or environmental) triggers an exaggerated cell-mediated immune response in genetically susceptible individuals',
      'Activated macrophages and CD4+ T-lymphocytes aggregate to form noncaseating epithelioid granulomas in affected organs, including the eye, lungs, lymph nodes, skin, and other tissues',
      'Granulomatous infiltration of the iris and ciliary body produces large clumped keratic precipitates ("mutton-fat" KP) on the corneal endothelium and discrete iris nodules at the pupillary margin (Koeppe nodules) or within the iris stroma (Busacca nodules)',
      'Granulomatous involvement of retinal venules produces perivascular sheathing with characteristic yellow-white exudates ("candle wax drippings," or taches de bougie) representing perivenous granulomas',
      'Granulomas may also form in the lacrimal gland (producing enlargement and dry eye from secretory dysfunction) and conjunctiva (small yellow nodules amenable to biopsy)',
      'Chronic granulomatous inflammation can lead to synechiae formation, secondary glaucoma from trabecular meshwork granuloma infiltration or synechial angle closure, and cystoid macular edema from chronic intraocular inflammation',
    ],
    symptoms: {
      common: ['Ocular redness', 'Photophobia', 'Blurred vision', 'Floaters (intermediate/posterior involvement)', 'Ocular pain (variable, often milder than HLA-B27 disease)'],
      lessCommon: ['Dry eye symptoms (lacrimal gland infiltration)', 'Eyelid or conjunctival nodule noticed by the patient', 'Chronic cough, dyspnea, or skin lesions (systemic symptoms)'],
      importantNegatives: ['Acute severe pain and hypopyon are atypical and favor HLA-B27-associated disease instead', 'Marked itching is not a feature'],
      typicalProgression: 'Often insidious and chronic, with a smoldering course punctuated by flares; may present acutely in a minority of cases, particularly in younger patients with acute sarcoidosis (Löfgren syndrome).',
    },
    signs: [
      { area: 'Anterior Chamber', finding: 'Granulomatous "mutton-fat" keratic precipitates on the corneal endothelium; Koeppe nodules at the pupillary margin; Busacca nodules within the iris stroma; cell and flare, which may be dense; posterior synechiae common with chronic disease' },
      { area: 'Cornea', finding: 'Large greasy mutton-fat KPs typically distributed inferiorly (Arlt triangle) or diffusely in severe cases; band keratopathy may develop with chronic inflammation and hypercalcemia' },
      { area: 'Other', finding: 'Vitreous cells and "snowball" opacities in intermediate involvement; retinal periphlebitis with perivascular sheathing and candle-wax drippings; peripheral retinal neovascularization or optic disc granuloma in severe posterior disease; lacrimal gland enlargement; small yellow conjunctival nodules amenable to biopsy; elevated or low IOP depending on mechanism' },
    ],
    differentialDiagnosis: [
      { disease: 'Tuberculous uveitis', whySimilar: 'Granulomatous anterior uveitis with mutton-fat KPs and possible retinal periphlebitis', keyDistinguisher: 'Positive PPD/IGRA and history of TB exposure or risk factors; chest imaging shows different patterns (cavitary lesions, apical scarring) than the bilateral hilar adenopathy of sarcoid' },
      { disease: 'Syphilitic uveitis', whySimilar: 'Can present with granulomatous or non-granulomatous panuveitis and retinal vasculitis', keyDistinguisher: 'Positive treponemal serology (FTA-ABS/TPPA) and non-treponemal titers (RPR/VDRL); syphilis classically produces placoid chorioretinitis rather than the perivenous candle-wax exudates of sarcoid' },
      { disease: 'Vogt-Koyanagi-Harada disease', whySimilar: 'Granulomatous panuveitis with bilateral involvement', keyDistinguisher: 'VKH features exudative retinal detachments, sunset-glow fundus, and associated integumentary/neurologic findings (vitiligo, poliosis, alopecia, meningismus, tinnitus), which are absent in sarcoidosis' },
    ],
    diagnosticTesting: [
      { name: 'Chest X-ray or CT chest', whyOrdered: 'First-line imaging to evaluate for hilar/mediastinal adenopathy and pulmonary infiltrates characteristic of sarcoidosis', expectedFinding: 'Bilateral hilar lymphadenopathy, with or without pulmonary parenchymal infiltrates (staged I-IV)', contribution: 'Strongly supports the diagnosis and stages systemic pulmonary involvement; abnormal in the majority of patients with systemic disease at presentation' },
      { name: 'Serum angiotensin-converting enzyme (ACE)', whyOrdered: 'Screen for granulomatous inflammatory burden', expectedFinding: 'Elevated in a majority but not all patients with active sarcoidosis; sensitivity is limited and lower in isolated ocular disease', contribution: 'Supportive but not definitive; used alongside lysozyme and imaging, and can be falsely elevated or normal, so a normal value does not exclude the diagnosis' },
      { name: 'Serum lysozyme', whyOrdered: 'Additional marker of macrophage/granuloma activity, sometimes used together with ACE to improve sensitivity', expectedFinding: 'Elevated in active granulomatous disease', contribution: 'Complements ACE testing, particularly useful in patients on ACE-inhibitor medications, which can confound ACE level interpretation' },
      { name: 'Tissue biopsy (conjunctival nodule, lacrimal gland, enlarged lymph node, or transbronchial)', whyOrdered: 'Definitive histopathologic confirmation of noncaseating granulomas', expectedFinding: 'Noncaseating epithelioid granulomas without evidence of acid-fast bacilli or fungal organisms', contribution: 'Gold standard for diagnosis; conjunctival biopsy is a relatively accessible and low-morbidity option when a visible nodule is present' },
      { name: 'PPD/IGRA and treponemal serology', whyOrdered: 'Exclude tuberculosis and syphilis, which can mimic granulomatous uveitis and must be ruled out before immunosuppressive therapy', expectedFinding: 'Negative in sarcoidosis', contribution: 'Important to exclude infectious granulomatous mimics before initiating corticosteroids or immunomodulatory therapy' },
      { name: 'Serum calcium and 24-hour urine calcium', whyOrdered: 'Granulomas produce ectopic 1-alpha-hydroxylase leading to hypercalcemia/hypercalciuria', expectedFinding: 'Elevated in a subset of patients with active disease', contribution: 'Supports diagnosis and identifies patients at risk for nephrocalcinosis and band keratopathy' },
    ],
    diagnosis: {
      criteria: 'International Workshop on Ocular Sarcoidosis (IWOS) criteria combine compatible ocular signs with supportive laboratory/imaging findings (elevated ACE/lysozyme, bilateral hilar adenopathy on chest imaging, abnormal gallium scan/PET) to grade diagnostic certainty as definite (biopsy-proven with compatible uveitis), presumed, probable, or possible',
      confirmation: 'Definitive diagnosis requires histopathologic demonstration of noncaseating granulomas on biopsy of accessible tissue (conjunctiva, lacrimal gland, skin lesion, or mediastinal/hilar lymph node); presumed diagnosis is made when clinical ocular findings are strongly supported by characteristic systemic imaging and laboratory findings without biopsy.',
      classification: 'Classified by anatomic pattern (anterior, intermediate, posterior, or panuveitis) and by course (acute, typically in younger patients with Löfgren syndrome, versus chronic granulomatous uveitis, more common in older patients and African American patients)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Topical corticosteroid (e.g., prednisolone acetate 1%) with cycloplegia for isolated anterior involvement; frequency and taper guided by severity of cell/flare and KP burden' },
      { category: 'Second-line treatment', detail: 'Periocular (sub-Tenon) or intravitreal corticosteroid injection for intermediate/posterior involvement or macular edema; oral corticosteroids for panuveitis, bilateral disease, or vision-threatening posterior/vasculitic involvement' },
      { category: 'Advanced treatment', detail: 'Systemic immunomodulatory therapy (methotrexate, mycophenolate mofetil, azathioprine, or anti-TNF biologic agents such as infliximab/adalimumab) for chronic, steroid-dependent, or sight-threatening disease, coordinated with rheumatology/pulmonology' },
      { category: 'Referral', detail: 'Refer to pulmonology/internal medicine or rheumatology for systemic workup and management once ocular sarcoidosis is suspected or confirmed; refer to a uveitis specialist for posterior segment involvement, vasculitis, or recalcitrant disease' },
      { category: 'Emergency management', detail: 'Urgent evaluation for retinal neovascularization, vitreous hemorrhage, or markedly elevated IOP from granulomatous trabeculitis/synechial angle closure' },
    ],
    managementProtocol: {
      workup: [
        'Chest X-ray or CT chest to evaluate for hilar/mediastinal adenopathy and pulmonary infiltrates',
        'Serum ACE and lysozyme as supportive (not definitive) markers of granulomatous burden',
        'Tissue biopsy of an accessible site (conjunctival nodule, lacrimal gland, or lymph node) for definitive histopathologic confirmation when feasible',
        'PPD/IGRA and treponemal serology to exclude tuberculosis and syphilis before initiating immunosuppression',
        'Serum calcium and 24-hour urine calcium to screen for hypercalcemia/hypercalciuria',
      ],
      initialTreatment:
        'Topical corticosteroid (e.g., prednisolone acetate) with cycloplegia for isolated anterior involvement, with frequency and taper guided by cell/flare severity and KP burden. Periocular or intravitreal corticosteroid is used for intermediate/posterior involvement or macular edema, and oral corticosteroids for panuveitis or bilateral/vision-threatening disease.',
      followUpSchedule:
        'Recheck in 1-2 weeks after initiating treatment for active anterior involvement, then extend intervals as inflammation quiets; patients with systemic disease require ongoing multidisciplinary monitoring alongside pulmonology/rheumatology.',
      escalationCriteria: [
        'New or worsening vitritis or vitreous haze',
        'Active or progressive retinal vasculitis (periphlebitis) on dilated exam or angiography',
        'Development of cystoid macular edema',
        'Retinal neovascularization or vitreous hemorrhage',
      ],
      referralCriteria: [
        'Suspected or confirmed ocular sarcoidosis -> pulmonology/internal medicine or rheumatology for systemic workup and management',
        'Posterior segment involvement, active vasculitis, or recalcitrant disease -> uveitis specialist',
        'Retinal neovascularization or vitreous hemorrhage -> urgent retina evaluation',
      ],
      steroidConsiderations:
        'Topical prednisolone acetate is first-line for isolated anterior disease; periocular/intravitreal or oral corticosteroid is used for intermediate/posterior/panuveitis. Steroid-sparing systemic immunomodulatory therapy (methotrexate, mycophenolate, azathioprine, or anti-TNF biologics such as infliximab/adalimumab) is added for chronic, steroid-dependent, or sight-threatening disease.',
      cycloplegicConsiderations:
        'A cycloplegic agent is paired with topical corticosteroid for anterior involvement to relieve ciliary spasm and reduce the risk of posterior synechiae, which are common given the granulomatous inflammatory burden.',
      complications: ['Posterior synechiae', 'Secondary glaucoma (open-angle from trabecular granulomas or angle-closure from synechiae)', 'Cataract', 'Cystoid macular edema', 'Band keratopathy (especially with hypercalcemia)', 'Retinal neovascularization and vitreous hemorrhage from ischemic vasculitis', 'Optic nerve granuloma'],
      monitoringParameters: ['Anterior chamber cell/flare', 'Intraocular pressure', 'Vitreous haze/cell grade', 'Retinal vasculitis activity on dilated exam or fluorescein angiography', 'Development of cystoid macular edema'],
      relatedDrugIds: ['prednisolone-acetate', 'cyclopentolate', 'methotrexate', 'mycophenolate', 'infliximab', 'adalimumab', 'triamcinolone-intravitreal'],
      relatedExamTechniqueIds: ['uveitis-laboratory-workup', 'anterior-chamber-cell-flare-grading'],
    },
    followUp: {
      typical: 'Recheck in 1-2 weeks after initiating treatment for active anterior involvement, then extend intervals as inflammation quiets; patients with systemic disease require ongoing multidisciplinary monitoring',
      monitor: 'Anterior chamber cell/flare, IOP, vitreous haze/cells, retinal vasculitis activity on dilated exam or fluorescein angiography, development of cystoid macular edema',
      progression: 'New or worsening vitritis, retinal vasculitis, neovascularization, or macular edema signals need for treatment escalation and closer posterior segment surveillance',
      shortenWhen: 'Posterior/panuveitis involvement, active retinal vasculitis, or steroid-related IOP elevation',
    },
    prognosis: {
      typicalCourse: 'Chronic and relapsing in most cases, particularly in African American patients, with recurrent flares over years; acute presentations in the setting of Löfgren syndrome tend to be self-limited',
      progressionRisk: 'Higher risk of chronic, recurrent, and bilateral disease compared to HLA-B27-associated anterior uveitis; posterior segment involvement carries greater risk of permanent visual loss',
      complications: 'Posterior synechiae, secondary glaucoma (open-angle from trabecular granulomas or angle-closure from synechiae), cataract, cystoid macular edema, band keratopathy (especially with hypercalcemia), retinal neovascularization and vitreous hemorrhage from ischemic vasculitis, optic nerve granuloma',
      visualPrognosis: 'Generally favorable with prompt treatment of isolated anterior disease; more guarded with chronic panuveitis, retinal vasculitis, or macular edema, which are the major drivers of vision loss',
    },
    clinicalPearls: [
      'Mutton-fat KPs plus iris nodules (Koeppe at the pupillary margin, Busacca in the stroma) are the classic granulomatous triad and should prompt sarcoidosis workup alongside TB and syphilis.',
      '"Candle wax drippings" (taches de bougie) describe the perivenous exudates of sarcoid retinal periphlebitis and are a distinctive posterior segment finding.',
      'A normal serum ACE does not exclude ocular sarcoidosis, particularly in isolated ocular disease without significant systemic burden — combine with lysozyme and chest imaging.',
      'Conjunctival biopsy of a visible nodule offers a relatively low-morbidity path to histologic confirmation compared to lung or lymph node biopsy.',
      'African American women are disproportionately affected and tend to have more chronic, severe, and multisystem disease than other populations.',
    ],
    highYield: [
      'Mutton-fat KPs + Koeppe/Busacca iris nodules = classic granulomatous anterior uveitis triad, seen in sarcoidosis, TB, syphilis, and VKH',
      '"Candle wax drippings" (taches de bougie) on retinal veins is a hallmark of sarcoid periphlebitis',
      'Bilateral hilar lymphadenopathy on chest imaging is the classic systemic finding supporting the diagnosis',
      'ACE and lysozyme are supportive but not definitive; definitive diagnosis requires biopsy showing noncaseating granulomas',
      'More common and often more severe in African American women',
      'TB and syphilis must be excluded before starting immunosuppression for presumed granulomatous uveitis',
    ],
  },
  {
    id: 'fuchs-heterochromic-iridocyclitis',
    name: 'Fuchs Heterochromic Iridocyclitis',
    aliases: ['Fuchs Uveitis Syndrome'],
    category: 'Anterior Segment',
    definition:
      'A chronic, low-grade, typically unilateral anterior uveitis of uncertain etiology (increasingly linked to rubella virus persistence) characterized by iris heterochromia, diffuse fine stellate keratic precipitates, minimal or absent synechiae despite chronicity, and a predisposition to cataract and secondary open-angle glaucoma.',
    affectedStructure: 'Iris stroma (atrophy causing heterochromia), corneal endothelium (diffuse KP distribution), anterior chamber, trabecular meshwork, and lens',
    pathologicalProcess:
      'Chronic, smoldering, low-grade inflammation of the anterior uvea produces progressive iris stromal atrophy (causing hypochromia of the affected eye) and diffuse endothelial keratic precipitate deposition, without the fibrin-driven synechiae formation typical of other anterior uveitides; increasingly associated with intraocular rubella virus antibody production.',
    epidemiology: {
      typicalAge: 'Typically presents in young to middle-aged adults, most commonly in the 20s-40s',
      sexDistribution: 'Roughly equal, though some series report a slight male predominance',
      prevalence: 'Uncommon; accounts for a small minority of uveitis cases overall, but is a classic board-testable entity due to its distinctive presentation',
      importantPopulations: 'Congenital rubella syndrome and endemic rubella exposure history are increasingly recognized associations; unilateral in the vast majority of cases (bilateral involvement is rare)',
    },
    riskFactors: [
      { label: 'Intraocular rubella virus infection/persistence', tier: 'major' },
      { label: 'Young to middle-aged adulthood', tier: 'moderate' },
      { label: 'History of congenital rubella or rubella exposure', tier: 'associated' },
      { label: 'Toxoplasmosis (reported association in some cases)', tier: 'associated' },
    ],
    pathophysiology: [
      'Chronic low-grade intraocular inflammation, increasingly attributed to local intraocular rubella virus antibody production/persistence rather than systemic autoimmune mechanisms',
      'Sustained inflammation causes progressive stromal atrophy and depigmentation of the iris, producing heterochromia (the affected eye typically becomes lighter/hypochromic, more apparent in light-colored irides where the effect is subtle, and often more clinically obvious in dark irides where stromal thinning reveals a lighter appearance)',
      'Diffuse, fine, stellate (star-shaped) keratic precipitates deposit across the entire corneal endothelium rather than concentrating inferiorly (Arlt triangle) as in typical anterior uveitis, reflecting a distinct low-grade inflammatory pattern',
      'Despite chronic inflammation, fibrin production is minimal, so posterior and anterior synechiae are characteristically absent or minimal — a key distinguishing feature from other chronic anterior uveitides',
      'Fine, fragile abnormal blood vessels can develop in the anterior chamber angle and iris surface; these vessels are prone to bleeding with minor trauma or even with anterior chamber paracentesis, producing the classic Amsler sign (small hyphema on AC tap)',
      'Chronic ciliary body inflammation and trabecular meshwork changes predispose to secondary open-angle glaucoma over time; associated lens changes lead to early cataract formation, particularly posterior subcapsular',
    ],
    symptoms: {
      common: ['Mild blurred vision (often from cataract)', 'Minimal or no pain', 'Occasional floaters', 'Cosmetic awareness of eye color difference (heterochromia) noticed by patient or family'],
      lessCommon: ['Mild redness (usually absent)', 'Halos if secondary glaucoma develops'],
      importantNegatives: ['Significant pain and photophobia are atypical and, if present, should raise suspicion for an alternative or superimposed diagnosis', 'Marked redness/ciliary flush is not characteristic — the eye is often described as "white and quiet" despite active inflammation'],
      typicalProgression: 'Insidious, chronic, low-grade course over years; often diagnosed incidentally on routine exam or when a patient/family member notices heterochromia or when a cataract develops earlier than expected in one eye.',
    },
    signs: [
      { area: 'Anterior Chamber', finding: 'Mild, persistent, low-grade cell and flare; minimal to no posterior or anterior synechiae despite chronicity (key distinguishing feature); fine abnormal angle/iris vessels that can bleed with minor trauma or paracentesis (Amsler sign — small hyphema)' },
      { area: 'Cornea', finding: 'Fine, small, round to stellate (star-shaped) keratic precipitates diffusely scattered across the ENTIRE corneal endothelium, not concentrated inferiorly as in typical anterior uveitis; KPs may have fine filamentous processes connecting them' },
      { area: 'Other', finding: 'Iris heterochromia — affected eye typically appears lighter/hypochromic relative to the fellow eye, most apparent in lighter irides but can be subtle; iris stromal atrophy with loss of iris crypts and a smudged, featureless appearance; posterior subcapsular or other cataract, often presenting earlier than expected for age; vitreous cells/floaters common; elevated IOP with secondary open-angle glaucoma in a significant minority over time' },
    ],
    differentialDiagnosis: [
      { disease: 'HLA-B27-associated anterior uveitis', whySimilar: 'Anterior chamber inflammation with keratic precipitates', keyDistinguisher: 'HLA-B27 disease is typically acute, painful, recurrent, with fine KPs concentrated inferiorly and prominent posterior synechiae; Fuchs is chronic, painless, diffusely distributed KPs, and synechiae are characteristically absent' },
      { disease: 'Congenital Horner syndrome or other causes of true congenital heterochromia', whySimilar: 'Iris color difference between the two eyes', keyDistinguisher: 'Congenital heterochromia is present from birth without inflammatory signs (no KPs, no cell/flare); Fuchs heterochromia is acquired, evolves over time, and is accompanied by chronic intraocular inflammation' },
      { disease: 'Herpetic (HSV/VZV) anterior uveitis', whySimilar: 'Chronic or recurrent anterior uveitis with possible iris atrophy', keyDistinguisher: 'Herpetic uveitis classically causes sectoral iris atrophy (patchy, not diffuse), elevated IOP during acute episodes, and is often associated with corneal scarring/dendrites or a history of herpes zoster ophthalmicus; synechiae are common, unlike Fuchs' },
    ],
    diagnosticTesting: [
      { name: 'Slit lamp examination', whyOrdered: 'Primary diagnostic tool to identify the characteristic diffuse stellate KP pattern, absence of synechiae, and iris stromal changes', expectedFinding: 'Diffuse fine stellate KPs across the entire endothelium, mild cell/flare, absent or minimal synechiae, iris stromal atrophy', contribution: 'Establishes the clinical diagnosis based on the classic constellation of findings' },
      { name: 'Iris transillumination', whyOrdered: 'Assess degree of iris stromal/pigment epithelial atrophy', expectedFinding: 'Diffuse transillumination defects reflecting stromal thinning in the affected eye', contribution: 'Supports diagnosis by confirming structural iris atrophy consistent with chronic low-grade inflammation' },
      { name: 'Gonioscopy', whyOrdered: 'Evaluate the angle for fine abnormal vessels and confirm an open, non-synechial angle', expectedFinding: 'Open angle without peripheral anterior synechiae; fine, fragile angle neovascularization may be present', contribution: 'Confirms the open-angle nature of any associated glaucoma and identifies fragile vessels at risk of bleeding' },
      { name: 'Intraocular pressure measurement and optic nerve evaluation', whyOrdered: 'Screen for secondary open-angle glaucoma, a well-recognized long-term complication', expectedFinding: 'May be normal early or elevated with glaucomatous optic nerve changes in longstanding disease', contribution: 'Guides need for IOP-lowering therapy and glaucoma monitoring independent of the uveitis itself' },
      { name: 'Aqueous humor rubella antibody testing (Goldmann-Witmer coefficient), where available', whyOrdered: 'Investigate the proposed rubella virus association in atypical or research/referral settings', expectedFinding: 'Elevated intraocular rubella antibody index relative to serum', contribution: 'Supports the emerging etiologic link to rubella virus persistence, though not routinely required for clinical diagnosis' },
    ],
    diagnosis: {
      confirmation: 'Clinical diagnosis based on the classic triad of unilateral iris heterochromia, diffuse fine stellate keratic precipitates without sectoral concentration, and characteristic absence of synechiae despite chronic low-grade anterior chamber inflammation, typically in an asymptomatic or minimally symptomatic patient.',
      classification: 'Classified by laterality (unilateral in the great majority of cases; bilateral disease is rare) and staged by presence/severity of associated cataract or secondary glaucoma',
    },
    management: [
      { category: 'Observation', detail: 'The uveitis itself is classically NOT treated with topical corticosteroids, since the inflammation is chronic, low-grade, and largely steroid-unresponsive, and unnecessary steroid use only adds risk of steroid-induced ocular hypertension without meaningfully altering the disease course' },
      { category: 'First-line treatment', detail: 'A brief, cautious steroid trial may be considered only for the rare acute flare with symptomatic increase in inflammation, but chronic maintenance steroid use should be avoided' },
      { category: 'Second-line treatment', detail: 'Topical IOP-lowering therapy when secondary open-angle glaucoma develops, managed as any other open-angle glaucoma' },
      { category: 'Advanced treatment', detail: 'Cataract extraction when visually significant cataract develops; generally well tolerated with good outcomes, though the fragile angle/iris vessels carry a higher risk of intraoperative or postoperative hyphema, and eyes are prone to reduced endothelial cell reserve' },
      { category: 'Referral', detail: 'Refer to cataract surgeon when lens opacity becomes visually significant; refer to glaucoma specialist if secondary open-angle glaucoma is uncontrolled on topical therapy' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp examination to identify the diffuse fine stellate KP pattern and confirm absence of synechiae',
        'Iris transillumination to assess degree of iris stromal/pigment epithelial atrophy',
        'Gonioscopy to confirm an open, non-synechial angle and identify fragile angle vessels',
        'Intraocular pressure measurement and optic nerve evaluation to screen for secondary open-angle glaucoma',
        'Aqueous humor rubella antibody testing (Goldmann-Witmer coefficient) in atypical or referral settings, though not routinely required for clinical diagnosis',
      ],
      initialTreatment:
        'The uveitis itself is classically NOT treated with chronic topical corticosteroids, since the inflammation is low-grade and largely steroid-unresponsive; observation is the mainstay of management for the inflammation. A brief, cautious steroid trial may be considered only for a rare symptomatic acute flare.',
      followUpSchedule:
        'Routine monitoring every 6-12 months given the chronic, low-grade, largely stable nature of the inflammation, with more frequent visits if cataract or IOP elevation is progressing.',
      escalationCriteria: [
        'Rising intraocular pressure or glaucomatous optic nerve changes on serial exam',
        'Rapidly progressive or visually significant cataract',
        'A rare acute symptomatic flare with a marked increase in inflammation',
      ],
      referralCriteria: [
        'Visually significant cataract -> cataract surgeon (counsel regarding elevated hyphema risk from fragile angle/iris vessels)',
        'Secondary open-angle glaucoma uncontrolled on topical therapy -> glaucoma specialist',
      ],
      steroidConsiderations:
        'Chronic topical corticosteroid use should be AVOIDED for the uveitis itself, since the inflammation is largely steroid-unresponsive and unnecessary steroid exposure only adds glaucoma risk without altering the disease course; reserve a brief, cautious trial for the rare acute symptomatic flare.',
      complications: ['Cataract (most common, often posterior subcapsular)', 'Secondary open-angle glaucoma', 'Vitreous opacities/floaters', 'Spontaneous or surgery-related hyphema (Amsler sign) from fragile angle/iris vessels'],
      monitoringParameters: ['Intraocular pressure and optic nerve status', 'Cataract progression', 'Vitreous cell/floater symptoms'],
      relatedDrugIds: ['timolol', 'latanoprost'],
      relatedExamTechniqueIds: ['iris-transillumination-testing', 'gonioscopy'],
    },
    followUp: {
      typical: 'Routine monitoring every 6-12 months given the chronic, low-grade, largely stable nature of the inflammation, with more frequent visits if cataract or IOP elevation is progressing',
      monitor: 'IOP and optic nerve status (glaucoma surveillance), cataract progression, vitreous cell/floater symptoms',
      progression: 'Rising IOP or optic nerve changes warrant escalation to glaucoma therapy; progressive lens opacity affecting function warrants surgical referral',
      shortenWhen: 'Development of elevated IOP, glaucomatous optic nerve changes, or rapidly progressive cataract',
    },
    prognosis: {
      typicalCourse: 'Chronic, indolent, slowly progressive course over years to decades; the inflammation itself rarely resolves but also rarely causes acute complications',
      progressionRisk: 'Significant long-term risk of cataract (very common) and secondary open-angle glaucoma (occurs in a meaningful minority); risk of hyphema with intraocular surgery or trauma due to fragile angle vessels',
      complications: 'Cataract (most common complication, often posterior subcapsular), secondary open-angle glaucoma, vitreous opacities/floaters, spontaneous or surgery-related hyphema (Amsler sign)',
      visualPrognosis: 'Generally good overall, as the chronic inflammation itself is mild and non-destructive (no synechiae, no severe flares); vision loss when it occurs is typically related to cataract or glaucoma, both of which are treatable',
    },
    clinicalPearls: [
      'Fuchs heterochromic iridocyclitis is a classic exception to the rule that anterior uveitis is treated with topical steroids — chronic steroid use here mainly adds glaucoma risk without controlling the disease.',
      'The combination of diffuse (not inferior) stellate KPs, heterochromia, and an absence of synechiae despite obvious chronic inflammation is the testable triad.',
      'The Amsler sign — a small hyphema occurring with anterior chamber paracentesis or minor ocular trauma/surgery — reflects fragile abnormal angle and iris vessels and is a classic historical association.',
      'A "white and quiet" chronically inflamed eye with unexplained cataract, especially in a young adult, should prompt consideration of Fuchs heterochromic iridocyclitis.',
      'Heterochromia can be subtle and is often first noticed by family members or in old photographs rather than by the patient.',
    ],
    highYield: [
      'Classic triad: iris heterochromia (affected eye lighter), diffuse fine stellate KPs over the ENTIRE endothelium, and absent/minimal synechiae despite chronic inflammation',
      'Does NOT require topical steroid treatment for the uveitis itself — chronic low-grade, largely steroid-unresponsive inflammation',
      'Strongly associated with cataract formation and secondary open-angle glaucoma as the major long-term complications',
      'Amsler sign: fragile angle/iris vessels bleed with anterior chamber paracentesis or minor trauma, producing a small hyphema',
      'Increasingly linked to intraocular rubella virus persistence rather than a systemic autoimmune process',
      'Unilateral, chronic, minimally symptomatic ("white and quiet" eye) presentation distinguishes it from acute HLA-B27 anterior uveitis',
    ],
  },
  {
    id: 'ocular-syphilis',
    name: 'Ocular Syphilis',
    category: 'Anterior Segment',
    definition:
      'Intraocular inflammation caused by infection with Treponema pallidum, capable of producing virtually any pattern of ocular inflammation (anterior, intermediate, posterior, or panuveitis) at any stage of systemic syphilis infection, earning syphilis its reputation as "the great masquerader."',
    affectedStructure: 'Iris and ciliary body (anterior involvement), vitreous, retina and choroid (classic placoid chorioretinitis), retinal vasculature, optic nerve, and pupillary pathways (Argyll Robertson pupil in neurosyphilis)',
    pathologicalProcess:
      'Direct treponemal invasion of ocular tissue combined with host immune response produces a spectrum of inflammatory patterns, ranging from anterior granulomatous or non-granulomatous uveitis to a distinctive full-thickness placoid inflammatory chorioretinal lesion, retinal vasculitis, and optic neuritis/perineuritis; in neurosyphilis, treponemal invasion of the central nervous system disrupts the pupillary light reflex pathway.',
    epidemiology: {
      typicalAge: 'Can occur at any adult age; incidence has risen alongside increasing rates of syphilis in adults of reproductive and older age',
      sexDistribution: 'Historically more common in men, particularly men who have sex with men, reflecting broader syphilis epidemiology, though rates in women have been increasing',
      prevalence: 'Uncommon but increasing in incidence, paralleling rising rates of syphilis in the general population',
      importantPopulations: 'Strong epidemiologic association with HIV co-infection; ocular involvement can occur at any stage (primary, secondary, latent, or tertiary) of syphilis',
    },
    riskFactors: [
      { label: 'Untreated or inadequately treated syphilis infection', tier: 'major' },
      { label: 'HIV co-infection', tier: 'major' },
      { label: 'Men who have sex with men', tier: 'moderate' },
      { label: 'Multiple sexual partners / unprotected sexual contact', tier: 'moderate' },
      { label: 'History of other sexually transmitted infections', tier: 'associated' },
      { label: 'Immunocompromised state', tier: 'associated' },
    ],
    pathophysiology: [
      'Treponema pallidum disseminates hematogenously following initial infection and can invade ocular tissue during any stage of systemic disease, including early (primary/secondary) syphilis',
      'Direct spirochete invasion combined with an intense host inflammatory response produces variable patterns of intraocular inflammation, ranging from mild anterior chamber cell/flare to severe panuveitis',
      'Classic acute syphilitic posterior placoid chorioretinitis results from full-thickness inflammatory infiltration at the level of the retinal pigment epithelium and outer retina/choroid, producing a large, yellowish, placoid (plaque-like) lesion typically involving the macula',
      'Retinal vasculitis and papillitis/optic neuritis can occur from vascular and perineural treponemal involvement',
      'In tertiary/neurosyphilis, chronic CNS treponemal infection damages the pretectal pathway responsible for the pupillary light reflex while sparing the near-reflex pathway, producing the Argyll Robertson pupil (accommodates but does not react to light)',
      'HIV co-infection appears to increase the risk, severity, and atypical presentation of ocular syphilis, possibly through impaired immune clearance of the organism',
    ],
    symptoms: {
      common: ['Blurred vision', 'Floaters', 'Ocular redness and pain (with anterior involvement)', 'Photophobia'],
      lessCommon: ['Scotoma or metamorphopsia (with placoid chorioretinitis involving the macula)', 'Diplopia (from cranial neuropathy in neurosyphilis)', 'History of genital chancre, rash, or lymphadenopathy (systemic syphilis symptoms, which may go unrecognized)'],
      importantNegatives: ['Many patients have no recollection of a primary chancre or rash, so absence of a known syphilis history does NOT exclude ocular syphilis', 'Pain is not a universal feature — posterior/placoid presentations can be relatively painless'],
      typicalProgression: 'Variable; can present acutely with vision loss (placoid chorioretinitis) or insidiously as chronic, recurrent, or treatment-resistant uveitis of unclear etiology — a presentation pattern that should always raise suspicion for syphilis.',
    },
    signs: [
      { area: 'Anterior Chamber', finding: 'Granulomatous (mutton-fat KP, iris nodules) or non-granulomatous cell and flare; can mimic virtually any other cause of anterior uveitis' },
      { area: 'Other', finding: 'Classic acute syphilitic posterior placoid chorioretinitis: a large, yellowish, plaque-like lesion at the level of the RPE/outer retina, often centered on or near the macula; vitritis; retinal vasculitis with vascular sheathing; optic disc edema/papillitis; in neurosyphilis, Argyll Robertson pupil — pupils are small, irregular, and accommodate normally but do not constrict to light ("prostitute\'s pupil": accommodates but does not react)' },
    ],
    differentialDiagnosis: [
      { disease: 'Sarcoid uveitis', whySimilar: 'Can present as granulomatous panuveitis with retinal vasculitis', keyDistinguisher: 'Sarcoidosis features candle-wax periphlebitis and bilateral hilar adenopathy on chest imaging rather than a placoid chorioretinal lesion; serology (treponemal/non-treponemal) is negative in sarcoidosis' },
      { disease: 'Tuberculous chorioretinitis', whySimilar: 'Granulomatous panuveitis with chorioretinal lesions', keyDistinguisher: 'TB produces serpiginous-like or multifocal choroidal tubercles rather than a single placoid macular lesion; positive PPD/IGRA and imaging findings of pulmonary TB support the diagnosis, with negative syphilis serology' },
      { disease: 'Acute posterior multifocal placoid pigment epitheliopathy (APMPPE)', whySimilar: 'Multiple placoid yellow-white lesions at the level of the RPE affecting the posterior pole', keyDistinguisher: 'APMPPE is typically bilateral, occurs in young healthy patients often after a viral prodrome, lacks associated anterior/vitreous inflammation, and has negative syphilis serology, whereas syphilitic placoid chorioretinitis is usually unilateral with a single larger lesion and accompanying uveitis' },
    ],
    diagnosticTesting: [
      { name: 'Non-treponemal serology (RPR or VDRL)', whyOrdered: 'Initial screening test and quantitative marker of disease activity', expectedFinding: 'Reactive with a titer that correlates with disease activity; titers decline with successful treatment', contribution: 'Screens for active infection and is used to monitor treatment response, though it can be falsely negative in late-stage disease (prozone effect) or falsely positive with other conditions' },
      { name: 'Treponemal serology (FTA-ABS, TPPA, or treponemal EIA/CIA)', whyOrdered: 'Confirmatory test for syphilis infection, remains positive for life regardless of treatment', expectedFinding: 'Reactive, confirming past or current treponemal infection', contribution: 'Confirms the diagnosis when non-treponemal testing is positive (or when clinical suspicion is high despite a negative non-treponemal test); both treponemal and non-treponemal testing are required for accurate diagnosis' },
      { name: 'HIV testing', whyOrdered: 'Strong epidemiologic association between ocular syphilis and HIV co-infection; should always be offered', expectedFinding: 'Variable; a meaningful proportion of ocular syphilis patients are found to be HIV-positive, sometimes newly diagnosed', contribution: 'Identifies co-infection that affects prognosis, treatment monitoring, and public health/partner notification considerations' },
      { name: 'Lumbar puncture with CSF analysis (VDRL, cell count, protein)', whyOrdered: 'Any patient with ocular syphilis should be evaluated for neurosyphilis, as ocular involvement is considered a form of neurosyphilis by many experts', expectedFinding: 'CSF pleocytosis, elevated protein, and/or reactive CSF-VDRL supportive of neurosyphilis', contribution: 'Confirms CNS involvement, which dictates use of the neurosyphilis treatment regimen and informs prognosis' },
      { name: 'Fluorescein angiography and optical coherence tomography', whyOrdered: 'Characterize the placoid chorioretinal lesion and assess disease activity', expectedFinding: 'Early hypofluorescence with late staining of the placoid lesion on FA; disruption of the ellipsoid zone/RPE on OCT', contribution: 'Supports diagnosis of the classic placoid lesion pattern and helps monitor treatment response' },
    ],
    diagnosis: {
      criteria: 'Diagnosis requires a reactive treponemal test (confirmatory, remains positive for life) together with a reactive non-treponemal test (RPR/VDRL, used to assess activity and treatment response) in the setting of compatible intraocular inflammation',
      confirmation: 'Confirmed by concordant positive treponemal and non-treponemal serologic testing in a patient with any pattern of intraocular inflammation; given the protean presentation of ocular syphilis, serologic testing should be considered in essentially any atypical, recurrent, or treatment-resistant uveitis.',
      classification: 'Classified by stage of systemic infection (early: primary/secondary/early latent; late: late latent/tertiary) and by ocular pattern (anterior, intermediate, posterior with placoid chorioretinitis, panuveitis, or isolated neuro-ophthalmic involvement)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Systemic penicillin therapy using the neurosyphilis treatment regimen (high-dose intravenous aqueous crystalline penicillin G, per current CDC/public health guidelines) is indicated for ocular syphilis regardless of whether CSF confirms neurosyphilis, because ocular involvement is treated as a neurosyphilis-equivalent presentation' },
      { category: 'Second-line treatment', detail: 'Documented penicillin allergy requires desensitization and treatment with penicillin whenever possible given superior efficacy for neuro-ocular disease; alternative regimens are used only when penicillin desensitization is not feasible, per infectious disease guidance' },
      { category: 'First-line treatment', detail: 'Topical corticosteroid and cycloplegic agents may be used adjunctively for anterior chamber inflammation, but systemic antimicrobial therapy is the essential treatment and must not be delayed or substituted' },
      { category: 'Referral', detail: 'Refer to infectious disease for coordinated systemic treatment, staging, and follow-up serology; offer and coordinate HIV testing given the strong epidemiologic association; report to public health authorities per local requirements and initiate partner notification' },
      { category: 'Emergency management', detail: 'Vision-threatening presentations (placoid chorioretinitis involving the macula, severe panuveitis, optic neuritis) warrant urgent same-day/inpatient initiation of systemic penicillin therapy in coordination with infectious disease' },
    ],
    managementProtocol: {
      workup: [
        'Non-treponemal serology (RPR or VDRL) for initial screening and as a quantitative marker of disease activity',
        'Treponemal serology (FTA-ABS, TPPA, or treponemal EIA/CIA) for confirmatory diagnosis',
        'HIV testing, given the strong epidemiologic association with ocular syphilis',
        'Lumbar puncture with CSF analysis (VDRL, cell count, protein), since ocular involvement is considered a form of neurosyphilis',
        'Fluorescein angiography and OCT to characterize the placoid chorioretinal lesion and monitor treatment response',
      ],
      initialTreatment:
        'Systemic penicillin therapy using the neurosyphilis treatment regimen (high-dose intravenous aqueous crystalline penicillin G) is indicated regardless of whether CSF confirms neurosyphilis, since ocular involvement is treated as a neurosyphilis-equivalent presentation. A topical corticosteroid and cycloplegic agent may be used adjunctively for anterior chamber inflammation, but systemic antimicrobial therapy is the essential treatment and must not be delayed or substituted.',
      followUpSchedule:
        'Close monitoring during systemic treatment, with ophthalmic follow-up to assess resolution of intraocular inflammation and serial non-treponemal titers (RPR/VDRL) at defined intervals to confirm adequate treatment response.',
      escalationCriteria: [
        'Failure of RPR/VDRL titers to decline appropriately after treatment',
        'Persistent or worsening intraocular inflammation despite systemic therapy',
        'New neurologic symptoms suggesting inadequately treated neurosyphilis',
      ],
      referralCriteria: [
        'All confirmed or strongly suspected cases -> infectious disease for coordinated systemic treatment, staging, and follow-up serology',
        'HIV testing should always be offered and coordinated given the strong epidemiologic overlap',
        'Vision-threatening presentations (macular placoid lesion, severe panuveitis, optic neuritis) -> urgent same-day/inpatient referral',
        'Report to public health authorities per local requirements and initiate partner notification',
      ],
      steroidConsiderations:
        'A topical corticosteroid may be used adjunctively for anterior chamber inflammation, but systemic penicillin therapy is the essential treatment and must never be delayed or substituted with steroid alone.',
      cycloplegicConsiderations:
        'A cycloplegic agent is used adjunctively for anterior involvement to relieve ciliary spasm/pain and photophobia.',
      complications: ['Macular scarring and chorioretinal atrophy following placoid chorioretinitis', 'Optic atrophy', 'Cataract', 'Secondary glaucoma', 'Permanent Argyll Robertson pupillary changes and other neurologic sequelae in neurosyphilis'],
      monitoringParameters: ['Anterior chamber and vitreous inflammation', 'Visual acuity', 'Resolution of the placoid chorioretinal lesion on exam/OCT', 'Quantitative non-treponemal (RPR/VDRL) titer trend'],
      relatedDrugIds: ['prednisolone-acetate', 'cyclopentolate'],
      relatedExamTechniqueIds: ['fluorescein-angiography', 'oct-macula', 'pupillary-examination', 'uveitis-laboratory-workup'],
    },
    followUp: {
      typical: 'Close monitoring during systemic treatment, with ophthalmic follow-up to assess resolution of intraocular inflammation and serial non-treponemal titers (RPR/VDRL) at defined intervals to confirm adequate treatment response',
      monitor: 'Anterior chamber and vitreous inflammation, visual acuity, resolution of the placoid chorioretinal lesion on exam/OCT, quantitative non-treponemal titer trend',
      progression: 'Failure of titers to decline appropriately, persistent or worsening intraocular inflammation, or new neurologic symptoms should prompt reassessment for treatment failure or need for repeat CSF evaluation',
      shortenWhen: 'HIV co-infection, macular involvement, optic nerve involvement, or any sign of inadequate treatment response',
    },
    prognosis: {
      typicalCourse: 'Generally favorable visual and inflammatory recovery with prompt systemic penicillin therapy; delayed diagnosis (common given the varied presentation) worsens outcomes',
      progressionRisk: 'Untreated or delayed-treatment disease risks progression to permanent visual loss from macular scarring, optic atrophy, or chronic panuveitis complications; risk of broader neurosyphilis progression if untreated',
      complications: 'Macular scarring and chorioretinal atrophy following placoid chorioretinitis, optic atrophy, cataract, secondary glaucoma, and, in neurosyphilis, permanent Argyll Robertson pupillary changes and other neurologic sequelae',
      visualPrognosis: 'Good to excellent with timely systemic treatment, even in cases with significant initial vision loss from placoid chorioretinitis, as substantial visual recovery is common once treponemal infection is treated; prognosis is more guarded with delayed treatment or extensive macular/optic nerve scarring',
    },
    clinicalPearls: [
      'Syphilis is "the great masquerader" — it can produce essentially any pattern or combination of intraocular inflammation, so serologic testing should be considered for any atypical, treatment-resistant, or unexplained uveitis.',
      'Acute syphilitic posterior placoid chorioretinitis is a distinctive, highly suggestive finding: a large yellow placoid lesion at the level of the RPE, often centered near the macula.',
      'Both treponemal and non-treponemal tests are required — treponemal tests confirm infection (stay positive for life), while non-treponemal titers (RPR/VDRL) track disease activity and treatment response.',
      'Any patient diagnosed with ocular syphilis should be treated with the neurosyphilis penicillin regimen, since ocular involvement is considered CNS-equivalent disease regardless of CSF findings.',
      'The Argyll Robertson pupil ("accommodates but does not react") is a late finding of tertiary neurosyphilis, classically described as small, irregular pupils.',
      'HIV testing should always be offered to patients diagnosed with ocular syphilis given the strong epidemiologic overlap between the two infections.',
    ],
    highYield: [
      'Syphilis = "the great masquerader" — can cause anterior, intermediate, posterior, or panuveitis with no single characteristic pattern except the placoid chorioretinal lesion',
      'Acute syphilitic posterior placoid chorioretinitis is the classic board-testable posterior segment finding',
      'Diagnosis requires BOTH treponemal (confirmatory, lifelong positive) and non-treponemal (RPR/VDRL, tracks activity) serologic testing',
      'Treatment is systemic penicillin using the neurosyphilis regimen, even for isolated ocular involvement without confirmed CSF disease',
      'Argyll Robertson pupil (accommodates but does not react to light) is a late tertiary/neurosyphilis finding, not an early sign',
      'HIV testing should always be offered given the strong epidemiologic association between ocular syphilis and HIV co-infection',
    ],
  },
]
