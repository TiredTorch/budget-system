import {auth, db} from 'api/firebase';
import {onAuthStateChanged, User} from 'firebase/auth';
import {doc, onSnapshot} from 'firebase/firestore';
import React, {createContext, useEffect, useState, FC, useContext} from 'react';
import {IBudgetContextProps, ISpends} from 'types/types';

const Budget = createContext<Partial<IBudgetContextProps>>({});

export const BudgetContext = ({children} : {children : FC}) => {
  const [user, setUser] = useState<User>();
  const [spends, setSpends] = useState<Array<ISpends>>();

  useEffect(() => {
    if (user) {
      const spendsRef = doc(db, 'spends', user.uid);

      const unsubscribe = onSnapshot(spendsRef, (spend) => {
        if (spend.exists()) {
          setSpends(spend.data().spends);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (curUser) => {
      setUser(curUser ?? undefined);
    });
  }, []);

  return (
    <Budget.Provider
      value={{
        user: user,
        spends: spends,
      }}
    >
      {children}
    </Budget.Provider>
  );
};

export const BudgetState = () => {
  return useContext(Budget);
};
