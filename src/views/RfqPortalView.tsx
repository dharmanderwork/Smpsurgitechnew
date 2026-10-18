import React, { useState } from 'react';
import { Product, RfqItem, LeadInquiry } from '../types/instruments';
import { calculateRfqSummary, validateInquiryForm, generateRfqReference } from '../utils/rfq';
import { 
  ClipboardList, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileSpreadsheet, 
  Printer, 
  Building2, 
  Calendar, 
  Clock,
  ArrowRight
} from 'lucide-react';

interface RfqPortalViewProps {
  products: Product[];
  rfqItems: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onAddProduct: (product: Product) => void;
  onNavigate: (view: string) => void;
  onOpenPdf: (product: Product) => void;
}

export const RfqPortalView: React.FC<RfqPortalViewProps> = ({
  products,
  rfqItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onAddProduct,
  onNavigate,
  onOpenPdf
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
      country: formData.country,
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
        country: formData.country,
        targetTimeline: formData.targetTimeline,
        tenderReference: formData.tenderReference,
        message: formData.message,
        items: inquiryDraft.items!
      };

      setIsSubmitting(false);
      setSubmittedInquiry(confirmed);
      onClearAll();
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
          Institutional Tender & Procurement Portal
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
          Request for Quote (RFQ) Builder
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Configure line items, specify custom laser marking requirements, and submit institutional RFQ tenders for academic medical centers, GPOs, and surgery networks.
        </p>
      </div>

      {submittedInquiry ? (
        /* Confirmation Screen */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-white space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display">
                Institutional RFQ Tender Received
              </h2>
              <p className="text-xs text-slate-400">
                Official transmission logged in SMP Surgitech Central Hospital Logistics
              </p>
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3 text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-slate-400">Official RFQ Tracking Code</span>
              <span className="font-mono font-bold text-cyan-400 text-base">{submittedInquiry.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Procurement Officer</span>
              <span className="text-slate-200 font-medium">{submittedInquiry.contactName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Healthcare Organization</span>
              <span className="text-slate-200">{submittedInquiry.hospitalName} ({submittedInquiry.department})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Distinct Lines</span>
              <span className="font-mono text-cyan-300">{submittedInquiry.items.length} Surgical SKUs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Delivery Target</span>
              <span className="text-slate-200">{submittedInquiry.targetTimeline}</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Your quotation package is now assigned to our Senior Surgical Contract Specialist. You will receive an official line-item corporate proposal including volume discount tiers, net-30 invoicing paperwork, and CE/ISO batch testing certificates within <strong>2 to 4 business hours</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print RFQ Confirmation</span>
            </button>
            <button
              onClick={() => {
                setSubmittedInquiry(null);
                onNavigate('catalog');
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Return to Catalog
            </button>
          </div>
        </div>
      ) : (
        /* Standard RFQ Form & Basket */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Items List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-cyan-800" />
                  <h2 className="text-base font-bold text-slate-900 font-display">
                    Line Item Requisition ({rfqItems.length})
                  </h2>
                </div>
                {rfqItems.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="text-xs font-medium text-red-600 hover:text-red-700"
                  >
                    Clear Tray
                  </button>
                )}
              </div>

              {rfqItems.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    No instruments selected yet
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Add surgical instruments directly from our catalog to prepare a consolidated quotation inquiry.
                  </p>
                  <button
                    onClick={() => onNavigate('catalog')}
                    className="mt-2 py-2 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Explore Product Catalog
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {rfqItems.map(({ product, quantity }) => (
                    <div key={product.id} className="py-4 flex items-center justify-between gap-4 text-xs">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900 text-[11px]">{product.sku}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{product.specialty}</span>
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm mt-0.5 truncate">{product.name}</h4>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2">
                          <span>{product.alloy}</span>
                          <span aria-hidden="true">·</span>
                          <span>{product.dimensions.totalLength}</span>
                          <button
                            onClick={() => onOpenPdf(product)}
                            className="text-cyan-800 hover:underline font-semibold ml-1 cursor-pointer"
                          >
                            [PDF Spec]
                          </button>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                          <button
                            onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                            className="w-6 h-6 rounded hover:bg-slate-200 flex items-center justify-center text-slate-700"
                            aria-label={`Decrease ${product.sku} quantity`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-mono font-bold tabular-nums text-slate-900">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="w-6 h-6 rounded hover:bg-slate-200 flex items-center justify-center text-slate-700"
                            aria-label={`Increase ${product.sku} quantity`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded"
                          aria-label={`Remove ${product.sku}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Summary Bar */}
                  <div className="pt-4 flex items-center justify-between font-bold text-xs text-slate-900">
                    <span>Total Surgical Units</span>
                    <span className="font-mono text-sm tabular-nums text-cyan-900">{summary.totalUnits} Units</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Catalog Adder Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Quick Add Suggested Instruments to RFQ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {products.slice(0, 4).map((p) => {
                  const alreadyIn = rfqItems.some((i) => i.product.id === p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => onAddProduct(p)}
                      disabled={alreadyIn}
                      className="p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-colors cursor-pointer disabled:opacity-50 disabled:bg-slate-100 bg-white border-slate-200 hover:border-cyan-700"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-mono text-[10px] text-slate-500 block">{p.sku}</span>
                        <span className="font-semibold text-slate-900 truncate block">{p.name}</span>
                      </div>
                      <Plus className="w-4 h-4 text-cyan-800 shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Lead Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5 sticky top-24">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-800">
                  Institutional Form
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                  Procurement Requisition Details
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Institutional pricing, GPO tier validation, and payment term evaluation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sandra Ortiz, Materials Manager"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                      errors.contactName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
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
                      placeholder="sortiz@ucsf.edu"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                        errors.workEmail ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
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
                      placeholder="+1 (415) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Hospital / Health Network Name *
                  </label>
                  <input
                    type="text"
                    placeholder="UCSF Medical Center at Mission Bay"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 ${
                      errors.hospitalName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                    required
                  />
                  {errors.hospitalName && <p className="text-[11px] text-red-600 mt-1">{errors.hospitalName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Department *
                    </label>
                    <input
                      type="text"
                      placeholder="Surgical Services / SPD"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Facility Type
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value as any })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 bg-white"
                    >
                      <option value="Hospital">Hospital / Health System</option>
                      <option value="Ambulatory Surgery Center">Ambulatory Surgery Center</option>
                      <option value="Government/Military">Government / VA / Military</option>
                      <option value="GPO/Distributor">GPO / Wholesale Distributor</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Required Delivery
                    </label>
                    <select
                      value={formData.targetTimeline}
                      onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value as any })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 bg-white"
                    >
                      <option value="Immediate (Emergency)">Immediate (Emergency)</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Quarterly Tender">Quarterly Hospital Tender</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Tender Reference (Opt)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. RFP-2026-MED-9"
                      value={formData.tenderReference}
                      onChange={(e) => setFormData({ ...formData, tenderReference: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Custom Laser Marking / Tray Serialization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. UCSF-OR-CV-01 (Laser Etched on Shanks)"
                    value={formData.customLaserMarking}
                    onChange={(e) => setFormData({ ...formData, customLaserMarking: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Procurement Notes & Delivery Terms
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify dock delivery, consignment terms, or specific passivation audit needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800 placeholder:text-slate-400"
                  />
                </div>

                {errors.items && (
                  <p className="text-[11px] text-red-600 bg-red-50 p-2 rounded border border-red-200">
                    {errors.items}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || rfqItems.length === 0}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-cyan-900 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Institutional RFQ...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Tender Requisition ({summary.totalUnits} Units)</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
