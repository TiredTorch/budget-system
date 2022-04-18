import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useFormik } from 'formik';
import theme from 'theme/newTheme';
import Input from './Input';

type InputWrapperType = {
  name: string
  type: string
  label: string
}

const InputWrapper: FC<InputWrapperType> = ({label}) => {
  const formik = useFormik({
    initialValues: {
      field: '',
    },
    onSubmit: () => alert('Let me in'),
  });

  return (
    <Input
      formik={formik}
      name={'field'}
      type={'text'}
      label={label}
    />);
};

export default {
  title: 'Budget-Control/Input',
  component: InputWrapper,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Story/>
        </CssBaseline>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof InputWrapper>;

const Template: ComponentStory<typeof InputWrapper> = (args) => (
  <InputWrapper {...args}/>
);

export const Main = Template.bind({});
Main.args = {
  label: 'Email',
};
