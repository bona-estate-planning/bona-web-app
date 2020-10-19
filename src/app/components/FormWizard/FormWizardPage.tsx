/**
 *
 * FormWizardPage
 *
 */
import React, { ReactNode } from 'react';
import { ValidationErrors } from 'final-form';

export interface Props {
  children?: ReactNode;
  validate: (
    Object,
  ) => ValidationErrors | Promise<ValidationErrors> | undefined;
  previousButtonText?: ReactNode;
  nextButtonText?: ReactNode;
  submitButtonText?: ReactNode;
}

export const FormWizardPage = ({ children }: Props) => {
  return <>{children}</>;
};

FormWizardPage.defaultProps = {
  validate: () => undefined,
  nextButtonText: 'Next',
  submitButtonText: 'Submit',
};
