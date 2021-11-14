import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ResourceLinkComponent } from './resource-link/resource-link.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContentWrapperComponent,
    ResourceLinkComponent,
    SearchFieldComponent,
  ],
  exports: [
    ContentWrapperComponent,
    ResourceLinkComponent,
    SearchFieldComponent,
  ],
})
export class SharedModule {}
