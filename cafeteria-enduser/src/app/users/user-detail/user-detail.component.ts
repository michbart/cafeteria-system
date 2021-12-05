import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { AccessChecker } from 'src/app/auth/access-checker';
import { Observable } from 'rxjs';
import { ResourceDeleteDialogComponent } from 'src/app/shared/resource-delete-dialog/resource-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { SnackBar } from 'src/app/shared/snack-bar';

@Component({
  selector: 'cafeteria-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [],
})
export class UserDetailComponent implements OnInit {

  public user!: User;
  public resourceType = 'user';
  public pendingRequest: Observable<any>;
  // TODO FIXME name field should be based on app language
  public displayedColumns: string[] = ['name', 'date', 'cost'];
  public columnLabels: string[] = ['Name', 'Date', 'Cost'];

  constructor(
    protected route: ActivatedRoute,
    private accessChecker: AccessChecker,
    protected router: Router,
    protected dialog: MatDialog,
    protected resourceService: ResourceService<User>,
    protected snackBar: SnackBar,
  ) { }

  get canDeleteUser(): boolean {
    return this.accessChecker.canAccessUsers();
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user;
    });
  }

  openDeleteDialog() {
    this.resourceService.endpointName = 'users';
    const dialogRef = this.dialog.open(ResourceDeleteDialogComponent, {
      width: '600px',
      autoFocus: false,
      data: {
        resourceName: `${this.user.givenName} ${this.user.surname}`,
        resourceType: this.resourceType,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.pendingRequest = this.resourceService.deleteObject(this.user.id);
      this.pendingRequest.subscribe({
        next: () => this.router.navigate(['../../'], { relativeTo: this.route }).then(() => this.snackBar.createMessage('bz')),
        error: (e) => this.snackBar.createMessage('bz'),
      });
    });
  }

}
