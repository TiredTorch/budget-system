import {auth} from 'firebaseAPI/firebase';
import {Login} from 'components/forms/Login/Login';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React from 'react';
import {useNavigate} from 'react-router';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string; }) => {
    try {
      if (!values.email || !values.password) {
        throw Error('Fields have to be filled!');
      }

      const data = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password,
      );
      if (data) {
        navigate('/main');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Login onSubmit={handleSubmit}/>
  );
};
