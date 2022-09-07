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

import { ComponentsModule } from '../../../@components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DestructionAuthorizationRoutingModule } from './destruction-authorization-routing.module';
import { DestructionAuthorizationDetailComponent } from './destruction-authorization-detail/destruction-authorization-detail.component';
import { DestructionAuthorizationListComponent } from './destruction-authorization-list/destruction-authorization-list.component';




@NgModule({
  declarations: [
    DestructionAuthorizationDetailComponent,
    DestructionAuthorizationListComponent
  ],
  imports: [
    CommonModule,
    DestructionAuthorizationRoutingModule,
    ComponentsModule,
    FormsModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    RouterModule,
    NbThemeModule,
    NbButtonModule,
    NbCardModule, 
    NbInputModule, 
    NbAutocompleteModule, 
    NgSelectModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
  ]
})
export class DestructionAuthorizationModule { }
