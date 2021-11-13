import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanLoad {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.hasRole();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.hasRole();
  }

  hasRole() {
    // TODO handle authentication check
    return of(true);
  }

}
