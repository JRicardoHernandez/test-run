import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module'; 

import { SimDocRecepIntRoutingModule } from './sim-doc-recep-int-routing.module';
import { SimDocRecepIntDetailComponent } from './sim-doc-recep-int-detail/sim-doc-recep-int-detail.component';
import { SimDocRecepIntListComponent } from './sim-doc-recep-int-list/sim-doc-recep-int-list.component';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, } from '@nebular/theme';


@NgModule({
  declarations: [
    SimDocRecepIntDetailComponent,
    SimDocRecepIntListComponent
  ],
  imports: [
    CommonModule,
    SimDocRecepIntRoutingModule,
    ComponentsModule,
    NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule,
  ]
})
export class SimDocRecepIntModule { }
