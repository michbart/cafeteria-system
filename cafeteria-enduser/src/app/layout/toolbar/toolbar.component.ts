import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cafeteria-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router) { }
}
