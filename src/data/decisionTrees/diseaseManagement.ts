import type { DecisionTree } from '../../types/decisionTree'

const diabeticEyeExamDecision: DecisionTree = {
  id: 'diabetic-eye-exam-decision',
  name: 'Diabetic Eye Exam Decision',
  aliases: ['Diabetic Retinopathy Staging', 'Diabetic Eye Exam Referral Workup'],
  categories: ['disease-management'],
  summary:
    'Stage diabetic retinopathy severity by the ICDR scale, evaluate for center-involving vs. non-center-involving macular edema, and route to the correct follow-up or referral interval.',
  startNodeId: 'emergency-screen',
  nodes: {
    'emergency-screen': {
      id: 'emergency-screen',
      type: 'question',
      question:
        'Does the patient report sudden decreased vision, a shower of new floaters, a dark curtain/shadow in the visual field, or does the exam show a hazy/obscured fundus view consistent with vitreous hemorrhage, in an eye with known or suspected proliferative diabetic retinopathy (PDR)?',
      rationale:
        'Vitreous hemorrhage or tractional retinal detachment from PDR neovascularization can cause sudden, painless vision loss and needs an urgent retina referral rather than a routine staged follow-up.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-yes',
          label: 'Yes — this pattern is present',
          nextNodeId: 'outcome-vh-trd-emergency',
          isRedFlag: true,
        },
        { id: 'screen-no', label: 'No — proceed with standard staging', nextNodeId: 'dm-type' },
      ],
    },
    'dm-type': {
      id: 'dm-type',
      type: 'question',
      question: 'What type of diabetes does the patient have, and how long ago were they diagnosed?',
      rationale:
        'Retinopathy is rare in type 1 diabetes before roughly 5 years post-diagnosis (screening for type 1 typically begins around then, often earlier if post-pubertal or poorly controlled), whereas type 2 diabetes can have unrecognized hyperglycemia for years before diagnosis, so retinopathy can already be present at the time of diagnosis — screening for type 2 begins at diagnosis.',
      options: [
        {
          id: 'dm-type1-early',
          label: 'Type 1 diabetes, diagnosed less than ~5 years ago, asymptomatic',
          description: 'No visual symptoms and no prior dilated exam finding of concern.',
          nextNodeId: 'outcome-first-screening-not-due',
        },
        {
          id: 'dm-type1-late-or-type2',
          label: 'Type 1 diabetes diagnosed 5+ years ago, or type 2 diabetes of any duration',
          nextNodeId: 'dilated-exam-finding',
        },
      ],
    },
    'dilated-exam-finding': {
      id: 'dilated-exam-finding',
      type: 'question',
      question: 'What does the dilated fundus exam show, staged per the International Clinical Diabetic Retinopathy (ICDR) Disease Severity Scale?',
      rationale:
        'The ICDR scale stages severity as: no apparent retinopathy; mild NPDR (microaneurysms only); moderate NPDR (microaneurysms plus hemorrhages, hard exudates, and/or cotton-wool spots, not yet meeting severe criteria); severe NPDR (the "4-2-1 rule" — diffuse intraretinal hemorrhages in all 4 quadrants, venous beading in ≥2 quadrants, or prominent IRMA in ≥1 quadrant, with no neovascularization); and PDR (neovascularization of the disc/elsewhere and/or vitreous/preretinal hemorrhage).',
      options: [
        { id: 'finding-none', label: 'No apparent retinopathy', nextNodeId: 'control-check' },
        {
          id: 'finding-mild',
          label: 'Mild NPDR — microaneurysms only',
          nextNodeId: 'edema-mild',
        },
        {
          id: 'finding-moderate',
          label: 'Moderate NPDR — microaneurysms plus hemorrhages, hard exudates, and/or cotton-wool spots, not meeting severe criteria',
          nextNodeId: 'edema-moderate',
        },
        {
          id: 'finding-severe',
          label: 'Severe NPDR — meets the 4-2-1 rule (diffuse hemorrhages in all 4 quadrants, venous beading in ≥2 quadrants, or IRMA in ≥1 quadrant), no neovascularization',
          nextNodeId: 'outcome-severe-npdr',
        },
        {
          id: 'finding-pdr',
          label: 'Neovascularization present (disc or elsewhere) — proliferative diabetic retinopathy',
          nextNodeId: 'pdr-features',
        },
      ],
    },
    'control-check': {
      id: 'control-check',
      type: 'question',
      question:
        "Is the patient's glycemic control well managed (e.g., A1c generally under an individualized target, often ~7%), or is it poorly controlled / unknown?",
      rationale:
        'Poor glycemic control raises the risk of retinopathy developing or progressing rapidly even when the current exam is clean, which should shorten the follow-up interval and prompt coordination with the managing physician.',
      options: [
        { id: 'control-good', label: 'Well controlled', nextNodeId: 'outcome-no-dr-well-controlled' },
        { id: 'control-poor', label: 'Poorly controlled, erratic, or unknown', nextNodeId: 'outcome-no-dr-poor-control' },
      ],
    },
    'edema-mild': {
      id: 'edema-mild',
      type: 'question',
      question: 'Is diabetic macular edema (DME) present on exam/OCT, and if so, is it center-involving or non-center-involving?',
      rationale:
        'DME is graded as a separate axis from NPDR/PDR severity. Center-involving DME (retinal thickening involving the central 1 mm subfield) drives referral timing more than mild NPDR alone does; non-center-involving DME is often observed but still needs closer monitoring than no edema.',
      options: [
        { id: 'mild-edema-none', label: 'No macular edema', nextNodeId: 'outcome-mild-no-edema' },
        { id: 'mild-edema-nci', label: 'Non-center-involving DME', nextNodeId: 'outcome-nci-dme' },
        { id: 'mild-edema-ci', label: 'Center-involving DME', nextNodeId: 'outcome-ci-dme' },
      ],
    },
    'edema-moderate': {
      id: 'edema-moderate',
      type: 'question',
      question: 'Is diabetic macular edema (DME) present on exam/OCT, and if so, is it center-involving or non-center-involving?',
      rationale:
        'As with mild NPDR, DME status is assessed independently of NPDR severity and materially changes referral urgency, particularly when center-involving.',
      options: [
        { id: 'moderate-edema-none', label: 'No macular edema', nextNodeId: 'outcome-moderate-no-edema' },
        { id: 'moderate-edema-nci', label: 'Non-center-involving DME', nextNodeId: 'outcome-nci-dme' },
        { id: 'moderate-edema-ci', label: 'Center-involving DME', nextNodeId: 'outcome-ci-dme' },
      ],
    },
    'pdr-features': {
      id: 'pdr-features',
      type: 'question',
      question:
        'Are high-risk PDR features present (per classic ETDRS criteria: neovascularization of the disc reaching a size threshold, or any neovascularization accompanied by vitreous/preretinal hemorrhage), or is there a vitreous hemorrhage obscuring the view or a tractional retinal detachment?',
      rationale:
        'This distinguishes exam-detected PDR that is still amenable to prompt outpatient laser/anti-VEGF referral from PDR that has already produced a vision-threatening complication needing the same urgent pathway as the emergency screen above.',
      options: [
        {
          id: 'pdr-high-risk',
          label: 'High-risk neovascularization features, no hemorrhage or traction yet',
          nextNodeId: 'outcome-pdr-high-risk',
        },
        {
          id: 'pdr-hemorrhage-traction',
          label: 'Vitreous hemorrhage obscuring the view, or tractional retinal detachment',
          nextNodeId: 'outcome-vh-trd-emergency',
          isRedFlag: true,
        },
      ],
    },

    'outcome-vh-trd-emergency': {
      id: 'outcome-vh-trd-emergency',
      type: 'outcome',
      title: 'Vitreous Hemorrhage / Tractional Retinal Detachment — Emergency Retina Referral',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'vitreous-hemorrhage',
          whyItFits:
            'Sudden painless vision loss with new floaters or an obscured fundus view in a patient with known or suspected PDR increases suspicion for vitreous hemorrhage from friable retinal neovascularization — interpret in context of the exam findings.',
        },
        {
          diseaseId: 'tractional-exudative-retinal-detachment',
          whyItFits:
            'Fibrovascular proliferation from PDR can contract and pull the retina, increasing suspicion for a tractional retinal detachment, especially when a curtain/shadow is described — interpret in context.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'tractional-exudative-retinal-detachment',
          whyItFits:
            'A tractional detachment threatening or involving the macula is vision-threatening on a timescale of days, not months — do not defer this to the next routine diabetic eye exam slot.',
        },
      ],
      recommendedNextSteps: [
        'Same-day or emergency retina referral',
        'B-scan ultrasonography if the fundus view is too hazy for direct visualization, to assess for underlying retinal detachment',
        'Do not dilate-and-defer — this needs retina evaluation now, not at the next scheduled interval',
      ],
      managementNotes:
        'Definitive management (vitrectomy, panretinal photocoagulation, anti-VEGF) is directed by retina; the referring exam should focus on stabilizing the record of vision, IOP, and B-scan findings.',
      relatedDiseaseIds: ['vitreous-hemorrhage', 'tractional-exudative-retinal-detachment', 'diabetic-retinopathy'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'binocular-indirect-ophthalmoscopy'],
      relatedWorkupIds: ['flashes-and-floaters-workup', 'sudden-painless-vision-loss-workup', 'diabetic-eye-exam-workup'],
      relatedEmergencyProtocolIds: ['macula-threatening-retinal-detachment-protocol'],
    },
    'outcome-first-screening-not-due': {
      id: 'outcome-first-screening-not-due',
      type: 'outcome',
      title: 'Type 1 Diabetes, Recent Diagnosis — First Retinopathy Screening Not Yet Due',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'diabetes-mellitus-ocular-overview',
          whyItFits:
            'Recently diagnosed type 1 diabetes without visual symptoms increases suspicion that this patient is simply before the typical retinopathy-screening window rather than having undetected disease — interpret in context of exact diagnosis date and pubertal status.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Retinopathy before 5 years is uncommon but not impossible, particularly with an uncertain diagnosis date, poor perinatal/childhood control, or post-pubertal onset — a baseline dilated exam is still reasonable if any doubt exists.',
        },
      ],
      recommendedNextSteps: [
        'Document the confirmed diagnosis date and pubertal status',
        'Schedule the first dilated diabetic eye exam at approximately 5 years post-diagnosis (or sooner if symptomatic, poorly controlled, or post-pubertal)',
        'Perform a baseline comprehensive eye exam now for general ocular health regardless of retinopathy screening timing',
        'Educate the patient/family on red-flag visual symptoms to report sooner than the scheduled interval',
      ],
      relatedDiseaseIds: ['diabetes-mellitus-ocular-overview'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-no-dr-well-controlled': {
      id: 'outcome-no-dr-well-controlled',
      type: 'outcome',
      title: 'No Diabetic Retinopathy — Well-Controlled Diabetes',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'diabetes-mellitus-ocular-overview',
          whyItFits:
            'A clean dilated exam with good glycemic control increases suspicion that retinopathy has not yet developed — interpret in context, since this can still change over time.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Early microaneurysms can be subtle on a single exam — if photography quality or pupil dilation was suboptimal, consider repeating with better conditions rather than assuming a truly clean baseline.',
        },
      ],
      recommendedNextSteps: [
        'Routine annual dilated diabetic eye exam',
        'Continue current glycemic, blood pressure, and lipid management with the patient\'s medical team',
        'Reinforce that annual screening should continue even without symptoms',
      ],
      relatedDiseaseIds: ['diabetes-mellitus-ocular-overview'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'fundus-photography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-no-dr-poor-control': {
      id: 'outcome-no-dr-poor-control',
      type: 'outcome',
      title: 'No Diabetic Retinopathy — Poorly Controlled or Unknown Control',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'diabetes-mellitus-ocular-overview',
          whyItFits:
            'A clean exam today does not exclude rapid onset of retinopathy when control is poor or unknown — interpret this as a higher-risk "currently clean" status rather than reassurance of low future risk.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Poor glycemic control is a major driver of both onset and rapid progression of retinopathy — a shortened interval catches early disease before it reaches a more advanced stage.',
        },
      ],
      recommendedNextSteps: [
        'Shorten the follow-up interval to roughly 6–12 months rather than the standard annual interval',
        'Coordinate with the patient\'s primary care/endocrinology team regarding glycemic, blood pressure, and lipid optimization',
        'Counsel that rapid tightening of long-standing poor control can transiently worsen retinopathy — this is a known phenomenon and does not mean the exam or treatment plan was wrong',
      ],
      relatedDiseaseIds: ['diabetes-mellitus-ocular-overview', 'diabetic-retinopathy'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'fundus-photography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-mild-no-edema': {
      id: 'outcome-mild-no-edema',
      type: 'outcome',
      title: 'Mild NPDR, No Macular Edema',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Microaneurysms only, without hemorrhages, exudates, or edema, increases suspicion for mild NPDR — interpret in context of overall glycemic control and duration of diabetes.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'cystoid-macular-edema',
          whyItFits:
            'Macular edema can develop even at the mild NPDR stage, particularly with fluctuating glycemic control — a macular OCT is worth confirming if any subtle findings or symptoms are present.',
        },
      ],
      recommendedNextSteps: [
        'Follow-up dilated exam in approximately 12 months',
        'Reinforce glycemic, blood pressure, and lipid control',
        'Consider baseline macular OCT if not already obtained',
      ],
      relatedDiseaseIds: ['diabetic-retinopathy'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'retinal-vascular-examination', 'fundus-photography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-moderate-no-edema': {
      id: 'outcome-moderate-no-edema',
      type: 'outcome',
      title: 'Moderate NPDR, No Macular Edema',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Hemorrhages, hard exudates, and/or cotton-wool spots not yet meeting the 4-2-1 rule increases suspicion for moderate NPDR — interpret in context, since this stage carries a meaningfully higher progression risk than mild NPDR.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Moderate NPDR can progress to severe NPDR or PDR within roughly a year in a meaningful proportion of patients — do not let this default to an annual interval without considering closer monitoring.',
        },
      ],
      recommendedNextSteps: [
        'Follow-up dilated exam in approximately 6 months rather than a full year',
        'Baseline or repeat macular OCT to confirm no edema',
        'Reinforce systemic risk-factor control',
      ],
      relatedDiseaseIds: ['diabetic-retinopathy'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'retinal-vascular-examination', 'oct-macula'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-severe-npdr': {
      id: 'outcome-severe-npdr',
      type: 'outcome',
      title: 'Severe NPDR — Prompt Retina Referral',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Meeting the 4-2-1 rule (diffuse 4-quadrant hemorrhages, 2-quadrant venous beading, or 1-quadrant IRMA) without neovascularization increases suspicion for severe NPDR — interpret in context, as this is the stage with the highest risk of imminent progression to PDR.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'A substantial proportion of severe NPDR progresses to PDR within about a year — any interval, symptom change, or exam finding suggesting earlier progression should shorten follow-up rather than waiting out the full window.',
        },
      ],
      recommendedNextSteps: [
        'Refer to retina for evaluation and follow-up, generally within 2–4 months (sources vary somewhat between roughly 2–3 and 2–4 months)',
        'Macular OCT to assess for concurrent DME, since edema status is tracked separately from NPDR staging',
        'Counsel the patient on symptoms of progression (new floaters, curtain, sudden vision change) and to seek care sooner if they occur',
      ],
      managementNotes:
        'Anti-VEGF or panretinal photocoagulation may be considered at this stage even before frank PDR develops in select high-risk patients, per retina specialist judgment — this is a referral-and-monitor stage for primary/optometric care, not a treat-in-office stage.',
      relatedDiseaseIds: ['diabetic-retinopathy'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'retinal-vascular-examination', 'oct-macula', 'fundus-photography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-pdr-high-risk': {
      id: 'outcome-pdr-high-risk',
      type: 'outcome',
      title: 'High-Risk Proliferative Diabetic Retinopathy',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Neovascularization meeting high-risk ETDRS criteria increases suspicion for high-risk PDR, which carries a substantial risk of vision-threatening hemorrhage or traction if not treated promptly — interpret in context of the specific extent and location of the new vessels.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'vitreous-hemorrhage',
          whyItFits:
            'Neovascularization is fragile and can bleed with minimal provocation — untreated high-risk PDR is the direct precursor to vitreous hemorrhage.',
        },
        {
          diseaseId: 'tractional-exudative-retinal-detachment',
          whyItFits:
            'Fibrovascular proliferation accompanying high-risk neovascularization can progress to tractional detachment if panretinal photocoagulation or anti-VEGF therapy is delayed.',
        },
      ],
      recommendedNextSteps: [
        'Urgent retina referral, generally within days',
        'Panretinal photocoagulation and/or anti-VEGF therapy as directed by retina',
        'Counsel on red-flag symptoms (new floaters, curtain, sudden vision loss) and to return immediately if they occur before the referral appointment',
      ],
      relatedDiseaseIds: ['diabetic-retinopathy', 'vitreous-hemorrhage', 'tractional-exudative-retinal-detachment'],
      relatedDrugIds: ['aflibercept', 'bevacizumab', 'ranibizumab', 'faricimab'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'retinal-vascular-examination', 'fluorescein-angiography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-ci-dme': {
      id: 'outcome-ci-dme',
      type: 'outcome',
      title: 'Center-Involving Diabetic Macular Edema',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'cystoid-macular-edema',
          whyItFits:
            'Retinal thickening on OCT involving the central 1 mm subfield in a diabetic patient increases suspicion for center-involving diabetic macular edema, which is the DME pattern most likely to affect vision and drive treatment — interpret the OCT in the context of the NPDR/PDR stage.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-vein-occlusion',
          whyItFits:
            'New or markedly asymmetric macular edema in a diabetic patient should not automatically be attributed to diabetes alone — asymmetric findings or a corresponding area of vascular occlusion on exam raise consideration of a coexisting retinal vein occlusion, which changes workup and treatment.',
        },
      ],
      recommendedNextSteps: [
        'Refer to retina, generally within about a month, for consideration of anti-VEGF therapy (first-line for center-involving DME with vision impact) or focal/grid laser',
        'Macular OCT for baseline central subfield thickness and to guide treatment response monitoring',
        'Restage the accompanying NPDR/PDR severity separately, since DME management does not substitute for panretinal treatment if high-risk PDR is also present',
      ],
      managementNotes:
        'DRCR.net-style protocols generally reserve treatment for center-involving DME with vision loss; center-involving DME with normal vision may sometimes be observed closely per retina specialist judgment.',
      relatedDiseaseIds: ['cystoid-macular-edema', 'diabetic-retinopathy'],
      relatedDrugIds: ['aflibercept', 'bevacizumab', 'ranibizumab', 'faricimab'],
      relatedExamTechniqueIds: ['oct-macula', 'oct-angiography', 'fluorescein-angiography'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
    'outcome-nci-dme': {
      id: 'outcome-nci-dme',
      type: 'outcome',
      title: 'Non-Center-Involving Diabetic Macular Edema',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'cystoid-macular-edema',
          whyItFits:
            'Retinal thickening on OCT sparing the central 1 mm subfield in a diabetic patient increases suspicion for non-center-involving diabetic macular edema — interpret in context, as this pattern is usually asymptomatic but can progress to involve the center.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'Non-center-involving DME can progress to center-involving DME — closer interval monitoring than the underlying NPDR stage alone would suggest is warranted so this transition is caught early.',
        },
      ],
      recommendedNextSteps: [
        'Retina referral for monitoring, generally every 3–6 months rather than the standard NPDR-stage interval, given the risk of progression to center-involving edema',
        'Repeat macular OCT at each visit to track central subfield thickness trends',
        'Treatment (anti-VEGF, laser) is typically deferred until center involvement or vision impact develops, per retina specialist judgment',
      ],
      relatedDiseaseIds: ['cystoid-macular-edema', 'diabetic-retinopathy'],
      relatedExamTechniqueIds: ['oct-macula', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['diabetic-eye-exam-workup'],
    },
  },
  references: [
    'Wilkinson CP, Ferris FL 3rd, Klein RE, et al. Proposed International Clinical Diabetic Retinopathy and Diabetic Macular Edema Disease Severity Scales. Ophthalmology. 2003;110(9):1677-1682.',
    'American Academy of Ophthalmology Preferred Practice Pattern: Diabetic Retinopathy (originally 2019, with subsequent updates) — management/follow-up interval recommendations by severity stage.',
    'American Diabetes Association Standards of Care in Diabetes — Retinopathy, Neuropathy, and Foot Care chapter (screening-interval recommendations for type 1 vs. type 2 diabetes).',
    'Early Treatment Diabetic Retinopathy Study (ETDRS) reports — definitions of high-risk PDR characteristics and clinically significant macular edema, precursor to the OCT-based center-involving/non-center-involving convention.',
    'Note: published sources vary somewhat on the exact severe-NPDR follow-up interval (commonly cited as roughly 2–3 to 2–4 months) — this tree presents that as a range rather than a single fixed number.',
  ],
}

