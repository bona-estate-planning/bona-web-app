import React from 'react';
import { render } from '@testing-library/react';
import { Section2 } from '../Section2';

describe('<Section2  />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Section2 />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
