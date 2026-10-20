import { Product, DealerBrand, TerritoryRegion, Testimonial } from '../types/instruments';

export const HERO_IMAGE = '/src/assets/images/smp_xience_coronary_stent_1792349506273.jpg';
export const CATHLAB_OCT_IMAGE = '/src/assets/images/smp_cathlab_oct_coroflow_1792349506467.jpg';
export const IMPELLA_IABP_IMAGE = '/src/assets/images/smp_impella_iabp_circulatory_1792349522773.jpg';
export const POCKET_ECG_IMAGE = '/src/assets/images/smp_pocket_ecg_diagnostic_1792349523041.jpg';
export const SURGICAL_SET_IMAGE = '/src/assets/images/smp_hero_surgical_instruments_1792343796772.jpg';
export const CARDIO_INSTRUMENTS_IMAGE = '/src/assets/images/smp_cardio_neuro_instruments_1792343798351.jpg';
export const QUALITY_INSPECTION_IMAGE = '/src/assets/images/smp_quality_metallurgy_inspection_1792343798753.jpg';
export const ORTHO_INSTRUMENTS_IMAGE = '/src/assets/images/smp_orthopedic_surgical_set_1792343798115.jpg';

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

export const SURGICAL_PRODUCTS: Product[] = [
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
  }
];

export const CATEGORIES: { id: string; label: string; count: number }[] = [
  { id: 'All Categories', label: 'All Products', count: SURGICAL_PRODUCTS.length },
  { id: 'Coronary Stents (XIENCE)', label: 'Coronary Stents (XIENCE)', count: 4 },
  { id: 'Diagnostic Physiology & Imaging (OCT / FFR)', label: 'Diagnostic Imaging & Physiology (OCT / FFR)', count: 2 },
  { id: 'Cardiovascular Physiology Systems (CoroFlow)', label: 'Cardiovascular Systems (CoroFlow)', count: 1 },
  { id: 'Structural Heart (TAVI)', label: 'Structural Heart (TAVI)', count: 1 },
  { id: 'Mechanical Circulatory Support (Impella & IABP)', label: 'Mechanical Circulatory Support (Impella & IABP)', count: 2 },
  { id: 'Diagnostic Monitoring (Pocket ECG)', label: 'Diagnostic Devices (Pocket ECG)', count: 1 },
  { id: 'Cardiovascular Surgical Instruments', label: 'Surgical Instruments (Cardiovascular / CABG)', count: 2 }
];

export const BRAND_FILTERS = [
  'All Brands',
  'Abbott (Vascular Division)',
  'Cordis (Cardiology)',
  'Teleflex (Vascular Division)',
  'St. Jude Medical (CRM & Structural Heart)',
  'J&J MedTech (Surgical Solutions)',
  'Pocket ECG (Diagnostic Devices)',
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

