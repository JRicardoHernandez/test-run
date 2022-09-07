import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule, NbDatepickerModule, NbRadioModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgSelectModule } from '@ng-select/ng-select';

import { DestructionAuthManagementRoutingModule } from './destruction-auth-management-routing.module';
import { DestructionAuthManagementDetailComponent } from './destruction-auth-management-detail/destruction-auth-management-detail.component';
import { DestructionAuthManagementListComponent } from './destruction-auth-management-list/destruction-auth-management-list.component'; 


@NgModule({
  declarations: [
    DestructionAuthManagementDetailComponent,
    DestructionAuthManagementListComponent
  ],
  imports: [
    CommonModule,
    DestructionAuthManagementRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    NbDatepickerModule,
    NgSelectModule,
    NbRadioModule
  ]

})
export class DestructionAuthManagementModule { }
