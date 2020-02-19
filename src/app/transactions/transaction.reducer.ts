import { Action, createReducer, on } from '@ngrx/store';
import * as TransactionActions from './transaction.actions';

export const transactionFeatureKey = 'transaction';

export interface State {

}

export const initialState: State = {

};

const transactionReducer = createReducer(
  initialState,

  on(TransactionActions.loadTransactions, state => state),
  on(TransactionActions.loadTransactionsSuccess, (state, action) => state),
  on(TransactionActions.loadTransactionsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return transactionReducer(state, action);
}
