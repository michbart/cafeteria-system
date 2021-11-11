import { Component, Input } from '@angular/core';
import { Dish } from '../dish';

@Component({
  selector: 'cafeteria-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent {

  @Input() dishes!: Dish[];
  @Input() date!: string;

}
