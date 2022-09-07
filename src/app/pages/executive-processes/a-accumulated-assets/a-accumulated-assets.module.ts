import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule, NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgSelectModule } from '@ng-select/ng-select';

import { ComponentsModule } from '../../../@components/components.module';

import { AAccumulatedAssetsRoutingModule } from './a-accumulated-assets-routing.module';
import { AAccumulatedAssetsListComponent } from './a-accumulated-assets-list/a-accumulated-assets-list.component';




@NgModule({
  declarations: [
    AAccumulatedAssetsListComponent
  ],
  imports: [
    CommonModule,
    AAccumulatedAssetsRoutingModule,
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
    NgSelectModule
  ]
})
export class AAccumulatedAssetsModule { }
