import type { DecisionTree } from '../../types/decisionTree'

const elevatedIop: DecisionTree = {
  id: 'elevated-iop',
  name: 'Elevated Intraocular Pressure',
  aliases: ['High IOP', 'Ocular Hypertension Finding'],
  categories: ['clinical-finding', 'disease-management'],
  summary:
    'Work up an elevated IOP reading through confirmation, gonioscopy, and disc/visual field correlation to open-angle glaucoma, glaucoma suspect, narrow-angle, or secondary glaucoma pathways.',
  startNodeId: 'screen',
  nodes: {
    screen: {
      id: 'screen',
      type: 'question',
      question:
        'Is the elevated IOP accompanied by acute severe pain, halos, nausea/vomiting, a hazy cornea, and a fixed mid-dilated pupil?',
      rationale:
        'This pattern indicates acute angle-closure — a true emergency that needs immediate action rather than routine glaucoma workup.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-yes',
          label: 'Yes — this pattern is present',
          nextNodeId: 'outcome-acute-angle-closure',
          isRedFlag: true,
        },
        { id: 'screen-no', label: 'No — proceed with standard workup', nextNodeId: 'confirm' },
      ],
    },
    confirm: {
      id: 'confirm',
      type: 'question',
      question:
        'Has the elevated reading been confirmed on repeat measurement, accounting for possible artifact (tight lids, breath-holding, very thick or thin cornea)?',
      rationale:
        'A single elevated reading can be a measurement artifact. Central corneal thickness affects the accuracy of applanation tonometry — thin corneas tend to under-read true IOP, thick corneas tend to over-read it — so this should be factored in before committing to a diagnosis.',
      options: [
        { id: 'confirm-yes', label: 'Yes, confirmed and reliable', nextNodeId: 'angle' },
        { id: 'confirm-no', label: 'Not yet confirmed / suspect artifact', nextNodeId: 'outcome-remeasure' },
      ],
    },
    angle: {
      id: 'angle',
      type: 'question',
      question: 'What does gonioscopy show?',
      options: [
        { id: 'angle-open', label: 'Open, normal-appearing angle', nextNodeId: 'open-correlate' },
        {
          id: 'angle-narrow',
          label: 'Narrow or occludable, currently asymptomatic',
          nextNodeId: 'outcome-narrow-angle-suspect',
        },
        {
          id: 'angle-secondary',
          label: 'A secondary finding is present (pigment, pseudoexfoliation material, neovascularization, angle recession, synechiae, inflammation)',
          nextNodeId: 'secondary-cause',
        },
      ],
    },
    'open-correlate': {
      id: 'open-correlate',
      type: 'question',
      question:
        'Is there optic nerve cupping/asymmetry, RNFL thinning on OCT, or a visual field defect that correlates with the IOP elevation?',
      options: [
        { id: 'correlate-yes', label: 'Yes, structural or functional damage is present', nextNodeId: 'outcome-open-angle-glaucoma' },
        { id: 'correlate-no', label: 'No, disc and visual field are normal', nextNodeId: 'outcome-glaucoma-suspect' },
      ],
    },
    'secondary-cause': {
      id: 'secondary-cause',
      type: 'question',
      question: 'Which secondary finding best describes the exam?',
      options: [
        {
          id: 'secondary-pigment',
          label: 'Pigment on corneal endothelium (Krukenberg spindle) or iris transillumination defects',
          nextNodeId: 'outcome-pigmentary-glaucoma',
        },
        {
          id: 'secondary-pxf',
          label: 'Pseudoexfoliation material on the lens capsule or pupil margin',
          nextNodeId: 'outcome-pxf-glaucoma',
        },
        {
          id: 'secondary-nv',
          label: 'Iris or angle neovascularization',
          description: 'Often seen with proliferative diabetic retinopathy or ischemic retinal vein occlusion.',
          nextNodeId: 'outcome-neovascular-glaucoma',
        },
        {
          id: 'secondary-trauma',
          label: 'History of blunt trauma with angle recession on gonioscopy',
          nextNodeId: 'outcome-angle-recession-glaucoma',
        },
        {
          id: 'secondary-inflammation',
          label: 'Active or recent intraocular inflammation (cells/flare, synechiae)',
          nextNodeId: 'outcome-uveitic-glaucoma',
        },
        {
          id: 'secondary-steroid',
          label: 'Recent or current corticosteroid use (topical, intranasal, inhaled, or systemic)',
          nextNodeId: 'outcome-steroid-glaucoma',
        },
      ],
    },

    'outcome-acute-angle-closure': {
      id: 'outcome-acute-angle-closure',
      type: 'outcome',
      title: 'Suspected Acute Angle-Closure',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'primary-angle-closure-glaucoma', whyItFits: 'A markedly elevated IOP with pain, halos, and a mid-dilated fixed pupil increases suspicion for acute angle-closure — begin emergency management now, do not wait for a full workup.' },
      ],
      mustNotMiss: [
        { diseaseId: 'primary-angle-closure-glaucoma', whyItFits: 'Delayed treatment risks irreversible optic nerve and retinal damage within hours.' },
      ],
      recommendedNextSteps: [
        'Begin the acute angle-closure emergency protocol immediately',
        'Confirm mechanism with gonioscopy once the attack is broken',
        'Arrange same-day laser peripheral iridotomy',
      ],
      relatedDiseaseIds: ['primary-angle-closure-glaucoma'],
      relatedDrugIds: ['timolol', 'pilocarpine', 'acetazolamide'],
      relatedExamTechniqueIds: ['gonioscopy', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
      relatedEmergencyProtocolIds: ['acute-angle-closure-crisis-protocol'],
    },
    'outcome-remeasure': {
      id: 'outcome-remeasure',
      type: 'outcome',
      title: 'Unconfirmed Elevated IOP — Repeat Measurement Needed',
      urgency: 'Routine',
      mostLikely: [],
      mustNotMiss: [],
      recommendedNextSteps: [
        'Repeat IOP measurement, ideally at a different time of day and with attention to technique (avoid lid squeezing, breath-holding, excessive applanation force)',
        'Measure central corneal thickness (pachymetry) and interpret the reading in that context',
        'If still elevated on a reliable repeat measurement, proceed with the full angle and optic nerve workup',
      ],
      relatedExamTechniqueIds: ['corneal-pachymetry', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-narrow-angle-suspect': {
      id: 'outcome-narrow-angle-suspect',
      type: 'outcome',
      title: 'Narrow/Occludable Angle — Angle-Closure Suspect',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'primary-angle-closure-glaucoma', whyItFits: 'An occludable angle on gonioscopy, even without an acute attack, increases suspicion for angle-closure disease and warrants prophylactic consideration.' },
      ],
      mustNotMiss: [
        { diseaseId: 'primary-angle-closure-glaucoma', whyItFits: 'An asymptomatic occludable angle can progress to a symptomatic attack — counsel on red-flag symptoms and avoid pupil-dilating medications without appropriate precautions.' },
      ],
      recommendedNextSteps: [
        'Counsel the patient on acute angle-closure symptoms and to seek immediate care if they occur',
        'Refer for consideration of prophylactic laser peripheral iridotomy',
        'Use caution with any pupil-dilating topical or systemic medication until the angle is addressed',
      ],
      relatedDiseaseIds: ['primary-angle-closure-glaucoma'],
      relatedExamTechniqueIds: ['gonioscopy'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-open-angle-glaucoma': {
      id: 'outcome-open-angle-glaucoma',
      type: 'outcome',
      title: 'Primary Open-Angle Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'primary-open-angle-glaucoma', whyItFits: 'Elevated IOP with an open angle and correlating structural (cupping/RNFL) or functional (visual field) damage increases suspicion for primary open-angle glaucoma.' },
      ],
      mustNotMiss: [
        { diseaseId: 'normal-tension-glaucoma', whyItFits: 'If the damage pattern is present but IOP has not actually been markedly elevated on repeated measurement, reconsider whether this represents normal-tension glaucoma rather than a purely pressure-driven process.' },
      ],
      recommendedNextSteps: [
        'Establish a treatment target IOP and begin first-line topical therapy',
        'Baseline and serial OCT RNFL/GCC imaging and visual field testing to monitor progression',
        'Assess risk factors (family history, CCT, age, race/ethnicity) to guide monitoring interval',
      ],
      relatedDiseaseIds: ['primary-open-angle-glaucoma', 'normal-tension-glaucoma'],
      relatedDrugIds: ['timolol', 'dorzolamide-timolol'],
      relatedExamTechniqueIds: ['gonioscopy', 'oct-optic-nerve-rnfl', 'humphrey-visual-field'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup', 'abnormal-visual-field-workup'],
    },
    'outcome-glaucoma-suspect': {
      id: 'outcome-glaucoma-suspect',
      type: 'outcome',
      title: 'Glaucoma Suspect',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'ocular-hypertension', whyItFits: 'Elevated IOP with an open angle and no structural or functional damage yet increases suspicion for ocular hypertension / glaucoma suspect status rather than established glaucoma.' },
      ],
      mustNotMiss: [
        { diseaseId: 'primary-open-angle-glaucoma', whyItFits: 'Early structural damage can precede a detectable visual field defect — serial imaging is needed before glaucoma can be confidently excluded, not a single normal test.' },
      ],
      recommendedNextSteps: [
        'Establish a baseline with pachymetry, OCT RNFL/GCC, and visual field testing',
        'Determine monitoring interval based on overall risk (IOP level, CCT, family history, age)',
        'Consider treatment if risk is elevated, per an individualized risk discussion',
      ],
      relatedDiseaseIds: ['ocular-hypertension'],
      relatedExamTechniqueIds: ['corneal-pachymetry', 'oct-optic-nerve-rnfl', 'humphrey-visual-field'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-pigmentary-glaucoma': {
      id: 'outcome-pigmentary-glaucoma',
      type: 'outcome',
      title: 'Pigmentary Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'pigmentary-glaucoma', whyItFits: 'A Krukenberg spindle and iris transillumination defects with elevated IOP increases suspicion for pigment dispersion syndrome progressing to pigmentary glaucoma.' },
      ],
      mustNotMiss: [
        { diseaseId: 'pigmentary-glaucoma', whyItFits: 'IOP spikes can occur after exercise as pigment is released — counsel accordingly and do not assume a single low reading excludes significant disease.' },
      ],
      recommendedNextSteps: [
        'Baseline and serial OCT RNFL/GCC and visual field testing, as for open-angle glaucoma',
        'First-line topical IOP-lowering therapy',
        'Counsel on exercise-associated pressure spikes',
      ],
      relatedDiseaseIds: ['pigmentary-glaucoma'],
      relatedDrugIds: ['timolol'],
      relatedExamTechniqueIds: ['gonioscopy', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-pxf-glaucoma': {
      id: 'outcome-pxf-glaucoma',
      type: 'outcome',
      title: 'Pseudoexfoliation Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'pseudoexfoliation-glaucoma', whyItFits: 'Pseudoexfoliation material on the lens capsule/pupil margin with elevated IOP increases suspicion for pseudoexfoliation glaucoma, which tends to progress more aggressively than primary open-angle glaucoma.' },
      ],
      mustNotMiss: [
        { diseaseId: 'pseudoexfoliation-glaucoma', whyItFits: 'Pseudoexfoliation is also associated with zonular weakness — this matters for future cataract surgery planning, not just IOP control.' },
      ],
      recommendedNextSteps: [
        'Baseline and serial OCT RNFL/GCC and visual field testing',
        'First-line topical therapy, generally with closer monitoring given the more aggressive course',
        'Document zonular status for future surgical planning',
      ],
      relatedDiseaseIds: ['pseudoexfoliation-glaucoma'],
      relatedDrugIds: ['timolol'],
      relatedExamTechniqueIds: ['gonioscopy', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-neovascular-glaucoma': {
      id: 'outcome-neovascular-glaucoma',
      type: 'outcome',
      title: 'Suspected Neovascular Glaucoma',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'neovascular-glaucoma', whyItFits: 'Iris or angle neovascularization with elevated IOP increases suspicion for neovascular glaucoma, typically driven by an ischemic retinal process.' },
      ],
      mustNotMiss: [
        { diseaseId: 'neovascular-glaucoma', whyItFits: 'This is an aggressive, often difficult-to-control glaucoma that signals significant retinal ischemia — same-day retina involvement is needed to address the underlying driver, not just the pressure.' },
      ],
      recommendedNextSteps: [
        'Same-day retina referral to identify and treat the ischemic driver (e.g. proliferative diabetic retinopathy, ischemic CRVO)',
        'Anti-VEGF therapy and/or panretinal photocoagulation as directed by retina',
        'Aggressive topical/oral IOP-lowering therapy while the underlying cause is addressed',
      ],
      relatedDiseaseIds: ['neovascular-glaucoma'],
      relatedDrugIds: ['timolol', 'acetazolamide'],
      relatedExamTechniqueIds: ['gonioscopy'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-angle-recession-glaucoma': {
      id: 'outcome-angle-recession-glaucoma',
      type: 'outcome',
      title: 'Traumatic (Angle-Recession) Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'angle-recession-iridodialysis', whyItFits: 'A history of blunt trauma with angle recession visible on gonioscopy and elevated IOP increases suspicion for traumatic glaucoma, which can present months to years after the injury.' },
      ],
      mustNotMiss: [
        { diseaseId: 'angle-recession-iridodialysis', whyItFits: 'Because onset can be delayed for years after the inciting trauma, this diagnosis is easy to miss without a specific trauma history — ask directly about any past significant blunt injury to the eye.' },
      ],
      recommendedNextSteps: [
        'Document the extent of angle recession by gonioscopy in both eyes for comparison',
        'Baseline and serial OCT RNFL/GCC and visual field testing',
        'Long-term monitoring, since the fellow eye and the injured eye both need surveillance',
      ],
      relatedDiseaseIds: ['angle-recession-iridodialysis'],
      relatedExamTechniqueIds: ['gonioscopy'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-uveitic-glaucoma': {
      id: 'outcome-uveitic-glaucoma',
      type: 'outcome',
      title: 'Uveitic Glaucoma',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'uveitic-glaucoma', whyItFits: 'Elevated IOP in the setting of active or recent intraocular inflammation increases suspicion for uveitic glaucoma, which can be driven by the inflammation itself, synechiae, or steroid response.' },
      ],
      mustNotMiss: [
        { diseaseId: 'uveitic-glaucoma', whyItFits: 'Distinguish inflammation-driven pressure elevation from a corticosteroid response to the uveitis treatment itself — the management differs (treat the inflammation vs. adjust the steroid).' },
      ],
      recommendedNextSteps: [
        'Treat the underlying uveitis',
        'Consider whether topical corticosteroid dose is contributing and whether a lower-IOP-impact steroid or steroid-sparing approach is appropriate',
        'Add topical IOP-lowering therapy as needed (avoiding agents that could worsen inflammation)',
      ],
      relatedDiseaseIds: ['uveitic-glaucoma', 'anterior-uveitis'],
      relatedDrugIds: ['prednisolone-acetate', 'timolol'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-steroid-glaucoma': {
      id: 'outcome-steroid-glaucoma',
      type: 'outcome',
      title: 'Steroid-Induced Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'steroid-induced-glaucoma', whyItFits: 'A temporal relationship between corticosteroid use (of any route) and elevated IOP increases suspicion for a steroid response.' },
      ],
      mustNotMiss: [
        { diseaseId: 'steroid-induced-glaucoma', whyItFits: 'Ask about ALL corticosteroid routes, not just eye drops — intranasal, inhaled, dermatologic, and systemic steroids can all raise IOP in a susceptible patient.' },
      ],
      recommendedNextSteps: [
        'Taper or discontinue the corticosteroid if clinically feasible, in coordination with the prescribing provider',
        'Add topical IOP-lowering therapy if the steroid cannot be stopped or IOP remains elevated after tapering',
        'Recheck IOP after any steroid change to confirm resolution',
      ],
      relatedDiseaseIds: ['steroid-induced-glaucoma'],
      relatedDrugIds: ['timolol'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup'],
    },
  },
  references: [
    'AAO Preferred Practice Pattern: Primary Open-Angle Glaucoma, 2020',
    'AAO Preferred Practice Pattern: Primary Angle Closure, 2020',
    'AAO EyeWiki: Pigment Dispersion Syndrome and Pigmentary Glaucoma',
    'AAO EyeWiki: Pseudoexfoliation Glaucoma',
  ],
}

