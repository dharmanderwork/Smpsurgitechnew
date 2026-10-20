# Catalog Visual Enrichment & "Cart" Workflow Optimization

Comprehensive enhancement for SMP Surgitech's B2B medical catalog: replacing ambiguous "RFQ Tray" nomenclature with an intuitive, standardized **"Cart"** / **"Procurement Cart"** paradigm, generating studio-grade clinical device photography for all product categories, and providing complete interactive technical PDF specification dossiers for every SKU.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during Phase 1 interactive clarification:
> - **Cart Terminology**: User selected **"cart"**. All occurrences of "RFQ Tray", "RFQ Basket", and "Tray" across navigation, product action buttons, drawer headers, and quotation summary portals will be renamed to standard, immediately understandable terminology (**"Cart"**, **"Add to Cart"**, **"In Cart"**, **"Quote Cart"**).
> - **Product Photography**: User selected **"Generate distinct clinical photography for each SKU"**. We will generate high-fidelity clinical and studio-grade medical device imagery for the product lines (CRM pacemakers, structural heart occluders, diagnostic & guiding catheters, transradial sheaths, and cath lab manifolds/pressure lines).
> - **Technical PDF Spec Sheets**: Every product without a pre-bundled PDF will receive a complete, ISO-compliant interactive Technical Data Sheet (`PdfDocument`) with exact sizing tables, materials, burst pressure/sterility standards, and instant text/spec export.

---

## 1. Overview & Core Concept

- **What It Does**: 
  - Standardizes the ordering and inquiry flow by renaming "RFQ Tray" to **"Cart"** (with clear badge counters, slide-over drawer, and quotation portal).
  - Enriches the entire medical catalog with realistic clinical photography and high-resolution visuals.
  - Ensures 100% of products have active, functional **PDF Spec Sheet** modals with complete mechanical tolerances, regulatory statuses (CDSCO, US FDA, CE Mark), and reprocessing protocols.
- **Target Audience**: Hospital procurement heads, interventional cardiologists, cath lab technicians, and biomedical engineers throughout SMP Surgitech's distribution territories.
- **Key Value**: Eliminates user confusion around what "RFQ Tray" means by adopting the universal "Cart" convention, while establishing hospital-grade visual credibility with complete technical specification dossiers.

---

## 2. User Experience & Visual Design

### A. Cart Terminology & Workflow Updates
- **Top Navigation Bar**: The cart counter button displays `Cart (N)` with a clean cart icon and hover preview.
- **Product Cards & Detail Views**:
  - Primary button: `Add to Cart` (default state) / `In Cart ✓` (added state).
  - Quick action: `PDF Spec` opens the interactive technical dossier immediately.
  - Action row: `Enquire for Quote` takes the user directly to the hospital lead quotation tab.
- **Slide-Over Drawer**: Renamed from "RFQ Tray" to **"Procurement Quote Cart"**, displaying itemized SKUs, quantity increment/decrement controls, hospital PO reference notes, and a 1-click transition to generate the quotation dossier.
- **RfqPortalView**: Renamed header to **"Hospital Procurement Cart & Official RFQ Portal"** with clear step-by-step guidance for institutional tendering.

### B. Visual Identity & Clinical Aesthetic
- **Color Discipline**: Strict 60-30-10 palette using clean slate canvas (`#f8fafc`, `bg-slate-50`), crisp white structural surfaces (`bg-white` with `border-slate-200`), and deep surgical cyan-slate accents (`text-cyan-950`, `bg-cyan-900`, `text-cyan-800`).
- **Zero-Pill Metadata**: Product metadata (brand, category, size matrix) presented as clean unboxed text with subtle `·` separators.
- **High-Fidelity Clinical Imagery**:
  - CRM Pacemakers & ICD generators with bipolar leads on sterile surgical drapes.
  - Structural Heart Nitinol occluder mesh devices and steerable delivery sheaths.
  - Interventional Cardiology guiding catheters with radiopaque soft tips and hydrophilic coating.
  - Cath lab manifold manifolds with color-coded stopcocks and high-pressure braided tubing.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: "Cart" vs "RFQ Basket"**
  - *Chosen Approach*: Rename all user-facing labels to **"Cart"** / **"Quote Cart"** while maintaining the underlying B2B quotation schema (no instant checkout or credit card charges; institutional PO & tender request).
  - *Why*: "Cart" is universally understood by any web user, eliminating hesitation about adding items, while the submit flow accurately executes hospital quotation requests.
