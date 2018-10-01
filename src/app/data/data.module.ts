import { NgModule } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';
import { DataSource } from '@app-data/data.source';
import { ProductRepository } from '@app-data/product.repo';
import { Order } from '@app-data/order.model';
import { OrderRepository } from '@app-data/order.repo';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductRepository, DataSource, Cart, Order, OrderRepository]
})
export class DataModule { }
