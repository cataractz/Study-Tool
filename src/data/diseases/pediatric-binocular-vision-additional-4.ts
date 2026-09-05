import type { Disease } from '../../types/disease'

export const pediatricBinocularVisionAdditional4: Disease[] = [
  {
    id: 'convergence-excess',
    name: 'Convergence Excess',
    aliases: ['CE'],
    category: 'Pediatric & Binocular Vision',
    definition:
      'A non-strabismic binocular vision disorder characterized by excessive convergence relative to accommodation, producing esophoria (or intermittent esotropia) that is significantly greater at near than at distance, most often driven by a high AC/A (accommodative convergence to accommodation) ratio.',
    affectedStructure: 'Vergence (binocular fusional) system and the accommodative-convergence linkage — a functional imbalance, not a structural extraocular muscle abnormality',
    pathologicalProcess:
      'A high AC/A ratio causes each diopter of accommodative effort exerted for near focus to drive an excessive, disproportionate amount of reflex convergence, producing an esophoric (or esotropic) posture at near that exceeds what the patient can comfortably compensate for with negative fusional vergence, while distance alignment — which requires little or no accommodation — remains normal or near-normal.',
    epidemiology: {
      typicalAge: 'Most often identified in school-age children, typically presenting between ages 3 and 10 years as sustained near demands increase',
      prevalence: 'Less common than convergence insufficiency but a well-recognized, board-relevant cause of near-specific symptoms and a common cause of high-AC/A accommodative esotropia in children',
      importantPopulations: 'Children with uncorrected or undercorrected hyperopia, and children misdiagnosed with reading/attention difficulty when the true cause is near-specific binocular vision dysfunction',
    },
    riskFactors: [
      { label: 'High AC/A ratio', tier: 'major' },
      { label: 'Uncorrected or undercorrected hyperopia', tier: 'moderate' },
      { label: 'Sustained near work demands', tier: 'associated' },
    ],
    pathophysiology: [
      'The AC/A ratio (the amount of convergence, in prism diopters, induced per diopter of accommodation) is abnormally elevated',
      'When the patient accommodates for a near target, the excessive accompanying convergence drive pushes the eyes past the point needed for single binocular vision at that distance, producing esophoria or intermittent esotropia specifically at near',
      'Negative fusional vergence (divergence) reserve is required to compensate for this excess convergence and maintain fusion; when it is exceeded, symptoms or a manifest near esotropia result',
      'Because distance fixation requires little accommodative effort, the AC/A-driven excess convergence is not provoked at distance, so distance alignment remains normal — the mirror image of the near-exceeds-distance pattern seen in convergence insufficiency, but on the eso rather than exo side',
      'When associated with significant uncorrected hyperopia, accommodative effort (and therefore AC/A-driven convergence) is further increased, compounding the near esodeviation — this overlap with high-AC/A accommodative esotropia is a key testable relationship',
    ],
    symptoms: {
      common: ['Eye strain/asthenopia with near work and reading', 'Headaches associated with sustained near tasks', 'Intermittent blurred near vision', 'Intermittent diplopia at near', 'Avoidance of prolonged reading or close work'],
      lessCommon: ['Words appearing to move while reading', 'Squinting or closing one eye during sustained near tasks'],
      importantNegatives: ['Distance vision, comfort, and alignment are typically normal', 'Symptoms are specifically provoked by sustained accommodative/near effort, not distance viewing'],
      typicalProgression: 'Symptoms characteristically worsen the longer near work is sustained within a session and improve with breaks or removal of the near stimulus; often mistaken for a reading or attention problem in school-age children if binocular testing is not performed.',
    },
    signs: [
      { area: 'Other', finding: 'Esophoria (or intermittent esotropia) at near that is significantly greater than at distance on cover test/phoria measurement — the mirror-image pattern of convergence insufficiency' },
      { area: 'Other', finding: 'High AC/A ratio on gradient or heterophoria method testing' },
      { area: 'Other', finding: 'Reduced negative fusional vergence (NFV) at near relative to normative ranges, often failing Sheard\'s criterion' },
      { area: 'Other', finding: 'Near point of convergence is typically normal (not receded), distinguishing it from convergence insufficiency' },
    ],
    differentialDiagnosis: [
      { disease: 'High-AC/A accommodative esotropia', whySimilar: 'Both feature a high AC/A ratio and near-greater esodeviation, and the two overlap substantially/may coexist', keyDistinguisher: 'Accommodative esotropia is a manifest, typically constant strabismus (often full or partially spectacle-correctable with a plus add), while convergence excess more often presents as a non-strabismic near esophoria with symptoms rather than a fully manifest tropia; the distinction can be one of degree' },
      { disease: 'Convergence insufficiency', whySimilar: 'Both are near-specific, symptomatic binocular vision disorders provoking asthenopia and headache with reading', keyDistinguisher: 'Convergence insufficiency produces near EXOphoria with a receded near point of convergence and reduced positive fusional vergence; convergence excess produces near ESOphoria with a normal NPC and reduced negative fusional vergence — opposite deviation direction and opposite vergence deficit' },
      { disease: 'Uncorrected hyperopia (isolated)', whySimilar: 'Near-work-related asthenopia and headaches', keyDistinguisher: 'Symptoms and phoria pattern substantially improve with full hyperopic correction alone in isolated uncorrected hyperopia; a persistent high-AC/A near esophoria despite adequate refractive correction supports true convergence excess' },
    ],
    diagnosticTesting: [
      { name: 'Near and distance phoria measurement (cover test or von Graefe/Maddox rod)', whyOrdered: 'Establish and quantify the distance-near disparity in the esodeviation', expectedFinding: 'Esophoria (or intermittent esotropia) significantly greater at near than at distance', contribution: 'Core diagnostic finding establishing the characteristic pattern' },
      { name: 'AC/A ratio testing (gradient or heterophoria method)', whyOrdered: 'Quantify the accommodative-convergence relationship driving the near esodeviation', expectedFinding: 'Elevated AC/A ratio (classically greater than 6-7:1 by the gradient method)', contribution: 'Confirms the high-AC/A mechanism underlying the diagnosis and helps distinguish it from a purely basic esophoria' },
      { name: 'Negative fusional vergence (NFV) testing at near (base-in prism)', whyOrdered: 'Quantify the fusional divergence reserve available to compensate for the near esophoria', expectedFinding: 'Reduced NFV break/recovery relative to normative ranges, often failing Sheard\'s criterion', contribution: 'Confirms insufficient fusional reserve as the mechanism producing symptoms' },
      { name: 'Cycloplegic refraction', whyOrdered: 'Identify and quantify any contributing uncorrected hyperopia', expectedFinding: 'May reveal significant hyperopia contributing to the accommodative demand', contribution: 'Guides whether full hyperopic correction alone will resolve the near esodeviation before considering additional treatment' },
    ],
    diagnosis: {
      criteria: 'Near esophoria (or intermittent esotropia) significantly exceeding distance esophoria, an elevated AC/A ratio, and reduced negative fusional vergence at near, typically accompanied by near-work-specific symptoms',
      confirmation: 'Clinical diagnosis established through the combination of the near-greater esodeviation pattern, elevated AC/A ratio, and reduced NFV, after cycloplegic refraction has excluded or quantified contributing uncorrected hyperopia',
    },
    management: [
      { category: 'Observation', detail: 'Mild, minimally symptomatic cases with good near comfort may be monitored' },
      { category: 'First-line treatment', detail: 'Full correction of any significant hyperopia; a plus (near-add) lens prescription to reduce the accommodative demand and the accompanying AC/A-driven convergence at near' },
      { category: 'Second-line treatment', detail: 'Office-based vision therapy/orthoptics targeting negative fusional vergence, with home reinforcement' },
      { category: 'Referral', detail: 'Refer for comprehensive binocular vision evaluation and vision therapy (optometry specializing in vision therapy) for confirmed, symptomatic convergence excess not adequately resolved with refractive correction alone' },
    ],
    managementProtocol: {
      workup: [
        'Near and distance phoria measurement to establish the near-greater-than-distance esodeviation pattern',
        'AC/A ratio testing (gradient method) to confirm the high-AC/A mechanism',
        'Negative fusional vergence (NFV) testing at near, checked against Sheard\'s criterion',
        'Cycloplegic refraction to identify and quantify any contributing uncorrected hyperopia',
      ],
      initialTreatment:
        'Full correction of any significant hyperopia is applied first, since this alone may substantially reduce the near esodeviation; a plus (near-add) lens prescription is then used to reduce the accommodative demand and the accompanying AC/A-driven convergence at near, with office-based vision therapy targeting negative fusional vergence added for cases not adequately resolved by optical management alone.',
      followUpSchedule:
        'Reassessment every 4-8 weeks after initiating a plus add or vision therapy to track near-distance phoria magnitude, AC/A effect, and symptom resolution; extend the interval once near comfort and control are stable.',
      escalationCriteria: [
        'Persistent or worsening near esodeviation despite an adequate trial of full hyperopic correction and a plus add',
        'Progression from an intermittent/phoric deviation toward a more constant, manifest near esotropia (evolving toward accommodative esotropia)',
        'Symptoms not resolving with vision therapy after an adequate trial',
      ],
      referralCriteria: [
        'Symptomatic convergence excess not adequately resolved with refractive correction and a plus add alone -> optometry/orthoptics specializing in vision therapy',
        'Evolution toward a fully manifest, constant near tropia -> pediatric ophthalmology to evaluate for accommodative esotropia management (bifocal, possible surgery)',
      ],
      complications: [
        'Chronic near-work avoidance',
        'Reading difficulty misattributed to attention or learning disorders',
        'Progression to manifest accommodative esotropia if uncorrected',
      ],
      monitoringParameters: [
        'Near versus distance phoria',
        'AC/A ratio response to correction',
        'Negative fusional vergence at near',
        'Symptom resolution with near work',
      ],
      relatedCalculatorIds: ['aca-ratio'],
      relatedExamTechniqueIds: ['cover-test', 'cycloplegic-retinoscopy'],
    },
    followUp: {
      typical: 'Reassessment at regular intervals (e.g., every 4-8 weeks) after initiating a plus add or vision therapy to track phoria magnitude, AC/A ratio effect, and symptom resolution',
      monitor: 'Near versus distance phoria, negative fusional vergence at near, and symptom resolution with near work',
      progression: 'Persistent or worsening near esodeviation despite an adequate trial of a plus add and/or vision therapy should prompt reassessment for evolving accommodative esotropia or an alternative diagnosis',
    },
    prognosis: {
      typicalCourse: 'Generally good response to full hyperopic correction, a plus near add, and/or vision therapy targeting fusional divergence',
      progressionRisk: 'Untreated symptomatic convergence excess can impair near-work tolerance and reading efficiency; in children, an inadequately controlled high-AC/A near esodeviation can evolve toward a more constant accommodative esotropia',
      complications: 'Chronic near-work avoidance, reading difficulty misattributed to attention or learning disorders, and risk of progression to manifest accommodative esotropia if uncorrected',
      visualPrognosis: 'Excellent; convergence excess does not threaten visual acuity or ocular health and typically responds well to refractive correction and/or vision therapy',
    },
    clinicalPearls: [
      'Convergence excess is the mirror image of convergence insufficiency: near ESOphoria with a normal NPC and reduced negative fusional vergence, versus near EXOphoria with a receded NPC and reduced positive fusional vergence.',
      'Always obtain a cycloplegic refraction in a child with a high-AC/A near esodeviation — full hyperopic correction alone may substantially reduce or resolve the near esotropia/esophoria before any other treatment is considered.',
      'A plus lens add for near work reduces the accommodative demand and, through the AC/A linkage, the excess convergence — the same principle used to manage high-AC/A accommodative esotropia.',
      'Distinguish from high-AC/A accommodative esotropia primarily by degree: a fully manifest, constant near tropia favors accommodative esotropia, while a symptomatic near phoria (or only intermittently manifest deviation) favors convergence excess.',
    ],
    highYield: [
      'Classic pattern: near esophoria/intermittent esotropia significantly greater than distance, elevated AC/A ratio, and reduced negative fusional vergence at near — the mirror image of the convergence insufficiency triad',
      'Near point of convergence is normal in convergence excess, unlike the receded NPC of convergence insufficiency — a key distinguishing exam finding',
      'Cycloplegic refraction is essential — uncorrected hyperopia amplifies the AC/A-driven near esodeviation and should be fully corrected first',
      'First-line treatment is a plus add for near work to reduce accommodative-driven convergence; vision therapy targets negative fusional vergence',
      'Overlaps mechanistically with high-AC/A accommodative esotropia; distinguished largely by whether the near deviation is a symptomatic phoria versus a fully manifest, constant tropia',
    ],
  },
  {
    id: 'divergence-excess',
    name: 'Divergence Excess',
    aliases: ['Divergence excess intermittent exotropia'],
    category: 'Pediatric & Binocular Vision',
    definition:
      'A classification pattern of intermittent exotropia in which the exodeviation is significantly greater at distance than at near, most commonly due to a relatively high AC/A ratio that allows accommodative convergence to substantially control the deviation at near while distance fixation, which elicits little accommodation, remains poorly controlled.',
    affectedStructure: 'Fusional convergence mechanism and the accommodative-convergence linkage relative to the underlying exodeviation — a functional vergence imbalance rather than a structural extraocular muscle abnormality',
    pathologicalProcess:
      'An underlying comitant exodeviation is present at both distance and near, but a relatively high AC/A ratio means that the accommodative convergence generated during near fixation substantially neutralizes the exodeviation at near, while distance fixation — which requires minimal accommodation — receives little of this compensating convergence, unmasking a much larger manifest exotropia at distance.',
    epidemiology: {
      typicalAge: 'Onset typically in early childhood, similar to other forms of intermittent exotropia, often noted between ages 1 and 6 years',
      prevalence: 'One of the recognized distance-near classification patterns of intermittent exotropia, alongside the basic and convergence-insufficiency patterns',
    },
    riskFactors: [
      { label: 'Relatively high AC/A ratio', tier: 'major' },
      { label: 'Family history of strabismus', tier: 'moderate' },
      { label: 'Prematurity', tier: 'associated' },
    ],
    pathophysiology: [
      'A baseline exophoric/exotropic tendency exists at both distance and near, driven by imbalance between the divergence tendency and fusional convergence reserve',
      'A relatively high AC/A ratio means accommodative convergence elicited during near fixation adds substantial convergence force, controlling or largely neutralizing the near exodeviation',
      'Distance fixation requires comparatively little accommodative effort, so this AC/A-driven convergence boost is largely absent at distance, leaving the full underlying exodeviation manifest',
      'This produces the characteristic distance-exceeds-near pattern, in contrast to the basic pattern (roughly equal exodeviation at distance and near) or the convergence-insufficiency pattern of intermittent exotropia (exodeviation greater at near)',
      'A key clinical distinction exists between TRUE divergence excess, in which the near angle remains genuinely small even after prolonged monocular occlusion or fusion disruption, and PSEUDO-divergence excess, in which a high tonic AC/A ratio merely masks a near angle that is actually as large as the distance angle — revealed by patching one eye for 30-60 minutes or by the +3.00 D lens test, either of which eliminates the accommodative convergence contribution and unmasks the true near angle',
    ],
    symptoms: {
      common: ['Parent-noticed outward eye drift predominantly with distance viewing (watching television, outdoors)', 'Closing or squinting one eye in bright sunlight, especially at distance', 'Eyes appear straight or well-controlled during close, attentive near tasks'],
      lessCommon: ['Asthenopia or intermittent diplopia at distance in older children/adults who have not developed suppression', 'Reduced stereopsis during manifest distance phases'],
      importantNegatives: ['Near alignment is typically comfortable and well-controlled', 'No pain; vision in each eye is typically normal because the deviation is intermittent'],
      typicalProgression: 'Often first and most consistently noticed at distance fixation; near control is characteristically better, sometimes markedly so. Without intervention, distance control can worsen over months to years, and in pseudo-divergence excess, near control may eventually decline as well once the true near angle becomes evident.',
    },
    signs: [
      { area: 'Other', finding: 'Manifest exotropia on cover test that is substantially greater at distance than at near in the untreated state' },
      { area: 'Other', finding: 'Near angle increases toward the distance angle after prolonged monocular occlusion (patch test) or with a +3.00 D lens over each eye at near — distinguishes true from pseudo-divergence excess' },
      { area: 'Other', finding: 'Suppression of the deviating eye during manifest distance phases, with fusion and stereopsis present when the eyes are aligned' },
      { area: 'Other', finding: 'Photophobia-like squinting/closure of one eye, particularly outdoors or at distance' },
    ],
    differentialDiagnosis: [
      { disease: 'Basic intermittent exotropia', whySimilar: 'Both are forms of intermittent exotropia with comitant deviation and variable control', keyDistinguisher: 'Basic pattern shows roughly equal exodeviation at distance and near, without the marked distance-greater disparity that defines divergence excess' },
      { disease: 'Convergence-insufficiency-pattern intermittent exotropia', whySimilar: 'Both are distance-near classification patterns of intermittent exotropia', keyDistinguisher: 'Convergence-insufficiency-pattern exotropia is greater at NEAR than distance — the opposite distance-near relationship from divergence excess' },
      { disease: 'Divergence insufficiency (unrelated, but named similarly)', whySimilar: 'Name/terminology confusion given the "divergence" label', keyDistinguisher: 'Divergence insufficiency is an acquired, typically adult-onset ESOtropia (inward deviation) greater at distance; divergence excess is an EXOtropia (outward deviation) greater at distance — opposite deviation direction and an entirely different mechanism and typical age group' },
    ],
    diagnosticTesting: [
      { name: 'Cover-uncover and alternate cover test at distance and near', whyOrdered: 'Establish and quantify the distance versus near exodeviation', expectedFinding: 'Exotropia substantially greater at distance than at near (e.g., by 10-15 prism diopters or more)', contribution: 'Establishes the characteristic distance-near disparity that defines divergence excess' },
      { name: 'Prolonged monocular occlusion (patch) test, 30-60 minutes', whyOrdered: 'Eliminate the accommodative convergence contribution to distinguish true from pseudo-divergence excess', expectedFinding: 'In pseudo-divergence excess, the near angle increases to approximate the distance angle after patching; in true divergence excess, the near angle remains small', contribution: 'Critical for surgical planning, since undertreating a falsely small near angle (pseudo type) risks a postoperative near esotropia' },
      { name: '+3.00 D lens test at near', whyOrdered: 'Alternative method to eliminate accommodative convergence and unmask the true near angle', expectedFinding: 'Near angle increases toward the distance angle in pseudo-divergence excess when accommodation is relaxed by the plus lenses', contribution: 'Confirms or excludes a high-AC/A pseudo-divergence excess pattern without requiring prolonged patching' },
      { name: 'AC/A ratio testing (gradient method)', whyOrdered: 'Characterize the accommodative-convergence relationship underlying the distance-near disparity', expectedFinding: 'Relatively high AC/A ratio, particularly in the pseudo-divergence excess pattern', contribution: 'Supports the mechanism and informs whether the disparity is likely to persist after removing the accommodative contribution' },
    ],
    diagnosis: {
      criteria: 'Comitant intermittent exotropia substantially greater at distance than at near on cover testing',
      confirmation: 'Confirmed by cover testing showing the distance-greater exodeviation pattern; further classified as true or pseudo-divergence excess based on the near angle response to prolonged monocular occlusion or the +3.00 D lens test',
      classification: 'True divergence excess (near angle remains small after eliminating accommodative convergence) versus pseudo-divergence excess (near angle increases to approximate the distance angle once accommodative convergence is removed)',
    },
    management: [
      { category: 'Observation', detail: 'Good control with infrequent, brief manifest distance episodes and normal stereopsis: monitor with periodic reassessment of control and angle' },
      { category: 'First-line treatment', detail: 'Correction of any significant refractive error, particularly myopia; part-time occlusion therapy may be used to help control the deviation and reduce suppression' },
      { category: 'Second-line treatment', detail: 'Office-based vision therapy/orthoptics to improve fusional convergence control, particularly for milder or well-controlled cases' },
      { category: 'Referral', detail: 'Refer for strabismus surgical evaluation for poor control or a large, cosmetically or functionally significant deviation — surgical planning must first distinguish true from pseudo-divergence excess (via patch or +3.00 D lens testing), since basing surgery on the untreated near angle in pseudo-divergence excess risks postoperative overcorrection/consecutive esotropia' },
    ],
    managementProtocol: {
      workup: [
        'Cover-uncover and alternate cover testing at distance and near to establish and quantify the distance-greater exodeviation',
        'Prolonged monocular occlusion (patch) test, 30-60 minutes, to distinguish true from pseudo-divergence excess',
        '+3.00 D lens test at near as a faster alternative means of unmasking pseudo-divergence excess',
        'AC/A ratio testing (gradient method) to characterize the accommodative-convergence relationship',
        'Assessment of control and stereoacuity at both distance and near',
      ],
      initialTreatment:
        'Good control with infrequent, brief manifest distance episodes and normal stereopsis is managed with observation; correction of significant refractive error (particularly myopia) is applied when present, with part-time occlusion or office-based vision therapy considered for milder/well-controlled cases; before any surgical planning, true divergence excess must be distinguished from pseudo-divergence excess using prolonged monocular occlusion or the +3.00 D lens test, since basing surgery on the untreated (falsely small) near angle in pseudo-divergence excess risks postoperative consecutive esotropia.',
      followUpSchedule:
        'Periodic reassessment of distance and near angle, control, and stereoacuity every several months, similar to other intermittent exotropia patterns, re-testing the true near angle (patch or +3.00 D lens test) if surgery is being planned or if near control appears to be declining.',
      escalationCriteria: [
        'Worsening distance control or increasing angle on serial exams',
        'Declining stereoacuity',
        'Evidence that near control is also declining, suggesting evolution from pseudo- toward a more true divergence-excess pattern',
        'Poor cosmesis or functional impact prompting consideration of surgery',
      ],
      referralCriteria: [
        'Poor or worsening control, or a large cosmetically/functionally significant deviation -> pediatric ophthalmology for surgical evaluation',
        'Prior to any surgical planning, confirmation of true versus pseudo-divergence excess status -> pediatric ophthalmology/strabismus specialist',
        'New or worsening amblyopia -> pediatric ophthalmology',
      ],
      complications: [
        'Reduced stereopsis with poor control',
        'Postoperative consecutive esotropia if pseudo-divergence excess is not identified before surgery',
        'Amblyopia (lower risk than constant strabismus but possible with poor control)',
      ],
      monitoringParameters: [
        'Distance and near deviation angle, including the post-occlusion/plus-lens near angle when relevant',
        'Quality of control',
        'Stereoacuity',
        'Visual acuity in each eye',
      ],
      relatedCalculatorIds: ['aca-ratio'],
      relatedExamTechniqueIds: ['cover-test', 'prism-cover-test', 'stereoacuity-testing'],
    },
    followUp: {
      typical: 'Periodic reassessment of distance and near angle, control, and stereopsis every several months, similar to other intermittent exotropia patterns',
      monitor: 'Distance and near deviation angle, quality of control, and stereoacuity',
      progression: 'Worsening distance control, increasing angle, or declining stereopsis should prompt consideration of surgical referral',
      shortenWhen: 'Poor or worsening control, or evidence that near control is also declining (suggesting evolution from pseudo- toward a more true divergence excess pattern)',
    },
    prognosis: {
      typicalCourse: 'Often stable or slowly progressive; many children maintain good near control for years even as distance control fluctuates',
      progressionRisk: 'Risk of amblyopia is lower than in constant strabismus given the intermittent nature, but progressively worsening control raises risk of reduced stereopsis and eventual constant exotropia',
      complications: 'Reduced stereopsis with poor control; postoperative consecutive esotropia if surgical planning fails to account for a pseudo-divergence excess pattern',
      visualPrognosis: 'Generally good with appropriate monitoring and correctly timed intervention; surgical outcomes depend on accurately distinguishing true from pseudo-divergence excess preoperatively',
    },
    clinicalPearls: [
      'Always distinguish TRUE from PSEUDO-divergence excess before surgical planning — prolonged monocular occlusion (patch test) or the +3.00 D lens test at near is the classic maneuver, and this distinction is one of the most frequently tested points on this topic.',
      'The mnemonic-worthy contrast: pseudo-divergence excess "unmasks" a near angle equal to the distance angle once accommodative convergence is removed; true divergence excess does not.',
      'Divergence excess (an exotropia) and divergence insufficiency (an esotropia) share the word "divergence" in their names but describe opposite deviation directions, opposite typical age groups, and unrelated mechanisms — a classic board distractor pairing.',
      'Failing to identify pseudo-divergence excess before surgery is a recognized cause of postoperative consecutive esotropia.',
    ],
    highYield: [
      'Classification pattern of intermittent exotropia: exodeviation significantly greater at DISTANCE than near, typically from a relatively high AC/A ratio',
      'True vs. pseudo-divergence excess is distinguished by prolonged monocular occlusion or the +3.00 D lens test at near — pseudo type reveals a near angle that increases to match the distance angle',
      'Undiagnosed pseudo-divergence excess risks postoperative consecutive esotropia if surgery is based on the falsely small untreated near angle',
      'Do not confuse with divergence insufficiency — that is an acquired esotropia (not exotropia) in older adults, an entirely different entity despite the similar name',
      'Management follows the same general intermittent exotropia framework: refractive correction, occlusion/vision therapy for milder cases, and surgery for poor control or large angles',
    ],
  },
  {
    id: 'persistent-fetal-vasculature',
    name: 'Persistent Fetal Vasculature',
    aliases: ['PFV', 'PHPV', 'Persistent Hyperplastic Primary Vitreous'],
    category: 'Pediatric & Binocular Vision',
    definition:
      'A congenital ocular malformation resulting from failure of the embryonic hyaloid vascular system (the primary vitreous and its associated tunica vasculosa lentis) to regress normally, leaving a fibrovascular remnant that can involve the anterior segment, posterior segment, or both, classically producing leukocoria in an otherwise full-term, non-syndromic infant.',
    affectedStructure: 'Embryonic hyaloid vasculature (primary vitreous, tunica vasculosa lentis, hyaloid artery) and the structures it remains attached to or distorts — lens, ciliary processes, vitreous cavity, retina, and optic disc',
    pathologicalProcess:
      'The hyaloid vascular system, which normally supplies the developing lens and vitreous in utero and undergoes programmed apoptotic regression by roughly the seventh to eighth month of gestation (leaving only vestigial remnants such as Mittendorf\'s dot and Bergmeister\'s papilla), fails to regress completely; the persistent fibrovascular tissue remains attached to the posterior lens capsule and/or optic disc as a retrolental or intravitreal stalk/membrane, mechanically distorting the lens, ciliary body, and retina and predisposing to cataract, glaucoma, and tractional retinal detachment as the eye continues to grow.',
    epidemiology: {
      typicalAge: 'Present at birth; typically identified in the first weeks to months of life via leukocoria, microphthalmia, or a failed red reflex screening',
      sexDistribution: 'No strong sex predilection is established',
      prevalence: 'Uncommon; one of the classic causes of congenital leukocoria and a well-recognized retinoblastoma mimic, most often occurring sporadically in an otherwise healthy, full-term infant',
      importantPopulations: 'Full-term infants without a prematurity or supplemental-oxygen history (distinguishing the typical population from retinopathy of prematurity); the vast majority of cases are unilateral (up to ~90%) and sporadic rather than heritable, though rare bilateral cases occur and warrant evaluation for an associated syndrome',
    },
    riskFactors: [
      { label: 'Sporadic occurrence in an otherwise healthy, full-term infant (most cases have no identifiable risk factor)', tier: 'major' },
      { label: 'Microphthalmia of the affected eye', tier: 'major' },
      { label: 'Bilateral cases are more likely to be associated with a syndromic or systemic condition', tier: 'moderate' },
      { label: 'Family history is uncommon, as most cases are sporadic rather than inherited', tier: 'associated' },
    ],
    pathophysiology: [
      'The hyaloid artery, tunica vasculosa lentis, and primary vitreous normally regress by apoptosis in the third trimester; a defect in this apoptotic regression process (the precise molecular trigger is incompletely understood) allows fibrovascular tissue to persist',
      'Anterior PFV: the persistent fibrovascular stalk remains attached to the posterior lens capsule, drawing in and elongating the ciliary processes, producing a retrolental fibrovascular membrane/plaque, a shallow anterior chamber, and often a secondary cataract; contraction of this tissue can cause angle-closure and glaucoma',
      'Posterior PFV: a persistent hyaloid artery/stalk extends from the optic disc (a remnant analogous to an exaggerated Bergmeister\'s papilla) toward the posterior lens, sometimes with associated vitreous membranes, retinal folds, optic nerve hypoplasia/dysplasia, and traction that can progress to retinal detachment',
      'Combined anterior-posterior PFV, in which a fibrovascular stalk spans from the optic disc to the posterior lens, is the most common pattern overall',
      'Progressive contraction of the persistent fibrovascular tissue over time — not merely its static presence at birth — drives many of the eye\'s later complications (worsening cataract, angle-closure glaucoma, and tractional retinal detachment), which is why the disease is not simply a fixed congenital lesion but a process that can evolve postnatally',
      'The affected eye is frequently microphthalmic because normal globe growth is disrupted by the malformed internal architecture',
    ],
    symptoms: {
      common: ['White pupillary reflex (leukocoria) noted by a parent or on red reflex/photographic screening, usually unilateral', 'Poor or absent fixation/following in the affected eye', 'Small-appearing eye (microphthalmia) noted by caregivers'],
      lessCommon: ['Strabismus (esotropia or exotropia) in the affected eye secondary to poor vision', 'Nystagmus if bilateral or if visual impairment is severe and longstanding', 'Redness or apparent discomfort if angle-closure glaucoma develops'],
      importantNegatives: ['No history of prematurity or significant supplemental oxygen exposure in the typical (non-ROP) case', 'No family history of retinoblastoma or leukocoria in most cases', 'Systemically well and growing normally in the typical isolated (non-syndromic) case'],
      typicalProgression: 'Present from birth; without intervention the affected eye often shows progressive worsening of media opacity (cataract), the eye may remain small, and secondary glaucoma or tractional retinal detachment can develop over the ensuing months to years even after initial diagnosis, particularly in cases with posterior segment involvement.',
    },
    signs: [
      { area: 'External', finding: 'Microphthalmia of the affected eye (classically unilateral)' },
      { area: 'Anterior Chamber', finding: 'Shallow anterior chamber, particularly in anterior-predominant PFV' },
      { area: 'Lens', finding: 'Retrolental fibrovascular membrane/plaque and secondary cataract, often with elongated, centrally drawn-in ciliary processes visible around the lens equator' },
      { area: 'Lens', finding: 'Persistent hyaloid artery remnant or Mittendorf\'s dot-type finding, in milder isolated presentations' },
      { area: 'Vitreous', finding: 'Fibrovascular stalk traversing the vitreous cavity from the optic disc to the posterior lens capsule (combined anterior-posterior disease)' },
      { area: 'Optic Nerve', finding: 'Optic nerve hypoplasia or dysplasia, and a prominent Bergmeister\'s papilla-type remnant at the disc in posterior disease' },
      { area: 'Retina', finding: 'Retinal folds, dragging of the retina toward the stalk, and, in advanced or untreated cases, tractional retinal detachment' },
      { area: 'Other', finding: 'Elevated intraocular pressure/angle-closure glaucoma from anterior segment crowding and lens-related mechanisms as the disease progresses' },
      { area: 'Other', finding: 'Absence of intralesional calcification on B-scan ultrasound/CT, in contrast to retinoblastoma' },
    ],
    differentialDiagnosis: [
      { disease: 'Retinoblastoma', whySimilar: 'The most important differential — both present with congenital/infantile leukocoria and can appear as an intraocular mass-like density on imaging', keyDistinguisher: 'Retinoblastoma classically shows intralesional calcification on B-scan/CT, can be bilateral or multifocal, and lacks the microphthalmia and retrolental fibrovascular stalk typical of PFV; PFV shows no calcification, is far more often unilateral with microphthalmia, and the fibrovascular stalk/membrane connecting the lens to the optic disc is the hallmark finding — B-scan ultrasonography is central to distinguishing the two, and any diagnostic uncertainty warrants urgent ophthalmic oncology evaluation given the life-threatening nature of missed retinoblastoma' },
      { disease: 'Congenital cataract', whySimilar: 'Both cause leukocoria/a white pupillary reflex from lens opacification in infancy', keyDistinguisher: 'An isolated congenital cataract typically occurs in a normal-sized globe without a retrolental fibrovascular stalk, ciliary process elongation, or microphthalmia, whereas PFV\'s cataract is secondary to and accompanied by the fibrovascular membrane, microphthalmia, and often posterior segment findings' },
      { disease: 'Coats disease', whySimilar: 'Both can cause leukocoria in a young child from an abnormal retrolental/subretinal appearance', keyDistinguisher: 'Coats disease is typically unilateral in an older child (mean onset ~5-8 years, later than typical PFV presentation at birth/infancy), predominantly affects males, and shows telangiectatic retinal vessels with exudative retinal detachment and lipid exudation rather than a congenital fibrovascular hyaloid stalk or microphthalmia' },
      { disease: 'Retinopathy of prematurity (advanced/stage 5)', whySimilar: 'Both can cause leukocoria with retinal traction/detachment and can occur in a small eye', keyDistinguisher: 'Advanced ROP occurs specifically in a premature, low-birth-weight infant with a significant supplemental oxygen/NICU history and is typically bilateral (though asymmetric), whereas classic PFV occurs in a full-term infant with no prematurity history and is typically unilateral' },
    ],
    diagnosticTesting: [
      { name: 'Dilated fundus examination (often under sedation or exam under anesthesia in infants)', whyOrdered: 'Directly visualize the retrolental fibrovascular stalk/membrane, ciliary process changes, and any posterior segment involvement', expectedFinding: 'Fibrovascular stalk extending from the posterior lens capsule toward the optic disc, elongated ciliary processes, retinal folds or traction', contribution: 'Primary means of establishing the diagnosis and classifying anterior, posterior, or combined disease' },
      { name: 'B-scan ocular ultrasonography', whyOrdered: 'Characterize the retrolental/intravitreal density, assess for retinal detachment, and critically, screen for calcification to exclude retinoblastoma', expectedFinding: 'Echogenic stalk/membrane from the posterior lens to the optic disc without intralesional calcification; a small (microphthalmic) globe; possible tractional retinal detachment', contribution: 'Key study for distinguishing PFV from retinoblastoma, which typically shows calcification' },
      { name: 'Orbital MRI (with or without CT avoided due to radiation in young children)', whyOrdered: 'Further characterize the fibrovascular stalk and globe anatomy and exclude a mass lesion when ultrasound findings are equivocal', expectedFinding: 'A linear or membranous fibrovascular structure connecting the lens and optic disc, microphthalmia, without an enhancing calcified mass', contribution: 'Adjunctive cross-sectional imaging to support the diagnosis and exclude retinoblastoma, particularly when B-scan findings are indeterminate' },
      { name: 'Intraocular pressure measurement', whyOrdered: 'Screen for secondary angle-closure glaucoma, a recognized complication of anterior PFV', expectedFinding: 'May be elevated in eyes with anterior chamber crowding or angle closure', contribution: 'Identifies a treatable complication that affects both management urgency and prognosis' },
      { name: 'Genetic/family history review and, when bilateral or syndromic features are present, referral for genetic evaluation', whyOrdered: 'Most PFV is sporadic and isolated, but bilateral or atypical presentations raise concern for an associated syndrome', expectedFinding: 'Typically negative family history in isolated unilateral PFV', contribution: 'Helps distinguish isolated sporadic PFV from a syndromic association requiring broader systemic workup' },
    ],
    diagnosis: {
      criteria: 'Congenital leukocoria in a full-term infant with an ipsilateral microphthalmic eye and a retrolental fibrovascular stalk/membrane on examination and/or B-scan ultrasound, without evidence of intralesional calcification',
      confirmation: 'Confirmed by direct visualization of the fibrovascular stalk/membrane on dilated examination (often under anesthesia) together with B-scan ultrasonography (and MRI when needed) demonstrating the characteristic non-calcified retrolental-to-disc density and excluding a calcified retinoblastoma mass',
      classification: 'Classified anatomically as anterior PFV (retrolental fibrovascular plaque/cataract with ciliary process involvement), posterior PFV (optic disc stalk, vitreous membranes, retinal folds/traction), or combined anterior-posterior PFV (the most common pattern, with a stalk spanning from disc to lens)',
    },
    management: [
      { category: 'Observation', detail: 'Mild, non-progressive anterior findings (e.g., an isolated Mittendorf\'s dot or small persistent hyaloid remnant) without visually significant cataract, glaucoma, or traction may be observed with serial exams' },
      { category: 'First-line treatment', detail: 'For visually significant cataract/media opacity, early lensectomy with anterior vitrectomy (and removal of the fibrovascular stalk) is performed, ideally within the first weeks to few months of life, followed promptly by optical correction (contact lens or aphakic spectacle) and aggressive amblyopia therapy' },
      { category: 'Second-line treatment', detail: 'Pars plana/pars plicata vitrectomy for eyes with significant posterior segment involvement (vitreous membranes, retinal traction) to reduce the risk of progression to tractional retinal detachment' },
      { category: 'Advanced treatment', detail: 'Glaucoma surgery (e.g., trabeculectomy/tube shunt) for secondary angle-closure glaucoma; retinal detachment repair (vitrectomy with membrane peeling, +/- scleral buckle) for tractional detachment; enucleation reserved for a blind, painful, or phthisical eye, or when retinoblastoma cannot be confidently excluded' },
      { category: 'Referral', detail: 'Urgent referral to pediatric ophthalmology (and ocular oncology if retinoblastoma cannot be excluded) for any infant with leukocoria; ongoing co-management with a strabismus/pediatric ophthalmology and low-vision/amblyopia therapy team for confirmed PFV' },
    ],
    managementProtocol: {
      workup: [
        'Dilated fundus examination under sedation or exam under anesthesia to characterize anterior, posterior, or combined involvement',
        'B-scan ocular ultrasonography to assess the fibrovascular stalk, globe size, retinal status, and critically to screen for calcification and exclude retinoblastoma',
        'Orbital MRI when ultrasound findings are equivocal or a mass cannot be confidently characterized',
        'Intraocular pressure assessment to screen for secondary glaucoma',
        'Assessment of the fellow eye and general pediatric/systemic evaluation, particularly if bilateral or syndromic features are present',
      ],
      initialTreatment:
        'Once retinoblastoma has been excluded, eyes with a visually significant cataract or media opacity undergo early lensectomy with anterior vitrectomy and excision of the fibrovascular stalk, ideally within the first weeks to a few months of life to maximize the window for visual development; posterior segment involvement (vitreous membranes, retinal traction) is addressed with pars plana/plicata vitrectomy as needed. Aggressive optical rehabilitation (contact lens or aphakic correction) and amblyopia therapy (patching of the fellow eye) are started immediately after surgery and are as critical to the visual outcome as the surgery itself; eyes with minimal, non-progressive anterior findings and no visually significant opacity may instead be observed with serial exams.',
      followUpSchedule:
        'Frequent postoperative visits (often weekly to every few weeks initially) to monitor for glaucoma, retinal detachment, and amblyopia response, transitioning to regular pediatric ophthalmology follow-up (every few months) through the visually immature years given the long-term risk of glaucoma and amblyopia recurrence even after successful early surgery.',
      escalationCriteria: [
        'Rising intraocular pressure or angle-closure glaucoma despite medical therapy',
        'New or progressive retinal traction/detachment on follow-up examination',
        'Poor or plateauing visual/fixation response despite adequate optical correction and amblyopia therapy',
        'Any diagnostic uncertainty regarding retinoblastoma at any point in follow-up',
      ],
      referralCriteria: [
        'Any infant with leukocoria -> urgent pediatric ophthalmology (and ocular oncology if retinoblastoma cannot be excluded) for exam under anesthesia and imaging',
        'Confirmed PFV with visually significant cataract, glaucoma, or retinal traction -> pediatric ophthalmology/vitreoretinal surgery for lensectomy/vitrectomy and glaucoma management',
        'Amblyopia after successful anatomic surgery -> pediatric ophthalmology/optometry for aggressive optical correction and patching therapy',
      ],
      complications: [
        'Secondary angle-closure glaucoma (a leading cause of pain and further vision loss)',
        'Progressive or recurrent cataract/membrane reproliferation requiring reoperation',
        'Tractional retinal detachment',
        'Dense amblyopia in the affected eye, even after anatomically successful surgery, due to microphthalmia, media opacity duration, and the unilateral nature limiting binocular cooperation with therapy',
        'Phthisis bulbi or need for enucleation in severe, blind, or painful eyes',
      ],
      monitoringParameters: [
        'Intraocular pressure',
        'Lens/media clarity and any membrane reproliferation',
        'Retinal status (traction, detachment) on dilated exam or imaging',
        'Visual acuity/fixation behavior and amblyopia therapy compliance and response',
        'Axial length/globe growth over time',
      ],
      relatedExamTechniqueIds: ['bruckner-test', 'hirschberg-krimsky-test', 'cycloplegic-retinoscopy'],
    },
    followUp: {
      typical: 'Frequent early postoperative visits (weekly to every few weeks) tapering to regular pediatric ophthalmology follow-up every few months through the visually immature years',
      monitor: 'Intraocular pressure, lens/media clarity, retinal status for traction or detachment, and visual acuity/fixation with amblyopia therapy response',
      progression: 'New or worsening glaucoma, retinal traction/detachment, or plateauing visual response despite adequate therapy should prompt re-evaluation for additional surgical intervention',
      shortenWhen: 'Postoperative period, rising intraocular pressure, or any sign of retinal traction progression',
    },
    prognosis: {
      typicalCourse: 'Highly variable and dependent on the extent of anterior versus posterior involvement; isolated mild anterior findings can have a comparatively favorable course, while combined anterior-posterior disease with significant microphthalmia and posterior segment involvement tends to carry a guarded course even with timely surgery',
      progressionRisk: 'Untreated or inadequately treated eyes are at risk for progressive cataract, secondary angle-closure glaucoma, and tractional retinal detachment, any of which can further compromise an already limited visual potential',
      complications: 'Secondary glaucoma, retinal detachment, membrane reproliferation requiring reoperation, dense amblyopia, and phthisis bulbi/enucleation in severe cases',
      visualPrognosis: 'Generally guarded, even with early, technically successful surgery, because of the combination of microphthalmia, amblyopia from a unilateral media opacity, and (in posterior/combined disease) associated optic nerve or retinal dysplasia; reported outcomes range widely from useful ambulatory vision to no light perception, with posterior segment involvement and delayed treatment associated with worse outcomes, underscoring why early diagnosis and prompt intervention are emphasized',
    },
    clinicalPearls: [
      'PFV/PHPV is a classic must-know retinoblastoma mimic: unlike retinoblastoma, it shows no calcification on B-scan/CT, is far more often unilateral (up to ~90%) with microphthalmia, and typically occurs sporadically in an otherwise healthy, full-term infant rather than being heritable.',
      'The hallmark finding is a fibrovascular stalk connecting the posterior lens capsule to the optic disc — a persisting remnant of the embryonic hyaloid vascular system that normally regresses by the third trimester.',
      'Classify anatomically as anterior, posterior, or combined disease (combined is most common); the anatomic pattern drives both surgical approach and visual prognosis, with posterior involvement portending a worse outcome.',
      'Early surgery (lensectomy/vitrectomy) within the first weeks to months of life for visually significant disease is emphasized to maximize the window for visual development, but even prompt, technically successful surgery is often followed by only a guarded visual outcome because of amblyopia, microphthalmia, and any associated optic nerve/retinal dysplasia.',
      'Distinguish from advanced (stage 5) retinopathy of prematurity primarily by birth history: ROP occurs in a premature infant with a significant oxygen/NICU exposure history and is usually bilateral, while classic PFV occurs in a full-term infant and is usually unilateral.',
    ],
    highYield: [
      'Congenital leukocoria + microphthalmia + retrolental fibrovascular stalk to the optic disc + no calcification on B-scan = PFV/PHPV, distinguishing it from retinoblastoma (which shows calcification and can be bilateral/hereditary)',
      'Classically unilateral (~90%) and sporadic in a full-term infant — contrast with the premature, oxygen-exposed, often bilateral presentation of advanced ROP',
      'Anatomic classification: anterior (retrolental plaque/cataract, elongated ciliary processes), posterior (optic disc stalk, retinal folds/traction), combined (most common, worst prognosis)',
      'Complications include secondary angle-closure glaucoma and tractional retinal detachment, which can develop progressively even after the initial diagnosis',
      'Early lensectomy/vitrectomy for visually significant cases plus aggressive amblyopia therapy offers the best chance at useful vision, but the overall visual prognosis remains guarded, especially with posterior segment involvement',
    ],
  },
]
