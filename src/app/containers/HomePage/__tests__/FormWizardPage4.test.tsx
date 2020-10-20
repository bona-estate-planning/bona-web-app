import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage4 } from '../FormWizardPage4';
import { Form } from 'react-final-form';

describe('<FormWizardPage4  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Form onSubmit={() => undefined}>{() => <FormWizardPage4 />}</Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
