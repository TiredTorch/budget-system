import {Firestore, getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {Auth, getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export let auth : Auth;
export let db : Firestore;

if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);

  auth = getAuth(app);
  db = getFirestore(app);
}

