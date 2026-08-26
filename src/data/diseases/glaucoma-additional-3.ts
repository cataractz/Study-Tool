import type { Disease } from '../../types/disease'

export const glaucomaAdditional3: Disease[] = [
  {
    id: 'lens-induced-glaucoma',
    name: 'Phacomorphic and Phacolytic Glaucoma',
    aliases: ['Phacomorphic Glaucoma', 'Phacolytic Glaucoma'],
    category: 'Glaucoma',
    definition:
      'Two distinct secondary glaucomas caused by an advanced cataractous lens: phacomorphic glaucoma, an acute angle-closure mechanism in which an intumescent, swollen cataractous lens produces pupillary block and mechanically shallows the anterior chamber; and phacolytic glaucoma, an open-angle mechanism in which a hypermature cataract leaks denatured lens proteins through an intact but permeable capsule, obstructing the trabecular meshwork with protein and lens-material-laden macrophages.',
    affectedStructure:
      'Phacomorphic: anterior chamber angle (secondarily closed by anteriorly displaced iris-lens diaphragm). Phacolytic: trabecular meshwork (obstructed by macrophages and high-molecular-weight lens protein) with an open angle',
    pathologicalProcess:
      'Phacomorphic glaucoma is a mechanical process — lens swelling increases anterior-posterior lens diameter, pushing the iris-lens diaphragm forward, worsening pupillary block, and causing secondary angle closure. Phacolytic glaucoma is an inflammatory/obstructive process — a hypermature or morgagnian cataract develops microscopic defects in its capsule through which liquefied cortical lens protein escapes into the anterior chamber, triggering a macrophage-mediated inflammatory response and direct mechanical clogging of the trabecular meshwork by protein and macrophages.',
    epidemiology: {
      typicalAge: 'Older adults, typically with long-standing, neglected, or previously undiagnosed cataracts',
      prevalence: 'Uncommon in regions with regular access to cataract surgery; far more frequently encountered in areas with limited access to eye care where mature cataracts go untreated for years',
      importantPopulations: 'Patients with limited access to ophthalmic care, unilateral neglected cataract, or history of poor follow-up after cataract diagnosis; more common in developing regions of the world',
    },
    riskFactors: [
      { label: 'Untreated, long-standing mature or hypermature cataract', tier: 'major' },
      { label: 'Intumescent (swollen) cataract with rapid lens changes', tier: 'major' },
      { label: 'Limited access to cataract surgery / delayed cataract extraction', tier: 'major' },
      { label: 'Advanced age', tier: 'moderate' },
      { label: 'History of trauma accelerating cataract formation', tier: 'moderate' },
      { label: 'Pre-existing narrow anterior chamber angle (for phacomorphic)', tier: 'associated' },
      { label: 'Diabetes mellitus (associated with more rapid cataract progression)', tier: 'associated' },
    ],
    pathophysiology: [
      'Phacomorphic: cortical lens fibers imbibe fluid as the cataract matures, causing the lens to swell (intumesce) and increase in anterior-posterior thickness',
      'Phacomorphic: the enlarged lens pushes the iris-lens diaphragm anteriorly, exaggerating physiologic pupillary block and shallowing the anterior chamber symmetrically or asymmetrically compared to the fellow eye',
      'Phacomorphic: progressive apposition of the peripheral iris against the trabecular meshwork produces acute or subacute angle closure and a sharp rise in IOP, mechanically identical in end result to primary pupillary block',
      'Phacolytic: a hypermature or morgagnian cataract develops a degenerated, permeable (though grossly intact) lens capsule, typically at sites of capsular thinning',
      'Phacolytic: high-molecular-weight, denatured lens proteins leak through the capsule into the anterior chamber',
      'Phacolytic: macrophages migrate into the anterior chamber to phagocytose the leaked lens protein, and these lens-protein-laden macrophages, together with the proteins themselves, mechanically obstruct the open trabecular meshwork, producing an acute rise in IOP without any angle closure',
    ],
    symptoms: {
      common: [
        'Sudden onset of severe eye pain and headache',
        'Marked blurred vision (often further reduced by the underlying dense cataract)',
        'Photophobia and red eye',
        'Nausea and vomiting may accompany the acute pressure spike',
      ],
      lessCommon: ['Halos around lights from corneal edema (more prominent in phacomorphic)'],
      importantNegatives: [
        'No history of trauma or prior intraocular surgery in typical presentations',
        'Fellow eye anterior chamber is characteristically normal depth in phacolytic glaucoma (angle is open), unlike the symmetric shallowing sometimes seen in phacomorphic',
      ],
      typicalProgression:
        'Both present acutely over hours to a few days, arising in an eye with a known, longstanding, visually significant cataract that was never surgically addressed.',
    },
    signs: [
      { area: 'Anterior Chamber', finding: 'Phacomorphic: shallow anterior chamber (often shallower centrally and peripherally, more pronounced than the fellow eye), angle closure on gonioscopy, minimal-to-mild cell/flare. Phacolytic: normal-to-deep anterior chamber, open angle on gonioscopy, marked cell and flare, white flocculent or chalky material (liquefied lens cortex) layering in the angle or floating in the aqueous, occasional pseudohypopyon' },
      { area: 'Lens', finding: 'Phacomorphic: intumescent, swollen white cataract, often with a shallower anterior chamber than the fellow eye when the fellow lens is less advanced. Phacolytic: hypermature or morgagnian cataract with a wrinkled, often calcific-appearing capsule; liquefied cortex; iridescent particles may be visible in the anterior chamber' },
      { area: 'Cornea', finding: 'Microcystic or stromal corneal edema from acutely elevated IOP, more pronounced in phacomorphic given the higher typical IOP spikes' },
      { area: 'Other', finding: 'Markedly elevated IOP in both conditions; pupil may be mid-dilated and poorly reactive in phacomorphic (as in primary angle closure), while pupil reaction is more often preserved in phacolytic since the angle itself remains open' },
    ],
    differentialDiagnosis: [
      { disease: 'Primary acute angle-closure glaucoma', whySimilar: 'Phacomorphic glaucoma presents with an identical acute triad of pain, red eye, and markedly elevated IOP with a shallow, closed angle', keyDistinguisher: 'A visibly mature, intumescent, white cataract is present as the identifiable cause, and the fellow eye typically has a normal or only mildly shallow chamber rather than the bilateral crowded anatomy seen in primary angle closure' },
      { disease: 'Phacolytic glaucoma (versus phacomorphic)', whySimilar: 'Both are acute, painful, lens-induced glaucomas arising from an advanced cataract with markedly elevated IOP', keyDistinguisher: 'Phacolytic has an OPEN angle on gonioscopy with white flocculent lens material and cell/flare in the anterior chamber from a hypermature cataract with a permeable capsule; phacomorphic has a CLOSED angle from mechanical pupillary block by an intumescent, swollen (not necessarily hypermature) lens' },
      { disease: 'Lens particle glaucoma', whySimilar: 'Open-angle glaucoma from lens material obstructing the trabecular meshwork, can look similar to phacolytic', keyDistinguisher: 'Occurs after a violated lens capsule (trauma, surgery, or Nd:YAG capsulotomy) with free cortical fragments visible in the anterior chamber, rather than an intact capsule with only leaked protein as in phacolytic glaucoma' },
      { disease: 'Acute anterior uveitis with secondary open-angle glaucoma', whySimilar: 'Anterior chamber cell/flare with elevated IOP and an open angle, resembling phacolytic', keyDistinguisher: 'Keratic precipitates and posterior synechiae are typical of uveitis; no hypermature cataract with a permeable capsule, and no white flocculent lens material in the anterior chamber' },
    ],
    diagnosticTesting: [
      { name: 'Goldmann applanation tonometry', whyOrdered: 'Confirm and quantify the degree of IOP elevation', expectedFinding: 'Markedly elevated IOP, often in the 40-60+ mmHg range in both conditions', contribution: 'Establishes the emergency and guides urgency of IOP-lowering intervention' },
      { name: 'Gonioscopy (once cornea allows adequate view)', whyOrdered: 'Directly determine whether the angle is open or closed, the key finding that differentiates the two conditions', expectedFinding: 'Closed or occludable angle in phacomorphic; open angle (often with debris or white particulate material visible in the angle recess) in phacolytic', contribution: 'The single most important test distinguishing phacomorphic from phacolytic glaucoma and from primary angle closure' },
      { name: 'Slit lamp examination of the lens and anterior chamber', whyOrdered: 'Characterize the cataract morphology and anterior chamber reaction', expectedFinding: 'Intumescent white cataract with shallow AC (phacomorphic) versus hypermature/morgagnian cataract with marked cell/flare and flocculent white material (phacolytic)', contribution: 'Establishes the underlying lens pathology driving the glaucoma and supports the clinical diagnosis' },
      { name: 'B-scan ultrasonography', whyOrdered: 'Assess posterior segment status when a dense cataract precludes a fundus view', expectedFinding: 'Typically normal posterior segment without retinal or vitreous pathology', contribution: 'Rules out a coexisting posterior segment process (e.g., retinal detachment) before proceeding to cataract surgery' },
      { name: 'Anterior chamber paracentesis with cytology (rarely needed)', whyOrdered: 'In diagnostically uncertain phacolytic cases, aqueous aspirate can be examined for lens-laden macrophages', expectedFinding: 'Macrophages engorged with eosinophilic lens material and amorphous proteinaceous debris, without organisms', contribution: 'Confirms phacolytic mechanism and excludes infectious endophthalmitis when the picture is atypical' },
      { name: 'Corneal pachymetry / assessment of corneal clarity', whyOrdered: 'Determine surgical feasibility and anticipated visualization for cataract extraction', expectedFinding: 'Variable stromal edema depending on IOP severity and duration', contribution: 'Guides timing and whether IOP must first be lowered to permit a clear surgical view' },
    ],
    diagnosis: {
      criteria:
        'Acute IOP elevation in an eye with a known, advanced (intumescent or hypermature) cataract, with gonioscopy establishing angle status: closed/occludable angle with an intumescent lens supports phacomorphic glaucoma, while an open angle with anterior chamber cell/flare and white lens debris in the setting of a hypermature cataract supports phacolytic glaucoma',
      confirmation:
        'Diagnosis is clinical, based on the combination of an advanced cataract, acutely elevated IOP, and gonioscopic angle status once the cornea is clear enough to examine; resolution of the glaucoma following cataract extraction retrospectively confirms the lens as the causative agent',
      classification:
        'Classified by mechanism as phacomorphic (angle-closure, mechanical pupillary block from lens intumescence) versus phacolytic (open-angle, inflammatory/obstructive from leaked lens protein) — the two ends of the lens-induced glaucoma spectrum, distinct from lens particle glaucoma which requires a violated capsule',
    },
    management: [
      {
        category: 'Emergency management',
        detail:
          'Phacomorphic: treat as an angle-closure emergency — topical beta-blocker, alpha-2 agonist, and topical/oral carbonic anhydrase inhibitor, plus hyperosmotic agent (oral glycerin or IV mannitol) if IOP remains severely elevated, to acutely lower IOP and allow the cornea to clear before definitive cataract surgery; avoid miotics, which worsen pupillary block by increasing iridolenticular contact with a swollen lens. Phacolytic: aggressive topical IOP-lowering therapy (beta-blocker, alpha-2 agonist, topical/oral carbonic anhydrase inhibitor) plus topical corticosteroids to control the inflammatory reaction, with hyperosmotic agents as needed for severe IOP elevation, as a bridge to surgery',
      },
      {
        category: 'First-line treatment',
        detail:
          'Definitive treatment for both conditions is cataract extraction (typically phacoemulsification, though extracapsular extraction may be needed for a very dense or hypermature lens), performed once medical therapy has controlled IOP and inflammation enough to permit a safe surgical view',
      },
      {
        category: 'Referral',
        detail:
          'Urgent/emergent same-day referral to an ophthalmologist for IOP control and surgical planning; these are surgical emergencies, and optometric management is limited to recognition, initial medical IOP-lowering when appropriate, and rapid referral for definitive cataract extraction',
      },
    ],
    followUp: {
      typical:
        'Postoperative follow-up follows standard cataract surgery protocols once IOP and inflammation are controlled and surgery performed; preoperative visits are frequent (daily to every few days) until IOP is adequately controlled for safe surgery',
      monitor: 'IOP, corneal clarity, anterior chamber reaction, and angle status (once view permits) in the preoperative period; postoperatively monitor IOP normalization and resolution of inflammation',
      progression: 'Persistently elevated IOP despite maximal medical therapy, worsening corneal edema, or progressive angle closure (phacomorphic) signal the need for more urgent surgical intervention rather than continued medical management',
      shortenWhen: 'Poorly controlled IOP on presentation, significant optic nerve damage, or corneal decompensation threatening surgical visualization',
    },
    prognosis: {
      typicalCourse:
        'Both conditions typically resolve with prompt cataract extraction; IOP normalizes and inflammation resolves once the causative lens material is removed',
      progressionRisk:
        'Phacomorphic carries risk of permanent peripheral anterior synechiae and chronic angle-closure glaucoma if angle closure is prolonged before surgery; phacolytic generally resolves without permanent trabecular damage if treated promptly, since the angle was never structurally closed',
      complications:
        'Delayed treatment can result in permanent optic nerve damage, corneal decompensation, and (in phacomorphic) irreversible synechial angle closure requiring long-term glaucoma therapy even after successful cataract surgery',
      visualPrognosis:
        'Generally good if cataract extraction is performed promptly, limited mainly by any pre-existing optic nerve damage from the acute pressure spike or by duration of angle closure prior to surgery',
    },
    clinicalPearls: [
      'Gonioscopy is the key differentiating test: a CLOSED angle points to phacomorphic (mechanical pupillary block), while an OPEN angle with white flocculent debris points to phacolytic (inflammatory/obstructive).',
      'Avoid miotics (pilocarpine) in phacomorphic glaucoma — unlike primary pupillary block, a miotic can worsen the block by increasing iris-lens apposition against an already swollen lens.',
      'Phacolytic glaucoma classically shows a pseudohypopyon or iridescent particles from liquefied lens cortex leaking through an intact but permeable hypermature capsule — this is distinct from lens particle glaucoma, which requires an actual capsular rupture.',
      'Both are true ophthalmic emergencies requiring definitive treatment with cataract extraction; medical therapy is a bridge to surgery, not a cure.',
      'Think of the mnemonic: phacoMORPHIC = MORPHology of the lens changes (swells) and causes mechanical angle closure; phacoLYTIC = lens material LYSES/leaks out and clogs an open angle.',
    ],
    highYield: [
      'Phacomorphic = angle CLOSED by an intumescent/swollen cataractous lens causing mechanical pupillary block; phacolytic = angle OPEN, obstructed by leaked lens protein and lens-laden macrophages from a hypermature cataract with a permeable (not ruptured) capsule',
      'Phacolytic classically shows white flocculent material, cell/flare, and sometimes pseudohypopyon in the anterior chamber with an open angle on gonioscopy',
      'Avoid miotics in phacomorphic glaucoma, unlike some other pupillary block presentations, since they can worsen iridolenticular apposition',
      'Definitive treatment for both is cataract extraction once IOP and inflammation are medically controlled enough for safe surgery',
      'Lens particle glaucoma is a key distractor: it requires a violated/ruptured capsule (trauma, surgery, YAG capsulotomy) with free cortical fragments, unlike phacolytic glaucoma\'s intact-but-permeable capsule',
      'Both conditions arise from a neglected, longstanding mature cataract and represent true ocular emergencies requiring urgent surgical referral',
    ],
  },
]
