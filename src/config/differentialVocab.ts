export interface VocabTerm {
  label: string
  keywords: string[]
  /**
   * Clinical specificity weight, 1-3.
   * 1 = nonspecific / seen across many unrelated conditions (e.g. photophobia, headache)
   * 2 = moderately specific / meaningfully narrows the differential
   * 3 = highly specific or pathognomonic-leaning finding for a small set of conditions
   * Drives both how much a match counts toward the score and whether its absence
   * (when the relevant exam section was actually performed) counts as a pertinent negative.
   */
  weight: number
}

function term(label: string, keywords: string[] = [], weight = 1): VocabTerm {
  return { label, keywords: [label.toLowerCase(), ...keywords.map((k) => k.toLowerCase())], weight }
}

export const symptomOptions: VocabTerm[] = [
  term('Pain', ['painful', 'ache']),
  term('Pain with eye movement', ['pain on eye movement'], 2),
  term('Photophobia', ['light sensitivity']),
  term('Redness', ['red eye', 'injection', 'hyperemia', 'flush']),
  term('Itching', ['itchy', 'pruritus']),
  term('Burning', ['burning sensation']),
  term('Dryness', ['dry eye']),
  term('Discharge', ['purulent', 'mucopurulent', 'watery discharge']),
  term('Crusting/matted lashes', ['crusting', 'matted lashes', 'matted']),
  term('Tearing', ['epiphora']),
  term('Decreased vision', ['vision loss', 'reduced vision', 'poor vision']),
  term('Blurry vision', ['blur', 'blurry', 'blurred vision', 'out of focus']),
  term('Hazy/cloudy vision', ['hazy', 'cloudy vision', 'foggy vision', 'misty vision']),
  term('Sudden vision loss', ['sudden loss of vision', 'acute vision loss'], 2),
  term('Gradual/progressive vision loss', ['gradual vision loss', 'progressive vision loss']),
  term('Peripheral vision loss', ['visual field loss', 'tunnel vision', 'peripheral vision loss'], 2),
  term('Curtain/shadow over vision', ['curtain', 'veil over vision', 'shade descending', 'shadow moving across'], 3),
  term('Fluctuating vision', ['vision fluctuates', 'variable vision']),
  term('Night vision difficulty', ['night blindness', 'nyctalopia'], 2),
  term('Glare/halos around lights', ['glare', 'halos'], 2),
  term('Diplopia', ['double vision'], 2),
  term('Monocular diplopia/ghosting', ['monocular diplopia', 'ghosting'], 2),
  term('Floaters', []),
  term('Flashes', ['photopsia']),
  term('Headache', []),
  term('Nausea/vomiting', ['nausea', 'vomiting']),
  term('Metamorphopsia', ['distorted vision', 'distortion'], 2),
  term('Color desaturation/washed out colors', ['color desaturation', 'desaturation', 'washed out colors'], 2),
  term('Foreign body sensation', ['gritty', 'sandy sensation', 'fb sensation']),
  term('Eyelid swelling', ['lid swelling', 'periorbital swelling', 'lid edema']),
  term('Ptosis (drooping eyelid)', ['ptosis', 'drooping eyelid'], 2),
  term('Eye turn noticed', ['eye turn', 'strabismus', 'crossed eyes', 'wandering eye'], 2),
  term('Eye strain', ['asthenopia', 'eye fatigue']),
]

export const pupilOptions: VocabTerm[] = [
  term('Anisocoria', [], 2),
  term('RAPD', ['relative afferent pupillary defect', 'afferent pupillary defect'], 3),
  term('Irregular pupil', [], 2),
  term('Poor reaction', ['poorly reactive', 'sluggish pupil'], 2),
  term('Miosis', ['constricted pupil', 'small pupil']),
  term('Mydriasis', ['dilated pupil', 'large pupil']),
  term('Light-near dissociation', [], 3),
  term('Tonic pupil', ['adie pupil', 'tonic redilation'], 3),
]

