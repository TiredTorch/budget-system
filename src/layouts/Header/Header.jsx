import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';

export const Header = () => {
  return (
    <Box
      sx={{
        w: '100vw',
        minHeight: '5vh',
        bgcolor: 'yellowgreen',
        p: '1vh 0',
      }}
    >
      <Typography fontSize="3vmax" align='center' fontFamily='Lato'>
        Budget Control System
      </Typography>
    </Box>
  );
};
