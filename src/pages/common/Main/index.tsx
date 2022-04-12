import {AppRoutes} from 'routes/AppRoutes';
import {routes} from 'routes/routesList';

export const Main = () => {
  return (
    <AppRoutes routes={routes}/>
  );
};
