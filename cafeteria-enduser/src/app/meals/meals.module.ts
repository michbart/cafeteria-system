import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealsRoutingModule } from './meals-routing.module';
import { MealPageComponent } from './meal-page/meal-page.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MealCardComponent,
        MealPageComponent,
        MealItemComponent,
    ],
    imports: [
        MaterialModule,
        MealsRoutingModule,
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        SharedModule,
    ],
    exports: [
        MealCardComponent,
        MealPageComponent,
        MealItemComponent,
    ],
})
export class MealsModule {}
