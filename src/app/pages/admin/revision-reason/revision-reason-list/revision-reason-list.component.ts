import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { RevisionReasonService } from '../../../../@core/backend/common/services/revision-reason.service';
import { RevisionReason } from '../../../../@core/interfaces/auction/revision-reason.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { RevisionReasonDetailComponent } from '../revision-reason-detail/revision-reason-detail.component';

@Component({
  selector: 'ngx-revision-reason-list',
  templateUrl: './revision-reason-list.component.html',
  styleUrls: ['./revision-reason-list.component.scss']
})
export class RevisionReasonListComponent extends BasePage{

  constructor(private service: RevisionReasonService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:RevisionReason[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readRevisionReason()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchForm:FormGroup

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
      delete: true,
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
      estatus_inicial: {
        title: 'Estado inicial',
        type: 'string',
      },
      descripcion_motivo: {
        title: 'Descripcion',
        type: 'string',
      },
      tipo_bien: {
        title: 'Tipo bien',
        type: 'string'
      },
      estatus_rev: {
        title: 'Estatus rev',
        type: 'string',
      },
      area_responsable: {
        title: 'Area responsable',
        type: 'string',
      },
      estatus_fin: {
        title: 'Estado Fin',
        type: 'string',
      },
      pantalla: {
        title: 'pantalla',
        type: 'number',
      },
      parametro: {
        title: 'Parametro',
        type: 'string',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readRevisionReason();
  }

  readRevisionReason = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends:any) =>  {
      this.rows = legends.data;
      this.length = legends.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readRevisionReason()
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
          this.readRevisionReason();
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
    this.windowService.open(RevisionReasonDetailComponent, { title: `Editar ciudad`, context: { RevisionReason: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readRevisionReason();
    });
  
  }

  openWindow() {
    this.windowService.open(RevisionReasonDetailComponent, { title: `Nueva ciudad` }).onClose.subscribe(() => {
      this.readRevisionReason();
    });
    
  }



}
