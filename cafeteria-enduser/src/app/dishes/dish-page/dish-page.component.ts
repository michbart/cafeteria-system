import { Component } from "@angular/core";
import { DISHES } from '../dishes-mock';

@Component({
  selector: 'cafeteria-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.scss'],
})
export class DishPageComponent {

  public allDishes = this.groupDishes();

  // prasarna
  groupDishes(): object {
    return DISHES.reduce((r, a) => {
      r[a.date] = r[a.date] || [];
      r[a.date].push(a);
      return r;
    }, Object.create(null));
  }

}
