import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { FALLBACK_IMAGE } from '../data/products';
import { DirectInquiryForm } from './DirectInquiryForm';
import { X, FileText, Plus, Check, ShieldCheck, Award, Ruler, Sparkles, Layers, Truck, MapPin, Send } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: boolean;
  initialTab?: 'overview' | 'specs' | 'logistics' | 'inquiry';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenPdf,
  onAddToRfq,
  isItemInRfq,
  initialTab = 'overview'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'logistics' | 'inquiry'>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Header Strip */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-800 text-cyan-300 rounded border border-slate-700">
              {product.sku}
            </span>
            <div className="text-xs text-slate-300 hidden sm:flex items-center gap-2">
              <span className="font-semibold text-white">{product.brand}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{product.category}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Top Grid: Image + Quick Identity */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Box */}
            <div className="md:col-span-5 bg-slate-950/5 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] relative flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target && !target.src.includes('data:image')) {
                    target.src = FALLBACK_IMAGE;
                  }
                }}
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur-sm text-[11px] text-white px-2.5 py-1.5 rounded flex items-center justify-between">
                <span className="font-mono text-cyan-300 font-semibold">{product.brand.split(' ')[0]}</span>
                <span className="text-slate-300">{product.subcategory}</span>
              </div>
            </div>

            {/* Core Info & Actions */}
            <div className="md:col-span-7 space-y-4">
              <div>
                {/* Zero-Pill Unboxed Metadata Line */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1.5">
                  <span className="text-cyan-900 font-bold">{product.brand}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-slate-700">{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-semibold">{product.leadTime.split('/')[0]}</span>
                </div>

                <h1 id="product-modal-title" className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  {product.name}
                </h1>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 border border-slate-200/80 rounded-lg p-3">
                <div>
                  <span className="text-slate-500 block text-[11px]">Sizing / Profile</span>
                  <span className="font-semibold text-slate-900">{product.specs.profileOrSize}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Compatibility</span>
                  <span className="font-mono font-medium text-slate-900">{product.specs.compatibilityOrSheath}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Material / Coating</span>
                  <span className="font-medium text-slate-900">{product.specs.materialOrCoating}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">MRI Safety</span>
                  <span className="font-medium text-slate-900">{product.mriSafety}</span>
                </div>
              </div>

              {/* Action Buttons: PDF Spec Sheet + RFQ Tray + Quote Enquiry */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => onOpenPdf(product)}
                  className="flex-1 min-w-[150px] py-2 px-3 text-xs font-semibold text-cyan-950 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-700" />
                  <span>{product.pdfUrl ? 'Open Manufacturer PDF Spec' : 'Open PDF Spec Sheet'}</span>
                </button>

                <button
                  onClick={() => onAddToRfq(product)}
                  className={`flex-1 min-w-[150px] py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isItemInRfq
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                      : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isItemInRfq ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Item in RFQ Tray</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-slate-500" />
                      <span>Add to RFQ Tray</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('inquiry')}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Direct Quote Request</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-cyan-950 border-b-2 border-cyan-800'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Overview & Clinical Indications
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'specs'
                  ? 'text-cyan-950 border-b-2 border-cyan-800'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Technical Specifications & Sizing
            </button>
            <button
              onClick={() => setActiveTab('logistics')}
              className={`pb-3 text-xs font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'logistics'
                  ? 'text-cyan-950 border-b-2 border-cyan-800'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Territory Dispatch & Consignment
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className={`pb-3 text-xs font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'inquiry'
                  ? 'text-cyan-950 border-b-2 border-cyan-800'
                  : 'text-cyan-800 hover:text-cyan-950'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Direct Inquiry Form</span>
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs text-slate-700 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-2">
                  <h2 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-800" />
                    Key Engineering Highlights
                  </h2>
                  <ul className="space-y-1.5 pt-1">
                    {product.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-700 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-2">
                  <h2 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-800" />
                    Primary Clinical Applications
                  </h2>
                  <p className="leading-relaxed pt-1 text-slate-600">
                    {product.clinicalApplication}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">Regulatory Approvals</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.regulatoryStatus.map((reg, idx) => (
                        <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-[10px] font-medium text-slate-700">
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <h2 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-cyan-800" />
                    Device Engineering & Chemistry
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Authorized Manufacturer</span>
                      <span className="font-semibold text-slate-900">{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Subcategory / Line</span>
                      <span className="font-medium text-slate-900">{product.subcategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material / Chemistry</span>
                      <span className="text-slate-900">{product.specs.materialOrCoating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Sterilization Standard</span>
                      <span className="text-slate-900">{product.specs.shelfLifeOrSterility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">MRI Safety</span>
                      <span className="font-semibold text-emerald-800">{product.mriSafety}</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <h2 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-cyan-800" />
                    Dimensional & Sizing Matrix
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Profile / Available Sizes</span>
                      <span className="font-semibold text-slate-900">{product.specs.profileOrSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Catheter / Sheath Match</span>
                      <span className="font-mono text-slate-900">{product.specs.compatibilityOrSheath}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Packaging Type</span>
                      <span className="text-slate-900 truncate max-w-[200px]">{product.packaging}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Technical Data Sheet</span>
                      <span className="font-mono text-cyan-800 font-semibold">{product.pdfSpec.docNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logistics' && (
            <div className="space-y-4 text-xs animate-fade-in">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-800" />
                  <h2 className="font-bold text-slate-900 text-sm">SMP Surgitech Regional Cath Lab Delivery Network</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Permanent consigned stock and emergency backup consoles are stationed across our regional distribution hubs to guarantee uninterrupted cath lab and surgical operations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>South Rajasthan (Udaipur Regional Hub)</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Serving Udaipur, Dungarpur, Banswara, Pratapgarh, Rajsamand, Chittorgarh, and Bhilwara. Emergency delivery in 1 to 3 hours.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Madhya Pradesh (Indore & Bhopal Hubs)</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Serving Indore, Bhopal, Jabalpur, Gwalior, Ujjain, Sagar, and Rewa with 2 to 4 hour express dispatch.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Chhattisgarh (Raipur & Durg Hubs)</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Full state coverage including Raipur, Bilaspur, Durg-Bhilai, Korba, and Jagdalpur with dedicated cold-chain logging.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Uttar Pradesh (Agra/Kanpur Corridor)</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Dedicated technical specialists serving Kanpur, Agra, Jhansi, Prayagraj, and Varanasi cardiac institutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inquiry' && (
            <div className="animate-fade-in">
              <DirectInquiryForm product={product} compact={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
