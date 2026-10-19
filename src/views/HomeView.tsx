import React, { useState, useEffect } from 'react';
import { Product, DealerBrand, TerritoryRegion, Testimonial } from '../types/instruments';
import { ProductCard } from '../components/ProductCard';
import { 
  DEALER_BRANDS, 
  TERRITORY_REGIONS, 
  TESTIMONIALS,
  HERO_IMAGE, 
  CATHLAB_OCT_IMAGE, 
  IMPELLA_IABP_IMAGE, 
  POCKET_ECG_IMAGE,
  SURGICAL_SET_IMAGE,
  CARDIO_INSTRUMENTS_IMAGE
} from '../data/products';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Truck, 
  Clock, 
  Sparkles, 
  Search,
  Building2, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Play,
  Pause,
  Star, 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Boxes,
  Zap,
  Check,
  Plus
} from 'lucide-react';
import { generateRfqReference } from '../utils/rfq';

interface HeroSlide {
  id: string;
  productId: string;
  tabTitle: string;
  shortOem: string;
  brandTag: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  specs: { label: string; value: string }[];
  targetCategory: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'xience-stent',
    productId: 'xience-skypoint',
    tabTitle: 'XIENCE™ Stents',
    shortOem: 'Abbott',
    brandTag: 'Abbott Vascular Division · Authorized Channel Partner',
    badge: 'Flagship Coronary Intervention',
    title: 'XIENCE Skypoint™ Everolimus-Eluting Coronary Stent System',
    subtitle: 'Ultra-Deliverable Multi-Link Platform · Expandable up to 5.75 mm',
    desc: 'The global clinical safety benchmark with over 15 million implants worldwide. Engineered with 81µm cobalt-chromium struts and bio-inert fluoropolymer coating for lowest stent thrombosis rates (<0.2%).',
    image: HERO_IMAGE,
    specs: [
      { label: 'Strut Metallurgy', value: '81 µm L-605 Cobalt Chromium' },
      { label: 'Post-Dilation Limit', value: 'Over-expansion to 5.75 mm' },
      { label: 'Emergency Stock', value: 'Full size matrix (2.25 - 4.0 mm)' }
    ],
    targetCategory: 'Coronary Stents (XIENCE)'
  },
  {
    id: 'cathlab-oct',
    productId: 'oct-imaging-system',
    tabTitle: 'Cath Lab OCT & Imaging',
    shortOem: 'Abbott',
    brandTag: 'Abbott Diagnostic Physiology · Intracoronary Imaging',
    badge: '10-Micron Microscopic Resolution',
    title: 'OCT Diagnostic Imaging System & Dragonfly™ Catheters',
    subtitle: 'High-Resolution Intracoronary Imaging · 10x Higher Detail than IVUS',
    desc: 'Near-infrared swept-source intravascular imaging with automated MLD MAX workflow for precision stent length sizing, calcium arc scoring, and stent malapposition verification.',
    image: CATHLAB_OCT_IMAGE,
    specs: [
      { label: 'Axial Resolution', value: '10 µm microscopic precision' },
      { label: 'Laser Pullback', value: '36 mm/sec (2.5s rapid sweep)' },
      { label: 'Cath Lab Placement', value: 'Console & certified specialist on-site' }
    ],
    targetCategory: 'Diagnostic Physiology & Imaging (OCT / FFR)'
  },
  {
    id: 'impella-iabp',
    productId: 'impella-heart-pump-system',
    tabTitle: 'Impella® & Arrow IABP',
    shortOem: 'J&J / Teleflex',
    brandTag: 'J&J MedTech & Teleflex Vascular · Hemodynamic Support',
    badge: 'Critical Circulatory Rescue',
    title: 'Impella® pVAD & Teleflex Arrow AutoCAT 2 WAVE™ IABP',
    subtitle: 'Active Left Ventricular Unloading (Up to 5.0 L/min) & Helium Counterpulsation',
    desc: 'Comprehensive hemodynamic rescue platforms for cardiogenic shock and protected high-risk PCI (CHIP). Complete bedside consoles and catheter kits consigned across Central India.',
    image: IMPELLA_IABP_IMAGE,
    specs: [
      { label: 'Forward Blood Flow', value: '3.5 to 5.0 L/min continuous' },
      { label: 'Helium Inflation', value: '< 50 ms synchronized wave' },
      { label: 'Standby Consignment', value: '2-3 Hr Emergency Cath Lab dispatch' }
    ],
    targetCategory: 'Mechanical Circulatory Support (Impella & IABP)'
  },
  {
    id: 'surgical-sets',
    productId: 'smp-cardiovascular-surgical-set',
    tabTitle: 'German Surgical Sets',
    shortOem: 'SMP Surgitech',
    brandTag: 'SMP Surgitech Precision Surgery · ISO 13485:2016 Certified',
    badge: 'Open-Heart & Vascular Sets',
    title: 'Cardiovascular & Micro-Vascular Surgical Instrument Suite',
    subtitle: 'German DIN 1.4021 Stainless Steel & Grade 5 Titanium',
    desc: 'Hospital-grade open-heart instrumentation: DeBakey atraumatic vascular clamps, Castroviejo micro-needle holders with tungsten carbide diamond pyramid inlays, and Potts scissors.',
    image: SURGICAL_SET_IMAGE,
    specs: [
      { label: 'Certified Alloy', value: 'German DIN 1.4021 & Ti-6Al-4V ELI' },
      { label: 'Satin Finish', value: 'Anti-glare electro-passivation' },
      { label: 'Autoclave Durability', value: '10+ Year hospital autoclave lifespan' }
    ],
    targetCategory: 'Cardiovascular Surgical Instruments'
  },
  {
    id: 'pocket-ecg',
    productId: 'pocket-ecg-diagnostic-device',
    tabTitle: 'Pocket ECG Telemetry',
    shortOem: 'Pocket ECG',
    brandTag: 'Pocket ECG Diagnostics · Continuous Ambulatory Monitoring',
    badge: 'Real-Time Ambulatory Arrhythmia Care',
    title: 'Pocket ECG Real-Time Wireless Arrhythmia Diagnostic System',
    subtitle: 'Continuous 30-Day Full-Disclosure Cellular Telemetry',
    desc: 'Smartphone-sized clinical sensor capturing every single heartbeat with real-time cloud analysis and immediate automated physician alerts for AFib, VT, and syncope evaluation.',
    image: POCKET_ECG_IMAGE,
    specs: [
      { label: 'Recording Mode', value: '100% Full-disclosure (30 days)' },
      { label: 'Cloud Cellular', value: 'Built-in real-time IoT transmission' },
      { label: 'Device Form', value: '74 grams water-resistant sensor' }
    ],
    targetCategory: 'Diagnostic Monitoring (Pocket ECG)'
  }
];

