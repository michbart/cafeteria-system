import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBar {
  constructor(private snackBar: MatSnackBar) { }

  createMessage(message: string) {
    this.snackBar.open(message);
  }
}
