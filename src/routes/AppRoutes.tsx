import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { IAppRoutesProps } from 'types/types';
import { getBudgetState } from 'contexts/BudgetContext';
import Layout from 'layouts/Layout';
import Redirect from 'pages/Redirect/Redirect';

const AppRoutes : FC<IAppRoutesProps> = ({routes}) => {
  const budgetState = getBudgetState();

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        {routes.map((route) => {
          if (!!route.auth !== !!budgetState?.user) {
            return (
              <Route
                path={route.path}
                key={`route ${route.path}`}
                element={
                  <Redirect/>
                }
              />
            );
          };

          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={
                <Layout>
                  <route.page/>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
