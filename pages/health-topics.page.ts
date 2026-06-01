import {expect, Locator} from '@playwright/test';
import {BasePage} from './base.page';

export class HealthTopicsPage extends BasePage {
  async open(): Promise<void> {
    await this.navigate('/health-topics');
    await expect(this.heading()).toBeVisible();
  }

  heading(): Locator {
    return this.page.locator('.hero-image--wrapper p.title');
  }

}
