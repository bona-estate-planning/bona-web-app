import { createPrevious } from '../createPrevious';

describe('createPrevious', () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    mockSetPage.mockReset();
  });

  it('should set the previous page', () => {
    createPrevious(1, mockSetPage)();
    expect(mockSetPage).toHaveBeenNthCalledWith(1, 0);
  });

  it('should not set the page less than 0', () => {
    createPrevious(0, mockSetPage)();
    expect(mockSetPage).toHaveBeenNthCalledWith(1, 0);
  });
});
