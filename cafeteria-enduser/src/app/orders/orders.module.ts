import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
      MaterialModule,
      RouterModule,
      CommonModule,
      FlexLayoutModule,
      SharedModule,
  ],
  exports: [],
})
export class MealsModule {}
