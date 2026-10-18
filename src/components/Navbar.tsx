import React from 'react';
import { FileText, ClipboardList, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  rfqItemCount: number;
  onOpenRfqDrawer: () => void;
  onOpenAiAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  rfqItemCount,
  onOpenRfqDrawer,
  onOpenAiAssistant
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'catalog', label: 'Instruments Catalog' },
    { id: 'spec-sheets', label: 'PDF Spec Sheets' },
    { id: 'services', label: 'Core Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Reps' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* ISO Compliance / B2B Logistics Sub-bar */}
      <div className="bg-slate-900 text-slate-300 px-4 sm:px-6 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-100">ISO 13485:2016 Certified Medical Distributor</span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-400">German DIN Metallurgy & Titanium Ti-6Al-4V ELI</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hidden sm:inline">Hospital Procurement Hotline: +1 (800) 787-4483</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="text-cyan-400 font-medium">B2B Institutional Supply Only</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no adjacent pills/descriptors) */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 group-hover:text-cyan-800 transition-colors">
            SMP Surgitech
          </span>
        </button>

        {/* Zone 2: Navigation Links (single-line, clean text hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-slate-950 border-cyan-700 font-semibold'
                    : 'border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Drawer triggers */}
        <div className="flex items-center gap-3 shrink-0">
          {/* AI Clinical Matcher Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200/80 rounded-lg hover:bg-cyan-100 transition-colors cursor-pointer"
            title="Ask AI Surgical Spec & Tray Matcher"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span className="whitespace-nowrap">AI Spec Matcher</span>
          </button>

          {/* Consolidated RFQ Basket Button */}
          <button
            onClick={onOpenRfqDrawer}
            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label={`View RFQ quote basket with ${rfqItemCount} items`}
          >
            <ClipboardList className="w-4 h-4 text-slate-600" />
            <span className="hidden md:inline whitespace-nowrap">RFQ Tray</span>
            {rfqItemCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-cyan-800 rounded-full tabular-nums">
                {rfqItemCount}
              </span>
            )}
          </button>

          {/* Primary Action Button - hidden on narrow mobile to keep top bar uncluttered */}
          <button
            onClick={() => onNavigate('rfq')}
            className="hidden md:inline-flex px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-950 rounded-lg hover:bg-cyan-900 transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            Request Formal Quote
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                  currentView === link.id
                    ? 'bg-slate-100 text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenAiAssistant();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-cyan-900 bg-cyan-50 rounded-lg border border-cyan-200"
            >
              <Sparkles className="w-4 h-4 text-cyan-700" />
              AI Clinical Spec Matcher
            </button>
            <button
              onClick={() => {
                onNavigate('rfq');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 text-center"
            >
              Institutional Quote Builder ({rfqItemCount} items)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
