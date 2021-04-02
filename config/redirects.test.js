import redirects from './redirects';

describe('config/redirects', () => {
  it('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
