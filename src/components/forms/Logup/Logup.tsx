import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import logupSchema from './Logup.schema';
import BodyBox from 'components/common/BodyBox/BodyBox';
import Input from 'components/common/UserInputs/Input';
import i18next from 'i18next';

/**
 * Component for register account page
 * @component
 *
 * @param {Function} onSubmit Method that tries to register user
 * with credentials from inputs
 *
 * @return {React.ReactNode} Component to register user
 */
const Logup: FC<any> = ({onSubmit}): any => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: logupSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <BodyBox type={'medium'}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant='h2'>
          {i18next.t('register.title')}
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
        <Input
          formik={formik}
          name={'confirmPassword'}
          type={'password'}
          label={'Confirm password'}
        />

        <Button
          type='submit'
          variant='outlined'
        >
          {i18next.t('register.button')}
        </Button>
      </form>
      <Typography variant='h5'>
        <Link to='/login'>
          {i18next.t('register.login')}
        </Link>
      </Typography>
    </BodyBox>
  );
};

export default Logup;
