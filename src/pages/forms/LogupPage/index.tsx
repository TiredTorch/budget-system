import {auth} from 'api/firebase';
import {Logup} from 'components/forms/Logup/Logup';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import React from 'react';
import {useNavigate} from 'react-router';

export const LogupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
      values: { password: string; confirmPassword: any; email: string; },
  ) => {
    try {
      if (values.password !== values.confirmPassword) {
        throw Error('Passwords does not match!');
      }
      await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password,
      ).then(() => {
        navigate('/main');
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Logup onSubmit={handleSubmit}/>
  );
};
