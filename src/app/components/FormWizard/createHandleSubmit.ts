import { createNext } from './createNext';

export const createHandleSubmit = (
  isLastPage: boolean,
  onSubmit: Function,
  next: ReturnType<typeof createNext>,
) => (values: Object) => {
  if (isLastPage) {
    return onSubmit(values);
  } else {
    next(values);
  }
};
