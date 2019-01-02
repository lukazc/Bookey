import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Order } from '@app-data/order.model';
import { Product } from '@app-data/product.model';

import * as data from '@app-data/mock/data.js';

@Injectable()
export class DataStaticSource {

    private products: Product[];
    private orders: Order[];

    constructor() {
        this.products = data().products;
        this.orders = data().orders;
    }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    saveOrder(order: Order): Observable<Order> {
        this.orders.push(order);
        return of(order);
    }
}
