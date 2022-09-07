import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { SatSaeClassificationService } from '../../../../@core/backend/common/services/satsae-classification.service';
import { SatSaeClassification } from '../../../../@core/interfaces/auction/satsae-classification.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SatsaeClassificationDetailComponent } from '../satsae-classification-detail/satsae-classification-detail.component';

@Component({
  selector: 'ngx-satsae-classification-list',
  templateUrl: './satsae-classification-list.component.html',
  styleUrls: ['./satsae-classification-list.component.scss']
})
export class SatsaeClassificationListComponent extends BasePage{

  constructor(private service: SatSaeClassificationService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:SatSaeClassification[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readSatSaeClassification()
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
      certificateDesc: {
        title: 'Partida Desc',
        type: 'string',
      },
      noClasifGoods: {
        title: 'Clasificacion Bien',
        type: 'string',
      },
      type: {
        title: 'Tipo',
        type: 'string'
      },
      typeDesc: {
        title: 'Descripcion tipo',
        type: 'string',
      },
      chapter: {
        title: 'Capitulo',
        type: 'string',
      },
      chapterDesc: {
        title: 'Descripcion capitulo',
        type: 'string',
      },
      perishable: {
        title: 'perecedero',
        type: 'number',
      },
      unitMeasurement1: {
        title: 'unidad_medida1',
        type: 'string',
      }
      ,
      unitMeasurement2: {
        title: 'unidad_medida2',
        type: 'string',
      }
      ,
      unitMeasurement3: {
        title: 'unidad_medida3',
        type: 'string',
      },
      transferable: {
        title: 'transferible',
        type: 'string',
      }
      
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readSatSaeClassification();
  }

  readSatSaeClassification = (() => {
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
    this.readSatSaeClassification()
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
          this.readSatSaeClassification();
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
    this.windowService.open(SatsaeClassificationDetailComponent, { title: `Editar clasificación sae`, context: { SatSaeClassification: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readSatSaeClassification();
    });
  
  }

  openWindow() {
    this.windowService.open(SatsaeClassificationDetailComponent, { title: `Nueva clasificación sae` }).onClose.subscribe(() => {
      this.readSatSaeClassification();
    });
    
  }

}
