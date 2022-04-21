import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { AccessChecker } from '../auth/access-checker';
import { SecurityProvider } from '../auth/security-provider';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {

  constructor(private accessChecker: AccessChecker, private securityProvider: SecurityProvider) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(this.hasRole(route) || this.isCurrentUser(route.params.id || ''));
  }

  isCurrentUser(id: string): boolean {
    return id === this.securityProvider.getContext().id;
  }

  hasRole(route: Route | ActivatedRouteSnapshot): boolean {
    if (this.accessChecker.hasRole(route.data.roles || [])) {
      return true;
    }
    // TODO show 403 page
    return false;
  }

}
