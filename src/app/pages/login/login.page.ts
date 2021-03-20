import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // login: UserOptions = { username: '', password: '' };
  login: {username: string, password: string} = {username:'', password:''};
  submitted = false;

  constructor(
    // public userData: UserData,
    public router: Router
  ) { }

  ngOnInit() {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.userData.login(this.login.username);
      this.router.navigateByUrl('/tabs/home');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

}
