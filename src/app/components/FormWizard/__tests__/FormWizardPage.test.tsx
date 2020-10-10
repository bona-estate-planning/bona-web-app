import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage } from '../FormWizardPage';

describe('<FormWizardPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <FormWizardPage validate={() => undefined}>
        <h1>Hello World!</h1>
      </FormWizardPage>,
    );

    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
