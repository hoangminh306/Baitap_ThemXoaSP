import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtThemXoaComponent } from './bt-them-xoa.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [BtThemXoaComponent],
  exports:[BtThemXoaComponent],
  imports: [
    CommonModule, NgxPaginationModule
  ]
})
export class BtThemXoaModule { }
