import type { Disease } from '../../types/disease'

export type DiseaseRegion = 'Anterior Segment' | 'Posterior Segment' | 'Other'

export type DiseaseSubRegion =
  // Anterior Segment
  | 'Cornea'
  | 'Conjunctiva'
  | 'Sclera'
  | 'Uvea'
  | 'Lens'
  | 'Lacrimal'
  | 'Eyelids'
  // Posterior Segment
  | 'Retina'
  | 'Macula'
  | 'Vitreous'
  | 'Choroid'
  | 'Optic Nerve'
  // Other
  | 'Glaucoma'
  | 'Neuro-Ophthalmology'
  | 'Orbit'
  | 'Strabismus & Binocular Vision'
  | 'Refractive Error'
  | 'Ocular Trauma'
  | 'Systemic Disease with Ocular Manifestations'

/**
 * Anterior/Posterior/Other body-region grouping, in the finer-grained shape the user's own
 * external outline for the Disease Library asked for (Cornea/Conjunctiva/Sclera/Uvea/Lens/
 * Lacrimal/Eyelids under Anterior; Retina/Macula/Vitreous/Choroid/Optic Nerve under Posterior;
 * Glaucoma/Neuro-Ophthalmology/Orbit/Pediatric/Strabismus/Systemic under Other) — layered ON TOP
 * of the existing `Disease.category` field rather than replacing it, so no existing disease data,
 * cross-link, or the original category filter is touched.
 *
 * Three disclosed departures from the user's literal list, all to avoid shipping an empty filter
 * chip with zero matching diseases:
 * - "Oculoplastics" has no diseases left over once eyelid disease goes to Anterior/Eyelids,
 *   lacrimal disease to Anterior/Lacrimal, and orbital disease to Other/Orbit — those three
 *   sub-buckets together already cover everything oculoplastics traditionally treats.
 * - "Pediatric" as its own bucket had nothing left over either, once its genuinely pediatric
 *   diseases were classified by actual anatomic subject matter instead (e.g. retinoblastoma ->
 *   Retina, congenital cataract -> Lens, infantile esotropia -> Strabismus & Binocular Vision) —
 *   which is also more clinically useful than a catch-all "pediatric" label.
 * - "Refractive Error" (myopia, hyperopia, astigmatism, presbyopia, anisometropia/aniseikonia) and
 *   "Ocular Trauma" are kept as their own Other sub-buckets since the existing library already has
 *   real content here that doesn't cleanly fit any bucket in the user's list.
 *
 * `DEFAULT_REGION_BY_CATEGORY` covers the categories that map 1:1 onto one sub-region with no
 * per-disease judgment needed. `DISEASE_REGION_OVERRIDES` gives the individual classification for
 * every disease whose existing `category` is a mixed bucket (Anterior Segment, Retina,
 * Neuro-Ophthalmology, Orbit & Lacrimal, Pediatric & Binocular Vision, Ocular Trauma) that needed
 * disease-by-disease judgment to sort into the finer scheme — decided from each disease's actual
 * clinical subject matter (e.g. "Scleritis" -> Sclera, "Macular Hole" -> Macula, "CN III Palsy" ->
 * Neuro-Ophthalmology, "Optic Neuritis" -> Optic Nerve).
 */
