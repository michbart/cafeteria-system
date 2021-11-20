import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import _ from 'lodash';
import { User } from '../users/user';
import { USERS } from '../users/users-mock';
import { Meal } from '../meals/meal';
import { MEALS } from '../meals/meals-mock';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceMock {

  private BASE_URL: string;
  private users: User[];
  private meals: Meal[];

  constructor(private httpClient: HttpClient) {
    this.BASE_URL = 'changeme';
    this.users = USERS;
    this.meals = MEALS;
  }

  login(username: string, password: string): Observable<any> {
    return of(this.users.find(user => user.username === username && user.password === password) || null);
  }

  logout(): Observable<any> {
    return of(null);
  }

  create(path: string, data: any): Observable<any> {
    if (path === 'users') {
      this.users.push(data);
      return of(data);
    }
    if (path === 'meals') {
      this.meals.push(data);
      return of(data);
    }
    return of(null);
  }

  read(path: string): Observable<any> {
    const parts = path.split('/');
    if (parts[0] === 'users') {
      return of(this.users.find(user => user.id === parts[1])) || of(null);
    }
    if (parts[0] === 'meals') {
      return of(this.meals.find(meal => meal.id === parts[1])) || of(null);
    }
    return of(null);
  }

  query(path: string, params: any): Observable<any> {
    const parts = path.split('/');
    if (parts[0] === 'users') {
      return of(this.queryData(this.users, params));
    }
    if (parts[0] === 'meals') {
      return of(this.queryData(this.meals, params));
    }
    return of(null);
  }

  patch(path: string, data: any): Observable<any> {
    return this.httpClient.patch(this.BASE_URL + path, data);
  }

  delete(path: string): Observable<any> {
    const parts = path.split('/');
    if (parts[0] === 'users') {
      this.users = this.users.filter(user => user.id !== parts[1]);
    }
    if (parts[0] === 'meals') {
      this.meals = this.meals.filter(meal => meal.id !== parts[1]);
    }
    return of(null);
  }

  private queryData(collection, params: any) {
    let data = collection;
    if (params.searchValue) {
      data = data.filter(el => {
        const value = params.searchValue.toLowerCase();
        return el.username.toLowerCase().includes(value) ||
            el.givenName.toLowerCase().includes(value) ||
            el.surname.toLowerCase().includes(value);
      });
    }
    data = _.orderBy(data, [params.sortField], [params.sortDirection]);
    return data;
  }

}