export const anteriorSegmentOptions: VocabTerm[] = [
  term('Corneal opacity', ['scarring', 'scar'], 2),
  term('Corneal infiltrate', ['stromal infiltrate'], 2),
  term('Corneal epithelial defect', ['epithelial defect', 'dendritic'], 3),
  term('Corneal edema', ['stromal edema'], 2),
  term('Corneal neovascularization', ['vascularization', 'pannus'], 2),
  term('Corneal thinning/ectasia', ['thinning', 'ectasia'], 2),
  term('Punctate epithelial keratopathy', ['punctate epithelial', 'punctate keratopathy']),
  term('Corneal ulcer', ['ulcer'], 3),
  term('Corneal filaments', ['corneal filament'], 2),
  term('Descemet membrane changes', ['descemet'], 2),
  term('Endothelial guttae', ['guttae', 'guttata', 'endothelial'], 3),
  term('Band keratopathy', ['band keratopathy', 'calcific plaque'], 3),
  term('Pterygium/pinguecula', ['pterygium', 'pinguecula'], 2),
  term('Corneal foreign body', ['foreign body', 'rust ring'], 2),
  term('Keratic precipitates', ['kp'], 3),
  term('Anterior chamber cells', ['ac cells', 'cell and flare'], 3),
  term('Anterior chamber flare', ['flare'], 3),
  term('Shallow anterior chamber', ['shallow anterior chamber', 'shallow ac'], 2),
  term('Deep anterior chamber', ['deep anterior chamber'], 2),
  term('Hypopyon', [], 3),
  term('Hyphema', [], 3),
  term('Ciliary flush', [], 2),
  term('Conjunctival injection', ['injection']),
  term('Chemosis', []),
  term('Follicles', ['follicular reaction', 'follicles']),
  term('Papillae', ['papillae', 'papillary reaction', 'giant papillae', 'cobblestone']),
  term('Pseudomembrane', ['pseudomembrane', 'membrane'], 2),
  term('Symblepharon', [], 3),
  term('Abnormal iris', ['iris atrophy', 'posterior synechiae'], 2),
  term('Iris nodules', ['iris nodule', 'koeppe', 'busacca'], 3),
  term('Iris/angle neovascularization', ['rubeosis', 'iris neovascularization', 'nvi'], 3),
  term('Lens opacity', ['cataract', 'lens opacification']),
  term('Lens subluxation/dislocation', ['subluxation', 'dislocated lens', 'ectopia lentis'], 3),
  term('Lid retraction/lagophthalmos', ['lid retraction', 'lagophthalmos'], 2),
  term('Trichiasis/distichiasis', ['trichiasis', 'distichiasis'], 2),
  term('Proptosis', ['exophthalmos'], 3),
  term('Vesicular/dermatomal rash', ['vesicular rash', 'dermatomal'], 3),
]

