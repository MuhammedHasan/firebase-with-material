import { UskudarCmsPage } from './app.po';

describe('uskudar-cms App', function() {
  let page: UskudarCmsPage;

  beforeEach(() => {
    page = new UskudarCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
