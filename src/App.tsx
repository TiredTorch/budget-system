import {CssBaseline} from '@mui/material';
import {Main} from 'components/common/Main/Main';
// import {Login} from 'components/forms/Login/Login';
import {Layout} from 'layouts/Layout';
import React from 'react';

export const App = () => {
  return (
    <CssBaseline>
      <Layout>
        <Main/>
      </Layout>
    </CssBaseline>
  );
};

