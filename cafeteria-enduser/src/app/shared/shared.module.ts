import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ResourceLinkComponent } from './resource-link/resource-link.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailListItemComponent } from './detail-list-item/detail-list-item.component';

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
    DetailListItemComponent,
  ],
  exports: [
    ContentWrapperComponent,
    ResourceLinkComponent,
    SearchFieldComponent,
    DetailListItemComponent,
  ],
})
export class SharedModule {}
