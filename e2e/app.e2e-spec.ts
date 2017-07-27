import { Nightlife2Page } from './app.po';

describe('nightlife2 App', () => {
  let page: Nightlife2Page;

  beforeEach(() => {
    page = new Nightlife2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
