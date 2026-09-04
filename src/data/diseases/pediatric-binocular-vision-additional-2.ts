import type { Disease } from '../../types/disease'

export const pediatricBinocularVisionAdditional2: Disease[] = [
  {
    id: 'divergence-insufficiency',
    name: 'Divergence Insufficiency',
    category: 'Pediatric & Binocular Vision',
    definition:
      'An acquired comitant esotropia that is significantly greater at distance fixation than at near, with full ocular ductions and versions, occurring most often as a benign age-related finding in older adults but occasionally signaling underlying neurologic disease of the posterior fossa or brainstem — most importantly, it is a key clinical mimic of bilateral CN VI (abducens) palsy that must be distinguished on exam.',
    affectedStructure: 'Fusional divergence mechanism (distance vergence system) — a functional vergence deficit rather than a structural lesion of the extraocular muscles or the abducens nerve itself',
    pathologicalProcess:
      'A reduction in fusional divergence amplitude (or, in some formulations, a relative excess of tonic convergence at distance) unmasks or produces a manifest esotropia that is specific to distance fixation, while near fusional convergence and alignment remain normal or near-normal because near vergence demands are less dependent on the deficient distance divergence reserve.',
    epidemiology: {
      typicalAge: 'Presumed benign age-related form typically affects patients in their 60s-80s; neurologic forms can occur at any age and are suggested by acute onset or a younger patient',
      importantPopulations: 'Older adults with gradual-onset distance diplopia (age-related/presumed benign form); patients of any age with acute-onset distance esotropia, especially with headache or other neurologic symptoms/signs, in whom posterior fossa or brainstem pathology must be excluded',
    },
    riskFactors: [
      { label: 'Advanced age (presumed age-related fusional divergence insufficiency)', tier: 'major' },
      { label: 'Posterior fossa or brainstem mass, Chiari malformation, or other structural lesion', tier: 'major' },
      { label: 'Elevated intracranial pressure', tier: 'moderate' },
      { label: 'Demyelinating disease', tier: 'associated' },
      { label: 'Prior head trauma', tier: 'associated' },
    ],
    pathophysiology: [
      'Fusional divergence amplitude at distance is reduced relative to the (often preserved) fusional convergence amplitude, so a pre-existing or latent esophoric tendency decompensates into a manifest esotropia specifically when fixating at distance',
      'Because near fusion relies comparatively less on this diminished distance divergence reserve, near alignment is typically normal or only mildly affected, producing the characteristic distance-greater-than-near esodeviation pattern',
      'Critically, the lateral rectus muscles and the abducens nerves themselves are functionally intact — ductions (monocular eye movements with the fellow eye occluded) and versions (binocular conjugate eye movements) show full, unrestricted abduction bilaterally, distinguishing this from a true paretic process',
      'In the presumed benign, age-related form, this is thought to reflect gradual age-related decline in fusional vergence reserves without an identifiable structural lesion',
      'In the neurogenic form, posterior fossa or brainstem pathology (mass lesion, Chiari malformation, elevated intracranial pressure, demyelination) is thought to disrupt central vergence control pathways rather than the abducens nerve fascicles or nuclei themselves — hence the preserved abduction on testing',
    ],
    symptoms: {
      common: ['Horizontal binocular diplopia specifically or predominantly at distance fixation (e.g., watching television, driving, viewing across a room)', 'Comfortable, single binocular vision at near', 'Gradual onset in the presumed benign age-related form'],
      lessCommon: ['Headache, gait disturbance, or other neurologic symptoms when an underlying posterior fossa/brainstem lesion is present', 'Intermittent diplopia early in the course that becomes more constant'],
      importantNegatives: ['No limitation of abduction on ductions or versions testing', 'No ptosis or pupil involvement', 'Near vision typically comfortable and single, unlike a comitant esotropia affecting all distances'],
      typicalProgression: 'Presumed age-related form is typically gradual and slowly progressive over months to years; acute or rapidly progressive onset, particularly with associated neurologic symptoms, should be treated as atypical and prompt urgent evaluation.',
    },
    signs: [
      { area: 'Other', finding: 'Comitant esotropia on cover test that is significantly greater at distance than at near (in contrast to accommodative esotropia patterns, which are typically equal or greater at near)' },
      { area: 'Other', finding: 'Full, unrestricted abduction bilaterally on both ductions (monocular) and versions (binocular) testing — the key finding distinguishing divergence insufficiency from bilateral CN VI palsy' },
      { area: 'Optic Nerve', finding: 'Papilledema may be present if the esotropia is due to elevated intracranial pressure; optic nerves are otherwise normal in the presumed benign form' },
      { area: 'Other', finding: 'Normal pupils, normal lid position, and no other cranial neuropathy in isolated, benign divergence insufficiency' },
    ],
    differentialDiagnosis: [
      { disease: 'Bilateral CN VI (abducens) palsy', whySimilar: 'Both present with a comitant-appearing or near-comitant acquired esotropia that is worse at distance fixation, and both can occur in older adults', keyDistinguisher: 'This is the essential distinguishing exam finding: divergence insufficiency shows FULL abduction on ductions and versions testing bilaterally, with no restriction; true bilateral CN VI palsy shows restricted/limited abduction on the affected side(s). Divergence insufficiency should never be diagnosed if any abduction deficit is present — that finding mandates a CN VI palsy workup instead' },
      { disease: 'Divergence excess intermittent exotropia (unrelated, but named similarly)', whySimilar: 'Name/terminology confusion given the "divergence" label', keyDistinguisher: 'Divergence excess intermittent exotropia is an outward (exo), not inward (eso), deviation greater at distance; opposite direction of misalignment and opposite underlying vergence mechanism' },
      { disease: 'Age-related distance esophoria/esotropia from other decompensating phorias (e.g., basic esophoria decompensation)', whySimilar: 'Acquired distance esotropia in an older adult', keyDistinguisher: 'Decompensating basic esophoria tends to show a more equal esodeviation at distance and near rather than the classic distance-much-greater-than-near pattern, and lacks the specific distance-selective vergence deficit pattern' },
    ],
    diagnosticTesting: [
      { name: 'Cover test / alternate cover test at distance and near', whyOrdered: 'Establish and quantify the pattern of esodeviation', expectedFinding: 'Esotropia significantly greater at distance (e.g., by 10 prism diopters or more) than at near, where alignment is normal or near-normal', contribution: 'Establishes the characteristic distance-near disparity that defines the diagnosis' },
      { name: 'Ductions and versions testing (monocular and binocular eye movements)', whyOrdered: 'Directly assess for any limitation of abduction to differentiate from CN VI palsy', expectedFinding: 'Full, unrestricted abduction bilaterally in divergence insufficiency; any restriction points away from this diagnosis and toward a true abducens palsy', contribution: 'The single most important test to distinguish divergence insufficiency from bilateral CN VI palsy' },
      { name: 'Full neurologic history and review of systems', whyOrdered: 'Screen for symptoms suggesting posterior fossa/brainstem pathology (headache, gait or coordination change, other cranial neuropathies, papilledema symptoms)', expectedFinding: 'Negative in the presumed benign age-related form; positive findings raise concern for a neurologic cause', contribution: 'Guides the decision for neuroimaging' },
      { name: 'Dilated fundus exam / optic nerve evaluation', whyOrdered: 'Assess for papilledema as a sign of elevated intracranial pressure', expectedFinding: 'Normal optic nerves in benign presumed age-related divergence insufficiency; disc edema if intracranial pressure is elevated', contribution: 'Papilledema mandates urgent neuroimaging and neurology referral' },
      { name: 'MRI brain (with attention to the posterior fossa and brainstem)', whyOrdered: 'Indicated for acute or rapidly progressive onset, younger patients, associated neurologic symptoms/signs, or papilledema', expectedFinding: 'Normal in the benign form; may reveal a posterior fossa mass, Chiari malformation, or other structural lesion in the neurogenic form', contribution: 'Excludes or identifies a structural cause requiring separate neurologic/neurosurgical management' },
    ],
    diagnosis: {
      criteria: 'Comitant esotropia substantially greater at distance than at near, with full, unrestricted abduction on ductions and versions testing bilaterally',
      confirmation: 'Confirmed by the combination of the characteristic distance-greater-than-near esodeviation pattern and normal, full abduction on motility testing, after excluding restriction or paresis; a diagnosis of presumed benign (age-related) divergence insufficiency is one of exclusion once neurologic causes have been reasonably ruled out, particularly in atypical presentations',
      classification: 'Classified as presumed benign/age-related (gradual onset, older patient, no neurologic findings, normal imaging when obtained) versus neurogenic/secondary (acute onset, younger patient, associated neurologic symptoms/signs, or an identified posterior fossa/brainstem lesion on imaging)',
    },
    management: [
      { category: 'Observation', detail: 'Mild, minimally symptomatic cases in an older adult with a reassuring history and exam may be observed, particularly if intermittent' },
      { category: 'First-line treatment', detail: 'Base-out prism correction (in glasses) to neutralize the distance esodeviation and relieve symptomatic diplopia' },
      { category: 'Second-line treatment', detail: 'Strabismus surgery (e.g., bilateral medial rectus recession) for persistent, significant, or prism-intolerant symptomatic esotropia' },
      { category: 'Referral', detail: 'Urgent neurology/neuro-ophthalmology referral and neuroimaging for acute-onset presentations, younger patients, associated neurologic symptoms or signs, or papilledema — presumed benign, age-related divergence insufficiency is a diagnosis that requires exclusion of neurologic disease first, especially when the presentation is atypical' },
    ],
    managementProtocol: {
      workup: [
        'Alternate cover test at distance and near, quantifying the esodeviation in prism diopters at each fixation distance to document the distance-greater-than-near pattern',
        'Full ductions and versions testing (monocular and binocular) to confirm complete, unrestricted abduction bilaterally before proceeding with a presumed-benign management plan',
        'Targeted neurologic review of systems and, when indicated, dilated optic nerve evaluation for papilledema',
        'MRI brain with attention to the posterior fossa/brainstem before committing to long-term prism or surgical planning in any atypical presentation (acute onset, younger patient, neurologic symptoms/signs, or papilledema)',
      ],
      initialTreatment:
        'Base-out prism incorporated into the spectacle correction to neutralize the distance esodeviation and relieve symptomatic diplopia once a presumed-benign etiology is established; mild, minimally symptomatic or intermittent cases in an older adult with a reassuring history and exam may instead be observed.',
      followUpSchedule:
        'Recheck several weeks after dispensing prism to confirm diplopia relief and angle stability, then extend to every 3-6 months once the patient is stable on prism or has been observed as benign; any new neurologic symptom warrants same-week re-evaluation regardless of interval.',
      escalationCriteria: [
        'Increasing esodeviation or prism intolerance despite an appropriately dispensed base-out prism trial',
        'Any new limitation of abduction on ductions or versions at a follow-up visit — this reclassifies the presumed diagnosis and mandates a bilateral CN VI palsy workup',
        'New papilledema, headache, gait disturbance, or other neurologic symptom/sign during the observation or prism-management period',
        'Rapidly increasing angle inconsistent with a stable, benign course',
      ],
      referralCriteria: [
        'Acute or rapidly progressive onset, a younger patient, associated neurologic symptoms/signs, or papilledema at any point -> urgent neurology/neuro-ophthalmology referral and neuroimaging',
        'Persistent, significant, or prism-intolerant symptomatic esotropia despite adequate prism trial -> strabismus surgery evaluation (e.g., bilateral medial rectus recession)',
      ],
      complications: [
        'Persistent symptomatic distance diplopia if untreated',
        'Prism intolerance or cosmetic dissatisfaction with thick prism lenses at higher amounts',
        'Missed underlying neurologic disease (posterior fossa mass, Chiari malformation, elevated intracranial pressure, demyelinating disease) if red flags are not screened for at diagnosis and follow-up',
        'Surgical over- or under-correction when medial rectus recession is pursued',
      ],
      monitoringParameters: [
        'Angle of esodeviation at distance and near (cover test/prism cover test)',
        'Ductions and versions for any new abduction limitation at every visit',
        'Diplopia symptom control and prism tolerance',
        'New neurologic symptoms or signs, and optic nerve appearance for papilledema',
      ],
      relatedExamTechniqueIds: ['cover-test', 'prism-cover-test'],
    },
    followUp: {
      typical: 'Periodic reassessment of the angle of deviation and symptom control every several months once a benign presumed etiology is established and the patient is stable or successfully managed with prism',
      monitor: 'Angle of esodeviation at distance and near, ductions/versions for any new abduction limitation, and development of any new neurologic symptoms or signs',
      progression: 'New abduction limitation, rapidly increasing angle, or emergence of neurologic symptoms should prompt reclassification of the presumed diagnosis and urgent neuroimaging/neurology referral',
      shortenWhen: 'Acute or rapidly progressive onset, or any new neurologic symptom or sign develops during observation',
    },
    prognosis: {
      typicalCourse: 'The presumed benign, age-related form is typically stable or slowly progressive and responds well to prism correction or surgery for symptomatic diplopia',
      progressionRisk: 'Risk relates primarily to missing an underlying neurologic cause in atypical presentations rather than progression of the ocular misalignment itself in the benign form',
      complications: 'Persistent symptomatic distance diplopia if untreated; in the neurogenic form, complications relate to the underlying posterior fossa or brainstem pathology itself',
      visualPrognosis: 'Excellent for ocular alignment and diplopia relief with prism or surgery in the benign form; overall prognosis in the neurogenic form depends entirely on the underlying etiology',
    },
    clinicalPearls: [
      'The single most important exam maneuver in a patient with distance-greater-than-near acquired esotropia is checking abduction on ductions and versions — full abduction supports divergence insufficiency, while any restriction points to a true (often bilateral) CN VI palsy and a different workup.',
      'Do not reflexively label an older adult\'s distance esotropia as "benign age-related divergence insufficiency" without first considering the tempo of onset and screening for neurologic red flags — acute onset or associated neurologic symptoms warrant neuroimaging regardless of age.',
      'Base-out prism is a simple, effective first step for symptomatic diplopia in confirmed benign divergence insufficiency before considering surgery.',
      'Bilateral CN VI palsy is uncommon and, when present, should raise particular concern for elevated intracranial pressure or a clival/posterior fossa process — this is part of why the full-abduction distinction from divergence insufficiency matters clinically.',
    ],
    highYield: [
      'Acquired esotropia significantly greater at distance than at near, with FULL abduction on ductions/versions — this full abduction is the key finding distinguishing it from bilateral CN VI palsy, which shows restricted abduction',
      'Presumed benign, age-related form is common in older adults, but acute onset or associated neurologic symptoms/signs should prompt neuroimaging to exclude posterior fossa or brainstem pathology',
      'Near alignment is typically normal/comfortable — symptoms and diplopia are distance-specific',
      'First-line management for symptomatic diplopia is base-out prism; surgery is reserved for persistent or significant deviations',
      'Never diagnose divergence insufficiency in the presence of any abduction limitation — that finding requires a true CN VI palsy workup instead',
    ],
  },
  {
    id: 'accommodative-dysfunction',
    name: 'Accommodative Dysfunction',
    aliases: ['Accommodative Insufficiency', 'Accommodative Excess', 'Accommodative Infacility', 'Pseudomyopia'],
    category: 'Pediatric & Binocular Vision',
    definition:
      'A spectrum of non-strabismic, non-refractive disorders of the accommodative (focusing) system — including accommodative insufficiency, accommodative excess (spasm/pseudomyopia), and accommodative infacility — that impair the eye\'s ability to focus normally, rapidly, or sustainably at near, distinct from but frequently coexisting with convergence insufficiency.',
    affectedStructure: 'Ciliary muscle and the accommodative (crystalline lens focusing) system — a functional deficit rather than a structural or purely refractive abnormality',
    pathologicalProcess:
      'Accommodative insufficiency results from reduced amplitude of accommodation for age due to inadequate ciliary muscle response; accommodative excess/spasm results from an inappropriate, sustained over-contraction of the ciliary muscle producing a spuriously myopic refractive state; accommodative infacility results from an inability to rapidly and efficiently shift accommodative effort between near and distance demand — each produces near-work-related visual symptoms without an underlying strabismic or purely refractive cause.',
    epidemiology: {
      typicalAge: 'Most commonly identified in school-age children and young adults, particularly with increasing near-work and digital device demands; accommodative insufficiency can also occur transiently at any age with systemic illness, certain medications, or after minor head trauma',
      importantPopulations: 'Students with significant near-to-distance visual switching demands (e.g., copying from a board) are classically prone to accommodative infacility; patients with recent systemic illness, certain medications, or minor head trauma may develop transient accommodative insufficiency',
    },
    riskFactors: [
      { label: 'Sustained/prolonged near work demands (reading, digital screen use)', tier: 'moderate' },
      { label: 'Systemic illness or recent minor head trauma/concussion', tier: 'moderate' },
      { label: 'Certain medications with anticholinergic or sedating effects on accommodation', tier: 'moderate' },
      { label: 'Uncorrected or under-corrected refractive error contributing to accommodative strain', tier: 'associated' },
      { label: 'Frequent near-to-distance visual switching tasks (e.g., copying from a board in school)', tier: 'associated' },
    ],
    pathophysiology: [
      'Accommodative insufficiency: amplitude of accommodation is reduced below the expected normative value for the patient\'s age (per Hofstetter\'s formula), causing blur specifically at near that is disproportionate to age-appropriate expectations; can be idiopathic/developmental in children and young adults, or transient/acquired in association with systemic illness, certain medications, or minor head trauma',
      'Accommodative excess/spasm (pseudomyopia): the ciliary muscle remains inappropriately contracted, producing a manifest refraction that appears more myopic than the patient\'s true refractive state; this spurious myopia resolves (or substantially reduces) on cycloplegic refraction, which relaxes the ciliary muscle and reveals the true underlying refractive error',
      'Accommodative infacility: the accommodative system responds normally in amplitude but is slow or inefficient at shifting focus between near and distance targets, producing transient blur with rapid changes in fixation distance rather than a fixed amplitude deficit',
      'Each subtype produces overlapping near-work symptoms (blur, asthenopia, headache) but reflects a distinct underlying mechanism, and more than one subtype — or accommodative dysfunction together with convergence insufficiency — can coexist in the same patient',
      'A critical clinical pitfall: failing to recognize accommodative excess/spasm and prescribing minus lens correction based on the spuriously myopic manifest (non-cycloplegic) refraction leads to overminus prescribing, which further stimulates accommodative effort and worsens rather than relieves the patient\'s symptoms',
    ],
    symptoms: {
      common: ['Blurred vision at near (accommodative insufficiency)', 'Intermittent blur when shifting gaze between near and distance targets (accommodative infacility)', 'Eye strain/asthenopia and headache with sustained near work', 'Apparent progressive or fluctuating myopia on manifest refraction (accommodative excess/pseudomyopia)'],
      lessCommon: ['Difficulty copying from a board or screen efficiently (classic infacility complaint in students)', 'Photophobia or brow ache associated with ciliary spasm'],
      importantNegatives: ['No manifest strabismus (distinguishes from strabismic binocular disorders)', 'Distance vision may be entirely normal once cycloplegic refraction and true refractive error are established', 'No structural ocular abnormality on exam'],
      typicalProgression: 'Symptoms are typically task-specific, worsening with sustained or rapidly alternating near work and improving with rest; accommodative excess can be mistakenly interpreted as progressive true myopia if cycloplegic refraction is not performed.',
    },
    signs: [
      { area: 'Other', finding: 'Reduced amplitude of accommodation for age on push-up or minus-lens-to-blur testing (accommodative insufficiency), below the value expected by Hofstetter\'s formula' },
      { area: 'Other', finding: 'Manifest (non-cycloplegic) refraction more myopic than cycloplegic refraction, with the myopic component reducing or resolving under cycloplegia (accommodative excess/pseudomyopia)' },
      { area: 'Other', finding: 'Failure or marked difficulty clearing plus and/or minus lenses on monocular accommodative facility (lens flipper) testing, with slowed cycles per minute relative to age-normal values (accommodative infacility)' },
      { area: 'Other', finding: 'Normal ocular alignment on cover test; normal pupillary responses' },
    ],
    differentialDiagnosis: [
      { disease: 'Convergence insufficiency', whySimilar: 'Overlapping near-work symptoms — eye strain, blur, headaches with reading, and both frequently coexist', keyDistinguisher: 'Convergence insufficiency shows abnormal near point of convergence and reduced positive fusional vergence with a normal accommodative system, whereas accommodative dysfunction shows abnormal accommodative amplitude, facility, or cycloplegic-manifest refraction discrepancy with normal vergence findings; both should be specifically tested for and assessed together in any comprehensive binocular vision workup, as they frequently coexist' },
      { disease: 'Uncorrected or under-corrected refractive error', whySimilar: 'Near blur and asthenopia with reading', keyDistinguisher: 'Symptoms and blur resolve fully with accurate refractive correction; accommodative amplitude, facility, and cycloplegic refraction findings are normal once refractive error is properly corrected' },
      { disease: 'True (axial) progressive myopia', whySimilar: 'Accommodative excess/spasm can mimic worsening myopia on sequential manifest refractions', keyDistinguisher: 'Cycloplegic refraction differentiates the two — pseudomyopia resolves or substantially reduces under cycloplegia, while true myopia persists unchanged under cycloplegic conditions' },
    ],
    diagnosticTesting: [
      { name: 'Amplitude of accommodation testing (push-up and/or minus-lens-to-blur method) compared to Hofstetter\'s formula for expected amplitude by age', whyOrdered: 'Establish whether accommodative amplitude is reduced relative to age-normal expectations', expectedFinding: 'Amplitude below the expected value for the patient\'s age in accommodative insufficiency', contribution: 'Confirms accommodative insufficiency as the specific subtype and quantifies severity' },
      { name: 'Monocular accommodative facility testing with plus/minus lens flippers', whyOrdered: 'Assess the speed and ease of shifting accommodative focus, particularly when infacility is suspected', expectedFinding: 'Reduced cycles per minute relative to age-normal values, often with specific difficulty clearing either the plus or minus lenses', contribution: 'Confirms accommodative infacility and identifies whether difficulty is greater relaxing (plus lens) or stimulating (minus lens) accommodation' },
      { name: 'Cycloplegic refraction', whyOrdered: 'Distinguish true refractive myopia from accommodative excess/spasm (pseudomyopia) by fully relaxing the ciliary muscle', expectedFinding: 'Reduction or resolution of the myopic finding compared to manifest (non-cycloplegic) refraction in pseudomyopia', contribution: 'Essential to avoid overminus prescribing based on a spuriously myopic manifest refraction; establishes the true underlying refractive error' },
      { name: 'Near point of convergence and fusional vergence testing', whyOrdered: 'Assess for coexisting convergence insufficiency, which frequently overlaps with accommodative dysfunction', expectedFinding: 'May be normal (isolated accommodative dysfunction) or abnormal (combined accommodative-vergence dysfunction)', contribution: 'Ensures a comprehensive binocular vision assessment rather than treating accommodative findings in isolation' },
    ],
    diagnosis: {
      criteria: 'Reduced accommodative amplitude for age (accommodative insufficiency), a manifest refraction that is more myopic than cycloplegic refraction (accommodative excess/pseudomyopia), or reduced accommodative facility on lens flipper testing (accommodative infacility), in a patient with near-work-related symptoms and no strabismus or fully explanatory refractive error',
      confirmation: 'Confirmed through the specific abnormal accommodative test corresponding to the subtype (amplitude testing, cycloplegic-vs-manifest refraction comparison, or lens flipper facility testing), correlated with the patient\'s symptom pattern',
      classification: 'Classified as accommodative insufficiency (reduced amplitude), accommodative excess/spasm/pseudomyopia (inappropriate sustained accommodation mimicking myopia), or accommodative infacility (slow/inefficient shifting of focus); subtypes can coexist, and convergence insufficiency should always be assessed alongside these findings',
    },
    management: [
      { category: 'First-line treatment', detail: 'Accurate refractive correction based on cycloplegic refraction findings, which is essential to avoid overminus prescribing in cases of accommodative excess/pseudomyopia' },
      { category: 'First-line treatment', detail: 'Reading glasses or a bifocal add for symptomatic accommodative insufficiency to reduce the accommodative demand at near' },
      { category: 'Second-line treatment', detail: 'Vision therapy (accommodative facility exercises using lens flippers, monocular and binocular accommodative rock) for accommodative infacility and for accommodative insufficiency not adequately resolved with reading correction alone' },
      { category: 'Referral', detail: 'Referral for evaluation of an underlying systemic illness, medication effect, or recent head trauma when accommodative insufficiency has an acute or atypical onset, particularly in a previously asymptomatic patient' },
    ],
    managementProtocol: {
      workup: [
        'Amplitude of accommodation (push-up or minus-lens-to-blur) compared against Hofstetter\'s formula for the patient\'s age to confirm and quantify accommodative insufficiency',
        'Monocular accommodative facility testing with plus/minus lens flippers to characterize infacility and identify whether plus- or minus-lens clearing is more affected',
        'Cycloplegic refraction to distinguish true refractive error from accommodative excess/spasm and establish the correction baseline before treating any subtype',
        'Near point of convergence and fusional vergence testing to screen for coexisting convergence insufficiency, which should be assessed and, if present, treated alongside the accommodative findings',
      ],
      initialTreatment:
        'Prescribe accurate correction based on cycloplegic (not manifest) refraction to avoid overminus prescribing in accommodative excess/pseudomyopia; add reading glasses or a bifocal for symptomatic accommodative insufficiency to reduce near accommodative demand; begin office-based accommodative facility vision therapy (plus/minus lens rock, monocular then binocular) for infacility or for insufficiency not adequately resolved by correction alone.',
      followUpSchedule:
        'Reassess amplitude, facility (cycles per minute), and symptoms every 4-6 weeks during an active in-office vision therapy course (typically a 12-week program of weekly sessions with home reinforcement); recheck refractive stability and symptom resolution at 2-3 months once optical correction alone is the primary intervention.',
      escalationCriteria: [
        'Facility remains below age-normal cycles per minute after an adequate (approximately 12-week) in-office vision therapy trial',
        'Persistent near-work symptoms despite accurate cycloplegic-based correction and an adequate therapy trial',
        'New or worsening near point of convergence findings suggesting an evolving combined accommodative-vergence disorder',
      ],
      referralCriteria: [
        'Acute or atypical-onset accommodative insufficiency in a previously asymptomatic patient -> evaluate for underlying systemic illness, medication effect, or recent head trauma/concussion',
        'Persistent symptoms despite correction and an adequate vision therapy trial, or confirmed coexisting convergence insufficiency -> referral to a developmental/binocular vision optometry service for a structured, comprehensive vision therapy program if not already being provided',
      ],
      cycloplegicConsiderations:
        'Cyclopentolate 1% cycloplegic refraction is essential before diagnosing new or rapidly progressive myopia in a child or young adult with near-work symptoms — it distinguishes true refractive error from accommodative excess/spasm (pseudomyopia), which resolves or substantially reduces under cycloplegia; skipping this step is the classic pitfall that leads to overminus prescribing and worsened symptoms.',
      complications: [
        'Overminus prescribing based on a spuriously myopic manifest refraction, which further stimulates accommodative effort and worsens rather than relieves symptoms',
        'Impaired reading efficiency and academic/occupational near-work performance if left untreated',
        'Symptoms mistaken for a behavioral or attention problem in school-age children, delaying diagnosis',
      ],
      monitoringParameters: [
        'Amplitude of accommodation relative to age-normal (Hofstetter) expectations',
        'Accommodative facility (cycles per minute) on lens flipper testing',
        'Stability of cycloplegic versus manifest refraction findings',
        'Near-work symptom resolution and, when relevant, near point of convergence/fusional vergence status',
      ],
      relatedDrugIds: ['cyclopentolate'],
      relatedCalculatorIds: ['amplitude-of-accommodation-hofstetter'],
      relatedExamTechniqueIds: ['amplitude-of-accommodation-push-up', 'accommodative-facility-testing', 'cycloplegic-retinoscopy', 'near-point-of-convergence'],
    },
    followUp: {
      typical: 'Reassessment of accommodative amplitude, facility, and symptom resolution at intervals of several weeks to months during active management or vision therapy',
      monitor: 'Amplitude of accommodation, accommodative facility (cycles per minute), stability of cycloplegic vs. manifest refraction findings, and symptom resolution',
      progression: 'Persistent symptoms or abnormal accommodative findings despite appropriate correction and an adequate therapy trial should prompt reassessment for coexisting convergence insufficiency or an alternative/underlying cause',
    },
    prognosis: {
      typicalCourse: 'Generally good response to appropriate refractive correction, reading addition, and/or vision therapy; transient accommodative insufficiency associated with systemic illness or medication typically resolves once the underlying cause resolves',
      progressionRisk: 'Untreated symptomatic accommodative dysfunction can impair reading efficiency and academic or occupational near-work performance, though it is not vision- or eye-threatening',
      complications: 'Unrecognized pseudomyopia treated with overminus spectacle correction can worsen symptoms and drive further accommodative strain rather than relieving it',
      visualPrognosis: 'Excellent; accommodative dysfunction does not threaten ocular health or long-term visual acuity and typically responds well to appropriate optical correction and/or vision therapy',
    },
    clinicalPearls: [
      'Always obtain a cycloplegic refraction before diagnosing new or rapidly progressive myopia in a child or young adult with near-work symptoms — accommodative excess/spasm (pseudomyopia) can mimic true myopic progression on manifest refraction alone.',
      'Prescribing minus lenses based on a spuriously myopic manifest refraction in a patient with accommodative spasm is a classic pitfall that leads to overminus prescribing and worsening, not improving, symptoms.',
      'Accommodative infacility is a classic complaint in students who must frequently shift focus between a board/screen and near work — test with plus/minus lens flippers rather than amplitude testing alone.',
      'Accommodative dysfunction and convergence insufficiency frequently coexist and share overlapping near-work symptoms — a comprehensive binocular vision exam should always assess both the accommodative and vergence systems together rather than assuming either in isolation.',
      'Accommodative insufficiency can occur transiently with systemic illness, certain medications, or after minor head trauma, so a new onset in a previously asymptomatic patient warrants a brief review of recent health history.',
    ],
    highYield: [
      'Three subtypes: accommodative insufficiency (reduced amplitude), accommodative excess/spasm/pseudomyopia (spurious myopia that resolves with cycloplegia), and accommodative infacility (slow focus-shifting, tested with lens flippers)',
      'Cycloplegic refraction is essential to unmask pseudomyopia — failing to do so and prescribing overminus based on manifest refraction worsens symptoms',
      'Hofstetter\'s formula gives expected accommodative amplitude by age; amplitude below this expected value supports accommodative insufficiency',
      'Frequently coexists with convergence insufficiency — both should be assessed together in a comprehensive near binocular vision exam',
      'Accommodative infacility is the classic complaint in students with frequent near-to-distance switching (e.g., copying from a board)',
      'Management includes accurate refractive correction, reading glasses/bifocals for insufficiency, and vision therapy for infacility',
    ],
  },
  {
    id: 'presbyopia',
    name: 'Presbyopia',
    category: 'Pediatric & Binocular Vision',
    definition:
      'The universal, physiologic, age-related progressive loss of accommodative amplitude resulting from gradual lens stiffening and reduced ciliary muscle efficiency, typically becoming symptomatic in the early-to-mid 40s and progressing until accommodative amplitude is essentially exhausted by the mid-50s to 60s.',
    affectedStructure: 'Crystalline lens and ciliary body/zonular apparatus — a physiologic aging change of the accommodative mechanism rather than a structural ocular disease',
    pathologicalProcess:
      'With advancing age, the crystalline lens progressively increases in stiffness and thickness while losing elasticity, and ciliary muscle contractile efficiency and zonular mechanics decline; together these changes progressively reduce the eye\'s ability to increase its optical power (accommodate) to maintain clear focus on near objects, culminating in the near-complete loss of active accommodation.',
    epidemiology: {
      typicalAge: 'Symptomatic onset typically in the early-to-mid 40s, with accommodative amplitude essentially exhausted by the mid-50s to 60s; a universal process affecting all individuals who live long enough to experience it',
      prevalence: 'Universal — presbyopia eventually affects essentially the entire population as a normal consequence of aging',
      importantPopulations: 'Uncorrected hyperopes become symptomatic earlier (less accommodative reserve available before symptoms emerge) and uncorrected myopes may notice symptoms later or find they can read by removing their distance correction; unusually early onset (e.g., in a patient in their 20s-30s) should prompt consideration of an underlying accelerating cause',
    },
    riskFactors: [
      { label: 'Advancing age (universal, inevitable risk factor)', tier: 'major' },
      { label: 'Uncorrected hyperopia (earlier symptomatic presentation)', tier: 'moderate' },
      { label: 'Systemic conditions or medications that reduce accommodative function, when presbyopic symptoms occur unusually early', tier: 'associated' },
      { label: 'Certain medications with anticholinergic effects that reduce accommodative amplitude', tier: 'associated' },
    ],
    pathophysiology: [
      'The crystalline lens continues to grow and add new fiber layers throughout life, progressively increasing lens stiffness (reduced elastic compliance) and thickness with age',
      'Reduced lens elasticity limits the degree to which the lens can change shape (increase its curvature/power) in response to ciliary muscle contraction and zonular relaxation during the near reflex',
      'Concurrent age-related decline in ciliary muscle contractile efficiency further reduces the effective accommodative response even for a given degree of lens flexibility',
      'The combined effect is a gradual, essentially linear decline in maximum accommodative amplitude across adulthood, becoming symptomatic once amplitude falls below what is needed for comfortable sustained near tasks at habitual working distances',
      'This process is distinct from, though can be compounded by, an underlying refractive error (hyperopia, myopia, or astigmatism), which shifts the age and nature of symptom onset but does not itself cause presbyopia',
    ],
    symptoms: {
      common: ['Difficulty focusing on near material, particularly in dim lighting', 'Holding reading material farther away to bring it into focus ("arm-length" reading)', 'Need for brighter light when reading', 'Eye strain or fatigue with prolonged near work, especially later in the day'],
      lessCommon: ['Headache associated with sustained near tasks', 'Blurred vision when transitioning quickly from distance to near focus'],
      importantNegatives: ['Distance vision is unaffected by presbyopia itself (though a separate distance refractive error may coexist)', 'No pain, redness, or structural ocular abnormality attributable to presbyopia'],
      typicalProgression: 'Gradual, progressive decline in near focusing ability from the early-to-mid 40s, worsening steadily until accommodative amplitude is essentially exhausted by the mid-50s to 60s, after which near correction needs stabilize.',
    },
    signs: [
      { area: 'Lens', finding: 'Age-appropriate reduction in measured amplitude of accommodation (push-up or minus-lens-to-blur testing) consistent with expected values for the patient\'s age' },
      { area: 'Other', finding: 'Improved near visual acuity with the addition of appropriate plus lens power over the distance correction' },
      { area: 'Other', finding: 'Otherwise normal ocular health exam without structural pathology explaining the near focusing difficulty' },
    ],
    differentialDiagnosis: [
      { disease: 'Accommodative insufficiency (in a younger patient)', whySimilar: 'Both present with reduced near focusing ability and near blur', keyDistinguisher: 'Accommodative insufficiency occurs in children or young adults with amplitude reduced below the age-expected norm; presbyopia is the expected, universal decline in amplitude for the patient\'s age (typically 40s and older) and is not itself considered a deficiency' },
      { disease: 'Uncorrected or changing distance refractive error', whySimilar: 'Blurred near vision can also result from an uncorrected distance refractive error, particularly hyperopia', keyDistinguisher: 'Distance visual acuity is reduced with a distance refractive error, whereas isolated presbyopia preserves normal distance acuity with only near tasks affected' },
      { disease: 'Early nuclear cataract', whySimilar: 'Age-related near and overall visual disturbance in a similar age group, and can occasionally cause a temporary myopic shift ("second sight") that transiently masks presbyopic symptoms', keyDistinguisher: 'Cataract shows lens opacity on slit lamp exam with associated reduction in best-corrected distance (and often near) visual acuity, glare, and other lens-related complaints, rather than an isolated, correctable near focusing deficit' },
    ],
    diagnosticTesting: [
      { name: 'Amplitude of accommodation testing (push-up or minus-lens-to-blur method)', whyOrdered: 'Quantify remaining accommodative reserve and confirm it is consistent with age-expected decline', expectedFinding: 'Reduced amplitude consistent with the patient\'s age per normative expectations (e.g., Hofstetter\'s formula)', contribution: 'Confirms presbyopia as an age-appropriate physiologic finding rather than a pathologic deficit' },
      { name: 'Near add determination (trial lens near add over best distance correction)', whyOrdered: 'Determine the minimum plus power needed for comfortable near tasks at the patient\'s habitual working distance', expectedFinding: 'Clear, comfortable near acuity achieved with an appropriate plus add, typically increasing with age', contribution: 'Establishes the prescription for reading glasses, bifocal, or progressive addition lens correction' },
      { name: 'Comprehensive refraction (distance)', whyOrdered: 'Establish accurate distance correction as the baseline over which the near add is applied', expectedFinding: 'Distance refractive error appropriate to the patient, independent of the presbyopic near add', contribution: 'Ensures the full correction (distance plus near add) addresses both components of the patient\'s visual needs' },
      { name: 'Dilated fundus and slit lamp exam', whyOrdered: 'Confirm no coexisting ocular pathology (e.g., cataract) is contributing to the visual complaint', expectedFinding: 'Normal, age-appropriate ocular health exam in isolated presbyopia', contribution: 'Rules out other causes of near or overall visual disturbance before attributing symptoms solely to presbyopia' },
    ],
    diagnosis: {
      criteria: 'Age-appropriate reduction in accommodative amplitude (typically emerging in the early-to-mid 40s) causing near-work symptoms relieved by an appropriate plus lens add, with normal distance vision and no other ocular pathology accounting for the complaint',
      confirmation: 'Confirmed by demonstrating improved, comfortable near visual acuity with the addition of appropriate plus lens power over the patient\'s distance correction, consistent with age-expected accommodative amplitude',
      classification: 'Not formally staged as a disease; the near add requirement is tracked and increased periodically as accommodative amplitude continues to decline with age until amplitude is essentially exhausted',
    },
    management: [
      { category: 'First-line treatment', detail: 'Reading glasses (single-vision near correction) for patients with normal, uncorrected distance vision who only need help at near' },
      { category: 'First-line treatment', detail: 'Bifocal or trifocal spectacle correction, or progressive addition lenses (PALs), for patients who also require distance (and/or intermediate) correction' },
      { category: 'Second-line treatment', detail: 'Multifocal or monovision contact lens correction for patients preferring contact lens wear over spectacles' },
      { category: 'Advanced treatment', detail: 'Presbyopia-correcting or monovision approaches incorporated into refractive surgery or cataract surgery (e.g., multifocal/extended depth of focus intraocular lens selection, monovision LASIK) for appropriately selected candidates' },
      { category: 'Referral', detail: 'Refer for further evaluation if presbyopic symptoms develop unusually early (e.g., in a patient in their 20s-30s) to assess for an underlying systemic condition or medication effect accelerating accommodative loss, rather than assuming routine presbyopia' },
    ],
    managementProtocol: {
      workup: [
        'Amplitude of accommodation testing (push-up or minus-lens-to-blur) to confirm the reduction is consistent with age-expected norms',
        'Trial-lens near add determination over best distance correction at the patient\'s habitual working distance',
        'Comprehensive distance refraction to establish the baseline over which the add is applied',
        'Dilated fundus and slit lamp exam to exclude a coexisting cause (e.g., early cataract) before attributing near symptoms solely to presbyopia',
      ],
      initialTreatment:
        'Prescribe the minimum plus add that gives clear, comfortable near acuity at the patient\'s habitual working distance — single-vision reading glasses if distance vision is otherwise uncorrected, or a bifocal/trifocal/progressive addition lens if distance (and/or intermediate) correction is also needed.',
      followUpSchedule:
        'Routine comprehensive eye exam every 1-2 years with the near add reassessed and increased as needed to match progressive accommodative decline; shorten the interval if symptoms develop unusually early or progress faster than expected for age.',
      escalationCriteria: [
        'Near add no longer sufficient for functional tasks despite an updated, appropriately determined add',
        'Add requirement increasing unusually quickly relative to expected age-related decline',
        'Persistent near symptoms despite correction, raising concern for an undiagnosed ocular health cause (e.g., cataract) rather than presbyopia alone',
      ],
      referralCriteria: [
        'Presbyopic symptoms developing unusually early (20s-30s) -> evaluate for an underlying systemic condition or medication effect accelerating accommodative loss rather than assuming routine early presbyopia',
        'Patient desiring spectacle/contact lens independence and an appropriate candidate -> refractive or cataract surgical consultation for presbyopia-correcting or monovision approaches (e.g., multifocal/extended depth-of-focus IOL selection, monovision LASIK)',
      ],
      complications: [
        'Untreated presbyopia causes eye strain and functional near-vision impairment but carries no risk of ocular health complications or permanent visual loss',
        'Overcorrection with excess near add power can blur intermediate/distance vision through the reading segment',
        'Monovision intolerance (reduced stereopsis/depth perception) in patients selected for that correction approach',
      ],
      monitoringParameters: [
        'Near add requirement over time',
        'Comfort and clarity at habitual working distance',
        'General ocular health given the overlapping age range with other age-related conditions (cataract, glaucoma, macular degeneration)',
      ],
      relatedExamTechniqueIds: ['amplitude-of-accommodation-push-up'],
    },
    followUp: {
      typical: 'Routine comprehensive eye exams approximately every 1-2 years, with near add adjusted as needed to match progressive accommodative decline',
      monitor: 'Near add requirement, comfort and clarity at habitual working distances, and overall ocular health given the overlapping age range with other age-related ocular conditions (e.g., cataract, glaucoma, macular degeneration)',
      progression: 'Progressive increase in the required near add is expected and normal until accommodative amplitude is essentially exhausted, typically by the mid-50s to 60s, after which the add generally stabilizes',
    },
    prognosis: {
      typicalCourse: 'Predictable, universal progressive decline in accommodative amplitude with age, fully and reliably correctable with appropriate optical correction',
      progressionRisk: 'Progression is expected and physiologic, not a marker of disease; continues until accommodative amplitude is essentially exhausted, after which near correction needs stabilize',
      complications: 'Untreated presbyopia causes eye strain and functional near-vision impairment but carries no risk of ocular health complications or permanent visual loss',
      visualPrognosis: 'Excellent — near visual function is fully restored with appropriate correction, and presbyopia itself does not threaten ocular health or long-term vision',
    },
    clinicalPearls: [
      'Presbyopia is a routine, expected, and universal physiologic aging change, not a disease — patient education framing it this way improves acceptance of correction.',
      'Unusually early presbyopic symptoms (e.g., in a patient in their 20s-30s) should prompt consideration of an underlying accelerating cause — systemic conditions and certain medications affecting accommodation are worth reviewing rather than assuming routine early presbyopia.',
      'A patient with pre-existing myopia may notice they can read comfortably simply by removing their distance glasses as presbyopia develops, since their myopic correction already places the eye\'s effective focus near.',
      'Nuclear cataract can produce a temporary myopic shift ("second sight") that transiently improves near vision and masks emerging presbyopic symptoms — this should not be mistaken for reversal of the presbyopic process itself.',
      'The near add requirement increases progressively through the 40s and 50s and typically stabilizes once accommodative amplitude is essentially exhausted, usually by the mid-50s to 60s.',
    ],
    highYield: [
      'Universal, physiologic, age-related loss of accommodative amplitude from lens stiffening and reduced ciliary muscle efficiency — not a disease process',
      'Symptomatic onset typically early-to-mid 40s; amplitude essentially exhausted by mid-50s to 60s',
      'Correction options: reading glasses, bifocals/trifocals, progressive addition lenses, multifocal/monovision contact lenses, and presbyopia-correcting or monovision refractive/cataract surgery approaches',
      'Unusually early onset (20s-30s) should prompt evaluation for an underlying systemic or medication-related cause rather than assumed routine presbyopia',
      'Distinguish from accommodative insufficiency in younger patients, uncorrected distance refractive error, and early nuclear cataract (which can cause a temporary myopic "second sight" masking presbyopic symptoms)',
    ],
  },
  {
    id: 'low-vision',
    name: 'Low Vision',
    aliases: ['Visual Impairment'],
    category: 'Pediatric & Binocular Vision',
    definition:
      'A functional and rehabilitative classification — rather than a specific diagnosis — describing best-corrected visual acuity worse than 20/70 in the better-seeing eye and/or significant visual field restriction that cannot be fully resolved with standard refractive correction, medical treatment, or surgery, resulting in meaningful impact on daily functioning; distinct from "legal blindness," a stricter regulatory threshold typically defined as 20/200 or worse, or a visual field of 20 degrees or less, in the better eye.',
    affectedStructure: 'Variable — determined by the underlying causative ocular or visual pathway disease rather than a single anatomic structure; low vision itself describes the functional visual outcome of that disease, not a distinct anatomic process',
    pathologicalProcess:
      'Low vision arises from a wide range of underlying ocular or neuro-ophthalmic diseases that permanently reduce visual acuity and/or visual field beyond what can be corrected with glasses, contact lenses, medical therapy, or surgery, resulting in a level of visual function that meaningfully limits activities such as reading, mobility, and recognition of faces or objects.',
    epidemiology: {
      typicalAge: 'Prevalence increases substantially with age given the predominance of age-related causes (e.g., age-related macular degeneration, glaucoma, diabetic retinopathy) in older populations, though low vision also occurs in children and working-age adults from congenital, hereditary, or acquired causes',
      prevalence: 'A major public health concern globally; prevalence rises sharply with advancing age as age-related ocular disease becomes more common',
      importantPopulations: 'Older adults with age-related macular degeneration, glaucoma, or diabetic retinopathy (leading causes of low vision in adults); children and younger adults with inherited retinal dystrophies (e.g., retinitis pigmentosa), optic neuropathies, or other congenital/early-onset conditions',
    },
    riskFactors: [
      { label: 'Advanced age-related macular degeneration', tier: 'major' },
      { label: 'Advanced glaucoma (any type) with significant visual field loss', tier: 'major' },
      { label: 'Advanced/proliferative diabetic retinopathy', tier: 'major' },
      { label: 'Retinitis pigmentosa and other inherited retinal dystrophies', tier: 'moderate' },
      { label: 'Optic atrophy / advanced optic neuropathy of any cause', tier: 'moderate' },
      { label: 'Advancing age (increased prevalence of causative age-related ocular disease)', tier: 'moderate' },
    ],
    pathophysiology: [
      'Low vision is not a single disease entity but the shared functional endpoint of many distinct underlying conditions once damage to the relevant visual structures exceeds what optical, medical, or surgical treatment can restore',
      'Central visual acuity loss (e.g., from age-related macular degeneration or diabetic macular edema/retinopathy) predominantly impairs detailed tasks such as reading, face recognition, and fine visual discrimination while often sparing peripheral mobility vision',
      'Peripheral visual field loss (e.g., from advanced glaucoma or retinitis pigmentosa) predominantly impairs mobility, orientation, and awareness of the surrounding environment while central acuity for detailed tasks may be relatively preserved until late in the disease course',
      'Diffuse optic nerve damage (advanced optic atrophy/optic neuropathy) can reduce both central acuity and, depending on etiology, visual field, producing global visual impairment',
      'Regardless of the specific structural cause, the shared functional consequence is a mismatch between the visual demands of daily tasks and the patient\'s remaining visual capacity, which is the focus of low vision rehabilitation rather than further disease-specific treatment',
    ],
    symptoms: {
      common: ['Difficulty reading standard print despite best correction', 'Difficulty recognizing faces at a distance', 'Difficulty with mobility, navigating unfamiliar environments, or noticing obstacles (particularly with field loss)', 'Glare sensitivity and difficulty adapting to changes in lighting'],
      lessCommon: ['Difficulty with specific valued activities (driving, hobbies, employment tasks) disproportionate to the measured visual acuity alone', 'Social withdrawal or reduced independence related to functional visual limitation'],
      importantNegatives: ['Symptoms and functional impact are not fully explained or resolved by updating spectacle/contact lens correction alone', 'Not synonymous with total blindness — most low vision patients retain some usable residual vision'],
      typicalProgression: 'Progression depends entirely on the underlying causative disease; low vision status itself, once established, is addressed through rehabilitation rather than expected reversal, though further vision loss from the underlying condition can still occur.',
    },
    signs: [
      { area: 'Other', finding: 'Best-corrected visual acuity worse than 20/70 in the better-seeing eye, and/or a visual field significantly restricted from normal, that persists despite optimal refractive correction' },
      { area: 'Other', finding: 'Visual acuity of 20/200 or worse, or a visual field of 20 degrees or less, in the better eye meeting the stricter "legal blindness" threshold in more advanced cases' },
      { area: 'Retina', finding: 'Findings specific to the underlying causative disease (e.g., macular drusen/atrophy or neovascularization in AMD, diabetic retinopathy changes, bone-spicule pigmentation in retinitis pigmentosa)' },
      { area: 'Optic Nerve', finding: 'Glaucomatous cupping with corresponding field loss, or pallor/atrophy in optic neuropathy, depending on the underlying cause' },
    ],
    differentialDiagnosis: [
      { disease: 'Uncorrected or under-corrected refractive error', whySimilar: 'Reduced presenting visual acuity that may initially appear similar to low vision', keyDistinguisher: 'Visual acuity normalizes to a level above the low vision threshold with accurate refractive correction alone, whereas true low vision persists despite best correction' },
      { disease: 'Cortical visual impairment / cerebral visual impairment', whySimilar: 'Significant functional visual limitation despite a relatively unremarkable anterior eye exam in some cases', keyDistinguisher: 'Visual deficit originates from cortical/central nervous system processing rather than the eye or anterior visual pathway itself; typically associated with a history of neurologic injury and requires distinct neurologic/developmental evaluation and rehabilitation strategies' },
      { disease: 'Total blindness (no light perception)', whySimilar: 'Both represent significant visual impairment along the same functional spectrum', keyDistinguisher: 'Low vision patients retain measurable, usable residual vision (light perception through moderate acuity/field), which is the basis for optical and non-optical low vision rehabilitation; total blindness (no light perception) requires a different, non-visual rehabilitative approach' },
    ],
    diagnosticTesting: [
      { name: 'Best-corrected visual acuity testing (standard and low vision-specific charts, e.g., ETDRS)', whyOrdered: 'Establish the degree of visual acuity impairment using best available correction', expectedFinding: 'Acuity worse than 20/70 in the better eye qualifying for low vision; 20/200 or worse in the better eye meeting the legal blindness threshold', contribution: 'Establishes the acuity criterion for low vision classification and guides magnification needs' },
      { name: 'Formal visual field testing (automated perimetry or confrontation, tailored to patient ability)', whyOrdered: 'Quantify the extent of visual field loss, particularly in glaucoma, retinitis pigmentosa, or optic neuropathy', expectedFinding: 'Significant peripheral field constriction, potentially to 20 degrees or less in the better eye', contribution: 'Establishes the field-based criterion for low vision or legal blindness and helps predict functional mobility difficulty' },
      { name: 'Contrast sensitivity testing', whyOrdered: 'Assess functional vision beyond high-contrast acuity, which often correlates better with real-world task difficulty', expectedFinding: 'Reduced contrast sensitivity, which can significantly impair function even when acuity is relatively preserved', contribution: 'Informs the type of non-optical adaptations (lighting, contrast enhancement) most likely to help the patient' },
      { name: 'Functional/low vision evaluation (magnifier trial, reading assessment, task-specific goal assessment)', whyOrdered: 'Identify the patient\'s specific functional goals (reading, mobility, hobbies, employment tasks) and determine what devices/strategies best address them', expectedFinding: 'Variable improvement in task performance with specific optical or electronic aids trialed in the exam', contribution: 'Directly guides the individualized rehabilitation plan, distinguishing the low vision evaluation from a routine acuity-focused eye exam' },
    ],
    diagnosis: {
      criteria: 'Best-corrected visual acuity worse than 20/70 in the better-seeing eye, and/or significant visual field restriction, that cannot be further improved with refractive correction, medical treatment, or surgery; "legal blindness" is a stricter classification typically defined as visual acuity of 20/200 or worse, or a visual field of 20 degrees or less, in the better eye',
      confirmation: 'Confirmed by standardized best-corrected visual acuity and/or visual field testing meeting the defined thresholds, used for functional and rehabilitative classification purposes rather than as a standalone diagnosis',
      classification: 'Classified along a functional severity spectrum (mild/moderate/severe low vision through legal blindness) based on acuity and field criteria, and by the underlying causative disease (e.g., macular disease causing predominantly central acuity loss vs. glaucoma/retinitis pigmentosa causing predominantly peripheral field loss)',
    },
    management: [
      { category: 'First-line treatment', detail: 'Optical low vision devices — handheld and stand magnifiers, high-plus reading spectacles, and telescopic systems for distance tasks — selected based on the patient\'s specific functional goals' },
      { category: 'First-line treatment', detail: 'Non-optical adaptations, including improved and task-appropriate lighting, contrast enhancement (bold-lined paper, high-contrast markers), and large-print materials' },
      { category: 'Second-line treatment', detail: 'Electronic and digital magnification systems (video magnifiers/CCTV, screen magnification and text-to-speech software, smartphone/tablet accessibility features) for patients with more significant functional needs or those requiring extended reading' },
      { category: 'Referral', detail: 'Orientation and mobility training for patients with significant peripheral field loss or acuity loss affecting safe independent travel' },
      { category: 'Referral', detail: 'Coordination with occupational therapy and comprehensive vision rehabilitation services/specialists to address activities of daily living, home safety, and vocational needs; continued management of the underlying causative ocular disease (e.g., AMD, diabetic retinopathy, glaucoma, retinitis pigmentosa, optic neuropathy) with the relevant specialist' },
    ],
    managementProtocol: {
      workup: [
        'Best-corrected visual acuity with low vision-specific charts (e.g., ETDRS) to confirm and quantify the acuity criterion',
        'Formal visual field testing (kinetic perimetry is often preferred over standard static automated perimetry when acuity or fixation is poor) to quantify field loss and its functional implications',
        'Contrast sensitivity testing, which frequently correlates better with real-world task difficulty than acuity alone',
        'Functional/low vision evaluation — magnifier trial, reading assessment, and task-specific goal assessment — to identify the individualized rehabilitation plan',
        'Confirmation that the underlying causative disease has been optimally treated (medically/surgically) before finalizing the rehabilitation plan',
      ],
      initialTreatment:
        'Build an individualized rehabilitation plan around the patient\'s specific functional goals: optical devices (handheld/stand magnifiers, high-plus reading spectacles, telescopic systems) trialed and selected in the exam, combined with non-optical adaptations (task-appropriate lighting, contrast enhancement, large-print materials).',
      followUpSchedule:
        'Follow-up interval is driven jointly by the underlying causative disease\'s own monitoring needs and periodic reassessment of functional goals and device effectiveness, typically every 6-12 months or sooner if function or the underlying disease changes.',
      escalationCriteria: [
        'Continued functional decline (reading speed/endurance, task performance) despite an appropriately fitted optical device trial',
        'New mobility or safety concerns, particularly with progressive peripheral field loss',
        'Emergence of new functional difficulties not addressed by the current device set',
      ],
      referralCriteria: [
        'Significant peripheral field loss or acuity loss affecting safe independent travel -> orientation and mobility training',
        'Needs beyond optical devices alone (activities of daily living, home safety, vocational needs) -> occupational therapy and comprehensive vision rehabilitation services',
        'Ongoing management of the underlying causative disease (AMD, diabetic retinopathy, glaucoma, retinitis pigmentosa, optic neuropathy) -> continued care with the relevant specialist alongside rehabilitation',
      ],
      complications: [
        'Reduced independence and increased fall/mobility risk, particularly with field loss',
        'Difficulty with medication management and other daily tasks',
        'Psychosocial impact, including risk of depression and social isolation',
      ],
      monitoringParameters: [
        'Functional task performance (reading speed/endurance, mobility safety, task-specific goal achievement)',
        'Device use and effectiveness over time',
        'Status and treatment response of the underlying causative ocular disease',
      ],
      relatedCalculatorIds: ['equivalent-viewing-power', 'required-magnification-print-size', 'low-vision-magnification', 'telescope-magnification'],
      relatedExamTechniqueIds: ['goldmann-kinetic-perimetry', 'contrast-sensitivity-testing'],
    },
    followUp: {
      typical: 'Follow-up scheduled around both the underlying causative disease\'s monitoring needs and periodic reassessment of functional goals and device effectiveness as needs or vision change',
      monitor: 'Functional task performance (reading speed/endurance, mobility safety, task-specific goal achievement), device use and effectiveness, and status of the underlying causative ocular disease',
      progression: 'Further decline in acuity or field from the underlying disease, or emerging new functional difficulties, should prompt reassessment of the rehabilitation plan and device needs',
    },
    prognosis: {
      typicalCourse: 'Variable and dependent on the underlying causative disease and its own natural history and treatability; low vision rehabilitation itself focuses on maximizing function with remaining vision rather than altering the disease course',
      progressionRisk: 'Progression risk is tied to the underlying causative condition (e.g., continued AMD, glaucoma, or diabetic retinopathy progression) rather than to low vision as a classification itself',
      complications: 'Reduced independence, increased fall/mobility risk with field loss, difficulty with medication management and other daily tasks, and psychosocial impact including risk of depression and social isolation',
      visualPrognosis: 'Comprehensive low vision rehabilitation meaningfully improves functional independence and quality of life even when the underlying visual acuity or field deficit itself cannot be medically or surgically improved further',
    },
    clinicalPearls: [
      'A low vision evaluation is fundamentally different from a routine comprehensive eye exam — it centers on the patient\'s specific functional goals (reading a specific font size, seeing well enough to cook safely, resuming a hobby) rather than purely on visual acuity numbers.',
      'Low vision is a functional/rehabilitative classification, not a diagnosis in itself — always identify and continue to manage the underlying causative disease (e.g., AMD, diabetic retinopathy, retinitis pigmentosa, glaucoma, optic atrophy/neuropathy) alongside rehabilitative care.',
      '"Legal blindness" (typically 20/200 or worse, or a visual field of 20 degrees or less, in the better eye) is a distinct and stricter threshold than the broader low vision classification (worse than 20/70) — the two terms are not interchangeable.',
      'Central vision loss (macular disease) and peripheral field loss (glaucoma, retinitis pigmentosa) create different functional challenges — reading/face recognition versus mobility/orientation — and should guide which optical and non-optical strategies are prioritized.',
      'Contrast sensitivity and functional task performance often correlate better with a patient\'s real-world difficulty than the Snellen acuity number alone, which is why functional/task-based testing is central to the low vision evaluation.',
    ],
    highYield: [
      'Functional/rehabilitative classification, not a diagnosis: best-corrected visual acuity worse than 20/70 in the better eye and/or significant visual field restriction',
      '"Legal blindness" is a stricter threshold: 20/200 or worse, or visual field of 20 degrees or less, in the better eye',
      'Leading causes vary by age group: AMD, diabetic retinopathy, and glaucoma are leading causes in older adults; retinitis pigmentosa and other inherited retinal dystrophies and optic neuropathies are important causes in children/younger adults',
      'Management spans optical devices (magnifiers, telescopes), non-optical adaptations (lighting, contrast, large print), electronic/digital magnification and text-to-speech technology, and orientation and mobility training',
      'Low vision rehabilitation is coordinated with occupational therapy and vision rehabilitation specialists and focuses on the patient\'s specific functional goals, distinguishing it from a routine acuity-focused eye exam',
    ],
  },
]
