import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage1 } from '../FormWizardPage1';
import { Form } from 'react-final-form';

describe('<FormWizardPage1  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Form onSubmit={() => undefined}>{() => <FormWizardPage1 />}</Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
