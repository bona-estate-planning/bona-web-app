import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';
import { Radios } from 'mui-rff';

export const FormWizardPage3 = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>Center aligned question?</FormWizardPageTitle>
      <Radios
        name="radioInput"
        data={[
          { label: 'Short phrase', value: 'item1' },
          { label: 'Really long sentence', value: 'item2' },
          { label: 'Notice the left alignment', value: 'item3' },
          { label: 'Default is nothing selected', value: 'item4' },
        ]}
      />
    </Box>
  </FormWizardPage>
);
