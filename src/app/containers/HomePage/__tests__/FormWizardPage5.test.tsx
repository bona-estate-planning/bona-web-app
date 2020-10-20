import React from 'react';
import { render } from '@testing-library/react';
import { FormWizardPage5 } from '../FormWizardPage5';
import { Form } from 'react-final-form';

describe('<FormWizardPage5  />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Form onSubmit={() => undefined}>{() => <FormWizardPage5 />}</Form>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
