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
}

export const FormWizardPage = ({ children }: Props) => {
  return <>{children}</>;
};
