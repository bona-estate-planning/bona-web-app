import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FormWizardPage } from '../FormWizard/FormWizardPage';

export interface Props {
  title: ReactNode;
  body?: ReactNode[];
  input?: {
    name: string;
    type: string;
  };
  buttonText?: ReactNode;
}

export const FormWizardPageTemplate = ({
  title,
  buttonText,
  body = [],
}: Props) => {
  return (
    <FormWizardPage
      validate={() => undefined}
      nextButtonText={buttonText}
      submitButtonText={buttonText}
    >
      <Box mb={4}>
        <PageTitle>{title}</PageTitle>
      </Box>
      {body.map(text => (
        <PageBody>{text}</PageBody>
      ))}
    </FormWizardPage>
  );
};

interface PageTitleProps {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
}

const usePageTitleStyles = makeStyles({
  root: ({ align }: PageTitleProps) => ({
    textAlign: align,
  }),
});

const PageTitle = (props: PageTitleProps) => {
  const classes = usePageTitleStyles(props);
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

PageTitle.defaultProps = {
  align: 'left',
};

interface PageBodyProps {
  children: ReactNode;
}

const PageBody = ({ children }: PageBodyProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box mb={isMd ? 4 : 3}>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
};
