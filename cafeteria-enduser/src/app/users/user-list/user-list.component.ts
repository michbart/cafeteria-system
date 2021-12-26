import { Component } from '@angular/core';

@Component({
  selector: 'cafeteria-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [],
})
export class UserListComponent {

  public displayedColumns = ['username', 'givenName', 'surname', 'roles'];
  public columnLabels = [
    $localize `Username`,
    $localize `Given name`,
    $localize `Surname`,
    $localize `Roles`,
  ];

}
