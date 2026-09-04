import type { Disease } from '../../types/disease'

export const retinaAdditional5: Disease[] = [
  {
    id: 'cystoid-macular-edema',
    name: 'Cystoid Macular Edema',
    aliases: ['CME', 'Irvine-Gass Syndrome'],
    category: 'Retina',
    definition:
      'Accumulation of fluid within the outer plexiform (Henle fiber) layer and inner nuclear layer of the macula, producing a characteristic petaloid cystic pattern; most classically arises as Irvine-Gass syndrome following otherwise uncomplicated cataract surgery but also occurs secondary to diabetic retinopathy, retinal vein occlusion, uveitis, and epiretinal membrane.',
    affectedStructure: 'Macula — outer plexiform layer (Henle fiber layer) and inner nuclear layer; perifoveal retinal capillaries as the source of leakage',
    pathologicalProcess:
      'Breakdown of the blood-retinal barrier (inner, outer, or both) allows fluid to leak from perifoveal capillaries and accumulate within the radially oriented Henle fibers, which channel fluid into petal-shaped cystic spaces centered on the fovea; prostaglandin-mediated inflammation is the principal mechanism in post-surgical CME.',
    epidemiology: {
      typicalAge: 'Post-cataract surgery patients, typically weeks after surgery; underlying condition (diabetes, uveitis, RVO) determines age in secondary CME',
      prevalence: 'Angiographic CME can be detected in a substantial minority of eyes after uncomplicated cataract surgery, though clinically significant CME with visual symptoms is much less common',
      importantPopulations: 'Diabetic patients and those with a history of uveitis or vein occlusion undergoing cataract surgery are at higher risk of clinically significant post-operative CME',
    },
    riskFactors: [
      { label: 'Recent cataract surgery (typically 4-12 weeks prior)', tier: 'major' },
      { label: 'Diabetic retinopathy / diabetic macular edema', tier: 'major' },
      { label: 'Uveitis (active or history of)', tier: 'major' },
      { label: 'Retinal vein occlusion', tier: 'major' },
      { label: 'Complicated cataract surgery (posterior capsule rupture, vitreous loss, retained lens material)', tier: 'moderate' },
      { label: 'Epiretinal membrane / vitreomacular traction', tier: 'moderate' },
      { label: 'History of CME in the fellow eye', tier: 'moderate' },
      { label: 'Topical prostaglandin analogue use', tier: 'associated' },
      { label: 'Retinitis pigmentosa, niacin toxicity, epinephrine use in aphakia', tier: 'associated' },
    ],
    pathophysiology: [
      'Surgical trauma (or underlying retinal vascular/inflammatory disease) triggers release of inflammatory mediators, particularly prostaglandins, from the anterior segment and/or retina',
      'Prostaglandins and other cytokines increase permeability of perifoveal retinal capillaries, breaking down the blood-retinal barrier',
      'Fluid leaks from these capillaries and tracks into the radially arranged Henle fiber layer, which is loosely packed and oriented outward from the fovea, creating a petaloid pattern of fluid-filled cystic spaces',
      'Continued leakage produces intraretinal cystic spaces visible on OCT and, in severe/chronic cases, can coalesce into a lamellar or full-thickness macular hole',
      'In post-cataract Irvine-Gass syndrome, resolution typically follows control of the inflammatory cascade with topical anti-inflammatory therapy, though some cases become chronic if the underlying stimulus persists',
    ],
    symptoms: {
      common: ['Painless blurred or decreased central vision, typically presenting weeks after cataract surgery', 'Difficulty with fine visual tasks (reading, near work)'],
      lessCommon: ['Mild metamorphopsia (distortion)', 'Micropsia'],
      importantNegatives: ['No pain, no flashes/floaters (unless a separate retinal complication is present)', 'Vision often initially reported as good immediately post-op before declining over subsequent weeks'],
      typicalProgression: 'Classic Irvine-Gass CME presents 4-12 weeks after otherwise uneventful cataract surgery with a subacute decline in an eye that had initially recovered good vision; secondary CME from diabetes, uveitis, or RVO follows the course of the underlying disease and may be more chronic or recurrent.',
    },
    signs: [
      { area: 'Retina', finding: 'Loss of the normal foveal depression with macular thickening; petaloid pattern of cystic spaces may be visible on careful biomicroscopy with a fundus contact or noncontact lens in more advanced cases' },
      { area: 'Retina', finding: 'Underlying disease-specific findings when CME is secondary (e.g., dot-blot hemorrhages/exudates in diabetic retinopathy, sheathed vessels/vitreous cells in uveitis, flame hemorrhages in RVO)' },
      { area: 'Vitreous', finding: 'Mild anterior vitreous cell may be present in post-surgical CME reflecting low-grade inflammation; more pronounced vitritis suggests uveitic etiology' },
      { area: 'Other', finding: 'Best-corrected visual acuity reduced out of proportion to any other visible anterior segment finding in an otherwise well-healed post-cataract eye' },
    ],
    differentialDiagnosis: [
      { disease: 'Age-related macular degeneration (wet)', whySimilar: 'Central vision blur/distortion with macular thickening on exam', keyDistinguisher: 'Presence of drusen, subretinal (not purely intraretinal cystic) fluid, and choroidal neovascular membrane on OCT/FA; typically no recent cataract surgery trigger' },
      { disease: 'Diabetic macular edema (without recent surgery)', whySimilar: 'Intraretinal cystic spaces and thickening on OCT identical in appearance', keyDistinguisher: 'History of diabetes with other retinopathy findings (microaneurysms, hard exudates) rather than a temporal relationship to cataract surgery; FA shows diffuse or focal microaneurysmal leakage rather than the classic petaloid pattern' },
      { disease: 'Central serous chorioretinopathy', whySimilar: 'Central blur and metamorphopsia with macular fluid', keyDistinguisher: 'OCT shows subretinal fluid (neurosensory detachment) rather than intraretinal cystic spaces; younger patients, steroid or stress association, FA shows a focal "smokestack" or ink-blot leak from the RPE rather than perifoveal capillary petaloid leakage' },
    ],
    diagnosticTesting: [
      { name: 'Optical coherence tomography (OCT)', whyOrdered: 'Primary diagnostic tool to confirm and quantify macular fluid', expectedFinding: 'Intraretinal cystic spaces within the outer plexiform/Henle fiber layer, increased central subfield thickness, loss of foveal contour', contribution: 'Confirms diagnosis, establishes baseline severity, and is the primary tool for monitoring treatment response' },
      { name: 'Fluorescein angiography (FA)', whyOrdered: 'Confirm diagnosis and characterize leakage pattern, especially in atypical or chronic cases', expectedFinding: 'Classic petaloid pattern of perifoveal capillary leakage in the late phases; late staining/hyperfluorescence of the optic disc is also characteristic', contribution: 'Distinguishes CME from other causes of macular thickening and helps identify an underlying inflammatory or vascular source of leakage' },
      { name: 'Visual acuity testing', whyOrdered: 'Quantify functional impact and monitor response to treatment', expectedFinding: 'Decreased best-corrected visual acuity relative to early post-operative baseline', contribution: 'Correlates with OCT central subfield thickness to guide treatment intensity and duration' },
      { name: 'Dilated fundus examination', whyOrdered: 'Assess for an underlying or contributing cause (diabetic retinopathy, uveitis, vein occlusion, epiretinal membrane)', expectedFinding: 'May be unremarkable in idiopathic Irvine-Gass CME, or show findings of the underlying disease in secondary CME', contribution: 'Directs work-up toward the correct underlying etiology and rules out other posterior segment pathology' },
    ],
    diagnosis: {
      confirmation: 'Diagnosis is confirmed by OCT demonstrating intraretinal cystic spaces centered on the fovea with increased central subfield thickness, in the appropriate clinical context (recent cataract surgery for Irvine-Gass, or an identifiable underlying retinal vascular/inflammatory disease); FA petaloid leakage pattern supports the diagnosis when obtained.',
      classification: 'Classified by etiology as post-surgical (Irvine-Gass syndrome) or secondary to diabetic retinopathy, retinal vein occlusion, uveitis, epiretinal membrane, or other causes; further described as acute (typically resolves within months) versus chronic (persisting beyond 6 months)',
    },
    management: [
      { category: 'Observation', detail: 'Mild, early post-surgical CME with good vision may be observed briefly given the high spontaneous resolution rate, with close interval monitoring' },
      { category: 'First-line treatment', detail: 'Topical NSAID drops, often combined with topical corticosteroid drops, for post-cataract Irvine-Gass CME; prophylactic peri-operative topical NSAIDs are commonly used in higher-risk patients (diabetics, uveitis history) to reduce incidence' },
      { category: 'Second-line treatment', detail: 'Periocular or intravitreal corticosteroid injection for cases not responding to topical therapy or with more severe/chronic edema' },
      { category: 'Advanced treatment', detail: 'Intravitreal anti-VEGF therapy or carbonic anhydrase inhibitors may be considered for refractory cases, particularly when CME is secondary to diabetic retinopathy or RVO; vitrectomy considered for cases with vitreomacular traction or vitreous incarceration in the surgical wound contributing to chronic CME' },
      { category: 'Referral', detail: 'Refer to a retina specialist for CME not responding to first-line topical therapy within several weeks, or when an underlying uveitic, vascular, or tractional etiology requires specialized management' },
    ],
    managementProtocol: {
      workup: [
        'OCT macula to confirm intraretinal cystic spaces, quantify central subfield thickness, and establish a treatment-response baseline',
        'Fluorescein angiography for the classic petaloid leakage pattern and late disc staining in atypical or chronic cases',
        'Dilated fundus exam to identify an underlying secondary cause (diabetic retinopathy, uveitis, vein occlusion, epiretinal membrane) when CME is not clearly post-surgical',
      ],
      initialTreatment:
        'Post-cataract (Irvine-Gass) CME is treated first-line with topical NSAID drops, often combined with a topical corticosteroid; prophylactic perioperative topical NSAIDs are commonly used in higher-risk cataract patients (diabetics, uveitics) to reduce incidence. Cases not responding to topical therapy, or with more severe/chronic edema, are escalated to periocular or intravitreal corticosteroid injection.',
      followUpSchedule:
        'Re-examine with repeat OCT approximately 4-6 weeks after initiating topical therapy to assess response; more frequent monitoring if vision is significantly affected or an underlying uveitic/vascular etiology is being co-managed.',
      escalationCriteria: [
        'Persistent or worsening cystic changes on OCT after an adequate trial (several weeks) of topical NSAID/steroid therapy -> periocular or intravitreal corticosteroid injection',
        'CME secondary to diabetic retinopathy or RVO refractory to topical/steroid therapy -> intravitreal anti-VEGF',
        'Development of a lamellar or full-thickness macular hole in chronic, longstanding cases -> retina specialist for surgical evaluation',
      ],
      referralCriteria: [
        'CME not responding to first-line topical therapy within several weeks -> retina specialist',
        'Underlying uveitic, vascular, or tractional etiology requiring specialized management -> retina specialist',
      ],
      steroidConsiderations:
        'Topical corticosteroid (e.g., prednisolone acetate 1% or difluprednate) is combined with a topical NSAID as first-line therapy for post-surgical CME; periocular or intravitreal corticosteroid (e.g., triamcinolone or a dexamethasone implant) is reserved for cases refractory to topical therapy or with more severe/chronic edema, with IOP checked at each visit given steroid-response glaucoma risk.',
      complications: ['Chronic cystoid changes progressing to lamellar or full-thickness macular hole', 'Permanent photoreceptor damage in longstanding unresolved cases', 'Steroid-response IOP elevation and cataract progression with corticosteroid treatment'],
      monitoringParameters: ['Visual acuity', 'OCT central subfield thickness/resolution of cystic spaces', 'IOP if corticosteroid is used'],
      relatedDrugIds: ['prednisolone-acetate', 'difluprednate', 'dexamethasone', 'triamcinolone-intravitreal', 'bevacizumab'],
      relatedExamTechniqueIds: ['oct-macula', 'fluorescein-angiography'],
    },
    followUp: {
      typical: 'Re-examine with repeat OCT approximately 4-6 weeks after initiating topical therapy to assess response; more frequent monitoring if vision is significantly affected',
      monitor: 'Visual acuity and OCT central subfield thickness/resolution of cystic spaces',
      progression: 'Persistent or worsening cystic changes on OCT despite topical therapy, or development of a lamellar/full-thickness macular hole in chronic, longstanding cases',
      shortenWhen: 'Underlying diabetic retinopathy, uveitis, or vein occlusion, or significant vision loss at presentation',
    },
    prognosis: {
      typicalCourse: 'Most post-cataract (Irvine-Gass) CME resolves spontaneously or with topical anti-inflammatory treatment within a few months',
      progressionRisk: 'A minority of cases become chronic (persisting beyond 6 months), with chronicity more likely when an underlying uveitic or vascular condition is present or unaddressed',
      complications: 'Chronic cystoid changes can lead to lamellar or full-thickness macular hole formation and permanent photoreceptor damage in longstanding, unresolved cases',
      visualPrognosis: 'Excellent for typical post-surgical CME treated promptly, with most patients returning to baseline post-operative visual potential; secondary CME prognosis depends on control of the underlying disease and chronicity at presentation',
    },
    clinicalPearls: [
      'Suspect Irvine-Gass CME in any patient with unexplained vision decline several weeks after an otherwise uncomplicated cataract surgery — the eye typically looked good on the first post-op visits before vision dropped.',
      'OCT has largely supplanted FA as the first-line test for diagnosing and monitoring CME, though FA remains useful for confirming the classic petaloid pattern in atypical presentations.',
      'Prophylactic topical NSAIDs peri-operatively reduce the incidence of clinically significant CME in higher-risk cataract surgery patients (diabetics, uveitics).',
      'The petaloid leakage pattern on FA reflects the radial anatomic orientation of Henle fibers in the outer plexiform layer, which channels leaking fluid into a flower-petal configuration around the fovea.',
      'Late FA also classically shows disc staining/hyperfluorescence in Irvine-Gass CME, a useful confirmatory finding.',
    ],
    highYield: [
      'Irvine-Gass syndrome is CME following cataract surgery, classically presenting 4-12 weeks post-operatively after initially good vision',
      'CME fluid accumulates in the outer plexiform (Henle fiber) layer, producing the characteristic petaloid pattern on FA due to the radial fiber orientation',
      'OCT is the primary diagnostic and monitoring tool; FA shows classic petaloid leakage with late optic disc staining',
      'Topical NSAIDs plus corticosteroids are first-line treatment for post-surgical CME, and NSAIDs are frequently used prophylactically in high-risk patients',
      'Most post-cataract CME resolves with treatment, but chronic cases risk lamellar or full-thickness macular hole formation',
      'Secondary CME occurs with diabetic retinopathy, retinal vein occlusion, uveitis, and epiretinal membrane — always look for an underlying cause when CME is not clearly post-surgical',
    ],
  },
  {
    id: 'vitreous-hemorrhage',
    name: 'Vitreous Hemorrhage',
    aliases: [],
    category: 'Retina',
    definition:
      'Extravasation of blood into the vitreous cavity or potential space, arising from abnormal retinal/disc neovascularization, a torn retinal vessel, trauma, or intracranial hemorrhage, and presenting with sudden painless vision loss ranging from mild floaters to near-total obscuration depending on hemorrhage density.',
    affectedStructure: 'Vitreous cavity; source of bleeding is typically retinal or disc neovascularization, a torn retinal vessel at a retinal break, or (in Terson syndrome) blood tracking from the subarachnoid/subdural space',
    pathologicalProcess:
      'Blood enters the vitreous cavity from abnormal, fragile new vessels (proliferative diabetic retinopathy, ischemic RVO), a ruptured retinal vessel crossing a tear during posterior vitreous detachment, direct traumatic vascular injury, or via extension from an intracranial hemorrhage, obscuring the visual axis and the fundus view proportional to blood density and location.',
    epidemiology: {
      typicalAge: 'Varies by cause — middle-aged to older adults with diabetes or vein occlusion; any age with trauma; older adults for PVD-related retinal tears',
      prevalence: 'One of the most common causes of acute, painless vision loss presenting to eye care and emergency settings',
      importantPopulations: 'Proliferative diabetic retinopathy is the most common overall cause; patients with sickle cell retinopathy, ischemic RVO, and those with recent significant head trauma or subarachnoid hemorrhage (Terson syndrome) are also at risk',
    },
    riskFactors: [
      { label: 'Proliferative diabetic retinopathy (most common cause overall)', tier: 'major' },
      { label: 'Retinal tear or rhegmatogenous retinal detachment with torn retinal vessel', tier: 'major' },
      { label: 'Ischemic retinal vein occlusion with neovascularization', tier: 'major' },
      { label: 'Ocular or head trauma', tier: 'major' },
      { label: 'Posterior vitreous detachment (avulsed retinal vessel)', tier: 'moderate' },
      { label: 'Subarachnoid or subdural hemorrhage (Terson syndrome)', tier: 'moderate' },
      { label: 'Sickle cell retinopathy with peripheral neovascularization', tier: 'moderate' },
      { label: 'Anticoagulant/antiplatelet therapy, bleeding diathesis', tier: 'associated' },
      { label: 'Retinal macroaneurysm', tier: 'associated' },
    ],
    pathophysiology: [
      'Chronic retinal ischemia (proliferative diabetic retinopathy, ischemic RVO, sickle cell retinopathy) drives VEGF-mediated growth of fragile new vessels on the disc or retina that lack normal structural integrity and bleed easily, especially with vitreous traction',
      'During acute posterior vitreous detachment, traction can avulse a retinal vessel at a point of vitreoretinal adhesion, or create a retinal tear that tears an underlying vessel, releasing blood into the vitreous cavity',
      'Blunt or penetrating ocular trauma can directly rupture retinal or choroidal vessels',
      'In Terson syndrome, a sudden rise in intracranial pressure from subarachnoid hemorrhage is transmitted along the optic nerve sheath, rupturing peripapillary retinal vessels and allowing blood to track into the vitreous',
      'Blood dispersed in the vitreous gel scatters and absorbs light, degrading the retinal image proportional to hemorrhage density, and settles inferiorly over time as red blood cells and debris are gradually cleared by phagocytosis and diffusion out of the vitreous base',
    ],
    symptoms: {
      common: ['Sudden painless vision loss, ranging from mild blur to near-total loss depending on hemorrhage density', 'New floaters, described as cobwebs, streaks, or a shower of spots', 'Red or dark hue/tint to vision'],
      lessCommon: ['Photopsia if an associated retinal tear or detachment is present', 'Visual field defect if an underlying detachment is present'],
      importantNegatives: ['Painless in isolation — pain suggests an alternative or coexisting diagnosis (e.g., neovascular glaucoma, trauma, endophthalmitis)'],
      typicalProgression: 'Onset is typically sudden; small hemorrhages may present as new floaters with preserved vision, while dense hemorrhages cause severe acute vision loss down to hand motion or light perception; vision may fluctuate as blood settles inferiorly with upright positioning.',
    },
    signs: [
      { area: 'Vitreous', finding: 'Diffuse vitreous hemorrhage obscuring the red reflex and fundus view; blood may be seen as diffuse haze, discrete clumps, or a layered inferior collection depending on density and time since onset' },
      { area: 'Retina', finding: 'Underlying source may be visible if the view permits — active neovascularization, a retinal tear with an associated vessel, or a detachment; often not visualizable through dense hemorrhage' },
      { area: 'Other', finding: 'Diminished or absent red reflex on distant direct ophthalmoscopy; relative afferent pupillary defect may develop with dense, longstanding hemorrhage or an underlying detachment' },
    ],
    differentialDiagnosis: [
      { disease: 'Rhegmatogenous retinal detachment (without significant hemorrhage)', whySimilar: 'Sudden painless vision loss with floaters and photopsia', keyDistinguisher: 'B-scan shows a mobile, highly reflective membrane attached at the disc/ora without the diffuse low-to-medium reflective echoes of dispersed blood filling the vitreous cavity' },
      { disease: 'Posterior vitreous detachment (uncomplicated)', whySimilar: 'Acute onset floaters and flashes', keyDistinguisher: 'Clear vitreous with a visible Weiss ring and normal fundus view on exam; no blood present, no reduction in red reflex' },
      { disease: 'Central retinal artery or vein occlusion', whySimilar: 'Sudden painless unilateral vision loss', keyDistinguisher: 'Fundus view is clear (not obscured) with characteristic retinal whitening/cherry-red spot (CRAO) or diffuse hemorrhage confined to the retina (CRVO) rather than a hazy or absent view from vitreous cavity blood' },
    ],
    diagnosticTesting: [
      { name: 'B-scan ultrasonography', whyOrdered: 'Essential when the fundus view is too poor for direct visualization, to evaluate for an underlying retinal detachment, tear, or mass', expectedFinding: 'Diffuse low-to-medium reflective mobile echoes within the vitreous cavity consistent with hemorrhage; may reveal an associated retinal detachment (highly reflective, mobile membrane attached at disc/ora) or mass lesion', contribution: 'Critical for ruling out an underlying retinal detachment when hemorrhage precludes direct exam, directly changing management urgency' },
      { name: 'Dilated fundus examination with indirect ophthalmoscopy', whyOrdered: 'Attempt direct visualization of the retina, hemorrhage source, and any associated pathology', expectedFinding: 'Variable degree of view obscuration; if visualized, may show neovascularization, a retinal tear, or detachment', contribution: 'When possible, identifies the underlying cause and guides definitive management' },
      { name: 'Intraocular pressure measurement and anterior segment exam', whyOrdered: 'Screen for neovascular glaucoma and assess for red blood cell/ghost cell-related pressure elevation', expectedFinding: 'May be normal or elevated; iris neovascularization may be present in ischemic etiologies', contribution: 'Identifies a vision- and globe-threatening complication requiring urgent additional treatment' },
      { name: 'Fluorescein angiography (once media clears sufficiently)', whyOrdered: 'Identify areas of retinal ischemia/nonperfusion and active neovascularization once the hemorrhage has cleared enough to allow imaging', expectedFinding: 'Areas of capillary nonperfusion and leakage from neovascular fronds', contribution: 'Guides panretinal photocoagulation planning for the underlying ischemic disease' },
    ],
    diagnosis: {
      confirmation: 'Diagnosis is typically made clinically by loss of the red reflex and a hazy or obscured fundus view on exam; B-scan ultrasound confirms the diagnosis and, critically, evaluates for an underlying retinal detachment or mass when the view does not allow direct visualization.',
      classification: 'Described by density (mild, moderate, dense/total obscuration) and by presumed etiology (proliferative retinopathy, retinal tear/detachment, trauma, Terson syndrome, macroaneurysm)',
    },
    management: [
      { category: 'Observation', detail: 'Mild-to-moderate hemorrhage without evidence of retinal detachment: observation with upright positioning (including elevating the head of the bed during sleep) to allow blood to settle inferiorly and gradually clear over weeks to months; activity modification (avoiding anticoagulants where medically permissible, avoiding strenuous activity/Valsalva) as appropriate' },
      { category: 'First-line treatment', detail: 'Address the underlying cause once identified — panretinal photocoagulation and/or anti-VEGF for proliferative diabetic retinopathy or ischemic RVO once the view allows or via ultrasound-guided planning' },
      { category: 'Advanced treatment', detail: 'Pars plana vitrectomy for non-clearing hemorrhage, dense hemorrhage causing prolonged visual disability, or when the underlying cause requires direct surgical management (e.g., repair of an associated retinal detachment, treatment of PRP-eligible ischemic retina that cannot otherwise be visualized/treated)' },
      { category: 'Referral', detail: 'Prompt referral to a retina specialist for any significant vitreous hemorrhage to obtain B-scan ultrasound (if not already performed), determine underlying etiology, and establish a treatment/monitoring plan' },
      { category: 'Emergency management', detail: 'Urgent same-day evaluation for vitreous hemorrhage with B-scan evidence of retinal detachment, or when a fellow eye history or exam raises high suspicion for an occult retinal break, given the time-sensitive nature of detachment repair' },
    ],
    managementProtocol: {
      workup: [
        'B-scan ultrasonography whenever the fundus view is too poor for direct visualization, to rule out an underlying retinal detachment or mass',
        'Dilated fundus exam with indirect ophthalmoscopy to identify the hemorrhage source (neovascularization, retinal tear, detachment) once the view allows',
        'IOP measurement and anterior segment exam to screen for early neovascular glaucoma',
        'Fluorescein angiography once media clarity allows, to map retinal ischemia/nonperfusion and guide panretinal photocoagulation planning',
      ],
      initialTreatment:
        'Mild-to-moderate hemorrhage without B-scan evidence of retinal detachment is managed with observation, upright/head-elevated positioning to allow blood to settle inferiorly, and activity modification while the underlying cause (most often proliferative diabetic retinopathy) is identified and treated with panretinal photocoagulation and/or anti-VEGF once visualization or ultrasound guidance allows. Pars plana vitrectomy is reserved for non-clearing hemorrhage or when the underlying detachment/ischemic retina requires direct surgical access.',
      followUpSchedule:
        'Re-examine within 1-4 weeks initially to monitor clearing and reassess the underlying cause as the view improves, with interval B-scan if the view remains obscured; frequency individualized to hemorrhage density and suspected etiology.',
      escalationCriteria: [
        'B-scan evidence of retinal detachment at any point -> urgent same-day surgical referral',
        'Non-clearing or recurrent hemorrhage over several weeks to months -> pars plana vitrectomy evaluation',
        'New rubeosis iridis or rapidly rising IOP -> urgent evaluation for evolving neovascular glaucoma',
      ],
      referralCriteria: [
        'Any significant vitreous hemorrhage -> prompt retina specialist referral for B-scan (if not already obtained), etiology workup, and treatment planning',
        'B-scan evidence of retinal detachment, or high suspicion for an occult break -> same-day urgent referral',
      ],
      complications: ['Non-clearing hemorrhage precluding assessment/treatment of the underlying retina', 'Missed or delayed retinal detachment repair', 'Ghost cell glaucoma', 'Proliferative vitreoretinopathy after vitrectomy', 'Recurrent hemorrhage'],
      monitoringParameters: ['Visual acuity', 'Red reflex/view clarity', 'Serial B-scan ultrasound if the view remains poor', 'IOP and anterior segment exam for neovascularization'],
      relatedDrugIds: ['bevacizumab', 'ranibizumab', 'aflibercept'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'binocular-indirect-ophthalmoscopy', 'fluorescein-angiography'],
    },
    followUp: {
      typical: 'Re-examine within 1-4 weeks initially to monitor for clearing and reassess for an underlying cause as the view improves, with interval B-scan if the view remains obscured; frequency individualized to density and suspected etiology',
      monitor: 'Visual acuity, red reflex/view clarity, serial B-scan ultrasound if the view remains poor, IOP, and anterior segment exam for neovascularization',
      progression: 'Non-clearing or recurrent hemorrhage, new B-scan findings of retinal detachment, development of rubeosis iridis or elevated IOP',
      shortenWhen: 'Suspected retinal detachment, rapidly rising IOP, rubeosis iridis, or known proliferative disease with an inadequately treated ischemic retina',
    },
    prognosis: {
      typicalCourse: 'Spontaneous clearing typically occurs over weeks to several months, with the rate of clearing inversely related to hemorrhage density; diabetic vitreous hemorrhage clears more slowly than trauma-related hemorrhage due to persistent bleeding from neovascular tissue and vitreous adhesions',
      progressionRisk: 'Risk of recurrent hemorrhage remains as long as the underlying neovascular or vascular cause is untreated; non-clearing hemorrhage risks amblyopia-equivalent visual deprivation effects in children and prevents monitoring/treatment of the underlying retina in all ages',
      complications: 'Non-clearing hemorrhage precluding assessment/treatment of underlying disease, missed or delayed retinal detachment repair, ghost cell glaucoma, proliferative vitreoretinopathy after vitrectomy, recurrent hemorrhage',
      visualPrognosis: 'Generally favorable once the underlying cause is identified and treated, particularly for hemorrhage from PVD-related vessel avulsion without detachment; guarded when hemorrhage is due to advanced ischemic disease, occurs with an underlying retinal detachment, or fails to clear and requires vitrectomy',
    },
    clinicalPearls: [
      'Proliferative diabetic retinopathy is the single most common cause of vitreous hemorrhage overall — always ask about a diabetes history in a patient presenting with sudden floaters/vision loss and vitreous hemorrhage.',
      'B-scan ultrasound is mandatory whenever the fundus view is too poor for direct examination — the key question it answers is whether there is an underlying retinal detachment, which changes management from observation to urgent surgical referral.',
      'Advise patients to sleep with the head of the bed elevated and remain upright as much as possible — this helps blood settle inferiorly, away from the visual axis, while it clears.',
      'Terson syndrome should be considered in any patient with vitreous hemorrhage in the setting of subarachnoid or subdural hemorrhage — bilateral involvement is common and neurosurgical/neurologic status typically takes priority.',
      'Pars plana vitrectomy is indicated for non-clearing hemorrhage, but also serves a diagnostic/therapeutic purpose when direct treatment of ischemic retina (PRP) or repair of an associated retinal detachment cannot otherwise proceed.',
    ],
    highYield: [
      'Proliferative diabetic retinopathy is the most common overall cause of vitreous hemorrhage; other causes include retinal tear/detachment, ischemic RVO with neovascularization, trauma, and Terson syndrome',
      'B-scan ultrasound is essential when the view is too poor for direct visualization, primarily to rule out an underlying retinal detachment or mass',
      'Presentation is sudden painless vision loss, floaters, or a red hue to vision, with loss of the red reflex on exam proportional to hemorrhage density',
      'Management ranges from observation with upright/head-elevated positioning for spontaneous clearing to pars plana vitrectomy for non-clearing hemorrhage or when the underlying cause (e.g., detachment repair, PRP-eligible ischemic retina) requires direct surgical access',
      'Terson syndrome refers to vitreous (and/or retinal/subhyaloid) hemorrhage occurring in association with subarachnoid hemorrhage, from acutely elevated intracranial pressure transmitted along the optic nerve sheath',
      'Diabetic vitreous hemorrhage tends to clear more slowly than trauma-related hemorrhage due to persistent neovascular bleeding and vitreoretinal traction',
    ],
  },
]
