import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/branches.reducer';


@NgModule({
  declarations: [BranchesComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    StoreModule.forFeature('branches',reducers)
  ]
})
export class BranchesModule { }
