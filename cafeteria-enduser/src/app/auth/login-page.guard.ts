import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { SecurityProvider } from './security-provider';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {

  constructor(private router: Router, private securityProvider: SecurityProvider) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return from(this.securityProvider.isAuthenticated().then(response => {
      if (response.data.authenticated) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }));
  }

}
