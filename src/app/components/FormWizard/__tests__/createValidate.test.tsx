import React from 'react';
import { createValidate } from '../createValidate';
import { FormWizardPage } from '../FormWizardPage';

describe('createValidate', () => {
  const mockValidate = jest.fn();
  const mockValues = {};
  const mockActivePage = <FormWizardPage validate={mockValidate} />;

  beforeEach(() => {
    mockValidate.mockReset();
  });

  it('should call the validate function prop with form values', () => {
    createValidate(mockActivePage)(mockValues);
    expect(mockValidate).toHaveBeenNthCalledWith(1, mockValues);
  });
});
