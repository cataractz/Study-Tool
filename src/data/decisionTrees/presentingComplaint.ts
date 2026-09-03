import type { DecisionTree } from '../../types/decisionTree'

const redEye: DecisionTree = {
  id: 'red-eye',
  name: 'Red Eye',
  aliases: ['Pink Eye', 'Ocular Redness'],
  categories: ['presenting-complaint'],
  summary:
    'Triage a red eye through pain, photophobia, discharge, and staining pattern to conjunctivitis, keratitis, uveitis, scleritis/episcleritis, or acute angle-closure.',
  startNodeId: 'screen',
  nodes: {
    screen: {
      id: 'screen',
      type: 'question',
      question:
        'Does the patient have severe pain, halos around lights, nausea/vomiting, and a hazy cornea with a fixed, mid-dilated pupil?',
      rationale:
        'This constellation is the classic presentation of acute angle-closure — a true ophthalmic emergency where minutes matter. Screening for it first, before working through the rest of the differential, prevents a dangerous delay.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-yes',
          label: 'Yes — this pattern is present',
          description: 'Treat as a suspected angle-closure attack until proven otherwise.',
          nextNodeId: 'outcome-angle-closure',
          isRedFlag: true,
        },
        {
          id: 'screen-no',
          label: 'No — proceed with standard evaluation',
          nextNodeId: 'pain',
        },
      ],
    },
    pain: {
      id: 'pain',
      type: 'question',
      question: 'Is there significant ocular pain (not just grittiness, itching, or mild irritation)?',
      options: [
        { id: 'pain-yes', label: 'Yes, significant pain', nextNodeId: 'photophobia' },
        { id: 'pain-no', label: 'No, minimal or no pain', nextNodeId: 'discharge' },
      ],
    },
    photophobia: {
      id: 'photophobia',
      type: 'question',
      question: 'Is there significant photophobia?',
      rationale:
        'Photophobia with a painful red eye raises suspicion for corneal or intraocular inflammation (keratitis, anterior uveitis) rather than simple conjunctivitis, and changes what to look for next.',
      options: [
        { id: 'photophobia-yes', label: 'Yes', nextNodeId: 'staining' },
        { id: 'photophobia-no', label: 'No', nextNodeId: 'sclera-tender' },
      ],
    },
    staining: {
      id: 'staining',
      type: 'question',
      question: 'Does the cornea show fluorescein staining (an epithelial defect or infiltrate)?',
      options: [
        { id: 'staining-yes', label: 'Yes, staining or an infiltrate is present', nextNodeId: 'outcome-keratitis' },
        { id: 'staining-no', label: 'No corneal staining, but anterior chamber cells/flare are present', nextNodeId: 'outcome-uveitis' },
      ],
    },
    'sclera-tender': {
      id: 'sclera-tender',
      type: 'question',
      question:
        'Is the redness sectoral with a deep, boring ache — tender to palpation over the globe, possibly waking the patient at night?',
      rationale:
        'This distinguishes scleritis (deep, tender, vision- and globe-threatening, often tied to systemic autoimmune disease) from episcleritis (superficial, usually mild and self-limited).',
      options: [
        { id: 'sclera-tender-yes', label: 'Yes, deep and tender', nextNodeId: 'outcome-scleritis' },
        { id: 'sclera-tender-no', label: 'No, mild and not tender to palpation', nextNodeId: 'outcome-episcleritis' },
      ],
    },
    discharge: {
      id: 'discharge',
      type: 'question',
      question: 'What best describes the discharge, if any?',
      options: [
        {
          id: 'discharge-purulent',
          label: 'Purulent/mucopurulent — lids stuck together, especially copious/hyperacute',
          description: 'Copious, rapidly progressive purulent discharge raises concern for gonococcal conjunctivitis.',
          nextNodeId: 'outcome-bacterial-conjunctivitis',
        },
        {
          id: 'discharge-watery',
          label: 'Watery, with a recent cold/URI or preauricular node',
          nextNodeId: 'outcome-viral-conjunctivitis',
        },
        {
          id: 'discharge-stringy',
          label: 'Stringy/ropy mucus, prominent itching, usually bilateral',
          nextNodeId: 'outcome-allergic-conjunctivitis',
        },
        {
          id: 'discharge-none',
          label: 'Minimal or no discharge',
          nextNodeId: 'localized-blood',
        },
      ],
    },
    'localized-blood': {
      id: 'localized-blood',
      type: 'question',
      question:
        'Is there a well-demarcated, flat area of bright-red blood under the conjunctiva, with the patient otherwise asymptomatic?',
      options: [
        { id: 'blood-yes', label: 'Yes', nextNodeId: 'outcome-subconjunctival-hemorrhage' },
        { id: 'blood-no', label: 'No', nextNodeId: 'outcome-nonspecific' },
      ],
    },

    'outcome-angle-closure': {
      id: 'outcome-angle-closure',
      type: 'outcome',
      title: 'Suspected Acute Angle-Closure',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits: 'The combination of pain, halos, a hazy cornea, and a fixed mid-dilated pupil strongly increases suspicion for acute angle-closure — confirm with IOP and gonioscopy immediately.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits: 'Delay in treatment risks irreversible optic nerve and retinal damage within hours — this is a true emergency, not a routine same-day visit.',
        },
      ],
      recommendedNextSteps: [
        'Check IOP immediately (applanation preferred; Tono-Pen or digital estimation if the cornea is too hazy)',
        'Perform gonioscopy on both eyes once the acute episode allows',
        'Begin the acute angle-closure emergency protocol without delay',
        'Do not dilate either eye for any reason during the acute episode',
      ],
      relatedDiseaseIds: ['primary-angle-closure-glaucoma'],
      relatedDrugIds: ['timolol', 'pilocarpine', 'acetazolamide'],
      relatedExamTechniqueIds: ['gonioscopy', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['red-eye-workup', 'elevated-iop-glaucoma-suspect-workup'],
      relatedEmergencyProtocolIds: ['acute-angle-closure-crisis-protocol'],
    },
    'outcome-keratitis': {
      id: 'outcome-keratitis',
      type: 'outcome',
      title: 'Suspected Keratitis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'bacterial-keratitis', whyItFits: 'Pain, photophobia, and a staining epithelial defect or infiltrate increase suspicion for bacterial keratitis, especially in contact lens wearers.' },
        { diseaseId: 'hsv-keratitis', whyItFits: 'A dendritic or geographic staining pattern with reduced corneal sensation increases suspicion for herpetic keratitis — interpret alongside the staining pattern seen on exam.' },
        { diseaseId: 'infiltrative-keratitis-contact-lens', whyItFits: 'A history of contact lens wear increases suspicion for a contact-lens-associated infiltrative process, which can be sterile or infectious.' },
      ],
      mustNotMiss: [
        { diseaseId: 'acanthamoeba-keratitis', whyItFits: 'Pain disproportionate to clinical signs in a contact lens wearer (especially with water exposure) must not be missed — Acanthamoeba is easily mistaken for herpetic or bacterial keratitis early on.' },
        { diseaseId: 'fungal-keratitis', whyItFits: 'A history of vegetable matter/plant injury or chronic topical steroid use increases suspicion for fungal keratitis, which requires different antimicrobial therapy.' },
      ],
      recommendedNextSteps: [
        'Grade the infiltrate/defect size, depth, and location under the slit lamp',
        'Culture before starting antibiotics whenever the lesion is large, central, or vision-threatening — but do not delay empiric treatment while awaiting results',
        'Assess for an epithelial defect, anterior chamber reaction, and any sign of impending or actual perforation (Seidel test)',
        'Same-day cornea/ophthalmology referral for any sight-threatening infiltrate',
      ],
      relatedDiseaseIds: ['bacterial-keratitis', 'hsv-keratitis', 'acanthamoeba-keratitis', 'fungal-keratitis', 'infiltrative-keratitis-contact-lens'],
      relatedDrugIds: ['moxifloxacin'],
      relatedExamTechniqueIds: ['fluorescein-corneal-staining', 'slit-lamp-illumination-techniques', 'seidel-test'],
      relatedWorkupIds: ['red-eye-workup', 'contact-lens-complication-workup'],
      relatedEmergencyProtocolIds: ['necrotizing-microbial-keratitis-protocol'],
    },
    'outcome-uveitis': {
      id: 'outcome-uveitis',
      type: 'outcome',
      title: 'Suspected Anterior Uveitis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'anterior-uveitis', whyItFits: 'Pain, photophobia, and anterior chamber cell/flare without corneal staining increases suspicion for anterior uveitis.' },
        { diseaseId: 'hla-b27-uveitis', whyItFits: 'Recurrent, unilateral-alternating anterior uveitis with a hypopyon increases suspicion for HLA-B27-associated disease.' },
      ],
      mustNotMiss: [
        { diseaseId: 'sarcoid-uveitis', whyItFits: 'Granulomatous keratic precipitates, bilateral involvement, or posterior segment findings should raise suspicion for an underlying systemic cause such as sarcoidosis rather than idiopathic disease.' },
      ],
      recommendedNextSteps: [
        'Grade anterior chamber cell and flare at the slit lamp',
        'Check IOP — both uveitis itself and its steroid treatment can raise pressure',
        'Determine whether this is a first, isolated, unilateral, non-granulomatous episode (often no workup needed) or recurrent/bilateral/granulomatous/posterior (broader laboratory workup indicated)',
        'Start cycloplegia for comfort and to reduce synechiae risk; topical corticosteroid per severity',
      ],
      managementNotes:
        'A first episode of unilateral, non-granulomatous anterior uveitis with an otherwise unremarkable history often does not need an extensive laboratory workup — reserve that for recurrent, bilateral, granulomatous, or posterior/panuveitis presentations.',
      relatedDiseaseIds: ['anterior-uveitis', 'hla-b27-uveitis', 'sarcoid-uveitis'],
      relatedDrugIds: ['prednisolone-acetate', 'cyclopentolate'],
      relatedExamTechniqueIds: ['uveitis-laboratory-workup', 'slit-lamp-illumination-techniques'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
    },
    'outcome-scleritis': {
      id: 'outcome-scleritis',
      type: 'outcome',
      title: 'Suspected Scleritis',
      urgency: 'Same-day',
      mostLikely: [
        { diseaseId: 'scleritis', whyItFits: 'Deep, tender, boring pain with sectoral or diffuse scleral injection increases suspicion for scleritis rather than the more superficial, self-limited episcleritis.' },
      ],
      mustNotMiss: [
        { diseaseId: 'scleritis', whyItFits: 'Necrotizing scleritis and scleritis associated with systemic autoimmune disease (e.g. rheumatoid arthritis, granulomatosis with polyangiitis) can threaten the globe and reflect serious systemic disease — do not treat as simple episcleritis.' },
      ],
      recommendedNextSteps: [
        'Same-day ophthalmology referral',
        'Assess for scleral thinning/necrosis and any associated peripheral corneal involvement',
        'Consider systemic workup for an underlying autoimmune or infectious cause, especially if recurrent or necrotizing',
      ],
      relatedDiseaseIds: ['scleritis'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-pain-workup'],
    },
    'outcome-episcleritis': {
      id: 'outcome-episcleritis',
      type: 'outcome',
      title: 'Suspected Episcleritis',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'episcleritis', whyItFits: 'Mild, non-tender, sectoral or diffuse injection with minimal pain increases suspicion for episcleritis, which is usually self-limited.' },
      ],
      mustNotMiss: [
        { diseaseId: 'scleritis', whyItFits: 'If pain worsens, becomes tender to palpation, or the redness takes on a violaceous hue, reconsider scleritis rather than assuming episcleritis throughout.' },
      ],
      recommendedNextSteps: [
        'Reassurance — episcleritis is usually self-limited within 1-2 weeks',
        'Artificial tears or a short course of a mild topical NSAID/steroid for symptomatic relief',
        'Follow up if not improving, or sooner if pain worsens or becomes tender',
      ],
      relatedDiseaseIds: ['episcleritis'],
      relatedWorkupIds: ['red-eye-workup'],
    },
    'outcome-bacterial-conjunctivitis': {
      id: 'outcome-bacterial-conjunctivitis',
      type: 'outcome',
      title: 'Suspected Bacterial Conjunctivitis',
      urgency: 'Prompt',
      mostLikely: [
        { diseaseId: 'conjunctivitis', whyItFits: 'Purulent or mucopurulent discharge with lids stuck together on waking increases suspicion for a bacterial etiology.' },
      ],
      mustNotMiss: [
        { diseaseId: 'gonococcal-conjunctivitis', whyItFits: 'Hyperacute onset with copious, rapidly reaccumulating purulent discharge must not be missed — gonococcal conjunctivitis can cause corneal perforation within days and needs same-day treatment plus systemic therapy.' },
        { diseaseId: 'chlamydial-conjunctivitis-trachoma', whyItFits: 'Chronic or recurrent mucopurulent conjunctivitis unresponsive to typical topical antibiotics, especially with a new sexual partner history, should raise suspicion for chlamydial conjunctivitis.' },
      ],
      recommendedNextSteps: [
        'Topical broad-spectrum antibiotic',
        'If hyperacute/copious purulent discharge is present, treat presumptively for gonococcal infection with same-day ophthalmology involvement and systemic antibiotics, plus STI screening',
        'Counsel on hygiene and contagion precautions',
      ],
      relatedDiseaseIds: ['conjunctivitis', 'gonococcal-conjunctivitis', 'chlamydial-conjunctivitis-trachoma'],
      relatedDrugIds: ['moxifloxacin'],
      relatedWorkupIds: ['red-eye-workup', 'ocular-discharge-workup'],
    },
    'outcome-viral-conjunctivitis': {
      id: 'outcome-viral-conjunctivitis',
      type: 'outcome',
      title: 'Suspected Viral Conjunctivitis',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'conjunctivitis', whyItFits: 'Watery discharge with a recent upper respiratory infection or a tender preauricular node increases suspicion for a viral etiology, commonly adenoviral.' },
      ],
      mustNotMiss: [
        { diseaseId: 'hsv-keratitis', whyItFits: 'Unilateral vesicular lid lesions or a dendritic corneal staining pattern should redirect suspicion toward herpetic disease rather than simple viral conjunctivitis.' },
      ],
      recommendedNextSteps: [
        'Supportive care — cool compresses, artificial tears',
        'Counsel on contagion precautions (highly contagious for 10-14 days)',
        'Re-examine if pain, photophobia, or vision changes develop — may signal corneal involvement (epidemic keratoconjunctivitis)',
      ],
      relatedDiseaseIds: ['conjunctivitis'],
      relatedWorkupIds: ['red-eye-workup'],
    },
    'outcome-allergic-conjunctivitis': {
      id: 'outcome-allergic-conjunctivitis',
      type: 'outcome',
      title: 'Suspected Allergic Conjunctivitis',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'conjunctivitis', whyItFits: 'Bilateral itching with stringy mucus discharge increases suspicion for an allergic etiology.' },
      ],
      mustNotMiss: [
        { diseaseId: 'vernal-keratoconjunctivitis', whyItFits: 'Severe itching with giant papillae and corneal shield ulceration in a young, often male, atopic patient should raise suspicion for vernal keratoconjunctivitis rather than routine seasonal allergy.' },
        { diseaseId: 'giant-papillary-conjunctivitis', whyItFits: 'A contact lens wearer with itching and giant papillae under the upper lid should raise suspicion for contact-lens-associated GPC rather than environmental allergy.' },
      ],
      recommendedNextSteps: [
        'Allergen avoidance and cool compresses',
        'Topical dual-acting antihistamine/mast-cell stabilizer',
        'Evaluate contact lens wear and hygiene if GPC is suspected',
      ],
      relatedDiseaseIds: ['conjunctivitis', 'vernal-keratoconjunctivitis', 'giant-papillary-conjunctivitis'],
      relatedWorkupIds: ['red-eye-workup'],
    },
    'outcome-subconjunctival-hemorrhage': {
      id: 'outcome-subconjunctival-hemorrhage',
      type: 'outcome',
      title: 'Subconjunctival Hemorrhage',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'subconjunctival-hemorrhage', whyItFits: 'A well-demarcated, flat, asymptomatic area of blood under the conjunctiva is characteristic of a subconjunctival hemorrhage.' },
      ],
      mustNotMiss: [
        { diseaseId: 'subconjunctival-hemorrhage', whyItFits: 'Recurrent or spontaneous hemorrhage without trauma should prompt a blood pressure check and, if recurrent, screening for a bleeding disorder or anticoagulant effect.' },
      ],
      recommendedNextSteps: [
        'Reassurance — resolves spontaneously over 1-2 weeks',
        'Check blood pressure',
        'Ask about anticoagulant/antiplatelet use and recent Valsalva (coughing, straining, vomiting)',
      ],
      relatedDiseaseIds: ['subconjunctival-hemorrhage'],
      relatedWorkupIds: ['red-eye-workup'],
    },
    'outcome-nonspecific': {
      id: 'outcome-nonspecific',
      type: 'outcome',
      title: 'Nonspecific Ocular Surface Irritation',
      urgency: 'Routine',
      mostLikely: [
        { diseaseId: 'dry-eye-disease', whyItFits: 'Mild redness without pain, discharge, or a focal finding is commonly explained by ocular surface disease/dry eye — a full tear-film workup helps confirm this.' },
      ],
      mustNotMiss: [],
      recommendedNextSteps: [
        'Full slit lamp exam if not already performed, including lid margin and tear film assessment',
        'Consider a formal dry-eye workup (TBUT, staining, meibography, osmolarity) if symptoms persist',
        'Re-examine if new pain, discharge, or vision change develops',
      ],
      relatedDiseaseIds: ['dry-eye-disease'],
      relatedWorkupIds: ['red-eye-workup', 'dry-eye-workup'],
    },
  },
  references: [
    'AAO Preferred Practice Pattern: Conjunctivitis, 2023',
    'AAO Preferred Practice Pattern: Bacterial Keratitis, 2023',
    'AAO EyeWiki: Acute Angle-Closure Glaucoma',
    'AAO EyeWiki: Episcleritis and Scleritis',
  ],
}

