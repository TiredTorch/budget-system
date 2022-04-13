import { FC } from 'react';
import { Link} from 'react-router-dom';
import { Button, Typography} from '@mui/material';
import { useFormik } from 'formik';
import loginSchema from './Login.schema';
import BodyBox from 'components/common/BodyBox/BodyBox';
import Input from 'components/common/UserInputs/Input';

const Login: FC<any> = ({onSubmit}): any => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <BodyBox
      type={'medium'}
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

          <Input
            formik={formik}
            name={'email'}
            type={'email'}
            label={'Email'}
          />
          <Input
            formik={formik}
            name={'password'}
            type={'password'}
            label={'Password'}
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
    </BodyBox>
  );
};

export default Login;
