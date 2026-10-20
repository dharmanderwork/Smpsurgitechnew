import React, { useState, useEffect } from 'react';
import { Product } from '../types/instruments';
import { FALLBACK_IMAGE } from '../data/products';
import { DirectInquiryForm } from '../components/DirectInquiryForm';
import { 
  ArrowLeft, 
  FileText, 
  Check, 
  Plus, 
  ShieldCheck, 
  Award, 
  Clock, 
  Truck, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Phone, 
  CheckCircle2, 
  Share2, 
  Layers, 
  AlertCircle,
  Building2,
  ExternalLink,
  ShoppingCart
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onNavigate: (view: string, categoryFilter?: string) => void;
  onOpenProductDetail: (product: Product, defaultTab?: 'overview' | 'inquiry') => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: (productId: string) => boolean;
  initialTab?: 'overview' | 'specs' | 'logistics' | 'inquiry';
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onNavigate,
  onOpenProductDetail,
  onOpenPdf,
  onAddToRfq,
  isItemInRfq,
  initialTab = 'overview'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'logistics' | 'inquiry'>(initialTab);
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab, product.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleAddMultipleToRfq = () => {
    for (let i = 0; i < orderQuantity; i++) {
      onAddToRfq(product);
    }
  };

  // Find 3 related products
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 3);

  const inRfq = isItemInRfq(product.id);

  // Extract specs from PDF spec sheet if available
  const specSections = product.pdfSpec?.pages[0]?.sections || [];
  const primarySpecsTable = specSections.find((s) => s.specs && s.specs.length > 0)?.specs || [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* 1. TOP BREADCRUMB & CONTEXT BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumb Links */}
          <div className="flex items-center gap-1.5 text-slate-500 overflow-x-auto py-0.5 scrollbar-none">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </button>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <button
              onClick={() => onNavigate('catalog')}
              className="hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              Catalog
            </button>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <button
              onClick={() => onNavigate('catalog', product.category)}
              className="hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap truncate max-w-[140px] sm:max-w-[220px]"
            >
              {product.category}
            </button>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="font-semibold text-slate-900 font-mono">{product.sku}</span>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('catalog')}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium px-2.5 py-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Share product link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN PRODUCT HERO & SPEC SHEET GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: PRODUCT MEDIA & PROCUREMENT CARD (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            {/* High-Resolution Product Showcase Frame */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-4 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center group">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target && !target.src.includes('data:image')) {
                      target.src = FALLBACK_IMAGE;
                    }
                  }}
                />

                {/* Badges inside visual */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-mono font-bold text-cyan-300 border border-slate-800">
                  {product.sku}
                </div>

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200">
                  {product.brand.split(' ')[0]}
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md text-[11px] text-white px-3 py-2 rounded-lg flex items-center justify-between border border-slate-800/80">
                  <span className="font-semibold text-slate-200 truncate">{product.subcategory}</span>
                  <span className="text-cyan-400 font-mono text-[10px] shrink-0 ml-2">100% Authentic OEM</span>
                </div>
              </div>

              {/* Regulatory Assurance Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  CDSCO & US FDA Approved
                </span>
                <span className="font-mono text-slate-600">ISO 13485:2016 Certified</span>
              </div>
            </div>

            {/* Quick Procurement & Consignment Action Box */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
              {/* In-Stock & Dispatch SLA */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-emerald-950">In Stock for Immediate Delivery</span>
                </div>
                <span className="font-semibold text-emerald-800 font-mono">&lt; 2-3 Hrs SLA</span>
              </div>

              {/* Quantity Selector + Add to RFQ */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">Procurement Quantity:</span>
                  <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setOrderQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={999}
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center text-xs font-semibold py-1 bg-white border-x border-slate-300 focus:outline-none"
                    />
                    <button
                      onClick={() => setOrderQuantity((q) => q + 1)}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-200 font-bold transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Primary Add to Cart Button */}
                <button
                  onClick={handleAddMultipleToRfq}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    inRfq
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                      : 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-cyan-900/20'
                  }`}
                >
                  {inRfq ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>In Cart (Click to add {orderQuantity} more)</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart ({orderQuantity} units)</span>
                    </>
                  )}
                </button>

                {/* Secondary Action: Interactive PDF Spec */}
                <button
                  onClick={() => onOpenPdf(product)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span>Open Interactive PDF Spec Sheet</span>
                </button>
              </div>

              {/* 24x7 Cath Lab Hotline Hotline */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Cath Lab Consignment Desk:</span>
                </span>
                <a 
                  href="tel:+919414088210" 
                  className="font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                >
                  +91 94140 88210
                </a>
              </div>
            </div>

            {/* Quick Technical Specs Snapshot Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-3">
              <h3 className="font-display font-bold text-sm text-slate-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-700" />
                <span>Technical Identity Snapshot</span>
              </h3>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">Profile / Sizing</span>
                  <span className="font-semibold text-slate-900 text-right">{product.specs.profileOrSize}</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">Compatibility</span>
                  <span className="font-mono font-medium text-slate-800 text-right">{product.specs.compatibilityOrSheath}</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">Material / Alloy</span>
                  <span className="font-medium text-slate-800 text-right">{product.specs.materialOrCoating}</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">Sterilization / Shelf Life</span>
                  <span className="font-medium text-slate-800 text-right">{product.specs.shelfLifeOrSterility}</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">MRI Safety</span>
                  <span className="font-semibold text-cyan-900 text-right">{product.mriSafety}</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500">Hospital Packaging</span>
                  <span className="font-medium text-slate-800 text-right truncate max-w-[200px]" title={product.packaging}>
                    {product.packaging}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EXPANSIVE PRODUCT DETAILS, SPECS, LOGISTICS & INQUIRY (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Title & Brand Header Section */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-cyan-900 uppercase tracking-wide">{product.brand}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-slate-600">{product.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">{product.leadTime.split('/')[0]}</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                {product.shortDesc}
              </p>

              {/* Regulatory Certification Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {product.regulatoryStatus.map((reg, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{reg}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* TABBED INTERACTION SUITE */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
              {/* Tab Navigation Strip */}
              <div className="flex items-center border-b border-slate-200 bg-slate-50/70 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-cyan-600 text-cyan-900 bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Award className="w-4 h-4 text-cyan-700" />
                  <span>Clinical Overview</span>
                </button>

                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border-b-2 ${
                    activeTab === 'specs'
                      ? 'border-cyan-600 text-cyan-900 bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-4 h-4 text-cyan-700" />
                  <span>Technical & Sizing Specs</span>
                </button>

                <button
                  onClick={() => setActiveTab('logistics')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border-b-2 ${
                    activeTab === 'logistics'
                      ? 'border-cyan-600 text-cyan-900 bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Truck className="w-4 h-4 text-cyan-700" />
                  <span>Hospital Consignment SLA</span>
                </button>

                <button
                  onClick={() => setActiveTab('inquiry')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border-b-2 ${
                    activeTab === 'inquiry'
                      ? 'border-cyan-600 text-cyan-900 bg-white'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-cyan-700" />
                  <span>Institutional Inquiry</span>
                </button>
              </div>

              {/* Tab Content Panes */}
              <div className="p-6 sm:p-8">
                {/* TAB 1: OVERVIEW & CLINICAL APPLICATIONS */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Primary Clinical Application Box */}
                    <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-100 space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-700" />
                        <span>Primary Clinical Application</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-cyan-950 font-medium leading-relaxed">
                        {product.clinicalApplication}
                      </p>
                    </div>

                    {/* Key Engineered Features */}
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-base text-slate-950">
                        Key Engineered Specifications & Advantages
                      </h3>
                      <ul className="space-y-2.5">
                        {product.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quality & Traceability Statement */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <div className="font-bold text-slate-900">Hospital Central Sterile & Consignment Assurance:</div>
                      <p className="text-slate-600 leading-relaxed">
                        All instruments and medical devices distributed by SMP Surgitech undergo double-barrier packaging verification, barcode logging, and individual lot traceability into hospital procurement registries. Pre-vacuum steam autoclave compatible where applicable.
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 2: TECHNICAL & SIZING SPECS */}
                {activeTab === 'specs' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-950 mb-1">
                        Mechanical Architecture & Tolerance Table
                      </h3>
                      <p className="text-xs text-slate-500">
                        Specifications calibrated in accordance with ISO 25539 / ASTM international medical standards.
                      </p>
                    </div>

                    {/* Parameters Table */}
                    {primarySpecsTable.length > 0 ? (
                      <div className="border border-slate-200 rounded-xl overflow-hidden overflow-x-auto">
                        <table className="w-full text-left text-xs divide-y divide-slate-200">
                          <thead className="bg-slate-50 text-slate-700 font-bold">
                            <tr>
                              <th className="py-2.5 px-3">Parameter</th>
                              <th className="py-2.5 px-3">Nominal Value</th>
                              <th className="py-2.5 px-3">Tolerance / Limit</th>
                              <th className="py-2.5 px-3">Test Standard</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {primarySpecsTable.map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                                <td className="py-2.5 px-3 font-semibold text-slate-900">{row.parameter}</td>
                                <td className="py-2.5 px-3 font-mono font-medium text-cyan-900">{row.nominal}</td>
                                <td className="py-2.5 px-3 text-slate-600">{row.tolerance}</td>
                                <td className="py-2.5 px-3 text-slate-500 font-mono text-[11px]">{row.standard}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                        Detailed dimensional matrix: {product.specs.profileOrSize}. Comprehensive technical data sheet is available via the PDF viewer.
                      </div>
                    )}

                    {/* Sizing & Handling Matrix Highlights */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-display font-bold text-sm text-slate-900">
                        Cath Lab Dimensional Matrix
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-[10px] uppercase font-bold text-slate-500 block">Sizing Profiles</span>
                          <span className="font-semibold text-slate-900 block mt-1">{product.specs.profileOrSize}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-[10px] uppercase font-bold text-slate-500 block">Catheter / Sheath Guide</span>
                          <span className="font-semibold text-slate-900 block mt-1">{product.specs.compatibilityOrSheath}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => onOpenPdf(product)}
                        className="text-xs font-bold text-cyan-900 hover:text-cyan-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-cyan-800" />
                        <span>Launch Full Multi-Page PDF Technical Spec Sheet</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 3: HOSPITAL CONSIGNMENT & LOGISTICS */}
                {activeTab === 'logistics' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-950 mb-1">
                        Consignment Terms & Emergency Dispatch SLA
                      </h3>
                      <p className="text-xs text-slate-500">
                        SMP Surgitech guarantees unbroken cold-chain compliance and same-day delivery to hospital cardiac suites.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cyan-600" />
                          <span>Emergency Response SLA</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          2 to 4 hours emergency dispatch across Madhya Pradesh (Indore, Bhopal), Chhattisgarh (Raipur), South Rajasthan (Udaipur, Bhilwara), and Southern UP.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Cold-Chain & Sterility</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          Stored at controlled temperatures (15°C to 25°C). Temperature datalogger verification on all sensitive drug-eluting platforms.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-indigo-600" />
                          <span>Hospital Consignment Terms</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          Permanent hospital cabinet placement with monthly consumption reconciliation, Net-30 payment terms, and zero restocking fees.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-rose-600" />
                          <span>Regional Hubs</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          Direct warehouses in Udaipur (Rajasthan HQ), Indore (MP Hub), and Raipur (CG Hub) with 24x7 standby logistics teams.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950 text-white text-xs flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-cyan-300 block">Emergency Cath Lab Dispatch Hotline</span>
                        <span className="text-slate-300 text-[11px]">Instant courier mobilization for acute angioplasty or circulatory failure</span>
                      </div>
                      <a
                        href="tel:+919414088210"
                        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors"
                      >
                        Call: +91 94140 88210
                      </a>
                    </div>
                  </div>
                )}

                {/* TAB 4: DIRECT INSTITUTIONAL INQUIRY FORM */}
                {activeTab === 'inquiry' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-950 mb-1">
                        Request Institutional Quotation for {product.sku}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Submit a quotation or tender inquiry directly to SMP Surgitech procurement desk. Responses issued within 2 business hours.
                      </p>
                    </div>

                    {/* Embedded Direct Inquiry Form */}
                    <DirectInquiryForm
                      product={product}
                      onSuccess={() => {
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. RELATED PRODUCTS / COMPLEMENTARY SUITE */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                  Complementary Instruments & Systems
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Frequently paired with {product.name} in clinical catheterization and surgical workflows.
                </p>
              </div>

              <button
                onClick={() => onNavigate('catalog', product.category)}
                className="text-xs font-bold text-cyan-900 hover:text-cyan-700 flex items-center gap-1 cursor-pointer"
              >
                <span>View Full {product.category}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onOpenProductDetail(rel)}
                  className="bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all p-4 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-900/5 relative">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target && !target.src.includes('data:image')) {
                            target.src = FALLBACK_IMAGE;
                          }
                        }}
                      />
                      <div className="absolute top-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300">
                        {rel.sku}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 font-semibold">{rel.brand}</div>
                    <h4 className="font-display font-bold text-sm text-slate-950 group-hover:text-cyan-900 transition-colors line-clamp-2">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDesc}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-900">
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. MOBILE STICKY ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 lg:hidden flex items-center justify-between gap-3 z-40 shadow-lg">
        <div className="min-w-0">
          <div className="font-mono text-xs font-bold text-slate-900 truncate">{product.sku}</div>
          <div className="text-[11px] text-emerald-700 font-semibold">Immediate Dispatch</div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onAddToRfq(product)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
              inRfq
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-cyan-600 text-white hover:bg-cyan-500'
            }`}
          >
            {inRfq ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            <span>{inRfq ? 'In RFQ' : 'Add to RFQ'}</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiry')}
            className="px-3 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
