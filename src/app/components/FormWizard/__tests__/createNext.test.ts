import { createNext } from '../createNext';

describe('createNext', () => {
  const mockSetPage = jest.fn();
  const mockSetValues = jest.fn();

  beforeEach(() => {
    mockSetPage.mockReset();
    mockSetValues.mockReset();
  });

  it('should set the next page', () => {
    createNext(0, 2, mockSetPage, mockSetValues)({});
    expect(mockSetPage).toHaveBeenNthCalledWith(1, 1);
  });

  it('should not set the page beyond the total number of pages', () => {
    createNext(1, 2, mockSetPage, mockSetValues)({});
    expect(mockSetPage).toHaveBeenNthCalledWith(1, 1);
  });
});
