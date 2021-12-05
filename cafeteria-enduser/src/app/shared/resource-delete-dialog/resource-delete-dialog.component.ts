import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cafeteria-resource-delete-dialog',
  templateUrl: './resource-delete-dialog.component.html',
  styleUrls: [],
})
export class ResourceDeleteDialogComponent {

  public dialogTitle = `Delete ${this.data.resourceType}`;

  constructor(
    public dialogRef: MatDialogRef<ResourceDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceType: string;
      resourceName: string;
    },
  ) { }

}
