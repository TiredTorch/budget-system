import {User} from 'firebase/auth';
import {FC} from 'react';

export type ISpend = {
  spendItem: string,
  spendCost: number
}

export type IBudgetContextProps = {
  user : User | undefined,
  spends : Array<ISpend> | undefined,
}

export type IDeleteSpendManager = {
  spend: ISpend,
  deleteSpend: () => void
}

export type IRoute = {
  path: string;
  component: FC;
  auth: boolean;
}
