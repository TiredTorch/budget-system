import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#df487f',
    },
    secondary: {
      main: '#880e4f',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
});

theme.typography.h1 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '4vmax',
  fontWeight: '700',
};

export default theme;
