import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule, NbDatepickerModule, NbSelectModule,} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';

import { DailyRecFilesRoutingModule } from './daily-rec-files-routing.module';
import { DailyRecFilesDetailComponent } from './daily-rec-files-detail/daily-rec-files-detail.component';
import { DailyRecFilesListComponent } from './daily-rec-files-list/daily-rec-files-list.component';


@NgModule({
  declarations: [
    DailyRecFilesDetailComponent,
    DailyRecFilesListComponent
  ],
  imports: [
    CommonModule,
    DailyRecFilesRoutingModule,
    ComponentsModule,
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule,
    NbDatepickerModule,
    NbSelectModule,
  ]
})
export class DailyRecFilesModule { }