- **Decision 2: Parallel Image Asset Batching**
  - *Chosen Approach*: Audit all visual slots and execute image generation in parallel using standard aspect ratios (4:3 for product cards), followed by resilient CSS fallback containers with SVG iconography to guarantee zero broken images.
  - *Why*: Conforms strictly to the `image-generation` skill rules (parallel batching within a single turn, no staggered generations).
- **Decision 3: Complete Technical PDF Specifications**
  - *Chosen Approach*: Embed structured `PdfDocument` objects in `src/data/products.ts` for all CRM, Structural Heart, Teleflex, Cordis, and Spectrum Medtech products, plus dynamic fallback generation in `PdfSpecViewerModal` and `SpecSheetsView`.
  - *Why*: Guarantees that clicking "PDF Spec" on any card or table row displays a multi-section clinical data sheet with mechanical tolerances and downloadable specifications.

---

## 4. Technical Architecture & Component Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                       Top Navigation Bar                        │
│   Brand Wordmark  —  Nav Links  —  Cart Button [Cart (N)]       │
└────────────────┬───────────────────────────────┬────────────────┘
                 │                               │
                 ▼                               ▼
┌─────────────────────────────────┐   ┌───────────────────────────┐
│     Product Catalog & Cards     │   │   Slide-Over Cart Drawer  │
│  - Clinical Photography (4:3)   │   │  - Itemized Cart Items    │
│  - Unboxed Sizing & Specs       │   │  - Quantity Steppers      │
│  - [PDF Spec] [Add to Cart]     │   │  - [Review Cart & Quote]  │
└────────────────┬────────────────┘   └─────────────┬─────────────┘
                 │                                  │
                 ▼                                  ▼
┌─────────────────────────────────┐   ┌───────────────────────────┐
│     PDF Spec Viewer Modal       │   │   Quotation Portal View   │
│  - Multi-page Engineering TDS   │   │  - Institutional Form     │
│  - Mechanical Tolerance Tables  │   │  - Consignment Matrix     │
│  - Real PDF & TXT Spec Export   │   │  - Tender Reference ID    │
└─────────────────────────────────┘   └───────────────────────────┘
```

### Component & Data Updates
1. `src/components/Navbar.tsx`: Update tray trigger to `Cart`, badge counter, and aria-labels.
2. `src/components/ProductCard.tsx`: Update buttons to `Add to Cart` / `In Cart`, improve styling.
3. `src/components/RfqDrawer.tsx`: Rename to Cart Drawer, update headers and summary copy.
4. `src/views/RfqPortalView.tsx`: Update title and descriptions to reflect the procurement cart.
5. `src/data/products.ts`: Provide verified clinical image paths and rich `pdfSpec` dossiers for all products.
6. `src/types/instruments.ts`: Ensure all types and optional fields cleanly support the cart flow.

---

## 5. Execution Steps

1. **Batch Image Generation Turn**: Emit parallel `generate_image` calls for the missing product categories (Pacemakers/CRM, Amplatzer occluders, Guiding catheters, Cath lab manifolds).
2. **Catalog & Data Layer Enhancement**: Update `src/data/products.ts` with the generated image paths and complete multi-page `pdfSpec` technical sheets with exact tolerances and clinical specifications.
3. **Cart Terminology Refactor**: Update `Navbar.tsx`, `ProductCard.tsx`, `RfqDrawer.tsx`, `RfqPortalView.tsx`, `ProductDetailView.tsx`, and `HomeView.tsx` to replace "RFQ Tray" with "Cart".
4. **Verification & Build**: Run `compile_applet` and `lint_applet` to confirm zero errors and verify responsive layout.
