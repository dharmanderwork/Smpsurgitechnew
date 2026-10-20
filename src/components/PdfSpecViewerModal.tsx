import React, { useState } from 'react';
import { Product, PdfDocument } from '../types/instruments';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  ExternalLink, 
  Shield, 
  FileCheck, 
  Send, 
  Check, 
  FileText,
  Layers
} from 'lucide-react';

interface PdfSpecViewerModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const PdfSpecViewerModal: React.FC<PdfSpecViewerModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuote
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [viewMode, setViewMode] = useState<'official-pdf' | 'spec-sheet'>('official-pdf');

  // Reset page & set initial tab when product changes
  React.useEffect(() => {
    setCurrentPage(1);
    setZoomLevel(100);
    if (product?.pdfUrl) {
      setViewMode('official-pdf');
    } else {
      setViewMode('spec-sheet');
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const pdf: PdfDocument = product.pdfSpec || {
    docNumber: `TDS-${product.sku}`,
    revision: 'Rev 1.0',
    effectiveDate: '2026-01-01',
    totalPages: 1,
    pages: [
      {
        pageNumber: 1,
        title: product.name,
        subtitle: `${product.brand} · ${product.category}`,
        sections: [
          {
            heading: '1.0 Clinical Overview & Application',
            text: product.clinicalApplication,
            bulletPoints: product.keyFeatures
          },
          {
            heading: '2.0 Technical Specifications',
            text: product.shortDesc,
            specs: [
              { parameter: 'Profile / Size', nominal: product.specs.profileOrSize, tolerance: 'Standard', standard: 'Manufacturer IFU' },
              { parameter: 'Compatibility / Sheath', nominal: product.specs.compatibilityOrSheath, tolerance: 'Nominal', standard: 'ISO 10555' },
              { parameter: 'Material / Coating', nominal: product.specs.materialOrCoating, tolerance: 'Compliant', standard: 'USP Class VI' },
              { parameter: 'Sterilization / Shelf Life', nominal: product.specs.shelfLifeOrSterility, tolerance: 'Sterile EO', standard: 'ISO 11135' }
            ]
          }
        ]
      }
    ]
  };
  const activePageData = pdf.pages.find((p) => p.pageNumber === currentPage) || pdf.pages[0];

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(150, Math.max(75, prev + delta)));
  };

  const handleDownloadTxtSpec = () => {
    setDownloadSuccess(true);
    const content = `SMP SURGITECH · PRECISION CARDIOLOGY & SURGICAL SPECIFICATION
=======================================================
Document No: ${pdf.docNumber}
Revision: ${pdf.revision} | Date: ${pdf.effectiveDate}
Product: ${product.name}
SKU: ${product.sku}
Brand: ${product.brand}
Category: ${product.category}
Subcategory: ${product.subcategory}
Profile / Sizing: ${product.specs.profileOrSize}
Catheter / Sheath Compatibility: ${product.specs.compatibilityOrSheath}
Material / Chemistry: ${product.specs.materialOrCoating}
Sterilization & Shelf Life: ${product.specs.shelfLifeOrSterility}
MRI Safety: ${product.mriSafety}
Regulatory Clearances: ${product.regulatoryStatus.join(', ')}

CLINICAL APPLICATION & INDICATIONS:
${product.clinicalApplication}

KEY ENGINEERING HIGHLIGHTS:
${product.keyFeatures.map((f, i) => `${i + 1}. ${f}`).join('\n')}

=======================================================
CONFIDENTIAL HEALTHCARE PROCUREMENT SPECIFICATION
SMP Surgitech · Central & Western India Cardiology Logistics Hub
Inquiries: procurement@smpsurgitech.com | +91 94140 88210
=======================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.sku}_Technical_Spec_Sheet.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-viewer-title"
      >
        {/* PDF Browser Toolbar */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-slate-300">
          {/* Document Title & SKU */}
          <div className="flex items-center gap-3">
            <span className="bg-cyan-950 text-cyan-300 font-mono text-xs px-2.5 py-1 rounded border border-cyan-800/80 font-bold">
              PDF SPEC
            </span>
            <div>
              <h2 id="pdf-viewer-title" className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
                {product.name}
              </h2>
              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
                <span>{pdf.docNumber}</span>
                <span>·</span>
                <span>{product.brand}</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher Tabs (if product has an authentic PDF) */}
          {product.pdfUrl && (
            <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('official-pdf')}
                className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'official-pdf'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Manufacturer PDF</span>
              </button>
              <button
                onClick={() => setViewMode('spec-sheet')}
                className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'spec-sheet'
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Engineering Data</span>
              </button>
            </div>
          )}

          {/* Actions & Navigation Controls */}
          <div className="flex items-center gap-2 text-xs">
            {viewMode === 'spec-sheet' && (
              <>
                {/* Page Paging Controls */}
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-slate-200">
                    {currentPage} / {pdf.totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(pdf.totalPages, p + 1))}
                    disabled={currentPage === pdf.totalPages}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center bg-slate-900 border border-slate-700 rounded-lg px-1.5 py-1 gap-1">
                  <button
                    onClick={() => handleZoom(-10)}
                    className="p-1 text-slate-400 hover:text-white cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[11px] text-slate-300 min-w-[32px] text-center">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={() => handleZoom(10)}
                    className="p-1 text-slate-400 hover:text-white cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            )}

            {/* Direct Official PDF Download or Spec Download */}
            {product.pdfUrl ? (
              <div className="flex items-center gap-1.5">
                <a
                  href={product.pdfUrl}
                  download={product.pdfFileName || `${product.sku}_Brochure.pdf`}
                  className="py-1 px-3 bg-cyan-700 hover:bg-cyan-600 text-white font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer text-xs shadow-xs"
                  title="Download Manufacturer PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={product.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 flex items-center gap-1 transition-colors text-xs"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>
              </div>
            ) : (
              <button
                onClick={handleDownloadTxtSpec}
                className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
                title="Download Technical Spec Sheet"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Saved</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download</span>
                  </>
                )}
              </button>
            )}

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Either Embedded Official PDF or Structured Spec Sheet */}
        {viewMode === 'official-pdf' && product.pdfUrl ? (
          <div className="flex-1 bg-slate-950 flex flex-col overflow-hidden relative">
            <iframe
              src={`${product.pdfUrl}#toolbar=1&navpanes=0`}
              title={`${product.name} Official Spec Sheet PDF`}
              className="w-full h-full flex-1 border-0 bg-slate-900"
            />
          </div>
        ) : (
          /* Structured Technical Spec Sheet Canvas */
          <div className="flex-1 bg-slate-950/90 overflow-auto p-4 sm:p-8 flex justify-center items-start">
            <div 
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="w-full max-w-[850px] bg-white text-slate-900 shadow-2xl rounded-sm border border-slate-300 transition-transform duration-200 min-h-[900px] p-8 sm:p-12 relative flex flex-col justify-between"
            >
              {/* Top Formal Letterhead Header */}
              <div>
                <div className="flex justify-between items-start border-b-2 border-slate-900 pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-950">
                        SMP SURGITECH
                      </span>
                      <span className="bg-slate-900 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded font-bold">
                        CARDIOLOGY & SURGICAL
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-sans tracking-wide mt-0.5">
                      Authorized Medical Device Distributor · MP · Chhattisgarh · South Rajasthan · Uttar Pradesh
                    </p>
                  </div>

                  <div className="text-right font-mono text-[10px] text-slate-600 space-y-0.5">
                    <div className="font-bold text-slate-900">DOC: {pdf.docNumber}</div>
                    <div>REV: {pdf.revision} · {pdf.effectiveDate}</div>
                    <div className="text-cyan-800 font-semibold">PAGE {currentPage} OF {pdf.totalPages}</div>
                  </div>
                </div>

                {/* Page Title & Subtitle */}
                <div className="mb-6">
                  <h1 className="text-lg sm:text-xl font-bold font-display text-slate-950">
                    {activePageData.title}
                  </h1>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    {activePageData.subtitle}
                  </p>
                </div>

                {/* Key Instrument Metadata Strip */}
                <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Authorized Brand</span>
                    <span className="font-bold text-slate-900">{product.brand}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Catalog SKU</span>
                    <span className="font-mono font-bold text-cyan-900">{product.sku}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Sizing / Profile</span>
                    <span className="font-medium text-slate-900 truncate block">{product.specs.profileOrSize}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Regulatory Status</span>
                    <span className="font-semibold text-emerald-800">{product.regulatoryStatus[0] || 'Approved'}</span>
                  </div>
                </div>

                {/* Page Content Sections */}
                <div className="space-y-6">
                  {activePageData.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h2 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1">
                        {section.heading}
                      </h2>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {section.text}
                      </p>

                      {/* Technical Tolerances Table if present */}
                      {section.specs && section.specs.length > 0 && (
                        <div className="mt-3 overflow-hidden border border-slate-200 rounded text-xs">
                          <table className="w-full text-left">
                            <thead className="bg-slate-100 text-slate-800 text-[11px] font-semibold border-b border-slate-200">
                              <tr>
                                <th className="py-2 px-3">Parameter</th>
                                <th className="py-2 px-3">Nominal Value</th>
                                <th className="py-2 px-3">Tolerance Limit</th>
                                <th className="py-2 px-3">Standard / Test Method</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                              {section.specs.map((spec, sIdx) => (
                                <tr key={sIdx} className={sIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                                  <td className="py-1.5 px-3 font-sans font-medium text-slate-900">{spec.parameter}</td>
                                  <td className="py-1.5 px-3 font-semibold text-slate-800">{spec.nominal}</td>
                                  <td className="py-1.5 px-3 text-slate-600">{spec.tolerance}</td>
                                  <td className="py-1.5 px-3 text-slate-600">{spec.standard}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Bullet Points if present */}
                      {section.bulletPoints && section.bulletPoints.length > 0 && (
                        <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                          {section.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-cyan-800 font-bold">✓</span>
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Formal Technical Sheet Footer */}
              <div className="pt-8 mt-12 border-t border-slate-200 flex flex-wrap justify-between items-end text-[10px] text-slate-500 font-mono gap-4">
                <div>
                  <div className="font-bold text-slate-700 uppercase">SMP Surgitech Distribution Assurance</div>
                  <div>Cold-Chain Storage & Tamper-Evident Hospital Consignment</div>
                  <div>Authorized Channel Partner for Abbott, Cordis, Teleflex, St. Jude Medical, J&J MedTech & Pocket ECG</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-emerald-800 font-sans font-semibold">
                    <Shield className="w-3 h-3 text-emerald-600" />
                    <span>ISO 13485:2016 Audited & CDSCO Licensed</span>
                  </div>
                  <div>Territory Warehouses: Udaipur · Indore · Raipur · Agra</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Action Strip */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Official Technical Data Document</span>
            <span className="font-mono text-cyan-300">[{product.sku}]</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="py-1.5 px-4 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire for Quote on this Model</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
