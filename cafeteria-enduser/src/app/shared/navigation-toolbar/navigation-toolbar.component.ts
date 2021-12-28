import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'cafeteria-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: [],
})
export class NavigationToolbarComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
