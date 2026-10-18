import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              SMP Surgitech
            </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Global B2B distributor of clinical-grade surgical instrumentation, titanium micro-tools, and specialized OR trays. Serving hospital networks, ambulatory surgery centers, and government procurement bodies worldwide since 2008.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                ISO 13485:2016 Certified
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">CE Mark MDR Class Ir</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">FDA 510(k) Compliant</span>
            </div>
          </div>

          {/* Catalog Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Surgical Portfolios
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Cardiovascular & Thoracic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Neurosurgery & Spine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Orthopedics & Trauma
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  General & Laparoscopy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Microsurgery & Ophthalmic
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              B2B Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Hospital Consignment Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  UDI & Laser Marking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Sharpening & Passivation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spec-sheets')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  PDF Technical Spec Sheets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rfq')}
                  className="hover:text-white transition-colors"
                >
                  Institutional Tender Submissions
                </button>
              </li>
            </ul>
          </div>

          {/* Logistics & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Procurement Desk
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>4400 Innovation Way, Suite 300, Medical Logistics Center, Chicago, IL 60611</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 787-4483 / +1 (312) 555-0198</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>procurement@smpsurgitech.com</span>
              </div>
              <div className="pt-2 text-xs text-slate-500">
                Operating Room Emergency Logistics: 24/7/365 On-Call Dispatch
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Regulatory Notice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SMP Surgitech Medical Technologies Corp. All rights reserved. Strictly B2B institutional distributor.
          </div>
          <div className="flex items-center gap-6">
            <span>GS1 UDI Compliant</span>
            <span aria-hidden="true">·</span>
            <span>ASTM F899 Metallurgy Verified</span>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('about')} className="hover:text-slate-300 transition-colors">
              Regulatory Declarations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
