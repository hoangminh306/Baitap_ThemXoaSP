import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BtThemXoaModule} from './bt-them-xoa/bt-them-xoa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BtThemXoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
