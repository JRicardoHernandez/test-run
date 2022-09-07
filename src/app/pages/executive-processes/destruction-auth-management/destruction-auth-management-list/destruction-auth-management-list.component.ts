import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-destruction-auth-management-list',
  templateUrl: './destruction-auth-management-list.component.html',
  styleUrls: ['./destruction-auth-management-list.component.scss']
})
export class DestructionAuthManagementListComponent  {


  tableActRecSettings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,//oculta subheaader de filtro
    mode: 'external', // ventana externa

    columns: {
      actasRecepcion: {
        title: 'Actas de Recepción',
      },
    },
  };

  dataActRec = [
    {
      actasRecepcion: "RT/AGA/ADM/DRBC/00254/17/12",
    },
    {
      actasRecepcion: "RT/AGA/ADM/DRBC/00232/17/12",
    },
    {
      actasRecepcion: "RT/AGA/ADM/TIJ/TIJ/02320/11/10",
    },

  ];

  tableDictamSettings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
    },
    hideSubHeader: true,//oculta subheaader de filtro
    mode: 'external', // ventana externa

    columns: {
      actasRecepcion: {
        title: 'Dictaminaciones',
      },
    },
  };

  dataDictam = [
    {
      actasRecepcion: "DCCR/DECRO/DRBC/ATJRBC/00001/2018",
    },
    {
      actasRecepcion: "DCCR/DECRO/DRBC/ATJRBC/00002/2018",
    },
    {
      actasRecepcion: "DCCR/DECRO/DRBC/ATJRBC/00003/2018",
    },

  ];

  
  
  tableNoBienSettings = {

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
      noBien: {
        title: 'No. Bien',
        width: '25px'
      },
      descripcion: {
        title: 'Descripción',
      },
      cantidad: {
        title: 'Cantidad',
      },
      ofsol: {
        title: 'Of. Sol.'
      },
    },
  };

  dataNoBien = [
    {
      noBien: 85431,
      descripcion: "ROLLO DE PIEL DE LAGARTO",
      cantidad: 1,
      ofsol: "DCCR/DECRO/DRBC/ATJRBC/00001/2018"
    },

    {
      noBien: 3051053,
      descripcion: "DISCOS EN FORMATO CD Y DVD",
      cantidad: 98,
      ofsol: "DCCR/DECRO/DRBC/ATJRBC/00002/2018"
    },

    {
      noBien: 3301787,
      descripcion: "EXHIBIDOR PUBLICITARIO",
      cantidad: 12,
      ofsol: "DCCR/DECRO/DRBC/ATJRBC/00003/2018"
    },
  ];

  /*
  Traer datos del template nebular
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }
  */

  onDeleteConfirm(event): void {
    if (window.confirm('¿Seguro que quieres eliminar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';



  

  /*
  Traer datos del template nebular
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }
  */


}
