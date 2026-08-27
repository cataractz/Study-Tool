import type { Drug } from '../../types/drug'

export const systemicImmunosuppressant1: Drug[] = [
  // ===== ANTIMALARIALS (DMARDs) =====
  {
    id: 'hydroxychloroquine',
    genericName: 'Hydroxychloroquine',
    brandNames: ['Plaquenil'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Antimalarial/disease-modifying antirheumatic drug (DMARD) that raises intracellular/intralysosomal pH, interfering with lysosomal enzyme function, antigen processing, and Toll-like receptor signaling, thereby dampening the autoimmune inflammatory cascade. The drug is highly lipophilic and binds avidly to melanin, causing it to accumulate preferentially and irreversibly in melanin-rich tissues, most notably the retinal pigment epithelium (RPE) and choroid. This melanin-binding and prolonged tissue retention (with a very long tissue half-life of weeks to months) is the basis for its cumulative, dose- and duration-dependent retinal toxicity.',
    indications: [
      'Systemic lupus erythematosus (SLE)',
      'Rheumatoid arthritis',
      'Discoid lupus erythematosus',
      'Sjögren syndrome (off-label)',
      'Malaria prophylaxis/treatment (less common indication in the US today)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing:
      'Oral, generally not to exceed 5 mg/kg REAL (actual) body weight per day (revised 2016 AAO dosing guideline, replacing the older ideal-body-weight-based calculation); commonly dosed 200-400 mg/day total',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Bull\'s-eye maculopathy (annular parafoveal RPE atrophy/depigmentation that classically SPARES the fovea centrally, creating a target/bull\'s-eye pattern) - the hallmark, most feared, board-defining toxicity',
        'Early/preclinical toxicity: parafoveal photoreceptor and RPE damage detectable on SD-OCT (loss of the parafoveal ellipsoid zone/"flying saucer" sign) before any visible fundoscopic or visual acuity change',
        'Paracentral scotoma on automated visual field (10-2) - often the earliest detectable functional abnormality, may precede visible fundus changes',
        'In Asian patients, toxicity classically presents in a more peripheral/extramacular ("pericentral") ring pattern rather than the classic parafoveal pattern - important distinguishing screening fact',
        'Progressive, potentially irreversible loss of central and paracentral visual field once structural damage is established',
        'Corneal verticillata (vortex keratopathy, cornea verticillata) - benign, dose-related, reversible corneal epithelial deposits; does NOT predict retinal toxicity risk',
        'Reduced accommodation/blurred near vision (uncommon, mild, reversible)',
        'Abnormal color vision (blue-yellow defects) in advanced toxicity',
        'Advanced/end-stage disease can progress to marked RPE atrophy and vision loss even AFTER the drug is discontinued',
      ],
      systemic: [
        'Gastrointestinal upset (nausea, diarrhea, abdominal cramping) - most common systemic side effect',
        'Skin pigmentation changes/rash, hair depigmentation or thinning',
        'Cardiomyopathy and QT prolongation/conduction abnormalities (rare, with long-term high-dose use)',
        'Neuromyotoxicity/skeletal muscle weakness (rare)',
        'Hemolysis in patients with G6PD deficiency',
        'Headache, dizziness',
      ],
    },
    contraindications: [
      'Known hypersensitivity to 4-aminoquinoline compounds',
      'Pre-existing retinopathy or maculopathy of another etiology (relative contraindication - increased baseline risk, complicates monitoring)',
      'Long-QT syndrome or use with other QT-prolonging drugs (caution/relative contraindication)',
    ],
    precautions: [
      'Major risk factors for retinal toxicity that mandate more intensive/earlier screening: daily dose greater than 5 mg/kg REAL body weight, duration of use greater than 5 years, concurrent renal disease (reduced drug clearance), concomitant tamoxifen use, and pre-existing retinal or macular disease',
      'Risk of toxicity is very low (under 1%) in the first 5 years of use at appropriate dosing, but rises sharply thereafter (up to ~20% after 20 years)',
      'Toxicity can continue to progress even after the drug is stopped once RPE damage is established - underscores the importance of early detection before structural changes occur',
      'Obese patients dosed by actual body weight may be overdosed relative to lean body mass since the drug does not distribute into fat - dosing should be individualized',
    ],
    drugInteractions: [
      'Tamoxifen - additive/synergistic retinal toxicity risk; concurrent use is itself classified as a major risk factor for hydroxychloroquine retinopathy',
      'Digoxin - hydroxychloroquine may increase digoxin serum levels',
      'Other QT-prolonging medications - additive risk of cardiac arrhythmia',
      'Antacids/kaolin - may reduce hydroxychloroquine absorption if taken concurrently',
    ],
    patientCounseling: [
      'Emphasize the critical importance of attending annual eye examinations and screening tests once past the 5-year mark, even in the absence of visual symptoms',
      'Report any new blurred vision, missing areas of vision, or difficulty reading promptly',
      'Retinal damage, once detected on structural testing, is generally permanent and can progress even after stopping the drug - early detection is the only effective prevention strategy',
      'Do not stop the medication without consulting the prescribing rheumatologist, but do report any visual symptoms immediately',
    ],
    pregnancyLactation:
      'Considered relatively safe in pregnancy and is often continued in patients with SLE given the risk of disease flare with discontinuation; generally compatible with breastfeeding at recommended doses per rheumatology guidance, though the patient should be co-managed with her prescribing physician.',
    monitoring: [
      'Baseline comprehensive ophthalmic examination within the first year of starting therapy',
      'Annual screening beginning at 5 years of use in patients without major risk factors; annual screening from baseline (year one) in patients WITH major risk factors (high dose, renal disease, tamoxifen use, pre-existing maculopathy, long duration)',
      'Automated visual field testing - 10-2 pattern (central 10 degrees) is required; in Asian patients or those with pericentral risk, extend to 24-2 or 30-2 to capture the more peripheral toxicity pattern',
      'At least one objective/structural test in addition to visual field: spectral-domain OCT (SD-OCT, most commonly used - looks for parafoveal ellipsoid zone/outer retinal disruption), multifocal electroretinogram (mfERG), and/or fundus autofluorescence (FAF, detects RPE change as hyper- or hypo-autofluorescence)',
      'Renal function (drug is renally cleared - impaired clearance increases toxicity risk)',
    ],
    clinicalPearls: [
      'The 2016 American Academy of Ophthalmology revised recommendations replaced the older ideal-body-weight dosing threshold with a REAL (actual) body weight cutoff of 5 mg/kg/day, and shifted the standard screening start point from year one universally to year five in patients without major risk factors',
      'Bull\'s-eye maculopathy is a LATE finding - by the time it is visible on fundus exam, significant irreversible damage has already occurred; the entire purpose of formal screening is to catch PRE-clinical (pre-bull\'s-eye) structural or functional change on OCT/visual field',
      'Amsler grid and color vision testing are NOT considered adequate or sensitive screening tools by current guidelines and should not be relied upon alone',
      'This is widely considered the single highest-yield drug topic on the entire NBEO exam given how frequently prescribed hydroxychloroquine is and how testable its screening protocol is',
    ],
    highYield: [
      'Classic finding: BULL\'S-EYE MACULOPATHY - parafoveal RPE atrophy that SPARES the fovea - the single most tested fundus finding in all of ocular pharmacology',
      '2016 AAO guidelines: baseline exam in first year, then ANNUAL screening starting at 5 YEARS for average-risk patients; annual from baseline if major risk factors present',
      'Major risk factors: dose greater than 5 mg/kg REAL body weight/day, duration greater than 5 years, renal disease, concurrent TAMOXIFEN use, pre-existing retinal disease',
      'Required screening = automated 10-2 visual field PLUS at least one objective test (SD-OCT, mfERG, or fundus autofluorescence) - visual field alone or fundus exam alone is NOT sufficient',
      'Toxicity can be PROGRESSIVE even after drug discontinuation, and is generally IRREVERSIBLE once detected on structural testing - this is why early/preclinical detection is the entire goal of screening',
      'Corneal verticillata from hydroxychloroquine is benign, dose-related, and does NOT correlate with or predict retinal toxicity risk - a classic distractor fact',
      'Asian patients often show a more peripheral/pericentral toxicity pattern rather than classic parafoveal bull\'s-eye - extended field testing (24-2/30-2) is recommended in this population',
    ],
    references: [
      { label: 'Revised recommendations on screening for chloroquine and hydroxychloroquine retinopathy (2016)', source: 'American Academy of Ophthalmology, Ophthalmology' },
      { label: 'Hydroxychloroquine pharmacology and retinal toxicity mechanism', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'chloroquine',
    genericName: 'Chloroquine',
    brandNames: ['Aralen'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Older 4-aminoquinoline antimalarial with the same fundamental mechanism as hydroxychloroquine: raises intralysosomal pH and interferes with antigen processing/immune activation, producing an immunomodulatory effect. Like hydroxychloroquine, it is highly lipophilic and binds avidly and preferentially to melanin in the RPE and choroid, but it does so with GREATER affinity and produces significantly higher rates of retinal toxicity at equivalent cumulative or daily doses, which is why it has been largely supplanted by hydroxychloroquine in modern rheumatologic practice.',
    indications: [
      'Systemic lupus erythematosus (less commonly used today than hydroxychloroquine)',
      'Rheumatoid arthritis (less commonly used today than hydroxychloroquine)',
      'Malaria prophylaxis/treatment',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral, generally not to exceed 2.3 mg/kg real body weight per day (lower threshold than hydroxychloroquine, reflecting its higher intrinsic toxicity)',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Bull\'s-eye maculopathy - identical clinical/fundoscopic pattern to hydroxychloroquine (parafoveal RPE atrophy sparing the fovea) but occurs at a SUBSTANTIALLY HIGHER rate and can develop more rapidly at equivalent weight-based doses',
        'Earlier onset of toxicity possible compared to hydroxychloroquine at comparable duration of use',
        'Paracentral scotoma on visual field testing, may precede visible fundus findings, same as hydroxychloroquine',
        'Corneal verticillata (vortex keratopathy) - benign, dose-related, reversible, does not predict retinal risk',
        'Progressive/irreversible field loss once structural damage occurs, same natural history as hydroxychloroquine',
      ],
      systemic: [
        'Gastrointestinal upset',
        'Skin/hair pigmentary changes',
        'Cardiomyopathy/QT prolongation (rare)',
        'Neuromyotoxicity (rare)',
        'Hemolysis in G6PD deficiency',
      ],
    },
    contraindications: [
      'Known hypersensitivity to 4-aminoquinoline compounds',
      'Pre-existing retinal or macular disease (relative contraindication)',
      'Long-QT syndrome or concurrent QT-prolonging medications',
    ],
    precautions: [
      'Same major risk factor categories as hydroxychloroquine (high dose, long duration, renal disease, concurrent tamoxifen, pre-existing maculopathy) but the BASELINE risk of toxicity at any given dose/duration is higher than with hydroxychloroquine',
      'This higher inherent toxicity is the primary reason chloroquine has fallen out of favor in favor of hydroxychloroquine for chronic rheumatologic therapy in the US',
    ],
    drugInteractions: [
      'Tamoxifen - additive retinal toxicity risk',
      'Digoxin - may increase digoxin levels',
      'Other QT-prolonging drugs - additive arrhythmia risk',
    ],
    patientCounseling: [
      'Same emphasis as hydroxychloroquine on the necessity of regular, guideline-based screening',
      'Report any new visual field defects, blurred vision, or reading difficulty promptly',
      'Understand that chloroquine carries a higher retinal risk than the more commonly prescribed hydroxychloroquine',
    ],
    pregnancyLactation:
      'Generally used with caution in pregnancy; hydroxychloroquine is typically preferred over chloroquine in patients requiring antimalarial/immunomodulatory therapy during pregnancy given its more favorable safety profile. Caution during breastfeeding; co-manage with prescribing physician.',
    monitoring: [
      'Same screening principles as hydroxychloroquine: baseline exam within the first year, then guideline-based follow-up screening intervals per AAO recommendations, potentially initiated earlier given the higher inherent toxicity risk of this drug',
      'Automated 10-2 visual field testing plus at least one objective structural test (SD-OCT, mfERG, or fundus autofluorescence)',
      'Renal function monitoring (renally cleared)',
    ],
    clinicalPearls: [
      'Chloroquine and hydroxychloroquine share an identical retinal toxicity mechanism and identical bull\'s-eye maculopathy appearance - the key board-testable DISTINCTION is that chloroquine carries a HIGHER risk of toxicity at equivalent doses/durations',
      'This higher toxicity risk is precisely why hydroxychloroquine has become the dominant antimalarial DMARD in modern rheumatology, with chloroquine reserved mainly for antimalarial (infectious disease) use rather than chronic autoimmune therapy',
      'Screening principles (10-2 visual field + objective structural test, annual after baseline) apply identically to both drugs',
    ],
    highYield: [
      'Chloroquine and hydroxychloroquine are the SAME drug class with the SAME bull\'s-eye maculopathy mechanism, but chloroquine has HIGHER retinal toxicity risk at equivalent doses - a classic comparative NBEO distinguishing fact',
      'This higher toxicity is the main reason chloroquine is prescribed far less often than hydroxychloroquine for chronic rheumatologic disease today',
      'Same screening protocol applies: baseline exam, then guideline-based interval screening with 10-2 visual field PLUS an objective test (OCT/mfERG/FAF)',
      'Corneal verticillata occurs with chloroquine just as with hydroxychloroquine and similarly does NOT predict retinal toxicity',
      'Toxic maculopathy from chloroquine is likewise potentially progressive/irreversible once detected structurally, even after drug cessation',
    ],
    references: [
      { label: 'Revised recommendations on screening for chloroquine and hydroxychloroquine retinopathy (2016)', source: 'American Academy of Ophthalmology, Ophthalmology' },
      { label: 'Comparative retinal toxicity of 4-aminoquinoline antimalarials', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== FOLATE ANTAGONIST DMARD =====
  {
    id: 'methotrexate',
    genericName: 'Methotrexate',
    brandNames: ['Trexall', 'Rheumatrex', 'Otrexup'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Folate antagonist that competitively inhibits dihydrofolate reductase (DHFR), blocking conversion of dihydrofolate to the active tetrahydrofolate cofactor required for purine and pyrimidine synthesis. At LOW weekly doses used in rheumatology, the dominant effect is anti-inflammatory/immunomodulatory (increased extracellular adenosine, reduced cytokine production) rather than direct cytotoxicity. At HIGH doses used in oncology, the effect is directly antiproliferative/cytotoxic to rapidly dividing cells. This dose-dependent distinction (low-dose weekly rheumatologic dosing vs. high-dose oncologic dosing) is clinically important because ocular/systemic toxicity profiles differ substantially between the two uses.',
    indications: [
      'Rheumatoid arthritis (low-dose weekly, most common rheumatologic use)',
      'Psoriatic arthritis',
      'Psoriasis',
      'Various malignancies (leukemia, lymphoma, osteosarcoma - high-dose oncologic regimens)',
      'Ectopic pregnancy (single high-dose use)',
      'Ocular inflammatory disease: noninfectious uveitis, scleritis, ocular mucous membrane pemphigoid (as a steroid-sparing immunosuppressive agent)',
    ],
    ocularUses: [
      'None as primary indication for most patients, BUT notably also prescribed by ophthalmologists/rheumatologists as a steroid-sparing agent to TREAT chronic noninfectious uveitis, scleritis, and ocular cicatricial pemphigoid — an important nuance versus most other drugs in this file',
    ],
    typicalDosing:
      'Rheumatologic/autoimmune: low-dose, once WEEKLY oral or subcutaneous dosing (typically 7.5-25 mg once per week, NOT daily - a critical dosing safety point); Oncologic: high-dose regimens dosed very differently under oncology protocols',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral, subcutaneous, or intramuscular (weekly dosing for rheumatologic use); intravenous/intrathecal for high-dose oncologic regimens',
    sideEffects: {
      ocular: [
        'Blepharoconjunctivitis and conjunctival irritation',
        'Photophobia',
        'Ocular surface irritation/dry eye symptoms',
        'Blurred vision (uncommon, usually mild and reversible)',
        'Optic neuropathy/optic disc edema (rare, more associated with high-dose oncologic regimens or intrathecal administration than low-dose weekly rheumatologic dosing)',
        'Periorbital edema (uncommon)',
        'Direct retinal toxicity is NOT characteristic of methotrexate at standard low rheumatologic doses - an important contrast/distractor versus hydroxychloroquine on boards',
      ],
      systemic: [
        'Hepatotoxicity (elevated liver enzymes, risk of hepatic fibrosis with long-term use) - most significant chronic toxicity requiring monitoring',
        'Bone marrow suppression/myelosuppression (leukopenia, thrombocytopenia, macrocytic anemia)',
        'Stomatitis/mucositis, gastrointestinal upset, nausea',
        'Pulmonary toxicity (methotrexate pneumonitis) - can be serious',
        'Teratogenicity - strictly contraindicated in pregnancy',
        'Renal toxicity, particularly with high-dose regimens',
        'Fatigue, headache',
      ],
    },
    contraindications: [
      'Pregnancy (significant teratogen - absolute contraindication)',
      'Breastfeeding',
      'Severe hepatic impairment or significant alcohol use',
      'Severe renal impairment',
      'Pre-existing significant blood dyscrasias/bone marrow suppression',
      'Active infection (relative contraindication given immunosuppressive effect)',
    ],
    precautions: [
      'CRITICAL: methotrexate for autoimmune disease is dosed WEEKLY, not daily - accidental daily dosing is a well-documented, potentially fatal medication error',
      'Folic acid supplementation is typically co-prescribed to reduce GI and hematologic side effects without diminishing rheumatologic efficacy',
      'Avoid concurrent alcohol use (additive hepatotoxicity)',
      'Live vaccines should generally be avoided during therapy given immunosuppression',
    ],
    drugInteractions: [
      'NSAIDs - can reduce renal clearance of methotrexate and increase toxicity risk, especially at higher doses',
      'Trimethoprim-sulfamethoxazole - additive antifolate effect, risk of severe pancytopenia',
      'Proton pump inhibitors - may increase methotrexate levels by reducing renal clearance',
      'Alcohol - additive hepatotoxicity',
      'Other hepatotoxic or myelosuppressive drugs - additive toxicity risk',
    ],
    patientCounseling: [
      'Confirm and reinforce that this medication for arthritis/autoimmune disease is taken ONCE PER WEEK, not daily',
      'Avoid or strictly limit alcohol consumption',
      'Use reliable contraception; do not become pregnant while on this medication',
      'Report any unusual bruising/bleeding, persistent cough or shortness of breath, mouth sores, or jaundice',
      'Take folic acid supplementation as prescribed to reduce side effects',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy - well-established teratogen causing methotrexate embryopathy (craniofacial, limb, and CNS anomalies); effective contraception required during and for a period after discontinuation in both men and women per prescriber guidance. Contraindicated during breastfeeding.',
    monitoring: [
      'Liver function tests (periodic, given hepatotoxicity risk)',
      'Complete blood count (periodic, given myelosuppression risk)',
      'Renal function',
      'Ocular surface health, photophobia, and visual complaints in patients reporting symptoms; formal retinal toxicity screening is NOT indicated at standard low rheumatologic doses (unlike hydroxychloroquine)',
      'Optic nerve evaluation only if visual symptoms or high-dose/intrathecal exposure',
    ],
    clinicalPearls: [
      'A classic NBEO distractor pairs methotrexate with hydroxychloroquine as if both require formal retinal screening - methotrexate at standard LOW weekly rheumatologic doses does NOT carry the same retinal toxicity risk and does NOT require AAO-style maculopathy screening',
      'Methotrexate is one of the few systemic drugs in this category that is also used to actively TREAT ocular inflammatory disease (uveitis, scleritis, ocular cicatricial pemphigoid) as a corticosteroid-sparing immunosuppressive agent, rather than purely causing ocular side effects',
      'The weekly (not daily) dosing schedule for autoimmune indications is one of the highest-yield patient-safety facts associated with this drug',
      'Concurrent folic acid supplementation is standard practice to mitigate side effects',
    ],
    highYield: [
      'Methotrexate has LOW direct retinal toxicity risk at standard rheumatologic doses - an important CONTRAST to hydroxychloroquine, frequently used as a board distractor pairing',
      'Ocular side effects are primarily surface-related: blepharoconjunctivitis, photophobia, and dry eye/irritation rather than retinopathy',
      'Rare but real ocular risk: optic neuropathy/disc edema, more associated with HIGH-dose oncologic or intrathecal use than low-dose weekly rheumatologic dosing',
      'Methotrexate is BOTH a cause of mild ocular surface side effects AND a TREATMENT for ocular inflammatory disease (uveitis, scleritis) as a steroid-sparing agent - a nuanced, testable dual role',
      'Dosed WEEKLY (not daily) for autoimmune/rheumatologic indications - accidental daily dosing is a dangerous, classically referenced medication error',
      'Major systemic toxicities to know: hepatotoxicity, bone marrow suppression, pulmonary toxicity, and teratogenicity',
    ],
    references: [
      { label: 'Methotrexate in the treatment of ocular inflammatory disease', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Methotrexate pharmacology and low-dose vs. high-dose toxicity profiles', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== PURINE SYNTHESIS INHIBITOR =====
  {
    id: 'azathioprine',
    genericName: 'Azathioprine',
    brandNames: ['Imuran'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Purine analog prodrug metabolized to 6-mercaptopurine and subsequently to active thioguanine nucleotides, which are incorporated into DNA/RNA and inhibit de novo purine synthesis. This preferentially suppresses the proliferation of rapidly dividing lymphocytes (T and B cells), producing a broad immunosuppressive effect used both to prevent transplant organ rejection and to control autoimmune inflammatory disease, including ocular inflammatory disease.',
    indications: [
      'Prevention of solid organ transplant rejection (kidney, liver, heart, etc.)',
      'Rheumatoid arthritis (steroid-sparing agent)',
      'Autoimmune hepatitis',
      'Inflammatory bowel disease (Crohn disease, ulcerative colitis)',
      'Chronic noninfectious autoimmune uveitis and other ocular inflammatory disease (as a steroid-sparing immunosuppressive agent)',
    ],
    ocularUses: [
      'None as a primary standalone ocular indication, though it is used systemically as a steroid-sparing agent to treat chronic autoimmune uveitis and other ocular inflammatory disease',
    ],
    typicalDosing: 'Oral, typically 1-2.5 mg/kg/day (rheumatologic/autoimmune dosing), adjusted based on thiopurine methyltransferase (TPMT) activity and clinical response/tolerability',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral (also available intravenous for transplant settings)',
    sideEffects: {
      ocular: [
        'Relatively low direct ocular toxicity compared with other agents in this class',
        'Increased susceptibility to ocular surface and adnexal infections (bacterial, viral, fungal) due to systemic immunosuppression, including risk of herpetic keratitis reactivation',
        'Rare reports of retinal hemorrhage in the setting of drug-induced bone marrow suppression/thrombocytopenia (secondary to systemic hematologic toxicity, not direct retinal drug toxicity)',
        'No characteristic maculopathy or corneal deposition pattern comparable to the antimalarials',
      ],
      systemic: [
        'Bone marrow suppression (leukopenia, thrombocytopenia, anemia) - major dose-limiting toxicity, more severe in patients with low/absent thiopurine methyltransferase (TPMT) enzyme activity',
        'Hepatotoxicity',
        'Increased risk of infection due to immunosuppression',
        'Increased long-term risk of certain malignancies (particularly lymphoma and non-melanoma skin cancer) with prolonged use',
        'Gastrointestinal upset, nausea',
        'Pancreatitis (uncommon)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to azathioprine',
      'Pregnancy (relative - used cautiously when benefit outweighs risk under specialist guidance)',
      'Active untreated infection (relative contraindication)',
    ],
    precautions: [
      'TPMT enzyme activity testing is recommended prior to initiation - patients with reduced or absent TPMT activity are at markedly increased risk of severe, potentially life-threatening myelosuppression at standard doses',
      'Regular monitoring of complete blood count and liver function required',
      'Increased long-term malignancy risk with prolonged immunosuppressive therapy',
    ],
    drugInteractions: [
      'Allopurinol - inhibits xanthine oxidase, dramatically increasing azathioprine/6-mercaptopurine levels and risk of severe myelosuppression; requires substantial azathioprine dose reduction if co-administered',
      'ACE inhibitors - may increase risk of leukopenia',
      'Warfarin - azathioprine may reduce anticoagulant effect',
      'Other myelosuppressive agents - additive bone marrow toxicity',
    ],
    patientCounseling: [
      'Report any fever, sore throat, unusual bruising or bleeding, or signs of infection promptly, as these may indicate bone marrow suppression',
      'Attend all scheduled blood test monitoring appointments',
      'Practice good ocular hygiene and report any new red eye, eye pain, or vision changes promptly given increased infection susceptibility',
      'Use sun protection given increased long-term skin cancer risk with prolonged use',
    ],
    pregnancyLactation:
      'Historically used cautiously in pregnancy (particularly in transplant recipients and inflammatory bowel disease) under specialist supervision when the benefit is judged to outweigh risk; some data suggest relatively lower fetal risk than other immunosuppressants, but use requires close multidisciplinary management. Caution during breastfeeding; typically avoided or closely monitored.',
    monitoring: [
      'Complete blood count (regularly, particularly at initiation and dose changes) to detect myelosuppression',
      'Liver function tests',
      'TPMT activity/genotype testing prior to initiation when available',
      'Ocular surface and adnexal examination for signs of infection given immunosuppressed status',
      'Routine dilated fundus exam is reasonable in long-term immunosuppressed patients, though no formal drug-specific retinal toxicity screening protocol is required (unlike hydroxychloroquine)',
    ],
    clinicalPearls: [
      'Azathioprine is primarily notable to optometry for what it does NOT cause - unlike hydroxychloroquine/chloroquine, it lacks a characteristic retinal toxicity syndrome, making it a useful contrast case on boards',
      'The clinically important interaction to remember is with ALLOPURINOL, which can precipitate severe, potentially fatal bone marrow suppression if the azathioprine dose is not substantially reduced',
      'Used by uveitis specialists as a corticosteroid-sparing agent for chronic autoimmune uveitis, allowing reduction of long-term steroid burden and its associated ocular complications (cataract, glaucoma)',
    ],
    highYield: [
      'Azathioprine has relatively LOW direct ocular toxicity - no characteristic maculopathy or corneal deposit pattern, an important contrast to the antimalarials in this same drug-class family',
      'Systemic immunosuppression increases risk of ocular surface/adnexal infection, including reactivation of herpetic keratitis - relevant to slit lamp examination findings',
      'Used therapeutically as a steroid-sparing agent to treat chronic autoimmune uveitis, similar in role to methotrexate',
      'Dangerous drug interaction: ALLOPURINOL markedly increases azathioprine levels and myelosuppression risk - a classic pharmacology interaction question',
      'TPMT enzyme deficiency predisposes to severe bone marrow suppression - underlies pre-treatment genetic/enzyme testing recommendations',
    ],
    references: [
      { label: 'Systemic immunosuppressive therapy for ocular inflammatory disease', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Azathioprine pharmacology and TPMT-related toxicity', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== ANTIPROLIFERATIVE / IMPDH INHIBITOR =====
  {
    id: 'mycophenolate',
    genericName: 'Mycophenolate mofetil',
    brandNames: ['CellCept'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Prodrug hydrolyzed to mycophenolic acid, which reversibly and selectively inhibits inosine monophosphate dehydrogenase (IMPDH), a key enzyme in the de novo purine synthesis pathway on which lymphocytes are uniquely dependent (unlike most other cell types, which can utilize salvage pathways). This produces relatively selective suppression of T- and B-lymphocyte proliferation with less broad cytotoxicity than older antimetabolites, making it a preferred agent for both transplant immunosuppression and steroid-sparing treatment of autoimmune/ocular inflammatory disease.',
    indications: [
      'Prevention of solid organ transplant rejection (kidney, liver, heart)',
      'Lupus nephritis',
      'Autoimmune/rheumatologic disease (steroid-sparing agent)',
      'Chronic noninfectious autoimmune uveitis, scleritis, and other ocular inflammatory disease (steroid-sparing agent)',
      'Ocular cicatricial pemphigoid',
    ],
    ocularUses: [
      'None as a primary standalone indication, but widely used systemically by uveitis/ocular inflammation specialists as a preferred first-line STEROID-SPARING immunosuppressive agent for chronic noninfectious uveitis and scleritis',
    ],
    typicalDosing: 'Oral, typically 1-1.5 g twice daily (2-3 g/day total) for autoimmune/ocular inflammatory indications, titrated to response and tolerability',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral (also available intravenous)',
    sideEffects: {
      ocular: [
        'Relatively low direct ocular toxicity - no characteristic retinopathy or corneal deposition syndrome',
        'Increased risk of ocular surface and adnexal infection due to systemic immunosuppression',
        'Rare reports of cystoid macular edema in the transplant literature (uncommon)',
        'Rare reports of blurred vision (usually attributed to systemic effects such as headache/GI upset rather than direct ocular toxicity)',
      ],
      systemic: [
        'Gastrointestinal toxicity (diarrhea, nausea, vomiting, abdominal pain) - most common dose-limiting side effect',
        'Bone marrow suppression (leukopenia, anemia, thrombocytopenia)',
        'Increased risk of infection, including opportunistic infections, given immunosuppression',
        'Increased long-term risk of lymphoma and skin malignancy with prolonged use',
        'Teratogenicity - significant risk of first-trimester pregnancy loss and congenital malformations',
      ],
    },
    contraindications: [
      'Pregnancy (significant teratogen, associated with a recognized pattern of congenital malformations - REMS program requirements apply)',
      'Known hypersensitivity to mycophenolate mofetil or mycophenolic acid',
      'Severe active gastrointestinal disease (relative contraindication given GI toxicity)',
    ],
    precautions: [
      'Requires reliable contraception in patients of reproductive potential given significant teratogenic risk (subject to an FDA Risk Evaluation and Mitigation Strategy, REMS)',
      'Regular blood count monitoring required, particularly during the first several months of therapy',
      'Increased long-term malignancy risk with prolonged immunosuppression',
    ],
    drugInteractions: [
      'Antacids (magnesium/aluminum-containing) - reduce mycophenolate absorption; separate administration',
      'Cholestyramine - reduces mycophenolate absorption via interruption of enterohepatic recirculation',
      'Live vaccines - should generally be avoided during therapy',
      'Other myelosuppressive or immunosuppressive agents - additive toxicity/infection risk',
    ],
    patientCounseling: [
      'Use reliable contraception during therapy and for a period after discontinuation given significant teratogenic risk; report suspected pregnancy immediately',
      'Report fever, signs of infection, or unusual bruising/bleeding promptly',
      'Attend scheduled blood monitoring appointments',
      'Report any new eye redness, pain, or vision change given increased infection susceptibility from systemic immunosuppression',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy - well-documented teratogen (mycophenolate embryopathy: external ear, facial, and other congenital anomalies) and increased first-trimester miscarriage risk; subject to an FDA REMS program requiring contraceptive counseling. Not recommended during breastfeeding.',
    monitoring: [
      'Complete blood count (regularly, especially during early therapy)',
      'Renal and hepatic function',
      'Pregnancy testing prior to and during therapy in patients of reproductive potential',
      'Ocular surface/adnexal examination for infection given immunosuppressed status; no drug-specific retinal toxicity screening protocol required',
    ],
    clinicalPearls: [
      'Mycophenolate mofetil has become one of the most commonly used STEROID-SPARING agents in uveitis subspecialty practice due to its relatively favorable side-effect profile compared to older antimetabolites and its relative lymphocyte selectivity',
      'Unlike hydroxychloroquine/chloroquine, it does not carry a formal ocular toxicity screening requirement - its main relevance to eye care is infection risk from systemic immunosuppression and its therapeutic role in controlling ocular inflammation',
      'The teratogenicity/REMS requirement is one of its most clinically important safety features to counsel patients about',
    ],
    highYield: [
      'Mycophenolate mofetil is a preferred first-line STEROID-SPARING agent for chronic noninfectious uveitis and scleritis - a key testable clinical-use fact',
      'Relatively LOW direct ocular toxicity - no characteristic retinopathy, unlike hydroxychloroquine/chloroquine',
      'Main ocular relevance is increased susceptibility to ocular surface/adnexal infection from systemic immunosuppression',
      'Significant TERATOGEN requiring FDA REMS-mandated contraceptive counseling - important safety counseling point',
      'Mechanism (IMPDH inhibition) is relatively lymphocyte-selective since lymphocytes uniquely depend on de novo purine synthesis - distinguishes it mechanistically from azathioprine',
    ],
    references: [
      { label: 'Mycophenolate mofetil as steroid-sparing therapy for noninfectious uveitis', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Mycophenolate mofetil pharmacology and REMS teratogenicity requirements', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== CALCINEURIN INHIBITORS =====
  {
    id: 'cyclosporine-systemic',
    genericName: 'Cyclosporine (systemic)',
    brandNames: ['Neoral', 'Sandimmune', 'Gengraf'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Calcineurin inhibitor that binds cyclophilin, and the resulting complex inhibits the phosphatase calcineurin, preventing dephosphorylation and nuclear translocation of nuclear factor of activated T cells (NFAT). This blocks transcription of interleukin-2 (IL-2) and other cytokines required for T-lymphocyte activation and proliferation, producing potent, relatively T-cell-selective immunosuppression. IMPORTANT: this systemic (oral/IV) form is an entirely distinct clinical entity from TOPICAL OPHTHALMIC cyclosporine (Restasis, Cequa) - the systemic form is dosed and absorbed for whole-body immunosuppression at doses many times higher than the trace topical exposure from an eye drop, and the two are used for completely different purposes.',
    indications: [
      'Prevention of solid organ transplant rejection (kidney, liver, heart)',
      'Severe/refractory rheumatoid arthritis',
      'Severe psoriasis',
      'Severe, vision-threatening noninfectious uveitis and other ocular inflammatory disease refractory to first-line therapy',
    ],
    ocularUses: [
      'None as topical/local ocular therapy at systemic doses — this is distinct from topical ophthalmic cyclosporine (Restasis/Cequa) used for dry eye disease; the systemic form is relevant to optometry primarily for its rare but serious ocular/neuro-ocular toxicities and for its use in treating severe refractory uveitis',
    ],
    typicalDosing: 'Oral, typically 2.5-5 mg/kg/day divided into two doses, titrated to trough blood levels and clinical response/toxicity',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Visual disturbances (blurred vision, visual field loss, cortical/transient blindness) in the setting of posterior reversible encephalopathy syndrome (PRES) - a rare but serious cyclosporine-associated neurotoxicity, typically at toxic drug levels or with concurrent severe hypertension',
        'Optic disc edema/papilledema, which can occur as part of cyclosporine-associated hypertensive encephalopathy or PRES',
        'No characteristic corneal or retinal pigmentary toxicity pattern (contrast with the antimalarials)',
        'Increased risk of ocular surface/adnexal infection due to systemic immunosuppression',
      ],
      systemic: [
        'Nephrotoxicity - major dose-limiting toxicity, can be acute (reversible, dose-related) or chronic (progressive, potentially irreversible fibrosis)',
        'Systemic hypertension - very common, often requires antihypertensive therapy',
        'Neurotoxicity (tremor, headache, seizures, and rarely posterior reversible encephalopathy syndrome/PRES with visual symptoms)',
        'Hepatotoxicity',
        'Hirsutism, gingival hyperplasia',
        'Increased risk of infection and long-term malignancy (particularly lymphoma and skin cancer) given immunosuppression',
        'Hyperlipidemia, hyperkalemia',
      ],
    },
    contraindications: [
      'Uncontrolled hypertension (relative - increases risk of nephrotoxicity and PRES)',
      'Uncontrolled active infection',
      'Known hypersensitivity to cyclosporine or its vehicle (some formulations contain polyoxyethylated castor oil)',
      'Concurrent use with certain drugs producing severe additive nephrotoxicity (relative contraindication)',
    ],
    precautions: [
      'Requires regular blood level (trough) monitoring given a narrow therapeutic index and marked inter-patient pharmacokinetic variability',
      'Blood pressure and renal function must be monitored closely throughout therapy',
      'Sudden severe visual disturbance or headache in a patient on systemic cyclosporine should raise concern for PRES and warrants urgent medical evaluation (often with neuroimaging and blood pressure/drug level assessment)',
      'Distinguish carefully from topical ophthalmic cyclosporine (Restasis/Cequa) when taking a medication history - patients and even records may not clarify route, but the clinical implications differ enormously',
    ],
    drugInteractions: [
      'CYP3A4 inhibitors (e.g., azole antifungals, macrolide antibiotics, grapefruit juice) - increase cyclosporine levels and toxicity risk',
      'CYP3A4 inducers (e.g., rifampin, carbamazepine, St. John\'s wort) - decrease cyclosporine levels and risk of rejection/disease flare',
      'Other nephrotoxic drugs (NSAIDs, aminoglycosides) - additive nephrotoxicity',
      'Statins - increased risk of myopathy/rhabdomyolysis with concurrent use',
      'Potassium-sparing diuretics - risk of hyperkalemia',
    ],
    patientCounseling: [
      'Attend all scheduled blood pressure checks, blood level monitoring, and renal function laboratory tests',
      'Report any sudden vision change, severe headache, confusion, or seizure activity immediately - these may signal a serious neurologic complication requiring urgent care',
      'Avoid grapefruit/grapefruit juice, which can significantly raise drug levels',
      'This oral/systemic medication is different from cyclosporine eye drops used for dry eye - do not confuse the two when discussing medications with any provider',
    ],
    pregnancyLactation:
      'Used with caution in pregnancy when clearly needed (e.g., transplant recipients), generally under close specialist supervision; not considered a major teratogen but requires risk-benefit assessment. Not recommended during breastfeeding due to excretion in breast milk.',
    monitoring: [
      'Cyclosporine trough blood levels',
      'Blood pressure (regularly, given high incidence of hypertension)',
      'Renal function (serum creatinine, BUN) - frequent monitoring given nephrotoxicity risk',
      'Liver function tests',
      'Visual symptoms and, if reported, prompt neuro-ophthalmic/neurologic evaluation (disc edema, visual field, neuroimaging) to rule out PRES',
    ],
    clinicalPearls: [
      'A classic NBEO trick pairing is systemic cyclosporine versus topical Restasis - same drug name, but the systemic form is dosed for whole-body immunosuppression and carries a completely different, more serious side-effect profile (nephrotoxicity, hypertension, PRES) than the trace topical exposure from an eye drop',
      'PRES (posterior reversible encephalopathy syndrome) with visual disturbance/cortical blindness is a rare but classic, serious complication of calcineurin inhibitor toxicity (both cyclosporine and tacrolimus) typically associated with markedly elevated drug levels and/or severe hypertension',
      'Used as a later-line steroid-sparing agent for severe, vision-threatening uveitis when other agents (antimetabolites) have failed',
    ],
    highYield: [
      'Systemic cyclosporine is DISTINCT from topical ophthalmic cyclosporine (Restasis/Cequa) - same drug molecule, but vastly different dose, route, purpose, and side-effect profile - a classic NBEO distinguishing question',
      'Rare but serious ocular/neuro-ocular toxicity: visual disturbance up to cortical blindness as part of posterior reversible encephalopathy syndrome (PRES), typically at toxic drug levels or with severe hypertension',
      'Can cause optic disc edema/papilledema in the setting of hypertensive encephalopathy or PRES',
      'Major systemic toxicities to know: nephrotoxicity and hypertension are the two dose-limiting adverse effects',
      'No characteristic retinal pigmentary toxicity or corneal deposition pattern - contrast with the antimalarials in this same broader immunosuppressant category',
    ],
    references: [
      { label: 'Calcineurin inhibitors in the treatment of severe noninfectious uveitis', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Cyclosporine pharmacology, nephrotoxicity, and neurotoxicity (PRES)', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'tacrolimus-systemic',
    genericName: 'Tacrolimus (systemic)',
    brandNames: ['Prograf', 'Astagraf XL'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Calcineurin inhibitor that binds FK-binding protein (FKBP-12) rather than cyclophilin, and the resulting complex inhibits calcineurin phosphatase activity, blocking NFAT-mediated transcription of IL-2 and other cytokines required for T-lymphocyte activation, similar to cyclosporine but roughly 10-100 times more potent on a milligram basis and acting via a distinct binding protein. IMPORTANT: this systemic (oral/IV) form is distinct from TOPICAL or compounded OPHTHALMIC tacrolimus, which is used off-label at trace concentrations for ocular surface inflammatory disease (e.g., vernal keratoconjunctivitis, atopic keratoconjunctivitis, severe dry eye) - the systemic form is dosed for whole-body immunosuppression and carries a substantially different and more serious risk profile.',
    indications: [
      'Prevention of solid organ transplant rejection (kidney, liver, heart, lung) - primary indication, generally more potent/effective than cyclosporine for this purpose',
      'Severe/refractory autoimmune disease',
      'Severe, refractory noninfectious ocular inflammatory disease (uveitis, scleritis) when other steroid-sparing agents have failed',
    ],
    ocularUses: [
      'None as topical/local ocular therapy at systemic doses — distinct from off-label compounded topical ophthalmic tacrolimus used for ocular surface disease; relevant to optometry chiefly for rare but serious neuro-ocular toxicity and its use in refractory severe uveitis',
    ],
    typicalDosing: 'Oral, typically 0.1-0.2 mg/kg/day divided into two doses (immediate-release) or once daily (extended-release, Astagraf XL), titrated to trough blood levels',
    concentrations: ['N/A — oral/systemic'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Visual disturbances (blurred vision, photophobia, and rarely cortical/transient blindness) associated with posterior reversible encephalopathy syndrome (PRES) - similar rare but serious risk as systemic cyclosporine, arguably reported somewhat more frequently with tacrolimus given its greater neurotoxic potency',
        'Optic disc edema in the setting of PRES/hypertensive encephalopathy',
        'No characteristic retinal pigmentary toxicity or corneal deposition pattern',
        'Increased risk of ocular surface/adnexal infection from systemic immunosuppression',
      ],
      systemic: [
        'Nephrotoxicity - dose-limiting, similar to cyclosporine',
        'Neurotoxicity - tends to be MORE pronounced than with cyclosporine (tremor, headache, insomnia, and PRES with more frequent reporting)',
        'New-onset diabetes mellitus/hyperglycemia (more common with tacrolimus than cyclosporine)',
        'Systemic hypertension',
        'Increased infection risk and long-term malignancy risk (lymphoma, skin cancer) from immunosuppression',
        'Hyperkalemia, hypomagnesemia',
        'Notably, tacrolimus does NOT typically cause the gingival hyperplasia or hirsutism seen with cyclosporine - a distinguishing comparative fact',
      ],
    },
    contraindications: [
      'Known hypersensitivity to tacrolimus',
      'Uncontrolled active infection',
      'Uncontrolled hypertension (relative - increases nephrotoxicity/PRES risk)',
    ],
    precautions: [
      'Narrow therapeutic index - requires regular trough blood level monitoring',
      'Greater neurotoxic and diabetogenic potency compared with cyclosporine requires close monitoring for tremor, headache, glucose intolerance, and visual/neurologic symptoms',
      'New/sudden visual disturbance, severe headache, confusion, or seizure warrants urgent evaluation for PRES',
      'Distinguish carefully from off-label topical/compounded ophthalmic tacrolimus when taking a medication history - route and dose completely change the risk profile',
    ],
    drugInteractions: [
      'CYP3A4 inhibitors (azole antifungals, macrolide antibiotics, grapefruit juice) - increase tacrolimus levels and toxicity risk',
      'CYP3A4 inducers (rifampin, carbamazepine, St. John\'s wort) - decrease tacrolimus levels, risking transplant rejection or disease flare',
      'Other nephrotoxic agents - additive nephrotoxicity',
      'Live vaccines - generally avoided during therapy',
    ],
    patientCounseling: [
      'Attend all scheduled blood level, blood pressure, renal function, and blood glucose monitoring',
      'Report sudden vision changes, severe headache, tremor, confusion, or seizure activity immediately',
      'Avoid grapefruit/grapefruit juice',
      'Be aware this oral/systemic medication is different from any topical tacrolimus ointment or eye drop that may be prescribed off-label for eye surface conditions',
    ],
    pregnancyLactation:
      'Used with caution in pregnancy when clearly needed (commonly continued in transplant recipients) under close specialist supervision; risk-benefit assessment required. Not recommended during breastfeeding due to excretion in breast milk.',
    monitoring: [
      'Tacrolimus trough blood levels',
      'Renal function',
      'Blood glucose (increased risk of new-onset diabetes)',
      'Blood pressure',
      'Visual/neurologic symptoms, with prompt evaluation (fundus exam, neuroimaging as indicated) if PRES is suspected',
    ],
    clinicalPearls: [
      'Tacrolimus is generally more potent than cyclosporine on a milligram basis and has largely replaced cyclosporine as the preferred calcineurin inhibitor in solid organ transplantation, though cyclosporine remains more commonly referenced for severe uveitis in some contexts',
      'Compared with cyclosporine, tacrolimus causes MORE neurotoxicity and MORE new-onset diabetes, but LESS gingival hyperplasia and LESS hirsutism - a useful comparative distinguishing fact for boards',
      'As with systemic cyclosporine, the critical NBEO distinction is separating this systemic immunosuppressive form from topical/compounded ophthalmic tacrolimus used off-label for ocular surface inflammatory disease',
    ],
    highYield: [
      'Systemic tacrolimus is DISTINCT from topical/compounded ophthalmic tacrolimus used off-label for ocular surface disease - same core drug concept as the cyclosporine systemic-vs-topical distinction, a parallel classic board trap',
      'Shares the rare but serious risk of visual disturbance/cortical blindness from posterior reversible encephalopathy syndrome (PRES), similar to systemic cyclosporine, and optic disc edema in that setting',
      'More potent calcineurin inhibitor than cyclosporine; associated with MORE neurotoxicity and diabetogenicity but LESS gingival hyperplasia/hirsutism than cyclosporine - key comparative distinguishing facts',
      'No characteristic retinal pigmentary or corneal toxicity pattern, unlike the antimalarials',
      'Used as a steroid-sparing agent in severe, refractory noninfectious uveitis when other agents fail',
    ],
    references: [
      { label: 'Calcineurin inhibitors (tacrolimus vs. cyclosporine) in transplantation and refractory uveitis', source: 'American Academy of Ophthalmology, Focal Points' },
      { label: 'Tacrolimus pharmacology, neurotoxicity, and comparison to cyclosporine', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
]
