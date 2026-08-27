export type DrugClass =
  | 'Antibiotics'
  | 'Antivirals'
  | 'Antifungals'
  | 'Steroids'
  | 'NSAIDs'
  | 'Glaucoma medications'
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
  monitoring: string[]
  clinicalPearls: string[]
  highYield: string[]
  references: DrugReference[]
}
