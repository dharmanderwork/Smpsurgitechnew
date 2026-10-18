import React, { useState } from 'react';
import { TERRITORY_REGIONS } from '../data/products';
import { MapPin, Phone, Mail, Clock, Truck, ShieldCheck, CheckCircle2, ArrowRight, Building2, Send } from 'lucide-react';

interface CoverageViewProps {
  onNavigate: (view: string) => void;
}

export const CoverageView: React.FC<CoverageViewProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('South Rajasthan');

  const currentRegion = TERRITORY_REGIONS.find((r) => r.state === selectedRegion) || TERRITORY_REGIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span>Regional Distribution Network & Cath Lab Supply Corridors</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Area Covered & Logistics Hubs
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          SMP Surgitech operates strategic temperature-controlled warehouses and 24/7 emergency dispatch desks across <strong>Madhya Pradesh</strong>, <strong>Chhattisgarh</strong>, <strong>South Rajasthan</strong>, and <strong>part of Uttar Pradesh</strong>.
        </p>
      </div>

      {/* Region Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {TERRITORY_REGIONS.map((region) => {
          const isSelected = selectedRegion === region.state;
          return (
            <button
              key={region.state}
              onClick={() => setSelectedRegion(region.state)}
              className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">{region.state}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'bg-slate-100 text-slate-600'}`}>
                  {region.emergencyCourierHours}
                </span>
              </div>
              {region.nameHindi && (
                <div className={`text-xs mt-0.5 font-medium ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                  {region.nameHindi}
                </div>
              )}
              <div className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {region.tagline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Region Showcase */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {currentRegion.state}
              </h2>
              {currentRegion.nameHindi && (
                <span className="text-lg text-cyan-400 font-sans">({currentRegion.nameHindi})</span>
              )}
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">{currentRegion.tagline}</p>
          </div>

          <span className="bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-4 py-1.5 rounded-full text-xs font-semibold self-start md:self-auto">
            {currentRegion.coverageStatus}
          </span>
        </div>

        {/* Special Spotlight on South Rajasthan (User requested specific districts) */}
        {currentRegion.state === 'South Rajasthan' && (
          <div className="bg-cyan-950/40 border border-cyan-800/70 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>South Rajasthan District Coverage (Headquarters & Central Hub: Udaipur)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              With our central logistics depot located in <strong>Udaipur (उदयपुर)</strong>, SMP Surgitech delivers acute angioplasty stent matrices, OCT catheters, and IABP consoles to cath labs and cardiac centers within <strong>1 to 3 hours</strong> across all key districts:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
              {[
                { name: 'Udaipur (उदयपुर)', desc: 'Central Regional Warehouse & 24/7 Desk' },
                { name: 'Dungarpur (डूंगरपुर)', desc: 'Direct Highway Corridor Delivery' },
                { name: 'Banswara (बांसवाड़ा)', desc: 'Pre-consigned Hospital Cath Labs' },
                { name: 'Pratapgarh (प्रतापगढ़)', desc: 'Dedicated Technical Dispatch' },
                { name: 'Rajsamand (राजसमंद)', desc: 'Express Standby Stocking' },
                { name: 'Chittorgarh (चित्तौड़गढ़)', desc: 'Same-day Cath Lab Restocking' },
                { name: 'Bhilwara (भीलवाड़ा)', desc: 'Frequent Daily Consignment Runs' }
              ].map((district, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700/80 p-3.5 rounded-xl space-y-1">
                  <div className="font-bold text-white text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{district.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-400">{district.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Region Cities Grid */}
        {currentRegion.state !== 'South Rajasthan' && (
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Healthcare Corridors & Hospital Locations:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentRegion.cities.map((city, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Territory Logistics Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Emergency Delivery SLA</span>
            <div className="font-mono text-lg font-bold text-cyan-300">{currentRegion.emergencyCourierHours}</div>
            <div className="text-[11px] text-slate-400">Direct Cath Lab Handoff</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Active Consigned Cath Labs</span>
            <div className="font-mono text-lg font-bold text-emerald-400">{currentRegion.activeHospitals} Facilities</div>
            <div className="text-[11px] text-slate-400">Regular Monthly Audit</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
            <span className="text-[11px] text-slate-400 uppercase font-semibold">Regional Operations HQ</span>
            <div className="text-sm font-bold text-white">{currentRegion.hqCity}</div>
            <div className="text-[11px] text-slate-400">Cold-Chain Staging Hub</div>
          </div>
        </div>

        {/* Coordinator Contact Card */}
        <div className="p-5 bg-slate-900/80 border border-slate-700/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] text-slate-400 font-semibold">{currentRegion.repContact.title}</div>
            <div className="font-mono text-base font-bold text-cyan-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{currentRegion.repContact.phone}</span>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{currentRegion.repContact.email}</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="py-2.5 px-5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer self-start sm:self-auto shadow-md"
          >
            Initiate Hospital Consignment in {currentRegion.state}
          </button>
        </div>
      </div>
    </div>
  );
};
