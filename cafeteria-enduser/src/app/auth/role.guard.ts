import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { AccessChecker } from './access-checker';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanLoad {

  constructor(private accessChecker: AccessChecker) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.hasRole(route);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.hasRole(route);
  }

  hasRole(route: Route | ActivatedRouteSnapshot) {
    if (this.accessChecker.hasRole(route.data.roles || [])) {
      return of(true);
    }
    // TODO show 403 page
    return of(false);
  }

}
