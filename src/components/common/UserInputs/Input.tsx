import { FC } from 'react';
import { TextField as MUITextField } from '@mui/material';
import { FormikValues } from 'formik';

type InputProps = {
  formik: FormikValues
  name: string
  type: string
  label: string
}

const Input : FC<InputProps> =
  ({formik, name, type, label}) => {
    return (
      (formik.values[name] === undefined) ?
      <h3>Something went wrong</h3> :
      <MUITextField
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && !!formik.errors[name]}
        helperText={formik.touched[name] && formik.errors[name]}
        type={type}
        name={name}
        id={name}
        label={label}
        color= 'success'
        variant='standard'
        sx={{
          width: '50%',
          margin: '2vh 25%',
        }}
      />
    );
  };

export default Input;
