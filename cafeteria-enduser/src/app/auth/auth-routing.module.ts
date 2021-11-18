import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { UserFormComponent } from '../users/user-form/user-form.component';
import { LoginPageGuard } from './login-page.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    canActivate: [LoginPageGuard],
    component: UserFormComponent,
    data: {
      action: 'register',
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
export class AuthRoutingModule { }
