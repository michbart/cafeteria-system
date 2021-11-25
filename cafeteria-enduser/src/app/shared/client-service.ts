import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private BASE_URL: string;

  constructor(private httpClient: HttpClient) {
    this.BASE_URL = 'changeme';
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/login`);
  }

  logout(): Observable<any> {
    return of(null);
  }

  create(path: string, data: any): Observable<any> {
    return this.httpClient.post(this.BASE_URL + path, data);
  }

  read(path: string): Observable<any> {
    return this.httpClient.get(this.BASE_URL + path);
  }

  query(path: string, params: any): Observable<any> {
    return this.httpClient.post(this.BASE_URL + path, params);
  }

  patch(path: string, data: any): Observable<any> {
    return this.httpClient.get(this.BASE_URL + path, data);
  }

  delete(path: string): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + path);
  }

}
