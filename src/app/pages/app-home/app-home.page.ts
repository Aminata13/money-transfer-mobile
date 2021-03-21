import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.page.html',
  styleUrls: ['./app-home.page.scss'],
})
export class AppHomePage implements OnInit {
  user: any;
  constructor() { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
  }
}