const opticDiscAbnormality: DecisionTree = {
  id: 'optic-disc-abnormality',
  name: 'Optic Disc Abnormality',
  aliases: ['Disc Swelling', 'Optic Disc Pallor', 'Optic Disc Cupping'],
  categories: ['clinical-finding'],
  summary:
    'Work up an abnormal-appearing optic disc — swollen, pale, or abnormally cupped — through laterality, pain, visual field correlation, and red-flag screening to the corresponding optic neuropathy or glaucoma pathway.',
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'question',
      question: 'What is the dominant abnormality of the optic disc on exam?',
      rationale:
        'The disc can be abnormal in three broadly distinct ways — edematous, pale, or excessively cupped — and each points toward a different differential, so identifying which is present first determines the rest of the workup.',
      options: [
        { id: 'start-swollen', label: 'Swollen / edematous disc (blurred margins, elevation, possible hemorrhages)', nextNodeId: 'swollen-laterality' },
        { id: 'start-pale', label: 'Pale disc (pallor of the neuroretinal rim)', nextNodeId: 'pale-extent' },
        { id: 'start-cupped', label: 'Abnormally large or asymmetric cupping', nextNodeId: 'cup-correlate' },
      ],
    },
    'swollen-laterality': {
      id: 'swollen-laterality',
      type: 'question',
      question: 'Is the disc swelling unilateral or bilateral?',
      options: [
        { id: 'lat-uni', label: 'Unilateral', nextNodeId: 'swollen-uni-question' },
        { id: 'lat-bilateral', label: 'Bilateral', nextNodeId: 'bilateral-emergency-screen' },
      ],
    },
    'swollen-uni-question': {
      id: 'swollen-uni-question',
      type: 'question',
      question: 'Is there pain with eye movement, and is the patient relatively young (under approximately 50)?',
      rationale:
        'Pain with eye movement in a younger patient is the classic presentation of optic neuritis; painless swelling in an older patient instead points toward an ischemic cause.',
      options: [
        { id: 'uni-pain-yes', label: 'Yes — painful, younger patient', nextNodeId: 'outcome-optic-neuritis' },
        { id: 'uni-pain-no', label: 'No — painless', nextNodeId: 'uni-painless-vf' },
      ],
    },
    'uni-painless-vf': {
      id: 'uni-painless-vf',
      type: 'question',
      question: 'Is there a corresponding altitudinal (superior or inferior) visual field defect?',
      options: [
        { id: 'vf-yes', label: 'Yes, altitudinal defect present', nextNodeId: 'gca-screen' },
        { id: 'vf-no', label: 'No altitudinal defect', nextNodeId: 'outcome-other-disc-swelling' },
      ],
    },
    'gca-screen': {
      id: 'gca-screen',
      type: 'question',
      question:
        'Is the patient over 50 with any of: jaw claudication, scalp tenderness, new headache, unintended weight loss, or amaurosis fugax?',
      rationale:
        'These are the classic systemic features of giant cell arteritis. Arteritic AION can rapidly progress to bilateral, profound, irreversible vision loss within days — it must be ruled out emergently before assuming a non-arteritic cause.',
      isEmergencyScreen: true,
      options: [
        { id: 'gca-yes', label: 'Yes — GCA symptoms present', nextNodeId: 'outcome-arteritic-aion', isRedFlag: true },
        { id: 'gca-no', label: 'No GCA symptoms', nextNodeId: 'outcome-naion' },
      ],
    },
    'bilateral-emergency-screen': {
      id: 'bilateral-emergency-screen',
      type: 'question',
      question:
        'Is there a headache (especially one worse lying down or with Valsalva), transient visual obscurations, pulsatile tinnitus, or other symptoms suggesting elevated intracranial pressure?',
      rationale:
        'Bilateral disc edema is treated as papilledema from elevated intracranial pressure until neuroimaging proves otherwise.',
      isEmergencyScreen: true,
      options: [
        { id: 'icp-yes', label: 'Yes — ICP red flags present', nextNodeId: 'outcome-papilledema', isRedFlag: true },
        { id: 'icp-no', label: 'No red flags currently', nextNodeId: 'outcome-bilateral-disc-edema-atypical' },
      ],
    },
    'pale-extent': {
      id: 'pale-extent',
      type: 'question',
      question: 'Is the pallor segmental (a wedge or sector of the rim) or diffuse (the entire disc)?',
      options: [
        { id: 'pale-segmental', label: 'Segmental / sectoral pallor', nextNodeId: 'outcome-segmental-pallor' },
        { id: 'pale-diffuse', label: 'Diffuse pallor of the entire disc', nextNodeId: 'pale-diffuse-cause' },
      ],
    },
    'pale-diffuse-cause': {
      id: 'pale-diffuse-cause',
      type: 'question',
      question:
        'Does the history point to a compressive lesion (progressive course, headache, other cranial nerve findings), or to a non-compressive cause (toxic/nutritional exposure, a hereditary pattern, or a known prior ischemic/inflammatory event)?',
      options: [
        { id: 'diffuse-compressive', label: 'Suggests a compressive lesion', nextNodeId: 'outcome-compressive-optic-neuropathy' },
        { id: 'diffuse-noncompressive', label: 'Suggests toxic/nutritional, hereditary, or a prior event', nextNodeId: 'outcome-diffuse-pallor-nonglaucomatous' },
      ],
    },
    'cup-correlate': {
      id: 'cup-correlate',
      type: 'question',
      question:
        'Does the degree of cupping correlate with elevated IOP (current or documented) and/or a matching visual field defect, and does the remaining neuroretinal rim look healthy (pink, following the ISNT rule) rather than pale?',
      rationale:
        'Glaucomatous cupping should be accompanied by IOP elevation and/or a matching field defect, with a pink remaining rim. Pallor of the rim out of proportion to the cupping points away from glaucoma toward a compressive or other non-glaucomatous cause.',
      options: [
        { id: 'cup-yes', label: 'Yes, correlates and rim is healthy', nextNodeId: 'outcome-glaucomatous-cupping' },
        { id: 'cup-no', label: 'No — does not correlate, or rim is pale', nextNodeId: 'outcome-nonglaucomatous-cupping' },
      ],
    },

    'outcome-optic-neuritis': {
      id: 'outcome-optic-neuritis',
      type: 'outcome',
      title: 'Optic Neuritis',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'optic-neuritis', whyItFits: 'Unilateral disc swelling with pain on eye movement in a younger patient increases suspicion for optic neuritis — interpret in the context of the full exam (color desaturation, RAPD, central field defect).' },
      ],
      mustNotMiss: [
        { diseaseId: 'multiple-sclerosis-ocular', whyItFits: 'Optic neuritis is frequently the first presentation of multiple sclerosis — MRI brain/orbits with contrast is needed to assess for demyelinating lesions and stratify future MS risk, not just to confirm the optic nerve finding.' },
      ],
      recommendedNextSteps: [
        'Urgent MRI brain and orbits with contrast to evaluate for demyelinating disease and confirm the diagnosis',
        'Formal visual field and color vision testing to document baseline',
        'Coordinate with neurology; IV corticosteroids may be considered for selected patients to speed recovery (they do not change the final visual outcome)',
      ],
      managementNotes:
        'Atypical features (no pain, no light perception, simultaneous bilateral involvement, prominent disc hemorrhage, or no improvement by two weeks) should prompt reconsideration of the diagnosis rather than typical demyelinating optic neuritis.',
      relatedDiseaseIds: ['optic-neuritis', 'multiple-sclerosis-ocular'],
      relatedDrugIds: ['methylprednisolone'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'ishihara-color-vision-screening', 'pupillary-examination'],
      relatedWorkupIds: ['optic-nerve-edema-workup'],
      references: ['Optic Neuritis Treatment Trial (ONTT) 15-year follow-up, Beck RW et al., Arch Ophthalmol 2003'],
    },
    'outcome-arteritic-aion': {
      id: 'outcome-arteritic-aion',
      type: 'outcome',
      title: 'Arteritic Anterior Ischemic Optic Neuropathy (Giant Cell Arteritis)',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'Altitudinal disc swelling in a patient over 50 with jaw claudication, scalp tenderness, or other systemic features increases suspicion for arteritic AION from giant cell arteritis — interpret in context and begin treatment without waiting for biopsy.' },
      ],
      mustNotMiss: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'The fellow eye is at high risk of sequential, profound vision loss within days if treatment is delayed — this is a true ophthalmic and systemic emergency.' },
      ],
      recommendedNextSteps: [
        'Order same-day ESR, CRP, and CBC with platelets; do not wait for results to begin treatment if suspicion is high',
        'Begin high-dose systemic corticosteroids immediately (e.g. IV methylprednisolone) once GCA is suspected',
        'Arrange temporal artery biopsy within 1-2 weeks of starting steroids',
      ],
      managementNotes:
        'Do not delay corticosteroid treatment for biopsy confirmation — the risk of irreversible bilateral vision loss outweighs the risk of empiric treatment.',
      relatedDiseaseIds: ['giant-cell-arteritis'],
      relatedDrugIds: ['methylprednisolone', 'prednisone'],
      relatedExamTechniqueIds: ['giant-cell-arteritis-laboratory-workup', 'pupillary-examination'],
      relatedWorkupIds: ['optic-nerve-edema-workup'],
      relatedEmergencyProtocolIds: ['giant-cell-arteritis-vision-loss-protocol'],
      references: ['AAO EyeWiki: Giant Cell Arteritis', 'AAO Preferred Practice Pattern: Giant Cell Arteritis'],
    },
    'outcome-naion': {
      id: 'outcome-naion',
      type: 'outcome',
      title: 'Non-Arteritic Anterior Ischemic Optic Neuropathy',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'naion', whyItFits: 'Painless unilateral disc swelling with an altitudinal visual field defect and no GCA symptoms increases suspicion for non-arteritic AION — interpret in context of vascular risk factors and a crowded ("disc at risk") fellow eye.' },
      ],
      mustNotMiss: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'Because arteritic and non-arteritic AION can look similar early on, any emerging systemic symptom after this visit should prompt urgent ESR/CRP and reconsideration of GCA.' },
      ],
      recommendedNextSteps: [
        'Assess and optimize vascular risk factors (hypertension, diabetes, hyperlipidemia, sleep apnea, nocturnal hypotension)',
        'Formal visual field testing and documentation of the fellow eye disc appearance',
        'Counsel that no proven treatment reverses vision loss and that the fellow eye carries an ongoing risk',
      ],
      relatedDiseaseIds: ['naion'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'pupillary-examination'],
      relatedWorkupIds: ['optic-nerve-edema-workup'],
      references: ['AAO: NAION — Diagnosis and Management, EyeNet Magazine'],
    },
    'outcome-other-disc-swelling': {
      id: 'outcome-other-disc-swelling',
      type: 'outcome',
      title: 'Apparent Disc Swelling Without Altitudinal Field Loss — Consider Pseudopapilledema',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'optic-disc-drusen', whyItFits: 'Elevated, blurred disc margins without a true altitudinal defect, hemorrhage, or vascular obscuration increases suspicion for optic disc drusen mimicking true edema — interpret in context of B-scan/autofluorescence findings.' },
      ],
      mustNotMiss: [
        { diseaseId: 'papilledema', whyItFits: 'Early or mild true disc edema can also lack an obvious field defect — B-scan, OCT, and, if any doubt remains, neuroimaging should be used to confidently exclude true edema before settling on pseudopapilledema.' },
      ],
      recommendedNextSteps: [
        'B-scan ultrasonography or fundus autofluorescence to look for calcified drusen bodies',
        'OCT of the optic nerve to characterize the pattern of elevation',
        'If any uncertainty remains between true edema and pseudopapilledema, proceed with neuroimaging as if it were true edema',
      ],
      relatedDiseaseIds: ['optic-disc-drusen', 'papilledema'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'fundus-autofluorescence', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['optic-nerve-edema-workup'],
      references: ['AAO: Case Studies of Optic Disc Edema, EyeNet Magazine'],
    },
    'outcome-papilledema': {
      id: 'outcome-papilledema',
      type: 'outcome',
      title: 'Papilledema — Suspected Elevated Intracranial Pressure',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'papilledema', whyItFits: 'Bilateral disc edema with headache, transient visual obscurations, or pulsatile tinnitus increases suspicion for papilledema from elevated intracranial pressure — interpret in context, since bilateral disc edema is treated as papilledema until neuroimaging proves otherwise.' },
        { diseaseId: 'idiopathic-intracranial-hypertension', whyItFits: 'In an obese woman of childbearing age with no mass lesion found on imaging, this pattern increases suspicion for idiopathic intracranial hypertension specifically.' },
      ],
      mustNotMiss: [
        { diseaseId: 'idiopathic-intracranial-hypertension', whyItFits: 'A structural cause (mass, venous sinus thrombosis, hydrocephalus) must be excluded with neuroimaging before attributing the pressure elevation to IIH and proceeding to lumbar puncture.' },
      ],
      recommendedNextSteps: [
        'Emergent neuroimaging (MRI/MRV brain preferred) to exclude a mass lesion or venous sinus thrombosis before lumbar puncture',
        'Lumbar puncture with opening pressure measurement once imaging has excluded a contraindication',
        'Formal visual field testing to establish a baseline, since the visual field (not headache severity) drives treatment escalation',
      ],
      managementNotes:
        'Vision loss from papilledema is due to the pressure itself, not the underlying cause — visual field defects drive the urgency of treatment escalation, including acetazolamide, weight management, or surgical intervention for progressive loss.',
      relatedDiseaseIds: ['papilledema', 'idiopathic-intracranial-hypertension'],
      relatedDrugIds: ['acetazolamide'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['optic-nerve-edema-workup', 'headache-ocular-relevance-workup'],
      references: ['AAO EyeWiki: Idiopathic Intracranial Hypertension'],
    },
    'outcome-bilateral-disc-edema-atypical': {
      id: 'outcome-bilateral-disc-edema-atypical',
      type: 'outcome',
      title: 'Bilateral Disc Edema Without Classic ICP Symptoms',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'papilledema', whyItFits: 'Bilateral disc edema is treated as papilledema until neuroimaging proves otherwise, even without headache or transient visual obscurations at the time of exam — interpret in context, since symptoms can lag behind the finding.' },
      ],
      mustNotMiss: [
        { diseaseId: 'hypertensive-retinopathy', whyItFits: 'Severe/malignant systemic hypertension can cause bilateral disc edema without classic ICP symptoms — check blood pressure directly rather than assuming an intracranial cause.' },
      ],
      recommendedNextSteps: [
        'Check blood pressure immediately to exclude malignant hypertension as a cause',
        'Same-day neuroimaging (MRI/MRV brain) even in the absence of classic symptoms',
        'Reassess for interval development of headache, transient visual obscurations, or pulsatile tinnitus',
      ],
      relatedDiseaseIds: ['papilledema', 'hypertensive-retinopathy'],
      relatedWorkupIds: ['optic-nerve-edema-workup', 'headache-ocular-relevance-workup'],
    },
    'outcome-segmental-pallor': {
      id: 'outcome-segmental-pallor',
      type: 'outcome',
      title: 'Segmental (Sectoral) Optic Disc Pallor',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'naion', whyItFits: 'Sectoral pallor with a corresponding altitudinal field defect increases suspicion for a prior AION event, whether or not the acute swelling was ever witnessed — interpret alongside history and old records.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'A compressive lesion can also cause sectoral pallor and can closely mimic a prior ischemic event — pallor that is disproportionate to any cupping should raise suspicion for a non-glaucomatous, potentially compressive cause and prompt imaging if the history is not clearly ischemic.' },
      ],
      recommendedNextSteps: [
        'Correlate with old photos/records for a documented prior swelling event',
        'Formal visual field testing to characterize the defect pattern',
        'If no clear prior ischemic event is documented and the pallor is progressive, obtain neuroimaging to exclude a compressive lesion',
      ],
      relatedDiseaseIds: ['naion', 'chiasmal-syndrome'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'optic-nerve-head-cup-disc-ratio-assessment'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
      references: ['Understanding Optic Disc Pallor — Shades of White, eOphtha'],
    },
    'outcome-compressive-optic-neuropathy': {
      id: 'outcome-compressive-optic-neuropathy',
      type: 'outcome',
      title: 'Suspected Compressive Optic Neuropathy',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Progressive diffuse pallor with a history suggesting mass effect (headache, other cranial nerve involvement, or a field defect crossing the vertical meridian) increases suspicion for a compressive lesion along the anterior visual pathway — interpret in context of neuroimaging.' },
        { diseaseId: 'thyroid-eye-disease', whyItFits: 'Proptosis, restrictive motility, and lid retraction alongside disc pallor increases suspicion for compressive optic neuropathy from thyroid eye disease specifically.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Compressive optic neuropathy can closely mimic glaucoma, even with an unremarkable cup-to-disc ratio — pallor of the remaining rim out of proportion to cupping, or a field defect respecting the vertical meridian, should prompt imaging rather than a default glaucoma workup.' },
      ],
      recommendedNextSteps: [
        'MRI brain/orbits with contrast to identify a compressive mass along the visual pathway',
        'Formal visual field testing, watching specifically for a defect that respects the vertical meridian',
        'Thyroid function testing and orbital imaging if signs of thyroid eye disease are present',
      ],
      relatedDiseaseIds: ['chiasmal-syndrome', 'thyroid-eye-disease'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'hertel-exophthalmometry', 'thyroid-eye-disease-laboratory-testing'],
      relatedWorkupIds: ['abnormal-visual-field-workup', 'gradual-blurred-vision-workup'],
      references: ['StatPearls: Compressive Optic Neuropathy'],
    },
    'outcome-diffuse-pallor-nonglaucomatous': {
      id: 'outcome-diffuse-pallor-nonglaucomatous',
      type: 'outcome',
      title: 'Diffuse Optic Atrophy — Toxic/Nutritional, Hereditary, or Post-Event',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'toxic-nutritional-optic-neuropathy', whyItFits: 'Bilateral, symmetric, diffuse pallor with a history of alcohol/tobacco use, malnutrition, bariatric surgery, or an implicated medication (e.g. ethambutol, amiodarone) increases suspicion for a toxic or nutritional optic neuropathy — interpret in context of a full exposure and dietary history.' },
        { diseaseId: 'leber-hereditary-optic-neuropathy', whyItFits: 'Sequential, painless, bilateral central vision loss with diffuse pallor in a young male increases suspicion for Leber hereditary optic neuropathy — interpret in the context of family history and genetic testing.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Even when a toxic/nutritional or hereditary cause seems likely by history, an atypical or asymmetric field defect should prompt neuroimaging to exclude a coincidental compressive lesion before settling on a non-compressive diagnosis.' },
      ],
      recommendedNextSteps: [
        'Detailed exposure history (alcohol, tobacco, specific medications) and nutritional/B12-folate labs',
        'Consider genetic testing for Leber hereditary optic neuropathy in a young patient with a suggestive pattern and family history',
        'Baseline and serial visual field and OCT RNFL testing to track progression',
      ],
      relatedDiseaseIds: ['toxic-nutritional-optic-neuropathy', 'leber-hereditary-optic-neuropathy'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'oct-optic-nerve-rnfl', 'genetic-testing-inherited-retinal-disease'],
      relatedWorkupIds: ['abnormal-visual-field-workup', 'gradual-blurred-vision-workup'],
    },
    'outcome-glaucomatous-cupping': {
      id: 'outcome-glaucomatous-cupping',
      type: 'outcome',
      title: 'Cupping Consistent with Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'primary-open-angle-glaucoma', whyItFits: 'Cupping that correlates with elevated IOP and/or a nerve-fiber-bundle visual field defect, with a healthy-colored remaining rim, increases suspicion for glaucomatous damage — interpret in context of gonioscopy and OCT.' },
      ],
      mustNotMiss: [
        { diseaseId: 'normal-tension-glaucoma', whyItFits: 'If the cupping and field defect are convincing but IOP has never been documented as elevated, reconsider normal-tension glaucoma rather than assuming measurement error.' },
      ],
      recommendedNextSteps: [
        'Gonioscopy and IOP measurement (with pachymetry) to complete the elevated-IOP workup pathway',
        'Baseline and serial OCT RNFL/GCC and visual field testing',
        'Disc photography for future comparison, since cupping changes are best judged longitudinally',
      ],
      relatedDiseaseIds: ['primary-open-angle-glaucoma', 'normal-tension-glaucoma'],
      relatedExamTechniqueIds: ['optic-nerve-head-cup-disc-ratio-assessment', 'gonioscopy', 'oct-optic-nerve-rnfl', 'humphrey-visual-field'],
      relatedWorkupIds: ['elevated-iop-glaucoma-suspect-workup', 'abnormal-visual-field-workup'],
      references: ['Glaucomatous Versus Nonglaucomatous Optic Disc Cupping: Clinical Differentiation'],
    },
    'outcome-nonglaucomatous-cupping': {
      id: 'outcome-nonglaucomatous-cupping',
      type: 'outcome',
      title: 'Large Cupping Without Correlating Damage — Physiologic Cup or Alternate Diagnosis',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'ocular-hypertension', whyItFits: 'A large but symmetric cup, following the ISNT rule, with normal IOP and no field defect increases suspicion for a physiologic large cup rather than glaucoma — interpret in context of disc size, since larger discs normally have larger cups.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Pallor of the remaining neuroretinal rim, a field defect that does not fit a nerve-fiber-bundle pattern, or a defect crossing the vertical meridian should raise suspicion for a compressive or other non-glaucomatous cause masquerading as glaucoma, rather than being dismissed as a physiologic cup.' },
      ],
      recommendedNextSteps: [
        'Measure disc size and assess symmetry between the two eyes, since a large disc normally has a large physiologic cup',
        'Baseline OCT RNFL and visual field to document the absence of glaucomatous damage',
        'If the rim is pale rather than pink, or the field defect does not fit a nerve-fiber-bundle pattern, pursue neuroimaging rather than routine glaucoma monitoring',
      ],
      relatedDiseaseIds: ['ocular-hypertension', 'chiasmal-syndrome'],
      relatedExamTechniqueIds: ['optic-nerve-head-cup-disc-ratio-assessment', 'oct-optic-nerve-rnfl', 'humphrey-visual-field'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
    },
  },
  references: [
    'AAO: NAION — Diagnosis and Management, EyeNet Magazine',
    'AAO EyeWiki: Giant Cell Arteritis',
    'AAO EyeWiki: Idiopathic Intracranial Hypertension',
    'StatPearls: Compressive Optic Neuropathy',
    'Understanding Optic Disc Pallor — Shades of White, eOphtha',
    'Optic Neuritis Treatment Trial (ONTT) 15-year follow-up, Beck RW et al., Arch Ophthalmol 2003',
  ],
}

