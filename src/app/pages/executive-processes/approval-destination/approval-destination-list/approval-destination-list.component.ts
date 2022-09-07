import { Component, OnInit } from '@angular/core';  
import { NbMenuService } from '@nebular/theme';

@Component({ 
  selector: 'ngx-approval-destination-list',
  templateUrl: './approval-destination-list.component.html',
  styleUrls: ['./approval-destination-list.component.scss']
})
export class ApprovalDestinationListComponent  {


  settings = {

    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
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
    
    /*
    */
    columns: {
      noBien: {
        title: 'No. Bien',
      },
      description: {
        title: 'Descripción',
      },
      ubiExact: {
        title: 'Ubicación Exacta',
      },
      direction: {
        title: '',
      },
      noOficio: {
        title: 'No. de Autorización',
      },
      fecha: {
        title: 'Fecha',
      },
    },
  };

  data = [
    {
      noBien: 1448,
      description: "CUARENTA Y DOS CHAMARRAS",
      ubiExact: "ALMACEN",
      direction: "PROLONGACIÓN MORELOS",
      noOficio: "DG/006/2004",
      fecha: "12/12/2005",
    },
    {
      noBien: 1449,
      description: "SETENTA Y DOS CELULARES",
      ubiExact: "ALMACEN",
      direction: "PROLONGACIÓN MORELOS",
      noOficio: "DG/006/2004",
      fecha: "12/12/2005",
      
    },
    {
      noBien: 1450,
      description: "CUARENTA Y TRES CABLES USB",
      ubiExact: "ALMACEN",
      direction: "PROLONGACIÓN MORELOS",
      noOficio: "DG/006/2004",
      fecha: "12/12/2005",
      
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
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}
