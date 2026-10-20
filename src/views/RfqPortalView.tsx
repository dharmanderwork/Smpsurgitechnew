import React, { useState } from 'react';
import { RfqItem, LeadInquiry, Product } from '../types/instruments';
import { calculateRfqSummary, validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { 
  ClipboardList, 
  Trash2, 
  Send, 
  Plus, 
  Minus, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Clock, 
  FileText, 
  Printer, 
  Download,
  MapPin,
  HeartPulse
} from 'lucide-react';

interface RfqPortalViewProps {
  rfqItems: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onNavigate: (view: string) => void;
  onOpenPdf: (product: Product) => void;
}

export const RfqPortalView: React.FC<RfqPortalViewProps> = ({
  rfqItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onNavigate,
  onOpenPdf
}) => {
  const [formData, setFormData] = useState({
    contactName: '',
    workEmail: '',
    phone: '',
    hospitalName: '',
    department: 'Cardiology Cath Lab & Procurement',
    facilityType: 'Hospital / Cath Lab' as LeadInquiry['facilityType'],
    territoryState: 'South Rajasthan' as LeadInquiry['territoryState'],
    targetTimeline: 'Immediate (Emergency Procedure)' as LeadInquiry['targetTimeline'],
    tenderReference: '',
    customLaserMarking: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<LeadInquiry | null>(null);

  const summary = calculateRfqSummary(rfqItems);

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
      items: rfqItems.map((i) => ({
        sku: i.product.sku,
        productName: i.product.name,
        quantity: i.quantity,
        customMarking: formData.customLaserMarking || i.customLaserMarking
      }))
    };

    const validation = validateInquiryForm(inquiryDraft);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const confirmed: LeadInquiry = {
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
      setSubmittedInquiry(confirmed);
      onClearAll();
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800 flex items-center gap-1.5">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Consolidated Institutional Tender System</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Hospital Procurement Cart & Formal RFQ
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Review items in your procurement cart, configure quantity requirements, and generate an official hospital tender dossier directly to our regional distribution hubs.
        </p>
      </div>

      {submittedInquiry ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white space-y-6 max-w-2xl mx-auto text-center animate-fade-in shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display">Tender RFQ Dispatched</h2>
            <p className="text-xs text-slate-400">
              Your inquiry has been assigned to our regional territory sales director.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-left space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-slate-400">Official RFQ Tracking ID</span>
              <span className="font-mono font-bold text-cyan-400 text-base">{submittedInquiry.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Territory Logistics Desk</span>
              <span className="text-white font-medium">{submittedInquiry.territoryState}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Fulfillment Priority</span>
              <span className="text-cyan-300 font-medium">{submittedInquiry.targetTimeline}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Items in Tender</span>
              <span className="text-emerald-400 font-medium">{submittedInquiry.items.length} Product Models</span>
            </div>
          </div>

          <div className="p-4 bg-cyan-950/40 border border-cyan-800/60 rounded-lg text-xs text-cyan-200 text-left">
            Our Udaipur / Indore / Raipur / Agra operations center will dispatch official institutional pricing, batch certificates, and consignment SLA contracts.
          </div>

          <button
            onClick={() => {
              setSubmittedInquiry(null);
              onNavigate('catalog');
            }}
            className="px-6 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Return to Product Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Basket Items */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <h2 className="text-base font-bold text-slate-900 font-display">
                Procurement Cart Items ({rfqItems.length})
              </h2>
              {rfqItems.length > 0 && (
                <button
                  onClick={onClearAll}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All Items</span>
                </button>
              )}
            </div>

            {rfqItems.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-800 text-sm">Your Procurement Cart is Empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our catalog of XIENCE stents, CRM pacemakers, catheters, and surgical sets to add products to your quotation cart.
                </p>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="py-2 px-4 bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {rfqItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-cyan-900">{product.sku}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-600 font-semibold">{product.brand}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm truncate">{product.name}</h4>
                      <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3 pt-1">
                        <span>Profile: {product.specs.profileOrSize}</span>
                        <span>·</span>
                        <button
                          onClick={() => onOpenPdf(product)}
                          className="text-cyan-800 font-semibold hover:underline"
                        >
                          View PDF Spec
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="w-7 h-7 bg-white hover:bg-slate-200 rounded flex items-center justify-center text-slate-700 cursor-pointer shadow-2xs"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-mono font-bold text-xs text-slate-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 bg-white hover:bg-slate-200 rounded flex items-center justify-center text-slate-700 cursor-pointer shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Institutional Submission Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="font-display font-bold text-base text-slate-950">
                Institutional Requisition Form
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Official hospital procurement & consignment lead dispatch
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Contact Officer Name *</label>
                <input
                  type="text"
                  placeholder="Dr. / Materials Officer Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                />
                {errors.contactName && <p className="text-red-600 text-[11px] mt-0.5">{errors.contactName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    placeholder="procurement@hospital.org"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                  {errors.workEmail && <p className="text-red-600 text-[11px] mt-0.5">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Direct Mobile Phone *</label>
                  <input
                    type="tel"
                    placeholder="+91 94140 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Hospital Name *</label>
                  <input
                    type="text"
                    placeholder="Institution Name"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                  />
                  {errors.hospitalName && <p className="text-red-600 text-[11px] mt-0.5">{errors.hospitalName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Territory State *</label>
                  <select
                    value={formData.territoryState}
                    onChange={(e) => setFormData({ ...formData, territoryState: e.target.value as any })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                  >
                    <option value="South Rajasthan">South Rajasthan (Udaipur, Dungarpur, Banswara...)</option>
                    <option value="Madhya Pradesh">Madhya Pradesh (Indore, Bhopal, Jabalpur...)</option>
                    <option value="Chhattisgarh">Chhattisgarh (Raipur, Bilaspur...)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (Kanpur, Agra, Jhansi...)</option>
                    <option value="Other">Other Region / National</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Fulfillment Urgency</label>
                <select
                  value={formData.targetTimeline}
                  onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                >
                  <option value="Immediate (Emergency Procedure)">Immediate (Emergency Procedure: 2-3h)</option>
                  <option value="Within 24-48 Hours">Within 24-48 Hours</option>
                  <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                  <option value="Monthly Cath Lab Consignment">Monthly Cath Lab Consignment</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tender / Purchase Reference (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. TND-2026-CV-01"
                  value={formData.tenderReference}
                  onChange={(e) => setFormData({ ...formData, tenderReference: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Clinical Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Special catheter sizes, standby console requirements, or scheduled surgery dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 resize-none text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || rfqItems.length === 0}
                className="w-full py-3 bg-slate-900 hover:bg-cyan-950 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-40"
              >
                {isSubmitting ? (
                  <span>Generating Official RFQ...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-cyan-300" />
                    <span>Submit Formal RFQ Tender ({summary.totalUnits} Units)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
