import {Box} from '@mui/material';
import React from 'react';
import {Header} from './Header/Header';

export const Layout = ({children}) => {
  return (
    <Box
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        bgcolor: 'lightgray',
      }}
    >
      <Header/>
      {children}
    </Box>
  );
};
