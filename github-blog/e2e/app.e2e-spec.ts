import { GithubBlogPage } from './app.po';

describe('github-blog App', function() {
  let page: GithubBlogPage;

  beforeEach(() => {
    page = new GithubBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
