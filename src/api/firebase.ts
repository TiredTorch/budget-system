import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1xGVDso6iYJIcyCVjnOsLX8U0No5dliU',
  authDomain: 'budget-control-508a0.firebaseapp.com',
  projectId: 'budget-control-508a0',
  storageBucket: 'budget-control-508a0.appspot.com',
  messagingSenderId: '409444570200',
  appId: '1:409444570200:web:61f41861e254c78155a62d',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
