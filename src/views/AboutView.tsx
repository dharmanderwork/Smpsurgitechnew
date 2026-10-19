import React from 'react';
import { HERO_IMAGE, CATHLAB_OCT_IMAGE, DEALER_BRANDS, TERRITORY_REGIONS, FALLBACK_IMAGE } from '../data/products';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  ArrowRight,
  HeartPulse,
  MapPin,
  Clock,
  Boxes
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Corporate Profile & Distribution Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          SMP Surgitech · Precision Cardiology & Surgical Distribution
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Authorized regional distributor of cutting-edge interventional cardiology devices, drug-eluting coronary stents, hemodynamic assist consoles, and precision surgical instruments across Central and Western India.
        </p>
      </div>

      {/* Two-Column Story & Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
            Our Purpose & Mission
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            Elevating Acute Coronary Care & Surgical Precision.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Founded to bridge the critical gap between world-renowned medical technology innovators and front-line healthcare facilities, <strong>SMP Surgitech</strong> provides hospitals and catheterization laboratories with seamless access to life-saving cardiovascular devices.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            As an authorized channel partner for <strong>Abbott (Vascular Division)</strong>, <strong>Cordis</strong>, <strong>Teleflex</strong>, <strong>St. Jude Medical</strong>, <strong>J&J MedTech</strong>, and <strong>Pocket ECG</strong>, we uphold the highest global standards in cold-chain logistics, batch traceability, and emergency consignment fulfillment.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">CDSCO Licensed</span>
              <span className="text-slate-600">Full regulatory compliance under Medical Device Rules (MDR 2017) Form MD-41.</span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">ISO 13485:2016</span>
              <span className="text-slate-600">Audited quality management system for clinical storage, handling, and logistics.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 relative">
            <img
              src={CATHLAB_OCT_IMAGE}
              alt="Cardiac Catheterization Laboratory Support"
              referrerPolicy="no-referrer"
              className="w-full aspect-[4/3] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target && !target.src.includes('data:image')) {
                  target.src = FALLBACK_IMAGE;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
              <div className="font-bold text-sm text-cyan-300">Cath Lab Logistics & Consignment Network</div>
              <div className="text-slate-300">Hubs in Udaipur, Indore, Raipur, and Agra delivering under 2-4 hours.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Infrastructure Summary */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-8">
        <div className="space-y-2">
          <div className="text-cyan-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Distribution Network Hubs</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-white">
            Serving Four Key Regional Healthcare Corridors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TERRITORY_REGIONS.map((region, i) => (
            <div key={i} className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">{region.state}</span>
                <span className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                  {region.emergencyCourierHours}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {region.tagline}
              </p>
              <div className="text-[11px] text-slate-300 font-mono pt-1 border-t border-slate-800">
                HQ Hub: {region.hqCity}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authorized Brands Portfolio */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold font-display text-slate-950">
            Globally Renowned Brand Portfolios
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Proudly associated with premier global manufacturers for improved patient clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEALER_BRANDS.map((b) => (
            <div key={b.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm">{b.name}</h3>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 text-cyan-900 font-semibold">
                  {b.division}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
