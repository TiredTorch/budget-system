import {Box} from '@mui/material';
import React, {FC} from 'react';
import {Header} from './Header/Header';

export const Layout : FC = ({children}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: '0 0 2vh 0',
        bgcolor: 'lightgray',
      }}
    >
      <Header/>
      {children}
    </Box>
  );
};
