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

test('filterProducts filters correctly by search query', () => {
  const res = filterProducts(SURGICAL_PRODUCTS, {
    searchQuery: 'debakey',
    specialty: 'All Specialties',
    instrumentType: 'All Types',
    alloy: 'All Alloys'
  });
  assert.ok(res.length >= 1);
  assert.ok(res.some(p => p.sku === 'SMP-CV-4012'));
});

test('filterProducts filters correctly by specialty', () => {
  const res = filterProducts(SURGICAL_PRODUCTS, {
    searchQuery: '',
    specialty: 'Neurosurgery & Spine',
    instrumentType: 'All Types',
    alloy: 'All Alloys'
  });
  assert.ok(res.length >= 1);
  assert.ok(res.every(p => p.specialty === 'Neurosurgery & Spine'));
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

test('validateInquiryForm accepts valid B2B lead data', () => {
  const validResult = validateInquiryForm({
    contactName: 'Dr. Sarah Lin, MD',
    workEmail: 'slin@mayoclinic.org',
    hospitalName: 'Mayo Clinic Rochester',
    department: 'Cardiovascular Surgery O.R.',
    facilityType: 'Hospital',
    country: 'United States',
    targetTimeline: 'Within 2 Weeks',
    items: [
      {
        sku: 'SMP-CV-4012',
        productName: 'DeBakey Clamp',
        quantity: 5
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
  assert.equal(summary.specialtiesRepresented, 2);
});
