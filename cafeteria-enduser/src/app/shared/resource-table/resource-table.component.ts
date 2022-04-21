import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Resource } from '../resources/resource';
import { ResourceService } from '../resources/resource-service';

@Component({
  selector: 'cafeteria-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.scss'],
})
export class ResourceTableComponent<T extends Resource> implements OnInit {

  @Input() columnLabels: string[];
  @Input() displayedColumns: string[];
  @Input() valueKeys: string[];
  @Input() sortField: string;
  @Input() sortDirection?: string;
  @Input() endpointName: string;
  @Input() routeLink?: string;
  @Input() linkField?: string;
  @Input() options?: any;

  public resourceDataSource: MatTableDataSource<T>;
  public itemCount!: number;

  constructor(protected resourceService: ResourceService<T>) { }

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.resourceDataSource){
      this.resourceDataSource.paginator = value;
    }
  }

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.resourceDataSource){
      this.resourceDataSource.sort = value;
    }
  }

  ngOnInit(): void {
    this.resourceService.endpointName = this.endpointName;
    this.resourceService.listObjects({
        ...this.options,
        sortDirection: this.sortDirection,
        sortField: this.sortField }).subscribe((response: any) => {
      this.itemCount = response?.data?.length;
      this.resourceDataSource = new MatTableDataSource<T>(response?.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.resourceDataSource.filter = filterValue.trim().toLowerCase();

    if (this.resourceDataSource.paginator) {
      this.resourceDataSource.paginator.firstPage();
    }
  }

}
