import type { Drug } from '../../types/drug'

export const antiInflammatoryDrugs: Drug[] = [
  // ============================================================
  // STEROIDS
  // ============================================================
  {
    id: 'prednisolone-acetate',
    genericName: 'Prednisolone acetate',
    brandNames: ['Pred Forte', 'Pred Mild', 'Omnipred', 'Econopred Plus'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Synthetic glucocorticoid that diffuses into cells and binds cytoplasmic glucocorticoid receptors. The complex translocates to the nucleus and induces synthesis of lipocortin (annexin-1), which inhibits phospholipase A2. This blocks release of arachidonic acid from membrane phospholipids, suppressing production of both prostaglandins (COX pathway) and leukotrienes (LOX pathway). Also downregulates pro-inflammatory cytokines and reduces capillary permeability, fibroblast proliferation, and leukocyte migration.',
    indications: [
      'Postoperative inflammation (cataract, refractive, glaucoma surgery)',
      'Anterior uveitis / iritis',
      'Allergic conjunctivitis (short-term, severe cases)',
      'Episcleritis and scleritis (adjunct)',
      'Corneal graft rejection prophylaxis',
      'Vernal/atopic keratoconjunctivitis flares',
    ],
    ocularUses: [
      'Suppression of anterior segment inflammation',
      'Prevention/treatment of postoperative cystoid macular edema (adjunct)',
      'Reduction of corneal graft rejection risk',
    ],
    typicalDosing:
      '1 drop 4 times daily, tapered gradually over 1-4 weeks depending on severity; severe uveitis may start every 1-2 hours while awake with slow taper to avoid rebound inflammation.',
    concentrations: ['1% suspension (Pred Forte)', '0.12% suspension (Pred Mild)', '1% (Omnipred)'],
    formulations: ['Suspension'],
    route: 'Topical ophthalmic suspension',
    sideEffects: {
      ocular: [
        'Elevated intraocular pressure / steroid-induced (steroid-response) glaucoma, especially with prolonged use in "steroid responders"',
        'Posterior subcapsular cataract formation with chronic/long-term use',
        'Delayed wound healing',
        'Increased susceptibility to bacterial, fungal, and viral (especially herpetic) ocular infections',
        'Ptosis and mydriasis with prolonged use',
        'Corneal/scleral thinning and perforation risk with prolonged use, especially over thinned tissue',
        'Blurred vision immediately after instillation (suspension)',
      ],
      systemic: [
        'Minimal with topical ocular use, but systemic absorption possible with prolonged/frequent use or in children',
        'Adrenal suppression (rare, high-dose chronic topical use)',
        'Should be shaken well before use (suspension); poor shaking reduces efficacy, not a true side effect but common counseling point',
      ],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis) — steroids can worsen viral replication and prolong/exacerbate the infection',
      'Active fungal disease of ocular structures',
      'Active mycobacterial infection of the eye',
      'Untreated bacterial, viral, or fungal ocular infection',
      'Hypersensitivity to any component',
    ],
    precautions: [
      'Monitor IOP at baseline and at follow-up visits, especially beyond 2 weeks of use',
      'Use with caution in patients with glaucoma or family history of glaucoma',
      'Taper slowly rather than stopping abruptly to avoid rebound inflammation',
      'Use cautiously in cases of corneal/scleral thinning',
      'Prolonged use may mask signs of underlying infection',
    ],
    drugInteractions: [
      'Additive IOP-elevating effect with other corticosteroids',
      'May reduce effectiveness of antiviral therapy if used alone against herpetic disease without antiviral coverage',
    ],
    patientCounseling: [
      'Shake suspension well before each use',
      'Do not stop abruptly — follow the prescribed taper schedule',
      'Return for IOP checks as scheduled, especially with extended use',
      'Report eye pain, decreased vision, halos, or significant redness immediately',
      'Wait several minutes between different eye drop instillations',
    ],
    pregnancyLactation:
      'Topical ophthalmic corticosteroids are generally considered low systemic risk; use only if clearly needed and under practitioner guidance. Systemic corticosteroids carry more established risk data; topical ocular exposure is much lower.',
    pediatricConsiderations: [
      'Commonly used in children, including after pediatric cataract surgery; pediatric eyes may be more prone to steroid-induced IOP elevation, so closer IOP monitoring than in adults is warranted.',
      'No pediatric-restricted FDA labeling beyond standard steroid precautions; dosing/frequency and taper should be individualized rather than weight-based for this topical ocular route.',
    ],
    relatedConditionIds: ['anterior-uveitis', 'episcleritis', 'scleritis', 'vernal-keratoconjunctivitis', 'atopic-keratoconjunctivitis'],
    monitoring: [
      'IOP at baseline, then at each follow-up (particularly 2-4 weeks after initiation)',
      'Anterior chamber cell/flare grading to assess treatment response',
      'Lens exam for early cataract changes with chronic use',
      'Corneal integrity/epithelial status if used with corneal thinning',
    ],
    clinicalPearls: [
      'Prednisolone acetate 1% is the most commonly used and most potent topical steroid for routine postoperative and anterior segment inflammation.',
      'As a suspension, it must be shaken vigorously before instillation or bioavailability drops significantly.',
      'Pred Mild (0.12%) is a lower-potency option for milder inflammation or patients at higher risk of IOP response.',
      'Always rule out herpetic disease before initiating steroids for a red eye.',
    ],
    highYield: [
      'Steroid-induced ocular hypertension typically develops in the first 2-6 weeks of therapy and is more common with potent agents like prednisolone acetate 1% — this is a classic NBEO testing point.',
      'Posterior subcapsular cataract is the classic cataract morphology associated with chronic corticosteroid use (topical or systemic).',
      'Never prescribe topical steroids for a red eye without first ruling out herpes simplex keratitis (dendritic ulcer) — steroids can worsen herpetic keratitis and lead to corneal melting.',
      'Suspension formulations (e.g., Pred Forte) must be shaken before use, unlike solution-based steroids.',
    ],
    references: [
      { label: 'Prednisolone acetate ophthalmic', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Corticosteroid pharmacology and IOP response', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'dexamethasone',
    genericName: 'Dexamethasone',
    brandNames: ['Maxidex', 'Ozurdex (implant)', 'Dexycu (intraocular suspension)'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Potent synthetic glucocorticoid that binds intracellular glucocorticoid receptors, inducing lipocortin-1 to inhibit phospholipase A2 and subsequently suppress prostaglandin and leukotriene synthesis. Also decreases vascular permeability, leukocyte infiltration, and fibroblast/collagen deposition, producing broad anti-inflammatory and anti-fibrotic effects.',
    indications: [
      'Anterior uveitis',
      'Postoperative inflammation',
      'Allergic and inflammatory conjunctivitis',
      'Chemical/thermal burns (adjunct)',
      'Scleritis/episcleritis (adjunct)',
    ],
    ocularUses: [
      'Anti-inflammatory therapy for anterior segment disease',
      'Combined with antibiotics in postoperative combination drops (e.g., tobramycin/dexamethasone)',
      'Sustained-release intravitreal implant (Ozurdex) for macular edema and posterior uveitis',
    ],
    typicalDosing:
      '1-2 drops 4-6 times daily for moderate disease, tapered as inflammation resolves; ointment applied 1-3 times daily as an alternative for nighttime coverage.',
    concentrations: ['0.1% suspension (Maxidex)', '0.05% ointment', '0.7 mg intravitreal implant (Ozurdex)'],
    formulations: ['Suspension', 'Ointment', 'Intravitreal implant'],
    route: 'Topical ophthalmic suspension/ointment; intravitreal implant (specialty use)',
    sideEffects: {
      ocular: [
        'Elevated IOP / steroid-response glaucoma — dexamethasone is among the most potent steroids for raising IOP',
        'Posterior subcapsular cataract with chronic use',
        'Delayed corneal/wound healing',
        'Increased risk of secondary ocular infection (bacterial, fungal, viral reactivation)',
        'Corneal thinning/perforation in predisposed eyes',
        'Blurred vision immediately after instillation',
      ],
      systemic: [
        'Systemic absorption is low with topical use but higher with intravitreal implant',
        'Rare adrenal suppression with prolonged high-dose topical use, particularly in children',
      ],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis)',
      'Active fungal or mycobacterial ocular infection',
      'Most viral diseases of the cornea and conjunctiva',
      'Untreated active ocular infection',
    ],
    precautions: [
      'One of the most potent topical steroids for raising IOP — monitor closely',
      'Use lowest effective dose/frequency and taper appropriately',
      'Caution with corneal thinning disorders',
      'Avoid prolonged use without follow-up examination',
    ],
    drugInteractions: [
      'Additive IOP elevation when combined with other steroids',
      'Often formulated with antibiotics (e.g., neomycin, tobramycin) — watch for additive hypersensitivity reactions from the antibiotic component',
    ],
    patientCounseling: [
      'Shake suspension before use',
      'Do not discontinue abruptly; follow the taper',
      'Report eye pain, halos, or vision changes promptly',
      'Attend all scheduled IOP/follow-up visits',
    ],
    pregnancyLactation:
      'Topical ocular dexamethasone has low systemic absorption; use only when clearly needed. Intravitreal implants have not been extensively studied in pregnancy — use caution and weigh benefit versus risk.',
    pediatricConsiderations: [
      'Topical dexamethasone is used in children for postoperative and uveitic inflammation despite no pediatric-specific FDA labeling; monitor IOP and lens status closely given the heightened steroid-response risk in pediatric eyes.',
      'The Ozurdex intravitreal implant has not had safety/effectiveness established in pediatric patients.',
    ],
    relatedConditionIds: ['anterior-uveitis', 'cystoid-macular-edema', 'retinal-vein-occlusion', 'scleritis', 'episcleritis'],
    monitoring: [
      'IOP monitoring at each visit, especially after 2+ weeks of therapy',
      'Slit lamp exam for cell/flare and corneal integrity',
      'Lens exam for cataract changes with long-term use',
    ],
    clinicalPearls: [
      'Dexamethasone and prednisolone acetate are both considered "strong" steroids with high anti-inflammatory potency and correspondingly higher IOP-elevation risk compared to loteprednol or fluorometholone.',
      'Commonly compounded with antibiotics (e.g., tobramycin-dexamethasone, neomycin/polymyxin B/dexamethasone) for postoperative regimens.',
      'The intravitreal implant (Ozurdex) provides sustained delivery for months, useful in macular edema from retinal vein occlusion or posterior uveitis.',
    ],
    highYield: [
      'Dexamethasone and prednisolone acetate carry the highest relative risk of steroid-induced IOP elevation among ophthalmic corticosteroids — a frequently tested contrast with "soft" steroids like loteprednol and fluorometholone.',
      'Steroid responders (a genetically predisposed subset of the population) can develop significant IOP elevation within weeks of starting a potent topical steroid.',
      'Always screen for herpetic keratitis before initiating any topical steroid for corneal or conjunctival disease.',
    ],
    references: [
      { label: 'Dexamethasone ophthalmic pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Dexamethasone ophthalmic', source: 'drug package insert' },
    ],
  },
  {
    id: 'loteprednol-etabonate',
    genericName: 'Loteprednol etabonate',
    brandNames: ['Lotemax', 'Alrex', 'Inveltys', 'Eysuvis'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'A "soft" or site-specific corticosteroid engineered with an ester (rather than ketone) at the C-20 position. It binds glucocorticoid receptors to inhibit phospholipase A2, lipocortin induction, and downstream prostaglandin/leukotriene synthesis similarly to other steroids, but is rapidly metabolized by ocular tissue esterases into an inactive metabolite once it exerts its effect. This structural modification limits systemic and prolonged intraocular exposure, lowering the risk of IOP elevation relative to ketone-based steroids (prednisolone, dexamethasone).',
    indications: [
      'Postoperative inflammation and pain (cataract surgery)',
      'Seasonal allergic conjunctivitis (0.2% Alrex)',
      'Dry eye disease short-term flare (Eysuvis)',
      'Anterior uveitis (0.5% Lotemax, off-label/approved uses vary by formulation)',
      'General anterior segment inflammation where lower IOP risk is desired',
    ],
    ocularUses: [
      'Anti-inflammatory treatment with reduced IOP-elevation risk compared to traditional steroids',
      'Preferred agent for patients with glaucoma or known steroid responders who require topical steroid therapy',
      'Short-term dry eye disease flare management',
    ],
    typicalDosing:
      '1 drop 4 times daily (0.5% for postop/uveitis) or 1 drop 2-4 times daily (0.2% for allergic conjunctivitis), tapered per clinical response.',
    concentrations: ['0.5% suspension/gel (Lotemax)', '0.2% suspension (Alrex)', '1% suspension (Inveltys, Eysuvis)'],
    formulations: ['Suspension', 'Gel'],
    route: 'Topical ophthalmic suspension/gel',
    sideEffects: {
      ocular: [
        'Elevated IOP can still occur, but at a significantly lower rate/severity than prednisolone acetate or dexamethasone due to the ester structure and rapid inactivation',
        'Cataract formation possible with chronic use, though lower risk than ketone steroids',
        'Delayed wound healing',
        'Increased risk of ocular infection with prolonged use',
        'Blurred vision on instillation, stinging/burning',
      ],
      systemic: ['Minimal systemic absorption; systemic side effects are rare'],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis)',
      'Active fungal disease of ocular structures',
      'Most active viral diseases of the cornea and conjunctiva',
      'Mycobacterial infection of the eye',
    ],
    precautions: [
      'Still requires IOP monitoring, particularly with extended use, though lower risk than potent ketone steroids',
      'Not a substitute for treating the underlying infectious cause if inflammation is infection-related',
      'Shake suspension well before use',
    ],
    drugInteractions: [
      'Additive IOP effect with other corticosteroids (though blunted relative to stronger agents)',
    ],
    patientCounseling: [
      'Shake bottle well before each use',
      'Continue use for the full prescribed course/taper even if symptoms improve',
      'Report any vision changes, pain, or increasing redness',
    ],
    pregnancyLactation:
      'Low systemic absorption; use only if clearly needed. Considered a reasonable option when a topical steroid is required and systemic exposure should be minimized.',
    pediatricConsiderations: [
      'Lotemax 0.5% gel is FDA-approved for pediatric use, supported by a trial in patients from birth to under 11 years (mean age 3) undergoing cataract surgery, showing safety/efficacy comparable to prednisolone acetate 1%.',
      'Inveltys, Eysuvis, and Lotemax SM have not had age-related effects studied in the pediatric population and are not established as safe/effective in children.',
    ],
    relatedConditionIds: ['dry-eye-disease', 'anterior-uveitis'],
    monitoring: [
      'IOP checks at follow-up visits, especially with therapy beyond 2-4 weeks',
      'Slit lamp exam for anterior chamber inflammation response',
      'Lens exam with long-term/repeated use',
    ],
    clinicalPearls: [
      'Loteprednol is the classic example of a "soft steroid" — the ester at C-20 allows rapid breakdown by tissue esterases after exerting its anti-inflammatory effect, reducing systemic/prolonged exposure.',
      'Often chosen for patients needing chronic or repeated steroid courses (e.g., dry eye flares, allergic conjunctivitis, post-refractive surgery) due to its more favorable IOP safety profile.',
      'Available in gel formulation (Lotemax Gel) which some patients tolerate better than suspension.',
    ],
    highYield: [
      'Loteprednol has a lower IOP-elevation risk than prednisolone acetate or dexamethasone because of its ester (rather than ketone) structure at C-20, which allows rapid inactivation by ocular esterases — a classic NBEO pharmacology contrast question.',
      'Despite the lower risk, loteprednol can still raise IOP and cause cataracts with chronic use — "safer" does not mean "risk-free."',
      'Loteprednol is a preferred choice for glaucoma patients or known steroid responders who require topical corticosteroid therapy.',
    ],
    references: [
      { label: 'Loteprednol etabonate ("soft steroid") mechanism', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Loteprednol etabonate ophthalmic suspension', source: 'drug package insert' },
    ],
  },
  {
    id: 'fluorometholone',
    genericName: 'Fluorometholone',
    brandNames: ['FML', 'FML Forte', 'Flarex'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Synthetic corticosteroid that binds glucocorticoid receptors to induce lipocortin, inhibiting phospholipase A2 and reducing prostaglandin/leukotriene-mediated inflammation. Possesses relatively poor corneal/intraocular penetration compared to prednisolone acetate and dexamethasone, which correlates with a lower propensity to raise IOP, though it is also generally less potent for deep anterior chamber (uveitic) inflammation.',
    indications: [
      'Mild to moderate allergic and inflammatory conjunctivitis',
      'Blepharitis-associated inflammation',
      'Superficial ocular inflammation (episcleritis, mild keratitis)',
      'Postoperative inflammation in lower-risk cases',
    ],
    ocularUses: [
      'Anti-inflammatory treatment for superficial/anterior ocular surface inflammation',
      'Lower-potency alternative when reduced IOP risk is prioritized over maximal anti-inflammatory strength',
    ],
    typicalDosing: '1-2 drops 2-4 times daily, tapered based on response.',
    concentrations: ['0.1% suspension/ointment (FML)', '0.25% suspension (FML Forte)', '0.1% (Flarex)'],
    formulations: ['Suspension', 'Ointment'],
    route: 'Topical ophthalmic suspension/ointment',
    sideEffects: {
      ocular: [
        'Elevated IOP / steroid response — lower relative risk than prednisolone acetate or dexamethasone due to poor intraocular penetration, but still possible with prolonged use',
        'Cataract formation with chronic use',
        'Delayed epithelial/wound healing',
        'Increased susceptibility to ocular infection',
      ],
      systemic: ['Minimal systemic absorption and systemic effects with topical ocular use'],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis)',
      'Active fungal or mycobacterial ocular disease',
      'Most viral diseases of the cornea and conjunctiva',
    ],
    precautions: [
      'Because of reduced penetration, may be inadequate for treating deep anterior chamber inflammation (e.g., significant uveitis)',
      'Still requires periodic IOP monitoring with prolonged use',
    ],
    drugInteractions: ['Additive IOP effects with concurrent corticosteroid use'],
    patientCounseling: [
      'Shake suspension well before instillation',
      'Complete the full taper as directed rather than stopping abruptly',
      'Report vision changes, pain, or worsening redness',
    ],
    pregnancyLactation:
      'Low systemic absorption with topical use; use only if clearly indicated, at the lowest effective dose.',
    pediatricConsiderations: [
      'FML is approved for use in children 2 years of age and older; safety/effectiveness have not been established below age 2.',
      'Even short reducing-dose courses in pediatric ocular surface disease have been reported to elevate IOP, so IOP monitoring is still warranted despite its lower-potency reputation.',
    ],
    relatedConditionIds: ['blepharitis', 'episcleritis', 'conjunctivitis'],
    monitoring: [
      'IOP monitoring with extended therapy',
      'Anterior segment exam to assess inflammatory response',
      'Lens exam with chronic use',
    ],
    clinicalPearls: [
      'Fluorometholone is considered a lower-potency, lower-IOP-risk steroid, often used for milder allergic or superficial inflammatory conditions rather than significant uveitis.',
      'Its reduced corneal penetration is both an advantage (lower IOP risk) and a limitation (less effective for deep intraocular inflammation).',
    ],
    highYield: [
      'Fluorometholone has reduced corneal/intraocular penetration compared to prednisolone acetate, giving it a lower IOP-elevation risk but also making it less effective for treating significant anterior chamber (uveitic) inflammation.',
      'Still capable of causing posterior subcapsular cataracts and IOP elevation with chronic use, despite being a "milder" steroid.',
      'A good NBEO distractor: FML for mild surface inflammation, prednisolone acetate for uveitis/postop inflammation requiring deeper penetration.',
    ],
    references: [
      { label: 'Fluorometholone ophthalmic pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Fluorometholone ophthalmic suspension', source: 'drug package insert' },
    ],
  },
  {
    id: 'difluprednate',
    genericName: 'Difluprednate',
    brandNames: ['Durezol'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Difluorinated derivative of prednisolone with enhanced lipophilicity and receptor-binding affinity, allowing superior corneal penetration and potent suppression of phospholipase A2-mediated inflammatory cascades (prostaglandins and leukotrienes). Formulated as an emulsion (rather than suspension), which improves consistency of dosing without the need for vigorous shaking. It is among the most potent topical ophthalmic corticosteroids available.',
    indications: [
      'Postoperative inflammation and pain following ocular surgery',
      'Endogenous anterior uveitis',
      'Macular edema (off-label use in select cases)',
    ],
    ocularUses: [
      'Potent anti-inflammatory therapy for significant anterior segment inflammation',
      'Often used for more severe uveitis or postoperative inflammation requiring a strong steroid effect',
    ],
    typicalDosing:
      '1 drop 2 times daily for postoperative inflammation (up to 4 times daily), or 1 drop 4 times daily for 2 weeks followed by taper for uveitis.',
    concentrations: ['0.05% emulsion'],
    formulations: ['Emulsion'],
    route: 'Topical ophthalmic emulsion',
    sideEffects: {
      ocular: [
        'High risk of elevated IOP / steroid-response glaucoma — difluprednate is one of the most potent topical steroids and carries a correspondingly higher IOP risk, even with twice-daily dosing',
        'Posterior subcapsular cataract with chronic use',
        'Delayed wound healing',
        'Increased risk of ocular infection',
        'Ocular pain, photophobia, blurred vision, eye irritation',
        'Corneal edema, iritis exacerbation (paradoxical in rare cases)',
      ],
      systemic: ['Low but nonzero systemic absorption given high potency; rare systemic corticosteroid effects with prolonged use'],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis)',
      'Active fungal ocular disease',
      'Active mycobacterial ocular infection',
      'Most active viral diseases of the cornea and conjunctiva',
    ],
    precautions: [
      'Higher potency mandates closer IOP monitoring than milder steroids',
      'Use lowest effective dose and taper as inflammation resolves',
      'Caution in pediatric patients and those with prior steroid IOP response',
    ],
    drugInteractions: ['Additive IOP-elevating effect with other corticosteroids'],
    patientCounseling: [
      'Shake gently before use (emulsion, less critical than suspension but still recommended)',
      'Do not discontinue abruptly; follow prescribed taper',
      'Report eye pain, halos, or blurred vision promptly',
      'Attend follow-up visits for IOP monitoring',
    ],
    pregnancyLactation:
      'Limited human data; use only if potential benefit outweighs risk given its high potency and systemic absorption potential relative to other topical steroids.',
    pediatricConsiderations: [
      'Studied in a dedicated FDA-requested trial of 79 children aged 0-3 years for post-cataract-surgery inflammation, showing a safety profile comparable to prednisolone acetate 1%.',
      'As one of the most potent topical steroids, pediatric patients should still be monitored closely for IOP elevation given the known heightened susceptibility to steroid response in children.',
    ],
    offLabelUses: ['Cystoid macular edema (e.g., pseudophakic or uveitic CME), used off-label in select cases'],
    relatedConditionIds: ['anterior-uveitis', 'cystoid-macular-edema'],
    monitoring: [
      'Frequent IOP checks given high potency, especially in the first few weeks',
      'Anterior chamber cell/flare grading',
      'Lens exam with repeated or chronic courses',
    ],
    clinicalPearls: [
      'Difluprednate 0.05% is considered comparable or superior in potency to prednisolone acetate 1%, allowing less frequent dosing (twice daily) for similar anti-inflammatory effect.',
      'Being an emulsion rather than a suspension, it does not require vigorous shaking, improving dosing consistency.',
      'Its high potency means IOP elevation can occur more rapidly and more severely than with weaker agents — vigilant monitoring is essential.',
    ],
    highYield: [
      'Difluprednate is one of the most potent topical corticosteroids and carries a high risk of IOP elevation despite being dosed less frequently (twice daily) than prednisolone acetate.',
      'Unlike suspension-based steroids, difluprednate is an emulsion and does not require the same vigorous shaking — a useful formulation distinction on exams.',
      'Same contraindication logic applies: never use in active herpetic keratitis.',
    ],
    references: [
      { label: 'Difluprednate ophthalmic emulsion', source: 'drug package insert' },
      { label: 'Difluprednate potency and pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'rimexolone',
    genericName: 'Rimexolone',
    brandNames: ['Vexol'],
    drugClass: 'Steroids',
    mechanismOfAction:
      'Corticosteroid structurally modified to reduce systemic and intraocular bioavailability relative to older steroids, while retaining anti-inflammatory activity through the classic glucocorticoid receptor / lipocortin / phospholipase A2 inhibition pathway, suppressing prostaglandin and leukotriene production. Designed to provide anti-inflammatory efficacy with a comparatively more favorable IOP profile than prednisolone acetate, though less commonly used today than loteprednol.',
    indications: [
      'Postoperative inflammation following ocular surgery',
      'Anterior uveitis',
    ],
    ocularUses: [
      'Anti-inflammatory treatment of anterior segment inflammation, particularly postoperative and uveitic inflammation',
    ],
    typicalDosing:
      '1-2 drops up to 4 times daily for postoperative inflammation; up to hourly initially for anterior uveitis, then tapered.',
    concentrations: ['1% suspension'],
    formulations: ['Suspension'],
    route: 'Topical ophthalmic suspension',
    sideEffects: {
      ocular: [
        'Elevated IOP / steroid-response glaucoma, though reported at somewhat lower rates than prednisolone acetate in some studies',
        'Posterior subcapsular cataract with chronic use',
        'Delayed wound healing',
        'Increased risk of secondary ocular infection',
        'Transient stinging/burning, blurred vision on instillation',
      ],
      systemic: ['Minimal systemic absorption with typical topical dosing'],
    },
    contraindications: [
      'Active herpes simplex keratitis (dendritic keratitis)',
      'Active fungal disease of ocular structures',
      'Active mycobacterial ocular infection',
      'Most active viral diseases of the cornea and conjunctiva',
    ],
    precautions: [
      'IOP monitoring recommended, particularly beyond a few weeks of use',
      'Shake suspension well before use',
      'Use with caution in patients with a history of steroid-induced IOP response',
    ],
    drugInteractions: ['Additive IOP-elevating effect with other corticosteroids'],
    patientCounseling: [
      'Shake well before each use',
      'Complete the prescribed taper rather than stopping abruptly',
      'Report any eye pain, redness, or vision changes',
    ],
    pregnancyLactation:
      'Limited specific human data; use only if clearly needed, at the lowest effective dose, similar to other topical steroids.',
    pediatricConsiderations: [
      'Pediatric data are limited; a postoperative strabismus surgery study found rimexolone 1% produced significantly higher mean IOP than fluorometholone 0.1% in the fellow eye, suggesting extra caution and IOP monitoring when used in children.',
    ],
    relatedConditionIds: ['anterior-uveitis'],
    monitoring: [
      'IOP checks at follow-up',
      'Anterior chamber inflammation grading',
      'Lens exam with prolonged use',
    ],
    clinicalPearls: [
      'Rimexolone is less commonly prescribed today, having been largely supplanted by loteprednol for cases where a lower-IOP-risk steroid is desired.',
      'Still functions as a legitimate alternative for postoperative and uveitic inflammation when other agents are not tolerated or available.',
    ],
    highYield: [
      'Rimexolone is another example of a corticosteroid engineered for reduced systemic/intraocular bioavailability, conceptually similar in intent to loteprednol, though structurally distinct.',
      'Despite a somewhat improved IOP profile relative to prednisolone acetate, IOP elevation and cataract formation remain real risks with chronic use.',
      'Same absolute contraindication as all steroids: active herpetic keratitis.',
    ],
    references: [
      { label: 'Rimexolone ophthalmic suspension', source: 'drug package insert' },
      { label: 'Rimexolone pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ============================================================
  // NSAIDs
  // ============================================================
  {
    id: 'ketorolac',
    genericName: 'Ketorolac tromethamine',
    brandNames: ['Acular', 'Acular LS', 'Acuvail'],
    drugClass: 'NSAIDs',
    mechanismOfAction:
      'Nonselective cyclooxygenase (COX-1 and COX-2) inhibitor that blocks conversion of arachidonic acid to prostaglandins. Reduces prostaglandin-mediated inflammation, vasodilation, and miosis. Unlike corticosteroids, does not affect the lipoxygenase (leukotriene) pathway and does not carry the same infection or IOP risks.',
    indications: [
      'Seasonal allergic conjunctivitis (itching relief)',
      'Postoperative inflammation and pain following cataract surgery',
      'Prevention/reduction of intraoperative miosis',
      'Cystoid macular edema prevention/treatment (adjunct, off-label use for CME)',
      'Ocular pain following corneal refractive surgery or corneal abrasion (short-term, off-label)',
    ],
    ocularUses: [
      'Anti-inflammatory and analgesic effect on the ocular surface and anterior segment without corticosteroid-associated IOP/cataract risk',
      'Often used in combination with or as an alternative/adjunct to steroids postoperatively',
    ],
    typicalDosing: '1 drop 4 times daily (0.4-0.5% formulations) or 1 drop twice daily (Acuvail preservative-free).',
    concentrations: ['0.4% (Acular LS)', '0.5% (Acular)', '0.45% (Acuvail, preservative-free unit dose)'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation (common)',
        'Corneal epithelial toxicity, punctate keratitis with prolonged use',
        'Corneal melting/perforation with prolonged or excessive use, especially in patients with compromised corneal epithelium or after multiple ocular surgeries',
        'Can mask signs/symptoms of ongoing corneal infection or delayed epithelial healing due to analgesic effect masking pain',
        'Delayed wound/epithelial healing',
      ],
      systemic: [
        'Systemic NSAID-related effects unlikely with topical ocular use but theoretically possible with prolonged/high-frequency use (e.g., bleeding tendency)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to ketorolac or other NSAIDs',
      'Active or recent history of bleeding tendencies (relative caution)',
      'Use with caution in patients with rheumatoid arthritis or those on other topical NSAIDs (higher risk of corneal complications)',
    ],
    precautions: [
      'Avoid prolonged use beyond the labeled/prescribed duration due to corneal melt risk',
      'Use cautiously in patients with dry eye or compromised corneal epithelium',
      'Do not use with contact lenses in place (soft lenses) unless directed',
      'Caution in patients on anticoagulant/antiplatelet therapy',
    ],
    drugInteractions: [
      'Additive corneal toxicity/melt risk when combined with topical corticosteroids in eyes with epithelial compromise',
      'Theoretical additive bleeding risk with systemic anticoagulants/antiplatelet agents',
    ],
    patientCounseling: [
      'Expect transient stinging/burning upon instillation',
      'Do not exceed the prescribed duration of use',
      'Report increasing pain, redness, or vision changes immediately, as NSAIDs can mask worsening infection or corneal breakdown',
      'Avoid use with soft contact lenses unless specifically instructed',
    ],
    pregnancyLactation:
      'Topical ocular NSAIDs have limited systemic absorption; however, systemic NSAIDs are generally avoided in the third trimester due to risk of premature closure of the ductus arteriosus — use topical ocular NSAIDs cautiously and only if benefit outweighs risk, particularly late in pregnancy.',
    pediatricConsiderations: [
      'Acular (0.5%) and Acuvail (0.45%) are approved for postoperative cataract-surgery pain/inflammation in children 2 years and older; safety/effectiveness below age 2 has not been established.',
      'Acular LS (0.4%) is approved for post-corneal-refractive-surgery pain in patients 3 years and older.',
    ],
    offLabelUses: ['Cystoid macular edema prevention/treatment (adjunct)', 'Ocular pain after corneal abrasion (short-term)'],
    relatedConditionIds: ['cystoid-macular-edema', 'corneal-abrasion', 'conjunctivitis'],
    monitoring: [
      'Corneal epithelial integrity, especially with use beyond a few days to weeks',
      'Symptom resolution (itching, postoperative pain)',
      'Watch for signs of corneal melt in at-risk patients (dry eye, prior surgery, rheumatoid arthritis)',
    ],
    clinicalPearls: [
      'Ketorolac is frequently used to relieve ocular itching in allergic conjunctivitis and for postoperative analgesia after cataract surgery.',
      'Unlike steroids, NSAIDs do not raise IOP or predispose to cataract, making them attractive for certain long-term or steroid-sparing regimens, but they carry their own unique corneal risk profile.',
      'Corneal melting with topical NSAIDs is a rare but serious, well-documented complication, particularly with generic formulations and in eyes with compromised epithelium.',
    ],
    highYield: [
      'Topical NSAIDs like ketorolac can mask ocular pain from a worsening corneal infection or epithelial defect, potentially delaying diagnosis and impairing healing — an important safety teaching point.',
      'Corneal melting (keratolysis) is a rare but serious adverse effect of topical NSAID use, especially with prolonged use or in eyes with pre-existing epithelial compromise.',
      'NSAIDs act via COX inhibition (prostaglandin pathway only), in contrast to corticosteroids which block phospholipase A2 and inhibit both the prostaglandin and leukotriene pathways — a frequently tested mechanism distinction.',
      'NSAIDs do not cause steroid-response IOP elevation or cataract, making them useful when steroid side effects need to be avoided.',
    ],
    references: [
      { label: 'Ketorolac tromethamine ophthalmic solution', source: 'drug package insert' },
      { label: 'Topical NSAID mechanism and corneal complications', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'nepafenac',
    genericName: 'Nepafenac',
    brandNames: ['Nevanac', 'Ilevro'],
    drugClass: 'NSAIDs',
    mechanismOfAction:
      'Prodrug NSAID that penetrates the cornea rapidly and is then converted by ocular tissue hydrolases into its active metabolite, amfenac, which inhibits both COX-1 and COX-2, blocking prostaglandin synthesis. The prodrug design enhances corneal penetration relative to other topical NSAIDs, allowing effective intraocular (including posterior segment) prostaglandin suppression.',
    indications: [
      'Postoperative inflammation and pain following cataract surgery',
      'Prevention of postoperative cystoid macular edema',
      'Reduction of pain associated with cataract surgery in diabetic patients (Ilevro indication)',
    ],
    ocularUses: [
      'Perioperative anti-inflammatory and analgesic control for cataract surgery',
      'Prophylaxis against cystoid macular edema, particularly in diabetic patients',
    ],
    typicalDosing:
      '1 drop 3 times daily beginning 1 day prior to surgery, continued through surgery day and for 2 weeks postoperatively (0.1%); once daily dosing available with 0.3% formulation (Ilevro).',
    concentrations: ['0.1% suspension (Nevanac)', '0.3% suspension (Ilevro)'],
    formulations: ['Suspension'],
    route: 'Topical ophthalmic suspension',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation',
        'Punctate keratitis, corneal epithelial breakdown with prolonged use',
        'Rare corneal melting/perforation with excessive or prolonged use, particularly in compromised corneas',
        'Can mask pain from a worsening corneal infection or epithelial defect',
        'Delayed wound healing',
      ],
      systemic: ['Minimal systemic absorption; systemic NSAID effects unlikely with standard topical dosing'],
    },
    contraindications: [
      'Known hypersensitivity to nepafenac or other NSAIDs',
      'Caution in patients with bleeding tendencies or on anticoagulants',
    ],
    precautions: [
      'Avoid use beyond the prescribed/labeled duration due to corneal complication risk',
      'Use cautiously in patients with diabetes, dry eye, rheumatoid arthritis, or prior corneal surgery (higher risk of corneal adverse events)',
      'Shake suspension before use',
    ],
    drugInteractions: [
      'Additive corneal healing complications when combined with topical corticosteroids in compromised corneas',
    ],
    patientCounseling: [
      'Shake bottle before each use',
      'Complete the full perioperative course as directed',
      'Report worsening pain, redness, or vision changes right away',
    ],
    pregnancyLactation:
      'Topical ocular NSAIDs have limited systemic absorption; systemic NSAIDs should be avoided in the third trimester due to risk of premature ductus arteriosus closure — use with caution and only if benefit outweighs risk.',
    pediatricConsiderations: [
      'Nevanac (0.1%) and Ilevro (0.3%) are approved for post-cataract-surgery pain/inflammation in children 10 years and older; safety/effectiveness below age 10 has not been established.',
    ],
    relatedConditionIds: ['cystoid-macular-edema'],
    monitoring: [
      'Corneal epithelial status throughout the perioperative course',
      'Macular status (OCT) in patients at risk for CME, particularly diabetics',
    ],
    clinicalPearls: [
      'As a prodrug, nepafenac achieves better intraocular penetration than ketorolac, supporting its use in CME prophylaxis, including reaching posterior segment tissues.',
      'Ilevro (0.3%) offers once-daily dosing, improving compliance compared to the three-times-daily 0.1% formulation.',
      'Frequently used prophylactically starting the day before cataract surgery.',
    ],
    highYield: [
      'Nepafenac is a prodrug converted to amfenac by corneal hydrolases, giving it superior corneal/intraocular penetration relative to other topical NSAIDs — a key differentiator to know.',
      'Like other topical NSAIDs, it can mask pain from corneal infection/epithelial defects and carries a rare risk of corneal melt with prolonged use.',
      'Widely used for CME prophylaxis after cataract surgery, particularly in diabetic patients who are at elevated CME risk.',
    ],
    references: [
      { label: 'Nepafenac ophthalmic suspension', source: 'drug package insert' },
      { label: 'Nepafenac prodrug pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'bromfenac',
    genericName: 'Bromfenac',
    brandNames: ['Bromday', 'Prolensa', 'BromSite'],
    drugClass: 'NSAIDs',
    mechanismOfAction:
      'Nonselective COX-1/COX-2 inhibitor with a brominated structure that enhances lipophilicity and corneal penetration, allowing effective once-daily dosing. Blocks arachidonic acid conversion to prostaglandins, reducing postoperative inflammation, pain, and prostaglandin-mediated vascular permeability.',
    indications: [
      'Postoperative inflammation following cataract surgery',
      'Reduction of ocular pain after cataract surgery',
    ],
    ocularUses: [
      'Once-daily perioperative anti-inflammatory and analgesic control for cataract surgery',
    ],
    typicalDosing: '1 drop once daily, typically starting 1 day before surgery and continued for about 2 weeks postoperatively.',
    concentrations: ['0.09% (Bromday, Prolensa)', '0.075% (BromSite, with DuraSite delivery vehicle)'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation',
        'Punctate keratitis with prolonged use',
        'Rare corneal melting/perforation with excessive or prolonged use',
        'Can mask pain associated with a developing corneal infection or epithelial defect',
        'Delayed corneal wound healing',
      ],
      systemic: ['Minimal systemic absorption with standard topical dosing'],
    },
    contraindications: [
      'Known hypersensitivity to bromfenac or other NSAIDs',
      'Caution in patients with bleeding disorders or on anticoagulant therapy',
    ],
    precautions: [
      'Avoid prolonged use beyond the labeled/prescribed duration',
      'Use cautiously in patients with rheumatoid arthritis, dry eye, diabetes, or repeat ocular surgeries (elevated corneal complication risk)',
    ],
    drugInteractions: [
      'Additive corneal complication risk when combined with topical corticosteroids in compromised corneas',
    ],
    patientCounseling: [
      'Once-daily dosing improves convenience and compliance',
      'Complete the full prescribed perioperative course',
      'Report increasing pain, redness, or vision changes promptly',
    ],
    pregnancyLactation:
      'Limited systemic absorption with topical use; as with other NSAIDs, caution is advised in the third trimester due to theoretical risk of premature ductus arteriosus closure with systemic NSAID exposure.',
    pediatricConsiderations: [
      'Safety and effectiveness of Prolensa and Bromday have not been established in pediatric patients below 18 years of age.',
    ],
    monitoring: [
      'Corneal epithelial integrity during the treatment course',
      'Postoperative inflammation response',
    ],
    clinicalPearls: [
      'Bromfenac is notable for effective once-daily dosing, an advantage in patient compliance over three-times-daily ketorolac or the standard nepafenac 0.1% regimen.',
      'BromSite uses a DuraSite mucoadhesive polymer delivery vehicle to enhance ocular surface residence time.',
    ],
    highYield: [
      'Bromfenac is a once-daily topical NSAID, distinguishing it from the more frequent dosing typically required for ketorolac.',
      'Shares the class-wide risks of corneal melting with prolonged/excessive use and masking of infectious keratitis pain — same safety principle applies across all topical NSAIDs.',
    ],
    references: [
      { label: 'Bromfenac ophthalmic solution', source: 'drug package insert' },
      { label: 'Topical NSAID class pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'diclofenac-ophthalmic',
    genericName: 'Diclofenac sodium (ophthalmic)',
    brandNames: ['Voltaren Ophthalmic'],
    drugClass: 'NSAIDs',
    mechanismOfAction:
      'Nonselective COX-1/COX-2 inhibitor that blocks prostaglandin synthesis from arachidonic acid, reducing inflammation, pain, and photophobia associated with anterior segment surgery or minor corneal trauma.',
    indications: [
      'Postoperative inflammation following cataract surgery',
      'Pain relief following corneal refractive surgery (e.g., PRK) — short-term, off-label/adjunct use',
      'Temporary relief of pain and photophobia after corneal foreign body removal or minor trauma (short-term, off-label)',
    ],
    ocularUses: [
      'Anti-inflammatory and analgesic management following ocular surgery or minor corneal injury',
    ],
    typicalDosing: '1 drop 4 times daily, typically for up to 2 weeks postoperatively; short courses (1-3 days) for corneal trauma/PRK pain.',
    concentrations: ['0.1% solution'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation',
        'Punctate keratitis with extended use',
        'Corneal melting/perforation with prolonged or excessive use, particularly notorious historically with generic diclofenac formulations in compromised corneas',
        'Can mask pain from worsening corneal infection or epithelial defect',
        'Delayed epithelial healing',
      ],
      systemic: ['Minimal systemic absorption with topical ocular use'],
    },
    contraindications: [
      'Known hypersensitivity to diclofenac or other NSAIDs',
      'Caution with bleeding disorders or concurrent anticoagulant use',
    ],
    precautions: [
      'Avoid use beyond the recommended short-term duration, particularly after epithelial debridement (e.g., PRK) given historical reports of corneal melting',
      'Use cautiously in patients with rheumatoid arthritis, dry eye, or compromised corneal epithelium',
    ],
    drugInteractions: [
      'Additive corneal toxicity risk when combined with topical corticosteroids in an eye with epithelial defect',
    ],
    patientCounseling: [
      'Use only for the short, prescribed duration, especially after epithelial removal procedures like PRK',
      'Report worsening pain, redness, or vision changes immediately',
    ],
    pregnancyLactation:
      'Minimal systemic absorption with topical ocular use; systemic NSAIDs generally avoided in the third trimester — use topical formulation cautiously and only when benefit outweighs risk.',
    pediatricConsiderations: [
      'Safety and effectiveness have not been established in pediatric patients; Canadian product labeling explicitly states safety and dosing are not established in children under 18 years of age.',
    ],
    offLabelUses: [
      'Pain relief after photorefractive keratectomy (PRK), short-term',
      'Pain relief after corneal foreign body removal or minor corneal trauma, short-term',
    ],
    relatedConditionIds: ['corneal-abrasion', 'corneal-conjunctival-foreign-body'],
    monitoring: [
      'Corneal epithelial healing status, especially after PRK or epithelial debridement',
      'Symptom control (pain, photophobia)',
    ],
    clinicalPearls: [
      'Diclofenac ophthalmic gained notoriety in the late 1990s/2000s for case reports of corneal melting, particularly with generic formulations used for extended periods after PRK — reinforcing the importance of limiting topical NSAID duration after epithelial debridement.',
      'Still used short-term for postoperative pain control and photophobia relief.',
    ],
    highYield: [
      'Diclofenac ophthalmic is classically associated in the literature with corneal melting when used for prolonged periods after epithelial debridement (e.g., PRK) — a well-known cautionary example in topical NSAID pharmacology.',
      'Reinforces the general class principle: topical NSAIDs should be used for the shortest effective duration, particularly on a compromised corneal epithelium.',
    ],
    references: [
      { label: 'Diclofenac sodium ophthalmic solution', source: 'drug package insert' },
      { label: 'Topical NSAID-associated corneal melting', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ============================================================
  // ANESTHETICS
  // ============================================================
  {
    id: 'proparacaine',
    genericName: 'Proparacaine hydrochloride',
    brandNames: ['Alcaine', 'Ophthetic', 'Parcaine'],
    drugClass: 'Anesthetics',
    mechanismOfAction:
      'Ester-linked local anesthetic that blocks voltage-gated sodium channels in corneal and conjunctival sensory nerve endings, preventing depolarization and propagation of nerve impulses, producing rapid, reversible loss of surface sensation. Onset is typically within 20 seconds, with duration of action around 10-20 minutes.',
    indications: [
      'Topical anesthesia for diagnostic procedures (tonometry, gonioscopy, foreign body removal)',
      'Anesthesia prior to minor in-office procedures (suture removal, punctal plug insertion)',
      'Anesthesia for corneal/conjunctival scraping and culturing',
      'Anesthesia prior to certain minor surgical procedures',
    ],
    ocularUses: [
      'Short-duration topical anesthesia for in-office diagnostic and minor procedural use only',
    ],
    typicalDosing: '1-2 drops immediately prior to the procedure; repeat as needed for procedure duration, strictly in-office.',
    concentrations: ['0.5% solution'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning on instillation (common, brief)',
        'Punctate corneal epithelial toxicity with repeated dosing',
        'With chronic/repeated (abused) use: corneal epithelial defects, corneal melting, ring infiltrates, and permanent corneal scarring/vision loss',
        'Delayed corneal wound healing, reduced blink reflex leading to risk of unnoticed corneal exposure/injury while anesthetized',
        'Allergic reaction (less common with esters than historically believed, but possible)',
      ],
      systemic: ['Rare with topical ocular use; systemic toxicity essentially not a concern at standard diagnostic doses'],
    },
    contraindications: [
      'Known hypersensitivity to proparacaine or other ester anesthetics',
      'Not to be dispensed or prescribed for patient home use under any circumstance',
    ],
    precautions: [
      'For in-office diagnostic/procedural use only — never prescribed or sent home with a patient',
      'Protect the anesthetized eye from injury, since the protective blink/pain response is suppressed',
      'Repeated instillation can cause additive corneal epithelial toxicity',
      'Light-sensitive; store away from light, may discolor with age (discard if markedly discolored)',
    ],
    drugInteractions: ['No clinically significant topical ocular drug interactions typically noted'],
    patientCounseling: [
      'Expect brief stinging on instillation followed by numbness',
      'Do not rub the eye until sensation returns, as the eye is vulnerable to inadvertent injury while numb',
      'This medication is for in-office use only and will never be sent home with you',
    ],
    pregnancyLactation:
      'Used only as a single/limited in-office dose for diagnostic purposes; systemic absorption is negligible, making risk minimal for the brief clinical exposures typically used.',
    pediatricConsiderations: [
      'Widely and safely used in infants and children for brief in-office diagnostic anesthesia (e.g., tonometry, foreign body removal); no pediatric-specific dosing adjustment beyond standard single-drop dosing.',
      'Strict avoidance of any take-home use is especially critical in pediatric patients, given the severe corneal toxicity risk with unsupervised chronic self-administration.',
    ],
    monitoring: [
      'Corneal integrity after repeated in-office use during a single visit',
      'Watch for self-administered/abused use in patients presenting repeatedly with unexplained corneal findings (topical anesthetic abuse)',
    ],
    clinicalPearls: [
      'Proparacaine generally causes less initial stinging than tetracaine, making it a common first choice for in-office diagnostic anesthesia (e.g., before applanation tonometry).',
      'Topical anesthetic abuse (patients illicitly self-dosing at home) is a vision-threatening emergency that presents with a poorly healing corneal epithelial defect, ring infiltrate, and reduced corneal sensation — always suspect it in atypical, non-healing keratitis.',
      'Never dispense topical anesthetics for home use under any circumstances.',
    ],
    highYield: [
      'Topical anesthetics such as proparacaine are strictly for in-office diagnostic/procedural use and must never be prescribed or dispensed for home use — chronic self-administered use causes severe corneal toxicity, including epithelial defects, ring infiltrates, corneal melting, and permanent vision loss.',
      'Topical anesthesia suppresses the protective blink and pain response, so the eye is vulnerable to unnoticed injury while numb — patients should avoid touching/rubbing the eye until sensation returns.',
      'Proparacaine is an ester anesthetic that blocks voltage-gated sodium channels in corneal sensory nerves, producing rapid onset (~20 seconds) but short duration (~10-20 minutes) anesthesia.',
    ],
    references: [
      { label: 'Proparacaine hydrochloride ophthalmic solution', source: 'drug package insert' },
      { label: 'Topical anesthetic pharmacology and abuse syndrome', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'tetracaine',
    genericName: 'Tetracaine hydrochloride',
    brandNames: ['Tetcaine', 'Altacaine (compounded/generic forms)'],
    drugClass: 'Anesthetics',
    mechanismOfAction:
      'Ester-linked local anesthetic that blocks voltage-gated sodium channels in sensory nerve terminals of the cornea and conjunctiva, preventing action potential propagation and producing reversible surface anesthesia. Generally produces a longer duration and deeper anesthetic effect than proparacaine, but with more pronounced initial stinging on instillation.',
    indications: [
      'Topical anesthesia for diagnostic procedures (tonometry, gonioscopy, foreign body removal)',
      'Anesthesia for minor in-office ocular surgical procedures requiring a longer duration of effect',
      'Anesthesia prior to suture removal or other brief procedures',
    ],
    ocularUses: [
      'Topical anesthesia for in-office diagnostic and minor procedural use only, particularly when longer duration is needed',
    ],
    typicalDosing: '1-2 drops immediately before the procedure; may repeat as needed strictly within the office visit.',
    concentrations: ['0.5% solution'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Significant transient stinging/burning on instillation (more pronounced than proparacaine)',
        'Punctate corneal epithelial toxicity with repeated use',
        'With chronic/abused use: corneal epithelial breakdown, ring infiltrates, corneal melting, and permanent scarring/vision loss',
        'Suppressed blink reflex/corneal exposure risk while anesthetized',
        'Higher relative risk of allergic/hypersensitivity reaction as an ester anesthetic in sensitized individuals',
      ],
      systemic: ['Minimal with topical ocular use at standard diagnostic doses'],
    },
    contraindications: [
      'Known hypersensitivity to tetracaine or other ester-type anesthetics (cross-reactivity possible with related ester compounds)',
      'Not to be prescribed or dispensed for patient home use under any circumstance',
    ],
    precautions: [
      'Strictly in-office diagnostic/procedural use — never for home use',
      'Protect the eye from injury while anesthetized due to suppressed blink/pain response',
      'More irritating on instillation than proparacaine; counsel patient accordingly',
    ],
    drugInteractions: ['No clinically significant topical ocular drug interactions typically noted'],
    patientCounseling: [
      'Expect more pronounced stinging on instillation compared to other anesthetic drops',
      'Avoid touching or rubbing the eye until normal sensation returns',
      'This medication is for in-office use only and is never sent home with patients',
    ],
    pregnancyLactation:
      'Used only for brief, single/limited in-office diagnostic dosing; negligible systemic absorption makes risk minimal at typical clinical use.',
    pediatricConsiderations: [
      'Used safely for brief in-office diagnostic/procedural anesthesia in children; the more pronounced stinging on instillation compared with proparacaine can make it less well tolerated in young or anxious pediatric patients.',
    ],
    monitoring: [
      'Corneal surface integrity if used repeatedly within a visit',
      'Suspect topical anesthetic abuse in patients with recurrent, atypical non-healing keratitis and reduced corneal sensation',
    ],
    clinicalPearls: [
      'Tetracaine provides deeper and longer anesthesia than proparacaine, making it useful for minor procedures requiring more time, though it stings more on instillation.',
      'Cross-sensitivity can occur among ester anesthetics, so a documented allergy to one ester agent warrants caution with others in the same class.',
    ],
    highYield: [
      'Tetracaine causes more initial stinging than proparacaine but provides a longer duration of anesthesia — a classic comparative fact tested on boards.',
      'Like all topical anesthetics, tetracaine is for diagnostic/in-office use only and must never be prescribed for home use due to the risk of severe corneal toxicity (epithelial breakdown, ring infiltrates, corneal melting) with chronic self-administration.',
      'As an ester anesthetic, tetracaine carries a comparatively higher risk of hypersensitivity reactions than amide-type anesthetics.',
    ],
    references: [
      { label: 'Tetracaine hydrochloride ophthalmic solution', source: 'drug package insert' },
      { label: 'Ester vs. amide anesthetic pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'lidocaine-ophthalmic',
    genericName: 'Lidocaine hydrochloride (ophthalmic)',
    brandNames: ['Akten (lidocaine gel 3.5%)'],
    drugClass: 'Anesthetics',
    mechanismOfAction:
      'Amide-linked local anesthetic that blocks voltage-gated sodium channels in sensory nerve fibers of the cornea and conjunctiva, preventing nerve depolarization and impulse conduction, producing reversible topical anesthesia. As an amide, it carries a lower cross-reactivity/allergy risk profile than ester anesthetics like proparacaine or tetracaine.',
    indications: [
      'Topical anesthesia for ocular surface procedures (e.g., prior to conjunctival/corneal procedures, foreign body removal)',
      'Anesthesia prior to intraocular injections (e.g., intravitreal injection preparation, gel formulation)',
      'Adjunct anesthesia during minor in-office ophthalmic procedures',
    ],
    ocularUses: [
      'Topical/gel anesthesia for in-office diagnostic and minor procedural use, including as preparation for intravitreal injections',
    ],
    typicalDosing:
      'Gel (3.5%): applied to the ocular surface and allowed to remain for 1-2 minutes prior to the procedure; solution formulations dosed as 1-2 drops immediately before the procedure, strictly in-office.',
    concentrations: ['3.5% gel (Akten)', 'compounded/preservative-free solutions in some settings'],
    formulations: ['Gel', 'Solution'],
    route: 'Topical ophthalmic gel/solution',
    sideEffects: {
      ocular: [
        'Transient stinging/burning or foreign body sensation on instillation',
        'Punctate corneal epithelial toxicity with repeated dosing',
        'With chronic/abused use: corneal epithelial defects, ring infiltrates, corneal melting, permanent scarring, and vision loss — same class-wide risk as other topical anesthetics',
        'Suppressed blink reflex and corneal protective response while anesthetized',
        'Transient blurred vision from the gel formulation',
      ],
      systemic: ['Minimal with topical ocular use at standard diagnostic doses; amides are generally well tolerated systemically at these low exposures'],
    },
    contraindications: [
      'Known hypersensitivity to lidocaine or other amide-type anesthetics',
      'Not to be dispensed or prescribed for patient home use under any circumstance',
    ],
    precautions: [
      'For in-office diagnostic/procedural use only — never for home use',
      'Protect the anesthetized eye from inadvertent injury due to suppressed blink/pain response',
      'Gel formulation may transiently blur vision; counsel patient accordingly before they leave the exam lane',
    ],
    drugInteractions: ['No clinically significant topical ocular drug interactions typically noted'],
    patientCounseling: [
      'Expect brief stinging or a foreign body sensation followed by numbness',
      'Avoid rubbing or touching the eye until sensation fully returns',
      'This medication is for in-office use only and will never be sent home with you',
    ],
    pregnancyLactation:
      'Amide anesthetics like lidocaine have a favorable systemic safety profile in general use; topical ocular exposure is minimal and typically considered low risk for brief in-office diagnostic use.',
    pediatricConsiderations: [
      'Amide anesthetics such as lidocaine are generally well tolerated in children for in-office procedures; as with all topical anesthetics, strict in-office-only use applies and it should never be dispensed for home use in pediatric patients.',
    ],
    monitoring: [
      'Corneal surface integrity, particularly with repeated in-office application',
      'Suspect topical anesthetic abuse in any patient with recurrent, non-healing, atypical keratitis with reduced corneal sensation',
    ],
    clinicalPearls: [
      'Lidocaine gel (Akten) is frequently used prior to intravitreal injections and certain in-office procedures because the gel formulation prolongs contact time on the ocular surface.',
      'As an amide anesthetic, lidocaine has a lower risk of true allergic hypersensitivity than the ester anesthetics (proparacaine, tetracaine), which is useful in patients with known or suspected ester sensitivity.',
    ],
    highYield: [
      'Lidocaine is an amide anesthetic (versus proparacaine/tetracaine, which are esters) — amides carry a lower risk of allergic cross-reactivity, a key classification distinction tested on boards.',
      'All topical anesthetics, including lidocaine, are strictly for in-office diagnostic/procedural use and must never be sent home with a patient, due to the risk of corneal toxicity, epithelial breakdown, and vision-threatening complications with chronic self-administered use.',
      'The gel formulation (Akten) provides prolonged ocular surface contact time, useful for procedures like intravitreal injections.',
    ],
    references: [
      { label: 'Lidocaine hydrochloride ophthalmic gel', source: 'drug package insert' },
      { label: 'Amide vs. ester anesthetic classification', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ============================================================
  // IMMUNOMODULATORS
  // ============================================================
  {
    id: 'cyclosporine-ophthalmic-emulsion',
    genericName: 'Cyclosporine ophthalmic emulsion',
    brandNames: ['Restasis', 'Restasis MultiDose', 'Cequa (cyclosporine 0.09%)'],
    drugClass: 'Immunomodulators',
    mechanismOfAction:
      'Calcineurin inhibitor that binds cyclophilin, forming a complex that inhibits calcineurin phosphatase activity. This blocks dephosphorylation and nuclear translocation of NF-AT (nuclear factor of activated T cells), preventing transcription of interleukin-2 (IL-2) and other pro-inflammatory cytokines. This suppresses T-lymphocyte activation and proliferation on the ocular surface, reducing the chronic T-cell-mediated inflammation implicated in dry eye disease (keratoconjunctivitis sicca), and is thought to help restore normal tear-producing function over time.',
    indications: [
      'Chronic dry eye disease (keratoconjunctivitis sicca) associated with presumed ocular surface inflammation, particularly when tear production is suppressed by inflammation',
    ],
    ocularUses: [
      'Long-term immunomodulatory treatment to increase tear production in patients with inflammatory dry eye',
    ],
    typicalDosing:
      '1 drop in each eye twice daily, approximately 12 hours apart; therapeutic effect (increased tear production) typically takes weeks to months to become apparent — not a fast-acting therapy.',
    concentrations: ['0.05% emulsion (Restasis)', '0.09% solution (Cequa)'],
    formulations: ['Emulsion', 'Solution'],
    route: 'Topical ophthalmic emulsion/solution',
    sideEffects: {
      ocular: [
        'Ocular burning/stinging on instillation (most common side effect, often improves with continued use)',
        'Conjunctival hyperemia',
        'Foreign body sensation, pruritus',
        'Blurred vision immediately after instillation',
        'Does NOT cause elevated IOP or cataract formation, unlike corticosteroids — a key distinguishing safety feature',
      ],
      systemic: ['Minimal systemic absorption at topical ophthalmic doses; systemic immunosuppression is not a clinically relevant concern with topical ocular use'],
    },
    contraindications: [
      'Active ocular infection (relative contraindication — treat infection first)',
      'Known hypersensitivity to cyclosporine or emulsion components',
    ],
    precautions: [
      'Not indicated for patients wearing contact lenses at the time of instillation; remove lenses before dosing and wait at least 15 minutes before reinserting',
      'Onset of benefit is delayed (often 1-3 months); counsel patients on realistic expectations to support adherence',
      'Not a substitute for artificial tears, which may still be used concurrently',
    ],
    drugInteractions: ['No clinically significant topical ocular drug interactions typically reported'],
    patientCounseling: [
      'Improvement in tear production is gradual and may take weeks to months — continue use even without immediate symptom relief',
      'Remove contact lenses before instillation; wait at least 15 minutes before reinserting',
      'Mild burning on instillation is common and often improves with continued use',
      'Artificial tears may be used concurrently, spaced apart from cyclosporine dosing',
    ],
    pregnancyLactation:
      'Systemic absorption from topical ocular use is minimal; use only if clearly needed, with a preference for caution given limited specific ocular formulation data in pregnancy.',
    pediatricConsiderations: [
      'Safety and effectiveness of Restasis have not been established in pediatric patients below 16 years of age.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: [
      'Tear production (Schirmer testing) and symptom improvement over months of therapy',
      'Ocular surface staining (corneal/conjunctival) to assess response',
      'Tolerability/adherence given the delayed onset of benefit',
    ],
    clinicalPearls: [
      'Cyclosporine ophthalmic emulsion is a first-line prescription option (alongside lifitegrast) for chronic inflammatory dry eye disease not adequately controlled with artificial tears alone.',
      'Because onset of action is slow, some clinicians co-prescribe a short pulse of topical corticosteroid initially to bridge symptom relief while cyclosporine takes effect.',
      'Unlike corticosteroids, cyclosporine does not raise IOP or cause cataracts, making it appropriate for long-term daily use.',
    ],
    highYield: [
      'Cyclosporine ophthalmic emulsion works by inhibiting calcineurin, blocking IL-2 transcription and T-cell-mediated inflammation on the ocular surface — a mechanism distinct from corticosteroids (phospholipase A2 inhibition) and NSAIDs (COX inhibition).',
      'Therapeutic benefit (increased tear production) is delayed, often taking 1-3 months to become clinically apparent — patients must be counseled to continue use despite the lack of immediate relief.',
      'Unlike corticosteroids, cyclosporine does not cause elevated IOP or cataract formation, making it suitable for chronic, long-term twice-daily use in dry eye disease.',
      'Burning/stinging on instillation is the most common adverse effect and is a frequent cause of early discontinuation.',
    ],
    references: [
      { label: 'Cyclosporine ophthalmic emulsion 0.05%', source: 'drug package insert' },
      { label: 'Calcineurin inhibitor pharmacology in dry eye disease', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'lifitegrast',
    genericName: 'Lifitegrast',
    brandNames: ['Xiidra'],
    drugClass: 'Immunomodulators',
    mechanismOfAction:
      'Lymphocyte function-associated antigen-1 (LFA-1) antagonist that blocks the interaction between LFA-1 (on T cells) and intercellular adhesion molecule-1 (ICAM-1), which is overexpressed on the inflamed ocular surface. By blocking this LFA-1/ICAM-1 interaction, lifitegrast inhibits T-cell adhesion, migration, and activation, reducing the release of inflammatory cytokines implicated in dry eye disease.',
    indications: [
      'Signs and symptoms of dry eye disease',
    ],
    ocularUses: [
      'Topical immunomodulatory treatment for both the signs and symptoms of dry eye disease, with a comparatively faster symptomatic onset than cyclosporine in some patients',
    ],
    typicalDosing: '1 drop in each eye twice daily, approximately 12 hours apart.',
    concentrations: ['5% solution'],
    formulations: ['Solution'],
    route: 'Topical ophthalmic solution',
    sideEffects: {
      ocular: [
        'Ocular burning/stinging or irritation on instillation (very common)',
        'Blurred vision immediately after instillation',
        'Unusual/dysgeusia-like taste sensation (reduced visual acuity and unusual taste are both commonly reported)',
        'Conjunctival hyperemia',
        'Does NOT cause elevated IOP or cataract formation, unlike corticosteroids',
      ],
      systemic: [
        'Dysgeusia (unusual/bitter taste in the mouth) is a distinctive and relatively common systemic-feeling side effect due to nasolacrimal drainage',
        'Minimal true systemic absorption/toxicity otherwise',
      ],
    },
    contraindications: ['Known hypersensitivity to lifitegrast or any component of the formulation'],
    precautions: [
      'Remove contact lenses prior to instillation; may be reinserted after 15 minutes',
      'Counsel patients about the characteristic unusual taste sensation to improve adherence expectations',
      'Not studied for use during active ocular infection',
    ],
    drugInteractions: ['No clinically significant topical ocular drug interactions typically reported'],
    patientCounseling: [
      'A temporary unusual or bitter taste after instillation is common and expected, related to drainage through the nasolacrimal duct',
      'Remove contact lenses before use and wait at least 15 minutes before reinserting',
      'Burning/stinging on instillation is common; report persistent or severe irritation',
    ],
    pregnancyLactation:
      'Limited human data; systemic absorption is low with topical use, but use only if clearly needed given limited pregnancy-specific safety data.',
    pediatricConsiderations: [
      'Safety and effectiveness of Xiidra have not been established in pediatric patients below 17 years of age.',
    ],
    relatedConditionIds: ['dry-eye-disease'],
    monitoring: [
      'Symptom improvement (dry eye symptom scores) and objective signs (corneal staining) over the treatment course',
      'Tolerability, particularly instillation-site burning and taste disturbance',
    ],
    clinicalPearls: [
      'Lifitegrast and cyclosporine are the two primary FDA-approved topical immunomodulators for dry eye disease, targeting different steps of T-cell-mediated inflammation (LFA-1/ICAM-1 blockade vs. calcineurin/IL-2 inhibition, respectively).',
      'Some patients report faster symptomatic improvement with lifitegrast compared to cyclosporine, though both are used for chronic inflammatory dry eye.',
      'The distinctive dysgeusia (bad taste) side effect is a distinguishing clinical feature useful for differentiating lifitegrast from cyclosporine on history.',
    ],
    highYield: [
      'Lifitegrast blocks the LFA-1/ICAM-1 interaction to inhibit T-cell-mediated inflammation in dry eye disease — a distinct mechanism from cyclosporine\'s calcineurin/IL-2 inhibition, a classic mechanism-comparison exam question.',
      'A characteristic and frequently tested side effect of lifitegrast is dysgeusia (an unusual/bitter taste), due to drainage of the drug through the nasolacrimal system.',
      'Like cyclosporine, lifitegrast does not raise IOP or cause cataracts, unlike corticosteroids, supporting its suitability for long-term daily dry eye management.',
    ],
    references: [
      { label: 'Lifitegrast ophthalmic solution 5%', source: 'drug package insert' },
      { label: 'LFA-1/ICAM-1 antagonism in dry eye disease', source: 'AAO Preferred Practice Pattern' },
    ],
  },
  {
    id: 'tacrolimus-ophthalmic',
    genericName: 'Tacrolimus (ophthalmic, off-label compounded)',
    brandNames: ['Protopic (compounded ophthalmic use, off-label from dermatologic formulation)'],
    drugClass: 'Immunomodulators',
    mechanismOfAction:
      'Macrolide calcineurin inhibitor that binds FK-binding protein (FKBP-12), and the resulting complex inhibits calcineurin phosphatase activity. This prevents dephosphorylation and nuclear translocation of NF-AT, blocking transcription of IL-2 and other pro-inflammatory cytokines, thereby suppressing T-cell activation. Mechanistically similar to cyclosporine (both are calcineurin inhibitors) but with substantially greater potency on a per-molecule basis.',
    indications: [
      'Severe vernal keratoconjunctivitis (VKC) and atopic keratoconjunctivitis (AKC) refractory to standard therapy (off-label ophthalmic use)',
      'Refractory chronic allergic/inflammatory ocular surface disease not controlled by topical steroids, antihistamines, or mast cell stabilizers (off-label use)',
      'Adjunct/steroid-sparing therapy in select chronic ocular surface inflammatory conditions (off-label)',
    ],
    ocularUses: [
      'Compounded topical formulation used off-label for severe, treatment-resistant allergic and inflammatory ocular surface disease, primarily in cases where conventional therapy has failed',
    ],
    typicalDosing:
      'Compounded ophthalmic ointment/solution typically 0.02-0.03%, applied 1-2 times daily; dosing and formulation vary by compounding pharmacy since there is no FDA-approved ophthalmic tacrolimus product.',
    concentrations: ['0.02% compounded ophthalmic ointment/solution (variable by compounding pharmacy; not FDA-approved for ophthalmic use)'],
    formulations: ['Ointment', 'Solution'],
    route: 'Topical ophthalmic ointment/solution (compounded, off-label)',
    sideEffects: {
      ocular: [
        'Burning/stinging sensation on instillation (common)',
        'Ocular irritation, foreign body sensation',
        'Blurred vision, particularly with ointment formulation',
        'Theoretical increased risk of ocular surface infection with chronic immunosuppression, though less studied than with corticosteroids',
        'Does NOT cause elevated IOP or cataract formation in the way corticosteroids do',
      ],
      systemic: [
        'Systemic absorption is generally low with topical ocular application, but data are more limited than for FDA-approved ocular immunomodulators since this is an off-label compounded use',
        'Theoretical risk of systemic immunosuppression with high or prolonged exposure, though clinically uncommon at typical low-dose topical ocular use',
      ],
    },
    contraindications: [
      'Known hypersensitivity to tacrolimus or macrolide immunosuppressants',
      'Active untreated ocular infection',
    ],
    precautions: [
      'Not FDA-approved for ophthalmic use — compounded formulations vary in concentration and stability between pharmacies, requiring careful sourcing and patient counseling',
      'Reserved for severe, refractory cases given the off-label status and comparatively limited long-term ocular safety data relative to cyclosporine and lifitegrast',
      'Monitor for signs of ocular surface infection given immunosuppressive mechanism',
    ],
    drugInteractions: ['No well-established clinically significant topical ocular drug interactions, though data are limited given off-label/compounded status'],
    patientCounseling: [
      'This is a compounded, off-label formulation — discuss the rationale, expected benefits, and limitations with the prescribing clinician',
      'Expect possible burning/stinging on instillation',
      'Report any signs of infection (increasing redness, discharge, pain) promptly given the immunosuppressive mechanism',
    ],
    pregnancyLactation:
      'Limited specific ophthalmic safety data given off-label/compounded status; systemic tacrolimus carries known immunosuppressive considerations in pregnancy — use only if clearly needed and under close specialist guidance.',
    pediatricConsiderations: [
      'Multiple pediatric case series and prospective studies (children as young as 2-5 years) report good efficacy and long-term safety of topical tacrolimus 0.03%-0.1% for refractory VKC, supporting off-label pediatric use when conventional therapy fails.',
    ],
    offLabelUses: [
      'Severe vernal keratoconjunctivitis (VKC) and atopic keratoconjunctivitis (AKC) refractory to standard therapy',
      'Steroid-sparing therapy for chronic refractory ocular surface inflammatory disease',
    ],
    relatedConditionIds: ['vernal-keratoconjunctivitis', 'atopic-keratoconjunctivitis'],
    monitoring: [
      'Symptom and sign improvement in refractory VKC/AKC (papillae, limbal changes, corneal involvement)',
      'Watch for signs of secondary ocular surface infection',
      'Long-term follow-up given limited established ophthalmic safety data compared to FDA-approved agents',
    ],
    clinicalPearls: [
      'Ophthalmic tacrolimus is not FDA-approved; it is used off-label, typically compounded from the dermatologic (Protopic) formulation, and reserved for severe pediatric or adult vernal/atopic keratoconjunctivitis unresponsive to conventional therapy.',
      'Tacrolimus is substantially more potent than cyclosporine on a molar basis, though both share the same calcineurin-inhibition mechanism.',
      'Often considered a steroid-sparing option in chronic severe allergic eye disease to avoid the cumulative IOP and cataract risks of long-term topical corticosteroid use.',
    ],
    highYield: [
      'Tacrolimus and cyclosporine are both calcineurin inhibitors that block IL-2 transcription via FKBP-12 (tacrolimus) or cyclophilin (cyclosporine) binding, respectively — know this shared mechanism versus their different binding proteins.',
      'Ophthalmic tacrolimus is used off-label/compounded (no FDA-approved ophthalmic product) primarily for severe, refractory vernal or atopic keratoconjunctivitis — an important scope-of-practice and exam distinction from cyclosporine and lifitegrast, which are FDA-approved for dry eye.',
      'Like other immunomodulators, tacrolimus avoids the IOP elevation and cataractogenesis associated with chronic corticosteroid use, supporting its role as a steroid-sparing option in severe allergic ocular surface disease.',
    ],
    references: [
      { label: 'Calcineurin inhibitors in ocular surface disease', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Off-label topical tacrolimus for vernal/atopic keratoconjunctivitis', source: 'AAO Preferred Practice Pattern' },
    ],
  },
]
