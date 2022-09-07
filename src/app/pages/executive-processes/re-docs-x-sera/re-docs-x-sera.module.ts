import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';

import { ReDocsXSERARoutingModule } from './re-docs-x-sera-routing.module';
import { ReDocsXSeraDetailComponent } from './re-docs-x-sera-detail/re-docs-x-sera-detail.component';
import { ReDocsXSeraListComponent } from './re-docs-x-sera-list/re-docs-x-sera-list.component';


@NgModule({
  declarations: [
    ReDocsXSeraDetailComponent,
    ReDocsXSeraListComponent
  ],
  imports: [
    CommonModule,
    ReDocsXSERARoutingModule,
    ComponentsModule,
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule,
    NbDatepickerModule,
  ]
})
export class ReDocsXSERAModule { }
