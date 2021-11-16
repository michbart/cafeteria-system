import { Observable, of } from 'rxjs';
import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { USERS } from 'src/app/users/users-mock';

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T extends Resource> {

  constructor() {}

  createObject(data: any): Observable<any> {
    return of(null);
  }

  editObject(data: any): Observable<any> {
    return of(null);
  }

  readObject(id: string): Observable<any> {
    return of(USERS.find(user => user.id === id)) || of(null);
  }

  listObjects(params?: any): Observable<any> {
    return of(USERS);
  }

  deleteObject(id: string): Observable<any> {
    return of(null);
  }
}
