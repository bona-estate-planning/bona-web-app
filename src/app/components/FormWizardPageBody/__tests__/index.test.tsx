import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPageBody } from '../';

describe('<FormWizardPageBody  />', () => {
  it('should match snapshot', () => {
    const { container, getByText } = render(
      <FormWizardPageBody>Hello World!</FormWizardPageBody>,
    );

    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
