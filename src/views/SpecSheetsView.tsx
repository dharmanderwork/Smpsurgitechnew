import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { FileText, Download, Search, Shield, Eye, Send, ArrowRight, HeartPulse } from 'lucide-react';

interface SpecSheetsViewProps {
  products: Product[];
  onOpenPdf: (product: Product) => void;
  onOpenProductDetail: (product: Product, tab?: 'overview' | 'inquiry') => void;
}

export const SpecSheetsView: React.FC<SpecSheetsViewProps> = ({
  products,
  onOpenPdf,
  onOpenProductDetail
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.pdfSpec.docNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Biomedical & Cath Lab Engineering Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Technical PDF Spec Sheets & Clinical Dossiers
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Access validated engineering data sheets, dimensional sizing charts, balloon compliance matrices, and regulatory clearances for all cardiology and surgical products.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search by document number, product name, SKU or brand (e.g. XIENCE, OCT, CoroFlow, Impella, Abbott)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-sm outline-none placeholder:text-slate-400"
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')} className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer">
            Clear
          </button>
        )}
      </div>

      {/* Spec Sheets Table / List */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Document Number</th>
                <th className="py-3 px-4">Product & SKU</th>
                <th className="py-3 px-4">Authorized Brand</th>
                <th className="py-3 px-4">Sizing / Profile</th>
                <th className="py-3 px-4">Revision Date</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-cyan-950 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-red-100 text-red-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                        PDF
                      </span>
                      <span>{prod.pdfSpec.docNumber}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-900 line-clamp-1">{prod.name}</div>
                    <div className="font-mono text-slate-500 text-[11px]">{prod.sku}</div>
                  </td>
                  <td className="py-3 px-4 text-cyan-900 font-semibold whitespace-nowrap">
                    {prod.brand}
                  </td>
                  <td className="py-3 px-4 text-slate-600 max-w-[180px] truncate">
                    {prod.specs.profileOrSize}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">
                    {prod.pdfSpec.effectiveDate}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap space-x-2">
                    <button
                      onClick={() => onOpenPdf(prod)}
                      className="px-3 py-1.5 text-xs font-semibold text-cyan-900 bg-cyan-50 hover:bg-cyan-100 rounded-md border border-cyan-200 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View PDF Spec</span>
                    </button>
                    <button
                      onClick={() => onOpenProductDetail(prod, 'inquiry')}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-md transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Send className="w-3 h-3 text-cyan-300" />
                      <span>Quote</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
