import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { NonDeliveryReasonsService } from '../../../../@core/backend/common/services/non-delivery-reasons.service';
import { NonDeliveryReasonsDetailComponent } from '../non-delivery-reasons-detail/non-delivery-reasons-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { NonDeliveryReasonsModel } from '../../../../@core/interfaces/auction/non-delivery-reasons.model';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'ngx-non-delivery-reasons-list',
  templateUrl: './non-delivery-reasons-list.component.html',
  styleUrls: ['./non-delivery-reasons-list.component.scss']
})
export class NonDeliveryReasonsListComponent extends BasePage {
  constructor(private service: NonDeliveryReasonsService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:NonDeliveryReasonsModel[])=>{
          this.length = rows.length;
          this.reasons = rows;
        })
      }else{
        this.readReasons()
      }
    })
  }

  searchForm:FormGroup;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:100
  };
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  reasons: any;
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
        title: 'Registro',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      reasonType: {
        title: 'Tipo de motivo',
        type: 'string',
        editable: true,
      },
      eventType: {
        title: 'Tipo de evento',
        type: 'string',
        editable: true,
      },
      reason: {
        title: 'Motivo',
        type: 'string',
        editable: true,
      },
      userCreation: {
        title: 'Creado por',
        type: 'string',
      },
      userModification: {
        title: 'Modificado por',
        type: 'string',
      },
      version: {
        title: 'Version',
        type: 'number',
      },
      status: {
        title: 'Estatus',
        type: 'html',
        valuePrepareFunction:(value) =>{
          if(value == 0){
            return '<strong><span class="badge badge-pill badge-success">Activo</span></strong>';
          }else{
            return '<strong><span class="badge badge-pill badge-warning">Inactivo</span></strong>';
          }
        }
      },
    },
    noDataMessage: "No se encontrarón registros"
  };
  ngOnInit(): void {
    this.readReasons();
  }

  readReasons = (() => {
    this.reasons = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((reasons:any) =>  {
      this.reasons = reasons.data;
      this.length = reasons.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readReasons()

  }

  onDeleteConfirm(event): void {
    Swal.fire({
      title: 'Esta seguro de eliminar el registro?',
      text: "Esta acción no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(event.data.id).subscribe(data =>{
          this.readReasons();
        },err =>{
          console.error(err);
        })
       
      }
    })
    
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(NonDeliveryReasonsDetailComponent, { title: `Editar motivo no entrega`, context: { reason: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readReasons();
    });
  
  }

  openWindowReason() {
    const modalRef = this.windowService.open(NonDeliveryReasonsDetailComponent, { title: `Nuevo motivo no entrega` }).onClose.subscribe(() => {
      this.readReasons();
    });
    
  }

}
