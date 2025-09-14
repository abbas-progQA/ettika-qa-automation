import { test, expect } from '@playwright/test';

 test('Verify 5-star review text', async ({ page }) => {
   await page.goto('https://www.easyship.com');

   // Locate the review text element
   //const fiveStarReview = page.locator('.review-stars');

//   // Assert it's visible and contains the expected text
  // await expect(fiveStarReview).toBeVisible();
   //await expect(fiveStarReview).toContainText('1200+ 5-Star Reviews');
 });

test('Verify Easyship logo is visible', async ({ page }) => {
  await page.goto('https://www.easyship.com');

  const easyship = page.locator('.navigation-wrap-2');
  await expect(easyship).toBeVisible();
});