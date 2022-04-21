import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../core/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private httpService: HttpService) { }

  login(username: string, password: string): Observable<any> {
    return this.httpService.post('auth/authenticate', { token: btoa(JSON.stringify({ username, password })) });
  }

  verify(userId: string, token: string): Observable<any> {
    return this.httpService.post('auth/verify', { userId, token });
  }

  logout(userId: string, token: string): Observable<any> {
    return this.httpService.post('auth/logout', { userId, token });
  }

  create(path: string, data: any): Observable<any> {
    return this.httpService.post(path, data);
  }

  read(path: string): Observable<any> {
    return this.httpService.get(path);
  }

  query(path: string, params: any): Observable<any> {
    return this.httpService.get(path, { params });
  }

  patch(path: string, data: any): Observable<any> {
    return this.httpService.patch(path, data);
  }

  delete(path: string): Observable<any> {
    return this.httpService.delete(path);
  }

}
