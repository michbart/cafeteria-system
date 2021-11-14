import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'cafeteria-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [],
})
export class UserDetailComponent implements OnInit {

  public user!: User;

  constructor(protected route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }

}
