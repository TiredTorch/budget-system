import {HomePage} from 'pages/common/HomePage';
import {LoginPage} from 'pages/LoginPage';
import {LogupPage} from 'pages/LogupPage';
import {IRoute} from 'types/types';

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
