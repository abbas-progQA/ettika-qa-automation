import { test, expect } from '@playwright/test';

 test('Verify logo image is visible on Ettika', async ({ page }) => {
   await page.goto('https://www.ettika.com');

   const logo = page.locator('img.header__heading-logo'); // adjust if needed
   await expect(logo).toBeVisible();
 });

 test('Verify Most Popular Title', async ({ page }) => {
   await page.goto('https://www.ettika.com');
   test.setTimeout(60000);
   const title = page.locator('.tw-flex-col #tabs-title');
   await expect(title).toBeVisible();
 });

   test('Verify Five Star Reviews text', async ({ page }) => {
   await page.goto('https://www.ettika.com');
   test.setTimeout(60000);

   const fiveStarHeading = page.locator('.review_detail_wrapper.tw-rounded-cs-md h3.heading.tw-capitalize');
   await expect(fiveStarHeading).toContainText('23,513+ Five Star Reviews');
   await expect(fiveStarHeading).toBeVisible();
 });

 test('Verify Shop Trends heading is visible', async ({ page }) => {
   await page.goto('https://www.ettika.com');

 const shopTrendsHeading = page.locator('#custom-collection-row h2.tw-capitalize');
   await expect(shopTrendsHeading).toBeVisible();
 });

 test('Verify Best Sellers page link is visible in header', async ({ page }) => {
   await page.goto('https://www.ettika.com');

   const bestSellersHeading = page.locator("a.ettika--menu--item[href='/collections/best-sellers']");
   await expect(bestSellersHeading).toBeVisible();
 });

  test('Hover over Best Sellers and verify Everywhere Vacation product appears', async ({ page }) => {
  
  
    //Open inspector for debugging
  await page.pause();

  const bestSellers = page.locator("a.ettika--menu--item[href='/collections/best-sellers']");
  await expect(bestSellers).toBeVisible();
  await bestSellers.hover();

  const everywhereVacation = page.locator('.megamenu--collection--box [href="/collections/trending"]');
  await expect(everywhereVacation).toBeVisible
});

test('Hover over New and verify Selling Fast product appears', async ({ page }) => {
  await page.goto('https://www.ettika.com');

   //Open Playwright Inspector for debugging
  await page.pause();

   //Locate "New" menu item
  const newMenu = page.locator("a.ettika--menu--item[href='/collections/new-arrivals']");
  await expect(newMenu).toBeVisible();

   //Hover over it
  await newMenu.hover();

  //Verify "Selling Fast" appears in the dropdown
  const sellingFast = page.locator('.nplp-subcollection.nplp-subcollection-active');
  await expect(sellingFast).toBeVisible;
});