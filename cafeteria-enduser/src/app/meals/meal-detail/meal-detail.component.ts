import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALERGENS } from '../alergens';
import { Meal } from '../meal';

@Component({
  selector: 'cafeteria-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: [],
})
export class MealDetailComponent implements OnInit {

  public meal: Meal;
  public alergens: any[];

  constructor(protected route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.meal = data.meal;
      this.alergens = ALERGENS.filter(alergen => this.meal.alergens?.includes(alergen.key)).sort((a, b) => a > b ? -1 : 1);
    });
  }
}
