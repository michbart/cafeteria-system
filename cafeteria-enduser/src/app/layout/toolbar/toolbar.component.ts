import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityProvider } from 'src/app/auth/security-provider';
import { AccessChecker } from 'src/app/auth/access-checker';
import { User } from 'src/app/users/user';

@Component({
  selector: 'cafeteria-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  public loggedUser?: User;

  constructor(
    private router: Router,
    private securityProvider: SecurityProvider,
    private accessChecker: AccessChecker,
  ) {
    this.loggedUser = securityProvider.getContext();
  }

  get displayUsersButton(): boolean {
    return this.accessChecker.canAccessUsers();
  }

  get displayMealsButton(): boolean {
    return this.accessChecker.canAccessMeals();
  }

  get userAccountLink() {
    return `/users/${encodeURIComponent(this.loggedUser.id)}/detail`;
  }

  ngOnInit(): void {
    this.securityProvider.authChange.subscribe(() => {
      this.loggedUser = this.securityProvider.getContext();
    });
  }

  login(): void {
    this.router.navigate(['./login']);
  }

  logout(): void {
    this.securityProvider.logout();
    this.router.navigate(['/']);
  }

}
