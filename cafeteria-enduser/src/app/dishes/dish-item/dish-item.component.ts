import { Component, Input } from "@angular/core";
import { Dish } from '../dish';

@Component({
  selector: 'cafeteria-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss'],
})
export class DishItemComponent {

  @Input() public dish!: Dish;

}
