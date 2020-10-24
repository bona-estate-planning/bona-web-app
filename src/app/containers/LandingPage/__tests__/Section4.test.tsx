import React from 'react';
import { render } from '@testing-library/react';
import { Section4 } from '../Section4';

describe('<Section4  />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Section4 />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
