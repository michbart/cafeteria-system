import { Component, Input } from '@angular/core';

@Component({
  selector: 'cafeteria-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  @Input() version: string;

}
