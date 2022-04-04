import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot,
  Route, UrlSegment, Router, CanActivateChild } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SecurityProvider } from './security-provider';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private router: Router, private securityProvider: SecurityProvider) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
    return from(this.securityProvider.isAuthenticated().then(response => {
      if (response.data.authenticated) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }));
  }

}
