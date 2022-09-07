import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { OpinionService } from '../../../../@core/backend/common/services/opinion.service';
import { Opinion } from '../../../../@core/interfaces/auction/opinion.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { OpinionDetailComponent } from '../opinion-detail/opinion-detail.component';

@Component({
  selector: 'ngx-opinion-list',
  templateUrl: './opinion-list.component.html',
  styleUrls: ['./opinion-list.component.scss']
})
export class OpinionListComponent extends BasePage {

  constructor(private service: OpinionService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl,  public sweetalertService: SweetalertService) {
    super(toastrService, sweetalertService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Opinion[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.read()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  searchForm:FormGroup;
 

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:0
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  rows: any;
  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: false,
    },
    pager : {
      display : false,
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
        title: 'Dictamenes',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      noRegistration: {
        title: 'Número de registro',
        type: 'number',
      },
      dict_ofi: {
        title: 'Dictamen_ofi',
        type: 'string',
      },
      areaProcess: {
        title: 'Área de proceso',
        type: 'string',
      }
      
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read();
  }

  read = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends:any) =>  {
      this.rows = legends.data;
      this.length = legends.count;
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

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.read()
  }

  onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning','Eliminar','¿Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              this.onLoadFailed('success','Dictamen eliminado correctamente', data.message);
              this.read();
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            }
          );
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
    this.windowService.open(OpinionDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read();
    });
  
  }

  openWindow() {
    this.windowService.open(OpinionDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read();
    });
    
  }
}
