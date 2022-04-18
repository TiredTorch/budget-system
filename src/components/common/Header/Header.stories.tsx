import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from 'theme/newTheme';
import Header from './Header';

export default {
  title: 'Budget-Control/Header',
  component: Header,
};

const Template = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Header/>
    </CssBaseline>
  </ThemeProvider>
);

export const Main = Template.bind({});
