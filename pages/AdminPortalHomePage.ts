import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPortalHomePage extends BasePage {
  // Locators - Header
  readonly adminPortalHeading = this.page.getByRole('heading', { name: 'Admin Portal' });
  readonly anytimeOperatorPortalLink = this.page.getByRole('link', { name: 'Anytime Operator Portal' });
  readonly userInitials = this.page.locator('#nav_placeholder');

  // Locators - Main Menu Icons
  readonly homeIcon = this.page.locator('i.fa-light.fa-house');
  readonly usersIcon = this.page.locator('i.fa-light.fa-users');
  readonly vendorsIcon = this.page.locator('i.fa-light.fa-store');
  readonly productsIcon = this.page.locator('i.fa-light.fa-badge-percent');
  readonly billingIcon = this.page.locator('i.fa-light.fa-money-check-dollar');
  readonly userManagementIcon = this.page.locator('i.fa-light.fa-user');
  readonly systemIcon = this.page.locator('i.fa-light.fa-server');
  readonly settingsIcon = this.page.locator('i.fa-light.fa-gear');

  // Locators - Billing Sub Menu Navigation Links
  readonly customersLink = this.page.getByRole('link', { name: 'Customers' });
  readonly operatorsLink = this.page.getByRole('link', { name: 'Operators' });
  readonly affiliatesLink = this.page.getByRole('link', { name: 'Affiliates' });
  readonly enterprisesLink = this.page.getByRole('link', { name: 'Enterprises' });
  readonly batchesLink = this.page.getByRole('link', { name: 'Batches' });

  constructor(page: Page) {
    super(page);
  }

  async verifyPageHeader(): Promise<void> {
    await expect(this.adminPortalHeading).toBeVisible();
    await expect(this.anytimeOperatorPortalLink).toBeVisible();
    await expect(this.userInitials).toContainText('D');
  }

  async verifyMainMenuIcons(): Promise<void> {
    await expect(this.homeIcon).toBeVisible();
    await expect(this.usersIcon).toBeVisible();
    await expect(this.vendorsIcon).toBeVisible();
    await expect(this.productsIcon).toBeVisible();
    await expect(this.billingIcon).toBeVisible();
    await expect(this.userManagementIcon).toBeVisible();
    await expect(this.systemIcon).toBeVisible();
    await expect(this.settingsIcon).toBeVisible();
  }

  async verifyBillingSubMenuLinks(): Promise<void> {
    await this.billingIcon.click();
    await expect(this.customersLink).toBeVisible();
    await expect(this.operatorsLink).toBeVisible();
    await expect(this.affiliatesLink).toBeVisible();
    await expect(this.enterprisesLink).toBeVisible();
    await expect(this.batchesLink).toBeVisible();
  }
}
