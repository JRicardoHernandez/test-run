import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { NbAutocompleteModule, 
  NbButtonModule, 
  NbCardModule, 
  NbInputModule, 
  NbThemeModule, 
  NbLayoutModule, 
  NbDatepickerModule, 
  NbCheckboxModule,
  NbRadioModule,
  NbActionsModule,
  NbUserModule,
  NbIconModule,  } from '@nebular/theme';

import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ComponentsModule } from '../../../@components/components.module';

import { MassAppValUpdRoutingModule } from './mass-app-val-upd-routing.module';
import { MassAppValUpdDetailComponent } from './mass-app-val-upd-detail/mass-app-val-upd-detail.component';
import { MassAppValUpdListComponent } from './mass-app-val-upd-list/mass-app-val-upd-list.component';


@NgModule({
  declarations: [
    MassAppValUpdDetailComponent,
    MassAppValUpdListComponent
  ],
  imports: [
    CommonModule,
    MassAppValUpdRoutingModule,
    ComponentsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAutocompleteModule, 
    NbButtonModule, 
    NbCardModule, 
    NbInputModule, 
    NbThemeModule, 
    NbLayoutModule, 
    NbDatepickerModule, 
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    Ng2SmartTableModule
  ]
})
export class MassAppValUpdModule { }
