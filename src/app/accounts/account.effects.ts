import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AccountActionTypes, AccountActions } from './account.actions';



@Injectable()
export class AccountEffects {


  @Effect()
  loadAccounts$ = this.actions$.pipe(
    ofType(AccountActionTypes.LoadAccounts),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<AccountActions>) {}

}
