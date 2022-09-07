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

import { ApprovalDestinationRoutingModule } from './approval-destination-routing.module';
import { ApprovalDestinationDetailComponent } from './approval-destination-detail/approval-destination-detail.component';
import { ApprovalDestinationListComponent } from './approval-destination-list/approval-destination-list.component';


@NgModule({
  declarations: [
    ApprovalDestinationDetailComponent,
    ApprovalDestinationListComponent
  ],
  imports: [
    CommonModule,
    ApprovalDestinationRoutingModule,
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
export class ApprovalDestinationModule { }
