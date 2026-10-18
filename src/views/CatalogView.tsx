import React, { useState, useMemo } from 'react';
import { Product, SurgicalSpecialty } from '../types/instruments';
import { ProductCard } from '../components/ProductCard';
import { filterProducts } from '../utils/rfq';
import { SPECIALTIES, INSTRUMENT_TYPES, ALLOY_GRADES } from '../data/products';
import { Search, X, Filter, FileText, Sparkles, SlidersHorizontal, RefreshCw } from 'lucide-react';

interface CatalogViewProps {
  products: Product[];
  selectedSpecialtyFilter?: string;
  onOpenProductDetail: (product: Product, defaultTab?: 'overview' | 'inquiry') => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: (productId: string) => boolean;
  onOpenAiAssistant: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  selectedSpecialtyFilter,
  onOpenProductDetail,
  onOpenPdf,
  onAddToRfq,
  isItemInRfq,
  onOpenAiAssistant
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState<string>(selectedSpecialtyFilter || 'All Specialties');
  const [activeType, setActiveType] = useState<string>('All Types');
  const [activeAlloy, setActiveAlloy] = useState<string>('All Alloys');

  React.useEffect(() => {
    if (selectedSpecialtyFilter) {
      setActiveSpecialty(selectedSpecialtyFilter);
    }
  }, [selectedSpecialtyFilter]);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      searchQuery,
      specialty: activeSpecialty,
      instrumentType: activeType,
      alloy: activeAlloy
    });
  }, [products, searchQuery, activeSpecialty, activeType, activeAlloy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveSpecialty('All Specialties');
    setActiveType('All Types');
    setActiveAlloy('All Alloys');
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    activeSpecialty !== 'All Specialties' ||
    activeType !== 'All Types' ||
    activeAlloy !== 'All Alloys';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Catalog Header & B2B Lead Notice */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
              Institutional Product Portfolios
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Surgical Instruments Catalog
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Precision surgical instruments manufactured to German DIN and ISO 13485 standards. Browse full technical specifications, inspect interactive PDF data sheets, or request tailored institutional quotations.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenAiAssistant}
              className="px-3.5 py-2 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200/90 rounded-lg hover:bg-cyan-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>AI Surgical Spec Matcher</span>
            </button>
          </div>
        </div>

        {/* Notice of B2B Direct Inquiry Architecture */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">B2B Institutional Quoting:</span>
            <span>No retail checkout. Direct hospital quote forms on every product for immediate lead capture.</span>
          </span>
          <span className="text-cyan-800 font-medium">
            Tender Net-30 Terms & Consignment Available
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        {/* Search Input Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by instrument name, SKU (e.g. SMP-CV-4012), specialty, alloy, or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Select Dropdowns for Type & Alloy */}
          <div className="flex gap-2">
            <select
              value={activeType}
              onChange={(e) => setActiveType(e.target.value)}
              className="px-3 py-2 text-xs font-medium border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            >
              {INSTRUMENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              value={activeAlloy}
              onChange={(e) => setActiveAlloy(e.target.value)}
              className="px-3 py-2 text-xs font-medium border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-800 max-w-[180px] truncate"
            >
              {ALLOY_GRADES.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Specialty Filter Tabs (Interactive Segmented Control Buttons) */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Specialty:
          </span>
          {SPECIALTIES.map((spec) => {
            const isSelected = activeSpecialty === spec;
            return (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {spec}
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="ml-auto text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-600">
        <div>
          <span>Showing </span>
          <strong className="text-slate-950 font-bold tabular-nums">{filteredProducts.length}</strong>
          <span> instruments</span>
          {hasActiveFilters && <span> matching your current filters</span>}
        </div>
        <div className="text-slate-500 hidden sm:block">
          Click any instrument to view full metallurgical tolerances or direct RFQ form
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
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
      ) : (
        /* Empty Filter State */
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">
              No instruments match your specific filter criteria
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try broadening your search terms, changing the surgical specialty, or resetting the metallurgy filter.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="py-2 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Catalog Bottom CTA Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold font-display">
            Require custom instrument forging or a specialty surgery tray configuration?
          </h3>
          <p className="text-xs text-slate-400">
            Our engineering laboratory fabricates customized prototypes and tailored modular sterilization sets.
          </p>
        </div>
        <button
          onClick={onOpenAiAssistant}
          className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>Consult Clinical Spec Advisor</span>
        </button>
      </div>
    </div>
  );
};