interface HomeViewProps {
  products: Product[];
  onNavigate: (view: string, categoryFilter?: string) => void;
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
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All');
  const [activeTerritoryTab, setActiveTerritoryTab] = useState<string>('South Rajasthan');
  const [quickQuoteSubmitted, setQuickQuoteSubmitted] = useState<string | null>(null);

  // Banner carousel state
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeSlide = HERO_SLIDES[currentSlide];
  const activeProduct = products.find((p) => p.id === activeSlide.productId) || products[0];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Filtered products for homepage spotlight
  const filteredProducts = products.filter((p) => {
    if (selectedProductCategory === 'All') return true;
    if (selectedProductCategory === 'XIENCE') return p.category === 'Coronary Stents (XIENCE)';
    if (selectedProductCategory === 'Imaging') return p.category === 'Diagnostic Physiology & Imaging (OCT / FFR)' || p.category === 'Cardiovascular Physiology Systems (CoroFlow)';
    if (selectedProductCategory === 'Support') return p.category === 'Mechanical Circulatory Support (Impella & IABP)' || p.category === 'Structural Heart (TAVI)';
    if (selectedProductCategory === 'Surgical') return p.category === 'Cardiovascular Surgical Instruments';
    return true;
  });

  const activeRegion = TERRITORY_REGIONS.find((r) => r.state === activeTerritoryTab) || TERRITORY_REGIONS[0];

