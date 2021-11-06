import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T extends Resource> {

  constructor(protected resourceType: string) {}

  createObject(data: any): Observable<any> {
    return of(null);
  }

  readObject(id: string): Observable<any> {
    return of(null);
  }

  listObjects(): Observable<any> {
    return of(null);
  }

  deleteObject(id: string): Observable<any> {
    return of(null);
  }
}
