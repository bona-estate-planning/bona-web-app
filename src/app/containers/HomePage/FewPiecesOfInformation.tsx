import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FormWizardPage } from 'app/components/FormWizard/FormWizardPage';
import { FormWizardPageBody } from 'app/components/FormWizardPageBody';
import { FormWizardPageTitle } from 'app/components/FormWizardPageTitle';
import React from 'react';

export const FewPiecesOfInformation = () => {
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
        We’re going to cover a few pieces of information
      </FormWizardPageTitle>
      <FormWizardPageBody>
        We’ll walk you through everything you need to do to create a Nomination
        of Guardian — one simple question at a time, starting with some basic
        info.
      </FormWizardPageBody>
    </FormWizardPage>
  );
};
