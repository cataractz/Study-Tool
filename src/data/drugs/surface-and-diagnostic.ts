import type { Drug } from '../../types/drug'

export const surfaceAndDiagnosticDrugs: Drug[] = [
  // ---------------------------------------------------------------------
  // MYDRIATICS
  // ---------------------------------------------------------------------
  {
    id: 'phenylephrine',
    genericName: 'Phenylephrine hydrochloride',
    brandNames: ['Mydfrin', 'Neo-Synephrine Ophthalmic', 'AK-Dilate'],
    drugClass: 'Mydriatics',
    mechanismOfAction:
      'Direct-acting alpha-1 adrenergic agonist that stimulates the iris dilator (radial) muscle, producing mydriasis without cycloplegia; also causes conjunctival vasoconstriction via alpha-1 receptors on blood vessel smooth muscle.',
    indications: [
      'Pupillary dilation for fundus examination',
      'Adjunct to cycloplegic agents for maximal mydriasis',
      'Differentiating episcleritis from scleritis (vasoconstriction/blanching test)',
      'Breaking or preventing posterior synechiae in anterior uveitis (combined with a cycloplegic)',
      'Reducing conjunctival hyperemia for examination',
    ],
    ocularUses: [
      'Mydriasis for dilated fundus exam',
      'Vasoconstriction test to differentiate episcleritis (blanches) from scleritis (does not blanch)',
      'Combined with tropicamide/cyclopentolate for maximal routine dilation',
      'Adjunct in breaking posterior synechiae in iritis',
    ],
    typicalDosing:
      '1 drop of 2.5% instilled, may repeat once in 10-15 minutes if additional mydriasis is needed; 10% is reserved for adults (e.g., heavily pigmented irides, synechiae-breaking) and is generally avoided in infants and cardiac patients',
    concentrations: ['2.5%', '10%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation',
        'Punctate keratitis',
        'Rebound miosis',
        'Blurred near vision from mydriasis',
        'Photophobia',
        'Iris pigment epithelial floaters released into anterior chamber',
        'Rare: precipitation of acute angle-closure in predisposed eyes',
      ],
      systemic: [
        'Hypertension (especially with 10% concentration)',
        'Tachycardia or reflex bradycardia',
        'Cardiac arrhythmias',
        'Headache, tremor',
        'Rare but serious: myocardial infarction or cerebrovascular accident with 10% in susceptible patients',
        'Blanching of skin',
      ],
    },
    contraindications: [
      'Narrow or occludable anterior chamber angle (risk of precipitating acute angle-closure glaucoma)',
      '10% formulation contraindicated/avoided in infants and in patients with uncontrolled hypertension, cardiac arrhythmia, aneurysm, or those on MAO inhibitors',
      'Known hypersensitivity to phenylephrine',
    ],
    precautions: [
      'Use 2.5% (not 10%) in infants, the elderly, and cardiac patients',
      'Caution in cardiovascular disease, hyperthyroidism, and diabetes',
      'Punctal occlusion or gentle lid closure for 1-2 minutes after instillation reduces systemic absorption',
      'Use cautiously in patients with labile hypertension',
    ],
    drugInteractions: [
      'MAO inhibitors and tricyclic antidepressants can potentiate the pressor response',
      'Beta-blockers may unmask an exaggerated alpha-adrenergic hypertensive response',
      'Additive mydriatic/systemic effects with other sympathomimetic agents',
    ],
    patientCounseling: [
      'Vision will be blurred, especially for near tasks, for several hours',
      'Wear sunglasses due to light sensitivity',
      'Do not drive until pupils return to normal size and near vision clears',
      'Report chest pain, palpitations, or severe headache immediately',
      'Temporary stinging on instillation is expected',
    ],
    pregnancyLactation:
      'No well-controlled human studies; topical ocular use produces minimal systemic absorption when punctal occlusion is used. Use in pregnancy/lactation only if clearly needed; the 10% concentration should be avoided given greater systemic absorption risk.',
    pediatricConsiderations: [
      'The 10% concentration is avoided in infants and generally in young children due to risk of significant hypertension/cardiovascular effects; 2.5% is the preferred concentration in pediatric patients.',
      'Punctal occlusion after instillation is especially recommended in infants and children to reduce systemic absorption.',
    ],
    relatedConditionIds: ['episcleritis', 'scleritis', 'anterior-uveitis'],
    monitoring: [
      'Blood pressure and pulse in patients with cardiovascular disease, especially with 10% use',
      'Anterior chamber angle assessment before dilation in at-risk patients',
      'IOP if angle-closure symptoms develop post-dilation',
    ],
    clinicalPearls: [
      'Pure alpha-1 agonist producing mydriasis with NO cycloplegia (accommodation is preserved) — distinguishes it mechanistically from the antimuscarinic cycloplegics',
      'Frequently combined with a cycloplegic (tropicamide/cyclopentolate) for full dilation because it does not paralyze accommodation on its own',
      'Blanches conjunctival vessels but not episcleral/scleral vessels, which is the basis of the classic clinical test differentiating episcleritis from scleritis',
      'The 10% drop delivers a substantially higher systemic dose and has been associated with serious cardiovascular events, particularly in infants and the elderly',
    ],
    highYield: [
      'Alpha-1 adrenergic agonist causing mydriasis only, with no cycloplegic effect (contrast with tropicamide/cyclopentolate/atropine)',
      'Vasoconstriction/blanching test differentiates episcleritis (blanches with phenylephrine) from scleritis (does not blanch)',
      '10% concentration carries a real risk of hypertensive crisis, MI, or CVA, especially in infants and cardiac patients — use 2.5% in these groups',
      'Punctal occlusion after instillation meaningfully reduces systemic absorption and adverse effects',
    ],
    references: [
      { label: 'Adrenergic agonist ocular pharmacology and systemic risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Phenylephrine ophthalmic solution prescribing information', source: 'Drug package insert' },
    ],
  },

  // ---------------------------------------------------------------------
  // CYCLOPLEGICS
  // ---------------------------------------------------------------------
  {
    id: 'tropicamide',
    genericName: 'Tropicamide',
    brandNames: ['Mydriacyl', 'Tropicacyl'],
    drugClass: 'Cycloplegics',
    mechanismOfAction:
      'Competitive antagonist at muscarinic (M3) receptors on the iris sphincter and ciliary muscle, blocking acetylcholine to produce mydriasis and cycloplegia; it is the shortest-acting and weakest cycloplegic of the commonly used antimuscarinics.',
    indications: [
      'Routine pupillary dilation for fundus examination',
      'Mild/screening cycloplegic refraction (less complete cycloplegia than cyclopentolate)',
    ],
    ocularUses: [
      'Dilated fundus exam',
      'Facilitates peripheral retinal and vitreous visualization',
      'Combined with phenylephrine for synergistic mydriasis in routine exams',
    ],
    typicalDosing:
      '1 drop of 0.5-1%, may repeat once in 5 minutes; onset of mydriasis in 20-30 minutes; duration of action approximately 4-6 hours, shortest of the ophthalmic cycloplegics',
    concentrations: ['0.5%', '1%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Stinging on instillation',
        'Photophobia',
        'Blurred near vision',
        'Elevated IOP in predisposed narrow-angle eyes',
        'Rare punctate keratitis',
      ],
      systemic: [
        'Uncommon at standard doses: dry mouth, tachycardia, flushing',
        'Rare behavioral disturbance in children with repeated dosing',
      ],
    },
    contraindications: [
      'Narrow or occludable anterior chamber angle (risk of acute angle-closure glaucoma)',
      'Known hypersensitivity to tropicamide',
    ],
    precautions: [
      'Use caution in infants (systemic anticholinergic effects possible with excessive dosing)',
      'Assess angle depth (e.g., Van Herick estimation or gonioscopy) before dilating at-risk patients',
    ],
    drugInteractions: ['Additive anticholinergic effects with other antimuscarinic/anticholinergic drugs'],
    patientCounseling: [
      'Blurred near vision and light sensitivity for several hours (shortest duration among the cycloplegics)',
      'Wear sunglasses',
      'Arrange for someone to drive if needed',
      'Return promptly for eye pain, halos, or nausea (possible angle closure)',
    ],
    pregnancyLactation:
      'Limited human data; topical ocular anticholinergics have low systemic absorption when punctal occlusion is used. Use only if clearly needed in pregnancy/lactation.',
    pediatricConsiderations: [
      'Widely used in infants and children for routine dilated fundus examination; systemic anticholinergic effects (tachycardia, flushing, rare behavioral disturbance) are more likely with repeated dosing in young children, so use the minimum effective number of drops.',
    ],
    monitoring: [
      'Anterior chamber angle evaluation prior to dilation in at-risk patients',
      'IOP if post-dilation angle-closure symptoms occur',
    ],
    clinicalPearls: [
      'Weakest cycloplegic but reliable mydriatic, which is why it is the standard agent for routine (non-refractive) dilated fundus exams',
      'Because cycloplegia is incomplete, it is not preferred for cycloplegic refraction in children with suspected accommodative esotropia/hyperopia (cyclopentolate or atropine preferred)',
      'Fastest recovery of accommodation/pupil size (~4-6 hours) among the antimuscarinic cycloplegics',
    ],
    highYield: [
      'Weakest cycloplegic, fastest recovery (~4-6 hrs) — workhorse agent for routine dilated fundus exams',
      'Mydriatic effect predominates over cycloplegic effect (contrast with cyclopentolate/atropine, where cycloplegia is more complete)',
      'Commonly combined with phenylephrine for synergistic mydriasis',
      'Angle-closure risk in patients with narrow/occludable angles, as with all antimuscarinic cycloplegics',
    ],
    references: [
      { label: 'Cycloplegic and mydriatic agent comparison', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Cycloplegic refraction and dilated exam technique', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'cyclopentolate',
    genericName: 'Cyclopentolate hydrochloride',
    brandNames: ['Cyclogyl', 'AK-Pentolate'],
    drugClass: 'Cycloplegics',
    mechanismOfAction:
      'Competitive muscarinic antagonist blocking acetylcholine at the iris sphincter and ciliary muscle; produces more complete and reliable cycloplegia than tropicamide, with an intermediate duration of action shorter than atropine.',
    indications: [
      'Cycloplegic refraction, especially in children, to unmask latent hyperopia or accommodative esotropia',
      'Pupillary dilation when deeper, more reliable cycloplegia is required',
    ],
    ocularUses: [
      'Cycloplegic refraction in pediatric and young adult patients',
      'Dilation for fundus exam when more complete cycloplegia is desired',
      'Diagnostic workup of accommodative esotropia',
    ],
    typicalDosing:
      '1 drop of 0.5-1% (pediatric) or 1-2% (adult), may repeat in 5-10 minutes; onset ~30-60 minutes with peak cycloplegia around 30-45 minutes; duration of cycloplegia 6-24 hours',
    concentrations: ['0.5%', '1%', '2%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Stinging on instillation (more pronounced than tropicamide)',
        'Photophobia',
        'Blurred near vision',
        'Elevated IOP in angle-closure-prone eyes',
      ],
      systemic: [
        'CNS disturbances — ataxia, disorientation, hallucinations, psychotic reactions, particularly in children and with higher concentrations',
        'Dry mouth, flushing, fever, tachycardia',
        'Rare seizures in young children with excessive dosing',
        'GI effects (vomiting, abdominal distension) reported in infants',
      ],
    },
    contraindications: [
      'Narrow or occludable anterior chamber angle',
      'Known hypersensitivity to cyclopentolate',
    ],
    precautions: [
      'Use the lowest effective concentration (0.5%) in infants and young children given the higher risk of CNS/systemic anticholinergic toxicity',
      'Punctal occlusion recommended, especially in children',
      'Use caution with a history of seizures or CNS disease',
    ],
    drugInteractions: ['Additive effects with other anticholinergic/antimuscarinic agents'],
    patientCounseling: [
      'Near vision will be blurred and eyes light sensitive for up to 24 hours',
      'Wear sunglasses; arrange transportation as needed',
      'In children, watch for unusual behavior, disorientation, or flushing and contact the office if severe',
      'Do not drive until vision clears',
    ],
    pregnancyLactation:
      'Limited data; use topical anticholinergics in pregnancy/lactation only when clearly needed, minimizing systemic absorption with punctal occlusion given the reported potential for CNS toxicity.',
    pediatricConsiderations: [
      'Use the lowest effective concentration (0.5%) in infants and young children, since cyclopentolate carries a comparatively higher risk of CNS anticholinergic toxicity (ataxia, disorientation, hallucinations, rare seizures) in this population than tropicamide.',
      'GI effects (vomiting, abdominal distension) have been reported in infants; punctal occlusion is recommended to reduce systemic absorption.',
    ],
    relatedConditionIds: ['accommodative-esotropia', 'hyperopia'],
    monitoring: [
      'Angle assessment before dilation in at-risk eyes',
      'Observation of children after instillation for systemic anticholinergic signs',
      'IOP if angle-closure symptoms occur',
    ],
    clinicalPearls: [
      'Preferred cycloplegic agent for pediatric cycloplegic refraction — more complete cycloplegia than tropicamide with a shorter duration than atropine or homatropine',
      'Higher risk than tropicamide of CNS side effects (disorientation, hallucinations) in children — use 0.5% in infants/young children',
      'Peak cycloplegia occurs roughly 30-45 minutes after instillation, which should guide refraction timing',
    ],
    highYield: [
      'Gold-standard agent for cycloplegic refraction in children (more complete cycloplegia than tropicamide, faster recovery than atropine)',
      'Risk of CNS anticholinergic toxicity (ataxia, hallucinations, psychosis) is notable, especially in young children — use the lowest effective concentration',
      'Duration of cycloplegia is intermediate (~6-24 hours) between tropicamide and atropine/homatropine',
      'Contraindicated in narrow/occludable angles due to angle-closure risk',
    ],
    references: [
      { label: 'Pediatric cycloplegic refraction agents', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Cyclopentolate ophthalmic solution prescribing information', source: 'Drug package insert' },
    ],
  },
  {
    id: 'atropine',
    genericName: 'Atropine sulfate (ophthalmic)',
    brandNames: ['Isopto Atropine', 'Atropine Care'],
    drugClass: 'Cycloplegics',
    mechanismOfAction:
      'Potent, long-acting competitive muscarinic antagonist that blocks acetylcholine at the iris sphincter and ciliary muscle, producing profound cycloplegia and mydriasis; it has the longest duration of action of any ophthalmic cycloplegic/mydriatic agent.',
    indications: [
      'Cycloplegic refraction requiring maximal cycloplegia (e.g., significant accommodative spasm, complex esotropia workup)',
      'Anterior uveitis/iritis, to relieve ciliary spasm pain and prevent or break posterior synechiae',
      'Amblyopia penalization therapy (applied to the sound/dominant eye) as an alternative to occlusion patching',
    ],
    ocularUses: [
      'Cycloplegia for deep refractive error assessment',
      'Therapeutic cycloplegia/mydriasis in anterior uveitis to reduce pain and prevent synechiae',
      'Amblyopia penalization (blurs the sound eye to promote use of the amblyopic eye)',
    ],
    typicalDosing:
      'Uveitis: 1 drop of 1% two to three times daily depending on severity; cycloplegic refraction: 1 drop of 0.5-1% once or twice daily for 1-3 days prior to exam given its slow onset; amblyopia penalization: 1 drop of 1% once daily to the sound eye',
    concentrations: ['0.5%', '1%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Prolonged photophobia and blurred near vision (up to 1-2 weeks)',
        'Stinging on instillation',
        'Contact dermatitis/allergic blepharoconjunctivitis with chronic use',
        'Elevated IOP in angle-closure-prone eyes',
      ],
      systemic: [
        'Anticholinergic toxicity: dry mouth, flushed dry skin, fever, tachycardia, urinary retention, constipation',
        'CNS effects: disorientation, hallucinations, ataxia (especially in children and the elderly)',
        'Classic anticholinergic toxidrome: "red as a beet, dry as a bone, blind as a bat, mad as a hatter, hot as a hare"',
        'Can be life-threatening in young children with accidental ingestion/overdose',
      ],
    },
    contraindications: [
      'Narrow or occludable anterior chamber angle (significant angle-closure risk given potent, prolonged mydriasis)',
      'Known hypersensitivity to atropine or other belladonna alkaloids',
    ],
    precautions: [
      'Use the lowest effective concentration in infants/young children — systemic toxicity risk is the highest of all ophthalmic cycloplegics',
      'Punctal occlusion strongly recommended',
      'Caution in patients with Down syndrome (increased mydriatic sensitivity)',
      'Educate caregivers on signs of systemic toxicity given the drug\'s long duration of action',
    ],
    drugInteractions: [
      'Additive anticholinergic toxicity with other antimuscarinics, antihistamines, and tricyclic antidepressants',
    ],
    patientCounseling: [
      'Blurred near vision and light sensitivity may last 1-2 weeks',
      'Wear sunglasses',
      'Keep the bottle secured away from children — accidental ingestion can cause serious systemic toxicity',
      'For amblyopia penalization: apply to the stronger eye as directed and expect blurred vision in that eye',
      'Contact the office for fever, flushing, rapid heartbeat, or confusion',
    ],
    pregnancyLactation:
      'Crosses the placenta; use topical atropine in pregnancy only if benefit outweighs risk, minimizing systemic absorption with punctal occlusion. Caution during lactation given limited data on excretion in breast milk.',
    pediatricConsiderations: [
      'Standard-concentration (0.5-1%) atropine carries the highest systemic anticholinergic toxicity risk of the ophthalmic cycloplegics in children and has historically been a cause of accidental pediatric poisoning; use the lowest effective concentration and counsel caregivers on secure storage.',
      'Low-dose atropine (0.01%) for myopia control is typically used in children roughly 6-12 years old with documented myopic progression and has shown a favorable safety profile in trials (ATOM1/ATOM2 and subsequent studies), with photophobia the most common adverse effect.',
      'Increased mydriatic sensitivity has been reported in children with Down syndrome.',
    ],
    offLabelUses: [
      'Low-dose atropine (0.01%-0.02%) for slowing myopia progression in children — not yet FDA-approved for this indication as of 2026, but supported by ATOM1/ATOM2 and subsequent randomized trials',
    ],
    relatedConditionIds: ['anterior-uveitis', 'amblyopia', 'myopia', 'accommodative-esotropia'],
    monitoring: [
      'Angle assessment before use in at-risk patients',
      'Monitoring for systemic anticholinergic signs, especially in children',
      'Follow-up for synechiae and IOP control in uveitis patients',
    ],
    clinicalPearls: [
      'Longest duration of action of any cycloplegic/mydriatic — cycloplegia and mydriasis can persist 1-2 weeks',
      'Drug of choice for severe anterior uveitis to break/prevent posterior synechiae and reduce ciliary spasm pain',
      'Used therapeutically in amblyopia penalization as an alternative to occlusion patching',
      'Historically a notable cause of accidental pediatric anticholinergic poisoning, reflecting its high systemic toxicity risk',
    ],
    highYield: [
      'Longest-acting cycloplegic (up to 1-2 weeks) — used therapeutically in uveitis (breaks synechiae, reduces ciliary spasm) and for amblyopia penalization',
      'Classic anticholinergic toxidrome: "red as a beet, dry as a bone, blind as a bat, mad as a hatter, hot as a hare"',
      'Greatest angle-closure risk among the cycloplegics due to potency and duration',
      'Distinct from low-dose (0.01%) atropine used off-label for pediatric myopia control, which is a different clinical context than standard 0.5-1% ophthalmic use',
    ],
    references: [
      { label: 'Atropine in uveitis and amblyopia management', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Anterior uveitis management guidelines', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'homatropine',
    genericName: 'Homatropine hydrobromide',
    brandNames: ['Isopto Homatropine'],
    drugClass: 'Cycloplegics',
    mechanismOfAction:
      'Semisynthetic muscarinic antagonist structurally related to atropine; blocks acetylcholine at the iris sphincter and ciliary muscle, producing cycloplegia and mydriasis of intermediate duration between cyclopentolate and atropine.',
    indications: [
      'Cycloplegic refraction when an intermediate duration of cycloplegia is desired',
      'Anterior uveitis/iritis — cycloplegia for pain relief and prevention of synechiae, as a shorter-duration alternative to atropine',
    ],
    ocularUses: [
      'Therapeutic cycloplegia in uveitis',
      'Cycloplegic refraction (less commonly first-line versus cyclopentolate)',
    ],
    typicalDosing: '1 drop of 2-5% one to three times daily depending on indication; duration of cycloplegia approximately 1-3 days',
    concentrations: ['2%', '5%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Photophobia',
        'Blurred near vision lasting 1-3 days',
        'Stinging on instillation',
        'Elevated IOP in angle-closure-prone eyes',
      ],
      systemic: [
        'Anticholinergic effects: dry mouth, flushing, tachycardia (less common than with atropine but possible with repeated dosing)',
        'CNS disturbance in children/elderly with excessive use',
      ],
    },
    contraindications: ['Narrow or occludable anterior chamber angle', 'Known hypersensitivity to homatropine'],
    precautions: [
      'Use caution in infants and the elderly given anticholinergic sensitivity',
      'Punctal occlusion to reduce systemic absorption',
    ],
    drugInteractions: ['Additive anticholinergic effects with other antimuscarinic agents'],
    patientCounseling: [
      'Expect light sensitivity and blurred near vision for 1-3 days',
      'Wear sunglasses and arrange transportation as needed',
      'Report signs of systemic anticholinergic effects',
    ],
    pregnancyLactation:
      'Limited data; use only if clearly needed, minimizing systemic absorption with punctal occlusion.',
    pediatricConsiderations: [
      'Use with caution in infants given anticholinergic sensitivity; systemic anticholinergic effects and CNS disturbance are less common than with atropine but can still occur with excessive dosing, so punctal occlusion is recommended.',
    ],
    relatedConditionIds: ['anterior-uveitis'],
    monitoring: ['Angle assessment before dilation', 'Follow-up for synechiae and IOP control in uveitis'],
    clinicalPearls: [
      'Intermediate-duration cycloplegic (~1-3 days), a middle ground between cyclopentolate and atropine',
      'Used as a therapeutic cycloplegic in uveitis when a shorter course than atropine is desired',
      'Less commonly used than cyclopentolate for routine pediatric refraction',
    ],
    highYield: [
      'Intermediate duration of cycloplegia (~1-3 days), between cyclopentolate and atropine',
      'Alternative therapeutic cycloplegic in uveitis when the full duration of atropine is not desired',
      'Shares the same angle-closure risk profile as other antimuscarinic cycloplegics',
    ],
    references: [
      { label: 'Comparative duration of cycloplegic agents', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Cycloplegic therapy in anterior uveitis', source: 'AAO Preferred Practice Pattern' },
    ],
  },

  // ---------------------------------------------------------------------
  // ALLERGY MEDICATIONS
  // ---------------------------------------------------------------------
  {
    id: 'olopatadine',
    genericName: 'Olopatadine hydrochloride',
    brandNames: ['Patanol', 'Pataday', 'Pazeo'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'Selective H1-receptor antagonist and mast cell stabilizer; blocks histamine-mediated itching and vasodilation and inhibits mast cell degranulation, reducing release of histamine and other inflammatory mediators.',
    indications: ['Signs and symptoms of allergic conjunctivitis, particularly itching and redness'],
    ocularUses: [
      'Relief of ocular itching due to allergic conjunctivitis',
      'Prophylactic use during seasonal allergy season',
    ],
    typicalDosing:
      '0.1%: 1 drop twice daily; 0.2%: 1 drop once daily; 0.7% (Pazeo): 1 drop once daily',
    concentrations: ['0.1%', '0.2%', '0.7%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Burning/stinging on instillation',
        'Dry eye',
        'Foreign body sensation',
        'Blurred vision',
        'Punctate keratitis (uncommon)',
      ],
      systemic: ['Headache', 'Bitter taste with nasolacrimal drainage', 'Rare somnolence'],
    },
    contraindications: ['Known hypersensitivity to olopatadine'],
    precautions: [
      'Do not wear soft contact lenses if the eye is red; if not red, wait approximately 10 minutes after instillation before lens insertion (preservative benzalkonium chloride can absorb into lenses)',
    ],
    drugInteractions: ['None clinically significant reported'],
    patientCounseling: [
      'Instill in both eyes as directed even if only one eye is symptomatic',
      'Remove contact lenses before instillation and wait about 10 minutes before reinserting',
      'Do not use for contact lens-related irritation without prior evaluation',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical use; use during pregnancy/lactation only if clearly needed per prescriber judgment.',
    pediatricConsiderations: [
      'Pataday 0.2% and 0.7% are approved for children 2 years and older; the 0.1% formulation (Patanol) is approved for children 3 years and older. Safety/effectiveness below these respective ages has not been established.',
    ],
    relatedConditionIds: ['conjunctivitis'],
    monitoring: ['Symptom response (itching/redness) at follow-up'],
    clinicalPearls: [
      'Dual-acting mechanism (antihistamine plus mast cell stabilizer) gives both rapid symptom relief and preventive benefit, making it a first-line topical agent for allergic conjunctivitis',
      'More effective for itching than for redness',
      'Available in a range of concentrations/dosing frequencies from twice-daily 0.1% to once-daily 0.7%',
    ],
    highYield: [
      'Dual mechanism: H1-antihistamine plus mast cell stabilizer — provides both fast onset and long-term prophylaxis',
      'First-line topical therapy for allergic conjunctivitis',
      'Itching is the hallmark symptom of allergic conjunctivitis and the key feature distinguishing it from other causes of red eye',
    ],
    references: [
      { label: 'Topical antihistamine/mast cell stabilizer combination agents', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Management of allergic conjunctivitis', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'ketotifen',
    genericName: 'Ketotifen fumarate',
    brandNames: ['Zaditor', 'Alaway', 'Claritin Eye'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'H1-receptor antagonist with mast cell-stabilizing activity; also inhibits eosinophil chemotaxis and activation, reducing the allergic inflammatory cascade.',
    indications: ['Temporary relief of ocular itching due to allergic conjunctivitis'],
    ocularUses: ['Over-the-counter relief of allergic conjunctivitis itching and redness'],
    typicalDosing: '1 drop in the affected eye(s) every 8-12 hours, not more than twice daily; available over-the-counter',
    concentrations: ['0.025%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: ['Burning/stinging', 'Transient conjunctival hyperemia', 'Dry eye', 'Blurred vision'],
      systemic: ['Headache', 'Rhinitis', 'Rare somnolence in sensitive individuals'],
    },
    contraindications: ['Known hypersensitivity to ketotifen'],
    precautions: [
      'Remove contact lenses prior to instillation if eyes are red; reinsert after approximately 10 minutes if not red',
      'Over-the-counter product — counsel patients not to exceed the recommended twice-daily frequency',
    ],
    drugInteractions: ['None clinically significant reported'],
    patientCounseling: [
      'Available over-the-counter; use as directed and do not exceed twice-daily dosing',
      'Remove contacts before use and wait about 10 minutes before reinserting',
      'See an eye care provider if symptoms persist beyond several days or worsen',
    ],
    pregnancyLactation: 'Minimal systemic absorption; use in pregnancy/lactation only if clearly needed.',
    pediatricConsiderations: [
      'OTC labeling supports use in adults and children 3 years of age and older; for children younger than 3, a doctor should determine use and dosing.',
    ],
    relatedConditionIds: ['conjunctivitis'],
    monitoring: ['Symptom improvement; refer for exam if no improvement or symptoms suggest another etiology'],
    clinicalPearls: [
      'Widely available over-the-counter and commonly recommended as first-line self-care for mild seasonal allergic conjunctivitis',
      'Same mechanistic class as olopatadine (dual antihistamine/mast cell stabilizer), but its OTC status makes it a common patient self-selected option',
    ],
    highYield: [
      'OTC dual-acting antihistamine/mast cell stabilizer — a go-to recommendation for patients wanting non-prescription allergy relief',
      'Same mechanistic class as olopatadine (antihistamine plus mast cell stabilizer)',
    ],
    references: [
      { label: 'OTC ocular antihistamines', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Ketotifen ophthalmic solution prescribing information', source: 'Drug package insert' },
    ],
  },
  {
    id: 'azelastine-ophthalmic',
    genericName: 'Azelastine hydrochloride (ophthalmic)',
    brandNames: ['Optivar'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'Selective H1-receptor antagonist with mast cell-stabilizing properties; also decreases production of chemotactic factors and inhibits eosinophil activation involved in the allergic response.',
    indications: ['Itching of the eye associated with allergic conjunctivitis'],
    ocularUses: ['Relief of allergic conjunctivitis-related itching'],
    typicalDosing: '1 drop in the affected eye(s) twice daily',
    concentrations: ['0.05%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: ['Transient stinging/burning (common)', 'Eye pain', 'Blurred vision', 'Conjunctivitis'],
      systemic: ['Bitter taste', 'Headache', 'Rare somnolence'],
    },
    contraindications: ['Known hypersensitivity to azelastine'],
    precautions: ['Remove contact lenses before instillation if the eyes are red'],
    drugInteractions: ['None clinically significant reported'],
    patientCounseling: [
      'Expect transient stinging on instillation',
      'A bitter taste may occur due to nasolacrimal drainage',
      'Remove contacts before instillation',
    ],
    pregnancyLactation: 'Minimal systemic absorption; use in pregnancy/lactation only if clearly indicated.',
    pediatricConsiderations: [
      'Approved for use in patients 3 years of age and older; safety and effectiveness have not been established in children younger than 3.',
    ],
    relatedConditionIds: ['conjunctivitis'],
    monitoring: ['Symptom response at follow-up'],
    clinicalPearls: [
      'Second-generation topical antihistamine/mast cell stabilizer similar in class to olopatadine, but with a notably higher incidence of stinging on instillation',
      'Twice-daily dosing is less convenient than once-daily olopatadine formulations',
    ],
    highYield: [
      'Dual antihistamine/mast cell stabilizer, notable for a higher rate of transient stinging compared to olopatadine',
      'Same allergic conjunctivitis indication as olopatadine and ketotifen',
    ],
    references: [
      { label: 'Comparative topical antihistamine/mast cell stabilizers', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Azelastine ophthalmic solution prescribing information', source: 'Drug package insert' },
    ],
  },

  // ---------------------------------------------------------------------
  // DRY EYE MEDICATIONS
  // ---------------------------------------------------------------------
  {
    id: 'carboxymethylcellulose-sodium',
    genericName: 'Carboxymethylcellulose sodium (artificial tears)',
    brandNames: ['Refresh Tears', 'TheraTears', 'Optive'],
    drugClass: 'Dry eye medications',
    mechanismOfAction:
      'Demulcent, viscosity-enhancing cellulose polymer that coats the ocular surface, increases tear film stability and residence time, and provides lubrication to reduce friction-related epithelial damage; it is palliative and does not address underlying tear film inflammation.',
    indications: [
      'Symptomatic relief of dry eye disease (evaporative or aqueous-deficient)',
      'Ocular surface lubrication for exposure, post-refractive surgery, or contact lens-related dryness',
    ],
    ocularUses: [
      'First-line symptomatic treatment for mild-to-moderate dry eye disease',
      'Lubrication adjunct alongside other dry eye therapies (e.g., cyclosporine, lifitegrast, punctal plugs)',
    ],
    typicalDosing:
      '1-2 drops in the affected eye(s) as needed, up to every 1-2 hours depending on severity; preservative-free single-use vials are preferred for frequent use (more than about 4 times daily)',
    concentrations: ['0.25%', '0.5%', '1%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: [
        'Transient blurred vision immediately after instillation',
        'Mild stinging',
        'Rare allergic/toxic reaction to preservative with frequent use of preserved formulations',
      ],
      systemic: ['None significant — minimal to no systemic absorption'],
    },
    contraindications: ['Known hypersensitivity to product components'],
    precautions: [
      'Preservative toxicity (e.g., benzalkonium chloride) with frequent use of preserved drops — switch to preservative-free formulation if dosing more than 4-6 times per day',
      'Follow product labeling regarding contact lens compatibility',
    ],
    drugInteractions: [
      'None clinically significant; space several minutes apart from other topical drops to avoid washout',
    ],
    patientCounseling: [
      'Use as often as needed for comfort',
      'Switch to preservative-free single-use vials if using more than 4 times per day',
      'Temporary blur immediately after instillation is normal',
    ],
    pregnancyLactation: 'Considered safe in pregnancy and lactation given negligible systemic absorption.',
    pediatricConsiderations: [
      'No pediatric-specific dosing restrictions; artificial tears are generally considered safe at any age, though preservative-free formulations are preferable for frequent use in children as in adults.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: ['Symptom response and ocular surface staining (fluorescein/lissamine green) at follow-up'],
    clinicalPearls: [
      'Foundation of dry eye management (TFOS DEWS II step 1 therapy) regardless of dry eye subtype',
      'Preservative-free formulations are recommended for frequent dosing or in patients with ocular surface disease/glaucoma already on multiple preserved drops',
      'Purely lubricating — anti-inflammatory agents (cyclosporine, lifitegrast, topical steroid) are added for moderate-to-severe disease',
    ],
    highYield: [
      'First-line, Step 1 therapy for dry eye disease per TFOS DEWS II staged management',
      'Preservative (BAK) toxicity is a key consideration with frequent dosing — switch to preservative-free formulations',
      'Purely palliative/lubricating — does not treat underlying inflammatory dry eye pathophysiology',
    ],
    references: [
      { label: 'TFOS DEWS II management and therapy report', source: 'AAO Preferred Practice Pattern' },
      { label: 'Ocular lubricant pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'hyaluronic-acid-ophthalmic',
    genericName: 'Hyaluronic acid (sodium hyaluronate) ophthalmic solution',
    brandNames: ['Blink Tears', 'Systane (hyaluronate-containing formulations)'],
    drugClass: 'Dry eye medications',
    mechanismOfAction:
      'High molecular weight, viscoelastic mucopolysaccharide that binds water to form a stable hydrophilic film over the ocular surface and promotes epithelial healing; its shear-thinning (non-Newtonian) property allows effective lubrication with relatively little blur.',
    indications: [
      'Symptomatic relief of dry eye disease',
      'Ocular surface lubrication, particularly for patients who prefer less blur than thicker gel-based tears',
    ],
    ocularUses: [
      'Dry eye symptom relief',
      'Adjunct after ocular surface procedures (e.g., corneal debridement, refractive surgery) to promote epithelial healing',
    ],
    typicalDosing: '1-2 drops in the affected eye(s) as needed, typically 3-4 times daily or more',
    concentrations: ['0.1%', '0.15%', '0.18%', '0.4%'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: ['Mild transient blur', 'Uncommon stinging (generally well tolerated)'],
      systemic: ['None significant'],
    },
    contraindications: ['Known hypersensitivity to product components'],
    precautions: ['Preservative-free formulations are preferred for frequent use or a compromised ocular surface'],
    drugInteractions: ['None clinically significant'],
    patientCounseling: [
      'Use as needed for comfort',
      'Follow product-specific instructions for preparation/administration',
      'Generally causes less blurring than thicker gel tears, making it suitable for daytime use',
    ],
    pregnancyLactation: 'Considered safe given negligible systemic absorption.',
    pediatricConsiderations: [
      'No pediatric-specific dosing restrictions or established safety concerns; used across all age groups for ocular surface lubrication.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: ['Symptom response and corneal/conjunctival staining at follow-up'],
    clinicalPearls: [
      'Favored for biocompatibility (hyaluronic acid occurs naturally in the extracellular matrix and vitreous) and strong water retention/lubrication with relatively less blur than carbomer (gel-based) tears',
      'Useful postoperatively (e.g., after PRK/LASIK or corneal debridement) to support epithelial healing',
    ],
    highYield: [
      'Mucoadhesive, shear-thinning polymer — provides lubrication with less blur than gel-based (carbomer) artificial tears',
      'Naturally occurring biopolymer that promotes epithelial wound healing, often chosen post-refractive surgery',
    ],
    references: [
      { label: 'Viscosity-enhancing agents in dry eye therapy', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'TFOS DEWS II management and therapy report', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'perfluorohexyloctane',
    genericName: 'Perfluorohexyloctane',
    brandNames: ['Miebo'],
    drugClass: 'Dry eye medications',
    mechanismOfAction:
      'Semifluorinated alkane that spreads over the tear film as a thin monolayer, reducing evaporation from the lipid layer and directly targeting evaporative dry eye associated with meibomian gland dysfunction; it contains no aqueous or conventional lipid component but instead stabilizes the existing tear film to slow evaporation.',
    indications: ['Signs and symptoms of dry eye disease, specifically evaporative dry eye due to meibomian gland dysfunction'],
    ocularUses: ['First FDA-approved prescription treatment that directly targets tear evaporation in evaporative dry eye/MGD'],
    typicalDosing: '1 drop in each affected eye 4 times daily',
    concentrations: ['100% (single-ingredient, preservative-free)'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic',
    sideEffects: {
      ocular: ['Transient blurred vision', 'Eye redness', 'Foreign body sensation/stinging on instillation'],
      systemic: ['None significant reported — minimal systemic absorption expected'],
    },
    contraindications: ['Known hypersensitivity to perfluorohexyloctane'],
    precautions: [
      'Remove contact lenses before instillation and follow labeling before reinsertion (not indicated for use while wearing lenses)',
      'Avoid touching the dropper tip to the eye or lids to prevent contamination',
    ],
    drugInteractions: ['None clinically significant reported; administer other topical drops at a separate time if used concurrently'],
    patientCounseling: [
      'Use consistently 4 times daily for full benefit',
      'Remove contact lenses before instillation',
    ],
    pregnancyLactation:
      'Limited human data; not expected to have significant systemic absorption. Use during pregnancy/lactation per clinical judgment when benefit outweighs risk.',
    pediatricConsiderations: [
      'Safety and effectiveness of Miebo have not been established in pediatric patients below 18 years of age.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: ['Symptom response (e.g., OSDI/SPEED scores), tear break-up time, and meibomian gland assessment at follow-up'],
    clinicalPearls: [
      'First and only FDA-approved drug that directly targets tear evaporation, rather than aqueous supplementation, by forming a monolayer over the tear film lipid layer',
      'Preservative-free, single-ingredient formulation with a mechanism distinct from artificial tears, secretagogues, or anti-inflammatory dry eye agents',
      'Approved specifically for evaporative dry eye due to meibomian gland dysfunction, the most common dry eye subtype',
    ],
    highYield: [
      'Semifluorinated alkane — a novel mechanism that reduces tear evaporation by spreading over the lipid layer, distinct from all other dry eye drug classes (does not stimulate tear production or reduce inflammation directly)',
      'FDA-approved specifically for evaporative dry eye/meibomian gland dysfunction, the most prevalent dry eye subtype',
      'Dosed 4 times daily and preservative-free',
    ],
    references: [
      { label: 'Perfluorohexyloctane ophthalmic solution prescribing information', source: 'Drug package insert' },
      { label: 'Evaporative dry eye and meibomian gland dysfunction management', source: 'TFOS DEWS II management and therapy report' },
    ],
  },

  // ---------------------------------------------------------------------
  // OTHER — DIAGNOSTIC DYES
  // ---------------------------------------------------------------------
  {
    id: 'fluorescein-sodium',
    genericName: 'Fluorescein sodium',
    brandNames: ['Fluorets', 'Fluor-I-Strip', 'AK-Fluor (intravenous, for angiography)'],
    drugClass: 'Other',
    mechanismOfAction:
      'Water-soluble dye that fluoresces yellow-green under blue (cobalt) light; it pools in areas where the corneal or conjunctival epithelium is absent or intercellular junctions are disrupted, allowing visualization of epithelial defects, abrasions, ulcers, and tear film break-up.',
    indications: [
      'Detection of corneal/conjunctival epithelial defects (abrasions, ulcers, dendrites)',
      'Applanation tonometry (combined with topical anesthetic)',
      'Tear break-up time (TBUT) assessment',
      'Seidel test to detect an aqueous leak from a corneal or scleral wound',
      'Rigid gas permeable contact lens fit evaluation',
      'Nasolacrimal duct patency testing (Jones dye test)',
    ],
    ocularUses: [
      'Staining of corneal/conjunctival epithelial defects under cobalt blue light',
      'Seidel test for wound or bleb leak',
      'Applanation tonometry',
      'Tear film break-up time measurement',
      'RGP contact lens fitting evaluation',
    ],
    typicalDosing:
      'Sterile strip moistened with saline and touched to the bulbar conjunctiva or inferior fornix, or 1 drop of a 2% solution; examine under cobalt blue light immediately after instillation',
    concentrations: ['1%', '2%', '0.6% (combination with proparacaine)', 'Impregnated paper strips'],
    formulations: ['Solution', 'Strip'],
    route: 'Topical ophthalmic (strip or solution)',
    sideEffects: {
      ocular: [
        'Transient stinging',
        'Temporary yellow-orange staining of skin/tears',
        'Rare allergic conjunctivitis to preservative',
      ],
      systemic: [
        'Minimal with topical use; nausea, vomiting, and rare anaphylaxis are associated with intravenous fluorescein angiography, a separate route/use not relevant to topical ophthalmic staining',
      ],
    },
    contraindications: [
      'Known hypersensitivity to fluorescein',
      'Avoid instillation with soft contact lenses in place (can permanently stain hydrogel lenses) — remove lenses before use',
    ],
    precautions: [
      'Use single-use sterile strips or preservative-free unit-dose preparations when possible to avoid Pseudomonas aeruginosa contamination risk associated with multi-dose bottles',
      'Combine with a topical anesthetic before tonometry to reduce discomfort',
      'Warn patients that skin/clothing staining is temporary',
    ],
    drugInteractions: ['None clinically significant for topical use'],
    patientCounseling: [
      'Temporary yellow-orange staining of the tears/skin around the eye is normal and will resolve',
      'Do not reinsert contact lenses until cleared by the provider; soft lenses should generally be avoided the same day',
      'Mild, brief stinging is expected',
    ],
    pregnancyLactation:
      'Topical ophthalmic fluorescein has negligible systemic absorption and is considered safe in pregnancy/lactation; intravenous fluorescein angiography is a different route with separate systemic considerations.',
    pediatricConsiderations: [
      'Widely and routinely used in infants and children for corneal staining, Seidel testing, and tonometry; no pediatric-specific dosing restriction, though single-use strips/preservative-free unit doses are preferred over multi-dose bottles in all ages to reduce contamination risk.',
    ],
    monitoring: ['Visual inspection of the staining pattern at the time of use'],
    clinicalPearls: [
      'Fluorescein stains areas of epithelial cell loss/basement membrane exposure, not intact epithelium, because the dye pools in the hydrophilic stroma once the hydrophobic epithelial barrier is disrupted',
      'Seidel test: apply concentrated fluorescein over a suspected wound leak — a stream of dilute (dark) fluorescein appearing within the concentrated (orange) dye under cobalt blue light indicates a positive Seidel sign (active aqueous leak)',
      'Historically associated with Pseudomonas aeruginosa contamination in multi-dose bottles — single-use strips/vials are standard of care',
      'Also used in intravenous form for fundus fluorescein angiography, a distinct preparation and route from topical staining use',
    ],
    highYield: [
      'Stains areas of epithelial defect/basement membrane exposure, examined under cobalt blue light (peak absorption ~465-490 nm, emission ~520-530 nm)',
      'Positive Seidel test (a stream of dilute dye within pooled dye) detects an active aqueous wound leak — critical in trauma and post-surgical assessment',
      'Multi-dose bottles are historically linked to Pseudomonas contamination — use single-use strips',
      'Also used for tear break-up time, applanation tonometry, RGP lens fitting, and the Jones dye test in addition to defect staining',
    ],
    references: [
      { label: 'Diagnostic dyes in ocular surface examination', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Fluorescein sodium ophthalmic strip prescribing information', source: 'Drug package insert' },
    ],
  },
  {
    id: 'lissamine-green',
    genericName: 'Lissamine green',
    brandNames: ['Lissamine Green (impregnated strips)'],
    drugClass: 'Other',
    mechanismOfAction:
      'Vital dye that stains devitalized/dead epithelial cells and mucus on the ocular surface that have lost their normal mucin glycocalyx coating, with minimal staining of healthy epithelium; it produces a staining pattern similar to rose bengal but is much better tolerated (less stinging) since it does not require an intact epithelial barrier to cause discomfort.',
    indications: [
      'Evaluation of dry eye disease and ocular surface disease via staining of devitalized conjunctival and corneal epithelial cells',
      'Assessment of conjunctivochalasis and lid-wiper epitheliopathy',
    ],
    ocularUses: [
      'Ocular surface staining in dry eye evaluation (more sensitive than fluorescein for conjunctival staining)',
      'Grading ocular surface disease severity (e.g., van Bijsterveld or Oxford grading scales)',
      'Detection of lid-wiper epitheliopathy in contact lens-related dry eye',
    ],
    typicalDosing:
      'Sterile strip moistened with saline applied to the bulbar conjunctiva; examine under white or red-free light within a few minutes of instillation',
    concentrations: ['Impregnated paper strips (typical clinical form)', '1% solution (less commonly used than strips)'],
    formulations: ['Strip', 'Solution'],
    route: 'Topical ophthalmic (strip)',
    sideEffects: {
      ocular: ['Mild transient stinging (less than rose bengal)', 'Temporary green discoloration of the tear film'],
      systemic: ['None significant — negligible systemic absorption'],
    },
    contraindications: ['Known hypersensitivity to lissamine green'],
    precautions: [
      'Remove contact lenses before use',
      'Best observed within a few minutes of instillation, as staining can fade quickly',
    ],
    drugInteractions: ['None clinically significant'],
    patientCounseling: [
      'A temporary green tint to the tears is expected and will resolve',
      'Mild stinging may occur but is generally well tolerated',
    ],
    pregnancyLactation: 'Negligible systemic absorption; considered safe for topical diagnostic use in pregnancy/lactation.',
    pediatricConsiderations: [
      'No pediatric-specific dosing restriction; used safely across all ages for ocular surface staining, and is generally better tolerated (less stinging) than rose bengal in cooperative pediatric patients.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: ['Visual grading of the staining pattern at the time of use'],
    clinicalPearls: [
      'Preferred over rose bengal for ocular surface staining because it does not sting damaged/healthy tissue as severely, since rose bengal is directly toxic to healthy cells',
      'More sensitive than fluorescein for detecting conjunctival staining in dry eye disease, while fluorescein remains superior for corneal epithelial defects',
      'Often used together with fluorescein in dry eye workups: fluorescein highlights the cornea, lissamine green highlights the conjunctiva',
    ],
    highYield: [
      'Stains devitalized cells/mucus lacking a mucin coating — much better tolerated than rose bengal despite a similar staining pattern',
      'More sensitive than fluorescein for conjunctival staining in dry eye evaluation (used in DEWS/Oxford grading systems)',
      'Complementary to fluorescein: lissamine green highlights the conjunctiva while fluorescein highlights the cornea',
    ],
    references: [
      { label: 'Vital dyes in ocular surface disease assessment', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'TFOS DEWS II diagnostic methodology report', source: 'AAO Preferred Practice Pattern' },
    ],
  },
]
