/**
 *
 * FormWizardPageTitle
 *
 */
import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';

interface Props {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
}

const useStyles = makeStyles({
  root: ({ align }: Props) => ({
    textAlign: align,
  }),
});

export const FormWizardPageTitle = (props: Props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box mb={isMd ? 4 : 3}>
      <Typography className={classes.root} component="h2" variant="h5">
        {props.children}
      </Typography>
    </Box>
  );
};

FormWizardPageTitle.defaultProps = {
  align: 'center',
};
