import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRepository } from './product.repo';
import { DataSource } from './data.source';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProductRepository, DataSource]
})
export class DataModule { }
