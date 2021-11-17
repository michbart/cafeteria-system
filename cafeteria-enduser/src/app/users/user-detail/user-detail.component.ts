import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { AccessChecker } from 'src/app/auth/access-checker';

@Component({
  selector: 'cafeteria-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [],
})
export class UserDetailComponent implements OnInit {

  public user!: User;

  constructor(
    protected route: ActivatedRoute,
    private accessChecker: AccessChecker,
  ) { }

  get canDeleteUser(): boolean {
    return this.accessChecker.canAccessUsers();
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }

}
