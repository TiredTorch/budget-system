import {CssBaseline} from '@mui/material';
import {Login} from 'components/forms/Login/Login';
import {Layout} from 'layouts/Layout';
import React from 'react';

export const App = () => {
  return (
    <CssBaseline>
      <Layout>
        <Login/>
      </Layout>
    </CssBaseline>
  );
};

