import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { TransactionDatePipe } from '../pipes/transaction-date.pipe';
import { GroupByPipe } from '../pipes/group-by-date.pipe';
import { SortByDatePipe } from './../pipes/sort-by-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule
  ],
  declarations: [TransactionsPage, TransactionDatePipe, GroupByPipe, SortByDatePipe]
})
export class TransactionsPageModule {}
