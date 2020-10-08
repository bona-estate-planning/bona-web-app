import { createMuiTheme } from '@material-ui/core/styles';

export const themeSettings = {
  palette: {
    primary: {
      light: '#6fcdff ',
      main: '#2d9cdb',
      dark: '#006ea9',
      contrastText: '#fff',
    },
  },
};

export const theme = createMuiTheme(themeSettings);