const suddenVisionLoss: DecisionTree = {
  id: 'sudden-vision-loss',
  name: 'Sudden Vision Loss',
  aliases: ['Sudden Blurry Vision', 'Acute Painless Vision Loss', 'Acute Vision Loss'],
  categories: ['presenting-complaint'],
  summary:
    'Triage sudden vision loss through emergency screening for giant cell arteritis and CRAO, then painless vs. painful onset and visual field pattern, toward CRAO, CRVO, retinal detachment, vitreous hemorrhage, NAION, arteritic AION, optic neuritis, or acute angle-closure.',
  startNodeId: 'screen',
  nodes: {
    screen: {
      id: 'screen',
      type: 'question',
      question:
        'Does the patient have either of the following: (1) age over 50 with a new temporal headache, jaw claudication, scalp tenderness, or systemic symptoms such as fever, weight loss, or malaise; or (2) one or more preceding episodes of transient vision loss in this same eye (amaurosis fugax) that has now become persistent?',
      rationale:
        'These two patterns flag the two most time-critical causes of sudden vision loss — giant cell arteritis (which threatens the fellow eye within days without treatment) and an embolic central retinal artery occlusion (an ocular stroke). Screening for them first prevents a dangerous delay before working through the rest of the differential.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-gca',
          label: 'Yes — GCA red flags (age >50 with jaw claudication, scalp tenderness, or systemic symptoms)',
          description: 'Treat as suspected giant cell arteritis until proven otherwise.',
          nextNodeId: 'outcome-gca-vision-loss',
          isRedFlag: true,
        },
        {
          id: 'screen-amaurosis-fugax',
          label: 'Yes — repeated transient vision loss in this eye that has now become persistent',
          description: 'Treat as a suspected embolic central retinal artery occlusion.',
          nextNodeId: 'outcome-crao',
          isRedFlag: true,
        },
        {
          id: 'screen-no',
          label: 'No — neither pattern is present',
          nextNodeId: 'painless-vs-painful',
        },
      ],
    },
    'painless-vs-painful': {
      id: 'painless-vs-painful',
      type: 'question',
      question: 'Is the vision loss painless, or is it associated with pain — either pain with eye movement, or a headache?',
      options: [
        { id: 'pvp-painless', label: 'Painless', nextNodeId: 'painless-onset' },
        { id: 'pvp-painful', label: 'Painful, or associated with a headache', nextNodeId: 'painful-fork' },
      ],
    },
    'painless-onset': {
      id: 'painless-onset',
      type: 'question',
      question:
        'Did the vision loss happen as an instantaneous, fully-formed loss, or has it evolved / been noticed progressively over the past several hours to a couple of days?',
      options: [
        { id: 'onset-instant', label: 'Instantaneous', nextNodeId: 'painless-instant-pattern' },
        { id: 'onset-progressive', label: 'Progressive over hours to days', nextNodeId: 'painless-progressive-pattern' },
      ],
    },
    'painless-instant-pattern': {
      id: 'painless-instant-pattern',
      type: 'question',
      question: 'Which best describes the pattern of the instantaneous vision loss?',
      options: [
        {
          id: 'instant-altitudinal',
          label: 'An upper or lower half of vision is missing (altitudinal), often first noticed on waking',
          nextNodeId: 'outcome-naion',
        },
        {
          id: 'instant-global',
          label: 'Complete, profound loss of vision in the eye',
          nextNodeId: 'outcome-crao',
        },
        {
          id: 'instant-hazy',
          label: 'Hazy or blurred vision with new floaters or a reddish tinge, no discrete field cutoff',
          nextNodeId: 'outcome-vitreous-hemorrhage',
        },
      ],
    },
    'painless-progressive-pattern': {
      id: 'painless-progressive-pattern',
      type: 'question',
      question: 'Which best describes the progressive vision loss?',
      options: [
        {
          id: 'progressive-curtain',
          label: 'A dark curtain or shadow spreading across part of the vision from one side',
          nextNodeId: 'outcome-retinal-detachment',
        },
        {
          id: 'progressive-diffuse',
          label: 'Diffuse blur or distortion, with vascular risk factors such as hypertension, diabetes, or glaucoma',
          nextNodeId: 'outcome-crvo',
        },
      ],
    },
    'painful-fork': {
      id: 'painful-fork',
      type: 'question',
      question: 'Is the pain specifically worse with eye movement, or is it more of a headache/brow ache without pain on moving the eye?',
      rationale:
        'Pain that is specifically worse with eye movement is a hallmark of optic nerve sheath inflammation (optic neuritis), while a headache without eye-movement pain points toward a different differential — most importantly acute angle-closure or giant cell arteritis.',
      options: [
        { id: 'painful-eom', label: 'Worse with eye movement', nextNodeId: 'outcome-optic-neuritis' },
        { id: 'painful-headache', label: 'Headache/brow ache, not specifically worse with eye movement', nextNodeId: 'painful-headache-detail' },
      ],
    },
    'painful-headache-detail': {
      id: 'painful-headache-detail',
      type: 'question',
      question: 'Is there associated nausea/vomiting, halos around lights, or a red eye with a hazy cornea?',
      options: [
        { id: 'headache-detail-yes', label: 'Yes', nextNodeId: 'outcome-angle-closure' },
        { id: 'headache-detail-no', label: 'No', nextNodeId: 'outcome-gca-vision-loss' },
      ],
    },

    'outcome-gca-vision-loss': {
      id: 'outcome-gca-vision-loss',
      type: 'outcome',
      title: 'Suspected Giant Cell Arteritis (Arteritic Vision Loss)',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'Age over 50 with jaw claudication, scalp tenderness, temporal headache, or systemic symptoms accompanying vision loss increases suspicion for giant cell arteritis — interpret alongside inflammatory markers and the fellow eye exam.',
        },
        {
          diseaseId: 'naion',
          whyItFits:
            'The vision loss itself may look identical to non-arteritic AION on exam; the systemic history is what should raise suspicion toward the arteritic form instead.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'Untreated GCA can cause sudden, severe, often bilateral and irreversible vision loss, with the fellow eye at risk within days — this must not be managed as a routine same-day visit.',
        },
      ],
      recommendedNextSteps: [
        'Stat ESR, CRP, and platelet count',
        'Start high-dose systemic corticosteroids immediately on clinical suspicion — do not wait for a temporal artery biopsy',
        'Arrange temporal artery biopsy within 1-2 weeks of starting steroids',
        'Same-day ophthalmology and rheumatology involvement',
        'Examine both optic discs for pallid, chalky-white edema, and check the fellow eye closely',
      ],
      relatedDiseaseIds: ['giant-cell-arteritis', 'naion'],
      relatedDrugIds: ['prednisone', 'methylprednisolone'],
      relatedExamTechniqueIds: ['giant-cell-arteritis-laboratory-workup', 'pupillary-examination', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup'],
      relatedEmergencyProtocolIds: ['giant-cell-arteritis-vision-loss-protocol'],
    },
    'outcome-crao': {
      id: 'outcome-crao',
      type: 'outcome',
      title: 'Suspected Central Retinal Artery Occlusion',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'retinal-artery-occlusion',
          whyItFits:
            'Sudden, profound, painless vision loss — particularly if preceded by amaurosis fugax — increases suspicion for CRAO; interpret alongside the fundus exam for retinal whitening and a cherry-red spot.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'CRAO in a patient over 50 must prompt screening for GCA as an underlying arteritic cause, since arteritic CRAO carries a high risk of fellow-eye involvement and requires urgent steroids in addition to stroke workup.',
        },
        {
          diseaseId: 'carotid-artery-dissection',
          whyItFits:
            'In a younger patient, or one with neck pain or a new Horner syndrome, a carotid or vertebral artery dissection should be considered as the embolic source rather than assuming atherosclerotic disease alone.',
        },
      ],
      recommendedNextSteps: [
        'Treat as an ocular stroke — this shares pathophysiology and time-criticality with cerebral stroke',
        'Emergent stroke-center referral/activation per local protocol',
        'Check for a relative afferent pupillary defect',
        'Dilated fundus exam for retinal whitening, a cherry-red spot, or a visible embolus',
        'Stat ESR, CRP, and CBC with platelets in any patient old enough to plausibly have GCA',
        'Carotid and cardiac embolic workup (carotid duplex, echocardiogram) once stabilized',
      ],
      relatedDiseaseIds: ['retinal-artery-occlusion', 'giant-cell-arteritis', 'carotid-artery-dissection'],
      relatedExamTechniqueIds: ['swinging-flashlight-test', 'dilated-fundus-examination-systematic-approach', 'fluorescein-angiography'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup'],
      relatedEmergencyProtocolIds: ['central-retinal-artery-occlusion-protocol'],
    },
    'outcome-naion': {
      id: 'outcome-naion',
      type: 'outcome',
      title: 'Suspected Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'naion',
          whyItFits:
            'Sudden, painless altitudinal vision loss noted on waking, in a patient with vasculopathic risk factors (hypertension, diabetes, sleep apnea) and a crowded "disc-at-risk" fellow eye, increases suspicion for NAION.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'Any AION-pattern vision loss in a patient old enough to plausibly have GCA must be screened for red flags and inflammatory markers before being labeled non-arteritic, since arteritic AION can look similar early on and carries very different urgency.',
        },
      ],
      recommendedNextSteps: [
        'Rule out GCA with history, exam, and ESR/CRP/CBC in any patient old enough to plausibly have it',
        'Dilated exam for hyperemic (not pallid) disc edema',
        'Assess the fellow eye disc morphology for a small, crowded ("disc-at-risk") configuration',
        'Evaluate for sleep apnea and vasculopathic risk factors',
        'No proven treatment exists — manage vascular risk factors and counsel on the risk of fellow-eye involvement',
      ],
      relatedDiseaseIds: ['naion', 'giant-cell-arteritis'],
      relatedExamTechniqueIds: ['pupillary-examination', 'oct-optic-nerve-rnfl', 'giant-cell-arteritis-laboratory-workup'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup', 'optic-nerve-edema-workup'],
    },
    'outcome-vitreous-hemorrhage': {
      id: 'outcome-vitreous-hemorrhage',
      type: 'outcome',
      title: 'Suspected Vitreous Hemorrhage',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'vitreous-hemorrhage',
          whyItFits:
            'Sudden painless vision loss with new floaters, a reddish tinge, or loss of the red reflex increases suspicion for blood in the vitreous cavity.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'Vitreous hemorrhage can obscure an underlying retinal tear or detachment — must not miss a retinal break as the bleeding source, especially with preceding PVD-type symptoms.',
        },
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'In a diabetic patient, new vitreous hemorrhage should raise suspicion for bleeding proliferative retinal neovascularization even if the fundus was previously stable.',
        },
      ],
      recommendedNextSteps: [
        'Attempt a dilated fundus exam',
        'If the view is obscured, B-scan ultrasound to exclude an underlying retinal detachment, tear, or mass',
        'Identify the underlying cause (proliferative diabetic retinopathy, retinal tear/PVD, trauma, anticoagulation)',
        'Same-day retina referral',
        'Avoid stopping anticoagulant/antiplatelet therapy without coordinating with the prescribing physician',
      ],
      relatedDiseaseIds: ['vitreous-hemorrhage', 'retinal-detachment', 'diabetic-retinopathy'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup', 'flashes-and-floaters-workup'],
    },
    'outcome-retinal-detachment': {
      id: 'outcome-retinal-detachment',
      type: 'outcome',
      title: 'Suspected Rhegmatogenous Retinal Detachment',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'A progressive curtain or shadow spreading across the visual field, especially preceded by new flashes and a shower of floaters, increases suspicion for rhegmatogenous retinal detachment.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'Whether the macula is still attached ("macula-on") changes the true time-criticality — a macula-on detachment needs surgery as soon as possible to save central vision, while macula-off remains urgent but is somewhat less minute-to-minute critical; either way this must not be delayed as a routine referral.',
        },
      ],
      recommendedNextSteps: [
        'Immediate dilated fundus exam with scleral depression to map the extent of detachment and locate all breaks',
        'Document macular status (on vs. off) — the single most important triage factor for surgical timing',
        'B-scan ultrasound if hemorrhage or media opacity obscures the view',
        'Same-day retina/vitreoretinal surgery referral regardless of macular status',
      ],
      managementNotes:
        'Macula-on detachments are treated as true same-day surgical emergencies because central vision can still be saved; macula-off detachments remain urgent but visual prognosis depends more on how long the macula was detached, so the referral should still not be delayed.',
      relatedDiseaseIds: ['retinal-detachment'],
      relatedExamTechniqueIds: ['scleral-depression', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach', 'b-scan-ultrasonography'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup', 'flashes-and-floaters-workup'],
      relatedEmergencyProtocolIds: ['macula-threatening-retinal-detachment-protocol'],
    },
    'outcome-crvo': {
      id: 'outcome-crvo',
      type: 'outcome',
      title: 'Suspected Central Retinal Vein Occlusion',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'retinal-vein-occlusion',
          whyItFits:
            'Painless, sudden-to-subacute blurred vision, often noted on waking, with vascular risk factors such as hypertension, diabetes, or glaucoma, increases suspicion for CRVO.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'neovascular-glaucoma',
          whyItFits:
            'Ischemic CRVO carries a significant risk of neovascular glaucoma developing within months and must be monitored closely with prompt follow-up, even though it is not present at the initial visit.',
        },
      ],
      recommendedNextSteps: [
        'Dilated fundus exam for diffuse retinal hemorrhages, dilated/tortuous veins, and cotton-wool spots in all quadrants',
        'Check IOP and gonioscopy for early neovascularization of the angle',
        'Distinguish ischemic vs. non-ischemic (degree of hemorrhage, RAPD, capillary non-perfusion on fluorescein angiography)',
        'Manage systemic vascular risk factors (blood pressure, glucose, lipids)',
        'Anti-VEGF therapy for macular edema; scheduled follow-up for neovascular glaucoma monitoring',
      ],
      relatedDiseaseIds: ['retinal-vein-occlusion', 'neovascular-glaucoma'],
      relatedDrugIds: ['bevacizumab', 'aflibercept', 'ranibizumab'],
      relatedExamTechniqueIds: ['dilated-fundus-examination-systematic-approach', 'fluorescein-angiography', 'gonioscopy', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['sudden-painless-vision-loss-workup'],
    },
    'outcome-optic-neuritis': {
      id: 'outcome-optic-neuritis',
      type: 'outcome',
      title: 'Suspected Optic Neuritis',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'optic-neuritis',
          whyItFits:
            'Subacute vision loss with pain on eye movement in a young adult, especially a woman age 20-40, increases suspicion for optic neuritis.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'multiple-sclerosis-ocular',
          whyItFits:
            'Optic neuritis is the presenting sign of multiple sclerosis in a substantial proportion of patients and should prompt MRI of the brain and orbits with contrast to assess demyelinating lesion burden and risk.',
        },
      ],
      recommendedNextSteps: [
        'Check pupils for a relative afferent pupillary defect',
        'Formal visual field and color vision (Ishihara) testing',
        'MRI brain and orbits with contrast to assess for demyelinating lesions and support the diagnosis',
        'Consider IV high-dose corticosteroids per the Optic Neuritis Treatment Trial protocol to speed recovery (does not change the final visual outcome)',
        'Neurology referral if MRI shows demyelination, or reconsider atypical causes (bilateral, no light perception, no pain, poor recovery) if the presentation is not typical',
      ],
      relatedDiseaseIds: ['optic-neuritis', 'multiple-sclerosis-ocular'],
      relatedDrugIds: ['methylprednisolone'],
      relatedExamTechniqueIds: ['pupillary-examination', 'ishihara-color-vision-screening', 'humphrey-visual-field', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['sudden-painful-vision-loss-workup'],
    },
    'outcome-angle-closure': {
      id: 'outcome-angle-closure',
      type: 'outcome',
      title: 'Suspected Acute Angle-Closure with Vision Loss',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits:
            'Headache/brow pain, nausea/vomiting, halos, and a red eye with a hazy cornea accompanying sudden vision loss increases suspicion for acute angle-closure.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits:
            'Delay in treatment risks irreversible optic nerve and retinal damage within hours — this is a true emergency, not a routine same-day visit.',
        },
      ],
      recommendedNextSteps: [
        'Check IOP immediately',
        'Gonioscopy on both eyes once the acute episode allows',
        'Begin the acute angle-closure emergency protocol without delay',
        'Do not dilate either eye during the acute episode',
      ],
      relatedDiseaseIds: ['primary-angle-closure-glaucoma'],
      relatedDrugIds: ['timolol', 'pilocarpine', 'acetazolamide'],
      relatedExamTechniqueIds: ['gonioscopy', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['sudden-painful-vision-loss-workup', 'headache-ocular-relevance-workup'],
      relatedEmergencyProtocolIds: ['acute-angle-closure-crisis-protocol'],
    },
  },
  references: [
    'AAO EyeWiki: Giant Cell Arteritis',
    'AAO EyeWiki: Retinal Artery Occlusion',
    'AAO EyeWiki: Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)',
    'AAO Preferred Practice Pattern: Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration, 2019',
    'The Optic Neuritis Treatment Trial (ONTT), Archives of Ophthalmology',
  ],
}

