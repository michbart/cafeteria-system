import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealPageComponent } from './meal-page/meal-page.component';

const routes: Routes = [
  {
    path: '',
    component: MealPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MealsRoutingModule { }
