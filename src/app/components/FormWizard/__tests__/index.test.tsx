import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const { container } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show previous button custom text', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} previousButtonText="Foo" />
      </FormWizard>,
    );

    const nextButton = screen.getByTestId('wizard-next');
    userEvent.click(nextButton);

    const previousButton = queryByTestId('wizard-previous');
    expect(previousButton).toHaveTextContent('Foo');
  });

  it('should show previous button if past the first child page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} previousButtonText="true" />
      </FormWizard>,
    );

    const previousButton = queryByTestId('wizard-previous');
    expect(previousButton).not.toBeInTheDocument();

    const nextButton = screen.getByTestId('wizard-next');
    userEvent.click(nextButton);

    expect(previousButton).not.toBeInTheDocument();
  });

  it('should show next button custom text', () => {
    render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} nextButtonText="Foo" />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const nextButton = screen.getByTestId('wizard-next');
    expect(nextButton).toHaveTextContent('Next'); // Default text
    userEvent.click(nextButton);
    expect(nextButton).toHaveTextContent('Foo'); // Custom text
  });

  it('should show next button if not on the last page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );
    expect(queryByTestId('wizard-next')).toBeVisible();

    const nextButton = screen.getByTestId('wizard-next');
    userEvent.click(nextButton);

    expect(queryByTestId('wizard-next')).not.toBeInTheDocument();
  });

  it('should show submit button if on the last page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const submitButton = queryByTestId('wizard-submit');
    expect(submitButton).not.toBeInTheDocument();

    const nextButton = screen.getByTestId('wizard-next');
    userEvent.click(nextButton);

    expect(submitButton).toBeVisible();
  });

  it('should be able to change pages', () => {
    const { queryByText } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} previousButtonText="true">
          <h1>Page 1</h1>
        </FormWizardPage>
        <FormWizardPage validate={mockValidate} previousButtonText="true">
          <h1>Page 2</h1>
        </FormWizardPage>
      </FormWizard>,
    );

    expect(queryByText('Page 1')).toBeVisible();

    const nextButton = screen.getByTestId('wizard-next');
    userEvent.click(nextButton);

    expect(queryByText('Page 2')).toBeVisible();

    const previousButton = screen.getByTestId('wizard-previous');
    userEvent.click(previousButton);

    expect(queryByText('Page 1')).toBeVisible();
  });
});
