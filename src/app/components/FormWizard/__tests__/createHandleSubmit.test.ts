import { createHandleSubmit } from '../createHandleSubmit';

describe('createHandleSubmit', () => {
  const mockOnSubmit = jest.fn();
  const mockNext = jest.fn();
  const mockValues = {};

  beforeEach(() => {
    mockOnSubmit.mockReset();
    mockNext.mockReset();
  });

  it('should call the onSubmit function if on the last page', () => {
    createHandleSubmit(true, mockOnSubmit, mockNext)(mockValues);
    expect(mockOnSubmit).toHaveBeenNthCalledWith(1, mockValues);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should call the next function if not on the last page', () => {
    createHandleSubmit(false, mockOnSubmit, mockNext)(mockValues);
    expect(mockOnSubmit).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenNthCalledWith(1, mockValues);
  });
});
