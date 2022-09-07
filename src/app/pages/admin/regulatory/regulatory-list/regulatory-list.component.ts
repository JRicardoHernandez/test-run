import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { RegulatoryService } from '../../../../@core/backend/common/services/regulatory.service';
import { RegulatoryInterface } from '../../../../@core/interfaces/auction/regulatory.model';
import { RegulatoryDetailComponent } from '../regulatory-detail/regulatory-detail.component';


@Component({
  selector: 'ngx-regulatory-list',
  templateUrl: './regulatory-list.component.html',
  styleUrls: ['./regulatory-list.component.scss']
})

export class RegulatoryListComponent extends BasePage {
  constructor(private service: RegulatoryService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:RegulatoryInterface[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readRegulatory()
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
        title: 'Id',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      id_fraccion: {
        title: 'ID Fracción',
        type: 'number',
      },
      numero: {
        title: 'Número',
        type: 'string',
      },
      descripcion: {
        title: 'Descripción',
        type: 'string',
      },
      validar_ef: {
        title: 'EF',
        type: 'string',
      },
      validar_ec: {
        title: 'EC',
        type: 'string',
      }
    },
    noDataMessage: "No se encontraron registros"
  };

  ngOnInit(): void {
    this.readRegulatory();
  }

  readRegulatory = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((regulatory:any) =>  {
      this.rows = regulatory.data;
      this.length = regulatory.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readRegulatory()
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
          this.readRegulatory();
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
    this.windowService.open(RegulatoryDetailComponent, { title: `Editar regulación`, context: { regulatory: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readRegulatory();
    });
  
  }

  openWindow() {
    this.windowService.open(RegulatoryDetailComponent, { title: `Nueva regulación` }).onClose.subscribe(() => {
      this.readRegulatory();
    });
    
  }


}
