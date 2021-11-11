import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishPageComponent } from './dish-page/dish-page.component';

const routes: Routes = [
  {
    path: '',
    component: DishPageComponent,
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
export class DishesRoutingModule { }
