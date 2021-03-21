import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommissionGuard implements CanActivate {
  user: User;
  constructor(public router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = localStorage.getItem('currentUser')!;
      this.user = JSON.parse(currentUser);

      if (this.user.role.name !== 'ADMIN') {
        this.router.navigate(['tabs/home']);
        return false;
      }
      return true;
  }

}
