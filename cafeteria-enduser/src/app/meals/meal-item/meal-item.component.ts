import { Component, Input } from '@angular/core';
import { SecurityProvider } from 'src/app/auth/security-provider';
import { Meal } from '../meal';

@Component({
  selector: 'cafeteria-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {

  @Input() public meal!: Meal;

  constructor(private securityProvider: SecurityProvider) { }

  get displayButton() {
    return this.securityProvider.isAuthenticated();
  }

}
