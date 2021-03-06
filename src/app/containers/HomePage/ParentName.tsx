import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';
import { TextField } from 'mui-rff';

export const ParentName = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>What’s your full legal name?</FormWizardPageTitle>
      <TextField name="textInput" label="Full legal name" variant="outlined" />
    </Box>
  </FormWizardPage>
);
