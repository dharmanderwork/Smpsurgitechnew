import { Product } from '../types/instruments';

export const HERO_IMAGE = '/src/assets/images/smp_hero_surgical_instruments_1792343796772.jpg';
export const CARDIO_NEURO_IMAGE = '/src/assets/images/smp_cardio_neuro_instruments_1792343798351.jpg';
export const ORTHOPEDIC_IMAGE = '/src/assets/images/smp_orthopedic_surgical_set_1792343798115.jpg';
export const QUALITY_LAB_IMAGE = '/src/assets/images/smp_quality_metallurgy_inspection_1792343798753.jpg';

export const SURGICAL_PRODUCTS: Product[] = [
  {
    id: 'smp-debakey-clamp',
    sku: 'SMP-CV-4012',
    name: 'DeBakey Atraumatic Vascular Clamp 60° Angled',
    specialty: 'Cardiovascular & Thoracic',
    type: 'Clamps & Hemostats',
    alloy: 'German DIN 1.4021 (AISI 420B) Stainless',
    shortDesc: 'Atraumatic vascular clamp with DeBakey longitudinal micro-serrations designed to eliminate endothelial vessel trauma during arterial clamping.',
    clinicalApplication: 'Aortic aneurysm repair, peripheral vascular bypass grafting, carotid endarterectomy, and pulmonary artery occlusion.',
    keyFeatures: [
      'Spring-loaded ratchet with progressive 5-stage graduated tension locking',
      'Dual opposing non-crushing DeBakey micro-ribs',
      'Anti-glare electro-satin passivation finish prevents surgical field reflection',
      'Precision box lock joint for permanent jaw alignment'
    ],
    dimensions: {
      totalLength: '195 mm / 7.7 in',
      tipWidth: '2.5 mm jaw profile',
      curvature: '60° calibrated angle',
      weightGrams: 58
    },
    metallurgy: {
      rockwellHardness: '52 - 54 HRC',
      surfaceFinish: 'Satin Matte Passivated (ISO 7153-1)',
      magneticProperty: 'Ferromagnetic (Martensitic)',
      corrosionPassivation: 'ASTM A967 Citric/Nitric validated'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C (273°F) for 4 min',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Enzymatic neutral pH detergents (pH 7.0 - 8.5)',
      cleaningPhRange: '6.5 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA 510(k) Exempt / Class I', 'DIN EN ISO 7153-1'],
    leadTime: 'In Stock / 24-48h Express Dispatch',
    packaging: 'Rigid protective blister cassette with individual UDI-DI barcode',
    image: HERO_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-CV-4012-REV4',
      revision: 'Rev 4.2 (2026)',
      effectiveDate: '2026-01-15',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Dimensional & Metallurgical Specifications',
          subtitle: 'DeBakey Atraumatic Vascular Clamp · Model SMP-CV-4012',
          sections: [
            {
              heading: '1.0 Instrument Overview & Engineering Scope',
              text: 'The SMP-CV-4012 DeBakey Vascular Clamp is manufactured from certified German DIN 1.4021 martensitic stainless steel, heat-treated in vacuum furnaces to achieve uniform crystalline grain structure. The atraumatic jaw features precision wire-EDM machined intermeshing serrations that distribute clamping pressure evenly along vessel walls, preventing endothelial tearing.',
              specs: [
                { parameter: 'Overall Length', nominal: '195.0 mm', tolerance: '± 1.0 mm', standard: 'DIN 58298' },
                { parameter: 'Jaw Working Length', nominal: '65.0 mm', tolerance: '± 0.5 mm', standard: 'ISO 7153-1' },
                { parameter: 'Tip Width', nominal: '2.45 mm', tolerance: '± 0.15 mm', standard: 'SMP Spec S-102' },
                { parameter: 'Rockwell Hardness', nominal: '53.0 HRC', tolerance: '52 - 54 HRC', standard: 'ASTM E18' },
                { parameter: 'Ratchet Retention Force', nominal: '14.2 N', tolerance: '± 1.5 N', standard: 'ISO 13485 QC' }
              ]
            },
            {
              heading: '1.1 Metallurgical Composition (wt %)',
              text: 'Carbon (C): 0.16–0.25% | Chromium (Cr): 12.0–14.0% | Manganese (Mn): ≤ 1.00% | Silicon (Si): ≤ 1.00% | Phosphorus (P): ≤ 0.040% | Sulfur (S): ≤ 0.030%. Residual ferrite content confirmed < 1.5% via ferritoscope.',
              bulletPoints: [
                'Complies strictly with DIN EN ISO 7153-1: Surgical Instruments - Metallic Materials',
                'Passivated according to ASTM A967 / A967M dual chemical bath standards',
                'Zero micro-crack propagation under 15,000 cyclic ratchet fatigue tests'
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing, Cleaning & Sterilization Protocols',
          subtitle: 'Validated Hospital Central Sterile Processing Department (CSPD) Guidelines',
          sections: [
            {
              heading: '2.0 Point-of-Use Preparation & Cleaning',
              text: 'Rinse instruments immediately following surgery with cold deionized water to prevent drying of blood and biological soils. Submerge open in an ultrasonic bath containing neutral enzymatic cleaner at 40°C–45°C for 10 minutes. Avoid wire brushes or chloride-containing bleaches.',
              bulletPoints: [
                'Pre-wash: Demineralized water rinse at < 25°C for 3 minutes',
                'Enzymatic wash: pH 7.0–8.2 detergent at 45°C for 5 minutes',
                'Thermal disinfection: 93°C (200°F) for 5 minutes (A0 value ≥ 3000)',
                'Lubrication: Apply water-soluble medical instrument milk to box lock prior to autoclave'
              ]
            },
            {
              heading: '2.1 Validated Sterilization Cycles',
              text: 'Steam Autoclave: Recommended pre-vacuum cycle at 134°C (273°F) for minimum 4 minutes exposure time with a minimum 20-minute drying phase. Alternatively, gravity displacement cycle at 121°C (250°F) for 30 minutes.',
              specs: [
                { parameter: 'Pre-Vacuum Steam Exposure', nominal: '134°C', tolerance: '134°C - 137°C', standard: 'ISO 17665-1' },
                { parameter: 'Minimum Exposure Time', nominal: '4.0 min', tolerance: '4 - 18 min', standard: 'EN 285' },
                { parameter: 'Post-Vacuum Drying Time', nominal: '25 min', tolerance: '≥ 20 min', standard: 'AAMI ST79' },
                { parameter: 'Max Permissible Pressure', nominal: '3.1 bar', tolerance: 'max 3.4 bar', standard: 'EN 13060' }
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Regulatory Certificates & UDI Traceability',
          subtitle: 'Quality Assurance Matrix & Hospital Consignment Data',
          sections: [
            {
              heading: '3.0 Quality Control Compliance Declarations',
              text: 'SMP Surgitech Medical Technologies Corp certifies that this instrument is manufactured in facilities governed by ISO 13485:2016 quality management systems. Tested and certified under EU MDR 2017/745 Class Ir and US FDA 21 CFR 878.',
              bulletPoints: [
                'Unique Device Identification (UDI): GS1 Datamatrix 2D laser-etched onto shank',
                'Biocompatibility test certificate: ISO 10993 cytotoxicity and hemocompatibility verified',
                'Corrosion Resistance: Copper Sulfate boil test verified per ASTM F1089',
                'Consignment Lot Tracking: Batch Lot # SMP-2026-B91'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-titanium-micro-forceps',
    sku: 'SMP-NE-8820',
    name: 'Castroviejo-Micro Titanium Bipolar Forceps 0.4mm',
    specialty: 'Neurosurgery & Spine',
    type: 'Forceps & Tweezers',
    alloy: 'Titanium Ti-6Al-4V ELI (Grade 5)',
    shortDesc: 'Ultra-lightweight titanium non-magnetic micro-forceps with 0.4 mm precision tips and non-stick gold-insulated thermal dissipation.',
    clinicalApplication: 'Cerebrovascular aneurysm clipping, micro-vascular anastomosis, vestibular schwannoma resection, and spinal cord micro-dissection.',
    keyFeatures: [
      '100% MRI-safe, non-ferromagnetic Ti-6Al-4V ELI surgical titanium',
      '60% lighter than standard surgical steel to minimize surgeon hand fatigue during 8+ hour operations',
      'Precision aligned 0.4 mm micro-coagulation tips',
      'Ergonomic diamond knurled spring handles with micro-guide pin'
    ],
    dimensions: {
      totalLength: '180 mm / 7.1 in',
      tipWidth: '0.4 mm ultra-fine',
      curvature: 'Straight with guide pin',
      weightGrams: 22
    },
    metallurgy: {
      rockwellHardness: '36 - 40 HRC (Titanium Core)',
      surfaceFinish: 'Anodized Medical Blue & Micro-Polished Tips',
      magneticProperty: 'Completely Non-Magnetic (MRI Conditional 3T/7T)',
      corrosionPassivation: 'Titanium Dioxide native oxide passivation'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C (273°F) for 5 min',
      maxTempCelsius: 140,
      compatibleCleaningChem: 'Enzymatic neutral pH cleaners (pH 7.0 - 8.0 strictly)',
      cleaningPhRange: '6.8 - 8.2'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I 510(k) Exempt', 'ASTM F136'],
    leadTime: 'In Stock / 24-48h Express Dispatch',
    packaging: 'Silicone finger mat autoclavable micro-container',
    image: CARDIO_NEURO_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-NE-8820-REV2',
      revision: 'Rev 2.8 (2026)',
      effectiveDate: '2026-02-10',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Micro-Surgical Titanium Specifications',
          subtitle: 'Titanium Bipolar Micro-Forceps · Model SMP-NE-8820',
          sections: [
            {
              heading: '1.0 Engineering Specifications',
              text: 'Designed for high-acuity microsurgical environments requiring zero magnetic deflection and extreme tactile responsiveness. Grade 5 ELI titanium offers superior strength-to-weight ratio and bio-inertness.',
              specs: [
                { parameter: 'Total Length', nominal: '180.0 mm', tolerance: '± 0.5 mm', standard: 'ASTM F136' },
                { parameter: 'Tip Profile Width', nominal: '0.40 mm', tolerance: '± 0.03 mm', standard: 'Optical Micrometer' },
                { parameter: 'Spring Closing Force', nominal: '1.8 N', tolerance: '± 0.2 N', standard: 'Tension Gauge' },
                { parameter: 'MRI Deflection Angle', nominal: '0.0° at 3.0T', tolerance: 'Zero Deflection', standard: 'ASTM F2052' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing & Care Guidelines',
          subtitle: 'Special Handling for Fine Micro-Tips & Titanium Anodization',
          sections: [
            {
              heading: '2.0 Central Sterile Reprocessing Protocols',
              text: 'Never stack heavy instruments on titanium micro-forceps. Always sterilize within dedicated micro-instrument trays with soft medical silicone finger cushioning.',
              bulletPoints: [
                'Inspect tips under 10x stereo microscope after every cleaning cycle',
                'Avoid acidic or alkaline detergents (pH outside 6.8–8.2 can strip anodic oxide layer)',
                'Do not scrub tips with abrasive steel wool or metallic pads'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Certification & Quality Dossier',
          subtitle: 'Lot Release Certificates & Material Traceability',
          sections: [
            {
              heading: '3.0 Certification Matrix',
              text: 'All raw materials sourced from ISO 5832-3 certified aerospace/biomedical ingot producers. Spectrometric batch assay verified.',
              specs: [
                { parameter: 'Tensile Strength', nominal: '860 MPa', tolerance: '≥ 825 MPa', standard: 'ASTM E8' },
                { parameter: 'Yield Strength', nominal: '790 MPa', tolerance: '≥ 760 MPa', standard: 'ASTM E8' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-stille-luer-rongeur',
    sku: 'SMP-OR-1044',
    name: 'Stille-Luer Double-Action Bone Rongeur 220mm',
    specialty: 'Orthopedics & Trauma',
    type: 'Bone Rongeurs & Cutters',
    alloy: 'German DIN 1.4116 / 1.4034 Martensitic',
    shortDesc: 'Heavy-duty double-action compound joint rongeur engineered for maximum leverage bone excision with minimal surgeon hand torque.',
    clinicalApplication: 'Total joint arthroplasty, spinal decompression laminectomy, fracture reduction, and cortical bone debridement.',
    keyFeatures: [
      'Dual-pivot compound linkage multiplies hand force by 3.8x',
      'Induction-hardened curved scoop jaws (56-58 HRC) resist chipping against dense cortical bone',
      'Replaceable double leaf spring mechanism ensures smooth automatic return',
      'Deep serrated palm grips for secure handling in wet surgical environments'
    ],
    dimensions: {
      totalLength: '220 mm / 8.7 in',
      tipWidth: '10 mm x 15 mm scoop cup',
      curvature: 'Curved jaws',
      weightGrams: 310
    },
    metallurgy: {
      rockwellHardness: '56 - 58 HRC (Cutting Jaws)',
      surfaceFinish: 'Micro-Bead Blasted Satin Matte',
      magneticProperty: 'Ferromagnetic',
      corrosionPassivation: 'Nitric acid bath passivation per ASTM A380'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 5 min, 25 min dry',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Neutral or slightly alkaline enzymatic detergent',
      cleaningPhRange: '7.0 - 9.0'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I 510(k) Exempt', 'DIN 58298'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Shock-proof sterile transport carton with tip protection guard',
    image: ORTHOPEDIC_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-OR-1044-REV3',
      revision: 'Rev 3.1 (2026)',
      effectiveDate: '2026-01-20',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Heavy Orthopedic Specifications',
          subtitle: 'Double-Action Bone Rongeur · Model SMP-OR-1044',
          sections: [
            {
              heading: '1.0 Mechanical & Dimensional Integrity',
              text: 'The Stille-Luer compound rongeur is forged from German 1.4116 martensitic stainless steel with cryogenic deep-freeze tempering to stabilize austenite phase conversion and maximize jaw edge retention.',
              specs: [
                { parameter: 'Overall Length', nominal: '220.0 mm', tolerance: '± 1.5 mm', standard: 'DIN 58298' },
                { parameter: 'Cup Width', nominal: '10.0 mm', tolerance: '± 0.3 mm', standard: 'SMP Standard' },
                { parameter: 'Compound Ratio', nominal: '3.8 : 1', tolerance: '± 0.2', standard: 'Biomechanical CAD' },
                { parameter: 'Bite Hardness', nominal: '57.0 HRC', tolerance: '56 - 58 HRC', standard: 'ASTM E18' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing & Disassembly Guidelines',
          subtitle: 'Cleaning Protocol for Compound Hinges',
          sections: [
            {
              heading: '2.0 Joint Care & Ultrasonic Cleaning',
              text: 'Ensure double-action hinges are fully open during ultrasonic and washer-disinfector cycles. Apply high-temperature medical silicone oil to all pivot screws prior to autoclave sterilization.',
              bulletPoints: [
                'Ensure bone fragments are dislodged from cup cavity immediately post-procedure',
                'Ultrasonic cleaning frequency: 35–40 kHz for 10 minutes',
                'Do not exceed 138°C during sterilization'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Quality & Metallurgical Audit',
          subtitle: 'Batch Testing & Hardness Verification',
          sections: [
            {
              heading: '3.0 QC Batch Release Testing',
              text: 'Every batch undergoes Vickers and Rockwell hardness profiling, mechanical proof load test of 180 N applied force without permanent deformation.',
              specs: [
                { parameter: 'Cycle Fatigue Limit', nominal: '50,000 cycles', tolerance: 'min 40,000', standard: 'SMP QA-09' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-metzenbaum-tc-scissors',
    sku: 'SMP-GN-3018',
    name: 'Metzenbaum-SuperCut Tungsten Carbide Curved Scissors 180mm',
    specialty: 'General & Laparoscopic',
    type: 'Scissors & Cutters',
    alloy: 'Tungsten Carbide (TC) Inlays 72 HRC',
    shortDesc: 'Gold-ringed Metzenbaum dissecting scissors with sintered Tungsten Carbide blade inserts and knife-edge micro-serrations for effortless tissue gliding.',
    clinicalApplication: 'Deep soft tissue dissection, plastic surgery flap elevation, general laparotomy, and thoracic tissue separation.',
    keyFeatures: [
      'Gold-plated ring handles signify genuine sintered Tungsten Carbide inserts',
      'SuperCut micro-serrated lower blade holds slippery tissue while razor upper blade slices effortlessly',
      'Hardness rating of 72 HRC provides 5x the working lifespan of standard stainless steel',
      'Tapered slim shanks for deep cavity visualization'
    ],
    dimensions: {
      totalLength: '180 mm / 7.0 in',
      tipWidth: '1.8 mm delicate curved tips',
      curvature: 'Curved blunt/blunt',
      weightGrams: 52
    },
    metallurgy: {
      rockwellHardness: '72 - 74 HRC (TC Inserts) / 46 - 48 HRC (Shanks)',
      surfaceFinish: 'Fine Satin Matte with 24k Hard Gold Plated Finger Rings',
      magneticProperty: 'Ferromagnetic Body / Non-Magnetic TC Core',
      corrosionPassivation: 'Vacuum furnace braze with gold filler alloy'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C (273°F) for 4 min',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Enzymatic detergent pH 7.0 - 8.5',
      cleaningPhRange: '7.0 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I 510(k) Exempt', 'DIN 58298'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Rigid protective clam shell box with calibration certificate',
    image: HERO_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-GN-3018-REV5',
      revision: 'Rev 5.0 (2026)',
      effectiveDate: '2026-03-01',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Technical Data Sheet: TC Dissecting Scissors',
          subtitle: 'Metzenbaum SuperCut TC 180mm · Model SMP-GN-3018',
          sections: [
            {
              heading: '1.0 TC Braze Metallurgy & Cutting Geometry',
              text: 'Sintered tungsten carbide plates are vacuum-brazed onto high-grade AISI 420 stainless steel blanks using specialized gold-nickel eutectic alloy at 1050°C. Lower blade features 25 micro-serrations per centimeter.',
              specs: [
                { parameter: 'Overall Length', nominal: '180.0 mm', tolerance: '± 1.0 mm', standard: 'DIN 58298' },
                { parameter: 'TC Insert Length', nominal: '38.0 mm', tolerance: '± 0.5 mm', standard: 'SMP Spec TC-01' },
                { parameter: 'Insert Hardness', nominal: '72.5 HRC', tolerance: '71 - 74 HRC', standard: 'ASTM E18' },
                { parameter: 'Biphasic Cut Angle', nominal: '42°', tolerance: '± 1.0°', standard: 'Goniometric' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing Protocol & Edge Preservation',
          subtitle: 'Maintenance of Sintered Tungsten Carbide Instruments',
          sections: [
            {
              heading: '2.0 Central Reprocessing Instructions',
              text: 'Never use wire brushes on cutting edges. Use dedicated soft nylon brushes. Avoid rapid thermal shocks (cooling in cold water immediately after autoclave) which may cause microscopic TC micro-fissuring.',
              bulletPoints: [
                'Ensure screw joint is lubricated before sterilization',
                'Do not sterilize with bleach or halogenated solvents',
                'Cutting test: cuts 4 layers of wet surgical gauze smoothly to the very tip'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Quality Documentation',
          subtitle: 'Microscopy & Passivation Verification',
          sections: [
            {
              heading: '3.0 Regulatory Standards',
              text: 'ISO 13485:2016 certified cleanroom packaging. Passed 500 hours salt-spray testing per ASTM B117 without surface pitting.',
              specs: [
                { parameter: 'Salt Spray Resistance', nominal: '> 500 hrs', tolerance: 'min 300 hrs', standard: 'ASTM B117' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-castroviejo-needle-holder',
    sku: 'SMP-MC-2105',
    name: 'Castroviejo Micro Needle Holder with Lock & TC Jaws 140mm',
    specialty: 'Microsurgery & Ophthalmic',
    type: 'Needle Holders',
    alloy: 'Tungsten Carbide (TC) Inlays 72 HRC',
    shortDesc: 'Spring-action microsurgical needle holder with fine diamond-dust cross-serrated TC jaws and gentle thumb latch mechanism for 7-0 to 10-0 suture needles.',
    clinicalApplication: 'Ophthalmic corneal transplantation, microvascular coronary anastomosis, replantation surgery, and cosmetic blepharoplasty.',
    keyFeatures: [
      'Ultra-fine 0.4 mm diamond cross-serrated tungsten carbide jaw inserts',
      'Feather-light spring release ratchet requires less than 1.2 N actuation force',
      'Rounded non-snagging shanks prevent micro-suture thread entanglement',
      'Dual flat ribbed handles for precise fingertip rotational control'
    ],
    dimensions: {
      totalLength: '140 mm / 5.5 in',
      tipWidth: '0.8 mm tapered jaw tip',
      curvature: 'Straight with delicate lock',
      weightGrams: 36
    },
    metallurgy: {
      rockwellHardness: '72 HRC (TC Pyramid Grip) / 44 HRC (Body)',
      surfaceFinish: 'Anti-Reflective Micro-Satin with Gold Spring Accent',
      magneticProperty: 'Low magnetic permeability',
      corrosionPassivation: 'Electrochemical passivation per ISO 13485'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 5 min',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Enzymatic detergent pH 7.2 - 8.2',
      cleaningPhRange: '7.0 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I Exempt', 'DIN EN ISO 7153-1'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Dedicated micro-cassette with silicone holding racks',
    image: CARDIO_NEURO_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-SMP-MC-2105-REV1',
      revision: 'Rev 1.9 (2026)',
      effectiveDate: '2026-02-14',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Micro Needle Holder Specifications',
          subtitle: 'Castroviejo TC Micro Needle Holder · Model SMP-MC-2105',
          sections: [
            {
              heading: '1.0 Technical & Jaw Grip Geometry',
              text: 'Equipped with 0.4 mm pitch tungsten carbide cross-serrated micro-pyramids. Designed to hold monofilament and braided needles from 7-0 down to 10-0 without needle rotation or bending.',
              specs: [
                { parameter: 'Overall Length', nominal: '140.0 mm', tolerance: '± 0.5 mm', standard: 'SMP Micro QC' },
                { parameter: 'Jaw Tip Width', nominal: '0.80 mm', tolerance: '± 0.05 mm', standard: 'Optical Comparator' },
                { parameter: 'Needle Compatibility', nominal: '7-0 to 10-0', tolerance: 'Standard Micro', standard: 'USP Suture' },
                { parameter: 'Latching Force', nominal: '1.1 N', tolerance: '± 0.15 N', standard: 'Calibrated Cell' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Micro-Reprocessing Protocol',
          subtitle: 'Handling for High-Precision Spring Mechanisms',
          sections: [
            {
              heading: '2.0 Decontamination & Ultrasonic Cleaning',
              text: 'Inspect under stereo microscope for lint or surgical fiber entrapment in the diamond pyramids. Always sterilize in unlatched open position to relieve spring stress.',
              bulletPoints: [
                'Do not ultrasonic clean with coarse general surgical instruments',
                'Store with tip protector guard when not inside sterilization cassette'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Regulatory & Material Dossier',
          subtitle: 'ISO 13485 Certificate of Conformance',
          sections: [
            {
              heading: '3.0 Quality Standards',
              text: 'Biocompatibility, cytotoxicity and chemical leaching verified per ISO 10993 series. Full raw material heat certificates maintained on file.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-kerrison-punch',
    sku: 'SMP-NE-7740',
    name: 'Kerrison Cervical Laminectomy Bone Punch 40° Up-Bite 3mm',
    specialty: 'Neurosurgery & Spine',
    type: 'Bone Rongeurs & Cutters',
    alloy: 'German DIN 1.4116 / 1.4034 Martensitic',
    shortDesc: 'Detachable clean-out spinal punch engineered for precision neural decompression and bone excision with zero lateral slide.',
    clinicalApplication: 'Anterior cervical discectomy and fusion (ACDF), posterior cervical foraminotomy, lumbar laminectomy, and spinal cord decompression.',
    keyFeatures: [
      'Take-Apart fast release mechanism enables complete internal lumen cleaning and biological soil removal',
      'Ceramic PVD black coat option for maximum anti-glare under surgical microscopes',
      'Ultra-thin 1.2 mm footplate for safe insertion into tight neuroforaminal spaces',
      '40° forward up-bite angle with hardened cutting guide rail'
    ],
    dimensions: {
      totalLength: '200 mm shaft length / 8.0 in',
      tipWidth: '3.0 mm calibrated bite',
      curvature: '40° forward up-bite',
      weightGrams: 245
    },
    metallurgy: {
      rockwellHardness: '56 - 58 HRC (Punch Slide & Anvil)',
      surfaceFinish: 'Satin Stainless with PVD Black Anti-Glare Slide',
      magneticProperty: 'Ferromagnetic',
      corrosionPassivation: 'Nitric acid passivation + multi-stage ultrasonic degreasing'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 5 min, 30 min dry',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Enzymatic detergent pH 7.0 - 8.5',
      cleaningPhRange: '7.0 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I 510(k) Exempt', 'ASTM F899'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Rigid sterilization basket with disassembly diagram',
    image: QUALITY_LAB_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-SMP-NE-7740-REV2',
      revision: 'Rev 2.4 (2026)',
      effectiveDate: '2026-01-28',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Spine Instrumentation Specifications',
          subtitle: 'Kerrison 3mm 40° Up-Bite Punch · Model SMP-NE-7740',
          sections: [
            {
              heading: '1.0 Engineering Specifications & Footplate Geometry',
              text: 'Engineered specifically for neurosurgical spine interventions. The 1.2 mm footplate thickness minimizes dura displacement during cervical foraminotomy.',
              specs: [
                { parameter: 'Working Shaft Length', nominal: '200.0 mm', tolerance: '± 1.0 mm', standard: 'Spine Spec' },
                { parameter: 'Bite Size', nominal: '3.0 mm', tolerance: '± 0.1 mm', standard: 'SMP Gauge' },
                { parameter: 'Bite Angle', nominal: '40.0°', tolerance: '± 0.5°', standard: 'Optical Inclinometer' },
                { parameter: 'Footplate Thickness', nominal: '1.20 mm', tolerance: '± 0.05 mm', standard: 'Micrometer' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Fast-Disassembly CSPD Reprocessing Protocol',
          subtitle: 'Cleaning of Detachable Shaft for Sterile Compliance',
          sections: [
            {
              heading: '2.0 Central Sterile Cleaning Procedure',
              text: 'Depress release trigger and slide upper channel forward to open the inner channel. Brush inner channel with calibrated channel brush to eliminate bio-burden.',
              bulletPoints: [
                'Ensure channel is flushed with pressurized water jet prior to washer-disinfector',
                'Lubricate sliding rail with high-temp water-soluble surgical lubricant before reassembly',
                'Test slide action: must open and close smoothly with no binding'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Quality & Traceability Certificates',
          subtitle: 'Full CE MDR & FDA Compliance Audit Trail',
          sections: [
            {
              heading: '3.0 Quality Assurance Declarations',
              text: 'Fully compliant with DIN EN ISO 17664 processing requirements. 100% inspected for slide alignment and edge sharpness.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-bookwalter-retractor-system',
    sku: 'SMP-SY-9000',
    name: 'Bookwalter Style Modular Table-Mounted Abdominal Retractor System',
    specialty: 'General & Laparoscopic',
    type: 'Systems & Trays',
    alloy: 'Austenitic 316L Surgical Grade Steel',
    shortDesc: 'Comprehensive modular surgical retractor system with table post, oval ring, and 14 assorted interchangeable deep pelvic and malleable blades.',
    clinicalApplication: 'Open colorectal resection, liver transplantation, vascular aneurysm repair, bariatric laparotomy, and radical cystectomy.',
    keyFeatures: [
      'Universal table post clamps securely to all standard surgical table side rails (US and EU standard)',
      'Segmented hinged oval ring allows multi-planar surgical site exposure',
      'Quick-snap ratchet couplings allow rapid single-hand blade positioning and angle adjustment',
      'Includes 14 specialized blades (Balfour, Harrington sweetheart, malleable copper/316L, and Kelly deep blades)'
    ],
    dimensions: {
      totalLength: 'Fits 450 mm x 320 mm operative field',
      tipWidth: '14 blades from 25 mm x 50 mm to 75 mm x 150 mm',
      curvature: 'Multi-angle articulated',
      weightGrams: 4200
    },
    metallurgy: {
      rockwellHardness: '32 - 36 HRC (High Ductility Austenitic)',
      surfaceFinish: 'Electro-Polished Surgical Matte',
      magneticProperty: 'Virtually Non-Magnetic (Austenitic)',
      corrosionPassivation: 'Electropolished and dual ASTM A967 passivated'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 6 min, 30 min dry in dedicated tray',
      maxTempCelsius: 140,
      compatibleCleaningChem: 'Enzymatic detergent pH 7.0 - 9.0',
      cleaningPhRange: '7.0 - 9.0'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class I', 'FDA Class I 510(k) Exempt', 'ISO 7153-1'],
    leadTime: 'In Stock / 3-5 Days Dispatch',
    packaging: 'Two-tier heavy-duty stainless steel perforated sterilization container with silicone brackets',
    image: ORTHOPEDIC_IMAGE,
    featured: true,
    pdfSpec: {
      docNumber: 'TDS-SMP-SY-9000-REV3',
      revision: 'Rev 3.4 (2026)',
      effectiveDate: '2026-01-10',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Modular Retractor System Overview',
          subtitle: 'Table-Mounted Retractor System · Model SMP-SY-9000',
          sections: [
            {
              heading: '1.0 System Architecture & Components',
              text: 'Constructed from aerospace-grade 316L surgical stainless steel for extreme torsional rigidity under heavy abdominal wall retraction without spring-back.',
              specs: [
                { parameter: 'Post Height', nominal: '350 mm', tolerance: '± 2.0 mm', standard: 'OR Rail Spec' },
                { parameter: 'Oval Ring Major Axis', nominal: '420 mm', tolerance: '± 3.0 mm', standard: 'Modular Ring' },
                { parameter: 'Max Retraction Load', nominal: '250 N / blade', tolerance: 'Proof Tested', standard: 'SMP Stress QA' },
                { parameter: 'Rail Clamp Compatibility', nominal: '25x10mm & 28x9mm', tolerance: 'Universal', standard: 'DIN EN 60601' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Tray Reprocessing & Maintenance Instructions',
          subtitle: 'Modular Disassembly for SPD Automation',
          sections: [
            {
              heading: '2.0 Cleaning & Sterilization Workflow',
              text: 'Disassemble ratchet mechanisms from the oval ring before loading into automated washer-disinfector baskets.',
              bulletPoints: [
                'Inspect coupling pawls for positive click engagement prior to each surgical pack wrap',
                'Ensure table post clamping screw threads are lubricated with sterile silicone fluid'
              ]
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Certificates of Sterility Assurance',
          subtitle: 'DIN EN 285 & AAMI ST79 Validation',
          sections: [
            {
              heading: '3.0 Regulatory Compliance Dossier',
              text: 'Biocompatibility tested for indirect patient contact. Full surgical container validation package available for hospital regulatory audits.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-hegar-dilator-set',
    sku: 'SMP-UG-6500',
    name: 'Hegar Precision Uterine Cervical Dilator 8-Piece Set (3mm-18mm)',
    specialty: 'OB/GYN & Urology',
    type: 'Systems & Trays',
    alloy: 'German DIN 1.4021 (AISI 420B) Stainless',
    shortDesc: 'Double-ended German stainless steel dilators featuring polished bullet-tip contours and laser-etched metric gauge identifiers for smooth dilation.',
    clinicalApplication: 'Gynecological diagnostic hysteroscopy, cervical stenosis dilation, endometrial biopsy, and intrauterine device placement.',
    keyFeatures: [
      'Seamless mirror-polished surface finish reduces mucosal friction',
      'Double-ended incremental diameters from 3/4 mm through 17/18 mm',
      'Permanent deep laser annealed metric size markings resist fade through thousands of autoclaving cycles',
      'Solid core balanced weight distribution'
    ],
    dimensions: {
      totalLength: '200 mm per dilator',
      tipWidth: '3.0 mm to 18.0 mm graduated pairs',
      curvature: 'Gentle anatomical S-curve',
      weightGrams: 820
    },
    metallurgy: {
      rockwellHardness: '48 - 50 HRC',
      surfaceFinish: 'High-Luster Mirror Polish',
      magneticProperty: 'Ferromagnetic',
      corrosionPassivation: 'ASTM A967 Citric Passivated'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 4 min',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Neutral enzymatic cleaner',
      cleaningPhRange: '7.0 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class I', 'FDA Class I Exempt', 'DIN 58298'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Stainless steel sterilization storage rack with size slot demarcations',
    image: HERO_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-SMP-UG-6500-REV1',
      revision: 'Rev 1.2 (2026)',
      effectiveDate: '2026-02-01',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'OB/GYN Instrument Specifications',
          subtitle: 'Hegar Dilator 8-Piece Set · Model SMP-UG-6500',
          sections: [
            {
              heading: '1.0 Dimensional Profile & Sizing Chart',
              text: 'Manufactured from seamless solid bar stock German stainless steel with rounded conical ends polished to Ra < 0.2 µm.',
              specs: [
                { parameter: 'Length Each', nominal: '200.0 mm', tolerance: '± 1.0 mm', standard: 'DIN 58298' },
                { parameter: 'Surface Roughness', nominal: '0.18 µm Ra', tolerance: '≤ 0.25 µm', standard: 'Profilometer' },
                { parameter: 'Diameter Calibration', nominal: '3.0 - 18.0 mm', tolerance: '± 0.05 mm', standard: 'Go/No-Go Gauge' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Reprocessing Protocol',
          subtitle: 'Automated Washer Disinfector and Autoclave',
          sections: [
            {
              heading: '2.0 Decontamination Procedure',
              text: 'Load horizontally in dedicated silicone slot rack. Ensure dilators do not impact each other during sonic cleaning to prevent tip micro-nicks.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Quality Documentation',
          subtitle: 'ISO 13485 Certification of Compliance',
          sections: [
            {
              heading: '3.0 CE MDR Audit Declaration',
              text: 'Certified Class I medical device per EU MDR 2017/745 Annex VIII Rule 5.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'smp-yankauer-suction-cannula',
    sku: 'SMP-GN-1120',
    name: 'Yankauer Stainless Steel Surgical Suction Tube with Removable Tip',
    specialty: 'General & Laparoscopic',
    type: 'Suction & Cannulas',
    alloy: 'German DIN 1.4021 (AISI 420B) Stainless',
    shortDesc: 'Rigid surgical suction instrument with bulbous perforated tip and thumb vacuum control valve for clear operative field visibility.',
    clinicalApplication: 'General laparotomy, orthopedic joint irrigation suction, thoracic pleural evacuation, and trauma bleeding clearance.',
    keyFeatures: [
      'Removable threaded bulbous tip for complete internal bore lumen cleaning',
      'Ergonomic thumb control port allows immediate suction regulation',
      'Smooth inner lumen prevents coagulated blood clot clogging',
      'Universal stepped hose connector fits all medical silicone suction tubing'
    ],
    dimensions: {
      totalLength: '280 mm / 11.0 in',
      tipWidth: '6.0 mm bulb diameter / 4.0 mm bore',
      curvature: 'Double curved shaft',
      weightGrams: 110
    },
    metallurgy: {
      rockwellHardness: '46 - 48 HRC',
      surfaceFinish: 'Satin Matte Anti-Glare',
      magneticProperty: 'Ferromagnetic',
      corrosionPassivation: 'ASTM A967 Chemical Passivation'
    },
    reprocessing: {
      autoclaveCycle: 'Pre-vacuum steam: 134°C for 5 min',
      maxTempCelsius: 138,
      compatibleCleaningChem: 'Enzymatic neutral pH',
      cleaningPhRange: '7.0 - 8.5'
    },
    compliance: ['ISO 13485:2016', 'CE Mark MDR Class Ir', 'FDA Class I Exempt', 'DIN 58298'],
    leadTime: 'In Stock / 24-48h Dispatch',
    packaging: 'Individually wrapped with protective bore cap',
    image: HERO_IMAGE,
    featured: false,
    pdfSpec: {
      docNumber: 'TDS-SMP-GN-1120-REV2',
      revision: 'Rev 2.1 (2026)',
      effectiveDate: '2026-01-18',
      totalPages: 3,
      pages: [
        {
          pageNumber: 1,
          title: 'Surgical Suction Specifications',
          subtitle: 'Yankauer Rigid Suction Tube · Model SMP-GN-1120',
          sections: [
            {
              heading: '1.0 Flow Dynamics & Bore Dimensions',
              text: 'Precision bent drawn stainless tubing. Internal lumen electropolished to minimize friction and clot adhesion.',
              specs: [
                { parameter: 'Overall Length', nominal: '280.0 mm', tolerance: '± 1.5 mm', standard: 'DIN 58298' },
                { parameter: 'Lumen Inner Diameter', nominal: '4.0 mm', tolerance: '± 0.1 mm', standard: 'Bore Gauge' },
                { parameter: 'Max Negative Vacuum', nominal: '-90 kPa', tolerance: 'Continuous', standard: 'Vacuum Rating' }
              ]
            }
          ]
        },
        {
          pageNumber: 2,
          title: 'Internal Cleaning & Lumen Brushing Protocol',
          subtitle: 'Validated Channel Cleaning',
          sections: [
            {
              heading: '2.0 CSPD Channel Decontamination',
              text: 'Unscrew the tip before cleaning. Use the supplied 4.5 mm wire brush to swab the full length of the internal shaft.'
            }
          ]
        },
        {
          pageNumber: 3,
          title: 'Regulatory & Material Test Cert',
          subtitle: 'Biocompatibility Dossier',
          sections: [
            {
              heading: '3.0 Quality Declarations',
              text: 'CE MDR Class Ir certified. ISO 13485 audit trail verified.'
            }
          ]
        }
      ]
    }
  }
];

export const SPECIALTIES = [
  'All Specialties',
  'Cardiovascular & Thoracic',
  'Neurosurgery & Spine',
  'Orthopedics & Trauma',
  'General & Laparoscopic',
  'Microsurgery & Ophthalmic',
  'OB/GYN & Urology'
] as const;

export const INSTRUMENT_TYPES = [
  'All Types',
  'Clamps & Hemostats',
  'Scissors & Cutters',
  'Forceps & Tweezers',
  'Retractors',
  'Needle Holders',
  'Bone Rongeurs & Cutters',
  'Suction & Cannulas',
  'Systems & Trays'
] as const;

export const ALLOY_GRADES = [
  'All Alloys',
  'German DIN 1.4021 (AISI 420B) Stainless',
  'German DIN 1.4116 / 1.4034 Martensitic',
  'Titanium Ti-6Al-4V ELI (Grade 5)',
  'Tungsten Carbide (TC) Inlays 72 HRC',
  'Austenitic 316L Surgical Grade Steel'
] as const;
