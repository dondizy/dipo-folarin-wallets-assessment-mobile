import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from './group-by-date.pipe';
import { SortByDatePipe } from './sort-by-date.pipe';
import { TransactionDatePipe } from './transaction-date.pipe';



@NgModule({
  declarations: [GroupByPipe, SortByDatePipe, TransactionDatePipe],
  imports: [
    CommonModule
  ],
  exports: [GroupByPipe, SortByDatePipe, TransactionDatePipe]
})
export class PipesModule { }
