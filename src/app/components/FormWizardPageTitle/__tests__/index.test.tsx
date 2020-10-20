import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPageTitle } from '../';

describe('<FormWizardPageTitle  />', () => {
  it('should match snapshot', () => {
    const { container, getByText } = render(
      <FormWizardPageTitle>Hello World!</FormWizardPageTitle>,
    );

    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
