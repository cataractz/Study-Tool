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

export const clinicalFindingTrees: DecisionTree[] = [elevatedIop]
