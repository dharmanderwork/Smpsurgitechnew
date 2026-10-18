import React from 'react';
import { QUALITY_LAB_IMAGE, HERO_IMAGE } from '../data/products';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Building, 
  Microscope, 
  Globe2, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
          Corporate Background & Quality Assurance
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
          Engineering Precision Surgical Instruments Since 2008.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          SMP Surgitech Medical Technologies Corp. is an ISO 13485:2016 certified distributor of surgical instruments. We bridge world-class German metallurgical craftsmanship with modern hospital supply chains.
        </p>
      </div>

      {/* Two-Column Story & Laboratory Inspection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
            Our Origin & Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            A Relentless Commitment to Zero Defect Surgery.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Founded by a collaborative team of biomedical engineers and operating room logistics specialists in 2008, SMP Surgitech was established to solve a critical healthcare problem: the widespread prevalence of low-grade surgical steel that chips, dulls, or corrodes after minimal reprocessing cycles.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Every instrument distributed under the SMP Surgitech marque is forged from certified German DIN martensitic and austenitic stainless steels or aerospace-grade titanium Ti-6Al-4V ELI. We partner exclusively with forging facilities adhering to DIN EN ISO 7153-1 standards.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">ISO 13485:2016</span>
              <span className="text-slate-600">Full quality management system certified for medical device distribution.</span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm mb-1">CE Mark MDR Class Ir</span>
              <span className="text-slate-600">European medical device regulation validated for reusable surgical tools.</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 aspect-[4/3]">
            <img
              src={QUALITY_LAB_IMAGE}
              alt="SMP Surgitech Cleanroom Inspection Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xs text-slate-500 mt-2 text-center">
            SMP Surgitech Quality Control Lab: Laser optical comparators and Rockwell hardness testing
          </div>
        </div>
      </div>

      {/* Metallurgical Integrity & Testing Standards */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-1">
            Metallurgical Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            The SMP Surgitech 4-Stage Quality Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
            Every production batch entering our distribution center is held in quarantine until verified through physical, chemical, and dimensional protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="font-mono text-cyan-400 font-bold text-sm">Stage 1</div>
            <h3 className="font-bold text-white text-sm">Optical Micro-Profiling</h3>
            <p className="text-slate-400 leading-relaxed">
              Cutting edges and micro-forceps tips measured under 50x magnification to confirm alignment tolerances within ±0.03 mm.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="font-mono text-cyan-400 font-bold text-sm">Stage 2</div>
            <h3 className="font-bold text-white text-sm">Rockwell Hardness (HRC)</h3>
            <p className="text-slate-400 leading-relaxed">
              Diamond indenter testing verifies blades reach 52-58 HRC (stainless) and 72 HRC (Tungsten Carbide inserts).
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="font-mono text-cyan-400 font-bold text-sm">Stage 3</div>
            <h3 className="font-bold text-white text-sm">Corrosion Passivation</h3>
            <p className="text-slate-400 leading-relaxed">
              Copper sulfate boil tests (ASTM F1089) ensure continuous chromium oxide passivation and zero surface iron contamination.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="font-mono text-cyan-400 font-bold text-sm">Stage 4</div>
            <h3 className="font-bold text-white text-sm">Laser UDI Marking</h3>
            <p className="text-slate-400 leading-relaxed">
              Indelible GS1 2D Datamatrix etching and individual lot serial numbers recorded in central hospital tracking registry.
            </p>
          </div>
        </div>
      </div>

      {/* Facilities & Global Logistics Reach */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <Building className="w-6 h-6 text-cyan-800" />
          <h3 className="font-display font-bold text-base text-slate-900">
            Central Logistics Hub
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            45,000 sq ft climate-controlled medical warehousing in Chicago, IL with direct proximity to major air cargo hubs for same-day dispatch.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <Globe2 className="w-6 h-6 text-cyan-800" />
          <h3 className="font-display font-bold text-base text-slate-900">
            European Metallurgical Office
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Liaison engineering office in Tuttlingen, Germany managing direct raw ingot sourcing, forging tool dies, and DIN EN ISO compliance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <FileCheck2 className="w-6 h-6 text-cyan-800" />
          <h3 className="font-display font-bold text-base text-slate-900">
            Hospital Procurement GPO Desk
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dedicated team assisting healthcare systems with Vizient, Premier, and HealthTrust tender proposals and EDI order integration.
          </p>
        </div>
      </div>

      {/* Institutional Inquiry Call to Action */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Request an Institutional Facility Tour or Quality Audit Dossier
          </h3>
          <p className="text-xs text-slate-600">
            We welcome hospital materials management and sterile processing committees to inspect our QC protocols.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          Contact Corporate Relations
        </button>
      </div>
    </div>
  );
};
