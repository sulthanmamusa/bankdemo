import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as branchesStore from '../branches/state/branches.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  branchesState: branchesStore.reducers,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
