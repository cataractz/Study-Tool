import type { Drug } from '../../types/drug'

export const systemicImmunosuppressant2AntiInfective: Drug[] = [
  // ===== RHEUMATOLOGIC / IMMUNOSUPPRESSANT =====
  {
    id: 'adalimumab',
    genericName: 'Adalimumab',
    brandNames: ['Humira'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Fully human recombinant IgG1 monoclonal antibody that binds tumor necrosis factor-alpha (TNF-alpha) with high specificity, neutralizing it and blocking its interaction with p55 and p75 cell-surface TNF receptors. This reduces the inflammatory cascade (cytokine release, leukocyte migration, endothelial activation) that drives autoimmune and inflammatory disease.',
    indications: [
      'Rheumatoid arthritis',
      'Psoriatic arthritis',
      'Ankylosing spondylitis',
      'Crohn disease and ulcerative colitis',
      'Plaque psoriasis',
      'Juvenile idiopathic arthritis',
      'Noninfectious intermediate, posterior, and panuveitis (direct FDA-approved ophthalmic indication)',
    ],
    ocularUses: [
      'FDA-approved for noninfectious intermediate uveitis, posterior uveitis, and panuveitis — one of the few systemic biologics with a direct ophthalmic indication (e.g., for uveitis associated with juvenile idiopathic arthritis, Behcet disease, or idiopathic chronic uveitis refractory to corticosteroids/other immunosuppressants)',
    ],
    typicalDosing:
      'Subcutaneous injection, typically 40 mg every other week for rheumatologic indications (loading dose regimens vary by indication); for uveitis, an 80 mg loading dose followed by 40 mg every other week starting one week later is a common regimen',
    concentrations: ['Subcutaneous injection'],
    formulations: ['Injection (prefilled syringe/pen)'],
    route: 'Subcutaneous injection',
    sideEffects: {
      ocular: [
        'Paradoxical new-onset or worsening uveitis has been rarely reported despite the drug being used to treat uveitis (a class-wide paradox with anti-TNF agents)',
        'Optic neuritis (rare) — anti-TNF agents can unmask or trigger demyelinating disease, including optic neuritis, in susceptible patients',
        'Dry eye / conjunctivitis (uncommon, nonspecific)',
        'Rare reports of scleritis or worsening ocular inflammation',
      ],
      systemic: [
        'Increased risk of serious infections, including reactivation of latent tuberculosis and opportunistic/fungal infections',
        'Injection site reactions (erythema, pain, swelling)',
        'Demyelinating disease (new-onset or exacerbation of multiple sclerosis-like syndromes)',
        'Increased risk of lymphoma and other malignancies (boxed warning, particularly in adolescents/young adults with inflammatory bowel disease)',
        'Reactivation of hepatitis B',
        'Heart failure exacerbation in patients with pre-existing cardiac disease',
        'Lupus-like syndrome (drug-induced lupus)',
        'Headache, rash, nausea',
      ],
    },
    contraindications: [
      'Active, untreated tuberculosis or other active serious infection',
      'Known hypersensitivity to adalimumab',
      'Moderate-to-severe heart failure (relative contraindication, especially at higher doses)',
    ],
    precautions: [
      'Screen for latent tuberculosis and hepatitis B before initiating therapy (boxed warning)',
      'Use caution in patients with pre-existing or recent-onset central nervous system demyelinating disease',
      'Avoid live vaccines during therapy',
      'Monitor for signs/symptoms of infection throughout treatment',
    ],
    drugInteractions: [
      'Other biologic DMARDs (e.g., anakinra, abatacept) — increased risk of serious infection when combined, generally avoided',
      'Live vaccines — reduced vaccine efficacy and risk of disseminated infection from the vaccine strain',
      'Methotrexate — often used in combination therapeutically but increases overall immunosuppression and infection risk',
    ],
    patientCounseling: [
      'Report any new visual changes, eye pain, redness, or floaters promptly, as these could represent worsening or new-onset uveitis, or optic nerve involvement',
      'Report numbness, tingling, vision loss, or weakness suggestive of demyelinating disease',
      'Report signs of infection (fever, persistent cough, night sweats) immediately',
      'Continue routine eye examinations even while uveitis is well-controlled on therapy',
    ],
    pregnancyLactation:
      'Crosses the placenta, particularly in the third trimester; generally considered compatible with pregnancy when needed to control maternal disease activity, though live vaccines should be delayed in infants exposed in utero. Minimal transfer into breast milk; generally considered compatible with breastfeeding.',
    pediatricConsiderations: [
      'FDA-approved to treat moderately-to-severely active polyarticular juvenile idiopathic arthritis in children 4 years and older, and moderate-to-severe pediatric Crohn disease in children 6 years and older; also increasingly used for pediatric noninfectious uveitis, including JIA-associated uveitis.',
      'TB and hepatitis B screening prior to initiation applies equally to pediatric patients before starting therapy.',
    ],
    relatedConditionIds: ['intermediate-uveitis', 'anterior-uveitis', 'rheumatoid-arthritis-ocular', 'crohn-disease', 'psoriatic-arthritis'],
    monitoring: [
      'Baseline and periodic dilated fundus examination in patients being treated for uveitis to assess inflammatory control',
      'New-onset visual symptoms, color vision changes, or optic nerve findings suggestive of optic neuritis',
      'Neurologic symptoms suggestive of demyelinating disease',
      'Signs of paradoxical new or worsening intraocular inflammation',
    ],
    clinicalPearls: [
      'Adalimumab (Humira) was the first biologic to receive FDA approval specifically for noninfectious uveitis (2016), based largely on the VISUAL-I and VISUAL-II trials — a frequently tested fact distinguishing it from other anti-TNF agents',
      'Often used as a corticosteroid-sparing agent in chronic noninfectious uveitis, particularly in juvenile idiopathic arthritis-associated uveitis',
      'The anti-TNF "paradox" — a drug class used to treat uveitis that can rarely also cause new-onset uveitis or optic neuritis — is a classic higher-order boards concept',
    ],
    highYield: [
      'Adalimumab is FDA-approved specifically for noninfectious intermediate, posterior, and panuveitis — one of the only systemic biologics with a direct ophthalmic indication, a top testable fact',
      'Anti-TNF agents as a class can paradoxically trigger new-onset optic neuritis or demyelinating disease (MS-like syndromes) despite being immunosuppressive',
      'Anti-TNF agents can also, paradoxically, rarely cause new-onset or worsening uveitis despite being a first-line uveitis treatment',
      'Requires TB and hepatitis B screening prior to initiation due to reactivation risk',
    ],
    references: [
      { label: 'Adalimumab in noninfectious uveitis (VISUAL trials)', source: 'American Academy of Ophthalmology, Uveitis Preferred Practice Pattern' },
      { label: 'Anti-TNF pharmacology and ocular/neurologic adverse effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'infliximab',
    genericName: 'Infliximab',
    brandNames: ['Remicade'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Chimeric (mouse/human) IgG1 monoclonal antibody administered by intravenous infusion that binds and neutralizes both soluble and transmembrane TNF-alpha, blocking downstream inflammatory signaling. Because it is chimeric rather than fully human, it carries a higher risk of infusion reactions and immunogenicity (anti-drug antibody formation) than fully human anti-TNF agents like adalimumab.',
    indications: [
      'Rheumatoid arthritis',
      'Crohn disease and ulcerative colitis',
      'Ankylosing spondylitis',
      'Psoriatic arthritis and plaque psoriasis',
      'Refractory noninfectious uveitis, particularly Behcet disease-associated posterior uveitis/retinal vasculitis (off-label but widely used and boards-relevant)',
    ],
    ocularUses: [
      'Used off-label as a corticosteroid-sparing/second-line agent for severe, refractory noninfectious uveitis, especially Behcet disease-associated panuveitis and retinal vasculitis, when other agents have failed',
    ],
    typicalDosing:
      'Intravenous infusion, typically 3-5 mg/kg (higher doses often used for uveitis, e.g., 5-10 mg/kg) at weeks 0, 2, and 6, then every 4-8 weeks for maintenance',
    concentrations: ['Intravenous infusion'],
    formulations: ['Injection (intravenous infusion)'],
    route: 'Intravenous infusion',
    sideEffects: {
      ocular: [
        'Paradoxical new-onset or worsening uveitis (rare, class effect of anti-TNF agents)',
        'Optic neuritis and other demyelinating optic nerve disease (rare, class effect)',
        'Conjunctivitis (uncommon)',
      ],
      systemic: [
        'Infusion reactions (fever, chills, urticaria, hypotension, dyspnea) — more common than with subcutaneous anti-TNF agents due to chimeric antibody structure',
        'Increased risk of serious infections, including TB reactivation and opportunistic infections',
        'Demyelinating disease (new-onset or exacerbation)',
        'Increased risk of lymphoma and malignancy (boxed warning)',
        'Hepatotoxicity',
        'Heart failure exacerbation',
        'Development of anti-drug antibodies leading to reduced efficacy over time',
      ],
    },
    contraindications: [
      'Active, untreated tuberculosis or serious active infection',
      'Moderate-to-severe heart failure (contraindicated at doses greater than 5 mg/kg)',
      'Known hypersensitivity to infliximab or murine proteins',
    ],
    precautions: [
      'Screen for latent TB and hepatitis B before starting',
      'Premedication (antihistamines, acetaminophen, sometimes corticosteroids) may reduce infusion reaction risk',
      'Caution in patients with pre-existing demyelinating disease',
      'Avoid live vaccines during treatment',
    ],
    drugInteractions: [
      'Live vaccines — avoid due to reduced efficacy and infection risk',
      'Other biologic DMARDs — additive infection risk, generally avoided in combination',
      'Anakinra — increased serious infection risk when combined',
    ],
    patientCounseling: [
      'Report vision changes, eye pain, or new floaters, which could indicate worsening uveitis or optic nerve involvement',
      'Report numbness, tingling, or weakness suggestive of demyelinating disease',
      'Report signs of infusion reaction during or shortly after infusion (itching, flushing, chest tightness, difficulty breathing)',
      'Continue routine ophthalmic monitoring for uveitis control even when systemically asymptomatic',
    ],
    pregnancyLactation:
      'Crosses the placenta, especially in the third trimester; generally used when maternal disease benefit outweighs risk, with attention to live-vaccine timing in exposed infants. Minimal transfer into breast milk; generally considered compatible with breastfeeding.',
    pediatricConsiderations: [
      'FDA-approved for moderately-to-severely active pediatric Crohn disease and ulcerative colitis in children 6 years and older; also used off-label for pediatric Behcet disease-associated uveitis/retinal vasculitis and other severe refractory pediatric uveitis when other agents fail.',
      'Immunogenicity (anti-drug antibody formation) can be more clinically significant in pediatric patients, sometimes prompting co-administration with methotrexate or azathioprine to reduce antibody formation and preserve efficacy.',
    ],
    relatedConditionIds: ['crohn-disease', 'ulcerative-colitis', 'behcet-disease', 'retinal-vasculitis-eales-disease', 'intermediate-uveitis'],
    monitoring: [
      'Periodic dilated fundus/anterior chamber examination to assess uveitis activity in patients treated for ocular inflammatory disease',
      'Visual acuity and color vision if optic neuritis is suspected',
      'Signs of infusion reaction during treatment',
      'Screening labs (CBC, liver function) periodically during therapy',
    ],
    clinicalPearls: [
      'A first-line steroid-sparing systemic agent for Behcet disease-associated posterior uveitis and retinal vasculitis, a classically boards-tested association',
      'Being a chimeric (part-mouse) antibody, infliximab has higher immunogenicity than fully human adalimumab, leading to more infusion reactions and antibody-mediated loss of efficacy over time',
      'Administered IV in a clinical setting (unlike adalimumab, which is self-administered subcutaneously) — an important practical distinguishing fact',
    ],
    highYield: [
      'Infliximab is a chimeric monoclonal antibody given by IV infusion — distinguishes it from the fully human, subcutaneous adalimumab',
      'A key steroid-sparing agent for Behcet disease-associated uveitis/retinal vasculitis, a classic clinical association tested on boards',
      'Shares the anti-TNF class risks of paradoxical uveitis and optic neuritis/demyelinating disease',
      'Higher infusion-reaction and immunogenicity risk than fully human anti-TNF agents due to its chimeric structure',
    ],
    references: [
      { label: 'Infliximab in Behcet disease-associated uveitis', source: 'American Academy of Ophthalmology, Uveitis Preferred Practice Pattern' },
      { label: 'Anti-TNF biologic pharmacology', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'etanercept',
    genericName: 'Etanercept',
    brandNames: ['Enbrel'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Recombinant fusion protein combining two soluble TNF p75 receptors linked to the Fc portion of human IgG1. Unlike adalimumab and infliximab (which are true monoclonal antibodies that bind TNF-alpha directly), etanercept acts as a soluble decoy receptor that binds and neutralizes circulating TNF-alpha (and to a lesser degree TNF-beta/lymphotoxin), preventing receptor-mediated signaling. This mechanistic distinction correlates with reduced efficacy for granulomatous and ocular inflammatory disease compared to monoclonal anti-TNF antibodies.',
    indications: [
      'Rheumatoid arthritis',
      'Psoriatic arthritis',
      'Ankylosing spondylitis',
      'Plaque psoriasis',
      'Juvenile idiopathic arthritis',
    ],
    ocularUses: [
      'None — systemic medication; relevant to optometry for ocular toxicity monitoring and as a classic "wrong choice" for uveitis treatment on boards',
    ],
    typicalDosing: 'Subcutaneous injection, 50 mg once weekly (or 25 mg twice weekly) for adults; weight-based dosing in pediatric patients',
    concentrations: ['Subcutaneous injection'],
    formulations: ['Injection (prefilled syringe/pen)'],
    route: 'Subcutaneous injection',
    sideEffects: {
      ocular: [
        'Paradoxical new-onset or worsening uveitis (reported more frequently with etanercept than with monoclonal anti-TNF agents — a key distinguishing safety signal)',
        'Optic neuritis and demyelinating optic nerve disease (class effect, rare)',
        'Conjunctivitis (uncommon)',
      ],
      systemic: [
        'Increased risk of serious infections, including TB reactivation',
        'Injection site reactions',
        'Demyelinating disease (new-onset or exacerbation)',
        'Increased malignancy risk (boxed warning), including lymphoma',
        'Heart failure exacerbation',
        'Cytopenias (rare)',
      ],
    },
    contraindications: [
      'Active, untreated tuberculosis or serious active infection',
      'Sepsis',
      'Known hypersensitivity to etanercept',
    ],
    precautions: [
      'Screen for latent TB and hepatitis B before initiating',
      'Caution in patients with pre-existing demyelinating disease',
      'Avoid live vaccines during therapy',
      'Not preferred for patients with active ocular inflammatory disease/uveitis',
    ],
    drugInteractions: [
      'Live vaccines — avoid due to reduced efficacy and infection risk',
      'Anakinra and other biologic DMARDs — additive infection risk',
      'Cyclophosphamide — increased malignancy risk reported in combination, generally avoided',
    ],
    patientCounseling: [
      'Report any new eye redness, pain, light sensitivity, or floaters, which could represent new or worsening uveitis',
      'Report neurologic symptoms such as numbness, tingling, or vision loss suggestive of demyelinating disease',
      'Report signs of infection promptly',
    ],
    pregnancyLactation:
      'Crosses the placenta in later pregnancy; use only if maternal benefit outweighs risk. Low levels detected in breast milk; generally considered compatible with breastfeeding with clinical judgment.',
    pediatricConsiderations: [
      'FDA-approved for moderately-to-severely active polyarticular juvenile idiopathic arthritis in children 2 years and older, one of the first biologics approved for pediatric JIA (1999); NOT preferred for pediatric uveitis given its comparatively higher reported rate of paradoxical uveitis induction and lower efficacy for ocular inflammatory disease relative to monoclonal anti-TNF agents.',
      'TB/hepatitis B screening and live-vaccine precautions apply the same as in adults.',
    ],
    relatedConditionIds: ['rheumatoid-arthritis-ocular', 'psoriatic-arthritis', 'ankylosing-spondylitis'],
    monitoring: [
      'Monitor for new or worsening ocular inflammation given the higher reported association with paradoxical uveitis in this drug relative to other anti-TNF agents',
      'Visual symptoms suggestive of optic neuritis',
      'Signs of infection and routine labs per rheumatology follow-up',
    ],
    clinicalPearls: [
      'Etanercept is generally considered LESS effective than adalimumab or infliximab for treating ocular inflammatory disease/uveitis and is generally NOT the preferred anti-TNF agent when uveitis is present — a classic distinguishing fact within the anti-TNF drug class on boards',
      'Its distinct mechanism (soluble TNF receptor fusion protein rather than a direct monoclonal antibody against TNF) is believed to underlie both its reduced uveitis efficacy and its relatively higher rate of paradoxical uveitis induction compared to adalimumab/infliximab',
      'Frequently appears on exams as the "wrong answer" anti-TNF choice for a uveitis vignette, with adalimumab or infliximab being the better answer',
    ],
    highYield: [
      'Etanercept is a soluble TNF-receptor fusion protein, NOT a monoclonal antibody — mechanistically distinct from adalimumab and infliximab',
      'Etanercept is LESS effective for uveitis/ocular inflammatory disease and is generally avoided as first-line anti-TNF therapy when uveitis is a concern — a classic comparative board fact',
      'Etanercept has a comparatively higher reported rate of paradoxically inducing new-onset uveitis than the monoclonal anti-TNF antibodies',
      'Shares class-wide risks of demyelinating disease/optic neuritis and TB reactivation',
    ],
    references: [
      { label: 'Comparative efficacy of anti-TNF agents in uveitis', source: 'American Academy of Ophthalmology, Uveitis Preferred Practice Pattern' },
      { label: 'Etanercept mechanism and ocular inflammatory disease outcomes', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'allopurinol',
    genericName: 'Allopurinol',
    brandNames: ['Zyloprim'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Xanthine oxidase inhibitor. Allopurinol and its active metabolite oxypurinol inhibit xanthine oxidase, the enzyme responsible for converting hypoxanthine to xanthine and xanthine to uric acid, thereby reducing serum and urinary uric acid production/levels.',
    indications: [
      'Chronic gout / hyperuricemia (prevention of recurrent gout attacks and tophi formation)',
      'Prevention of uric acid nephropathy associated with tumor lysis syndrome (chemotherapy-induced)',
      'Recurrent calcium oxalate renal calculi associated with hyperuricosuria',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral, typically 100-300 mg once daily initially, titrated up to 800 mg/day (in divided doses) as needed based on serum uric acid levels',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Injection (intravenous)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Cataract formation with long-term use (rare but reported association, particularly with prolonged high-dose therapy)',
        'Rare reports of visual disturbances, macular changes, or optic neuritis (uncommon)',
      ],
      systemic: [
        'Skin rash (common, may herald more serious hypersensitivity)',
        'Severe cutaneous adverse reactions including Stevens-Johnson syndrome and toxic epidermal necrolysis (rare but life-threatening, higher risk in patients with the HLA-B*5801 allele)',
        'Hepatotoxicity',
        'Bone marrow suppression (rare)',
        'GI upset (nausea, diarrhea)',
        'Acute gout flare paradoxically at initiation of therapy (mobilization of urate deposits)',
      ],
    },
    contraindications: [
      'Known hypersensitivity to allopurinol',
      'Prior severe cutaneous reaction (SJS/TEN) to allopurinol',
    ],
    precautions: [
      'Consider HLA-B*5801 screening in high-risk populations (e.g., Southeast Asian, particularly Han Chinese, Korean, and Thai descent) before initiation given elevated SJS/TEN risk',
      'Dose adjustment required in renal impairment',
      'Often co-administered with a prophylactic anti-inflammatory (colchicine or NSAID) during initiation to prevent acute gout flares',
    ],
    drugInteractions: [
      'Azathioprine and mercaptopurine — allopurinol inhibits their metabolism via xanthine oxidase, markedly increasing toxicity (severe, potentially fatal bone marrow suppression) — dose reduction of the thiopurine is required',
      'Warfarin — allopurinol may potentiate anticoagulant effect',
      'Ampicillin/amoxicillin — increased incidence of skin rash when combined with allopurinol',
    ],
    patientCounseling: [
      'Report any new skin rash immediately, as this can be an early sign of a serious hypersensitivity reaction',
      'Maintain adequate fluid intake',
      'Gout flares may occur when first starting therapy — this does not mean the medication is not working',
      'Report any new visual changes or blurred vision to an eye care provider',
    ],
    pregnancyLactation:
      'Limited human data; use only if clearly needed during pregnancy. Excreted into breast milk in small amounts; generally used with caution during breastfeeding.',
    pediatricConsiderations: [
      'Used in pediatric oncology for prevention/treatment of tumor lysis syndrome and hyperuricemia during chemotherapy induction, typically 50-100 mg/m2 every 8 hours (or ~10 mg/kg/day, max 600 mg/day IV or 800 mg/day oral), started 24-48 hours before chemotherapy; an IV formulation is available for patients unable to take oral medication.',
      'Rasburicase is now generally preferred over allopurinol for high-risk pediatric tumor lysis syndrome given its more rapid and complete uric-acid-lowering effect.',
    ],
    relatedConditionIds: ['gout-ocular'],
    monitoring: [
      'Periodic dilated eye examination for cataract formation with long-term use',
      'Serum uric acid levels to titrate therapy',
      'Liver and renal function periodically',
      'Skin examination/rash surveillance, particularly early in therapy',
    ],
    clinicalPearls: [
      'The interaction with azathioprine/6-mercaptopurine is one of the most dangerous and frequently tested drug interactions in all of pharmacology — allopurinol blocks the same enzyme that metabolizes these thiopurines, causing severe myelosuppression if doses are not reduced',
      'Cataract association is a low-to-moderate yield ocular fact but worth knowing to distinguish allopurinol from more classically cataractogenic drugs like corticosteroids',
      'Allopurinol is a maintenance/prophylactic drug for chronic gout, not for treatment of an acute gout attack (colchicine/NSAIDs/steroids are used acutely)',
    ],
    highYield: [
      'Allopurinol is a xanthine oxidase inhibitor used for chronic gout/hyperuricemia prevention, not acute flares',
      'Rare but reported association with cataract formation with long-term use — a lower-yield but testable ocular fact',
      'Dangerous drug interaction with azathioprine/6-mercaptopurine causing severe bone marrow suppression via shared xanthine oxidase metabolism',
      'Risk of Stevens-Johnson syndrome/toxic epidermal necrolysis, especially in patients with the HLA-B*5801 allele',
    ],
    references: [
      { label: 'Allopurinol pharmacology and adverse effects', source: 'Goodman & Gilman: The Pharmacological Basis of Therapeutics' },
      { label: 'Ocular side effects of systemic medications', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'colchicine',
    genericName: 'Colchicine',
    brandNames: ['Colcrys', 'Mitigare'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Binds tubulin and inhibits its polymerization into microtubules, thereby disrupting neutrophil chemotaxis, migration, and phagocytosis of urate crystals, and reducing the inflammatory response to crystal deposition. Also inhibits inflammasome (NLRP3) activation, reducing IL-1beta release.',
    indications: [
      'Acute gout flare treatment and prophylaxis',
      'Familial Mediterranean fever',
      'Pericarditis (adjunctive)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring (minimal direct ocular toxicity)'],
    typicalDosing:
      'Acute gout: 1.2 mg at onset, then 0.6 mg one hour later (maximum 1.8 mg over one hour); prophylaxis: 0.6 mg once or twice daily',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Capsule'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Minimal direct ocular toxicity — colchicine is a low-yield entry for ocular side effects compared to other systemic drugs in this category',
        'Rare, isolated case reports of extraocular muscle myopathy or ptosis in the setting of colchicine-induced generalized myopathy (very rare, seen mainly with chronic toxicity or renal impairment)',
      ],
      systemic: [
        'GI upset (nausea, vomiting, diarrhea, abdominal pain) — very common, often dose-limiting',
        'Myopathy and neuropathy with chronic use or overdose (colchicine myoneuropathy), especially in renal impairment or with concurrent statin/CYP3A4 inhibitor use',
        'Bone marrow suppression with toxicity/overdose',
        'Hepatotoxicity (rare)',
        'Narrow therapeutic index — overdose can be fatal (multiorgan failure)',
      ],
    },
    contraindications: [
      'Concurrent use with strong CYP3A4 inhibitors or P-glycoprotein inhibitors in patients with renal or hepatic impairment (risk of life-threatening toxicity)',
      'Severe renal or hepatic impairment in combination with a P-glycoprotein or strong CYP3A4 inhibitor',
      'Known hypersensitivity',
    ],
    precautions: [
      'Dose adjustment required in renal and hepatic impairment',
      'Narrow therapeutic index — avoid exceeding recommended dosing',
      'Use caution in elderly patients and those with pre-existing GI, renal, hepatic, or cardiac disease',
    ],
    drugInteractions: [
      'Strong CYP3A4 inhibitors (clarithromycin, ketoconazole, ritonavir) — markedly increased colchicine levels and toxicity risk',
      'P-glycoprotein inhibitors (cyclosporine, verapamil) — increased colchicine toxicity risk',
      'Statins — additive risk of myopathy/rhabdomyolysis when combined with colchicine',
    ],
    patientCounseling: [
      'Take exactly as directed; do not exceed the recommended dose given the narrow margin between therapeutic and toxic doses',
      'Report new muscle weakness, pain, or tingling, which could indicate colchicine-induced myopathy/neuropathy',
      'Report severe or persistent GI symptoms',
    ],
    pregnancyLactation:
      'Generally considered compatible with pregnancy when used for familial Mediterranean fever (well-studied in this population); use in gout during pregnancy only if clearly needed. Present in breast milk in small amounts; generally considered compatible with breastfeeding with monitoring.',
    pediatricConsiderations: [
      'FDA-approved for familial Mediterranean fever (FMF) in children 4 years and older, with age-based dosing (e.g., approximately 0.3-1.8 mg/day in children 4-6 years); real-world data suggest similar safety and efficacy in children younger than 4 despite the lack of formal FDA approval in that age group.',
      'GI side effects remain the primary dose-limiting toxicity in pediatric FMF patients, similar to adults.',
    ],
    offLabelUses: ['Secondary prevention of major cardiovascular events (MI, stroke, coronary revascularization) at a low 0.5 mg once-daily dose — FDA-approved in 2023 under the brand Lodoco, a distinct cardiovascular anti-inflammatory indication from this drug\'s traditional gout/FMF uses'],
    monitoring: [
      'Renal and hepatic function periodically with chronic use',
      'CBC with chronic therapy (bone marrow suppression risk)',
      'Muscle strength/neurologic exam if myopathy or neuropathy is suspected',
    ],
    clinicalPearls: [
      'Colchicine has essentially no significant primary ocular toxicity profile, making it a useful "distractor" or low-yield contrast drug on exams that test recognition of which systemic drugs do and do not cause classic ocular findings',
      'The most dangerous interactions involve CYP3A4/P-glycoprotein inhibitors, which can precipitate fatal toxicity even at standard doses',
      'Familial Mediterranean fever is a classic, specific indication worth remembering distinct from gout',
    ],
    highYield: [
      'Colchicine has minimal direct ocular toxicity — a useful low-yield/contrast fact versus other systemic drugs with prominent eye findings (e.g., ethambutol, hydroxychloroquine)',
      'Mechanism: inhibits tubulin polymerization/microtubule formation, disrupting neutrophil migration and phagocytosis',
      'Narrow therapeutic index with dangerous interactions via CYP3A4 and P-glycoprotein inhibitors',
      'Indicated for acute gout flares and familial Mediterranean fever prophylaxis',
    ],
    references: [
      { label: 'Colchicine pharmacology and toxicity', source: 'Goodman & Gilman: The Pharmacological Basis of Therapeutics' },
      { label: 'Systemic drugs with minimal ocular toxicity profiles', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'prednisone',
    genericName: 'Prednisone',
    brandNames: ['Deltasone', 'Rayos'],
    drugClass: 'Rheumatologic / Immunosuppressant',
    mechanismOfAction:
      'Synthetic glucocorticoid (prodrug converted to active prednisolone by hepatic 11-beta-hydroxysteroid dehydrogenase) that binds intracellular glucocorticoid receptors, translocates to the nucleus, and alters gene transcription to broadly suppress inflammatory and immune pathways: inhibits phospholipase A2 (reducing arachidonic acid cascade/prostaglandin and leukotriene synthesis), decreases cytokine production, inhibits leukocyte migration and activation, and stabilizes cell/lysosomal membranes.',
    indications: [
      'Broad range of autoimmune and inflammatory conditions: rheumatoid arthritis, systemic lupus erythematosus, vasculitis, inflammatory bowel disease, asthma/COPD exacerbations',
      'Severe allergic reactions',
      'Ocular inflammatory disease requiring systemic control: severe/sight-threatening uveitis, scleritis, optic neuritis, giant cell arteritis, thyroid eye disease',
      'Adrenal insufficiency (replacement)',
    ],
    ocularUses: [
      'Also used THERAPEUTICALLY for many ocular inflammatory conditions (severe or bilateral uveitis, scleritis, optic neuritis, giant cell arteritis, thyroid-associated orbitopathy) — an important dual identity: prednisone is simultaneously an ocular treatment AND, with chronic use, a cause of significant ocular toxicity (posterior subcapsular cataract, steroid-response glaucoma, central serous chorioretinopathy)',
    ],
    typicalDosing:
      'Highly variable by indication; anti-inflammatory/immunosuppressive dosing commonly starts at 1 mg/kg/day (up to 60-80 mg/day) for severe disease, then tapered; low-dose maintenance regimens (5-10 mg/day) also used for chronic conditions',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Delayed-release tablet', 'Oral solution'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Posterior subcapsular cataract (PSC) — classic, dose- and duration-dependent finding with chronic systemic corticosteroid use, mechanistically analogous to but generally requiring more prolonged exposure than topical ocular steroids',
        'Steroid-response ocular hypertension/glaucoma — elevated IOP with chronic use, same underlying trabecular meshwork mechanism as topical steroids though generally less pronounced/predictable with systemic dosing',
        'Central serous chorioretinopathy (CSCR) — well-established, highly testable association with systemic (and inhaled/intra-articular/topical) corticosteroid use; classically presents with sudden painless central vision distortion/blur in a patient on steroids',
        'Exophthalmos/orbital fat changes (with very long-term high-dose use, e.g., exogenous Cushing syndrome)',
        'Increased risk of ocular/periocular infection due to immunosuppression',
      ],
      systemic: [
        'Iatrogenic Cushing syndrome (moon facies, buffalo hump, central obesity, striae) with chronic use',
        'Hyperglycemia/steroid-induced diabetes',
        'Osteoporosis and increased fracture risk',
        'Adrenal suppression/adrenal insufficiency with abrupt discontinuation after prolonged use',
        'Hypertension, fluid retention',
        'Increased infection risk (immunosuppression)',
        'Mood changes, insomnia, psychosis (rare)',
        'Peptic ulcer disease, GI bleeding risk (especially with concurrent NSAID use)',
        'Growth suppression in children',
        'Avascular necrosis of the femoral head',
      ],
    },
    contraindications: [
      'Systemic fungal infections',
      'Known hypersensitivity to prednisone/prednisolone or components',
      'Live vaccine administration during high-dose immunosuppressive therapy',
    ],
    precautions: [
      'Never abruptly discontinue after prolonged use — requires gradual tapering to avoid adrenal insufficiency',
      'Use lowest effective dose for shortest duration possible given the cumulative dose-dependent risk profile',
      'Monitor blood glucose, blood pressure, and bone density with long-term use',
      'Caution in patients with diabetes, hypertension, peptic ulcer disease, osteoporosis, or psychiatric illness',
    ],
    drugInteractions: [
      'NSAIDs — additive GI ulceration/bleeding risk',
      'CYP3A4 inducers (e.g., rifampin, phenytoin) — reduced corticosteroid efficacy via increased metabolism',
      'CYP3A4 inhibitors (e.g., ketoconazole) — increased corticosteroid levels/effect',
      'Live vaccines — avoid during immunosuppressive dosing',
      'Diabetic medications — may require dose adjustment due to steroid-induced hyperglycemia',
    ],
    patientCounseling: [
      'Do not stop this medication abruptly, especially after weeks of use — it must be tapered gradually under medical supervision',
      'Report any sudden blurring or distortion of central vision, which could indicate central serous chorioretinopathy',
      'Continue regular comprehensive eye examinations, including dilated exam and IOP checks, during long-term therapy',
      'Report visual halos, eye pain, or blurred vision that could indicate steroid-induced glaucoma or cataract',
      'Take with food to reduce GI upset',
    ],
    pregnancyLactation:
      'Generally considered the preferred systemic corticosteroid in pregnancy when needed, as placental 11-beta-hydroxysteroid dehydrogenase limits fetal exposure by converting it to inactive metabolites; used when maternal benefit outweighs risk. Low levels in breast milk; generally considered compatible with breastfeeding, particularly at lower doses.',
    pediatricConsiderations: [
      'Growth suppression is a major dose- and duration-dependent concern unique to pediatric use, particularly during puberty; alternate-day dosing regimens are often used in children with chronic conditions to minimize growth and HPA-axis suppression.',
      'Children treated with supraphysiologic doses (greater than ~2.5 mg/m2/day prednisone-equivalent) for more than 4 weeks are at risk for secondary adrenal suppression, with risk rising substantially for courses beyond 6 months.',
      'Also widely used in pediatrics for nephrotic syndrome, asthma exacerbations, and Kawasaki disease, in addition to the ocular/rheumatologic indications relevant here.',
    ],
    isEmergencyMedication: true,
    relatedConditionIds: ['giant-cell-arteritis', 'optic-neuritis', 'anterior-uveitis', 'scleritis', 'thyroid-eye-disease'],
    monitoring: [
      'Dilated fundus examination and IOP monitoring with chronic systemic use to screen for steroid-response glaucoma and cataract',
      'Slit lamp examination for posterior subcapsular cataract formation',
      'Screen for central serous chorioretinopathy symptoms (metamorphopsia, central blur) with OCT if suspected',
      'Blood glucose, blood pressure, bone density with long-term systemic therapy',
    ],
    clinicalPearls: [
      'Prednisone occupies a unique dual role in ocular pharmacology: it is both a first-line THERAPY for many severe ocular inflammatory conditions (uveitis, scleritis, optic neuritis, GCA) and a well-documented CAUSE of ocular toxicity (cataract, glaucoma, CSCR) with chronic use — this dual identity is an important nuance for boards',
      'Central serous chorioretinopathy classically occurs in a "type A personality," steroid-exposed patient with sudden painless unilateral central vision distortion — the steroid link (any route: oral, inhaled, nasal, topical, intra-articular, even endogenous Cushing) is one of the most tested associations in retina/pharmacology',
      'Systemic steroid cataract (PSC) and steroid glaucoma share the same underlying mechanisms as topical ocular steroids, but the systemic route generally requires longer/higher cumulative exposure — an important comparative point',
      'Must always be tapered, never stopped abruptly, after any significant duration of use due to HPA axis suppression',
    ],
    highYield: [
      'Chronic systemic corticosteroid use causes posterior subcapsular cataract and steroid-response IOP elevation/glaucoma — same class effect as topical ocular steroids, a key comparative fact',
      'Systemic corticosteroids (including oral prednisone) are a well-established, highly testable cause of central serous chorioretinopathy',
      'Prednisone has a dual identity: it is both used THERAPEUTICALLY for ocular inflammatory disease (uveitis, scleritis, optic neuritis, GCA) and is itself a RISK FACTOR for ocular toxicity with chronic use',
      'Must be tapered rather than stopped abruptly after prolonged use, due to adrenal suppression',
      'Giant cell arteritis (a major cause of anterior ischemic optic neuropathy in the elderly) is treated emergently with high-dose systemic corticosteroids to prevent contralateral vision loss — a classic boards scenario',
    ],
    references: [
      { label: 'Systemic corticosteroids and central serous chorioretinopathy', source: 'American Academy of Ophthalmology, Retina/Vitreous Preferred Practice Pattern' },
      { label: 'Corticosteroid pharmacology and ocular adverse effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },

  // ===== ANTI-INFECTIVE (SYSTEMIC) =====
  {
    id: 'doxycycline',
    genericName: 'Doxycycline',
    brandNames: ['Vibramycin', 'Doryx', 'Oracea'],
    drugClass: 'Anti-infective (systemic)',
    mechanismOfAction:
      'Tetracycline-class antibiotic that inhibits bacterial protein synthesis by binding the 30S ribosomal subunit, blocking aminoacyl-tRNA attachment. At the low, sub-antimicrobial doses used for ocular surface disease, doxycycline acts primarily through non-antibiotic, anti-inflammatory mechanisms: inhibition of matrix metalloproteinases (particularly MMP-9), reduction of bacterial lipase production by lid flora (which decreases free fatty acid byproducts that irritate the meibomian glands and ocular surface), and direct anti-inflammatory/immunomodulatory effects.',
    indications: [
      'Broad-spectrum antibacterial: respiratory infections, tick-borne illness (Lyme disease, Rocky Mountain spotted fever), chlamydial infections, acne vulgaris, malaria prophylaxis',
    ],
    ocularUses: [
      'Low-dose oral doxycycline (e.g., 20-50 mg once or twice daily, sub-antimicrobial dosing) is a well-established, optometry-relevant treatment for meibomian gland dysfunction (MGD), chronic blepharitis, and ocular rosacea, acting via anti-inflammatory/anti-matrix-metalloproteinase effects rather than pure antimicrobial action — an important use despite being a systemic drug',
      'Adjunctive treatment for recurrent corneal erosion syndrome (anti-MMP-9 effect helps epithelial basement membrane adhesion)',
    ],
    typicalDosing:
      'Ocular surface disease (MGD/blepharitis/rosacea): 20-50 mg once or twice daily (sub-antimicrobial/anti-inflammatory dosing); infectious indications: 100 mg once or twice daily',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Capsule', 'Tablet', 'Oral suspension', 'Injection (intravenous)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Photosensitivity affecting the periocular skin and increasing risk of phototoxic reactions with sun exposure',
        'Benign intracranial hypertension (pseudotumor cerebri) — rare but important, causing papilledema, headache, and transient visual obscurations/vision loss; risk is notably increased when combined with isotretinoin, and is classically described in young, overweight women',
        'Blue-gray discoloration of the sclera and ocular tissue has been rarely reported with very long-term/high cumulative dosing (analogous to skin/mucosal pigmentation)',
      ],
      systemic: [
        'Photosensitivity (skin) — very common, requires sun protection counseling',
        'GI upset (nausea, esophagitis/esophageal ulceration if taken without adequate water or while lying down)',
        'Tooth discoloration (permanent, yellow-gray-brown staining) and enamel hypoplasia when used in children under 8 years or in utero (classic tetracycline-class fact, not ocular but frequently paired with the ocular facts on exams)',
        'Vaginal candidiasis',
        'Rare hepatotoxicity',
        'Contraindicated in pregnancy due to fetal bone/tooth effects',
      ],
    },
    contraindications: [
      'Pregnancy (fetal tooth/bone effects)',
      'Children under 8 years of age (tooth discoloration/enamel hypoplasia) except in specific circumstances where benefits outweigh risk',
      'Known hypersensitivity to tetracyclines',
    ],
    precautions: [
      'Advise sun protection/avoidance due to photosensitivity',
      'Take with a full glass of water and remain upright for at least 30 minutes to avoid esophageal irritation/ulceration',
      'Avoid concurrent use with isotretinoin due to significantly increased risk of pseudotumor cerebri',
      'Separate dosing from dairy products, antacids, and iron/calcium/magnesium supplements, which chelate tetracyclines and reduce absorption',
    ],
    drugInteractions: [
      'Isotretinoin — markedly increased risk of benign intracranial hypertension/pseudotumor cerebri when combined; generally avoided together',
      'Antacids, calcium, iron, magnesium, dairy products — chelate doxycycline and reduce oral absorption; separate dosing by several hours',
      'Warfarin — may potentiate anticoagulant effect',
      'Oral contraceptives — theoretical reduced efficacy (evidence limited but classically taught)',
    ],
    patientCounseling: [
      'Use sun protection (sunscreen, protective clothing) due to photosensitivity risk',
      'Take with a full glass of water and remain upright afterward to prevent esophageal irritation',
      'Report headache, transient visual blurring/graying, or double vision, which could indicate pseudotumor cerebri, especially if also taking isotretinoin',
      'Low-dose regimens for eyelid/tear film disease are used for their anti-inflammatory, not antibiotic, effect — full course completion and consistency matter for MGD/rosacea benefit',
    ],
    pregnancyLactation:
      'Contraindicated in pregnancy — crosses the placenta and can cause permanent tooth discoloration and inhibit bone growth in the fetus. Excreted in breast milk with theoretical risk of tooth staining in the infant; generally avoided during breastfeeding, particularly with prolonged courses.',
    pediatricConsiderations: [
      'Revised 2020 AAP/CDC guidance confirms that short courses (≤21 days, e.g., for Rocky Mountain spotted fever or other tick-borne illness) do NOT cause visible tooth staining or enamel hypoplasia in children of any age, reversing older blanket avoidance recommendations for children under 8 — this reflects doxycycline binding calcium less readily than older tetracyclines.',
      'This revised safety data applies to short antimicrobial courses, not the longer-term low-dose regimens used for MGD/rosacea; prolonged or repeated courses in children under 8 still carry tooth-staining/enamel-hypoplasia risk, so chronic low-dose anti-inflammatory use is generally avoided in this age group.',
    ],
    relatedConditionIds: ['blepharitis', 'ocular-rosacea', 'recurrent-corneal-erosion'],
    monitoring: [
      'Fundus examination/optic nerve evaluation and symptom screening for papilledema if intracranial hypertension is suspected (especially with concurrent isotretinoin use)',
      'Clinical response of meibomian gland dysfunction/blepharitis/ocular rosacea to low-dose therapy',
      'Skin for photosensitivity reactions',
    ],
    clinicalPearls: [
      'One of the most important optometry-relevant systemic drugs — low-dose oral doxycycline is a mainstay adjunctive treatment for chronic MGD, blepharitis, and ocular rosacea, working through anti-MMP/anti-inflammatory rather than antibacterial mechanisms',
      'The doxycycline-isotretinoin combination causing pseudotumor cerebri is a classic, specifically tested drug interaction, particularly relevant because both drugs are commonly prescribed together for acne',
      'Tooth discoloration in children is a hallmark tetracycline-class fact frequently paired on exams with the ocular MGD/rosacea use',
    ],
    highYield: [
      'Low-dose oral doxycycline is used off-label for meibomian gland dysfunction, blepharitis, and ocular rosacea via anti-inflammatory/anti-MMP-9 action, NOT primarily its antibacterial effect — a top optometry-specific fact',
      'Risk of benign intracranial hypertension (pseudotumor cerebri), markedly increased when combined with isotretinoin — classic drug interaction with papilledema/visual field/transient vision loss implications',
      'Causes photosensitivity — counsel on sun protection',
      'Contraindicated in pregnancy and children under 8 due to permanent tooth discoloration/enamel hypoplasia and impaired bone growth',
    ],
    references: [
      { label: 'Low-dose doxycycline for meibomian gland dysfunction and ocular rosacea', source: 'American Academy of Ophthalmology, Dry Eye/Blepharitis Preferred Practice Pattern' },
      { label: 'Tetracycline pharmacology and pseudotumor cerebri risk', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'ethambutol',
    genericName: 'Ethambutol',
    brandNames: ['Myambutol'],
    drugClass: 'Anti-infective (systemic)',
    mechanismOfAction:
      'Bacteriostatic antitubercular agent that inhibits arabinosyl transferase, an enzyme involved in cell wall arabinogalactan synthesis in Mycobacterium tuberculosis, disrupting mycobacterial cell wall formation. Ocular toxicity is thought to relate to chelation of metal ions (e.g., copper, zinc) essential to mitochondrial function within retinal ganglion cells and the optic nerve, leading to axonal damage, particularly affecting the papillomacular bundle.',
    indications: ['Active pulmonary and extrapulmonary tuberculosis, as part of standard combination (typically four-drug: RIPE) antitubercular therapy'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring'],
    typicalDosing: 'Oral, 15-25 mg/kg once daily (dose and duration depend on regimen phase and renal function)',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Ethambutol optic neuropathy (toxic optic neuropathy) — THE classic, most important and most frequently boards-tested ocular toxicity in this entire drug category',
        'Dose-dependent and duration-dependent risk — higher incidence at doses above 25 mg/kg/day and with treatment courses exceeding 2 months',
        'Red-green color vision deficiency is typically the EARLIEST detectable sign, often preceding any change in visual acuity — tested with standardized color vision testing (e.g., Ishihara, Farnsworth D-15)',
        'Progressive decrease in visual acuity',
        'Central or cecocentral scotomas on visual field testing (reflecting damage to the papillomacular bundle)',
        'Bilateral, usually symmetric presentation',
        'Usually REVERSIBLE if the drug is identified as the cause and discontinued early, though recovery may be incomplete/delayed and toxicity can rarely be irreversible if detection is delayed',
      ],
      systemic: [
        'Peripheral neuropathy',
        'Hyperuricemia (can precipitate gout)',
        'GI upset',
        'Hepatotoxicity (less common than with isoniazid/rifampin)',
        'Rash, hypersensitivity reactions',
      ],
    },
    contraindications: [
      'Known optic neuritis of any etiology (relative contraindication given risk of compounding optic nerve damage)',
      'Inability to appreciate/report visual changes (e.g., very young children who cannot reliably perform visual acuity/color vision testing) — requires special caution and closer alternative monitoring',
      'Known hypersensitivity to ethambutol',
    ],
    precautions: [
      'Dose reduction required in renal impairment (ethambutol is renally excreted and toxicity risk increases with reduced clearance)',
      'Use with caution in patients unable to reliably report visual symptoms',
      'Baseline ophthalmologic/optometric evaluation strongly recommended before initiating therapy, especially for planned courses beyond 2 months or at higher doses',
    ],
    drugInteractions: [
      'Aluminum-containing antacids — may reduce ethambutol absorption; separate dosing',
      'Additive risk of optic neuropathy when combined with other optic nerve toxins (theoretical, generally avoided when possible)',
    ],
    patientCounseling: [
      'Report any change in color vision (colors appearing washed out or difficulty distinguishing red from green) immediately, as this is often the earliest warning sign of toxicity',
      'Report any blurring or dimming of vision',
      'Do not skip scheduled visual monitoring visits during treatment, as early detection allows for reversal of toxicity if the drug is stopped promptly',
    ],
    pregnancyLactation:
      'Generally considered compatible with pregnancy when used as part of standard first-line TB therapy, as untreated maternal TB poses greater fetal/maternal risk; used with standard regimens. Excreted in breast milk in small amounts; generally considered compatible with breastfeeding.',
    pediatricConsiderations: [
      'Historically avoided in young children due to inability to reliably perform visual acuity and color vision testing, but revised WHO pediatric TB dosing (15-25 mg/kg/day rather than older lower doses) has been shown to have an excellent safety profile without an increased risk of optic toxicity.',
      'In children too young for reliable color vision/visual field testing, alternative monitoring strategies (caregiver observation, deferring ethambutol when a resistant-organism regimen is not required) should be discussed with the treating physician.',
    ],
    relatedConditionIds: ['optic-neuritis', 'toxic-nutritional-optic-neuropathy', 'ocular-tuberculosis'],
    monitoring: [
      'BASELINE visual acuity, color vision testing, and visual field/Amsler grid before starting therapy',
      'MONTHLY visual acuity and color vision testing during treatment, especially for doses above 15 mg/kg/day or courses longer than 2 months, per most TB treatment guidelines',
      'Visual field testing if color vision or acuity changes are detected, or periodically in higher-risk patients',
      'Renal function (dose adjustment required)',
    ],
    clinicalPearls: [
      'Ethambutol optic neuropathy is arguably THE single most classic drug-induced optic neuropathy tested on the NBEO — expect direct questions on mechanism, earliest sign, monitoring interval, and reversibility',
      'Red-green color vision loss preceding visual acuity loss is the textbook teaching point — a patient on ethambutol with normal acuity but abnormal color vision testing should raise immediate concern',
      'Toxicity is generally reversible if caught early and the drug is discontinued, but can become permanent with continued exposure after symptom onset — this reinforces why regular monitoring is mandatory, not optional',
      'Optometrists often serve as part of the monitoring team for TB patients on ethambutol, performing serial visual acuity, color vision, and visual field testing throughout the treatment course',
    ],
    highYield: [
      'Ethambutol causes a dose-dependent, USUALLY REVERSIBLE optic neuropathy — the single highest-yield ocular drug toxicity fact in the antitubercular category',
      'Red-green color vision deficiency is classically the EARLIEST sign of toxicity, often preceding measurable visual acuity loss',
      'Progresses to decreased visual acuity and central/cecocentral scotomas on visual field testing if unrecognized',
      'Requires baseline AND periodic (commonly monthly) visual acuity, color vision, and visual field monitoring throughout treatment — an essential, frequently tested clinical protocol',
      'Risk increases with higher doses (>25 mg/kg/day), longer duration (>2 months), and renal impairment (reduced drug clearance)',
    ],
    references: [
      { label: 'Ethambutol optic neuropathy and visual monitoring protocols', source: 'American Academy of Ophthalmology, Neuro-Ophthalmology Preferred Practice Pattern' },
      { label: 'Toxic and nutritional optic neuropathies', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'rifampin',
    genericName: 'Rifampin',
    brandNames: ['Rifadin'],
    drugClass: 'Anti-infective (systemic)',
    mechanismOfAction:
      'Inhibits bacterial DNA-dependent RNA polymerase, blocking RNA synthesis in Mycobacterium tuberculosis and other susceptible organisms. A potent inducer of hepatic cytochrome P450 enzymes, giving rise to numerous clinically significant drug interactions.',
    indications: [
      'Active tuberculosis, as part of standard combination antitubercular therapy',
      'Leprosy (Hansen disease)',
      'Prophylaxis for close contacts of patients with meningococcal or Haemophilus influenzae type b meningitis',
      'Select other mycobacterial and bacterial infections (e.g., adjunctive treatment of staphylococcal prosthetic device infections)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for its distinctive, benign ocular/tear staining effect'],
    typicalDosing: 'Oral, 600 mg once daily (or 10 mg/kg/day) as part of combination TB therapy; dosing varies for other indications',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Capsule', 'Injection (intravenous)', 'Oral suspension'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Orange-red discoloration of tears — a highly classic, distinctive, and frequently tested finding',
        'Can PERMANENTLY STAIN soft contact lenses orange-red — patients on rifampin should avoid wearing soft contact lenses during treatment or be counseled that lenses may become irreversibly discolored',
        'Rare exudative conjunctivitis',
        'Rare reports of optic neuritis/toxic optic neuropathy (uncommon, low-yield compared to ethambutol)',
      ],
      systemic: [
        'Orange-red discoloration of other bodily secretions, including urine, sweat, and saliva (as well as tears) — classic, harmless, but important to counsel patients about in advance to avoid alarm',
        'Hepatotoxicity',
        'GI upset',
        'Flu-like syndrome (with intermittent dosing regimens)',
        'Potent CYP450 induction leading to numerous drug interactions (reduced efficacy of many co-administered drugs)',
        'Thrombocytopenia (rare)',
      ],
    },
    contraindications: ['Known hypersensitivity to rifampin or other rifamycins', 'Concurrent use with certain protease inhibitors (due to CYP induction reducing their efficacy)'],
    precautions: [
      'Counsel patients in advance about orange-red discoloration of secretions to prevent unnecessary alarm',
      'Avoid soft contact lens wear during treatment given risk of permanent lens staining',
      'Monitor liver function, particularly in patients with pre-existing hepatic disease or on other hepatotoxic drugs',
    ],
    drugInteractions: [
      'Oral contraceptives — potent CYP450 induction reduces hormonal contraceptive efficacy, risking unintended pregnancy; alternative contraception recommended',
      'Warfarin — reduced anticoagulant effect via increased metabolism',
      'Protease inhibitors and many antiretrovirals — significantly reduced levels/efficacy due to CYP induction',
      'Numerous other CYP3A4-metabolized medications (e.g., corticosteroids, cyclosporine, many statins) — reduced efficacy',
    ],
    patientCounseling: [
      'Expect orange-red discoloration of tears, urine, sweat, and saliva — this is harmless and expected, not a sign of a problem',
      'Avoid wearing soft contact lenses during treatment, as they may become permanently stained; switch to glasses or discuss alternatives with your eye doctor',
      'Inform all prescribers you are taking rifampin due to its extensive drug interaction profile, particularly if using hormonal contraception',
    ],
    pregnancyLactation:
      'Generally considered compatible with pregnancy as part of standard first-line TB therapy; used when treating active maternal TB given the greater risk of untreated disease. Small amounts excreted in breast milk; generally considered compatible with breastfeeding.',
    pediatricConsiderations: [
      'Standard component of pediatric TB combination therapy, dosed approximately 10-15 mg/kg/day; also used for meningococcal/Haemophilus influenzae type b prophylaxis in pediatric close contacts.',
      'Orange-red discoloration of tears/secretions and soft contact lens staining apply identically in pediatric contact-lens wearers.',
    ],
    relatedConditionIds: ['ocular-tuberculosis'],
    monitoring: [
      'Counsel regarding contact lens wear and secretion discoloration at initiation of therapy (proactive counseling rather than reactive monitoring)',
      'Liver function tests periodically during treatment',
      'Visual symptoms only if optic neuropathy is clinically suspected (low routine yield compared to ethambutol)',
    ],
    clinicalPearls: [
      'The orange-red tear/secretion discoloration and permanent soft contact lens staining are among the most recognizable, "gimme" testable facts in all of ocular pharmacology — an easy, high-confidence board point',
      'Because rifampin is virtually always given in combination with ethambutol and isoniazid for TB, boards questions may test the ability to distinguish which drug in the regimen is responsible for which finding (rifampin = orange secretions/contact lens staining; ethambutol = optic neuropathy/color vision loss; isoniazid = peripheral or optic neuritis)',
      'Rifampin is one of the most potent CYP450 inducers in clinical use, a fact tested broadly across pharmacology, not just ophthalmology',
    ],
    highYield: [
      'Rifampin causes orange-red discoloration of tears, urine, sweat, and saliva — a classic, distinctive, highly testable fact',
      'Can PERMANENTLY stain soft contact lenses — counsel patients to avoid soft lens wear during treatment',
      'Rare exudative conjunctivitis has been reported',
      'Part of standard combination TB therapy alongside ethambutol and isoniazid — boards often test distinguishing which drug in the regimen causes which specific finding',
    ],
    references: [
      { label: 'Rifampin ocular and secretion discoloration effects', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Antitubercular drug regimens and adverse effects', source: 'Goodman & Gilman: The Pharmacological Basis of Therapeutics' },
    ],
  },
  {
    id: 'isoniazid',
    genericName: 'Isoniazid',
    brandNames: ['Nydrazid'],
    drugClass: 'Anti-infective (systemic)',
    mechanismOfAction:
      'Prodrug activated by mycobacterial catalase-peroxidase (KatG), which inhibits synthesis of mycolic acids essential to the Mycobacterium tuberculosis cell wall, resulting in a bactericidal effect against actively dividing organisms. Neurotoxicity (peripheral and optic neuropathy) is thought to result from isoniazid-induced pyridoxine (vitamin B6) deficiency/antagonism, impairing neuronal metabolism.',
    indications: ['Active tuberculosis, as part of standard combination therapy', 'Latent TB infection prophylaxis (monotherapy)'],
    ocularUses: ['None — systemic medication; relevant to optometry for ocular toxicity monitoring, particularly in combination TB regimens'],
    typicalDosing: 'Oral, 5 mg/kg/day (typically 300 mg/day) for active disease, often combined with pyridoxine (vitamin B6) supplementation to reduce neurotoxicity risk',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Oral solution', 'Injection (intramuscular)'],
    route: 'Oral',
    sideEffects: {
      ocular: [
        'Optic neuritis/toxic optic neuropathy — less common than with ethambutol but a real and boards-relevant risk, particularly important because isoniazid is frequently combined with ethambutol, requiring the same heightened visual monitoring vigilance for the combination regimen',
        'Can present with decreased visual acuity and color vision disturbance similar in character to (though generally less frequent than) ethambutol toxicity',
      ],
      systemic: [
        'Peripheral neuropathy (dose-related, due to pyridoxine/vitamin B6 antagonism) — the most classic and common isoniazid toxicity, often prevented with prophylactic pyridoxine supplementation',
        'Hepatotoxicity (can be severe; risk increases with age and alcohol use)',
        'Drug-induced lupus-like syndrome',
        'CNS effects: seizures (especially in overdose), psychosis (rare)',
        'Vitamin B6 deficiency-related anemia',
      ],
    },
    contraindications: [
      'Acute liver disease or history of isoniazid-induced hepatic injury',
      'Known hypersensitivity to isoniazid',
    ],
    precautions: [
      'Pyridoxine (vitamin B6) supplementation is routinely co-administered to reduce risk of peripheral and optic neuropathy, particularly in patients with diabetes, alcohol use, malnutrition, HIV, pregnancy, or renal failure',
      'Monitor liver function, especially in older patients or those with other hepatotoxic risk factors',
      'Use caution/increased visual monitoring when combined with ethambutol, given overlapping optic nerve toxicity risk',
    ],
    drugInteractions: [
      'Ethambutol — combined regimen requires heightened visual monitoring vigilance due to overlapping optic neuropathy risk between the two drugs',
      'Phenytoin — isoniazid inhibits its metabolism, increasing phenytoin levels/toxicity risk',
      'Alcohol — increased hepatotoxicity risk',
      'Rifampin — increased hepatotoxicity risk when combined (as in standard TB regimens), requiring liver function monitoring',
    ],
    patientCounseling: [
      'Report any tingling, numbness, or burning in the hands or feet (peripheral neuropathy) or any new visual changes',
      'Take prescribed pyridoxine (vitamin B6) supplementation as directed to reduce neuropathy risk',
      'Avoid alcohol during treatment due to increased liver toxicity risk',
      'Report yellowing of the skin/eyes, dark urine, or unusual fatigue, which could indicate liver injury',
    ],
    pregnancyLactation:
      'Generally considered compatible with pregnancy as part of standard TB therapy; pyridoxine supplementation is recommended during pregnancy and breastfeeding to reduce maternal and infant neuropathy risk. Excreted in breast milk in small amounts; generally considered compatible with breastfeeding with pyridoxine supplementation.',
    pediatricConsiderations: [
      'Standard part of pediatric TB combination therapy and used as monotherapy for pediatric latent TB infection; dosed approximately 10-15 mg/kg/day for latent TB (higher than the typical adult 5 mg/kg/day) given more rapid pediatric drug clearance.',
      'Pyridoxine (B6) co-supplementation is particularly important in breastfed infants, malnourished children, and adolescents, given the same peripheral/optic neuropathy risk mechanism as in adults.',
    ],
    relatedConditionIds: ['ocular-tuberculosis', 'optic-neuritis'],
    monitoring: [
      'Visual acuity and color vision monitoring, particularly important and often performed concurrently when isoniazid is combined with ethambutol in a standard TB regimen',
      'Liver function tests periodically during treatment',
      'Screening for peripheral neuropathy symptoms',
    ],
    clinicalPearls: [
      'Isoniazid and ethambutol are frequently used together in standard first-line TB regimens, and both carry optic nerve toxicity risk — a classic "which drug(s) in this TB regimen affect vision" boards question may include both as correct answers, with ethambutol being the more prominent/classic one',
      'Pyridoxine (B6) co-administration is a well-known standard-of-care practice specifically to prevent isoniazid-induced peripheral and optic neuropathy',
      'Isoniazid hepatotoxicity risk increases with age, making it an important consideration in older patients undergoing TB treatment',
    ],
    highYield: [
      'Isoniazid can cause optic neuritis/toxic optic neuropathy, though less frequently than ethambutol — an important overlapping fact for standard TB combination regimens',
      'When isoniazid is combined with ethambutol (as in standard TB therapy), the same visual monitoring vigilance (acuity, color vision, visual fields) applies to the regimen as a whole',
      'Peripheral neuropathy (non-ocular) is the most classic isoniazid toxicity, related to pyridoxine (vitamin B6) antagonism, and prophylactic B6 is routinely co-prescribed',
      'Hepatotoxicity is a major systemic risk, particularly in older patients',
    ],
    references: [
      { label: 'Isoniazid neurotoxicity and pyridoxine prophylaxis', source: 'Goodman & Gilman: The Pharmacological Basis of Therapeutics' },
      { label: 'Optic neuropathy in antitubercular combination therapy', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
    ],
  },
  {
    id: 'metronidazole',
    genericName: 'Metronidazole',
    brandNames: ['Flagyl'],
    drugClass: 'Anti-infective (systemic)',
    mechanismOfAction:
      'Nitroimidazole antibiotic/antiprotozoal that is reduced intracellularly by susceptible anaerobic bacteria and protozoa to reactive intermediates that damage microbial DNA, causing strand breakage and cell death. Effective against anaerobic bacteria and certain protozoa (Trichomonas, Giardia, Entamoeba). The mechanism of rare neurotoxicity (peripheral and optic neuropathy) is not fully established but may relate to axonal damage from reactive metabolites and thiamine-related metabolic interference with prolonged, high cumulative dosing.',
    indications: [
      'Anaerobic bacterial infections (intra-abdominal, gynecologic, skin/soft tissue)',
      'Clostridioides difficile colitis',
      'Trichomoniasis, giardiasis, amebiasis',
      'Bacterial vaginosis',
      'Helicobacter pylori eradication (combination therapy)',
    ],
    ocularUses: ['None — systemic medication; relevant to optometry for rare optic neuropathy/visual toxicity with prolonged high-dose use'],
    typicalDosing: 'Oral or IV, typically 500 mg two to three times daily; duration and total dose depend on indication',
    concentrations: ['N/A — oral/systemic'],
    formulations: ['Tablet', 'Capsule', 'Oral suspension', 'Injection (intravenous)', 'Topical gel/cream'],
    route: 'Oral or intravenous',
    sideEffects: {
      ocular: [
        'Rare optic neuropathy with prolonged, high cumulative-dose use — presents with decreased visual acuity, color vision disturbance, and central/cecocentral scotomas, generally reversible with prompt discontinuation, though this is a much lower-frequency, lower-yield toxicity compared to ethambutol',
        'Transient visual disturbances (blurred vision, diplopia) have been reported, generally uncommon',
      ],
      systemic: [
        'Peripheral neuropathy — more commonly reported than the ocular/optic form, particularly with prolonged or high cumulative dosing; presents as numbness/tingling of the extremities and can be dose-limiting',
        'Metallic taste (very common, characteristic)',
        'GI upset (nausea, vomiting)',
        'Disulfiram-like reaction with alcohol (flushing, nausea, tachycardia) — must avoid alcohol during and for at least 24-72 hours after treatment',
        'CNS effects: seizures (rare, especially at high doses), encephalopathy (rare), dizziness, headache',
        'Dark/reddish-brown urine discoloration (harmless)',
      ],
    },
    contraindications: [
      'First trimester of pregnancy (relative contraindication per some guidelines, though data are reassuring for later use)',
      'Known hypersensitivity to nitroimidazole derivatives',
      'Concurrent alcohol use (disulfiram-like reaction)',
    ],
    precautions: [
      'Avoid alcohol during treatment and for several days after completion due to disulfiram-like reaction',
      'Use caution with prolonged or repeated courses given cumulative-dose-related neuropathy risk (both peripheral and, rarely, optic)',
      'Dose adjustment in severe hepatic impairment',
    ],
    drugInteractions: [
      'Alcohol — disulfiram-like reaction (flushing, nausea, vomiting, tachycardia); must be avoided',
      'Warfarin — potentiates anticoagulant effect via inhibited metabolism, increasing bleeding risk',
      'Lithium — increased lithium levels/toxicity risk',
      'Disulfiram — concurrent use can precipitate acute psychosis/confusional states; avoid combination',
    ],
    patientCounseling: [
      'Avoid alcohol during treatment and for at least 1-3 days after finishing the medication to prevent a severe reaction',
      'Expect a metallic taste, which is common and harmless',
      'Report any numbness, tingling, or visual changes, particularly with prolonged or repeated treatment courses',
      'Urine may appear dark or reddish-brown — this is harmless',
    ],
    pregnancyLactation:
      'Generally avoided in the first trimester when possible; considered acceptable later in pregnancy when clearly indicated, as most data have not shown teratogenicity. Excreted in breast milk; brief interruption of breastfeeding is sometimes recommended with high single-dose regimens, though standard dosing is generally considered compatible.',
    pediatricConsiderations: [
      'Widely used in children for giardiasis (typically 15 mg/kg/day divided every 8 hours for 5-7 days), amebiasis, and anaerobic infections; considered generally safe in pediatric patients with a similar adverse-effect profile to adults.',
      'Neonates and infants clear metronidazole more slowly than older children due to immature hepatic metabolism, so dosing intervals are adjusted by postnatal/postmenstrual age in this population.',
    ],
    monitoring: [
      'Visual acuity and color vision if optic neuropathy is clinically suspected, particularly with prolonged or repeated high-dose courses',
      'Neurologic examination for peripheral neuropathy symptoms with extended therapy',
      'Discontinue promptly and evaluate if new visual or neurologic symptoms develop during treatment',
    ],
    clinicalPearls: [
      'Metronidazole optic and peripheral neuropathy are dose- and duration-dependent, occurring mainly with prolonged or repeated high-cumulative-dose regimens (e.g., extended treatment for refractory anaerobic infections), not typical short courses',
      'The disulfiram-like alcohol interaction is one of the most classic and frequently tested facts about metronidazole across all of pharmacology, not just ophthalmology',
      'Peripheral neuropathy is more commonly encountered clinically than the rarer optic neuropathy, making metronidazole a comparatively lower-yield ocular toxicity entry relative to ethambutol or isoniazid',
    ],
    highYield: [
      'Rare optic neuropathy and visual disturbances can occur with prolonged, high cumulative-dose metronidazole use — generally reversible with discontinuation',
      'Peripheral neuropathy (systemic, not ocular) is the more common neurotoxicity of metronidazole compared to the rarer optic form',
      'Classic disulfiram-like reaction with alcohol — a heavily tested interaction fact',
      'Lower-yield ocular toxicity drug compared to ethambutol, useful mainly as a distractor/contrast entry on exams',
    ],
    references: [
      { label: 'Metronidazole neurotoxicity and optic neuropathy', source: 'Bartlett & Jaanus: Clinical Ocular Pharmacology' },
      { label: 'Metronidazole pharmacology and adverse effects', source: 'Goodman & Gilman: The Pharmacological Basis of Therapeutics' },
    ],
  },
]
