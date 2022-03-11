
import {Box, Button, TextField, Typography} from '@mui/material';
import {auth} from 'api/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      if (!email || !password) throw Error('Fields have to be filled!');

      await signInWithEmailAndPassword(
          auth,
          email,
          password,
      );
    } catch (error) {
      alert(error);
    }
  };

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
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
        onClick={handleSubmit}
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
