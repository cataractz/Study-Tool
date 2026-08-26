import type { Disease } from '../../types/disease'

export const neuroOphthalmologyAdditional5: Disease[] = [
  {
    id: 'optic-disc-drusen',
    name: 'Optic Disc Drusen',
    aliases: ['ODD', 'Pseudopapilledema'],
    category: 'Neuro-Ophthalmology',
    definition:
      'A benign condition in which calcified hyaline deposits accumulate within the optic nerve head, either buried beneath the disc surface (mimicking true papilledema) or eroding through the surface to appear as visible yellowish refractile bodies, classically producing an elevated, irregular disc margin without true disc edema.',
    affectedStructure:
      'Optic nerve head (prelaminar region, anterior to the lamina cribrosa) — extracellular calcified hyaline deposits accumulate within the substance of the disc itself, distinct from axoplasmic swelling',
    pathologicalProcess:
      'Congenital dysplasia of the optic disc with a small, crowded scleral canal leads to axonal metabolic compromise and disordered axoplasmic transport; extracellular mitochondrial and axonal debris progressively calcifies over years, forming refractile hyaline bodies within the nerve head that enlarge and migrate anteriorly with age.',
    epidemiology: {
      typicalAge:
        'Present from childhood but usually buried and asymptomatic in young children; drusen calcify and become visible/superficial with age, typically apparent by the second decade and increasingly so through adulthood',
      sexDistribution: 'No strong sex predilection; some series report a slight female predominance',
      prevalence: 'Approximately 0.3-2% of the population; bilateral in roughly 70-80% of cases (may be asymmetric)',
      importantPopulations:
        'Family history is common given autosomal dominant inheritance with variable penetrance; also associated with retinitis pigmentosa, angioid streaks, and conditions producing a small/crowded disc (e.g., pseudo-Foster Kennedy presentations)',
    },
    riskFactors: [
      { label: 'Family history of optic disc drusen (autosomal dominant inheritance, variable penetrance)', tier: 'major' },
      { label: 'Small, crowded optic disc with anomalous vascular branching', tier: 'major' },
      { label: 'Caucasian/Northern European ancestry', tier: 'moderate' },
      { label: 'Retinitis pigmentosa', tier: 'associated' },
      { label: 'Angioid streaks / pseudoxanthoma elasticum', tier: 'associated' },
      { label: 'Hyperopia (associated with the small crowded disc anatomy predisposing to drusen)', tier: 'associated' },
    ],
    pathophysiology: [
      'A congenitally small, crowded scleral canal restricts the space available for the optic nerve axons as they exit the eye',
      'Axonal crowding leads to chronic mechanical compression and impaired axoplasmic flow, causing intermittent axonal stasis and mitochondrial dysfunction',
      'Extruded axoplasmic and mitochondrial debris accumulates extracellularly within the prelaminar optic nerve head and progressively calcifies with mucopolysaccharides and calcium salts, forming hyaline concretions',
      'In children, these deposits are typically small, unmineralized, and buried beneath the disc surface — the disc may appear elevated with blurred margins that closely mimic true papilledema (pseudopapilledema)',
      'Over years, drusen enlarge, calcify further, and migrate anteriorly, becoming visible as yellowish, refractile, "lumpy-bumpy" nodules that produce an irregular, scalloped disc margin, often with anomalous vascular branching (trifurcation) and absence of a physiologic cup',
      'Chronic compression of nerve fibers at the disc margin can produce slowly progressive, typically arcuate visual field defects that mimic glaucomatous loss, and rarely predisposes to vascular compromise (non-arteritic anterior ischemic optic neuropathy-like events, central/branch retinal artery or vein occlusion) due to crowding of the peripapillary vasculature',
    ],
    symptoms: {
      common: ['Usually asymptomatic and detected incidentally on routine fundus exam', 'Transient visual obscurations (rare, brief graying of vision, typically posture-related)'],
      lessCommon: [
        'Gradual, often unnoticed peripheral visual field constriction (arcuate or nasal step)',
        'Sudden vision loss if a rare ischemic or vascular occlusive event occurs',
      ],
      importantNegatives: [
        'No headache, nausea, vomiting, or other signs of raised intracranial pressure (distinguishing from true papilledema)',
        'No transient visual obscurations lasting seconds with postural change that are classic for true papilledema',
        'No diplopia from a sixth nerve palsy (which would suggest elevated ICP)',
      ],
      typicalProgression:
        'Chronic and essentially stationary over a patient\'s lifetime; drusen become more visible/superficial with age as calcification increases, and associated visual field defects, when present, progress very slowly over years.',
    },
    signs: [
      {
        area: 'Optic Nerve',
        finding:
          'Buried drusen: mildly elevated disc with irregular, blurred margins, no obscuration of vessels crossing the disc, absence of a physiologic cup, normal disc color, anomalous early vascular branching (trifurcation/situs inversus pattern)',
      },
      {
        area: 'Optic Nerve',
        finding:
          'Visible/superficial drusen: yellowish, waxy, refractile globular bodies at or near the disc surface producing a "lumpy-bumpy" scalloped margin, most easily seen at the nasal disc margin',
      },
      { area: 'Optic Nerve', finding: 'Spontaneous venous pulsations frequently present (helps exclude elevated ICP, though their absence is not definitive)' },
      { area: 'Optic Nerve', finding: 'Typically no true disc hyperemia, no peripapillary nerve fiber layer hemorrhages, and no cotton wool spots' },
      { area: 'Other', finding: 'Visual field testing may show arcuate defects, enlarged blind spot, or nasal step, usually stable over time' },
    ],
    differentialDiagnosis: [
      {
        disease: 'True papilledema (from elevated intracranial pressure)',
        whySimilar: 'Both present with an elevated, blurred-margin disc that can look similar on routine ophthalmoscopy, especially when drusen are buried',
        keyDistinguisher:
          'True papilledema shows true axoplasmic disc swelling with obscuration of vessels as they cross the disc margin, hyperemia, peripapillary nerve fiber layer hemorrhages and/or cotton wool spots, and leakage/staining on fluorescein angiography (late hyperfluorescence); it is often accompanied by headache, transient visual obscurations, pulsatile tinnitus, and diplopia from CN VI palsy. Optic disc drusen show no true axoplasmic swelling, vessels remain sharply visible as they cross the disc, no leakage on FA (drusen autofluoresce rather than leak), spontaneous venous pulsations are often preserved, and there are no systemic symptoms of raised ICP. B-scan ultrasound and autofluorescence are the definitive discriminators.',
      },
      {
        disease: 'Normal-tension or crowded small disc without drusen ("pseudo-pseudopapilledema")',
        whySimilar: 'A small, hyperopic, crowded disc without drusen can also appear elevated with blurred margins',
        keyDistinguisher: 'No calcified deposits on B-scan or autofluorescence; disc margin lacks the scalloped, lumpy-bumpy contour seen with visible drusen',
      },
      {
        disease: 'Papillitis (optic neuritis with disc edema)',
        whySimilar: 'Disc elevation and blurred margins with possible mild vision complaints',
        keyDistinguisher: 'Papillitis is typically unilateral with pain on eye movement, an afferent pupillary defect, and significantly reduced acuity/color vision — features absent in uncomplicated optic disc drusen',
      },
    ],
    diagnosticTesting: [
      {
        name: 'B-scan ultrasonography',
        whyOrdered: 'Gold-standard confirmatory test for calcified drusen, particularly when buried and clinically ambiguous',
        expectedFinding: 'Focal, highly reflective echodensity at the optic nerve head that persists and casts a shadow even at low gain settings (calcium is intensely reflective regardless of sensitivity)',
        contribution: 'Definitively confirms calcification within the disc and reliably differentiates drusen from true disc edema, which shows no such persistent high reflectivity at low gain',
      },
      {
        name: 'Fundus autofluorescence',
        whyOrdered: 'Rapid, non-invasive screening test that exploits the intrinsic autofluorescent properties of calcified drusen',
        expectedFinding: 'Discrete hyperautofluorescent nodular spots at the disc, most useful for detecting superficial/visible drusen; buried drusen may still be detected due to their intrinsic autofluorescence',
        contribution: 'Confirms the diagnosis quickly in-office; a normal autofluorescence result does not fully exclude very deeply buried drusen and may warrant B-scan',
      },
      {
        name: 'Optical coherence tomography (OCT) of the optic nerve head, including enhanced-depth imaging',
        whyOrdered: 'Visualize drusen as discrete, well-circumscribed hyporeflective bodies with a hyperreflective margin within the disc substance',
        expectedFinding: 'Round, subsurface hyporeflective structures with signal shadowing, distinguishable from the diffusely thickened, smoothly elevated retinal nerve fiber layer of true papilledema',
        contribution: 'Directly visualizes buried drusen and quantifies peripapillary retinal nerve fiber layer thickness for baseline/monitoring',
      },
      {
        name: 'Fluorescein angiography',
        whyOrdered: 'Historically used to distinguish drusen from papilledema when other testing is unavailable or equivocal',
        expectedFinding: 'Drusen may show autofluorescence in the pre-injection phase and nodular staining but critically no true leakage in late frames, whereas true papilledema shows progressive late leakage/staining',
        contribution: 'Helps differentiate but has largely been supplanted by B-scan and autofluorescence, which are faster and equally definitive',
      },
      {
        name: 'Automated visual field testing',
        whyOrdered: 'Baseline and monitoring for optic nerve dysfunction from chronic nerve fiber compression',
        expectedFinding: 'Arcuate defect, enlarged blind spot, or nasal step; typically stable on serial testing',
        contribution: 'Detects and tracks the minority of patients with progressive field loss requiring closer monitoring',
      },
      {
        name: 'Neuroimaging (MRI/CT brain and orbits) or lumbar puncture',
        whyOrdered: 'Reserved for cases with genuine diagnostic uncertainty or coexisting symptoms/signs suggesting raised intracranial pressure',
        expectedFinding: 'Normal in isolated optic disc drusen; CT may incidentally show calcification at the disc',
        contribution: 'Excludes true papilledema and its underlying causes when the clinical picture is atypical or B-scan/autofluorescence are unavailable/equivocal',
      },
    ],
    diagnosis: {
      criteria:
        'Characteristic disc appearance (lumpy-bumpy visible drusen or elevated disc with anomalous vascular branching if buried) plus confirmatory imaging demonstrating calcification',
      confirmation:
        'Confirmed by B-scan ultrasound showing a highly reflective focus at the disc that persists at low gain, and/or fundus autofluorescence demonstrating characteristic hyperautofluorescent nodules; OCT can additionally localize buried drusen directly.',
      classification: 'Descriptively classified as buried (non-visible, sub-surface) versus visible/superficial drusen, and as unilateral versus bilateral',
    },
    management: [
      { category: 'Observation', detail: 'No treatment needed for the drusen themselves in the vast majority of patients; reassurance regarding the benign nature of the finding once confirmed' },
      { category: 'First-line treatment', detail: 'Baseline and serial automated visual fields to monitor for slowly progressive field loss; optimize any modifiable vascular risk factors (blood pressure, lipids) given the small associated risk of ischemic events' },
      { category: 'Referral', detail: 'Refer to neuro-ophthalmology if the clinical picture is ambiguous, if true papilledema cannot be confidently excluded, or if there is progressive visual field loss or acute vision loss suggesting an ischemic event' },
      { category: 'Emergency management', detail: 'Sudden vision loss associated with drusen (rare AION-like event or vascular occlusion) warrants urgent neuro-ophthalmic evaluation and standard ischemic optic neuropathy/occlusion workup' },
    ],
    followUp: {
      typical: 'Annual comprehensive exam with visual field testing in stable, asymptomatic patients; children may be followed less frequently once diagnosis is secure',
      monitor: 'Visual acuity, color vision, automated visual fields, and optic nerve appearance/photographs for interval change',
      progression: 'Slow enlargement of visible drusen over years is expected and not itself concerning; new or worsening visual field defects, new APD, or acute vision loss should prompt escalation',
      shortenWhen: 'Documented visual field progression, new visual symptoms, or diagnostic uncertainty regarding papilledema',
    },
    prognosis: {
      typicalCourse: 'Benign, chronic, and typically visually asymptomatic over a lifetime for the great majority of patients',
      progressionRisk: 'Low overall risk of clinically significant progression; a minority develop slowly progressive arcuate visual field defects from chronic nerve fiber compression',
      complications: 'Non-arteritic anterior ischemic optic neuropathy-like events, central/branch retinal artery or vein occlusion, and (rarely) choroidal neovascularization at the disc margin are recognized but uncommon complications',
      visualPrognosis: 'Excellent for central visual acuity in the vast majority; peripheral field loss when present is usually mild and slowly progressive rather than threatening central vision',
    },
    clinicalPearls: [
      'The single most important board concept: buried optic disc drusen can closely mimic true papilledema on routine ophthalmoscopy — always confirm with B-scan or autofluorescence before assuming raised intracranial pressure.',
      'B-scan at LOW gain is the key technique — calcified drusen remain brightly reflective at low gain, while the rest of the globe/orbit signal drops out, making the drusen stand out distinctly.',
      'Absence of vessel obscuration at the disc margin favors drusen over true edema; obscuration of vessels crossing the disc margin favors true papilledema.',
      'Spontaneous venous pulsations are frequently preserved in optic disc drusen and argue against elevated ICP, though their absence alone does not confirm papilledema.',
      'Visual field defects from drusen are typically arcuate and can be mistaken for glaucoma — correlate with disc appearance and confirmatory imaging before assuming glaucomatous disease.',
      'Inheritance is autosomal dominant with variable penetrance — screening family members with fundus exam or ancillary imaging can be clinically useful.',
    ],
    highYield: [
      'Classic buried-drusen-vs-papilledema differential: no vessel obscuration, no true leakage on FA, often preserved venous pulsations, no headache/nausea/CN VI palsy with drusen',
      'B-scan ultrasound at low gain showing persistent high reflectivity is the classic confirmatory test for calcified drusen',
      'Fundus autofluorescence shows drusen as hyperautofluorescent without any imaging agent — fast, non-invasive screening tool',
      'Visible/superficial drusen produce a "lumpy-bumpy" scalloped disc margin with anomalous early vascular branching (trifurcation)',
      'Can cause arcuate visual field defects mimicking glaucoma and rarely predisposes to AION-like ischemic events or retinal vascular occlusion',
      'Autosomal dominant inheritance with variable penetrance; overall a benign condition requiring only periodic visual field monitoring, not treatment',
    ],
  },
  {
    id: 'ocular-migraine',
    name: 'Ocular/Ophthalmic Migraine',
    aliases: ['Migraine with Aura', 'Retinal Migraine'],
    category: 'Neuro-Ophthalmology',
    definition:
      'A transient visual disturbance of neurologic (cortical) or, less commonly, retinal vascular origin occurring in association with migraine, most commonly manifesting as migraine with visual aura (a binocular, cortically-generated scintillating scotoma/fortification spectrum, typically followed by headache) and rarely as true monocular retinal migraine from retinal/choroidal vasospasm.',
    affectedStructure:
      'Migraine with aura: occipital cortex (spreading cortical depolarization along the visual cortex). Retinal migraine: retinal and/or choroidal vasculature (vasospasm of the central retinal artery or its branches, or choroidal circulation)',
    pathologicalProcess:
      'Migraine with aura arises from a wave of cortical spreading depression that propagates across the occipital visual cortex, producing a slowly evolving, expanding visual disturbance that corresponds retinotopically to the advancing wavefront; retinal migraine, in contrast, results from transient vasospasm of the retinal or choroidal vessels causing true monocular ischemia, analogous in mechanism to vasospastic angina.',
    epidemiology: {
      typicalAge: 'Onset typically in adolescence to young adulthood (teens-30s); migraine with aura can persist or recur throughout life',
      sexDistribution: 'Migraine overall is more common in women (roughly 3:1), though migraine with aura specifically shows a less pronounced female predominance than migraine without aura',
      prevalence: 'Migraine with aura affects roughly 4-5% of the general population; up to a third of migraineurs experience aura; retinal migraine is rare in comparison',
      importantPopulations: 'Young patients with a personal or strong family history of migraine; women of reproductive age (hormonal triggers); patients with known migraine history presenting with recurrent stereotyped transient visual symptoms',
    },
    riskFactors: [
      { label: 'Personal history of migraine (with or without aura)', tier: 'major' },
      { label: 'Family history of migraine', tier: 'major' },
      { label: 'Female sex', tier: 'moderate' },
      { label: 'Known migraine triggers: stress, poor sleep, hormonal fluctuation (menstruation, oral contraceptives), certain foods (aged cheese, alcohol, caffeine withdrawal, MSG), bright/flickering light', tier: 'moderate' },
      { label: 'Younger age', tier: 'associated' },
      { label: 'History of motion sickness or episodic vertigo (shared migrainous mechanism)', tier: 'associated' },
    ],
    pathophysiology: [
      'Migraine with visual aura: a self-propagating wave of neuronal and glial depolarization (cortical spreading depression) moves across the occipital cortex at a characteristic slow rate, producing a visual percept that expands and migrates across the visual field over roughly 20-30 minutes',
      'The advancing edge of depolarization classically produces the scintillating, zig-zag fortification spectrum (positive visual phenomenon), often with a trailing area of scotoma (negative visual phenomenon) as the wave passes',
      'Because the process is cortical (retrochiasmal), the visual disturbance is binocular and typically homonymous, respecting neither eye individually — a critical distinguishing feature from retinal migraine',
      'The aura is followed, usually within 60 minutes, by a throbbing, often unilateral headache with photophobia/phonophobia and nausea (though headache may be mild or absent in some patients, particularly with isolated/acephalgic aura)',
      'Retinal migraine, by contrast, results from transient vasospasm of the retinal and/or choroidal circulation, producing true monocular visual loss or scintillations confined to one eye — a genuine ocular (not cortical) event',
      'Because monocular visual symptoms carry a broader and more serious differential (embolic amaurosis fugax, giant cell arteritis, impending retinal vascular occlusion), retinal migraine is a diagnosis of exclusion made only after these causes are ruled out, and is considerably rarer than migraine with aura',
    ],
    symptoms: {
      common: [
        'Scintillating scotoma: a shimmering, zig-zag arc of light (fortification spectrum) that begins near fixation and gradually expands/migrates toward the periphery over 20-30 minutes',
        'Binocular visual disturbance present in both eyes when tested individually (a key clinical distinguishing feature)',
        'Throbbing, often unilateral headache following the visual aura, with photophobia, phonophobia, and/or nausea',
        'Stereotyped, recurrent episodes similar in character each time',
      ],
      lessCommon: [
        'Acephalgic migraine (visual aura without subsequent headache), more common in older patients with a prior history of typical migraine with headache',
        'True monocular visual loss or scintillation confined to one eye (retinal migraine) — uncommon and requires exclusion of vascular causes',
        'Other aura phenomena (paresthesias, transient speech disturbance) accompanying the visual symptoms',
      ],
      importantNegatives: [
        'No pain with eye movement or reduced color vision (argue against optic neuritis)',
        'No permanent visual field defect between episodes',
        'No jaw claudication, scalp tenderness, or systemic symptoms of giant cell arteritis in the typical young patient',
        'Symptoms are binocular in classic migraine with aura, not confined to one eye',
      ],
      typicalProgression:
        'Visual aura evolves gradually over 5-30 minutes (the "march" or "build-up" is itself a key diagnostic feature distinguishing it from the sudden onset of vascular events), resolves completely within an hour, and is followed by headache in most but not all cases; episodes are typically recurrent and stereotyped over months to years.',
    },
    signs: [
      { area: 'Optic Nerve', finding: 'Normal optic nerve appearance during and between episodes; no disc edema or pallor' },
      { area: 'Other', finding: 'Normal visual acuity, pupils, extraocular motility, and confrontation visual fields between episodes and typically at the time of examination (symptoms usually resolve before the patient reaches the office)' },
      { area: 'Other', finding: 'Dilated fundus exam is normal, including retinal vasculature, in both migraine with aura and (between attacks) retinal migraine' },
      { area: 'Other', finding: 'No afferent pupillary defect' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Amaurosis fugax (embolic transient monocular vision loss)',
        whySimilar: 'Both cause transient monocular or binocular visual disturbance that resolves spontaneously',
        keyDistinguisher:
          'Amaurosis fugax is sudden in onset (seconds), described as a curtain or shade descending rather than a gradually expanding shimmering/zig-zag pattern, is purely monocular, typically lacks any positive scintillating component, and occurs in an older patient with vascular risk factors (carotid disease, atrial fibrillation, hypercholesterolemia); it warrants urgent stroke/cardiovascular workup (carotid imaging, cardiac evaluation), unlike the benign gradual march of migrainous aura.',
      },
      {
        disease: 'Papilledema (transient visual obscurations)',
        whySimilar: 'Both can present with recurrent, brief, transient visual disturbance',
        keyDistinguisher: 'Transient visual obscurations from papilledema are typically very brief (seconds), often triggered by postural change (standing up), and are accompanied by other signs of raised ICP (headache worse recumbent/with Valsalva, pulsatile tinnitus, disc edema on exam) — the visual aura of migraine lasts much longer (20-30 minutes) and evolves with a characteristic scintillating march.',
      },
      {
        disease: 'Retinal detachment / posterior vitreous detachment with photopsias',
        whySimilar: 'Both can cause flashes of light',
        keyDistinguisher: 'Photopsias from vitreoretinal traction are typically brief, arc-shaped, monocular flashes in the peripheral field (often with new floaters), not a slowly expanding, zig-zag fortification pattern with a subsequent headache; dilated exam may reveal a retinal tear/detachment or PVD.',
      },
      {
        disease: 'Occipital lobe seizure',
        whySimilar: 'Can produce positive visual phenomena (flashing lights) of cortical origin similar to migrainous aura',
        keyDistinguisher: 'Seizure-related visual phenomena are typically briefer (seconds to a couple minutes), more stereotyped as colored circles/flashing lights rather than an expanding fortification spectrum, and may be accompanied by other ictal features (automatisms, altered awareness, subsequent postictal state)',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Detailed clinical history',
        whyOrdered: 'Primary diagnostic tool — migraine with aura is a clinical diagnosis',
        expectedFinding: 'Gradual onset and expansion of a scintillating, zig-zag scotoma over 20-30 minutes, binocular when tested carefully, followed by headache in most patients, with a personal/family history of migraine',
        contribution: 'Establishes the diagnosis when the presentation is classic and the exam is normal; the temporal profile (gradual march) is the single most useful discriminating feature from vascular causes',
      },
      {
        name: 'Comprehensive ophthalmic exam including dilated fundus exam',
        whyOrdered: 'Exclude structural/vascular ocular causes of transient visual symptoms (retinal tear/detachment, vascular occlusion, disc edema)',
        expectedFinding: 'Normal optic nerve, retina, and vasculature',
        contribution: 'A normal exam supports a functional/vasospastic or cortical etiology and helps exclude retinal or optic nerve pathology',
      },
      {
        name: 'Carotid duplex ultrasound and/or cardiac evaluation (echocardiogram, ECG/Holter)',
        whyOrdered: 'Indicated when the presentation is atypical, monocular, or occurs in an older patient or one with vascular risk factors, to exclude embolic amaurosis fugax',
        expectedFinding: 'Normal in migraine; may reveal carotid stenosis or a cardioembolic source in true transient ischemic causes',
        contribution: 'Rules out embolic/vascular disease masquerading as retinal migraine',
      },
      {
        name: 'ESR/CRP (and temporal artery biopsy if indicated)',
        whyOrdered: 'Exclude giant cell arteritis in any patient over 50 with new transient visual symptoms',
        expectedFinding: 'Normal in migraine; elevated inflammatory markers in GCA',
        contribution: 'Excludes a vision- and life-threatening mimicker that requires emergent high-dose corticosteroid treatment',
      },
      {
        name: 'Neuroimaging (MRI brain, with MRA/MRV as indicated)',
        whyOrdered: 'Reserved for atypical presentations: first episode with focal neurologic deficits, aura lasting longer than an hour, aura without any headache in an older patient, or a change in the usual pattern of established migraine',
        expectedFinding: 'Normal in migraine; used to exclude stroke, structural lesion, or vascular malformation',
        contribution: 'Excludes secondary/structural causes when the history is not classic for migraine',
      },
    ],
    diagnosis: {
      criteria:
        'International Headache Society criteria for migraine with aura: at least two attacks with one or more fully reversible aura symptoms (visual, sensory, speech/language, motor, brainstem, or retinal), each aura symptom developing gradually over ≥5 minutes and lasting 5-60 minutes, with at least one aura symptom being unilateral (for cortical aura, referring to the visual field/body side, not the eye) or monocular (for retinal migraine specifically), and headache following within 60 minutes in typical cases',
      confirmation:
        'Clinical diagnosis based on a classic history of a gradually evolving, binocular scintillating scotoma followed by headache, in a patient with a personal/family history of migraine and a normal ophthalmic and neurologic examination; retinal migraine additionally requires confirmed monocularity (patient tests each eye separately during an episode) and exclusion of embolic, inflammatory, and other vascular causes.',
      classification: 'Migraine with typical visual aura (most common) versus retinal migraine (rare, true monocular vasospastic phenomenon) versus acephalgic migraine (aura without headache)',
    },
    management: [
      { category: 'Observation', detail: 'Reassurance and observation for infrequent, classic episodes with a normal exam once the diagnosis is secure; no ocular treatment is needed for the visual aura itself' },
      { category: 'First-line treatment', detail: 'Trigger identification and avoidance (sleep hygiene, stress management, dietary triggers, hydration); acute headache treatment per migraine management guidelines coordinated with the patient\'s primary care provider or neurologist' },
      { category: 'Second-line treatment', detail: 'Preventive migraine therapy coordinated with neurology for patients with frequent or disabling episodes' },
      { category: 'Referral', detail: 'Refer to neurology for migraine management, and for any atypical features (aura lasting >60 minutes, focal neurologic deficits, first episode after age 50, or a significant change in pattern) to exclude secondary causes' },
      { category: 'Emergency management', detail: 'Sudden true monocular vision loss, especially in an older patient or one with vascular risk factors, should be urgently evaluated as amaurosis fugax/possible impending stroke or, if age >50 with systemic symptoms, as possible giant cell arteritis, rather than presumed retinal migraine' },
    ],
    followUp: {
      typical: 'Routine follow-up as clinically indicated once the diagnosis is established and the exam is normal; no specific ophthalmic interval is mandated for classic, stable migraine with aura',
      monitor: 'Frequency, character, and duration of episodes; development of any new neurologic symptoms, change in laterality, or persistent visual field defect',
      progression: 'A change from the patient\'s established stereotyped pattern, new focal neurologic signs, or persistent (non-resolving) visual symptoms should prompt re-evaluation and consideration of neuroimaging',
      shortenWhen: 'Atypical features, older patient age at first presentation, or any diagnostic uncertainty regarding a vascular or structural cause',
    },
    prognosis: {
      typicalCourse: 'Benign and self-limited per episode, with full resolution of visual symptoms typically within an hour; the overall migraine disorder often persists over years with variable frequency',
      progressionRisk: 'Low risk of permanent visual sequelae from typical migraine with aura; retinal migraine carries a small but real risk of permanent monocular visual field defect from repeated vasospastic ischemic episodes',
      complications: 'Rare: persistent aura without infarction, migrainous infarction (a true ischemic stroke temporally associated with a migraine aura), and, in retinal migraine, cumulative retinal ischemic damage with repeated episodes',
      visualPrognosis: 'Excellent for migraine with aura, with complete visual recovery between episodes in essentially all patients; generally good for retinal migraine as well, though repeated attacks can rarely cause permanent, mild visual field loss',
    },
    clinicalPearls: [
      'Always have the patient specifically test each eye individually during or immediately after an episode — true monocular symptoms (retinal migraine or a vascular event) versus binocular symptoms (cortical migraine aura) is the single most important historical detail, since patients often mistakenly describe a homonymous hemifield defect as affecting "one eye."',
      'The gradual build-up/march of the scintillating scotoma over 20-30 minutes is the key feature separating migraine aura from the sudden, curtain-like onset of embolic amaurosis fugax.',
      'A young patient with a classic history and family history of migraine, a normal exam, and stereotyped recurrent episodes generally does not need urgent neuroimaging or vascular workup — but any atypical feature (older age, first episode, focal deficits, aura >60 minutes) should prompt a broader stroke/vascular evaluation.',
      'True retinal migraine is rare and is a diagnosis of exclusion — never diagnose retinal migraine without first considering and ruling out embolic disease, GCA, and impending retinal vascular occlusion, especially in patients over 50.',
      'Acephalgic migraine (visual aura without headache) becomes relatively more common with increasing age and can be mistaken for a more ominous transient ischemic event if the classic march and binocularity are not elicited on history.',
    ],
    highYield: [
      'Migraine with visual aura is binocular and cortical (occipital spreading depression); retinal migraine is a rare, true monocular event from retinal/choroidal vasospasm — testing each eye separately is the key clinical maneuver',
      'Classic aura: scintillating scotoma/fortification spectrum that gradually expands and migrates over 20-30 minutes, typically followed by headache within 60 minutes',
      'Sudden-onset, curtain-like monocular vision loss favors embolic amaurosis fugax over migraine, and demands vascular workup (carotid/cardiac), especially in older patients',
      'Diagnosis of migraine with aura is clinical, based on IHS criteria, made after excluding other causes when the presentation is atypical',
      'Always exclude giant cell arteritis (ESR/CRP) in patients over 50 presenting with new transient visual symptoms before attributing them to migraine',
      'A change in an established, stereotyped migraine pattern, or any focal neurologic sign, should prompt neuroimaging rather than reassurance',
    ],
  },
]
