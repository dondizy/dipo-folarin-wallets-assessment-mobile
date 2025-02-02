import { SortByDatePipe } from './../../pipes/sort-by-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';
import { TransactionDatePipe } from 'src/app/pipes/transaction-date.pipe';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
