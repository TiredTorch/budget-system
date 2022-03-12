import {Layout} from 'layouts/Layout';
import React from 'react';
import {Route, Routes} from 'react-router';
import {routes} from './routesList';

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.auth) return;

        return (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={
              <Layout>
                <route.component/>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};
