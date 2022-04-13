import { lazy } from 'react';
import { IRoute } from 'types/types';

const LoginPage = lazy(() => import('pages/LoginPage'));
const LogupPage = lazy(() => import('pages/LogupPage'));
const HomePage = lazy(() => import('pages/HomePage'));

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
