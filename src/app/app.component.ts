import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Accueil',
      url: '/tabs/desktop',
      icon: 'home'
    },
    {
      title: 'Transactions',
      url: '/tabs/history',
      icon: 'time'
    },
    {
      title: 'Commissions',
      url: '/tabs/commission',
      icon: 'reorder-four'
    },
    {
      title: 'Frais',
      url: '/tabs/fees',
      icon: 'calculator'
    }
  ];
  constructor() {}
}
