import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { StoreModule } from '@ngrx/store';
import * as fromTransaction from './transaction.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './transaction.effects';


@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    StoreModule.forFeature(fromTransaction.transactionFeatureKey, fromTransaction.reducer),
    // EffectsModule.forFeature([TransactionEffects])
  ]
})
export class TransactionsModule { }
