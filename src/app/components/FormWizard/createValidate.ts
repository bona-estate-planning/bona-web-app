import { FormWizardPageChild } from './index';

export const createValidate = (activePage: FormWizardPageChild) => (
  values: Object,
) => {
  return activePage.props.validate(values);
};
