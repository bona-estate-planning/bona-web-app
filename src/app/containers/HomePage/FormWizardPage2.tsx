import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';
import { Field } from 'react-final-form';

export const FormWizardPage2 = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>
        Question one is lorem ipsum dolor ipsum?
      </FormWizardPageTitle>
      <Field
        name="userInput"
        component="input"
        type="text"
        label="User Input"
      />
    </Box>
  </FormWizardPage>
);
