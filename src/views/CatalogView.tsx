import React, { useState, useMemo } from 'react';
import { Product, CardiologyCategory } from '../types/instruments';
import { ProductCard } from '../components/ProductCard';
import { filterProducts } from '../utils/rfq';
import { CATEGORIES, BRAND_FILTERS } from '../data/products';
import { Search, X, Filter, FileText, Sparkles, SlidersHorizontal, RefreshCw, HeartPulse, Send } from 'lucide-react';

interface CatalogViewProps {
  products: Product[];
  selectedCategoryFilter?: string;
  onOpenProductDetail: (product: Product, defaultTab?: 'overview' | 'inquiry') => void;
  onOpenPdf: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  isItemInRfq: (productId: string) => boolean;
  onOpenAiAssistant: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  selectedCategoryFilter,
  onOpenProductDetail,
  onOpenPdf,
  onAddToRfq,
  isItemInRfq,
  onOpenAiAssistant
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'All Categories');
  const [activeBrand, setActiveBrand] = useState<string>('All Brands');

  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      searchQuery,
      category: activeCategory,
      brand: activeBrand
    });
  }, [products, searchQuery, activeCategory, activeBrand]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All Categories');
    setActiveBrand('All Brands');
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    activeCategory !== 'All Categories' ||
    activeBrand !== 'All Brands';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Catalog Header & B2B Lead Notice */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1 flex items-center gap-1.5">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Cardiology & Surgical Instrumentation Portfolios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Medical Product Catalog
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Official B2B distributor catalog for <strong>XIENCE stents</strong> (Skypoint, Xpedition 48, Sierra, Alpine), <strong>OCT & FFR</strong> systems, <strong>CoroFlow</strong>, <strong>TAVI</strong>, <strong>Impella & IABP</strong>, <strong>Pocket ECG</strong>, and <strong>cardiovascular surgical sets</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenAiAssistant}
              className="px-3.5 py-2 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200/90 rounded-lg hover:bg-cyan-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>AI Spec Matcher</span>
            </button>
          </div>
        </div>

        {/* Notice of B2B Direct Inquiry Architecture */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">B2B Lead Generation Platform:</span>
            <span>No retail checkout. Direct inquiry contact form and PDF spec browser on each product for instant hospital quotation.</span>
          </span>
          <span className="text-emerald-800 font-semibold">
            Emergency Cath Lab Consignment · MP · CG · South Rajasthan · UP
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-xs space-y-4">
        {/* Top Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by product name, stent model (Skypoint, Xpedition 48, Sierra, Alpine), SKU, brand or clinical application..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50/80 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Secondary Filter Dropdowns & Category Buttons */}
        <div className="space-y-3">
          {/* Category Quick Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Brand Filter Row */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-semibold text-slate-500 mr-1">Brand Manufacturer:</span>
            <select
              value={activeBrand}
              onChange={(e) => setActiveBrand(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-800"
            >
              {BRAND_FILTERS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="ml-auto text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Catalog Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          Showing <span className="font-mono font-bold text-slate-900">{filteredProducts.length}</span> of{' '}
          <span className="font-mono">{products.length}</span> verified clinical products
        </div>
        <div className="hidden sm:block text-slate-400">
          Click any product to inspect specifications or trigger direct quotation
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-base">No Products Found Matching Criteria</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or resetting filters to browse all XIENCE stents, OCT/FFR systems, and surgical sets.
          </p>
          <button
            onClick={handleResetFilters}
            className="py-2 px-4 bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
      )}
    </div>
  );
};
