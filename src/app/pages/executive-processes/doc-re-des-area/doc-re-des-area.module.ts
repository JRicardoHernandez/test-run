import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, NbSelectModule,} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';


import { DocReDesAreaRoutingModule } from './doc-re-des-area-routing.module';
import { DocReDesAreaDetailComponent } from './doc-re-des-area-detail/doc-re-des-area-detail.component';
import { DocReDesAreaListComponent } from './doc-re-des-area-list/doc-re-des-area-list.component';


@NgModule({
  declarations: [
    DocReDesAreaDetailComponent,
    DocReDesAreaListComponent
  ],
  imports: [
    CommonModule,
    DocReDesAreaRoutingModule,
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
export class DocReDesAreaModule { }
