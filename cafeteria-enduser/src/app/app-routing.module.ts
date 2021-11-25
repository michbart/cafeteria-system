import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageGuard } from './auth/login-page.guard';
import { RoleGuard } from './auth/role.guard';
import { ROLES } from './auth/roles';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginPageGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    data: {
      roles: [ROLES.USER_ADMIN],
    },
  },
  {
    path: 'meals',
    canActivate: [AuthGuard, RoleGuard],
    canLoad: [AuthGuard, RoleGuard],
    loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule),
    data: {
      roles: [ROLES.COOK, ROLES.USER_ADMIN], // imho admin by mel mit taky pristup
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload',
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
