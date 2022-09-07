import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { IndicatorReportService } from '../../../../@core/backend/common/services/Indicator-report.service';
import { IndicatorReport } from '../../../../@core/interfaces/auction/indicator-report';
import { BasePage } from '../../../../@core/shared/base-page';
import { IndicatorReportDetailComponent } from '../indicator-report-detail/indicator-report-detail.component';

@Component({
  selector: 'ngx-indicator-report-list',
  templateUrl: './indicator-report-list.component.html',
  styleUrls: ['./indicator-report-list.component.scss']
})
export class IndicatorReportListComponent extends BasePage {


  constructor(
    private service: IndicatorReportService, 
    public toastrService: NbToastrService,
    private windowService: NbWindowService, 
    private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:IndicatorReport[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readIndicatorReport()
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

      tipo_servicio: {
        title: 'Tipo Servicio',
        type: 'string',
      },
      no_contrato: {
        title: 'No Contrato',
        type: 'string',
      },
      rango_porcentaje_inicial: {
        title: 'Rango Porcentaje Inicial',
        type: 'number',
      },
      rango_porcentaje_final: {
        title: 'Rango Porcentaje Final',
        type: 'number',
      },
      pena_convencional: {
        title: 'Pena Convencional',
        type: 'number',
      },
      estatus:{
        title:'Estatus',
        type:'number'
      },
      version:{
        title:'Version',
        type:'number'
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readIndicatorReport();
  }

  readIndicatorReport = (() => {
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
    this.readIndicatorReport()
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
          this.readIndicatorReport();
        },err =>{
          console.log(err);
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
    this.windowService.open(IndicatorReportDetailComponent, { title: `Editar Indicador`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readIndicatorReport();
    });
  
  }

  openWindow() {
    this.windowService.open(IndicatorReportDetailComponent, { title: `Nuevo Indicador` }).onClose.subscribe(() => {
      this.readIndicatorReport();
    });
    
  }


}
