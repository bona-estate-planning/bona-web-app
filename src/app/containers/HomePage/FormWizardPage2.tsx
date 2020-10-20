import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';
import { TextField } from 'mui-rff';

export const FormWizardPage2 = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>
        Question one is lorem ipsum dolor ipsum?
      </FormWizardPageTitle>
      <TextField name="textInput" label="User Input" variant="outlined" />
    </Box>
  </FormWizardPage>
);
