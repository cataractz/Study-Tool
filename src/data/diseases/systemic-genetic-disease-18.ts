import type { Disease } from '../../types/disease'

export const systemicGeneticDisease18: Disease[] = [
  {
    id: 'ankylosing-spondylitis',
    name: 'Ankylosing Spondylitis',
    aliases: ['AS', 'Bechterew Disease', 'Marie-Strumpell Disease'],
    category: 'Systemic Health - Rheumatologic & Autoimmune',
    definition:
      'A chronic, HLA-B27-associated seronegative spondyloarthropathy primarily affecting the axial skeleton (sacroiliac joints and spine), producing progressive inflammatory back pain and, over years, bony fusion of the spine; it is the single most common systemic association identified in acute anterior uveitis.',
    affectedStructure: 'Sacroiliac joints and spine (entheses); iris and anterior ciliary body when anterior uveitis develops',
    pathologicalProcess:
      'Chronic HLA-B27-associated inflammation targets entheses (the sites where tendons and ligaments insert into bone) rather than the synovium primarily, producing enthesitis at the sacroiliac joints and spine that, over a sustained disease course, leads to reactive new bone formation and eventual bony fusion (ankylosis); the same HLA-B27-driven immune susceptibility separately produces recurrent, acute, non-granulomatous anterior uveitis via the mechanism shared across the broader HLA-B27-associated uveitis spectrum.',
    epidemiology: {
      typicalAge: 'Onset typically in the teens through 30s; uncommon to present for the first time after age 45',
      sexDistribution: 'Male predominance, historically cited at roughly 2-3:1, though this gap narrows somewhat with more sensitive imaging (MRI) detecting milder disease in women',
      prevalence: 'Strongly linked to HLA-B27: roughly 90% or more of patients with ankylosing spondylitis are HLA-B27 positive, though only a minority of HLA-B27-positive individuals in the general population ever develop the disease',
      importantPopulations: 'Young adults with inflammatory low back pain and morning stiffness; family history of AS or another spondyloarthropathy meaningfully raises risk given the strong HLA-B27 association',
    },
    riskFactors: [
      { label: 'HLA-B27 positivity', tier: 'major' },
      { label: 'Male sex', tier: 'moderate' },
      { label: 'Family history of ankylosing spondylitis or another spondyloarthropathy', tier: 'moderate' },
      { label: 'Young adult age at symptom onset', tier: 'associated' },
    ],
    pathophysiology: [
      'HLA-B27 positivity confers strong genetic susceptibility, though the precise mechanism linking the allele to disease remains incompletely understood (proposed mechanisms include HLA-B27 molecule misfolding and an unfolded protein stress response, and molecular mimicry with bacterial antigens)',
      'Enthesitis — inflammation at the insertion of tendons and ligaments into bone — is the primary pathologic process, in contrast to the synovium-centered inflammation of rheumatoid arthritis',
      'The sacroiliac joints are typically the earliest and most consistently involved site, producing the sacroiliitis that is often the first imaging-detectable finding',
      'Chronic enthesitis triggers reactive new bone formation (syndesmophytes) that bridges adjacent vertebral bodies over a period of years, producing the fused, rigid "bamboo spine" appearance and progressive loss of spinal mobility in advanced, longstanding disease',
      'A separate but related HLA-B27-driven process produces acute anterior uveitis, following the same unilateral, non-granulomatous, recurrent, alternating-eye pattern seen across the broader HLA-B27-associated uveitis spectrum (see HLA-B27 Associated Uveitis) — the ocular attack does not require active spinal disease at the same time',
    ],
    symptoms: {
      common: [
        'Chronic low back pain and stiffness, classically inflammatory in pattern — worse with rest/inactivity and improving with movement/exercise, with morning stiffness typically lasting more than 30-60 minutes',
        'Buttock pain (from sacroiliitis), sometimes alternating sides',
        'Gradual onset over weeks to months, typically before age 40',
      ],
      lessCommon: [
        'Peripheral joint pain, most often hips and shoulders',
        'Enthesitis at sites such as the Achilles tendon or plantar fascia (heel pain)',
        'Chest wall pain/reduced chest expansion from costovertebral joint involvement in more advanced disease',
        'Fatigue',
      ],
      importantNegatives: [
        'Inflammatory back pain improves with activity and worsens with rest — the opposite pattern from typical mechanical/degenerative low back pain, which worsens with activity and improves with rest',
        'Ocular symptoms (acute eye pain, photophobia, redness) from anterior uveitis often occur as isolated flares independent of concurrent back pain activity',
      ],
      typicalProgression: 'Insidious onset of inflammatory back pain in a young adult, gradually progressing over years; without treatment, chronic enthesitis and new bone formation can lead to progressive spinal stiffness, reduced mobility, and in advanced cases a fixed, stooped (kyphotic) posture. Anterior uveitis, when it occurs, follows its own separate acute, recurrent, alternating-eye course.',
    },
    signs: [
      { area: 'External', finding: 'Circumlimbal (ciliary) flush during an acute anterior uveitis flare' },
      { area: 'Anterior Chamber', finding: 'Marked cell and flare with fine, non-granulomatous keratic precipitates during a uveitis attack; fibrin or hypopyon possible in severe attacks' },
      { area: 'Other', finding: 'Posterior synechiae can develop rapidly with recurrent or undertreated uveitis attacks; reduced ocular motility is not a typical direct finding' },
    ],
    differentialDiagnosis: [
      { disease: 'Mechanical/degenerative low back pain', whySimilar: 'Chronic low back pain in a similar age range', keyDistinguisher: 'Mechanical back pain worsens with activity and improves with rest, with morning stiffness typically brief (well under 30 minutes) — the reverse of the inflammatory pattern seen in ankylosing spondylitis' },
      { disease: 'Reactive arthritis', whySimilar: 'Both are HLA-B27-associated spondyloarthropathies that can produce acute anterior uveitis', keyDistinguisher: 'Reactive arthritis follows a documented antecedent genitourinary or gastrointestinal infection and presents with the conjunctivitis-urethritis-arthritis triad, whereas ankylosing spondylitis is primarily an axial (spine/sacroiliac) disease without a preceding infectious trigger' },
      { disease: 'Psoriatic Arthritis', whySimilar: 'Both are HLA-B27-associated spondyloarthropathies that can involve the axial skeleton and cause anterior uveitis', keyDistinguisher: 'Psoriatic arthritis occurs in a patient with psoriasis and often also shows peripheral joint findings (DIP joint involvement, dactylitis, nail changes) not seen in ankylosing spondylitis' },
    ],
    diagnosticTesting: [
      { name: 'Sacroiliac joint imaging (plain radiographs and/or MRI)', whyOrdered: 'Confirm sacroiliitis in a patient with inflammatory back pain', expectedFinding: 'Sacroiliac joint erosion, sclerosis, or fusion on radiographs in established disease; MRI can detect earlier bone marrow edema before radiographic changes appear', contribution: 'Central to diagnosis and staging of axial disease severity' },
      { name: 'HLA-B27 testing', whyOrdered: 'Support the diagnosis, particularly when imaging findings are early or equivocal', expectedFinding: 'Positive in roughly 90% or more of affected patients', contribution: 'A positive result supports the diagnosis and, in a patient presenting with acute anterior uveitis, prompts consideration of underlying ankylosing spondylitis' },
      { name: 'Erythrocyte sedimentation rate (ESR) / C-reactive protein (CRP)', whyOrdered: 'Assess systemic inflammatory activity', expectedFinding: 'Often elevated during active disease, though can be normal even with active disease in some patients', contribution: 'Supports disease activity assessment; a normal value does not exclude the diagnosis' },
      { name: 'Slit lamp examination with AC cell/flare grading and IOP measurement', whyOrdered: 'Confirm and grade anterior uveitis when a patient presents with an acute red, painful eye', expectedFinding: 'Marked cell/flare, fine keratic precipitates, possible fibrin/hypopyon in severe attacks', contribution: 'Establishes ocular disease severity and guides treatment urgency' },
    ],
    diagnosis: {
      criteria: 'Supported by the modified New York criteria, which combine radiographic sacroiliitis with clinical features (inflammatory back pain, limited lumbar spine motion, or limited chest expansion)',
      confirmation: 'Diagnosis is made by rheumatology, integrating the clinical pattern of inflammatory back pain, imaging evidence of sacroiliitis, and HLA-B27 status; ocular involvement (anterior uveitis) is diagnosed clinically at the slit lamp.',
      classification: 'Disease activity and axial involvement are staged using imaging (radiographic versus non-radiographic/MRI-detected early axial spondyloarthritis) and validated activity indices used by rheumatology',
    },
    management: [
      { category: 'First-line treatment', detail: 'NSAIDs are first-line for axial symptoms and are used regularly (not just as needed) in active disease; physical therapy and a structured exercise program to maintain spinal mobility and posture are essential adjuncts' },
      { category: 'Advanced treatment', detail: 'Biologic therapy (anti-TNF agents, IL-17 inhibitors) for patients with inadequate response to NSAIDs and physical therapy, directed by rheumatology' },
      { category: 'Referral', detail: 'Refer to rheumatology for diagnosis and systemic disease management; refer new/recurrent acute anterior uveitis to ophthalmology for prompt treatment' },
      { category: 'First-line treatment', detail: 'For anterior uveitis attacks: aggressive cycloplegic/mydriatic therapy and frequent topical corticosteroids, following the same protocol used for HLA-B27-associated uveitis generally' },
      { category: 'Emergency management', detail: 'Prompt, same-day treatment of severe uveitis attacks with hypopyon, fibrin, or marked IOP elevation to prevent posterior synechiae and secondary glaucoma' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp exam with AC cell/flare grading and IOP measurement for any new red or painful eye in a patient with known or suspected AS',
        'Baseline dilated fundus exam to rule out posterior involvement (panuveitis)',
        'Gonioscopy if IOP is elevated or synechiae are suspected',
        'Confirm sacroiliac imaging and HLA-B27 status have been obtained if the axial diagnosis is not yet established, coordinating with rheumatology',
      ],
      initialTreatment:
        'Acute anterior uveitis attacks are treated with aggressive cycloplegic/mydriatic therapy paired with frequent topical corticosteroids dosed to severity, following the same protocol used for HLA-B27-associated uveitis generally; axial disease is managed separately by rheumatology with regular NSAID dosing, structured physical therapy, and biologic therapy for inadequate responders.',
      followUpSchedule:
        'Uveitis attacks are rechecked within days to a week of starting treatment to grade AC cell/flare response and check IOP, tapering the steroid slowly as inflammation quiets; monitor the fellow eye given the classic alternating pattern, while rheumatology follows axial disease activity on an ongoing basis.',
      escalationCriteria: [
        'No improvement in AC cell/flare grade after about a week of appropriately dosed topical steroid',
        'New or worsening hypopyon or fibrin',
        'IOP rise suggesting a steroid responder',
        'Development of posterior synechiae despite cycloplegia',
      ],
      referralCriteria: [
        'New or recurrent acute anterior uveitis -> prompt ophthalmology treatment; severe attacks (hypopyon, fibrin, marked IOP elevation) -> same-day evaluation',
        'New inflammatory back pain/morning stiffness pattern in a uveitis patient without an established AS diagnosis -> rheumatology for axial spondyloarthropathy workup',
        'Recurrent or steroid-dependent uveitis attacks -> rheumatology for consideration of systemic biologic therapy',
      ],
      steroidConsiderations:
        'Prednisolone acetate 1%, dosed up to hourly while awake in severe attacks with a slow taper over several weeks, mirrors the standard HLA-B27-associated anterior uveitis protocol; check IOP at every visit given the steroid-response risk, and never stop abruptly.',
      cycloplegicConsiderations:
        'Cyclopentolate or homatropine relieves ciliary spasm and pain and keeps the pupil mobile to reduce posterior synechiae formation during acute attacks.',
      complications: ['Posterior synechiae', 'Secondary glaucoma', 'Cataract from recurrent inflammation or chronic steroid use', 'Progressive spinal fusion and kyphosis (systemic)'],
      monitoringParameters: ['AC cell/flare grade', 'IOP', 'Pupil shape/mobility for synechiae', 'Fellow eye for new attacks', 'Spinal mobility and inflammatory markers, coordinated with rheumatology'],
      relatedDrugIds: ['prednisolone-acetate', 'cyclopentolate', 'homatropine', 'adalimumab', 'etanercept', 'infliximab'],
      relatedExamTechniqueIds: ['anterior-chamber-cell-flare-grading', 'gonioscopy'],
    },
    followUp: {
      typical: 'Rheumatology follows axial disease activity on an ongoing basis; acute uveitis attacks are rechecked within days to a week of starting treatment to confirm response',
      monitor: 'Spinal mobility and posture, inflammatory markers, and, for the eye, anterior chamber cell/flare, IOP, and synechiae during uveitis flares; monitor the fellow eye for new attacks given the classic alternating pattern',
      progression: 'Progressive loss of spinal mobility, new syndesmophyte formation, or increasing kyphosis indicates axial disease progression; recurrent or worsening uveitis attacks warrant closer ophthalmic follow-up and reconsideration of systemic therapy',
      shortenWhen: 'Severe uveitis attack (hypopyon, fibrin, marked IOP elevation) or new/worsening axial symptoms despite treatment',
    },
    prognosis: {
      typicalCourse: 'Chronic and slowly progressive over years to decades without adequate treatment; individual uveitis attacks typically resolve within weeks with treatment but the disease is characteristically recurrent over a patient\'s lifetime',
      progressionRisk: 'Risk of progressive spinal fusion and postural changes (kyphosis) with longstanding, poorly controlled axial disease; uveitis recurrence risk continues even when axial disease is well controlled',
      complications: 'Spinal fusion with loss of mobility and, in advanced cases, a fixed stooped posture; restrictive changes from costovertebral involvement; ocular complications of recurrent uveitis include posterior synechiae, secondary glaucoma, and cataract',
      visualPrognosis: 'Generally good with prompt treatment of individual uveitis attacks; cumulative structural risk increases with the number and severity of recurrences, particularly if cycloplegia/anti-inflammatory treatment is delayed',
    },
    clinicalPearls: [
      'Inflammatory back pain improves with activity and worsens with rest — the opposite of typical mechanical back pain — and is the single most useful history clue distinguishing AS from far more common causes of chronic back pain.',
      'Ankylosing spondylitis is the most common identifiable systemic association of acute anterior uveitis overall; always ask about inflammatory back pain and morning stiffness in a patient presenting with acute, unilateral, recurrent anterior uveitis.',
      'Roughly 90% or more of AS patients are HLA-B27 positive, but the reverse is not true — most HLA-B27-positive people never develop AS, so a positive test alone is not diagnostic.',
      '"Bamboo spine" refers to the radiographic appearance of vertebral bodies fused by syndesmophytes in advanced, longstanding disease.',
      'Uveitis attacks in AS follow the classic HLA-B27 pattern — acute, unilateral, non-granulomatous, recurrent, and alternating between eyes — and are managed the same way regardless of which underlying spondyloarthropathy is present.',
    ],
    highYield: [
      'Most common systemic disease association of acute anterior uveitis: ankylosing spondylitis',
      'Inflammatory back pain pattern: worse with rest, better with activity, morning stiffness >30-60 minutes — reversed from mechanical back pain',
      'Roughly 90%+ of AS patients are HLA-B27 positive; sacroiliitis is typically the earliest imaging finding',
      '"Bamboo spine" = vertebral fusion via syndesmophytes in advanced disease',
      'NSAIDs are first-line for axial symptoms; biologics (anti-TNF, IL-17 inhibitors) for refractory disease',
      'Uveitis attacks are acute, unilateral, non-granulomatous, recurrent, and classically alternate eyes — managed identically to other HLA-B27-associated uveitis',
    ],
  },
  {
    id: 'psoriatic-arthritis',
    name: 'Psoriatic Arthritis',
    aliases: ['PsA'],
    category: 'Systemic Health - Rheumatologic & Autoimmune',
    definition:
      'A seronegative inflammatory arthritis occurring in a subset of patients with psoriasis, involving peripheral joints (classically including the distal interphalangeal joints), the axial skeleton in an HLA-B27-associated subset, and entheses, and — in that axial/HLA-B27-positive subset — associated with acute anterior uveitis; this entry covers the joint disease and its intraocular association, distinct from the direct skin/eyelid findings of psoriasis itself (see Psoriasis: Ocular Manifestations).',
    affectedStructure: 'Peripheral joints (especially DIP joints), entheses, sacroiliac joints/spine in the axial subtype; iris and anterior ciliary body when anterior uveitis develops',
    pathologicalProcess:
      'The same Th17-predominant immune dysregulation that drives psoriatic skin plaques also targets joints and entheses in a subset of psoriasis patients, producing synovitis, enthesitis, and, characteristically, inflammation extending into the distal interphalangeal joints and digits (producing dactylitis, the "sausage digit" appearance from combined tenosynovitis, arthritis, and enthesitis of a single digit); in patients who are also HLA-B27 positive, axial (spinal/sacroiliac) involvement and the same acute, recurrent, non-granulomatous anterior uveitis seen across the broader HLA-B27-associated uveitis spectrum can develop.',
    epidemiology: {
      typicalAge: 'Most commonly develops in the 30s-50s, typically (though not always) years after cutaneous psoriasis is already established',
      prevalence: 'Develops in roughly 20-30% of patients with psoriasis; a minority of psoriatic arthritis patients develop joint disease before any skin findings appear',
      importantPopulations: 'Patients with psoriasis, particularly those with nail involvement (pitting, onycholysis), which is specifically associated with higher risk of joint disease; the HLA-B27-positive axial subset is at particular risk for anterior uveitis',
    },
    riskFactors: [
      { label: 'Established cutaneous psoriasis', tier: 'major' },
      { label: 'Psoriatic nail involvement (pitting, onycholysis)', tier: 'moderate' },
      { label: 'HLA-B27 positivity (axial subtype and uveitis risk specifically)', tier: 'moderate' },
      { label: 'Family history of psoriasis or psoriatic arthritis', tier: 'associated' },
    ],
    pathophysiology: [
      'Shared Th17-mediated immune dysregulation with cutaneous psoriasis extends to synovium and entheses in a subset of patients',
      'Distal interphalangeal (DIP) joint involvement is a characteristic pattern, often accompanied by adjacent psoriatic nail changes on the same digit — a distinguishing feature from rheumatoid arthritis, which typically spares the DIP joints',
      'Dactylitis ("sausage digit") results from combined tenosynovitis, joint synovitis, and enthesitis affecting an entire digit rather than a single joint',
      'A subset of patients, particularly those who are HLA-B27 positive, develop axial (spinal and sacroiliac) involvement resembling ankylosing spondylitis',
      'In the HLA-B27-positive/axial subset, the same mechanism producing anterior uveitis across the broader spondyloarthropathy spectrum applies — acute, unilateral, non-granulomatous, recurrent inflammation of the anterior chamber, independent of the direct skin/eyelid changes of cutaneous psoriasis (see Psoriasis: Ocular Manifestations for that separate entity)',
    ],
    symptoms: {
      common: [
        'Joint pain, swelling, and stiffness — patterns vary from asymmetric oligoarticular to symmetric polyarticular to axial (spine-predominant) disease',
        'Known or concurrently diagnosed psoriasis skin plaques',
        'Nail changes: pitting, onycholysis (nail separating from the nail bed), or subungual hyperkeratosis',
      ],
      lessCommon: [
        'Dactylitis (diffuse swelling of an entire finger or toe)',
        'Enthesitis (heel pain from Achilles tendon or plantar fascia involvement)',
        'Inflammatory back pain and morning stiffness if axial disease is present',
        'Eye pain, photophobia, and blurred vision if anterior uveitis develops (more common in the axial/HLA-B27-positive subset)',
      ],
      importantNegatives: ['Unlike rheumatoid arthritis, psoriatic arthritis is seronegative (rheumatoid factor and anti-CCP antibodies are typically negative)', 'Uveitis in a psoriasis patient should prompt evaluation for underlying psoriatic arthritis rather than being attributed to the skin disease alone, since direct cutaneous psoriasis does not itself cause intraocular inflammation'],
      typicalProgression: 'Joint symptoms most often follow established skin disease by years, though can precede or occur without obvious skin involvement at presentation; the disease course and joint pattern can evolve over time, and axial disease, when present, tends to be chronic and slowly progressive similar to ankylosing spondylitis.',
    },
    signs: [
      { area: 'External', finding: 'Circumlimbal (ciliary) flush during an acute anterior uveitis flare in the axial/HLA-B27-positive subset' },
      { area: 'Anterior Chamber', finding: 'Cell and flare, typically non-granulomatous, with fine keratic precipitates during a uveitis attack; fibrin or hypopyon possible in severe attacks' },
      { area: 'Other', finding: 'Posterior synechiae can develop with recurrent or undertreated uveitis; note that psoriasis itself can separately cause external eyelid/lid-margin findings (see Psoriasis: Ocular Manifestations), which are a distinct process from the intraocular uveitis covered here' },
    ],
    differentialDiagnosis: [
      { disease: 'Rheumatoid Arthritis', whySimilar: 'Both cause chronic inflammatory polyarthritis', keyDistinguisher: 'Psoriatic arthritis characteristically involves the DIP joints and is seronegative (RF/anti-CCP negative), often with an asymmetric pattern, nail changes, and dactylitis, whereas rheumatoid arthritis typically spares the DIP joints, is symmetric, and is usually seropositive' },
      { disease: 'Ankylosing Spondylitis', whySimilar: 'Both are HLA-B27-associated spondyloarthropathies that can cause axial disease and anterior uveitis', keyDistinguisher: 'Psoriatic arthritis occurs in a patient with psoriasis and typically also shows peripheral joint involvement (DIP joints, dactylitis, nail changes) not present in ankylosing spondylitis, which is a purely axial disease' },
      { disease: 'Psoriasis: Ocular Manifestations', whySimilar: 'Both occur in patients with underlying psoriasis and can coexist in the same patient', keyDistinguisher: 'That entry covers direct external eyelid/periocular skin and lid-margin disease from cutaneous psoriasis, which can occur even without joint involvement, whereas this entry covers the distinct joint disease and its associated intraocular uveitis' },
    ],
    diagnosticTesting: [
      { name: 'Clinical evaluation using CASPAR classification criteria', whyOrdered: 'Establish the diagnosis using established rheumatologic criteria combining joint pattern, psoriasis history, nail findings, and serology', expectedFinding: 'Meets criteria when characteristic joint disease is present in a patient with psoriasis (personal or family history) plus supporting features', contribution: 'Standardizes diagnosis and helps differentiate from other inflammatory arthritides' },
      { name: 'Rheumatoid factor and anti-CCP antibody testing', whyOrdered: 'Help distinguish from rheumatoid arthritis', expectedFinding: 'Typically negative (seronegative) in psoriatic arthritis', contribution: 'Supports psoriatic arthritis over rheumatoid arthritis when joint pattern is ambiguous' },
      { name: 'Joint imaging (plain radiographs, MRI as indicated)', whyOrdered: 'Characterize the pattern and severity of joint involvement', expectedFinding: 'Classic "pencil-in-cup" deformity at affected joints in more advanced disease; sacroiliitis if axial disease is present', contribution: 'Supports diagnosis and stages disease severity' },
      { name: 'HLA-B27 testing', whyOrdered: 'Assess risk for axial disease and anterior uveitis, particularly relevant in a patient with back pain or recurrent uveitis', expectedFinding: 'Positive in a subset of patients, particularly those with axial involvement', contribution: 'Supports an axial/HLA-B27-associated pattern and prompts closer attention to uveitis risk' },
      { name: 'Slit lamp examination with AC cell/flare grading and IOP measurement', whyOrdered: 'Confirm and grade anterior uveitis in a patient presenting with an acute red, painful eye', expectedFinding: 'Marked cell/flare, fine keratic precipitates, possible fibrin/hypopyon in severe attacks', contribution: 'Establishes ocular disease severity and guides treatment urgency' },
    ],
    diagnosis: {
      criteria: 'CASPAR (Classification Criteria for Psoriatic Arthritis), which require inflammatory joint disease plus a defined point threshold across psoriasis history, nail changes, dactylitis, negative rheumatoid factor, and radiographic new bone formation',
      confirmation: 'Diagnosis is made by rheumatology, integrating joint examination pattern, psoriasis history, nail findings, imaging, and serology; anterior uveitis is diagnosed clinically at the slit lamp.',
      classification: 'Classified by predominant joint pattern (asymmetric oligoarticular, symmetric polyarticular, DIP-predominant, axial/spondylitic, or arthritis mutilans in severe erosive disease)',
    },
    management: [
      { category: 'First-line treatment', detail: 'NSAIDs for mild joint symptoms; disease-modifying antirheumatic drugs (DMARDs, e.g., methotrexate) for more significant peripheral joint disease, coordinated between rheumatology and dermatology' },
      { category: 'Advanced treatment', detail: 'Biologic therapy (anti-TNF, IL-17, or IL-23 inhibitors) for moderate-to-severe joint disease or inadequate response to conventional DMARDs — several biologics used for psoriatic arthritis also treat the skin disease concurrently' },
      { category: 'Referral', detail: 'Coordinate care between rheumatology (joint disease) and dermatology (skin disease); refer new or recurrent acute anterior uveitis to ophthalmology promptly' },
      { category: 'First-line treatment', detail: 'For anterior uveitis attacks: aggressive cycloplegic/mydriatic therapy and frequent topical corticosteroids, following the same protocol used for HLA-B27-associated uveitis generally' },
      { category: 'Emergency management', detail: 'Prompt, same-day treatment of severe uveitis attacks with hypopyon, fibrin, or marked IOP elevation to prevent posterior synechiae and secondary glaucoma' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp exam with AC cell/flare grading and IOP measurement for any red or painful eye, particularly in the axial/HLA-B27-positive subset',
        'Baseline dilated fundus exam to rule out posterior involvement during a uveitis attack',
        'Gonioscopy if IOP is elevated or synechiae are suspected',
        'Screen nail and skin findings and joint pattern to support the CASPAR criteria, in coordination with rheumatology/dermatology, for new presentations',
      ],
      initialTreatment:
        'Acute anterior uveitis attacks are treated with aggressive cycloplegic/mydriatic therapy paired with frequent topical corticosteroids dosed to severity, following the same protocol used for HLA-B27-associated uveitis generally; peripheral and axial joint disease is managed separately by rheumatology with NSAIDs, DMARDs, or biologic therapy, several of which also treat the skin disease concurrently in coordination with dermatology.',
      followUpSchedule:
        'Uveitis attacks are rechecked within days to a week of starting treatment to grade AC cell/flare response and check IOP, tapering the steroid slowly as inflammation quiets, while rheumatology and dermatology follow joint and skin disease activity on an ongoing basis.',
      escalationCriteria: [
        'No improvement in AC cell/flare grade after about a week of appropriately dosed topical steroid',
        'New or worsening hypopyon or fibrin',
        'IOP rise suggesting a steroid responder',
        'Development of posterior synechiae despite cycloplegia',
      ],
      referralCriteria: [
        'New or recurrent acute anterior uveitis -> prompt ophthalmology treatment; severe attacks (hypopyon, fibrin, marked IOP elevation) -> same-day evaluation',
        'Uveitis in a psoriasis patient without an established joint diagnosis -> rheumatology to screen for underlying psoriatic arthritis rather than attributing it to the skin disease alone',
        'Coordinate ongoing skin disease control with dermatology, since direct periocular skin/eyelid psoriasis is a separate manifestation managed independently (see Psoriasis: Ocular Manifestations)',
      ],
      steroidConsiderations:
        'Prednisolone acetate 1%, dosed up to hourly while awake in severe attacks with a slow taper over several weeks, mirrors the standard HLA-B27-associated anterior uveitis protocol; check IOP at every visit given the steroid-response risk.',
      cycloplegicConsiderations:
        'Cyclopentolate or homatropine relieves ciliary spasm and pain and keeps the pupil mobile to reduce posterior synechiae formation during acute attacks.',
      complications: ['Posterior synechiae', 'Secondary glaucoma', 'Cataract from recurrent inflammation or chronic steroid use', 'Joint erosion and deformity (systemic)'],
      monitoringParameters: ['AC cell/flare grade', 'IOP', 'Pupil shape/mobility for synechiae', 'Joint pain/swelling pattern and nail changes, coordinated with rheumatology/dermatology'],
      relatedDrugIds: ['prednisolone-acetate', 'cyclopentolate', 'homatropine', 'adalimumab', 'etanercept', 'infliximab', 'methotrexate'],
      relatedExamTechniqueIds: ['anterior-chamber-cell-flare-grading', 'gonioscopy'],
    },
    followUp: {
      typical: 'Rheumatology and dermatology follow joint and skin disease activity on an ongoing basis; acute uveitis attacks are rechecked within days to a week of starting treatment to confirm response',
      monitor: 'Joint pain/swelling pattern, nail changes, and, for the eye, anterior chamber cell/flare, IOP, and synechiae during uveitis flares',
      progression: 'New joint erosions, growing dactylitis, or axial symptom progression indicates joint disease progression; recurrent or worsening uveitis attacks warrant closer ophthalmic follow-up',
      shortenWhen: 'Severe uveitis attack (hypopyon, fibrin, marked IOP elevation) or rapidly progressive joint disease',
    },
    prognosis: {
      typicalCourse: 'Variable — ranges from mild, intermittent joint symptoms to progressive erosive arthritis; individual uveitis attacks typically resolve within weeks with treatment but recur over time in the affected subset',
      progressionRisk: 'Risk of progressive joint damage and deformity in undertreated erosive disease, including the severe arthritis mutilans pattern in a minority of patients; uveitis recurrence risk continues independent of joint disease control',
      complications: 'Joint erosion and deformity ("pencil-in-cup" changes, arthritis mutilans in severe cases); ocular complications of recurrent uveitis include posterior synechiae, secondary glaucoma, and cataract',
      visualPrognosis: 'Generally good with prompt treatment of individual uveitis attacks; cumulative structural risk increases with the number and severity of recurrences',
    },
    clinicalPearls: [
      'DIP joint involvement plus nail changes (pitting, onycholysis) on the same digit strongly suggests psoriatic arthritis over rheumatoid arthritis, which characteristically spares the DIP joints.',
      'Psoriatic arthritis is seronegative — a negative rheumatoid factor and anti-CCP do not argue against the diagnosis.',
      'Dactylitis ("sausage digit") reflects combined tenosynovitis, arthritis, and enthesitis of an entire digit, not just joint inflammation.',
      'Uveitis in a psoriasis patient should prompt screening for underlying psoriatic arthritis (particularly the axial/HLA-B27-positive subtype) rather than being attributed to the skin disease itself — cutaneous psoriasis does not directly cause intraocular inflammation.',
      '"Pencil-in-cup" deformity on radiographs is a classic, board-favorite finding in advanced psoriatic arthritis.',
    ],
    highYield: [
      'Psoriatic arthritis develops in ~20-30% of psoriasis patients and is seronegative (RF/anti-CCP negative)',
      'DIP joint involvement + nail changes on the same digit distinguishes PsA from rheumatoid arthritis (which spares the DIP joints)',
      'Dactylitis ("sausage digit") and "pencil-in-cup" radiographic deformity are classic exam findings',
      'Axial/HLA-B27-positive subset carries anterior uveitis risk, managed identically to other HLA-B27-associated uveitis',
      'Distinct from direct psoriasis skin/eyelid disease (see Psoriasis: Ocular Manifestations) — that entry does not itself cause uveitis',
      'Nail psoriasis specifically predicts higher risk of joint disease',
    ],
  },
]
