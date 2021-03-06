import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { User } from '../user';
import { AccessChecker } from '../../auth/access-checker';
import { ResourceDeleteDialogComponent } from '../../shared/resource-delete-dialog/resource-delete-dialog.component';
import { ResourceService } from '../../shared/resources/resource-service';
import { SnackBar } from '../../shared/snack-bar';
import { environment } from '../../../environments/environment';
import { SecurityProvider } from '../../auth/security-provider';

@Component({
  selector: 'cafeteria-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [],
})
export class UserDetailComponent implements OnInit {

  public user!: User;
  public resourceType = 'user';
  public pendingRequest: Observable<any>;
  public displayedColumns: string[] = ['name', 'date', 'cost'];
  public columnLabels: string[] = [
    $localize `Name`,
    $localize `Date`,
    $localize `Cost`,
  ];
  public currency: string = environment.currency;

  constructor(
    protected route: ActivatedRoute,
    private accessChecker: AccessChecker,
    protected router: Router,
    protected dialog: MatDialog,
    protected resourceService: ResourceService<User>,
    protected snackBar: SnackBar,
    protected securityProvider: SecurityProvider,
  ) { }

  get canDeleteUser(): boolean {
    return this.accessChecker.canAccessUsers() && this.user.id !== this.securityProvider.getContext().id;
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.user = data.user.data;
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
        next: () => this.router.navigate(['../../'], { relativeTo: this.route }).then(() =>
          this.snackBar.createMessage($localize `User deleted successfully.`)),
        error: () => this.snackBar.createMessage($localize `Operation failed.`),
      });
    });
  }

}
