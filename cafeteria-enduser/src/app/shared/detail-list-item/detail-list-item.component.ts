import { Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'cafeteria-detail-list-item',
  templateUrl: './detail-list-item.component.html',
  styleUrls: [],
})
export class DetailListItemComponent {
  @Input() label!: string;
  @Input() value!: string;

  isValidDate(): boolean {
    return dayjs(this.value).isValid();
  }
}
