import { Dispatch, SetStateAction } from 'react';

export const createPrevious = (
  currentPage: number,
  setPage: Dispatch<SetStateAction<number>>,
) => () => setPage(Math.max(currentPage - 1, 0));
