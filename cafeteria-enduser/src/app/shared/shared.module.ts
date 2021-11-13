import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    ContentWrapperComponent,
  ],
  exports: [
    ContentWrapperComponent,
  ],
})
export class SharedModule {}
