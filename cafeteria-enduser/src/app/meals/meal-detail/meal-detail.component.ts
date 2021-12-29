import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceDeleteDialogComponent } from 'src/app/shared/resource-delete-dialog/resource-delete-dialog.component';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { SnackBar } from 'src/app/shared/snack-bar';
import { ALERGENS } from '../alergens';
import { Meal } from '../meal';
import { getCurrentLocale } from 'src/app/shared/get-locale';

@Component({
  selector: 'cafeteria-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: [],
})
export class MealDetailComponent implements OnInit {

  public meal: Meal;
  public alergens: any[];
  public pendingRequest: Observable<any>;
  public resourceType = 'meal';
  public currentLocale: string;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected dialog: MatDialog,
    protected resourceService: ResourceService<Meal>,
    protected snackBar: SnackBar,
    @Inject(LOCALE_ID) private localeId: string
    ) {
      this.currentLocale = getCurrentLocale(this.localeId);
    }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.meal = data.meal;
      this.alergens = ALERGENS.filter(alergen => this.meal.alergens?.includes(alergen.key)).sort((a, b) => a > b ? -1 : 1);
    });
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(ResourceDeleteDialogComponent, {
      width: '600px',
      autoFocus: false,
      data: {
        resourceName: this.meal.name,
        resourceType: this.resourceType,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.pendingRequest = this.resourceService.deleteObject(this.meal.id);
      this.pendingRequest.subscribe({
        next: () => this.router.navigate(['../../'], { relativeTo: this.route }).then(() =>
          this.snackBar.createMessage($localize `Meal deleted successfully.`)),
        error: () => this.snackBar.createMessage($localize `Operation failed.`),
      });
    });
  }

}
