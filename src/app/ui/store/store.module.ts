import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from '@app-ui/material.design.module';

import { DataModule } from '@app-data/data.module';

import { StoreComponent } from './store.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, MaterialDesignModule, DataModule
  ],
  declarations: [ StoreComponent ],
  exports: [ StoreComponent ]
})
export class StoreModule { }
