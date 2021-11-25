import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { User } from '../users/user';
import { USERS } from '../users/users-mock';
import { Meal } from '../meals/meal';
import { MEALS } from '../meals/meals-mock';
import { Order } from '../orders/order';
import { ORDERS } from '../orders/orders-mock';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceMock {

  private users: User[];
  private meals: Meal[];
  private orders: Order[];

  constructor() {
    this.users = USERS;
    this.meals = MEALS;
    this.orders = ORDERS;
  }

  login(username: string, password: string): Observable<any> {
    return of(this.users.find(user => user.username === username && user.password === password) || null);
  }

  logout(): Observable<any> {
    return of(null);
  }

  create(path: string, data: any): Observable<any> {
    if (path === 'users') {
      const user = {
        id: uuid(),
        username: data.surname.toLowerCase(),
        ...data,
      };
      this.users.push(user);
      return of(user);
    }
    if (path === 'meals') {
      const meal = { id: uuid(), ...data };
      this.meals.push(meal);
      return of(meal);
    }
    if (path === 'orders') {
      const order = { id: uuid(), ...data };
      this.orders.push(order);
      return of(order);
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
    if (parts[0] === 'orders') {
      return of(this.orders.find(order => order.id === parts[1])) || of(null);
    }
    return of(null);
  }

  query(path: string, params: any): Observable<any> {
    const parts = path.split('/');
    if (parts[0] === 'users') {
      return of(this.queryData(this.users, params));
    }
    if (parts[0] === 'meals') {
      const result = this.queryData(this.meals, params);
      if (params?.showOrders) {
        result.forEach((meal, index, res) => res[index] = {
              ...meal,
              orders: this.orders.filter(order => order.mealId === meal.id).length || '0',
            });
      }
      return of(result);
    }
    if (parts[0] === 'orders') {
      const userOrders = [];
      this.orders.filter(order => order.userId === params.id).forEach(order =>
        userOrders.push(this.meals.find(meal => meal.id === order.id)));
      return of(this.queryData(userOrders, params));
    }
    return of(null);
  }

  patch(path: string, data: any): Observable<any> {
    return of(data);
  }

  delete(path: string): Observable<any> {
    const parts = path.split('/');
    if (parts[0] === 'users') {
      this.users = this.users.filter(user => user.id !== parts[1]);
    }
    if (parts[0] === 'meals') {
      this.meals = this.meals.filter(meal => meal.id !== parts[1]);
    }
    if (parts[0] === 'orders') {
      this.orders = this.orders.filter(order => order.id !== parts[1]);
    }
    return of(null);
  }

  private queryData(collection, params: any) {
    let data = collection;
    if (params?.searchValue) {
      data = data.filter(el => {
        const value = params.searchValue.toLowerCase();
        return el.username.toLowerCase().includes(value) ||
            el.givenName.toLowerCase().includes(value) ||
            el.surname.toLowerCase().includes(value);
      });
    }
    if (params?.sortField && params?.sortDirection) {
      data = _.orderBy(data, [params.sortField], [params.sortDirection]);
    }
    return data;
  }

}