const flashesAndFloaters: DecisionTree = {
  id: 'flashes-and-floaters',
  name: 'Flashes and Floaters',
  aliases: ['Photopsia', 'New Floaters', 'Vitreous Floaters'],
  categories: ['presenting-complaint'],
  summary:
    'Triage new flashes and/or floaters through an emergency screen for retinal tear/detachment, then onset, symptom type, and dilated peripheral exam findings toward PVD, retinal tear, retinal detachment, or vitreous hemorrhage.',
  startNodeId: 'screen',
  nodes: {
    screen: {
      id: 'screen',
      type: 'question',
      question:
        'Has the patient noticed any of the following, all of new onset: a dense shower of many new floaters (like a swarm of gnats, cobwebs, or soot), new flashes of light, or a curtain, veil, or dark shadow over part of the vision?',
      rationale:
        'A curtain/shadow in particular is the classic red-flag pattern for a retinal tear or detachment, which is time-critical to detect and treat before it involves the macula.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-curtain',
          label: 'Yes, and there is a curtain, veil, or dark shadow over part of the vision',
          description: 'Treat as a suspected retinal detachment until proven otherwise.',
          nextNodeId: 'outcome-retinal-detachment',
          isRedFlag: true,
        },
        {
          id: 'screen-shower',
          label: 'Yes, a dense/sudden shower of many new floaters and/or flashes, but no curtain or shadow',
          description: 'Treat as a suspected retinal tear until proven otherwise.',
          nextNodeId: 'outcome-retinal-tear',
          isRedFlag: true,
        },
        {
          id: 'screen-no',
          label: 'No — symptoms are mild, longstanding, or not acute',
          nextNodeId: 'onset',
        },
      ],
    },
    onset: {
      id: 'onset',
      type: 'question',
      question:
        'Did the floaters and/or flashes begin acutely, within the last few days to weeks, or have they been present and stable for a longer period (months or more)?',
      options: [
        { id: 'onset-acute', label: 'Acute — within the last few days to weeks', nextNodeId: 'symptom-type' },
        { id: 'onset-longstanding', label: 'Longstanding and stable', nextNodeId: 'outcome-stable-floaters' },
      ],
    },
    'symptom-type': {
      id: 'symptom-type',
      type: 'question',
      question: 'Are the new symptoms floaters, flashes, or both?',
      options: [
        { id: 'type-floaters', label: 'Floaters only', nextNodeId: 'floaters-quality' },
        { id: 'type-flashes', label: 'Flashes only', nextNodeId: 'flashes-quality' },
        { id: 'type-both', label: 'Both flashes and floaters', nextNodeId: 'both-detail' },
      ],
    },
    'floaters-quality': {
      id: 'floaters-quality',
      type: 'question',
      question:
        'Are the floaters a red haze, reddish-tinged, or accompanied by a sudden reduction in vision (suggesting blood), or are they gray/dark spots, cobwebs, or a ring/cloud without any vision change?',
      options: [
        { id: 'floaters-red', label: 'Red haze, reddish tinge, or reduced vision', nextNodeId: 'outcome-vitreous-hemorrhage' },
        { id: 'floaters-gray', label: 'Gray/dark spots or cobwebs, no vision change', nextNodeId: 'exam-finding' },
      ],
    },
    'flashes-quality': {
      id: 'flashes-quality',
      type: 'question',
      question:
        'Are the flashes brief, arc-shaped or lightning-streak-like, confined to one eye and typically the peripheral/temporal field, or are they a shimmering, expanding zigzag pattern affecting a wider area, often followed by a headache?',
      rationale:
        'Vitreomacular traction flashes are classically unilateral, peripheral, brief arcs; a spreading zigzag/shimmering pattern followed by headache instead suggests migraine with visual aura. Even a migrainous pattern still warrants a baseline dilated exam, since history alone cannot fully exclude a retinal cause.',
      options: [
        { id: 'flashes-traction', label: 'Brief, peripheral, one-eye arcs/streaks', nextNodeId: 'exam-finding' },
        { id: 'flashes-migraine', label: 'Spreading zigzag/shimmer, often followed by headache', nextNodeId: 'exam-finding' },
      ],
    },
    'both-detail': {
      id: 'both-detail',
      type: 'question',
      question:
        'Since a curtain or shadow is the single most dangerous sign, double check: has any shadow or dark area appeared anywhere in the vision, even subtle or only noticed when covering the other eye?',
      rationale: 'Patients sometimes under-report a subtle peripheral field defect unless asked about it directly.',
      options: [
        { id: 'both-shadow-yes', label: 'Yes, a subtle shadow or dark area is present', nextNodeId: 'outcome-retinal-detachment' },
        { id: 'both-shadow-no', label: 'No shadow or dark area', nextNodeId: 'exam-finding' },
      ],
    },
    'exam-finding': {
      id: 'exam-finding',
      type: 'question',
      question: 'On a dilated fundus exam with scleral depression to the peripheral retina, what is found?',
      rationale:
        'Scleral depression brings the peripheral retina into view and is essential — roughly 15% of retinal tears are visible only with indentation and are missed on slit-lamp exam alone.',
      options: [
        { id: 'exam-tear', label: 'A retinal tear or horseshoe break, with the retina still attached', nextNodeId: 'outcome-retinal-tear' },
        { id: 'exam-detachment', label: 'A retinal detachment (retina lifted by subretinal fluid)', nextNodeId: 'outcome-retinal-detachment' },
        { id: 'exam-normal', label: 'No break or detachment — a PVD is visible and the periphery is otherwise normal', nextNodeId: 'outcome-pvd' },
      ],
    },

    'outcome-pvd': {
      id: 'outcome-pvd',
      type: 'outcome',
      title: 'Uncomplicated Posterior Vitreous Detachment (PVD)',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'posterior-vitreous-detachment',
          whyItFits:
            'New floaters and/or flashes with a normal peripheral retina and no break on a dilated, scleral-depressed exam increases suspicion for an uncomplicated PVD.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'Roughly 1 in 10 patients with an acute symptomatic PVD will have or go on to develop a retinal tear, most often within the first 4-6 weeks — a normal exam today does not close the book, so a delayed break must not be missed.',
        },
      ],
      recommendedNextSteps: [
        'Educate the patient on symptoms warranting immediate return (new/increased flashes, a shower of floaters, or any curtain/shadow)',
        'Routine dilated re-examination with scleral depression at 2-4 weeks if no break was found initially, then again around 3 months if still asymptomatic',
        'Document baseline symptoms and exam findings',
      ],
      managementNotes:
        'The risk of a retinal tear from a new PVD is highest in the first 4-6 weeks after symptom onset, which is why a single normal exam is not sufficient reassurance — scheduled follow-up matters as much as the initial exam.',
      relatedDiseaseIds: ['posterior-vitreous-detachment', 'retinal-detachment'],
      relatedExamTechniqueIds: ['scleral-depression', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['flashes-and-floaters-workup'],
    },
    'outcome-retinal-tear': {
      id: 'outcome-retinal-tear',
      type: 'outcome',
      title: 'Suspected Retinal Tear (Break) Without Detachment',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'A retinal tear or horseshoe break found on a dilated, scleral-depressed exam — or a dense new shower of floaters and flashes even before a break is confirmed — increases suspicion for an evolving rhegmatogenous process; interpret alongside the exam findings, since a tear without subretinal fluid can still be treated before it progresses to a full detachment.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'An untreated retinal tear can progress to a vision-threatening detachment within days to weeks — prompt treatment (laser demarcation or cryopexy) of the break itself is what prevents that progression, so this must not be treated as a routine finding.',
        },
      ],
      recommendedNextSteps: [
        'Same-day dilated exam with scleral depression to fully characterize the break (number, size, location, any vascular bridge or lattice association)',
        'Urgent same-day retina referral for prophylactic laser demarcation or cryopexy before progression to detachment',
        'Fellow eye exam, since lattice degeneration and tears can be bilateral',
        'Explicit return precautions for any curtain, shadow, or increase in floaters afterward',
      ],
      relatedDiseaseIds: ['retinal-detachment'],
      relatedExamTechniqueIds: ['scleral-depression', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['flashes-and-floaters-workup'],
    },
    'outcome-retinal-detachment': {
      id: 'outcome-retinal-detachment',
      type: 'outcome',
      title: 'Suspected Rhegmatogenous Retinal Detachment',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'A curtain, veil, or dark shadow over part of the vision — especially preceded by new flashes and a shower of floaters — increases suspicion for a rhegmatogenous retinal detachment; confirm with a dilated peripheral exam.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'Whether the macula is still attached ("macula-on") changes the true time-criticality — a macula-on detachment threatening central vision needs surgery as soon as possible, while macula-off remains urgent but somewhat less minute-to-minute critical; either way this must not be delayed as a routine referral.',
        },
      ],
      recommendedNextSteps: [
        'Immediate dilated fundus exam with scleral depression to map the extent of detachment and locate all breaks',
        'Document macular status (on vs. off) — the single most important triage factor for surgical timing',
        'B-scan ultrasound if hemorrhage or media opacity obscures the view',
        'Same-day retina/vitreoretinal surgery referral regardless of macular status',
        'Restrict strenuous activity pending surgical repair per surgeon guidance',
      ],
      managementNotes:
        'Macula-on detachments are treated as true same-day surgical emergencies because central vision can still be saved; macula-off detachments remain urgent but the visual prognosis is more dependent on how long the macula was detached, so the referral should not be delayed either way.',
      relatedDiseaseIds: ['retinal-detachment'],
      relatedExamTechniqueIds: ['scleral-depression', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach', 'b-scan-ultrasonography'],
      relatedWorkupIds: ['flashes-and-floaters-workup'],
      relatedEmergencyProtocolIds: ['macula-threatening-retinal-detachment-protocol'],
    },
    'outcome-vitreous-hemorrhage': {
      id: 'outcome-vitreous-hemorrhage',
      type: 'outcome',
      title: 'Suspected Vitreous Hemorrhage',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'vitreous-hemorrhage',
          whyItFits: 'New floaters with a red haze, reddish tinge, or a sudden reduction in vision increases suspicion for blood in the vitreous cavity.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'Vitreous hemorrhage can obscure an underlying retinal tear or detachment as its source — must not miss a break hiding behind the blood, especially if the view cannot be cleared with positioning.',
        },
        {
          diseaseId: 'diabetic-retinopathy',
          whyItFits:
            'In a diabetic patient, new vitreous hemorrhage should raise suspicion for bleeding proliferative retinal neovascularization even if the fundus was previously stable.',
        },
      ],
      recommendedNextSteps: [
        'Attempt a dilated fundus exam; if the view is limited, have the patient sit upright to allow blood to settle inferiorly and improve the superior view',
        'B-scan ultrasound if the fundus cannot be adequately visualized, specifically to exclude an underlying tear, detachment, or mass',
        'Identify the underlying source (proliferative diabetic retinopathy, retinal tear/PVD, trauma, anticoagulation)',
        'Same-day retina referral',
        'Avoid stopping anticoagulant/antiplatelet therapy without coordinating with the prescribing physician',
      ],
      relatedDiseaseIds: ['vitreous-hemorrhage', 'retinal-detachment', 'diabetic-retinopathy'],
      relatedExamTechniqueIds: ['b-scan-ultrasonography', 'binocular-indirect-ophthalmoscopy', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['flashes-and-floaters-workup'],
    },
    'outcome-stable-floaters': {
      id: 'outcome-stable-floaters',
      type: 'outcome',
      title: 'Longstanding, Stable Floaters — Chronic Vitreous Change',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'posterior-vitreous-detachment',
          whyItFits:
            'Floaters that have been present and unchanged over months, without new flashes or a curtain, are commonly explained by an already-complete, chronic PVD or age-related vitreous change.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'retinal-detachment',
          whyItFits:
            'A patient with floaters who has never had a documented dilated peripheral exam should still have one at least once, since an old, asymptomatic retinal break or lattice degeneration can silently raise future detachment risk even without new symptoms.',
        },
      ],
      recommendedNextSteps: [
        'Confirm at least one prior documented dilated exam with scleral depression; perform one now if never done',
        'Reassurance that stable, longstanding floaters without new flashes or a curtain are usually benign',
        'Clear return precautions: any new shower of floaters, new flashes, or a curtain/shadow warrants same-day re-evaluation',
      ],
      relatedDiseaseIds: ['posterior-vitreous-detachment', 'retinal-detachment'],
      relatedExamTechniqueIds: ['scleral-depression', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['flashes-and-floaters-workup'],
    },
  },
  references: [
    'AAO Preferred Practice Pattern: Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration, 2019',
    'AAO EyeWiki: Posterior Vitreous Detachment',
    'AAO EyeWiki: Retinal Detachment',
    'Posterior vitreous detachment and retinal tear — a prospective study of community referrals, PMC',
  ],
}

