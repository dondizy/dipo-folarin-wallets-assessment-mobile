import { SortByDatePipe } from './../pipes/sort-by-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';
import { TransactionDatePipe } from 'src/app/pipes/transaction-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage, TransactionDatePipe, SortByDatePipe]
})
export class CardPageModule {}
