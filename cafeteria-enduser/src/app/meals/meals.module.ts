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
import { MealListComponent } from './meal-list/meal-list.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';

@NgModule({
    declarations: [
        MealCardComponent,
        MealPageComponent,
        MealItemComponent,
        MealListComponent,
        MealDetailComponent,
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
        MealListComponent,
        MealDetailComponent,
    ],
})
export class MealsModule {}
