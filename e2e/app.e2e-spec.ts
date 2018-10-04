import { RxJSPracticePage } from './app.po';

describe('rx-jspractice App', () => {
  let page: RxJSPracticePage;

  beforeEach(() => {
    page = new RxJSPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
