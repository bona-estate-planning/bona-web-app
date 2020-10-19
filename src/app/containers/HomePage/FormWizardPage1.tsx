import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageBody } from 'app/components/FormWizardPageBody';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';

export const FormWizardPage1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <FormWizardPage
      validate={() => undefined}
      nextButtonText="Start my journey!"
    >
      <Box
        component="svg"
        css={{ display: 'block', height: 120, width: 120 }}
        mx="auto"
        mb={isMd ? 4 : 3}
      >
        <circle cx="60" cy="60" r="60" fill="#F3F3F3" />
      </Box>
      <FormWizardPageTitle align="left">
        Let’s start on your guardianship journey!
      </FormWizardPageTitle>
      <FormWizardPageBody>
        dolor sit amet, consectetur adipiscing elit, sed do eiu dunt ut labore
        et dolore magna aliqua. Ut enim ad minim v d exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </FormWizardPageBody>
      <FormWizardPageBody>
        ure dolor in reprehenderit in voluptate velit esse cillum nulla
        pariatur.Excepteur sint occaecat cupidatat in culpa qui officia deserunt
        mollit anim id est laborum.
      </FormWizardPageBody>
    </FormWizardPage>
  );
};
