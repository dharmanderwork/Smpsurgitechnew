import React, { useState } from 'react';
import { generateRfqReference } from '../utils/rfq';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Truck,
  HeartPulse
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    territoryState: 'South Rajasthan',
    inquiryType: 'Cath Lab Emergency Consignment',
    productInterest: 'XIENCE Stents (Skypoint, Xpedition 48, Sierra, Alpine)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRfqReference();
    setInquiryRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Institutional Healthcare Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Hospital Procurement & Territory Support
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Connect directly with SMP Surgitech regional logistics coordinators in South Rajasthan, Madhya Pradesh, Chhattisgarh, and Uttar Pradesh.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Emergency Cath Lab Logistics Box */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>24/7 Cath Lab Emergency Hotline</span>
            </div>
            <h3 className="text-xl font-bold font-display">
              Acute Coronary Procedure Dispatch
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Immediate courier dispatch for emergency stent matrices, OCT/FFR pressure wires, IABP balloon catheters, and standby hemodynamic consoles.
            </p>
            <div className="pt-2">
              <div className="font-mono text-xl font-bold text-cyan-300">
                +91 94140 88210
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Direct Emergency Cath Lab Coordinator Desk
              </div>
            </div>
          </div>

          {/* Regional Hubs Directory */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-950 text-sm border-b border-slate-100 pb-2">
              Regional Branch Operations
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-800" />
                  <span>South Rajasthan Central Warehouse</span>
                </div>
                <div className="text-slate-600 pl-5">
                  Udaipur, serving Dungarpur, Banswara, Pratapgarh, Rajsamand, Chittorgarh, Bhilwara.
                </div>
                <div className="font-mono text-cyan-900 pl-5 text-[11px] font-semibold">
                  Phone: +91 (0294) 249-8800 / +91 94140 88210
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-800" />
                  <span>Madhya Pradesh Regional Hub</span>
                </div>
                <div className="text-slate-600 pl-5">
                  Indore & Bhopal Central hubs, serving Jabalpur, Gwalior, Ujjain, Sagar, Rewa.
                </div>
                <div className="font-mono text-cyan-900 pl-5 text-[11px] font-semibold">
                  Phone: +91 98260 55190
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-800" />
                  <span>Chhattisgarh Regional Office</span>
                </div>
                <div className="text-slate-600 pl-5">
                  Raipur & Durg-Bhilai facilities, serving Bilaspur, Korba, Jagdalpur.
                </div>
                <div className="font-mono text-cyan-900 pl-5 text-[11px] font-semibold">
                  Phone: +91 94252 44120
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-800" />
                  <span>Uttar Pradesh Corridor</span>
                </div>
                <div className="text-slate-600 pl-5">
                  Agra & Kanpur specialized interventional corridor, serving Jhansi, Prayagraj, Varanasi.
                </div>
                <div className="font-mono text-cyan-900 pl-5 text-[11px] font-semibold">
                  Phone: +91 97920 33410
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: B2B Quote & Account Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="font-display font-bold text-base sm:text-lg text-slate-950">
              Submit Direct Procurement or Lead Inquiry
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Strictly B2B institutional correspondence. Inquiries answered within 2 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-slate-950">Inquiry Logged Successfully</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your RFQ Reference number is <strong className="font-mono text-cyan-800">{inquiryRef}</strong>. Our designated territory manager has been assigned.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="py-2 px-5 bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Dr. / Mr. / Ms."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Institutional Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@hospital.org"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Direct Phone / Mobile *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 94140 12345"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Hospital / Cath Lab Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Pacific Medical College"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Territory State *</label>
                  <select
                    value={form.territoryState}
                    onChange={(e) => setForm({ ...form, territoryState: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                  >
                    <option value="South Rajasthan">South Rajasthan (Udaipur, Dungarpur, Banswara, Bhilwara...)</option>
                    <option value="Madhya Pradesh">Madhya Pradesh (Indore, Bhopal, Jabalpur, Gwalior...)</option>
                    <option value="Chhattisgarh">Chhattisgarh (Raipur, Bilaspur, Durg-Bhilai...)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (Kanpur, Agra, Jhansi, Prayagraj...)</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nature of Inquiry *</label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                  >
                    <option value="Cath Lab Emergency Consignment">Cath Lab Emergency Stent Consignment</option>
                    <option value="Standby Console Deployment">Standby IABP / CoroFlow Console</option>
                    <option value="Formal Tender RFQ Pricing">Formal Hospital Tender RFQ Pricing</option>
                    <option value="Product PDF Technical Dossier Request">Product PDF Technical Dossier Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Product Line of Interest</label>
                <select
                  value={form.productInterest}
                  onChange={(e) => setForm({ ...form, productInterest: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                >
                  <option value="XIENCE Stents (Skypoint, Xpedition 48, Sierra, Alpine)">XIENCE Stents (Skypoint, Xpedition 48, Sierra, Alpine)</option>
                  <option value="OCT Optical Coherence Tomography & Dragonfly">OCT Optical Coherence Tomography & Dragonfly</option>
                  <option value="FFR PressureWire Physiology">FFR PressureWire Physiology</option>
                  <option value="CoroFlow Cardiovascular Microvascular System">CoroFlow Cardiovascular Microvascular System</option>
                  <option value="TAVI Transcatheter Aortic Valve System">TAVI Transcatheter Aortic Valve System</option>
                  <option value="IMPELLA Percutaneous Ventricular Assist Device">IMPELLA Percutaneous Ventricular Assist Device</option>
                  <option value="IABP Pump Console & AutoCAT Catheters">IABP Pump Console & AutoCAT Catheters</option>
                  <option value="Pocket ECG Mobile Telemetry">Pocket ECG Mobile Telemetry</option>
                  <option value="SMP Cardiovascular & CABG Surgical Sets">SMP Cardiovascular & CABG Surgical Sets</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Provide any details regarding procedure schedules, catheter sizes, or delivery timelines..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="py-3 px-6 bg-slate-900 hover:bg-cyan-950 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4 text-cyan-300" />
                <span>Submit Direct Procurement Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
