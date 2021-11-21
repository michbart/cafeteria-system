import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    OrderListComponent,
  ],
  imports: [
      MaterialModule,
      RouterModule,
      CommonModule,
      FlexLayoutModule,
      SharedModule,
  ],
  exports: [
    OrderListComponent,
  ],
})
export class MealsModule {}
