import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BudgetContext } from 'contexts/BudgetContext';
import Main from 'pages/Main';
import theme from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BudgetContext>
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
        </BudgetContext>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
