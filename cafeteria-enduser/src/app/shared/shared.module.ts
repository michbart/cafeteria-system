import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ResourceLinkComponent } from './resource-link/resource-link.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { DetailListItemComponent } from './detail-list-item/detail-list-item.component';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceDeleteDialogComponent } from './resource-delete-dialog/resource-delete-dialog.component';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { LocaleSelectorComponent } from './locale-selector/locale-selector.component';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    ContentWrapperComponent,
    ResourceLinkComponent,
    SearchFieldComponent,
    DetailListItemComponent,
    ResourceTableComponent,
    ResourceDeleteDialogComponent,
    NavigationToolbarComponent,
    LocaleSelectorComponent,
  ],
  exports: [
    ContentWrapperComponent,
    ResourceLinkComponent,
    SearchFieldComponent,
    DetailListItemComponent,
    ResourceTableComponent,
    ResourceDeleteDialogComponent,
    NavigationToolbarComponent,
    LocaleSelectorComponent,
  ],
})
export class SharedModule {}
