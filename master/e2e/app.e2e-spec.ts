import { MasterPage } from './app.po';

describe('master App', () => {
  let page: MasterPage;

  beforeEach(() => {
    page = new MasterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
