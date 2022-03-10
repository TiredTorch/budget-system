import {User} from 'firebase/auth';

export type ISpends = {
  item: string,
  cost: number
}

export type IBudgetContextProps = {
  user : User,
  spends : Array<ISpends>
}
