export type CardiologyCategory =
  | 'Coronary Stents (XIENCE)'
  | 'Diagnostic Physiology & Imaging (OCT / FFR)'
  | 'Cardiovascular Physiology Systems (CoroFlow)'
  | 'Structural Heart (TAVI)'
  | 'Mechanical Circulatory Support (Impella & IABP)'
  | 'Diagnostic Monitoring (Pocket ECG)'
  | 'Cardiovascular Surgical Instruments'
  | 'Cardiac Rhythm Management (CRM)'
  | 'Temporary Pacing Accessories'
  | 'Structural Heart (Congenital Interventions)'
  | 'Cardiology Access Catheters'
  | 'Cordis Interventional Products'
  | 'Cath Lab Consumables'
  | (string & {});

export type BrandManufacturer =
  | 'Abbott (Vascular Division)'
  | 'Abbott (Structural Heart Division)'
  | 'Cordis (Cardiology)'
  | 'Teleflex (Vascular Division)'
  | 'Teleflex (Arrow)'
  | 'St. Jude Medical (CRM & Structural Heart)'
  | 'St. Jude Medical India Pvt. Ltd. (CRM Division)'
  | 'St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)'
  | 'Manufacturer / model to be confirmed (CRM)'
  | 'J&J MedTech (Surgical Solutions)'
  | 'Pocket ECG (Diagnostic Devices)'
  | 'Spectrum Medtech'
  | 'SMP Surgitech (Cardiovascular Surgical)'
  | (string & {});

export interface SpecTableItem {
  parameter: string;
  nominal: string;
  tolerance: string;
  standard: string;
}

export interface PdfDocument {
  docNumber: string;
  revision: string;
  effectiveDate: string;
  totalPages: number;
  pages: Array<{
    pageNumber: number;
    title: string;
    subtitle: string;
    sections: Array<{
      heading: string;
      text: string;
      specs?: SpecTableItem[];
      bulletPoints?: string[];
    }>;
  }>;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: BrandManufacturer;
  category: CardiologyCategory;
  subcategory: string;
  shortDesc: string;
  clinicalApplication: string;
  keyFeatures: string[];
  specs: {
    profileOrSize: string;
    compatibilityOrSheath: string;
    materialOrCoating: string;
    shelfLifeOrSterility: string;
  };
  mriSafety: string;
  regulatoryStatus: string[];
  leadTime: string;
  packaging: string;
  image: string;
  pdfUrl?: string;
  pdfFileName?: string;
  pdfSpec?: PdfDocument;
  featured?: boolean;
}

export interface RfqItem {
  product: Product;
  quantity: number;
  customLaserMarking?: string;
  notes?: string;
}

export interface TerritoryRegion {
  state: string;
  tagline: string;
  hqCity: string;
  cities: string[];
  coverageStatus: 'Direct Warehousing & Same-Day Dispatch' | 'Active Cath Lab Logistics' | 'Dedicated Field Technical Support';
  emergencyCourierHours: string;
  activeHospitals: number;
  repContact: {
    title: string;
    phone: string;
    email: string;
  };
}

export interface DealerBrand {
  id: string;
  name: string;
  division: string;
  focus: string;
  description: string;
  featuredProducts: string[];
  badgeText: string;
  logoUrl?: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  designation: string;
  institution: string;
  city: string;
  state: string;
  rating: number; // 1-5
  verifiedCathLab: boolean;
  comment: string;
  date: string;
  specialty: string;
}

export interface LeadInquiry {
  id: string;
  createdAt: string;
  status: 'Received' | 'Reviewing' | 'Quoted';
  contactName: string;
  workEmail: string;
  phone: string;
  hospitalName: string;
  department: string;
  territoryState: 'Madhya Pradesh' | 'Chhattisgarh' | 'South Rajasthan' | 'Uttar Pradesh' | 'Other';
  facilityType: 'Hospital / Cath Lab' | 'Cardiac Center of Excellence' | 'Government / Military' | 'Distributor / GPO' | 'Other';
  targetTimeline: 'Immediate (Emergency Procedure)' | 'Within 24-48 Hours' | 'Within 1-2 Weeks' | 'Monthly Cath Lab Consignment';
  tenderReference?: string;
  message?: string;
  items: Array<{
    sku: string;
    productName: string;
    quantity: number;
    customMarking?: string;
  }>;
}
