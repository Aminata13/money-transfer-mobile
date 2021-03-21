import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { User } from './modules/users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  hide = false;
  user: User;
  role: string;
  adminAppPages = [
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
  agentAppPages = [
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
      title: 'Frais',
      url: '/tabs/fees',
      icon: 'calculator'
    }
  ];
  constructor(private authSrv: AuthService) {}

  logout() {
    this.hide = true
    this.authSrv.logout();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
    this.role = this.user.role.name;
  }
}
