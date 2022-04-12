import {auth, db} from 'firebaseAPI/firebase';
import {Home} from 'components/home/Home/Home';
import {getBudgetState} from 'contexts/BudgetContext';
import {signOut} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {ISpend} from 'types/types';

export const HomePage = () => {
  const budgetState = getBudgetState();

  const [spends, setSpends] = useState(
      budgetState?.spends??[],
  );
  useEffect(() => {
    setSpends(budgetState?.spends??[]);
  }, [budgetState?.spends]);

  const navigate = useNavigate();

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
