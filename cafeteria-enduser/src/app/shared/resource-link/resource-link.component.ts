import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cafeteria-resource-link',
  templateUrl: './resource-link.component.html',
  styleUrls: [],
})
export class ResourceLinkComponent implements OnChanges {
  @Input() linkText!: string;
  @Input() routeLink!: string;
  @Input() resourceId!: string;

  ngOnChanges(): void {
    this.routeLink = `${this.routeLink}/${encodeURIComponent(this.resourceId)}/detail`;
  }
}
