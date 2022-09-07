import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-mass-app-val-upd-list',
  templateUrl: './mass-app-val-upd-list.component.html',
  styleUrls: ['./mass-app-val-upd-list.component.scss']
})
export class MassAppValUpdListComponent {
  
  settings = {

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
      solicitante: {
        title: 'Solicitante',
        width: '25px'
      },
      fecavaluo: {
        title: 'Fecavaluo',
      },
      institucion: {
        title: 'institución',
      },
      perito: {
        title: 'Perito',
      },
      observ: {
        title: 'Pbserv',
      },
      nobien: {
        title: 'Nobien',
      },
      valoravaluo: {
        title: 'Valoravaluo',
      },
      moneda: {
        title: 'Moneda',
      },
    },
  };

  data = [
    {
      solicitante: "",
      fecavaluo: "",
      institucion: "",
      perito: "",
      observ: "",
      nobien: "",
      valoravaluo: "",
      moneda: "",
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
  
  */
}
