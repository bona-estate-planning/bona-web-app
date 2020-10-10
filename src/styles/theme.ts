import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

export const themeSettings: ThemeOptions = {
  palette: {
    primary: {
      light: '#6fcdff ',
      main: '#2d9cdb',
      dark: '#006ea9',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export const theme = createMuiTheme(themeSettings);
