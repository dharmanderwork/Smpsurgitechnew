import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { 
  Truck, 
  ShieldCheck, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Send,
  HeartPulse,
  Activity,
  Boxes,
  Clock,
  Sparkles
} from 'lucide-react';
import { generateRfqReference } from '../utils/rfq';

interface ServicesViewProps {
  products: Product[];
  onNavigate: (view: string) => void;
  onOpenAiAssistant: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  products,
  onNavigate,
  onOpenAiAssistant
}) => {
  const [activeService, setActiveService] = useState('cathlab-consignment');
  const [formSent, setFormSent] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [serviceForm, setServiceForm] = useState({
    hospitalName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    serviceType: 'Cath Lab Emergency Stent Consignment',
    territoryState: 'South Rajasthan',
    department: 'Interventional Cardiology / Cath Lab',
    message: ''
  });

  const services = [
    {
      id: 'cathlab-consignment',
      name: 'Cath Lab Emergency Stent Consignment',
      headline: 'Permanent In-Hospital Consignment of XIENCE Stents & Balloon Catheters',
      description: 'Eliminate procedure delays during acute coronary syndromes (ACS). SMP Surgitech places pre-consigned full size matrices of XIENCE Skypoint, Xpedition 48, Sierra, and Alpine stents directly inside hospital catheterization labs with monthly replenishment.',
      benefits: [
        'Pay-per-use billing: Hospital is invoiced strictly upon consumption and sticker log',
        'Guaranteed size matrix availability covering 2.25 mm to 4.0 mm up to 48 mm lengths',
        'Emergency 1-3 hour express restocking from our Udaipur, Indore, Raipur, and Agra hubs',
        'Full UDI and batch expiry surveillance managed by SMP field inventory managers'
      ]
    },
    {
      id: 'standby-consoles',
      name: 'Standby Hemodynamic Console Deployment',
      headline: 'Emergency Deployment of IABP & CoroFlow Cardiovascular Platforms',
      description: 'Ensure your ICU and Cath Lab never face equipment shortfalls during high-risk cardiac cases. We provide standby backup consoles for Intra-Aortic Balloon Pumps (IABP) and CoroFlow Microvascular systems with complete calibration certificates.',
      benefits: [
        'Dedicated standby IABP consoles stationed in key cities across MP, CG, South Rajasthan, and UP',
        '24/7 technical hotline dispatch with factory-certified clinical applications engineers',
        'Complete supply of sterile single-use disposable balloon catheters and sensors',
        'Preventative maintenance and annual biomedical recertification included'
      ]
    },
    {
      id: 'cathlab-support',
      name: 'Clinical Specialist Technical Support',
      headline: 'Certified Applications Specialists for OCT, FFR & Complex PCI',
      description: 'Our factory-trained clinical applications team supports interventional cardiologists during challenging cases, ensuring seamless OCT co-registration, accurate FFR physiology measurements, and CoroFlow microvascular data acquisition.',
      benefits: [
        'On-site procedural assistance during OCT pullback imaging and MLD MAX analysis',
        'In-depth physician and cath lab technician training on coronary physiology indices (IMR, CFR, RRR)',
        'Zero-drift PressureWire setup and calibration protocols',
        'Assistance with case recordings and hospital registry documentation'
      ]
    },
    {
      id: 'surgical-sets',
      name: 'Cardiovascular Surgical Tray Management',
      headline: 'German DIN Stainless Steel Tray Audits & Restorations',
      description: 'Complete lifecycle management for cardiothoracic and vascular operating rooms. We audit, refurbish, laser mark, and replenish open-heart clamping sets, CABG sternotomy retractors, and micro-vascular instruments.',
      benefits: [
        'Tungsten Carbide (TC) jaw replacements on micro-needle holders and Potts scissors',
        'Custom GS1 2D Datamatrix laser annealing with hospital department serialization',
        'Repassivation according to ASTM A967 to ensure 100% autoclave corrosion immunity',
        'Zero-capital tray consignment programs for expanding cardiac surgery departments'
      ]
    }
  ];

  const currentService = services.find((s) => s.id === activeService) || services[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRfqReference();
    setInquiryRef(ref);
    setFormSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Specialized B2B Distribution & Hospital Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Core Services & Cath Lab Consignment
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Beyond device distribution, SMP Surgitech partners with hospital cardiac institutes across Madhya Pradesh, Chhattisgarh, South Rajasthan, and Uttar Pradesh to ensure zero downtime in acute coronary care.
        </p>
      </div>

      {/* Services Grid Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {services.map((svc) => (
          <button
            key={svc.id}
            onClick={() => setActiveService(svc.id)}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeService === svc.id
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="text-xs font-bold leading-snug">{svc.name}</div>
          </button>
        ))}
      </div>

      {/* Active Service Showcase */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider bg-cyan-100/60 px-2.5 py-1 rounded">
            SERVICE SPOTLIGHT
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-950">
            {currentService.headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {currentService.description}
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentService.benefits.map((b, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-700 leading-relaxed font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Inquiry Form for Services */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-lg">
        {formSent ? (
          <div className="text-center py-8 space-y-4 animate-fade-in max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-white">Service Agreement Inquiry Registered</h3>
            <p className="text-xs text-slate-300">
              Reference code: <strong className="font-mono text-cyan-400">{inquiryRef}</strong>. Our regional operations director will contact your materials management team within 2 hours.
            </p>
            <button
              onClick={() => setFormSent(false)}
              className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white font-display">
                Initiate a Hospital Consignment or Standby Console Agreement
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct consultation for Cath Lab Directors, Purchase Committees & Healthcare Systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Contact Name & Designation *</label>
                <input
                  required
                  type="text"
                  placeholder="Dr. R. K. Sharma / Cath Lab In-charge"
                  value={serviceForm.contactName}
                  onChange={(e) => setServiceForm({ ...serviceForm, contactName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Institutional Email *</label>
                <input
                  required
                  type="email"
                  placeholder="name@hospital.org"
                  value={serviceForm.workEmail}
                  onChange={(e) => setServiceForm({ ...serviceForm, workEmail: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Hospital / Medical Center *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Pacific Medical College, Udaipur"
                  value={serviceForm.hospitalName}
                  onChange={(e) => setServiceForm({ ...serviceForm, hospitalName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Territory State *</label>
                <select
                  value={serviceForm.territoryState}
                  onChange={(e) => setServiceForm({ ...serviceForm, territoryState: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs"
                >
                  <option value="South Rajasthan">South Rajasthan (Udaipur, Dungarpur, Banswara...)</option>
                  <option value="Madhya Pradesh">Madhya Pradesh (Indore, Bhopal, Jabalpur...)</option>
                  <option value="Chhattisgarh">Chhattisgarh (Raipur, Bilaspur, Durg-Bhilai...)</option>
                  <option value="Uttar Pradesh">Part of Uttar Pradesh (Kanpur, Agra, Jhansi...)</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-xs">Specific Consignment or Standby Requirements</label>
              <textarea
                rows={3}
                placeholder="Indicate projected monthly stent consumption, emergency console requirements, or preferred delivery timing..."
                value={serviceForm.message}
                onChange={(e) => setServiceForm({ ...serviceForm, message: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 text-xs resize-none"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Submit Service Requisition</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
