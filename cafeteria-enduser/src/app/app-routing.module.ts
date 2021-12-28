import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageGuard } from './auth/login-page.guard';
import { RoleGuard } from './auth/role.guard';
import { ROLES } from './auth/roles';
import { AboutComponent } from './general/about/about.component';
import { ContactsComponent } from './general/contacts/contacts.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';

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
  {
    path: 'contacts',
    component: ContactsComponent,
    loadChildren: () => import('./general/general.module').then(m => m.GeneralModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () => import('./general/general.module').then(m => m.GeneralModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    loadChildren: () => import('./general/general.module').then(m => m.GeneralModule),
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
