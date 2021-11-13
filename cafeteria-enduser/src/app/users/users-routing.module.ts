import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RoleGuard } from '../auth/role.guard';
import { ROLES } from '../auth/roles';
import { ResourceResolver } from '../shared/resources/resource-resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [RoleGuard],
    component: UserListComponent,
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
  {
    path: ':id/detail',
    resolve: { user: ResourceResolver },
    canActivate: [RoleGuard],
    component: UserDetailComponent,
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
  {
    path: ':id/edit',
    resolve: { user: ResourceResolver },
    canActivate: [RoleGuard],
    component: UserFormComponent,
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
  {
    path: ':id/delete',
    resolve: { user: ResourceResolver },
    canActivate: [RoleGuard],
    component: UserFormComponent,
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
  {
    path: 'create',
    canActivate: [RoleGuard],
    component: UserFormComponent, // TODO FIXME show dialog
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UsersRoutingModule { }
