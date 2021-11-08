import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DishCardComponent } from "./dish-card/dish-card.component";
import { DishPageComponent } from './dish-page/dish-page.component';

const routes: Routes = [
  {
    path: '',
    component: DishPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DishesRoutingModule { }