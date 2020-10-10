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

export type FormWizardPageChild = React.ReactElement<FormWizardPageProps>;

interface Props {
  initialValues: Object;
  children: ReactNode;
  onSubmit: ReturnType<typeof createHandleSubmit>;
}

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

  return (
    <Form initialValues={values} validate={validate} onSubmit={handleSubmit}>
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          {activePage}
          <div className="buttons">
            {!isFirstPage && (
              <button
                data-testid="wizard-previous"
                type="button"
                onClick={previous}
              >
                « Previous
              </button>
            )}
            {!isLastPage && (
              <button data-testid="wizard-next" type="submit">
                Next »
              </button>
            )}
            {isLastPage && (
              <button
                data-testid="wizard-submit"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    </Form>
  );
}
