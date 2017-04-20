import { PlumePage } from './app.po';

describe('plume App', function() {
  let page: PlumePage;

  beforeEach(() => {
    page = new PlumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
