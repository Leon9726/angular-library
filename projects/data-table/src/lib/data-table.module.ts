import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { DataTableComponent } from './data-table.component';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
