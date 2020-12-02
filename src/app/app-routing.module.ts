import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'card-details',
    loadChildren: () => import('./pages/card-details/card-details.module').then( m => m.CardDetailsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/transactions/transactions.module').then( m => m.TransactionsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
