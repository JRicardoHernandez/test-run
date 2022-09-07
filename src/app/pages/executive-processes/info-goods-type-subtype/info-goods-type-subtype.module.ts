import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { NgSelectModule } from '@ng-select/ng-select';

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


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { InfoGoodsTypeSubtypeRoutingModule } from './info-goods-type-subtype-routing.module';
import { InfoGoodsTypeSubtypeDetailComponent } from './info-goods-type-subtype-detail/info-goods-type-subtype-detail.component';
import { InfoGoodsTypeSubtypeListComponent } from './info-goods-type-subtype-list/info-goods-type-subtype-list.component';


@NgModule({
  declarations: [
    InfoGoodsTypeSubtypeDetailComponent,
    InfoGoodsTypeSubtypeListComponent
  ],
  imports: [
    CommonModule,
    InfoGoodsTypeSubtypeRoutingModule,
    ComponentsModule,
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
    Ng2SmartTableModule, NgSelectModule
  ],
  exports:[
    NgSelectModule
  ]
})
export class InfoGoodsTypeSubtypeModule { }
