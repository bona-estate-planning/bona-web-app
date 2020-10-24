import React from 'react';
import { render } from '@testing-library/react';
import { Section3 } from '../Section3';

describe('<Section3  />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Section3 />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
