import { test, expect } from '@playwright/test';

test.only('has title and clicks get started', async ({ page }) => {
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

  // Expects page to have a heading with the name of Installation.
  // await page.getByTitle('Sign in').click();
});