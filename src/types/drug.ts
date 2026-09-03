export type DrugClass =
  | 'Antibiotics'
  | 'Antivirals'
  | 'Antifungals'
  | 'Steroids'
  | 'NSAIDs'
  | 'Glaucoma medications'
  | 'Anti-VEGF / Retina'
  | 'Allergy medications'
  | 'Dry eye medications'
  | 'Mydriatics'
  | 'Cycloplegics'
  | 'Miotics'
  | 'Anesthetics'
  | 'Immunomodulators'
  | 'Hyperosmotics'
  | 'Cardiovascular'
  | 'Endocrine'
  | 'Psychiatric'
  | 'Neurologic'
  | 'Rheumatologic / Immunosuppressant'
  | 'Pulmonary'
  | 'Gastrointestinal'
  | 'Genitourinary'
  | 'Anti-infective (systemic)'
  | 'Dermatologic'
  | 'Musculoskeletal'
  | 'Other'

export interface DrugReference {
  label: string
  source: string
}

export interface Drug {
  id: string
  genericName: string
  brandNames: string[]
  drugClass: DrugClass
  mechanismOfAction: string
  indications: string[]
  ocularUses: string[]
  typicalDosing: string
  concentrations: string[]
  /** Dosage forms this drug is actually supplied in (e.g. "Solution", "Suspension", "Ointment",
   * "Gel", "Tablet", "Injection") — distinct from `concentrations`, which is strength/percentage. */
  formulations?: string[]
  route: string
  sideEffects: {
    ocular: string[]
    systemic: string[]
  }
  contraindications: string[]
  precautions: string[]
  drugInteractions: string[]
  patientCounseling: string[]
  pregnancyLactation: string
  /** Pediatric-specific dosing adjustments, safety data, or age restrictions — every drug should
   * have this populated (even if only to note there are no pediatric-specific concerns beyond
   * weight-based dosing), since pediatric safety is a distinct clinical question from pregnancy. */
  pediatricConsiderations?: string[]
  /** Genuinely real off-label uses in eye care or general practice, distinct from the on-label
   * `indications` above. Omitted (not an empty array) for drugs with no notable off-label use. */
  offLabelUses?: string[]
  /** DEA schedule, e.g. "Schedule II (federal)", "Schedule IV (federal)". Omitted entirely for the
   * large majority of drugs in this library that are not controlled substances — this field only
   * appears when it is actually true, mirroring the `isSpecialTest`-style cross-cutting-tag pattern
   * used elsewhere in this app rather than a "None" value on every non-controlled drug. */
  controlledSubstanceSchedule?: string
  /** True for drugs whose primary or a major use is genuine emergency/urgent management (e.g.
   * epinephrine for anaphylaxis, IV mannitol/acetazolamide for acute angle-closure crisis, IV
   * methylprednisolone for arteritic AION/optic neuritis) — lets the Drug Database surface an
   * "Emergency Medications" filter the same way ExamTechnique's `isSpecialTest` tag does. */
  isEmergencyMedication?: boolean
  /** -> Disease.id. The conditions this drug is used to treat/manage, verified to exist in the
   * Disease Library before linking — the structured "Drug -> Disease" link, since drug names
   * mentioned in disease prose auto-link via crossLinkService but a disease's own id is plain text
   * within a Drug entry unless explicitly listed here. */
  relatedConditionIds?: string[]
  monitoring: string[]
  clinicalPearls: string[]
  highYield: string[]
  references: DrugReference[]
}
