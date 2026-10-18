import React, { useState } from 'react';
import { RfqItem, LeadInquiry, Product } from '../types/instruments';
import { calculateRfqSummary, validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { X, Trash2, Send, Plus, Minus, CheckCircle2, Shield, ArrowRight, Building2, User, Mail, Phone, Clock, FileText, MapPin } from 'lucide-react';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onOpenPdf: (product: Product) => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onOpenPdf
}) => {
  const [formData, setFormData] = useState({
    contactName: '',
    workEmail: '',
    phone: '',
    hospitalName: '',
    department: 'Cath Lab Procurement / Supply Chain',
    facilityType: 'Hospital / Cath Lab' as LeadInquiry['facilityType'],
    territoryState: 'South Rajasthan' as LeadInquiry['territoryState'],
    targetTimeline: 'Immediate (Emergency Procedure)' as LeadInquiry['targetTimeline'],
    tenderReference: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<LeadInquiry | null>(null);

  if (!isOpen) return null;

  const summary = calculateRfqSummary(items);

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
      items: items.map((i) => ({
        sku: i.product.sku,
        productName: i.product.name,
        quantity: i.quantity,
        customMarking: i.customLaserMarking
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
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-drawer-title"
      >
        {/* Drawer Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-tight">Hospital Procurement RFQ Tray</span>
              <span className="bg-cyan-950 text-cyan-300 font-mono text-[11px] px-2 py-0.5 rounded border border-cyan-800">
                {summary.totalUnits} Units ({summary.distinctSkus} Items)
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Consolidated tender quotation request · Direct to SMP Surgitech logistics
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close RFQ Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {submittedInquiry ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-white space-y-5 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Consolidated Tender RFQ Submitted</h3>
                  <p className="text-xs text-slate-400">Formal quote document generated and dispatched to field operations</p>
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Official RFQ Reference Code</span>
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
                  <span className="text-slate-400">Total Items Registered</span>
                  <span className="text-emerald-400 font-medium">{submittedInquiry.items.length} Product Models</span>
                </div>
              </div>

              <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded text-xs text-cyan-200">
                A sales operations lead from our regional warehouse (Udaipur / Indore / Raipur / Agra) will contact you immediately with stock availability, batch expiry certifications, and institutional quotation.
              </div>

              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  onClose();
                }}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close & Return to Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Product Items List */}
              {items.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm">Your RFQ Tray is Empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Add coronary stents, OCT/FFR systems, IABP consoles, or surgical instrument sets from the catalog to submit a consolidated quote request.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Selected Clinical Instruments ({items.length})
                    </span>
                    <button
                      onClick={onClearAll}
                      className="text-[11px] text-red-600 hover:text-red-800 font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="p-3 bg-white flex items-center justify-between gap-3 text-xs">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-900 text-[11px]">{product.sku}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-cyan-900 font-semibold truncate">{product.brand}</span>
                          </div>
                          <h4 className="font-semibold text-slate-800 truncate mt-0.5">{product.name}</h4>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-1">
                            <span>{product.specs.profileOrSize}</span>
                            <button
                              onClick={() => onOpenPdf(product)}
                              className="text-cyan-800 hover:underline font-medium"
                            >
                              [View PDF Spec]
                            </button>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                            className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                            aria-label={`Decrease quantity of ${product.sku}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-mono font-bold text-slate-900">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                            aria-label={`Increase quantity of ${product.sku}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(product.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition-colors cursor-pointer ml-1"
                            title="Remove from tray"
                            aria-label={`Remove ${product.sku} from RFQ Tray`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inquiry Lead Form */}
              {items.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Procurement Officer & Hospital Details
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>Contact Name & Title *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Dr. Vivek Sharma / Purchase Head"
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 ${
                            errors.contactName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                          }`}
                        />
                        {errors.contactName && <p className="text-red-600 text-[11px] mt-0.5">{errors.contactName}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span>Work Email *</span>
                          </label>
                          <input
                            type="email"
                            placeholder="procurement@hospital.org"
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
                            <span>Mobile Phone *</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98260 12345"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            <span>Hospital / Institution Name *</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Medanta Cardiac Care / Apollo"
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
                            <option value="South Rajasthan">South Rajasthan (Udaipur, Dungarpur, Banswara, Bhilwara...)</option>
                            <option value="Madhya Pradesh">Madhya Pradesh (Indore, Bhopal, Jabalpur, Gwalior...)</option>
                            <option value="Chhattisgarh">Chhattisgarh (Raipur, Bilaspur, Durg-Bhilai...)</option>
                            <option value="Uttar Pradesh">Part of Uttar Pradesh (Kanpur, Agra, Jhansi, Prayagraj...)</option>
                            <option value="Other">Other Region / National</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>Fulfillment Urgency</span>
                          </label>
                          <select
                            value={formData.targetTimeline}
                            onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs"
                          >
                            <option value="Immediate (Emergency Procedure)">Immediate Emergency (2-3 Hours)</option>
                            <option value="Within 24-48 Hours">Within 24-48 Hours</option>
                            <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                            <option value="Monthly Cath Lab Consignment">Monthly Cath Lab Consignment Stock</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">
                            Tender or Purchase Order Reference (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. TND-2026-CARDIO-89"
                            value={formData.tenderReference}
                            onChange={(e) => setFormData({ ...formData, tenderReference: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">
                          Consignment / Clinical Notes (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Include catheter size ratios, standby console requirements, or special packaging notes..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-800 text-xs resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-slate-900 hover:bg-cyan-950 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Hospital Quote Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-cyan-300" />
                          <span>Submit Formal Tender RFQ ({summary.totalUnits} Units)</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Official Authorized Distributor · 100% Cold Chain Compliant</span>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
