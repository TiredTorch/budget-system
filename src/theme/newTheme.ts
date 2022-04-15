import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#df487f',
      light: '#9f3e72',
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
  fontSize: '8vmin',
  fontWeight: '700',
};

theme.typography.h2 = {
  textAlign: 'center',
  fontStyle: 'italic',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6vmin',
  fontWeight: '300',
};

theme.typography.h5 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vmin',
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

      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        padding: '1vh 0',
        fontSize: '2vmin',
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        padding: '1vh 0',
        fontSize: '4vmin',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '4vmin',
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
          fontSize: '3vmin',
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
