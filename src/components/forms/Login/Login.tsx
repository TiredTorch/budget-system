import { FC } from 'react';
import { Link} from 'react-router-dom';
import { Button, Typography} from '@mui/material';
import { useFormik } from 'formik';
import loginSchema from './Login.schema';
import BodyBox from 'components/common/BodyBox/BodyBox';
import Input from 'components/common/UserInputs/Input';
import i18next from 'i18n';

const Login: FC<any> = ({onSubmit, googleAuth}): any => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <BodyBox>
      {
        <form onSubmit={formik.handleSubmit}>
          <Typography variant='h2'>
            {i18next.t('login.title')}
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
          >
            {i18next.t('login.button')}
          </Button>
        </form>
      }
      <Typography variant='h5'>
        <Link to='/register'>
          {i18next.t('login.register')}
        </Link>
      </Typography>
      <Typography variant='h5'>
        <a href="#" onClick={googleAuth}>
          {i18next.t('login.google')}
        </a>
      </Typography>
    </BodyBox>
  );
};

export default Login;
