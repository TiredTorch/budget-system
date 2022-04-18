import { CssBaseline, ThemeProvider } from '@mui/material';
import { ComponentMeta } from '@storybook/react';
import { BudgetContext } from 'contexts/BudgetContext';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme/newTheme';
import Login from './Login';

export default {
  title: 'Budget-Control/Login',
  component: Login,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BudgetContext>
            <BrowserRouter>
              <Story/>
            </BrowserRouter>
          </BudgetContext>
        </CssBaseline>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Login>;

const Template = () => (
  <Login/>
);

export const Main = Template.bind({});
