import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { FormWizard } from '..';
import { FormWizardPage } from '../FormWizardPage';

describe('<FormWizard  />', () => {
  const mockValidate = jest.fn();
  const mockHandleSubmit = jest.fn();
  const mockValues = {};

  beforeEach(() => {
    mockHandleSubmit.mockReset();
  });

  it('should match snapshot', () => {
    const loadingIndicator = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('should show previous button if past the first child page', () => {
    render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const nextButton = screen.getByTestId('wizard-next');
    fireEvent.click(nextButton);

    expect(screen.getByTestId('wizard-previous')).toBeVisible();
  });

  it('should show next button if not on the last page', () => {
    render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );
    const nextButton = screen.getByTestId('wizard-next');
    expect(nextButton).toBeVisible();
  });

  it('should show submit button if on the last page', () => {
    render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const nextButton = screen.getByTestId('wizard-next');
    fireEvent.click(nextButton);

    expect(screen.getByTestId('wizard-submit')).toBeVisible();
  });

  it('should be able to change pages', () => {
    render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate}>
          <h1>Page 1</h1>
        </FormWizardPage>
        <FormWizardPage validate={mockValidate}>
          <h1>Page 2</h1>
        </FormWizardPage>
      </FormWizard>,
    );

    expect(screen.getByText('Page 1')).toBeVisible();

    const nextButton = screen.getByTestId('wizard-next');
    fireEvent.click(nextButton);

    expect(screen.getByText('Page 2')).toBeVisible();

    const previousButton = screen.getByTestId('wizard-previous');
    fireEvent.click(previousButton);

    expect(screen.getByText('Page 1')).toBeVisible();
  });
});
