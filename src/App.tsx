import {CssBaseline} from '@mui/material';
import {BudgetContext} from 'contexts/BudgetContext';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AppRoutes} from 'routes/AppRoutes';

export const App = () => {
  return (
    <CssBaseline>
      <BudgetContext>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </BudgetContext>
    </CssBaseline>
  );
};

