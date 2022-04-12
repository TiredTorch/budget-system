import {FC} from 'react';
import {Route, Routes} from 'react-router';
import {Layout} from 'layouts/Layout';
import {IAppRoutesProps} from 'types/types';

export const AppRoutes : FC<IAppRoutesProps> = ({routes}) => {
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
                <route.page/>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};
