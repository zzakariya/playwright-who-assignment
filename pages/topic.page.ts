import {BasePage} from './base.page';


export class TopicPage extends BasePage {

  isWhoOwnedDomain(url: string): boolean {
    const hostname = new URL(url).hostname;
    return (
      hostname === 'who.int' ||
      hostname.endsWith('.who.int')
    );
  }
}
