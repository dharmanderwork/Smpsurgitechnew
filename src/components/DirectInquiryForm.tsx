import React, { useState } from 'react';
import { Product, LeadInquiry } from '../types/instruments';
import { validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { CheckCircle2, Shield, Send, ArrowRight, Building2, User, Mail, Phone, Clock, FileText } from 'lucide-react';

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
    department: 'Operating Room Purchasing',
    facilityType: 'Hospital' as LeadInquiry['facilityType'],
    country: 'United States',
    quantity: 1,
    targetTimeline: 'Within 2 Weeks' as LeadInquiry['targetTimeline'],
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
      country: formData.country,
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
        country: formData.country,
        targetTimeline: formData.targetTimeline,
        tenderReference: formData.tenderReference,
        message: formData.message,
        items: inquiryDraft.items!
      };

      setIsSubmitting(false);
      setSubmittedInquiry(confirmedInquiry);
      if (onSuccess) onSuccess(confirmedInquiry);
    }, 600);
  };

  if (submittedInquiry) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 text-white space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold">RFQ Inbound Registered</h3>
            <p className="text-xs text-slate-400">Direct hospital sales inquiry forwarded to medical logistics desk</p>
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 space-y-2 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-slate-400">Official RFQ Reference</span>
            <span className="font-mono font-bold text-cyan-400 text-sm">{submittedInquiry.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Instrument SKU</span>
            <span className="font-mono text-slate-200">{product.sku}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Instrument Description</span>
            <span className="font-medium text-slate-200 truncate max-w-[240px]">{product.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Quantity Requested</span>
            <span className="font-bold text-slate-200 tabular-nums">{formData.quantity} units</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Hospital / Facility</span>
            <span className="text-slate-200">{submittedInquiry.hospitalName} ({submittedInquiry.department})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Target Delivery Timeline</span>
            <span className="text-slate-200">{submittedInquiry.targetTimeline}</span>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          A dedicated SMP Surgitech territory account manager and clinical specialist will respond within <strong className="text-slate-200">2-4 business hours</strong> with a formal corporate quotation including institutional tier discounts, freight options, and CE/ISO batch certificates.
        </p>

        <button
          onClick={() => setSubmittedInquiry(null)}
          className="w-full py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          Submit Another Inquiry for This Product
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-slate-200/90 rounded-xl ${compact ? 'p-4 sm:p-5' : 'p-6 sm:p-8'} shadow-sm`}>
      <div className="border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-900">
            Institutional Quote Request
          </span>
          <span className="text-[11px] text-slate-500 font-mono">
            {product.sku}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mt-1">
          Direct Sales & Tender Inquiry
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          SMP Surgitech provides custom institutional pricing, consignment inventory terms, and bulk tender discounts.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quantity and Custom Laser Marking Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Quantity Needed (Units) *
            </label>
            <input
              type="number"
              min={1}
              max={5000}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Custom Laser Marking (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. OR-SURG-TRAY-04"
              value={formData.customLaserMarking}
              onChange={(e) => setFormData({ ...formData, customLaserMarking: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Contact Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Robert Chen, MD"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                errors.contactName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
              required
            />
            {errors.contactName && <p className="text-[11px] text-red-600 mt-1">{errors.contactName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Institutional Email *
            </label>
            <input
              type="email"
              placeholder="e.g. rchen@clevelandclinic.org"
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                errors.workEmail ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
              required
            />
            {errors.workEmail && <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>}
          </div>
        </div>

        {/* Hospital Name & Department */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Hospital / Clinic / Organization *
            </label>
            <input
              type="text"
              placeholder="e.g. Cleveland Clinic Main Campus"
              value={formData.hospitalName}
              onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
              className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                errors.hospitalName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
              required
            />
            {errors.hospitalName && <p className="text-[11px] text-red-600 mt-1">{errors.hospitalName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Department / Role *
            </label>
            <input
              type="text"
              placeholder="e.g. OR Materials Management / Chief of Surgery"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                errors.department ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
              required
            />
            {errors.department && <p className="text-[11px] text-red-600 mt-1">{errors.department}</p>}
          </div>
        </div>

        {/* Phone & Delivery Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone / Direct Extension
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 012-3456"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Target Delivery Timeline
            </label>
            <select
              value={formData.targetTimeline}
              onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 bg-white"
            >
              <option value="Immediate (Emergency)">Immediate (Emergency O.R. Dispatch)</option>
              <option value="Within 2 Weeks">Within 2 Weeks (Standard Replenishment)</option>
              <option value="Within 1 Month">Within 1 Month</option>
              <option value="Quarterly Tender">Quarterly Hospital Tender</option>
            </select>
          </div>
        </div>

        {/* Notes / Special Clinical Requirements */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Clinical Specifications & Tender Notes (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Special passivation certificates, specific tray compatibility, or tender documentation requests..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Generating RFQ Reference...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Direct Quote Request for {product.sku}</span>
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-cyan-800" />
            ISO 13485 Encrypted B2B Transfer
          </span>
          <span aria-hidden="true">·</span>
          <span>Zero Obligation Quotation</span>
        </div>
      </form>
    </div>
  );
};
