import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly baseUrl = 'https://dev-adminp-app-gxbac4bjg9hebwgq.westus2-01.azurewebsites.net';

  // Locators
  readonly emailInput = this.page.getByPlaceholder('Email address');
  readonly nextButton = this.page.getByRole('button', { name: 'Next' });
  readonly passwordInput = this.page.getByPlaceholder('Password');
  readonly signInButton = this.page.getByRole('button', { name: 'Sign in' });
  readonly staySignedInYesButton = this.page.getByRole('button', { name: 'Yes' });

  constructor(page: Page) {
    super(page);
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await expect(this.page).toHaveTitle(/Sign in/i);
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clickNextButton(): Promise<void> {
    await this.nextButton.click();
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSignIn(): Promise<void> {
    await expect(this.signInButton).toBeVisible();
    await Promise.all([
      this.page.waitForNavigation(),
      this.signInButton.click(),
    ]);
  }

  async clickStaySignedInYes(): Promise<void> {
    await expect(this.staySignedInYesButton).toBeVisible();
    await Promise.all([
      this.page.waitForNavigation(),
      this.staySignedInYesButton.click(),
    ]);
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.clickNextButton();
    await this.fillPassword(password);
    await this.clickSignIn();
    await this.clickStaySignedInYes();
  }
}
