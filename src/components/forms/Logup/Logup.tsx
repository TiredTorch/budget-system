
import {Box, Button, TextField, Typography} from '@mui/material';
import {auth} from 'api/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

export const Logup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        throw Error('Passwords does not match!');
      }
      await createUserWithEmailAndPassword(
          auth,
          email,
          password,
      ).then(() => {
        navigate('/main');
      });
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
        Create an account
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
      <TextField
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type='password'
        color='success'
        label='Confirm password'
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
        Sign up
      </Button>
      <Typography
        fontSize='1vmax'
        align='center'
      >
        <Link to='/login'>
        Or log in, if you have an account
        </Link>
      </Typography>
    </Box>
  );
};
