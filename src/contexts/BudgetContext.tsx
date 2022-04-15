import {
  createContext,
  useEffect,
  useState,
  FC,
  useContext,
  ReactNode,
} from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { IBudgetContextProps, ISpend } from 'types/types';
import { auth, db } from 'firebaseAPI/firebase';

const Budget = createContext<IBudgetContextProps | null>(null);

/**
 * Context to manage user's personal data and spends info.
 * @param {React.ReactNode} children Context consumers
 * @return {React.ReactNode} Context with user's budget data
 */
export const BudgetContext : FC<ReactNode> = ({children}) => {
  const [user, setUser] = useState<User>();
  const [spends, setSpends] = useState<Array<ISpend>>();

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

/**
 * Budget data getter
 * @return {Function} Budget data
 */
export const getBudgetState = () => {
  return useContext(Budget);
};
