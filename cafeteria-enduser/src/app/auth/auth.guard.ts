import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

export class AuthGuard implements CanActivate, CanLoad {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isAuthenticated();
  }

  isAuthenticated() {
    // TODO handle authentication check
    return of(true);
  }

}
