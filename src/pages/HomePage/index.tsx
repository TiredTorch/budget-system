import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { ISpend } from 'types/types';
import { auth, db } from 'firebaseAPI/firebase';
import { getBudgetState } from 'contexts/BudgetContext';
import Home from 'components/home/Home/Home';

const HomePage = () => {
  const budgetState = getBudgetState();

  const [spends, setSpends] = useState(
      budgetState?.spends??[],
  );
  useEffect(() => {
    setSpends(budgetState?.spends??[]);
  }, [budgetState?.spends]);

  const navigate = useNavigate();

  /**
   * Method to add user's spend
   * @param {ISpend} values Spends, that will be tried to add
   * to user's database
   * @return {Function} Method to add spend to user's database
   */
  const handleAddSpend = async (values: any) => {
    try {
      if (!values.spendItem || !values.spendCost) {
        alert('You have to fill empty inputs!');
        return;
      }

      const spendsRef = doc(db, 'spends', `${budgetState?.user?.uid}`);
      const newSpend = {
        spendItem: values.spendItem,
        spendCost: values.spendCost,
      };
      await setDoc(
          spendsRef,
          {spends: budgetState?.spends ?
            [...budgetState?.spends, newSpend] : [newSpend]},
          {merge: true},
      );
      values.spendItem = '';
      values.spendCost = '';
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Method to remove user's spend
   * @param {ISpend} spend Spends, that will be tried to remove
   * from user's database
   * @return {Function} Method to remove spend from user's database
   */
  const handleDeleteSpend = async (spend:ISpend) => {
    try {
      const spendsRef = doc(db, 'spends', `${budgetState?.user?.uid}`);

      await setDoc(
          spendsRef,
          {spends: spends.filter((curSpend) => curSpend !== spend)},
          {merge: true},
      );
      ;
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Method to log out of current account
   */
  const handleLogOut = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  return (
    <Home
      budgetState={budgetState}
      logOut={handleLogOut}
      addSpend={handleAddSpend}
      deleteSpend={handleDeleteSpend}
      spendManager={{spends: spends, setSpends: setSpends}}
    />
  );
};

export default HomePage;
