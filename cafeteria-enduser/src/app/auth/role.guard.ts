import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

export class RoleGuard implements CanActivate, CanLoad {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

}
