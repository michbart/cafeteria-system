import { SecurityProvider } from './security-provider';
import { ROLES } from './roles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessChecker {

  constructor(protected securityResolver: SecurityProvider) { }

  canAccessUsers(): boolean {
    return this.hasRole([ROLES.USER_ADMIN]);
  }

  canAccessDishes(): boolean {
    return this.hasRole([ROLES.USER_ADMIN, ROLES.COOK]);
  }

  hasRole(roles: string[]) {
    const context = this.securityResolver.getContext();
    const userRoles = context?.roles || [];
    return roles.some(role => userRoles.includes(role));
  }
}
