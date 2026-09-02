import type { ClinicalWorkup } from '../../types/clinicalWorkup'

export const clinicalWorkups: ClinicalWorkup[] = [
  {
    id: 'red-eye-workup',
    name: 'Red Eye',
    chiefComplaint: 'Patient presents with a red eye, with or without pain, discharge, or vision change.',
    keyHistory: [
      'Onset (sudden vs. gradual) and duration',
      'Laterality (unilateral vs. bilateral) — bilateral onset favors an allergic/viral/toxic cause, unilateral favors a mechanical, infectious, or traumatic focal process',
      'Pain severity and character — foreign-body sensation vs. deep/boring pain vs. photophobia',
      'Discharge type — watery, mucoid, purulent, or ropy/stringy',
      'Vision change',
      'Contact lens wear',
      'Recent trauma, chemical exposure, or foreign body',
      'Recent upper respiratory infection or known sick contacts (viral conjunctivitis)',
      'Systemic symptoms or known systemic inflammatory disease (uveitis, scleritis association)',
    ],
    redFlags: [
      'Decreased vision',
      'Significant photophobia or ciliary/circumlimbal flush',
      'Severe pain out of proportion to external findings',
      'Corneal involvement (infiltrate, ulcer, epithelial defect)',
      'History of trauma or possible open globe',
      'Contact lens wear with a red, painful eye (raises suspicion for microbial keratitis)',
      'Fixed or poorly reactive pupil',
    ],
    initialExamSteps: [
      'Visual acuity',
      'Pupil evaluation',
      'Pattern and location of injection (diffuse conjunctival vs. ciliary/circumlimbal flush vs. sectoral)',
      'Slit-lamp examination of lids, conjunctiva, cornea, and anterior chamber',
      'Fluorescein staining of the cornea',
      'Intraocular pressure',
      'Eversion of the upper lid if foreign body is suspected',
    ],
    differentialDiagnosisIds: ['conjunctivitis', 'bacterial-keratitis', 'anterior-uveitis', 'primary-angle-closure-glaucoma', 'episcleritis', 'scleritis', 'subconjunctival-hemorrhage'],
    ancillaryTestingIds: ['van-herick-test', 'seidel-test'],
    mostLikelyDiagnoses:
      'Diffuse conjunctival injection with watery discharge and preauricular node suggests viral conjunctivitis; purulent discharge suggests bacterial conjunctivitis; bilateral itching with a stringy discharge suggests allergic conjunctivitis. A ciliary/circumlimbal flush with photophobia and a small or irregular pupil points toward anterior uveitis. Severe pain with a fixed mid-dilated pupil and a shallow anterior chamber points toward acute angle closure. Contact lens wear with a corneal infiltrate and significant pain points toward microbial keratitis until proven otherwise.',
    urgency: 'Urgent',
    managementConsiderations:
      'Most conjunctivitis is self-limited or managed in primary eye care. Any corneal involvement, contact-lens-associated red eye, suspected angle closure, or scleritis warrants same-day evaluation and, depending on findings, urgent referral. A red eye with reduced vision, severe pain, or a fixed pupil should be treated as a same-day emergency until a sight-threatening cause is excluded.',
    references: [
      'American Academy of Ophthalmology Preferred Practice Pattern: Conjunctivitis, 2023.',
      'Standard differential-diagnosis approach as taught in clinical optometric/ophthalmic examination texts.',
    ],
  },
]
