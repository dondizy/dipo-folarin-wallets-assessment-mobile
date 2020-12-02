import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsPageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('../card/card.module').then(m => m.CardPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/card',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tabs/card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
