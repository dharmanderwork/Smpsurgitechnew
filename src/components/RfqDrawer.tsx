import React, { useState } from 'react';
import { RfqItem, LeadInquiry } from '../types/instruments';
import { calculateRfqSummary, validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { X, Trash2, Send, Plus, Minus, CheckCircle2, Shield, ArrowRight, FileSpreadsheet } from 'lucide-react';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onOpenPdf: (product: any) => void;
  onProceedToFullRfqPortal: () => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onOpenPdf,
  onProceedToFullRfqPortal
}) => {
  const [formData, setFormData] = useState({
    contactName: '',
    workEmail: '',
    phone: '',
    hospitalName: '',
    department: 'Hospital Central Procurement',
    facilityType: 'Hospital' as LeadInquiry['facilityType'],
    country: 'United States',
    targetTimeline: 'Within 2 Weeks' as LeadInquiry['targetTimeline'],
    tenderReference: ''
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
      country: formData.country,
      targetTimeline: formData.targetTimeline,
      tenderReference: formData.tenderReference,
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
        country: formData.country,
        targetTimeline: formData.targetTimeline,
        tenderReference: formData.tenderReference,
        items: inquiryDraft.items!
      };

      setIsSubmitting(false);
      setSubmittedInquiry(confirmed);
      onClearAll();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col border-l border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rfq-drawer-title"
      >
        {/* Drawer Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <h2 id="rfq-drawer-title" className="text-base font-bold flex items-center gap-2">
              <span>Institutional RFQ Tray</span>
              <span className="text-xs bg-cyan-900/80 text-cyan-200 px-2 py-0.5 rounded font-mono font-normal">
                {items.length} {items.length === 1 ? 'Instrument' : 'Instruments'}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Consolidated quote request for hospital purchasing & tender committees
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close RFQ tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {submittedInquiry ? (
            <div className="bg-slate-900 rounded-xl p-6 text-white space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Consolidated Tender Request Sent</h3>
                  <p className="text-xs text-slate-400">Reference: {submittedInquiry.id}</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg text-xs space-y-2 border border-slate-800">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Submitted By</span>
                  <span className="font-semibold text-slate-200">{submittedInquiry.contactName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hospital Facility</span>
                  <span className="text-slate-200">{submittedInquiry.hospitalName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Distinct Lines</span>
                  <span className="font-mono text-cyan-300">{submittedInquiry.items.length} SKUs</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you. The surgical distribution logistics department will assemble line-item pricing, batch test documentation, and shipping schedule within 4 hours.
              </p>

              <button
                onClick={() => {
                  setSubmittedInquiry(null);
                  onClose();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Close Tray
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">Your RFQ Tray is Empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our catalog to add precision German stainless instruments, titanium micro-tools, and specialized sets.
              </p>
              <button
                onClick={onClose}
                className="mt-2 py-2 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Browse Instruments Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Selected Surgical Tools ({items.length})</span>
                  <button
                    onClick={onClearAll}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="p-3 bg-white flex items-center justify-between gap-3 text-xs">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900 text-[11px]">{product.sku}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 truncate">{product.specialty}</span>
                        </div>
                        <h4 className="font-semibold text-slate-800 truncate mt-0.5">{product.name}</h4>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-1">
                          <span>{product.alloy}</span>
                          <button
                            onClick={() => onOpenPdf(product)}
                            className="text-cyan-800 hover:underline font-medium"
                          >
                            [PDF Spec]
                          </button>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                          className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
                          aria-label={`Decrease quantity of ${product.sku}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-mono font-bold tabular-nums text-slate-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
                          aria-label={`Increase quantity of ${product.sku}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="p-1 text-slate-400 hover:text-red-600 rounded ml-1"
                          aria-label={`Remove ${product.sku} from RFQ tray`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Strip */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 flex justify-between items-center text-xs">
                  <span className="text-slate-600">Total Units Requested</span>
                  <span className="font-mono font-bold text-slate-900 tabular-nums">{summary.totalUnits} items</span>
                </div>
              </div>

              {/* Fast Lead Capture Submission */}
              <div className="pt-2 border-t border-slate-200 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Procurement Information
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Katherine Hayes, RN OR Lead"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      required
                    />
                    {errors.contactName && <p className="text-[11px] text-red-600 mt-1">{errors.contactName}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="khayes@hopkins.edu"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                      {errors.workEmail && <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone / Ext
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Hospital / Health System *
                      </label>
                      <input
                        type="text"
                        placeholder="Johns Hopkins Medicine"
                        value={formData.hospitalName}
                        onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                      {errors.hospitalName && <p className="text-[11px] text-red-600 mt-1">{errors.hospitalName}</p>}
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Department *
                      </label>
                      <input
                        type="text"
                        placeholder="OR Material Management"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                        required
                      />
                      {errors.department && <p className="text-[11px] text-red-600 mt-1">{errors.department}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Required Timeline
                    </label>
                    <select
                      value={formData.targetTimeline}
                      onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 bg-white"
                    >
                      <option value="Immediate (Emergency)">Immediate (Emergency Dispatch)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Quarterly Tender">Quarterly Hospital Tender</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Packaging Quote Dossier...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Multi-Item RFQ Request ({summary.totalUnits} Units)</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Or Navigate to Full Tender Portal */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    onClose();
                    onProceedToFullRfqPortal();
                  }}
                  className="text-xs text-cyan-800 hover:text-cyan-950 font-semibold flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  <span>Open Full Tender Documentation Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