const abnormalVisualField: DecisionTree = {
  id: 'abnormal-visual-field',
  name: 'Abnormal Visual Field',
  aliases: ['Visual Field Defect', 'VF Defect Pattern'],
  categories: ['clinical-finding'],
  summary:
    'Localize an abnormal visual field by defect pattern — central/cecocentral, altitudinal, arcuate/nasal step, bitemporal, homonymous, or generalized constriction — to the corresponding retinal, optic nerve, chiasmal, retrochiasmal, or artifactual cause.',
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'question',
      question:
        'Did the field loss develop suddenly (over hours to days) and is it accompanied by any of: severe headache with nausea/vomiting, altered consciousness, new diplopia or ophthalmoplegia, or other acute neurologic symptoms (weakness, numbness, slurred speech)?',
      rationale:
        'Acute visual field loss with these accompanying symptoms can signal pituitary apoplexy, a large acute stroke, or another intracranial emergency that needs immediate action rather than routine field-pattern analysis.',
      isEmergencyScreen: true,
      options: [
        { id: 'start-yes', label: 'Yes — acute with neurologic emergency features', nextNodeId: 'outcome-acute-neurologic-emergency', isRedFlag: true },
        { id: 'start-no', label: 'No — proceed with pattern analysis', nextNodeId: 'pattern' },
      ],
    },
    pattern: {
      id: 'pattern',
      type: 'question',
      question: 'What is the predominant visual field defect pattern on testing?',
      options: [
        { id: 'pattern-central', label: 'Central or cecocentral scotoma', nextNodeId: 'central-scotoma-cause' },
        { id: 'pattern-altitudinal', label: 'Altitudinal defect, respecting the horizontal midline', nextNodeId: 'altitudinal-gca-screen' },
        { id: 'pattern-arcuate', label: 'Arcuate defect or nasal step', nextNodeId: 'outcome-glaucomatous-field' },
        { id: 'pattern-bitemporal', label: 'Bitemporal defect, respecting the vertical midline', nextNodeId: 'outcome-chiasmal-field' },
        { id: 'pattern-homonymous', label: 'Homonymous hemianopia or quadrantanopia', nextNodeId: 'homonymous-acuity' },
        { id: 'pattern-constriction', label: 'Generalized constriction', nextNodeId: 'reliability-check' },
      ],
    },
    'central-scotoma-cause': {
      id: 'central-scotoma-cause',
      type: 'question',
      question:
        'Is there a corresponding macular lesion visible on exam/OCT (e.g. drusen, hemorrhage, edema), or is the fundus and optic nerve exam normal despite the scotoma?',
      options: [
        { id: 'central-macular', label: 'Macular lesion present', nextNodeId: 'outcome-macular-cause' },
        { id: 'central-normal', label: 'Fundus/optic nerve exam normal', nextNodeId: 'outcome-optic-neuropathy-central-scotoma' },
      ],
    },
    'altitudinal-gca-screen': {
      id: 'altitudinal-gca-screen',
      type: 'question',
      question: 'Is the patient over 50 with jaw claudication, scalp tenderness, new headache, unintended weight loss, or amaurosis fugax?',
      rationale:
        'Altitudinal field loss can result from either arteritic or non-arteritic anterior ischemic optic neuropathy, and the arteritic form (giant cell arteritis) is a true emergency that must be actively screened for.',
      isEmergencyScreen: true,
      options: [
        { id: 'alt-gca-yes', label: 'Yes — GCA symptoms present', nextNodeId: 'outcome-arteritic-aion-field', isRedFlag: true },
        { id: 'alt-gca-no', label: 'No GCA symptoms', nextNodeId: 'outcome-naion-field' },
      ],
    },
    'homonymous-acuity': {
      id: 'homonymous-acuity',
      type: 'question',
      question: 'Did the visual field loss develop suddenly (over seconds to hours) or gradually (over weeks to months)?',
      options: [
        { id: 'homonymous-sudden', label: 'Sudden', nextNodeId: 'outcome-homonymous-vascular' },
        { id: 'homonymous-gradual', label: 'Gradual', nextNodeId: 'outcome-homonymous-mass' },
      ],
    },
    'reliability-check': {
      id: 'reliability-check',
      type: 'question',
      question: 'Do the test reliability indices show elevated fixation losses (over 20%), false positives, or false negatives (over 33%)?',
      rationale:
        'By manufacturer-recommended criteria, more than 20% fixation losses or more than 33% false-positive/false-negative responses suggest the field may not be reliable, and an apparent generalized constriction may be a testing artifact rather than a true generalized loss.',
      options: [
        { id: 'reliability-poor', label: 'Yes, reliability indices are poor', nextNodeId: 'outcome-unreliable-field' },
        { id: 'reliability-good', label: 'No, the test is reliable', nextNodeId: 'constriction-cause' },
      ],
    },
    'constriction-cause': {
      id: 'constriction-cause',
      type: 'question',
      question:
        'Is there a history suggesting retinitis pigmentosa (night blindness, family history) or known advanced glaucoma, or does the field itself look non-physiologic (e.g. a tunnel/spiral pattern that does not expand normally with target size on kinetic testing)?',
      options: [
        { id: 'constriction-rp', label: 'History suggests retinitis pigmentosa', nextNodeId: 'outcome-rp-field' },
        { id: 'constriction-glaucoma', label: 'Known advanced glaucoma', nextNodeId: 'outcome-advanced-glaucoma-field' },
        { id: 'constriction-functional', label: 'Non-physiologic / functional pattern', nextNodeId: 'outcome-functional-field-loss' },
      ],
    },

    'outcome-acute-neurologic-emergency': {
      id: 'outcome-acute-neurologic-emergency',
      type: 'outcome',
      title: 'Acute Visual Field Loss with Neurologic Emergency Features',
      urgency: 'Emergency (immediate)',
      mostLikely: [],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Sudden field loss with severe headache and altered consciousness increases suspicion for pituitary apoplexy, a hemorrhagic/infarcted pituitary mass causing acute chiasmal compression — interpret in context of the full neurologic picture and treat as a neurosurgical emergency.' },
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'In a patient over 50, this presentation can also reflect giant cell arteritis causing simultaneous cerebral and ocular ischemia — check inflammatory markers emergently alongside neuroimaging.' },
      ],
      recommendedNextSteps: [
        'Activate emergency stroke/neurologic evaluation — do not wait for a full field-pattern workup',
        'Emergent neuroimaging (CT/MRI brain) and, if pituitary apoplexy is suspected, urgent endocrinology/neurosurgery involvement',
        'Same-day ESR/CRP if age and history raise concern for giant cell arteritis',
      ],
      relatedDiseaseIds: ['chiasmal-syndrome', 'giant-cell-arteritis'],
      relatedWorkupIds: ['headache-ocular-relevance-workup'],
      relatedEmergencyProtocolIds: ['giant-cell-arteritis-vision-loss-protocol'],
    },
    'outcome-macular-cause': {
      id: 'outcome-macular-cause',
      type: 'outcome',
      title: 'Central Scotoma from a Macular Lesion',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'amd', whyItFits: 'A central scotoma with a corresponding macular lesion on exam/OCT increases suspicion for a macular process such as age-related macular degeneration — interpret in context of age and the specific OCT findings.' },
      ],
      mustNotMiss: [
        { diseaseId: 'central-serous-retinopathy', whyItFits: 'In a younger patient, a similar central scotoma and macular lesion can instead represent central serous retinopathy or another non-AMD macular process — do not assume AMD outside the typical age range.' },
      ],
      recommendedNextSteps: [
        'OCT macula to characterize the lesion',
        'Amsler grid for home monitoring if a macular degenerative process is confirmed',
        'Consider fluorescein angiography if the diagnosis remains unclear',
      ],
      relatedDiseaseIds: ['amd', 'central-serous-retinopathy', 'stargardt-disease'],
      relatedExamTechniqueIds: ['oct-macula', 'amsler-grid-testing', 'fluorescein-angiography'],
      relatedWorkupIds: ['macular-disease-metamorphopsia-workup', 'abnormal-visual-field-workup'],
    },
    'outcome-optic-neuropathy-central-scotoma': {
      id: 'outcome-optic-neuropathy-central-scotoma',
      type: 'outcome',
      title: 'Central Scotoma from an Optic Neuropathy',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'optic-neuritis', whyItFits: 'A central or cecocentral scotoma with a normal fundus but reduced color vision and an RAPD increases suspicion for an optic neuropathy such as optic neuritis — interpret in context of pain with eye movement and age.' },
      ],
      mustNotMiss: [
        { diseaseId: 'toxic-nutritional-optic-neuropathy', whyItFits: 'Bilateral, symmetric central/cecocentral scotomas without pain should raise suspicion for a toxic or nutritional cause rather than unilateral inflammatory optic neuritis — ask specifically about alcohol, tobacco, and implicated medications.' },
        { diseaseId: 'leber-hereditary-optic-neuropathy', whyItFits: 'Sequential bilateral central scotomas in a young male, especially with a family history, should raise suspicion for Leber hereditary optic neuropathy.' },
      ],
      recommendedNextSteps: [
        'MRI brain/orbits with contrast if unilateral, painful, and in a younger patient (concern for demyelinating optic neuritis)',
        'Toxic/nutritional and family history review if bilateral, symmetric, and painless',
        'Formal color vision testing, since dyschromatopsia out of proportion to acuity loss favors an optic neuropathy',
      ],
      relatedDiseaseIds: ['optic-neuritis', 'toxic-nutritional-optic-neuropathy', 'leber-hereditary-optic-neuropathy'],
      relatedExamTechniqueIds: ['ishihara-color-vision-screening', 'pupillary-examination', 'humphrey-visual-field'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
    },
    'outcome-arteritic-aion-field': {
      id: 'outcome-arteritic-aion-field',
      type: 'outcome',
      title: 'Altitudinal Field Loss — Arteritic AION (Giant Cell Arteritis)',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'An altitudinal defect in a patient over 50 with jaw claudication or scalp tenderness increases suspicion for arteritic AION from giant cell arteritis — interpret in context and begin treatment before biopsy confirmation.' },
      ],
      mustNotMiss: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'The fellow eye is at imminent risk of similarly severe, irreversible vision loss without emergent treatment.' },
      ],
      recommendedNextSteps: [
        'Same-day ESR, CRP, and CBC with platelets',
        'Begin high-dose systemic corticosteroids immediately',
        'Arrange temporal artery biopsy within 1-2 weeks',
      ],
      relatedDiseaseIds: ['giant-cell-arteritis'],
      relatedDrugIds: ['methylprednisolone', 'prednisone'],
      relatedExamTechniqueIds: ['giant-cell-arteritis-laboratory-workup'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
      relatedEmergencyProtocolIds: ['giant-cell-arteritis-vision-loss-protocol'],
    },
    'outcome-naion-field': {
      id: 'outcome-naion-field',
      type: 'outcome',
      title: 'Altitudinal Field Loss — Non-Arteritic AION',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'naion', whyItFits: 'A painless altitudinal defect without GCA symptoms increases suspicion for non-arteritic AION — interpret in context of vascular risk factors and disc appearance.' },
      ],
      mustNotMiss: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'Any emerging systemic symptom should prompt reconsideration of an arteritic cause, since the two can look similar early on.' },
      ],
      recommendedNextSteps: [
        'Assess and optimize vascular risk factors',
        'Document the fellow eye disc appearance (a small, crowded "disc at risk" raises future risk)',
        'Counsel that no proven treatment reverses vision loss',
      ],
      relatedDiseaseIds: ['naion'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
    },
    'outcome-glaucomatous-field': {
      id: 'outcome-glaucomatous-field',
      type: 'outcome',
      title: 'Arcuate Defect / Nasal Step — Glaucomatous Pattern',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'primary-open-angle-glaucoma', whyItFits: 'An arcuate defect or nasal step respecting the horizontal midline increases suspicion for a glaucomatous nerve-fiber-bundle pattern — interpret in context of IOP, gonioscopy, and disc appearance.' },
      ],
      mustNotMiss: [
        { diseaseId: 'normal-tension-glaucoma', whyItFits: 'A convincing arcuate pattern without documented elevated IOP should raise suspicion for normal-tension glaucoma rather than being dismissed.' },
      ],
      recommendedNextSteps: [
        'Correlate with IOP, gonioscopy, and OCT RNFL/GCC',
        'Repeat field testing to confirm reproducibility before committing to a glaucoma diagnosis',
        'Baseline photography and a serial monitoring interval based on overall risk',
      ],
      relatedDiseaseIds: ['primary-open-angle-glaucoma', 'normal-tension-glaucoma'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'oct-optic-nerve-rnfl', 'gonioscopy'],
      relatedWorkupIds: ['abnormal-visual-field-workup', 'elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-chiasmal-field': {
      id: 'outcome-chiasmal-field',
      type: 'outcome',
      title: 'Bitemporal Defect — Chiasmal Compression',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'A bitemporal defect crossing the vertical midline increases suspicion for compression at the optic chiasm, most commonly from a pituitary adenoma — interpret in context of neuroimaging and endocrine symptoms.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'Other sellar/parasellar masses (meningioma, craniopharyngioma, aneurysm) can produce an identical field pattern — imaging, not the field shape alone, establishes the specific cause.' },
      ],
      recommendedNextSteps: [
        'MRI brain with a pituitary/sellar protocol and contrast',
        'Endocrine workup if a pituitary mass is found (prolactin and other pituitary hormone levels)',
        'Formal automated perimetry to document the exact pattern and density, and for surgical/postoperative monitoring',
      ],
      relatedDiseaseIds: ['chiasmal-syndrome'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['abnormal-visual-field-workup', 'gradual-blurred-vision-workup'],
      references: ['EyeWiki: Pituitary Adenoma'],
    },
    'outcome-homonymous-vascular': {
      id: 'outcome-homonymous-vascular',
      type: 'outcome',
      title: 'Sudden Homonymous Hemianopia — Suspected Stroke',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'homonymous-hemianopia', whyItFits: 'A sudden-onset homonymous field defect increases suspicion for an acute retrochiasmal vascular event, most commonly in the posterior cerebral artery (occipital lobe) territory — interpret in context of any accompanying neurologic deficits.' },
      ],
      mustNotMiss: [
        { diseaseId: 'carotid-artery-dissection', whyItFits: 'Sudden visual field loss can occasionally be the presenting sign of a dissection or another large-vessel process — a full stroke workup, not just an eye exam, is needed.' },
      ],
      recommendedNextSteps: [
        'Activate acute stroke evaluation — this is a time-sensitive neurologic emergency, not a routine field referral',
        'Emergent CT/MRI brain with vascular imaging',
        'Note whether macular sparing is present, which favors an occipital (posterior cerebral artery) location over a more anterior lesion',
      ],
      relatedDiseaseIds: ['homonymous-hemianopia', 'carotid-artery-dissection'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup'],
    },
    'outcome-homonymous-mass': {
      id: 'outcome-homonymous-mass',
      type: 'outcome',
      title: 'Gradual Homonymous Hemianopia — Suspected Mass Lesion',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'homonymous-hemianopia', whyItFits: 'A gradually progressive homonymous defect increases suspicion for a slow-growing retrochiasmal mass (tumor) rather than an acute vascular event — interpret in context of the tempo and any associated symptoms.' },
      ],
      mustNotMiss: [
        { diseaseId: 'chiasmal-syndrome', whyItFits: 'A lesion near the chiasm can occasionally produce an asymmetric, quasi-homonymous pattern — imaging should extend far enough posteriorly and anteriorly to localize the lesion correctly.' },
      ],
      recommendedNextSteps: [
        'MRI brain with contrast to localize and characterize the lesion',
        'Formal perimetry to assess congruity, which helps localize along the retrochiasmal pathway (more posterior lesions tend to be more congruous)',
        'Neurosurgical/oncologic referral once a mass is identified',
      ],
      relatedDiseaseIds: ['homonymous-hemianopia'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'goldmann-kinetic-perimetry'],
      relatedWorkupIds: ['gradual-blurred-vision-workup'],
    },
    'outcome-unreliable-field': {
      id: 'outcome-unreliable-field',
      type: 'outcome',
      title: 'Apparent Generalized Constriction — Likely Unreliable Test',
      urgency: 'Routine',
      mostLikely: [],
      mustNotMiss: [
        { diseaseId: 'retinitis-pigmentosa', whyItFits: 'Even when reliability indices are poor, a repeat, more carefully supervised test is needed before dismissing the constriction as pure artifact, since a true generalized defect (e.g. retinitis pigmentosa or advanced glaucoma) could equally well be obscured by a poorly performed test.' },
      ],
      recommendedNextSteps: [
        'Repeat testing with additional patient instruction and supervision to improve reliability',
        'Consider a different test strategy (e.g. a shorter or kinetic protocol) if fixation or fatigue is the limiting factor',
        'Only proceed to a retinal-dystrophy or advanced-glaucoma workup once a reliable field confirms a true generalized defect',
      ],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'goldmann-kinetic-perimetry'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
      references: ['Analysis of Reliability Indices from Humphrey Visual Field Tests in an Urban Glaucoma Population, Am J Ophthalmol 1997'],
    },
    'outcome-rp-field': {
      id: 'outcome-rp-field',
      type: 'outcome',
      title: 'Generalized Constriction — Retinitis Pigmentosa',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'retinitis-pigmentosa', whyItFits: 'A reliable, genuine generalized constriction with a history of night blindness and a family history increases suspicion for retinitis pigmentosa — interpret in context of the fundus exam (bone-spicule pigmentation, attenuated vessels) and ERG.' },
      ],
      mustNotMiss: [
        { diseaseId: 'usher-bardet-biedl-syndrome', whyItFits: 'Syndromic forms of retinal dystrophy (e.g. Usher syndrome with hearing loss) should be considered, since they change genetic counseling and the systemic workup.' },
      ],
      recommendedNextSteps: [
        'Electroretinogram to confirm and characterize rod/cone dysfunction',
        'Genetic testing and counseling given the range of inheritance patterns',
        'Screen for associated systemic/syndromic features (hearing loss, obesity, polydactyly) as clinically indicated',
      ],
      relatedDiseaseIds: ['retinitis-pigmentosa', 'usher-bardet-biedl-syndrome'],
      relatedExamTechniqueIds: ['electroretinogram', 'genetic-testing-inherited-retinal-disease', 'goldmann-kinetic-perimetry'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
    },
    'outcome-advanced-glaucoma-field': {
      id: 'outcome-advanced-glaucoma-field',
      type: 'outcome',
      title: 'Generalized Constriction — Advanced Glaucoma',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'primary-open-angle-glaucoma', whyItFits: 'A reliable generalized constriction (classically sparing a central island and a temporal crescent late in disease) in a patient with known advanced cupping increases suspicion for end-stage glaucomatous damage — interpret in context of prior field and OCT trends.' },
      ],
      mustNotMiss: [
        { diseaseId: 'retinitis-pigmentosa', whyItFits: 'A generalized constriction without a clearly progressive glaucomatous disc/OCT history should prompt reconsideration of a retinal dystrophy rather than assuming advanced glaucoma by default.' },
      ],
      recommendedNextSteps: [
        'Correlate with prior field and OCT trend data to confirm progressive glaucomatous loss rather than a new process',
        'Reassess IOP control and treatment escalation, since central vision is now at direct risk',
        'Consider a central (e.g. 10-2) field strategy to more precisely track the remaining central island',
      ],
      relatedDiseaseIds: ['primary-open-angle-glaucoma'],
      relatedExamTechniqueIds: ['humphrey-visual-field', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['abnormal-visual-field-workup', 'elevated-iop-glaucoma-suspect-workup'],
    },
    'outcome-functional-field-loss': {
      id: 'outcome-functional-field-loss',
      type: 'outcome',
      title: 'Generalized Constriction — Non-Physiologic (Functional) Pattern',
      urgency: 'Routine',
      mostLikely: [],
      mustNotMiss: [
        { diseaseId: 'retinitis-pigmentosa', whyItFits: 'A genuine organic constriction must still be actively excluded with a dilated exam, OCT, or ERG before attributing the finding to a functional (non-organic) cause — a non-physiologic field shape alone is suggestive but not fully diagnostic.' },
      ],
      recommendedNextSteps: [
        'Confirm the non-physiologic pattern (e.g. a tunnel field that fails to expand appropriately with target size/distance on kinetic testing)',
        'Complete a full organic workup (dilated exam, OCT, consider ERG) before concluding the loss is functional',
        'Approach the possibility of a functional component carefully and non-judgmentally, and consider psychology/psychiatry involvement if appropriate',
      ],
      relatedExamTechniqueIds: ['goldmann-kinetic-perimetry', 'electroretinogram'],
      relatedWorkupIds: ['abnormal-visual-field-workup'],
    },
  },
  references: [
    'Analysis of Reliability Indices from Humphrey Visual Field Tests in an Urban Glaucoma Population, Am J Ophthalmol 1997',
    'EyeWiki: Pituitary Adenoma',
    'Homonymous hemianopias: clinical-anatomic correlations in 904 cases, Neurology 2006',
    'AAO EyeWiki: Giant Cell Arteritis',
    'AAO: NAION — Diagnosis and Management, EyeNet Magazine',
  ],
}

