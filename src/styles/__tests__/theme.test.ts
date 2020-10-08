import { themeSettings } from '../theme';

describe('theme', () => {
  describe('theme settings', () => {
    it('should match snapshot', () => {
      expect(themeSettings).toMatchSnapshot();
    });
  });
});
