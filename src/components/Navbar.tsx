import React from 'react';
import { FileText, ClipboardList, Menu, X, Sparkles, MapPin, Shield } from 'lucide-react';

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
    { id: 'catalog', label: 'Product Catalog' },
    { id: 'coverage', label: 'Area Covered' },
    { id: 'spec-sheets', label: 'PDF Spec Sheets' },
    { id: 'services', label: 'Cath Lab Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Direct Quote & Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Authorized Dealer & Territory Sub-bar */}
      <div className="bg-slate-950 text-slate-300 px-4 sm:px-6 py-1.5 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-cyan-900/60 text-cyan-300 font-bold px-1.5 py-0.2 rounded text-[10px]">AUTHORIZED PARTNER</span>
            <span className="font-medium text-slate-200 text-[11px] truncate">
              Abbott · Cordis · Teleflex · St. Jude Medical · J&J MedTech · Pocket ECG
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs shrink-0">
            <span className="hidden md:inline font-mono text-[11px] text-cyan-400">
              Coverage: MP · CG · South Rajasthan · Part of UP
            </span>
            <span aria-hidden="true" className="hidden md:inline text-slate-600">·</span>
            <span className="text-white font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Emergency Cath Lab: +91 94140 88210
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-sm tracking-wider font-mono">
            SMP
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 group-hover:text-cyan-900 transition-colors block leading-none">
              SMP Surgitech
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase block mt-0.5">
              Cardiology & Surgical Distributor
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-xs font-semibold cursor-pointer ${
                  isActive
                    ? 'text-slate-950 border-cyan-800 font-bold'
                    : 'border-transparent hover:text-slate-950 hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Drawer triggers */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* AI Clinical Matcher Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200/80 rounded-lg hover:bg-cyan-100 transition-colors cursor-pointer"
            title="Match clinical specs & tender items"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span className="whitespace-nowrap">AI Spec Matcher</span>
          </button>

          {/* Consolidated RFQ Basket Button */}
          <button
            onClick={onOpenRfqDrawer}
            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label={`View RFQ quote basket with ${rfqItemCount} items`}
          >
            <ClipboardList className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">RFQ Tray</span>
            {rfqItemCount > 0 && (
              <span className="bg-cyan-800 text-white font-mono text-[10px] font-bold px-1.5 py-0.2 rounded-full ml-0.5">
                {rfqItemCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-950 rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            Request Quotation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  currentView === link.id
                    ? 'bg-cyan-50 text-cyan-950 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
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
              className="w-full py-2 px-3 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Launch AI Clinical Spec Matcher</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
