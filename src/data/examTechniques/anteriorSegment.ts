import type { ExamTechnique } from '../../types/examTechnique'

export const anteriorSegmentTechniques: ExamTechnique[] = [
  {
    id: 'van-herick-test',
    name: 'Van Herick Peripheral Anterior Chamber Depth Estimation',
    aliases: ['Van Herick test', 'Van Herick technique', 'peripheral AC depth estimation'],
    category: 'Anterior Segment',
    section: 'Anterior Chamber & Gonioscopy',
    isSpecialTest: true,
    purpose:
      "A slit-lamp screening estimate of peripheral anterior chamber (AC) depth, used to flag eyes at risk of angle closure before — or instead of — gonioscopy.",
    clinicalIndications: [
      'Screening for narrow/occludable angles, especially before pupil dilation',
      'Any patient with hyperopia, shallow anterior chamber on gross observation, or a family history of angle-closure glaucoma',
      'Quick triage when gonioscopy is not immediately available',
    ],
    equipment: ['Slit lamp biomicroscope'],
    patientPreparation: ['No dilation or anesthetic required — perform before instilling any dilating drops'],
    technique: [
      'Set the slit lamp to a narrow (approximately 1 mm), bright beam at high magnification',
      'Direct the beam onto the peripheral cornea closest to the temporal limbus at an angle of about 60° from the visual axis',
      'Observe the illuminated corneal slit and the adjacent dark ("black") space, which represents the peripheral anterior chamber, between the corneal endothelium and the anterior iris surface',
      'Compare the width of the dark peripheral AC space to the width of the illuminated corneal slit (corneal thickness) and express it as a ratio, then grade using the scale below',
      'Repeat nasally if desired, though the temporal measurement is the one classically graded',
    ],
    normalFindings: [
      'Grade 3-4: peripheral AC depth is more than one-quarter to at least the full thickness of the corneal slit image — angle is unlikely to close',
    ],
    abnormalFindings: [
      'Grade 2: peripheral AC depth ≈ 25% of corneal thickness — angle closure is possible; gonioscopy indicated',
      'Grade 1: peripheral AC depth <25% of corneal thickness — angle closure is likely; gonioscopy indicated and dilation should be approached cautiously',
      'Grade 0 (some grading schemes): no visible black space — angle is essentially closed',
    ],
    interpretation:
      'The grade is only an estimate of the peripheral chamber angle, not a direct measurement of it — Van Herick grade 2 or less should prompt gonioscopy before dilating the pupil, since it correlates with (but does not replace) a gonioscopically occludable angle. A wide Van Herick grade does not rule out plateau iris configuration, which can still close on dilation despite a deep-appearing peripheral chamber.',
    associatedConditionIds: ['primary-angle-closure-glaucoma'],
    clinicalPearls: [
      "Perform Van Herick before instilling any dilating drops — it's the fastest way to catch an angle you should not dilate without first confirming on gonioscopy.",
      'The temporal angle is used for grading because it is typically the narrowest and most clinically relevant quadrant to screen.',
      'A shallow Van Herick estimate should always be confirmed with gonioscopy — it is a screening test, not a substitute for direct angle visualization.',
    ],
    commonErrors: [
      'Using too wide a beam, which makes the corneal slit and AC shadow harder to distinguish and compare precisely',
      'Measuring at an incorrect angle from the visual axis, which distorts the apparent ratio',
      'Treating the grade as a definitive angle status rather than a screening estimate that still requires gonioscopy when borderline or narrow',
    ],
    limitations: [
      'Estimates only the peripheral angle at the point examined — does not assess the full circumference the way gonioscopy does',
      'Cannot detect plateau iris configuration, which may appear to have a deep peripheral chamber on Van Herick yet still close on dilation',
      'Grading is observer-dependent; a modified 7-point scheme (subdividing the original grade 1 and adding an intermediate grade between 3 and 4) has been proposed to improve precision and reproducibility against gonioscopy.',
    ],
    relatedTechniqueIds: ['gonioscopy'],
    references: [
      'Van Herick W, Shaffer RN, Schwartz A. Estimation of width of angle of anterior chamber. Incidence and significance of the narrow angle. Am J Ophthalmol. 1969;68(4):626-9.',
      "Foster PJ, et al. — modified/expanded Van Herick grading scheme validated against gonioscopy (cited widely as the basis for the 7-point augmented scale).",
    ],
  },
  {
    id: 'seidel-test',
    name: 'Seidel Test',
    aliases: ['Seidel sign'],
    category: 'Anterior Segment',
    section: 'Cornea',
    isSpecialTest: true,
    purpose: 'Detects an actively leaking aqueous wound — a corneal or scleral perforation, or a postoperative/traumatic wound leak.',
    clinicalIndications: [
      'Suspected corneal perforation (e.g. from a corneal ulcer, trauma, or thinning disorder)',
      'Postoperative evaluation after corneal or intraocular surgery when wound integrity is in question',
      'A shallow or flat anterior chamber of uncertain cause',
      'Suspected filtering bleb leak after glaucoma surgery',
    ],
    contraindications: [
      'Known or suspected open-globe injury with obvious extrusion of intraocular contents — avoid applying pressure or manipulating the globe; this test does not require pressure and should be done gently if performed at all in this setting',
    ],
    equipment: ['Slit lamp biomicroscope with cobalt blue filter', 'High-concentration fluorescein strip (moistened, not diluted)'],
    patientPreparation: ['Topical anesthetic may be used first for comfort if handling the strip near the eye, though the strip itself should not be diluted with additional fluid'],
    technique: [
      'Moisten a fluorescein strip minimally so the dye remains concentrated (do not use a fluorescein-anesthetic combination drop, which dilutes the dye)',
      'Apply the moistened strip directly to the area of suspected leak, coating it with a thick layer of concentrated (dark orange) fluorescein',
      'Observe under the slit lamp with the cobalt blue filter (a Wratten #12 yellow barrier filter improves contrast if available)',
      'Watch the pooled dye for a stream of diluted, bright green fluorescein flowing away from the suspected leak site as aqueous mixes with and dilutes the concentrated dye',
      'Gentle digital pressure on the globe through the lower lid may be added to increase aqueous outflow and provoke a leak that is not spontaneously visible, if no open-globe injury is suspected',
    ],
    normalFindings: ['Negative Seidel: the concentrated dye remains dark orange-brown with no stream of dilute green dye — no active leak'],
    abnormalFindings: [
      'Positive Seidel: a visible stream or rivulet of bright green (diluted) fluorescein flowing through/away from the dark concentrated dye at the wound site — the classic "waterfall" sign',
    ],
    interpretation:
      'A positive Seidel test confirms an actively leaking full-thickness wound and is an ocular urgency requiring prompt management (pressure patching, bandage contact lens, tissue adhesive, or surgical repair depending on severity) to prevent endophthalmitis, hypotony, or globe collapse. A negative test does not rule out a sealed or intermittently leaking wound — if suspicion remains high, gentle digital pressure or a repeat test after the patient performs a Valsalva-type maneuver can be used to provoke a leak.',
    associatedConditionIds: ['bacterial-keratitis', 'corneal-abrasion'],
    clinicalPearls: [
      "Use concentrated fluorescein, not the diluted drop typically used for routine corneal staining — a dilute drop can itself look like it's flowing and cause a false-positive impression.",
      'A large, brisk leak may self-tamponade or drain faster than expected — if the chamber is flat with high suspicion but the test is initially negative, apply gentle pressure and re-examine.',
      'Document leak location, size, and rate (slow ooze vs brisk stream) since this affects management choice.',
    ],
    commonErrors: [
      'Diluting the fluorescein (e.g. with a combination anesthetic-fluorescein drop) instead of using a concentrated strip application, which can mask a true leak or create ambiguous staining',
      'Applying firm pressure to a globe with obvious open-globe signs, risking extrusion of intraocular contents',
      'Mistaking normal tear film dilution/movement of fluorescein for a true leak — a genuine Seidel-positive stream tracks specifically from a discrete wound site, not diffusely across the ocular surface',
    ],
    limitations: [
      'A slow or intermittent leak may not be visible without provocation (digital pressure or Valsalva)',
      'A self-sealing wound can be Seidel-negative despite having recently leaked or being at risk of leaking again',
    ],
    relatedTechniqueIds: ['fluorescein-corneal-staining'],
    references: [
      'Seidel E. Weitere experimentelle Untersuchungen über die Quelle und den Verlauf der intraokularen Flüssigkeitsströmung. Albrecht von Graefes Arch Ophthalmol. 1921.',
      'Standard technique as taught in clinical ophthalmic/optometric examination texts (e.g. Kanski\'s Clinical Ophthalmology) for wound-leak and bleb-leak assessment.',
    ],
  },
]
