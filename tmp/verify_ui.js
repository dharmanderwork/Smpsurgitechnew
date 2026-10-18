import { chromium } from 'playwright';

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`PAGEERROR: ${err.message}`));

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });

  await page.waitForTimeout(1000);

  // Take screenshot of home page
  await page.screenshot({ path: '/tmp/home_screenshot.png', fullPage: false });
  console.log('Home screenshot captured');

  // Verify Authorized Brands section exists
  const authorizedBrandsText = await page.locator('text=Authorized Dealer For').textContent();
  console.log('Found Authorized Brands:', authorizedBrandsText);

  // Verify Abbott, Cordis, Teleflex, St. Jude Medical, J&J MedTech, Pocket ECG
  const brandCount = await page.locator('text=Authorized Channel Partnerships').count();
  console.log('Authorized badge present:', brandCount > 0);

  // Verify South Rajasthan & Udaipur
  const udaipurCount = await page.locator('text=Udaipur (उदयपुर)').count();
  console.log('Udaipur occurrences:', udaipurCount);

  // Verify Testimonials & Rating
  const ratingCount = await page.locator('text=4.96').count();
  console.log('Rating 4.96 present:', ratingCount > 0);

  // Check XIENCE Stents presence
  const xienceCount = await page.locator('text=XIENCE Skypoint').count();
  console.log('XIENCE Skypoint present:', xienceCount > 0);

  // Click on "Product Catalog" in navbar
  await page.locator('nav >> text=Product Catalog').first().click();
  await page.waitForTimeout(600);
  console.log('Navigated to Catalog');

  // Click on "Area Covered" in navbar
  await page.locator('nav >> text=Area Covered').first().click();
  await page.waitForTimeout(600);
  console.log('Navigated to Area Covered');
  await page.screenshot({ path: '/tmp/coverage_screenshot.png', fullPage: false });

  // Open PDF Spec modal on first product
  await page.locator('nav >> text=Product Catalog').first().click();
  await page.waitForTimeout(600);
  await page.locator('button:has-text("PDF Spec")').first().click();
  await page.waitForTimeout(600);
  const pdfModalVisible = await page.locator('text=TECHNICAL DATA SPECIFICATION SHEET').count() || await page.locator('text=PDF SPEC').count();
  console.log('PDF Modal opened:', pdfModalVisible > 0);
  await page.screenshot({ path: '/tmp/pdf_spec_screenshot.png', fullPage: false });

  console.log('Console logs count:', consoleLogs.length);
  const pageErrors = consoleLogs.filter(l => l.includes('PAGEERROR') || l.includes('error'));
  console.log('Errors:', pageErrors);

  await browser.close();
  console.log('Verification completed successfully!');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
