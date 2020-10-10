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

    userEvent.click(screen.getByTestId('wizard-next'));
    expect(queryByTestId('wizard-previous')).toHaveTextContent('Foo');
  });

  it('should show previous button if past the first child page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} previousButtonText="true" />
      </FormWizard>,
    );

    const getPreviousButton = () => queryByTestId('wizard-previous');
    expect(getPreviousButton()).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('wizard-next'));

    expect(getPreviousButton()).toBeVisible();
  });

  it('should show next button custom text', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} nextButtonText="Foo" />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const getNextButton = () => queryByTestId('wizard-next');
    expect(getNextButton()).toHaveTextContent('Next'); // Default text

    userEvent.click(screen.getByTestId('wizard-next'));

    expect(getNextButton()).toHaveTextContent('Foo'); // Custom text
  });

  it('should show next button if not on the last page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );
    const getNextButton = () => queryByTestId('wizard-next');
    expect(getNextButton()).toBeVisible();

    userEvent.click(screen.getByTestId('wizard-next'));

    expect(getNextButton()).not.toBeInTheDocument();
  });

  it('should show submit button if on the last page', () => {
    const { queryByTestId } = render(
      <FormWizard initialValues={mockValues} onSubmit={mockHandleSubmit}>
        <FormWizardPage validate={mockValidate} />
        <FormWizardPage validate={mockValidate} />
      </FormWizard>,
    );

    const getSubmitButton = () => queryByTestId('wizard-submit');
    expect(getSubmitButton()).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('wizard-next'));

    expect(getSubmitButton()).toBeVisible();
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

    userEvent.click(screen.getByTestId('wizard-next'));

    expect(queryByText('Page 2')).toBeVisible();

    userEvent.click(screen.getByTestId('wizard-previous'));

    expect(queryByText('Page 1')).toBeVisible();
  });
});
