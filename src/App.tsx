import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BudgetContext } from 'contexts/BudgetContext';
import Main from 'pages/Main';
import theme from 'theme/theme';

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BudgetContext>
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
        </BudgetContext>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
