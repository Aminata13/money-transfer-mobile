import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/modules/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsError: boolean = false;
  loginForm = this.fb.group({
    phoneNumber: [null, [Validators.required, Validators.pattern('^(33|7[05-8])[0-9]{7}$')]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });
  submitted = false;

  constructor(
    private fb: FormBuilder, private authSrv: AuthService, private router:Router, private userService: UserService
  ) { }

  ngOnInit() {}

  get phoneNumber() { return this.loginForm.get('phoneNumber'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    let credentials = this.loginForm.value;

    if (credentials.phoneNumber && credentials.password) {

      this.authSrv.login(credentials)
          .subscribe(
              () => {
                this.router.navigateByUrl('/tabs/home');
              },
              (error: any) => {
                if (error.error.code === 401) {
                  this.credentialsError = true;

                  this.loginForm.controls['phoneNumber'].setErrors({invalid: true});
                  this.loginForm.controls['password'].setErrors({invalid: true});
                }
              }
          );
    }
  }

}
