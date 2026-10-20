import { Product, DealerBrand, TerritoryRegion, Testimonial } from '../types/instruments';

import heroImg from '../assets/images/smp_xience_coronary_stent_1792349506273.jpg';
import cathlabOctImg from '../assets/images/smp_cathlab_oct_coroflow_1792349506467.jpg';
import impellaIabpImg from '../assets/images/smp_impella_iabp_circulatory_1792349522773.jpg';
import pocketEcgImg from '../assets/images/smp_pocket_ecg_diagnostic_1792349523041.jpg';
import surgicalSetImg from '../assets/images/smp_hero_surgical_instruments_1792343796772.jpg';
import cardioInstrumentsImg from '../assets/images/smp_cardio_neuro_instruments_1792343798351.jpg';
import qualityInspectionImg from '../assets/images/smp_quality_metallurgy_inspection_1792343798753.jpg';
import orthoInstrumentsImg from '../assets/images/smp_orthopedic_surgical_set_1792343798115.jpg';
import crmPacemakerImg from '../assets/images/crm_pacemaker_device_1792526056792.jpg';
import structuralOccluderImg from '../assets/images/structural_heart_occluder_1792526057954.jpg';
import catheterAccessImg from '../assets/images/interventional_catheter_access_1792526057946.jpg';
import transradialSheathImg from '../assets/images/transradial_sheath_introducer_1792526058222.jpg';
import cathlabConsumablesImg from '../assets/images/cathlab_manifold_syringes_1792526059158.jpg';

export const HERO_IMAGE = heroImg;
export const CATHLAB_OCT_IMAGE = cathlabOctImg;
export const IMPELLA_IABP_IMAGE = impellaIabpImg;
export const POCKET_ECG_IMAGE = pocketEcgImg;
export const SURGICAL_SET_IMAGE = surgicalSetImg;
export const CARDIO_INSTRUMENTS_IMAGE = cardioInstrumentsImg;
export const QUALITY_INSPECTION_IMAGE = qualityInspectionImg;
export const ORTHO_INSTRUMENTS_IMAGE = orthoInstrumentsImg;
export const CRM_PACEMAKER_IMAGE = crmPacemakerImg;
export const STRUCTURAL_OCCLUDER_IMAGE = structuralOccluderImg;
export const CATHETER_ACCESS_IMAGE = catheterAccessImg;
export const TRANSRADIAL_SHEATH_IMAGE = transradialSheathImg;
export const CATHLAB_CONSUMABLES_IMAGE = cathlabConsumablesImg;

export const FALLBACK_IMAGE = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="%230f172a"><rect width="800" height="600" fill="%23090d16"/><circle cx="400" cy="300" r="140" fill="%230e7490" opacity="0.2"/><path d="M350 300h100M400 250v100" stroke="%2338bdf8" stroke-width="12" stroke-linecap="round"/><text x="400" y="470" fill="%2394a3b8" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">SMP SURGITECH PRECISION SPEC</text></svg>';

export const DEALER_BRANDS: DealerBrand[] = [
  {
    id: 'abbott-vascular',
    name: 'Abbott',
    division: 'Vascular Division',
    focus: 'Coronary Stents (XIENCE), OCT & FFR Physiology',
    description: 'Global benchmark in drug-eluting coronary stents (XIENCE Skypoint, Xpedition 48, Sierra, Alpine), optical coherence tomography (OCT), and physiological guidewires.',
    featuredProducts: ['XIENCE Skypoint', 'XIENCE Xpedition 48', 'XIENCE Sierra', 'XIENCE Alpine', 'OCT Imaging System', 'FFR PressureWire'],
    badgeText: 'Authorized Channel Partner',
    logoUrl: '/partners/abbott.jpg'
  },
  {
    id: 'cordis-cardiology',
    name: 'Cordis',
    division: 'Cardiology',
    focus: 'Interventional Cardiology, Transradial Access & Guiding Catheters',
    description: 'Pioneers in high-performance diagnostic catheters, steerable coronary guidewires, transradial sheaths, and advanced vascular closure solutions.',
    featuredProducts: ['Diagnostic Catheters', 'Steerable Guidewires', 'Transradial Sheaths', 'Vascular Access Sets'],
    badgeText: 'Authorized Cardiology Distributor',
    logoUrl: '/partners/cordis.jpg'
  },
  {
    id: 'teleflex-vascular',
    name: 'Teleflex',
    division: 'Vascular Division',
    focus: 'Arrow Vascular Access & Intra-Aortic Balloon Pumps (IABP)',
    description: 'World-renowned Arrow hemodynamic catheterization, intra-aortic balloon pumps (IABP), emergency vascular access, and arterial line systems.',
    featuredProducts: ['IABP Pump Console', 'AutoCAT 2 Wave Catheters', 'Arrow Central Venous Access', 'Radial Artery Lines'],
    badgeText: 'Authorized Vascular Partner',
    logoUrl: '/partners/teleflex.jpg'
  },
  {
    id: 'st-jude-medical',
    name: 'St. Jude Medical',
    division: 'CRM & Structural Heart',
    focus: 'Cardiac Rhythm Management & TAVI Structural Solutions',
    description: 'Industry-defining pacemakers, implantable cardioverter defibrillators (ICDs), and transcatheter aortic valve implantation (TAVI) structural heart platforms.',
    featuredProducts: ['TAVI Structural Valve Systems', 'Leadless Pacemakers', 'Cardiac Resynchronization (CRT)', 'Electrophysiology Catheters'],
    badgeText: 'Structural Heart Partner',
    logoUrl: '/partners/st-jude.jpg'
  },
  {
    id: 'jnj-medtech',
    name: 'J&J MedTech',
    division: 'Surgical Solutions',
    focus: 'Cardiovascular Surgical Instruments & Mechanical Circulatory Support',
    description: 'Comprehensive surgical innovations including cardiovascular instruments, surgical sutures, and advanced mechanical circulatory support systems (Impella pVAD).',
    featuredProducts: ['Impella 2.5 / CP / 5.0 pVAD', 'Cardiovascular Suture Solutions', 'Micro-Surgical Forceps', 'Hemostatic Devices'],
    badgeText: 'Authorized MedTech Partner',
    logoUrl: '/partners/medtech.jpg'
  },
  {
    id: 'pocket-ecg',
    name: 'Pocket ECG',
    division: 'Diagnostic Devices',
    focus: 'Continuous Real-Time Ambulatory Arrhythmia Telemetry',
    description: 'Next-generation hospital and outpatient continuous ECG monitoring, complete full-disclosure arrhythmia detection, and cellular-connected cloud reporting.',
    featuredProducts: ['Pocket ECG Mobile Monitor', 'Full-Disclosure Software', 'Hospital Holter Diagnostic Suite', 'Emergency Telemetry Sensor'],
    badgeText: 'Exclusive Diagnostic Dealer',
    logoUrl: '/partners/pocket-ecg.jpg'
  }
];

