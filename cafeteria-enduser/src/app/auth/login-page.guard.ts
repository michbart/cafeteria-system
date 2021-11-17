import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SecurityProvider } from './security-provider';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {

  constructor(private router: Router, private securityProvider: SecurityProvider) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.securityProvider.isAuthenticated()) {
      this.router.navigate(['/']);
      return of(false);
    }
    return of(true);
  }

}
