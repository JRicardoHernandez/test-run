import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'ngx-request-to-turn',
  templateUrl: './request-to-turn.component.html',
  styleUrls: ['./request-to-turn.component.scss']
})
export class RequestToTurnComponent implements OnInit {

  constructor(
    private paginator: MatPaginatorIntl

  ) { 
    this.paginator.itemsPerPageLabel = "Registros por página";

  }
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:100
  };

  rows: any;
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
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
      confirmDelete: false,
    },
    columns: {
      check: {
        title: '',
        type: 'checkbox'
      },
      bankCode: {
        title: 'No. Solicitud',
        type: 'string'
      },
      name: {
        title: 'Fecha solicitud',
        type: 'string',
      },
      registerNumber: {
        title: 'Nombre titular',
        type: 'number'
      },
      ifdsc: {
        title: 'Cargo del remitente',
        type: 'string'
      },
      dateType: {
        title: 'No. oficio',
        type: 'number',
      },
      code: {
        title: 'Fecha de oficio',
        type: 'number',
      },
      code1: {
        title: 'Delegacion regional',
        type: 'number',
      },
      state: {
        title: 'Estado',
        type: 'number',
      },
      tranferente: {
        title: 'Transferente',
        type: 'number',
      },
      Emisora: {
        title: 'Emisora',
        type: 'number',
      },
      Autoridad: {
        title: 'Autoridad',
        type: 'number',
      },
      Ex: {
        title: 'Expediente transferente',
        type: 'number',
      },
      via:{
        title:'Via recepción',
        type:'string'
      },
      asunto:{
        title:"Asunto",
        type:'string'
      }

    },
    noDataMessage: "No se encontrarón registros"
  };

  
  changesPage (event){
  }

  ngOnInit(): void {
  }

}
