import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../@components/components.module';

import { NgSelectModule } from '@ng-select/ng-select';

import { ExecutiveProcessesRoutingModule, routedComponents } from './executive-processes-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
//import { OfficialLegendsListComponent } from './legends/official-legends-list/official-legends-list.component';
//import { ParagraphsComponent } from './paragraphs/paragraphs.component';
//import { GoodsModule } from './goods/goods.module';
//import { UserModule } from './user/user.module';
//import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({ 
  declarations: [ 
    ...routedComponents, 
    
  ],
  imports: [
    CommonModule,
    ExecutiveProcessesRoutingModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule, NgSelectModule
  ],
  exports:[
    
    ComponentsModule, NgSelectModule
    
  ]
})
export class ExecutiveProcessesModule { }
