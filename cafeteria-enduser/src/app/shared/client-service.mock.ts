import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../users/user';
import { USERS } from '../users/users-mock';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceMock {

  private BASE_URL: string;
  private users: User[];

  constructor(private httpClient: HttpClient) {
    this.BASE_URL = 'changeme';
    this.users = USERS;
  }

  login(username: string, password: string): Observable<any> {
    return of(this.users.find(user => user.username === username && user.password === password) || null);
  }

  logout(): Observable<any> {
    // TBD
    return of(null);
  }

  create(path: string, data: any): Observable<any> {
    return this.httpClient.post(this.BASE_URL + path, data);
  }

  read(path: string): Observable<any> {
    return this.httpClient.get(this.BASE_URL + path);
  }

  patch(path: string, data: any): Observable<any> {
    return this.httpClient.patch(this.BASE_URL + path, data);
  }

  delete(path: string, data: any): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + path, data);
  }

}