export const posteriorSegmentOptions: VocabTerm[] = [
  term('Disc edema', ['optic disc swelling', 'papilledema'], 3),
  term('Disc pallor/atrophy', ['pallor', 'optic atrophy'], 2),
  term('Disc hemorrhage', ['disc hemorrhage', 'peripapillary hemorrhage'], 2),
  term('Increased C/D ratio', ['cupping', 'cup to disc'], 2),
  term('Hemorrhage', ['flame hemorrhage', 'dot blot hemorrhage', 'retinal hemorrhage']),
  term('Microaneurysms', ['microaneurysm'], 2),
  term('Venous beading', [], 2),
  term('Retinal/disc neovascularization', ['neovascularization', 'nvd', 'nve'], 3),
  term('Drusen', [], 2),
  term('Exudates', ['hard exudates']),
  term('Cotton-wool spots', [], 2),
  term('Roth spots', ['roth spot'], 3),
  term('Macular edema', []),
  term('Macular hole', [], 3),
  term('Epiretinal membrane', ['epiretinal membrane', 'macular pucker'], 2),
  term('Subretinal fluid', [], 2),
  term('Retinal/chorioretinal scar or atrophy', ['chorioretinal scar', 'chorioretinitis', 'chorioretinal atrophy'], 2),
  term('Choroidal nevus/mass', ['choroidal nevus', 'choroidal mass', 'pigmented lesion'], 2),
  term('Pigmentary changes (bone spicule)', ['bone-spicule', 'bone spicule', 'pigmentary retinopathy'], 3),
  term('Lattice degeneration', [], 2),
  term('Retinoschisis', [], 2),
  term('Retinal tear', [], 3),
  term('Retinal detachment', ['detached retina'], 3),
  term('Vitreous hemorrhage', [], 2),
  term('Vitreous cells/haze', ['vitreous cell', 'vitritis', 'vitreous haze'], 2),
  term('Posterior vitreous detachment', ['pvd', 'weiss ring']),
]

export const visualFieldOptions: VocabTerm[] = [
  term('Central scotoma', [], 2),
  term('Paracentral scotoma', [], 2),
  term('Cecocentral scotoma', [], 3),
  term('Altitudinal defect', [], 3),
  term('Arcuate defect', [], 2),
  term('Nasal step', [], 2),
  term('Generalized/diffuse constriction', ['generalized depression', 'diffuse field loss', 'constricted field', 'tunnel vision']),
  term('Bitemporal hemianopia', [], 3),
  term('Homonymous hemianopia', [], 3),
  term('Quadrantanopia', ['quadrantanopsia'], 2),
  term('Enlarged blind spot', [], 2),
]

export const binocularVisionOptions: VocabTerm[] = [
  term('Receded near point of convergence', ['receded near point', 'npc'], 2),
  term('Reduced positive fusional vergence', ['reduced positive fusional vergence'], 2),
  term('Reduced negative fusional vergence', ['reduced negative fusional vergence'], 2),
  term('Exophoria greater at near than distance', ['near exophoria', 'exophoria at near'], 2),
  term('Esophoria greater at near than distance', ['esophoria'], 2),
  term('Exodeviation greater at distance than near', ['greater at distance'], 2),
  term('Esodeviation greater at distance than near', ['greater at distance'], 2),
  term('High AC/A ratio', ['high ac/a'], 2),
  term('Fails Sheard\'s criterion', ['sheard'], 2),
  term('Reduced stereoacuity', ['reduced stereo']),
  term('Reduced amplitude of accommodation', ['amplitude of accommodation']),
  term(
    'Near angle increases with +3.00 lens/patch test (pseudo pattern)',
    ['+3.00 d lens', 'patch test', 'prolonged monocular occlusion'],
    3,
  ),
]

export const otherTestingOptions: VocabTerm[] = [
  term('OCT findings', ['oct']),
  term('Topography findings', ['topography'], 2),
  term('Pachymetry', ['thin cornea', 'thinning'], 2),
  term('Gonioscopy', ['angle'], 2),
  term('B-scan ultrasound', ['b-scan', 'ultrasound'], 2),
  term('Fluorescein angiography', ['fluorescein angiography', 'fa pattern'], 2),
  term('Electroretinogram/EOG', ['electroretinogram', 'erg', 'eog'], 2),
  term('Visual evoked potential', ['visual evoked potential', 'vep'], 2),
  term('Color vision', ['dyschromatopsia'], 2),
  term('Amsler grid', []),
  term('Fluorescein staining', ['staining']),
  term('Schirmer test', ['schirmer'], 2),
  term('Tear breakup time', ['tear breakup time', 'tbut']),
  term('Motility findings', ['restricted motility', 'diplopia on gaze'], 2),
  term('Cover test findings', ['cover test']),
  term('Forced duction test', ['forced duction'], 3),
]
