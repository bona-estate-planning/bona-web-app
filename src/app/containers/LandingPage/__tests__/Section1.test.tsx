import React from 'react';
import { render } from '@testing-library/react';
import { Section1 } from '../Section1';
import { BrowserRouter } from 'react-router-dom';

describe('<Section1  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Section1 />
      </BrowserRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
