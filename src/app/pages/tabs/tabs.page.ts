import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/users/user.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user: User;
  role: string;

  constructor() {

  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
    this.role = this.user.role.name;
    console.log(this.role);
  }
}
