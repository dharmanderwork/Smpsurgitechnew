export type SurgicalSpecialty =
  | 'Cardiovascular & Thoracic'
  | 'Neurosurgery & Spine'
  | 'Orthopedics & Trauma'
  | 'General & Laparoscopic'
  | 'Microsurgery & Ophthalmic'
  | 'OB/GYN & Urology';

export type InstrumentType =
  | 'Clamps & Hemostats'
  | 'Scissors & Cutters'
  | 'Forceps & Tweezers'
  | 'Retractors'
  | 'Needle Holders'
  | 'Bone Rongeurs & Cutters'
  | 'Suction & Cannulas'
  | 'Systems & Trays';

export type AlloyGrade =
  | 'German DIN 1.4021 (AISI 420B) Stainless'
  | 'German DIN 1.4116 / 1.4034 Martensitic'
  | 'Titanium Ti-6Al-4V ELI (Grade 5)'
  | 'Tungsten Carbide (TC) Inlays 72 HRC'
  | 'Austenitic 316L Surgical Grade Steel';

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
  specialty: SurgicalSpecialty;
  type: InstrumentType;
  alloy: AlloyGrade;
  shortDesc: string;
  clinicalApplication: string;
  keyFeatures: string[];
  dimensions: {
    totalLength: string;
    tipWidth: string;
    curvature?: string;
    weightGrams: number;
  };
  metallurgy: {
    rockwellHardness: string;
    surfaceFinish: string;
    magneticProperty: string;
    corrosionPassivation: string;
  };
  reprocessing: {
    autoclaveCycle: string;
    maxTempCelsius: number;
    compatibleCleaningChem: string;
    cleaningPhRange: string;
  };
  compliance: string[];
  leadTime: string;
  packaging: string;
  image: string;
  pdfSpec: PdfDocument;
  featured?: boolean;
}

export interface RfqItem {
  product: Product;
  quantity: number;
  customLaserMarking?: string;
  notes?: string;
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
  facilityType: 'Hospital' | 'Ambulatory Surgery Center' | 'Government/Military' | 'GPO/Distributor' | 'Other';
  country: string;
  targetTimeline: 'Immediate (Emergency)' | 'Within 2 Weeks' | 'Within 1 Month' | 'Quarterly Tender';
  tenderReference?: string;
  message?: string;
  items: Array<{
    sku: string;
    productName: string;
    quantity: number;
    customMarking?: string;
  }>;
}
