import { themeSettings } from '../theme';

describe(__filename, () => {
  describe('theme settings', () => {
    it('should match snapshot', () => {
      expect(themeSettings).toMatchSnapshot();
    });
  });
});
