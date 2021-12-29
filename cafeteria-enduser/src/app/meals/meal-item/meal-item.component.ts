import { Component, Input, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { SecurityProvider } from 'src/app/auth/security-provider';
import { Meal } from '../meal';
import { ALERGENS } from '../alergens';
import { getCurrentLocale } from 'src/app/shared/get-locale';
import { SnackBar } from 'src/app/shared/snack-bar';

@Component({
  selector: 'cafeteria-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent implements OnInit {

  @Input() public meal!: Meal;
  public alergens: any[];
  public currentLocale: string;

  constructor(
    private securityProvider: SecurityProvider,
    private snackBar: SnackBar,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.currentLocale = getCurrentLocale(this.localeId);
  }

  ngOnInit(): void {
    this.alergens = ALERGENS.filter(alergen => this.meal.alergens?.includes(alergen.key)).sort((a, b) => a > b ? -1 : 1);
  }

  get displayButton() {
    return this.securityProvider.isAuthenticated();
  }

  orderMeal(): void {
    this.snackBar.createMessage($localize `Meal has been ordered.`);
  }

}
