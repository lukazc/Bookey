import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRepository } from './product.repo';
import { DataSource } from './data.source';
import { Cart } from '@app-data/cart/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ProductRepository, DataSource, Cart]
})
export class DataModule { }
