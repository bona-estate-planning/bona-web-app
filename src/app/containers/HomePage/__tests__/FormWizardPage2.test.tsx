import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage2 } from '../FormWizardPage2';
import { Form } from 'react-final-form';

describe('<FormWizardPage2  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Form onSubmit={() => undefined}>{() => <FormWizardPage2 />}</Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
