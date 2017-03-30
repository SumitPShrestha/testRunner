import { TestRunnerPage } from './app.po';

describe('test-runner App', () => {
  let page: TestRunnerPage;

  beforeEach(() => {
    page = new TestRunnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
