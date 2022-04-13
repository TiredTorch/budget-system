import {lazy} from 'react';
import {IRoute} from 'types/types';

const LoginPage = lazy(() =>
  import('pages/LoginPage').then((module) => ({default: module.LoginPage})),
);
const LogupPage = lazy(() =>
  import('pages/LogupPage').then((module) => ({default: module.LogupPage})),
);
const HomePage = lazy(() =>
  import('pages/HomePage').then((module) => ({default: module.HomePage})),
);

export const routes: Array<IRoute> = [
  {
    path: '/login',
    page: LoginPage,
    auth: false,
  },
  {
    path: '/register',
    page: LogupPage,
    auth: false,
  },
  {
    path: '/',
    page: HomePage,
    auth: true,
  },
];