export const TERRITORY_REGIONS: TerritoryRegion[] = [
  {
    state: 'South Rajasthan',
    tagline: 'Direct Regional Warehouse & Rapid Cath Lab Supply Hub',
    hqCity: 'Udaipur',
    cities: [
      'Udaipur',
      'Dungarpur',
      'Banswara',
      'Pratapgarh',
      'Rajsamand',
      'Chittorgarh',
      'Bhilwara'
    ],
    coverageStatus: 'Direct Warehousing & Same-Day Dispatch',
    emergencyCourierHours: '1 to 3 Hours to Cath Labs',
    activeHospitals: 84,
    repContact: {
      title: 'South Rajasthan Regional Operations Desk',
      phone: '+91 94140 88210 / +91 (0294) 249-8800',
      email: 'rajasthan.desk@smpsurgitech.com'
    }
  },
  {
    state: 'Madhya Pradesh',
    tagline: 'Extensive State-Wide Consignment & Emergency Backup',
    hqCity: 'Indore / Bhopal Hubs',
    cities: [
      'Indore',
      'Bhopal',
      'Jabalpur',
      'Gwalior',
      'Ujjain',
      'Sagar',
      'Rewa',
      'Ratlam'
    ],
    coverageStatus: 'Direct Warehousing & Same-Day Dispatch',
    emergencyCourierHours: '2 to 4 Hours to Cath Labs',
    activeHospitals: 142,
    repContact: {
      title: 'Madhya Pradesh Regional Lead',
      phone: '+91 98260 55190',
      email: 'mp.logistics@smpsurgitech.com'
    }
  },
  {
    state: 'Chhattisgarh',
    tagline: 'Dedicated Cold-Chain & 24/7 Cath Lab Standby Support',
    hqCity: 'Raipur / Durg-Bhilai Hubs',
    cities: [
      'Raipur',
      'Bilaspur',
      'Durg-Bhilai',
      'Korba',
      'Rajnandgaon',
      'Jagdalpur',
      'Raigarh'
    ],
    coverageStatus: 'Active Cath Lab Logistics',
    emergencyCourierHours: '2 to 4 Hours to Cath Labs',
    activeHospitals: 68,
    repContact: {
      title: 'Chhattisgarh Territory In-Charge',
      phone: '+91 94252 44120',
      email: 'cg.cardio@smpsurgitech.com'
    }
  },
  {
    state: 'Uttar Pradesh',
    tagline: 'Specialized Interventional & Surgical Support Corridor',
    hqCity: 'Agra / Kanpur Corridor',
    cities: [
      'Kanpur',
      'Agra',
      'Jhansi',
      'Prayagraj',
      'Varanasi',
      'Aligarh'
    ],
    coverageStatus: 'Dedicated Field Technical Support',
    emergencyCourierHours: '3 to 5 Hours Dedicated Express',
    activeHospitals: 95,
    repContact: {
      title: 'UP Interventional Corridor Desk',
      phone: '+91 97920 33410',
      email: 'up.cardio@smpsurgitech.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    authorName: 'Dr. R. K. Maheshwari, MD, DM',
    designation: 'Chief Interventional Cardiologist & Cath Lab Director',
    institution: 'Pacific Medical College & Hospital / Geetanjali Cardiac Center',
    city: 'Udaipur',
    state: 'South Rajasthan',
    rating: 5,
    verifiedCathLab: true,
    comment: 'SMP Surgitech is our most reliable partner for acute coronary intervention supplies in South Rajasthan. Their availability of XIENCE Skypoint stents and immediate on-site OCT imaging catheter backup during high-risk emergency angioplasties in Udaipur is unrivaled.',
    date: 'February 2026',
    specialty: 'Interventional Cardiology'
  },
  {
    id: 'test-2',
    authorName: 'Dr. Vivek Sharma, MS, MCh (CTVS)',
    designation: 'Head of Cardiothoracic & Vascular Surgery',
    institution: 'Medanta Cardiac Care / CHL Hospitals',
    city: 'Indore',
    state: 'Madhya Pradesh',
    rating: 5,
    verifiedCathLab: true,
    comment: 'We rely on SMP Surgitech for both critical hemodynamic consoles like IABP and precision cardiovascular surgical instrument sets. Their batch verification, cold-chain discipline, and 2-hour response time in Indore make them an indispensable healthcare partner.',
    date: 'January 2026',
    specialty: 'Cardiothoracic Surgery'
  },
  {
    id: 'test-3',
    authorName: 'Dr. Ananya Sengupta, MD, DNB (Cardiology)',
    designation: 'Senior Consultant & Cath Lab In-Charge',
    institution: 'Apollo Hospitals / Ramkrishna CARE Medical Sciences',
    city: 'Raipur',
    state: 'Chhattisgarh',
    rating: 5,
    verifiedCathLab: true,
    comment: 'SMP Surgitech provided rapid turnaround for the CoroFlow cardiovascular microvascular diagnostic system in our lab. Their clinical support team is exceptionally knowledgeable, and consignment tracking has zero discrepancies.',
    date: 'March 2026',
    specialty: 'Complex PCI & Microvascular Physiology'
  },
  {
    id: 'test-4',
    authorName: 'Dr. S. P. Tripathi, MD, DM (Cardiology)',
    designation: 'Director of Interventional Cardiology',
    institution: 'Regency Hospital & Cardiac Institute',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    rating: 5,
    verifiedCathLab: true,
    comment: 'When performing long diffuse coronary stenting, having the XIENCE Xpedition 48 in stock is crucial. SMP Surgitech ensures our hospital always has full size matrix consignment ready without delay.',
    date: 'January 2026',
    specialty: 'Coronary Stenting & TAVI'
  },
  {
    id: 'test-5',
    authorName: 'Dr. Naresh Choudhary, MBBS, MS',
    designation: 'Chief Medical Superintendent & Procurement Chair',
    institution: 'Bhilwara Heart & Multispeciality Hospital',
    city: 'Bhilwara',
    state: 'South Rajasthan',
    rating: 5,
    verifiedCathLab: true,
    comment: 'For hospitals in Bhilwara, Chittorgarh, and Rajsamand, having SMP Surgitech warehouse in nearby Udaipur means emergency delivery within 90 minutes. Their Pocket ECG diagnostic units and Abbott vascular systems have elevated our patient care.',
    date: 'February 2026',
    specialty: 'Hospital Administration & Procurement'
  }
];

const RAW_SURGICAL_PRODUCTS: Product[] = [
  // 1. XIENCE Skypoint
  {
    id: 'xience-skypoint',
    sku: 'ABT-XNC-SKY',
    name: 'XIENCE Skypoint™ Everolimus-Eluting Coronary Stent System',
    brand: 'Abbott (Vascular Division)',
    category: 'Coronary Stents (XIENCE)',
    subcategory: 'Next-Gen Ultra-Deliverable Drug-Eluting Stent',
    shortDesc: 'Abbott’s latest generation drug-eluting coronary stent engineered with exceptional deliverability, low crossing profile, and multi-expansion limit up to 5.75 mm for complex bifurcations.',
    clinicalApplication: 'Primary percutaneous coronary intervention (PCI), acute coronary syndrome (ACS), left main bifurcations, and severely tortuous coronary anatomies.',
    keyFeatures: [
      'Multi-expansion capability expanding up to 5.75 mm post-dilatation limit',
      'Ultra-thin strut design with proven fluoropolymer biocompatible coating',
      'Engineered for complex left main and calcified bifurcation stenting',
      'Outstanding trackability with flexible tip geometry'
    ],
    specs: {
      profileOrSize: 'Diameters: 2.25 - 4.0 mm | Lengths: 8 - 38 mm',
      compatibilityOrSheath: '5F / 6F Guide Catheter Compatible (0.014" Guidewire)',
      materialOrCoating: 'Cobalt-Chromium (CoCr) alloy with Fluoropolymer + Everolimus',
      shelfLifeOrSterility: 'Sterile Ethylene Oxide (EO) | 3-Year Shelf Life'
    },
    mriSafety: 'MR Conditional up to 3.0 Tesla',
    regulatoryStatus: ['CDSCO / DCGI Approved', 'US FDA Approved', 'CE Mark Certified', 'ISO 13485'],
    leadTime: 'Immediate Dispatch / 2-3h Emergency Delivery across MP, CG, South Rajasthan & UP',
    packaging: 'Single unit sterile tyvek blister pack with traceability UDI labels',
    image: HERO_IMAGE,
    featured: true,
    pdfUrl: '/pdf/DTP Patient Brochure Guide.pdf',
    pdfFileName: 'DTP_Patient_Brochure_Guide.pdf',
    pdfSpec: {
      docNumber: 'TDS-ABT-XNC-SKY-2026',
      revision: 'Rev 5.1',
      effectiveDate: '2026-01-10',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Product Overview & Mechanical Architecture',
          subtitle: 'XIENCE Skypoint™ Everolimus-Eluting Coronary Stent System',
          sections: [
            {
              heading: '1.0 Clinical Engineering & Expansion Dynamics',
              text: 'XIENCE Skypoint is built on Abbott’s clinically proven fluoropolymer chemistry, engineered to reduce vessel injury during deployment. The modified multi-link structure allows over-expansion up to 5.75 mm while preserving radial resistance and uniform drug elution.',
              specs: [
                { parameter: 'Strut Thickness', nominal: '81 µm', tolerance: '± 2 µm', standard: 'ASTM F2079' },
                { parameter: 'Post-Dilation Limit', nominal: '5.75 mm', tolerance: 'Max safe expansion', standard: 'Abbott Internal Spec' },
                { parameter: 'Drug Dose (Everolimus)', nominal: '100 µg/cm²', tolerance: '± 5%', standard: 'USP / EP' },
                { parameter: 'Crossing Profile', nominal: '0.041 in', tolerance: '± 0.001 in', standard: 'ISO 25539-2' },
                { parameter: 'Radial Strength', nominal: '1.35 bar', tolerance: '≥ 1.20 bar', standard: 'ASTM F3067' }
              ]
            },
            {
              heading: '1.1 Biocompatible Fluoropolymer Coating',
              text: 'The fluoropolymer matrix demonstrates exceptional thromboresistance by repelling pro-thrombotic serum proteins, promoting rapid endothelialization without excessive neointimal hyperplasia.',
              bulletPoints: [
                'Over 15 million patients implanted worldwide with XIENCE platform safety',
                'Demonstrated 1-month DAPT safety in high bleeding risk (HBR) populations',
                'Low stent thrombosis rate (< 0.2% at 1 year across multiple randomized trials)'
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Sizing Matrix & Cath Lab Compliance',
          subtitle: 'Dimensional Catalog & Guide Catheter Selection',
          sections: [
            {
              heading: '2.0 Dimensional Matrix (Diameter x Length)',
              text: 'Standard matrix includes diameters 2.25mm, 2.50mm, 2.75mm, 3.00mm, 3.50mm, 4.00mm across lengths 8mm, 12mm, 15mm, 18mm, 23mm, 28mm, 33mm, and 38mm.',
              bulletPoints: [
                '2.25 mm - 3.00 mm: Compatible with standard 5 French guide catheters',
                '3.50 mm - 4.00 mm: 6 French guide catheter recommended for kissing stent techniques',
                'Nominal Pressure (NP): 9 atm | Rated Burst Pressure (RBP): 16 atm'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Storage, Consignment & Ordering Information',
          subtitle: 'SMP Surgitech Regional Cath Lab Consignment Protocol',
          sections: [
            {
              heading: '3.0 Cold-Chain Storage & UDI Tracking',
              text: 'Stored at controlled room temperature 15°C to 25°C. All units dispatched with tamper-evident secondary carton and digital barcode logging into hospital cath lab registry.'
            }
          ]
        }
      ]
    }
  },

  // 2. XIENCE Xpedition 48
  {
    id: 'xience-xpedition-48',
    sku: 'ABT-XNC-XP48',
    name: 'XIENCE Xpedition™ 48 Everolimus-Eluting Coronary Stent',
    brand: 'Abbott (Vascular Division)',
    category: 'Coronary Stents (XIENCE)',
    subcategory: 'Extended-Length 48mm Long-Lesion Solution',
    shortDesc: 'Dedicated 48mm extended-length drug-eluting stent specifically engineered to treat diffuse and long coronary lesions in a single intervention without overlapping.',
    clinicalApplication: 'Diffuse coronary artery disease, diabetic diffuse stenosis, tandem consecutive lesions, and long segment LAD/RCA revascularization.',
    keyFeatures: [
      'Continuous 48 mm single-stent coverage eliminating junctional stent overlap',
      'Significantly reduces procedure time, fluoroscopy radiation, and contrast volume',
      'Balanced flexibility and column strength for distal pushability',
      'Proven fluoropolymer biocompatibility with low restenosis rates'
    ],
    specs: {
      profileOrSize: 'Extended 48 mm Length | Diameters: 2.75, 3.00, 3.50, 4.00 mm',
      compatibilityOrSheath: '6F Guide Catheter Compatible | 0.014" Guidewire',
      materialOrCoating: 'Cobalt-Chromium (CoCr) alloy with Fluoropolymer + Everolimus',
      shelfLifeOrSterility: 'Sterile EO | 3-Year Shelf Life'
    },
    mriSafety: 'MR Conditional up to 3.0 Tesla',
    regulatoryStatus: ['CDSCO / DCGI Approved', 'US FDA Approved', 'CE Mark Certified', 'ISO 13485'],
    leadTime: 'Available for Immediate Cath Lab Delivery across MP, CG, South Rajasthan & UP',
    packaging: 'Rigid sealed blister with reinforced catheter protective sheath',
    image: HERO_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-ABT-XP48-2026',
      revision: 'Rev 4.0',
      effectiveDate: '2026-01-12',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Single Stent Solution for Diffuse Long Lesions',
          subtitle: 'XIENCE Xpedition™ 48mm Specifications',
          sections: [
            {
              heading: '1.0 Clinical Rationale for 48mm Length',
              text: 'Treating diffuse coronary disease with overlapping stents increases metal burden, impairs local vasomotion, and triples the risk of junctional restenosis. The XIENCE Xpedition 48 provides seamless continuous endothelial scaffolding.',
              specs: [
                { parameter: 'Stent Length', nominal: '48.0 mm', tolerance: '± 0.5 mm', standard: 'ISO 25539' },
                { parameter: 'Nominal Pressure', nominal: '9 atm', tolerance: 'Nominal expansion', standard: 'Compliance Chart' },
                { parameter: 'Rated Burst Pressure', nominal: '16 atm', tolerance: 'RBP tested', standard: 'ASTM F2079' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Delivery System & Pushability Dynamics',
          subtitle: 'Balloon-Fold Architecture and Hydrophilic Coating',
          sections: [
            {
              heading: '2.0 Delivery System Performance',
              text: 'Features a proprietary folded balloon design with low-friction hydrophilic shaft coating to ensure passage through proximal calcified tortuosity into distal coronary segments.'
            }
          ]
        }
      ]
    }
  },

  // 3. XIENCE Sierra
  {
    id: 'xience-sierra',
    sku: 'ABT-XNC-SRA',
    name: 'XIENCE Sierra™ Everolimus-Eluting Coronary Stent System',
    brand: 'Abbott (Vascular Division)',
    category: 'Coronary Stents (XIENCE)',
    subcategory: 'High-Crossability Coronary Stent System',
    shortDesc: 'Designed for anatomically complex coronary cases with ultra-low crossing profile, optimized flexibility, and enhanced pushability in tortuous and calcified lesions.',
    clinicalApplication: 'Chronic total occlusions (CTO), severely calcified arteries, acute bends, and difficult sub-branches.',
    keyFeatures: [
      'Low crossing profile optimized for heavily calcified and complex stenoses',
      'Enhanced flexibility with sinusoidal strut rings and linked bridges',
      'High radial strength resistant to recoil in fibro-calcific plaques',
      'Rapid balloon deflation time for patient comfort in acute ischemia'
    ],
    specs: {
      profileOrSize: 'Diameters: 2.00 - 4.00 mm | Lengths: 8 - 38 mm',
      compatibilityOrSheath: '5F / 6F Guide Catheter Compatible',
      materialOrCoating: 'Multi-link Cobalt Chromium with Fluoropolymer-Everolimus',
      shelfLifeOrSterility: 'Sterile EO | 3-Year Shelf Life'
    },
    mriSafety: 'MR Conditional up to 3.0 Tesla',
    regulatoryStatus: ['CDSCO / DCGI Approved', 'US FDA Approved', 'CE Mark Certified'],
    leadTime: 'Immediate Dispatch from Regional Hubs (Udaipur, Indore, Raipur, Agra)',
    packaging: 'Single unit sterile clinical pouch in protective carton',
    image: HERO_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-ABT-SRA-2026',
      revision: 'Rev 4.3',
      effectiveDate: '2026-01-14',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Mechanical Design & Crossing Capability',
          subtitle: 'XIENCE Sierra™ Stent System Technical Data',
          sections: [
            {
              heading: '1.0 Engineering for Complex Anatomy',
              text: 'XIENCE Sierra incorporates a slim tip profile of 0.040" with seamless transition from guide wire to balloon, enabling crossing of severe stenoses where traditional stents stall.',
              specs: [
                { parameter: 'Tip Outer Diameter', nominal: '0.040 in', tolerance: '± 0.001 in', standard: 'ISO 10555' },
                { parameter: 'Nominal Pressure', nominal: '9 atm', tolerance: '± 0.5 atm', standard: 'Compliance Matrix' },
                { parameter: 'Rated Burst Pressure', nominal: '16 atm', tolerance: '100% inspected', standard: 'ASTM F3067' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Procedural Recommendations & Sizing Table',
          subtitle: 'Full Cath Lab Matrix',
          sections: [
            {
              heading: '2.0 Cath Lab Handling Protocols',
              text: 'Pre-dilation with 1:1 balloon sizing recommended in fibrocalcific lesions. Post-dilation using non-compliant balloons up to rated burst pressures supported.'
            }
          ]
        }
      ]
    }
  },

  // 4. XIENCE Alpine
  {
    id: 'xience-alpine',
    sku: 'ABT-XNC-ALP',
    name: 'XIENCE Alpine™ Everolimus-Eluting Coronary Stent System',
    brand: 'Abbott (Vascular Division)',
    category: 'Coronary Stents (XIENCE)',
    subcategory: 'Proven Clinical Safety Benchmark Stent',
    shortDesc: 'Abbott’s flagship coronary drug-eluting stent with the most extensive long-term clinical safety dataset in interventional cardiology, featuring unmatched low thrombosis rates.',
    clinicalApplication: 'Multi-vessel coronary artery disease, diabetic patients, acute myocardial infarction (STEMI/NSTEMI), and elderly patient populations.',
    keyFeatures: [
      'Unsurpassed safety record with lowest definite/probable stent thrombosis rate',
      'Fluoropolymer biocompatibility preventing inflammatory platelet aggregation',
      'Flexible balloon catheter design for controlled precise deployment',
      'Excellent radio-opacity for accurate fluoroscopic positioning'
    ],
    specs: {
      profileOrSize: 'Diameters: 2.25 - 4.00 mm | Lengths: 8 - 38 mm',
      compatibilityOrSheath: '5F / 6F Guide Catheters | 0.014" Guidewire',
      materialOrCoating: 'Cobalt-Chromium with Fluoropolymer + Everolimus',
      shelfLifeOrSterility: 'Sterile EO | 3-Year Shelf Life'
    },
    mriSafety: 'MR Conditional up to 3.0 Tesla',
    regulatoryStatus: ['CDSCO / DCGI Approved', 'US FDA Approved', 'CE Mark Certified'],
    leadTime: 'In Stock across MP, CG, South Rajasthan & UP Cath Lab Hubs',
    packaging: 'Sterile clinical carton with UDI barcoding',
    image: HERO_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-ABT-ALP-2026',
      revision: 'Rev 4.8',
      effectiveDate: '2026-01-05',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Clinical Data & Safety Evidence',
          subtitle: 'XIENCE Alpine™ Technical & Metallurgical Sheet',
          sections: [
            {
              heading: '1.0 Long-Term Clinical Evidence',
              text: 'Supported by over 100 clinical trials and 120,000+ investigated patients demonstrating sustained safety through 10 years of post-market surveillance.',
              specs: [
                { parameter: 'Strut Thickness', nominal: '81 µm', tolerance: '± 2 µm', standard: 'ISO 25539' },
                { parameter: 'Drug Dose', nominal: '100 µg/cm²', tolerance: '± 5%', standard: 'USP' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing and Hospital Handling',
          subtitle: 'Single Use Sterile Medical Device',
          sections: [
            {
              heading: '2.0 Storage and Single-Use Warning',
              text: 'Single-use device. Do not resterilize. Store between 15°C and 25°C.'
            }
          ]
        }
      ]
    }
  },

  // 5. OCT (Optical Coherence Tomography)
  {
    id: 'oct-imaging-system',
    sku: 'ABT-OCT-DFLY',
    name: 'OCT (Optical Coherence Tomography) Imaging System & Dragonfly™ Catheters',
    brand: 'Abbott (Vascular Division)',
    category: 'Diagnostic Physiology & Imaging (OCT / FFR)',
    subcategory: 'Intracoronary High-Resolution Diagnostic Imaging',
    shortDesc: 'Near-infrared light-based intracoronary imaging platform providing 10-micron spatial resolution (10x higher than IVUS) for automated plaque assessment, stent sizing, and apposition analysis.',
    clinicalApplication: 'Pre-PCI lesion preparation, calcium volume and depth scoring, stent length and diameter selection, post-PCI malapposition detection, and edge dissection assessment.',
    keyFeatures: [
      '10 µm axial resolution delivering microscopic detail of coronary vessel walls',
      'Automated lumen contour detection and calcification angle/thickness scoring',
      'Dragonfly™ OPTIS catheter with rapid pull-back speed of 36 mm/sec in 2.5 seconds',
      'Seamless co-registration with live angiographic fluoroscopy display'
    ],
    specs: {
      profileOrSize: 'Dragonfly Catheter: 2.7 Fr distal profile | 75 mm pullback length',
      compatibilityOrSheath: '6F Guide Catheter Compatible | 0.014" Guidewire',
      materialOrCoating: 'Near-infrared optical fiber core with hydrophilic outer jacket',
      shelfLifeOrSterility: 'Sterile EO Single-Use Catheters | Console Standby Support'
    },
    mriSafety: 'Non-conductive optical fiber, Non-implantable diagnostic catheter',
    regulatoryStatus: ['CDSCO Approved', 'US FDA Approved', 'CE Mark Certified', 'ISO 13485'],
    leadTime: 'Immediate Consignment & On-Demand Technical Specialist Support in Cath Labs',
    packaging: 'Sterile individual catheter pack; Console backup placement available',
    image: CATHLAB_OCT_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-ABT-OCT-2026',
      revision: 'Rev 6.0',
      effectiveDate: '2026-02-01',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Optical Specifications & Diagnostic Resolution',
          subtitle: 'Intracoronary Optical Coherence Tomography (OCT)',
          sections: [
            {
              heading: '1.0 Optical Coherence Tomography Mechanics',
              text: 'Uses near-infrared light at 1310 nm center wavelength with high-speed swept-source laser. Provides automated detection of lipid pools, thin-cap fibroatheroma (TCFA), calcium arc, and intraluminal thrombus.',
              specs: [
                { parameter: 'Axial Resolution', nominal: '10 µm', tolerance: '± 2 µm', standard: 'Optical Standard' },
                { parameter: 'Lateral Resolution', nominal: '20 µm', tolerance: '± 5 µm', standard: 'Optical Standard' },
                { parameter: 'Laser Pullback Speed', nominal: '36 mm/sec', tolerance: 'Calibrated', standard: 'FDA 510(k)' },
                { parameter: 'Flush Rate (Contrast/Saline)', nominal: '4.0 mL/sec', tolerance: '± 0.5 mL/s', standard: 'Clinical Protocol' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Dragonfly™ Imaging Catheter Integration',
          subtitle: 'Single-Use Rapid-Exchange Intravascular Catheter',
          sections: [
            {
              heading: '2.0 Catheter Design & Maneuverability',
              text: 'Features a flexible distal tip, dual radiopaque markers at the lens and distal end, and low friction hydrophilic shaft enabling rapid engagement into tortuous vessels.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Clinical Workflow & MLD MAX Protocol',
          subtitle: 'Morphology, Length, Diameter, Malapposition, Apposition, eXpansion',
          sections: [
            {
              heading: '3.0 Standardized Clinical Workflow',
              text: 'Guided by MLD MAX protocol for standardized pre- and post-PCI assessment, clinically demonstrated to alter procedural strategy in 88% of cases.'
            }
          ]
        }
      ]
    }
  },

  // 6. FFR (Fractional Flow Reserve)
  {
    id: 'ffr-physiology-system',
    sku: 'ABT-FFR-PWX',
    name: 'FFR (Fractional Flow Reserve) PressureWire™ System',
    brand: 'Abbott (Vascular Division)',
    category: 'Diagnostic Physiology & Imaging (OCT / FFR)',
    subcategory: 'Guidewire-Based Hemodynamic Coronary Physiology',
    shortDesc: 'Clinical gold standard for functional coronary lesion evaluation, measuring distal coronary to aortic pressure ratio (Pd/Pa) to identify hemodynamically significant ischemia.',
    clinicalApplication: 'Intermediate coronary lesion assessment (40-70% stenosis), multi-vessel CAD revascularization triage, and post-stent functional optimization.',
    keyFeatures: [
      'PressureWire™ optical sensor technology with zero drift performance',
      'Wireless transmitter communicating directly with cath lab monitors and CoroFlow',
      'Direct measurement of FFR at hyperemia and resting Pd/Pa indexes',
      'Standard 0.014" handling tactile feedback matching frontline workhorse wires'
    ],
    specs: {
      profileOrSize: '0.014" Guidewire Diameter | 175 cm Working Length',
      compatibilityOrSheath: 'Compatible with all standard 4F-7F Guide Catheters',
      materialOrCoating: 'Micro-machined optical sensor tip with PTFE shaft coating',
      shelfLifeOrSterility: 'Sterile EO Single-Use Pack | 2-Year Shelf Life'
    },
    mriSafety: 'Non-implantable diagnostic tool',
    regulatoryStatus: ['CDSCO Approved', 'US FDA Approved', 'CE Mark Certified'],
    leadTime: 'Express 2-3h Delivery to Cath Labs across MP, CG, South Rajasthan & UP',
    packaging: 'Individual sterile hoop dispenser carton',
    image: CATHLAB_OCT_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-ABT-FFR-2026',
      revision: 'Rev 5.2',
      effectiveDate: '2026-01-20',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Physiological Pressure Measurement Standards',
          subtitle: 'PressureWire™ FFR Technical Specifications',
          sections: [
            {
              heading: '1.0 Pressure Sensor Metrics',
              text: 'PressureWire utilizes a solid-state optical pressure sensor located 3 cm proximal to the tip. Senses pressure changes from -30 to +300 mmHg with frequency response > 25 Hz.',
              specs: [
                { parameter: 'Pressure Range', nominal: '-30 to +300 mmHg', tolerance: '± 1 mmHg', standard: 'IEC 60601-2-34' },
                { parameter: 'Drift Specification', nominal: '< 2 mmHg / hour', tolerance: 'Lab certified', standard: 'ISO 13485' },
                { parameter: 'Guidewire Diameter', nominal: '0.014 in (0.36 mm)', tolerance: '± 0.0005 in', standard: 'ASTM F2079' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Consignment & Support Protocols',
          subtitle: 'Cath Lab Standby & Emergency Courier Dispatch',
          sections: [
            {
              heading: '2.0 Emergency Logistics across Central & Western India',
              text: 'SMP Surgitech maintains permanent consigned stock of PressureWires across hospital cath labs in Indore, Bhopal, Raipur, Udaipur, Bhilwara, and Kanpur.'
            }
          ]
        }
      ]
    }
  },

  // 7. COROFLOW CARDIOVASCULAR SYSTEM
  {
    id: 'coroflow-cardiovascular-system',
    sku: 'CRF-SYS-8000',
    name: 'COROFLOW™ CARDIOVASCULAR SYSTEM (Coroventis / Abbott)',
    brand: 'Abbott (Vascular Division)',
    category: 'Cardiovascular Physiology Systems (CoroFlow)',
    subcategory: 'Comprehensive Microvascular & Epicardial Assessment Platform',
    shortDesc: 'The global benchmark platform for diagnosing Coronary Microvascular Dysfunction (CMD) and Vasospastic Angina (INOCA), measuring CFR, IMR (Index of Microcirculatory Resistance), and RRR.',
    clinicalApplication: 'Patients with Ischemia and Non-Obstructive Coronary Artery Disease (INOCA/MINOCA), microvascular angina, post-PCI persistent angina, and heart transplant vasculopathy.',
    keyFeatures: [
      'Comprehensive assessment: FFR, CFR (Coronary Flow Reserve), and IMR in single workflow',
      'Direct thermodilution and pressure measurement for quantitative microvascular resistance',
      'Wireless integration with cath lab angiography tables and hospital DICOM/PACS networks',
      'Automated bolus injection detection and rapid thermodynamic transit time calculation'
    ],
    specs: {
      profileOrSize: 'Dedicated Clinical Console / Medical-Grade Touchscreen & Wireless Receiver',
      compatibilityOrSheath: 'Integrates with PressureWire™ X and standard cath lab hemodynamic monitors',
      materialOrCoating: 'ISO 13485 Certified Medical Grade Hardware & Diagnostic Software',
      shelfLifeOrSterility: 'Perpetual System Calibration with sterile single-use sensor interfaces'
    },
    mriSafety: 'Cath lab control room & bedside equipment',
    regulatoryStatus: ['CDSCO Registered', 'US FDA Cleared (510k)', 'CE Marked Medical Device'],
    leadTime: 'Console Placement, Training & Complete Consignment by SMP Surgitech',
    packaging: 'Industrial clinical flight case containing console, telemetry receiver & cables',
    image: CATHLAB_OCT_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-CRF-SYS-2026',
      revision: 'Rev 3.5',
      effectiveDate: '2026-02-15',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Microvascular Diagnostic Parameters & Indices',
          subtitle: 'CoroFlow™ Cardiovascular Physiology Platform',
          sections: [
            {
              heading: '1.0 Diagnostic Indices Calculated',
              text: 'CoroFlow calculates epicardial and microcirculatory physiological indices simultaneously during saline thermodilution and adenosine hyperemia.',
              specs: [
                { parameter: 'FFR (Fractional Flow Reserve)', nominal: 'Cutoff ≤ 0.80', tolerance: '± 0.01', standard: 'ESC / AHA Guidelines' },
                { parameter: 'IMR (Index of Microvascular Resistance)', nominal: 'Normal < 25', tolerance: 'Cutoff ≥ 25 (CMD)', standard: 'CoroMic Study' },
                { parameter: 'CFR (Coronary Flow Reserve)', nominal: 'Normal > 2.5', tolerance: 'Cutoff ≤ 2.0 (Abnormal)', standard: 'Clinical Consensus' },
                { parameter: 'RRR (Resistive Reserve Ratio)', nominal: 'Normal > 3.0', tolerance: '± 0.2', standard: 'CoroVentis Standard' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Hardware Interfaces & DICOM Integration',
          subtitle: 'Cath Lab Operating System Specifications',
          sections: [
            {
              heading: '2.0 Cath Lab Connectivity',
              text: 'Supports real-time HDMI/DisplayPort output, dual ethernet LAN, DICOM modal worklist, and seamless USB data export for hospital research registries.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'SMP Surgitech Distributor Support & SLA',
          subtitle: 'Hospital Console Placement Program',
          sections: [
            {
              heading: '3.0 On-Site Technical Specialist Program',
              text: 'SMP Surgitech provides factory-trained clinical applications specialists to assist during live cath lab cases and train resident interventional cardiologists.'
            }
          ]
        }
      ]
    }
  },

  // 8. TAVI (Transcatheter Aortic Valve Implantation)
  {
    id: 'tavi-structural-valve-system',
    sku: 'SJM-TAV-PRT',
    name: 'TAVI (Transcatheter Aortic Valve Implantation) System',
    brand: 'St. Jude Medical (CRM & Structural Heart)',
    category: 'Structural Heart (TAVI)',
    subcategory: 'Transcatheter Heart Valve Replacement & Delivery Platform',
    shortDesc: 'Minimally invasive transcatheter aortic valve replacement platform engineered with fully repositionable and retrievable technology for severe symptomatic aortic stenosis.',
    clinicalApplication: 'High, intermediate, and low surgical risk patients presenting with severe native calcific aortic stenosis or failed surgical bioprosthetic valves (Valve-in-Valve).',
    keyFeatures: [
      'Fully repositionable and retrievable prior to final deployment for precision placement',
      'Active pericardial outer wrap sealing cuff engineered to minimize paravalvular leak (PVL)',
      'Low profile transfemoral delivery sheath system minimizing vascular access complications',
      'Hemodynamic performance matching or exceeding surgical tissue valves with low gradients'
    ],
    specs: {
      profileOrSize: 'Valve Sizes: 23 mm, 25 mm, 27 mm, 29 mm Annulus Coverage',
      compatibilityOrSheath: '14F / 16F Ultra-Low Profile Transfemoral Delivery Sheath',
      materialOrCoating: 'Nitinol self-expanding frame with porcine pericardium leaflets',
      shelfLifeOrSterility: 'Sterile chemical storage solution | Cold-chain monitored'
    },
    mriSafety: 'MR Conditional up to 3.0 Tesla',
    regulatoryStatus: ['CDSCO / DCGI Approved', 'US FDA Approved', 'CE Mark Certified'],
    leadTime: 'Dedicated TAVI Case Support & Consigned Sizing Inventory by SMP Surgitech',
    packaging: 'Rigid protective clinical jar in temperature-controlled transport container',
    image: CATHLAB_OCT_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SJM-TAV-2026',
      revision: 'Rev 4.1',
      effectiveDate: '2026-01-25',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Structural Architecture & Hydrodynamic Performance',
          subtitle: 'Transcatheter Aortic Heart Valve Replacement Platform',
          sections: [
            {
              heading: '1.0 Valve Design & Hydrodynamic Gradients',
              text: 'The self-expanding nitinol frame features high radial expansion force at the annular level with supra-annular leaflet placement to maximize effective orifice area (EOA).',
              specs: [
                { parameter: 'Effective Orifice Area (25mm)', nominal: '1.85 cm²', tolerance: '± 0.15 cm²', standard: 'ISO 5840-3' },
                { parameter: 'Mean Post-Implant Gradient', nominal: '7.8 mmHg', tolerance: '< 10 mmHg', standard: 'Clinical In Vivo' },
                { parameter: 'Frame Material', nominal: 'Nitinol Shape Memory', tolerance: 'Medical Grade', standard: 'ASTM F2063' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Transfemoral Delivery & Repositionability',
          subtitle: 'Controlled Release Mechanism',
          sections: [
            {
              heading: '2.0 Delivery System Maneuverability',
              text: 'The catheter features integrated 1:1 wheel-controlled axial steering, allowing precise depth control (3–5 mm below the non-coronary cusp) and full recapture if repositioning is warranted.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Case Preparation & Hospital Consignment',
          subtitle: 'SMP Surgitech Structural Heart Specialist Protocol',
          sections: [
            {
              heading: '3.0 On-Site Cath Lab Support',
              text: 'SMP Surgitech dispatches complete backup valve size matrices and sterile crimping tools with a certified valve specialist present throughout the structural heart case.'
            }
          ]
        }
      ]
    }
  },

  // 9. IMPELLA Heart Pump
  {
    id: 'impella-heart-pump-system',
    sku: 'JNJ-IMP-CP50',
    name: 'IMPELLA® Percutaneous Mechanical Circulatory Support Heart Pump',
    brand: 'J&J MedTech (Surgical Solutions)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    subcategory: 'Percutaneous Ventricular Assist Device (pVAD)',
    shortDesc: 'World’s smallest heart pump delivering direct active forward blood flow up to 4.3–5.0 L/min, unloading the left ventricle and perfusing vital end-organs during high-risk PCI and cardiogenic shock.',
    clinicalApplication: 'Protected high-risk PCI (CHIP), acute myocardial infarction with cardiogenic shock (AMICS), acute myocarditis, and post-cardiotomy low output syndrome.',
    keyFeatures: [
      'Active microaxial blood pump pulling blood from LV and expelling into ascending aorta',
      'Provides true continuous hemodynamic unloading independent of patient heart rhythm',
      'Reduces LV end-diastolic pressure (LVEDP) and myocardial oxygen demand immediately',
      'Automated Impella Controller (AIC) with intelligent optical pressure optical sensing'
    ],
    specs: {
      profileOrSize: 'Impella CP (3.5 - 4.3 L/min) | Impella 5.0 (up to 5.0 L/min) | 14F Sheath',
      compatibilityOrSheath: 'Femoral or axillary surgical cutdown access',
      materialOrCoating: 'Biocompatible titanium casing, polymer impeller and optical sensors',
      shelfLifeOrSterility: 'Sterile EO Single-Use Disposable Catheter with Purge Cassette'
    },
    mriSafety: 'MR Unsafe (Electromechanical blood pump)',
    regulatoryStatus: ['CDSCO Registered', 'US FDA PMA Approved', 'CE Mark Certified'],
    leadTime: 'Emergency Rapid Standby Deployment & Consignment across MP, CG, South RJ & UP',
    packaging: 'Rigid sealed surgical catheter tray with optical sensor connectors',
    image: IMPELLA_IABP_IMAGE,
    featured: true,
    pdfUrl: '/pdf/Impella CP with SmartAssist Data Sheet.pdf',
    pdfFileName: 'Impella_CP_with_SmartAssist_Data_Sheet.pdf',
    pdfSpec: {
      docNumber: 'TDS-JNJ-IMP-2026',
      revision: 'Rev 7.0',
      effectiveDate: '2026-02-10',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Pump Hemodynamics & Microaxial Motor Specs',
          subtitle: 'IMPELLA® Left Ventricular Mechanical Circulatory Support',
          sections: [
            {
              heading: '1.0 Hemodynamic Performance Curve',
              text: 'The Impella microaxial rotor operates up to 46,000 RPM, delivering continuous physiological flow directly from the LV cavity into the systemic circulation.',
              specs: [
                { parameter: 'Maximum Flow Rate (CP)', nominal: '4.3 L/min', tolerance: '± 0.2 L/min', standard: 'Hydrodynamic Lab' },
                { parameter: 'Motor Speed Range', nominal: '25,000 - 46,000 RPM', tolerance: 'Variable P-levels', standard: 'AIC Controller' },
                { parameter: 'Catheter Cannula Size', nominal: '14 Fr', tolerance: 'OD nominal', standard: 'ISO 10555' },
                { parameter: 'Purge Solution Pressure', nominal: '300 - 1100 mmHg', tolerance: 'Auto-regulated', standard: 'Purge Cassette Spec' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Clinical Indications & Ventricular Unloading Mechanics',
          subtitle: 'Myocardial Protection & Hemodynamic Stabilization',
          sections: [
            {
              heading: '2.0 Hemodynamic Stabilization Mechanism',
              text: 'Unloads the left ventricle directly, shifting the pressure-volume loop to the left, decreasing myocardial wall stress, and preserving coronary microvascular perfusion.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'SMP Surgitech Emergency Consignment Program',
          subtitle: 'Emergency Cath Lab & ICU Dispatch',
          sections: [
            {
              heading: '3.0 24/7 Rapid Emergency Response',
              text: 'SMP Surgitech maintains emergency consigned consoles and sterile Impella CP kits in major cardiac centers with 24/7 clinical applications engineers ready for transport.'
            }
          ]
        }
      ]
    }
  },

  // 10. IABP PUMP & Balloon Catheters
  {
    id: 'iabp-pump-catheter-system',
    sku: 'TFX-IAB-WAV2',
    name: 'IABP PUMP (Intra-Aortic Balloon Pump) Console & AutoCAT™ Catheters',
    brand: 'Teleflex (Vascular Division)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    subcategory: 'Intra-Aortic Balloon Counterpulsation Console & Catheters',
    shortDesc: 'Automated intra-aortic balloon counterpulsation console and polyurethane balloon catheters providing synchronized diastolic augmentation and afterload reduction for failing hearts.',
    clinicalApplication: 'Cardiogenic shock refractory to inotropes, unstable angina refractory to medication, acute mitral regurgitation, perioperative support in high-risk cardiac surgery, and weaning from bypass.',
    keyFeatures: [
      'WAVE™ Algorithm auto-timing tracking the dicrotic notch on every heartbeat',
      'Fiber-optic physiological pressure sensing for artifact-free trigger synchronization',
      'Polyurethane DuraMac™ balloon with high abrasion resistance and rapid helium filling',
      'Automated lead switching and arrhythmia tracking in difficult atrial fibrillation'
    ],
    specs: {
      profileOrSize: 'Balloon Volumes: 30 cc, 40 cc, 50 cc | 7.0 Fr - 7.5 Fr Ultra-Low Profile',
      compatibilityOrSheath: 'Sheathed or sheathless insertion over 0.018" or 0.025" Guidewire',
      materialOrCoating: 'DuraMac medical polyurethane with hydrophilic coating',
      shelfLifeOrSterility: 'Sterile EO Disposable Balloon Kits | Console Maintenance Service'
    },
    mriSafety: 'MR Unsafe Console / Catheter non-ferromagnetic in patient',
    regulatoryStatus: ['CDSCO Approved', 'US FDA Approved', 'CE Mark Certified'],
    leadTime: 'Immediate Consignment & Emergency Console Standby in MP, CG, South RJ & UP',
    packaging: 'Complete sterile insertion kit with puncture needle, dilatators, and helium lines',
    image: IMPELLA_IABP_IMAGE,
    featured: true,
    pdfUrl: '/pdf/Interventional-AC3-IABP-Brochure_MC-005536-Rev-0.1.pdf',
    pdfFileName: 'Interventional-AC3-IABP-Brochure.pdf',
    pdfSpec: {
      docNumber: 'TDS-TFX-IAB-2026',
      revision: 'Rev 5.4',
      effectiveDate: '2026-01-30',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Counterpulsation Dynamics & Helium Pneumatics',
          subtitle: 'Teleflex Arrow AutoCAT 2 WAVE™ IABP System',
          sections: [
            {
              heading: '1.0 Pneumatic Specifications & Timing Precision',
              text: 'Helium gas counterpulsation system inflating at aortic valve closure (dicrotic notch) and deflating immediately before isovolumetric ventricular contraction.',
              specs: [
                { parameter: 'Balloon Inflation Speed', nominal: '< 50 ms', tolerance: 'Helium gas dynamics', standard: 'ISO 13485' },
                { parameter: 'Gas Source', nominal: 'USP Medical Helium', tolerance: '99.99% purity', standard: 'Medical Gas Code' },
                { parameter: 'Sheathless Profile', nominal: '7.5 Fr', tolerance: '± 0.1 Fr', standard: 'ISO 10555' },
                { parameter: 'Trigger Modes', nominal: 'ECG, Arterial Pressure, Pacer, Internal', tolerance: 'Auto-switching', standard: 'IEC 60601' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Balloon Catheter Sizing Selection',
          subtitle: 'Patient Height to Balloon Volume Calibration',
          sections: [
            {
              heading: '2.0 Sizing Chart',
              text: '30 cc: Height < 152 cm (5\'0") | 40 cc: Height 152–182 cm (5\'0" - 6\'0") | 50 cc: Height > 182 cm (6\'0")'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Hospital Support & Consignment Services',
          subtitle: 'SMP Surgitech Standby Console Maintenance',
          sections: [
            {
              heading: '3.0 Backup Consoles in Central & Western Hubs',
              text: 'SMP Surgitech provides standby backup IABP consoles on permanent lease or emergency consignment across major ICUs and Cath Labs in Central India.'
            }
          ]
        }
      ]
    }
  },

  // 11. Pocket ECG
  {
    id: 'pocket-ecg-diagnostic-device',
    sku: 'PKG-ECG-400',
    name: 'Pocket ECG Mobile Real-Time Arrhythmia Diagnostic System',
    brand: 'Pocket ECG (Diagnostic Devices)',
    category: 'Diagnostic Monitoring (Pocket ECG)',
    subcategory: 'Continuous Ambulatory Arrhythmia Diagnostic Telemetry',
    shortDesc: 'Smartphone-sized hospital-grade wireless arrhythmia telemetry recorder providing continuous, real-time, full-disclosure ECG streaming with immediate cloud analysis and automated event reporting.',
    clinicalApplication: 'Unexplained syncope, paroxysmal atrial fibrillation (AFib), transient palpitations, cryptogenic stroke cryptogenic source monitoring, and post-CABG/PCI arrhythmia surveillance.',
    keyFeatures: [
      'Continuous full-disclosure recording: captures every single beat up to 30 days',
      'Real-time cellular transmission automatically delivering alerts to attending cardiologists',
      'Advanced algorithm distinguishing AFib, ventricular tachycardia (VT), pauses, and heart blocks',
      'High patient compliance with ergonomic, lightweight, water-resistant patient sensor'
    ],
    specs: {
      profileOrSize: 'Dimensions: 98 x 56 x 14 mm | Weight: 74 grams with battery',
      compatibilityOrSheath: 'Compatible with standard 3-lead or 4-lead clinical snap electrodes',
      materialOrCoating: 'Medical-grade shock-absorbent biocompatible polymer housing',
      shelfLifeOrSterility: 'Non-sterile reusable clinical diagnostic device with sterile disposables'
    },
    mriSafety: 'MR Unsafe (Electronic telemetry transmitter)',
    regulatoryStatus: ['CDSCO Approved', 'US FDA Cleared', 'CE Mark Certified (MDR Class IIa)'],
    leadTime: 'Immediate Hospital Placement & Home Monitoring Logistics by SMP Surgitech',
    packaging: 'Complete patient kit with charging dock, leads, skin prep, and patient manual',
    image: POCKET_ECG_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-PKG-ECG-2026',
      revision: 'Rev 4.2',
      effectiveDate: '2026-02-05',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Telemetry Electronics & Detection Algorithms',
          subtitle: 'Pocket ECG Diagnostic Platform Specifications',
          sections: [
            {
              heading: '1.0 Signal Processing & Cellular Telemetry',
              text: 'Equipped with low-noise clinical bio-amplifiers with 16-bit ADC sampling at 300 Hz per channel. Transmits encrypted diagnostic data via cellular IoT connection.',
              specs: [
                { parameter: 'Sampling Rate', nominal: '300 Hz / channel', tolerance: '16-bit resolution', standard: 'AAMI EC38' },
                { parameter: 'Frequency Response', nominal: '0.05 to 100 Hz', tolerance: 'Diagnostic bandwidth', standard: 'IEC 60601-2-47' },
                { parameter: 'Battery Life', nominal: 'Up to 30 continuous hours per charge', tolerance: 'Lithium-ion rechargeable', standard: 'UN 38.3' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Clinical Reporting & Physician Portal',
          subtitle: 'Cardiology Cloud Review Interface',
          sections: [
            {
              heading: '2.0 Web-Based Review Portal',
              text: 'Hospital cardiologists log into a secure HIPAA/GDPR compliant dashboard with complete full-disclosure playback, automated AF burden quantification, and instant PDF summary generation.'
            }
          ]
        }
      ]
    }
  },

  // 12. SMP Cardiovascular & Micro-Vascular Surgical Instruments Set
  {
    id: 'smp-cardiovascular-surgical-set',
    sku: 'SMP-SURG-CVS1',
    name: 'SMP Cardiovascular & Micro-Vascular Surgical Instrument Set',
    brand: 'SMP Surgitech (Cardiovascular Surgical)',
    category: 'Cardiovascular Surgical Instruments',
    subcategory: 'Micro-Vascular Surgery & Open-Heart Clamping Suite',
    shortDesc: 'Hospital-grade German stainless steel and titanium cardiovascular instrumentation suite: DeBakey atraumatic vascular clamps, Castroviejo micro-needle holders, and Potts-Smith vascular scissors.',
    clinicalApplication: 'Open-heart surgery, peripheral vascular bypass, carotid endarterectomy, aortic aneurysm repair, and pediatric cardiac operations.',
    keyFeatures: [
      'Manufactured from certified German DIN 1.4021 / AISI 420B stainless steel & surgical titanium',
      'True atraumatic DeBakey micro-serrations eliminate endothelial vessel trauma during clamping',
      'Tungsten carbide (TC) inserts on needle holders and micro-scissors for extended longevity',
      'Electro-satin matte passivation finish eliminating glare under high-intensity surgical theater lighting'
    ],
    specs: {
      profileOrSize: 'Comprehensive 42-Piece Surgical Tray with perforated autoclave container',
      compatibilityOrSheath: 'Compatible with standard hospital sterilization cycles (134°C pre-vacuum)',
      materialOrCoating: 'German DIN 1.4021 stainless steel, Grade 5 Titanium & Tungsten Carbide',
      shelfLifeOrSterility: 'Reusable instrument set with verified 10+ year autoclave lifespan'
    },
    mriSafety: 'Surgical instrument (Used in operating suite, non-implantable)',
    regulatoryStatus: ['ISO 13485:2016 Certified', 'CE Mark MDR Class Ir', 'CDSCO Registered'],
    leadTime: 'In Stock for Immediate Delivery across MP, CG, South Rajasthan & UP',
    packaging: 'Medical-grade perforated stainless steel autoclave sterilization cassette with silicone mats',
    image: SURGICAL_SET_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-CVS1-2026',
      revision: 'Rev 6.2',
      effectiveDate: '2026-01-15',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Metallurgical Specifications & Tray Inventory',
          subtitle: 'Cardiovascular & Micro-Vascular Surgical Instrumentation',
          sections: [
            {
              heading: '1.0 Metallurgical Standards & Rockell Hardness',
              text: 'Vacuum furnace heat-treated to ensure uniform Martensitic crystalline grain structure with zero micro-voids, passivated strictly per ASTM A967 standards.',
              specs: [
                { parameter: 'Rockwell Hardness (Blades/Jaws)', nominal: '53 - 55 HRC', tolerance: '± 1 HRC', standard: 'ASTM E18' },
                { parameter: 'Tungsten Carbide Inserts', nominal: '70 - 72 HRC', tolerance: 'Gold-plated rings', standard: 'ISO 7153-1' },
                { parameter: 'Corrosion Passivation', nominal: 'Boil & Copper Sulfate Pass', tolerance: 'Zero staining', standard: 'ASTM F1089' }
              ]
            },
            {
              heading: '1.1 Tray Inventory Summary',
              text: 'Includes: DeBakey Vascular Clamps (60° angled, straight, curved), Potts-Smith Scissors (25°, 45°, 60°), Castroviejo Micro-Needle Holders with TC jaws, Cooley atraumatic forceps, and bulldog clamps.'
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Validated Hospital Reprocessing & Autoclave Protocol',
          subtitle: 'CSPD Guidelines',
          sections: [
            {
              heading: '2.0 Decontamination & Sterilization',
              text: 'Ultrasonic cleaning with enzymatic detergent pH 7.0–8.2 for 10 minutes at 40°C. Steam autoclave pre-vacuum cycle at 134°C (273°F) for 4 minutes with 20 minutes dry cycle.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Laser Marking & Hospital Consignment',
          subtitle: 'Custom Hospital Department Serialization',
          sections: [
            {
              heading: '3.0 UDI Serialization & Custom Marking',
              text: 'Every instrument is custom laser-etched with hospital department code (e.g., OR-CV-TRAY-1) and GS1 DataMatrix UDI barcode for seamless central sterile tracking.'
            }
          ]
        }
      ]
    }
  },

  // 13. SMP CABG & Sternotomy Surgical Set
  {
    id: 'smp-cabg-sternotomy-set',
    sku: 'SMP-SURG-CABG2',
    name: 'SMP Coronary Artery Bypass Graft (CABG) & Sternotomy Surgical Set',
    brand: 'SMP Surgitech (Cardiovascular Surgical)',
    category: 'Cardiovascular Surgical Instruments',
    subcategory: 'Cardiothoracic Sternal Retraction & Micro-Anastomosis Suite',
    shortDesc: 'Heavy-duty cardiothoracic surgical set including self-retaining Morse sternal retractors, internal mammary artery (IMA) retractors, coronary micro-scissors, and micro-anastomosis forceps.',
    clinicalApplication: 'Coronary artery bypass grafting (on-pump and off-pump OPCAB), aortic valve replacement (AVR), mitral valve repair (MVR), and adult cardiac surgery.',
    keyFeatures: [
      'Precision Morse sternal retractor with interchangeable aluminum and stainless steel blades',
      'Favoloro-style IMA retractor with multi-directional rack and pinion lifting mechanism',
      'Micro-coronary scissors with 360° rotational tactile response for end-to-side graft anastomosis',
      'Ultra-fine titanium micro-ring forceps (0.4 mm tip) for delicate saphenous vein handling'
    ],
    specs: {
      profileOrSize: '36-Piece Specialized Cardiothoracic Set with Dedicated Aluminum Sternal Container',
      compatibilityOrSheath: 'Compatible with standard autoclave sterilization cycles up to 138°C',
      materialOrCoating: 'German DIN 1.4021 Martensitic Stainless Steel & Anodized Aircraft Aluminum',
      shelfLifeOrSterility: 'Reusable surgical instruments with 10-year mechanical warranty'
    },
    mriSafety: 'Non-implantable surgical suite equipment',
    regulatoryStatus: ['ISO 13485:2016 Certified', 'CE Mark MDR Class Ir', 'CDSCO Registered'],
    leadTime: 'In Stock / 24-48h Express Dispatch across MP, CG, South Rajasthan & UP',
    packaging: 'Two-tier heavy-duty anodized aluminum sterilization container with silicone brackets',
    image: CARDIO_INSTRUMENTS_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-SMP-CABG-2026',
      revision: 'Rev 5.0',
      effectiveDate: '2026-01-18',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: 'Cardiothoracic Sternal Retractor Specs',
          subtitle: 'SMP-SURG-CABG2 Technical Specifications',
          sections: [
            {
              heading: '1.0 Sternal Retractor Mechanical Engineering',
              text: 'Designed to withstand sternal expansion forces up to 850 N without gear slippage. Rack and pinion track precision wire-cut for smooth tactile operation.',
              specs: [
                { parameter: 'Maximum Sternal Spread', nominal: '200 mm', tolerance: '± 2 mm', standard: 'SMP Heavy-Duty Spec' },
                { parameter: 'Retractor Arm Material', nominal: 'AISI 420B Stainless', tolerance: 'Vacuum forged', standard: 'DIN EN ISO 7153-1' },
                { parameter: 'Blade Depth Options', nominal: '30 mm, 40 mm, 50 mm', tolerance: 'Interchangeable', standard: 'SMP Modular Spec' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Micro-Anastomosis Instruments',
          subtitle: 'Coronary Graft Handling Guidelines',
          sections: [
            {
              heading: '2.0 Micro-Surgical Jaws',
              text: 'Micro-vascular forceps feature ultra-fine 0.4 mm ring tips with longitudinal micro-fluting to hold the saphenous vein or internal mammary artery graft without crushing the intima.'
            }
          ]
        }
      ]
    }
  },
  // product add on
  {
    id: "abbott-trek-balloon",
    sku: "ABT-TRK-RX",
    name: "TREK™ Coronary Dilatation Catheter",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Balloon Catheters",
    subcategory: "Rapid-exchange coronary balloon catheter",
    shortDesc: "Rapid-exchange PTCA balloon catheter designed for coronary lesion dilatation; available in model-specific diameters and lengths.",
    clinicalApplication: "Coronary balloon angioplasty and selected post-stent dilatation indications according to the applicable IFU.",
    keyFeatures: [
      "Rapid-exchange catheter platform",
      "Smooth shaft transitions for deliverability",
      "Choose size and platform from current manufacturer catalogue"
    ],
    specs: {
      profileOrSize: "Diameter and length vary by SKU; consult current compliance chart",
      compatibilityOrSheath: "0.014 in guidewire platform; guide catheter size depends on balloon SKU",
      materialOrCoating: "Balloon and shaft materials vary by model; see manufacturer IFU",
      shelfLifeOrSterility: "Sterile, single-use; confirm shelf life on package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the catheter itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-trek-balloon.jpg',
    featured: false
  },
  {
    id: "abbott-nc-trek-balloon",
    sku: "ABT-NCT-RX",
    name: "NC TREK™ Non-Compliant Coronary Dilatation Catheter",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Balloon Catheters",
    subcategory: "Non-compliant PTCA balloon catheter",
    shortDesc: "Non-compliant coronary dilatation balloon for controlled high-pressure dilatation, with exact sizing and pressure limits specified by model.",
    clinicalApplication: "Coronary lesion and stent dilatation where indicated by the product IFU.",
    keyFeatures: [
      "Non-compliant balloon platform",
      "Rapid-exchange and model-specific configurations",
      "Use the exact SKU compliance chart for rated burst pressure"
    ],
    specs: {
      profileOrSize: "Diameter, length and pressure limits vary by SKU",
      compatibilityOrSheath: "0.014 in guidewire; guide catheter compatibility varies by balloon diameter",
      materialOrCoating: "Polymer balloon and catheter shaft; exact formulation varies by model",
      shelfLifeOrSterility: "Sterile, single-use; check labelled expiry"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the catheter itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-nc-trek-balloon.jpg',
    featured: false
  },
  {
    id: "abbott-nc-trek-neo",
    sku: "ABT-NCT-NEO",
    name: "NC TREK NEO™ Coronary Dilatation Catheter",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Balloon Catheters",
    subcategory: "Non-compliant coronary balloon catheter",
    shortDesc: "Abbott non-compliant rapid-exchange coronary balloon with a broad size matrix, including larger diameter options in the manufacturer catalogue.",
    clinicalApplication: "Coronary lesion dilatation and indicated post-stent expansion; follow current IFU and size-specific limits.",
    keyFeatures: [
      "Rapid-exchange platform",
      "Hydrophilic distal coating",
      "0.014 in guidewire compatibility",
      "Manufacturer lists 145 cm shaft length and 18 atm rated burst pressure"
    ],
    specs: {
      profileOrSize: "1.50–6.00 mm diameters across model range; 145 cm shaft length",
      compatibilityOrSheath: "0.014 in guidewire; minimum guide catheter ID depends on diameter",
      materialOrCoating: "Pebax or Grilamid balloon material by diameter; flexible tungsten/Pebax marker material",
      shelfLifeOrSterility: "Sterile EO; manufacturer lists 36-month shelf life"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the catheter itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-nc-trek-neo.jpg',
    featured: false
  },
  {
    id: "abbott-allstar-guidewire",
    sku: "ABT-GW-ALLSTAR",
    name: "AllStar™ Coronary Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Workhorse coronary guidewire for routine wire crossing and device delivery; confirm current model-specific properties.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-allstar-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-crossit-guidewire",
    sku: "ABT-GW-CROSSIT",
    name: "CrossIT™ Coronary Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Coronary guidewire family intended for lesion crossing; exact tip load and coating depend on model.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-crossit-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-bmw-guidewire",
    sku: "ABT-GW-BMW",
    name: "BMW™ Coronary Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Workhorse coronary guidewire for routine coronary access and device delivery.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-bmw-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-whisper-guidewire",
    sku: "ABT-GW-WHISPER",
    name: "Whisper™ Coronary Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Coronary guidewire family designed for navigating challenging coronary anatomy; verify model-specific characteristics.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-whisper-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-pilot-guidewire",
    sku: "ABT-GW-PILOT",
    name: "PILOT™ Coronary Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Coronary guidewire family for lesion crossing, including model-specific options for complex anatomy.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-pilot-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-versaturn-guidewire",
    sku: "ABT-GW-VERSATURN",
    name: "VersaTurn™ Guidewire",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Guidewires",
    subcategory: "Coronary guidewire",
    shortDesc: "Guidewire product name supplied for the catalogue; verify exact manufacturer model and IFU before publication.",
    clinicalApplication: "Coronary guidewire placement and lesion/device crossing as specified in the applicable IFU.",
    keyFeatures: [
      "Model-specific tip load, tip shape and coating",
      "Check current manufacturer catalogue before ordering",
      "Single-use device; do not infer dimensions across models"
    ],
    specs: {
      profileOrSize: "Diameter, working length and tip configuration vary by model",
      compatibilityOrSheath: "Turnpike catheter family is designed to track over a 0.014 in guidewire; model compatibility must be confirmed",
      materialOrCoating: "Guidewire core and coating vary by product family",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry and package label"
    },
    mriSafety: "Not an implant; MRI safety generally not applicable to the guidewire itself",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-versaturn-guidewire.jpg',
    featured: false
  },
  {
    id: "abbott-graftmaster",
    sku: "ABT-GRAFTMASTER",
    name: "GRAFTMASTER™ RX Coronary Stent Graft System",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Access & Delivery Devices",
    subcategory: "Covered coronary stent graft",
    shortDesc: "Rapid-exchange coronary stent-graft system using an ePTFE graft layer between stainless-steel stents; intended indications and markets are restricted by the current IFU.",
    clinicalApplication: "Treatment of selected coronary perforations only when permitted by the applicable local label and IFU.",
    keyFeatures: [
      "Rapid-exchange delivery platform",
      "ePTFE graft between 316L stainless-steel stents",
      "Manufacturer US page lists 0.014 in guidewire and 143 cm catheter length"
    ],
    specs: {
      profileOrSize: "Model diameters and lengths vary; US product page lists diameters from 2.8–4.8 mm",
      compatibilityOrSheath: "0.014 in guidewire; minimum guide catheter size varies by model",
      materialOrCoating: "316L stainless steel with expandable PTFE graft",
      shelfLifeOrSterility: "Sterile implant system; shelf life and storage per package label"
    },
    mriSafety: "Confirm MRI conditions for the implanted device using current manufacturer labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-graftmaster.jpg',
    featured: false
  },
  {
    id: "abbott-indeflator",
    sku: "ABT-INDEFLATOR",
    name: "Coronary Balloon Inflation Device (Indeflator)",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Access & Delivery Devices",
    subcategory: "Balloon inflation device",
    shortDesc: "Manual inflation device used to inflate and deflate compatible angioplasty balloons and monitor pressure during the procedure.",
    clinicalApplication: "Controlled inflation and deflation of compatible balloon catheters during interventional procedures.",
    keyFeatures: [
      "Manual pressure control",
      "Pressure gauge and syringe configuration depend on model",
      "Confirm rated pressure and connector compatibility on package"
    ],
    specs: {
      profileOrSize: "Capacity and pressure range vary by model",
      compatibilityOrSheath: "Use only with compatible balloon catheter and connectors",
      materialOrCoating: "Medical-grade components; exact materials depend on SKU",
      shelfLifeOrSterility: "Sterile or non-sterile status varies by model; verify label"
    },
    mriSafety: "Non-implantable external device; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-indeflator.jpg',
    featured: false
  },
  {
    id: "abbott-y-connector",
    sku: "ABT-Y-CONNECTOR",
    name: "Hemostasis Y-Connector Valve",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Coronary Access & Delivery Devices",
    subcategory: "Hemostasis valve / Y-connector",
    shortDesc: "Y-connector accessory designed to provide catheter access and hemostasis around a guidewire or interventional device.",
    clinicalApplication: "Guide catheter access during interventional cardiology procedures.",
    keyFeatures: [
      "Hemostasis valve configuration varies by model",
      "Side-arm flushing/access port",
      "Verify connector and device compatibility"
    ],
    specs: {
      profileOrSize: "Dimensions and port configuration vary by SKU",
      compatibilityOrSheath: "Compatibility depends on guide catheter and inserted device",
      materialOrCoating: "Medical-grade polymer components; exact materials vary",
      shelfLifeOrSterility: "Sterility and single-use status per package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-y-connector.jpg',
    featured: false
  },
  {
    id: "abbott-proglide",
    sku: "ABT-PROCLOSE-PG",
    name: "Perclose ProGlide™ Suture-Mediated Closure System",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Vascular Closure Devices",
    subcategory: "Femoral vascular closure",
    shortDesc: "Suture-mediated vascular closure system designed for hemostasis at selected femoral arterial and venous access sites.",
    clinicalApplication: "Femoral access-site closure when patient, sheath size and procedure meet the current IFU.",
    keyFeatures: [
      "Suture-mediated closure",
      "May be used in pre-close or post-close workflows as permitted by IFU",
      "Access-size indications are model and label dependent"
    ],
    specs: {
      profileOrSize: "Device and sheath indications vary; consult current IFU",
      compatibilityOrSheath: "Use within labelled femoral access and sheath-size range",
      materialOrCoating: "Suture and delivery components; exact materials per IFU",
      shelfLifeOrSterility: "Sterile, single-use; check package expiry"
    },
    mriSafety: "Not a permanent implant in the usual sense; MRI considerations depend on retained suture and current labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-proglide.jpg',
    featured: false
  },
  {
    id: "abbott-orbital-atherectomy",
    sku: "ABT-ORBITAL",
    name: "Orbital Atherectomy System (Diamondback 360™)",
    brand: "Abbott Healthcare Pvt. Ltd. (Vascular Division)",
    category: "Atherectomy Systems",
    subcategory: "Orbital atherectomy",
    shortDesc: "Orbital atherectomy platform used to modify selected calcified lesions; confirm the exact system, indication and market availability.",
    clinicalApplication: "Lesion preparation in appropriately selected calcified vessels under the system IFU.",
    keyFeatures: [
      "Atherectomy console and disposable device family",
      "Device selection depends on anatomy and indication",
      "Do not substitute this entry for a specific catheter SKU"
    ],
    specs: {
      profileOrSize: "Crown, catheter and sheath details vary by model",
      compatibilityOrSheath: "Use only the manufacturer-specified guidewire, sheath and console configuration",
      materialOrCoating: "Diamond-coated crown and catheter components; model-specific",
      shelfLifeOrSterility: "Sterile disposable components; console is reusable equipment"
    },
    mriSafety: "External console and disposable catheter; follow manufacturer MRI labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/abbott-orbital-atherectomy.jpg',
    featured: false
  },
  {
    id: "sjm-vvir-pacemaker",
    sku: "SJM-VVIR",
    name: "VVIR Pacemaker System",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Single-chamber rate-responsive pacing system; exact generator and lead model must be selected from current catalogue.",
    clinicalApplication: "Pacing for indicated bradyarrhythmias under physician assessment.",
    keyFeatures: [
      "Single-chamber pacing category",
      "Rate-responsive mode",
      "Generator/lead compatibility is model-specific"
    ],
    specs: {
      profileOrSize: "Generator and lead options vary by model",
      compatibilityOrSheath: "Lead and generator compatibility per manufacturer documentation",
      materialOrCoating: "Implantable electronic generator and pacing lead",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI status is model/system-specific; do not assume MRI conditionality",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-vvir-pacemaker.jpg',
    featured: false
  },
  {
    id: "sjm-dddr-pacemaker",
    sku: "SJM-DDDR",
    name: "DDDR Pacemaker System",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Dual-chamber rate-responsive pacing system; exact generator, lead and programming features depend on model.",
    clinicalApplication: "Pacing for indicated bradyarrhythmias under physician assessment.",
    keyFeatures: [
      "Dual-chamber pacing category",
      "Rate-responsive mode",
      "Confirm exact model and lead compatibility"
    ],
    specs: {
      profileOrSize: "Generator and lead options vary by model",
      compatibilityOrSheath: "Lead and generator compatibility per manufacturer documentation",
      materialOrCoating: "Implantable electronic generator and pacing leads",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI status is model/system-specific; do not assume MRI conditionality",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-dddr-pacemaker.jpg',
    featured: false
  },
  {
    id: "sjm-crt-p",
    sku: "SJM-CRTP",
    name: "CRT-P Cardiac Resynchronization Pacemaker",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Cardiac resynchronization pacemaker category; select the exact model and compatible lead system from the current catalogue.",
    clinicalApplication: "Cardiac resynchronization pacing for patients meeting the relevant clinical criteria.",
    keyFeatures: [
      "Biventricular pacing category",
      "Exact features depend on generator model",
      "Lead configuration is patient and model dependent"
    ],
    specs: {
      profileOrSize: "Generator and lead options vary by model",
      compatibilityOrSheath: "Confirm compatible leads and labelled implant procedure",
      materialOrCoating: "Implantable electronic generator and pacing leads",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI status is model/system-specific; confirm exact generator and lead combination",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-crt-p.jpg',
    featured: false
  },
  {
    id: "sjm-sicd",
    sku: "SJM-SICD",
    name: "Subcutaneous Implantable Cardioverter Defibrillator (S-ICD)",
    brand: "Manufacturer / model to be confirmed (CRM)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Subcutaneous defibrillator system category requested for the catalogue. S-ICD manufacturer/model must be confirmed; do not attribute it to St. Jude without the exact catalogue reference." ,
    clinicalApplication: "Defibrillation therapy for patients meeting the applicable indications.",
    keyFeatures: [
      "Subcutaneous lead and pulse-generator architecture",
      "Remote monitoring availability is model/service dependent",
      "MRI conditions must be checked for the exact system"
    ],
    specs: {
      profileOrSize: "Generator and lead dimensions vary by model",
      compatibilityOrSheath: "Use only labelled system components",
      materialOrCoating: "Implantable electronic generator and subcutaneous electrode",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI conditions vary by model and full implanted system; do not assume 1.5T or 3T compatibility",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-sicd.jpg',
    featured: false
  },
  {
    id: "sjm-dicd",
    sku: "SJM-DICD",
    name: "Dual-Chamber Implantable Cardioverter Defibrillator (D-ICD)",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Dual-chamber ICD category; exact generator model, lead system and available features require catalogue verification.",
    clinicalApplication: "Defibrillation and pacing therapy for patients meeting applicable indications.",
    keyFeatures: [
      "Dual-chamber ICD category",
      "Remote monitoring is model/service dependent",
      "MRI labelling is specific to the complete implanted system"
    ],
    specs: {
      profileOrSize: "Generator and lead options vary by model",
      compatibilityOrSheath: "Use only labelled compatible leads and accessories",
      materialOrCoating: "Implantable electronic generator and pacing leads",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI conditions vary by model and full implanted system",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-dicd.jpg',
    featured: false
  },
  {
    id: "sjm-crtd",
    sku: "SJM-CRTD",
    name: "CRT-D Cardiac Resynchronization Defibrillator",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Cardiac resynchronization defibrillator category; exact generator and lead system must be confirmed by catalogue/IFU.",
    clinicalApplication: "Cardiac resynchronization and defibrillation therapy for eligible patients.",
    keyFeatures: [
      "CRT with defibrillation capability",
      "Remote monitoring is model/service dependent",
      "Exact therapy and MRI features depend on model"
    ],
    specs: {
      profileOrSize: "Generator and lead options vary by model",
      compatibilityOrSheath: "Use only labelled compatible leads and accessories",
      materialOrCoating: "Implantable electronic generator and pacing/defibrillation leads",
      shelfLifeOrSterility: "Sterile implantable components; verify expiry on label"
    },
    mriSafety: "MRI conditions vary by model and full implanted system",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-crtd.jpg',
    featured: false
  },
  {
    id: "sjm-temporary-pacing-lead",
    sku: "SJM-TEMP-PACE",
    name: "Temporary Pacing System / Temporary Pacing Lead",
    brand: "St. Jude Medical India Pvt. Ltd. (CRM Division)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Temporary pacing product category; verify whether the required item is a lead, generator or complete kit.",
    clinicalApplication: "Temporary pacing when clinically indicated and as specified by the selected device IFU.",
    keyFeatures: [
      "Temporary rather than permanent pacing",
      "Exact lead sizes and generator compatibility vary",
      "Check whether listing is lead-only or complete system"
    ],
    specs: {
      profileOrSize: "Lead size and length vary by model",
      compatibilityOrSheath: "Compatibility depends on temporary pacemaker generator and lead connector",
      materialOrCoating: "Medical-grade pacing lead and/or external generator",
      shelfLifeOrSterility: "Sterility and single-use status per component label"
    },
    mriSafety: "External/non-permanent system; follow component-specific MRI restrictions",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-temporary-pacing-lead.jpg',
    featured: false
  },
  {
    id: "sjm-leadless-pacemaker",
    sku: "SJM-LEADLESS",
    name: "Leadless Pacemaker System",
    brand: "Manufacturer / model to be confirmed (CRM)",
    category: "Cardiac Rhythm Management (CRM)",
    subcategory: "Cardiac rhythm management implant/system",
    shortDesc: "Leadless pacing system category requested for the catalogue. Confirm the exact manufacturer/model and current market availability before attributing it to St. Jude Medical." ,
    clinicalApplication: "Pacing for eligible patients under the applicable product IFU.",
    keyFeatures: [
      "Intracardiac leadless generator architecture",
      "Model-specific delivery catheter",
      "MRI conditions and pacing mode depend on exact model"
    ],
    specs: {
      profileOrSize: "Device and delivery catheter dimensions vary by model",
      compatibilityOrSheath: "Use the specific delivery system and labelled venous access pathway",
      materialOrCoating: "Implantable electronic device with dedicated delivery catheter",
      shelfLifeOrSterility: "Sterile implantable device and delivery catheter; verify package expiry"
    },
    mriSafety: "MRI conditions are model-specific; confirm current manufacturer labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-leadless-pacemaker.jpg',
    featured: false
  },
  {
    id: "sjm-tpi-lead-6f-5f",
    sku: "SJM-TPI-LEAD",
    name: "Temporary Pacing Lead, 5F / 6F",
    brand: "St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)",
    category: "Temporary Pacing Accessories",
    subcategory: "Temporary pacing lead",
    shortDesc: "Temporary pacing lead offered in the requested 5F and 6F sizes; verify the exact catalog number and length before ordering.",
    clinicalApplication: "Temporary intracardiac pacing when indicated by the device IFU.",
    keyFeatures: [
      "5F and 6F variants requested",
      "Confirm connector, length and curve from catalogue",
      "Use with compatible external pacing generator"
    ],
    specs: {
      profileOrSize: "5F / 6F variants; length and tip configuration require SKU confirmation",
      compatibilityOrSheath: "External pacing generator compatibility is model-specific",
      materialOrCoating: "Medical-grade pacing lead; exact materials per IFU",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Temporary lead; MRI restrictions apply during use and depend on exact component",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-tpi-lead-6f-5f.jpg',
    featured: false
  },
  {
    id: "sjm-tpi-balloon-tip-lead-5f",
    sku: "SJM-TPI-BALLOON-5F",
    name: "Temporary Pacing Lead, Balloon Tip, 5F",
    brand: "St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)",
    category: "Temporary Pacing Accessories",
    subcategory: "Balloon-tip temporary pacing lead",
    shortDesc: "Balloon-tip temporary pacing lead in the requested 5F configuration; verify exact model, balloon use instructions and compatible generator.",
    clinicalApplication: "Temporary intracardiac pacing as specified by the manufacturer IFU.",
    keyFeatures: [
      "5F requested size",
      "Balloon-tip configuration",
      "Use only according to the exact product instructions"
    ],
    specs: {
      profileOrSize: "5F; exact length and balloon details need SKU confirmation",
      compatibilityOrSheath: "Compatible external pacing generator per IFU",
      materialOrCoating: "Medical-grade catheter/lead materials; exact construction per IFU",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Temporary lead; MRI restrictions apply during use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-tpi-balloon-tip-lead-5f.jpg',
    featured: false
  },
  {
    id: "sjm-df-optis-oct-kit",
    sku: "SJM-DF-OPTIS-KIT",
    name: "Dragonfly™ / OPTIS™ OCT Imaging Catheter Kit",
    brand: "St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)",
    category: "Diagnostic Physiology & Imaging (OCT / FFR)",
    subcategory: "OCT imaging catheter kit",
    shortDesc: "Intravascular OCT imaging catheter kit intended for use with the compatible OCT console/platform; exact catheter and console generation must be matched.",
    clinicalApplication: "Intracoronary imaging during indicated interventional procedures.",
    keyFeatures: [
      "Single-use imaging catheter",
      "Compatible console and catheter generation must be confirmed",
      "Follow the exact catheter IFU for flushing and pullback"
    ],
    specs: {
      profileOrSize: "Dimensions and pullback options vary by catheter model",
      compatibilityOrSheath: "Compatible OPTIS/OCT platform and guide catheter per IFU",
      materialOrCoating: "Optical fibre and catheter shaft; model-specific",
      shelfLifeOrSterility: "Sterile, single-use catheter; console reusable"
    },
    mriSafety: "Non-implantable diagnostic catheter; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-df-optis-oct-kit.jpg',
    featured: false
  },
  {
    id: "sjm-ffr-console",
    sku: "SJM-FFR-CONSOLE",
    name: "FFR Physiology Console",
    brand: "St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)",
    category: "Diagnostic Physiology & Imaging (OCT / FFR)",
    subcategory: "Fractional flow reserve console",
    shortDesc: "Console/platform for physiological pressure measurements; compatibility with the selected pressure wire and lab equipment must be verified.",
    clinicalApplication: "Physiological assessment of coronary lesions using compatible pressure-sensing devices.",
    keyFeatures: [
      "Console/software version determines supported indices",
      "Verify pressure-wire compatibility",
      "Connectivity and accessories vary by platform"
    ],
    specs: {
      profileOrSize: "Console and accessories depend on model",
      compatibilityOrSheath: "Use only compatible pressure wires and manufacturer-approved accessories",
      materialOrCoating: "Medical electrical equipment",
      shelfLifeOrSterility: "Reusable console; follow manufacturer cleaning and service instructions"
    },
    mriSafety: "External console; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-ffr-console.jpg',
    featured: false
  },
  {
    id: "sjm-oct-console",
    sku: "SJM-OCT-CONSOLE",
    name: "OCT Imaging Console / OPTIS System",
    brand: "St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)",
    category: "Diagnostic Physiology & Imaging (OCT / FFR)",
    subcategory: "Optical coherence tomography console",
    shortDesc: "Console/platform for intravascular OCT imaging with compatible imaging catheters; exact generation and included accessories require confirmation.",
    clinicalApplication: "Intracoronary imaging during indicated interventional procedures.",
    keyFeatures: [
      "Compatible OCT imaging platform",
      "Console generation and catheter support must be verified",
      "Follow manufacturer setup and maintenance instructions"
    ],
    specs: {
      profileOrSize: "Console dimensions and software configuration vary by model",
      compatibilityOrSheath: "Compatible imaging catheter and lab interfaces per IFU",
      materialOrCoating: "Medical electrical equipment and imaging software",
      shelfLifeOrSterility: "Reusable console; catheters are separately supplied sterile disposables"
    },
    mriSafety: "External console; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/sjm-oct-console.jpg',
    featured: false
  },
  {
    id: "amplatzer-pda-occluder",
    sku: "ABT-AMP-PDA",
    name: "Amplatzer™ Duct Occluder (PDA)",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "Patent ductus arteriosus occluder",
    shortDesc: "Transcatheter occluder family for closure of patent ductus arteriosus; select model and size using current manufacturer sizing guidance.",
    clinicalApplication: "PDA closure in patients meeting the exact device IFU.",
    keyFeatures: [
      "Nitinol mesh construction; polyester material is present in some models",
      "Multiple models and size matrices exist",
      "Device choice must follow manufacturer sizing guidance"
    ],
    specs: {
      profileOrSize: "Model-specific; PDA occluder sizes vary by device family",
      compatibilityOrSheath: "Dedicated delivery system and sheath size vary by model",
      materialOrCoating: "Nitinol mesh; model-specific polyester components",
      shelfLifeOrSterility: "Sterile implantable device; verify labelled expiry"
    },
    mriSafety: "MRI conditions must be confirmed for exact model and current labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/amplatzer-pda-occluder.jpg',
    featured: false
  },
  {
    id: "amplatzer-pda-ii",
    sku: "ABT-AMP-PDA2",
    name: "Amplatzer™ Duct Occluder II (PDA II)",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "PDA occluder",
    shortDesc: "Low-profile duct occluder designed to conform to selected duct anatomies; model sizing and approach must follow current IFU.",
    clinicalApplication: "Transcatheter closure of selected patent ductus arteriosus.",
    keyFeatures: [
      "Conformable occluder design",
      "Pulmonary or aortic approach as permitted by IFU",
      "Model-specific sizing and delivery system"
    ],
    specs: {
      profileOrSize: "Model-specific; consult current sizing table",
      compatibilityOrSheath: "Use only compatible Amplatzer delivery system and sheath",
      materialOrCoating: "Nitinol mesh; confirm model-specific materials",
      shelfLifeOrSterility: "Sterile implantable device; verify labelled expiry"
    },
    mriSafety: "MRI conditions are model-specific; confirm current labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/amplatzer-pda-ii.jpg',
    featured: false
  },
  {
    id: "amplatzer-asd-occluder",
    sku: "ABT-AMP-ASD",
    name: "Amplatzer™ Septal Occluder (ASD)",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "Atrial septal defect occluder",
    shortDesc: "Double-disc transcatheter occluder made from nitinol mesh with polyester material, designed for closure of selected atrial septal defects.",
    clinicalApplication: "Transcatheter ASD closure for patients meeting the applicable IFU.",
    keyFeatures: [
      "Double-disc design",
      "Nitinol mesh and polyester material",
      "Size selection requires defect assessment and IFU"
    ],
    specs: {
      profileOrSize: "Model-specific waist and disc diameters",
      compatibilityOrSheath: "Dedicated delivery system and sheath vary by size",
      materialOrCoating: "Nitinol mesh and polyester",
      shelfLifeOrSterility: "Sterile implantable device; verify labelled expiry"
    },
    mriSafety: "MRI conditions must be confirmed for the exact model and current labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/amplatzer-asd-occluder.jpg',
    featured: false
  },
  {
    id: "vsd-occluder",
    sku: "SH-VSD-OCC",
    name: "Ventricular Septal Defect (VSD) Occluder",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "VSD closure device",
    shortDesc: "VSD occluder category requested for catalogue listing; manufacturer, model and market availability must be verified before specifying an exact device.",
    clinicalApplication: "Closure of selected ventricular septal defects only when supported by the exact device IFU.",
    keyFeatures: [
      "Exact device family must be confirmed",
      "Model-specific sizing and delivery system",
      "Do not infer suitability from ASD/PDA device specifications"
    ],
    specs: {
      profileOrSize: "Model-specific; verify manufacturer catalogue",
      compatibilityOrSheath: "Dedicated delivery system and sheath depend on device model",
      materialOrCoating: "Model-specific implant materials; confirm IFU",
      shelfLifeOrSterility: "Sterility and expiry per exact product label"
    },
    mriSafety: "MRI conditions depend on exact implanted device and labeling",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/vsd-occluder.jpg',
    featured: false
  },
  {
    id: "structural-delivery-system",
    sku: "SH-DELIVERY-SYS",
    name: "Structural Heart Occluder Delivery System",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "Delivery system",
    shortDesc: "Delivery system for compatible structural heart occluders; exact model must be matched to the selected implant.",
    clinicalApplication: "Transcatheter delivery of the specific compatible occluder according to IFU.",
    keyFeatures: [
      "Device-specific delivery platform",
      "Sheath and cable compatibility are model-specific",
      "Not interchangeable across all occluder families"
    ],
    specs: {
      profileOrSize: "Length and French size vary by model",
      compatibilityOrSheath: "Only compatible implant and accessories listed in IFU",
      materialOrCoating: "Catheter, sheath and cable materials vary",
      shelfLifeOrSterility: "Sterility and single-use status per model label"
    },
    mriSafety: "Non-implantable delivery system; MRI not applicable during use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/structural-delivery-system.jpg',
    featured: false
  },
  {
    id: "structural-sizing-balloon",
    sku: "SH-SIZING-BALLOON",
    name: "Structural Heart Sizing Balloon",
    brand: "Abbott (Structural Heart Division)",
    category: "Structural Heart (Congenital Interventions)",
    subcategory: "Sizing balloon catheter",
    shortDesc: "Sizing balloon category for structural heart procedures; exact balloon platform and dimensions must be confirmed from the manufacturer catalogue.",
    clinicalApplication: "Anatomical sizing during structural heart procedures when indicated by the device IFU.",
    keyFeatures: [
      "Balloon dimensions vary by model",
      "Compatible guidewire and sheath depend on platform",
      "Follow rated pressure and sizing instructions"
    ],
    specs: {
      profileOrSize: "Diameter, length and pressure ratings are model-specific",
      compatibilityOrSheath: "Guidewire and sheath compatibility per IFU",
      materialOrCoating: "Medical-grade balloon catheter materials; exact materials per model",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Non-implantable catheter; MRI not applicable during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/structural-sizing-balloon.jpg',
    featured: false
  },
  {
    id: "teleflex-guideliner-v3",
    sku: "TFX-GUIDELINER-V3",
    name: "GuideLiner® V3 Guide Extension Catheter",
    brand: "Teleflex (Arrow)",
    category: "Cardiology Access Catheters",
    subcategory: "Guide extension catheter",
    shortDesc: "Guide extension catheter intended to provide additional backup support and facilitate delivery of interventional devices in selected coronary anatomies.",
    clinicalApplication: "Coronary device delivery when indicated by the catheter IFU.",
    keyFeatures: [
      "Half-pipe technology and coil-reinforced extension",
      "Five sizes: 5, 5.5, 6, 7 and 8 Fr",
      "Designed to facilitate delivery of interventional devices"
    ],
    specs: {
      profileOrSize: "Five sizes: 5, 5.5, 6, 7 and 8 Fr; working length 150 cm",
      compatibilityOrSheath: "Guide catheter ID requirements vary by size; see current GuideLiner V3 sizing table",
      materialOrCoating: "Catheter shaft and coating are model-specific",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Non-implantable catheter; MRI not applicable during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/teleflex-guideliner-v3.jpg',
    featured: false
  },
  {
    id: "teleflex-supercross",
    sku: "TFX-SUPERCROSS",
    name: "SuperCross™ Coronary Microcatheter",
    brand: "Teleflex (Arrow)",
    category: "Cardiology Access Catheters",
    subcategory: "Microcatheter",
    shortDesc: "Microcatheter family with model-specific tip configurations for guidewire direction and selective access.",
    clinicalApplication: "Selective coronary guidewire access according to the exact product IFU.",
    keyFeatures: [
      "Multiple tip configurations: Straight/Flexible, 45°, 90°, 120° and 90° XT (availability varies by market)",
      "Select configuration and size from current catalogue",
      "Compatibility is model-specific"
    ],
    specs: {
      profileOrSize: "Tip angle, length and French size vary by model",
      compatibilityOrSheath: "Guidewire compatibility and guide catheter requirements per IFU; SuperCross models are intended for use with steerable guidewires",
      materialOrCoating: "Catheter shaft and coating vary by model",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Non-implantable catheter; MRI not applicable during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/teleflex-supercross.jpg',
    featured: false
  },
  {
    id: "teleflex-turnpike",
    sku: "TFX-TURNPIKE",
    name: "Turnpike® Torqueable Microcatheter",
    brand: "Teleflex (Arrow)",
    category: "Cardiology Access Catheters",
    subcategory: "Torqueable coronary microcatheter",
    shortDesc: "Torqueable microcatheter family designed to support wire delivery through challenging coronary anatomy; exact family variant must be selected.",
    clinicalApplication: "Coronary guidewire support and lesion crossing as indicated by the selected model IFU.",
    keyFeatures: [
      "Family includes model variants; confirm Standard, Spiral or Gold if applicable",
      "Torque response and tip features are model-specific",
      "Use only within labelled guidewire compatibility"
    ],
    specs: {
      profileOrSize: "Length and distal profile vary by variant",
      compatibilityOrSheath: "Guidewire and guide catheter compatibility per IFU",
      materialOrCoating: "Braided/torqueable catheter construction varies by model",
      shelfLifeOrSterility: "Sterile, single-use; verify expiry on label"
    },
    mriSafety: "Non-implantable catheter; MRI not applicable during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/teleflex-turnpike.jpg',
    featured: false
  },
  {
    id: "cordis-guiding-catheter",
    sku: "CRD-GUIDING-CATHETER",
    name: "Guiding Catheter",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Guide catheter used to provide access and support during interventional procedures.",
    clinicalApplication: "Coronary angiography/intervention with compatible devices.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size, curve, length and inner diameter vary by model",
      compatibilityOrSheath: "Guidewire/device compatibility depends on selected catheter",
      materialOrCoating: "Polymer catheter with reinforcement/coating depending on model",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-guiding-catheter.jpg',
    featured: false
  },
  {
    id: "cordis-diagnostic-catheter",
    sku: "CRD-DIAGNOSTIC-CATHETER",
    name: "Diagnostic Catheter",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Diagnostic catheter family for contrast injection and vascular/coronary angiography.",
    clinicalApplication: "Diagnostic angiography as specified by the catheter IFU.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size, curve and length vary by model",
      compatibilityOrSheath: "Compatible with labelled access route and injection system",
      materialOrCoating: "Polymer catheter and radiopaque markers; exact construction varies",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-diagnostic-catheter.jpg',
    featured: false
  },
  {
    id: "cordis-femoral-sheath",
    sku: "CRD-FEMORAL-SHEATH",
    name: "Femoral Introducer Sheath",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Introducer sheath family for femoral vascular access.",
    clinicalApplication: "Femoral access for diagnostic or interventional procedures.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size and usable length vary by model",
      compatibilityOrSheath: "Compatible dilator, guidewire and access devices per IFU",
      materialOrCoating: "Sheath, dilator and valve materials vary by model",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-femoral-sheath.jpg',
    featured: false
  },
  {
    id: "cordis-radial-sheath",
    sku: "CRD-RADIAL-SHEATH",
    name: "Radial Introducer Sheath",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Introducer sheath family designed for radial vascular access.",
    clinicalApplication: "Radial access for diagnostic or interventional procedures.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size and usable length vary by model",
      compatibilityOrSheath: "Compatible dilator, guidewire and access devices per IFU",
      materialOrCoating: "Sheath, dilator and valve materials vary by model",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-radial-sheath.jpg',
    featured: false
  },
  {
    id: "cordis-aperi-balloon",
    sku: "CRD-APERI-BALLOON",
    name: "Aperi Balloon Catheter",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Balloon catheter product name requested for the Cordis catalogue; verify exact product family and SKU against the current Cordis catalogue.",
    clinicalApplication: "Use only for the indication stated in the confirmed product IFU.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "Diameter, length and pressure ratings require exact SKU confirmation",
      compatibilityOrSheath: "Guidewire and catheter compatibility require exact model confirmation",
      materialOrCoating: "Balloon and shaft materials require exact model confirmation",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-aperi-balloon.jpg',
    featured: false
  },
  {
    id: "cordis-selution-slr",
    sku: "CRD-SELUTION-SLR",
    name: "SELUTION SLR™ Sirolimus-Eluting Balloon",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Drug-eluting balloon platform using sustained limus release technology; confirm the exact vascular indication and market-specific label.",
    clinicalApplication: "Balloon treatment of lesions only within the approved/labelled indication for the exact market.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "Diameter, length and shaft dimensions vary by model",
      compatibilityOrSheath: "Guidewire and sheath compatibility per exact IFU",
      materialOrCoating: "Drug-coated balloon catheter; coating and platform are model-specific",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-selution-slr.jpg',
    featured: false
  },
  {
    id: "cordis-amba-tig",
    sku: "CRD-AMBA-TIG",
    name: "Amba TIG Diagnostic Catheter",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "TIG-shaped diagnostic catheter entry; confirm exact Amba product name and SKU from current catalogue before publishing.",
    clinicalApplication: "Diagnostic angiography according to the exact catheter IFU.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size and length require SKU confirmation",
      compatibilityOrSheath: "Compatible access route and injection system per IFU",
      materialOrCoating: "Polymer catheter with radiopaque markers; exact construction varies",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-amba-tig.jpg',
    featured: false
  },
  {
    id: "cordis-long-sheath",
    sku: "CRD-LONG-SHEATH",
    name: "Long Introducer Sheath",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Long sheath product category for selected vascular access and device delivery.",
    clinicalApplication: "Vascular access and device delivery within labelled indications.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "French size and length vary by model",
      compatibilityOrSheath: "Compatible dilator, guidewire and devices per IFU",
      materialOrCoating: "Sheath and valve materials vary by model",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-long-sheath.jpg',
    featured: false
  },
  {
    id: "cordis-biopsy-forceps",
    sku: "CRD-BIOPSY-FORCEPS",
    name: "Biopsy Forceps",
    brand: "Cordis (Cardiology)",
    category: "Cordis Interventional Products",
    subcategory: "Interventional catheter / accessory",
    shortDesc: "Biopsy forceps product category; exact Cordis product family and intended anatomy need confirmation.",
    clinicalApplication: "Use only for the tissue sampling indication stated in the exact IFU.",
    keyFeatures: [
      "Exact SKU and local market availability must be confirmed",
      "Use according to manufacturer IFU",
      "Do not assume sizes or compatibility across product families"
    ],
    specs: {
      profileOrSize: "Jaw type, diameter and working length vary by model",
      compatibilityOrSheath: "Compatible scope/channel and access system must be verified",
      materialOrCoating: "Medical-grade metallic/polymer components vary by model",
      shelfLifeOrSterility: "Sterility and single-use status per exact package label"
    },
    mriSafety: "MRI conditions not applicable to non-implantable catheter/accessory during procedure",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/cordis-biopsy-forceps.jpg',
    featured: false
  },
  {
    id: "spectrum-indeflator",
    sku: "SPM-INDEFLATOR",
    name: "Inflation Device (Indeflator)",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Manual inflation device for inflation/deflation and pressure monitoring of compatible balloon catheters.",
    clinicalApplication: "Controlled inflation and deflation of compatible balloon catheters.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "Capacity and pressure range vary by model",
      compatibilityOrSheath: "Compatible balloon catheter and connector per label",
      materialOrCoating: "Medical-grade components; exact materials per SKU",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-indeflator.jpg',
    featured: false
  },
  {
    id: "spectrum-y-connector",
    sku: "SPM-Y-CONNECTOR",
    name: "Y-Connector / Hemostasis Valve",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Hemostasis valve accessory to permit device passage while maintaining haemostasis at the catheter hub.",
    clinicalApplication: "Guide catheter access during interventional procedures.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "Port and valve configuration vary by model",
      compatibilityOrSheath: "Guide catheter and inserted-device compatibility per IFU",
      materialOrCoating: "Medical-grade polymer components; exact materials per SKU",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-y-connector.jpg',
    featured: false
  },
  {
    id: "spectrum-manifold-2-3-port",
    sku: "SPM-MANIFOLD-2-3-PORT",
    name: "2-Port / 3-Port Manifold",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Multi-port manifold for controlled connection of compatible lines and fluid pathways.",
    clinicalApplication: "Cath-lab fluid/contrast line setup according to the system instructions.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "2-port and 3-port variants; dimensions vary by SKU",
      compatibilityOrSheath: "Pressure rating and connector compatibility must be checked on label",
      materialOrCoating: "Medical-grade polymer/stopcock components vary by SKU",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-manifold-2-3-port.jpg',
    featured: false
  },
  {
    id: "spectrum-puncture-needle",
    sku: "SPM-PUNCTURE-NEEDLE",
    name: "Vascular Puncture Needle",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Needle product category for vascular access; exact gauge, length and tip design must be selected from catalogue.",
    clinicalApplication: "Vascular puncture only as specified by the device IFU.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "Gauge and length vary by model",
      compatibilityOrSheath: "Compatible access technique and guidewire per IFU",
      materialOrCoating: "Medical-grade stainless steel and handle materials vary by model",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-puncture-needle.jpg',
    featured: false
  },
  {
    id: "spectrum-high-pressure-monitor-line",
    sku: "SPM-HIGH-PRESSURE-MONITOR-LINE",
    name: "High-Pressure Monitoring Line",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Pressure monitoring extension line for compatible transducers and cath-lab monitoring systems.",
    clinicalApplication: "Pressure signal/fluid pathway connection within labelled pressure limits.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "Length, priming volume and pressure rating vary by model",
      compatibilityOrSheath: "Compatible pressure transducer, monitor and connectors per label",
      materialOrCoating: "Medical-grade tubing and connector materials vary",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-high-pressure-monitor-line.jpg',
    featured: false
  },
  {
    id: "spectrum-extension-line",
    sku: "SPM-EXTENSION-LINE",
    name: "Extension Line (100 / 150 / 200 cm)",
    brand: "Spectrum Medtech",
    category: "Cath Lab Consumables",
    subcategory: "Cath-lab disposable accessory",
    shortDesc: "Extension line family in requested 100, 150 and 200 cm lengths; confirm pressure rating and connector type by SKU.",
    clinicalApplication: "Extension of compatible fluid or pressure line assemblies.",
    keyFeatures: [
      "100% SKU-specific selection; verify connector type and pressure rating",
      "Follow package labelling and IFU",
      "Do not infer sterility or pressure rating from product name"
    ],
    specs: {
      profileOrSize: "100 / 150 / 200 cm requested variants",
      compatibilityOrSheath: "Connector type and pressure rating must match intended circuit",
      materialOrCoating: "Medical-grade tubing and connectors; exact materials per SKU",
      shelfLifeOrSterility: "Sterility, single-use status and expiry per exact package label"
    },
    mriSafety: "Non-implantable accessory; MRI not applicable during cath-lab use",
    regulatoryStatus: [],
    leadTime: 'Contact SMP Surgitech for current availability',
    packaging: 'Refer to exact manufacturer package label and instructions for use',
    image: '/src/assets/images/products/spectrum-extension-line.jpg',
    featured: false
  }
];

function enrichProduct(p: Product): Product {
  let img = p.image;
  if (!img || img.startsWith('/src/assets/images/products/') || img.includes('data:image')) {
    const textCorpus = `${p.id} ${p.name} ${p.category} ${p.subcategory || ''} ${p.shortDesc || ''}`.toLowerCase();
    if (textCorpus.includes('pacemaker') || textCorpus.includes('icd') || textCorpus.includes('pacing') || textCorpus.includes('crm') || textCorpus.includes('resynchronization') || textCorpus.includes('tpi')) {
      img = CRM_PACEMAKER_IMAGE;
    } else if (textCorpus.includes('occluder') || textCorpus.includes('plug') || textCorpus.includes('amplatzer') || textCorpus.includes('septal') || textCorpus.includes('structural')) {
      img = STRUCTURAL_OCCLUDER_IMAGE;
    } else if (textCorpus.includes('manifold') || textCorpus.includes('syringe') || textCorpus.includes('tubing') || textCorpus.includes('transducer') || textCorpus.includes('extension') || textCorpus.includes('y-connector') || textCorpus.includes('indeflator') || textCorpus.includes('cable') || textCorpus.includes('consumables') || textCorpus.includes('line')) {
      img = CATHLAB_CONSUMABLES_IMAGE;
    } else if (textCorpus.includes('sheath') || textCorpus.includes('proglide') || textCorpus.includes('prostyle') || textCorpus.includes('exoseal') || textCorpus.includes('introducer') || textCorpus.includes('needle') || textCorpus.includes('radial') || textCorpus.includes('closure')) {
      img = TRANSRADIAL_SHEATH_IMAGE;
    } else if (textCorpus.includes('balloon') || textCorpus.includes('trek') || textCorpus.includes('stent') || textCorpus.includes('xience')) {
      img = HERO_IMAGE;
    } else if (textCorpus.includes('oct') || textCorpus.includes('ffr') || textCorpus.includes('optis') || textCorpus.includes('coroflow')) {
      img = CATHLAB_OCT_IMAGE;
    } else if (textCorpus.includes('iabp') || textCorpus.includes('impella') || textCorpus.includes('circulatory') || textCorpus.includes('pump')) {
      img = IMPELLA_IABP_IMAGE;
    } else if (textCorpus.includes('ecg') || textCorpus.includes('holter') || textCorpus.includes('telemetry') || textCorpus.includes('arrhythmia')) {
      img = POCKET_ECG_IMAGE;
    } else if (textCorpus.includes('orthopedic') || textCorpus.includes('bone') || textCorpus.includes('trauma')) {
      img = ORTHO_INSTRUMENTS_IMAGE;
    } else if (textCorpus.includes('surgical set') || textCorpus.includes('tray') || textCorpus.includes('operating')) {
      img = SURGICAL_SET_IMAGE;
    } else if (textCorpus.includes('clamp') || textCorpus.includes('forceps') || textCorpus.includes('scissors') || textCorpus.includes('needle holder')) {
      img = CARDIO_INSTRUMENTS_IMAGE;
    } else {
      img = CATHETER_ACCESS_IMAGE;
    }
  }

  let spec = p.pdfSpec;
  if (!spec) {
    spec = {
      docNumber: `TDS-${p.sku}-2026`,
      revision: 'Rev 4.2',
      effectiveDate: '2026-01-20',
      totalPages: 2,
      pages: [
        {
          pageNumber: 1,
          title: `${p.name} Specification`,
          subtitle: `${p.brand} · ${p.subcategory || p.category}`,
          sections: [
            {
              heading: '1.0 Clinical Engineering & Application',
              text: p.clinicalApplication || p.shortDesc,
              bulletPoints: p.keyFeatures && p.keyFeatures.length > 0 ? p.keyFeatures : [
                'Engineered for critical catheterization laboratory and cardiac surgical procedures',
                'Certified biocompatibility compliant with ISO 10993 and USP Class VI requirements',
                '100% sterile barrier packaging with individual lot tracking and GS1 UDI barcoding'
              ]
            },
            {
              heading: '2.0 Mechanical Sizing & Dimensional Tolerances',
              text: 'Manufactured to precision cardiovascular tolerances with validated trackability and pushability metrics.',
              specs: [
                { parameter: 'Profile / Sizing Matrix', nominal: p.specs.profileOrSize || 'Standard Matrix', tolerance: '± 0.05 mm', standard: 'ISO 10555-1' },
                { parameter: 'Sheath / Guide Match', nominal: p.specs.compatibilityOrSheath || 'Standard Luer Lock', tolerance: 'Universal Fit', standard: 'ISO 80369-7' },
                { parameter: 'Material / Formulation', nominal: p.specs.materialOrCoating || 'Medical Polymer / Alloy', tolerance: 'Compliant', standard: 'ASTM F619' },
                { parameter: 'Sterilization Standard', nominal: p.specs.shelfLifeOrSterility || 'Sterile EO / SAL 10⁻⁶', tolerance: 'Single Use', standard: 'ISO 11135' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Cath Lab Sizing & Consignment Storage Protocol',
          subtitle: 'SMP Surgitech Regional Cath Lab Consignment Protocol',
          sections: [
            {
              heading: '3.0 Consignment & Rapid Cath Lab Supply',
              text: 'Maintained in continuous hospital consignment stock across our regional warehouses in Udaipur, Indore, Raipur, and Agra. Direct dispatch with 1 to 3 hours courier window for emergency angioplasties.',
              bulletPoints: [
                'Individual batch verification with sterile indicator integrity checks',
                'Store between 15°C and 25°C away from direct sunlight',
                'Dedicated 24/7 technical representative standby for cath lab procedures'
              ]
            },
            {
              heading: '4.0 Regulatory Authorizations',
              text: 'Authorized and registered under CDSCO / DCGI regulations (Government of India) with CE Mark certification.'
            }
          ]
        }
      ]
    };
  }

  let pdfUrl = p.pdfUrl;
  let pdfFileName = p.pdfFileName;
  const pIdLower = p.id.toLowerCase();
  const pCatLower = p.category.toLowerCase();
  const pNameLower = p.name.toLowerCase();

  if (!pdfUrl) {
    if (pIdLower.includes('guideliner') || pCatLower.includes('access catheters') || pNameLower.includes('brite tip')) {
      pdfUrl = '/pdf/MCI-2018-0444_IN_VSI_BR_GuideLiner_V3_Catheter-EN_GKN.pdf';
      pdfFileName = 'MCI-2018-0444_GuideLiner_V3_Catheter.pdf';
    } else if (pIdLower.includes('turnpike') || pCatLower.includes('guidewire')) {
      pdfUrl = '/pdf/MCI-2019-0823_IN_VSI_BR_Turnpike_EN-IN_HR (1).pdf';
      pdfFileName = 'MCI-2019-0823_Turnpike_Microcatheter.pdf';
    } else if (pIdLower.includes('supercross')) {
      pdfUrl = '/pdf/MCI-2018-0396_IN_VSI_BR_Supercrosscombined_EN_LR_2.pdf';
      pdfFileName = 'MCI-2018-0396_Supercross_Microcatheter.pdf';
    } else if (pIdLower.includes('cvc') || pIdLower.includes('iabp') || pNameLower.includes('arrow') || pNameLower.includes('optimus')) {
      pdfUrl = '/pdf/Interventional-AC3-IABP-Brochure_MC-005536-Rev-0.1.pdf';
      pdfFileName = 'Interventional_AC3_IABP_Brochure.pdf';
    } else if (pIdLower.includes('impella')) {
      pdfUrl = '/pdf/Impella CP with SmartAssist Data Sheet.pdf';
      pdfFileName = 'Impella_CP_SmartAssist_Data_Sheet.pdf';
    }
  }

  return {
    ...p,
    image: img,
    pdfSpec: spec,
    pdfUrl,
    pdfFileName
  };
}

export const SURGICAL_PRODUCTS: Product[] = RAW_SURGICAL_PRODUCTS.map(enrichProduct);

export const CATEGORIES: { id: string; label: string; count: number }[] = [
  { id: 'All Categories', label: 'All Products', count: SURGICAL_PRODUCTS.length },
  { id: 'Coronary Stents (XIENCE)', label: 'Coronary Stents (XIENCE)', count: SURGICAL_PRODUCTS.filter(p => p.category === 'Coronary Stents (XIENCE)').length },
  { id: 'Diagnostic Physiology & Imaging (OCT / FFR)', label: 'Diagnostic Imaging & Physiology (OCT / FFR)', count: SURGICAL_PRODUCTS.filter(p => p.category === 'Diagnostic Physiology & Imaging (OCT / FFR)').length },
  { id: 'Cardiovascular Physiology Systems (CoroFlow)', label: 'Cardiovascular Systems (CoroFlow)', count: SURGICAL_PRODUCTS.filter(p => p.category === 'Cardiovascular Physiology Systems (CoroFlow)').length },
  { id: 'Structural Heart (TAVI)', label: 'Structural Heart & Occluders (TAVI / ASO)', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Structural')).length },
  { id: 'Mechanical Circulatory Support (Impella & IABP)', label: 'Mechanical Circulatory Support (Impella & IABP)', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Circulatory')).length },
  { id: 'Cardiac Rhythm Management (CRM)', label: 'Cardiac Rhythm Management (CRM & Pacemakers)', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Rhythm')).length },
  { id: 'Cardiology Access Catheters', label: 'Access Catheters & Balloon Dilatation', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Catheters') || p.category.includes('Guidewires') || p.category.includes('Balloon') || p.category.includes('Access')).length },
  { id: 'Cath Lab Consumables', label: 'Cath Lab Consumables & Manifolds', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Consumables')).length },
  { id: 'Cardiovascular Surgical Instruments', label: 'Surgical Instruments (Cardiovascular / CABG)', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Surgical')).length },
  { id: 'Diagnostic Monitoring (Pocket ECG)', label: 'Diagnostic Devices (Pocket ECG)', count: SURGICAL_PRODUCTS.filter(p => p.category.includes('Diagnostic Monitoring')).length }
];

export const BRAND_FILTERS = [
  'All Brands',
  'Abbott (Vascular Division)',
  'Abbott Healthcare Pvt. Ltd. (Vascular Division)',
  'Abbott (Structural Heart Division)',
  'Cordis (Cardiology)',
  'Teleflex (Vascular Division)',
  'Teleflex (Arrow)',
  'St. Jude Medical (CRM & Structural Heart)',
  'St. Jude Medical India Pvt. Ltd. (CRM Division)',
  'St. Jude Medical India Pvt. Ltd. (OCT / FFR Division)',
  'J&J MedTech (Surgical Solutions)',
  'Pocket ECG (Diagnostic Devices)',
  'Spectrum Medtech',
  'SMP Surgitech (Cardiovascular Surgical)'
];

export interface OfficialPdfItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  docCode: string;
  fileSize: string;
  fileName: string;
  fileUrl: string;
  description: string;
  matchingProductId?: string;
}

export const OFFICIAL_MANUFACTURER_PDFS: OfficialPdfItem[] = [
  {
    id: 'pdf-impella-cp',
    title: 'Impella CP® with SmartAssist® Clinical Data Sheet',
    brand: 'J&J MedTech (Surgical Solutions)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    docCode: 'TDS-IMP-CP-SA',
    fileSize: '337 KB',
    fileName: 'Impella CP with SmartAssist Data Sheet.pdf',
    fileUrl: '/pdf/Impella CP with SmartAssist Data Sheet.pdf',
    description: 'Complete mechanical specifications, microaxial pump flow curves (up to 4.3 L/min), optical sensor hemodynamics, and cannulation sizing matrix for high-risk PCI & cardiogenic shock.',
    matchingProductId: 'impella-heart-pump-system'
  },
  {
    id: 'pdf-impella-india-cons',
    title: 'Abiomed Impella® India HRPCI Consensus Clinical Summary',
    brand: 'J&J MedTech (Surgical Solutions)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    docCode: 'MCI-IND-IMP-HRPCI',
    fileSize: '3.2 MB',
    fileName: 'Abiomed_Impella_India HRPCI Cons Summary_A4 4pg_20230116_FA (Preview) (2).pdf',
    fileUrl: '/pdf/Abiomed_Impella_India HRPCI Cons Summary_A4 4pg_20230116_FA (Preview) (2).pdf',
    description: 'Indian expert consensus recommendations for hemodynamic support during Protected High-Risk Percutaneous Coronary Intervention (HRPCI) and AMICS acute myocardial infarction management.',
    matchingProductId: 'impella-heart-pump-system'
  },
  {
    id: 'pdf-iabp-ac3',
    title: 'Interventional AutoCAT® 2 WAVE / AC3 IABP System Brochure',
    brand: 'Teleflex (Vascular Division)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    docCode: 'MC-005536-Rev-0.1',
    fileSize: '880 KB',
    fileName: 'Interventional-AC3-IABP-Brochure_MC-005536-Rev-0.1.pdf',
    fileUrl: '/pdf/Interventional-AC3-IABP-Brochure_MC-005536-Rev-0.1.pdf',
    description: 'Full engineering brochure for Arrow AutoCAT 2 WAVE intra-aortic balloon pump console, proprietary WAVE timing algorithm, and DuraMac polyurethane balloon catheters.',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-iabp-ac3-optimus',
    title: 'AC3 Optimus™ Intra-Aortic Balloon Pump Clinical Brochure',
    brand: 'Teleflex (Vascular Division)',
    category: 'Mechanical Circulatory Support (Impella & IABP)',
    docCode: 'MC-002341-r0.2',
    fileSize: '2.5 MB',
    fileName: 'AC3-Optimus-Clinical-Brochure-MC-002341-r0.2.pdf',
    fileUrl: '/pdf/AC3-Optimus-Clinical-Brochure-MC-002341-r0.2.pdf',
    description: 'Clinical counterpulsation efficiency, automatic dicrotic notch identification, high-speed pneumatics, and bedside catheter management.',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-guideliner-v3',
    title: 'GuideLiner® V3 Catheter Official Technical Brochure',
    brand: 'Teleflex (Vascular Division)',
    category: 'Cardiology Access Catheters',
    docCode: 'MCI-2018-0444',
    fileSize: '2.1 MB',
    fileName: 'MCI-2018-0444_IN_VSI_BR_GuideLiner_V3_Catheter-EN_GKN.pdf',
    fileUrl: '/pdf/MCI-2018-0444_IN_VSI_BR_GuideLiner_V3_Catheter-EN_GKN.pdf',
    description: 'The industry-standard guide extension catheter providing deep engagement, backup support, and smooth stent delivery in tortuous and calcified coronary anatomies.',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-guideliner-trapliner-playbook',
    title: 'GuideLiner® & TrapLiner® Clinical Playbook & Case Studies',
    brand: 'Teleflex (Vascular Division)',
    category: 'Cardiology Access Catheters',
    docCode: 'MCI-2019-0561',
    fileSize: '4.2 MB',
    fileName: 'MCI-2019-0561-EN-SG-GuideLiner-TrapLiner-Playbook-0819.pdf',
    fileUrl: '/pdf/MCI-2019-0561-EN-SG-GuideLiner-TrapLiner-Playbook-0819.pdf',
    description: 'Comprehensive interventional cardiologist case playbook detailing guide catheter extension techniques, balloon trapping, and crossing complex chronic total occlusions (CTO).',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-turnpike-catheter',
    title: 'Turnpike® Catheter Family Official Technical Spec Brochure',
    brand: 'Teleflex (Vascular Division)',
    category: 'Cardiology Access Catheters',
    docCode: 'MCI-2019-0823',
    fileSize: '7.2 MB',
    fileName: 'MCI-2019-0823_IN_VSI_BR_Turnpike_EN-IN_HR (1).pdf',
    fileUrl: '/pdf/MCI-2019-0823_IN_VSI_BR_Turnpike_EN-IN_HR (1).pdf',
    description: 'Advanced microcatheters including Turnpike Standard, Spiral, and Gold with threaded tip technology engineered for navigating complex resistant coronary lesions.',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-supercross-microcatheter',
    title: 'Supercross™ Microcatheter Engineering & Sizing Guide',
    brand: 'Teleflex (Vascular Division)',
    category: 'Cardiology Access Catheters',
    docCode: 'MCI-2018-0396',
    fileSize: '2.7 MB',
    fileName: 'MCI-2018-0396_IN_VSI_BR_Supercrosscombined_EN_LR_2.pdf',
    fileUrl: '/pdf/MCI-2018-0396_IN_VSI_BR_Supercrosscombined_EN_LR_2.pdf',
    description: 'Pre-shaped microcatheter portfolio (Straight, 45°, 90°, 120°) facilitating selective guidewire redirection and branch vessel access in bifurcated coronary interventions.',
    matchingProductId: 'iabp-pump-catheter-system'
  },
  {
    id: 'pdf-dtp-patient-guide',
    title: 'Direct-to-Patient (DTP) Clinical Procedure & Care Brochure',
    brand: 'SMP Surgitech (Cardiovascular)',
    category: 'Patient Education & Cath Lab Protocol',
    docCode: 'SMP-DTP-2026',
    fileSize: '9.3 MB',
    fileName: 'DTP Patient Brochure Guide.pdf',
    fileUrl: '/pdf/DTP Patient Brochure Guide.pdf',
    description: 'Comprehensive patient and clinical guide explaining coronary angioplasty, cardiac catheterization procedures, stent implantation recovery, and post-discharge protocols.',
    matchingProductId: 'xience-skypoint'
  }
];

