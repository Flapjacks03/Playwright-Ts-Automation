import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPortalHomePage } from '../pages/AdminPortalHomePage';

test.only('Login to Admin Portal Home Page and Navigations', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPortalHomePage = new AdminPortalHomePage(page);

  // Navigate to login page and login
  await loginPage.navigateToLoginPage();
  await loginPage.login('atmbtest+Dakota@gmail.com', 'QATuser%20');

  // Verify page header elements
  await adminPortalHomePage.verifyPageHeader();

  // Verify main menu navigation icons
  await adminPortalHomePage.verifyMainMenuIcons();

  // Verify billing sub menu navigation links
  await adminPortalHomePage.verifyBillingSubMenuLinks();
});