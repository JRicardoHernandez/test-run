import {
  Component,
  Injector,
  Input,
  ProviderToken,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { concat, Observable, of } from "rxjs";
import {
  catchError,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { BaseApp } from "../../@core/shared/base-app";

interface Searchable {
  search: (text: string) => Observable<any>;
}

@Component({
  selector: "ngx-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"],
})
export class SelectorComponent extends BaseApp {
  /** Columnas que se mostraran en la tabla */
  @Input() columns: Object = {};
  /** Titulo del modal */
  @Input() title: string = "";
  /** Servicio donde se realizara la busqueda */
  @Input() service: ProviderToken<Searchable>;
  /** Indica si se mostrara la barra de busqueda */
  @Input() showSearchBar: boolean = true;
  /** Indica si se mostraran los botones de aceptar y cancelar  */
  @Input() showButtons: boolean = true;
  /** Indica si se mostrara el boton de confirmar  */
  @Input() showConfirmButton: boolean = true;
  /** Indica si se mostrara el boton de cancelar  */
  @Input() showCancelButton: boolean = true;
  /** Registros de la tabla (async) */
  $data: Observable<any>;
  fn: any
  itemSelected: any = null;
  settings = {
    pager: {
      display: false,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,
    mode: "external",
    columns: {},
    noDataMessage: "No se encontrarón registros",
  };
  searchText: FormControl = new FormControl("");

  constructor(
    private ref: NbDialogRef<SelectorComponent>,
    private injector: Injector
  ) {
    super();
  }

  ngOnInit(): void {
    this.settings.columns = this.columns;
    this.loadData();
  }

  loadData() {
    this.$data = concat(
      this.fetchData(),
      this.searchText.valueChanges.pipe(
        distinctUntilChanged(),
        switchMap((value) =>
          this.fetchData(value).pipe(catchError(() => of([])))
        )
      )
    );
  }

  fetchData(filter: string = "") {
    return this.injector.get(this.service).search(filter);
  }

  close() {
    this.ref.close();
  }

  confirm() {
    this.ref.close(this.itemSelected);
  }

  onItemSelected(event: any) {
    this.itemSelected = event.isSelected ? event.data : null;
  }
}
