/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { NgxValidationMessageComponent } from './validation-message/validation-message.component';

import { DelegSubdelegSharedComponent } from './deleg-subdeleg-shared/deleg-subdeleg-shared.component';
import { FileNumberSharedComponent } from './file-number-shared/file-number-shared.component';

import { NgxFilterByNumberComponent } from './custom-smart-table-components/filter-by-number/filter-by-number.component';
import { SelectorComponent } from './selector/selector.component';
import { NbButtonModule, NbCardModule, 
  NbCheckboxModule, NbDialogModule, 
  NbFormFieldModule, NbIconModule, 
  NbInputModule, NbSelectModule, 
  NbAutocompleteModule, NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectComponent } from './select/select.component';
import { ColumnsSelectComponent } from './columns-select/columns-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GoodsTypesFormComponent } from './goods-types-form/goods-types-form.component';
import { DestinationAreaSharedComponent } from './destination-area-shared/destination-area-shared.component';
import { NoBienSharedComponent } from './no-bien-shared/no-bien-shared.component';
import { StateCoordinationSharedComponent } from './state-coordination-shared/state-coordination-shared.component';
import { TypesSharedComponent } from './types-shared/types-shared.component';
import { NoVolanteSharedComponent } from './no-volante-shared/no-volante-shared.component';
import { RequestProficientSharedComponent } from './request-proficient-shared/request-proficient-shared.component';



const COMPONENTS = [
  NgxValidationMessageComponent,
  NgxFilterByNumberComponent,
  SelectorComponent, 
  SelectComponent, 
  ColumnsSelectComponent,
  GoodsTypesFormComponent,
  DelegSubdelegSharedComponent,
  FileNumberSharedComponent,
  DestinationAreaSharedComponent,
  NoBienSharedComponent,
  StateCoordinationSharedComponent,
  TypesSharedComponent,
  NoVolanteSharedComponent, 
  RequestProficientSharedComponent
  
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule,
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbFormFieldModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
    NgSelectModule,
    NbIconModule,
    NbSelectModule,
    NbCheckboxModule, 
    NbDatepickerModule
  ],
  exports: [...COMPONENTS, NgSelectModule],
  declarations: [...COMPONENTS],
  entryComponents: [
    NgxFilterByNumberComponent,
  ],
})
export class ComponentsModule {
}
