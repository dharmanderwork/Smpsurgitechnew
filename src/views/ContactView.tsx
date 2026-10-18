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
  Headphones, 
  Truck 
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Procurement & Pricing Tender',
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
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
          Direct Healthcare Accounts
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Hospital Procurement & Territory Support
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Contact our dedicated surgical instrumentation accounts desk, request regional territory representative visits, or initiate immediate OR courier dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Emergency OR Logistics Box */}
          <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Emergency O.R. Logistics Desk</span>
            </div>
            <h3 className="text-xl font-bold font-display">
              24/7/365 Rapid Courier Dispatch
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For emergency surgical procedure backup stock and rapid hospital tray replenishment:
            </p>
            <div className="pt-2 text-sm font-mono font-bold text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 (800) 787-4483 (Ext. 1)</span>
            </div>
            <div className="text-xs text-slate-400">
              Average metropolitan dispatch: Under 2 hours to central sterile docks.
            </div>
          </div>

          {/* Regional Territory Support Contacts */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
              Regional Institutional Accounts
            </h3>
            <div className="space-y-3 divide-y divide-slate-100">
              <div className="pt-2">
                <span className="font-bold text-slate-900 block">Midwest & Great Lakes Health Systems</span>
                <span className="text-slate-600">midwest-sales@smpsurgitech.com</span>
                <span className="text-slate-500 block">Direct: +1 (312) 555-0144</span>
              </div>
              <div className="pt-2">
                <span className="font-bold text-slate-900 block">East Coast Academic Consortia</span>
                <span className="text-slate-600">eastcoast-sales@smpsurgitech.com</span>
                <span className="text-slate-500 block">Direct: +1 (212) 555-0182</span>
              </div>
              <div className="pt-2">
                <span className="font-bold text-slate-900 block">West Coast & Pacific Surgical Centers</span>
                <span className="text-slate-600">westcoast-sales@smpsurgitech.com</span>
                <span className="text-slate-500 block">Direct: +1 (415) 555-0199</span>
              </div>
            </div>
          </div>

          {/* Corporate Offices */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-xs space-y-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider">
              Distribution & Engineering Center
            </h3>
            <div className="flex items-start gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
              <span>4400 Innovation Way, Suite 300, Medical Logistics Center, Chicago, IL 60611</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-cyan-800 shrink-0" />
              <span>Distribution Docks: Mon-Fri 06:00 - 22:00 CST (Emergency 24/7)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Capture Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
                Institutional Contact
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display mt-0.5">
                Send Direct Requisition Inquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                All submissions are assigned a direct corporate ticket and managed by a certified surgical equipment consultant.
              </p>
            </div>

            {submitted ? (
              <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">Inquiry Transmitted</h3>
                    <p className="text-xs text-slate-400">Reference: {inquiryRef}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you, {form.name}. Your inquiry has been dispatched to our Institutional Sales Division. A representative will contact you at <strong>{form.email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. Gregory Stevens, MD"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Institutional Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="gstevens@northshore.org"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Hospital / Clinic / GPO *
                    </label>
                    <input
                      type="text"
                      placeholder="NorthShore University HealthSystem"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Direct Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (847) 555-0199"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 bg-white"
                  >
                    <option value="Procurement & Pricing Tender">Formal Hospital Tender & Volume Pricing</option>
                    <option value="Consignment Stock Setup">Central Sterile Consignment Stock Program</option>
                    <option value="Custom UDI Laser Etching">Custom Laser UDI & DPM Part Marking</option>
                    <option value="Tray Sharpening & Passivation">Tray Sharpening & Annual Passivation Audit</option>
                    <option value="Other">General Corporate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Clinical Specification or Tender Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe specific instruments, annual surgery volumes, or tender specifications..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Institutional Transmission</span>
                </button>

                <div className="pt-2 text-center text-[11px] text-slate-500">
                  <span>HIPAA & ISO 13485 Encrypted Communication Channel</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
