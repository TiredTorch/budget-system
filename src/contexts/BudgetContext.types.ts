import {User} from 'firebase/auth';
import {ISpend} from 'types/types';

export type BudgetContextProps = {
  user : User | undefined,
  spends : Array<ISpend> | undefined,
}
