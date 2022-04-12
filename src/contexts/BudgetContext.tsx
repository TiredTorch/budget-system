import {
  createContext,
  useEffect,
  useState,
  FC,
  useContext,
  ReactNode,
} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {doc, onSnapshot} from 'firebase/firestore';
import {IBudgetContextProps, ISpend} from 'types/types';
import {auth, db} from 'api/firebase';

const Budget = createContext<IBudgetContextProps | null>(null);

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

export const getBudgetState = () => {
  return useContext(Budget);
};
