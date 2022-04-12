import {object, string} from 'yup';

export const loginSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Too Short!')
      .required('Required'),
});
