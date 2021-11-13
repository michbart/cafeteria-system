import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { DishCardComponent } from './dish-card/dish-card.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishPageComponent } from './dish-page/dish-page.component';
import { DishItemComponent } from './dish-item/dish-item.component';
import { SharedModule } from '../shared/shared.module';

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
        CommonModule,
        FlexLayoutModule,
        SharedModule,
    ],
    exports: [
        DishCardComponent,
        DishPageComponent,
        DishItemComponent,
    ],
})
export class DishesModule {}
