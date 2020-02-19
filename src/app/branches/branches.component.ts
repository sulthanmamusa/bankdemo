import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllBranches } from './state/branches.action';
import { AppState } from '../app.state';
import { BranchesState } from './state/branches.state';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {

  constructor(private store: Store<BranchesState>) { }

  ngOnInit() {
    console.log('Got it');
    this.store.dispatch(new GetAllBranches(null));
  }

}
