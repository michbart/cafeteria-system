import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SecurityProvider } from './security-provider';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private securityProvider: SecurityProvider) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isAuthenticated();
  }

  isAuthenticated(): Observable<boolean> {
    if (this.securityProvider.isAuthenticated()) {
      return of(true);
    }
    this.router.navigate(['/login']);
    return of(false);
  }

}
