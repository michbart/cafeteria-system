import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { ROLES } from '../auth/roles';
import { ResourceResolver } from '../shared/resources/resource-resolver';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealPageComponent } from './meal-page/meal-page.component';

const routes: Routes = [
  {
    path: '',
    component: MealPageComponent,
  },
  {
    path: 'meals',
    canActivate: [AuthGuard, RoleGuard],
    component: MealListComponent,
    data: {
      roles: [ROLES.COOK, ROLES.USER_ADMIN],
    },
  },
  {
    path: ':id/detail',
    canActivate: [AuthGuard, RoleGuard],
    component: MealDetailComponent,
    runGuardsAndResolvers: 'always',
    resolve: { meal: ResourceResolver },
    data: {
      roles: [ROLES.COOK, ROLES.USER_ADMIN],
    },
  },
  {
    path: ':id/edit',
    canActivate: [AuthGuard, RoleGuard],
    component: MealFormComponent,
    resolve: { meal: ResourceResolver },
    data: {
      roles: [ROLES.COOK, ROLES.USER_ADMIN],
      action: 'edit',
    },
  },
  {
    path: 'create',
    canActivate: [AuthGuard, RoleGuard],
    component: MealFormComponent,
    resolve: { meal: ResourceResolver },
    data: {
      roles: [ROLES.COOK, ROLES.USER_ADMIN],
      action: 'create',
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
export class MealsRoutingModule { }
