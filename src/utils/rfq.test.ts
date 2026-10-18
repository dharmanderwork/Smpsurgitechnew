import test from 'node:test';
import assert from 'node:assert/strict';
import { generateRfqReference, filterProducts, validateInquiryForm, calculateRfqSummary } from './rfq.ts';
import { SURGICAL_PRODUCTS } from '../data/products.ts';

test('generateRfqReference generates valid RFQ code pattern', () => {
  const currentYear = new Date().getFullYear();
  const ref1 = generateRfqReference(1234);
  assert.equal(ref1, `RFQ-${currentYear}-SMP-2234`);
  
  const refRandom = generateRfqReference();
  assert.match(refRandom, new RegExp(`^RFQ-${currentYear}-SMP-\\d{4}$`));
});

test('filterProducts filters correctly by search query for XIENCE Skypoint', () => {
  const res = filterProducts(SURGICAL_PRODUCTS, {
    searchQuery: 'skypoint',
    category: 'All Categories',
    brand: 'All Brands'
  });
  assert.ok(res.length >= 1);
  assert.ok(res.some(p => p.sku === 'ABT-XNC-SKY'));
});

test('filterProducts filters correctly by category', () => {
  const res = filterProducts(SURGICAL_PRODUCTS, {
    searchQuery: '',
    category: 'Coronary Stents (XIENCE)',
    brand: 'All Brands'
  });
  assert.equal(res.length, 4);
  assert.ok(res.every(p => p.category === 'Coronary Stents (XIENCE)'));
});

test('filterProducts filters correctly by brand', () => {
  const res = filterProducts(SURGICAL_PRODUCTS, {
    searchQuery: '',
    category: 'All Categories',
    brand: 'Abbott (Vascular Division)'
  });
  assert.ok(res.length >= 4);
  assert.ok(res.every(p => p.brand === 'Abbott (Vascular Division)'));
});

test('validateInquiryForm detects missing or invalid fields', () => {
  const invalidResult = validateInquiryForm({
    contactName: '',
    workEmail: 'not-an-email',
    hospitalName: '',
    items: []
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.contactName);
  assert.ok(invalidResult.errors.workEmail);
  assert.ok(invalidResult.errors.hospitalName);
  assert.ok(invalidResult.errors.items);
});

test('validateInquiryForm accepts valid B2B cath lab lead data', () => {
  const validResult = validateInquiryForm({
    contactName: 'Dr. R. K. Maheshwari',
    workEmail: 'cathlab@pacificcardiac.org',
    hospitalName: 'Pacific Heart Institute, Udaipur',
    department: 'Interventional Cardiology / Cath Lab',
    facilityType: 'Hospital / Cath Lab',
    territoryState: 'South Rajasthan',
    targetTimeline: 'Immediate (Emergency Procedure)',
    items: [
      {
        sku: 'ABT-XNC-SKY',
        productName: 'XIENCE Skypoint Stent',
        quantity: 4
      }
    ]
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('calculateRfqSummary calculates units and counts accurately', () => {
  const sampleItems = [
    { product: SURGICAL_PRODUCTS[0], quantity: 4 },
    { product: SURGICAL_PRODUCTS[1], quantity: 2 }
  ];
  const summary = calculateRfqSummary(sampleItems);
  assert.equal(summary.totalUnits, 6);
  assert.equal(summary.distinctSkus, 2);
  assert.equal(summary.categoriesRepresented, 1);
});
