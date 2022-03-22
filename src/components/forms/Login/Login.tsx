import {Box, Button, TextField, Typography} from '@mui/material';
import {useFormik} from 'formik';
import React, {FC} from 'react';
import {Link} from 'react-router-dom';

export const Login: FC<any> = ({onSubmit}): any => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => onSubmit(values),
  });

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
      {
        <form onSubmit={formik.handleSubmit}>
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
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            type='email'
            id='email'
            name='email'
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            type='password'
            id='password'
            name='password'
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
            type='submit'
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
        </form>
      }
      <Typography
        fontSize='1vmax'
        align='center'
      >
        <Link to='/register'>
        Or create it, if you dont have an account
        </Link>
      </Typography>
    </Box>
  );
};
