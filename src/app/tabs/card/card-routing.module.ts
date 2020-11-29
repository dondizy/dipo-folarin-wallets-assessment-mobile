import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPage } from './card.page';

const routes: Routes = [
  {
    path: '',
    component: CardPage
  },
  {
    path: 'card-details',
    loadChildren: () => import('../../card-details/card-details.module').then( m => m.CardDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardPageRoutingModule {}
