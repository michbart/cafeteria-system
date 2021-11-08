import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'cafeteria-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DishCardComponent {

  @Input() dishes!: Dish[];
  @Input() title!: string;

}
