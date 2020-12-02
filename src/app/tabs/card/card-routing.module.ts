import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPage } from './card.page';

const routes: Routes = [
  {
    path: '',
    component: CardPage
  },
  {
    path: 'details',
    loadChildren: () => import('../../card-details/card-details.module').then(m => m.CardDetailsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('../../transactions/transactions.module').then(m => m.TransactionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardPageRoutingModule { }
