import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from 'firebaseAPI/firebase';
import Login from 'components/forms/Login/Login';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    console.log('g0ogle auth');
    try {
      const data = await signInWithPopup(
          auth,
          googleProvider,
      );
      if (data) {
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

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
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Login onSubmit={handleSubmit} googleAuth={handleGoogleAuth}/>
  );
};

export default LoginPage;
