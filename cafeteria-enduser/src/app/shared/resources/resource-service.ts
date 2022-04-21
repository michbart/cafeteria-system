import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from './resource';
import { ClientService } from '../client-service';

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T extends Resource> {

  private endpoint: string;

  constructor(protected clientService: ClientService) { }

  set endpointName(endpoint: string) {
    this.endpoint = endpoint;
  }

  createObject(data: any): Observable<T> {
    return this.clientService.create(this.endpoint, data);
  }

  editObject(id: string, data: any): Observable<T> {
    return this.clientService.patch(`${this.endpoint}/${encodeURIComponent(id)}`, data);
  }

  readObject(id: string): Observable<T> {
    return this.clientService.read(`${this.endpoint}/${encodeURIComponent(id)}`);
  }

  listObjects(params?: any): Observable<any> {
    return this.clientService.query(this.endpoint, params);
  }

  deleteObject(id: string): Observable<T> {
    return this.clientService.delete(`${this.endpoint}/${encodeURIComponent(id)}`);
  }
}
