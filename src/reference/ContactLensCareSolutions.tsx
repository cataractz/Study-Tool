import { Link } from 'react-router-dom'
import { AlertTriangle, GraduationCap, Info } from 'lucide-react'
import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import { Card } from '../components/ui/Card'
import { Linkify } from '../components/shared/Linkify'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'contact-lens-care-solutions',
  name: 'Contact Lens Care Solutions',
  category: 'Contact Lenses',
  description:
    'Solution types, preservatives, disinfection standards, compatibility rules, and the classic solution-associated outbreaks — everything about lens care systems tested on boards.',
  keywords: [
    'contact lens solution',
    'multipurpose solution',
    'MPS',
    'hydrogen peroxide',
    'Clear Care',
    'AOSept',
    'saline',
    'enzymatic cleaner',
    'papain',
    'subtilisin',
    'PHMB',
    'polyquad',
    'polyquaternium-1',
    'benzalkonium chloride',
    'BAK',
    'rub and rinse',
    'no rub',
    'ISO 14729',
    'stand-alone test',
    'disinfection efficacy',
    'solution-induced corneal staining',
    'SICS',
    'ReNu MoistureLoc',
    'Complete MoisturePlus',
    'Fusarium keratitis',
    'Acanthamoeba keratitis',
    'compliance',
    'case hygiene',
    'HydraGlyde',
    'TearGlyde',
    'hyaluronan',
    'poloxamine',
    'comfort agent',
    'wetting agent',
    'rewetting drops',
    'lubricating drops',
    'discard after opening',
    '90 days',
    'CLARE',
    'contact lens acute red eye',
    'CLPU',
    'contact lens peripheral ulcer',
    'infiltrative keratitis',
    'corneal infiltrative event',
    '510(k)',
    'Class II medical device',
  ],
}

interface SolutionType {
  type: string
  function: string
  disinfects: string
  examples: string
  keyPoint: string
}

const SOLUTION_TYPES: SolutionType[] = [
  {
    type: 'Multipurpose solution (MPS)',
    function: 'One product for cleaning, rinsing, disinfecting, and storage',
    disinfects: 'Yes',
    examples: 'Opti-Free Puremoist/Replenish, ReNu Fresh, Biotrue, Aquify',
    keyPoint:
      'Disinfection only works if the patient actually observes the labeled minimum soak time (commonly 4–6 hours) — a quick dip-and-wear defeats it.',
  },
  {
    type: 'Hydrogen peroxide system',
    function: 'Oxidative disinfection, no ongoing chemical preservative left on the lens once neutralized',
    disinfects: 'Yes — broadest spectrum of the non-heat options, including some activity against Acanthamoeba cysts',
    examples: 'Clear Care, AOSept Plus (both 3% H2O2, one-step with a platinum catalytic disc)',
    keyPoint:
      'Must be fully neutralized (~6 hours via the catalytic disc) before the lens goes back on the eye — unneutralized peroxide causes severe pain and toxic/chemical keratitis. Never rinse a lens with active peroxide, and never transfer a peroxide-soaked lens into a plain case.',
  },
  {
    type: 'Saline solution',
    function: 'Rinsing after cleaning, diluent for enzymatic tablets, or a heat-disinfection carrier',
    disinfects: 'No',
    examples: 'Preserved multi-dose saline; preservative-free unit-dose saline for sensitive patients',
    keyPoint: 'Not a disinfectant by itself — a classic wrong-answer distractor. Never sold or used as a stand-alone care system.',
  },
  {
    type: 'Daily surfactant cleaner',
    function: 'Mechanical (rub) removal of lipid and debris as a separate step before disinfecting',
    disinfects: 'No',
    examples: 'Miraflow, Opti-Clean',
    keyPoint: 'More concentrated cleaning action than the built-in cleaner in an MPS; less commonly prescribed now that MPS products combine cleaning and disinfection.',
  },
  {
    type: 'Enzymatic cleaner',
    function: 'Digests protein deposits off the lens surface, typically used weekly',
    disinfects: 'No',
    examples: 'Tablets dissolved in saline or MPS (papain, subtilisin, or pancreatin as the active enzyme)',
    keyPoint: 'An adjunct, not a replacement for daily disinfection — most useful for reusable lens materials with heavier protein deposition.',
  },
  {
    type: 'RGP conditioning/soaking solution',
    function: 'Wets and stores rigid gas-permeable lenses; many also disinfect',
    disinfects: 'Varies by product',
    examples: 'Boston Advance/Simplus, Menicon Unique pH',
    keyPoint: 'Formulated with different preservative chemistry (often chlorhexidine or higher-concentration BAK) suited to rigid materials — never use an RGP solution on a soft lens.',
  },
]

