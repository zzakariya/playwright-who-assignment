import { Page } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) {}

  async navigate(path: string): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    await this.dismissBannerIfPresent();
  }

  async dismissBannerIfPresent(): Promise<void> {
    const dismissBtn = this.page.getByRole('button', {
      name: /accept|close|agree|dismiss|ok|got it/i,
    });
    if ((await dismissBtn.count()) > 0 && (await dismissBtn.first().isVisible())) {
      await dismissBtn.first().click();
    }
  }
}
