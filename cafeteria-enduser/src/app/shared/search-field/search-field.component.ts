import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cafeteria-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: [],
})
export class SearchFieldComponent implements OnInit {

  @Output() changeParams$: EventEmitter<any>;

  public form: FormControl;

  constructor() {
    this.form = new FormControl('');
    this.changeParams$ = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((search: any) => {
      this.changeParams$.emit(search);
    });
  }

}