const diplopiaTree: DecisionTree = {
  id: 'diplopia',
  name: 'Diplopia',
  aliases: ['Double Vision'],
  categories: ['presenting-complaint'],
  summary:
    'Triage double vision through the monocular-vs-binocular fork, then comitant vs. incomitant and cranial nerve pattern, toward refractive/lenticular causes, decompensated phoria, CN3/CN4/CN6 palsy, thyroid eye disease, or ocular myasthenia gravis.',
  startNodeId: 'monocular-binocular',
  nodes: {
    'monocular-binocular': {
      id: 'monocular-binocular',
      type: 'question',
      question:
        'Does the double vision resolve when either eye is covered individually (binocular diplopia), or does it persist in one eye even with the other eye closed (monocular diplopia)?',
      rationale:
        'This is the single most important branch point — monocular diplopia is almost always ocular (refractive, corneal, or lenticular) rather than neurological, and needs a completely different workup than binocular diplopia.',
      options: [
        { id: 'mb-binocular', label: 'Resolves when either eye is covered — binocular', nextNodeId: 'comitant-incomitant' },
        { id: 'mb-monocular', label: 'Persists in one eye alone — monocular', nextNodeId: 'monocular-detail' },
      ],
    },
    'monocular-detail': {
      id: 'monocular-detail',
      type: 'question',
      question: 'Does the double vision improve or resolve when viewed through a pinhole, and does it fluctuate with blinking?',
      options: [
        {
          id: 'monocular-pinhole-improves',
          label: 'Improves with pinhole, fairly constant regardless of blinking',
          nextNodeId: 'monocular-refractive-lens',
        },
        {
          id: 'monocular-blink-fluctuates',
          label: 'Fluctuates with blinking, or improves with lubrication/artificial tears',
          nextNodeId: 'outcome-monocular-tear-film',
        },
      ],
    },
    'monocular-refractive-lens': {
      id: 'monocular-refractive-lens',
      type: 'question',
      question: 'Is there a known or newly-progressive cataract, or is this better explained by uncorrected/high or irregular astigmatism on refraction?',
      options: [
        { id: 'monocular-cataract', label: 'Known or progressive cataract', nextNodeId: 'outcome-monocular-cataract' },
        { id: 'monocular-astigmatism', label: 'Uncorrected/high astigmatism on refraction', nextNodeId: 'outcome-monocular-refractive' },
      ],
    },
    'comitant-incomitant': {
      id: 'comitant-incomitant',
      type: 'question',
      question: 'Is the degree of misalignment the same in all directions of gaze (comitant), or does it vary — worse in certain gazes than others (incomitant)?',
      rationale:
        'Comitant deviations are usually longstanding strabismus or a decompensated phoria, while incomitant deviations point to a specific extraocular muscle or cranial nerve problem and need a much more urgent, targeted workup.',
      options: [
        { id: 'ci-comitant', label: 'Comitant — same in all gaze directions', nextNodeId: 'outcome-comitant-strabismus' },
        { id: 'ci-incomitant', label: 'Incomitant — varies with gaze direction', nextNodeId: 'incomitant-pattern' },
      ],
    },
    'incomitant-pattern': {
      id: 'incomitant-pattern',
      type: 'question',
      question: 'Which best describes the pattern of misalignment and any associated findings?',
      options: [
        {
          id: 'pattern-cn3',
          label: 'Ptosis with the eye deviated down-and-out, limited adduction/elevation/depression',
          nextNodeId: 'cn3-pupil-check',
        },
        {
          id: 'pattern-cn4',
          label: 'Vertical/torsional diplopia, worse in downgaze/reading and on head tilt to one side',
          nextNodeId: 'outcome-cn4-palsy',
        },
        {
          id: 'pattern-cn6',
          label: 'Purely horizontal diplopia, worse at distance, with limited abduction',
          nextNodeId: 'outcome-cn6-palsy',
        },
        {
          id: 'pattern-restrictive',
          label: 'Worse at extremes of gaze, with proptosis, lid retraction/lag, or a thyroid history — feels mechanically restricted',
          nextNodeId: 'outcome-restrictive-ted',
        },
        {
          id: 'pattern-myasthenic',
          label: 'Diplopia and ptosis fluctuate through the day, worsen with fatigue, improve with rest — no pupil involvement',
          nextNodeId: 'outcome-myasthenia',
        },
      ],
    },
    'cn3-pupil-check': {
      id: 'cn3-pupil-check',
      type: 'question',
      question: 'Is the pupil on the affected side involved — dilated and poorly reactive — or is it spared (normal size and reactivity)?',
      rationale:
        'This is the single most important branch in an isolated third nerve palsy. Pupil involvement suggests a compressive lesion (classically a posterior communicating artery aneurysm) because the peripherally-located parasympathetic pupillary fibers are more vulnerable to external compression, whereas ischemic microvascular CN3 palsies typically spare the pupil because those fibers have a separate blood supply and are relatively resistant to ischemia. This "rule of the pupil" is a strong heuristic but not absolute — ischemic palsies involve the pupil in up to roughly 20% of cases, and early compressive lesions can still spare it — so any pupil involvement, incomplete palsy, or palsy in a younger/lower-vascular-risk patient should still be treated as a possible aneurysm until imaged.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'cn3-pupil-involved',
          label: 'Pupil involved — dilated, poorly reactive',
          description: 'Treat as a suspected compressive aneurysm until proven otherwise.',
          nextNodeId: 'outcome-cn3-pupil-involving',
          isRedFlag: true,
        },
        {
          id: 'cn3-pupil-spared',
          label: 'Pupil spared — normal size and reactivity',
          nextNodeId: 'outcome-cn3-pupil-sparing',
        },
      ],
    },

    'outcome-monocular-cataract': {
      id: 'outcome-monocular-cataract',
      type: 'outcome',
      title: 'Monocular Diplopia — Suspected Cataract',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'cataract',
          whyItFits:
            'Monocular double vision that improves with a pinhole, in the setting of a known or progressing lens opacity, increases suspicion that areas of differing refractive index within the lens are splitting the retinal image.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'keratoconus',
          whyItFits:
            'Irregular astigmatism from a corneal ectasia such as keratoconus can mimic a lenticular cause of monocular diplopia and should be excluded with topography, especially in a younger patient.',
        },
      ],
      recommendedNextSteps: [
        'Slit lamp exam of the lens for opacity location and type',
        'Corneal topography to exclude irregular astigmatism as a contributor',
        'Manifest refraction to quantify best-corrected acuity',
        'Discuss cataract extraction if visually significant',
      ],
      relatedDiseaseIds: ['cataract', 'keratoconus'],
      relatedExamTechniqueIds: ['slit-lamp-illumination-techniques', 'corneal-topography', 'pinhole-visual-acuity-testing', 'subjective-refraction'],
      relatedWorkupIds: ['diplopia-workup'],
    },
    'outcome-monocular-refractive': {
      id: 'outcome-monocular-refractive',
      type: 'outcome',
      title: 'Monocular Diplopia — Refractive/Corneal Cause',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'astigmatism',
          whyItFits:
            'Monocular double vision that clears with a pinhole and is explained by significant uncorrected or irregular astigmatism increases suspicion for a purely refractive cause.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'keratoconus',
          whyItFits:
            'Progressive, irregular astigmatism should raise suspicion for early keratoconus, confirmed with corneal topography, rather than being dismissed as simple refractive error.',
        },
      ],
      recommendedNextSteps: [
        'Manifest and cycloplegic refraction',
        'Corneal topography, especially if astigmatism is high, oblique, or asymmetric between eyes',
        'Trial of updated spectacle or contact lens correction',
        'Refer for confirmed ectasia if keratoconus is suspected',
      ],
      relatedDiseaseIds: ['astigmatism', 'keratoconus'],
      relatedExamTechniqueIds: ['subjective-refraction', 'corneal-topography', 'pinhole-visual-acuity-testing', 'jackson-cross-cylinder-refinement'],
      relatedWorkupIds: ['diplopia-workup'],
    },
    'outcome-monocular-tear-film': {
      id: 'outcome-monocular-tear-film',
      type: 'outcome',
      title: 'Monocular Diplopia — Tear-Film/Ocular Surface Cause',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'dry-eye-disease',
          whyItFits:
            'Monocular double vision that fluctuates with blinking or improves with lubrication increases suspicion that an irregular tear film — rather than a fixed refractive or lenticular problem — is disrupting the optical surface.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'ebmd',
          whyItFits:
            'Anterior basement membrane changes can create a similarly fluctuating, blink-dependent irregular astigmatism and should be looked for on slit lamp exam rather than assumed to be simple dry eye.',
        },
      ],
      recommendedNextSteps: [
        'Assess tear break-up time and ocular surface staining',
        'Slit lamp exam of the corneal epithelium for map-dot-fingerprint changes',
        'Trial of aggressive lubrication and re-test vision after treatment',
        'Consider topography if surface irregularity is visible',
      ],
      relatedDiseaseIds: ['dry-eye-disease', 'ebmd'],
      relatedExamTechniqueIds: ['tear-break-up-time', 'slit-lamp-illumination-techniques', 'corneal-topography'],
      relatedWorkupIds: ['diplopia-workup', 'dry-eye-workup'],
    },
    'outcome-comitant-strabismus': {
      id: 'outcome-comitant-strabismus',
      type: 'outcome',
      title: 'Comitant Binocular Diplopia — Decompensated Phoria/Strabismus',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'convergence-insufficiency',
          whyItFits:
            'Comitant diplopia, especially at near, with a normal neurological exam increases suspicion for a decompensating phoria such as convergence insufficiency rather than a new neurological process.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'ocular-myasthenia-gravis',
          whyItFits:
            'Myasthenia can occasionally present with comitant-appearing misalignment early on, and its fatigable, variable nature can be missed if variability is not specifically asked about — reconsider it if the deviation is inconsistent visit-to-visit.',
        },
      ],
      recommendedNextSteps: [
        'Cover test and prism cover test in multiple positions of gaze and at distance/near to confirm true comitance',
        'Near point of convergence and vergence ranges',
        'Assess for fatigability/variability over the exam to exclude early myasthenia',
        'Trial prism or vision therapy per findings',
      ],
      relatedDiseaseIds: ['convergence-insufficiency', 'ocular-myasthenia-gravis'],
      relatedExamTechniqueIds: ['cover-test', 'prism-cover-test', 'near-point-of-convergence', 'vergence-ranges-smooth-step'],
      relatedWorkupIds: ['diplopia-workup', 'decompensated-phoria-workup'],
    },
    'outcome-cn3-pupil-involving': {
      id: 'outcome-cn3-pupil-involving',
      type: 'outcome',
      title: 'Pupil-Involving Third Nerve (CN3) Palsy — Suspected Compressive Aneurysm',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'cn3-palsy',
          whyItFits:
            'Ptosis with a down-and-out eye and a dilated, poorly-reactive pupil increases suspicion for a compressive third nerve palsy, classically from a posterior communicating artery aneurysm.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'cn3-palsy',
          whyItFits:
            'A ruptured or expanding posterior communicating artery aneurysm is a neurosurgical emergency — any pupil involvement in an acute, isolated CN3 palsy must be treated as a probable aneurysm until emergent neuroimaging with a vascular study proves otherwise, even though the pupil-sparing rule is not perfectly reliable in either direction.',
        },
      ],
      recommendedNextSteps: [
        'Emergent neuroimaging with a vascular study (CT or MR angiography) to exclude a compressive aneurysm',
        'Emergent neurosurgical/neurology consultation',
        'Do not delay imaging for outpatient follow-up',
        'Assess for other cranial neuropathies or signs of elevated intracranial pressure',
      ],
      relatedDiseaseIds: ['cn3-palsy'],
      relatedExamTechniqueIds: ['pupillary-examination', 'extraocular-motility-testing', 'marginal-reflex-distance'],
      relatedWorkupIds: ['diplopia-workup', 'isolated-cranial-nerve-palsy-workup', 'anisocoria-workup'],
      relatedEmergencyProtocolIds: ['third-nerve-palsy-pupil-involving-protocol'],
    },
    'outcome-cn3-pupil-sparing': {
      id: 'outcome-cn3-pupil-sparing',
      type: 'outcome',
      title: 'Pupil-Sparing Third Nerve (CN3) Palsy — Likely Microvascular',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        {
          diseaseId: 'cn3-palsy',
          whyItFits:
            'Ptosis with a down-and-out eye and a normal, reactive pupil in a patient with vasculopathic risk factors (diabetes, hypertension, older age) increases suspicion for an ischemic, microvascular third nerve palsy.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'cn3-palsy',
          whyItFits:
            'The pupil-sparing rule is a strong heuristic but not absolute — ischemic palsies involve the pupil in up to roughly 20% of cases, and a compressive lesion can still spare the pupil early on, especially if the palsy is incomplete — so a complete, pupil-sparing palsy should still prompt close short-interval follow-up, and imaging if it fails to improve or the pupil becomes involved.',
        },
      ],
      recommendedNextSteps: [
        'Urgent (24-48h) evaluation with careful pupil measurement and repeat exam to confirm the palsy is truly complete and pupil truly spared',
        'Screen for vasculopathic risk factors (blood pressure, glucose/HbA1c)',
        'Consider MRI, especially if the palsy is incomplete, the patient is under about 50, or there are atypical features',
        'Expect improvement over about 3 months if genuinely ischemic — re-image if not improving',
      ],
      relatedDiseaseIds: ['cn3-palsy'],
      relatedExamTechniqueIds: ['pupillary-examination', 'extraocular-motility-testing'],
      relatedWorkupIds: ['diplopia-workup', 'isolated-cranial-nerve-palsy-workup'],
    },
    'outcome-cn4-palsy': {
      id: 'outcome-cn4-palsy',
      type: 'outcome',
      title: 'Fourth Nerve (CN4/Trochlear) Palsy',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        {
          diseaseId: 'cn4-palsy',
          whyItFits:
            'Vertical or torsional diplopia that worsens in downgaze and gaze away from the affected eye, with a head tilt toward the unaffected shoulder, increases suspicion for a trochlear nerve palsy — confirm with the Parks-Bielschowsky three-step test.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'cn4-palsy',
          whyItFits:
            'A congenital, longstanding CN4 palsy — suggested by old photographs showing a habitual head tilt and large vertical fusional amplitudes — should be distinguished from a new, acquired palsy, since an acute one still warrants a vasculopathic workup and, if bilateral or trauma-related, closer neurological attention.',
        },
      ],
      recommendedNextSteps: [
        'Parks-Bielschowsky three-step and head-tilt test to localize the palsy',
        'Review old photographs for a longstanding head tilt suggesting a congenital/decompensated palsy',
        'Vasculopathic risk factor screen if acquired',
        'Consider MRI if there are other neurological signs, the palsy is bilateral, or there is a history of head trauma',
      ],
      relatedDiseaseIds: ['cn4-palsy'],
      relatedExamTechniqueIds: ['parks-bielschowsky-three-step-test', 'extraocular-motility-testing', 'compensatory-head-posture-assessment'],
      relatedWorkupIds: ['diplopia-workup', 'isolated-cranial-nerve-palsy-workup'],
    },
    'outcome-cn6-palsy': {
      id: 'outcome-cn6-palsy',
      type: 'outcome',
      title: 'Sixth Nerve (CN6/Abducens) Palsy',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        {
          diseaseId: 'cn6-palsy',
          whyItFits: 'Purely horizontal diplopia, worse at distance, with limited abduction of the affected eye, increases suspicion for an abducens nerve palsy.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'idiopathic-intracranial-hypertension',
          whyItFits:
            "The abducens nerve's long intracranial course makes it a false localizing sign for raised intracranial pressure — a CN6 palsy, especially if bilateral or in a younger patient without vasculopathic risk factors, should raise suspicion for elevated ICP rather than being assumed microvascular.",
        },
      ],
      recommendedNextSteps: [
        'Assess for papilledema and other signs of raised intracranial pressure',
        'Screen vasculopathic risk factors if the presentation fits an isolated microvascular pattern in an older patient',
        'Neuroimaging if the patient is younger, the palsy is bilateral, there are other neurological signs, or there is no improvement over 3 months',
      ],
      relatedDiseaseIds: ['cn6-palsy', 'idiopathic-intracranial-hypertension'],
      relatedExamTechniqueIds: ['extraocular-motility-testing', 'oct-optic-nerve-rnfl'],
      relatedWorkupIds: ['diplopia-workup', 'isolated-cranial-nerve-palsy-workup'],
    },
    'outcome-restrictive-ted': {
      id: 'outcome-restrictive-ted',
      type: 'outcome',
      title: 'Restrictive Strabismus — Suspected Thyroid Eye Disease',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'thyroid-eye-disease',
          whyItFits:
            'Diplopia that feels mechanically restricted rather than weak, worse at the extreme of gaze opposite a tight muscle, with proptosis, lid retraction, or lid lag, increases suspicion for restrictive strabismus from thyroid eye disease — most often involving the inferior and medial rectus muscles.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'idiopathic-orbital-inflammation',
          whyItFits:
            'Orbital inflammatory disease can mimic thyroid eye disease with pain, restriction, and proptosis, but tends to be more acutely painful and may need a different, urgent anti-inflammatory approach — thyroid labs alone should not be the only workup.',
        },
      ],
      recommendedNextSteps: [
        'Forced duction testing to confirm true mechanical restriction',
        'Hertel exophthalmometry to quantify and monitor proptosis',
        'Thyroid function testing (TSH, free T4, TSI/TRAb)',
        'Orbital imaging (CT or MRI) if the diagnosis is unclear or compressive optic neuropathy is a concern',
        'Assess for optic nerve compression (color vision, pupils, visual fields) at every visit',
      ],
      relatedDiseaseIds: ['thyroid-eye-disease', 'idiopathic-orbital-inflammation'],
      relatedDrugIds: ['teprotumumab', 'methimazole'],
      relatedExamTechniqueIds: ['forced-duction-test', 'hertel-exophthalmometry', 'extraocular-motility-testing', 'thyroid-eye-disease-laboratory-testing'],
      relatedWorkupIds: ['diplopia-workup', 'proptosis-workup'],
    },
    'outcome-myasthenia': {
      id: 'outcome-myasthenia',
      type: 'outcome',
      title: 'Suspected Ocular Myasthenia Gravis',
      urgency: 'Prompt',
      mostLikely: [
        {
          diseaseId: 'ocular-myasthenia-gravis',
          whyItFits:
            'Diplopia and ptosis that fluctuate through the day, worsen with fatigue or sustained upgaze, improve with rest, and spare the pupil increases suspicion for ocular myasthenia gravis — its hallmark is fatigability and variability rather than a fixed pattern matching one cranial nerve.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'cn3-palsy',
          whyItFits:
            'Myasthenia can mimic almost any pattern of ocular misalignment, including one resembling a partial cranial nerve palsy — but true myasthenia should never involve the pupil, so any pupil involvement should redirect suspicion back toward a structural third nerve palsy instead.',
        },
      ],
      recommendedNextSteps: [
        'Look for fatigability with sustained upgaze and variability of ptosis/misalignment across the visit',
        'Bedside ice-pack or rest test for ptosis',
        'Acetylcholine receptor and MuSK antibody testing',
        'Consider single-fiber EMG if antibody testing is negative but suspicion remains high',
        'Screen for systemic myasthenia symptoms (bulbar, limb, respiratory) and refer to neurology',
      ],
      relatedDiseaseIds: ['ocular-myasthenia-gravis', 'cn3-palsy'],
      relatedDrugIds: ['pyridostigmine'],
      relatedExamTechniqueIds: ['extraocular-motility-testing', 'pupillary-examination', 'marginal-reflex-distance'],
      relatedWorkupIds: ['diplopia-workup'],
    },
  },
  references: [
    'AAO EyeWiki: Acquired Oculomotor Nerve Palsy',
    'AAO EyeNet: Diagnostic Considerations in an Acquired, Isolated Third Nerve Palsy',
    'AAO EyeWiki: Cranial Nerve 4 Palsy',
    'AAO EyeWiki: Myasthenia Gravis',
    'AAO EyeWiki: Basic Approach to Diplopia',
  ],
}

