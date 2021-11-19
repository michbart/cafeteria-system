import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'cafeteria-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {

  @Input() public meal!: Meal;

}
