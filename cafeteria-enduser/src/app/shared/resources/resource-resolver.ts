import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Resource } from './resource';
import { ResourceService } from './resource-service';

@Injectable({
  providedIn: 'root',
})
export class ResourceResolver<T extends Resource> implements Resolve<T> {

  constructor(private resourceService: ResourceService<T>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    this.resourceService.endpointName = route.routeConfig.resolve?.user ? 'users' : 'meals';
    return this.resourceService.readObject(decodeURIComponent(route.paramMap.get('id') || ''));
  }

}
