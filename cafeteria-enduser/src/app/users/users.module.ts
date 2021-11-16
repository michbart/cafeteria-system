import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MaterialModule } from '../material.module';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
  ],
  imports: [
      MaterialModule,
      UsersRoutingModule,
      RouterModule,
      CommonModule,
      FlexLayoutModule,
      SharedModule,
      ReactiveFormsModule,
  ],
})
export class UsersModule {}
