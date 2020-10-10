/**
 *
 * FormWizard
 *
 */
import React, { Children, ReactNode, useState } from 'react';
import { Form } from 'react-final-form';
import { createHandleSubmit } from './createHandleSubmit';
import { createNext } from './createNext';
import { createPrevious } from './createPrevious';
import { createValidate } from './createValidate';
import { Props as FormWizardPageProps } from './FormWizardPage';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

export type FormWizardPageChild = React.ReactElement<FormWizardPageProps>;

interface Props {
  initialValues: Object;
  children: ReactNode;
  onSubmit: ReturnType<typeof createHandleSubmit>;
}

const useStyles = makeStyles(theme => ({
  buttons: {
    textAlign: 'center',
  },
  button: {
    marginRight: theme.spacing(1),
    borderRadius: 99999,
    padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

export function FormWizard(props: Props) {
  const { children, onSubmit } = props;

  const [page, setPage] = useState<number>(0);
  const [values, setValues] = useState<Object>({});

  const totalPages = Children.count(children);
  const activePage = Children.toArray(children)[page] as FormWizardPageChild;
  const isFirstPage = page === 0;
  const isLastPage = page === totalPages - 1;

  const next = createNext(page, totalPages, setPage, setValues);
  const previous = createPrevious(page, setPage);
  const validate = createValidate(activePage);
  const handleSubmit = createHandleSubmit(isLastPage, onSubmit, next);

  const classes = useStyles();

  return (
    <Form initialValues={values} validate={validate} onSubmit={handleSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          {activePage}
          <div className={classes.buttons}>
            {!isFirstPage && activePage.props.previousButtonText && (
              <Button
                variant="contained"
                data-testid="wizard-previous"
                type="button"
                onClick={previous}
                className={classes.button}
              >
                {activePage.props.previousButtonText}
              </Button>
            )}
            {!isLastPage && (
              <Button
                variant="contained"
                color="primary"
                data-testid="wizard-next"
                type="submit"
                className={classes.button}
              >
                {activePage.props.nextButtonText}
              </Button>
            )}
            {isLastPage && (
              <Button
                variant="contained"
                color="primary"
                data-testid="wizard-submit"
                type="submit"
                disabled={submitting}
                className={classes.button}
              >
                {activePage.props.submitButtonText}
              </Button>
            )}
          </div>
        </form>
      )}
    </Form>
  );
}
