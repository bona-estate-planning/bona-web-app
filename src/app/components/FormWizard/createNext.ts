import { Dispatch, SetStateAction } from 'react';

export const createNext = (
  currentPage: number,
  totalPages: number,
  setPage: Dispatch<SetStateAction<number>>,
  setValues: Dispatch<SetStateAction<Object>>,
) => (values: Object) => {
  setPage(Math.min(currentPage + 1, totalPages - 1));
  setValues(values);
};
