
import { AccountActions, AccountActionTypes } from './account.actions';

export const accountFeatureKey = 'account';

export interface State {
  name: string;
  transactions: any;
}

export const initialState: State = {} as State;

export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {

    case AccountActionTypes.LoadAccounts:
      console.log('accounts loaded');
      return state;

    default:
      return state;
  }
}
