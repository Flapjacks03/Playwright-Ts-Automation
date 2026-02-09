import { test, expect } from '@playwright/test';

test.only('Login to Admin Portal Home Page and Navigations', async ({ page }) => {
  await page.goto('https://dev-adminp-app-gxbac4bjg9hebwgq.westus2-01.azurewebsites.net');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sign in/i);
  // Look for and Enter Username / Email
  await page.getByPlaceholder('Email address').fill('vincent.ventura@anytimemailbox.com');
  // Click Next Button
  await page.getByRole('button', { name: 'Next' }).click();
  // Look for and Enter Password
  await page.getByPlaceholder('Password').fill('Flamingo@03');

  // Click 'Sign in' (use role locator, assert visibility, and wait for navigation)
  const signIn = page.getByRole('button', { name: 'Sign in' });
  await expect(signIn).toBeVisible();
  await Promise.all([
    page.waitForNavigation(),
    signIn.click(),
  ]);

  // Stay Sign In Click 'Yes' (use role locator, assert visibility, and wait for navigation)
  const staySignedInYes = page.getByRole('button', { name: 'Yes' });
  await expect(staySignedInYes).toBeVisible();
  await Promise.all([
    page.waitForNavigation(),
    staySignedInYes.click(),
  ]);

  // Expects page to have a heading with the name of Admin Portal.
  await expect(page.getByRole('heading', { name: 'Admin Portal' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Anytime Operator Portal' })).toBeVisible();
  await expect(page.locator('#nav_placeholder')).toContainText('VV');

  //Expect Main Menu Navi gation Links to be Visible
  await expect(page.locator('i.fa-light.fa-house')).toBeVisible(); // Home Link Icon
  await expect(page.locator('i.fa-light.fa-users')).toBeVisible(); // Users Link Icon
  await expect(page.locator('i.fa-light.fa-store')).toBeVisible(); // Vendors Link Icon
  await expect(page.locator('i.fa-light.fa-badge-percent')).toBeVisible(); // Products Link Icon
  await expect(page.locator('i.fa-light.fa-money-check-dollar')).toBeVisible(); // Billing Link Icon
  await expect(page.locator('i.fa-light.fa-user')).toBeVisible(); // User Management Link Icon
  await expect(page.locator('i.fa-light.fa-server')).toBeVisible(); // System Link Icon
  await expect(page.locator('i.fa-light.fa-gear')).toBeVisible(); // Settings Link Icon

  // Expect Sub Menu Navigation Links to be Visible
  await expect(page.locator('i.fa-light.fa-money-check-dollar')).toBeVisible(); // Billing Link Icon
  await expect(page.locator('a').filter({ hasText: 'Customers' }).first()).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Operators' }).first()).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Affiliates' }).first()).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Enterprises' }).first()).toBeVisible();
  await expect(page.locator('a').filter({ hasText: 'Batches' }).first()).toBeVisible();
});