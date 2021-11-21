import { Component } from '@angular/core';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { Order } from '../order';

@Component({
  selector: 'cafeteria-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: [],
})
export class OrderListComponent {
  constructor(protected service: ResourceService<Order>) { }
}
