
import {Box, Button, TextField, Typography} from '@mui/material';
import React from 'react';

export const Login = () => {
  return (
    <Box
      sx={{
        border: '.5vh solid yellowgreen',
        bgcolor: 'lightgoldenrodyellow',
        maxWidth: '50vw',
        m: '5vh 25vw',
        p: '1vh 1vw',
      }}
    >
      <Typography
        fontFamily='Lato'
        align='center'
        fontSize='2.5vmax'
        fontWeight='700'
        m='2vh 0'
      >
        Log in your account
      </Typography>
      <TextField
        color='success'
        label='Email'
        variant='standard'
        size='medium'
        inputProps={{style: {
          fontSize: '1.5vmax',
        }}}
        InputLabelProps={{style: {fontSize: '1.5vmax'}}}
        sx={{
          minWidth: '50%',
          m: '2vh 25%',
        }}
      />
      <TextField
        color='success'
        label='Password'
        variant='standard'
        size='medium'
        inputProps={{style: {fontSize: '1.5vmax'}}}
        InputLabelProps={{style: {fontSize: '1.5vmax'}}}
        sx={{
          minWidth: '50%',
          m: '2vh 25%',
        }}
      />
      <Button
        fontFamily='Lato'
        variant='outlined'
        sx={{
          border: '1px solid black',
          minWidth: '30%',
          m: '5vh 35%',
          fontSize: '1.5vmax',
          color: 'black',
          '&:hover': {
            border: '1px solid green',
            color: 'green',
          },
        }}
      >
        Sign in
      </Button>
    </Box>
  );
};
