import type { Disease } from '../../types/disease'

export const retinaAdditional7: Disease[] = [
  {
    id: 'lattice-degeneration-wwp',
    name: 'Lattice Degeneration and White Without Pressure',
    aliases: ['Lattice retinal degeneration', 'WWP'],
    category: 'Retina',
    definition:
      'Two distinct peripheral retinal findings commonly compared and contrasted at the bedside: lattice degeneration, a well-demarcated area of peripheral retinal thinning with sclerotic ("lattice") vessels and firm vitreoretinal adhesion at its margins that is a recognized risk factor for rhegmatogenous retinal detachment, and white without pressure (WWP), a benign, well-demarcated gray-white peripheral fundus appearance visible without scleral depression that carries no increased detachment risk.',
    affectedStructure:
      'Peripheral retina and overlying vitreous (lattice degeneration: retina, retinal vasculature, and vitreoretinal interface; WWP: peripheral neurosensory retina/vitreoretinal interface without a discrete retinal lesion)',
    pathologicalProcess:
      'Lattice degeneration is a zone of primary retinal thinning with overlying vitreous liquefaction and abnormally firm, focal vitreoretinal adhesion concentrated at the margins of the lesion; when the vitreous separates from the retina (posterior vitreous detachment), these adherent margins are subjected to tractional forces that can produce atrophic round holes within the lattice or tractional horseshoe tears at its edge. White without pressure reflects an incompletely understood abnormality at the vitreoretinal interface — proposed mechanisms include altered light reflectance from an abnormal posterior vitreous cortex or subtle changes in the vitreoretinal relationship — without associated retinal thinning, holes, or abnormal vitreoretinal traction.',
    epidemiology: {
      typicalAge:
        'Lattice degeneration: often present from adolescence/young adulthood and stable or slowly enlarging thereafter; WWP: can be seen at any age, more frequently noted in younger patients',
      prevalence:
        'Lattice degeneration is present in roughly 6-10% of the general population; WWP is a common incidental finding on peripheral retinal exam, particularly common in eyes with a large vitreous base',
      importantPopulations:
        'Lattice degeneration is more common and more extensive in myopic eyes (especially moderate-to-high myopia) and shows a hereditary tendency; WWP is seen more often in Black patients and in highly myopic eyes, and is frequently bilateral',
    },
    riskFactors: [
      { label: 'Myopia (moderate to high) — for lattice degeneration', tier: 'major' },
      { label: 'Family history of lattice degeneration or retinal detachment', tier: 'moderate' },
      { label: 'Stickler syndrome and other hereditary vitreoretinopathies (extensive/atypical lattice)', tier: 'moderate' },
      { label: 'Acute posterior vitreous detachment in an eye with pre-existing lattice degeneration (precipitates tractional tears)', tier: 'major' },
      { label: 'Black race and high myopia — associated with white without pressure (not a detachment risk factor)', tier: 'associated' },
    ],
    pathophysiology: [
      'Lattice degeneration: focal areas of inner retinal thinning develop, most commonly in the equatorial/pre-equatorial retina, classically in the vertical meridians (superotemporal and inferonasal quadrants favored)',
      'Overlying vitreous liquefies (vitreous syneresis) within the lattice lesion while the vitreous remains abnormally, firmly adherent specifically at the margins of the lesion',
      'Sclerosed, criss-crossing retinal vessels within the lesion (the "lattice" pattern) reflect chronic vascular wall hyalinization; surface pigmentation and yellow-white flecks may accompany chronic lesions',
      'When the vitreous undergoes posterior vitreous detachment, the firm marginal adhesion generates focal traction, which can create a horseshoe (flap) tear at the margin, or lead to formation of atrophic round holes within the thinned lattice itself (with lower detachment risk than traction tears since these are usually not accompanied by significant traction)',
      'White without pressure: the affected retina appears diffusely gray-white to the observer without any need for scleral depression to bring it into view (in contrast to normal peripheral retina, which typically requires depression to visualize well), but the retina remains of normal thickness with no holes, tears, or abnormal adhesion, and the appearance does not predict future retinal breaks',
    ],
    symptoms: {
      common: ['Both lattice degeneration and white without pressure are typically completely asymptomatic and found incidentally on routine dilated peripheral retinal examination'],
      lessCommon: [
        'New flashes and floaters if an eye with lattice degeneration develops an acute posterior vitreous detachment with associated tractional retinal tear',
        'Peripheral visual field defect ("curtain") if a lattice-associated tear progresses to frank retinal detachment',
      ],
      importantNegatives: [
        'White without pressure itself never causes symptoms and does not warrant symptom-driven concern in isolation',
        'Chronic, stable lattice degeneration without acute PVD symptoms is not itself symptomatic',
      ],
      typicalProgression:
        'Lattice degeneration is typically stable for years and is monitored, not treated, unless acute symptoms (flashes/floaters) signal a new PVD-related tear; white without pressure is a static, benign lifelong finding.',
    },
    signs: [
      {
        area: 'Retina',
        finding:
          'Lattice degeneration: sharply demarcated, spindle- or oval-shaped area(s) of retinal thinning in the equatorial retina, often oriented circumferentially, with criss-crossing sclerotic ("lattice") vessels, overlying vitreous liquefaction with a pocket of syneretic vitreous, variable surface pigmentation, and occasional yellow-white surface flecks; atrophic round holes may be visible within the lesion',
      },
      {
        area: 'Vitreous',
        finding:
          'Firm, focal vitreoretinal adhesion at the margins of lattice lesions; may see an operculum or a posterior vitreous detachment with a tractional flap tear at the edge of a lattice lesion in an acute presentation',
      },
      {
        area: 'Retina',
        finding:
          'White without pressure: well-demarcated, grayish-white translucent appearance of the peripheral retina visible on routine indirect ophthalmoscopy without scleral depression, typically involving a broad, confluent area of retina (often quadrantic in extent); the border can be scalloped; the underlying retina is of normal thickness with no holes, breaks, pigmentation, or vascular changes',
      },
    ],
    differentialDiagnosis: [
      {
        disease: 'White without pressure (as a differential for lattice degeneration)',
        whySimilar: 'Both are pale/whitish peripheral fundus findings encountered on routine dilated peripheral exam and can be confused by an inexperienced examiner',
        keyDistinguisher:
          'Lattice shows discrete thinning, sclerotic criss-crossing vessels, and firm marginal vitreoretinal adhesion with detachment risk; WWP shows a diffuse, homogeneous gray-white sheen with normal retinal thickness, no vascular changes, and carries NO increased retinal detachment risk — this distinction is the key clinical pearl to avoid over-referring or alarming patients with WWP',
      },
      {
        disease: 'Retinoschisis (degenerative peripheral)',
        whySimilar: 'Both are peripheral findings that can show a smooth, altered fundus appearance in the far periphery',
        keyDistinguisher:
          'Retinoschisis produces a smooth, dome-shaped, immobile elevation with splitting of the retinal layers (and an absolute visual field defect over the schisis), whereas lattice degeneration is flat/minimally elevated thinning without splitting, and WWP shows no elevation at all',
      },
      {
        disease: 'Chorioretinal scar / old chorioretinitis',
        whySimilar: 'Pigmented, well-demarcated peripheral lesion that can resemble chronic lattice degeneration',
        keyDistinguisher: 'Chorioretinitis scars typically show more pigment clumping and atrophic RPE/choroid change with a history of prior inflammatory disease, rather than the characteristic sclerotic lattice vessel pattern and symmetric spindle shape of lattice degeneration',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Dilated fundus examination with scleral depression',
        whyOrdered: 'Primary method to identify, characterize, and follow lattice degeneration and to distinguish it from white without pressure',
        expectedFinding:
          'Lattice degeneration is best delineated with scleral depression (spindle-shaped thinning, sclerotic vessels, marginal holes/tears); WWP is, by definition, visible without depression as a gray-white area and does not require or particularly change appearance with depression',
        contribution: 'Establishes the diagnosis, distinguishes the two entities, and identifies any associated retinal breaks requiring treatment',
      },
      {
        name: 'Fundus photography / widefield retinal imaging',
        whyOrdered: 'Document the extent and location of lattice degeneration or WWP for baseline comparison over time',
        expectedFinding: 'Photographic record of lesion borders, presence/absence of holes, and lattice vessel pattern',
        contribution: 'Allows objective comparison at future visits to detect any interval change, particularly new holes or tears in lattice lesions',
      },
      {
        name: 'Refraction / axial length assessment',
        whyOrdered: 'Establish degree of myopia, a major risk factor for and modifier of lattice degeneration extent',
        expectedFinding: 'Moderate to high myopia frequently accompanies more extensive or bilateral lattice degeneration',
        contribution: 'Informs overall retinal detachment risk stratification and the interval for peripheral retinal monitoring',
      },
    ],
    diagnosis: {
      confirmation:
        'Both are clinical diagnoses made by dilated indirect ophthalmoscopy with scleral depression; lattice degeneration is confirmed by its characteristic spindle-shaped thinning with sclerotic vessels and marginal adhesion, while WWP is confirmed by its diffuse gray-white appearance visible without depression and the absence of retinal thinning, holes, or vascular change.',
      classification:
        'Lattice degeneration is described by location (quadrant, circumferential extent), presence/absence of atrophic holes, and presence/absence of an associated tractional tear; WWP is simply documented as present/absent by quadrant with no further staging, since it is a normal variant',
    },
    management: [
      {
        category: 'Observation',
        detail:
          'Asymptomatic lattice degeneration without holes or a symptomatic PVD: routine observation with periodic dilated peripheral exams (no prophylactic treatment indicated for asymptomatic lattice in the absence of a break or symptoms)',
      },
      {
        category: 'Observation',
        detail:
          'White without pressure: no treatment of any kind is indicated; document location/extent with photography at baseline and simply monitor as an incidental, entirely benign finding at routine exams',
      },
      {
        category: 'First-line treatment',
        detail:
          'Symptomatic lattice degeneration with an acute, non-detached retinal tear at its margin (from a new PVD): prompt laser photocoagulation or cryopexy to wall off the tear and prevent progression to rhegmatogenous retinal detachment',
      },
      {
        category: 'Referral',
        detail:
          'Refer to a retina specialist for any lattice-associated retinal break, for extensive/atypical lattice degeneration (e.g., in the setting of Stickler syndrome), or for any patient with lattice degeneration who develops acute flashes/floaters',
      },
    ],
    followUp: {
      typical:
        'Stable asymptomatic lattice degeneration: annual to biennial dilated peripheral exam depending on myopia severity and fellow-eye/family history; white without pressure: no dedicated follow-up interval required beyond routine comprehensive eye exams',
      monitor: 'Interval appearance of new symptoms (flashes/floaters), new pigment in the vitreous (tobacco dust), or new holes/tears at lattice margins on repeat scleral depression exam',
      progression: 'New posterior vitreous detachment symptoms in an eye with known lattice degeneration warrants prompt re-examination to rule out a new tractional tear',
      shortenWhen: 'High myopia, fellow-eye history of retinal detachment, family history of retinal detachment, or any new photopsia/floaters',
    },
    prognosis: {
      typicalCourse:
        'Lattice degeneration is typically stable over years, with the great majority of affected eyes never developing a retinal detachment; white without pressure remains static and benign throughout life',
      progressionRisk:
        'Retinal detachment risk from lattice degeneration is low in absolute terms but is meaningfully elevated relative to eyes without lattice, particularly when a symptomatic tractional tear develops during an acute PVD; WWP carries no elevated detachment risk whatsoever',
      complications: 'Atrophic hole or tractional horseshoe tear at lattice margins, progressing to rhegmatogenous retinal detachment if untreated; WWP has no associated complications',
      visualPrognosis:
        'Excellent for both findings when appropriately monitored; prophylactic treatment (when indicated for an actual break) is highly effective at preventing detachment from lattice-associated tears',
    },
    clinicalPearls: [
      'The vitreoretinal adhesion at the margins of lattice degeneration — not the thinning itself — is the key mechanism that creates detachment risk, because it is exactly where traction concentrates during an acute posterior vitreous detachment (see Retinal Detachment).',
      'White without pressure is a critical "do not overcall" finding: unlike lattice degeneration, it is NOT associated with increased retinal detachment risk and requires no treatment — mistaking it for a more concerning lesion can needlessly alarm patients or prompt unnecessary referral.',
      'Asymptomatic lattice degeneration without a break is observed, not prophylactically treated; treatment is reserved for symptomatic new tears, not for the presence of lattice alone.',
      'Lattice degeneration classically favors the vertical meridians of the equatorial retina and is more extensive/bilateral in myopic eyes and in hereditary vitreoretinopathies such as Stickler syndrome.',
      'Always perform scleral depression to fully characterize lattice degeneration; WWP, by definition, is visible without depression, which is itself a useful bedside distinguishing clue.',
    ],
    highYield: [
      'Lattice degeneration = peripheral retinal thinning + sclerotic lattice vessels + firm marginal vitreoretinal adhesion → risk factor for rhegmatogenous retinal detachment via traction at lesion margins during PVD',
      'White without pressure = benign, often bilateral, gray-white peripheral finding visible WITHOUT scleral depression, NOT associated with increased retinal detachment risk — key board distinction from lattice degeneration',
      'Only symptomatic, acute lattice-associated retinal breaks are treated (laser/cryopexy); stable asymptomatic lattice degeneration is observed',
      'Lattice degeneration is more common/extensive in myopic eyes and hereditary vitreoretinopathies (e.g., Stickler syndrome)',
      'White without pressure requires no treatment and no dedicated monitoring interval — document and reassure',
      'Atrophic round holes within lattice (less traction) carry lower acute detachment risk than tractional flap tears at lattice margins (significant traction)',
    ],
  },
  {
    id: 'chrpe',
    name: 'Congenital Hypertrophy of the Retinal Pigment Epithelium',
    aliases: ['CHRPE', 'Congenital Hypertrophy of the RPE'],
    category: 'Retina',
    definition:
      'A benign, flat, well-demarcated, darkly pigmented congenital lesion of the retinal pigment epithelium, occurring as a solitary lesion or as multiple grouped lesions ("bear tracks"), the latter pattern carrying a well-established association with familial adenomatous polyposis (FAP)/Gardner syndrome.',
    affectedStructure: 'Retinal pigment epithelium (RPE), with the overlying neurosensory retina and choroid structurally uninvolved',
    pathologicalProcess:
      'Focal hypertrophy and hyperpigmentation of RPE cells, present from birth, produce a flat, sharply demarcated pigmented lesion; solitary lesions typically show a surrounding depigmented (halo) zone and internal round depigmented lacunae from focal RPE cell dropout/attenuation, while multifocal "bear track" lesions represent numerous small, grouped, uniformly pigmented RPE hypertrophic spots clustered in one fundus area, a pattern strongly associated with germline APC gene mutations underlying FAP/Gardner syndrome.',
    epidemiology: {
      typicalAge: 'Present from birth (congenital), though typically first noted incidentally on a dilated exam at any age',
      prevalence: 'Solitary CHRPE is a fairly common incidental fundus finding; grouped "bear track" pigmentation is much less common and raises specific concern for FAP',
      importantPopulations: 'Patients with multiple, bilateral, or atypical (non-classic) grouped pigmented lesions, and those with a family history of colorectal polyposis/cancer, warrant particular attention to the bear-track pattern',
    },
    riskFactors: [
      { label: 'Multiple grouped ("bear track") pigmented lesions, especially bilateral or numerous — associated with FAP/Gardner syndrome', tier: 'major' },
      { label: 'Family history of familial adenomatous polyposis or early-onset colorectal cancer', tier: 'major' },
      { label: 'Solitary CHRPE lesion — not associated with any systemic disease', tier: 'associated' },
    ],
    pathophysiology: [
      'RPE cells at the lesion become hypertrophied and packed with abnormally large, dense melanin granules, producing a flat, uniformly dark (often jet-black to brown-black) fundus lesion',
      'Solitary CHRPE lesions characteristically show a surrounding depigmented halo (a rim of relative RPE hypopigmentation) and internal round lacunae (small depigmented spots within the lesion) reflecting focal areas of RPE atrophy within the hypertrophic lesion',
      'Solitary CHRPE lesions are typically stable throughout life, though slow enlargement at the margins can occasionally be observed on long-term photographic follow-up without malignant potential',
      'Grouped/multifocal "bear track" pigmentation consists of numerous small, discrete, densely pigmented lesions clustered together in one fundus quadrant, resembling animal tracks, typically without the halo/lacunae morphology of solitary lesions',
      'The bear-track pattern reflects an underlying germline mutation in the APC tumor suppressor gene, the same gene defect responsible for familial adenomatous polyposis, making these fundus lesions a phenotypic marker of the systemic genetic disease rather than an independent ocular condition',
    ],
    symptoms: {
      common: ['Asymptomatic — found incidentally on routine dilated fundus examination'],
      lessCommon: ['None typically; extremely large or macula-involving lesions could rarely produce a subtle visual field defect'],
      importantNegatives: ['No pain, no photopsia, no floaters, no change in central vision attributable to typical CHRPE'],
      typicalProgression: 'Solitary CHRPE is stable over a lifetime with only occasional slow marginal growth; bear-track lesions are similarly stable ocular findings, but their systemic significance (FAP) is what drives clinical urgency, not any ocular progression.',
    },
    signs: [
      {
        area: 'Retina',
        finding:
          'Solitary CHRPE: flat, sharply demarcated, darkly pigmented (gray-black to jet-black) round or oval lesion, classically with a surrounding depigmented halo and scattered round depigmented lacunae within the lesion',
      },
      {
        area: 'Retina',
        finding:
          '"Bear track" pigmentation: multiple small, discrete, densely pigmented lesions grouped/clustered together in one quadrant, resembling animal footprints, often bilateral when associated with FAP',
      },
      { area: 'Retina', finding: 'No associated retinal vascular changes, elevation, exudation, or hemorrhage in either pattern; lesion does not enlarge acutely or show growth on serial photography beyond very slow marginal change' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Choroidal nevus',
        whySimilar: 'Both are flat to minimally elevated pigmented fundus lesions found incidentally',
        keyDistinguisher: 'Choroidal nevus is a slate-gray to blue-gray subretinal (choroidal) lesion with indistinct/feathered margins and can show overlying drusen, whereas CHRPE is jet-black with sharply demarcated borders and is a lesion of the RPE, not the choroid',
      },
      {
        disease: 'Choroidal melanoma',
        whySimilar: 'Pigmented fundus lesion that must always be considered and excluded when a new pigmented lesion is found',
        keyDistinguisher: 'Melanoma is typically elevated/dome-shaped with documented growth over time, may show orange lipofuscin pigment and subretinal fluid, and shows characteristic low internal reflectivity on B-scan ultrasound; CHRPE is flat, stable over time, and shows none of these features',
      },
      {
        disease: 'Combined hamartoma of the retina and RPE',
        whySimilar: 'Pigmented fundus lesion of the RPE that can be present from an early age',
        keyDistinguisher: 'Combined hamartoma is typically elevated with associated retinal vascular tortuosity, epiretinal membrane/traction, and vitreoretinal interface distortion, whereas CHRPE is flat with no traction or vascular involvement',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Dilated fundus examination',
        whyOrdered: 'Primary method of identifying and characterizing CHRPE lesions and distinguishing solitary from grouped bear-track patterns',
        expectedFinding: 'Flat, sharply demarcated pigmented lesion(s) with or without halo/lacunae (solitary) or multiple small grouped pigmented spots in one quadrant (bear tracks)',
        contribution: 'Establishes the diagnosis and is the key step in recognizing the bear-track pattern that should trigger further systemic workup',
      },
      {
        name: 'Fundus photography',
        whyOrdered: 'Baseline documentation for future comparison',
        expectedFinding: 'Photographic record of lesion size, shape, pigmentation pattern, and location',
        contribution: 'Allows detection of any interval change on future visits, though stability is expected and reassuring',
      },
      {
        name: 'Genetic counseling referral and APC gene testing',
        whyOrdered: 'Indicated when bear-track (grouped, multifocal) pigmentation is identified, given its established association with FAP/Gardner syndrome',
        expectedFinding: 'APC gene mutation identified in patients with true FAP-associated retinal pigmentation',
        contribution: 'Confirms or excludes an underlying FAP diagnosis, which has life-saving implications given the associated colorectal cancer risk',
      },
      {
        name: 'Colonoscopy / gastroenterology referral',
        whyOrdered: 'Screen for colorectal polyposis once bear-track pigmentation raises suspicion for FAP',
        expectedFinding: 'Numerous colonic adenomatous polyps in confirmed FAP',
        contribution: 'Enables early detection and prophylactic management of colorectal cancer risk, the primary systemic threat in FAP',
      },
    ],
    diagnosis: {
      criteria: 'Diagnosis is clinical and based on the characteristic flat, pigmented, well-demarcated fundus appearance; distinguishing solitary CHRPE (with halo and lacunae) from grouped bear-track pigmentation is the essential clinical determination',
      confirmation: 'Confirmed by dilated fundus examination and fundus photography; the diagnosis of associated FAP/Gardner syndrome requires genetic counseling, APC gene testing, and gastroenterology evaluation with colonoscopy when bear-track pigmentation is identified',
      classification: 'Classified as solitary CHRPE (benign, isolated, no systemic association) versus grouped/multifocal "bear track" CHRPE (associated with FAP/Gardner syndrome)',
    },
    management: [
      { category: 'Observation', detail: 'Solitary CHRPE: no treatment required; periodic dilated fundus exam with photographic documentation to confirm long-term stability' },
      { category: 'Referral', detail: 'Bear-track (grouped, multifocal, often bilateral) pigmentation: refer promptly for genetic counseling and gastroenterology evaluation with colonoscopy given the strong association with FAP and its significant colorectal cancer risk' },
      { category: 'Referral', detail: 'Any atypical, elevated, enlarging, or otherwise concerning pigmented lesion should be referred to a retina specialist/ocular oncology to rule out choroidal nevus with risk features or melanoma' },
    ],
    followUp: {
      typical: 'Solitary CHRPE: routine periodic monitoring at comprehensive eye exams, generally every 1-2 years, with photographic comparison',
      monitor: 'Lesion size, shape, elevation, and pigmentation pattern for any interval change suggesting an alternative diagnosis',
      progression: 'True CHRPE (solitary or bear-track) does not undergo malignant transformation; any documented growth or elevation should prompt reconsideration of the diagnosis rather than being attributed to CHRPE',
      shortenWhen: 'New bear-track pattern identified without prior systemic workup, or any lesion showing atypical features (elevation, growth, orange pigment, subretinal fluid)',
    },
    prognosis: {
      typicalCourse: 'Solitary CHRPE remains a stable, entirely benign, asymptomatic lesion for life; bear-track pigmentation is likewise an ocularly stable/benign finding, but its identification carries major systemic significance',
      progressionRisk: 'No risk of malignant transformation for either pattern; the clinically important "risk" of bear-track CHRPE is the underlying systemic FAP diagnosis, not the ocular lesion itself',
      complications: 'None from the ocular lesion itself; untreated/undetected FAP carries a very high lifetime risk of colorectal cancer if bear-track pigmentation is not recognized and appropriately worked up',
      visualPrognosis: 'Excellent — CHRPE, in either pattern, does not threaten vision',
    },
    clinicalPearls: [
      'Recognizing bear-track pigmentation and appropriately referring for genetic counseling and colonoscopy can be a life-saving intervention — the eye exam may be the first clue to an underlying FAP diagnosis before colorectal symptoms ever develop.',
      'Solitary CHRPE with a depigmented halo and internal lacunae is a classic, reassuring, entirely benign finding requiring no workup beyond routine observation.',
      'The key distinguishing feature is the pattern: one flat pigmented lesion with a halo and lacunae = solitary CHRPE (benign); multiple small grouped pigmented lesions in one quadrant resembling animal tracks = bear tracks (think FAP/Gardner syndrome).',
      'CHRPE is flat and stable — any elevation, growth, or orange pigment overlying a suspected CHRPE lesion should prompt reconsideration of choroidal nevus or melanoma rather than reflexively calling it CHRPE.',
    ],
    highYield: [
      'CHRPE = flat, pigmented, congenital RPE lesion; solitary lesions classically show a depigmented halo and internal lacunae',
      '"Bear track" pigmentation = multiple small, grouped pigmented lesions in one quadrant, distinct from solitary CHRPE',
      'Bear-track pigmentation has a well-established association with familial adenomatous polyposis (FAP)/Gardner syndrome (APC gene mutation)',
      'Identifying bear-track pigmentation should prompt referral for genetic counseling and colorectal cancer screening (colonoscopy) given the significant colon cancer risk in FAP',
      'Solitary CHRPE requires no treatment beyond baseline photographic documentation and periodic observation — it is entirely benign with no systemic association',
      'CHRPE does not undergo malignant transformation; documented growth or elevation should raise suspicion for an alternative diagnosis (nevus/melanoma), not CHRPE progression',
    ],
  },
  {
    id: 'familial-exudative-vitreoretinopathy',
    name: 'Familial Exudative Vitreoretinopathy',
    aliases: ['FEVR'],
    category: 'Retina',
    definition:
      'A genetic disorder of retinal vascular development, most commonly inherited in an autosomal dominant pattern (though autosomal recessive and X-linked forms exist), causing incomplete or abnormal vascularization of the peripheral retina in full-term infants with no history of prematurity or supplemental oxygen exposure, with a clinical spectrum ranging from asymptomatic peripheral avascular retina to vision-threatening neovascularization, vitreous hemorrhage, tractional retinal detachment, and falciform macular folds.',
    affectedStructure: 'Peripheral retinal vasculature, and secondarily the vitreous and macula in advanced disease (falciform fold, tractional detachment)',
    pathologicalProcess:
      'Mutations in genes governing the Norrin/Wnt signaling pathway that normally drives retinal vascular development (e.g., FZD4, LRP5, TSPAN12, NDP) result in arrested or abnormal peripheral retinal vascularization, leaving a zone of persistently avascular peripheral retina; the resulting ischemia at the vascular-avascular junction can drive VEGF-mediated pathologic neovascularization, exudation, fibrovascular proliferation, and subsequent tractional complications, closely mirroring the vasculo-proliferative sequence seen in retinopathy of prematurity but arising from a primary genetic defect rather than prematurity/oxygen exposure.',
    epidemiology: {
      typicalAge: 'Can present at any age, from infancy (most severe cases) to adulthood (mild, incidentally discovered peripheral avascular retina); onset and severity vary widely even within the same family',
      prevalence: 'Rare, with variable expressivity — some family members may be asymptomatic carriers with only subtle peripheral avascular retina found on screening',
      importantPopulations: 'Full-term infants (by definition, no history of prematurity); family members of an identified proband, given the high yield of screening relatives once a case is found',
    },
    riskFactors: [
      { label: 'Family history of FEVR (autosomal dominant inheritance most common)', tier: 'major' },
      { label: 'Known pathogenic variant in FZD4, LRP5, TSPAN12, or NDP (or other implicated genes)', tier: 'major' },
      { label: 'X-linked or autosomal recessive inheritance patterns (generally more severe phenotypes)', tier: 'moderate' },
    ],
    pathophysiology: [
      'Disruption of the Norrin/Frizzled-4/LRP5/TSPAN12 signaling pathway impairs normal centrifugal growth of retinal vasculature from the optic disc toward the ora serrata during development',
      'This produces a persistent zone of peripheral avascular retina, typically most pronounced temporally, analogous in appearance to the avascular retina of retinopathy of prematurity but occurring in a full-term infant with no history of prematurity or supplemental oxygen exposure — this history is the essential feature distinguishing FEVR from ROP',
      'Chronic ischemia at the junction between vascularized and avascular retina can upregulate VEGF, driving peripheral retinal neovascularization, vascular leakage/exudation, and fibrovascular proliferation',
      'Fibrovascular proliferation and its subsequent contraction can produce vitreous hemorrhage, tractional retinal detachment, and falciform retinal folds that drag the macula temporally, causing pseudo-strabismus (falsely positive angle kappa appearance) and reduced vision',
      'Disease severity and laterality are highly variable even within the same family (variable expressivity) — some relatives carrying the same mutation show only mild, asymptomatic peripheral avascular retina while others develop severe unilateral or asymmetric complications',
    ],
    symptoms: {
      common: ['Often entirely asymptomatic in mild cases, found incidentally on screening exam', 'Decreased vision or strabismus if macular dragging (falciform fold) or amblyopia has developed'],
      lessCommon: ['Leukocoria (white pupillary reflex) in advanced cases with retinal detachment or dense vitreous hemorrhage', 'Nystagmus if bilateral severe disease causes early profound vision loss'],
      importantNegatives: ['No history of prematurity', 'No history of supplemental oxygen exposure at birth — both are essential negatives that distinguish FEVR from retinopathy of prematurity'],
      typicalProgression:
        'Disease can remain stable and asymptomatic for life in mild cases, or progress through stages analogous to ROP (avascular retina → peripheral neovascularization/exudation → tractional changes/falciform fold → retinal detachment) in severe cases, with progression often unilateral or markedly asymmetric between eyes.',
    },
    signs: [
      { area: 'Retina', finding: 'Peripheral avascular retina, most often temporal, with an abrupt vascular-avascular junction; vascular straightening/tortuosity and abnormal peripheral vascular arborization' },
      { area: 'Retina', finding: 'Peripheral neovascularization and exudation (sometimes resembling Coats disease) at the vascular-avascular junction in more advanced disease' },
      { area: 'Retina', finding: 'Falciform (sickle-shaped) retinal fold extending from the optic disc to the dragged peripheral retina, temporally displacing the macula in advanced cases' },
      { area: 'Vitreous', finding: 'Vitreous hemorrhage from fragile peripheral neovascular fronds' },
      { area: 'Retina', finding: 'Tractional retinal detachment in severe, advanced-stage disease' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Retinopathy of prematurity',
        whySimilar: 'Both show peripheral retinal avascularity, a vascular-avascular junction, peripheral neovascularization, and potential progression to tractional retinal detachment and falciform folds — the two conditions can look nearly identical on fundus exam',
        keyDistinguisher: 'The defining distinguishing feature is history: ROP occurs specifically in premature infants with a history of supplemental oxygen exposure; FEVR occurs in full-term infants with NO history of prematurity or supplemental oxygen — birth history alone differentiates the two, and this distinction is essential since FEVR is genetic/heritable and warrants family screening while ROP does not',
      },
      {
        disease: 'Coats disease',
        whySimilar: 'Peripheral retinal telangiectasia with exudation that can mimic the exudative peripheral vascular changes of FEVR',
        keyDistinguisher: 'Coats disease is typically unilateral, sporadic (non-familial), occurs predominantly in young males, and shows massive lipid exudation with light-bulb telangiectatic vessels without the symmetric family inheritance pattern or bilateral (even if asymmetric) avascular retina typical of FEVR',
      },
      {
        disease: 'Persistent fetal vasculature (persistent hyperplastic primary vitreous)',
        whySimilar: 'Can present with leukocoria, retinal traction/folds, and vision loss in an infant',
        keyDistinguisher: 'Persistent fetal vasculature is typically unilateral, associated with microphthalmia and a persistent hyaloid stalk/retrolental fibrovascular membrane, and is not familial, whereas FEVR shows a heritable pattern and peripheral (not central/retrolental) vascular pathology',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Dilated fundus examination with scleral depression (indirect ophthalmoscopy)',
        whyOrdered: 'Primary method to identify peripheral avascular retina, neovascularization, exudation, or traction',
        expectedFinding: 'Peripheral avascular retina with an abrupt vascular-avascular junction, straightened vessels, and variable neovascularization/traction depending on stage',
        contribution: 'Establishes the diagnosis and stages disease severity to guide observation versus treatment',
      },
      {
        name: 'Fluorescein angiography (including widefield/ultra-widefield imaging)',
        whyOrdered: 'Delineate the precise extent of peripheral avascular retina and detect subtle leakage/neovascularization not apparent on ophthalmoscopy alone',
        expectedFinding: 'Sharp cutoff between the vascularized posterior retina and the avascular peripheral retina, with leakage at abnormal vessels in active disease',
        contribution: 'Considered the gold standard for mapping avascular retina and guiding the extent of laser treatment when indicated; also highly useful for screening asymptomatic relatives',
      },
      {
        name: 'Examination under anesthesia (for young children unable to cooperate with awake exam)',
        whyOrdered: 'Allows complete peripheral retinal examination and angiography in infants/young children',
        expectedFinding: 'Same findings as dilated exam, obtained under controlled conditions',
        contribution: 'Necessary for accurate staging and treatment planning in the pediatric population most affected by severe FEVR',
      },
      {
        name: 'Genetic testing (FZD4, LRP5, TSPAN12, NDP, and related genes) and family history/pedigree review',
        whyOrdered: 'Confirm the genetic diagnosis and identify the inheritance pattern within the family',
        expectedFinding: 'Identification of a pathogenic variant in a known FEVR-associated gene in a subset of patients',
        contribution: 'Confirms diagnosis, clarifies inheritance pattern, and is a key step toward screening at-risk relatives',
      },
      {
        name: 'Screening dilated exam (with fluorescein angiography as needed) of first-degree relatives of an affected proband',
        whyOrdered: 'FEVR is frequently asymptomatic and can be unilateral or markedly asymmetric, so relatives carrying the same mutation may be unaware of their own disease',
        expectedFinding: 'Variable — ranges from normal exam to subtle peripheral avascular retina to overt neovascular/tractional disease depending on expressivity',
        contribution: 'Identifies at-risk family members early, before vision-threatening complications develop, given the condition\'s variable expressivity',
      },
    ],
    diagnosis: {
      criteria: 'Diagnosis is based on characteristic peripheral avascular retina (with or without associated neovascular/tractional complications) identified on dilated fundus exam and/or fluorescein angiography in a full-term infant or other patient without a history of prematurity or supplemental oxygen exposure, often supported by a positive family history or genetic testing',
      confirmation: 'Confirmed by dilated fundus exam and fluorescein angiography demonstrating peripheral avascular retina with a sharp vascular-avascular junction; genetic testing can confirm a pathogenic variant in a known FEVR gene',
      classification: 'Staged similarly to ROP — from Stage 1 (avascular peripheral retina only) through progressively more severe stages involving neovascularization/exudation, then subtotal, and finally total tractional retinal detachment; also described by laterality (unilateral, bilateral, or markedly asymmetric)',
    },
    management: [
      { category: 'Observation', detail: 'Mild disease with stable peripheral avascular retina and no active neovascularization/exudation: periodic monitoring with dilated exam and imaging' },
      { category: 'First-line treatment', detail: 'Peripheral neovascularization or leaking avascular retina: laser photocoagulation of the avascular retina to reduce the ischemic drive for neovascularization, analogous to treatment thresholds used in ROP' },
      { category: 'Advanced treatment', detail: 'Vitreous hemorrhage, tractional retinal detachment, or falciform fold threatening the macula: vitreoretinal surgery (vitrectomy with or without scleral buckle) by a retina specialist experienced in pediatric vitreoretinal disease' },
      { category: 'Referral', detail: 'All first-degree relatives of a diagnosed proband should be referred for dilated fundus screening (with fluorescein angiography if needed) given variable expressivity and the possibility of asymptomatic disease; genetics referral for counseling regarding inheritance pattern and family planning' },
    ],
    followUp: {
      typical: 'Frequency individualized by stage and activity — stable mild disease may be followed annually to every few years, while active neovascular/exudative disease requires close interval monitoring (weeks to months) analogous to ROP follow-up protocols',
      monitor: 'Extent of peripheral avascular retina, presence/activity of neovascularization or exudation, macular status (dragging/falciform fold), and visual acuity/strabismus in children',
      progression: 'New peripheral neovascularization, increasing exudation, new vitreous hemorrhage, or progressive macular dragging/traction indicate disease activity requiring treatment escalation',
      shortenWhen: 'Young age at diagnosis, rapid interval change on serial exams, or a family history of severe disease in a relative',
    },
    prognosis: {
      typicalCourse: 'Highly variable given variable expressivity — many patients have mild, stable, lifelong asymptomatic peripheral avascular retina, while a subset progress through neovascular and tractional stages, often unilaterally or asymmetrically',
      progressionRisk: 'Risk of progression to vision-threatening neovascular or tractional complications is difficult to predict for an individual patient and can occur at any age, underscoring the importance of ongoing monitoring even in mild cases',
      complications: 'Peripheral neovascularization, vitreous hemorrhage, exudative retinal detachment, tractional retinal detachment, falciform retinal folds with macular dragging, amblyopia/strabismus in children',
      visualPrognosis: 'Generally good for mild, stable disease; guarded for eyes that progress to macular dragging or tractional retinal detachment, particularly when diagnosed late or in infancy',
    },
    clinicalPearls: [
      'The single most important historical distinguishing feature from retinopathy of prematurity is birth history: FEVR occurs in full-term infants with NO history of prematurity or supplemental oxygen exposure — always ask this directly when peripheral avascular retina is found.',
      'Because FEVR can be asymptomatic and markedly asymmetric or unilateral, always screen first-degree relatives once a proband is identified — an asymptomatic parent or sibling may be unknowingly carrying significant peripheral disease.',
      'FEVR follows a staging framework that parallels ROP (avascular retina → neovascularization/exudation → traction/falciform fold → detachment), which is why the two conditions are so often compared on exams and in practice.',
      'Variable expressivity is a hallmark of FEVR — the same causative mutation can produce anything from an incidental finding of peripheral avascular retina to a blinding tractional retinal detachment, even within the same family.',
    ],
    highYield: [
      'FEVR = genetic (most often autosomal dominant) disorder of retinal vascular development causing peripheral avascular retina, clinically resembling ROP',
      'Key distinguishing feature from ROP: FEVR occurs in FULL-TERM infants with NO history of prematurity or supplemental oxygen exposure',
      'Disease spectrum ranges from asymptomatic peripheral avascular retina to peripheral neovascularization, vitreous hemorrhage, tractional retinal detachment, and falciform macular folds',
      'Genes implicated act via the Norrin/Wnt signaling pathway (FZD4, LRP5, TSPAN12, NDP) that normally drives retinal vascular development',
      'Because of variable expressivity and possible asymptomatic/unilateral presentation, screening of first-degree relatives is essential once a proband is diagnosed',
      'Management mirrors ROP: observation for mild peripheral avascular retina, laser photocoagulation for active neovascularization, and vitreoretinal surgery for traction/detachment',
    ],
  },
  {
    id: 'tractional-exudative-retinal-detachment',
    name: 'Tractional and Exudative Retinal Detachment',
    aliases: ['Non-rhegmatogenous retinal detachment'],
    category: 'Retina',
    definition:
      'The two non-rhegmatogenous mechanisms of retinal detachment: tractional retinal detachment, in which fibrovascular membranes mechanically pull the neurosensory retina away from the RPE without a retinal break, and exudative (serous) retinal detachment, in which fluid accumulates in the subretinal space from a primary choroidal/RPE process without any retinal break or traction — both distinct from, and best understood by direct comparison with, the more common rhegmatogenous retinal detachment (see Retinal Detachment).',
    affectedStructure:
      'Neurosensory retina and subretinal space; tractional RD additionally involves the vitreous and fibrovascular membranes at the vitreoretinal interface, while exudative RD primarily involves the choroid and/or RPE as the source of subretinal fluid',
    pathologicalProcess:
      'Tractional RD results from contractile fibrovascular or fibrocellular membranes on the retinal surface (arising from proliferative retinal vascular disease) that mechanically pull the retina forward and away from the RPE, without any full-thickness retinal break allowing fluid ingress. Exudative RD results from a primary abnormality of the choroid, RPE, or an inflammatory/neoplastic/vascular process that overwhelms the RPE\'s fluid pump and barrier function, allowing serous fluid to accumulate beneath an otherwise intact, non-torn, non-traction-bound retina.',
    epidemiology: {
      typicalAge: 'Varies widely by underlying cause — tractional RD from proliferative diabetic retinopathy typically occurs in adults with long-standing diabetes, while tractional RD from ROP occurs in infants; exudative RD from VKH typically affects young to middle-aged adults, while that from hypertensive choroidopathy of preeclampsia/eclampsia occurs in pregnant patients',
      prevalence: 'Both are less common overall than rhegmatogenous retinal detachment but are important, distinct clinical entities with different management pathways',
      importantPopulations: 'Patients with poorly controlled proliferative diabetic retinopathy or a history of ROP (tractional); patients with VKH syndrome, choroidal tumors, or severe preeclampsia/eclampsia (exudative)',
    },
    riskFactors: [
      { label: 'Proliferative diabetic retinopathy with fibrovascular membrane formation — tractional RD', tier: 'major' },
      { label: 'History of retinopathy of prematurity with retinal fibrovascular proliferation — tractional RD', tier: 'major' },
      { label: 'Severe uveitis, particularly VKH syndrome — exudative RD', tier: 'major' },
      { label: 'Choroidal tumors (e.g., choroidal hemangioma, choroidal melanoma) — exudative RD', tier: 'major' },
      { label: 'Severe hypertensive choroidopathy (preeclampsia/eclampsia) — exudative RD', tier: 'major' },
      { label: 'Penetrating ocular trauma with proliferative vitreoretinopathy — tractional RD', tier: 'moderate' },
      { label: 'Posterior scleritis and other severe choroidal inflammatory disease — exudative RD', tier: 'moderate' },
    ],
    pathophysiology: [
      'Tractional RD: an underlying proliferative retinal vascular disease (classically proliferative diabetic retinopathy or ROP) generates VEGF-driven fibrovascular membranes that grow along the vitreoretinal interface',
      'As these membranes mature, they contract, exerting anteroposterior and/or tangential traction on the retina, mechanically separating the neurosensory retina from the RPE at the site(s) of membrane attachment, without any full-thickness retinal break',
      'The resulting detachment is confined to the area(s) under traction, producing a taut, smooth, concave, and immobile retinal surface on exam that does not shift with eye or head movement',
      'Exudative RD: a primary process in the choroid/RPE (inflammatory, as in VKH; neoplastic, as in a choroidal tumor/hemangioma; or severe vasospastic/hypertensive, as in preeclampsia/eclampsia choroidopathy) damages or overwhelms the RPE barrier and pump function, or directly produces excessive transudation of fluid from abnormal choroidal vasculature',
      'Subretinal fluid accumulates beneath an intact, non-torn retina; because there is no traction anchoring the fluid, gravity causes the fluid to redistribute (shift) with changes in head position, producing the hallmark smooth, convex, but mobile/shifting subretinal fluid on exam',
    ],
    symptoms: {
      common: [
        'Tractional RD: often insidious, slowly progressive visual field loss or blur, may be asymptomatic if extrafoveal and slowly progressive',
        'Exudative RD: variable visual loss depending on extent and macular involvement; symptoms of the underlying systemic/inflammatory disease often predominate (e.g., headache, tinnitus, and vitiligo/poliosis in VKH; severe hypertension and visual disturbance in preeclampsia/eclampsia)',
      ],
      lessCommon: ['Photopsia and floaters are notably uncommon in both tractional and exudative RD, in contrast to rhegmatogenous RD, since neither involves acute vitreoretinal traction from a retinal break'],
      importantNegatives: ['No flashes/floaters typical of an acute posterior vitreous detachment or retinal break in either tractional or exudative RD (distinguishing both from rhegmatogenous RD)'],
      typicalProgression:
        'Tractional RD tends to progress slowly over months as fibrovascular membranes mature and contract, though it can occasionally involve the macula acutely if a combined tractional-rhegmatogenous component develops; exudative RD can progress rapidly (days) with acute severe choroidal disease (e.g., eclamptic crisis) or more gradually with a slower-growing choroidal tumor.',
    },
    signs: [
      { area: 'Retina', finding: 'Tractional RD: smooth, concave, taut retinal surface with a characteristic "tented" or "table-top" configuration at points of vitreoretinal traction; detachment is typically shallow, more often located posteriorly/centrally near areas of fibrovascular proliferation, and does NOT extend to the ora serrata' },
      { area: 'Vitreous', finding: 'Tractional RD: visible fibrovascular membranes bridging the vitreous and retinal surface, often with associated vitreous hemorrhage in proliferative diabetic retinopathy' },
      { area: 'Retina', finding: 'Exudative RD: smooth, convex, dome-shaped retinal elevation without folds or traction; hallmark finding is SHIFTING subretinal fluid that redistributes to the most dependent area with changes in head position (e.g., fluid shifts inferiorly when upright, and the detachment reconfigures on lying supine or turning the head)' },
      { area: 'Retina', finding: 'Exudative RD: underlying choroidal/RPE pathology often visible, such as diffuse choroidal thickening and multifocal serous detachments in VKH, an elevated pigmented or amelanotic choroidal mass, or diffuse serous detachment with attenuated arterioles in severe hypertensive choroidopathy' },
      { area: 'Vitreous', finding: 'Both tractional and exudative RD typically lack the pigmented vitreous cells ("tobacco dust"/Shafer sign) characteristic of a retinal break in rhegmatogenous RD' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Rhegmatogenous retinal detachment',
        whySimilar: 'All three are forms of retinal detachment presenting with visual field loss or blur and abnormal fundus elevation',
        keyDistinguisher:
          'The classic exam-based three-way differentiation: rhegmatogenous RD shows a convex, corrugated, MOBILE retinal surface with an identifiable retinal break and vitreous pigment (tobacco dust); tractional RD shows a smooth, concave, IMMOBILE surface without a break, tented at points of fibrovascular traction; exudative RD shows a smooth, convex surface with SHIFTING subretinal fluid that redistributes with gravity/head position, again without a break — see Retinal Detachment for the rhegmatogenous mechanism in detail',
      },
      {
        disease: 'Retinoschisis',
        whySimilar: 'Peripheral elevation of retinal tissue that can be mistaken for detachment, particularly the smooth, immobile appearance of tractional RD',
        keyDistinguisher: 'Retinoschisis is a splitting of retinal layers rather than a separation of the neurosensory retina from the RPE, appears as a very thin, smooth, dome-shaped, absolutely immobile elevation with an absolute (not relative) visual field defect, and does not shift with position or show any traction membrane',
      },
      {
        disease: 'Choroidal detachment',
        whySimilar: 'Smooth, dome-shaped, non-mobile elevation that can be confused with either tractional or (less often) exudative RD, especially after ocular surgery/trauma',
        keyDistinguisher: 'Choroidal detachment shows smooth, brown-orange, often multilobed elevations that characteristically do NOT extend posterior to the vortex vein ampullae and are frequently associated with profound hypotony, whereas both tractional and exudative RD can extend to or involve the posterior pole/macula',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Dilated fundus examination with scleral depression',
        whyOrdered: 'Primary method to characterize the configuration (smooth vs. corrugated), mobility, and extent of the detachment, and to search for or exclude an associated retinal break',
        expectedFinding: 'Tractional RD: smooth, concave, immobile, tented surface with visible fibrovascular membranes, no retinal break; Exudative RD: smooth, convex surface with subretinal fluid that visibly shifts to the dependent position on repositioning, no retinal break',
        contribution: 'Establishes the mechanism of detachment, which is the single most important determinant of management pathway',
      },
      {
        name: 'B-scan ultrasonography',
        whyOrdered: 'Assess detachment configuration and mobility when the view is limited (e.g., by vitreous hemorrhage) and to look for a choroidal mass underlying an exudative detachment',
        expectedFinding: 'Tractional RD: taut, concave membrane with points of vitreoretinal attachment, minimal to no after-movement on kinetic scan; Exudative RD: smooth, highly mobile membrane that shifts freely with eye movement (marked "shifting fluid" kinetically), and may reveal an underlying choroidal mass (e.g., dome-shaped elevated lesion in choroidal hemangioma or melanoma)',
        contribution: 'Confirms detachment mechanism when direct visualization is limited and identifies an underlying choroidal tumor as the cause of exudative detachment',
      },
      {
        name: 'Optical coherence tomography (OCT)',
        whyOrdered: 'Characterize subretinal/subretinal-adjacent fluid and macular status, and detect fine tractional membranes not obvious on ophthalmoscopy',
        expectedFinding: 'Tractional RD: taut retinal contour with visible epiretinal/vitreoretinal traction; Exudative RD: subretinal fluid, often with a "lumpy-bumpy" or scalloped RPE contour and, in VKH, multilobulated pockets of subretinal fluid with septae',
        contribution: 'Confirms macular involvement and helps distinguish tractional from exudative fluid patterns at the posterior pole',
      },
      {
        name: 'Targeted systemic/laboratory workup guided by suspected etiology',
        whyOrdered: 'Identify the underlying cause driving an exudative detachment (e.g., blood pressure measurement and urine protein for suspected preeclampsia/eclampsia; systemic review of symptoms and imaging for suspected VKH) or a tractional detachment (e.g., HbA1c/diabetes history for PDR)',
        expectedFinding: 'Findings specific to the underlying disease (e.g., severe hypertension and proteinuria in preeclampsia; meningismus and integumentary changes in VKH; long-standing poorly controlled diabetes in PDR)',
        contribution: 'Confirms the underlying systemic cause, which directly determines definitive management (e.g., delivery for eclampsia, corticosteroids for VKH, vitrectomy for PDR-related traction)',
      },
    ],
    diagnosis: {
      confirmation:
        'Diagnosis is made by dilated fundus examination (with B-scan ultrasound and OCT as needed) demonstrating a detachment without an identifiable retinal break, then distinguishing tractional from exudative mechanism based on the characteristic exam findings: smooth, concave, immobile surface for tractional detachment versus smooth, convex, position-dependent shifting subretinal fluid for exudative detachment.',
      classification:
        'Retinal detachment is classified by mechanism into rhegmatogenous (break-mediated, mobile/corrugated — see Retinal Detachment), tractional (fibrovascular membrane contraction, smooth/concave/immobile, no break), and exudative/serous (primary choroidal/RPE fluid accumulation, smooth/convex/shifting, no break); a combined tractional-rhegmatogenous detachment can also occur when traction eventually causes a retinal break',
    },
    management: [
      { category: 'Observation', detail: 'Exudative RD: treat and monitor the underlying systemic/choroidal cause first — many exudative detachments resolve spontaneously once the primary disease process is controlled (e.g., blood pressure control and delivery in preeclampsia/eclampsia, corticosteroids in VKH), without any need for retinal surgery' },
      { category: 'First-line treatment', detail: 'Exudative RD: directed treatment of the underlying etiology is primary — high-dose corticosteroids for VKH, blood pressure control/delivery for preeclampsia/eclampsia, or targeted therapy (e.g., photodynamic therapy, radiotherapy) for a causative choroidal tumor' },
      { category: 'Observation', detail: 'Tractional RD: extrafoveal, slowly progressive, or long-standing stable tractional detachments not threatening the macula may be observed with serial exams' },
      { category: 'Advanced treatment', detail: 'Tractional RD: pars plana vitrectomy with membrane peeling/segmentation to relieve traction is the definitive treatment when the detachment threatens or involves the macula; panretinal photocoagulation and/or anti-VEGF therapy addresses the underlying proliferative disease driving membrane formation' },
      { category: 'Referral', detail: 'Refer to a retina specialist for any tractional detachment threatening the macula, and to the appropriate specialist (rheumatology/uveitis specialist for VKH, ocular oncology for a choroidal tumor, maternal-fetal medicine/obstetrics for preeclampsia-eclampsia) in parallel with retinal care for exudative detachment' },
      { category: 'Emergency management', detail: 'Severe preeclampsia/eclampsia with exudative RD requires urgent obstetric management, since definitive treatment is delivery; severe VKH with extensive exudative detachment requires urgent high-dose corticosteroid therapy to prevent chronic recurrent disease' },
    ],
    followUp: {
      typical: 'Tractional RD: interval determined by proximity to the macula and activity of the underlying proliferative disease, often every few months if stable and extrafoveal; Exudative RD: close follow-up during treatment of the underlying cause, with resolution of subretinal fluid tracked as a marker of disease control',
      monitor: 'Extent and configuration of the detachment, distance from the fovea, resolution or progression of subretinal fluid, and status of the underlying systemic/proliferative disease',
      progression: 'Tractional RD: progression toward the macula on serial exam warrants surgical referral; Exudative RD: worsening detachment despite treatment of the presumed cause should prompt reconsideration of the diagnosis (e.g., an undiagnosed choroidal tumor) or escalation of systemic therapy',
      shortenWhen: 'Any detachment approaching the fovea, or poor initial response of an exudative detachment to treatment of its presumed underlying cause',
    },
    prognosis: {
      typicalCourse: 'Tractional RD tends to be slowly progressive, tracking the activity of the underlying proliferative retinal disease; exudative RD often resolves once the underlying choroidal/systemic process is adequately treated, without requiring retinal surgery',
      progressionRisk: 'Tractional RD risk correlates with the severity/activity of the underlying proliferative disease (e.g., degree of PDR); exudative RD risk correlates with control of the underlying systemic/inflammatory/neoplastic process',
      complications: 'Tractional RD: macular involvement with permanent vision loss, combined tractional-rhegmatogenous detachment, recurrent traction/proliferative vitreoretinopathy after surgery; Exudative RD: chronic RPE changes ("sunset-glow fundus" in chronic VKH), recurrent detachment with inadequately treated underlying disease',
      visualPrognosis: 'Tractional RD: guarded once the macula is involved, though vitrectomy can restore useful vision in many cases; Exudative RD: generally favorable once the underlying cause is controlled, since the retina itself is structurally undamaged (no break, no chronic traction) in most cases',
    },
    clinicalPearls: [
      'The classic, frequently tested three-way bedside differentiation: rhegmatogenous RD is convex and MOBILE with a visible break; tractional RD is concave and IMMOBILE without a break; exudative RD is convex with SHIFTING fluid that redistributes with head position, also without a break.',
      'Absence of flashes and floaters in a patient with a new retinal detachment should raise suspicion for a tractional or exudative mechanism rather than rhegmatogenous, since neither involves an acute PVD-related retinal break.',
      'Exudative retinal detachment is frequently a "treat the cause, not the retina" scenario — corticosteroids for VKH, blood pressure control and delivery for preeclampsia/eclampsia, and tumor-directed therapy for a choroidal tumor often resolve the detachment without any retinal surgery.',
      'Tractional retinal detachment classically does not extend to the ora serrata, unlike rhegmatogenous detachment, because the traction is anchored to specific points of fibrovascular attachment rather than allowing fluid to track freely to the periphery.',
      'Always consider an underlying choroidal tumor when working up an exudative retinal detachment of unclear etiology — B-scan ultrasound is essential to exclude a mass lesion.',
    ],
    highYield: [
      'Three-way RD mechanism comparison is a classic board concept: rhegmatogenous = convex + mobile + visible break; tractional = concave + immobile + no break; exudative = convex + SHIFTING fluid + no break',
      'Tractional RD: classic causes are proliferative diabetic retinopathy and retinopathy of prematurity, caused by contracting fibrovascular membranes without a retinal break',
      'Exudative RD: classic causes are VKH syndrome, choroidal tumors (e.g., choroidal hemangioma), and severe hypertensive choroidopathy (preeclampsia/eclampsia)',
      'Shifting subretinal fluid that redistributes with head position is the hallmark bedside sign of exudative retinal detachment, distinguishing it from both rhegmatogenous and tractional detachment',
      'Exudative RD often resolves with treatment of the underlying systemic/choroidal disease alone, without retinal surgery, in contrast to tractional and rhegmatogenous RD, which usually require surgical intervention',
      'Absence of vitreous pigment (tobacco dust/Shafer sign) and absence of an identifiable retinal break support a tractional or exudative mechanism over rhegmatogenous',
    ],
  },
]
