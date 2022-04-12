import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import {BudgetContext} from 'contexts/BudgetContext';
import {Main} from 'pages/common/Main';

export const App = () => {
  return (
    <CssBaseline>
      <BudgetContext>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </BudgetContext>
    </CssBaseline>
  );
};

