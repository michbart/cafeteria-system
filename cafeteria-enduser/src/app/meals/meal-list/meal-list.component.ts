import { Component } from '@angular/core';

@Component({
  selector: 'cafeteria-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: [],
})
export class MealListComponent {

  public displayedColumns = ['id', 'name', 'date', 'orders'];
  public columnLabels = ['ID', 'Name', 'Date', 'Orders'];

}
