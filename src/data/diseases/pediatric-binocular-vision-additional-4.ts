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
]
