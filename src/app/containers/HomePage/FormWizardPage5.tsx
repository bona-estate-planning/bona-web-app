import Box from '@material-ui/core/Box';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import { Tiles } from 'app/components/Tiles';
import React from 'react';

export const FormWizardPage5 = () => (
  <FormWizardPage validate={() => undefined} submitButtonText="Submit">
    <Box mb={4}>
      <FormWizardPageTitle>Center aligned question?</FormWizardPageTitle>
      <Tiles
        name="tilesInput"
        data={[
          {
            label: 'Yes',
            sublabel: 'Lorem ipsum dolor. Ipsum dolor lorem.',
            value: 'yes',
          },
          {
            label: 'No',
            sublabel: 'Lorem ipsum dolor. Ipsum dolor lorem.',
            value: 'no',
          },
        ]}
      />
    </Box>
  </FormWizardPage>
);
