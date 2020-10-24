import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TopNav } from '..';

describe('<TopNav  />', () => {
  const getComponent = () => (
    <BrowserRouter>
      <TopNav />
    </BrowserRouter>
  );

  it('should match snapshot', () => {
    const topNav = render(getComponent());
    expect(topNav.container.firstChild).toMatchSnapshot();
  });

  it('should contain the site title', async () => {
    render(getComponent());
    const siteTitle = await screen.getByTestId('site-title');
    expect(siteTitle).toHaveTextContent('Bona');
  });
});
