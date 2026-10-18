import React from 'react';
import { Product } from '../types/instruments';
import { FileText, Send, Plus, Check, ShieldCheck, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product, defaultTab?: 'overview' | 'inquiry') => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isInRfq: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  onOpenPdf,
  onAddToRfq,
  isInRfq
}) => {
  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Visual Carrier */}
        <div 
          onClick={() => onOpenDetail(product)} 
          className="aspect-[16/10] bg-slate-100 overflow-hidden relative cursor-pointer border-b border-slate-100"
        >
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Quick SKU & Length Overlay */}
          <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300">
            {product.sku}
          </div>
          <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-medium text-slate-700">
            {product.dimensions.totalLength}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 space-y-3">
          {/* Zero-Pill Unboxed Metadata Line */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{product.specialty}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">{product.type}</span>
          </div>

          {/* Product Headline */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-display text-base font-bold text-slate-900 group-hover:text-cyan-900 transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Quick Metallurgical Spec Strip */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-500 block">Alloy Standard</span>
              <span className="font-medium text-slate-800 truncate block">{product.alloy}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Working Tip</span>
              <span className="font-semibold text-slate-900">{product.dimensions.tipWidth}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer: PDF Spec Sheet + Enquire for Quote */}
      <div className="p-4 bg-slate-50/70 border-t border-slate-100 space-y-2">
        <div className="flex items-center gap-2">
          {/* PDF Spec Browser Trigger */}
          <button
            onClick={() => onOpenPdf(product)}
            className="flex-1 py-1.5 px-2.5 text-xs font-semibold text-cyan-950 bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Browse full PDF technical data sheet"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-800" />
            <span>PDF Spec</span>
          </button>

          {/* Fast RFQ Tray Toggle */}
          <button
            onClick={() => onAddToRfq(product)}
            className={`py-1.5 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
              isInRfq
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title={isInRfq ? 'In RFQ Tray' : 'Add to consolidated quote request'}
            aria-label={isInRfq ? `Item ${product.sku} is in RFQ Tray` : `Add ${product.sku} to RFQ Tray`}
          >
            {isInRfq ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Plus className="w-3.5 h-3.5 text-slate-500" />}
            <span className="hidden sm:inline">{isInRfq ? 'Added' : 'Tray'}</span>
          </button>
        </div>

        {/* Primary Direct Quote Enquiry Button */}
        <button
          onClick={() => onOpenDetail(product, 'inquiry')}
          className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <Send className="w-3 h-3 text-cyan-300" />
          <span>Enquire for Quote</span>
          <ChevronRight className="w-3 h-3 ml-auto opacity-70" />
        </button>
      </div>
    </article>
  );
};
