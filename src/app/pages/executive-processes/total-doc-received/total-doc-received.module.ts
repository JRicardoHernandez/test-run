import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, NbSelectModule,} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';


import { TotalDocReceivedRoutingModule } from './total-doc-received-routing.module';
import { TotalDocReceivedDetailComponent } from './total-doc-received-detail/total-doc-received-detail.component';
import { TotalDocReceivedListComponent } from './total-doc-received-list/total-doc-received-list.component';


@NgModule({
  declarations: [
    TotalDocReceivedDetailComponent,
    TotalDocReceivedListComponent,
  ],
  imports: [
    CommonModule,
    TotalDocReceivedRoutingModule,
    ComponentsModule,
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule,
    NbDatepickerModule,
    NbSelectModule,
  ]
})
export class TotalDocReceivedModule { }