interface Preservative {
  agent: string
  classAndSpectrum: string
  usedIn: string
  note: string
}

const PRESERVATIVES: Preservative[] = [
  {
    agent: 'PHMB (polyhexamethylene biguanide, e.g. Dymed)',
    classAndSpectrum: 'Biguanide — broad bacterial coverage, minimal against fungi and Acanthamoeba',
    usedIn: 'ReNu Fresh, Complete, Aquify, Biotrue (paired with polyquaternium-1)',
    note: 'One of the two dominant modern MPS preservative chemistries.',
  },
  {
    agent: 'Polyquaternium-1 (polyquad)',
    classAndSpectrum: 'Quaternary ammonium polymer — broad bacterial coverage, minimal against fungi and Acanthamoeba',
    usedIn: 'Opti-Free Puremoist/Replenish/Express, Biotrue (paired with PHMB)',
    note: 'The other dominant modern MPS preservative chemistry; sometimes paired with myristamidopropyl dimethylamine (Aldox) in Opti-Free formulations.',
  },
  {
    agent: 'Hydrogen peroxide 3%',
    classAndSpectrum: 'Oxidative — broadest antimicrobial spectrum of these options when given the full contact time',
    usedIn: 'Clear Care, AOSept Plus',
    note: 'Self-neutralizes to water and oxygen, so nothing preservative-like remains on the lens — often the best-tolerated option for preservative-sensitive patients.',
  },
  {
    agent: 'Chlorhexidine / higher-concentration BAK',
    classAndSpectrum: 'Biguanide / quaternary ammonium — used in RGP-specific formulations',
    usedIn: 'RGP conditioning and soaking solutions',
    note: 'Rigid materials do not absorb and re-release preservative the way hydrogel does, so these concentrations are tolerated on RGPs but not on soft lenses.',
  },
]

interface ProductEntry {
  product: string
  manufacturer: string
  disinfectant: string
  comfortAgent: string
  note: string
}

const COMMON_PRODUCTS: ProductEntry[] = [
  {
    product: 'Opti-Free PureMoist',
    manufacturer: 'Alcon',
    disinfectant: 'Polyquad 0.001% + Aldox 0.0006% (dual)',
    comfortAgent: 'HydraGlyde',
    note: 'Alcon\'s current flagship MPS; HydraGlyde is a block copolymer wetting agent shared with several other Alcon products below.',
  },
  {
    product: 'Opti-Free Replenish',
    manufacturer: 'Alcon',
    disinfectant: 'Polyquad + Aldox (dual)',
    comfortAgent: 'TearGlyde',
    note: 'Same dual-preservative system as PureMoist, older comfort-agent technology.',
  },
  {
    product: 'ReNu Fresh / ReNu MultiPlus',
    manufacturer: 'Bausch + Lomb',
    disinfectant: 'PHMB (Dymed)',
    comfortAgent: '—',
    note: 'Not the same formulation as the discontinued ReNu with MoistureLoc (see the recall case below) — current ReNu products were not implicated in that outbreak.',
  },
  {
    product: 'Biotrue',
    manufacturer: 'Bausch + Lomb',
    disinfectant: 'PHMB + polyquaternium-1 (dual)',
    comfortAgent: 'Hyaluronan (hyaluronic acid)',
    note: 'Marketed as biomimetic — isotonic and buffered to a pH of about 7.4–7.6 to match human tears.',
  },
  {
    product: 'Clear Care Plus with HydraGlyde / AOSept Plus with HydraGlyde',
    manufacturer: 'Alcon',
    disinfectant: 'Hydrogen peroxide 3% (self-neutralizing)',
    comfortAgent: 'HydraGlyde',
    note: 'The peroxide handles disinfection; HydraGlyde is added after neutralization purely for lens comfort, not as a preservative.',
  },
  {
    product: 'Boston Simplus / Boston Advance',
    manufacturer: 'Bausch + Lomb',
    disinfectant: 'PHMB + chlorhexidine gluconate (dual)',
    comfortAgent: 'Poloxamine 1107',
    note: 'RGP-specific conditioning solution — different preservative concentrations than any soft-lens product above; never use on soft lenses.',
  },
]

