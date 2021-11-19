import { Component } from '@angular/core';
import { MEALS } from '../meals-mock';

@Component({
  selector: 'cafeteria-meal-page',
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.scss'],
})
export class MealPageComponent {
  public allMeals = this.groupByDate();

  private groupByDate(): object {
    return MEALS.reduce((meals, meal) => {
          meals[meal.date] = meals[meal.date] || [];
          meals[meal.date].push(meal);
          return meals;
        }, Object.create(null));
  }
}
