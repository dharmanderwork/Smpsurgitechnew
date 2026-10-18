import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { DirectInquiryForm } from './DirectInquiryForm';
import { X, FileText, Plus, Check, ShieldCheck, Award, Ruler, Sparkles, Layers, RefreshCw } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: boolean;
  initialTab?: 'overview' | 'specs' | 'reprocessing' | 'inquiry';
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
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reprocessing' | 'inquiry'>(initialTab);

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
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-slate-800 text-cyan-300 rounded border border-slate-700">
              {product.sku}
            </span>
            <div className="text-xs text-slate-300 hidden sm:flex items-center gap-2">
              <span>{product.specialty}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{product.type}</span>
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
            <div className="md:col-span-5 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] relative flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm text-[11px] text-white px-2.5 py-1.5 rounded flex items-center justify-between">
                <span className="font-mono text-cyan-300">{product.metallurgy.surfaceFinish}</span>
                <span>{product.dimensions.totalLength}</span>
              </div>
            </div>

            {/* Core Info & Actions */}
            <div className="md:col-span-7 space-y-4">
              <div>
                {/* Zero-Pill Unboxed Metadata Line */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                  <span>{product.specialty}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-slate-700">{product.type}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-semibold">{product.leadTime}</span>
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
                  <span className="text-slate-500 block text-[11px]">Primary Metallurgy</span>
                  <span className="font-semibold text-slate-900">{product.alloy}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Hardness Rating</span>
                  <span className="font-mono font-bold text-slate-900">{product.metallurgy.rockwellHardness}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Working Tip / End</span>
                  <span className="font-medium text-slate-900">{product.dimensions.tipWidth}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Sterilization Standard</span>
                  <span className="font-medium text-slate-900">Autoclave 134°C</span>
                </div>
              </div>

              {/* Action Buttons: PDF Spec Sheet + RFQ Tray + Quote Enquiry */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => onOpenPdf(product)}
                  className="flex-1 min-w-[150px] py-2 px-3 text-xs font-semibold text-cyan-950 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-700" />
                  <span>Open PDF Spec Sheet</span>
                </button>

                <button
                  onClick={() => onAddToRfq(product)}
                  className={`flex-1 min-w-[150px] py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isItemInRfq
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {isItemInRfq ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Added to RFQ Tray</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-slate-600" />
                      <span>Add to RFQ Tray</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('inquiry')}
                  className="w-full sm:w-auto py-2 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-lg transition-colors cursor-pointer"
                >
                  Instant Quote Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex space-x-6 text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-slate-950 text-slate-950 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Clinical Applications & Features
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'specs'
                    ? 'border-slate-950 text-slate-950 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Metallurgical Specifications
              </button>
              <button
                onClick={() => setActiveTab('reprocessing')}
                className={`pb-2.5 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'reprocessing'
                    ? 'border-slate-950 text-slate-950 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                CSPD Reprocessing & Sterilization
              </button>
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`pb-2.5 border-b-2 transition-colors cursor-pointer text-cyan-800 font-bold ${
                  activeTab === 'inquiry'
                    ? 'border-cyan-800 text-cyan-950'
                    : 'border-transparent text-cyan-700 hover:text-cyan-900'
                }`}
              >
                Direct Inquiry Form
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-sm animate-fade-in">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Primary Surgical Indications
                </h2>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                  {product.clinicalApplication}
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Precision Engineering Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-700 mt-2 shrink-0" />
                      <span className="text-xs text-slate-700 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-700" />
                  ISO 13485:2016 Compliant
                </span>
                <span aria-hidden="true">·</span>
                <span>CE Class Ir MDR Certified</span>
                <span aria-hidden="true">·</span>
                <span>FDA Exempt (21 CFR Part 878)</span>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <h2 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-cyan-800" />
                    Metallurgical Properties
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Alloy Standard</span>
                      <span className="font-semibold text-slate-900">{product.alloy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Hardness (Rockwell)</span>
                      <span className="font-mono font-bold text-slate-900">{product.metallurgy.rockwellHardness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Surface Finish</span>
                      <span className="text-slate-900">{product.metallurgy.surfaceFinish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Magnetic Behavior</span>
                      <span className="text-slate-900">{product.metallurgy.magneticProperty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Passivation Test</span>
                      <span className="text-slate-900">{product.metallurgy.corrosionPassivation}</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                  <h2 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-cyan-800" />
                    Dimensional Tolerances
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Overall Length</span>
                      <span className="font-semibold text-slate-900">{product.dimensions.totalLength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tip / Working End</span>
                      <span className="font-semibold text-slate-900">{product.dimensions.tipWidth}</span>
                    </div>
                    {product.dimensions.curvature && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Curvature / Angle</span>
                        <span className="text-slate-900">{product.dimensions.curvature}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Unit Mass (Net)</span>
                      <span className="font-mono tabular-nums text-slate-900">{product.dimensions.weightGrams} g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Packaging Type</span>
                      <span className="text-slate-900 truncate max-w-[180px]">{product.packaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reprocessing' && (
            <div className="space-y-4 text-xs animate-fade-in">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-cyan-800" />
                  <h2 className="font-bold text-slate-900">Hospital Central Sterile Reprocessing Validation</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  SMP Surgitech instruments undergo rigorous validation according to DIN EN ISO 17664, AAMI ST79, and EN 285 standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[11px]">Recommended Steam Cycle</span>
                    <span className="font-bold text-slate-900">{product.reprocessing.autoclaveCycle}</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[11px]">Max Permissible Temperature</span>
                    <span className="font-bold text-slate-900">{product.reprocessing.maxTempCelsius}°C (280°F)</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[11px]">Validated Cleaning Chemistry</span>
                    <span className="font-medium text-slate-900">{product.reprocessing.compatibleCleaningChem}</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-slate-200 space-y-1">
                    <span className="text-slate-500 block text-[11px]">Chemical pH Operating Range</span>
                    <span className="font-bold text-slate-900">{product.reprocessing.cleaningPhRange}</span>
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
