import { CssBaseline, ThemeProvider } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import theme from 'theme/newTheme';
import Header from './Header';

export default {
  title: 'Budget-Control/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Story/>
        </CssBaseline>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template = () => (
  <Header/>
);

export const Main = Template.bind({});
