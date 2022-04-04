import { Component, OnInit } from '@angular/core';
import { SecurityProvider } from 'src/app/auth/security-provider';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { Meal } from '../meal';

@Component({
  selector: 'cafeteria-meal-page',
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.scss'],
})
export class MealPageComponent implements OnInit {

  public allMeals: object;
  public displayButton: boolean;

  constructor(protected service: ResourceService<Meal>, private securityProvider: SecurityProvider) {
    service.endpointName = 'meals';
    this.securityProvider.isAuthenticated().then(response => this.displayButton = response.data.authenticated);
  }

  ngOnInit(): void {
    this.groupByDate();
  }

  private groupByDate(): object {
    return this.service.listObjects({ sortField: 'date', sortDirection: 'asc' }).subscribe(result =>
      this.allMeals = result.data.reduce((meals, meal) => {
          meals[meal.date] = meals[meal.date] || [];
          meals[meal.date].push(meal);
          return meals;
        }, Object.create(null)));
  }
}
