import { test, expect } from '@playwright/test';

test('Verify main logo is visible', async ({ page }) => {
  await page.goto('https://itsmyleche.com');
  const logo = page.locator("[aria-label='Its My Leche Logo'] svg[height='35']");
  await expect(logo).toBeVisible();
});

test('Verify About button navigates to About page', async ({ page }) => {
  await page.goto('https://itsmyleche.com');
  const aboutButton = page.locator(".component--header--menu__item[href='/pages/about-v2']");
  await aboutButton.click();
  await expect(page).toHaveURL("https://itsmyleche.com/pages/about-v2");
});

test('Search button is visible and clickable', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://itsmyleche.com');

  // Locate the search button
  const searchButton = page.locator(".btn-search[href='javascript:void(0);']");
  await searchButton.click();

});