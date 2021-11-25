import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Resource } from '../resources/resource';
import { ResourceService } from '../resources/resource-service';

@Component({
  selector: 'cafeteria-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: [],
})
export class ResourceTableComponent<T extends Resource> implements AfterViewInit, OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() columnLabels: string[];
  @Input() displayedColumns: string[];
  @Input() valueKeys: string[];
  @Input() sortField: string;
  @Input() sortDirection?: string;
  @Input() endpointName: string;
  @Input() routeLink?: string;
  @Input() linkField?: string;
  @Input() resource?: T;

  public resourceDataSource: MatTableDataSource<T>;
  public itemCount!: number;

  constructor(protected resourceService: ResourceService<T>, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.resourceService.endpointName = this.endpointName;
    this.resourceService.listObjects({ id: this.resource?.id }).subscribe((response: any) => {
      this.itemCount = response?.length;
      this.resourceDataSource = new MatTableDataSource<T>(response);
    });
  }

  ngAfterViewInit(): void {
    this.resourceDataSource.paginator = this.paginator;
    this.resourceDataSource.sort = this.sort;
    this.sort.sort(({ id: this.sortField, start: this.sortDirection ||'asc' }) as MatSortable);
    this.changeDetector.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.resourceDataSource.filter = filterValue.trim().toLowerCase();

    if (this.resourceDataSource.paginator) {
      this.resourceDataSource.paginator.firstPage();
    }
  }

}