const abnormalPupil: DecisionTree = {
  id: 'abnormal-pupil',
  name: 'Abnormal Pupil',
  aliases: ['Anisocoria', 'Pupil Abnormality', 'RAPD'],
  categories: ['clinical-finding'],
  summary:
    'Work up an abnormal pupil exam — anisocoria or an afferent defect — through emergency screening for a compressive CN III palsy, then localize to Horner syndrome, Adie tonic pupil, pharmacologic mydriasis, CN III palsy, or an optic nerve/retinal cause of RAPD.',
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'question',
      question:
        'Is there a new, unilateral, dilated pupil that reacts poorly (or not at all) to light, together with ptosis and restriction of eye movement (especially adduction, elevation, or depression)?',
      rationale:
        'This triad — a fixed, dilated pupil, ptosis, and motility restriction — is the classic presentation of a pupil-involving third nerve palsy, most concerning for a compressive posterior communicating artery aneurysm until emergently excluded.',
      isEmergencyScreen: true,
      options: [
        { id: 'start-yes', label: 'Yes — this triad is present', nextNodeId: 'outcome-cn3-palsy-pupil-involving', isRedFlag: true },
        { id: 'start-no', label: 'No — proceed with standard evaluation', nextNodeId: 'primary-abnormality' },
      ],
    },
    'primary-abnormality': {
      id: 'primary-abnormality',
      type: 'question',
      question:
        'Is the primary finding anisocoria (unequal pupil size), or a relative afferent pupillary defect (RAPD) on swinging flashlight testing with pupils that are otherwise round and equal in size?',
      options: [
        { id: 'primary-anisocoria', label: 'Anisocoria', nextNodeId: 'aniso-lighting' },
        { id: 'primary-rapd', label: 'RAPD with equal pupil sizes', nextNodeId: 'rapd-cause' },
      ],
    },
    'aniso-lighting': {
      id: 'aniso-lighting',
      type: 'question',
      question: 'Is the anisocoria greater in dim light or greater in bright light?',
      rationale:
        'Anisocoria that increases in the dark implicates the smaller pupil (a sympathetic/dilation problem); anisocoria that increases in the light implicates the larger pupil (a parasympathetic/constriction problem).',
      options: [
        { id: 'aniso-dark', label: 'Greater in dim light', nextNodeId: 'horner-screen' },
        { id: 'aniso-light', label: 'Greater in bright light', nextNodeId: 'light-pupil-cause' },
      ],
    },
    'horner-screen': {
      id: 'horner-screen',
      type: 'question',
      question: 'Is there associated ptosis and/or facial anhidrosis on the same side as the smaller pupil?',
      options: [
        { id: 'horner-yes', label: 'Yes, ptosis and/or anhidrosis present', nextNodeId: 'outcome-horner-syndrome' },
        { id: 'horner-no', label: 'No', nextNodeId: 'outcome-simple-anisocoria' },
      ],
    },
    'light-pupil-cause': {
      id: 'light-pupil-cause',
      type: 'question',
      question: 'What does the slit-lamp exam and history of the larger pupil show?',
      options: [
        { id: 'light-tonic', label: 'Segmental (sectoral) iris constriction with vermiform movement and slow, tonic redilation', nextNodeId: 'outcome-adie-tonic-pupil' },
        { id: 'light-drug', label: 'Recent exposure to a dilating/anticholinergic agent (drops, patch, plant material, nebulizer, or accidental transfer)', nextNodeId: 'outcome-pharmacologic-mydriasis' },
        { id: 'light-cn3', label: 'Ptosis and/or a motility deficit are also present', nextNodeId: 'outcome-cn3-palsy-variable' },
        { id: 'light-unclear', label: 'None of the above / cause unclear', nextNodeId: 'outcome-atypical-light-anisocoria' },
      ],
    },
    'rapd-cause': {
      id: 'rapd-cause',
      type: 'question',
      question:
        'Does dilated fundus exam/OCT show a severe, asymmetric retinal disease (e.g. extensive retinal detachment, central retinal artery/vein occlusion, severe ischemic diabetic retinopathy), or does the retina look essentially normal?',
      options: [
        { id: 'rapd-retinal', label: 'Severe asymmetric retinal disease present', nextNodeId: 'outcome-rapd-retinal-cause' },
        { id: 'rapd-normal', label: 'Retina looks essentially normal', nextNodeId: 'outcome-rapd-optic-nerve-cause' },
      ],
    },

    'outcome-cn3-palsy-pupil-involving': {
      id: 'outcome-cn3-palsy-pupil-involving',
      type: 'outcome',
      title: 'Pupil-Involving Third Nerve Palsy — Suspected Compressive Lesion',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'cn3-palsy', whyItFits: 'A dilated, poorly reactive pupil together with ptosis and a motility deficit increases suspicion for a third nerve palsy, and pupil involvement specifically increases suspicion for a compressive cause such as a posterior communicating artery aneurysm — interpret in context and image emergently.' },
      ],
      mustNotMiss: [
        { diseaseId: 'cn3-palsy', whyItFits: 'An aneurysm can rupture with catastrophic, potentially fatal subarachnoid hemorrhage — this presentation is treated as a neurosurgical emergency until an aneurysm is excluded, regardless of how convincing a vasculopathic story seems.' },
      ],
      recommendedNextSteps: [
        'Emergent CT angiography or MR angiography of the head to evaluate for a compressive aneurysm',
        'Emergent neurosurgery/neurology consultation',
        'Do not wait for a vascular risk factor review before imaging — pupil involvement overrides a presumed microvascular explanation',
      ],
      managementNotes:
        'The pupil-sparing vs. pupil-involving distinction is useful but imperfect — ischemic (microvascular) third nerve palsies can involve the pupil in up to roughly 20% of cases, and early compressive lesions can spare it, so many experts recommend neuroimaging for essentially all acute isolated third nerve palsies regardless of pupil status.',
      relatedDiseaseIds: ['cn3-palsy'],
      relatedExamTechniqueIds: ['pupillary-examination', 'extraocular-motility-testing'],
      relatedWorkupIds: ['isolated-cranial-nerve-palsy-workup', 'diplopia-workup'],
      relatedEmergencyProtocolIds: ['third-nerve-palsy-pupil-involving-protocol'],
      references: ['AAO: Diagnostic Considerations in an Acquired, Isolated Third Nerve Palsy, EyeNet Magazine'],
    },
    'outcome-horner-syndrome': {
      id: 'outcome-horner-syndrome',
      type: 'outcome',
      title: 'Horner Syndrome',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'horner-syndrome', whyItFits: 'Miosis that is greater in the dark, with ipsilateral ptosis and/or facial anhidrosis, increases suspicion for Horner syndrome — interpret in context of pharmacologic confirmation (e.g. apraclonidine reversing the anisocoria) and localize the lesion along the three-neuron oculosympathetic pathway.' },
      ],
      mustNotMiss: [
        { diseaseId: 'carotid-artery-dissection', whyItFits: 'A painful, acute-onset Horner syndrome — especially with neck or facial pain — must be treated as a carotid dissection until excluded, since this can precede a stroke.' },
      ],
      recommendedNextSteps: [
        'Confirm the diagnosis pharmacologically (e.g. apraclonidine, which reverses the anisocoria in Horner syndrome)',
        'If acute and painful, urgent CT/MR angiography of the neck to exclude carotid dissection',
        'If chronic/longstanding and painless, consider chest imaging to exclude an apical lung (Pancoast) tumor or other lesion along the sympathetic chain',
      ],
      relatedDiseaseIds: ['horner-syndrome', 'carotid-artery-dissection'],
      relatedDrugIds: ['apraclonidine'],
      relatedExamTechniqueIds: ['pupillary-examination'],
      relatedWorkupIds: ['anisocoria-workup'],
      references: ['Apraclonidine Is Better Than Cocaine for Detection of Horner Syndrome, PMC (Ophthalmology)'],
    },
    'outcome-simple-anisocoria': {
      id: 'outcome-simple-anisocoria',
      type: 'outcome',
      title: 'Anisocoria Without Ptosis or Anhidrosis — Likely Physiologic',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'horner-syndrome', whyItFits: 'Mild anisocoria that is greater in the dark but has no ptosis or anhidrosis and is stable across repeated exams increases suspicion for simple (physiologic/essential) anisocoria rather than Horner syndrome — interpret this as reassuring, not diagnostic on its own.' },
      ],
      mustNotMiss: [
        { diseaseId: 'horner-syndrome', whyItFits: 'A subtle Horner syndrome can be missed on a single exam — if there is any doubt, compare old photographs and consider pharmacologic testing before finalizing a benign diagnosis.' },
      ],
      recommendedNextSteps: [
        'Compare with old photographs to confirm the anisocoria is longstanding and stable',
        'Consider pharmacologic testing if any uncertainty remains',
        'Reassure the patient once a benign, stable pattern is confirmed',
      ],
      relatedExamTechniqueIds: ['pupillary-examination'],
      relatedWorkupIds: ['anisocoria-workup'],
    },
    'outcome-adie-tonic-pupil': {
      id: 'outcome-adie-tonic-pupil',
      type: 'outcome',
      title: 'Adie (Holmes-Adie) Tonic Pupil',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'adies-tonic-pupil', whyItFits: 'A larger pupil with light-near dissociation, segmental vermiform iris movement, and slow tonic redilation increases suspicion for Adie tonic pupil — interpret in context of dilute (0.1%) pilocarpine testing, which shows denervation supersensitivity by constricting the tonic pupil but not a normal one.' },
      ],
      mustNotMiss: [
        { diseaseId: 'cn3-palsy', whyItFits: 'Confirm there is no ptosis or motility deficit, which would instead suggest a third nerve palsy and substantially change the urgency.' },
      ],
      recommendedNextSteps: [
        'Confirm with dilute (0.1%) pilocarpine testing, looking for denervation supersensitivity',
        'Check deep tendon reflexes (diminished reflexes plus a tonic pupil is Holmes-Adie syndrome)',
        'Reassure the patient — this is a benign condition, though anisocoria and near/light symptoms may persist',
      ],
      relatedDiseaseIds: ['adies-tonic-pupil'],
      relatedDrugIds: ['pilocarpine'],
      relatedExamTechniqueIds: ['pupillary-examination'],
      relatedWorkupIds: ['anisocoria-workup'],
      references: ['Dilute pilocarpine test for diagnosis of Adie tonic pupil, PMC'],
    },
    'outcome-pharmacologic-mydriasis': {
      id: 'outcome-pharmacologic-mydriasis',
      type: 'outcome',
      title: 'Pharmacologic Mydriasis',
      urgency: 'Routine',
      mostLikely: [],
      mustNotMiss: [
        { diseaseId: 'cn3-palsy', whyItFits: 'Before attributing a fixed, dilated pupil to drug exposure, confirm there is no ptosis or motility deficit — a third nerve palsy remains the must-exclude diagnosis whenever a mydriatic exposure is not clearly confirmed by history.' },
      ],
      recommendedNextSteps: [
        'Confirm with 1% pilocarpine: a pharmacologically dilated pupil will not constrict (or will constrict only minimally), whereas a tonic pupil, a third-nerve-palsy pupil, or a Horner pupil will constrict',
        'Take a directed exposure history (recent eye drops, transdermal patches, plant material, inhaler/nebulizer use, or accidental transfer during contact with another person)',
        'Reassure the patient that the pupil will return to normal once the agent wears off',
      ],
      relatedDiseaseIds: ['cn3-palsy'],
      relatedDrugIds: ['tropicamide', 'atropine', 'phenylephrine', 'cyclopentolate'],
      relatedExamTechniqueIds: ['pupillary-examination'],
      relatedWorkupIds: ['anisocoria-workup'],
      references: ['EyeWiki: Pharmacologic Dilation of Pupil'],
    },
    'outcome-cn3-palsy-variable': {
      id: 'outcome-cn3-palsy-variable',
      type: 'outcome',
      title: 'Anisocoria with Ptosis/Motility Deficit — Third Nerve Palsy',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'cn3-palsy', whyItFits: 'Anisocoria greater in bright light together with ptosis and/or a motility deficit increases suspicion for a third nerve palsy — interpret any degree of pupil involvement as raising, not lowering, the priority for emergent imaging.' },
      ],
      mustNotMiss: [
        { diseaseId: 'cn3-palsy', whyItFits: 'Even partial or milder pupil involvement does not reliably exclude a compressive lesion — many experts recommend neuroimaging for essentially all acute isolated third nerve palsies regardless of the degree of pupil involvement.' },
      ],
      recommendedNextSteps: [
        'Emergent CT/MR angiography to evaluate for a compressive aneurysm',
        'Full assessment of all extraocular muscles and eyelid position to characterize completeness of the palsy',
        'Neurology/neurosurgery consultation',
      ],
      relatedDiseaseIds: ['cn3-palsy'],
      relatedExamTechniqueIds: ['pupillary-examination', 'extraocular-motility-testing'],
      relatedWorkupIds: ['isolated-cranial-nerve-palsy-workup', 'diplopia-workup'],
      relatedEmergencyProtocolIds: ['third-nerve-palsy-pupil-involving-protocol'],
    },
    'outcome-atypical-light-anisocoria': {
      id: 'outcome-atypical-light-anisocoria',
      type: 'outcome',
      title: 'Light-Predominant Anisocoria — Cause Unclear',
      urgency: 'Prompt',
      mostLikely: [],
      mustNotMiss: [
        { diseaseId: 'cn3-palsy', whyItFits: 'When no clear cause is identified on initial exam, a subtle or evolving third nerve palsy must still be actively excluded with a repeat motility exam and, if any doubt remains, neuroimaging, rather than defaulting to a benign explanation.' },
      ],
      recommendedNextSteps: [
        'Repeat the exam, including a careful motility and ptosis assessment, at a short interval',
        'Pharmacologic testing (dilute then standard-strength pilocarpine) to narrow the differential',
        'Neuroimaging if the picture does not resolve into a clear benign pattern',
      ],
      relatedExamTechniqueIds: ['pupillary-examination', 'extraocular-motility-testing'],
      relatedWorkupIds: ['anisocoria-workup'],
    },
    'outcome-rapd-retinal-cause': {
      id: 'outcome-rapd-retinal-cause',
      type: 'outcome',
      title: 'RAPD from Severe Asymmetric Retinal Disease',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'retinal-detachment', whyItFits: 'An RAPD with extensive retinal detachment or another severe, asymmetric retinal process increases suspicion that the retinal disease itself, not the optic nerve, is producing the reduced afferent signal.' },
        { diseaseId: 'retinal-artery-occlusion', whyItFits: 'A dense, sudden RAPD with severe painless vision loss also increases suspicion for a retinal vascular occlusion as the cause.' },
      ],
      mustNotMiss: [
        { diseaseId: 'retinal-artery-occlusion', whyItFits: 'A central retinal artery occlusion is itself a time-sensitive emergency in its own right — if this has not already been evaluated urgently, escalate immediately regardless of the pupil finding.' },
      ],
      recommendedNextSteps: [
        'Address the underlying retinal diagnosis urgently on its own timeline (e.g. urgent retina referral for detachment, stroke-style emergency workup for artery occlusion)',
        'Document the RAPD to support future comparison and prognosis',
        'OCT and dilated exam of both eyes for comparison',
      ],
      relatedDiseaseIds: ['retinal-detachment', 'retinal-artery-occlusion'],
      relatedExamTechniqueIds: ['pupillary-examination', 'dilated-fundus-examination-systematic-approach', 'oct-macula'],
      relatedWorkupIds: ['rapd-found-on-exam-workup'],
    },
    'outcome-rapd-optic-nerve-cause': {
      id: 'outcome-rapd-optic-nerve-cause',
      type: 'outcome',
      title: 'RAPD from Optic Nerve Disease',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'optic-neuritis', whyItFits: 'An RAPD with a normal-appearing retina increases suspicion for an asymmetric optic neuropathy such as optic neuritis — interpret in context of pain, age, and disc appearance.' },
        { diseaseId: 'naion', whyItFits: 'In an older patient, the same RAPD-with-normal-retina pattern instead increases suspicion for an ischemic optic neuropathy.' },
      ],
      mustNotMiss: [
        { diseaseId: 'giant-cell-arteritis', whyItFits: 'In a patient over 50, screen for GCA symptoms before assuming a non-arteritic cause, given how rapidly arteritic disease can progress to bilateral loss.' },
      ],
      recommendedNextSteps: [
        'Full optic nerve workup: disc exam, color vision, and formal visual field testing',
        'MRI brain/orbits if a demyelinating or compressive cause is suspected',
        'GCA screen (ESR/CRP) in patients over 50',
      ],
      relatedDiseaseIds: ['optic-neuritis', 'naion'],
      relatedExamTechniqueIds: ['pupillary-examination', 'humphrey-visual-field', 'ishihara-color-vision-screening'],
      relatedWorkupIds: ['rapd-found-on-exam-workup'],
    },
  },
  references: [
    'Apraclonidine Is Better Than Cocaine for Detection of Horner Syndrome, PMC (Ophthalmology)',
    'Dilute pilocarpine test for diagnosis of Adie tonic pupil, PMC',
    'AAO: Diagnostic Considerations in an Acquired, Isolated Third Nerve Palsy, EyeNet Magazine',
    'EyeWiki: Relative Afferent Pupillary Defect',
    'EyeWiki: Pharmacologic Dilation of Pupil',
  ],
}

