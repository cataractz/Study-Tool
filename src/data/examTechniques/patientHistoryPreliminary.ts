import type { ExamTechnique } from '../../types/examTechnique'

export const patientHistoryPreliminaryTechniques: ExamTechnique[] = [
  {
    id: 'case-history-taking',
    name: 'Case History Taking',
    aliases: ['Patient history', 'Ocular and medical history intake'],
    category: 'Patient History & Preliminary Exam',
    section: 'History',
    purpose:
      'A structured interview that establishes the chief complaint and history of present illness, and gathers the ocular, medical, family, and social background needed to generate a differential diagnosis, select appropriate testing, and identify contraindications (e.g. to dilation or specific medications) before the physical exam begins.',
    clinicalIndications: [
      'Every comprehensive, routine follow-up, and urgent/emergent eye examination',
      'Any visit where a new symptom, injury, or change in vision is reported',
      'Pre-procedure visits (e.g. before dilation, contact lens fitting, or refractive/cataract surgery consultation) to screen for contraindications',
    ],
    equipment: ['Patient intake/history form or electronic health record template', 'Current medication and allergy list'],
    patientPreparation: [
      'Conducted before instruments touch the patient; ensure privacy and, if needed, a professional interpreter rather than a family member for sensitive history',
    ],
    technique: [
      "Elicit the chief complaint in the patient's own words, then characterize it using a symptom framework (e.g. OPQRST/OLDCARTS: onset, location/laterality, duration, character, aggravating/relieving factors, associated symptoms, timing, severity)",
      "Ask specifically about vision-threatening \"red flag\" symptoms even if not volunteered: sudden vision loss, flashes/floaters, curtain/shadow in the field, new diplopia, eye pain with photophobia, and (in older patients) jaw claudication, scalp tenderness, or headache",
      'Review ocular history: last eye exam, current spectacle/contact lens correction and wear schedule, prior ocular surgery or trauma, history of amblyopia/strabismus, and any diagnosed eye disease and its treatment',
      'Review medical history and review of systems relevant to the eye (diabetes, hypertension, thyroid disease, autoimmune/rheumatologic disease, neurologic symptoms)',
      'Compile a complete current medication list (prescription, over-the-counter, and supplements) and document all drug and environmental allergies, including the specific reaction',
      'Take family ocular history (glaucoma, macular degeneration, retinal detachment, strabismus/amblyopia) and family general medical history (diabetes, hypertension)',
      'Take social/vocational history: occupation and visual demands, hobbies, tobacco/alcohol/recreational drug use, and driving status',
      'Summarize the history back to the patient to confirm accuracy and ask if anything was missed before proceeding to testing',
    ],
    normalFindings: [
      'Non-contributory history: no active visual or ocular complaints, unremarkable past ocular/medical history, no red-flag symptoms, and a medication/allergy list with no ocular relevance',
    ],
    abnormalFindings: [
      'Positive red-flag symptoms (sudden vision loss, flashes/floaters/curtain, new diplopia, painful red eye) warranting same-day evaluation',
      'Medication history revealing drugs with known ocular side effects or that affect exam planning (e.g. hydroxychloroquine, tamoxifen, amiodarone, isotretinoin, systemic or topical corticosteroids, anticoagulants before intraocular procedures)',
      'Family or personal history that changes pretest probability and testing plan (e.g. family history of glaucoma warranting earlier/more frequent IOP and optic nerve assessment)',
    ],
    interpretation:
      "The history sets the pretest probability for the rest of the exam and directs which special tests are indicated — it is not a passive formality. A history positive for a vision-threatening red flag should escalate the visit's urgency and testing sequence regardless of what is found on entrance testing. Medication reconciliation specifically should inform both interpretation of exam findings (e.g. topiramate-associated angle closure, corticosteroid-associated IOP elevation) and choices later in the visit (e.g. deferring dilation pending further workup, or flagging the need for retinal toxicity screening).",
    clinicalPearls: [
      'Start with open-ended questions ("What brings you in today?") before narrowing to focused, closed-ended questions — leading questions early can bias the reported symptom.',
      'Always ask about hydroxychloroquine and tamoxifen use specifically, since patients frequently do not think to volunteer long-term systemic medications as "eye-related."',
      'Screen for red-flag symptoms with the same explicit checklist every visit, even in routine/asymptomatic exams — patients often under-report transient symptoms (e.g. a flash a week ago) unless asked directly.',
      'Document a negative history as explicitly as a positive one (e.g. "denies flashes, floaters, curtain, diplopia") — this protects both the differential and the medical-legal record.',
    ],
    commonErrors: [
      'Asking leading or closed-ended questions first, which can suppress spontaneous reporting of the actual chief complaint',
      'Failing to obtain a complete medication and allergy list, missing drugs relevant to ocular findings or dilation safety',
      'Not asking about laterality, onset, and time course, which are often the details that most narrow the differential diagnosis',
      'Treating history-taking as a one-time checklist rather than updating it at every visit, missing new interval symptoms or medication changes',
    ],
    references: [
      'American Optometric Association. Evidence-Based Clinical Practice Guideline: Comprehensive Adult Eye and Vision Examination, 2nd ed. St. Louis, MO: AOA; 2015 (updated).',
      'Elliott DB, ed. Clinical Procedures in Primary Eye Care. 5th ed. Elsevier; 2021 — case history chapter.',
      'Grosvenor T. Primary Care Optometry. 5th ed. Butterworth-Heinemann; 2007 — patient history chapter.',
    ],
  },
  {
    id: 'distance-visual-acuity-testing',
    name: 'Distance Visual Acuity Testing (Snellen / LogMAR / ETDRS)',
    aliases: ['Distance VA', 'Snellen acuity testing', 'LogMAR acuity testing', 'ETDRS acuity testing'],
    category: 'Patient History & Preliminary Exam',
    section: 'Visual Acuity',
    purpose:
      "Quantifies the smallest resolvable optotype at distance for each eye, giving a reproducible baseline measure of the visual system's resolving power used to screen for and monitor refractive error and ocular/neurologic disease.",
    clinicalIndications: [
      'Performed at every comprehensive, routine, and problem-focused visit as a core vital sign of the eye',
      'Monitoring disease progression or treatment response (e.g. diabetic macular edema, glaucoma, cataract)',
      'Legal, occupational, and licensing (e.g. driver\'s license) certification',
      'Standardized outcome measure (ETDRS protocol) in clinical trials and research',
    ],
    equipment: [
      'Snellen or logMAR chart (projected, printed, or electronic) calibrated for the test distance used',
      'ETDRS chart in a standardized retro-illuminated cabinet, where precision letter-by-letter scoring is required',
      'Occluder',
      "Patient's habitual distance spectacle or contact lens correction (or trial frame with current Rx)",
    ],
    patientPreparation: [
      'Seat the patient at the standardized test distance for the chart in use — traditionally 20 ft (6 m) for Snellen projector charts, or 4 m for standard ETDRS charts (shortened to 2 m or less if the largest optotype cannot be identified, with the result mathematically corrected for the shorter distance)',
      'Test with the patient\'s current habitual correction in place first (recorded as "cc"), then uncorrected or with pinhole as indicated ("sc")',
      'Occlude one eye without applying pressure to the globe; test the right eye, then the left eye, then both eyes together, per the practice\'s convention',
    ],
    technique: [
      'Present the chart at the standardized distance and confirm adequate, consistent room/chart illumination',
      'With one eye occluded, ask the patient to read the smallest line of optotypes they can identify, encouraging them to guess at the limit of resolution rather than stopping at the first uncertain letter',
      'Record the smallest complete line at which the majority of letters are read correctly; note any letters missed (e.g. 20/25-2) or extra letters read correctly on the next line (e.g. 20/20+1)',
      'For ETDRS protocol, score by total letters read correctly across the whole chart (each letter = 0.02 logMAR) rather than by "the smallest line," which yields a continuous, more precise and more reproducible score',
      'Repeat for the fellow eye, then binocularly if indicated',
      'Record chart type, test distance, correction status (sc/cc), and whether pinhole was subsequently used',
    ],
    normalFindings: [
      'Snellen 20/20 (6/6) or better in each eye is the conventional benchmark for normal adult acuity, though normal population acuity is often slightly better than 20/20 and expected acuity varies with age (e.g. normative values are lower in infants and very young children, and in the oldest adults)',
      'LogMAR 0.0 or better (more negative) corresponds to Snellen 20/20 or better',
    ],
    abnormalFindings: [
      'Reduced acuity not correctable by pinhole or refraction, suggesting a non-refractive (ocular or neurologic) cause',
      'Acuity that fails to improve, or worsens, over serial visits despite stable refractive correction',
      'Marked interocular difference in acuity, which raises suspicion for amblyopia, unilateral pathology, or a non-organic (functional) component',
    ],
    interpretation:
      "Distance VA is a screening measure of the eye's resolving power, not a diagnosis — reduced VA must be worked up with pinhole testing, refraction, and the rest of the exam to localize the cause to refractive error versus ocular or neurologic pathology. LogMAR-based scoring (and ETDRS letter scoring in particular) is preferred over Snellen for research and precise longitudinal monitoring because each optotype size step is an equal 0.1 log-unit (25%) change and each chart line carries an equal number of letters, giving it superior test-retest reliability and making differences between visits statistically interpretable in a way traditional Snellen letter-per-line charts (unequal letters per line, uneven size progression) do not support as well.",
    associatedConditionIds: ['cataract', 'diabetic-retinopathy', 'amblyopia'],
    clinicalPearls: [
      'Always record test distance, correction status (sc/cc), and pinhole result alongside the acuity value — "20/40" alone is an incomplete, non-reproducible record.',
      "Encourage patients to guess rather than refuse at threshold; forced-choice guessing (standard on ETDRS protocol) reduces the effect of patient caution on the recorded acuity.",
      'For research or when tracking small changes over time (e.g. in a clinical trial or after treatment), use ETDRS letter scoring rather than "which line" Snellen recording — it is far more sensitive to real change.',
      'A drop of more than 2 lines of Snellen acuity, or a substantial ETDRS letter-score decline, between visits should be actively investigated rather than assumed to be test variability.',
    ],
    commonErrors: [
      'Testing at an uncalibrated or unconfirmed distance (e.g. a projector chart not verified against room length, or a mirror-reversed setup), which invalidates the recorded acuity',
      'Allowing squinting, which pinholes the eye and can artificially improve measured acuity in uncorrected refractive error',
      'Recording only the line read rather than noting letters missed/added, losing the granularity needed to detect small interval change',
      'Failing to test with the current habitual correction in place before assessing uncorrected or pinhole acuity, losing the clinically relevant baseline',
    ],
    limitations: [
      'Traditional Snellen charts have an uneven number of letters per line and unequal size progression between lines, limiting their statistical precision compared to logMAR/ETDRS design',
      'Crowding phenomena (contour interaction) can make single-optotype or poorly spaced charts overestimate acuity, particularly relevant in amblyopia assessment',
      'Standard visual acuity testing does not assess contrast sensitivity, color vision, or visual field — a normal VA does not exclude significant disease affecting those functions',
    ],
    relatedCalculatorIds: ['visual-acuity-converter'],
    references: [
      'Ferris FL 3rd, Kassoff A, Bresnick GH, Bailey I. New visual acuity charts for clinical research. Am J Ophthalmol. 1982;94(1):91-6. (Original ETDRS chart design; 4 m letter-score-to-logMAR formula: logMAR = 1.1 − 0.02 × letters read.)',
      'Beck RW, Moke PS, Turpin AH, et al. A computerized method of visual acuity testing: adaptation of the early treatment of diabetic retinopathy study testing protocol. Am J Ophthalmol. 2003;135(2):194-205. (Commonly cited 1 m letter-score-to-logMAR formula: logMAR = 1.7 − 0.02 × letters read.)',
      'Elliott DB. The good (logMAR), the bad (Snellen) and the ugly (BCVA, number of letters read) of visual acuity measurement. Ophthalmic Physiol Opt. 2016;36(4):355-8.',
      'American Optometric Association. Evidence-Based Clinical Practice Guideline: Comprehensive Adult Eye and Vision Examination, 2nd ed. St. Louis, MO: AOA; 2015 (updated).',
    ],
  },
  {
    id: 'near-visual-acuity-testing',
    name: 'Near Visual Acuity Testing',
    aliases: ['Near VA', 'Reading acuity testing'],
    category: 'Patient History & Preliminary Exam',
    section: 'Visual Acuity',
    purpose:
      "Measures resolving power at a standardized reading distance, assessing the combined effect of refractive status, accommodation, and near-vision-relevant ocular disease (e.g. macular pathology) on functional reading vision.",
    clinicalIndications: [
      'Every comprehensive eye examination, alongside distance acuity',
      'Presbyopia evaluation and add-power determination',
      'Assessment of functional reading vision in macular disease (e.g. age-related macular degeneration, diabetic macular edema)',
      'Low vision evaluation, where near acuity often drives magnification prescribing decisions',
    ],
    equipment: [
      'Standardized near card (e.g. reduced Snellen/logMAR near card, Rosenbaum card, or continuous-text reading card) with Snellen-equivalent, M-unit, and/or Jaeger (J) notation',
      'Near point rod or tape measure to confirm test distance',
      'Occluder',
      "Patient's habitual near or reading correction",
    ],
    patientPreparation: [
      'Have the patient wear their habitual near/reading correction (or an appropriate trial add for their age if none is worn) and adequate, glare-free illumination on the card',
      'Hold or position the card at the distance specified on the card — most commonly 40 cm (16 in), though some cards specify 35-36 cm — and confirm the actual distance with a tape measure or near point rod rather than assuming it',
    ],
    technique: [
      'Occlude one eye and present the near card at the specified, measured test distance',
      'Ask the patient to read the smallest line of print they can identify, encouraging them to attempt the smallest lines rather than stop early',
      'Record the smallest line read correctly using the notation printed on the card (reduced Snellen, M-unit, and/or Jaeger), along with the exact test distance used',
      'Repeat for the fellow eye, then binocularly if indicated',
      'If testing with a trial add for presbyopia, note the add power used alongside the acuity result',
    ],
    normalFindings: [
      'Near acuity of 20/20 (or J1/J1+, or 0.4M, depending on the card notation in use) at the specified test distance, appropriate for age and correction',
    ],
    abnormalFindings: [
      'Near acuity reduced out of proportion to distance acuity, which raises suspicion for uncorrected/undercorrected presbyopia, accommodative insufficiency, or macular pathology',
      'Near acuity that does not improve with an appropriate add, particularly when accompanied by metamorphopsia or a central scotoma on Amsler grid, suggesting macular disease rather than a purely refractive/accommodative cause',
    ],
    interpretation:
      'Near VA should be interpreted alongside distance VA, refractive status, and accommodative amplitude: a discrepancy where near acuity is disproportionately worse than distance acuity (after accounting for a correct add) points toward macular or accommodative pathology rather than pure ametropia. Because near VA depends on test distance, the recorded value is only meaningful if the actual working distance is documented — a card read at other than its specified distance must be corrected or explicitly re-labeled.',
    clinicalPearls: [
      'Always confirm and record the actual test distance rather than assuming the patient is holding the card exactly at the printed distance — patients commonly move the card closer or farther, especially with reduced acuity.',
      'Jaeger (J) notation is not standardized across manufacturers or print sizes — a given J-number on one card is not guaranteed to equal the same J-number on another, so M-unit or reduced-Snellen notation is preferred for comparisons across visits or providers.',
      'Testing near acuity with pinhole, similar to distance testing, can help separate refractive/accommodative causes of reduced near vision from macular or neural causes.',
    ],
    commonErrors: [
      'Failing to measure and record the actual test distance, making the recorded near acuity non-reproducible',
      'Testing near vision without the patient\'s appropriate add or habitual near correction in place, conflating uncorrected presbyopia with a distinct near-vision problem',
      'Relying on Jaeger notation alone across visits or providers, given its lack of standardization',
    ],
    limitations: [
      'Reading/near cards are not standardized to the same rigor as ETDRS distance charts, so precise interocular or interval comparisons are less reliable than with a logMAR distance protocol',
      'Continuous-text reading cards are also influenced by reading speed, literacy, and cognitive factors, which can confound a pure acuity measurement — single-optotype or isolated-line cards better isolate resolving power',
    ],
    references: [
      'Elliott DB, ed. Clinical Procedures in Primary Eye Care. 5th ed. Elsevier; 2021 — near visual acuity chapter.',
      'Legge GE. Reading and low vision. In: Chalupa LM, Werner JS, eds. The Visual Neurosciences. MIT Press; 2004 (near/reading acuity notation and measurement principles).',
      'American Academy of Ophthalmology. Basic and Clinical Science Course, Section 3: Clinical Optics — near visual acuity measurement and notation systems (M-units, Jaeger, reduced Snellen).',
    ],
  },
  {
    id: 'pinhole-visual-acuity-testing',
    name: 'Pinhole Visual Acuity Testing',
    aliases: ['Pinhole test', 'PH acuity'],
    category: 'Patient History & Preliminary Exam',
    section: 'Visual Acuity',
    purpose:
      "A rapid, refraction-free screening test that estimates a patient's best-correctable visual acuity by eliminating uncorrected refractive blur, helping distinguish reduced acuity due to refractive error from acuity loss due to ocular or neural pathology.",
    clinicalIndications: [
      'Any patient presenting with reduced distance (or near) visual acuity, to determine whether refraction is likely to improve it',
      'Quick estimate of best-corrected acuity when a full manifest refraction cannot be performed immediately',
      'Preoperative or urgent-care triage to gauge whether reduced vision is refractive versus pathologic in origin',
    ],
    equipment: [
      'Pinhole occluder — single-aperture (commonly ~1.2 mm) or multiple-pinhole design',
      'Distance (and/or near) acuity chart',
    ],
    patientPreparation: ['Test with the patient\'s current habitual correction in place if worn, since pinhole is meant to reveal residual improvable blur, not replace a full refraction'],
    technique: [
      'With the patient wearing their current correction (if any), have them view the acuity chart with one eye occluded',
      'Place the pinhole occluder in front of the eye being tested and have the patient position it to find the optimal viewing aperture, which may require slight adjustment',
      'Re-test the smallest line of acuity the patient can now read through the pinhole',
      'Record the pinhole acuity distinctly from the unaided/corrected acuity (e.g. "20/60, PH 20/25")',
      'Repeat for the fellow eye',
    ],
    normalFindings: [
      'Pinhole acuity improves to at or near the eye\'s true best-corrected acuity when reduced vision is due to uncorrected/undercorrected refractive error',
    ],
    abnormalFindings: [
      'No improvement, or only partial improvement, with pinhole in the setting of reduced acuity, suggesting a non-refractive cause such as media opacity (e.g. cataract, corneal scarring), macular or retinal disease, optic nerve disease, or amblyopia',
      'Pinhole acuity that is actually worse than unaided acuity, which can occur with significant media opacity, severe dry eye, or an improperly centered/very small aperture causing excessive diffraction',
    ],
    interpretation:
      "A pinhole that substantially improves acuity supports a primarily refractive cause and predicts that a manifest refraction will recover most of the lost acuity. A pinhole that fails to improve acuity does not by itself localize the pathology — it only indicates that the deficit is not purely refractive — and should prompt further workup (media, retina, optic nerve, and neuro-ophthalmic assessment) rather than being read as a specific diagnosis. Amblyopia is a notable exception where pinhole acuity classically shows little to no improvement despite the absence of visible organic pathology.",
    associatedConditionIds: ['cataract', 'amblyopia'],
    clinicalPearls: [
      'Test with any habitual correction already in place — pinhole estimates whether further correction (not correction from zero) would help, so testing an aphakic or highly ametropic eye without any correction can give a falsely poor result.',
      'Allow the patient to adjust and fine-position the pinhole in front of the eye; a mispositioned aperture can spuriously reduce the measured acuity.',
      'A single-hole pinhole around 1.0-1.75 mm balances reducing blur circles against introducing diffraction; both smaller and larger apertures can degrade the result.',
      'Pinhole not improving vision in a patient with a visually significant cataract on exam is not a contradiction — dense media opacity can genuinely limit pinhole benefit despite being a "correctable" surgical cause.',
    ],
    commonErrors: [
      "Testing pinhole acuity without the patient's habitual correction in place, when refractive error (not just uncorrected astigmatism/sphere) is the actual limiting factor",
      'Concluding that a lack of pinhole improvement excludes a refractive component entirely — high uncorrected astigmatism or a large refractive error can sometimes still show only partial pinhole improvement',
      'Over-interpreting a non-improving pinhole as diagnostic of one specific pathology rather than treating it as a nonspecific signal to investigate further',
    ],
    limitations: [
      'A screening test only — it estimates but does not equal true best-corrected (refracted) acuity, and cannot replace a manifest refraction for final correction',
      'Amblyopic eyes, and eyes with irregular astigmatism (e.g. from keratoconus) or significant media opacity, may show an unpredictable or blunted pinhole response',
    ],
    relatedCalculatorIds: ['visual-acuity-converter'],
    references: [
      'Rosser DA, Murdoch IE, Cousens SN. The effect of optical defocus on the test-retest variability of visual acuity measurements. Invest Ophthalmol Vis Sci. 2004;45(4):1076-9 (pinhole/optical defocus context).',
      'Elliott DB, ed. Clinical Procedures in Primary Eye Care. 5th ed. Elsevier; 2021 — pinhole visual acuity chapter.',
      'Faye EE. The pinhole test and clinical use in low vision and cataract evaluation, as reviewed in standard optometric clinical procedure texts (e.g. Grosvenor, Primary Care Optometry).',
    ],
  },
  {
    id: 'confrontation-visual-fields',
    name: 'Confrontation Visual Field Testing',
    aliases: ['Confrontation fields', 'Finger confrontation testing'],
    category: 'Patient History & Preliminary Exam',
    section: 'Visual Fields',
    purpose:
      "A rapid, instrument-free bedside/chairside screening technique that compares the patient's peripheral visual field to the examiner's own (presumed normal) field, used to detect gross field defects suggestive of retinal, optic nerve, chiasmal, or postchiasmal pathology.",
    clinicalIndications: [
      'Screening component of every comprehensive eye examination',
      'Suspected neurologic disease affecting the visual pathway (e.g. stroke, intracranial mass, elevated intracranial pressure)',
      'Suspected optic nerve or advanced glaucomatous field loss when formal perimetry is not immediately available',
      'Rapid triage in urgent settings (e.g. acute vision change, head trauma) before or alongside formal automated perimetry',
    ],
    equipment: ['Examiner\'s own hands/fingers', 'Optional: red target (e.g. red cap of a mydriatic bottle or red pin) for kinetic red-target testing', 'Occluder'],
    patientPreparation: ['Position the examiner directly facing the patient at arm\'s length (roughly 1 m), with the patient\'s uninvolved/fellow eye occluded and the tested eye fixated on the examiner\'s eye or nose throughout'],
    technique: [
      "Sit or stand facing the patient at about 1 m, eye-to-eye, with the patient's fellow eye occluded and the examiner's own opposite eye closed (each of the examiner's eyes is used to roughly match the corresponding half of the patient's field)",
      "Instruct the patient to fixate steadily on the examiner's eye or nose without looking directly at the moving target",
      'Static finger-counting: present a variable number of fingers in each of the four quadrants roughly midway between examiner and patient, and ask the patient to state the number seen',
      'Kinetic finger-wiggle: bring a wiggling finger in from the periphery (outside the presumed field boundary) toward fixation in each quadrant, asking the patient to say "now" the moment it is first seen',
      'For subtler defects, a small red target can be moved from periphery toward center and the patient asked when the color (not just movement) is first appreciated, or bisected/compared for desaturation between quadrants — kinetic testing with a red target has been shown to be more sensitive than finger-based methods',
      'Compare the patient\'s reported boundary or count to the examiner\'s own normal field in the corresponding quadrant, and repeat for the fellow eye',
      'For suspected extinction/neglect, test each side individually first, then present bilateral simultaneous stimuli to check for extinction of one side',
    ],
    normalFindings: [
      'Patient identifies finger counts and finger/target boundaries in all four quadrants at approximately the same eccentricity as the examiner\'s own (presumed normal) field, with no simultaneous extinction',
    ],
    abnormalFindings: [
      'A quadrant or hemifield in which the patient counts fingers incorrectly, fails to see the target until it is well within the boundary the examiner sees it, or does not perceive it at all',
      'A respected vertical midline (suggesting a chiasmal or postchiasmal lesion) versus a defect that crosses the vertical midline (more suggestive of a prechiasmal, retinal, or optic nerve cause)',
      'Extinction of a stimulus on one side only when stimuli are presented bilaterally and simultaneously, despite normal detection when tested individually — suggestive of a parietal lobe (neglect) lesion',
    ],
    interpretation:
      "Confrontation fields are highly specific but poorly sensitive: published estimates put static finger counting at roughly 25-35% sensitivity with specificity near 99-100%, while kinetic red-target testing raises sensitivity to roughly 70-75% with specificity around 90-93%. In practice this means a well-performed confrontation field that detects a defect is very likely to represent a true defect, but a normal confrontation field does not reliably exclude mild-to-moderate field loss and should not be used to defer formal automated or Goldmann perimetry when there is clinical suspicion (e.g. glaucoma follow-up, neurologic symptoms).",
    associatedConditionIds: ['homonymous-hemianopia', 'papilledema', 'primary-open-angle-glaucoma'],
    clinicalPearls: [
      'Use a kinetic red target rather than static finger counting whenever sensitivity matters (e.g. neuro-ophthalmic screening) — it is the single most sensitive confrontation technique studied.',
      'A field defect that respects the vertical midline localizes the lesion to the chiasm or posterior visual pathway; a defect that does not respect the vertical midline is more suggestive of prechiasmal (retinal/optic nerve) disease.',
      'Test for extinction with bilateral simultaneous stimulation specifically when a parietal lesion (e.g. stroke, neglect) is suspected — extinction can be missed if each side is only tested in isolation.',
      'Any positive or equivocal confrontation field finding should be confirmed with formal perimetry — confrontation is a triage/screening step, not a substitute for automated or manual perimetry.',
    ],
    commonErrors: [
      'Failing to have the patient maintain fixation, allowing them to track the moving target directly and artificially "find" it',
      'Presenting the target too close to the midline between examiner and patient rather than genuinely comparing the patient\'s field to the examiner\'s own boundary',
      'Relying solely on static finger counting, which has documented low sensitivity, when a more sensitive kinetic technique is warranted by clinical suspicion',
      'Over-reading a normal confrontation field as excluding significant field loss, given its limited sensitivity for anything less than a moderate-to-dense defect',
    ],
    limitations: [
      'Relatively insensitive to mild, patchy, or early field loss (e.g. early glaucomatous defects) — designed to catch moderate-to-dense defects, not replace quantitative perimetry',
      'Assumes the examiner\'s own visual field is normal and uses it as the comparison standard, which is only a rough approximation',
      'Cannot generate a quantitative, reproducible plot for longitudinal monitoring the way automated perimetry can',
    ],
    references: [
      'Kerr NM, Chew SS, Eady EK, Gamble GD, Danesh-Meyer HV. Diagnostic accuracy of confrontation visual field tests. Neurology. 2010;74(15):1184-90.',
      'Pandit RJ, Gales K, Griffiths PG. Effectiveness of testing visual fields by confrontation. Lancet. 2001;358(9290):1339-40.',
      'Moran CORE (University of Utah). Performing the Confrontational Visual Field Exam. Basic Ophthalmology Review — Neuro-Ophthalmology.',
    ],
  },
  {
    id: 'ishihara-color-vision-screening',
    name: 'Ishihara Color Vision Screening',
    aliases: ['Ishihara test', 'Ishihara plates', 'Color vision screening'],
    category: 'Patient History & Preliminary Exam',
    section: 'Color Vision',
    purpose:
      "A rapid pseudoisochromatic-plate screening test for congenital red-green color vision deficiency, and a nonspecific screen for acquired color vision loss (e.g. from optic nerve or macular disease), used to identify patients who need further color vision or ophthalmic workup.",
    clinicalIndications: [
      'Routine screening component of comprehensive eye exams, particularly in children (school/vocational screening) and at occupational/licensing exams requiring normal color vision',
      'Suspected acquired color vision defect from optic neuropathy (e.g. optic neuritis, compressive or toxic/nutritional optic neuropathy) or macular disease',
      'Baseline and monitoring for medications with known color vision toxicity (e.g. ethambutol, hydroxychloroquine at advanced stages)',
      'Family history of congenital color vision deficiency, or a patient-reported difficulty distinguishing colors',
    ],
    equipment: [
      'Ishihara pseudoisochromatic plate set (commonly the 38-plate or 24-plate editions)',
      'Standardized, color-balanced (daylight-equivalent, e.g. ~ Illuminant C/D65) illumination',
      'Occluder',
    ],
    patientPreparation: ['Test each eye separately with habitual correction in place, under standardized daylight-type illumination, holding plates roughly 75 cm from the patient at a right angle to the line of sight'],
    technique: [
      'Present each plate under standardized illumination at approximately 75 cm, perpendicular to the patient\'s line of sight',
      'Ask the patient to identify the number (or trace the winding path, for plates designed for non-verbal/pre-literate patients) within about 3 seconds per plate',
      'Test one eye at a time with the fellow eye occluded, then proceed through the full plate set used (e.g. the first 21 numbered plates plus the demonstration plate in the 24-plate edition, or a specified subset of the 38-plate edition per the protocol in use)',
      'Score correct versus incorrect responses per plate against the manufacturer\'s answer key, noting whether errors cluster on red-green designed plates',
      'Refer any failed screening for definitive color vision testing (e.g. Farnsworth D-15, anomaloscope) to characterize the type and severity of the deficiency',
    ],
    normalFindings: [
      'Correct identification of all (or the pass-threshold number of) plates in the set used, consistent with normal color vision — exact pass criteria are protocol- and edition-specific (e.g. commonly cited criteria include reading the first 15 plates correctly on the 38-plate edition, or a specified minimum number correct on designated plates in the 24-plate edition, depending on the screening context/standard applied)',
    ],
    abnormalFindings: [
      'Multiple errors, particularly clustered on plates specifically designed to isolate red-green confusion, suggesting a red-green color vision deficiency (protan or deutan type)',
      'A pattern of diffuse errors not specific to red-green plates, which raises concern for an acquired defect (e.g. blue-yellow loss in early optic neuropathy or macular disease) rather than classic congenital red-green deficiency, and warrants dedicated acquired-defect testing',
    ],
    interpretation:
      "Ishihara plates are a screening tool optimized for red-green deficiency, not a comprehensive test of all color vision axes — a normal Ishihara result does not exclude a blue-yellow (tritan) defect, which is more typical of acquired disease such as early optic neuropathy or outer retinal/macular pathology. A failed screen should prompt further characterization with a more comprehensive instrument (Farnsworth D-15 or D-100, or an anomaloscope for definitive congenital red-green diagnosis) and correlation with the rest of the history and exam to distinguish a lifelong congenital deficiency from a new acquired one, since acquired color vision loss can be an early or isolated sign of optic nerve or macular disease.",
    associatedConditionIds: ['optic-neuritis', 'retinitis-pigmentosa'],
    clinicalPearls: [
      'Ask whether the patient has ever been told they have a color vision problem, and whether it is lifelong (congenital) or new — this single history question does much of the localizing work Ishihara plates cannot do alone.',
      'Congenital red-green deficiency is stable, bilateral, and symmetric between the eyes; an asymmetric or unilateral result on Ishihara testing should raise suspicion for an acquired, unilateral cause (e.g. unilateral optic neuropathy) rather than a congenital defect.',
      "Standardized (daylight-equivalent) illumination matters — testing under poor or non-standard lighting can produce false-positive errors even in patients with normal color vision.",
      'Ishihara plates primarily probe the red-green axis; when blue-yellow (tritan) loss is specifically suspected, use a test designed to assess that axis rather than relying on a normal Ishihara result to reassure.',
    ],
    commonErrors: [
      'Testing under non-standardized or dim lighting, which can distort plate colors and produce spurious errors',
      'Failing to test each eye separately, missing a unilateral/asymmetric acquired defect that would be diagnostically significant',
      'Treating any Ishihara failure as automatically congenital, without asking about onset/laterality or considering acquired causes',
      'Using Ishihara results alone to characterize the type or severity of a color vision deficiency rather than referring for a dedicated confirmatory test',
    ],
    limitations: [
      'Screens primarily for red-green deficiency; it is not designed to reliably detect blue-yellow (tritan) defects',
      'A screening tool only — it does not grade severity or definitively classify deficiency type (protan vs deutan, or mild vs severe), which requires an anomaloscope or Farnsworth-type test',
      'Pass/fail criteria vary by plate edition and by the standard applied (e.g. clinical screening vs. occupational/aviation certification), so results should always be reported alongside the specific plate set and criterion used',
    ],
    references: [
      'Ishihara S. Ishihara\'s Tests for Colour Deficiency. Kanehara Trading (current 38-plate and 24-plate editions).',
      'Birch J. Diagnosis of Defective Colour Vision. 2nd ed. Butterworth-Heinemann; 2001 — Ishihara plate design, scoring, and limitations.',
      'Cole BL. The handicap of abnormal colour vision. Clin Exp Optom. 2004;87(4-5):258-75 (screening use and limitations of pseudoisochromatic plates, including axis specificity).',
    ],
  },
  {
    id: 'stereoacuity-testing',
    name: 'Stereoacuity Testing (Titmus / Randot)',
    aliases: ['Stereopsis testing', 'Titmus stereo test', 'Randot stereo test', 'Stereo fly test'],
    category: 'Patient History & Preliminary Exam',
    section: 'Binocularity & Depth Perception',
    purpose:
      'Quantifies fine binocular depth perception (stereopsis) using polarized, disparity-based targets, providing an objective functional measure of binocular vision that is reduced or absent in strabismus, amblyopia, and other conditions that disrupt binocular fusion.',
    clinicalIndications: [
      'Routine binocular vision screening as part of pediatric and comprehensive eye examinations',
      'Evaluation and monitoring of strabismus, amblyopia, and other binocular vision anomalies',
      'Pre- and post-treatment assessment (e.g. after strabismus surgery, patching, or vision therapy) to document functional binocular outcome',
      'Vocational and occupational screening where depth perception is required',
    ],
    equipment: [
      'Titmus (Stereo Fly) test book or Randot Stereotest (contour and/or random-dot targets) with matched polarized viewing glasses',
      'Randot Preschool Stereoacuity Test for young/nonverbal children, where applicable',
    ],
    patientPreparation: [
      'Patient wears habitual correction plus the polarized test glasses over it, and is seated at the test\'s specified distance — 40 cm for the standard near Titmus/Randot booklets',
    ],
    technique: [
      'Have the patient don the polarized viewing glasses over their habitual correction and hold/present the test booklet at the specified distance (40 cm for standard near testing)',
      "Titmus: begin with the large \"fly\" target (gross, monocularly-cued disparity, ~3000 arcsec) to confirm gross stereopsis and rule out a spuriously flat/2-D response, then proceed to the graded animal figures (~400-100 arcsec) and circles (~400-40 arcsec), asking the patient to identify which figure/circle in each group appears to stand out in front of the page",
      'Randot: use the random-dot preschool figures for young children (graded 800-40 arcsec) or the graded circle/geometric targets for older children and adults (graded to 20 arcsec), since random-dot targets remove monocularly visible contour cues present in the Titmus circles/animals',
      'Record the finest disparity (in arcsec) at which the patient correctly and consistently identifies the target as closer',
      'Note whether the response was obtained on contour-based (Titmus circles/animals) versus random-dot (Randot) targets, since they are not interchangeable',
    ],
    normalFindings: [
      'Titmus circles: normal stereoacuity is typically reported around 40 arcsec (the finest circle on the standard graded series) in visually normal adults',
      'Randot: graded circle/geometric targets extend finer, to 20 arcsec, with normal young adults commonly achieving stereoacuity in the tens of arcsec range on random-dot testing',
      'Positive response to the gross Titmus fly target (~3000 arcsec) confirms at least coarse stereopsis is present',
    ],
    abnormalFindings: [
      'Reduced stereoacuity (coarser threshold than expected for age) or complete absence of stereopsis (no correct response even to the gross fly target), consistent with disrupted binocular fusion',
      'A discrepancy between a "positive" result on contour-based Titmus targets and a negative/much worse result on random-dot Randot targets, which suggests the patient may be using monocular contour cues rather than true binocular disparity — a recognized limitation of the Titmus circles/animals design',
    ],
    interpretation:
      "Absent or markedly reduced stereoacuity supports a disruption of binocular single vision (e.g. manifest strabismus, dense amblyopia, or suppression) and is a useful, objective functional endpoint for monitoring treatment. Because the printed Titmus contour targets carry faint monocularly visible outlines, they can be judged correctly via monocular cues rather than true stereopsis, giving a falsely better result in some patients with suppression — random-dot testing (Randot) is disparity-only and is considered the more rigorous confirmatory test when the two disagree, though it correlates well with Titmus circle results in the finer (better) stereoacuity range and diverges more at coarser (poorer) stereoacuity.",
    associatedConditionIds: ['amblyopia', 'infantile-esotropia', 'intermittent-exotropia', 'accommodative-esotropia'],
    clinicalPearls: [
      'Always start with the large Titmus fly target before the graded figures — a patient who cannot appreciate the grossly disparate fly is unlikely to reliably respond to the finer graded targets, and this also screens for a non-response due to poor cooperation rather than true stereo-blindness.',
      'Remember the Titmus circles/animals can be passed using monocular contour cues alone; when suppression is suspected despite an apparently "good" Titmus result, confirm with random-dot (Randot) testing.',
      'Verify the polarized glasses are correctly oriented and clean — improperly worn or scratched polarizing filters can cross-talk between eyes and give an artificially poor result.',
      'Use the Randot Preschool test (or the animal subtest) for young or pre-verbal children, since the "point to the one that\'s different/closer" forced-choice format is more developmentally appropriate than reading numbers.',
    ],
    commonErrors: [
      'Testing at an incorrect distance (not 40 cm for standard near booklets), which changes the effective retinal disparity and invalidates the graded arcsec values',
      'Relying solely on Titmus circles/animals in a patient with suspected suppression, without confirming with a random-dot target',
      'Not verifying that polarized glasses are correctly seated and oriented, producing a falsely reduced result from cross-talk between the eyes',
      'Skipping the gross fly-target check and proceeding directly to fine graded targets in a young or uncooperative patient, risking a falsely "absent stereopsis" result from poor engagement rather than a true finding',
    ],
    limitations: [
      'Contour-based tests (Titmus circles/animals) are vulnerable to monocular cue use, which can overestimate true stereopsis in patients with suppression',
      'Near stereoacuity testing does not directly assess distance stereopsis, which can be tested separately (e.g. distance Randot) when relevant (e.g. for certain occupational requirements or intermittent exotropia control assessment)',
      'Results depend on cooperation and, in children, developmental readiness — an apparently poor result in a young child may reflect test difficulty rather than true absent stereopsis',
    ],
    references: [
      'Wirt SE. Stereopsis screening for the schoolchild (basis of the original "Wirt circles" used in the Titmus test).',
      'Fawcett SL, Birch EE. Validity of the Titmus and Randot circles tasks in children with known binocular vision disorders. J AAPOS. 2003;7(5):325-31.',
      'Stereo Optical Co. Randot Stereotest and Randot Preschool Stereoacuity Test — manufacturer testing protocols and graded arcsec ranges.',
      'Elliott DB, ed. Clinical Procedures in Primary Eye Care. 5th ed. Elsevier; 2021 — stereoacuity testing chapter.',
    ],
  },
]
