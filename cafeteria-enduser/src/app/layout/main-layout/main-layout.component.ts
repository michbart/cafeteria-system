import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/users/user';
import { Router } from '@angular/router';
import { SecurityProvider } from 'src/app/auth/security-provider';
import { AccessChecker } from 'src/app/auth/access-checker';

@Component({
  selector: 'cafeteria-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('sidenav') sideNav: any;

  public version: string;
  public loggedUser?: User;

  constructor(
    private router: Router,
    private securityProvider: SecurityProvider,
    private accessChecker: AccessChecker,
  ) {
    this.loggedUser = securityProvider.getContext();
    this.version = environment.version;
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
    this.sideNav.close();
    this.router.navigate(['/']);
  }
}
