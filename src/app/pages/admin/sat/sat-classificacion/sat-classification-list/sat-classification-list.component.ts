import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { SatClassificationService } from '../../../../../@core/backend/common/services/sat-classification.service';
import { SatClassification } from '../../../../../@core/interfaces/auction/sat-classification.model';
import { BasePage } from '../../../../../@core/shared/base-page';
import { SatClassificationDetailComponent } from '../sat-classification-detail/sat-classification-detail.component';

@Component({
  selector: 'ngx-sat-classification-list',
  templateUrl: './sat-classification-list.component.html',
  styleUrls: ['./sat-classification-list.component.scss']
})
export class SatClassificationListComponent extends BasePage {

  constructor(private service: SatClassificationService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:SatClassification[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readSatClassification()
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
      nombre_clasificacion: {
        title: 'Nombre Clasificacion',
        type: 'string',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readSatClassification();
  }

  readSatClassification = (() => {
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
    this.readSatClassification()
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
          this.readSatClassification();
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
    this.windowService.open(SatClassificationDetailComponent, { title: `Editar delegacion`, context: { SatClassification: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readSatClassification();
    });
  
  }

  openWindow() {
    this.windowService.open(SatClassificationDetailComponent, { title: `Nueva delegacion` }).onClose.subscribe(() => {
      this.readSatClassification();
    });
    
  }


}
