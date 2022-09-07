import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface IColumns {
  id: string;
  name: string;
  show: boolean;
}

interface ISettings {
  columns: any;
}
@Component({
  selector: 'ngx-columns-select',
  templateUrl: './columns-select.component.html',
  styleUrls: ['./columns-select.component.scss']
})
export class ColumnsSelectComponent implements OnInit {
  @Input() settings: ISettings = { columns: {} };
  @Input() defaultColumns: number = 5
  @Output() settingsChange = new EventEmitter<any>();
  private allColumns: any = {};
  columns: IColumns[] = [];
  constructor() {}

  ngOnInit(): void {
    this.allColumns = Object.assign({}, this.settings.columns);
    this.buildColumnsSelect(this.defaultColumns);
  }

  private buildColumnsSelect(initial: number) {
    Object.keys(this.allColumns).forEach((e, i) => {
      this.allColumns[e].show = i < initial ? true : false;
      this.columns.push({
        id: e,
        name: this.allColumns[e].title,
        show: this.allColumns[e].show,
      });
    });
    this.filterColumns();
  }

  private filterColumns() {
    const columns = {};
    Object.keys(this.allColumns).forEach((e, i) => {
      if (this.allColumns[e].show) {
        columns[e] = this.allColumns[e];
      }
    });
    const settings = Object.assign({}, this.settings);
    settings.columns = columns;
    this.settingsChange.emit(settings);
  }

  change(field: string, value: boolean) {
    this.allColumns[field].show = value;
    this.filterColumns();
  }

  selectVal() {
    return this.columns.filter((_e) => _e.show);
  }

}
