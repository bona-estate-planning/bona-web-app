/**
 *
 * FormWizardPageBody
 *
 */
import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  children: ReactNode;
}

export const FormWizardPageBody = ({ children }: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box mb={isMd ? 4 : 3}>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};
