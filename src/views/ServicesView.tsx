import React, { useState } from 'react';
import { Product } from '../types/instruments';
import { DirectInquiryForm } from '../components/DirectInquiryForm';
import { 
  Truck, 
  ShieldCheck, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Send,
  FileCheck
} from 'lucide-react';

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
  const [activeService, setActiveService] = useState('consignment');
  const [formSent, setFormSent] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    hospitalName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    serviceType: 'Hospital Consignment Inventory',
    department: 'Central Sterile & OR Management',
    message: ''
  });

  const services = [
    {
      id: 'consignment',
      name: 'Hospital Consignment Inventory',
      headline: 'Zero-Capital Consignment Stocking Directly in Hospital Sterile Processing',
      description: 'Eliminate procedure cancellations caused by missing surgical instruments. SMP Surgitech places pre-consigned trays and backup surgical stock directly inside your health network facilities with automated periodic replenishment.',
      benefits: [
        'Pay-per-use billing: Hospitals only incur cost when an instrument is consumed or opened',
        'Emergency 24/7 restocking courier access across regional health corridors',
        'Eliminates upfront capital expenditures on high-value cardiovascular & neuro surgical trays',
        'Consignment inventory audited bi-monthly by certified SMP clinical logistics managers'
      ]
    },
    {
      id: 'udi-marking',
      name: 'GS1 UDI Laser Marking & Serialization',
      headline: 'Permanent Corrosion-Resistant Laser Annealing for Sterile Processing Automation',
      description: 'Comply with FDA UDI and EU MDR device tracking regulations without degrading surgical stainless steel passivation. Our cold-laser annealing technology ensures indelible 2D Datamatrix codes that survive thousands of autoclaving cycles.',
      benefits: [
        'Direct Part Marking (DPM) compatible with all major surgical instrument tracking software (Censitrac, SPM, Impress)',
        'Custom human-readable alphanumeric strings for surgical department, room, and doctor initials',
        'ASTM A967 verified passivation integrity post-annealing to prevent pitting rust',
        'High-density 2D barcodes readable even under microscopic sterilization cameras'
      ]
    },
    {
      id: 'maintenance',
      name: 'Sharpening, Passivation & Tray Audits',
      headline: 'Comprehensive Preventive Maintenance & Surgical Edge Restoration',
      description: 'Maintain surgical precision and prolong instrument lifespan. SMP Surgitech’s certified instrument technicians perform ultrasonic micro-cleaning, mechanical blade realignment, Tungsten Carbide insert replacements, and chemical bath passivation.',
      benefits: [
        'Complete restorative sharpening of micro-scissors, osteotomes, and bone rongeurs',
        'Tungsten Carbide (TC) gold-brazed insert replacement for needle holders and Metzenbaums',
        'Chemical nitric/citric acid passivation restoration to eliminate free surface iron',
        'Detailed compliance audit certificate for The Joint Commission and DNV hospital inspections'
      ]
    },
    {
      id: 'custom-oem',
      name: 'OEM Sourcing & Custom Tray Assembly',
      headline: 'Tailored Surgical Tray Configurations & Prototype Specialty Forging',
      description: 'Partner with SMP Surgitech to configure customized multi-discipline surgical trays, specialized pediatric sets, or custom forged alloy prototypes tailored to specific surgeon preferences.',
      benefits: [
        'Turnkey anodized aluminum or stainless steel perforated sterilization cassettes with custom silicone brackets',
        'Direct metallurgical sourcing from certified German DIN forge partners in Tuttlingen',
        'Full technical documentation, CAD schematics, and DIN EN 285 autoclave cycle validation',
        'Flexible batch order minimums for academic medical teaching hospitals'
      ]
    }
  ];

  const currentServiceData = services.find((s) => s.id === activeService) || services[0];

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setServiceForm({
        hospitalName: '',
        contactName: '',
        workEmail: '',
        phone: '',
        serviceType: 'Hospital Consignment Inventory',
        department: 'Central Sterile & OR Management',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
          Enterprise Healthcare Solutions
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Core B2B Surgical Distribution Services
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Beyond individual instruments, SMP Surgitech partners with hospital surgical suites, procurement consortiums, and ambulatory surgery centers to optimize instrument lifecycles and ensure zero-downtime surgical readiness.
        </p>
      </div>

      {/* Services Selector & Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Service Selection Navigation */}
        <div className="lg:col-span-4 space-y-2">
          {services.map((svc) => {
            const isSelected = activeService === svc.id;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveService(svc.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`text-xs font-semibold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                  Service Category
                </div>
                <div className="font-display font-bold text-base mt-0.5">
                  {svc.name}
                </div>
              </button>
            );
          })}

          <div className="pt-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 block">Hospital Procurement Support:</span>
              <p>Need custom contract pricing or GPO alignment? Speak with a dedicated SMP Surgitech healthcare advisor.</p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-cyan-800 hover:text-cyan-950 font-bold flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Connect with Regional Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Service Panel */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 mb-1">
                Institutional Service Specification
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                {currentServiceData.headline}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {currentServiceData.description}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Core Institutional Deliverables & Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentServiceData.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific Lead Capture Form */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Request an Institutional Consultation for {currentServiceData.name}
                </h3>
                <p className="text-xs text-slate-500">
                  A regional healthcare logistics specialist will review your surgical suite volume and provide a detailed implementation roadmap.
                </p>
              </div>

              {formSent ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-700">
                    Your institutional inquiry has been routed to our Central Hospital Solutions team. An account representative will contact you within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleServiceSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Jordan Blake, MD"
                        value={serviceForm.contactName}
                        onChange={(e) => setServiceForm({ ...serviceForm, contactName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="jblake@hospital.org"
                        value={serviceForm.workEmail}
                        onChange={(e) => setServiceForm({ ...serviceForm, workEmail: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Hospital / Health System *
                      </label>
                      <input
                        type="text"
                        placeholder="Northwestern Memorial Hospital"
                        value={serviceForm.hospitalName}
                        onChange={(e) => setServiceForm({ ...serviceForm, hospitalName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 234-5678"
                        value={serviceForm.phone}
                        onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Specific Service Scope or Annual Volume Details (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Number of surgical suites, current tray count, or target consignment timeline..."
                      value={serviceForm.message}
                      onChange={(e) => setServiceForm({ ...serviceForm, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Service Consultation Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
