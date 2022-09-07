import { NgModule } from '@angular/core';   
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';

import { AssetsRecAdminRoutingModule } from './assets-rec-admin-routing.module';
import { AssetsRecAdminDetailComponent } from './assets-rec-admin-detail/assets-rec-admin-detail.component';
import { AssetsRecAdminListComponent } from './assets-rec-admin-list/assets-rec-admin-list.component';

@NgModule({
  declarations: [
    AssetsRecAdminDetailComponent,
    AssetsRecAdminListComponent
  ],
  imports: [
    CommonModule,
    AssetsRecAdminRoutingModule,
    ComponentsModule,
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NbDatepickerModule,
    NgSelectModule
  ]
})
export class AssetsRecAdminModule { }
