import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
});

theme.typography.h1 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vmax',
  fontWeight: '100',
};

theme.typography.h2 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '2.5vmax',
  fontWeight: '700',
  margin: '2vh 0',
  display: 'flex',
  justifyContent: 'center',
};
theme.typography.h4 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '3vmax',
  minWidth: '100%',
  fontWeight: '100',
  display: 'flex',
  justifyContent: 'center',
};
theme.typography.h5 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: '1vmax',
  fontWeight: '100',
  display: 'flex',
  justifyContent: 'center',
};

theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        overflowX: 'hidden',
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        padding: '1vh 0',
        fontSize: '1.5vmax',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '1.5vmax',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

        border: '.5vh solid yellowgreen',
        background: 'lightgoldenrodyellow',
        padding: '1vh 1vw',
      },
    },
    variants: [
      {
        props: {variant: 'outlined'},
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',

          padding: '1vh 1vw',
          margin: '4vh 0',
          background: 'yellowgreen',
          minWidth: '30%',
        },
      },
    ],
  },
  MuiButton: {
    variants: [
      {
        props: {variant: 'outlined'},
        style: {
          border: '1px solid black',
          minWidth: '30%',
          margin: '5vh 35%',
          fontSize: '1.5vmax',
          color: 'black',
          '&:hover': {
            border: '1px solid green',
            color: 'green',
          },
        },
      },
    ],
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        position: 'static',
        width: '100vw',
        minHeight: '5vh',
        background: 'yellowgreen',
        padding: '1vh 0',
        color: 'black',
      },
    },
  },
};

export default theme;
