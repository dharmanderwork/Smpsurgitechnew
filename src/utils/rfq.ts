import { Product, LeadInquiry } from '../types/instruments';

export interface FilterOptions {
  searchQuery: string;
  category?: string;
  brand?: string;
}

/**
 * Generates an official B2B RFQ Reference Number
 * e.g., RFQ-2026-SMP-8942
 */
export function generateRfqReference(seed?: number): string {
  const year = new Date().getFullYear();
  const randomPart = seed !== undefined 
    ? Math.floor(Math.abs(seed) % 9000) + 1000
    : Math.floor(1000 + Math.random() * 9000);
  return `RFQ-${year}-SMP-${randomPart}`;
}

/**
 * Filter products based on search query, category, and brand manufacturer
 */
export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return products.filter((p) => {
    // Search query matches name, sku, shortDesc, clinicalApplication, brand, category, subcategory, material
    if (query) {
      const match =
        p.name.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.clinicalApplication.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.specs.materialOrCoating.toLowerCase().includes(query) ||
        p.specs.profileOrSize.toLowerCase().includes(query);
      if (!match) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'All Categories') {
      if (p.category !== filters.category) return false;
    }

    // Brand filter
    if (filters.brand && filters.brand !== 'All Brands') {
      if (p.brand !== filters.brand) return false;
    }

    return true;
  });
}

/**
 * Validate inquiry/quote form inputs
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(form: Partial<LeadInquiry>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!form.contactName || form.contactName.trim().length < 2) {
    errors.contactName = 'Please provide your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.workEmail || !emailRegex.test(form.workEmail.trim())) {
    errors.workEmail = 'Please provide a valid institutional work email.';
  }

  if (!form.hospitalName || form.hospitalName.trim().length < 2) {
    errors.hospitalName = 'Please enter your hospital, clinic, or catheterization lab name.';
  }

  if (!form.department || form.department.trim().length < 2) {
    errors.department = 'Please specify the clinical department (e.g. Cath Lab, Cardiology, CTVS) or role.';
  }

  if (!form.items || form.items.length === 0) {
    errors.items = 'Please select at least one instrument or device for quotation.';
  } else {
    for (const item of form.items) {
      if (!item.quantity || item.quantity < 1) {
        errors.items = 'Each item must have a quantity of at least 1 unit.';
        break;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Summarizes an RFQ for hospital procurement tender presentation
 */
export function calculateRfqSummary(items: Array<{ product: Product; quantity: number }>) {
  const totalUnits = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const distinctSkus = items.length;
  
  const categoryCounts: Record<string, number> = {};
  for (const item of items) {
    const cat = item.product.category;
    categoryCounts[cat] = (categoryCounts[cat] || 0) + item.quantity;
  }

  return {
    totalUnits,
    distinctSkus,
    categoriesRepresented: Object.keys(categoryCounts).length,
    categoryCounts
  };
}