  const handleQuickQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ref = generateRfqReference();
    setQuickQuoteSubmitted(ref);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION: PREMIUM PANORAMIC BANNER & CLINICAL SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-16 border-b border-slate-800">
        {/* Ambient background glow and grid */}
        <div className="absolute inset-0 bg-grid-slate-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          {/* Top Editorial Kicker & Commanding Value Proposition */}
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-300 font-semibold tracking-wide">
              <span>Authorized Regional Distributor</span>
              <span aria-hidden="true">·</span>
              <span>Interventional Cardiology & Precision Surgery</span>
              <span aria-hidden="true">·</span>
              <span className="text-white">Central & Western India Hub</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Cardiovascular Technologies & Surgical Solutions
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-3xl">
              <strong className="text-white">SMP Surgitech</strong> is the authorized regional partner for <strong>Abbott Vascular</strong>, <strong>Cordis</strong>, <strong>Teleflex</strong>, <strong>St. Jude Medical</strong>, and <strong>J&J MedTech</strong>. Supplying drug-eluting coronary stents, OCT/FFR physiology consoles, mechanical circulatory support, and German surgical instrumentation with rapid 2-hour emergency cath lab delivery.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('catalog')}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-cyan-950/60 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Full Catalog (140+ SKUs)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-300" />
                <span>Request Institutional Quotation (RFQ)</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="px-4 py-3 bg-slate-900/90 hover:bg-slate-800 text-cyan-300 font-semibold text-xs sm:text-sm rounded-xl border border-cyan-800/60 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>AI Clinical Spec Matcher</span>
              </button>

              <a
                href="tel:+919414088210"
                className="px-4 py-3 bg-slate-900/70 hover:bg-slate-800/80 text-slate-300 hover:text-white text-xs sm:text-sm rounded-xl border border-slate-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>24x7 Cath Lab Hotline: <strong className="text-white">+91 94140 88210</strong></span>
              </a>
            </div>
          </div>

          {/* Interactive Technology Selector Tabs */}
          <div className="pt-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                        : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>{slide.tabTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-cyan-300'
                    }`}>
                      {slide.shortOem}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* THE MASTER HERO BANNER SHOWCASE */}
          <div 
            className="w-full relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 flex flex-col justify-between group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Banner Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Measured contrast scrim: dark on left & bottom for 100% readable typography, transparent on right for full equipment view */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/85 md:to-transparent" />
              
              {/* Subtle blue ambient vignette */}
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
            </div>

            {/* Top Bar inside Banner: Brand Division Badge & Live Dispatch SLA */}
            <div className="relative z-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-cyan-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{activeSlide.brandTag}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-emerald-800/60 text-emerald-300 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>2-3 Hr Emergency Cath Lab Dispatch Available</span>
              </div>
            </div>

            {/* Middle Content on Banner: Product Title, Technical Specs & Action Controls */}
            <div className="relative z-10 p-5 sm:p-8 max-w-2xl space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  {activeSlide.badge}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  {activeSlide.title}
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-cyan-200">
                  {activeSlide.subtitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                {activeSlide.desc}
              </p>

              {/* Technical Highlights Specification Table */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {activeSlide.specs.map((spec, i) => (
                  <div 
                    key={i} 
                    className="p-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/70 text-xs"
                  >
                    <div className="text-[10px] uppercase font-bold text-slate-400">{spec.label}</div>
                    <div className="font-semibold text-white mt-0.5 truncate">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Direct Banner Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenProductDetail(activeProduct, 'overview')}
                  className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Specifications & Sizing</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenPdf(activeProduct)}
                  className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive PDF Spec</span>
                </button>

                <button
                  onClick={() => onAddToRfq(activeProduct)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isItemInRfq(activeProduct.id)
                      ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300'
                      : 'bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-white'
                  }`}
                >
                  {isItemInRfq(activeProduct.id) ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>In RFQ Tray</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Add to RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Controls Bar inside Banner */}
            <div className="relative z-10 px-5 py-3 sm:px-6 sm:py-4 bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 flex items-center justify-between gap-4">
              {/* Slide Thumbnail Pills */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx 
                        ? 'w-8 bg-cyan-400' 
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Controls: Slide index, prev/next arrows & play/pause */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">
                  <strong className="text-white">{String(currentSlide + 1).padStart(2, '0')}</strong>
                  {' '}/ {String(HERO_SLIDES.length).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    aria-label={isAutoPlaying ? 'Pause carousel' : 'Play carousel'}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4-COLUMN HIGH-IMPACT PROOF & NETWORK STRIP */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-white tabular-nums">480+</span>
                <Building2 className="w-5 h-5 text-cyan-400 opacity-80" />
              </div>
              <div className="text-xs font-semibold text-slate-200">Partner Hospitals & Cath Labs</div>
              <div className="text-[11px] text-slate-400">Consigned across MP, CG, South RJ & UP</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-cyan-300 tabular-nums">&lt; 2-3 Hrs</span>
                <Clock className="w-5 h-5 text-cyan-400 opacity-80" />
              </div>
              <div className="text-xs font-semibold text-slate-200">Emergency Dispatch Turnaround</div>
              <div className="text-[11px] text-slate-400">Direct courier to hospital cath lab suite</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-white tabular-nums">100%</span>
                <ShieldCheck className="w-5 h-5 text-emerald-400 opacity-80" />
              </div>
              <div className="text-xs font-semibold text-slate-200">Cold-Chain & Sterile Barrier</div>
              <div className="text-[11px] text-slate-400">ISO 13485:2016 verified lot & UDI tracking</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-emerald-400 tabular-nums">6 Global OEMs</span>
                <Award className="w-5 h-5 text-emerald-400 opacity-80" />
              </div>
              <div className="text-xs font-semibold text-slate-200">Authorized Channel Dealership</div>
              <div className="text-[11px] text-slate-400">Abbott · Cordis · Teleflex · St. Jude · J&J</div>
            </div>
          </div>

          {/* REGIONAL HUB & EMERGENCY DISPATCH BAR */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-3 text-slate-300">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Regional Distribution Hubs:</span>
              </span>
              <span className="font-semibold text-white">Udaipur Central Warehouse (South Rajasthan)</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Indore & Bhopal (MP)</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Raipur (CG)</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Kanpur & Southern UP</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('coverage')}
                className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Territory District Matrix</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUTHORIZED DEALER FOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-cyan-700" />
            <span>Authorized Channel Partnerships</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Authorized Dealer For
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Proudly associated with globally renowned brands for better patient outcomes.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEALER_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Strip */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-950 group-hover:text-cyan-900 transition-colors">
                      {brand.name}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-800 mt-0.5">
                      {brand.division}
                    </div>
                  </div>
                  <span className="bg-slate-100 group-hover:bg-cyan-50 text-slate-700 group-hover:text-cyan-900 text-[10px] font-bold px-2 py-1 rounded border border-slate-200 group-hover:border-cyan-200 transition-colors">
                    {brand.badgeText}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {brand.description}
                </p>

                {/* Featured Product Tags */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5 tracking-wider">
                    Distributed Equipment & Lines
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.featuredProducts.map((prod, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200/70"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('catalog')}
                  className="text-xs font-bold text-cyan-900 hover:text-cyan-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Browse {brand.name} Catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Channel</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AREA COVERED / DISTRIBUTION NETWORK SECTION */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Regional Logistics Footprint</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Geographic Area Covered
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Strategically positioned logistics infrastructure delivering coronary stents, OCT/FFR systems, and surgical suites directly to hospital Cath Labs.
              </p>
            </div>

            {/* Region Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {TERRITORY_REGIONS.map((region) => {
                const isActive = activeTerritoryTab === region.state;
                return (
                  <button
                    key={region.state}
                    onClick={() => setActiveTerritoryTab(region.state)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/60'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{region.state}</span>
                    {region.nameHindi && (
                      <span className="block text-[10px] font-normal opacity-80">{region.nameHindi}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Territory Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Detail Box */}
            <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      {activeRegion.state}
                    </h3>
                    {activeRegion.nameHindi && (
                      <span className="text-sm text-cyan-300 font-sans font-medium">({activeRegion.nameHindi})</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{activeRegion.tagline}</p>
                </div>
                <span className="bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-3 py-1 rounded-full text-xs font-semibold">
                  {activeRegion.coverageStatus}
                </span>
              </div>

              {/* Special Emphasis on South Rajasthan Districts */}
              {activeRegion.state === 'South Rajasthan' && (
                <div className="bg-cyan-950/40 border border-cyan-800/60 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
                    <Boxes className="w-4 h-4 text-cyan-400" />
                    <span>South Rajasthan Dedicated District Network</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    SMP Surgitech operates its primary regional warehouse and logistics headquarters directly in <strong>Udaipur</strong>, guaranteeing immediate 1 to 3 hour emergency fulfillment to Cath Labs across:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                    {activeRegion.districtsHindi?.map((d, i) => (
                      <div key={i} className="bg-slate-900/90 border border-slate-700/80 rounded px-2.5 py-1.5 text-xs text-white font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cities Coverage List for Other States */}
              {activeRegion.state !== 'South Rajasthan' && (
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Key Healthcare Hubs Covered:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeRegion.cities.map((city, idx) => (
                      <span key={idx} className="bg-slate-800/80 text-slate-200 border border-slate-700 px-3 py-1 rounded-lg text-xs font-medium">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Logistics SLA Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] text-slate-400">Emergency SLA</div>
                  <div className="font-mono text-base font-bold text-cyan-300">{activeRegion.emergencyCourierHours}</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] text-slate-400">Regional HQ Hub</div>
                  <div className="font-semibold text-white text-xs">{activeRegion.hqCity}</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] text-slate-400">Active Consignments</div>
                  <div className="font-mono text-base font-bold text-emerald-400">{activeRegion.activeHospitals} Cath Labs</div>
                </div>
              </div>

              {/* Direct Desk Representative */}
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-slate-400">{activeRegion.repContact.title}</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{activeRegion.repContact.phone}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeRegion.repContact.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="py-2 px-4 bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Contact Territory Lead
                </button>
              </div>
            </div>

            {/* Right Summary Card: Cold-Chain Protocol */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-300">
                  <Truck className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  24/7 Cold-Chain & Emergency Standby Deployment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every coronary stent and diagnostic catheter is stored in temperature-monitored facilities (15°C to 25°C) with continuous electronic data logger verification and barcoded lot traceability.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tamper-evident hospital consignment boxes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>On-site IABP and CoroFlow standby consoles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Cath Lab handoff with lot verification signature</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('coverage')}
                    className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-900 border border-slate-700 text-cyan-300 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Interactive Territory Coverage Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARDIOLOGY & SURGICAL PRODUCT CATALOG SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-1">
              <HeartPulse className="w-3.5 h-3.5 text-cyan-700" />
              <span>Interventional Catalog Spotlight</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Focus on Cardiology & Surgical Instruments
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Drug-eluting coronary stents, intracoronary imaging, mechanical circulatory systems, and precision surgical sets.
            </p>
          </div>

          {/* Category Filter Pills (Zero-Pill styling: clean tabs) */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {[
              { id: 'All', label: 'All Featured' },
              { id: 'XIENCE', label: 'XIENCE Stents (4 Models)' },
              { id: 'Imaging', label: 'OCT & CoroFlow (3 Systems)' },
              { id: 'Support', label: 'TAVI, Impella & IABP' },
              { id: 'Surgical', label: 'Surgical Instruments' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedProductCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedProductCategory === tab.id
                    ? 'bg-slate-900 text-white border-slate-900 font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenProductDetail}
              onOpenPdf={onOpenPdf}
              onAddToRfq={onAddToRfq}
              isInRfq={isItemInRfq(product.id)}
            />
          ))}
        </div>

        {/* Full Catalog Navigation Callout */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-base text-slate-900">
              Looking for Complete Sizing Matrices or Dedicated Tenders?
            </h3>
            <p className="text-xs text-slate-600">
              Browse all 13 authorized products, filter by manufacturer brand, and review full multi-page PDF technical specifications.
            </p>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="px-5 py-2.5 bg-slate-900 hover:bg-cyan-900 text-white text-xs font-bold rounded-xl transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Open Complete Product Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. TESTIMONIALS AND RATING SYSTEM SECTION */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Header & Rating Scorecard Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Verified Hospital Evaluations</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Institutional Ratings & Testimonials
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Read direct feedback from chief interventional cardiologists, cardiothoracic surgery directors, and cath lab procurement superintendents across our distribution territory.
              </p>
            </div>

            {/* Institutional Scorecard Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-3xl font-extrabold text-slate-950">4.96</span>
                    <span className="text-slate-400 text-sm">/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full block">
                    Cath Lab Verified
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">520+ Annual Audits</span>
                </div>
              </div>

              {/* Sub-rating Breakdown */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Emergency Cath Lab Dispatch (&lt; 3h)</span>
                  <span className="font-mono font-bold text-slate-900">4.98 / 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Cold-Chain Storage & UDI Batch Integrity</span>
                  <span className="font-mono font-bold text-slate-900">5.00 / 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Clinical Specialist Technical Assistance</span>
                  <span className="font-mono font-bold text-slate-900">4.94 / 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  {/* Rating Stars & Location */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-900 font-semibold bg-cyan-50 px-2 py-0.5 rounded">
                      {t.city}, {t.state}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-display font-bold text-slate-900 text-xs">
                    {t.authorName}
                  </div>
                  <div className="text-[11px] text-cyan-900 font-medium mt-0.5">
                    {t.designation}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {t.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTEGRATED QUICK QUOTE & LEAD GENERATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider block">
              B2B Institutional Sales & Tender Desk
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Request a Direct Institutional Quotation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hospital procurement committees, cath lab directors, and distributors in Madhya Pradesh, Chhattisgarh, South Rajasthan, and Uttar Pradesh can initiate direct tender pricing and consignment requests.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Official CDSCO Form MD-41 Authorized B2B Invoicing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Dedicated field clinical engineer for cath lab case backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Custom laser marking & UDI hospital serialization</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg">
            {quickQuoteSubmitted ? (
              <div className="text-center py-6 space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-slate-950">Inquiry Received</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your reference code is <strong className="font-mono text-cyan-800">{quickQuoteSubmitted}</strong>. Our regional sales desk will respond within 2 hours.
                </p>
                <button
                  onClick={() => setQuickQuoteSubmitted(null)}
                  className="py-2 px-4 bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Submit Another Requisition
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickQuoteSubmit} className="space-y-3.5 text-xs">
                <h3 className="font-bold text-sm text-slate-950 border-b border-slate-100 pb-2">
                  Fast Procurement Lead Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Contact Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Dr. / Mr. / Ms."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="name@hospital.org"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Hospital / Cath Lab Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Institution Name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Territory State *</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800">
                      <option>South Rajasthan (Udaipur, Dungarpur, Banswara...)</option>
                      <option>Madhya Pradesh (Indore, Bhopal, Jabalpur...)</option>
                      <option>Chhattisgarh (Raipur, Bilaspur...)</option>
                      <option>Uttar Pradesh (Kanpur, Agra, Jhansi...)</option>
                      <option>Other / National</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Device or Instrument of Interest *</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800">
                    <option>XIENCE Stents (Skypoint, Xpedition 48, Sierra, Alpine)</option>
                    <option>OCT (Optical Coherence Tomography) Dragonfly Catheters</option>
                    <option>FFR (PressureWire) Diagnostic Systems</option>
                    <option>COROFLOW Cardiovascular Microvascular System</option>
                    <option>TAVI Transcatheter Aortic Valve Systems</option>
                    <option>IMPELLA Heart Pump / Mechanical Circulatory Support</option>
                    <option>IABP PUMP Console & Balloon Catheters</option>
                    <option>Pocket ECG Ambulatory Arrhythmia Telemetry</option>
                    <option>SMP Cardiovascular & CABG Surgical Instrument Sets</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Urgency / Timeline</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800">
                    <option>Immediate (Emergency Cath Lab Procedure: 2-3 Hours)</option>
                    <option>Within 24-48 Hours</option>
                    <option>Within 1-2 Weeks</option>
                    <option>Monthly Hospital Consignment Contract</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-cyan-900 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Submit Quotation Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
