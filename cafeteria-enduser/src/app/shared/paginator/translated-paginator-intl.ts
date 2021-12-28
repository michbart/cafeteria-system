import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class TranslatedPaginatorIntl extends MatPaginatorIntl {

  private rangeConjunction: string;

  constructor() {
    super();
    this.rangeConjunction = $localize `of`;
    this.itemsPerPageLabel = $localize `Items per page:`;
  }

  getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0) {
      return `0 ${this.rangeConjunction} ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${this.rangeConjunction} ${length}`;
  };
}
