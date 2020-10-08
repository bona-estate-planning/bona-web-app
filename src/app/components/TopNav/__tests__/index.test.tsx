import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopNav } from '..';

describe('<TopNav  />', () => {
  it('should match snapshot', () => {
    const topNav = render(<TopNav />);
    expect(topNav.container.firstChild).toMatchSnapshot();
  });

  it('should contain the site title', async () => {
    render(<TopNav />);
    const siteTitle = await screen.getByTestId('site-title');
    expect(siteTitle).toHaveTextContent('Bona');
  });
});
