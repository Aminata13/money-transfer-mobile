import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'desktop',
        loadChildren: () => import('../desktop/desktop.module').then( m => m.DesktopPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'commission',
        loadChildren: () => import('../commission/commission.module').then( m => m.CommissionPageModule)
      },
      {
        path: 'fees',
        loadChildren: () => import('../fees/fees.module').then( m => m.FeesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
