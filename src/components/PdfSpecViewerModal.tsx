import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Printer, Shield, FileCheck, Send, Check } from 'lucide-react';

interface PdfSpecViewerModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (product: Product) => void;
}

export const PdfSpecViewerModal: React.FC<PdfSpecViewerModalProps> = ({
  product,
  isOpen,
  onClose,
  onOpenEnquiry
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const pdf = product.pdfSpec;
  const activePageData = pdf.pages.find((p) => p.pageNumber === currentPage) || pdf.pages[0];

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(175, Math.max(75, prev + delta)));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    // Create text blob for genuine offline file download
    const content = `=======================================================
SMP SURGITECH MEDICAL TECHNOLOGIES CORP.
TECHNICAL DATA SPECIFICATION SHEET
=======================================================
Document No: ${pdf.docNumber}
Revision: ${pdf.revision} | Date: ${pdf.effectiveDate}
Product: ${product.name}
SKU: ${product.sku}
Surgical Specialty: ${product.specialty}
Alloy: ${product.alloy}
Rockwell Hardness: ${product.metallurgy.rockwellHardness}
Dimensions: ${product.dimensions.totalLength} | Tip: ${product.dimensions.tipWidth}
Sterilization: ${product.reprocessing.autoclaveCycle}
Compliance: ${product.compliance.join(', ')}

CLINICAL INDICATIONS:
${product.clinicalApplication}

REPROCESSING GUIDELINES:
Max Temp: ${product.reprocessing.maxTempCelsius}°C
Cleaning Chemicals: ${product.reprocessing.compatibleCleaningChem}
pH Range: ${product.reprocessing.cleaningPhRange}

=======================================================
CONFIDENTIAL INSTITUTIONAL SPECIFICATION
SMP Surgitech · ISO 13485:2016 Certified Medical Distributor
Inquiries: procurement@smpsurgitech.com | 1-800-787-4483
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
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-slate-300">
          {/* Document Title & SKU */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800/80 flex items-center justify-center text-red-400 font-mono text-xs font-bold shrink-0">
              PDF
            </div>
            <div className="min-w-0">
              <h2 id="pdf-viewer-title" className="text-sm font-semibold text-white truncate">
                {pdf.docNumber} · {product.name}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-mono">{pdf.revision}</span>
                <span aria-hidden="true">·</span>
                <span>ISO 13485 Verified</span>
              </div>
            </div>
          </div>

          {/* Controls: Page navigation, Zoom, Print, Download, Close */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Page Navigation */}
            <div className="flex items-center bg-slate-800/90 rounded-lg p-1 text-xs">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono tabular-nums text-slate-200">
                {currentPage} / {pdf.totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(pdf.totalPages, p + 1))}
                disabled={currentPage >= pdf.totalPages}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-800/90 rounded-lg p-1 text-xs">
              <button
                onClick={() => handleZoom(-15)}
                disabled={zoomLevel <= 75}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-40"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono tabular-nums text-slate-200">
                {zoomLevel}%
              </span>
              <button
                onClick={() => handleZoom(15)}
                disabled={zoomLevel >= 175}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-40"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Print Specification"
              aria-label="Print spec sheet"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Download */}
            <button
              onClick={handleSimulateDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-900/50 hover:bg-cyan-800 border border-cyan-700/60 text-cyan-200 transition-colors"
              title="Download PDF Spec Sheet"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </>
              )}
            </button>

            {/* Direct RFQ Action from PDF */}
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(product);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-white text-slate-900 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Enquire on Spec</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close PDF viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Document Canvas Viewport */}
        <div className="flex-1 bg-slate-800/90 p-4 sm:p-8 overflow-auto flex justify-center">
          <div
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
            className="w-full max-w-[850px] min-h-[1050px] bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 transition-transform duration-150 flex flex-col justify-between"
          >
            {/* PDF Header Sheet */}
            <div>
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4 mb-6">
                <div>
                  <div className="text-xl font-extrabold tracking-tight text-slate-950 font-display">
                    SMP SURGITECH
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Medical Technologies Corp. · Central Technical Documentation
                  </div>
                </div>
                <div className="text-right text-xs space-y-0.5">
                  <div className="font-mono font-bold text-slate-900">{pdf.docNumber}</div>
                  <div className="text-slate-500 font-mono text-[11px]">{pdf.revision} · Effective {pdf.effectiveDate}</div>
                  <div className="text-[10px] text-cyan-800 font-semibold uppercase">ISO 13485:2016 Compliant</div>
                </div>
              </div>

              {/* Page Title */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-cyan-800 font-semibold mb-1">
                  Section {activePageData.pageNumber}.0 Documentation
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activePageData.title}
                </h1>
                <p className="text-sm text-slate-600 font-medium">
                  {activePageData.subtitle}
                </p>
              </div>

              {/* Key Instrument Metadata Strip */}
              <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Catalog Model / SKU</span>
                  <span className="font-mono font-bold text-slate-900">{product.sku}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Alloy Grade</span>
                  <span className="font-semibold text-slate-900 truncate block">{product.alloy}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Rockwell Hardness</span>
                  <span className="font-mono font-bold text-slate-900">{product.metallurgy.rockwellHardness}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Regulatory Status</span>
                  <span className="font-semibold text-emerald-700">CE MDR / FDA Exempt</span>
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
                                <td className="py-1.5 px-3 font-bold text-slate-950">{spec.nominal}</td>
                                <td className="py-1.5 px-3 text-slate-600">{spec.tolerance}</td>
                                <td className="py-1.5 px-3 text-slate-500 font-sans">{spec.standard}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Bullet Points if present */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-2 space-y-1 text-xs text-slate-700 list-disc list-inside">
                        {section.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Footer Sheet */}
            <div className="pt-8 border-t border-slate-300 mt-8 flex items-center justify-between text-[10px] text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-800" />
                <span>SMP Surgitech Quality Assurance · Certificate # ISO-13485-2026-QC</span>
              </div>
              <div className="font-mono">
                Page {activePageData.pageNumber} of {pdf.totalPages} · Confidential B2B Medical Record
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status / Quick Enquire Bar */}
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>Digital Spec Sheet Verified · Ready for Hospital Procurement Submission</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Lead Time: {product.leadTime}</span>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(product);
              }}
              className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer underline underline-offset-2"
            >
              Submit Quote Request for {product.sku} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
