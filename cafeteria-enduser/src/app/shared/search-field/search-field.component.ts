import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cafeteria-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: [],
})
export class SearchFieldComponent implements OnInit {

  @Input() source: string;
  @Output() changeParams: EventEmitter<any>;

  public form: FormControl;
  private searchParams: any = {};

  constructor() {
    this.form = new FormControl('');
    this.changeParams = new EventEmitter();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((search: any) => {
      this.searchParams[this.source] = search;
      this.changeParams.emit(this.searchParams);
    });
  }

}
