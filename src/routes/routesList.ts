import {Main} from 'components/common/Main/Main';
import {Login} from 'components/forms/Login/Login';
import {Logup} from 'components/forms/Logup/Logup';
import {IRoute} from 'types/types';

export const routes: Array<IRoute> = [
  {
    path: '/login',
    component: Login,
    auth: false,
  },
  {
    path: '/register',
    component: Logup,
    auth: false,
  },
  {
    path: '/main',
    component: Main,
    auth: false,
  },
];
