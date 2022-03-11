import {User} from 'firebase/auth';

export type ISpend = {
  spendItem: string,
  spendCost: number
}

export type IBudgetContextProps = {
  user : User,
  spends : Array<ISpend>
}

export type IDeleteSpendManager = {
  spend: ISpend,
  deleteSpend: () => void
}
