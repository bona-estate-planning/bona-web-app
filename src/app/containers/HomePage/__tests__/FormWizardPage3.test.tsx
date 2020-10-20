import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage3 } from '../FormWizardPage3';
import { Form } from 'react-final-form';

describe('<FormWizardPage3  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Form onSubmit={() => undefined}>{() => <FormWizardPage3 />}</Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
