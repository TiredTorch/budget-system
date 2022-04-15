import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#df487f',
    },
    secondary: {
      main: '#880e4f',
      light: '#f6a5c0',
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

theme.typography.h2 = {
  fontStyle: 'italic',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vmax',
  fontWeight: '300',
};

theme.components = {
  MuiButton: {
    variants: [
      {
        props: {variant: 'outlined'},
        style: {
          border: '1px solid black',
          minWidth: '30%',
          margin: '5vh 35%',
          fontSize: '1.3vmax',
          color: 'black',
          '&:hover': {
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main,
          },
        },
      },
    ],
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        position: 'static',
      },
    },
  },
};

export default theme;
