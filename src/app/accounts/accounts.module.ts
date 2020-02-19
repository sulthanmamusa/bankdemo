import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { StoreModule } from '@ngrx/store';
import * as fromAccount from './account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './account.effects';


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(fromAccount.accountFeatureKey, fromAccount.reducer),
    // EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountsModule { }
