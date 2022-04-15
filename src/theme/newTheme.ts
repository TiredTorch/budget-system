import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: 'lightgray',
    },
    primary: {
      main: '#004d40',
      dark: '#00352c',
      light: '#337066',
    },
    secondary: {
      main: '#26a69a',
      light: '#51b7ae',
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
  color: theme.palette.primary.main,
  fontWeight: '700',
  textAlign: 'center',
  fontStyle: 'italic',
  fontFamily: theme.typography.fontFamily,
  fontSize: '6vmin',
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
      color: theme.palette.primary.main,
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
        fontSize: '3.6vmin',
        color: theme.palette.primary.main,
        fontWeight: '700',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '3.6vmin',
        color: theme.palette.primary.main,
        fontWeight: '700',
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
          color: theme.palette.primary.main,
          fontWeight: '700',
          '&:hover': {
            border: `1px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.dark,
          },
        },
      },
    ],
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        position: 'sticky',
      },
    },
  },
};

export default theme;
