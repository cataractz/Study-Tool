export interface VocabTerm {
  label: string
  keywords: string[]
}

function term(label: string, keywords: string[] = []): VocabTerm {
  return { label, keywords: [label.toLowerCase(), ...keywords.map((k) => k.toLowerCase())] }
}

export const symptomOptions: VocabTerm[] = [
  term('Pain', ['painful', 'ache']),
  term('Photophobia', ['light sensitivity']),
  term('Redness', ['red eye', 'injection', 'hyperemia', 'flush']),
  term('Itching', ['itchy', 'pruritus']),
  term('Discharge', ['purulent', 'mucopurulent', 'watery discharge']),
  term('Tearing', ['epiphora']),
  term('Decreased vision', ['blurred vision', 'vision loss', 'reduced vision', 'blur']),
  term('Fluctuating vision', ['vision fluctuates', 'variable vision']),
  term('Diplopia', ['double vision']),
  term('Floaters', []),
  term('Flashes', ['photopsia']),
  term('Headache', []),
  term('Metamorphopsia', ['distorted vision', 'distortion']),
  term('Foreign body sensation', ['gritty', 'sandy sensation', 'fb sensation']),
]

export const pupilOptions: VocabTerm[] = [
  term('Anisocoria', []),
  term('RAPD', ['relative afferent pupillary defect', 'afferent pupillary defect']),
  term('Irregular pupil', []),
  term('Poor reaction', ['poorly reactive', 'sluggish pupil']),
]

export const anteriorSegmentOptions: VocabTerm[] = [
  term('Corneal opacity', ['scarring', 'scar']),
  term('Corneal infiltrate', ['stromal infiltrate']),
  term('Corneal epithelial defect', ['epithelial defect', 'dendritic']),
  term('Corneal edema', ['stromal edema']),
  term('Keratic precipitates', ['kp']),
  term('Anterior chamber cells', ['ac cells', 'cell and flare']),
  term('Anterior chamber flare', ['flare']),
  term('Hypopyon', []),
  term('Ciliary flush', []),
  term('Conjunctival injection', ['injection']),
  term('Chemosis', []),
  term('Abnormal iris', ['iris atrophy', 'posterior synechiae']),
  term('Lens opacity', ['cataract', 'lens opacification']),
]

export const posteriorSegmentOptions: VocabTerm[] = [
  term('Disc edema', ['optic disc swelling', 'papilledema']),
  term('Increased C/D ratio', ['cupping', 'cup to disc']),
  term('Hemorrhage', ['flame hemorrhage', 'dot blot hemorrhage', 'retinal hemorrhage']),
  term('Drusen', []),
  term('Exudates', ['hard exudates']),
  term('Cotton-wool spots', []),
  term('Macular edema', []),
  term('Retinal tear', []),
  term('Retinal detachment', ['detached retina']),
  term('Vitreous hemorrhage', []),
]

export const visualFieldOptions: VocabTerm[] = [
  term('Central scotoma', []),
  term('Altitudinal defect', []),
  term('Arcuate defect', []),
  term('Nasal step', []),
  term('Bitemporal hemianopia', []),
  term('Homonymous hemianopia', []),
  term('Enlarged blind spot', []),
]

export const otherTestingOptions: VocabTerm[] = [
  term('OCT findings', ['oct']),
  term('Topography findings', ['topography']),
  term('Pachymetry', ['thin cornea', 'thinning']),
  term('Gonioscopy', ['angle']),
  term('Color vision', ['dyschromatopsia']),
  term('Amsler grid', []),
  term('Fluorescein', ['staining']),
  term('Motility findings', ['restricted motility', 'diplopia on gaze']),
]
