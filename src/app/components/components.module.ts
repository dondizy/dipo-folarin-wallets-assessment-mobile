import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDatePipe } from './../pipes/transaction-date.pipe';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [TransactionComponent]
})
export class ComponentsModule { }
