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
  textAlign: 'center',
  fontStyle: 'italic',
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vmax',
  fontWeight: '300',
};

theme.typography.h5 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.5vmax',
  fontWeight: '100',
  width: '90%',
  margin: '1vh 0',
  display: 'flex',
  justifyContent: 'center',
  '& a': {
    textDecoration: 'none',
    color: 'blue',

    '&:hover': {
      transition: '.5s all',
      color: theme.palette.secondary.main,
    },
  },
};


theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      root: {
        'input:-webkit-autofill': {
          '-webkit-text-fill-color': 'black !important',
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        padding: '1vh 0',
        fontSize: '1vmax',
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        padding: '1vh 0',
        fontSize: '2vmax',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '2vmax',
      },
    },
  },
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
