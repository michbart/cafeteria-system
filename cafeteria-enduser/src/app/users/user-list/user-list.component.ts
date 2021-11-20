import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { MatSort, MatSortable } from '@angular/material/sort';
import { ResourceService } from 'src/app/shared/resources/resource-service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cafeteria-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [],
})
export class UserListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public resourceDataSource: MatTableDataSource<User>;
  public columns = ['username', 'givenName', 'surname', 'roles'];
  public userCount!: number;
  private sortParams: any;
  private paginationParams: any;
  private filterParams: any;

  constructor(protected resourceService: ResourceService<User>) {
    this.resourceDataSource = new MatTableDataSource();
    this.resourceDataSource.sort = this.sort;
    this.resourceService.endpointName = 'users';
  }

  ngOnInit(): void {
    this.sort.sort(({ id: 'username', start: 'asc' }) as MatSortable);
  }

  onSortChange(sortParams: any): void {
    this.sortParams = { sortField: sortParams.active, sortDirection: sortParams.direction };
    this.getData();
  }

  onPaginationChange(): void {
    this.paginationParams = { page: this.paginator?.pageIndex, size: this.paginator?.pageSize };
    this.getData();
  }

  onFilterChange(filterParams: { searchValue: string }): void {
    this.filterParams = filterParams;
    this.getData();
  }

  getData(): void {
    const params = { ...this.sortParams, ...this.paginationParams, ...this.filterParams };
    this.resourceService.listObjects(params).subscribe((response: any) => {
      this.userCount = response?.length;
      this.updateTableDataSource(response);
    });
  }

  updateTableDataSource(resourceObjects: User[]) {
    this.resourceDataSource.connect().next(resourceObjects);
  }
}
