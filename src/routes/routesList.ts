import {HomePage} from 'pages/common/HomePage';
import {LoginPage} from 'pages/forms/LoginPage';
import {LogupPage} from 'pages/forms/LogupPage';
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
    path: '/main',
    page: HomePage,
    auth: false,
  },
];