interface InfiltrativeEvent {
  condition: string
  diseaseId?: string
  epithelialDefect: string
  pain: string
  associatedWith: string
  management: string
}

const INFILTRATIVE_EVENTS: InfiltrativeEvent[] = [
  {
    condition: 'CLARE (contact lens-induced acute red eye)',
    diseaseId: 'clare-contact-lens-acute-red-eye',
    epithelialDefect: 'Absent — infiltrates without an overlying stain',
    pain: 'Mild to moderate; sudden-onset redness, tearing, photophobia',
    associatedWith: 'Extended/overnight wear, a tight-fitting lens, and gram-negative bacterial endotoxin (often Pseudomonas) trapped against the cornea rather than active infection',
    management: 'Discontinue lens wear; typically self-limited and resolves without antibiotics once the lens and the endotoxin trigger are removed',
  },
  {
    condition: 'CLPU (contact lens-induced peripheral ulcer)',
    diseaseId: 'contact-lens-induced-peripheral-ulcer',
    epithelialDefect: 'Small, if present — a single, well-circumscribed peripheral lesion',
    pain: 'Mild to moderate, localized',
    associatedWith: 'An inflammatory reaction to exotoxins from gram-positive bacteria (classically Staphylococcus) colonizing the lens or lid margin, rather than direct corneal infection',
    management: 'Discontinue lens wear and monitor closely; most resolve without antibiotics, but must be watched for progression since it can be difficult to distinguish from early microbial keratitis',
  },
  {
    condition: 'Infiltrative keratitis (IK)',
    diseaseId: 'infiltrative-keratitis-contact-lens',
    epithelialDefect: 'Absent or minimal',
    pain: 'Mild, often asymptomatic or found incidentally',
    associatedWith: 'A milder, more diffuse inflammatory reaction to lens-related antigens/debris — the least severe of this group',
    management: 'Discontinue lens wear; observe — the mildest of the four and typically resolves quickly',
  },
  {
    condition: 'Microbial keratitis (MK)',
    diseaseId: 'bacterial-keratitis',
    epithelialDefect: 'Present — a significant epithelial defect that stains with fluorescein, overlying a dense infiltrate',
    pain: 'Moderate to severe, progressive, with mucopurulent discharge',
    associatedWith: 'True corneal infection — most often Pseudomonas aeruginosa in lens wearers; a true ocular emergency',
    management: 'Urgent culture and aggressive topical antibiotic therapy (e.g. fortified or fluoroquinolone) — this is the one member of the group that cannot simply be observed',
  },
]

const DISINFECTION_ORGANISMS: [string, string, string][] = [
  ['Pseudomonas aeruginosa', 'Bacteria', 'Primary criterion: ≥ 3-log (99.9%) reduction'],
  ['Staphylococcus aureus', 'Bacteria', 'Primary criterion: ≥ 3-log (99.9%) reduction'],
  ['Serratia marcescens', 'Bacteria', 'Primary criterion: ≥ 3-log (99.9%) reduction'],
  ['Candida albicans', 'Fungus', 'Primary criterion: ≥ 1-log (90%) reduction'],
  ['Fusarium solani', 'Fungus', 'Primary criterion: ≥ 1-log (90%) reduction'],
]

interface Complication {
  finding: string
  associatedWith: string
  distinguishingPoint: string
}

const COMPLICATIONS: Complication[] = [
  {
    finding: 'Solution-induced corneal staining (SICS)',
    associatedWith: 'Certain MPS chemistries combined with certain silicone-hydrogel materials',
    distinguishingPoint:
      'Diffuse, superficial punctate staining that appears hours after lens insertion (often peaks around 2–6 hours) rather than immediately — usually asymptomatic and resolves with a solution or lens material switch.',
  },
  {
    finding: 'Preservative hypersensitivity / toxic keratoconjunctivitis',
    associatedWith: 'Cumulative preservative exposure, especially in long-term reusable lens wearers',
    distinguishingPoint: 'Chronic redness, burning, and papillary reaction that improves when switching to a peroxide or preservative-free system.',
  },
]

interface HistoricalRecall {
  product: string
  year: string
  organism: string
  outcome: string
}

