import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router';
import {auth} from 'firebaseAPI/firebase';
import {Logup} from 'components/forms/Logup/Logup';

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
        navigate('/');
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Logup onSubmit={handleSubmit}/>
  );
};
