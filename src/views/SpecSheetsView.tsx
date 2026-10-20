import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { OFFICIAL_MANUFACTURER_PDFS, OfficialPdfItem } from '../data/products';
import { FileText, Download, Search, Shield, Eye, Send, ArrowRight, HeartPulse, FileCheck, ExternalLink, Check } from 'lucide-react';

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
  const [activePdfModal, setActivePdfModal] = useState<OfficialPdfItem | null>(null);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.pdfSpec.docNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPdfs = OFFICIAL_MANUFACTURER_PDFS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.docCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Biomedical & Cath Lab Engineering Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Product PDF Specs & Clinical Dossiers
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Access and download official manufacturer clinical brochures, engineering data sheets, dimensional sizing charts, and regulatory clearances for all cardiology and surgical products.
        </p>
      </div>

      {/* Global Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Search by document number, product name, brand or catheter type (e.g. XIENCE, Impella, GuideLiner, IABP, Teleflex, Turnpike)..."
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

      {/* SECTION 1: Official Manufacturer PDF Dossiers & Brochures (The user's uploaded PDFs) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
              <span>Available Manufacturer PDF Spec Sheets & Brochures</span>
            </h2>
            <p className="text-xs text-slate-500">
              Direct official clinical dossiers and catheters technical brochures supplied by manufacturer principals.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200 self-start sm:self-auto">
            {filteredPdfs.length} Official Documents
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPdfs.map((pdfItem) => {
            const matchingProduct = products.find((p) => p.id === pdfItem.matchingProductId);
            return (
              <div 
                key={pdfItem.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-cyan-500 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded">
                      {pdfItem.docCode}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {pdfItem.fileSize} · PDF
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wide block">
                      {pdfItem.brand}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-cyan-900 transition-colors line-clamp-2">
                      {pdfItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {pdfItem.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={pdfItem.fileUrl}
                      download={pdfItem.fileName}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-cyan-900 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
                      title="Download PDF directly to computer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>

                    <a
                      href={pdfItem.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-lg transition-colors cursor-pointer"
                      title="Open in new browser tab"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span className="hidden sm:inline">Open</span>
                    </a>
                  </div>

                  {matchingProduct && (
                    <button
                      onClick={() => onOpenPdf(matchingProduct)}
                      className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Viewer</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: Complete Interactive Products Specification Registry */}
      <div className="space-y-4 pt-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-lg font-bold text-slate-950 font-display flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span>Interactive Engineering Data Sheets (By Catalog SKU)</span>
          </h2>
          <p className="text-xs text-slate-500">
            Structured tolerances, materials, strut dimensions, and CDSCO/FDA compliance records for each product SKU.
          </p>
        </div>

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
                {filteredProducts.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-cyan-950 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-red-100 text-red-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                          PDF
                        </span>
                        <div>
                          <div>{prod.pdfSpec.docNumber}</div>
                          {prod.pdfUrl && (
                            <span className="text-[10px] text-emerald-700 font-sans font-semibold flex items-center gap-1">
                              ✓ Official PDF
                            </span>
                          )}
                        </div>
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
                        <span>View PDF</span>
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
    </div>
  );
};
