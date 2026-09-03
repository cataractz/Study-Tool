import type { Drug } from '../../types/drug'

export const emergencyAdditionalDrugs: Drug[] = [
  // ============================================================
  // ANAPHYLAXIS / OCULAR EMERGENCY
  // ============================================================
  {
    id: 'epinephrine',
    genericName: 'Epinephrine',
    brandNames: ['EpiPen', 'EpiPen Jr', 'Auvi-Q', 'Adrenaclick', 'Twinject (discontinued)'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Endogenous catecholamine and non-selective adrenergic agonist acting on alpha-1, alpha-2, beta-1, and beta-2 receptors. In anaphylaxis, alpha-1 agonism produces vasoconstriction that reverses hypotension and reduces mucosal/airway edema; beta-1 agonism increases heart rate and myocardial contractility; beta-2 agonism produces bronchodilation and, critically, inhibits further mast cell and basophil mediator release (histamine, tryptase), which is why epinephrine — not antihistamines — is the mechanism-based first-line treatment for anaphylaxis. In the eye, topical/intracameral epinephrine acts on alpha-1 receptors of the iris dilator muscle to produce mydriasis and on episcleral/conjunctival vessels to produce vasoconstriction.',
    indications: [
      'Anaphylaxis (first-line, immediate treatment) — food, insect sting, drug, latex, or idiopathic triggers',
      'Anaphylactoid/severe hypersensitivity reactions to injected diagnostic dyes (e.g., IV fluorescein or indocyanine green) or other medications administered in an eye care setting',
      'Cardiac arrest (ACLS, IV/IO route) — not an eye-care-specific use but relevant emergency knowledge',
      'Adjunct to local anesthetics to prolong duration and reduce bleeding (e.g., retrobulbar/peribulbar blocks, lid/adnexal procedures)',
    ],
    ocularUses: [
      'Intracameral epinephrine (dilute, preservative-free) used during cataract surgery to maintain pupillary dilation and counteract intraoperative miosis, particularly in Intraoperative Floppy Iris Syndrome (IFIS) — the "epi-Shugarcaine" technique combines dilute epinephrine with intracameral lidocaine in balanced salt solution',
      'Added to retrobulbar/peribulbar anesthetic mixtures to prolong block duration and reduce local bleeding/ecchymosis',
      'Historically used as topical dipivefrin (a prodrug of epinephrine) for glaucoma — dipivefrin is now essentially obsolete and not separately stocked in most practices',
      'Emergency treatment of anaphylaxis triggered by agents used in eye care (e.g., IV angiography dyes, topical or injectable ophthalmic medications, latex) — every eye care setting performing injections or IV dye studies should have epinephrine immediately available',
    ],
    typicalDosing:
      'Anaphylaxis, adults/adolescents ≥30 kg: 0.3 mg (0.5 mg for ≥45 kg per some auto-injector labeling) IM in the anterolateral thigh, may repeat every 5-15 minutes if inadequate response. General weight-based IM dosing: 0.01 mg/kg of 1:1000 (1 mg/mL) solution, maximum single dose 0.5 mg. Intracameral (ophthalmic surgical use): dilute concentrations (commonly cited around 0.025% in combination irrigating solutions) — exact concentration and volume are surgeon/institution-specific compounded preparations, not a single standardized commercial dose.',
    concentrations: [
      '1:1000 (1 mg/mL) — standard IM anaphylaxis concentration',
      '1:10,000 (0.1 mg/mL) — IV/IO cardiac arrest concentration',
      'Auto-injector fixed doses: 0.1 mg, 0.15 mg, 0.3 mg, 0.5 mg',
      'Dilute compounded intracameral preparations (institution-specific, not a standardized commercial concentration)',
    ],
    formulations: ['Auto-injector', 'Injection (ampule/vial for IM, IV, or IO use)', 'Compounded intracameral additive'],
    route: 'Intramuscular (auto-injector, preferred for anaphylaxis), intravenous/intraocular (cardiac arrest, ACLS), intracameral (surgical adjunct, compounded), subconjunctival/retrobulbar (as an additive to local anesthetic)',
    sideEffects: {
      ocular: [
        'Mydriasis (intended effect when used intracamerally)',
        'Conjunctival/episcleral vasoconstriction (blanching)',
        'Rare: cystoid macular edema with chronic topical epinephrine/dipivefrin use in aphakic patients (historical concern with older topical glaucoma formulations)',
        'Transient stinging with topical/periocular administration',
      ],
      systemic: [
        'Tachycardia, palpitations, arrhythmia',
        'Hypertension, anxiety, tremor',
        'Pallor, diaphoresis, headache',
        'Nausea/vomiting',
        'Rarely, in overdose or in patients with cardiac risk factors: myocardial ischemia, pulmonary edema, cerebral hemorrhage',
      ],
    },
    contraindications: [
      'None absolute in true anaphylaxis — epinephrine should never be withheld for a life-threatening reaction because of a relative contraindication',
      'Relative caution (not a reason to withhold in anaphylaxis): significant cardiovascular disease, uncontrolled hyperthyroidism, narrow-angle glaucoma (for chronic topical/dipivefrin use, not for emergency IM use)',
    ],
    precautions: [
      'IM injection into the anterolateral thigh is preferred over deltoid for faster, more reliable absorption',
      'Accidental injection into a digit or through unintended sites (e.g., bone in small children with an oversized needle) is a recognized device-related safety issue with pediatric auto-injectors',
      'Patients and caregivers should call emergency services immediately after use, even if symptoms improve, because biphasic anaphylactic reactions can occur hours later',
      'Repeat dosing may be needed if symptoms persist or recur before EMS arrival',
      'Epinephrine degrades with light/heat exposure and expiration — check auto-injector expiration and solution clarity (should be clear/colorless, not pink or discolored)',
    ],
    drugInteractions: [
      'Beta-blockers — may blunt the response to epinephrine and can result in unopposed alpha-mediated hypertension/reflex bradycardia; patients on beta-blockers with anaphylaxis may need glucagon as an adjunct if epinephrine response is inadequate',
      'Monoamine oxidase inhibitors (MAOIs) and tricyclic antidepressants — may potentiate epinephrine\'s pressor/cardiac effects',
      'Other sympathomimetics — additive cardiovascular stimulation',
      'Volatile anesthetics (e.g., halothane) — sensitize the myocardium to catecholamine-induced arrhythmia (relevant in the surgical/anesthesia setting)',
    ],
    patientCounseling: [
      'Patients with known severe allergies should carry two epinephrine auto-injectors at all times and know how/when to use them',
      'Use at the first sign of anaphylaxis (not after waiting to see if symptoms worsen) — early administration improves outcomes',
      'Call emergency medical services immediately after any auto-injector use, even if symptoms resolve, due to the risk of a biphasic reaction',
      'Injection technique: hold firmly against the outer mid-thigh (through clothing if necessary) until the injection completes, per device-specific instructions',
      'Replace expired auto-injectors promptly; store at room temperature away from heat/light and inspect the viewing window periodically for discoloration',
    ],
    pregnancyLactation:
      'Epinephrine crosses the placenta and can reduce uterine blood flow, but anaphylaxis itself poses a far greater risk to mother and fetus than treatment — epinephrine is the recommended first-line treatment for anaphylaxis in pregnancy without hesitation. Data on lactation are limited but significant infant exposure via breast milk is not expected given the drug\'s short half-life and enteral inactivation.',
    pediatricConsiderations: [
      'Weight-based auto-injector selection: 0.1 mg for 7.5-15 kg (some regions), 0.15 mg for 15-30 kg, 0.3 mg for >30 kg',
      'Needle length of standard pediatric auto-injectors has been associated with unintended periosteal/bone injection in smaller children — device selection should account for the child\'s thigh soft-tissue depth',
      'Anaphylaxis is a leading pediatric emergency; delayed epinephrine administration is a major contributor to fatal outcomes, so any suspected pediatric anaphylaxis should be treated promptly rather than observed',
    ],
    isEmergencyMedication: true,
    monitoring: [
      'Vital signs (heart rate, blood pressure, oxygen saturation, respiratory status) during and after administration',
      'Observation for biphasic reaction for several hours after apparent resolution of anaphylaxis',
      'ECG monitoring in patients with cardiac risk factors receiving repeat or IV dosing',
    ],
    clinicalPearls: [
      'Epinephrine is the ONLY first-line treatment for anaphylaxis — antihistamines (e.g., diphenhydramine) and corticosteroids are adjuncts that do not reverse the acute airway/cardiovascular compromise and should never substitute for or delay epinephrine',
      'Every practice performing IV dye angiography (fluorescein or ICG) or periocular/intraocular injections should stock epinephrine and have a written anaphylaxis protocol, since these are recognized (if rare) anaphylaxis triggers in eye care',
      'Intracameral epinephrine is a key adjunct for managing Intraoperative Floppy Iris Syndrome (IFIS), most notably in patients on tamsulosin or other alpha-1 antagonists',
      'There is no absolute contraindication to epinephrine in true anaphylaxis, including in pregnancy, cardiac disease, or elderly patients — the risk of withholding treatment far exceeds the risk of administration',
    ],
    highYield: [
      'First-line, immediate treatment for anaphylaxis; IM in the anterolateral thigh; no absolute contraindication in a true anaphylactic reaction',
      'Alpha-1 (vasoconstriction), beta-1 (inotropy/chronotropy), beta-2 (bronchodilation + inhibits further mediator release) — mechanism-based rationale for why it works when antihistamines alone do not',
      'Ocular relevance: intracameral use for IFIS/pupil maintenance during cataract surgery; additive to local anesthetic blocks; historical topical dipivefrin prodrug for glaucoma (largely obsolete)',
      'Every eye care setting doing IV dye studies or intraocular/periocular injections should stock epinephrine for anaphylaxis',
      'Beta-blocked patients may not respond adequately to epinephrine alone — glucagon is the recognized adjunct in that setting',
    ],
    references: [
      { label: 'Epinephrine auto-injector dosing and anaphylaxis management', source: 'Medscape Drug Reference (EpiPen/Auvi-Q)' },
      { label: 'Pediatric auto-injector needle length and unintended bone injection risk', source: 'PMC — pediatric epinephrine auto-injector safety literature' },
      { label: 'Intracameral epinephrine for IFIS prophylaxis and pupil maintenance in cataract surgery', source: 'Journal of Cataract and Refractive Surgery / CRST' },
      { label: 'Anaphylaxis first-line treatment and biphasic reaction risk', source: 'AAAAI/ACAAI anaphylaxis practice parameters (general emergency medicine reference)' },
    ],
  },

  {
    id: 'diphenhydramine',
    genericName: 'Diphenhydramine',
    brandNames: ['Benadryl'],
    drugClass: 'Allergy medications',
    mechanismOfAction:
      'First-generation H1 histamine receptor antagonist (inverse agonist) that crosses the blood-brain barrier, producing both peripheral antihistaminic effects (reduced pruritus, urticaria, mucosal edema) and central sedative effects. Also has notable anticholinergic (antimuscarinic) and, at higher doses, local anesthetic/sodium-channel-blocking activity. In anaphylaxis and acute allergic/dystonic reactions, it is used as an adjunct — it does not reverse the airway compromise or hypotension of anaphylaxis the way epinephrine does, but blunts histamine-mediated itching, urticaria, and flushing, and its anticholinergic activity is the basis for treating drug-induced acute dystonic reactions/oculogyric crisis.',
    indications: [
      'Adjunctive treatment of anaphylaxis (after epinephrine, never as a substitute or first-line agent)',
      'Allergic reactions: urticaria, angioedema, allergic rhinitis, pruritus',
      'Acute dystonic reaction / oculogyric crisis (e.g., from antiemetics like prochlorperazine or antipsychotics) — IV/IM anticholinergic-antihistamine treatment',
      'Motion sickness, mild insomnia (over-the-counter uses)',
      'Antitussive (as an ingredient in some cough/cold combination products)',
    ],
    ocularUses: [
      'Not used topically in the eye; systemic (oral/IM/IV) administration is relevant to eye care as adjunctive anaphylaxis management and as the recognized treatment for drug-induced oculogyric crisis/acute dystonic reaction, which optometrists may witness or need to refer emergently',
      'Reduces periorbital and conjunctival edema/itching associated with acute allergic reactions as part of systemic anaphylaxis management',
    ],
    typicalDosing:
      'Adults: 25-50 mg PO/IM/IV every 4-6 hours as needed (some sources cite up to every 4-8 hours), maximum 300-400 mg/day depending on route. For anaphylaxis as an adjunct: 25-50 mg IV/IM given after epinephrine. For acute dystonic reaction/oculogyric crisis: 25-50 mg IV or IM, often with rapid symptomatic improvement.',
    concentrations: ['12.5 mg/5 mL (oral liquid)', '25 mg tablet/capsule', '50 mg tablet/capsule', '50 mg/mL (injection)'],
    formulations: ['Tablet', 'Capsule', 'Oral liquid/elixir', 'Injection (IM/IV)', 'Topical cream (not used ophthalmically)'],
    route: 'Oral, intramuscular, intravenous',
    sideEffects: {
      ocular: [
        'Blurred vision (anticholinergic effect on accommodation)',
        'Mydriasis (anticholinergic effect)',
        'Dry eye / reduced tear production (anticholinergic effect on lacrimal secretion)',
        'Risk of precipitating acute angle closure in patients with narrow/occludable anterior chamber angles, via anticholinergic-mediated mydriasis',
      ],
      systemic: [
        'Sedation, drowsiness, dizziness (prominent — first-generation antihistamine crosses the blood-brain barrier)',
        'Anticholinergic effects: dry mouth, urinary retention, constipation, tachycardia',
        'Paradoxical excitation/agitation, especially in children and the elderly',
        'Cognitive impairment and increased fall risk in older adults (on the Beers Criteria list of potentially inappropriate medications in this population)',
        'Rare: QT prolongation with very high doses/overdose',
      ],
    },
    contraindications: [
      'Known hypersensitivity to diphenhydramine or other ethanolamine-class antihistamines',
      'Narrow-angle glaucoma (relative — anticholinergic effect can precipitate acute angle closure)',
      'Symptomatic prostatic hypertrophy or bladder-neck obstruction (relative — anticholinergic urinary retention risk)',
      'Neonates and premature infants (not recommended)',
      'Should not be used as a sedative/sleep aid in young children per pediatric safety guidance',
    ],
    precautions: [
      'Significant sedation — caution with driving, operating machinery, or in combination with other CNS depressants (alcohol, opioids, benzodiazepines)',
      'Use with caution in the elderly given anticholinergic burden, fall risk, and delirium risk',
      'Not a substitute for epinephrine in anaphylaxis — does not treat airway edema, bronchospasm, or hypotension',
      'Caution in patients with narrow anterior chamber angles given mydriatic/anticholinergic potential to precipitate angle closure',
    ],
    drugInteractions: [
      'Additive CNS depression with alcohol, opioids, benzodiazepines, and other sedating medications',
      'Additive anticholinergic burden with other anticholinergic drugs (e.g., tricyclic antidepressants, atropine-class cycloplegics) — increased risk of dry eye, blurred vision, confusion, urinary retention',
      'MAO inhibitors — may prolong and intensify anticholinergic effects',
    ],
    patientCounseling: [
      'Expect drowsiness; avoid driving or operating machinery until effects are known',
      'Avoid alcohol and other sedating medications while taking diphenhydramine',
      'This medication is an adjunct in a severe allergic reaction, not a replacement for an epinephrine auto-injector — always use epinephrine first for anaphylaxis',
      'Report eye pain, halos around lights, or sudden vision changes, which could indicate an angle-closure event in a susceptible patient',
    ],
    pregnancyLactation:
      'Generally considered compatible with use in pregnancy when clearly needed (older FDA Pregnancy Category B classification); large-scale data have not shown a consistent pattern of major malformations. Diphenhydramine is excreted in breast milk and, due to its sedating and anticholinergic properties, can suppress lactation and cause drowsiness/irritability in a nursing infant — non-sedating alternatives are generally preferred during lactation when feasible.',
    pediatricConsiderations: [
      'Children 2-11 years: approximately 1-2 mg/kg per dose (PO/IM/IV) every 2-4 hours as needed, not to exceed labeled maximum daily doses — exact mg/kg and maximum daily totals vary by reference source',
      'Contraindicated in neonates and premature infants',
      'Paradoxical hyperactivity/excitation is more common in children than in adults, in contrast to the sedation typically seen in adults',
      'Not recommended as an over-the-counter sleep aid in young children',
    ],
    isEmergencyMedication: true,
    monitoring: [
      'Level of sedation and mental status, particularly in elderly patients',
      'Resolution of urticaria/pruritus as an adjunct measure in allergic reactions',
      'Anterior chamber depth/angle status in patients with known narrow angles before repeated anticholinergic dosing',
    ],
    clinicalPearls: [
      'In anaphylaxis, diphenhydramine is always an ADJUNCT given after epinephrine — it has no role as a first-line or sole treatment because it does not reverse airway edema, bronchospasm, or hypotension',
      'IV/IM diphenhydramine (with or without benztropine) is the standard emergency treatment for acute dystonic reactions and oculogyric crisis, most classically from antiemetics like prochlorperazine or metoclopramide — recognizing this prevents an unnecessary neurologic workup for what can look like a seizure or bizarre psychiatric event',
      'Anticholinergic mydriasis from diphenhydramine can theoretically precipitate acute angle closure in a patient with occludable angles, which is clinically relevant when taking a medication history in a patient presenting with red eye/eye pain',
      'First-generation antihistamine — crosses the blood-brain barrier, producing significant sedation that is far more prominent than with second-generation agents (e.g., loratadine, cetirizine)',
    ],
    highYield: [
      'Adjunct to epinephrine in anaphylaxis — never a substitute or first-line agent',
      'Classic emergency treatment (with benztropine) for acute dystonic reaction/oculogyric crisis — a testable, treatable mimicker of neurologic or psychiatric emergencies',
      'First-generation H1 antagonist with strong anticholinergic and sedative properties — dry eye, blurred vision, mydriasis, and angle-closure risk in susceptible patients',
      'Beers Criteria medication — avoid/use cautiously in the elderly due to anticholinergic burden, sedation, and fall/delirium risk',
    ],
    references: [
      { label: 'Diphenhydramine dosing, mechanism, and contraindications', source: 'StatPearls — Diphenhydramine (NCBI Bookshelf)' },
      { label: 'Diphenhydramine prescribing information', source: 'Drugs.com Package Insert / Prescribing Information' },
      { label: 'Oculogyric crisis and acute dystonic reaction treatment with anticholinergic/antihistamine agents', source: 'Emergency medicine literature on drug-induced dystonic reactions' },
      { label: 'Diphenhydramine as adjunctive anaphylaxis therapy', source: 'AAAAI/ACAAI anaphylaxis practice parameters' },
    ],
  },

  {
    id: 'aspirin',
    genericName: 'Aspirin (acetylsalicylic acid)',
    brandNames: ['Bayer Aspirin', 'Ecotrin', 'Bufferin', 'Durlaza'],
    drugClass: 'Cardiovascular',
    mechanismOfAction:
      'Irreversibly acetylates and inhibits cyclooxygenase-1 (COX-1) in platelets, blocking synthesis of thromboxane A2 (TXA2), a potent platelet-aggregating and vasoconstricting mediator. Because platelets lack nuclei and cannot synthesize new COX-1, this antiplatelet effect lasts for the ~7-10 day lifespan of the affected platelet, even though aspirin\'s plasma half-life is short. At higher (analgesic/anti-inflammatory) doses, aspirin also inhibits COX-1 and COX-2 more broadly, reducing prostaglandin synthesis for analgesic, antipyretic, and anti-inflammatory effect — but the antiplatelet effect is achieved at much lower ("low-dose") doses.',
    indications: [
      'Adjunctive antiplatelet therapy in suspected or biopsy-confirmed giant cell arteritis (GCA/temporal arteritis) to reduce the risk of vision loss and stroke, alongside high-dose corticosteroids',
      'Suspected amaurosis fugax / transient ischemic attack (TIA) of presumed embolic/atherosclerotic origin, as part of urgent stroke-prevention workup and secondary prevention',
      'Secondary prevention of myocardial infarction and ischemic stroke',
      'Acute coronary syndrome (loading dose, typically chewed non-enteric-coated aspirin)',
      'Analgesic, antipyretic, and anti-inflammatory uses at higher doses (less commonly first-line given availability of other agents)',
    ],
    ocularUses: [
      'Adjunctive low-dose antiplatelet therapy in giant cell arteritis, based on retrospective evidence suggesting reduced risk of visual loss and cerebrovascular events when added to corticosteroid therapy — sources disagree on the optimal dose (commonly cited as 81 mg/day low-dose aspirin, though some literature discusses higher doses), and this is an adjunct to, never a substitute for, urgent high-dose corticosteroid treatment in suspected GCA',
      'Used emergently (typically a single dose, e.g., 81-325 mg chewed/swallowed) in patients presenting with amaurosis fugax or other TIA-pattern transient visual loss with suspected embolic/carotid or cardioembolic source, as part of the urgent medical/stroke-team evaluation — this is a general TIA/stroke-protocol use, not an ophthalmic-specific dosing regimen',
    ],
    typicalDosing:
      'Low-dose/antiplatelet: 81 mg orally once daily. Some GCA and cardiology literature references 81-325 mg/day; exact optimal antiplatelet dose in GCA specifically is not firmly standardized across sources. Acute TIA/stroke or ACS loading dose: 162-325 mg (often chewed non-enteric-coated aspirin for faster absorption) as a one-time dose in the emergent setting, per current treatment protocol. Analgesic/anti-inflammatory dosing (325-650 mg every 4-6 hours) is a distinct, higher-dose regimen not used for antiplatelet purposes.',
    concentrations: ['81 mg (low-dose/"baby aspirin")', '325 mg (regular strength)', '500-650 mg (extra strength)'],
    formulations: ['Tablet', 'Chewable tablet', 'Enteric-coated tablet', 'Suppository'],
    route: 'Oral (or rectal suppository when oral intake is not possible)',
    sideEffects: {
      ocular: [
        'No direct primary ocular toxicity at typical antiplatelet doses',
        'Increased risk/severity of subconjunctival hemorrhage and intraoperative or postoperative ocular bleeding (e.g., during intraocular surgery, periocular injections, or trauma) due to its antiplatelet effect',
        'Increased hyphema risk or hyphema re-bleed risk after ocular trauma in patients on aspirin',
      ],
      systemic: [
        'GI irritation, dyspepsia, peptic ulcer disease, GI bleeding (dose-related, more common with higher/chronic dosing)',
        'Increased bleeding risk generally (bruising, epistaxis, prolonged bleeding from cuts/procedures)',
        'Tinnitus, hearing changes (salicylism, typically at high/toxic doses)',
        'Reye syndrome — rare but serious hepatic/encephalopathic syndrome in children and adolescents given aspirin during a viral illness (e.g., influenza, varicella)',
        'Bronchospasm/exacerbation of asthma in aspirin-sensitive/aspirin-exacerbated respiratory disease patients',
        'Hypersensitivity reactions including urticaria and, rarely, anaphylactoid reactions',
      ],
    },
    contraindications: [
      'Known hypersensitivity to aspirin or other NSAIDs/salicylates',
      'Active peptic ulcer disease or active GI bleeding',
      'Bleeding disorders (e.g., hemophilia) or severe thrombocytopenia',
      'Children and adolescents with a current or recent viral illness (risk of Reye syndrome) — aspirin should generally not be given to children/teenagers for viral symptoms',
      'Aspirin-exacerbated respiratory disease (aspirin-sensitive asthma/nasal polyposis)',
    ],
    precautions: [
      'Increased perioperative bleeding risk — coordinate with the prescribing physician (often cardiology, given frequent dual antiplatelet regimens after coronary stenting) before elective intraocular surgery; the decision to hold aspirin perioperatively must balance bleeding risk against the patient\'s cardiovascular/cerebrovascular risk of stopping it, and is not an optometry-directed decision',
      'Use caution in patients with renal impairment, dehydration, or concurrent nephrotoxic medications',
      'Third trimester of pregnancy: avoid regular/high-dose aspirin due to risk of premature closure of the fetal ductus arteriosus and other perinatal risks (low-dose aspirin is used deliberately in pregnancy for specific obstetric indications under physician supervision — see Pregnancy/Lactation)',
      'In suspected GCA, aspirin is always adjunctive — urgent high-dose systemic corticosteroid therapy is the primary, vision-saving treatment and must not be delayed for or replaced by aspirin',
    ],
    drugInteractions: [
      'Other antiplatelet/anticoagulant agents (clopidogrel, warfarin, DOACs, heparin) — additive bleeding risk; often intentionally combined (e.g., dual antiplatelet therapy) but requires close monitoring',
      'Other NSAIDs — additive GI mucosal injury/bleeding risk; ibuprofen may also interfere with aspirin\'s irreversible platelet inhibition if taken shortly before aspirin',
      'Systemic corticosteroids — additive GI ulceration/bleeding risk (clinically relevant given aspirin\'s co-use with high-dose steroids in GCA management)',
      'Acetazolamide/high-dose salicylates — high-dose aspirin can displace acetazolamide from protein binding and increase CNS penetration, causing severe acetazolamide toxicity (metabolic acidosis, CNS effects) — a classic, dangerous, and testable drug interaction relevant to glaucoma patients',
      'Methotrexate — reduced renal clearance and increased methotrexate toxicity',
      'Valproic acid — aspirin/salicylates can displace valproic acid from protein binding, increasing free drug levels',
    ],
    patientCounseling: [
      'Take with food or a full glass of water to reduce GI upset; report black/tarry stools, blood in stool or vomit, or unusual bruising/bleeding immediately',
      'Do not give aspirin to children or teenagers with a current viral illness (flu-like symptoms, chickenpox) because of the risk of Reye syndrome',
      'Do not stop aspirin on your own before any surgery (including eye surgery) — always confirm with the prescribing physician whether and when to hold it',
      'If prescribed for suspected temporal arteritis or a TIA/stroke-type event, this is an adjunct to other urgent treatment (steroids, further stroke workup) and does not replace emergency evaluation',
    ],
    pregnancyLactation:
      'Low-dose aspirin (typically 81 mg/day) is used deliberately and is considered safe under physician supervision in pregnancy for specific indications (e.g., preeclampsia prevention in at-risk patients). Regular-strength/high-dose aspirin, particularly in the third trimester, carries risk of premature closure of the fetal ductus arteriosus, and should be avoided unless specifically directed by an obstetric provider. Aspirin is excreted in breast milk in low amounts; occasional low-dose use is generally considered compatible with breastfeeding, but chronic high-dose use is discouraged given a theoretical risk of Reye syndrome-like effects and platelet dysfunction in the infant.',
    pediatricConsiderations: [
      'Aspirin should generally be avoided in children and adolescents, especially during viral illnesses (influenza, varicella), due to the risk of Reye syndrome, a rare but potentially fatal hepatic and encephalopathic condition',
      'Notable exceptions where aspirin IS used in pediatrics under specialist supervision include Kawasaki disease treatment, where the benefit is judged to outweigh the Reye syndrome risk',
      'Acetaminophen or ibuprofen are generally preferred over aspirin for pediatric fever/pain management',
    ],
    isEmergencyMedication: true,
    relatedConditionIds: ['giant-cell-arteritis', 'amaurosis-fugax'],
    monitoring: [
      'Signs/symptoms of GI bleeding (dark stools, hematemesis) with chronic use',
      'CBC/platelet function if bleeding is suspected or before major surgery in a patient on chronic aspirin therapy',
      'Coordination with treating physician/rheumatology regarding duration of adjunctive aspirin therapy in confirmed GCA',
      'Vision, ESR/CRP, and symptom trend in patients being treated for suspected GCA (aspirin is adjunctive; corticosteroids and specialist follow-up remain primary)',
    ],
    clinicalPearls: [
      'In suspected GCA with visual symptoms (amaurosis fugax, diplopia, vision loss), aspirin is an evidence-supported ADJUNCT to reduce ischemic/visual complications, but urgent high-dose systemic corticosteroids started immediately (without waiting for biopsy) remain the primary, vision-saving intervention — do not delay steroids for aspirin or biopsy',
      'The aspirin-acetazolamide interaction (high-dose salicylates displacing acetazolamide from protein binding, precipitating severe acetazolamide toxicity/metabolic acidosis) is a classic, dangerous, and frequently tested drug interaction relevant to glaucoma patients',
      'Amaurosis fugax should prompt urgent same-day medical evaluation for embolic source (carotid disease, cardioembolic source, or GCA in the appropriate age group) — aspirin/antiplatelet therapy is part of that urgent stroke-prevention workup, not a substitute for it',
      'Aspirin\'s antiplatelet effect is irreversible and lasts the ~7-10 day lifespan of the platelet, unlike most other NSAIDs, which reversibly inhibit COX and whose antiplatelet effect resolves as the drug clears',
    ],
    highYield: [
      'Irreversible COX-1 inhibition blocks thromboxane A2 — antiplatelet effect lasts the life of the platelet (~7-10 days), unique among NSAIDs',
      'Adjunctive antiplatelet therapy in suspected GCA and in amaurosis fugax/TIA — never a substitute for urgent corticosteroids in GCA or urgent stroke workup in TIA',
      'Classic dangerous interaction: high-dose aspirin/salicylates + acetazolamide -> severe acetazolamide toxicity/metabolic acidosis',
      'Contraindicated in children/teens with viral illness due to Reye syndrome risk; avoid high-dose use in the third trimester of pregnancy (ductus arteriosus closure)',
      'Perioperative bleeding risk is a key consideration before elective ocular surgery, especially with concurrent antiplatelet/anticoagulant therapy after cardiac stenting',
    ],
    references: [
      { label: 'Low-dose aspirin as adjunctive therapy in giant cell arteritis for prevention of visual loss and stroke', source: 'Journal of Community Hospital Internal Medicine Perspectives — Evidence-based Role of Aspirin in Giant Cell Arteritis' },
      { label: 'Giant cell arteritis ocular manifestations and management', source: 'EyeRounds.org — Giant Cell Arteritis (Temporal Arteritis)' },
      { label: 'Aspirin mechanism of action (COX-1/thromboxane A2 inhibition)', source: 'StatPearls — Salicylic Acid (Aspirin) (NCBI Bookshelf)' },
      { label: 'Aspirin use in pregnancy and Reye syndrome risk in pediatrics', source: 'ACOG Committee Opinion — Low-Dose Aspirin Use During Pregnancy; MotherToBaby Fact Sheet' },
    ],
  },

  // ============================================================
  // DIAGNOSTIC / PROCEDURAL DYE (NOT AN EMERGENCY MEDICATION)
  // ============================================================
  {
    id: 'indocyanine-green',
    genericName: 'Indocyanine green',
    brandNames: ['IC-Green'],
    drugClass: 'Other',
    mechanismOfAction:
      'Water-soluble tricarbocyanine dye administered intravenously that binds almost entirely (~98%) to plasma proteins, remaining largely confined to the vascular space. It absorbs and fluoresces in the near-infrared spectrum (absorption/emission around 800-830 nm), which allows its infrared fluorescence signal to pass through melanin, xanthophyll pigment, and hemorrhage far better than visible-light fluorescein, enabling visualization of the choroidal vasculature beneath the retinal pigment epithelium — findings that are not well seen on standard fundus fluorescein angiography (FA).',
    indications: [
      'Indocyanine green angiography (ICGA) of the choroidal circulation',
      'Adjunct/alternative to fundus fluorescein angiography for imaging choroidal vascular abnormalities',
      'Intraoperative staining of the internal limiting membrane (ILM) during macular hole and epiretinal membrane surgery (vitreoretinal surgical use)',
      'Non-ophthalmic uses: hepatic function/blood flow assessment, cardiac output measurement, intraoperative tissue perfusion and lymphatic mapping (general medical/surgical use, included for completeness)',
    ],
    ocularUses: [
      'Choroidal neovascularization characterization, particularly polypoidal choroidal vasculopathy (PCV) and occult/poorly defined CNV in age-related macular degeneration, where ICGA can better delineate the choroidal vascular abnormality than FA',
      'Central serous chorioretinopathy — ICGA helps identify areas of choroidal vascular hyperpermeability and guide focal laser or photodynamic therapy',
      'Evaluation of choroidal tumors (e.g., choroidal hemangioma) and inflammatory choroidal disease, where the choroidal vascular pattern aids diagnosis',
      'Intraoperative ILM staining to improve visualization during macular hole repair and epiretinal membrane peeling (a distinct topical/intraocular surgical use, separate from IV angiography)',
    ],
    typicalDosing:
      'Angiography: reconstituted from a 25 mg vial with sterile water (aqueous solvent, no iodide-containing solvent) to a concentration of approximately 2.5 mg/mL; a standard adult dose is typically in the range of 25-50 mg (roughly 0.2-0.5 mg/kg) given as a rapid IV bolus, followed by a saline flush, with imaging captured over the following minutes using an infrared-sensitive camera system. Exact dose/volume protocols vary by imaging system and institution. Intraoperative ILM staining uses a separate, much more dilute preparation applied directly onto the retinal surface, not injected systemically.',
    concentrations: ['25 mg vial reconstituted to ~2.5 mg/mL for IV angiography', 'Dilute intraoperative staining preparations for ILM visualization (surgeon/institution-specific)'],
    formulations: ['Injection (lyophilized powder for reconstitution)'],
    route: 'Intravenous (angiography); direct intraocular/intravitreal application (surgical ILM staining) — not a topical or oral ophthalmic medication',
    sideEffects: {
      ocular: [
        'No direct topical ocular toxicity from IV use; transient after-images or photosensitivity from the imaging light source itself, not the dye',
        'Potential retinal pigment epithelium/retinal toxicity has been raised as a theoretical concern with intraoperative ILM staining depending on concentration, light exposure, and duration of contact, prompting use of dilute, brief-exposure staining protocols',
      ],
      systemic: [
        'Mild: transient nausea, vomiting (reported in a small minority of patients)',
        'Moderate: urticaria, pruritus, vasovagal reactions',
        'Rare but serious: anaphylactic/anaphylactoid reactions, including in patients without a prior history of iodide allergy',
        'Discoloration of stool (dye excreted hepatically/biliarily) — expected, benign finding',
      ],
    },
    contraindications: [
      'Known hypersensitivity to indocyanine green or to iodides (the dye and its reconstitution have historically contained iodide; true cross-reactivity with shellfish/iodine-based contrast allergy is debated in the literature, but caution and disclosure of any prior iodide/contrast reaction is standard practice)',
      'History of severe hypersensitivity reaction to iodinated contrast/dyes generally',
      'Uremia/significant renal impairment has been cited as a relative contraindication in some references, given hepatic/biliary elimination considerations',
    ],
    precautions: [
      'Emergency anaphylaxis equipment and personnel trained in its use should be available whenever IV ICG is administered, as with any injectable diagnostic dye',
      'Confirm true sterile-water reconstitution (avoid iodide-containing diluents) per current manufacturer instructions to minimize iodide-related reaction risk',
      'Use the lowest effective dose/dilution for intraoperative ILM staining given theoretical concerns about retinal pigment epithelium toxicity with prolonged or concentrated exposure',
      'Confirm IV line patency before bolus injection to avoid extravasation',
    ],
    drugInteractions: [
      'No clinically significant systemic drug-drug interactions are well established for diagnostic IV use',
      'Caution in patients recently exposed to other iodinated contrast agents given theoretical additive hypersensitivity risk',
    ],
    patientCounseling: [
      'Explain that a dye will be injected into a vein in the arm and that mild, transient nausea or a warm sensation can occur',
      'Report any prior reaction to iodine, iodinated contrast dye, or shellfish before the test, though a definite allergy is not an absolute contraindication and will be weighed by the ordering provider',
      'Temporary greenish discoloration of the skin/sclera or dark stool after the test is expected and resolves as the dye is cleared',
      'Report any hives, difficulty breathing, or dizziness during or shortly after the injection immediately to staff',
    ],
    pregnancyLactation:
      'FDA Pregnancy Category C — there are no adequate, well-controlled studies in pregnant women, though decades of accumulated use have not identified a consistent drug-related pattern of harm; use during pregnancy only if the diagnostic benefit is judged to outweigh the unknown risk, and only when clearly needed. Data on excretion into breast milk are limited.',
    pediatricConsiderations: [
      'Used in pediatric ophthalmology and pediatric medical/surgical settings (e.g., cardiac catheterization, hepatic studies) with weight-based dosing; not a first-line pediatric ophthalmic diagnostic test given the relative rarity of choroidal vascular disease in children',
      'Same iodide-allergy screening precautions apply as in adults',
    ],
    relatedConditionIds: ['central-serous-retinopathy', 'amd', 'choroidal-hemangioma', 'macular-hole'],
    monitoring: [
      'Vital signs and observation for hypersensitivity reaction during and immediately after IV administration',
      'Angiographic image quality/timing (early, mid, and late-phase choroidal filling) to answer the clinical question being asked',
    ],
    clinicalPearls: [
      'ICG\'s near-infrared absorption/emission (roughly 800-830 nm) lets it image through blood, melanin, and xanthophyll pigment far better than fluorescein\'s visible-light signal, which is why it is the preferred angiographic tool for choroidal (not retinal) vascular pathology',
      'Polypoidal choroidal vasculopathy is essentially an ICGA-defined diagnosis — the polypoidal choroidal lesions are typically not well characterized on fluorescein angiography alone',
      'ICG is >98% protein-bound and stays largely intravascular, in contrast to fluorescein, which readily leaks from the fenestrated choriocapillaris — this property underlies its usefulness for choroidal vessel visualization and its more benign side-effect profile than fluorescein',
      'Distinct from IV angiographic use, dilute ICG is also used as an intraoperative vital dye to stain and improve visualization of the internal limiting membrane during macular hole and epiretinal membrane surgery',
      'This is a diagnostic/procedural dye, not an emergency medication — but because it is given by IV injection, anaphylaxis precautions and preparedness are still clinically essential wherever it is used',
    ],
    highYield: [
      'Near-infrared dye (~800-830 nm) used for choroidal circulation imaging — better transmission through pigment/blood/hemorrhage than fluorescein',
      'Key diagnostic tool for polypoidal choroidal vasculopathy and central serous chorioretinopathy; complements fluorescein angiography rather than replacing it',
      '>98% protein-bound, largely intravascular — different leakage/staining pattern than fluorescein',
      'Caution with prior iodide/shellfish allergy history, though true cross-reactivity is debated; anaphylaxis, though rare, can occur even without a prior allergy history, so resuscitation readiness is standard practice',
      'Also used intraoperatively (separate from IV angiography) to stain the ILM during macular hole/ERM surgery',
    ],
    references: [
      { label: 'Indocyanine green angiography — mechanism, technique, and clinical uses', source: 'EyeWiki (American Academy of Ophthalmology) — Indocyanine Green Angiography' },
      { label: 'ICG angiography dosing, adverse reaction rates, and iodide allergy considerations', source: 'StatPearls — Indocyanine Green (ICG) Angiography (NCBI Bookshelf)' },
      { label: 'IC-Green prescribing information', source: 'FDA-approved prescribing information (accessdata.fda.gov)' },
    ],
  },
]
