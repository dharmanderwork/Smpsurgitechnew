import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Download, HeartPulse, Clock, FileText } from 'lucide-react';
import { SmpLogo } from './SmpLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Upper Distribution Hubs Strip */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-xs">South Rajasthan Hub (Udaipur)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Warehouse serving Udaipur, Dungarpur, Banswara, Pratapgarh, Rajsamand, Chittorgarh, Bhilwara.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-xs">Madhya Pradesh Hub (Indore)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Central warehouse serving Indore, Bhopal, Jabalpur, Gwalior, Ujjain, Sagar, Rewa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-xs">Chhattisgarh Hub (Raipur)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Dedicated cold-chain console facility serving Raipur, Bilaspur, Durg-Bhilai, Korba.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-slate-800 text-cyan-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-xs">Part of Uttar Pradesh (Agra/Kanpur)</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Express interventional corridor serving Kanpur, Agra, Jhansi, Prayagraj, Varanasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand Information */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center">
            <SmpLogo className="h-8 w-auto object-contain" variant="light" />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Premier B2B medical distributor specializing in interventional cardiology devices, drug-eluting coronary stents, hemodynamic assist consoles, and precision cardiovascular surgical instrumentation.
          </p>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cath Lab Direct Desk: +91 94140 88210</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hospital Tenders: procurement@smpsurgitech.com</span>
            </div>
          </div>
        </div>

        {/* Authorized Brands */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">
            Authorized Dealer For
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="text-white font-medium">Abbott</span>
              <span className="text-slate-500 block text-[11px]">Vascular Division (XIENCE, OCT, FFR)</span>
            </li>
            <li>
              <span className="text-white font-medium">Cordis</span>
              <span className="text-slate-500 block text-[11px]">Cardiology (Interventional Catheters & Access)</span>
            </li>
            <li>
              <span className="text-white font-medium">Teleflex</span>
              <span className="text-slate-500 block text-[11px]">Vascular Division (Arrow IABP & Hemodynamics)</span>
            </li>
            <li>
              <span className="text-white font-medium">St. Jude Medical</span>
              <span className="text-slate-500 block text-[11px]">CRM & Structural Heart (TAVI & Pacemakers)</span>
            </li>
            <li>
              <span className="text-white font-medium">J&J MedTech</span>
              <span className="text-slate-500 block text-[11px]">Surgical Solutions & Impella pVAD</span>
            </li>
            <li>
              <span className="text-white font-medium">Pocket ECG</span>
              <span className="text-slate-500 block text-[11px]">Diagnostic Devices & Ambulatory Telemetry</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">
            Catalog & Portals
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer text-left">
                XIENCE Stents Catalog
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer text-left">
                OCT & FFR Systems
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer text-left">
                CoroFlow Microvascular
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors cursor-pointer text-left">
                Impella & IABP Pumps
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('spec-sheets')} className="hover:text-white transition-colors cursor-pointer text-left">
                Technical PDF Specs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('coverage')} className="hover:text-white transition-colors cursor-pointer text-left">
                Regional Logistics Network
              </button>
            </li>
          </ul>
        </div>

        {/* Regulatory & Institutional Assurance */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider">
            Regulatory Compliance
          </h3>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>CDSCO Licensed Distributor</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Fully compliant with Central Drugs Standard Control Organisation (CDSCO), Medical Device Rules (MDR 2017), and ISO 13485:2016 quality management systems.
            </p>
            <div className="pt-1 text-[11px] text-cyan-300 font-mono">
              Batch Serialization & 100% Cold-Chain
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-slate-900 bg-slate-950 py-4 px-4 sm:px-6 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} SMP Surgitech. All rights reserved. B2B healthcare distributor only. No retail or online checkout.
          </div>
          <div className="flex items-center gap-4">
            <span>Udaipur · Indore · Raipur · Agra</span>
            <span>·</span>
            <span className="text-slate-400">CDSCO Form MD-41 Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