const dryEyeManagementDecision: DecisionTree = {
  id: 'dry-eye-management-decision',
  name: 'Dry Eye Management Decision',
  aliases: ['Dry Eye Disease Staging', 'Ocular Surface Disease Step Therapy'],
  categories: ['disease-management'],
  summary:
    'Work through dry eye signs (TBUT, staining, meibomian gland status, Schirmer, osmolarity) to fork aqueous-deficient vs. evaporative/MGD vs. mixed disease, stage severity, and select the matching step of care.',
  startNodeId: 'emergency-screen',
  nodes: {
    'emergency-screen': {
      id: 'emergency-screen',
      type: 'question',
      question:
        'Are there signs of a corneal infiltrate/ulcer, marked stromal thinning or melt, hypopyon, or severe pain with rapidly progressive symptoms (especially in a contact lens wearer)?',
      rationale:
        'Severe ocular surface disease can mask or coexist with microbial keratitis or sterile corneal melt, both of which risk perforation and need immediate management rather than routine dry-eye step therapy.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-yes',
          label: 'Yes — this pattern is present',
          nextNodeId: 'outcome-keratitis-melt-emergency',
          isRedFlag: true,
        },
        { id: 'screen-no', label: 'No — proceed with standard dry eye workup', nextNodeId: 'signs-overview' },
      ],
    },
    'signs-overview': {
      id: 'signs-overview',
      type: 'question',
      question:
        'Considering TBUT, corneal/conjunctival staining pattern, meibomian gland expression and dropout, Schirmer testing, and tear film osmolarity (if available), which pattern best fits the objective findings?',
      rationale:
        'Distinguishing aqueous-deficient from evaporative (meibomian gland dysfunction-driven) from mixed disease directs which step of therapy is most likely to help — treating the wrong mechanism (e.g., punctal occlusion in unmanaged MGD) can worsen symptoms.',
      options: [
        {
          id: 'signs-mgd',
          label:
            'Meibomian gland dropout/capping with poor expressibility predominates; reduced TBUT; Schirmer normal; staining minimal-to-moderate, often worse inferiorly',
          nextNodeId: 'mgd-severity',
        },
        {
          id: 'signs-adde',
          label: 'Reduced Schirmer (<10 mm/5 min) and/or elevated osmolarity predominates; meibomian glands largely normal; staining variable',
          nextNodeId: 'aqueous-severity',
        },
        {
          id: 'signs-mixed',
          label: 'Both meibomian gland dropout/expressibility problems AND reduced Schirmer/elevated osmolarity are present',
          nextNodeId: 'mixed-severity',
        },
        {
          id: 'signs-mismatch',
          label: 'Signs are minimal or normal despite a significant reported symptom burden',
          nextNodeId: 'outcome-symptom-sign-mismatch',
        },
      ],
    },
    'mgd-severity': {
      id: 'mgd-severity',
      type: 'question',
      question:
        'Using overall sign/symptom burden (per the classic Dry Eye WorkShop severity grading — increasing TBUT reduction, Schirmer reduction, and staining extent across levels 1–4), how would you stage this evaporative/MGD-predominant disease?',
      options: [
        { id: 'mgd-mild', label: 'Mild — intermittent symptoms, minimal signs', nextNodeId: 'outcome-mild-dry-eye' },
        { id: 'mgd-moderate', label: 'Moderate — frequent symptoms, definite gland dropout and TBUT reduction', nextNodeId: 'outcome-moderate-mgd' },
        { id: 'mgd-severe', label: 'Severe — constant symptoms, significant gland dropout/scarring, marked staining', nextNodeId: 'outcome-severe-mgd' },
      ],
    },
    'aqueous-severity': {
      id: 'aqueous-severity',
      type: 'question',
      question:
        'Using overall sign/symptom burden (per the classic Dry Eye WorkShop severity grading), how would you stage this aqueous-deficient-predominant disease?',
      options: [
        { id: 'adde-mild', label: 'Mild — intermittent symptoms, minimal signs', nextNodeId: 'outcome-mild-dry-eye' },
        { id: 'adde-moderate', label: 'Moderate — frequent symptoms, definite Schirmer reduction and/or staining', nextNodeId: 'outcome-moderate-adde' },
        { id: 'adde-severe', label: 'Severe — constant symptoms, markedly reduced Schirmer, significant staining or filaments', nextNodeId: 'outcome-severe-adde' },
      ],
    },
    'mixed-severity': {
      id: 'mixed-severity',
      type: 'question',
      question:
        'Using overall sign/symptom burden (per the classic Dry Eye WorkShop severity grading), how would you stage this mixed aqueous-deficient/evaporative disease?',
      options: [
        { id: 'mixed-mild', label: 'Mild — intermittent symptoms, minimal signs', nextNodeId: 'outcome-mild-dry-eye' },
        { id: 'mixed-moderate', label: 'Moderate — frequent symptoms, definite findings on both axes', nextNodeId: 'outcome-moderate-mixed' },
        { id: 'mixed-severe', label: 'Severe — constant symptoms, marked findings on both axes', nextNodeId: 'outcome-severe-mixed' },
      ],
    },

    'outcome-keratitis-melt-emergency': {
      id: 'outcome-keratitis-melt-emergency',
      type: 'outcome',
      title: 'Suspected Microbial Keratitis or Corneal Melt — Not Routine Dry Eye',
      urgency: 'Emergency (immediate)',
      mostLikely: [],
      mustNotMiss: [
        {
          diseaseId: 'bacterial-keratitis',
          whyItFits:
            'A corneal infiltrate/ulcer with severe pain and rapid progression, especially in a contact lens wearer, increases suspicion for bacterial keratitis — interpret in context of lens wear history and infiltrate characteristics.',
        },
        {
          diseaseId: 'fungal-keratitis',
          whyItFits:
            'A slower-progressing infiltrate with a history of plant/vegetable matter trauma or chronic topical steroid use increases suspicion for fungal keratitis — interpret in context, since management (antifungal vs. antibacterial) differs substantially.',
        },
        {
          diseaseId: 'peripheral-ulcerative-keratitis-overview',
          whyItFits:
            'Marked peripheral stromal thinning or melt, particularly with a background autoimmune/rheumatologic history, increases suspicion for peripheral ulcerative keratitis rather than simple dry eye — interpret in context.',
        },
      ],
      recommendedNextSteps: [
        'Same-day/urgent cornea evaluation — do not begin routine dry-eye step therapy first',
        'Culture and sensitivity if an infiltrate is present, before starting empiric antimicrobial therapy',
        'Hold anti-inflammatory or immunomodulatory dry-eye agents (topical steroid, cyclosporine, lifitegrast) until infection is excluded',
        'If a contact lens wearer, discontinue lens wear and bring lenses/case for culture if available',
      ],
      relatedDiseaseIds: ['bacterial-keratitis', 'fungal-keratitis', 'peripheral-ulcerative-keratitis-overview'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'fluorescein-corneal-staining', 'slit-lamp-illumination-techniques'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
      relatedEmergencyProtocolIds: ['necrotizing-microbial-keratitis-protocol'],
    },
    'outcome-symptom-sign-mismatch': {
      id: 'outcome-symptom-sign-mismatch',
      type: 'outcome',
      title: 'Symptom-Sign Mismatch — Consider Neuropathic Ocular Pain and Early/Fluctuating Disease',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Significant dry-eye-type symptoms with minimal objective staining or TBUT change increases suspicion for early or fluctuating dry eye disease that has not yet produced dramatic signs — interpret in context, since signs can lag symptoms.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'sjogren-syndrome',
          whyItFits:
            'A marked symptom burden that seems disproportionate to the ocular surface exam should prompt directed questions about dryness elsewhere (mouth, joints) — if positive, further systemic workup for Sjögren syndrome is warranted, since ocular signs can lag systemic autoimmune dryness.',
        },
      ],
      recommendedNextSteps: [
        'Check corneal sensation — reduced sensation can itself explain a mismatch (neurotrophic pattern) and changes management',
        'Consider neuropathic ocular pain (also called "pain without stain") when symptoms are severe/constant, poorly responsive to standard tear-focused therapy, and signs remain minimal or normal on repeat exam — this is a central/neural sensitization process rather than a primarily ocular-surface one, and typically needs a different treatment approach (e.g., neuromodulating oral agents, multidisciplinary pain referral) rather than escalating topical dry-eye therapy',
        'Screen for contributing systemic disease (Sjögren, other autoimmune conditions) if symptoms are longstanding or accompanied by systemic dryness',
        'Trial standard mild-tier therapy while further clarifying the picture, but set expectations that response may be limited if a neuropathic component is present',
      ],
      managementNotes:
        'A mismatch can go either direction: severe symptoms with minimal signs (raises neuropathic pain and early/fluctuating disease), or significant signs with minimal symptoms (raises reduced corneal sensation / early neurotrophic change) — both are worth documenting explicitly rather than defaulting to the sign-based severity stage alone.',
      relatedDiseaseIds: ['dry-eye-disease', 'sjogren-syndrome'],
      relatedExamTechniqueIds: ['corneal-sensation-testing', 'tear-break-up-time', 'schirmer-test'],
      relatedWorkupIds: ['dry-eye-workup', 'ocular-pain-workup'],
    },
    'outcome-mild-dry-eye': {
      id: 'outcome-mild-dry-eye',
      type: 'outcome',
      title: 'Mild Dry Eye Disease — Step 1 Care',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Intermittent symptoms with minimal signs across TBUT, staining, meibomian gland assessment, and Schirmer increases suspicion for mild dry eye disease — interpret in context of the specific predominant mechanism (aqueous-deficient, evaporative, or mixed).',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'blepharitis',
          whyItFits:
            'Even mild-appearing dry eye can have an under-addressed anterior or posterior blepharitis component — lid margin assessment is worth confirming rather than assuming tear-substitute therapy alone will be sufficient.',
        },
      ],
      recommendedNextSteps: [
        'Preservative-free artificial tears, formulated toward the predominant mechanism (lipid-containing for evaporative/MGD-predominant, more viscous/hyaluronic-acid-based for aqueous-deficient)',
        'Lid hygiene and warm compress as general first-line care regardless of predominant mechanism',
        'Environmental and behavioral modification (reduce screen-related blink rate reduction, humidify environment, review systemic medications with drying side effects)',
        'Re-evaluate in a few months; escalate to Step 2 (moderate) care if inadequate response rather than simply continuing indefinitely',
      ],
      relatedDiseaseIds: ['dry-eye-disease'],
      relatedDrugIds: ['carboxymethylcellulose-sodium', 'hyaluronic-acid-ophthalmic'],
      relatedExamTechniqueIds: ['tear-break-up-time', 'schirmer-test', 'fluorescein-corneal-staining', 'meibomian-gland-evaluation'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-moderate-mgd': {
      id: 'outcome-moderate-mgd',
      type: 'outcome',
      title: 'Moderate Evaporative/MGD-Predominant Dry Eye — Step 2 Care',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Frequent symptoms with definite meibomian gland dropout, poor expressibility, and reduced TBUT increases suspicion for moderate evaporative dry eye driven by meibomian gland dysfunction — interpret in context of lid margin findings.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'ocular-rosacea',
          whyItFits:
            'Meibomian gland dysfunction with facial telangiectasias, flushing, or rhinophyma increases suspicion for an underlying ocular rosacea driver, which benefits from oral tetracycline-class therapy and often a dermatology referral, not topical therapy alone.',
        },
      ],
      recommendedNextSteps: [
        'In-office lid warming/expression and reinforced at-home warm compress and lid hygiene',
        'Consider oral doxycycline (or topical azithromycin) for anti-inflammatory/anti-lipase effect on the meibomian glands',
        'Short-course topical corticosteroid as an anti-inflammatory bridge if the lid margin or ocular surface is visibly inflamed',
        'Reassess meibomian gland status and symptoms at follow-up; escalate to Step 3 (severe) care if inadequate response',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'blepharitis', 'ocular-rosacea'],
      relatedDrugIds: ['doxycycline', 'azithromycin-ophthalmic', 'loteprednol-etabonate'],
      relatedExamTechniqueIds: ['meibography', 'meibomian-gland-evaluation', 'lid-margin-blepharitis-assessment', 'lid-eversion'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-moderate-adde': {
      id: 'outcome-moderate-adde',
      type: 'outcome',
      title: 'Moderate Aqueous-Deficient Dry Eye — Step 2 Care',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Frequent symptoms with a definite Schirmer reduction and/or elevated osmolarity, with largely normal meibomian glands, increases suspicion for moderate aqueous-deficient dry eye — interpret in context of systemic dryness symptoms.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'sjogren-syndrome',
          whyItFits:
            'Meaningful aqueous deficiency at this severity should prompt Sjögren screening (dry mouth, joint symptoms, and directed serologic testing if positive), since primary or secondary Sjögren syndrome changes both prognosis and the case for systemic referral.',
        },
      ],
      recommendedNextSteps: [
        'Topical anti-inflammatory therapy (cyclosporine ophthalmic emulsion or lifitegrast) as first-line disease-modifying therapy for this tier',
        'Short-course topical corticosteroid as a bridge while anti-inflammatory therapy takes effect',
        'Increase preservative-free artificial tear frequency; consider punctal plug trial once surface inflammation is controlled',
        'Screen for Sjögren syndrome if not already done; refer to rheumatology if positive or highly suspected',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'sjogren-syndrome'],
      relatedDrugIds: ['cyclosporine-ophthalmic-emulsion', 'lifitegrast', 'loteprednol-etabonate'],
      relatedExamTechniqueIds: ['schirmer-test', 'tear-film-osmolarity-testing', 'tear-meniscus-height-assessment', 'lissamine-green-rose-bengal-staining'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-moderate-mixed': {
      id: 'outcome-moderate-mixed',
      type: 'outcome',
      title: 'Moderate Mixed Dry Eye — Step 2 Care',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Frequent symptoms with definite findings on both the aqueous-deficient and evaporative/MGD axes increases suspicion for moderate mixed-mechanism dry eye — interpret in context, since both mechanisms typically need to be addressed together for symptom control.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'sjogren-syndrome',
          whyItFits:
            'A meaningful aqueous-deficient component within mixed disease still warrants Sjögren screening, since treating only the MGD component will underperform if unaddressed autoimmune aqueous deficiency is also present.',
        },
      ],
      recommendedNextSteps: [
        'Combine MGD-directed care (in-office lid warming/expression, oral doxycycline or topical azithromycin) with aqueous-directed anti-inflammatory therapy (cyclosporine or lifitegrast)',
        'Short-course topical corticosteroid as a bridge while both components take effect',
        'Screen for Sjögren syndrome and address contributing blepharitis/rosacea',
        'Reassess both axes separately at follow-up, since one mechanism may respond faster than the other',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'sjogren-syndrome', 'blepharitis'],
      relatedDrugIds: ['cyclosporine-ophthalmic-emulsion', 'lifitegrast', 'doxycycline', 'azithromycin-ophthalmic', 'loteprednol-etabonate'],
      relatedExamTechniqueIds: ['schirmer-test', 'meibomian-gland-evaluation', 'tear-break-up-time', 'tear-film-osmolarity-testing'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-severe-mgd': {
      id: 'outcome-severe-mgd',
      type: 'outcome',
      title: 'Severe Evaporative/MGD-Predominant Dry Eye — Step 3/4 Care',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Constant symptoms with significant meibomian gland dropout/scarring and marked staining increases suspicion for severe evaporative dry eye — interpret in context, as this tier carries meaningful risk of ongoing surface damage if undertreated.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'ocular-rosacea',
          whyItFits:
            'Severe, refractory MGD should prompt a renewed look for underlying ocular rosacea, which needs systemic (not just topical/procedural) management to durably improve gland function.',
        },
        {
          diseaseId: 'exposure-keratopathy',
          whyItFits:
            'Severe evaporative disease with poor lid closure, lagophthalmos, or nocturnal exposure increases suspicion for a contributing exposure component that needs its own targeted management (nighttime lubrication/taping, or lid surgery) in addition to MGD-directed therapy.',
        },
      ],
      recommendedNextSteps: [
        'Procedural meibomian gland treatment (e.g., thermal pulsation therapy or intense pulsed light, per specialist judgment and availability) in addition to continued lid hygiene/warm compress',
        'Continue or escalate oral doxycycline/topical azithromycin and topical anti-inflammatory therapy',
        'Evaluate lid position and closure for a contributing exposure component',
        'Reassess for symptom-sign mismatch if response remains poor despite objective improvement in gland status',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'ocular-rosacea', 'exposure-keratopathy'],
      relatedDrugIds: ['doxycycline', 'azithromycin-ophthalmic', 'loteprednol-etabonate', 'perfluorohexyloctane'],
      relatedExamTechniqueIds: ['meibography', 'meibomian-gland-evaluation', 'lid-eversion', 'lid-margin-blepharitis-assessment'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-severe-adde': {
      id: 'outcome-severe-adde',
      type: 'outcome',
      title: 'Severe Aqueous-Deficient Dry Eye — Step 3/4 Care',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Constant symptoms with markedly reduced Schirmer and significant staining or filamentary keratitis increases suspicion for severe aqueous-deficient dry eye — interpret in context of an underlying systemic driver, since idiopathic severe ADDE is less common than secondary causes.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'sjogren-syndrome',
          whyItFits:
            'Severe, refractory aqueous deficiency should prompt (or re-prompt) systemic autoimmune workup for Sjögren syndrome if not already completed, given the implications for systemic monitoring beyond the eye.',
        },
        {
          diseaseId: 'mmp-pemphigus-vulgaris',
          whyItFits:
            'Severe refractory aqueous-deficient disease with progressive conjunctival scarring, symblepharon, or fornix foreshortening increases suspicion for a cicatrizing process such as mucous membrane pemphigoid — interpret in context; routine severe ADDE without scarring does not require this workup by default.',
        },
      ],
      recommendedNextSteps: [
        'Punctal occlusion (after inflammation is reasonably controlled) to conserve the tear volume that remains',
        'Continue or escalate prescription topical immunomodulator (cyclosporine or lifitegrast); consider autologous/allogeneic serum tears for refractory cases',
        'Consider therapeutic bandage or scleral contact lens for persistent epithelial breakdown or filamentary keratitis',
        'Examine the conjunctival fornices for scarring/symblepharon at each visit; refer for biopsy and systemic workup if present',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'sjogren-syndrome', 'mmp-pemphigus-vulgaris'],
      relatedDrugIds: ['cyclosporine-ophthalmic-emulsion', 'lifitegrast'],
      relatedExamTechniqueIds: ['schirmer-test', 'scleral-lens-fitting-assessment', 'lissamine-green-rose-bengal-staining', 'tear-meniscus-height-assessment'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
    'outcome-severe-mixed': {
      id: 'outcome-severe-mixed',
      type: 'outcome',
      title: 'Severe Mixed Dry Eye — Step 3/4 Care',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Constant symptoms with marked findings on both the aqueous-deficient and evaporative/MGD axes increases suspicion for severe mixed-mechanism disease — interpret in context, since both mechanisms usually need simultaneous, not sequential, treatment at this severity.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'sjogren-syndrome',
          whyItFits:
            'The aqueous-deficient component of severe mixed disease still warrants Sjögren screening if not already completed.',
        },
        {
          diseaseId: 'ocular-rosacea',
          whyItFits:
            'The evaporative/MGD component of severe mixed disease still warrants consideration of an underlying rosacea driver needing systemic management.',
        },
      ],
      recommendedNextSteps: [
        'Combine punctal occlusion and prescription topical immunomodulator (aqueous-directed) with procedural meibomian gland treatment and oral doxycycline/topical azithromycin (evaporative-directed)',
        'Consider therapeutic contact lens (bandage or scleral) for persistent epithelial breakdown',
        'Screen or re-screen for Sjögren syndrome and ocular rosacea if not already done',
        'Refer for multidisciplinary input (rheumatology, dermatology) as indicated by systemic findings',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'sjogren-syndrome', 'ocular-rosacea'],
      relatedDrugIds: ['cyclosporine-ophthalmic-emulsion', 'lifitegrast', 'doxycycline', 'azithromycin-ophthalmic', 'perfluorohexyloctane'],
      relatedExamTechniqueIds: ['schirmer-test', 'meibomian-gland-evaluation', 'scleral-lens-fitting-assessment', 'lissamine-green-rose-bengal-staining'],
      relatedWorkupIds: ['dry-eye-workup'],
    },
  },
  references: [
    'TFOS DEWS II Definition and Classification Report. Ocul Surf. 2017;15(3):276-283.',
    'TFOS DEWS II Management and Therapy Report. Ocul Surf. 2017;15(3):575-628. (Source of the Step 1–4 stepwise management framework used here.)',
    '2007 Report of the International Dry Eye WorkShop (DEWS), Ocul Surf. 2007;5(2):75-92 — original severity-level grading scheme (levels 1–4 across TBUT, Schirmer, and staining) referenced for the mild/moderate/severe staging used in this tree, since TFOS DEWS II did not republish its own numeric severity grid.',
    'Note: exact numeric TBUT/Schirmer/staining cutoffs for each severity level vary somewhat between the original 2007 DEWS grid and later adaptations in the literature — this tree uses qualitative severity descriptions rather than asserting one fixed numeric table.',
  ],
}

export const diseaseManagementTrees: DecisionTree[] = [diabeticEyeExamDecision, dryEyeManagementDecision]
