import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DataModule } from '../../data/data.module';

import { StoreComponent } from './store.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, DataModule
  ],
  declarations: [ StoreComponent ],
  exports: [ StoreComponent ]
})
export class StoreModule { }
