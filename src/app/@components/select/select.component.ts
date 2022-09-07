import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { DefaultSelect } from './detault-select';
import { ISelectParams } from './select-params';

@Component({
  selector: 'ngx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string = "";
  @Input() value: string = "";
  @Input() label: string = "";
  @Input() data = new DefaultSelect();
  @Output() fetchItems = new EventEmitter<ISelectParams>();
  @Output() change = new EventEmitter<any>()
  buffer = [];
  loading = false;
  input$ = new Subject<string>();
  page: number = 1;
  totalItems: number = 0;
  private concat: boolean = false;
  constructor() { }

  ngOnInit() {
    this.onSearch();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes?.data?.currentValue.length === 0) {
      this.buffer = []
    }else if (changes.data && this.concat) {
      this.buffer = [...this.buffer, ...this.data.data];
    } else {
      this.buffer = this.data.data;
      this.totalItems = this.data.count;
    }
    this.loading = false;
  }

  fetchMore(term) {
    if (!this.loading && this.buffer.length < this.totalItems) {
      this.page++;
      this.loading = true;
      this.concat = true;
      this.fetchItems.emit({
        page: this.page,
        term,
      });
    }
  }

  onSearch() {
    this.input$
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((term) => {
          this.page = 1;
          this.buffer = [];
          this.loading = true;
          this.concat = false;
          this.fetchItems.emit({
            page: this.page,
            term,
          });
          return of([]);
        })
      )
      .subscribe((data: any) => {});
  }
  onChange(event: any) {
    this.change.emit(event)
  }

}
