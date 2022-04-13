import { routes } from 'routes/routesList';
import AppRoutes from 'routes/AppRoutes';

const Main = () => {
  return (
    <AppRoutes routes={routes}/>
  );
};

export default Main;
