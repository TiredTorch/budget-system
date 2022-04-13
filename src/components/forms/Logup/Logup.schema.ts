import {object, string} from 'yup';

export const logupSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Too Short!')
      .required('Required'),
  confirmPassword: string()
      .min(8, 'Too Short!')
      .required('Required'),
});

export default logupSchema;
