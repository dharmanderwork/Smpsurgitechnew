import React from 'react';
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
  ChevronRight
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

      {/* Hospital Testimonials & Inbound Tender Lead Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <p className="text-sm text-slate-700 italic leading-relaxed">
              "SMP Surgitech’s consignment stocking reduced our cardiovascular tray replacement turnaround from 4 weeks to 24 hours. The metallurgy of their DeBakey clamps matches or exceeds high-tier German manufacturers."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 block">Dr. Marcus Vance, MD, FACS</span>
                <span className="text-slate-500">Chief of Vascular Surgery, Midwest Regional Medical Center</span>
              </div>
              <span className="text-emerald-700 font-semibold">Verified Account</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <p className="text-sm text-slate-700 italic leading-relaxed">
              "Having digital PDF spec sheets with precise autoclave parameters and tolerance charts directly accessible makes our Central Sterile Processing audits effortless. Outstanding B2B support."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 block">Elena Rostova, CRCST</span>
                <span className="text-slate-500">Director of Sterile Processing Services, Metro Health System</span>
              </div>
              <span className="text-emerald-700 font-semibold">Verified Account</span>
            </div>
          </div>
        </div>

        {/* Lead Capture Action Strip */}
        <div className="bg-slate-900 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display">
              Ready to streamline your hospital surgical instrumentation procurement?
            </h3>
            <p className="text-xs text-slate-400">
              Request formal pricing, tender documentation, or evaluate consignment inventory options.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Contact Hospital Sales Rep
            </button>
            <button
              onClick={() => onNavigate('rfq')}
              className="px-5 py-3 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors cursor-pointer"
            >
              Submit Tender RFQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