const HISTORICAL_RECALLS: HistoricalRecall[] = [
  {
    product: 'ReNu with MoistureLoc (Bausch + Lomb)',
    year: '2006',
    organism: 'Fusarium solani (fungal keratitis)',
    outcome:
      'A multi-state outbreak (traced back to cases first appearing in Asia in late 2005) led to a permanent worldwide withdrawal in May 2006; roughly a third of confirmed U.S. cases required corneal transplantation. Alexidine, a preservative unique to this formulation, is thought to have allowed a protective biofilm to form on the lens and case surface that shielded the fungus from disinfection.',
  },
  {
    product: 'Complete MoisturePlus (Advanced Medical Optics)',
    year: '2007',
    organism: 'Acanthamoeba (Acanthamoeba keratitis)',
    outcome:
      'A CDC investigation found users of this product had roughly 7× the risk of Acanthamoeba keratitis compared with non-users; the product was voluntarily recalled in May 2007.',
  },
]

export function ContactLensCareSolutions() {
  return (
    <ReferenceShell meta={meta}>
      <p className="text-sm text-slate-600 -mt-2">
        Every solution type, active ingredient, and compatibility rule that shows up in lens-care patient
        counseling and on exams — organized from the basic solution categories through named commercial products,
        disinfection standards, complications (including the corneal infiltrative event spectrum), and the two
        outbreak-and-recall cases that reshaped how the industry tests these products.
      </p>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Solution Types</h2>
        <ReferenceTable
          headers={['Type', 'Function', 'Disinfects?', 'Common examples', 'Key clinical point']}
          rows={SOLUTION_TYPES.map((s) => [
            <span key="type" className="font-medium text-slate-800 whitespace-normal">
              {s.type}
            </span>,
            <span key="fn" className="text-slate-600 whitespace-normal">
              {s.function}
            </span>,
            <span key="disinfects" className="text-slate-700 whitespace-normal">
              {s.disinfects}
            </span>,
            <span key="ex" className="text-slate-600 whitespace-normal">
              {s.examples}
            </span>,
            <span key="point" className="text-slate-600 whitespace-normal">
              {s.keyPoint}
            </span>,
          ])}
        />
      </div>

      <Card className="bg-sky-50 border-sky-200 flex gap-2.5">
        <Info size={16} className="text-sky-500 shrink-0 mt-0.5" />
        <p className="text-xs text-sky-900 leading-relaxed">
          <strong>Rewetting/lubricating drops are not a care solution.</strong> They're a separate, typically
          preservative-free product meant to be instilled directly onto a lens while it's on the eye, for comfort
          only — they don't clean, disinfect, or replace the soak step. The reverse is just as important to
          counsel: multipurpose solution is <strong>never</strong> instilled in the eye as a drop while a lens is
          being worn.
        </p>
      </Card>

      <Card className="bg-red-50 border-red-200 flex gap-2.5">
        <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
        <div className="text-xs text-red-900 leading-relaxed space-y-1.5">
          <p>
            <strong>Never instill unneutralized hydrogen peroxide directly in the eye</strong> and never rinse a
            lens with it — 3% H<sub>2</sub>O<sub>2</sub> causes severe pain and a toxic/chemical keratitis. Full
            neutralization (~6 hours via a one-step system's built-in catalytic disc, or the separate neutralizing
            tablet step in a two-step system) is required before the lens is safe to wear.
          </p>
          <p>
            <strong>Benzalkonium chloride (BAK) is incompatible with soft (hydrogel) lenses.</strong> Soft lenses
            absorb high concentrations of BAK and release it slowly back onto the eye over subsequent wear, at
            levels that can exceed the upper limit of safety — this is why BAK is used in some topical ophthalmic
            drops and RGP solutions but never in modern soft-lens multipurpose solutions. Rigid materials absorb
            far less and release most of it during the first 24 hours, which is why RGP-specific solutions can
            safely use it.
          </p>
        </div>
      </Card>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Preservatives &amp; Active Antimicrobial Agents</h2>
        <ReferenceTable
          headers={['Agent', 'Class / spectrum', 'Used in', 'Note']}
          rows={PRESERVATIVES.map((p) => [
            <span key="agent" className="font-medium text-slate-800 whitespace-normal">
              {p.agent}
            </span>,
            <span key="class" className="text-slate-600 whitespace-normal">
              {p.classAndSpectrum}
            </span>,
            <span key="used" className="text-slate-600 whitespace-normal">
              {p.usedIn}
            </span>,
            <span key="note" className="text-slate-600 whitespace-normal">
              {p.note}
            </span>,
          ])}
        />
        <p className="text-xs text-slate-500 mt-2">
          Across modern MPS chemistries (PHMB and polyquaternium-1 alike), coverage is generally strong against
          bacteria but only minimally effective against fungi and essentially ineffective against Acanthamoeba —
          one reason case hygiene and avoiding water exposure matter as much as the solution itself.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Common Multipurpose Solutions At a Glance</h2>
        <p className="text-sm text-slate-600 mb-2">
          "Comfort" or "wetting" agents (HydraGlyde, TearGlyde, hyaluronan, poloxamine) are a separate ingredient
          category from the preservative — they improve lens surface wettability and comfort but contribute
          essentially nothing to disinfection. Don't confuse a product's marketed comfort technology with what's
          actually killing microorganisms in the case.
        </p>
        <ReferenceTable
          headers={['Product', 'Manufacturer', 'Disinfectant', 'Comfort/wetting agent', 'Note']}
          rows={COMMON_PRODUCTS.map((p) => [
            <span key="product" className="font-medium text-slate-800 whitespace-normal">
              {p.product}
            </span>,
            <span key="mfr" className="text-slate-600 whitespace-normal">
              {p.manufacturer}
            </span>,
            <span key="disinfect" className="text-slate-600 whitespace-normal">
              {p.disinfectant}
            </span>,
            <span key="comfort" className="text-slate-600 whitespace-normal">
              {p.comfortAgent}
            </span>,
            <span key="note" className="text-slate-600 whitespace-normal">
              {p.note}
            </span>,
          ])}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Enzymatic Cleaner Active Ingredients</h2>
        <ReferenceTable
          headers={['Enzyme', 'Source', 'Notes']}
          rows={[
            ['Papain', 'Papaya plant', 'Effective on heavier deposits, but the enzyme most associated with mild allergic/toxic ocular reactions — largely phased out in favor of the two below.'],
            ['Subtilisin (subtilisin A)', 'Bacillus licheniformis', 'A bacterial protease; not associated with allergic reactions. Tends to outperform papain on lighter deposits.'],
            ['Pancreatin', 'Porcine or bovine pancreas', 'Degrades protein, lipid, and mucin deposits (broader than the protein-only enzymes above); comparable efficacy to papain with less reported discomfort.'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Disinfection Efficacy Standard — ISO 14729</h2>
        <p className="text-sm text-slate-600 mb-2">
          The regulatory "stand-alone" microbiological test every marketed chemical disinfection product is
          measured against. A test organism panel of three bacteria and two fungi is inoculated onto/into the
          product at a known starting concentration, then the product is left in contact for its own labeled
          minimum disinfection time before the surviving organisms are counted. In the U.S., contact lens care
          products are regulated by the FDA as Class II medical devices, cleared through the 510(k) premarket
          notification pathway — ISO 14729 stand-alone testing is the microbiology component of that clearance.
        </p>
        <ReferenceTable headers={['Organism', 'Category', 'Primary acceptance criterion']} rows={DISINFECTION_ORGANISMS} />
        <p className="text-xs text-slate-500 mt-2">
          A product meeting the primary criteria on its own passes as a stand-alone disinfectant. One that falls
          short of primary but clears a lower secondary threshold can still be marketed if it passes further
          testing as part of a full regimen (i.e. combined with the cleaning/rinsing steps on the label) rather
          than the chemical alone. Either way, the criteria only hold if the patient actually gives the product its
          full labeled contact time — <strong>a rinse-and-wear shortcut isn't disinfection, it's a rinse.</strong>
        </p>
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <h2 className="text-sm font-semibold text-amber-900 mb-1.5">Rub-and-rinse, regardless of the label</h2>
        <p className="text-xs text-amber-900 leading-relaxed">
          Following a string of solution-associated outbreaks, the FDA in 2009 formally notified manufacturers that
          a rub-and-rinse step improves disinfection over rinse-alone or no-rub regimens — including for products
          labeled "no-rub." Testing across multiple MPS products against organic soil and organisms including
          Fusarium, Candida, and Acanthamoeba found rub-and-rinse consistently outperformed skipping the rub step,
          no matter what the specific product's label claimed. This is now standard patient counseling for every
          MPS regardless of its own marketing.
        </p>
      </Card>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Solution-Associated Complications</h2>
        <ReferenceTable
          headers={['Finding', 'Associated with', 'Distinguishing point']}
          rows={COMPLICATIONS.map((c) => [
            <span key="f" className="font-medium text-slate-800 whitespace-normal">
              {c.finding}
            </span>,
            <span key="a" className="text-slate-600 whitespace-normal">
              {c.associatedWith}
            </span>,
            <span key="d" className="text-slate-600 whitespace-normal">
              {c.distinguishingPoint}
            </span>,
          ])}
        />
        <p className="text-sm text-slate-600 mt-3">
          The care-solution system also factors directly into the major infectious complications of lens wear:{' '}
          <Linkify text="Bacterial Keratitis" /> from lens wear is most often caused by Pseudomonas aeruginosa,
          strongly linked to overnight wear, poor compliance, and biofilm in a poorly maintained case.{' '}
          <Linkify text="Acanthamoeba Keratitis" /> is linked to water exposure while wearing lenses (tap water
          rinsing, showering, swimming, hot tubs) and to homemade or improperly stored saline.{' '}
          <Linkify text="Fungal Keratitis" /> tracks with organic contamination and — as the 2006 outbreak below
          showed — can be amplified by a specific solution's own biofilm-protective properties.{' '}
          <Linkify text="Giant Papillary Conjunctivitis" /> tracks more with deposit buildup and preservative
          exposure than with any single organism.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">
          The Corneal Infiltrative Event Spectrum — CLARE, CLPU, IK &amp; Microbial Keratitis
        </h2>
        <p className="text-sm text-slate-600 mb-2">
          Solution choice, wear schedule, and case hygiene all feed into this spectrum of contact lens-associated
          inflammatory/infectious events. They overlap enough clinically that distinguishing them with certainty at
          the slit lamp is genuinely difficult — the table below lists the features that shift suspicion toward one
          over another, not hard diagnostic cutoffs. When in doubt, treat as though it could be{' '}
          <Linkify text="Bacterial Keratitis" />: culture and start aggressive antibiotic therapy rather than
          watching a true infection.
        </p>
        <ReferenceTable
          headers={['Condition', 'Epithelial defect', 'Pain', 'Associated with', 'Management']}
          rows={INFILTRATIVE_EVENTS.map((e) => [
            <span key="cond" className="font-medium text-slate-800 whitespace-normal">
              {e.diseaseId ? (
                <Link to={`/diseases/${e.diseaseId}`} className="text-brand-600 hover:underline font-medium">
                  {e.condition}
                </Link>
              ) : (
                e.condition
              )}
            </span>,
            <span key="epi" className="text-slate-600 whitespace-normal">
              {e.epithelialDefect}
            </span>,
            <span key="pain" className="text-slate-600 whitespace-normal">
              {e.pain}
            </span>,
            <span key="assoc" className="text-slate-600 whitespace-normal">
              {e.associatedWith}
            </span>,
            <span key="mgmt" className="text-slate-600 whitespace-normal">
              {e.management}
            </span>,
          ])}
        />
        <p className="text-xs text-slate-500 mt-2">
          Features favoring a non-infectious event (CLARE/CLPU/IK) over true microbial keratitis: peripheral
          location, small size (roughly ≤1–2 mm), a minimal or absent epithelial defect, mild-to-moderate
          discomfort, no mucopurulent discharge, and rapid improvement after the lens is removed.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Historical Recalls — Solution Safety Case Studies</h2>
        <ReferenceTable
          headers={['Product', 'Year', 'Organism', 'Outcome']}
          rows={HISTORICAL_RECALLS.map((r) => [
            <span key="p" className="font-medium text-slate-800 whitespace-normal">
              {r.product}
            </span>,
            r.year,
            <span key="o" className="text-slate-600 whitespace-normal">
              {r.organism}
            </span>,
            <span key="out" className="text-slate-600 whitespace-normal">
              {r.outcome}
            </span>,
          ])}
        />
        <p className="text-xs text-slate-500 mt-2">
          Both cases are frequently referenced together on exams as the reason modern regulatory scrutiny and
          rub-and-rinse counseling exist — one landmark case per major organism class (fungal and Acanthamoeba)
          that a solution can fail to adequately control.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Patient Compliance &amp; Case Hygiene Checklist</h2>
        <ReferenceTable
          headers={['Instruction', 'Why it matters']}
          rows={[
            ['Wash and dry hands before handling lenses', 'Reduces transfer of organisms (including Acanthamoeba and Pseudomonas) from the skin to the lens or case.'],
            ['Rub and rinse the lens even if the label says "no-rub"', 'Mechanically dislodges organisms and debris the chemical disinfectant alone may not reach — see the FDA 2009 finding above.'],
            ['Never "top off" old solution — always empty the case and use fresh solution', 'Topping off dilutes the disinfectant below its tested effective concentration and lets organisms accumulate.'],
            ['Never use tap water, distilled/boiled water, or saliva on lenses or in the case — and never make homemade saline', 'Tap and homemade-saline exposure is the classic Acanthamoeba route; saliva introduces oral bacteria. Distilled/boiled water is not sterile or isotonic and is not a substitute for commercial saline.'],
            ['Air-dry the empty case face-down between uses and replace it every 1–3 months', 'Case biofilm is a major reservoir for the organisms implicated in microbial keratitis.'],
            ['Avoid showering, swimming, and hot tubs while wearing lenses', 'Same water-exposure risk as tap water rinsing — remove lenses first, or use single-use daily disposables around water.'],
            ['Follow the labeled replacement schedule for the lens itself', 'Extended wear beyond the approved schedule increases deposit buildup and infection risk independent of the solution used.'],
            ['Do not sleep in lenses unless specifically approved for extended/overnight wear', 'Overnight wear is one of the strongest modifiable risk factors for microbial keratitis regardless of solution.'],
            ['Discard an opened solution bottle 90 days after opening, or at the printed expiration date, whichever comes first', 'Preservative concentration and disinfecting power decline with time and repeated air/cap exposure even before the printed expiration date.'],
            ['Never use rewetting/lubricating drops as a substitute for the disinfecting soak', 'Rewetting drops are for on-eye comfort only and are not tested or labeled as disinfectants.'],
          ]}
        />
      </div>

      <Card className="bg-violet-50 border-violet-200">
        <h2 className="text-sm font-semibold text-violet-900 flex items-center gap-1.5 mb-2">
          <GraduationCap size={15} className="text-violet-500" /> High-Yield Pearls
        </h2>
        <ul className="space-y-2">
          {[
            'Saline is not a disinfectant — a classic distractor. It rinses, dilutes enzymatic tablets, or carries heat disinfection, nothing more.',
            'Unneutralized hydrogen peroxide must never touch the eye directly; full neutralization takes about 6 hours via the catalytic disc in one-step systems.',
            'BAK is safe in RGP solutions but incompatible with soft lenses, which absorb and slowly re-release it at unsafe concentrations.',
            'ISO 14729 primary stand-alone criteria: ≥3-log reduction for the three bacteria, ≥1-log reduction for the two fungi, within the label\'s minimum disinfection time.',
            'The 2009 FDA rub-and-rinse guidance applies to every MPS, including ones marketed "no-rub."',
            'ReNu with MoistureLoc (2006) → Fusarium keratitis outbreak, worldwide withdrawal. Complete MoisturePlus (2007) → Acanthamoeba keratitis outbreak, ~7× relative risk, voluntary recall. Different organisms, same underlying lesson: a solution can pass a lab test yet still underperform in real-world biofilm/compliance conditions.',
            'Modern MPS preservatives (PHMB, polyquaternium-1) are reasonably bactericidal but only weakly effective against fungi and essentially ineffective against Acanthamoeba — hygiene and avoiding water exposure carry more of the burden against those organisms than the solution chemistry does.',
            'A "comfort agent" (HydraGlyde, TearGlyde, hyaluronan, poloxamine) is not a preservative — it improves wettability, not disinfection.',
            'Of the corneal infiltrative event spectrum, only microbial keratitis has a true epithelial defect with dense infiltrate and mucopurulent discharge — CLARE, CLPU, and infiltrative keratitis are inflammatory, not infectious, and are managed by removing the lens rather than starting antibiotics.',
            'Discard an opened MPS bottle 90 days after opening (or its printed expiration date, whichever is first) — patients keeping a bottle "because it\'s not empty yet" is a common, correctable compliance gap.',
          ].map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-violet-900">
              <GraduationCap size={15} className="shrink-0 mt-0.5 text-violet-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Card>

      <p className="text-xs text-slate-500">
        Product examples and preservative pairings reflect commonly cited formulations and can change with product
        revisions — always confirm against the current manufacturer package insert before dispensing or counseling.
      </p>
    </ReferenceShell>
  )
}
