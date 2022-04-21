import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MealsModule } from '../meals/meals.module';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MealsModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
  ],
  exports: [
    MainLayoutComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
