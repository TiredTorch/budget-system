import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { IAppRoutesProps } from 'types/types';
import { getBudgetState } from 'contexts/BudgetContext';
import Layout from 'layouts/Layout';

/**
 * Amount of webside routes
 * @param {Object} routes Object with routes path, component and
 * users auth state, to have permission to component
 * @return {React.ReactNode} Component, Amount of webside routes
 */
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
                  <Navigate to={!!budgetState?.user ? '/' : '/login'} replace/>
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
