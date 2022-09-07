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

import { DonationApprovalRoutingModule } from './donation-approval-routing.module';
import { DonationApprovalDetailComponent } from './donation-approval-detail/donation-approval-detail.component';
import { DonationApprovalListComponent } from './donation-approval-list/donation-approval-list.component';


@NgModule({
  declarations: [
    DonationApprovalDetailComponent,
    DonationApprovalListComponent
  ],
  imports: [
    CommonModule,
    DonationApprovalRoutingModule,
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
export class DonationApprovalModule { }
