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
import { MealFormComponent } from './meal-form/meal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MealCardComponent,
        MealPageComponent,
        MealItemComponent,
        MealListComponent,
        MealDetailComponent,
        MealFormComponent,
    ],
    imports: [
        MaterialModule,
        MealsRoutingModule,
        RouterModule,
        CommonModule,
        FlexLayoutModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [
        MealCardComponent,
        MealPageComponent,
        MealItemComponent,
        MealListComponent,
        MealDetailComponent,
        MealFormComponent,
    ],
})
export class MealsModule {}
