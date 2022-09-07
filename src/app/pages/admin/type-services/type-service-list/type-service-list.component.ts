import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import { SweetAlertResult } from 'sweetalert2';
import { TypeServicesService } from '../../../../@core/backend/common/services/type-services.service';
import { ZoneGeographicService } from '../../../../@core/backend/common/services/zone-geographic.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { ZoneGeographicInterface } from '../../../../@core/interfaces/auction/zone-geographic.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { ZoneGeographicDetailComponent } from '../../zone-geographic/zone-geographic-detail/zone-geographic-detail.component';
import { TypeServiceDetailComponent } from '../type-service-detail/type-service-detail.component';

@Component({
  selector: 'ngx-type-service-list',
  templateUrl: './type-service-list.component.html',
  styleUrls: ['./type-service-list.component.scss']
})
export class TypeServiceListComponent extends BasePage {

  searchForm: FormGroup;

  constructor(private service: TypeServicesService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl,
    public sweetalertService: SweetalertService) {
    super(toastrService,sweetalertService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:ZoneGeographicInterface[])=>{
          this.length = rows.length;
          this.list = rows;
        })
      }else{
        this.read(0,10);
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 100
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  list: any;
  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: false,
    },
    pager: {
      display: false,
    },
    hideSubHeader: true,//oculta subheaader de filtro
    mode: 'external', // ventana externa
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID tipo registro',
        type: 'number',
      },
      type: {
        title: 'Tipo de servicio',
        type: 'string',
      },
      concept: {
        title: 'Concepto de servicio',
        type: 'string',
      },
      version: {
        title: 'Versión',
        type: 'number',
      }

    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read(0, 10);
  }

  read = ((pageIndex: number, pageSize: number) => {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe(
      (dt: any) => {        
        this.list = dt.data;
        this.length = dt.count;
      },
      err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }
    );

  });

  changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', '¿Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {          
          this.service.delete(event.data.id).subscribe(
            data => {
              this.onLoadFailed('success','Tipo servicio eliminada correctamente', data.message);
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            });
        }
      }
    ).catch(
      e => {
        console.error(e);
      }
    ).finally(
      () => {
      }
    );
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(TypeServiceDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  openWindow() {
    const modalRef = this.windowService.open(TypeServiceDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
}
