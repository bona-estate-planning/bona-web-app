import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';
import { TextField } from 'mui-rff';

export const ParentDOB = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>What is your birthday?</FormWizardPageTitle>
      <TextField
        name="textInput"
        label="Birthday MM/DD/YYYY"
        variant="outlined"
      />
    </Box>
  </FormWizardPage>
);
