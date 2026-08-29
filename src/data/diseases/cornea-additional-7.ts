import type { Disease } from '../../types/disease'

export const corneaAdditional7: Disease[] = [
  {
    id: 'clare-contact-lens-acute-red-eye',
    name: 'Contact Lens-Induced Acute Red Eye (CLARE)',
    aliases: ['CLARE', 'Contact Lens Acute Red Eye'],
    category: 'Cornea',
    definition:
      'A sterile inflammatory reaction of the peripheral/mid-peripheral cornea caused by gram-negative bacterial endotoxin trapped against the eye during closed-eye contact lens wear, producing an acute red, painful eye without any true corneal infection.',
    affectedStructure: 'Peripheral to mid-peripheral corneal stroma and adjacent conjunctiva',
    pathologicalProcess:
      'Endotoxin (lipopolysaccharide)-mediated sterile innate inflammatory infiltration of the corneal stroma, with no bacterial invasion of corneal tissue.',
    epidemiology: {
      typicalAge: 'Any contact lens-wearing age',
      prevalence: 'Uncommon relative to infiltrative keratitis, but a well-recognized cause of acute lens-related red eye, especially with overnight wear',
      importantPopulations: 'Extended/overnight soft lens wearers, particularly with a tight or overworn lens',
    },
    riskFactors: [
      { label: 'Overnight/extended contact lens wear', tier: 'major' },
      { label: 'Tight or steep lens fit reducing tear exchange under the lens', tier: 'major' },
      { label: 'Poor lens hygiene / high lens bioburden', tier: 'moderate' },
      { label: 'Silicone hydrogel material combined with extended wear', tier: 'associated' },
    ],
    pathophysiology: [
      'Closed-eye (sleeping) wear reduces tear exchange and traps debris and bacteria — notably gram-negative organisms such as Pseudomonas species and Serratia marcescens — between the lens and the cornea.',
      'Lysis of these bacterial cell walls releases lipopolysaccharide (LPS) endotoxin, which diffuses into the corneal stroma.',
      'The endotoxin triggers a sterile innate inflammatory response — recruitment of inflammatory cells to the peripheral and mid-peripheral stroma — without any organism actually invading corneal tissue.',
      'Because there is no true infection, the corneal epithelium typically remains intact over the infiltrates, which is the key feature separating CLARE from an infectious ulcer.',
    ],
    symptoms: {
      common: [
        'Sudden-onset redness on eye opening, usually unilateral (occasionally bilateral)',
        'Moderate to significant ocular pain/discomfort',
        'Photophobia',
        'Tearing',
        'Onset on waking after sleeping in contact lenses',
      ],
      lessCommon: ['Mild blurred vision'],
      importantNegatives: ['No significant mucopurulent discharge — its presence argues against CLARE and toward microbial keratitis'],
      typicalProgression: 'Rapid onset upon eye opening after overnight lens wear, peaking within hours, then resolving over several days once lens wear is discontinued.',
    },
    signs: [
      { area: 'External', finding: 'Diffuse conjunctival injection, mild to moderate' },
      { area: 'Cornea', finding: 'Multiple peripheral to mid-peripheral subepithelial/stromal infiltrates without an overlying epithelial defect (does not stain with fluorescein)' },
      { area: 'Anterior Chamber', finding: 'Quiet to minimally reactive' },
      { area: 'Other', finding: 'May have mild lid edema; the contact lens itself often shows heavy deposits or a tight/steep fit' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Contact Lens-Induced Peripheral Ulcer (CLPU)',
        whySimilar: 'A peripheral corneal infiltrate occurring in a contact lens wearer',
        keyDistinguisher: 'CLPU is typically a single, well-circumscribed lesion with a small overlying epithelial defect and more localized pain, driven by gram-positive exotoxin rather than diffuse gram-negative endotoxin',
      },
      {
        disease: 'Bacterial Keratitis',
        whySimilar: 'Acute red eye with corneal infiltrate in a contact lens wearer',
        keyDistinguisher: 'Microbial keratitis has a significant fluorescein-staining epithelial defect, a dense infiltrate, mucopurulent discharge, and progressive worsening rather than the rapid improvement off the lens seen in CLARE',
      },
      {
        disease: 'Contact Lens-Associated Infiltrative Keratitis',
        whySimilar: 'Sterile peripheral infiltrates in a contact lens wearer',
        keyDistinguisher: 'Infiltrative keratitis is typically mild-to-asymptomatic and indolent, without the acute severe pain, photophobia, and overnight-wear history that defines CLARE',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Fluorescein staining',
        whyOrdered: 'Determine whether an epithelial defect overlies the infiltrates',
        expectedFinding: 'Typically negative/absent staining over the infiltrates in CLARE',
        contribution: 'Absence of staining argues strongly against an infectious ulcer and supports a sterile, endotoxin-mediated process',
      },
      {
        name: 'Lens wear history review',
        whyOrdered: 'Identify an overnight/extended wear pattern and lens fit',
        expectedFinding: 'History of sleeping in lenses, often with a tight or overworn lens',
        contribution: 'Confirms the classic precipitating scenario for CLARE',
      },
      {
        name: 'Corneal culture (if any diagnostic doubt)',
        whyOrdered: 'Rule out true microbial keratitis when the presentation is ambiguous or severe',
        expectedFinding: 'No organism growth in true CLARE',
        contribution: 'Definitively excludes infection when the clinical picture is not classic',
      },
    ],
    diagnosis: {
      criteria: 'Acute unilateral red eye with peripheral/mid-peripheral corneal infiltrates lacking an epithelial defect, occurring after overnight/extended contact lens wear, that improves rapidly with lens discontinuation',
      confirmation: 'Primarily a clinical diagnosis based on history (overnight wear), absence of staining over the infiltrates, and rapid resolution off the lens; culture is reserved for atypical or severe presentations to exclude microbial keratitis',
    },
    management: [
      { category: 'Observation', detail: 'Discontinue contact lens wear until complete resolution of signs and symptoms' },
      { category: 'First-line treatment', detail: 'Preservative-free lubricating drops for comfort' },
      { category: 'First-line treatment', detail: 'A short course of a topical corticosteroid or NSAID may be used for more significant inflammation/discomfort, at clinician discretion' },
      { category: 'Referral', detail: 'Escalate promptly if an epithelial defect, dense infiltrate, or mucopurulent discharge develops — those findings suggest microbial keratitis and change management entirely' },
    ],
    followUp: {
      typical: 'Recheck in 3–7 days to confirm resolution before considering a lens refit',
      monitor: 'Resolution of infiltrates and injection; development of any epithelial staining suggesting a different/infectious process',
      progression: 'Typically resolves fully within about 1–2 weeks of lens discontinuation with no lasting corneal scarring',
      shortenWhen: 'Any worsening pain, new epithelial staining, or discharge — recheck within 24 hours to reassess for microbial keratitis',
    },
    prognosis: {
      typicalCourse: 'Self-limited; resolves rapidly with lens discontinuation, usually within days to about two weeks',
      progressionRisk: 'Low when correctly diagnosed and lens wear is stopped; the real risk lies in mistaking an early infectious ulcer for CLARE',
      complications: 'Residual faint subepithelial infiltrates/scarring in rare or recurrent cases; otherwise minimal',
      visualPrognosis: 'Excellent — vision typically returns to baseline once infiltrates clear',
    },
    clinicalPearls: [
      'CLARE is the classic teaching example of a lens-wear complication caused by bacterial endotoxin rather than actual infection — no organism ever invades the cornea.',
      'The single most useful bedside distinguishing feature from microbial keratitis is the absence of an epithelial defect: CLARE infiltrates do not stain with fluorescein.',
      'A history of sleeping in contact lenses the night before onset is nearly universal — always ask about overnight/extended wear.',
    ],
    highYield: [
      'CLARE = gram-negative bacterial endotoxin (classically Pseudomonas, Serratia) trapped under a lens during closed-eye wear → sterile inflammatory infiltrates, NOT infection.',
      'No epithelial defect / no fluorescein staining over the infiltrate is the key differentiator from microbial keratitis on a board question.',
      'Management = stop lens wear; resolves rapidly without antibiotics in a true CLARE case.',
    ],
  },
  {
    id: 'contact-lens-induced-peripheral-ulcer',
    name: 'Contact Lens-Induced Peripheral Ulcer (CLPU)',
    aliases: ['CLPU'],
    category: 'Cornea',
    definition:
      'A sterile, focal inflammatory corneal lesion caused by an immune reaction to exotoxins from gram-positive bacteria (commonly Staphylococcus species) colonizing the contact lens surface or lid margin, producing a small, ulcer-like peripheral corneal lesion despite the absence of true corneal infection in most cases.',
    affectedStructure: 'Peripheral corneal epithelium and anterior stroma near the limbus',
    pathologicalProcess: 'Antigen-antibody (exotoxin-mediated) inflammatory reaction with focal leukocyte infiltration and epithelial breakdown.',
    epidemiology: {
      typicalAge: 'Any contact lens-wearing age',
      prevalence: 'Uncommon relative to infiltrative keratitis, but well documented as a distinct contact lens-associated corneal event',
      importantPopulations: 'Reusable soft lens wearers, especially those with lid margin disease (blepharitis) or poor lens hygiene',
    },
    riskFactors: [
      { label: 'Blepharitis / lid margin disease with Staphylococcal colonization', tier: 'major' },
      { label: 'Reusable (non-daily-disposable) lens wear', tier: 'moderate' },
      { label: 'Extended/overnight wear', tier: 'moderate' },
      { label: 'Poor lens hygiene / contaminated lens case', tier: 'moderate' },
      { label: 'Smoking', tier: 'associated' },
    ],
    pathophysiology: [
      'Gram-positive bacteria, most often Staphylococcus aureus or S. epidermidis, colonize the lens surface or the lid margin.',
      'Bacterial exotoxins diffuse onto the corneal surface and trigger a focal antigen-antibody inflammatory reaction rather than direct bacterial invasion of the cornea.',
      'Leukocytes accumulate in the subepithelial space near the immunologically active limbal vasculature, producing a focal, well-circumscribed infiltrate.',
      'The overlying epithelium breaks down, producing a small excavated lesion that can appear clinically similar to an infectious ulcer despite being sterile in most cases.',
    ],
    symptoms: {
      common: ['Mild to moderate localized eye pain / foreign body sensation', 'Redness localized to one area of the eye', 'Mild tearing'],
      lessCommon: ['Mild photophobia'],
      importantNegatives: ['Typically no significant discharge', 'Usually only mild-to-moderate pain — less severe than microbial keratitis'],
      typicalProgression: 'Develops over roughly a day, often noticed on waking; tends to stabilize or improve within 24–48 hours of lens discontinuation.',
    },
    signs: [
      { area: 'Cornea', finding: 'A single, small (commonly <1–2 mm), well-circumscribed, round peripheral infiltrate with an overlying epithelial defect that stains with fluorescein' },
      { area: 'External', finding: 'Focal, localized conjunctival injection adjacent to the lesion' },
      { area: 'Anterior Chamber', finding: 'Quiet to minimally reactive' },
      { area: 'Other', finding: 'Often coexisting blepharitis/lid margin disease on the same side' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Bacterial Keratitis',
        whySimilar: 'A focal peripheral corneal lesion with epithelial staining in a contact lens wearer',
        keyDistinguisher: 'Microbial keratitis tends to be larger, more painful, and progressively worsening, with a denser infiltrate and mucopurulent discharge, rather than a small, self-limited lesion that improves within 1–2 days',
      },
      {
        disease: 'Contact Lens-Induced Acute Red Eye (CLARE)',
        whySimilar: 'A contact lens-associated corneal infiltrate',
        keyDistinguisher: 'CLARE typically presents with multiple peripheral/mid-peripheral infiltrates without epithelial staining, following overnight wear, versus CLPU\'s single lesion with a small epithelial defect',
      },
      {
        disease: 'Contact Lens-Associated Infiltrative Keratitis',
        whySimilar: 'A peripheral sterile infiltrate in a contact lens wearer',
        keyDistinguisher: 'Infiltrative keratitis rarely has an epithelial defect and is usually milder and less symptomatic than CLPU',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Fluorescein staining',
        whyOrdered: 'Assess the size and depth of epithelial involvement',
        expectedFinding: 'A small, focal staining defect overlying the infiltrate',
        contribution: 'Helps size the lesion and provides a baseline for monitoring enlargement, which would suggest a true infection',
      },
      {
        name: 'Close-interval follow-up (24 hours)',
        whyOrdered: 'CLPU cannot be reliably distinguished from an early infectious ulcer at a single visit',
        expectedFinding: 'Improvement or stability in true CLPU; enlargement or worsening pain instead suggests microbial keratitis',
        contribution: 'The 24–48 hour trajectory is often more diagnostic than the initial exam',
      },
      {
        name: 'Corneal culture (if the lesion is large, central, or worsening)',
        whyOrdered: 'Rule out true microbial keratitis',
        expectedFinding: 'No organism growth in true CLPU',
        contribution: 'Definitively excludes infection when the presentation is atypical or fails to improve',
      },
    ],
    diagnosis: {
      criteria: 'A small, focal, peripheral corneal infiltrate with mild epithelial staining and mild-to-moderate pain in a contact lens wearer, that stabilizes or improves within 24–48 hours of lens discontinuation',
      confirmation: 'A clinical diagnosis supported by favorable short-interval follow-up; culture is reserved for lesions that are large, central, or fail to improve, since CLPU cannot be reliably distinguished from early microbial keratitis on a single exam',
    },
    management: [
      { category: 'Observation', detail: 'Discontinue lens wear; many small, mildly symptomatic cases are managed with close observation alone' },
      { category: 'First-line treatment', detail: 'A prophylactic topical antibiotic is commonly used empirically until an infectious ulcer can be confidently excluded, given the clinical overlap with microbial keratitis' },
      { category: 'First-line treatment', detail: 'Treat any underlying blepharitis/lid margin disease (lid hygiene, warm compresses), since it is often the reservoir for the causative organism' },
      { category: 'Referral', detail: 'Escalate to aggressive antibiotic therapy and closer monitoring if the lesion enlarges, becomes more painful, or discharge develops within the first 24–48 hours' },
    ],
    followUp: {
      typical: 'Recheck within 24–48 hours to confirm improvement',
      monitor: 'Lesion size, pain level, and development of discharge',
      progression: 'Most resolve within about a week of lens discontinuation with minimal to no scarring',
      shortenWhen: 'Worsening pain, an enlarging infiltrate, or discharge — treat as presumed microbial keratitis and reassess urgently',
    },
    prognosis: {
      typicalCourse: 'Self-limited in the large majority of cases once the lens is removed and any lid disease is treated',
      progressionRisk: 'Low, but the main risk is under-recognizing an evolving microbial keratitis in the first 24–48 hours',
      complications: 'Rare small residual subepithelial scar at the lesion site; visually significant scarring is uncommon given the typically small, peripheral location',
      visualPrognosis: 'Very good — the peripheral location generally spares central vision even if mild scarring occurs',
    },
    clinicalPearls: [
      'CLPU is driven by gram-positive (Staphylococcal) exotoxin, in contrast to CLARE\'s gram-negative endotoxin mechanism — a classic pairing on exams.',
      'Always examine the lids: blepharitis is a common reservoir for the Staphylococcus driving CLPU, and treating it reduces recurrence.',
      'Because CLPU and early microbial keratitis can look identical at a single visit, many clinicians treat empirically with a topical antibiotic and re-examine within 24–48 hours rather than assuming a sterile process from the start.',
    ],
    highYield: [
      'CLPU = gram-positive (Staphylococcus) exotoxin-mediated sterile inflammatory reaction, versus CLARE\'s gram-negative endotoxin mechanism.',
      'Presents as a single, small, well-circumscribed peripheral infiltrate WITH a mild epithelial defect — unlike CLARE\'s multiple infiltrates without staining.',
      'Cannot be reliably distinguished from microbial keratitis on a single exam — the 24–48 hour trajectory is often what confirms the diagnosis.',
    ],
  },
  {
    id: 'infiltrative-keratitis-contact-lens',
    name: 'Contact Lens-Associated Infiltrative Keratitis',
    aliases: ['IK', 'Sterile Infiltrative Keratitis', 'Asymptomatic Infiltrative Keratitis'],
    category: 'Cornea',
    definition:
      'The mildest and most common member of the contact lens-associated corneal infiltrative event spectrum — small, sterile, superficial peripheral corneal infiltrates that are often minimally symptomatic or entirely asymptomatic, reflecting a low-grade inflammatory response to lens-related antigens and bioburden rather than infection.',
    affectedStructure: 'Superficial peripheral to paracentral corneal stroma',
    pathologicalProcess: 'Low-grade sterile inflammatory infiltration without epithelial breakdown or true infection.',
    epidemiology: {
      typicalAge: 'Any contact lens-wearing age',
      prevalence:
        'The most common of the corneal infiltrative events — symptomatic events occur in roughly 2.5–6% of extended-wear soft lens wearers per year (about 3% annually in daily wear), and incidence rises to an estimated 20–25% when asymptomatic infiltrates found on routine exam are included',
      importantPopulations: 'Extended/overnight wear soft lens wearers, silicone hydrogel wearers, reusable lens wearers using multipurpose solution',
    },
    riskFactors: [
      { label: 'Extended/overnight contact lens wear', tier: 'major' },
      { label: 'Reusable (non-daily-disposable) lens wear', tier: 'moderate' },
      { label: 'Silicone hydrogel lens material', tier: 'moderate' },
      { label: 'Multipurpose solution use (vs. peroxide or daily disposable)', tier: 'moderate' },
      { label: 'Smoking, poor compliance, high lens/case bioburden', tier: 'associated' },
    ],
    pathophysiology: [
      'Chronic low-grade exposure to lens-related antigens, bacterial bioburden on the lens/case, and/or solution-related toxicity provokes a mild innate inflammatory response in the peripheral cornea.',
      'Small numbers of inflammatory cells accumulate in the superficial stroma, forming discrete granular/grainy infiltrates.',
      'Because the epithelium is not disrupted, most cases produce minimal or no symptoms and are found incidentally on slit lamp exam.',
    ],
    symptoms: {
      common: ['Often asymptomatic, found incidentally on routine exam'],
      lessCommon: ['Mild redness', 'Mild irritation or contact lens intolerance', 'Slightly reduced comfort with lens wear'],
      importantNegatives: ['No significant pain', 'No discharge', 'No significant vision change'],
      typicalProgression: 'Indolent — infiltrates are frequently noticed incidentally rather than prompting a same-day visit, and resolve gradually over one to a few weeks.',
    },
    signs: [
      { area: 'Cornea', finding: 'Small, discrete, granular/grainy superficial infiltrates, typically in the peripheral to paracentral cornea, without an overlying epithelial defect' },
      { area: 'External', finding: 'Absent to mild conjunctival injection' },
      { area: 'Anterior Chamber', finding: 'Quiet' },
    ],
    differentialDiagnosis: [
      {
        disease: 'Contact Lens-Induced Peripheral Ulcer (CLPU)',
        whySimilar: 'A sterile peripheral corneal infiltrate in a contact lens wearer',
        keyDistinguisher: 'CLPU is a single, larger, more symptomatic lesion with an overlying epithelial defect, unlike the small, often multiple, non-staining infiltrates of infiltrative keratitis',
      },
      {
        disease: 'Contact Lens-Induced Acute Red Eye (CLARE)',
        whySimilar: 'Sterile corneal infiltrates in a contact lens wearer',
        keyDistinguisher: 'CLARE is acute and clearly symptomatic (significant pain, photophobia, marked redness) following overnight wear, whereas infiltrative keratitis is indolent and often asymptomatic',
      },
      {
        disease: 'Bacterial Keratitis',
        whySimilar: 'A corneal infiltrate in a contact lens wearer',
        keyDistinguisher: 'Microbial keratitis has a significant epithelial defect with a dense infiltrate, marked pain, and discharge — features absent in infiltrative keratitis',
      },
    ],
    diagnosticTesting: [
      {
        name: 'Fluorescein staining',
        whyOrdered: 'Confirm absence of an epithelial defect',
        expectedFinding: 'Negative staining over the infiltrates',
        contribution: 'Supports a sterile, low-grade process rather than an infectious or ulcerative one',
      },
      {
        name: 'Lens wear/solution history review',
        whyOrdered: 'Identify modifiable risk factors',
        expectedFinding: 'Extended wear, reusable lens/multipurpose solution use, or high bioburden history',
        contribution: 'Guides modification of wear schedule or care system to reduce recurrence',
      },
    ],
    diagnosis: {
      criteria: 'Small, discrete, non-staining peripheral corneal infiltrates in a contact lens wearer, with minimal or no symptoms',
      confirmation: 'A clinical diagnosis made on slit lamp exam; distinguished from the other infiltrative events primarily by its mild-to-absent symptoms and lack of epithelial involvement',
    },
    management: [
      { category: 'Observation', detail: 'Many cases require no active treatment beyond temporary lens discontinuation and observation' },
      { category: 'First-line treatment', detail: 'Modify contributing factors — switch to daily disposable wear, discontinue extended/overnight wear, or switch from multipurpose solution to a peroxide-based system — to reduce recurrence' },
      { category: 'First-line treatment', detail: 'Lubricating drops for comfort if mildly symptomatic' },
    ],
    followUp: {
      typical: 'Recheck in 1–2 weeks or at the next scheduled visit to confirm resolution before resuming lens wear',
      monitor: 'Resolution of infiltrates; any evolution toward staining or pain that would suggest a different process',
      progression: 'Typically resolves over one to a few weeks without sequelae',
      shortenWhen: 'New pain, staining, or discharge — reassess for CLPU or microbial keratitis',
    },
    prognosis: {
      typicalCourse: 'Benign and self-limited — the mildest member of the infiltrative event spectrum',
      progressionRisk: 'Very low; recurrence is more of a practical management concern than a risk of acute progression',
      complications: 'Essentially none in isolated cases; recurrent infiltrates over time can occasionally leave trace subclinical scarring',
      visualPrognosis: 'Excellent — vision is essentially never affected',
    },
    clinicalPearls: [
      'Infiltrative keratitis is the mildest and by far the most common member of the CLARE/CLPU/IK/microbial keratitis spectrum — many cases are only found because the patient happens to be in the chair for an unrelated visit.',
      'A large share of contact lens-associated infiltrates are asymptomatic — studies that include incidentally found infiltrates report a rate around 20–25%, versus only a few percent per year for symptomatic events alone.',
      'Switching a recurrent-IK patient to daily disposables removes several risk factors at once (bioburden, solution exposure, temptation to over-wear) and is a common, effective practical fix.',
    ],
    highYield: [
      'IK = the mildest, most common, and most often asymptomatic member of the contact lens corneal infiltrative event spectrum.',
      'No epithelial defect, minimal-to-no symptoms, small discrete infiltrates — distinguishes it from CLPU (epithelial defect present) and CLARE (acutely symptomatic).',
      'Extended wear, reusable lenses, silicone hydrogel material, and multipurpose solution use (vs. daily disposable/peroxide) are the classic modifiable risk factors.',
    ],
  },
]