export const DEFAULT_REGION_BY_CATEGORY: Partial<Record<Disease['category'], { region: DiseaseRegion; subRegion: DiseaseSubRegion }>> = {
  Cornea: { region: 'Anterior Segment', subRegion: 'Cornea' },
  'Eyelid & Adnexa': { region: 'Anterior Segment', subRegion: 'Eyelids' },
  Glaucoma: { region: 'Other', subRegion: 'Glaucoma' },
  'Systemic Health - Endocrine': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Cardiovascular': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Pulmonary': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Rheumatologic & Autoimmune': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Musculoskeletal': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Gastrointestinal & Hepatic': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Renal': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Hematologic & Oncologic': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Neurologic': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Infectious Disease': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Dermatologic': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Genetic & Chromosomal': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
  'Systemic Health - Nutritional': { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' },
}

const A_CORNEA = { region: 'Anterior Segment' as const, subRegion: 'Cornea' as const }
const A_CONJ = { region: 'Anterior Segment' as const, subRegion: 'Conjunctiva' as const }
const A_SCLERA = { region: 'Anterior Segment' as const, subRegion: 'Sclera' as const }
const A_UVEA = { region: 'Anterior Segment' as const, subRegion: 'Uvea' as const }
const A_LENS = { region: 'Anterior Segment' as const, subRegion: 'Lens' as const }
const A_LACRIMAL = { region: 'Anterior Segment' as const, subRegion: 'Lacrimal' as const }
const P_RETINA = { region: 'Posterior Segment' as const, subRegion: 'Retina' as const }
const P_MACULA = { region: 'Posterior Segment' as const, subRegion: 'Macula' as const }
const P_VITREOUS = { region: 'Posterior Segment' as const, subRegion: 'Vitreous' as const }
const P_CHOROID = { region: 'Posterior Segment' as const, subRegion: 'Choroid' as const }
const P_OPTIC_NERVE = { region: 'Posterior Segment' as const, subRegion: 'Optic Nerve' as const }
const O_NEURO = { region: 'Other' as const, subRegion: 'Neuro-Ophthalmology' as const }
const O_ORBIT = { region: 'Other' as const, subRegion: 'Orbit' as const }
const O_STRAB = { region: 'Other' as const, subRegion: 'Strabismus & Binocular Vision' as const }
const O_REFRACTIVE = { region: 'Other' as const, subRegion: 'Refractive Error' as const }
const O_TRAUMA = { region: 'Other' as const, subRegion: 'Ocular Trauma' as const }

export const DISEASE_REGION_OVERRIDES: Record<string, { region: DiseaseRegion; subRegion: DiseaseSubRegion }> = {
  // --- formerly 'Anterior Segment' category ---
  scleritis: A_SCLERA,
  'intermediate-uveitis': A_UVEA,
  'toxoplasmosis-chorioretinitis': P_CHOROID,
  'giant-papillary-conjunctivitis': A_CONJ,
  'subconjunctival-hemorrhage': A_CONJ,
  'traumatic-hyphema': A_UVEA,
  'sarcoid-uveitis': A_UVEA,
  'fuchs-heterochromic-iridocyclitis': A_UVEA,
  'ocular-syphilis': A_UVEA,
  'chlamydial-conjunctivitis-trachoma': A_CONJ,
  'gonococcal-conjunctivitis': A_CONJ,
  'phlyctenular-keratoconjunctivitis': A_CORNEA,
  'ocular-surface-squamous-neoplasia': A_CONJ,
  'conjunctival-nevus-melanoma': A_CONJ,
  'iris-nevus-melanoma': A_UVEA,
  'posterior-capsular-opacification': A_LENS,
  'aphakia-pseudophakia': A_LENS,
  'vkh-syndrome': A_UVEA,
  'sympathetic-ophthalmia': A_UVEA,
  'behcet-disease': A_UVEA,
  'hla-b27-uveitis': A_UVEA,
  'anterior-uveitis': A_UVEA,
  episcleritis: A_SCLERA,
  cataract: A_LENS,
  conjunctivitis: A_CONJ,

  // --- formerly 'Retina' category ---
  'pathologic-myopia': P_RETINA,
  'vitreomacular-traction': P_VITREOUS,
  'commotio-retinae': P_RETINA,
  'x-linked-retinoschisis': P_RETINA,
  'choroidal-nevus-melanoma': P_CHOROID,
  'coats-disease': P_RETINA,
  'stargardt-disease': P_MACULA,
  'best-disease': P_MACULA,
  'angioid-streaks': P_CHOROID,
  'diabetic-retinopathy': P_RETINA,
  amd: P_MACULA,
  'retinal-detachment': P_RETINA,
  'retinal-vein-occlusion': P_RETINA,
  'posterior-vitreous-detachment': P_VITREOUS,
  'hypertensive-retinopathy': P_RETINA,
  'retinopathy-of-prematurity': P_RETINA,
  endophthalmitis: P_VITREOUS,
  'cmv-retinitis': P_RETINA,
  'lattice-degeneration-wwp': P_RETINA,
  chrpe: P_RETINA,
  'familial-exudative-vitreoretinopathy': P_RETINA,
  'tractional-exudative-retinal-detachment': P_RETINA,
  'cystoid-macular-edema': P_MACULA,
  'vitreous-hemorrhage': P_VITREOUS,
  'acute-retinal-necrosis': P_RETINA,
  'retinal-vasculitis-eales-disease': P_RETINA,
  'choroidal-hemangioma': P_CHOROID,
  'macular-telangiectasia': P_MACULA,
  'retinal-artery-occlusion': P_RETINA,
  'retinitis-pigmentosa': P_RETINA,
  'central-serous-retinopathy': P_CHOROID,
  'macular-hole': P_MACULA,
  'epiretinal-membrane': P_MACULA,

  // --- formerly 'Neuro-Ophthalmology' category ---
  'internuclear-ophthalmoplegia': O_NEURO,
  'ocular-myasthenia-gravis': O_NEURO,
  'thyroid-eye-disease': O_ORBIT,
  'chiasmal-syndrome': O_NEURO,
  'homonymous-hemianopia': O_NEURO,
  nystagmus: O_NEURO,
  'optic-disc-drusen': P_OPTIC_NERVE,
  'ocular-migraine': O_NEURO,
  'cn4-palsy': O_NEURO,
  'cn6-palsy': O_NEURO,
  'giant-cell-arteritis': O_NEURO,
  'idiopathic-intracranial-hypertension': O_NEURO,
  'horner-syndrome': O_NEURO,
  'dorsal-midbrain-syndrome': O_NEURO,
  'leber-hereditary-optic-neuropathy': P_OPTIC_NERVE,
  'toxic-nutritional-optic-neuropathy': P_OPTIC_NERVE,
  'traumatic-optic-neuropathy': P_OPTIC_NERVE,
  'optic-neuritis': P_OPTIC_NERVE,
  naion: P_OPTIC_NERVE,
  papilledema: P_OPTIC_NERVE,
  'cn3-palsy': O_NEURO,

  // --- formerly 'Orbit & Lacrimal' category ---
  'orbital-cellulitis': O_ORBIT,
  'preseptal-cellulitis': O_ORBIT,
  dacryocystitis: A_LACRIMAL,
  'congenital-nlod': A_LACRIMAL,
  'orbital-blowout-fracture': O_ORBIT,
  'idiopathic-orbital-inflammation': O_ORBIT,
  'lacrimal-gland-tumors': A_LACRIMAL,
  canaliculitis: A_LACRIMAL,
  dacryoadenitis: A_LACRIMAL,

  // --- formerly 'Pediatric & Binocular Vision' category ---
  amblyopia: O_STRAB,
  'accommodative-esotropia': O_STRAB,
  'intermittent-exotropia': O_STRAB,
  retinoblastoma: P_RETINA,
  'congenital-cataract': A_LENS,
  'convergence-insufficiency': O_STRAB,
  'infantile-esotropia': O_STRAB,
  'duane-brown-syndrome': O_STRAB,
  'divergence-insufficiency': O_STRAB,
  'accommodative-dysfunction': O_STRAB,
  presbyopia: O_STRAB,
  'low-vision': { region: 'Other', subRegion: 'Refractive Error' },
  'convergence-excess': O_STRAB,
  'divergence-excess': O_STRAB,
  myopia: O_REFRACTIVE,
  hyperopia: O_REFRACTIVE,
  astigmatism: O_REFRACTIVE,
  'anisometropia-aniseikonia': O_REFRACTIVE,

  // --- formerly 'Ocular Trauma' category ---
  'choroidal-rupture': P_CHOROID,
  'retinal-dialysis': P_RETINA,
  'intraocular-foreign-body': O_TRAUMA,
  'angle-recession-iridodialysis': A_UVEA,
  'traumatic-cataract': A_LENS,
  'thermal-ocular-injury': A_CORNEA,
  'chemical-burns': A_CORNEA,
  'open-globe-injury': O_TRAUMA,
  'traumatic-iritis': A_UVEA,
  'corneal-conjunctival-foreign-body': A_CORNEA,
}

/** Resolves a disease's Anterior/Posterior/Other region + finer sub-region. Every disease id gets
 * a real classification via `DISEASE_REGION_OVERRIDES` (for the mixed categories that needed
 * per-disease judgment) or `DEFAULT_REGION_BY_CATEGORY` (for categories that map cleanly 1:1); the
 * 'Other'/'Systemic Disease with Ocular Manifestations' fallback only fires for a disease added
 * later whose category isn't yet in either table. */
export function getDiseaseRegion(disease: Disease): { region: DiseaseRegion; subRegion: DiseaseSubRegion } {
  return (
    DISEASE_REGION_OVERRIDES[disease.id] ??
    DEFAULT_REGION_BY_CATEGORY[disease.category] ?? { region: 'Other', subRegion: 'Systemic Disease with Ocular Manifestations' }
  )
}

export const REGION_SUB_REGIONS: Record<DiseaseRegion, DiseaseSubRegion[]> = {
  'Anterior Segment': ['Cornea', 'Conjunctiva', 'Sclera', 'Uvea', 'Lens', 'Lacrimal', 'Eyelids'],
  'Posterior Segment': ['Retina', 'Macula', 'Vitreous', 'Choroid', 'Optic Nerve'],
  Other: ['Glaucoma', 'Neuro-Ophthalmology', 'Orbit', 'Strabismus & Binocular Vision', 'Refractive Error', 'Ocular Trauma', 'Systemic Disease with Ocular Manifestations'],
}
