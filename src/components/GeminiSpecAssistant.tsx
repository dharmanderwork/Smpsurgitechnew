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
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMarkdown, setResponseMarkdown] = useState<string | null>(null);

  if (!isOpen) return null;

  const quickPrompts = [
    'Long diffuse coronary lesion needing single 48mm drug-eluting stent',
    'Microvascular resistance evaluation in INOCA / angina without obstructive disease',
    'Mechanical circulatory support heart pump for cardiogenic shock during protected PCI',
    'High-precision micro-vascular clamps and Potts scissors for coronary artery bypass'
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
          category: selectedCategory !== 'All Categories' ? selectedCategory : undefined
        })
      });

      if (!res.ok) {
        throw new Error('Failed to fetch clinical recommendation');
      }

      const data = await res.json();
      setResponseMarkdown(data.text || 'No recommendation received.');
    } catch (err: any) {
      setResponseMarkdown(
        `**SMP Surgitech Technical Assistance:**\n\nFor immediate interventional cardiology device matching, cath lab consignment, or emergency delivery across Madhya Pradesh, Chhattisgarh, South Rajasthan, and Uttar Pradesh, contact our clinical desk directly at **+91 94140 88210** or email **cardio@smpsurgitech.com**.`
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
              <div className="flex items-center gap-2">
                <h3 id="gemini-assistant-title" className="text-sm font-bold text-white font-display">
                  Clinical Cardiology Device & Tender Matcher
                </h3>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300 font-semibold">
                  AI SPEC MATCH
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Match complex cath lab procedures with official devices & generate RFQ specifications
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Assistant Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Query Formulation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="clinical-req-input" className="font-semibold text-slate-700">
                Describe Patient Anatomy, Procedure or Tender Criteria:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-700 focus:outline-none"
              >
                <option value="All Categories">All Categories</option>
                <option value="Coronary Stents (XIENCE)">Coronary Stents (XIENCE)</option>
                <option value="Diagnostic Physiology & Imaging (OCT / FFR)">Diagnostic Imaging (OCT / FFR)</option>
                <option value="Cardiovascular Physiology Systems (CoroFlow)">Microvascular Systems (CoroFlow)</option>
                <option value="Structural Heart (TAVI)">Structural Heart (TAVI)</option>
                <option value="Mechanical Circulatory Support (Impella & IABP)">Mechanical Circulatory (Impella / IABP)</option>
                <option value="Cardiovascular Surgical Instruments">Cardiovascular Surgical Instruments</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                id="clinical-req-input"
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Need high deliverability drug-eluting stent for calcified left main bifurcation, and verify if OCT co-registration is compatible..."
                className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-800 text-slate-900 bg-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    handleSearch(query);
                  }
                }}
              />
              <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2">
                <button
                  onClick={() => handleSearch(query)}
                  disabled={isLoading || !query.trim()}
                  className="py-1.5 px-3.5 bg-slate-900 hover:bg-cyan-950 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40"
                >
                  {isLoading ? (
                    <span>Matching Specs...</span>
                  ) : (
                    <>
                      <Send className="w-3 h-3 text-cyan-300" />
                      <span>Analyze Requisition</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-slate-500 font-medium">Example Clinical Inquiries:</span>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery(p);
                      handleSearch(p);
                    }}
                    className="text-[11px] bg-slate-100 hover:bg-cyan-50 hover:text-cyan-900 text-slate-700 px-2.5 py-1 rounded border border-slate-200 transition-colors text-left cursor-pointer"
                  >
                    "{p}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* AI Response Area */}
          {isLoading && (
            <div className="p-8 text-center space-y-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-8 h-8 border-2 border-cyan-800 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs font-medium text-slate-700">
                Evaluating clinical specifications against authorized product matrix & regulatory clearances...
              </p>
            </div>
          )}

          {responseMarkdown && !isLoading && (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-3 text-slate-800">
              <div className="flex items-center gap-2 text-cyan-950 font-bold border-b border-slate-200 pb-2">
                <BrainCircuit className="w-4 h-4 text-cyan-800" />
                <span>Clinical Requisition Recommendation</span>
              </div>
              <div className="prose prose-xs max-w-none space-y-2 whitespace-pre-line leading-relaxed font-sans">
                {responseMarkdown}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
