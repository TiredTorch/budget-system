import {User} from 'firebase/auth';
import {FC} from 'react';

export type ISpend = {
  spendItem: string,
  spendCost: number
}

export type IDeleteSpendManager = {
  spend: ISpend,
  deleteSpend: () => void
}

export type IRoute = {
  path: string;
  page: FC;
  auth: boolean;
}

export type IBudgetContextProps = {
  user : User | undefined,
  spends : Array<ISpend> | undefined,
}

export type IAppRoutesProps = {
  routes : Array<IRoute>
}

export type IHomePageProps = {
  budgetState: IBudgetContextProps | null
  logOut: () => void
  addSpend: (values: any) => Promise<void>
  deleteSpend: (spend: ISpend) => Promise<void>
  spendManager: {
    spends: ISpend[]
    setSpends: React.Dispatch<React.SetStateAction<ISpend[]>>
  }

}
