import type { Disease } from '../../types/disease'

export const corneaDiseases: Disease[] = [
  {
    id: 'keratoconus',
    name: 'Keratoconus',
    category: 'Cornea',
    definition:
      'A progressive, non-inflammatory corneal ectasia characterized by localized thinning and cone-shaped protrusion of the cornea, leading to irregular astigmatism and reduced vision.',
    affectedStructure: 'Corneal stroma (paracentral/inferior thinning), Bowman layer disruption',
    pathologicalProcess:
      'Progressive biomechanical weakening of the corneal stroma from collagen fibril disorganization and reduced cross-linking, allowing outward bulging under normal IOP.',
    epidemiology: {
      typicalAge: 'Onset in the teens to early 20s, progression typically stabilizes by the 30s-40s',
      sexDistribution: 'Slight male predominance in most population studies',
      prevalence: 'Approximately 1 in 375 to 1 in 2,000 depending on population and diagnostic criteria',
      importantPopulations: 'Down syndrome, atopy, and populations with high rates of eye rubbing',
    },
    riskFactors: [
      { label: 'Chronic eye rubbing', tier: 'major' },
      { label: 'Family history of keratoconus', tier: 'major' },
      { label: 'Atopy / allergic eye disease', tier: 'moderate' },
      { label: 'Down syndrome', tier: 'moderate' },
      { label: 'Floppy eyelid syndrome / OSA', tier: 'moderate' },
      { label: 'Connective tissue disease (Ehlers-Danlos, Marfan)', tier: 'associated' },
      { label: 'Leber congenital amaurosis', tier: 'associated' },
    ],
    pathophysiology: [
      'Chronic mechanical trauma (eye rubbing) and/or genetic predisposition → increased proteolytic enzyme activity and decreased protease inhibitors in the stroma',
      'Progressive degradation and disorganization of collagen fibrils and loss of stromal cross-linking',
      'Focal stromal thinning, typically inferotemporal or central',
      'Biomechanical instability → outward cone-shaped protrusion',
      'Irregular astigmatism, myopia, and higher-order aberrations → decreased and fluctuating vision',
    ],
    symptoms: {
      common: ['Progressive blurred/distorted vision', 'Frequent changes in glasses prescription', 'Monocular diplopia or ghosting', 'Glare and halos, especially at night'],
      lessCommon: ['Sudden painful loss of vision (acute hydrops) from Descemet membrane rupture'],
      importantNegatives: ['Typically painless outside of acute hydrops', 'No significant redness in uncomplicated disease'],
      typicalProgression: 'Slowly progressive irregular astigmatism over years, often accelerating during puberty, with stabilization common by the 3rd-4th decade.',
    },
    signs: [
      { area: 'External', finding: 'Munson sign (V-shaped conjunctival bulge on downgaze) in advanced disease' },
      { area: 'Slit Lamp', finding: "Vogt striae (fine vertical stress lines in deep stroma), Fleischer ring (iron deposition at cone base)" },
      { area: 'Cornea', finding: 'Stromal thinning at the cone apex, corneal scarring in advanced cases, prominent corneal nerves' },
      { area: 'Other', finding: 'Scissoring reflex on retinoscopy, irregular mires on keratometry, "oil droplet" sign on distant direct ophthalmoscopy' },
    ],
    differentialDiagnosis: [
      { disease: 'Pellucid marginal degeneration', whySimilar: 'Also causes inferior corneal thinning and irregular astigmatism', keyDistinguisher: 'Band of thinning is inferior and more peripheral with a "crab-claw" topographic pattern; cornea is thinnest below the visual axis' },
      { disease: 'Post-refractive surgery ectasia', whySimilar: 'Progressive corneal steepening and thinning', keyDistinguisher: 'History of LASIK/PRK; topographic pattern often central over the ablation zone' },
      { disease: 'Keratoglobus', whySimilar: 'Generalized corneal thinning and protrusion', keyDistinguisher: 'Diffuse (not focal) thinning across the entire cornea, higher risk of rupture with minor trauma' },
    ],
    diagnosticTesting: [
      { name: 'Corneal topography', whyOrdered: 'Primary diagnostic and monitoring tool', expectedFinding: 'Inferior steepening, asymmetric bowtie pattern, increased corneal astigmatism', contribution: 'Confirms diagnosis and quantifies severity/progression' },
      { name: 'Corneal tomography (Scheimpflug/Pentacam)', whyOrdered: 'Evaluates posterior corneal elevation and pachymetry map', expectedFinding: 'Posterior elevation preceding anterior changes, focal thinning', contribution: 'Detects subclinical/early keratoconus before topography changes' },
      { name: 'Pachymetry', whyOrdered: 'Assess corneal thickness and monitor thinning', expectedFinding: 'Reduced central/paracentral thickness', contribution: 'Tracks progression and determines crosslinking eligibility' },
    ],
    diagnosis: {
      criteria: 'Combination of clinical slit lamp signs plus characteristic topographic/tomographic findings (inferior steepening, posterior elevation, thinning)',
      confirmation: 'Diagnosis confirmed with corneal tomography demonstrating asymmetric inferior steepening and progressive thinning, often before clinical signs are visible.',
      classification: 'Amsler-Krumeich staging (I-IV) based on refractive error, keratometry, pachymetry, and presence of scarring',
    },
    management: [
      { category: 'Observation', detail: 'Mild, non-progressive cases: monitor with serial topography every 6-12 months' },
      { category: 'First-line treatment', detail: 'Glasses or soft contact lenses for mild irregular astigmatism; corneal collagen cross-linking (CXL) for documented progression' },
      { category: 'Second-line treatment', detail: 'Rigid gas permeable (RGP) or scleral contact lenses for moderate irregular astigmatism not correctable with glasses' },
      { category: 'Advanced treatment', detail: 'Intrastromal corneal ring segments (ICRS) for select cases to reduce irregular astigmatism' },
      { category: 'Referral', detail: 'Refer to corneal specialist for CXL candidacy, ICRS, or if considering keratoplasty' },
      { category: 'Emergency management', detail: 'Acute hydrops: cycloplegia, hypertonic saline, bandage contact lens, and urgent corneal specialist referral' },
    ],
    managementProtocol: {
      workup: [
        'Baseline corneal topography/tomography (Scheimpflug) to document severity and establish a comparison point for future progression',
        'Pachymetry to confirm adequate stromal thickness (minimum ~400 microns) if crosslinking is being considered',
        'Manifest refraction and best corrected visual acuity to quantify functional impact',
        'Slit lamp exam for Vogt striae, Fleischer ring, and scarring to stage disease severity (Amsler-Krumeich)',
      ],
      initialTreatment:
        'Non-progressive mild-to-moderate cases are corrected with glasses or soft/RGP/scleral contact lenses; documented progression is treated with corneal collagen cross-linking (CXL) to halt further ectasia, which does not itself improve vision.',
      followUpSchedule:
        'Serial topography every 6-12 months while stable; every 3-6 months in younger patients or those with recent progression. After CXL, recheck at 1 week, 1 month, 3 months, and 6 months to monitor epithelial healing, haze, and stabilization of keratometry.',
      escalationCriteria: [
        'Increase in Kmax of ≥1.00 D over a 12-month period on serial topography/tomography',
        '≥1.00 D increase in manifest cylinder or ≥0.75 D increase in mean K (Kmean) over the same interval',
        'Progressive thinning (e.g., ≥2% decrease in central corneal thickness) on serial pachymetry',
        'Contact lens intolerance or inability to achieve functional vision with rigid/scleral lenses despite proper fitting',
      ],
      referralCriteria: [
        'Documented progression meeting CXL criteria -> corneal specialist for crosslinking',
        'Corneal scarring or vision not correctable with contact lenses -> corneal specialist for possible ICRS or keratoplasty candidacy',
        'Acute hydrops (sudden pain and stromal edema from Descemet rupture) -> urgent same-day corneal specialist referral',
      ],
      cycloplegicConsiderations:
        'In acute hydrops, a cycloplegic agent (e.g., cyclopentolate or atropine) is used for comfort from ciliary spasm while hypertonic saline and bandage lens therapy allow the Descemet break to reseal.',
      complications: [
        'Acute hydrops (Descemet membrane rupture with acute stromal edema)',
        'Central/paracentral corneal scarring reducing best corrected vision',
        'Progressive irregular astigmatism limiting contact lens tolerance',
        'CXL-related: transient haze, delayed epithelial healing, rare infectious keratitis',
        'Need for keratoplasty (PK or DALK) in advanced, scarred, or CXL-refractory disease',
      ],
      monitoringParameters: [
        'Maximum keratometry (Kmax) and mean K on serial topography/tomography',
        'Central/paracentral pachymetry',
        'Manifest refraction and best corrected visual acuity',
        'Corneal clarity/scarring on slit lamp exam',
      ],
      relatedDrugIds: ['cyclopentolate'],
      relatedCalculatorIds: ['keratometry'],
      relatedExamTechniqueIds: ['corneal-topography', 'corneal-pachymetry'],
    },
    followUp: {
      typical: 'Every 6-12 months with topography while stable; more frequently (every 3-6 months) if progressing or young',
      monitor: 'Keratometry, topography/tomography, pachymetry, and best corrected visual acuity',
      progression: 'Progression defined as an increase in maximum keratometry, increased astigmatism, or corneal thinning over serial visits',
      shortenWhen: 'Younger patients, documented progression, or post-CXL follow-up',
    },
    prognosis: {
      typicalCourse: 'Slowly progressive over years to decades with frequent stabilization in the 30s-40s',
      progressionRisk: 'Higher risk of progression in younger patients and those who continue eye rubbing',
      complications: 'Acute hydrops, corneal scarring, need for keratoplasty in advanced/scarred cases',
      visualPrognosis: 'Good with contact lens correction in most patients; approximately 10-20% eventually require corneal transplantation',
    },
    clinicalPearls: [
      'Eye rubbing cessation is one of the most important counseling points, as mechanical trauma drives progression.',
      'Scissoring reflex on retinoscopy is a classic early clinical clue.',
      "Posterior corneal elevation on tomography often precedes anterior topographic changes — key for early detection.",
      'CXL halts progression but does not reverse existing irregular astigmatism.',
    ],
    highYield: [
      'Classic triad: Vogt striae, Fleischer ring, Munson sign',
      'Scissoring reflex on retinoscopy is classic',
      'Associations: Down syndrome, atopy, eye rubbing, floppy eyelid syndrome, connective tissue disorders',
      'CXL is first-line for documented progression; does not improve vision, only halts progression',
      'Acute hydrops = Descemet membrane rupture → sudden stromal edema, treated with hypertonic saline and cycloplegia',
    ],
  },
  {
    id: 'bacterial-keratitis',
    name: 'Bacterial Keratitis',
    aliases: ['Corneal ulcer', 'Microbial keratitis'],
    category: 'Cornea',
    definition:
      'An infection of the corneal stroma caused by bacterial pathogens, typically presenting as a painful, vision-threatening corneal ulcer with an epithelial defect and underlying stromal infiltrate.',
    affectedStructure: 'Corneal epithelium and stroma',
    pathologicalProcess:
      'Breach of the corneal epithelial barrier allows bacterial invasion of the stroma, triggering an intense inflammatory and suppurative response that can cause rapid stromal necrosis.',
    epidemiology: {
      typicalAge: 'Any age; higher risk in contact lens wearers (young adults) and those with ocular surface disease (older adults)',
      importantPopulations: 'Contact lens wearers (especially overnight wear), post-trauma, post-surgical patients',
    },
    riskFactors: [
      { label: 'Contact lens wear (especially extended/overnight wear)', tier: 'major' },
      { label: 'Corneal trauma or foreign body', tier: 'major' },
      { label: 'Ocular surface disease (dry eye, exposure, neurotrophic cornea)', tier: 'moderate' },
      { label: 'Prior corneal surgery', tier: 'moderate' },
      { label: 'Chronic topical steroid use', tier: 'moderate' },
      { label: 'Lid abnormalities (entropion, trichiasis)', tier: 'associated' },
      { label: 'Immunosuppression', tier: 'associated' },
    ],
    pathophysiology: [
      'Epithelial breach (trauma, contact lens hypoxia/biofilm, surface disease) removes the protective barrier',
      'Bacterial adherence and invasion of exposed stroma (common pathogens: Pseudomonas, Staphylococcus, Streptococcus)',
      'Bacterial toxins and proteases + host inflammatory response cause stromal necrosis',
      'Progressive stromal infiltrate and thinning',
      'Risk of perforation if untreated; scarring after healing',
    ],
    symptoms: {
      common: ['Pain', 'Photophobia', 'Redness', 'Decreased vision', 'Discharge', 'Foreign body sensation'],
      typicalProgression: 'Rapid onset and progression over 24-48 hours, particularly with Pseudomonas.',
    },
    signs: [
      { area: 'External', finding: 'Lid edema, purulent discharge' },
      { area: 'Cornea', finding: 'Focal white/gray stromal infiltrate with overlying epithelial defect, stromal edema, possible corneal thinning' },
      { area: 'Anterior Chamber', finding: 'Cells and flare, hypopyon in severe cases' },
      { area: 'Slit Lamp', finding: 'Ciliary flush, epithelial defect staining with fluorescein overlying infiltrate' },
    ],
    differentialDiagnosis: [
      { disease: 'HSV keratitis', whySimilar: 'Corneal infiltrate with pain and redness', keyDistinguisher: 'Dendritic epithelial pattern with terminal bulbs and decreased corneal sensation' },
      { disease: 'Fungal keratitis', whySimilar: 'Corneal infiltrate, often after trauma', keyDistinguisher: 'History of vegetable matter trauma, feathery infiltrate margins, satellite lesions, slower onset' },
      { disease: 'Acanthamoeba keratitis', whySimilar: 'Painful corneal infiltrate in contact lens wearers', keyDistinguisher: 'Pain out of proportion to exam findings, ring infiltrate, radial perineuritis, poor response to antibiotics' },
      { disease: 'Sterile contact lens infiltrate', whySimilar: 'Contact lens wearer with corneal infiltrate', keyDistinguisher: 'Usually smaller, peripheral, minimal/no epithelial defect, less pain' },
    ],
    diagnosticTesting: [
      { name: 'Corneal culture and Gram stain', whyOrdered: 'Identify causative organism, especially for sight-threatening or central ulcers', expectedFinding: 'Positive growth guiding antibiotic sensitivity', contribution: 'Tailors antimicrobial therapy; recommended for infiltrates >1-2mm, central, or not responding to empiric therapy' },
      { name: 'Slit lamp examination with fluorescein', whyOrdered: 'Characterize the epithelial defect and infiltrate', expectedFinding: 'Staining epithelial defect overlying stromal infiltrate', contribution: 'Establishes diagnosis and size for monitoring' },
    ],
    diagnosis: {
      confirmation: 'Clinical diagnosis based on characteristic corneal infiltrate with epithelial defect; confirmed and tailored with culture in significant or non-responding cases.',
    },
    management: [
      { category: 'First-line treatment', detail: 'Empiric broad-spectrum topical fluoroquinolone (e.g., moxifloxacin) for small/peripheral ulcers; fortified antibiotics (vancomycin + tobramycin/ceftazidime) for large, central, or severe ulcers' },
      { category: 'Second-line treatment', detail: 'Adjust therapy based on culture and sensitivity results; consider adjunctive cycloplegia for comfort' },
      { category: 'Referral', detail: 'Refer to cornea specialist for central, large, or vision-threatening ulcers, or those not responding to therapy' },
      { category: 'Emergency management', detail: 'Impending or actual perforation requires urgent surgical referral (tissue adhesive, bandage lens, or emergency keratoplasty)' },
    ],
    managementProtocol: {
      workup: [
        'Slit lamp measurement and photo-documentation of infiltrate size, depth, and epithelial defect dimensions to establish a treatment-response baseline',
        'Corneal culture and Gram stain before starting antibiotics for infiltrates >1-2mm, central, or with significant AC reaction',
        'Anterior chamber grading for cell/flare and hypopyon',
        'Contact lens and case culture if lens-related',
      ],
      initialTreatment:
        'Empiric broad-spectrum topical fluoroquinolone monotherapy (e.g., moxifloxacin) for small, peripheral, non-severe ulcers; fortified antibiotics (e.g., fortified vancomycin plus a fortified aminoglycoside or fortified ceftazidime) dosed hourly around the clock for large, central, or vision-threatening ulcers, narrowed once culture and sensitivity results return.',
      followUpSchedule:
        'Daily in-person follow-up until the infiltrate and epithelial defect are clearly improving, then spaced to every 2-3 days, then weekly as healing continues; therapy is tapered in frequency (not stopped abruptly) as the eye quiets.',
      escalationCriteria: [
        'Enlarging infiltrate size or depth, or new/worsening hypopyon, after 24-48 hours of appropriate therapy',
        'No improvement or worsening pain/AC reaction despite compliant fortified antibiotic dosing',
        'Progressive stromal thinning or impending perforation on slit lamp exam',
      ],
      referralCriteria: [
        'Central, large (>1-2mm), or vision-threatening ulcer -> cornea specialist',
        'No response to appropriate empiric or culture-directed therapy -> cornea specialist',
        'Impending or actual corneal perforation -> urgent/emergent surgical referral',
      ],
      cycloplegicConsiderations:
        'A cycloplegic (e.g., cyclopentolate) is used adjunctively for ciliary spasm-related pain and photophobia; it does not treat the infection itself.',
      complications: [
        'Corneal scarring and irregular astigmatism',
        'Progressive stromal melt and perforation, particularly with Pseudomonas',
        'Endophthalmitis if perforation or intraocular spread occurs',
        'Need for therapeutic or optical keratoplasty',
      ],
      monitoringParameters: [
        'Infiltrate and epithelial defect size (measured and photo-documented at each visit)',
        'Anterior chamber cell/flare and hypopyon',
        'Corneal thickness/depth of involvement for perforation risk',
        'Pain level and symptom trajectory',
      ],
      relatedDrugIds: ['moxifloxacin', 'vancomycin-ophthalmic-fortified', 'cefazolin-ophthalmic-fortified', 'cyclopentolate'],
      relatedCalculatorIds: ['dilution-calculator'],
      relatedExamTechniqueIds: ['corneal-culture-and-scraping', 'fluorescein-corneal-staining'],
    },
    followUp: {
      typical: 'Daily follow-up initially until improvement is clearly demonstrated, then spaced out',
      monitor: 'Infiltrate size, epithelial defect size, anterior chamber reaction, pain level',
      progression: 'Worsening infiltrate size, increasing AC reaction, or new hypopyon indicates treatment failure',
      shortenWhen: 'Central location, large size, poor initial response, or immunocompromised host',
    },
    prognosis: {
      typicalCourse: 'Resolves with appropriate antibiotic therapy over 1-3 weeks depending on severity',
      progressionRisk: 'Risk of progression to perforation if inadequately treated, especially with Pseudomonas',
      complications: 'Corneal scarring, astigmatism, perforation, endophthalmitis, need for keratoplasty',
      visualPrognosis: 'Good if treated early and peripheral; guarded if central and scarring occurs',
    },
    clinicalPearls: [
      'Never patch a contact lens-related corneal ulcer — patching promotes bacterial proliferation, especially Pseudomonas.',
      'Discontinue contact lens wear immediately and do not resume until fully resolved.',
      'Fortified antibiotics are compounded and require refrigeration and frequent dosing (often hourly).',
      'Topical steroids should generally be avoided until the infection is controlled.',
    ],
    highYield: [
      'Pseudomonas aeruginosa is classically associated with contact lens-related keratitis and can cause rapid, aggressive stromal melting',
      'Never patch a suspected infectious corneal ulcer',
      'Culture indications: central location, >1-2mm size, significant AC reaction, or treatment failure',
      'Fluoroquinolone monotherapy is standard first-line for most community-acquired ulcers',
    ],
  },
  {
    id: 'hsv-keratitis',
    name: 'HSV Keratitis',
    aliases: ['Herpes simplex keratitis', 'Dendritic keratitis'],
    category: 'Cornea',
    definition:
      'A recurrent viral infection of the cornea caused by herpes simplex virus (typically HSV-1), classically presenting with a dendritic epithelial lesion, and capable of stromal and endothelial involvement.',
    affectedStructure: 'Corneal epithelium (epithelial keratitis), stroma (stromal keratitis), and endothelium (endotheliitis)',
    pathologicalProcess:
      'Reactivation of latent HSV in the trigeminal ganglion travels along corneal nerves to cause epithelial cell lysis; recurrent stromal disease is largely immune-mediated.',
    epidemiology: {
      typicalAge: 'Any age; most common infectious cause of corneal blindness in developed countries',
      prevalence: 'Extremely common; the majority of adults have been exposed to HSV-1',
    },
    riskFactors: [
      { label: 'Prior episode of HSV keratitis (recurrence risk)', tier: 'major' },
      { label: 'Immunosuppression', tier: 'moderate' },
      { label: 'UV light exposure', tier: 'moderate' },
      { label: 'Fever, stress, trauma (triggers reactivation)', tier: 'associated' },
      { label: 'Topical steroid use without antiviral coverage', tier: 'associated' },
    ],
    pathophysiology: [
      'Primary infection (often subclinical) establishes latency in the trigeminal ganglion',
      'Reactivation triggered by stress, UV light, fever, or immunosuppression',
      'Viral replication along corneal nerve axons and within epithelial cells',
      'Epithelial cell lysis produces the characteristic dendritic ulcer',
      'Recurrent episodes can progress to immune-mediated stromal keratitis and endotheliitis, with risk of scarring and neurotrophic changes',
    ],
    symptoms: {
      common: ['Foreign body sensation', 'Redness', 'Tearing', 'Photophobia', 'Blurred vision'],
      importantNegatives: ['Decreased corneal sensation is a classic finding that reduces pain perception relative to lesion severity'],
      typicalProgression: 'Recurrent episodes over years; each recurrence increases risk of stromal scarring and neurotrophic keratopathy.',
    },
    signs: [
      { area: 'Cornea', finding: 'Dendritic epithelial ulcer with terminal bulbs (epithelial disease); stromal haze, edema, or necrotizing keratitis (stromal disease); decreased corneal sensation' },
      { area: 'Slit Lamp', finding: 'Fine dendritic branching pattern that stains with fluorescein (best seen) and rose bengal (stains edges)' },
      { area: 'Anterior Chamber', finding: 'Cells and flare may be present with stromal keratitis or associated iritis' },
    ],
    differentialDiagnosis: [
      { disease: 'Bacterial keratitis', whySimilar: 'Painful red eye with corneal involvement', keyDistinguisher: 'Bacterial ulcers show stromal infiltrate with normal corneal sensation, not a dendritic pattern' },
      { disease: 'Herpes zoster ophthalmicus (HZO)', whySimilar: 'Can also cause dendritic-like (pseudodendrite) lesions', keyDistinguisher: 'Vesicular rash in V1 distribution, Hutchinson sign; pseudodendrites lack true terminal bulbs' },
      { disease: 'Recurrent corneal erosion', whySimilar: 'Foreign body sensation and epithelial irregularity', keyDistinguisher: 'History of prior corneal trauma, pain often on waking, no dendritic branching pattern' },
    ],
    diagnosticTesting: [
      { name: 'Corneal sensation testing', whyOrdered: 'Assess for characteristic hypoesthesia', expectedFinding: 'Reduced corneal sensitivity on the affected side', contribution: 'Supports HSV diagnosis and helps distinguish from other keratitides' },
      { name: 'Fluorescein and rose bengal staining', whyOrdered: 'Highlight the dendritic pattern', expectedFinding: 'Dendritic ulcer with terminal bulbs staining centrally with fluorescein and at the edges with rose bengal', contribution: 'Confirms clinical diagnosis of epithelial HSV keratitis' },
      { name: 'PCR of corneal swab', whyOrdered: 'Confirm diagnosis in atypical or refractory cases', expectedFinding: 'Positive for HSV DNA', contribution: 'Useful when clinical picture is uncertain' },
    ],
    diagnosis: {
      confirmation: 'Primarily a clinical diagnosis based on the characteristic dendritic epithelial lesion with terminal bulbs and reduced corneal sensation; PCR reserved for atypical cases.',
      classification: 'Classified as epithelial (dendritic/geographic), stromal (necrotizing or immune), or endothelial (disciform) keratitis',
    },
    management: [
      { category: 'First-line treatment', detail: 'Epithelial disease: topical or oral antiviral (e.g., oral acyclovir/valacyclovir, or topical ganciclovir gel); avoid topical steroids' },
      { category: 'Second-line treatment', detail: 'Stromal keratitis: topical corticosteroid combined with antiviral prophylaxis under specialist guidance' },
      { category: 'Advanced treatment', detail: 'Long-term oral antiviral prophylaxis for patients with frequent recurrences' },
      { category: 'Referral', detail: 'Refer to cornea specialist for stromal or endothelial involvement, or recurrent/refractory disease' },
    ],
    managementProtocol: {
      workup: [
        'Corneal sensation testing to confirm characteristic hypoesthesia and support the clinical diagnosis',
        'Fluorescein staining to characterize the dendritic pattern and rule out a geographic ulcer',
        'Baseline IOP before starting any topical steroid for stromal disease',
        'History of recurrence frequency to guide candidacy for long-term prophylaxis',
      ],
      initialTreatment:
        'Epithelial (dendritic) disease is treated with a topical antiviral (e.g., ganciclovir gel) or oral antiviral (acyclovir/valacyclovir) without topical steroids. Stromal keratitis is treated with a topical corticosteroid combined with oral antiviral prophylaxis, initiated and tapered under specialist guidance.',
      followUpSchedule:
        'Epithelial disease: recheck within 3-7 days to confirm healing. Stromal disease on steroids: recheck every 1-2 weeks initially, with IOP checks at each visit during the steroid taper, which is extended over weeks to months.',
      escalationCriteria: [
        'Epithelial defect not improving or enlarging after several days of appropriate antiviral therapy',
        'Worsening stromal haze, edema, or new AC reaction while on treatment',
        'IOP rise >10 mmHg from baseline during steroid taper, suggesting steroid response',
      ],
      referralCriteria: [
        'Any stromal or endothelial (disciform) involvement -> cornea specialist',
        'Recurrent (≥2 episodes) or refractory disease -> cornea specialist for consideration of long-term oral prophylaxis',
        'Diagnostic uncertainty or poor response to first-line antivirals -> cornea specialist',
      ],
      steroidConsiderations:
        'Topical corticosteroid (e.g., prednisolone acetate) is used only for stromal or endothelial disease, always paired with oral antiviral coverage, and tapered slowly over weeks; check IOP at every visit given steroid-response risk. Never use a topical steroid alone on active epithelial (dendritic) disease.',
      complications: [
        'Stromal scarring and irregular astigmatism',
        'Neurotrophic keratopathy from chronic corneal hypoesthesia',
        'Steroid-induced glaucoma and cataract with prolonged stromal-disease treatment',
        'Secondary bacterial infection of an epithelial defect',
        'Corneal blindness with repeated recurrences',
      ],
      monitoringParameters: [
        'Epithelial healing / corneal clarity',
        'Corneal sensation',
        'IOP at each visit when on topical steroid',
        'Recurrence frequency over time',
      ],
      relatedDrugIds: ['ganciclovir-gel', 'trifluridine', 'acyclovir-oral', 'valacyclovir-oral', 'prednisolone-acetate', 'cyclopentolate'],
      relatedExamTechniqueIds: ['corneal-sensation-testing', 'fluorescein-corneal-staining'],
    },
    followUp: {
      typical: 'Within 1 week for epithelial disease to confirm resolution; closer monitoring for stromal disease on steroids',
      monitor: 'Epithelial healing, corneal clarity, IOP if on steroids, signs of secondary bacterial infection',
      progression: 'Worsening stromal haze, increasing AC reaction, or rising IOP on steroid therapy',
    },
    prognosis: {
      typicalCourse: 'Epithelial disease typically resolves within 1-2 weeks with antivirals',
      progressionRisk: 'High recurrence rate; each recurrence increases risk of stromal scarring',
      complications: 'Stromal scarring, neurotrophic keratopathy, secondary glaucoma, corneal blindness with repeated episodes',
      visualPrognosis: 'Excellent for isolated epithelial disease; guarded with recurrent stromal involvement',
    },
    clinicalPearls: [
      'Never prescribe topical steroids for active epithelial (dendritic) HSV keratitis — this can worsen the infection.',
      'Reduced corneal sensation on the affected eye is a classic and useful bedside clue.',
      'Oral antivirals are preferred over topical in many cases due to better compliance and corneal surface tolerance.',
      'The Herpetic Eye Disease Study (HEDS) supports long-term oral acyclovir prophylaxis to reduce recurrence.',
    ],
    highYield: [
      'Dendritic ulcer with terminal bulbs = classic HSV epithelial keratitis finding',
      'Decreased corneal sensation is a hallmark clue',
      'Never use topical steroids alone on active epithelial disease',
      'HEDS trial: oral acyclovir prophylaxis reduces recurrence, especially with stromal disease history',
    ],
  },
  {
    id: 'fuchs-endothelial-dystrophy',
    name: 'Fuchs Endothelial Corneal Dystrophy',
    category: 'Cornea',
    definition:
      'A bilateral, progressive, inherited corneal endothelial dystrophy characterized by accelerated endothelial cell loss and excrescences (guttae), leading to corneal edema and vision loss.',
    affectedStructure: 'Corneal endothelium and Descemet membrane',
    pathologicalProcess:
      'Progressive loss and dysfunction of endothelial cells reduces the pump function needed to keep the cornea deturgesced, leading to stromal and epithelial edema.',
    epidemiology: {
      typicalAge: 'Onset typically in the 50s-60s, though guttae may be visible earlier',
      sexDistribution: 'More common and more severe in women (roughly 2-3:1 female predominance)',
      prevalence: 'One of the most common corneal dystrophies; higher prevalence in individuals of European descent',
    },
    riskFactors: [
      { label: 'Family history / autosomal dominant inheritance', tier: 'major' },
      { label: 'Female sex', tier: 'moderate' },
      { label: 'Increasing age', tier: 'moderate' },
      { label: 'Prior intraocular surgery (accelerates decompensation)', tier: 'associated' },
    ],
    pathophysiology: [
      'Genetic mutations (e.g., COL8A2, TCF4) lead to abnormal endothelial cell metabolism and premature cell death',
      'Progressive endothelial cell loss with formation of collagenous excrescences (guttae) on Descemet membrane',
      'Declining endothelial cell density and pump function below a critical threshold',
      'Stromal edema develops, followed by epithelial/subepithelial edema (bullous keratopathy)',
      'Visual blur, especially on waking, from overnight fluid accumulation',
    ],
    symptoms: {
      common: ['Blurred vision worse in the morning, improving through the day', 'Glare and halos', 'Gradual painless vision decline'],
      lessCommon: ['Pain from ruptured epithelial bullae in advanced bullous keratopathy'],
      typicalProgression: 'Slowly progressive over decades; morning blur becomes more persistent throughout the day as disease advances.',
    },
    signs: [
      { area: 'Cornea', finding: '"Beaten metal" appearance of endothelium on specular reflection from guttae; stromal edema; epithelial/subepithelial bullae in advanced disease' },
      { area: 'Slit Lamp', finding: 'Guttae visible as dark round bodies on specular reflection; increased corneal thickness on pachymetry' },
    ],
    differentialDiagnosis: [
      { disease: 'Pseudophakic bullous keratopathy', whySimilar: 'Corneal edema and bullae', keyDistinguisher: 'History of recent intraocular surgery; guttae may be less prominent or absent pre-operatively' },
      { disease: 'Posterior polymorphous dystrophy', whySimilar: 'Endothelial abnormality', keyDistinguisher: 'Vesicular/band-like endothelial lesions rather than guttae; typically less progressive' },
    ],
    diagnosticTesting: [
      { name: 'Specular microscopy', whyOrdered: 'Quantify endothelial cell density and morphology', expectedFinding: 'Reduced cell count, pleomorphism, polymegathism, guttae', contribution: 'Confirms diagnosis and assesses surgical risk before intraocular surgery' },
      { name: 'Pachymetry', whyOrdered: 'Assess corneal edema severity', expectedFinding: 'Increased central corneal thickness', contribution: 'Tracks progression and helps time surgical intervention' },
    ],
    diagnosis: {
      confirmation: 'Clinical diagnosis based on characteristic guttae on slit lamp exam and specular microscopy, supported by pachymetry showing corneal thickening.',
    },
    management: [
      { category: 'Observation', detail: 'Early guttae without edema: monitor with serial pachymetry and specular microscopy' },
      { category: 'First-line treatment', detail: 'Hypertonic saline drops/ointment and hair dryer technique to reduce morning edema' },
      { category: 'Advanced treatment', detail: 'Endothelial keratoplasty (DMEK or DSAEK) for symptomatic corneal edema affecting vision' },
      { category: 'Referral', detail: 'Refer to cornea specialist when vision-limiting edema develops or before cataract surgery in patients with significant guttae' },
    ],
    managementProtocol: {
      workup: [
        'Specular microscopy to quantify endothelial cell density, pleomorphism, and polymegathism',
        'Pachymetry to establish baseline central corneal thickness and detect subclinical edema',
        'Best corrected visual acuity, including assessment of diurnal variation (morning vs. afternoon)',
        'Pre-cataract-surgery endothelial assessment in any patient with visible guttae, since Fuchs disease raises the risk of postoperative decompensation',
      ],
      initialTreatment:
        'Early disease with guttae but no clinically significant edema is observed. Once morning blur/edema develops, hypertonic saline drops (daytime) and ointment (bedtime) plus a hair dryer (held at arm\'s length, directed at closed lids) are used to osmotically reduce edema. Vision-limiting edema unresponsive to these measures is treated surgically with endothelial keratoplasty (DMEK or DSAEK).',
      followUpSchedule:
        'Annually with pachymetry and specular microscopy while guttae are present without significant edema; every 3-6 months once edema or symptomatic diurnal blur develops; postoperative endothelial keratoplasty patients are followed on a standard graft-monitoring schedule (day 1, week 1, then monthly) with long-term periodic specular microscopy to track graft cell loss.',
      escalationCriteria: [
        'Increasing central corneal thickness on serial pachymetry',
        'Persistent blur that no longer clears through the day, or decreasing best corrected visual acuity',
        'Development of epithelial/subepithelial bullae (bullous keratopathy) with pain from bullae rupture',
      ],
      referralCriteria: [
        'Vision-limiting edema not controlled with hypertonic saline -> cornea specialist for endothelial keratoplasty evaluation',
        'Significant guttae identified before planned cataract surgery -> cornea specialist for combined or staged surgical planning',
        'Painful bullous keratopathy -> cornea specialist',
      ],
      steroidConsiderations:
        'After endothelial keratoplasty, a topical corticosteroid (e.g., loteprednol etabonate or prednisolone acetate) is used long-term at a low maintenance dose to prevent endothelial graft rejection; IOP is checked at each postoperative visit given the risk of steroid-response glaucoma with chronic use.',
      complications: [
        'Bullous keratopathy with recurrent painful epithelial bullae',
        'Recurrent epithelial erosions and secondary microbial keratitis',
        'Accelerated decompensation after intraocular surgery (e.g., cataract surgery)',
        'Endothelial keratoplasty-related graft rejection or failure',
        'Steroid-response IOP elevation with long-term post-keratoplasty steroid use',
      ],
      monitoringParameters: [
        'Endothelial cell density and morphology on specular microscopy',
        'Central corneal thickness on pachymetry',
        'Best corrected visual acuity and diurnal symptom pattern',
        'IOP in patients on chronic post-keratoplasty topical steroid',
      ],
      relatedDrugIds: ['loteprednol-etabonate'],
      relatedExamTechniqueIds: ['corneal-endothelial-specular-microscopy', 'corneal-pachymetry'],
    },
    followUp: {
      typical: 'Annually while mild; more frequently as edema progresses',
      monitor: 'Visual acuity, corneal thickness, endothelial cell count',
      progression: 'Increasing central corneal thickness and decreasing vision, especially persisting later into the day',
    },
    prognosis: {
      typicalCourse: 'Slowly progressive over decades',
      progressionRisk: 'Accelerated by intraocular surgery',
      complications: 'Bullous keratopathy, recurrent epithelial erosions, secondary infection',
      visualPrognosis: 'Excellent after endothelial keratoplasty in appropriately selected patients',
    },
    clinicalPearls: [
      'Ask specifically about morning vs. evening vision — worse on waking is a classic feature.',
      'Always evaluate endothelium carefully before cataract surgery in patients with visible guttae, as it affects surgical planning and consent.',
      'DMEK/DSAEK has largely replaced full-thickness penetrating keratoplasty for isolated endothelial disease.',
    ],
    highYield: [
      '"Beaten metal" appearance = classic guttae description',
      'Vision worse in the morning, improves through the day — classic history',
      'Female predominance, autosomal dominant inheritance',
      'Endothelial keratoplasty (DMEK/DSAEK) is now preferred over full-thickness PKP',
    ],
  },
  {
    id: 'dry-eye-disease',
    name: 'Dry Eye Disease',
    aliases: ['Keratoconjunctivitis sicca'],
    category: 'Cornea',
    definition:
      'A multifactorial disease of the ocular surface characterized by a loss of homeostasis of the tear film, accompanied by ocular symptoms, with tear film instability, hyperosmolarity, and inflammation playing etiological roles.',
    affectedStructure: 'Tear film, lacrimal gland, meibomian glands, ocular surface epithelium',
    pathologicalProcess:
      'Reduced tear production and/or increased tear evaporation leads to tear film hyperosmolarity, which triggers ocular surface inflammation and epithelial damage.',
    epidemiology: {
      typicalAge: 'Increasing prevalence with age',
      sexDistribution: 'More common in women, particularly postmenopausal',
      prevalence: 'One of the most common reasons for eye care visits; prevalence estimates range widely (5-50%) depending on diagnostic criteria',
    },
    riskFactors: [
      { label: 'Increasing age', tier: 'major' },
      { label: 'Female sex / postmenopausal hormonal changes', tier: 'major' },
      { label: 'Meibomian gland dysfunction / blepharitis', tier: 'major' },
      { label: 'Sjögren syndrome and other autoimmune disease', tier: 'moderate' },
      { label: 'Contact lens wear', tier: 'moderate' },
      { label: 'Digital screen use / reduced blink rate', tier: 'moderate' },
      { label: 'Certain medications (antihistamines, antidepressants, isotretinoin)', tier: 'associated' },
      { label: 'Prior refractive surgery (LASIK)', tier: 'associated' },
    ],
    pathophysiology: [
      'Aqueous deficiency (reduced lacrimal secretion) and/or evaporative loss (meibomian gland dysfunction) disrupt normal tear volume/composition',
      'Resulting tear film instability increases tear osmolarity',
      'Hyperosmolar tear film triggers inflammatory cascade (MMP-9 upregulation, cytokine release) at the ocular surface',
      'Inflammation causes epithelial cell damage and goblet cell loss',
      'Further tear film instability creates a self-perpetuating cycle',
    ],
    symptoms: {
      common: ['Burning', 'Foreign body sensation', 'Fluctuating vision', 'Redness', 'Tearing (reflex)'],
      lessCommon: ['Photophobia', 'Contact lens intolerance'],
      importantNegatives: ['Significant pain out of proportion suggests an alternative or complicating diagnosis'],
      typicalProgression: 'Chronic, often fluctuating course; symptoms typically worsen with prolonged visual tasks, low humidity, or wind.',
    },
    signs: [
      { area: 'External', finding: 'Meibomian gland capping/dysfunction, blepharitis, incomplete blink' },
      { area: 'Slit Lamp', finding: 'Reduced tear film breakup time (TBUT), decreased tear meniscus height' },
      { area: 'Cornea', finding: 'Punctate epithelial erosions, especially inferiorly; filaments in severe cases' },
    ],
    differentialDiagnosis: [
      { disease: 'Allergic conjunctivitis', whySimilar: 'Redness, irritation, tearing', keyDistinguisher: 'Prominent itching and papillary reaction; seasonal pattern' },
      { disease: 'Sjögren syndrome (secondary dry eye)', whySimilar: 'Severe aqueous deficient dry eye', keyDistinguisher: 'Associated dry mouth, autoimmune serologies (anti-Ro/La), systemic joint symptoms' },
      { disease: 'Neurotrophic keratopathy', whySimilar: 'Ocular surface irregularity and epitheliopathy', keyDistinguisher: 'Reduced corneal sensation and history of HSV, HZO, or surgery affecting corneal nerves' },
    ],
    diagnosticTesting: [
      { name: 'Tear breakup time (TBUT)', whyOrdered: 'Assess tear film stability', expectedFinding: 'Breakup in less than 10 seconds', contribution: 'Supports evaporative dry eye diagnosis' },
      { name: 'Schirmer test', whyOrdered: 'Quantify aqueous tear production', expectedFinding: 'Less than 10mm wetting in 5 minutes', contribution: 'Supports aqueous-deficient dry eye' },
      { name: 'Corneal/conjunctival staining (fluorescein, lissamine green)', whyOrdered: 'Assess ocular surface damage', expectedFinding: 'Punctate staining, often inferior', contribution: 'Grades disease severity' },
      { name: 'Tear osmolarity testing', whyOrdered: 'Objective marker of dry eye', expectedFinding: 'Elevated and/or asymmetric osmolarity between eyes', contribution: 'Considered a sensitive marker of dry eye disease' },
    ],
    diagnosis: {
      criteria: 'TFOS DEWS II criteria combine symptoms (questionnaire) with at least one positive homeostasis marker (TBUT, osmolarity, or ocular surface staining)',
      confirmation: 'Diagnosis is made by combining symptom questionnaires with objective signs of tear film instability and/or ocular surface damage.',
      classification: 'Classified as aqueous-deficient, evaporative (most common, often from MGD), or mixed',
    },
    management: [
      { category: 'First-line treatment', detail: 'Artificial tears, warm compresses/lid hygiene for MGD, environmental modification' },
      { category: 'Second-line treatment', detail: 'Topical anti-inflammatory agents (cyclosporine, lifitegrast), punctal plugs, topical corticosteroid pulse for flares' },
      { category: 'Advanced treatment', detail: 'Autologous serum tears, scleral lenses, in-office meibomian gland treatments (thermal pulsation, IPL)' },
      { category: 'Referral', detail: 'Refer for suspected underlying autoimmune disease (e.g., Sjögren syndrome) or refractory cases' },
    ],
    managementProtocol: {
      workup: [
        'Symptom questionnaire (e.g., OSDI or SPEED) to quantify baseline symptom severity',
        'Tear breakup time and/or tear osmolarity to establish a homeostasis-marker baseline (per TFOS DEWS II criteria)',
        'Corneal/conjunctival staining (fluorescein and lissamine green) to grade baseline ocular surface damage',
        'Meibomian gland evaluation (expressibility, meibography if available) to determine aqueous-deficient vs. evaporative subtype and guide treatment selection',
      ],
      initialTreatment:
        'First-line therapy is preservative-free artificial tears plus lid hygiene/warm compresses for meibomian gland dysfunction and environmental modification. Chronic inflammatory disease not controlled with tears alone progresses to a topical anti-inflammatory agent (cyclosporine or lifitegrast), often bridged with a short pulse of topical corticosteroid to control symptoms while the anti-inflammatory reaches full effect over 6-12 weeks.',
      followUpSchedule:
        'Recheck 6-8 weeks after starting a topical anti-inflammatory agent to assess tolerability and early response, then every 3-6 months once stable; flares or new therapy escalation warrant closer interim visits.',
      escalationCriteria: [
        'Worsening corneal staining or new filamentary keratitis despite first-line therapy',
        'No symptomatic or objective improvement after an adequate (approximately 3-month) trial of a topical anti-inflammatory',
        'Development of a persistent epithelial defect or corneal thinning suggesting a complicated/severe course',
      ],
      referralCriteria: [
        'Severe aqueous-deficient dry eye with dry mouth or joint symptoms -> rheumatology for Sjögren syndrome workup',
        'Refractory disease despite escalating topical therapy -> cornea/ocular surface specialist for scleral lens or autologous serum tear consideration',
        'Corneal ulceration or vision-threatening surface disease -> urgent cornea specialist referral',
      ],
      steroidConsiderations:
        'A short pulse (typically 2-4 weeks) of a low-penetration topical corticosteroid (e.g., loteprednol etabonate) is used to control flares or to bridge the delayed onset of cyclosporine/lifitegrast; IOP is checked before and during the pulse given steroid-response risk with repeated courses.',
      complications: [
        'Filamentary keratitis',
        'Corneal ulceration or secondary infection in severe, untreated cases (rare)',
        'Reduced contact lens tolerance and fluctuating vision affecting quality of life',
        'Steroid-response IOP elevation with repeated corticosteroid pulses',
      ],
      monitoringParameters: [
        'Symptom severity (questionnaire score) over time',
        'Corneal/conjunctival staining grade',
        'Tear breakup time',
        'IOP when using pulsed topical corticosteroid',
      ],
      relatedDrugIds: ['cyclosporine-ophthalmic-emulsion', 'lifitegrast', 'loteprednol-etabonate', 'carboxymethylcellulose-sodium', 'perfluorohexyloctane'],
      relatedExamTechniqueIds: ['tear-break-up-time', 'schirmer-test', 'tear-film-osmolarity-testing', 'meibomian-gland-evaluation', 'lissamine-green-rose-bengal-staining'],
    },
    followUp: {
      typical: 'Every 3-6 months depending on severity and treatment response',
      monitor: 'Symptom severity, corneal staining, TBUT',
      progression: 'Worsening staining or new filamentary keratitis indicates need for escalation',
    },
    prognosis: {
      typicalCourse: 'Chronic condition typically managed rather than cured; often fluctuates with environment and systemic health',
      progressionRisk: 'Can progress to filamentary keratitis or secondary infection if severe and untreated',
      complications: 'Corneal ulceration (rare, severe cases), reduced quality of life, contact lens intolerance',
      visualPrognosis: 'Generally good with management; can cause fluctuating vision affecting quality of life',
    },
    clinicalPearls: [
      'Symptoms often correlate poorly with clinical signs — treat the patient, not just the exam findings.',
      'Always evaluate meibomian glands, as evaporative dry eye (MGD-related) is more common than aqueous deficiency.',
      'Consider Sjögren syndrome workup in severe aqueous-deficient dry eye with dry mouth or joint symptoms.',
    ],
    highYield: [
      'Evaporative (MGD-related) dry eye is more common than aqueous-deficient dry eye',
      'TFOS DEWS II is the current diagnostic/classification framework',
      'Cyclosporine and lifitegrast are FDA-approved anti-inflammatory options for chronic dry eye',
      'Sjögren syndrome should be considered in severe aqueous-deficient cases with sicca symptoms',
    ],
  },
]
