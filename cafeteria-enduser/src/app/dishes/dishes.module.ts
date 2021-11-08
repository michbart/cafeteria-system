import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DishCardComponent } from './dish-card/dish-card.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishPageComponent } from './dish-page/dish-page.component';
import { RouterModule } from '@angular/router';
import { DishItemComponent } from './dish-item/dish-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DishCardComponent,
        DishPageComponent,
        DishItemComponent,
    ],
    imports: [
        MaterialModule,
        DishesRoutingModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        DishCardComponent,
        DishPageComponent,
        DishItemComponent,
    ],
})
export class DishesModule {}
