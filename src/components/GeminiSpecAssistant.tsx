import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { Sparkles, Send, X, ShieldCheck, Check, Plus, ArrowRight, BrainCircuit } from 'lucide-react';

interface GeminiSpecAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToRfq: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenPdf: (product: Product) => void;
}

export const GeminiSpecAssistant: React.FC<GeminiSpecAssistantProps> = ({
  isOpen,
  onClose,
  products,
  onAddToRfq,
  onOpenProductDetail,
  onOpenPdf
}) => {
  const [query, setQuery] = useState('');
  const [surgicalSpecialty, setSurgicalSpecialty] = useState('All Specialties');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMarkdown, setResponseMarkdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickPrompts = [
    'Aortic aneurysm vascular clamps with atraumatic teeth',
    'MRI-safe titanium micro-forceps for deep neuro-dissection',
    'Heavy bone rongeurs for spinal laminectomy',
    'Tungsten Carbide dissecting scissors for plastic surgery'
  ];

  const handleSearch = async (userPrompt: string) => {
    if (!userPrompt.trim()) return;
    setIsLoading(true);
    setResponseMarkdown(null);

    try {
      const res = await fetch('/api/gemini/matcher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: userPrompt,
          surgicalSpecialty: surgicalSpecialty !== 'All Specialties' ? surgicalSpecialty : undefined
        })
      });

      if (!res.ok) {
        throw new Error('Failed to fetch clinical recommendation');
      }

      const data = await res.json();
      setResponseMarkdown(data.text || 'No recommendation received.');
    } catch (err: any) {
      setResponseMarkdown(
        `**SMP Surgitech Technical Assistance:**\n\nUnable to connect to live AI service. For immediate clinical instrument specification matching, please contact our hospital engineering desk directly at **1-800-787-4483** or email **procurement@smpsurgitech.com**.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gemini-assistant-title"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-900/60 border border-cyan-700/80 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h2 id="gemini-assistant-title" className="text-sm sm:text-base font-bold flex items-center gap-2">
                <span>AI Surgical Spec & Tray Matcher</span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                  High Thinking Mode
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Cross-references hospital tray requisitions with ISO 13485 certified SMP catalog
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close AI Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Query Input Section */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/70 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Describe surgical requirement, competitor SKU, or alloy spec..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
              />
            </div>
            <button
              onClick={() => handleSearch(query)}
              disabled={isLoading || !query.trim()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <BrainCircuit className="w-4 h-4 animate-spin text-cyan-300" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Match Spec</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-medium text-slate-500 mr-1">Quick Inquiries:</span>
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(p);
                  handleSearch(p);
                }}
                className="text-[11px] px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-slate-700 transition-colors cursor-pointer truncate max-w-[260px]"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Results Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isLoading && (
            <div className="py-12 text-center space-y-3">
              <div className="w-10 h-10 border-2 border-cyan-800 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-800">
                Clinical Reasoning Engine Active
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Comparing alloy crystal structure, Rockwell hardness, atraumatic blade geometry, and DIN/ISO compliance matrix...
              </p>
            </div>
          )}

          {!isLoading && responseMarkdown && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 text-sm text-slate-800 whitespace-pre-wrap leading-relaxed font-sans">
                {responseMarkdown}
              </div>

              {/* Direct Fast Jump to Matching Instruments */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Related SMP Catalog Instruments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {products.slice(0, 4).map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <span className="font-mono font-bold text-slate-900">{prod.sku}</span>
                        <div className="font-semibold text-slate-800 truncate">{prod.name}</div>
                        <div className="text-[11px] text-slate-500">{prod.alloy}</div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => {
                            onClose();
                            onOpenProductDetail(prod);
                          }}
                          className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            onAddToRfq(prod);
                          }}
                          className="px-2 py-1 bg-cyan-900 hover:bg-cyan-800 text-white rounded font-medium"
                        >
                          + RFQ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!isLoading && !responseMarkdown && (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-800 flex items-center justify-center mx-auto">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Institutional RFP & Clinical Cross-Referencer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enter an instrument name, DIN specification, surgeon tray request, or competitor part code. The AI will cross-reference German DIN alloy equivalents, dimensional tolerances, and autoclave cycles.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Competitor X-Ref</span>
                  <span className="text-slate-600">Map Aesculap, Medline, or Integra part numbers to SMP equivalents.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Metallurgy Advisor</span>
                  <span className="text-slate-600">Analyze 420B stainless vs Ti-6Al-4V titanium for specific procedures.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Tender RFP Parsing</span>
                  <span className="text-slate-600">Extract exact DIN tolerances and sterilization cycles for hospital bids.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-800" />
            <span>SMP Surgitech Quality Engineering Division</span>
          </div>
          <span>ISO 13485:2016 Verified Catalog Data</span>
        </div>
      </div>
    </div>
  );
};
