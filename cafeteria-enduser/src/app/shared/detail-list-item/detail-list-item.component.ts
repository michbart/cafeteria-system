import { Component, Input } from '@angular/core';

@Component({
  selector: 'cafeteria-detail-list-item',
  templateUrl: './detail-list-item.component.html',
  styleUrls: [],
})
export class DetailListItemComponent {
  @Input() label!: string;
  @Input() value!: string;
}
