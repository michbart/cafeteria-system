import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'cafeteria-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {

  @Input() meals!: Meal[];
  @Input() date!: string;
  @Input() displayButton!: boolean;

}
