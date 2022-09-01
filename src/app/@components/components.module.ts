/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';


import { NgxValidationMessageComponent } from './validation-message/validation-message.component';
import { NgxFilterByNumberComponent,} from './custom-smart-table-components/filter-by-number/filter-by-number.component';


import { DelegSubdelegSharedComponent } from './deleg-subdeleg-shared/deleg-subdeleg-shared.component';


const COMPONENTS = [
  NgxValidationMessageComponent,
  NgxFilterByNumberComponent, 
  DelegSubdelegSharedComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule,
    NgSelectModule
  ],
  exports: [...COMPONENTS, NgSelectModule],
  declarations: [...COMPONENTS,],
  entryComponents: [
    NgxFilterByNumberComponent,
  ],
})
export class ComponentsModule {
}
