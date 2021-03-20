import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopPage } from './desktop.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopPage,
    children:
    [
      {
        path: '',
        loadChildren: () => import('../app-home/app-home.module').then( m => m.AppHomePageModule)
      },
      {
        path: 'deposit',
        loadChildren: () =>
          import('../deposit/deposit.module').then(
            (m) => m.DepositPageModule
          ),
      },
      {
        path: 'withdrawal',
        loadChildren: () =>
          import('../withdrawal/withdrawal.module').then(
            (m) => m.WithdrawalPageModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPageRoutingModule {}
