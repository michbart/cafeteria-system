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
  // TODO FIXME name field should be based on app language
  public displayedColumns: string[] = ['name', 'date', 'cost'];
  public columnLabels: string[] = ['Name', 'Date', 'Cost'];

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
