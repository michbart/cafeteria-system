import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../core/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private BASE_URL: string;



  constructor(private httpService: HttpService) {
    this.BASE_URL = 'http://localhost:3000/api/v1/';
  }

  login(username: string, password: string): Observable<any> {
    return this.httpService.post('login', { username, password });
  }

  logout(): Observable<any> {
    return of(null);
  }

  create(path: string, data: any): Observable<any> {
    return this.httpService.post(path, data);
  }

  read(path: string): Observable<any> {
    return this.httpService.get(path);
  }

  query(path: string, params: any): Observable<any> {
    return this.httpService.get(path, { params: params });
  }

  patch(path: string, data: any): Observable<any> {
    return this.httpService.get(path, data);
  }

  delete(path: string): Observable<any> {
    return this.httpService.delete(path);
  }

}
