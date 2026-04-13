import { createTheme } from '@mui/material';

export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007afc',
    },
    secondary: {
      main: '#00BCD4',
    },
    text: {
      primary: '#363638',
    },
  },
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
  }

});