const headacheWithOcularFeatures: DecisionTree = {
  id: 'headache-with-ocular-features',
  name: 'Headache with Ocular Features',
  aliases: ['Headache and Vision Changes', 'Ocular Headache'],
  categories: ['presenting-complaint'],
  summary:
    'Triage headache accompanied by ocular symptoms through an emergency screen for thunderclap onset, GCA, and elevated intracranial pressure, then associated ocular signs toward migraine with aura, GCA, papilledema/IIH, angle-closure, orbital disease, or accommodative/refractive strain.',
  startNodeId: 'screen',
  nodes: {
    screen: {
      id: 'screen',
      type: 'question',
      question:
        'Does the patient have any of the following: (1) a thunderclap headache reaching maximum intensity within seconds to a couple of minutes ("worst headache of life"), especially with neck pain or a new droopy lid/small pupil on one side; (2) age over 50 with jaw claudication, scalp tenderness, or other GCA red flags; or (3) a new headache accompanied by vision changes, double vision, or proptosis suggesting elevated intracranial pressure?',
      rationale:
        'These three patterns flag the most time-critical secondary causes of headache with ocular relevance — a vascular catastrophe (including carotid/vertebral dissection), giant cell arteritis, and elevated intracranial pressure. Screening for them first prevents a dangerous delay before working through the rest of the differential.',
      isEmergencyScreen: true,
      options: [
        {
          id: 'screen-thunderclap',
          label: 'Yes — thunderclap onset, especially with neck pain or a new droopy lid/small pupil',
          description: 'Treat as a possible vascular emergency (including carotid/vertebral dissection) until proven otherwise.',
          nextNodeId: 'outcome-carotid-dissection',
          isRedFlag: true,
        },
        {
          id: 'screen-gca',
          label: 'Yes — GCA red flags (age >50 with jaw claudication, scalp tenderness, or systemic symptoms)',
          description: 'Treat as suspected giant cell arteritis until proven otherwise.',
          nextNodeId: 'outcome-gca-headache',
          isRedFlag: true,
        },
        {
          id: 'screen-icp',
          label: 'Yes — new headache with vision changes, double vision, or proptosis suggesting elevated ICP',
          nextNodeId: 'icp-fundus-check',
          isRedFlag: true,
        },
        {
          id: 'screen-no',
          label: 'No — none of these patterns are present',
          nextNodeId: 'ocular-signs-question',
        },
      ],
    },
    'ocular-signs-question': {
      id: 'ocular-signs-question',
      type: 'question',
      question:
        'Are there associated ocular signs or symptoms accompanying the headache — such as visual aura, eye pain/redness, proptosis or lid changes, or blurred near vision?',
      options: [
        { id: 'osq-yes', label: 'Yes', nextNodeId: 'ocular-signs-type' },
        { id: 'osq-no', label: 'No — headache alone, with a normal eye exam', nextNodeId: 'outcome-primary-headache-no-ocular-cause' },
      ],
    },
    'ocular-signs-type': {
      id: 'ocular-signs-type',
      type: 'question',
      question: 'Which best describes the associated ocular signs or symptoms?',
      options: [
        {
          id: 'ost-aura',
          label: 'A shimmering/zigzag visual disturbance preceding or accompanying the headache',
          nextNodeId: 'migraine-detail',
        },
        {
          id: 'ost-red-eye',
          label: 'A red, painful eye with halos around lights and/or nausea/vomiting',
          nextNodeId: 'outcome-angle-closure-headache',
        },
        {
          id: 'ost-proptosis',
          label: 'Proptosis, lid retraction/lag, or restricted eye movement',
          nextNodeId: 'outcome-orbital-cause',
        },
        {
          id: 'ost-nearwork',
          label: 'Eye strain/ache with prolonged near work, worse by end of day, blurred near vision',
          nextNodeId: 'outcome-accommodative-refractive',
        },
        {
          id: 'ost-positional',
          label: 'Headache worse lying down or with straining, with brief seconds-long grey-outs of vision, possibly pulsatile tinnitus',
          nextNodeId: 'icp-fundus-check',
        },
      ],
    },
    'migraine-detail': {
      id: 'migraine-detail',
      type: 'question',
      question:
        'Is this a recurrent, stereotyped pattern — a gradually spreading, shimmering zigzag or scintillating visual disturbance lasting roughly 5 to 60 minutes, followed by or accompanied by headache — similar to prior episodes, with a normal eye exam between attacks?',
      options: [
        { id: 'migraine-typical', label: 'Yes, typical and stereotyped', nextNodeId: 'outcome-migraine-aura' },
        { id: 'migraine-atypical', label: 'No — first episode, longer than 60 minutes, or an abnormal exam', nextNodeId: 'icp-fundus-check' },
      ],
    },
    'icp-fundus-check': {
      id: 'icp-fundus-check',
      type: 'question',
      question: 'On dilated fundus exam, is optic disc edema (papilledema) present?',
      options: [
        { id: 'icp-papilledema-yes', label: 'Yes, papilledema is present', nextNodeId: 'outcome-papilledema-iih' },
        { id: 'icp-papilledema-no', label: 'No papilledema seen', nextNodeId: 'outcome-atypical-headache-no-papilledema' },
      ],
    },

    'outcome-carotid-dissection': {
      id: 'outcome-carotid-dissection',
      type: 'outcome',
      title: 'Thunderclap Headache — Possible Carotid/Vertebral Artery Dissection or Other Vascular Emergency',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'carotid-artery-dissection',
          whyItFits:
            'A thunderclap headache — reaching maximum severity within seconds to a couple of minutes — together with neck pain and a new droopy lid with a small, poorly-dilating pupil (a Horner triad) on the same side increases suspicion for a carotid or vertebral artery dissection.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'horner-syndrome',
          whyItFits:
            'An acute Horner syndrome accompanying a thunderclap or acute severe headache must not be dismissed as benign — dissection can progress to stroke, and any thunderclap headache in general, even without ocular signs, is itself a neurological emergency requiring urgent neuroimaging to exclude subarachnoid hemorrhage and other catastrophic causes that fall outside the eye exam alone.',
        },
      ],
      recommendedNextSteps: [
        'Emergent transfer for neuroimaging (CT/CTA or MRI/MRA of the head and neck) — do not manage a thunderclap headache in an eye clinic setting',
        'Assess pupils carefully for anisocoria and ptosis suggesting Horner syndrome',
        'Ask specifically about neck pain, recent neck trauma or manipulation, and stroke-type symptoms (weakness, numbness, speech change)',
        'Treat as a "worst headache of life" emergency regardless of ocular findings — subarachnoid hemorrhage and other vascular catastrophes must be excluded emergently',
      ],
      relatedDiseaseIds: ['carotid-artery-dissection', 'horner-syndrome'],
      relatedExamTechniqueIds: ['pupillary-examination'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'anisocoria-workup'],
    },
    'outcome-gca-headache': {
      id: 'outcome-gca-headache',
      type: 'outcome',
      title: 'Suspected Giant Cell Arteritis',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'A new headache in a patient over 50 with jaw claudication, scalp tenderness, or other systemic symptoms increases suspicion for giant cell arteritis, which is an ophthalmic and systemic emergency because of its risk of sudden, often bilateral, irreversible vision loss.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'Vision loss from GCA can occur suddenly and the fellow eye can become involved within days if treatment is delayed — do not wait for a temporal artery biopsy before starting high-dose systemic corticosteroids.',
        },
      ],
      recommendedNextSteps: [
        'Stat ESR, CRP, and platelet count',
        'Start high-dose systemic corticosteroids immediately on clinical suspicion, without waiting for biopsy',
        'Arrange temporal artery biopsy within 1-2 weeks of starting steroids',
        'Same-day ophthalmology and rheumatology involvement',
        'Examine both optic discs for pallid edema',
      ],
      relatedDiseaseIds: ['giant-cell-arteritis'],
      relatedDrugIds: ['prednisone', 'methylprednisolone'],
      relatedExamTechniqueIds: ['giant-cell-arteritis-laboratory-workup', 'pupillary-examination'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'sudden-painless-vision-loss-workup'],
      relatedEmergencyProtocolIds: ['giant-cell-arteritis-vision-loss-protocol'],
    },
    'outcome-papilledema-iih': {
      id: 'outcome-papilledema-iih',
      type: 'outcome',
      title: 'Papilledema — Suspected Idiopathic Intracranial Hypertension',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'idiopathic-intracranial-hypertension',
          whyItFits:
            'Headache with bilateral optic disc edema, transient visual obscurations lasting seconds, and pulsatile tinnitus — especially in a woman of childbearing age with obesity — increases suspicion for idiopathic intracranial hypertension.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'papilledema',
          whyItFits:
            'Disc edema from raised intracranial pressure must first be attributed to a secondary, structural cause — a mass lesion, venous sinus thrombosis, or another cause of elevated ICP — with neuroimaging before IIH can be called idiopathic; this is a diagnosis of exclusion.',
        },
      ],
      recommendedNextSteps: [
        'Urgent neuroimaging (MRI/MRV to exclude a mass lesion and venous sinus thrombosis) before lumbar puncture',
        'Lumbar puncture with opening pressure measurement in the lateral decubitus position once imaging is safe',
        'Formal visual field testing and OCT RNFL to document baseline and monitor for progression',
        'Weight-management counseling and consider acetazolamide',
        'Urgent neuro-ophthalmology involvement, especially if vision is already affected',
      ],
      managementNotes:
        'Diagnostic criteria (the modified Dandy/Friedman criteria) require papilledema plus a documented elevated CSF opening pressure with otherwise normal CSF composition, and normal neuroimaging aside from signs suggestive of raised pressure — papilledema alone is not sufficient to diagnose IIH.',
      relatedDiseaseIds: ['idiopathic-intracranial-hypertension', 'papilledema'],
      relatedDrugIds: ['acetazolamide'],
      relatedExamTechniqueIds: ['oct-optic-nerve-rnfl', 'humphrey-visual-field', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'optic-nerve-edema-workup', 'abnormal-visual-field-workup'],
    },
    'outcome-atypical-headache-no-papilledema': {
      id: 'outcome-atypical-headache-no-papilledema',
      type: 'outcome',
      title: 'Headache with Possible Elevated ICP Features but No Papilledema on Exam',
      urgency: 'Urgent (24-48h)',
      mostLikely: [
        {
          diseaseId: 'idiopathic-intracranial-hypertension',
          whyItFits:
            'Positional headache, transient visual obscurations, or pulsatile tinnitus can still reflect elevated intracranial pressure even before disc edema becomes visible, or in a patient with only mild/early papilledema that is easy to miss on direct exam.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'papilledema',
          whyItFits:
            'A normal-appearing disc on a single exam does not fully exclude early or evolving papilledema — a normal fundus exam does not rule out elevated intracranial pressure, and any of these features warrants urgent neuroimaging rather than reassurance alone.',
        },
      ],
      recommendedNextSteps: [
        'Repeat dilated fundus exam and consider OCT RNFL for subtle disc changes not obvious on ophthalmoscopy',
        'Urgent neuroimaging if symptoms persist or worsen',
        'Reconsider the headache pattern for atypical migraine features versus a structural cause',
        'Low threshold for neurology or neuro-ophthalmology referral',
      ],
      relatedDiseaseIds: ['idiopathic-intracranial-hypertension', 'papilledema'],
      relatedExamTechniqueIds: ['oct-optic-nerve-rnfl', 'dilated-fundus-examination-systematic-approach', 'humphrey-visual-field'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'optic-nerve-edema-workup'],
    },
    'outcome-migraine-aura': {
      id: 'outcome-migraine-aura',
      type: 'outcome',
      title: 'Migraine with Visual Aura',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'ocular-migraine',
          whyItFits:
            'A recurrent, stereotyped, gradually-spreading shimmering or zigzag visual disturbance lasting roughly 5-60 minutes, typically followed by or accompanied by headache, with a normal eye exam between episodes, increases suspicion for migraine with visual aura.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'idiopathic-intracranial-hypertension',
          whyItFits:
            'A first-time or atypical "aura" — one much longer than 60 minutes, monocular rather than the more typical bilateral/homonymous pattern, not followed by headache, or occurring with an abnormal fundus exam — should not be assumed to be migraine and needs a fundus check for papilledema and, if any doubt remains, further workup rather than reassurance.',
        },
      ],
      recommendedNextSteps: [
        'Confirm the typical, stereotyped nature of the visual symptoms and their timing relative to headache',
        'Dilated fundus exam if not already performed, to exclude papilledema',
        'Headache diary to track triggers and frequency',
        'Migraine-specific management (trigger avoidance, abortive and, if frequent, preventive therapy)',
        'Reassurance once red flags are excluded',
      ],
      relatedDiseaseIds: ['ocular-migraine'],
      relatedDrugIds: ['topiramate'],
      relatedExamTechniqueIds: ['confrontation-visual-fields', 'dilated-fundus-examination-systematic-approach'],
      relatedWorkupIds: ['headache-ocular-relevance-workup'],
    },
    'outcome-angle-closure-headache': {
      id: 'outcome-angle-closure-headache',
      type: 'outcome',
      title: 'Headache from Suspected Acute Angle-Closure',
      urgency: 'Emergency (immediate)',
      mostLikely: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits:
            'A severe headache or brow ache together with a red, painful eye, halos around lights, nausea/vomiting, and a hazy cornea increases suspicion for acute angle-closure — the eye findings, not the headache alone, drive the diagnosis here.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'primary-angle-closure-glaucoma',
          whyItFits: 'This pattern is a true ophthalmic emergency — permanent optic nerve and retinal damage can occur within hours, so it must not be treated as a primary headache disorder.',
        },
      ],
      recommendedNextSteps: [
        'Check IOP immediately',
        'Gonioscopy on both eyes once the acute episode allows',
        'Begin the acute angle-closure emergency protocol without delay',
        'Do not dilate either eye during the acute episode',
      ],
      relatedDiseaseIds: ['primary-angle-closure-glaucoma'],
      relatedDrugIds: ['timolol', 'pilocarpine', 'acetazolamide'],
      relatedExamTechniqueIds: ['gonioscopy', 'goldmann-applanation-tonometry'],
      relatedWorkupIds: ['headache-ocular-relevance-workup'],
      relatedEmergencyProtocolIds: ['acute-angle-closure-crisis-protocol'],
    },
    'outcome-orbital-cause': {
      id: 'outcome-orbital-cause',
      type: 'outcome',
      title: 'Headache with Proptosis or Orbital Signs — Suspected Orbital Cause',
      urgency: 'Same-day',
      mostLikely: [
        {
          diseaseId: 'thyroid-eye-disease',
          whyItFits: 'Headache/brow ache with proptosis, lid retraction or lid lag, and restricted eye movement increases suspicion for an orbital process such as thyroid eye disease.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'orbital-cellulitis',
          whyItFits:
            'Fever, severe pain, marked lid swelling/erythema, or rapidly progressive proptosis should redirect suspicion toward orbital cellulitis, which can threaten vision and spread intracranially if not treated emergently — a different level of urgency than chronic thyroid orbitopathy.',
        },
        {
          diseaseId: 'idiopathic-orbital-inflammation',
          whyItFits: 'Acute, painful proptosis without infectious signs should also raise suspicion for orbital inflammatory disease, which needs a different, anti-inflammatory-focused urgent workup.',
        },
      ],
      recommendedNextSteps: [
        'Hertel exophthalmometry to quantify and monitor proptosis',
        'Assess for fever, severe pain, and other signs of infection suggesting orbital cellulitis — escalate to emergent management if present',
        'Thyroid function testing',
        'Orbital imaging (CT or MRI) if the diagnosis is unclear or there is concern for compressive optic neuropathy or an infectious/inflammatory process',
        'Check color vision, pupils, and visual fields for optic nerve compromise at every visit',
      ],
      relatedDiseaseIds: ['thyroid-eye-disease', 'orbital-cellulitis', 'idiopathic-orbital-inflammation'],
      relatedDrugIds: ['teprotumumab'],
      relatedExamTechniqueIds: ['hertel-exophthalmometry', 'extraocular-motility-testing', 'pupillary-examination'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'proptosis-workup'],
      relatedEmergencyProtocolIds: ['orbital-cellulitis-protocol'],
    },
    'outcome-accommodative-refractive': {
      id: 'outcome-accommodative-refractive',
      type: 'outcome',
      title: 'Headache from Accommodative/Refractive Eye Strain',
      urgency: 'Routine',
      mostLikely: [
        {
          diseaseId: 'accommodative-dysfunction',
          whyItFits:
            'A frontal or periorbital headache and brow ache that builds with prolonged near work, improves with rest, and is accompanied by blurred near vision increases suspicion for an accommodative or binocular vision-based cause rather than a primary headache disorder or a dangerous ocular process.',
        },
      ],
      mustNotMiss: [
        {
          diseaseId: 'convergence-insufficiency',
          whyItFits: 'Near-work-related headache with eye strain and intermittent double vision or words swimming should also prompt testing for convergence insufficiency, which is easy to miss if only accommodation is assessed.',
        },
      ],
      recommendedNextSteps: [
        'Cycloplegic refraction to identify uncorrected refractive error, especially hyperopia',
        'Amplitude of accommodation and accommodative facility testing',
        'Near point of convergence and vergence testing',
        'Updated spectacle correction and, if indicated, vision therapy',
        'Reassess the headache pattern after correction before assuming a non-ocular cause',
      ],
      relatedDiseaseIds: ['accommodative-dysfunction', 'convergence-insufficiency'],
      relatedExamTechniqueIds: ['cycloplegic-retinoscopy', 'amplitude-of-accommodation-push-up', 'accommodative-facility-testing', 'near-point-of-convergence'],
      relatedWorkupIds: ['headache-ocular-relevance-workup', 'near-blur-asthenopia-workup'],
    },
    'outcome-primary-headache-no-ocular-cause': {
      id: 'outcome-primary-headache-no-ocular-cause',
      type: 'outcome',
      title: 'Headache Without an Identified Ocular Cause',
      urgency: 'Routine',
      mostLikely: [],
      mustNotMiss: [
        {
          diseaseId: 'giant-cell-arteritis',
          whyItFits:
            'Any new headache in a patient over 50 deserves at least a brief re-screen for GCA red flags (jaw claudication, scalp tenderness, systemic symptoms) before being dismissed as a benign primary headache, given how easily early GCA can be missed.',
        },
      ],
      recommendedNextSteps: [
        'Perform a complete eye exam including dilated fundus exam and IOP to confirm no ocular contribution is being missed',
        'Re-screen for GCA red flags in any patient over 50',
        'Refer to primary care or neurology for headache-specific evaluation and management',
        'Return for eye evaluation if any new visual symptoms, eye pain, or red eye develop',
      ],
      relatedDiseaseIds: ['giant-cell-arteritis'],
      relatedWorkupIds: ['headache-ocular-relevance-workup'],
    },
  },
  references: [
    'AAO EyeWiki: Giant Cell Arteritis',
    'AAO EyeNet: Diagnosis of Idiopathic Intracranial Hypertension',
    'AAO EyeWiki: Acute Angle-Closure Glaucoma',
    'International Classification of Headache Disorders (ICHD-3): Migraine with Aura criteria',
  ],
}

export const presentingComplaintTrees: DecisionTree[] = [
  redEye,
  suddenVisionLoss,
  flashesAndFloaters,
  diplopiaTree,
  headacheWithOcularFeatures,
]
