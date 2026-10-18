import React, { useState } from 'react';
import { Product, LeadInquiry } from '../types/instruments';
import { validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { CheckCircle2, Shield, Send, ArrowRight, Building2, User, Mail, Phone, Clock, FileText, MapPin } from 'lucide-react';

interface DirectInquiryFormProps {
  product: Product;
  onSuccess?: (inquiry: LeadInquiry) => void;
  compact?: boolean;
}

export const DirectInquiryForm: React.FC<DirectInquiryFormProps> = ({
  product,
  onSuccess,
  compact = false
}) => {
  const [formData, setFormData] = useState({
    contactName: '',
    workEmail: '',
    phone: '',
    hospitalName: '',
    department: 'Interventional Cardiology / Cath Lab',
    facilityType: 'Hospital / Cath Lab' as LeadInquiry['facilityType'],
    territoryState: 'South Rajasthan' as LeadInquiry['territoryState'],
    quantity: 1,
    targetTimeline: 'Immediate (Emergency Procedure)' as LeadInquiry['targetTimeline'],
    tenderReference: '',
    customLaserMarking: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<LeadInquiry | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inquiryDraft: Partial<LeadInquiry> = {
      contactName: formData.contactName,
      workEmail: formData.workEmail,
      phone: formData.phone,
      hospitalName: formData.hospitalName,
      department: formData.department,
      facilityType: formData.facilityType,
      territoryState: formData.territoryState,
      targetTimeline: formData.targetTimeline,
      tenderReference: formData.tenderReference,
      message: formData.message,
      items: [
        {
          sku: product.sku,
          productName: product.name,
          quantity: formData.quantity,
          customMarking: formData.customLaserMarking
        }
      ]
    };

    const validation = validateInquiryForm(inquiryDraft);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const confirmedInquiry: LeadInquiry = {
        id: generateRfqReference(),
        createdAt: new Date().toISOString(),
        status: 'Received',
        contactName: formData.contactName,
        workEmail: formData.workEmail,
        phone: formData.phone,
        hospitalName: formData.hospitalName,
        department: formData.department,
        facilityType: formData.facilityType,
        territoryState: formData.territoryState,
        targetTimeline: formData.targetTimeline,
        tenderReference: formData.tenderReference,
        message: formData.message,
        items: inquiryDraft.items!
      };

      setIsSubmitting(false);
      setSubmittedInquiry(confirmedInquiry);
      if (onSuccess) onSuccess(confirmedInquiry);
    }, 500);
  };

  if (submittedInquiry) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 text-white space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Quotation Request Registered</h3>
            <p className="text-xs text-slate-400">Dispatched immediately to SMP Surgitech Regional Cardiology Sales Desk</p>
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 space-y-2 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-slate-400">Official RFQ Tracking Code</span>
            <span className="font-mono font-bold text-cyan-400 text-sm">{submittedInquiry.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Selected Product</span>
            <span className="text-white font-medium">{product.name} ({product.sku})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Territory Logistics Desk</span>
            <span className="text-emerald-400 font-medium">{submittedInquiry.territoryState}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Fulfillment Priority</span>
            <span className="text-cyan-300 font-medium">{submittedInquiry.targetTimeline}</span>
          </div>
        </div>

        <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded text-xs text-cyan-200">
          A dedicated territory representative from our regional branch is reviewing your requirement. For emergency cath lab procedures, call our 24/7 hotline at <strong className="text-white">+91 94140 88210</strong>.
        </div>

        <button
          onClick={() => {
            setSubmittedInquiry(null);
            setFormData((prev) => ({ ...prev, quantity: 1, message: '' }));
          }}
          className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="bg-cyan-950/20 border border-cyan-900/30 rounded-lg p-3 text-xs flex items-center justify-between">
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-semibold">Inquiring For Product</span>
          <span className="font-bold text-slate-900">{product.name}</span>
          <span className="font-mono text-cyan-800 ml-2 font-semibold">[{product.sku}]</span>
        </div>
        <div className="text-right">
          <span className="text-slate-500 block text-[10px] uppercase font-semibold">Authorized Brand</span>
          <span className="font-semibold text-slate-800">{product.brand}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Full Name & Title *</span>
          </label>
          <input
            type="text"
            placeholder="Dr. R. K. Sharma / Cath Lab In-charge"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 ${
              errors.contactName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.contactName && <p className="text-red-600 text-[11px] mt-0.5">{errors.contactName}</p>}
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Institutional Email *</span>
          </label>
          <input
            type="email"
            placeholder="doctor@hospital.org"
            value={formData.workEmail}
            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 ${
              errors.workEmail ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.workEmail && <p className="text-red-600 text-[11px] mt-0.5">{errors.workEmail}</p>}
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>Direct Phone / Mobile *</span>
          </label>
          <input
            type="tel"
            placeholder="+91 94140 12345"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Hospital / Institution Name *</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Pacific Medical College, Udaipur"
            value={formData.hospitalName}
            onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 ${
              errors.hospitalName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.hospitalName && <p className="text-red-600 text-[11px] mt-0.5">{errors.hospitalName}</p>}
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Territory / State *</span>
          </label>
          <select
            value={formData.territoryState}
            onChange={(e) => setFormData({ ...formData, territoryState: e.target.value as any })}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
          >
            <option value="South Rajasthan">South Rajasthan (Udaipur, Dungarpur, Banswara, etc.)</option>
            <option value="Madhya Pradesh">Madhya Pradesh (Indore, Bhopal, Gwalior, Jabalpur)</option>
            <option value="Chhattisgarh">Chhattisgarh (Raipur, Bilaspur, Durg-Bhilai)</option>
            <option value="Uttar Pradesh">Part of Uttar Pradesh (Kanpur, Agra, Jhansi, Prayagraj)</option>
            <option value="Other">Other Territory / National Procurement</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Required Timeline</span>
          </label>
          <select
            value={formData.targetTimeline}
            onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
          >
            <option value="Immediate (Emergency Procedure)">Immediate (Emergency Cath Lab Procedure: 2-3h)</option>
            <option value="Within 24-48 Hours">Within 24-48 Hours</option>
            <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
            <option value="Monthly Cath Lab Consignment">Monthly Cath Lab Consignment Stock</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">
            Required Units / Quantity
          </label>
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">
            Specific Size Matrix / Stent Sizing
          </label>
          <input
            type="text"
            placeholder="e.g. 3.0 x 28 mm, 3.5 x 33 mm"
            value={formData.customLaserMarking}
            onChange={(e) => setFormData({ ...formData, customLaserMarking: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-700 font-semibold mb-1 text-xs">
          Clinical Notes / Procedure Requirements (Optional)
        </label>
        <textarea
          rows={2}
          placeholder="Specify if back-up console is required, size variations, or urgent OT scheduling..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs resize-none"
        />
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>CDSCO & ISO 13485 Compliant B2B Channel</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2.5 px-5 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-900 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Generating RFQ Reference...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-cyan-300" />
              <span>Submit Direct Quote Request</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
