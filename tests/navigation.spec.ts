import { test, expect } from '@playwright/test';

test('navigation smoke teste', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { level: 1, name: 'Gainzatron' })).toBeVisible();
  await expect(page).toHaveTitle(/Gainzatron/);

  // Use the header for navigation
  let headerElement = page.getByRole('banner');
  // Navigate to the contact page
  await headerElement.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { level: 1, name: 'Contact' })).toBeVisible();
  // await expect(page).toHaveTitle(/Contact/);

});

