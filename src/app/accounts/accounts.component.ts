import { Component, OnInit } from '@angular/core';
import { State } from './account.reducer';
import { Store } from '@ngrx/store';
import { LoadAccounts } from './account.actions';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // console.log('testtest');
    this.store.dispatch(new LoadAccounts());
  }

}
