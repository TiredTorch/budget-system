import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import loginSchema from 'components/forms/Login/Login.schema';
import { BudgetContext } from 'contexts/BudgetContext';
import { useFormik } from 'formik';
import theme from 'theme/newTheme';
import Input from './Input';

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: loginSchema,
  onSubmit: (values) => alert(values),
});

export default {
  title: 'Budget-Control/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BudgetContext>
            <form onSubmit={formik.handleSubmit}>
              <Story/>
              <Button type='submit'/>
            </form>
          </BudgetContext>
        </CssBaseline>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template = () => (
  <Input formik={formik} name={'email'} type={'email'} label={'Email'}/>
);

export const Main = Template.bind({});