const cornealInfiltrateOrUlcer: DecisionTree = {
  id: 'corneal-infiltrate-or-ulcer',
  name: 'Corneal Infiltrate or Ulcer',
  aliases: ['Corneal Ulcer', 'Keratitis Triage'],
  categories: ['clinical-finding'],
  summary:
    'Triage a corneal infiltrate for vision-threatening size/location or perforation, then work through contact lens history and staining/anterior chamber findings to sterile marginal infiltrate, microbial keratitis, contact-lens-related keratitis, or a herpetic dendrite.',
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start',
      type: 'question',
      question:
        'Is the infiltrate large (over 2mm) and centrally/paracentrally located with a marked anterior chamber reaction, or is there any suspicion of perforation (e.g. a visibly flat/shallow anterior chamber, or pain out of proportion with a soft eye)?',
      rationale:
        'Large, central, vision-threatening infiltrates and any suspicion of perforation change management immediately — cultures, fortified antibiotics, and possibly surgical intervention cannot wait for the rest of the workup.',
      isEmergencyScreen: true,
      options: [
        { id: 'start-yes', label: 'Yes — large/central/vision-threatening or perforation suspected', nextNodeId: 'seidel-check', isRedFlag: true },
        { id: 'start-no', label: 'No — proceed with standard evaluation', nextNodeId: 'cl-wearer' },
      ],
    },
    'seidel-check': {
      id: 'seidel-check',
      type: 'question',
      question: 'Is Seidel testing positive (a stream of diluted, dark fluorescein indicating an active aqueous leak)?',
      rationale:
        'A positive Seidel test confirms a full-thickness corneal defect (perforation) and is managed as an open-globe injury; a negative Seidel test with a large, severe infiltrate is instead managed as vision-threatening (often necrotizing) microbial keratitis.',
      options: [
        { id: 'seidel-yes', label: 'Yes, Seidel-positive', nextNodeId: 'outcome-corneal-perforation' },
        { id: 'seidel-no', label: 'No, Seidel-negative', nextNodeId: 'outcome-severe-microbial-keratitis' },
      ],
    },
    'cl-wearer': {
      id: 'cl-wearer',
      type: 'question',
      question: 'Is the patient a contact lens wearer?',
      options: [
        { id: 'cl-yes', label: 'Yes', nextNodeId: 'cl-infiltrate-type' },
        { id: 'cl-no', label: 'No', nextNodeId: 'staining-pattern' },
      ],
    },
    'cl-infiltrate-type': {
      id: 'cl-infiltrate-type',
      type: 'question',
      question: 'What do the infiltrate size, epithelial staining, and anterior chamber reaction show?',
      options: [
        { id: 'cl-clpu', label: 'Small (under 2mm), focal, with an overlying epithelial defect, mild pain, minimal AC reaction', nextNodeId: 'outcome-clpu' },
        { id: 'cl-clare', label: 'Multiple small peripheral infiltrates without an overlying epithelial defect, more diffuse redness and pain', nextNodeId: 'outcome-clare' },
        { id: 'cl-mk', label: 'Larger or central infiltrate with a significant epithelial defect, marked AC reaction (+/- hypopyon), mucopurulent discharge', nextNodeId: 'outcome-cl-microbial-keratitis' },
      ],
    },
    'staining-pattern': {
      id: 'staining-pattern',
      type: 'question',
      question: 'What does the staining pattern and clinical picture show?',
      options: [
        { id: 'stain-hsv', label: 'A branching (dendritic) lesion with terminal bulbs, fluorescein staining centrally with rose bengal/lissamine green staining of the swollen edges, reduced corneal sensation', nextNodeId: 'outcome-hsv-dendrite' },
        { id: 'stain-marginal', label: 'A small peripheral infiltrate separated from the limbus by a 1-2mm clear zone, minimal-to-no AC reaction, mild pain', nextNodeId: 'outcome-sterile-marginal-infiltrate' },
        { id: 'stain-bacterial', label: 'A central/paracentral infiltrate, larger, significant AC reaction (+/- hypopyon), mucopurulent discharge, significant pain', nextNodeId: 'outcome-bacterial-keratitis' },
        { id: 'stain-fungal', label: 'A feathery infiltrate with satellite lesions, after plant/vegetable matter trauma or in an immunocompromised patient', nextNodeId: 'outcome-fungal-keratitis' },
      ],
    },

    'outcome-corneal-perforation': {
      id: 'outcome-corneal-perforation',
      type: 'outcome',
      title: 'Corneal Perforation (Seidel-Positive)',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'open-globe-injury', whyItFits: 'A positive Seidel test in the setting of a corneal infiltrate confirms a full-thickness defect and an open globe — interpret and manage this as a surgical emergency regardless of the underlying infiltrate cause.' },
      ],
      mustNotMiss: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'The underlying infectious cause still needs to be identified and treated, ideally with cultures obtained before or at the time of surgical repair if feasible without delaying closure.' },
      ],
      recommendedNextSteps: [
        'Protect the eye with a rigid shield immediately — no further manipulation, drops, or pressure on the globe',
        'Emergent ophthalmology/cornea consultation for surgical repair',
        'Obtain cultures at the time of repair if possible; start broad-spectrum systemic and topical antibiotics per open-globe protocol',
      ],
      relatedDiseaseIds: ['open-globe-injury', 'bacterial-keratitis'],
      relatedExamTechniqueIds: ['seidel-test', 'corneal-culture-and-scraping'],
      relatedWorkupIds: ['ocular-pain-workup'],
      relatedEmergencyProtocolIds: ['open-globe-injury-protocol'],
      references: ['EyeWiki: Seidel Test'],
    },
    'outcome-severe-microbial-keratitis': {
      id: 'outcome-severe-microbial-keratitis',
      type: 'outcome',
      title: 'Severe (Vision-Threatening) Microbial Keratitis',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'A large, central, significantly inflamed infiltrate with a negative Seidel test increases suspicion for severe bacterial microbial keratitis — interpret in context of culture results, which should guide, not delay, initial broad-spectrum therapy.' },
      ],
      mustNotMiss: [
        { diseaseId: 'fungal-keratitis', whyItFits: 'A history of plant/organic matter trauma, agricultural work, or an immunocompromised state should raise suspicion for a fungal cause, which is treated very differently and can worsen with corticosteroids.' },
        { diseaseId: 'acanthamoeba-keratitis', whyItFits: 'In a contact lens wearer, especially with pain out of proportion to exam findings or tap-water/well-water lens exposure, Acanthamoeba must be actively excluded, since it is easily mistaken for and mistreated as bacterial keratitis.' },
      ],
      recommendedNextSteps: [
        'Corneal culture and scraping before starting antibiotics whenever feasible',
        'Begin fortified/broad-spectrum topical antibiotics empirically without waiting for culture results',
        'Frequent (often hourly) follow-up until clear improvement is documented',
      ],
      managementNotes:
        'Avoid empiric topical corticosteroids until an infectious cause has been adequately treated and the diagnosis is secure — steroids can dramatically worsen fungal or Acanthamoeba keratitis.',
      relatedDiseaseIds: ['bacterial-keratitis', 'fungal-keratitis', 'acanthamoeba-keratitis'],
      relatedDrugIds: ['moxifloxacin', 'vancomycin-ophthalmic-fortified', 'cefazolin-ophthalmic-fortified', 'tobramycin'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'anterior-chamber-cell-flare-grading', 'fluorescein-corneal-staining'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
      relatedEmergencyProtocolIds: ['necrotizing-microbial-keratitis-protocol'],
      references: ['AAO Preferred Practice Pattern: Bacterial Keratitis', 'Distinguishing fungal and bacterial keratitis on clinical signs, PMC'],
    },
    'outcome-clpu': {
      id: 'outcome-clpu',
      type: 'outcome',
      title: 'Contact Lens-Induced Peripheral Ulcer (CLPU)',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'contact-lens-induced-peripheral-ulcer', whyItFits: 'A small, focal, peripheral infiltrate with an overlying epithelial defect, mild pain, and minimal anterior chamber reaction in a contact lens wearer increases suspicion for a sterile CLPU — interpret in context, as this is thought to be a hypersensitivity/toxic reaction rather than active infection.' },
      ],
      mustNotMiss: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'Because CLPU and early bacterial microbial keratitis can look similar, close follow-up (not a single reassuring visit) is what confirms the sterile diagnosis — worsening pain, size, or anterior chamber reaction should prompt reclassification and culture.' },
      ],
      recommendedNextSteps: [
        'Discontinue contact lens wear until fully resolved',
        'Close follow-up within 24-48 hours to confirm improvement rather than progression',
        'A prophylactic topical antibiotic is often used given the overlying epithelial defect, even though the process is presumed sterile',
      ],
      relatedDiseaseIds: ['contact-lens-induced-peripheral-ulcer', 'bacterial-keratitis'],
      relatedExamTechniqueIds: ['contact-lens-staining-grading', 'fluorescein-corneal-staining'],
      relatedWorkupIds: ['contact-lens-complication-workup'],
      references: ['College of Optometrists: Keratitis, CL-associated infiltrative'],
    },
    'outcome-clare': {
      id: 'outcome-clare',
      type: 'outcome',
      title: 'Contact Lens-Associated Acute Red Eye (CLARE)',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'clare-contact-lens-acute-red-eye', whyItFits: 'Multiple small peripheral infiltrates without an overlying epithelial defect, with more diffuse redness and pain (often noticed on lens removal or the morning after overnight wear), increases suspicion for CLARE — interpret as an inflammatory reaction to lens-trapped bacterial toxins rather than active infection.' },
      ],
      mustNotMiss: [
        { diseaseId: 'infiltrative-keratitis-contact-lens', whyItFits: 'If an epithelial defect is found on closer staining, reclassify toward an infiltrative/infectious process rather than CLARE, since the absence of an epithelial defect is a key part of what makes CLARE sterile.' },
      ],
      recommendedNextSteps: [
        'Discontinue contact lens wear, especially any overnight/extended wear',
        'Symptomatic treatment; antibiotics are not routinely required since this is a sterile inflammatory reaction',
        'Review lens hygiene and wear schedule before refitting, since recurrence is common with continued overnight wear',
      ],
      relatedDiseaseIds: ['clare-contact-lens-acute-red-eye', 'infiltrative-keratitis-contact-lens'],
      relatedExamTechniqueIds: ['contact-lens-staining-grading', 'fluorescein-corneal-staining'],
      relatedWorkupIds: ['contact-lens-complication-workup'],
      references: ['Bringing Clarity to CLARE, Review of Contact Lenses'],
    },
    'outcome-cl-microbial-keratitis': {
      id: 'outcome-cl-microbial-keratitis',
      type: 'outcome',
      title: 'Contact Lens-Related Microbial Keratitis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'A larger or central infiltrate with a significant epithelial defect, marked anterior chamber reaction, and mucopurulent discharge in a contact lens wearer increases suspicion for true infectious keratitis rather than a sterile contact-lens reaction — interpret in context of culture results.' },
      ],
      mustNotMiss: [
        { diseaseId: 'acanthamoeba-keratitis', whyItFits: 'Contact lens wear is the leading risk factor for Acanthamoeba keratitis, especially with tap-water or well-water exposure to lenses/cases or lens wear while swimming/showering — pain out of proportion to exam findings or a ring infiltrate should prompt specific Acanthamoeba culture/PCR and confocal microscopy, since standard antibacterial therapy will not treat it.' },
      ],
      recommendedNextSteps: [
        'Discontinue contact lens wear immediately and bring in the lens, case, and solution for culture',
        'Corneal culture and scraping before starting antibiotics',
        'Begin broad-spectrum topical antibiotic therapy empirically while awaiting culture results, with close follow-up',
      ],
      relatedDiseaseIds: ['bacterial-keratitis', 'acanthamoeba-keratitis'],
      relatedDrugIds: ['moxifloxacin', 'tobramycin'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'contact-lens-staining-grading', 'anterior-chamber-cell-flare-grading'],
      relatedWorkupIds: ['contact-lens-complication-workup', 'red-eye-workup'],
      references: ['Intruder Alert: Diagnosing Corneal Infiltrative Disease, Review of Optometry'],
    },
    'outcome-hsv-dendrite': {
      id: 'outcome-hsv-dendrite',
      type: 'outcome',
      title: 'Herpes Simplex Dendritic (Epithelial) Keratitis',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        { diseaseId: 'hsv-keratitis', whyItFits: 'A branching dendritic lesion with terminal bulbs, staining fluorescein at its base and rose bengal/lissamine green at its swollen edges, with reduced corneal sensation, increases suspicion for herpes simplex epithelial keratitis — interpret in context of any prior HSV history, and avoid topical corticosteroids until this is confirmed and treated.' },
      ],
      mustNotMiss: [
        { diseaseId: 'hzo', whyItFits: 'A pseudodendrite (which stains poorly, lacks true terminal bulbs, and is less well-demarcated) with a vesicular rash in a V1 dermatome instead suggests herpes zoster ophthalmicus, which is managed differently.' },
      ],
      recommendedNextSteps: [
        'Begin topical antiviral therapy (e.g. trifluridine or ganciclovir gel) and/or oral antiviral therapy',
        'Avoid topical corticosteroids for epithelial disease — they can worsen active dendritic keratitis',
        'Test corneal sensation, since reduced sensation supports HSV and also affects future recurrence/neurotrophic risk',
      ],
      relatedDiseaseIds: ['hsv-keratitis', 'hzo'],
      relatedDrugIds: ['trifluridine', 'ganciclovir-gel', 'acyclovir-oral', 'valacyclovir-oral'],
      relatedExamTechniqueIds: ['fluorescein-corneal-staining', 'lissamine-green-rose-bengal-staining', 'corneal-sensation-testing'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
      references: ['Herpes Simplex Keratitis: Managing the Masquerader, Review of Contact Lenses'],
    },
    'outcome-sterile-marginal-infiltrate': {
      id: 'outcome-sterile-marginal-infiltrate',
      type: 'outcome',
      title: 'Sterile Marginal (Staphylococcal Hypersensitivity) Infiltrate',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'blepharitis', whyItFits: 'A small peripheral infiltrate separated from the limbus by a clear zone, with minimal anterior chamber reaction and mild pain, increases suspicion for a sterile marginal infiltrate driven by staphylococcal hypersensitivity from underlying blepharitis — interpret in context of the lid margin exam.' },
      ],
      mustNotMiss: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'Because early infectious infiltrates can look deceptively mild, confirm the clear zone from the limbus and the absence of a significant anterior chamber reaction before committing to a sterile diagnosis, and arrange follow-up to confirm improvement rather than progression.' },
      ],
      recommendedNextSteps: [
        'Treat the underlying blepharitis (lid hygiene plus a short course of a combination antibiotic-steroid or a topical antibiotic if any epithelial breakdown is present)',
        'A brief course of a mild topical corticosteroid can be considered once an infectious cause is confidently excluded, to speed resolution of the inflammatory infiltrate',
        'Short-interval follow-up to confirm the expected improvement',
      ],
      relatedDiseaseIds: ['blepharitis', 'bacterial-keratitis'],
      relatedDrugIds: ['loteprednol-etabonate', 'fluorometholone'],
      relatedExamTechniqueIds: ['fluorescein-corneal-staining', 'lid-margin-blepharitis-assessment', 'slit-lamp-illumination-techniques'],
      relatedWorkupIds: ['red-eye-workup'],
      references: ['EyeWiki: Marginal Keratitis'],
    },
    'outcome-bacterial-keratitis': {
      id: 'outcome-bacterial-keratitis',
      type: 'outcome',
      title: 'Bacterial Keratitis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'A central/paracentral infiltrate with a significant anterior chamber reaction, mucopurulent discharge, and significant pain increases suspicion for bacterial keratitis — interpret in context of culture results, which should guide, not delay, initial broad-spectrum therapy.' },
      ],
      mustNotMiss: [
        { diseaseId: 'fungal-keratitis', whyItFits: 'A history of organic/plant trauma, slow indolent progression, or a feathery/satellite appearance should raise suspicion for a fungal cause instead, since empiric antibacterial therapy alone will not treat it and steroids can worsen it.' },
      ],
      recommendedNextSteps: [
        'Corneal culture and scraping, especially for infiltrates that are large, central, or not responding to initial therapy',
        'Begin broad-spectrum (often fortified, for larger/more severe infiltrates) topical antibiotic therapy',
        'Close follow-up (often daily initially) to confirm response before tapering therapy',
      ],
      relatedDiseaseIds: ['bacterial-keratitis', 'fungal-keratitis'],
      relatedDrugIds: ['moxifloxacin', 'ciprofloxacin', 'ofloxacin', 'besifloxacin'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'anterior-chamber-cell-flare-grading', 'fluorescein-corneal-staining'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
      references: ['AAO Preferred Practice Pattern: Bacterial Keratitis', 'Understanding Corneal Ulcers and Infiltrates, Review of Optometry'],
    },
    'outcome-fungal-keratitis': {
      id: 'outcome-fungal-keratitis',
      type: 'outcome',
      title: 'Suspected Fungal Keratitis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'fungal-keratitis', whyItFits: 'A feathery infiltrate with satellite lesions after plant/vegetable matter trauma, or in an immunocompromised patient or chronic topical steroid user, increases suspicion for fungal keratitis — interpret in context of culture on appropriate fungal media, since routine bacterial culture alone can miss it.' },
      ],
      mustNotMiss: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'Mixed bacterial-fungal infection can occur, and empiric antibacterial coverage is generally continued while fungal culture/stain results and antifungal therapy are pending.' },
      ],
      recommendedNextSteps: [
        'Corneal culture and scraping with specific request for fungal stains/culture media',
        'Begin topical antifungal therapy once fungal keratitis is suspected, without waiting for full culture confirmation if clinical suspicion is high',
        'Avoid topical corticosteroids, which can significantly worsen fungal keratitis',
      ],
      relatedDiseaseIds: ['fungal-keratitis', 'bacterial-keratitis'],
      relatedDrugIds: ['natamycin', 'voriconazole-topical', 'amphotericin-b-topical'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'anterior-chamber-cell-flare-grading'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
      references: ['Distinguishing fungal and bacterial keratitis on clinical signs, PMC'],
    },
  },
  references: [
    'EyeWiki: Seidel Test',
    'EyeWiki: Marginal Keratitis',
    'AAO Preferred Practice Pattern: Bacterial Keratitis',
    'EyeWiki: Herpes Simplex Epithelial Keratitis',
    'Bringing Clarity to CLARE, Review of Contact Lenses',
  ],
}

export const clinicalFindingTrees: DecisionTree[] = [
  elevatedIop,
  opticDiscAbnormality,
  abnormalVisualField,
  abnormalPupil,
  cornealInfiltrateOrUlcer,
]
