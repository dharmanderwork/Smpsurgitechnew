import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { ProductCard } from '../components/ProductCard';
import { 
  HERO_IMAGE, 
  CARDIO_NEURO_IMAGE, 
  ORTHOPEDIC_IMAGE, 
  QUALITY_LAB_IMAGE 
} from '../data/products';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Truck, 
  Layers, 
  Clock, 
  Sparkles, 
  Search,
  Building,
  Award,
  ChevronRight,
  Star,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  Building2,
  HeartPulse,
  Activity,
  Stethoscope,
  HelpCircle,
  FileCheck2
} from 'lucide-react';

interface HomeViewProps {
  products: Product[];
  onNavigate: (view: string, specialty?: string) => void;
  onOpenProductDetail: (product: Product, defaultTab?: 'overview' | 'inquiry') => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: (productId: string) => boolean;
  onOpenAiAssistant: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  onNavigate,
  onOpenProductDetail,
  onOpenPdf,
  onAddToRfq,
  isItemInRfq,
  onOpenAiAssistant
}) => {
  const featuredProducts = products.filter((p) => p.featured);
  const [activeTestimonialTab, setActiveTestimonialTab] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const authorizedBrands = [
    {
      name: 'Abbott',
      division: 'Vascular Division',
      specialty: 'Coronary Interventions & Vascular Access',
      description: 'Cardiovascular balloon catheters, coronary stents, and precision endovascular guide wires.',
      isoRef: 'ISO 13485:2016 Compliant OEM'
    },
    {
      name: 'Cordis',
      division: 'Cardiology',
      specialty: 'Interventional Cardiology & Diagnostics',
      description: 'Diagnostic catheter lines, high-flow vascular introducer sheaths, and guidewires.',
      isoRef: 'CE Mark MDR Validated'
    },
    {
      name: 'Teleflex',
      division: 'Vascular Division',
      specialty: 'Central Venous Access & Hemostasis',
      description: 'Arrow® central venous catheters, percutaneous access sheaths, and specialized hemostatic clips.',
      isoRef: 'FDA 510(k) Cleared'
    },
    {
      name: 'St. Jude Medical',
      division: 'CRM & Structural Heart',
      specialty: 'Cardiac Rhythm & Valvular Care',
      description: 'Pacemaker leads, electrophysiology diagnostic catheters, and structural heart instruments.',
      isoRef: 'Global Medical Device Registry'
    },
    {
      name: 'J&J MedTech',
      division: 'Surgical Solutions',
      specialty: 'Advanced Wound Closure & Energy',
      description: 'Ethicon wound closure sutures, specialized surgical staplers, and advanced ultrasonic devices.',
      isoRef: 'ISO 13485 Enterprise Quality'
    },
    {
      name: 'Pocket ECG',
      division: 'Diagnostic Devices',
      specialty: 'Real-Time Ambulatory Arrhythmia Care',
      description: 'Continuous diagnostic ECG monitoring, telemetry transmitters, and cardiac data solutions.',
      isoRef: 'FDA Class II Certified'
    }
  ];

  const specialties = [
    {
      title: 'Cardiovascular & Thoracic',
      desc: 'Atraumatic vascular clamps, DeBakey micro-forceps, and coronary micro-scissors engineered to prevent endothelial trauma.',
      count: '240+ Instruments',
      image: HERO_IMAGE
    },
    {
      title: 'Neurosurgery & Spine',
      desc: 'Titanium non-ferromagnetic bipolar forceps, Kerrison take-apart punches, and delicate dura elevators.',
      count: '310+ Instruments',
      image: CARDIO_NEURO_IMAGE
    },
    {
      title: 'Orthopedics & Trauma',
      desc: 'Compound joint Stille-Luer bone rongeurs, Langenbeck retractors, and heavy-duty osteotomes.',
      count: '420+ Instruments',
      image: ORTHOPEDIC_IMAGE
    },
    {
      title: 'General & Laparoscopic',
      desc: 'SuperCut Tungsten Carbide Metzenbaum scissors, table-mounted Bookwalter retractor systems, and trocars.',
      count: '580+ Instruments',
      image: QUALITY_LAB_IMAGE
    }
  ];

  const distributionServices = [
    {
      step: '01',
      title: 'Hospital Consignment Stocking',
      desc: 'Pre-stocked emergency instrumentation housed directly within hospital central sterile departments with automatic inventory cycle replenishment.'
    },
    {
      step: '02',
      title: 'UDI Laser Etching & Traceability',
      desc: 'GS1 2D Datamatrix and human-readable custom department initials laser-annealed without compromising corrosion-resistant passivation layers.'
    },
    {
      step: '03',
      title: 'Precision Sharpening & Passivation',
      desc: 'Annual surgical tray audits, micro-serration restoration, Tungsten Carbide insert replacements, and chemical bath re-passivation.'
    },
    {
      step: '04',
      title: 'Government & GPO Tender Fulfillment',
      desc: 'End-to-end technical documentation, CE MDR Declaration of Conformity, ASTM F899 test sheets, and firm-fixed institutional pricing.'
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Requisition & Spec Verification',
      desc: 'Hospital materials teams submit surgical tray lists or competitor part numbers. Our AI Matcher and clinical engineers cross-reference exact DIN/ISO alloy specifications.'
    },
    {
      number: '02',
      title: 'Batch Metallurgy & Laser UDI Annealing',
      desc: 'Every production batch undergoes Rockwell hardness profiling and ASTM A967 passivation checks, followed by GS1 2D Datamatrix laser annealing.'
    },
    {
      number: '03',
      title: 'Hospital Dock & Consignment Staging',
      desc: 'Direct-to-hospital logistics with specialized tamper-evident delivery to sterile processing docks or automated consignment cabinets.'
    },
    {
      number: '04',
      title: 'CSPD Audits & Lifecycle Sharpening',
      desc: 'Ongoing support including autoclave cycle validation, Joint Commission sterilization compliance documentation, and periodic blade restoration.'
    }
  ];

  const testimonials = [
    {
      id: '1',
      category: 'surgery',
      quote: "SMP Surgitech's consignment stocking reduced our cardiovascular tray replacement turnaround from 4 weeks to 24 hours. The metallurgy of their DeBakey clamps matches or exceeds the highest German DIN standards.",
      author: 'Dr. Marcus Vance, MD, FACS',
      role: 'Chief of Vascular Surgery',
      organization: 'Midwest Regional Medical Center',
      rating: 5,
      impact: 'Zero emergency procedure cancellations in 18 months',
      verified: true
    },
    {
      id: '2',
      category: 'cspd',
      quote: "Having digital PDF spec sheets with exact autoclave exposure cycles and tolerance charts directly accessible has transformed our Central Sterile Processing Department audits. Unmatched reliability.",
      author: 'Elena Rostova, CRCST',
      role: 'Director of Sterile Processing Services',
      organization: 'Metro Health System',
      rating: 5,
      impact: '1,400+ autoclave cycles with zero corrosion pitting',
      verified: true
    },
    {
      id: '3',
      category: 'procurement',
      quote: "Managing GPO contracts and surgical tenders across 14 acute care hospitals requires rock-solid lot traceability and Net-30 reliability. SMP Surgitech is our highest rated surgical distributor.",
      author: 'David Chen, MBA, CMRP',
      role: 'Vice President of Supply Chain & Materials',
      organization: 'Ascension Healthcare Alliance',
      rating: 5,
      impact: '-28% annual spend reduction on specialty surgical sets',
      verified: true
    },
    {
      id: '4',
      category: 'surgery',
      quote: "Their titanium Castroviejo micro-forceps provide incredible tactile responsiveness during 8-hour neuro-vascular aneurysm surgeries. Non-magnetic, ultra-lightweight, and flawless grip alignment.",
      author: 'Dr. Priya Sundaram, MD, PhD',
      role: 'Director of Cerebrovascular Neurosurgery',
      organization: 'University Teaching Hospital',
      rating: 5,
      impact: 'Adopted as standard across 6 dedicated neurosurgical suites',
      verified: true
    }
  ];

  const filteredTestimonials = activeTestimonialTab === 'all'
    ? testimonials
    : testimonials.filter((t) => t.category === activeTestimonialTab);

  const faqs = [
    {
      q: 'How does the SMP Surgitech Hospital Consignment Stock Program operate?',
      a: 'We place sterile, pre-configured surgical instruments and backup trays directly in your hospital Central Sterile Processing Department (CSPD) or surgery center at zero upfront capital cost. The hospital only pays when an instrument is consumed or placed into service. Periodic cycle counts and automatic replenishments are managed seamlessly by our regional clinical logistics managers.'
    },
    {
      q: 'How do institutional buyers submit purchase orders (Net-30)?',
      a: 'Authorized healthcare institutions, academic medical centers, and surgery networks can submit corporate Purchase Orders directly through our RFQ Portal or by emailing procurement@smpsurgitech.com. Standard terms are Net-30 upon credit verification, with GPO tier pricing applied automatically.'
    },
    {
      q: 'Are your instruments validated for standard automated washer-disinfectors and steam autoclaves?',
      a: 'Yes. Every instrument is compliant with DIN EN ISO 17664 and AAMI ST79. They are validated for pre-vacuum steam sterilization at 134°C (273°F) for 4 to 18 minutes, and compatible with enzymatic detergents between pH 7.0 and 8.5. Exact cleaning and autoclave cycles are detailed in each product’s digital PDF spec sheet.'
    },
    {
      q: 'How can we obtain Device Master Records (DMR) and Material Test Certificates?',
      a: 'Full material test certificates (MTC), heat lot chemical analysis, and CE Declaration of Conformity documents are provided digitally with each shipment and archived in our compliance registry. Hospital biomedical and regulatory teams can also request documentation directly via our online PDF Library.'
    },
    {
      q: 'Does SMP Surgitech offer custom laser marking for department and doctor tray tracking?',
      a: 'Yes. We provide GS1 2D Datamatrix UDI laser annealing as well as customized alphanumeric labeling (e.g., OR-CV-TRAY-04 or surgeon initials). Our cold-laser annealing process penetrates the surface without altering the protective chromium-oxide passivation layer, preventing rust.'
    },
    {
      q: 'What is the response turnaround for emergency operating room courier replenishment?',
      a: 'Our Emergency O.R. Logistics Desk operates 24/7/365. For urgent surgical backup stock, metropolitan delivery is dispatched within 2 hours to hospital receiving docks, and nationwide priority air delivery is dispatched within 24 hours.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section: 16:9 Focal Anchor & Crisp Proposition */}
      <section className="relative overflow-hidden pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left: Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Unboxed Metadata Trust Line (Zero Pill) */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>ISO 13485:2016 Certified</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>German DIN Metallurgy</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-cyan-800">B2B Institutional Supply</span>
              </div>

              {/* Refined Display Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.08] text-balance">
                Precision Surgical Instrumentation for Modern Operating Suites.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                SMP Surgitech distributes clinical-grade German stainless steel and titanium surgical instruments directly to hospital health systems, surgery centers, and government healthcare facilities.
              </p>

              {/* Action Buttons: 1 Primary CTA + Secondary Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('catalog')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Browse Full Instrument Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('rfq')}
                  className="px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  Request Hospital Tender Quote
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-mono text-lg font-bold text-slate-950 block tabular-nums">24-48h</span>
                  <span className="text-slate-500">Emergency Dispatch</span>
                </div>
                <div>
                  <span className="font-mono text-lg font-bold text-slate-950 block tabular-nums">100%</span>
                  <span className="text-slate-500">Lot Traceability & UDI</span>
                </div>
                <div>
                  <span className="font-mono text-lg font-bold text-slate-950 block tabular-nums">Net-30</span>
                  <span className="text-slate-500">Hospital Purchase Orders</span>
                </div>
              </div>
            </div>

            {/* Right: High-Impact Photography Asset */}
            <div className="lg:col-span-5 relative">
              <div className="h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 relative group">
                <img
                  src={HERO_IMAGE}
                  alt="SMP Surgitech precision German stainless steel surgical instruments"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-1">
                    Cardiovascular & General Surgery
                  </div>
                  <div className="text-base font-bold font-display">
                    Micro-Serrated Vascular Clamps & Dissecting Scissors
                  </div>
                  <div className="text-xs text-slate-300 mt-1 flex items-center justify-between">
                    <span>DIN 1.4021 Vacuum Tempered</span>
                    <button
                      onClick={() => onNavigate('catalog', 'Cardiovascular & Thoracic')}
                      className="text-cyan-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Specialty</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Impact Metrics Strip: Full-Width 4-Column Bar */}
      <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                12,000+
              </div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Surgical SKUs Cataloged
              </div>
              <p className="text-xs text-slate-400">German stainless steel & titanium micro-instruments</p>
            </div>

            <div className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                450+
              </div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Hospital Network Accounts
              </div>
              <p className="text-xs text-slate-400">Academic medical centers & surgery consortiums</p>
            </div>

            <div className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                99.8%
              </div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Batch Metallurgical Pass Rate
              </div>
              <p className="text-xs text-slate-400">Rockwell hardness & passivation audited</p>
            </div>

            <div className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                ISO 13485
              </div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                MDR & CE Certified
              </div>
              <p className="text-xs text-slate-400">Class Ir validated for hospital CSPD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Dealer For Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-200 pb-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
            Institutional Brand Partnerships
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Authorized Dealer For
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Proudly associated with globally renowned brands for better patient outcomes. We deliver authentic manufacturer-certified devices with unbroken cold-chain, sterile barrier assurance, and full lot documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorizedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs hover:border-cyan-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-950 tracking-tight">
                      {brand.name}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-900 block mt-0.5">
                      {brand.division}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-cyan-800">
                    <BadgeCheck className="w-4 h-4 text-cyan-700" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-800">
                  {brand.specialty}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-medium text-slate-600">{brand.isoRef}</span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="font-semibold text-cyan-900 hover:underline cursor-pointer"
                >
                  Direct Inquiry →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
              Clinical Specializations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Surgical Portfolios by Discipline
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-xs font-semibold text-slate-800 hover:text-cyan-900 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Portfolios</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('catalog', spec.title)}
              className="group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-mono">
                    {spec.count}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-cyan-900 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {spec.desc}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-cyan-800">
                <span>Explore Specialty Instruments</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Surgical Instruments Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
              Precision Engineering Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Featured Instruments & Technical Specs
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Each instrument includes a full digital PDF spec sheet and instant B2B quotation form.
            </p>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Open Complete Catalog ({products.length} Products)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onOpenDetail={onOpenProductDetail}
              onOpenPdf={onOpenPdf}
              onAddToRfq={onAddToRfq}
              isInRfq={isItemInRfq(prod.id)}
            />
          ))}
        </div>
      </section>

      {/* Procurement & Supply Chain Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-200 pb-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
            Institutional Chain of Custody
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            From Catalog to Operating Theatre in 4 Controlled Steps
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            A standardized, auditable fulfillment architecture engineered for healthcare procurement directors and surgical material managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((wf, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3 relative overflow-hidden"
            >
              <div className="font-mono text-xs font-bold text-cyan-800">
                Step {wf.number}
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                {wf.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Clinical Spec & Tender RFP Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-800/80 rounded-md text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gemini Clinical Spec & Tray Matcher</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              Need to cross-reference an O.R. surgical tray list or competitor SKU?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our intelligent clinical assistant analyzes tender documents, cross-references German DIN standards, recommends titanium or tungsten-carbide alloys, and pre-populates your formal RFQ.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenAiAssistant}
                className="px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch AI Clinical Matcher</span>
              </button>
              <button
                onClick={() => onNavigate('spec-sheets')}
                className="px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Browse PDF Spec Sheets Library
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Services & Capabilities (Numbered human editorial style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-200 pb-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
            Institutional Operations
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Core Distributor Capabilities
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Enterprise support designed specifically for hospital sterile processing and operating room directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributionServices.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-cyan-800">
                  {svc.step}.
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mt-1">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {svc.desc}
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-slate-800 hover:text-cyan-900 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Read SLA Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cleanroom Metallurgy & Quality Control Inspection */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs uppercase tracking-wider font-semibold text-cyan-900">
                Quality Assurance Laboratory
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                Every Batch Inspected via Optical Comparators & Metallurgical Hardness Testing.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Before any surgical instrument is cataloged or dispatched, it undergoes rigorous dimensional verification in our cleanroom testing facility. We measure jaw alignment, spring fatigue, surface roughness (Ra), and corrosion passivation according to ASTM A967 and ISO 7153-1.
              </p>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Optical measurement of cutting edge geometry and micro-teeth profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Copper sulfate immersion testing to guarantee zero surface iron contamination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full certificate of conformance and heat lot tracking shipped with every order</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Learn About Our ISO 13485 Standards
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900">
                <img
                  src={QUALITY_LAB_IMAGE}
                  alt="SMP Surgitech Cleanroom Inspection Laboratory"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Testimonials & Comprehensive Rating System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="border-b border-slate-200 pb-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
            Clinical Credibility & Hospital Audits
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Institutional Feedback & Performance Scorecard
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Evaluations from Operating Room Chiefs, Sterile Processing Directors, and Health System Materials Managers across 340+ acute care hospitals.
          </p>
        </div>

        {/* Rating Scorecard Matrix (4-Metric Clinical Breakdown) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Score Callout */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Composite Satisfaction Index
            </span>
            <div className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-tight tabular-nums">
              4.9<span className="text-2xl text-slate-400 font-sans">/5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-400">
              Based on 340+ verified hospital network audits
            </span>
          </div>

          {/* Granular Criteria Progress Bars */}
          <div className="md:col-span-8 space-y-3.5 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-slate-200 mb-1">
                <span>Metallurgical Precision & Edge Retention (HRC)</span>
                <span className="font-mono text-cyan-300">99.6% (5.0 / 5)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '99.6%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-200 mb-1">
                <span>Autoclave Reprocessing & Passivation Longevity</span>
                <span className="font-mono text-cyan-300">98.9% (4.9 / 5)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '98.9%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-200 mb-1">
                <span>Emergency O.R. Logistics & Dispatch Punctuality</span>
                <span className="font-mono text-cyan-300">99.4% (5.0 / 5)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '99.4%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-200 mb-1">
                <span>CSPD Regulatory Audit Dossiers & UDI Accuracy</span>
                <span className="font-mono text-cyan-300">100.0% (5.0 / 5)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Role Filter Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs font-semibold text-slate-500 mr-2">Filter by Role:</span>
          {[
            { id: 'all', label: 'All Reviews (4)' },
            { id: 'surgery', label: 'Surgeons & OR Chiefs' },
            { id: 'cspd', label: 'Sterile Processing (CSPD)' },
            { id: 'procurement', label: 'Supply Chain & GPO' }
          ].map((tab) => {
            const isSelected = activeTestimonialTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTestimonialTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Hospital Account</span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-600">
                  <strong className="text-slate-900 font-semibold">Reported Outcome:</strong> {t.impact}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-950 block">{t.author}</span>
                  <span className="text-slate-500">{t.role} · {t.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions (Institutional FAQ Accordion) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-200 pb-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
            Procurement & Sterile Processing Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Key information for hospital tender committees, purchasing directors, and Central Sterile Processing leads.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-800 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Lead Capture Action Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Healthcare Accounts</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Ready to streamline your hospital surgical instrumentation procurement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Request formal pricing, tender documentation, or evaluate our zero-capital hospital consignment inventory program.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer text-center"
            >
              Contact Hospital Sales Rep
            </button>
            <button
              onClick={() => onNavigate('rfq')}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-600 rounded-xl transition-colors cursor-pointer text-center"
            >
              Submit Tender RFQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
