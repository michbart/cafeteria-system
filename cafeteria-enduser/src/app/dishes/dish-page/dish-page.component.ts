import { Component } from '@angular/core';
import { DISHES } from '../dishes-mock';

@Component({
  selector: 'cafeteria-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.scss'],
})
export class DishPageComponent {
  public allDishes = this.groupByDate();

  private groupByDate(): object {
    return DISHES.reduce((dishes, dish) => {
          dishes[dish.date] = dishes[dish.date] || [];
          dishes[dish.date].push(dish);
          return dishes;
        }, Object.create(null));
  }
}
