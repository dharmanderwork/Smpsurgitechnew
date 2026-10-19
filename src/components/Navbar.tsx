import React, { useState } from 'react';
import { ClipboardList, Menu, X, Sparkles, Phone, Mail } from 'lucide-react';
import { SmpLogo } from './SmpLogo';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean, focused navigation: removed 'area covered' and 'pdf spec sheets', direct quote renamed to 'Contact'
  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'catalog', label: 'Product Catalog' },
    { id: 'services', label: 'Cath Lab Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all w-full max-w-full overflow-hidden">
      {/* Authorized Dealer & Emergency Cath Lab Sub-bar (no Area Covered link) */}
      <div className="bg-slate-950 text-slate-300 px-3 sm:px-6 py-1.5 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
            <span className="bg-cyan-900/70 text-cyan-300 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">
              AUTHORIZED PARTNER
            </span>
            <span className="font-medium text-slate-200 text-[11px] truncate">
              Abbott · Cordis · Teleflex · St. Jude Medical · J&J MedTech
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-xs shrink-0">
            <a 
              href="tel:+919414088210" 
              className="text-white hover:text-cyan-300 transition-colors font-medium flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="hidden sm:inline text-slate-300 text-[11px]">Cath Lab Hotline:</span>
              <span className="font-mono text-[11px] font-semibold text-white">+91 94140 88210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: 3-Zone Responsive Contract */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Authentic Brand Logo with transparent background (no bg) */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-left group cursor-pointer focus:outline-none flex items-center shrink min-w-0 bg-transparent p-0 border-0"
          aria-label="SMP Surgitech Home"
        >
          <SmpLogo className="h-6 xs:h-7 sm:h-8 md:h-9 w-auto max-w-[130px] xs:max-w-[160px] sm:max-w-[210px] md:max-w-none object-contain" />
        </button>

        {/* Zone 2: Navigation Links (hidden on smaller screens) */}
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

        {/* Zone 3: Actions & Mobile Navigation Trigger - strictly responsive */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* AI Clinical Spec Matcher Trigger (Desktop) */}
          <button
            onClick={onOpenAiAssistant}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200/80 rounded-lg hover:bg-cyan-100 transition-colors cursor-pointer"
            title="Match clinical specs & tender items"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span className="whitespace-nowrap">AI Spec Matcher</span>
          </button>

          {/* Consolidated RFQ Basket Button */}
          <button
            onClick={onOpenRfqDrawer}
            className="relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label={`View RFQ quote basket with ${rfqItemCount} items`}
          >
            <ClipboardList className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">RFQ Tray</span>
            {rfqItemCount > 0 && (
              <span className="bg-cyan-800 text-white font-mono text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {rfqItemCount}
              </span>
            )}
          </button>

          {/* Primary Action Button: Renamed to "Contact" as requested */}
          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-950 rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation: Fully responsive without horizontal scroll */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg animate-fade-in max-w-full overflow-hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  currentView === link.id
                    ? 'bg-cyan-50 text-cyan-950 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            {/* Mobile Contact Action Button */}
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-950 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>Contact Us</span>
            </button>

            {/* Mobile AI Spec Matcher Button */}
            <button
              onClick={() => {
                onOpenAiAssistant();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-cyan-900 bg-cyan-50 border border-cyan-200 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-700" />
              <span>Launch AI Clinical Spec Matcher</span>
            </button>

            {/* Direct Phone Assistance in Mobile Menu */}
            <a
              href="tel:+919414088210"
              className="w-full py-2 px-3 text-xs text-center text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Emergency Cath Lab: <strong>+91 94140 88210</strong></span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
