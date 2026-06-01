import {Locator, Page} from '@playwright/test';

export class GlobalHeaderComponent {
  constructor(private readonly page: Page) {}

  whoLogo(): Locator {
    return this.page.getByRole('link', { name: 'World Health Organization' });
  }

  async clickWhoLogo(): Promise<void> {
    await this.whoLogo().click();
    await this.page.waitForLoadState('domcontentloaded');
  }

   languageSelector(): Locator {
    return this.page.getByRole('combobox', { name: 'Select language' });
  }

  searchInput(): Locator {
    return this.page.locator('header input[type="search"]');
  }
}
