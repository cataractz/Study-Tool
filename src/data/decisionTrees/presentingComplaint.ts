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

export const presentingComplaintTrees: DecisionTree[] = [redEye]
