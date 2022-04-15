import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from 'firebaseAPI/firebase';
import Logup from 'components/forms/Logup/Logup';

const LogupPage = () => {
  const navigate = useNavigate();

  /**
   * Method to log up via email and password
   * @param {Object} values Object with email and password of user
   */
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
export default LogupPage;
