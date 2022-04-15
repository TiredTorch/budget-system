import { FC } from 'react';
import { TextField as MUITextField } from '@mui/material';
import { FormikValues } from 'formik';

type InputProps = {
  formik: FormikValues
  name: string
  type: string
  label: string
}

/**
 *Returns input field to work with form
 * @component
 *
 * @param {FormikValues} formik UseFormik hook, that contains initial values,
 * validation schema and onSubmit method
 * @param {string} name Name of input variable
 * @param {string} type type of input field
 * @param {string} label Label, that depict variable
 *
 * @return {React.ReactNode} Input field that interact with form from props
 */
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
