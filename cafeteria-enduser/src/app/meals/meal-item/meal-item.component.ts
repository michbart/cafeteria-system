import { Component, Input, OnInit, Inject, LOCALE_ID } from '@angular/core';

import { Meal } from '../meal';
import { ALERGENS } from '../alergens';
import { getCurrentLocale } from '../../shared/get-locale';
import { SnackBar } from '../../shared/snack-bar';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cafeteria-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent implements OnInit {

  @Input() public meal!: Meal;
  @Input() public displayButton!: boolean;
  public alergens: any[];
  public currentLocale: string;
  public currency: string = environment.currency;

  constructor(
    private snackBar: SnackBar,
    @Inject(LOCALE_ID) private localeId: string,
  ) {
    this.currentLocale = getCurrentLocale(this.localeId);
  }

  ngOnInit(): void {
    this.alergens = ALERGENS.filter(alergen => this.meal.alergens?.includes(alergen.key)).sort((a, b) => a > b ? -1 : 1);
  }

  orderMeal(): void {
    this.snackBar.createMessage($localize `Meal has been ordered.`);
  }

}
