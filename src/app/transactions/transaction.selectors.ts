import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransaction from './transaction.reducer';

export const selectTransactionState = createFeatureSelector<fromTransaction.State>(
  fromTransaction.transactionFeatureKey
);
